const { Plugin, TFile } = require("obsidian");

const root = "05. People & Resources";
const databases = [
  {
    databasePath: `${root}/Tools & Software/Tools Database.md`,
    entriesPath: `${root}/Tools & Software/Entries/`,
    marker: "tools-index",
  },
  {
    databasePath: `${root}/Companies/Companies Database.md`,
    entriesPath: `${root}/Companies/Entries/`,
    marker: "companies-index",
  },
  {
    databasePath: `${root}/People/People Database.md`,
    entriesPath: `${root}/People/Entries/`,
    marker: "people-index",
  },
  {
    databasePath: `${root}/Books & Articles/Books & Articles Database.md`,
    entriesPath: `${root}/Books & Articles/Entries/`,
    marker: "resources-index",
  },
  {
    databasePath: "00. Inbox/Ideas & Quick Notes Database.md",
    entriesPath: "00. Inbox/Entries/",
    marker: "inbox-index",
  },
];

function renderIndexLinks(content, paths, { entriesPath, marker }) {
  const startMarker = `<!-- ${marker}:start -->`;
  const endMarker = `<!-- ${marker}:end -->`;
  const start = content.indexOf(startMarker);
  const end = content.indexOf(endMarker, start + startMarker.length);
  if (start < 0 || end < 0) return content;

  const links = paths
    .filter(path => path.startsWith(entriesPath) && path.endsWith(".md"))
    .sort((a, b) => a.localeCompare(b))
    .map(path => `- [[${path.slice(0, -3)}]]`);
  const middle = links.length ? `\n${links.join("\n")}\n` : "\n";
  return content.slice(0, start + startMarker.length) + middle + content.slice(end);
}

module.exports = class ToolsDatabaseLinks extends Plugin {
  async onload() {
    this.timer = null;
    this.syncing = false;
    this.again = false;

    const isEntry = path => databases.some(spec => path.startsWith(spec.entriesPath));
    const onEntryChange = file => {
      if (isEntry(file.path)) this.queueSync();
    };
    this.registerEvent(this.app.vault.on("create", onEntryChange));
    this.registerEvent(this.app.vault.on("delete", onEntryChange));
    this.registerEvent(this.app.vault.on("rename", (file, oldPath) => {
      if (isEntry(file.path) || isEntry(oldPath)) {
        this.queueSync();
      }
    }));
    this.registerEvent(this.app.vault.on("modify", file => {
      if (databases.some(spec => file.path === spec.databasePath)) this.queueSync();
    }));
    this.app.workspace.onLayoutReady(() => this.queueSync());
  }

  onunload() {
    if (this.timer) clearTimeout(this.timer);
  }

  queueSync() {
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.timer = null;
      void this.sync();
    }, 150);
  }

  async sync() {
    if (this.syncing) {
      this.again = true;
      return;
    }
    this.syncing = true;
    try {
      const paths = this.app.vault.getMarkdownFiles().map(file => file.path);
      for (const spec of databases) {
        const database = this.app.vault.getAbstractFileByPath(spec.databasePath);
        if (!(database instanceof TFile)) continue;
        const current = await this.app.vault.cachedRead(database);
        if (renderIndexLinks(current, paths, spec) !== current) {
          await this.app.vault.process(database, content => renderIndexLinks(content, paths, spec));
        }
      }
    } finally {
      this.syncing = false;
      if (this.again) {
        this.again = false;
        this.queueSync();
      }
    }
  }
};

module.exports.renderIndexLinks = renderIndexLinks;
module.exports.databases = databases;

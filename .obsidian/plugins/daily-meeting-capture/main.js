const { Plugin, TFile } = require("obsidian");

const dailyPath = /^02\. Tasks & Planning\/PeriodicNotes\/\d{4}\/Daily\/\d{2}\/[^/]+\.md$/;
const markerStart = "<!-- meeting-captures:start -->";
const markerEnd = "<!-- meeting-captures:end -->";

function renderMeetingLinks(content, filePath) {
  const start = content.indexOf(markerStart);
  const end = content.indexOf(markerEnd, start + markerStart.length);
  if (start < 0 || end < 0) return content;

  const recordHeading = /^## Daily Record\s*$/m.exec(content);
  if (!recordHeading) return content;
  const recordStart = recordHeading.index + recordHeading[0].length;
  const afterRecord = content.slice(recordStart);
  const nextHeading = /^## /m.exec(afterRecord);
  const recordBody = nextHeading
    ? afterRecord.slice(0, nextHeading.index)
    : afterRecord;

  const links = [];
  const seen = new Set();
  for (const line of recordBody.split(/\r?\n/)) {
    const capture = /^- (\d{2}:\d{2}) (.*?) \^capture-([a-z\d-]+)\s*$/i.exec(line);
    if (!capture || !/(^|\s)#meeting(?=\s|$)/i.test(capture[2])) continue;
    const [, time, body, id] = capture;
    if (seen.has(id)) continue;
    seen.add(id);
    const topic = body.replace(/(^|\s)#meeting(?=\s|$)/i, " ")
      .replace(/[|\[\]]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const label = topic ? `${time} · ${topic}` : `${time} · Meeting`;
    links.push(`- [[${filePath.slice(0, -3)}#^capture-${id}|${label}]]`);
  }

  const middle = links.length ? `\n${links.join("\n")}\n` : "\n";
  return content.slice(0, start + markerStart.length) + middle + content.slice(end);
}

module.exports = class DailyMeetingCapture extends Plugin {
  async onload() {
    this.running = new Set();
    this.rerun = new Set();
    this.registerEvent(this.app.vault.on("modify", file => void this.sync(file)));
    this.app.workspace.onLayoutReady(() => {
      for (const file of this.app.vault.getMarkdownFiles()) void this.sync(file);
    });
  }

  async sync(file) {
    if (!(file instanceof TFile) || !dailyPath.test(file.path)) return;
    if (this.running.has(file.path)) {
      this.rerun.add(file.path);
      return;
    }
    this.running.add(file.path);
    try {
      const current = await this.app.vault.cachedRead(file);
      if (renderMeetingLinks(current, file.path) !== current) {
        await this.app.vault.process(file, content => renderMeetingLinks(content, file.path));
      }
    } finally {
      this.running.delete(file.path);
      if (this.rerun.delete(file.path)) void this.sync(file);
    }
  }
};

module.exports.renderMeetingLinks = renderMeetingLinks;

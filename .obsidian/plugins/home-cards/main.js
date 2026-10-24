/*
 * Home Cards: a configurable start page for Obsidian.
 * Bundled by esbuild; the source is in src/.
 */
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => HomeCardsPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian16 = require("obsidian");

// src/settings/schema.ts
var SECTION_KINDS = [
  { id: "recent-opened", label: "Recently opened" },
  { id: "recent-created", label: "Recently created" },
  { id: "recent-modified", label: "Recently modified" },
  { id: "property", label: "By property" },
  { id: "tag", label: "By tag" },
  { id: "most-linked", label: "Most popular" },
  { id: "least-linked", label: "Least popular" },
  { id: "rediscover", label: "Rediscover" },
  { id: "pinned", label: "Pinned" },
  { id: "continue", label: "Continue working" },
  { id: "related", label: "Related to recent work" },
  { id: "relate", label: "Relate search", needs: "relate" },
  { id: "links-out", label: "Links in this note", generated: true },
  { id: "links-in", label: "Backlinks", generated: true },
  { id: "relationship", label: "Relationship", needs: "relate", generated: true },
  { id: "similar", label: "Similar in meaning", needs: "relate", generated: true }
];
var REDISCOVER_STRATEGIES = [
  { id: "forgotten", label: "Forgotten notes", desc: "Notes untouched for the months set in General, in a new order each day." },
  { id: "gems", label: "Forgotten gems", desc: "Untouched notes that other notes still link to, the most linked first." },
  { id: "unfinished", label: "Unfinished thoughts", desc: "Untouched notes that are short and barely linked." },
  { id: "on-this-day", label: "On this day", desc: "Notes created or last edited in this week of an earlier year." },
  { id: "hubs", label: "Sleeping hubs", desc: "Untouched notes with many links in and out, not opened lately." },
  { id: "old-friends", label: "Old friends", desc: "Notes you opened often that you have not opened for a while." },
  {
    id: "unlinked",
    label: "Similar but unlinked",
    desc: "Notes close in meaning to the notes you opened most recently but not linked to them, which you have not opened lately. Uses Relate's search by meaning.",
    needs: "relate"
  }
];
var VIEW_MODES = [
  { id: "grid", label: "Grid", icon: "layout-grid" },
  { id: "rows", label: "Rows", icon: "list" }
];
var SURFACES = [
  { id: "flat", label: "Flat" },
  { id: "elevated", label: "Elevated" },
  { id: "frosted", label: "Frosted" }
];
var BACKGROUNDS = [
  { id: "plain", label: "Plain" },
  { id: "diamonds", label: "Diamonds" },
  { id: "leaves", label: "Leaves" },
  { id: "stitches", label: "Stitches" },
  { id: "suns", label: "Suns" },
  { id: "grid", label: "Grid" },
  { id: "rain", label: "Rain" },
  { id: "squares", label: "Squares" },
  { id: "polka", label: "Polka" },
  { id: "basket", label: "Basket" },
  { id: "pebbles", label: "Pebbles" },
  { id: "confetti", label: "Confetti" },
  { id: "petals", label: "Petals" },
  { id: "paws", label: "Paws" }
];
var BACKGROUND_FITS = [
  { id: "pattern", label: "Repeating pattern" },
  { id: "picture", label: "Single picture" }
];
var PAGE_SCOPES = [
  { id: "all", label: "Whole vault", icon: "layout-grid" },
  { id: "folder", label: "Folder", icon: "folder-open" },
  { id: "tag", label: "Tag", icon: "tag" },
  { id: "property", label: "Property", icon: "filter" }
];
var CARD_IMAGES = [
  { id: "none", label: "None" },
  { id: "thumbnail", label: "Thumbnail" },
  { id: "cover", label: "Cover" }
];
var CONDITION_OPS = [
  { id: "is", label: "is", types: ["text", "number", "date", "boolean", "list"], input: "value" },
  { id: "is-not", label: "is not", types: ["text", "number", "date", "boolean", "list"], input: "value" },
  { id: "gt", label: "is more than", types: ["number"], input: "number" },
  { id: "gte", label: "is at least", types: ["number"], input: "number" },
  { id: "lt", label: "is less than", types: ["number"], input: "number" },
  { id: "lte", label: "is at most", types: ["number"], input: "number" },
  { id: "today", label: "is today", types: ["date"], input: "none" },
  { id: "before-today", label: "is before today", types: ["date"], input: "none" },
  { id: "after-today", label: "is after today", types: ["date"], input: "none" },
  { id: "next-days", label: "is in the next", types: ["date"], input: "days" },
  { id: "last-days", label: "is in the last", types: ["date"], input: "days" },
  { id: "older-days", label: "is older than", types: ["date"], input: "days" },
  { id: "exists", label: "has a value", types: ["text", "number", "date", "boolean", "list"], input: "none" },
  { id: "missing", label: "is empty", types: ["text", "number", "date", "boolean", "list"], input: "none" }
];
var FILE_FIELDS = [
  { id: "file.ctime", label: "Created", type: "date" },
  { id: "file.mtime", label: "Modified", type: "date" }
];
function needsRelate(entry) {
  return "needs" in entry && entry.needs === "relate";
}
function isGenerated(kind) {
  const entry = SECTION_KINDS.find((k) => k.id === kind);
  return !!entry && "generated" in entry && entry.generated === true;
}
function isChoice(registry, value) {
  return registry.some((c) => c.id === value);
}
function labelOf(registry, id) {
  return registry.find((c) => c.id === id)?.label ?? id;
}
function emptyMarks() {
  return { pinned: [], snoozed: {}, quiet: [] };
}
var SETTINGS_VERSION = 2;
var BLANK_SECTION = Object.freeze({
  id: "",
  title: "",
  kind: "recent-modified",
  count: 8,
  enabled: true,
  propertyKey: "",
  propertyValue: "",
  sortKey: "",
  sortDir: "desc",
  tag: "",
  strategy: "forgotten",
  filterTags: "",
  filterProps: "",
  filterFolders: "",
  conditions: Object.freeze([]),
  fields: Object.freeze([]),
  image: "none",
  query: "",
  note: "",
  relation: ""
});
function blankSection(over) {
  return { ...BLANK_SECTION, conditions: [], fields: [], ...over };
}
function copySection(cfg, id) {
  return { ...cfg, id, conditions: cfg.conditions.map((c) => ({ ...c })), fields: [...cfg.fields] };
}
function defaultSections() {
  return [
    blankSection({ id: "opened", kind: "recent-opened" }),
    blankSection({ id: "created", kind: "recent-created" }),
    blankSection({ id: "most", kind: "most-linked" }),
    blankSection({ id: "least", kind: "least-linked" })
  ];
}
function defaultSettings() {
  return {
    version: SETTINGS_VERSION,
    sections: defaultSections(),
    pages: [],
    marks: emptyMarks(),
    dedupe: true,
    rediscoverMonths: 6,
    greetingEnabled: true,
    greetingOccasions: true,
    greetingName: "",
    showNoteCount: true,
    openOnStartup: false,
    showReleaseNotes: true,
    lastShownVersion: "",
    defaultView: "grid",
    cardMinWidth: 262,
    cardSurface: "flat",
    background: "plain",
    customBackgrounds: [],
    accentRubrics: true,
    typeProperty: "type",
    showGlyph: true,
    typifyIcons: false,
    showRubric: true,
    showTags: true,
    maxTags: 3,
    showDeks: true,
    dekLines: 3,
    showFileSize: false,
    imageProperties: "cover, image",
    summaryProperty: "summary",
    boilerplateOpeners: "this note, this document, this page",
    titlePrefixes: "",
    stripTrailingDates: true
  };
}
var LIMITS = {
  count: { min: 1, max: 24 },
  cardMinWidth: { min: 180, max: 420 },
  maxTags: { min: 1, max: 6 },
  dekLines: { min: 1, max: 8 },
  rediscoverMonths: { min: 1, max: 36 },
  /** Percent of the theme background over a custom image. */
  fade: { min: 0, max: 95 },
  /** Marks kept, by kind; the oldest go first. */
  pinned: { max: 100 },
  snoozed: { max: 500 },
  quiet: { max: 1e3 },
  /** Footer fields per section. */
  fields: { max: 3 },
  /** Conditions per section. */
  conditions: { max: 8 },
  /** Each page adds a command, so the list stays short. */
  pages: { max: 50 },
  pageName: { max: 60 }
};
function blankScope() {
  return { kind: "all", folder: "", tag: "", propertyKey: "", propertyValue: "" };
}
function newPageId() {
  return `page-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}
function newSectionId() {
  return `s${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}
function autoTitle(cfg) {
  switch (cfg.kind) {
    case "tag":
      return cfg.tag ? `#${cfg.tag.replace(/^#/, "")}` : labelOf(SECTION_KINDS, cfg.kind);
    case "property": {
      const k = cfg.propertyKey;
      if (!k) return labelOf(SECTION_KINDS, cfg.kind);
      if (cfg.propertyValue) return `${k}: ${cfg.propertyValue}`;
      return `By ${k.charAt(0).toLowerCase()}${k.slice(1)}`;
    }
    case "rediscover":
      return cfg.strategy === "forgotten" ? labelOf(SECTION_KINDS, cfg.kind) : labelOf(REDISCOVER_STRATEGIES, cfg.strategy);
    case "relate":
      return cfg.query.trim() || labelOf(SECTION_KINDS, cfg.kind);
    case "relationship":
      return cfg.relation || labelOf(SECTION_KINDS, cfg.kind);
    default:
      return labelOf(SECTION_KINDS, cfg.kind);
  }
}
function sectionTitle(cfg) {
  return cfg.title.trim() || autoTitle(cfg);
}

// src/compose/marks.ts
function localDate(d) {
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
function dateAfter(now, days) {
  return localDate(new Date(now.getFullYear(), now.getMonth(), now.getDate() + days));
}
function isPinned(marks, path) {
  return marks.pinned.includes(path);
}
function isSnoozed(marks, path, now) {
  const until = marks.snoozed[path];
  return until !== void 0 && until > localDate(now);
}
function isQuiet(marks, path) {
  return marks.quiet.includes(path);
}
function togglePin(marks, path) {
  const at = marks.pinned.indexOf(path);
  if (at >= 0) {
    marks.pinned.splice(at, 1);
  } else {
    marks.pinned.unshift(path);
    marks.pinned.length = Math.min(marks.pinned.length, LIMITS.pinned.max);
    delete marks.snoozed[path];
  }
  return true;
}
function snooze(marks, path, now, days) {
  marks.snoozed[path] = dateAfter(now, days);
  const paths = Object.keys(marks.snoozed);
  if (paths.length > LIMITS.snoozed.max) {
    paths.sort((a, b) => marks.snoozed[a].localeCompare(marks.snoozed[b]));
    for (const p of paths.slice(0, paths.length - LIMITS.snoozed.max)) delete marks.snoozed[p];
  }
  return true;
}
function toggleQuiet(marks, path) {
  const at = marks.quiet.indexOf(path);
  if (at >= 0) marks.quiet.splice(at, 1);
  else {
    marks.quiet.unshift(path);
    marks.quiet.length = Math.min(marks.quiet.length, LIMITS.quiet.max);
  }
  return true;
}
function pruneSnoozes(marks, now) {
  const today = localDate(now);
  let changed = false;
  for (const [path, until] of Object.entries(marks.snoozed)) {
    if (until <= today) {
      delete marks.snoozed[path];
      changed = true;
    }
  }
  return changed;
}
function moved(path, from, to) {
  if (path === from) return to;
  return path.startsWith(`${from}/`) ? to + path.slice(from.length) : path;
}
function renameMarks(marks, from, to) {
  let changed = false;
  const list = (paths) => {
    for (let i = 0; i < paths.length; i++) {
      const next = moved(paths[i], from, to);
      if (next !== paths[i]) {
        paths[i] = next;
        changed = true;
      }
    }
  };
  list(marks.pinned);
  list(marks.quiet);
  for (const [path, until] of Object.entries(marks.snoozed)) {
    const next = moved(path, from, to);
    if (next === path) continue;
    delete marks.snoozed[path];
    marks.snoozed[next] = until;
    changed = true;
  }
  return changed;
}
function forgetMarks(marks, path) {
  const gone = (p) => p === path || p.startsWith(`${path}/`);
  let changed = false;
  for (const paths of [marks.pinned, marks.quiet]) {
    for (let i = paths.length - 1; i >= 0; i--) {
      if (gone(paths[i])) {
        paths.splice(i, 1);
        changed = true;
      }
    }
  }
  for (const p of Object.keys(marks.snoozed)) {
    if (gone(p)) {
      delete marks.snoozed[p];
      changed = true;
    }
  }
  return changed;
}

// src/compose/activity.ts
var STORE_KEY = "home-cards-activity";
var VERSION = 1;
var EVENT_LIMIT = 500;
var EVENT_DAYS = 30;
var VISIT_LIMIT = 2e3;
var VISIT_GAP_MS = 30 * 6e4;
var REOPEN_MS = 2 * 6e4;
var ActivityLog = class {
  constructor(store, clock = Date.now) {
    this.store = store;
    this.clock = clock;
    this.log = null;
    this.stats = null;
    this.dirty = false;
  }
  events() {
    return this.load().log;
  }
  visits() {
    return this.load().stats;
  }
  /** Note that `path` was opened now. */
  record(path) {
    const { log, stats } = this.load();
    const now = this.clock();
    const newest = log[0];
    if (newest && newest.path === path && now - newest.at < REOPEN_MS) {
      newest.at = now;
    } else {
      log.unshift({ path, at: now });
    }
    const v = stats.get(path);
    if (!v) stats.set(path, { count: 1, last: now });
    else {
      if (now - v.last >= VISIT_GAP_MS) v.count++;
      v.last = now;
    }
    this.trim(now);
    this.dirty = true;
  }
  /** Follow a rename of a note, or of a folder and everything in it. */
  rename(from, to) {
    const { log, stats } = this.load();
    const moved2 = (p) => p === from ? to : p.startsWith(`${from}/`) ? to + p.slice(from.length) : p;
    let changed = false;
    for (const e of log) {
      const next = moved2(e.path);
      if (next !== e.path) {
        e.path = next;
        changed = true;
      }
    }
    for (const [path, v] of [...stats]) {
      const next = moved2(path);
      if (next === path) continue;
      stats.delete(path);
      const merged = stats.get(next);
      stats.set(next, merged ? { count: merged.count + v.count, last: Math.max(merged.last, v.last) } : v);
      changed = true;
    }
    if (changed) this.dirty = true;
  }
  /** Forget a deleted note, or everything under a deleted folder. */
  forget(path) {
    const { log, stats } = this.load();
    const gone = (p) => p === path || p.startsWith(`${path}/`);
    const before = log.length + stats.size;
    this.log = log.filter((e) => !gone(e.path));
    for (const p of [...stats.keys()]) if (gone(p)) stats.delete(p);
    if (this.log.length + stats.size !== before) this.dirty = true;
  }
  /** Write pending changes. The plugin calls this once the opens settle. */
  flush() {
    if (!this.dirty || !this.log || !this.stats) return;
    this.dirty = false;
    const data = {
      v: VERSION,
      e: this.log.map((e) => [e.path, e.at]),
      s: Object.fromEntries([...this.stats].map(([p, v]) => [p, [v.count, v.last]]))
    };
    try {
      this.store.saveLocalStorage(STORE_KEY, data);
    } catch (err) {
      this.dirty = true;
      console.error("Home Cards: could not save activity", err);
    }
  }
  trim(now) {
    const log = this.log ?? [];
    const cutoff = now - EVENT_DAYS * 864e5;
    let keep = Math.min(log.length, EVENT_LIMIT);
    while (keep > 0 && log[keep - 1].at < cutoff) keep--;
    log.length = keep;
    const stats = this.stats ?? /* @__PURE__ */ new Map();
    if (stats.size > VISIT_LIMIT) {
      const oldest = [...stats].sort((a, b) => a[1].last - b[1].last).slice(0, stats.size - VISIT_LIMIT);
      for (const [p] of oldest) stats.delete(p);
    }
  }
  load() {
    if (this.log && this.stats) return { log: this.log, stats: this.stats };
    let stored = null;
    try {
      stored = this.store.loadLocalStorage(STORE_KEY);
    } catch (err) {
      console.error("Home Cards: could not read activity", err);
    }
    const { log, stats } = parseStored(stored);
    this.log = log;
    this.stats = stats;
    return { log, stats };
  }
};
function parseStored(raw) {
  const log = [];
  const stats = /* @__PURE__ */ new Map();
  if (typeof raw !== "object" || raw === null) return { log, stats };
  const data = raw;
  if (data.v !== VERSION) return { log, stats };
  for (const entry of Array.isArray(data.e) ? data.e : []) {
    if (Array.isArray(entry) && typeof entry[0] === "string" && Number.isFinite(entry[1])) {
      log.push({ path: entry[0], at: entry[1] });
    }
    if (log.length >= EVENT_LIMIT) break;
  }
  log.sort((a, b) => b.at - a.at);
  if (typeof data.s === "object" && data.s !== null) {
    for (const [path, v] of Object.entries(data.s)) {
      if (Array.isArray(v) && Number.isInteger(v[0]) && v[0] > 0 && Number.isFinite(v[1])) {
        stats.set(path, { count: v[0], last: v[1] });
      }
    }
  }
  return { log, stats };
}

// src/compose/values.ts
function frontmatterValue(cache, key) {
  if (!cache?.frontmatter || !key) return void 0;
  return cache.frontmatter[key];
}
function asStringList(value) {
  const one = (v) => {
    if (typeof v === "string") return v;
    if (typeof v === "number" || typeof v === "boolean") return String(v);
    return null;
  };
  const list = Array.isArray(value) ? value : [value];
  return list.map(one).filter((v) => v !== null);
}
function firstValue(value) {
  return asStringList(value)[0] ?? "";
}
function parseDateLike(raw) {
  const s = raw.trim();
  const dateOnly = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (dateOnly) {
    const d2 = new Date(Number(dateOnly[1]), Number(dateOnly[2]) - 1, Number(dateOnly[3]));
    return Number.isNaN(d2.getTime()) ? null : d2;
  }
  if (!/^\d{4}-\d{2}-\d{2}[T ]/.test(s)) return null;
  const d = new Date(s);
  return Number.isNaN(d.getTime()) ? null : d;
}
function formatDate(d) {
  return d.toLocaleDateString(void 0, { day: "numeric", month: "short", year: "numeric" });
}
function splitList(raw) {
  return raw.split(",").map((s) => s.trim()).filter(Boolean);
}
function memoLast(fn) {
  let lastIn;
  let lastOut;
  let primed = false;
  return (input) => {
    if (!primed || input !== lastIn) {
      lastIn = input;
      lastOut = fn(input);
      primed = true;
    }
    return lastOut;
  };
}

// src/compose/text.ts
var TRAILING_DATE = /([,\s]+|^)(?:on\s+)?(@\d{4}-?\d{2}-?\d{2}|\d{4}-\d{2}-\d{2})(\s+update)?\s*$/i;
function isRealDateStamp(stamp) {
  const digits = stamp.replace(/[@-]/g, "");
  if (digits.length !== 8) return false;
  const month = Number(digits.slice(4, 6));
  const day = Number(digits.slice(6, 8));
  return month >= 1 && month <= 12 && day >= 1 && day <= 31;
}
var titlePrefixList = memoLast(splitList);
function cleanTitle(name, s) {
  let t = name;
  for (const p of titlePrefixList(s.titlePrefixes)) {
    if (t.startsWith(p)) {
      t = t.slice(p.length).trim();
      break;
    }
  }
  if (s.stripTrailingDates) {
    const m = TRAILING_DATE.exec(t);
    if (m && isRealDateStamp(m[2])) t = t.slice(0, m.index).replace(/[,\s]+$/, "");
  }
  return t || name;
}
var PROSE_SECTION = "paragraph";
var MIN_SENTENCE = 12;
var SENTENCE = /\S.*?(?:[.?!]+(?=\s|$)|$)/g;
function splitSentences(text) {
  return text.match(SENTENCE) ?? [];
}
var openerList = memoLast((raw) => splitList(raw).map((o) => o.toLowerCase()));
function flatten(markdown) {
  return markdown.replace(/!?\[\[([^\]|]*\|)?([^\]]*)\]\]/g, "$2").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/[*_`=~]/g, "").replace(/\s+/g, " ").trim();
}
function dekSignature(s) {
  return `${s.showDeks}\0${s.summaryProperty}\0${s.boilerplateOpeners}`;
}
async function extractDek(app, file, cache, s) {
  if (!s.showDeks) return "";
  const override = firstValue(frontmatterValue(cache, s.summaryProperty));
  if (override) return override;
  const block = (cache?.sections ?? []).find((sec) => sec.type === PROSE_SECTION);
  if (!block) return "";
  let text;
  try {
    const content = await app.vault.cachedRead(file);
    text = content.slice(block.position.start.offset, block.position.end.offset);
  } catch {
    return "";
  }
  const flat = flatten(text);
  if (!flat) return "";
  const openers = openerList(s.boilerplateOpeners);
  for (const sentence of splitSentences(flat).slice(0, 3)) {
    const lower = sentence.toLowerCase();
    if (openers.some((o) => lower.startsWith(o))) continue;
    if (sentence.length >= MIN_SENTENCE) return sentence;
  }
  return "";
}

// src/compose/dek-cache.ts
var DekCache = class {
  constructor(capacity = 500) {
    this.capacity = capacity;
    this.entries = /* @__PURE__ */ new Map();
    this.signature = "";
  }
  get(app, file, settings) {
    const signature = dekSignature(settings);
    if (signature !== this.signature) {
      this.entries.clear();
      this.signature = signature;
    }
    const hit = this.entries.get(file.path);
    if (hit && hit.mtime === file.stat.mtime) {
      this.entries.delete(file.path);
      this.entries.set(file.path, hit);
      return hit.dek;
    }
    const dek = extractDek(app, file, app.metadataCache.getFileCache(file), settings).catch(
      () => ""
    );
    this.entries.set(file.path, { mtime: file.stat.mtime, dek });
    while (this.entries.size > this.capacity) {
      const oldest = this.entries.keys().next().value;
      if (oldest === void 0) break;
      this.entries.delete(oldest);
    }
    return dek;
  }
};

// src/compose/open-history.ts
var STORE_KEY2 = "home-cards-opened";
var HISTORY_LIMIT = 100;
var OpenHistory = class {
  constructor(store) {
    this.store = store;
    /** Newest first. Loaded on first use, so startup does no storage read. */
    this.paths = null;
  }
  /** Opened note paths, newest first. */
  list() {
    return this.load();
  }
  /** Move `path` to the front. */
  record(path) {
    const paths = this.load();
    if (paths[0] === path) return;
    const at = paths.indexOf(path);
    if (at >= 0) paths.splice(at, 1);
    paths.unshift(path);
    paths.length = Math.min(paths.length, HISTORY_LIMIT);
    this.save();
  }
  /** Follow a rename, so a moved note keeps its place. */
  rename(oldPath, newPath) {
    const paths = this.load();
    const at = paths.indexOf(oldPath);
    if (at < 0) return;
    paths[at] = newPath;
    const dupe = paths.indexOf(newPath, at + 1);
    if (dupe >= 0) paths.splice(dupe, 1);
    this.save();
  }
  load() {
    if (this.paths) return this.paths;
    let stored = null;
    try {
      stored = this.store.loadLocalStorage(STORE_KEY2);
    } catch (err) {
      console.error("Home Cards: could not read the open history", err);
    }
    this.paths = Array.isArray(stored) ? stored.filter((p) => typeof p === "string").slice(0, HISTORY_LIMIT) : [];
    return this.paths;
  }
  save() {
    try {
      this.store.saveLocalStorage(STORE_KEY2, this.paths);
    } catch (err) {
      console.error("Home Cards: could not save the open history", err);
    }
  }
};
function mergeOpened(recent, history) {
  return [.../* @__PURE__ */ new Set([...recent, ...history])];
}

// src/render/bases-view.ts
var import_obsidian5 = require("obsidian");

// src/compose/conditions.ts
function propertyValue(cache, key) {
  const fm = cache?.frontmatter;
  if (!fm || !key) return void 0;
  if (key in fm) return fm[key];
  const lower = key.toLowerCase();
  const match = Object.keys(fm).find((k) => k.toLowerCase() === lower);
  return match === void 0 ? void 0 : fm[match];
}
function fieldValue(file, cache, field) {
  if (field === "file.ctime") return new Date(file.stat.ctime);
  if (field === "file.mtime") return new Date(file.stat.mtime);
  return propertyValue(cache, field);
}
function isFileField(field) {
  return FILE_FIELDS.some((f) => f.id === field);
}
function isEmpty(value) {
  return value === null || value === void 0 || value === "" || Array.isArray(value) && value.length === 0;
}
function valueType(value) {
  if (isEmpty(value)) return null;
  if (Array.isArray(value)) return "list";
  if (value instanceof Date) return "date";
  if (typeof value === "number") return "number";
  if (typeof value === "boolean") return "boolean";
  if (typeof value === "string") return parseDateLike(value) ? "date" : "text";
  return null;
}
function inferType(values) {
  const counts = /* @__PURE__ */ new Map();
  for (const v of values) {
    const t = valueType(v);
    if (t) counts.set(t, (counts.get(t) ?? 0) + 1);
  }
  let best = "text";
  let most = 0;
  for (const [t, n] of counts) {
    if (n > most || n === most && t === "text") {
      best = t;
      most = n;
    }
  }
  return best;
}
function opsFor(type) {
  return CONDITION_OPS.filter((op) => op.types.includes(type));
}
function normalText(value) {
  let text = typeof value === "string" ? value : typeof value === "number" || typeof value === "boolean" ? String(value) : "";
  text = text.trim();
  const link = /^\[\[([^\]|#]+)(?:[#|][^\]]*)?\]\]$/.exec(text);
  if (link) text = link[1];
  return text.replace(/^#/, "").trim().toLowerCase();
}
function asNumber(value) {
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  if (typeof value === "string" && /^\s*-?\d+(\.\d+)?\s*$/.test(value)) return Number(value);
  return null;
}
function asDate(value) {
  if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value;
  if (typeof value === "string") return parseDateLike(value);
  return null;
}
function asBoolean(value) {
  if (typeof value === "boolean") return value;
  if (typeof value !== "string") return null;
  const v = value.trim().toLowerCase();
  if (v === "true" || v === "yes") return true;
  if (v === "false" || v === "no") return false;
  return null;
}
function startOfDay(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
}
function dayStart(d, days) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate() + days).getTime();
}
var anyMember = (test) => (value) => Array.isArray(value) ? value.some((v) => !isEmpty(v) && test(v)) : !isEmpty(value) && test(value);
function equalsTest(raw) {
  const want = raw.trim();
  if (!want) return null;
  const num = asNumber(want);
  const bool2 = asBoolean(want);
  const date = parseDateLike(want);
  const text = normalText(want);
  return (v) => {
    if (num !== null && asNumber(v) !== null) return asNumber(v) === num;
    if (bool2 !== null && typeof v === "boolean") return v === bool2;
    if (date !== null) {
      const d = asDate(v);
      if (d) return startOfDay(d) === startOfDay(date);
    }
    return normalText(v) === text;
  };
}
function dayCount(raw) {
  const n = asNumber(raw);
  return n !== null && n >= 0 && Number.isInteger(n) ? n : null;
}
function compileCondition(cond, now) {
  if (!cond.property.trim()) return null;
  const today = startOfDay(now);
  const date = (inRange) => anyMember((v) => {
    const d = asDate(v);
    return d !== null && inRange(d.getTime());
  });
  const number = (compare) => {
    const want = asNumber(cond.value);
    if (want === null) return null;
    return anyMember((v) => {
      const n = asNumber(v);
      return n !== null && compare(n, want);
    });
  };
  const days = dayCount(cond.value);
  switch (cond.op) {
    case "exists":
      return (v) => !isEmpty(v);
    case "missing":
      return (v) => isEmpty(v);
    case "is": {
      const eq = equalsTest(cond.value);
      return eq ? anyMember(eq) : null;
    }
    case "is-not": {
      const eq = equalsTest(cond.value);
      return eq ? (v) => !anyMember(eq)(v) : null;
    }
    case "gt":
      return number((n, w) => n > w);
    case "gte":
      return number((n, w) => n >= w);
    case "lt":
      return number((n, w) => n < w);
    case "lte":
      return number((n, w) => n <= w);
    case "today":
      return date((t) => t >= today && t < dayStart(now, 1));
    case "before-today":
      return date((t) => t < today);
    case "after-today":
      return date((t) => t >= dayStart(now, 1));
    case "next-days":
      return days === null ? null : date((t) => t >= today && t < dayStart(now, days + 1));
    case "last-days":
      return days === null ? null : date((t) => t >= dayStart(now, -days) && t < dayStart(now, 1));
    case "older-days":
      return days === null ? null : date((t) => t < dayStart(now, -days));
    default:
      return null;
  }
}
function compileConditions(conditions, now) {
  const tests = conditions.flatMap((cond) => {
    const test = compileCondition(cond, now);
    return test ? [{ field: cond.property.trim(), test }] : [];
  });
  if (!tests.length) return null;
  return (file, cache) => tests.every(({ field, test }) => test(fieldValue(file, cache, field)));
}
function fieldLabel(field) {
  return FILE_FIELDS.find((f) => f.id === field)?.label.toLowerCase() ?? field;
}
function describeCondition(cond) {
  const op = CONDITION_OPS.find((o) => o.id === cond.op);
  if (!op) return "";
  const field = fieldLabel(cond.property.trim()) || "(no property)";
  switch (op.input) {
    case "none":
      return `${field} ${op.label}`;
    case "days": {
      const n = cond.value.trim();
      return op.id === "older-days" ? `${field} ${op.label} ${n} days` : `${field} ${op.label} ${n} ${n === "1" ? "day" : "days"}`;
    }
    default:
      return `${field} ${op.label} ${cond.value.trim()}`;
  }
}
function statedValue(cond) {
  const key = cond.property.trim();
  if (cond.op !== "is" || !key || isFileField(key) || !cond.value.trim()) return null;
  return { key, value: cond.value.trim() };
}

// src/compose/projection.ts
var LIST_SHOWN = 3;
function displayText(value) {
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (typeof value !== "string") return "";
  const text = value.trim();
  const link = /^!?\[\[([^\]|]+?)(?:\|([^\]]+))?\]\]$/.exec(text);
  if (link) {
    if (link[2]) return link[2].trim();
    const target = link[1].split("#")[0];
    return target.slice(target.lastIndexOf("/") + 1).replace(/\.md$/, "");
  }
  return text;
}
function relativeDay(d, now) {
  const days = Math.round((startOfDay(d) - startOfDay(now)) / 864e5);
  if (days === 0) return "today";
  if (days === 1) return "tomorrow";
  if (days === -1) return "yesterday";
  if (days > 1 && days < 7) return d.toLocaleDateString(void 0, { weekday: "long" });
  if (days < -1 && days > -7) return `${-days} days ago`;
  const sameYear = d.getFullYear() === now.getFullYear();
  return d.toLocaleDateString(void 0, sameYear ? { day: "numeric", month: "short" } : { day: "numeric", month: "short", year: "numeric" });
}
function relativeTime(at, now) {
  const minutes = Math.floor((now.getTime() - at) / 6e4);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24 && startOfDay(new Date(at)) === startOfDay(now)) return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  return relativeDay(new Date(at), now);
}
function spanSince(at, now) {
  const months = Math.floor((now.getTime() - at) / (30.44 * 864e5));
  if (months < 1) return "less than a month";
  if (months < 24) return `${months} ${months === 1 ? "month" : "months"}`;
  return `${Math.floor(months / 12)} years`;
}
var capitalized = (s) => s.charAt(0).toUpperCase() + s.slice(1);
function asDate2(value) {
  if (value instanceof Date) return value;
  return typeof value === "string" ? parseDateLike(value) : null;
}
function formatField(field, value, now) {
  if (isEmpty(value)) return "";
  const label = capitalized(fieldLabel(field));
  if (Array.isArray(value)) {
    const items = value.map(displayText).filter(Boolean);
    const shown = items.slice(0, LIST_SHOWN).join(", ");
    return items.length > LIST_SHOWN ? `${shown} +${items.length - LIST_SHOWN}` : shown;
  }
  const date = asDate2(value);
  if (date) return `${label} ${relativeDay(date, now)}`;
  if (typeof value === "number") return `${label} ${value}`;
  if (typeof value === "boolean") return value ? label : "";
  return displayText(value);
}
function projectFields(file, cache, fields, now) {
  return fields.map((field) => formatField(field, fieldValue(file, cache, field), now)).filter(Boolean);
}

// src/settings/folders.ts
function normalizeFolderPath(raw) {
  return raw.replace(/\\/g, "/").split("/").map((segment) => segment.trim()).filter(Boolean).join("/");
}
function folderName(path) {
  return path.slice(path.lastIndexOf("/") + 1);
}
function noteName(path) {
  return folderName(path).replace(/\.md$/, "");
}
function isInside(path, folder) {
  return folder === "" || path.startsWith(`${folder}/`);
}
function reparent(path, from, to) {
  if (path === from) return to;
  return path.startsWith(`${from}/`) ? to + path.slice(from.length) : path;
}
function cloneSections(sections) {
  return sections.map((section) => copySection(section, newSectionId()));
}

// src/compose/scope.ts
function globToTest(pattern) {
  const source = pattern.toLowerCase().split("*").map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join(".*");
  const re = new RegExp(`^${source}$`);
  return (value) => re.test(value.toLowerCase());
}
var anyOf = (tests) => (v) => tests.some((t) => t(v));
function compileTags(raw) {
  const patterns = splitList(raw).map((p) => p.replace(/^#/, ""));
  if (!patterns.length) return null;
  return anyOf(
    patterns.map((p) => {
      const exact = globToTest(p);
      if (p.includes("*")) return exact;
      const descend = globToTest(`${p}/*`);
      return (tag) => exact(tag) || descend(tag);
    })
  );
}
function compileFolders(raw) {
  const patterns = splitList(raw);
  if (!patterns.length) return null;
  return anyOf(
    patterns.map((p) => {
      if (p.includes("/")) {
        const clean = p.replace(/^\/+/, "").replace(/\/+$/, "").replace(/\/\*$/, "");
        const exact = globToTest(clean);
        const descend = globToTest(`${clean}/*`);
        return (folder) => exact(folder) || descend(folder);
      }
      const segment = globToTest(p);
      return (folder) => folder.split("/").some(segment);
    })
  );
}
function propertyTest(key, value) {
  const rule = { key: key.trim().toLowerCase(), value: value === null ? null : value.trim().toLowerCase() };
  return (cache) => matchesRule(cache, rule);
}
function compileProps(raw) {
  const rules = splitList(raw).map((entry) => {
    const eq = entry.indexOf("=");
    if (eq === -1) return { key: entry.toLowerCase(), value: null };
    return {
      key: entry.slice(0, eq).trim().toLowerCase(),
      value: entry.slice(eq + 1).trim().toLowerCase()
    };
  });
  if (!rules.length) return null;
  return (cache) => rules.some((rule) => matchesRule(cache, rule));
}
function matchesRule(cache, rule) {
  const fm = cache?.frontmatter;
  if (!fm) return false;
  const key = Object.keys(fm).find((k) => k.toLowerCase() === rule.key);
  if (key === void 0) return false;
  const value = fm[key];
  if (value === null || value === void 0 || value === "") return false;
  if (rule.value === null) return true;
  const list = Array.isArray(value) ? value : [value];
  return list.some(
    (v) => (typeof v === "string" || typeof v === "number" || typeof v === "boolean") && String(v).replace(/^#/, "").toLowerCase() === rule.value
  );
}
function tagsOf(cache) {
  const out = [];
  const fm = cache?.frontmatter?.tags;
  for (const t of Array.isArray(fm) ? fm : fm != null ? [fm] : []) {
    if (typeof t === "string") out.push(t.replace(/^#/, ""));
  }
  for (const t of cache?.tags ?? []) out.push(t.tag.replace(/^#/, ""));
  return out;
}
function compileScope(scope) {
  const tags = compileTags(scope.filterTags);
  const props = compileProps(scope.filterProps);
  const folders = compileFolders(scope.filterFolders);
  if (!tags && !props && !folders) return null;
  return (file, cache) => {
    if (tags && !tagsOf(cache).some(tags)) return false;
    if (props && !props(cache)) return false;
    if (folders) {
      const folder = file.parent && file.parent.path !== "/" ? file.parent.path : "";
      if (!folders(folder)) return false;
    }
    return true;
  };
}
function compilePageScope(scope) {
  switch (scope.kind) {
    case "folder": {
      const folder = scope.folder;
      return folder ? (file) => isInside(file.path, folder) : null;
    }
    case "tag": {
      const tags = compileTags(scope.tag);
      return tags ? (_file, cache) => tagsOf(cache).some(tags) : null;
    }
    case "property": {
      if (!scope.propertyKey.trim()) return null;
      const test = propertyTest(scope.propertyKey, scope.propertyValue.trim() ? scope.propertyValue : null);
      return (_file, cache) => test(cache);
    }
    default:
      return null;
  }
}

// src/compose/card.ts
function footer(ctx, file, cache, rubric, lead) {
  const bits = [];
  if (lead) bits.push(lead);
  if (ctx.fields.length) {
    bits.push(...projectFields(file, cache, ctx.fields, ctx.now));
  } else {
    const raw = firstValue(frontmatterValue(cache, ctx.metaKey)) || firstValue(frontmatterValue(cache, "date"));
    if (raw) {
      const date = parseDateLike(raw);
      if (date) bits.push(formatDate(date));
      else if (raw !== rubric) bits.push(raw);
    }
  }
  if (ctx.settings.showFileSize) {
    bits.push(`${Math.max(1, Math.round(file.stat.size / 1024))} KB`);
  }
  return bits.join(" \xB7 ");
}
async function buildCard(ctx, file, lead) {
  const { settings } = ctx;
  const cache = ctx.cacheOf(file);
  const rubric = firstValue(frontmatterValue(cache, settings.typeProperty));
  const tags = settings.showTags ? [...new Set(tagsOf(cache).map((t) => t.trim()).filter(Boolean))].slice(0, settings.maxTags) : [];
  const dek = ctx.deks ? await ctx.deks(file) : null;
  const meta = footer(ctx, file, cache, rubric, lead);
  const image = ctx.image !== "none" && ctx.imageUrl ? ctx.imageUrl(file, cache) : null;
  return {
    file,
    title: cleanTitle(file.basename, settings),
    rubric,
    icon: ctx.icons.get(rubric.toLowerCase()) ?? "",
    tags,
    dek,
    meta,
    image,
    imageMode: image ? ctx.image : "none",
    imageSlot: ctx.imageUrl ? ctx.image : "none",
    search: [file.basename, rubric, dek ?? "", meta, ...tags].join(" ").toLowerCase()
  };
}

// src/compose/sessions.ts
var SESSION_GAP_MS = 45 * 6e4;
function sessionsFrom(events, gap = SESSION_GAP_MS) {
  const out = [];
  let current = null;
  for (const e of events) {
    if (!current || current.start - e.at > gap) {
      current = { start: e.at, end: e.at, notes: [], seen: /* @__PURE__ */ new Set() };
      out.push(current);
    }
    current.start = Math.min(current.start, e.at);
    if (!current.seen.has(e.path)) {
      current.seen.add(e.path);
      current.notes.push({ path: e.path, at: e.at });
    }
  }
  return out.map(({ start, end, notes }) => ({ start, end, notes }));
}

// src/compose/continue.ts
function continueWorking(vault, pool) {
  const now = vault.now;
  const byPath = new Map(pool.map((f) => [f.path, f]));
  const [latest, earlier] = sessionsFrom(vault.activity.events());
  if (!latest) return [];
  const out = [];
  const seen = /* @__PURE__ */ new Set();
  const push = (file, lead) => {
    if (!file || seen.has(file.path)) return;
    seen.add(file.path);
    out.push({ file, lead });
  };
  latest.notes.forEach(
    ({ path, at }, i) => push(byPath.get(path), i === 0 ? `Opened ${relativeTime(at, now)}` : "Opened in the same session")
  );
  const until = latest.end + SESSION_GAP_MS;
  pool.filter((f) => f.stat.mtime >= latest.start && f.stat.mtime <= until).sort((a, b) => b.stat.mtime - a.stat.mtime).forEach((f) => push(f, "Edited during that session"));
  if (earlier) {
    const when = relativeTime(earlier.end, now);
    for (const { path } of earlier.notes) push(byPath.get(path), `From a session ${when}`);
  }
  return out;
}

// src/compose/related.ts
var SEED_COUNT = 5;
var BUSY_NEIGHBOUR = 50;
var MIN_SCORE = 1;
var RELATIONSHIP = 3.5;
var SIMILAR_PER_SEED = 10;
function recentSeeds(vault) {
  const [latest] = sessionsFrom(vault.activity.events());
  const paths = latest ? latest.notes.map((n) => n.path) : vault.openedPaths();
  return paths.slice(0, SEED_COUNT);
}
function relatedToRecent(vault, pool) {
  const seeds = recentSeeds(vault);
  if (!seeds.length) return [];
  const seedSet = new Set(seeds);
  const byPath = new Map(pool.map((f) => [f.path, f]));
  const { out, in: inn } = vault.links();
  const neighbours = (p) => /* @__PURE__ */ new Set([...out.get(p) ?? [], ...inn.get(p) ?? []]);
  const scores = /* @__PURE__ */ new Map();
  const add = (path, weight, reason) => {
    if (seedSet.has(path) || !byPath.has(path) || weight <= 0) return;
    const s = scores.get(path);
    if (!s) scores.set(path, { total: weight, reason, weight });
    else {
      s.total += weight;
      if (weight > s.weight) {
        s.weight = weight;
        s.reason = reason;
      }
    }
  };
  for (const seed of seeds) {
    const name = noteName(seed);
    for (const target of out.get(seed) ?? []) add(target, 3, `Linked from ${name}`);
    for (const source of inn.get(seed) ?? []) add(source, 3, `Links to ${name}`);
    const shared = /* @__PURE__ */ new Map();
    for (const middle of neighbours(seed)) {
      if (vault.degree(middle) > BUSY_NEIGHBOUR) continue;
      for (const other of neighbours(middle)) {
        if (other !== seed) shared.set(other, (shared.get(other) ?? 0) + 1);
      }
    }
    for (const [path, n] of shared) {
      add(path, Math.min(n, 3), `${n} shared ${n === 1 ? "link" : "links"} with ${name}`);
    }
    if (vault.relate) {
      for (const conn of vault.relate.connections(seed)) add(conn.path, RELATIONSHIP, `${name}'s ${conn.prop}`);
      if (vault.relate.meaningReady()) {
        for (const hit of vault.relate.similar(seed, SIMILAR_PER_SEED)) add(hit.path, 2 * hit.score, `Close in meaning to ${name}`);
      }
    }
    const seedFile = vault.fileAt(seed);
    const seedTags = new Set(tagsOf(seedFile ? vault.cacheOf(seedFile) : null).map((t) => t.toLowerCase()));
    if (!seedTags.size) continue;
    for (const file of pool) {
      if (file.path === seed) continue;
      const common = [...new Set(tagsOf(vault.cacheOf(file)).map((t) => t.toLowerCase()))].filter((t) => seedTags.has(t));
      if (common.length) add(file.path, 0.5 * Math.min(common.length, 2), `Shares #${common[0]} with ${name}`);
    }
  }
  return [...scores].filter(([, s]) => s.total >= MIN_SCORE).sort((a, b) => b[1].total - a[1].total || (byPath.get(b[0])?.stat.mtime ?? 0) - (byPath.get(a[0])?.stat.mtime ?? 0)).flatMap(([path, s]) => {
    const file = byPath.get(path);
    return file ? [{ file, lead: s.reason }] : [];
  });
}

// src/compose/rediscover.ts
var DAY_MS = 864e5;
var SHORT_NOTE_BYTES = 1200;
var HUB_DEGREE = 10;
var RECENT_VISIT_DAYS = 60;
var FRIEND_VISITS = 4;
var FRIEND_ABSENT_DAYS = 45;
var ON_THIS_DAY_SPAN = 3;
function forgottenNotes(files, now, months) {
  const cutoff = new Date(now);
  cutoff.setMonth(cutoff.getMonth() - months);
  return files.filter((f) => f.stat.mtime < cutoff.getTime());
}
function seeded(seed) {
  let h = 1779033703 ^ seed.length;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 3432918353);
    h = h << 13 | h >>> 19;
  }
  let a = h >>> 0;
  return () => {
    a = a + 1831565813 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function dailyShuffle(items, now, salt) {
  const day = Math.floor((now.getTime() - now.getTimezoneOffset() * 6e4) / DAY_MS);
  const rng = seeded(`${day}/${salt}`);
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
var plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;
function calendarDistance(a, b) {
  const dayOf = (d) => Date.UTC(2001, d.getMonth(), d.getDate()) / DAY_MS;
  const diff = Math.abs(dayOf(a) - dayOf(b));
  return Math.min(diff, 365 - diff);
}
function onThisDay(vault, pool) {
  const now = vault.now;
  const hits = [];
  for (const file of pool) {
    for (const [at, verb] of [
      [file.stat.ctime, "Created"],
      [file.stat.mtime, "Last edited"]
    ]) {
      const d = new Date(at);
      const years = now.getFullYear() - d.getFullYear();
      if (years < 1) continue;
      const distance = calendarDistance(d, now);
      if (distance > ON_THIS_DAY_SPAN) continue;
      const when = distance === 0 ? "today" : "this week";
      hits.push({ file, distance, at, lead: `${verb} ${plural(years, "year", "years")} ago ${when}` });
      break;
    }
  }
  return hits.sort((a, b) => a.distance - b.distance || a.at - b.at).map(({ file, lead }) => ({ file, lead }));
}
function rediscover(vault, pool, cfg, settings) {
  const now = vault.now;
  const untouched = (f) => `untouched for ${spanSince(f.stat.mtime, now)}`;
  const forgotten = () => dailyShuffle(forgottenNotes(pool, now, settings.rediscoverMonths), now, cfg.id);
  const visits = vault.activity.visits();
  const lastVisit = (f) => visits.get(f.path)?.last ?? 0;
  switch (cfg.strategy) {
    case "gems": {
      const backlinks = vault.links().in;
      return forgotten().map((file) => ({ file, n: backlinks.get(file.path)?.size ?? 0 })).filter(({ n }) => n >= 2).sort((a, b) => b.n - a.n).map(({ file, n }) => ({ file, lead: `${plural(n, "backlink", "backlinks")}, ${untouched(file)}` }));
    }
    case "unfinished":
      return forgotten().filter((f) => f.stat.size <= SHORT_NOTE_BYTES && vault.degree(f.path) <= 1).map((file) => ({ file, lead: vault.degree(file.path) ? "Short, with one link" : "Short and unlinked" }));
    case "on-this-day":
      return onThisDay(vault, pool);
    case "hubs": {
      const awake = now.getTime() - RECENT_VISIT_DAYS * DAY_MS;
      return forgotten().map((file) => ({ file, d: vault.degree(file.path) })).filter(({ file, d }) => d >= HUB_DEGREE && lastVisit(file) < awake).sort((a, b) => b.d - a.d).map(({ file, d }) => ({ file, lead: `${plural(d, "connection", "connections")}, ${untouched(file)}` }));
    }
    case "old-friends": {
      const absent = now.getTime() - FRIEND_ABSENT_DAYS * DAY_MS;
      return pool.map((file) => ({ file, v: visits.get(file.path) })).filter(({ v }) => v !== void 0 && v.count >= FRIEND_VISITS && v.last < absent).sort((a, b) => (b.v?.count ?? 0) - (a.v?.count ?? 0)).map(({ file, v }) => ({
        file,
        lead: `Opened ${v?.count ?? 0} times, last on ${relativeDay(new Date(v?.last ?? 0), now)}`
      }));
    }
    case "unlinked":
      return similarButUnlinked(vault, pool, lastVisit);
    default:
      return forgotten().map((file) => ({
        file,
        lead: `Untouched for ${spanSince(file.stat.mtime, now)}`
      }));
  }
}
var UNLINKED_PER_SEED = 40;
function similarButUnlinked(vault, pool, lastVisit) {
  const relate = vault.relate;
  if (!relate?.meaningReady()) return [];
  const seeds = recentSeeds(vault);
  const seedSet = new Set(seeds);
  const byPath = new Map(pool.map((f) => [f.path, f]));
  const { out, in: inn } = vault.links();
  const awake = vault.now.getTime() - RECENT_VISIT_DAYS * DAY_MS;
  const best = /* @__PURE__ */ new Map();
  for (const seed of seeds) {
    const linked = /* @__PURE__ */ new Set([...out.get(seed) ?? [], ...inn.get(seed) ?? []]);
    for (const conn of relate.connections(seed)) linked.add(conn.path);
    for (const hit of relate.similar(seed, UNLINKED_PER_SEED)) {
      const file = byPath.get(hit.path);
      if (!file || seedSet.has(hit.path) || linked.has(hit.path) || lastVisit(file) >= awake) continue;
      const prev = best.get(hit.path);
      if (!prev || hit.score > prev.score) best.set(hit.path, { score: hit.score, seed });
    }
  }
  return [...best].sort((a, b) => b[1].score - a[1].score).flatMap(([path, { seed }]) => {
    const file = byPath.get(path);
    return file ? [{ file, lead: `Close in meaning to ${noteName(seed)}, not linked` }] : [];
  });
}

// src/compose/relate.ts
var RELATE_CONTRACT = 1;
var RELATE_EVENTS = {
  ready: "relate:ready",
  request: "relate:request",
  changed: "relate:changed",
  unload: "relate:unload"
};
var METHODS = ["search", "connections", "similar", "meaningReady"];
function asRelateApi(value) {
  if (typeof value !== "object" || value === null) return null;
  const v = value;
  if (v.version !== RELATE_CONTRACT) return null;
  return METHODS.every((m) => typeof v[m] === "function") ? value : null;
}
function closeness(score) {
  if (score >= 0.75) return "Very close in meaning";
  if (score >= 0.6) return "Close in meaning";
  return "Related in meaning";
}
function relateView(api, searches) {
  const guard = (fn, fallback) => {
    try {
      return fn();
    } catch (err) {
      console.error("Home Cards: Relate failed", err);
      return fallback;
    }
  };
  return {
    connections: (path) => guard(() => api.connections(path), []),
    similar: (path, limit) => guard(() => api.similar(path, limit), []),
    meaningReady: () => guard(() => api.meaningReady(), false),
    results: (query) => searches.get(query.trim())
  };
}
var SEARCH_WAIT_MS = 2e3;
async function runSearches(api, queries, opts = {}) {
  const { cache, waitMs = SEARCH_WAIT_MS, onLate, sleep } = opts;
  const out = /* @__PURE__ */ new Map();
  const distinct = [...new Set(queries.map((q) => q.trim()).filter(Boolean))];
  await Promise.all(
    distinct.map(async (q) => {
      const kept = cache?.get(q);
      if (kept) {
        out.set(q, kept);
        return;
      }
      let late = false;
      const search = api.search(q).then(
        (hits2) => {
          const list = Array.isArray(hits2) ? hits2 : [];
          cache?.set(q, list);
          if (late) onLate?.();
          return list;
        },
        (err) => {
          console.error("Home Cards: Relate search failed", err);
          return [];
        }
      );
      const hits = sleep ? await Promise.race([search, sleep(waitMs).then(() => null)]) : await search;
      if (hits === null) late = true;
      out.set(q, hits ?? []);
    })
  );
  return out;
}
function chainText(steps) {
  return steps.map((s) => `${s.prop}: ${noteName(s.to)}`).join(" \u2192 ");
}
function hitLead(hit, query) {
  const chain = hit.paths.find((p) => p.length > 1);
  if (chain) return chainText(chain);
  const q = query.trim().toLowerCase();
  const reasons = hit.reasons.filter((r) => !q.includes(r.trim().toLowerCase()));
  return reasons.length ? reasons.join("; ") : void 0;
}

// src/compose/rank.ts
var collator = new Intl.Collator(void 0, { numeric: true });
var byTitle = (settings) => (file) => cleanTitle(file.basename, settings);
function sortByKey(vault, files, key, dir, settings) {
  const title = byTitle(settings);
  const sign = dir === "desc" ? -1 : 1;
  return files.map((file) => {
    const value = key ? firstValue(frontmatterValue(vault.cacheOf(file), key)) : "";
    return {
      file,
      has: value !== "",
      key: value || String(file.stat.mtime).padStart(16, "0"),
      title: title(file)
    };
  }).sort((a, b) => {
    if (a.has !== b.has) return a.has ? -1 : 1;
    const primary = sign * collator.compare(a.key, b.key);
    return primary || collator.compare(a.title, b.title);
  }).map((d) => d.file);
}
function byPopularity(vault, files, most, settings) {
  const counts = vault.inboundCounts();
  const title = byTitle(settings);
  const sign = most ? -1 : 1;
  return files.map((file) => ({ file, n: counts.get(file.path) ?? 0, title: title(file) })).sort((a, b) => sign * (a.n - b.n) || collator.compare(a.title, b.title)).map(({ file, n }) => ({ file, lead: `${n} ${n === 1 ? "link" : "links"}` }));
}
var plain = (files) => files.map((file) => ({ file }));
function sectionPool(vault, cfg, marks = emptyMarks()) {
  const scope = compileScope(cfg);
  const conditions = compileConditions(cfg.conditions, vault.now);
  const snoozed = cfg.kind !== "pinned" && Object.keys(marks.snoozed).length > 0;
  const quiet = cfg.kind === "rediscover" && marks.quiet.length > 0 ? new Set(marks.quiet) : null;
  if (!scope && !conditions && !snoozed && !quiet) return vault.files;
  return vault.files.filter((f) => {
    if (snoozed && isSnoozed(marks, f.path, vault.now)) return false;
    if (quiet?.has(f.path)) return false;
    const cache = vault.cacheOf(f);
    return (!scope || scope(f, cache)) && (!conditions || conditions(f, cache));
  });
}
function rankSection(vault, cfg, settings) {
  const cacheOf = (f) => vault.cacheOf(f);
  const pool = sectionPool(vault, cfg, settings.marks);
  switch (cfg.kind) {
    case "pinned": {
      const byPath = new Map(pool.map((f) => [f.path, f]));
      return plain(settings.marks.pinned.map((p) => byPath.get(p)).filter((f) => f !== void 0));
    }
    case "recent-opened": {
      const byPath = new Map(pool.map((f) => [f.path, f]));
      return plain(
        vault.openedPaths().map((p) => byPath.get(p)).filter((f) => f !== void 0)
      );
    }
    case "recent-created":
      return plain([...pool].sort((a, b) => b.stat.ctime - a.stat.ctime));
    case "recent-modified":
      return plain([...pool].sort((a, b) => b.stat.mtime - a.stat.mtime));
    case "most-linked":
    case "least-linked":
      return byPopularity(vault, pool, cfg.kind === "most-linked", settings);
    case "rediscover":
      return rediscover(vault, pool, cfg, settings);
    case "continue":
      return continueWorking(vault, pool);
    case "related":
      return relatedToRecent(vault, pool);
    case "relate": {
      const hits = vault.relate?.results(cfg.query) ?? [];
      const byPath = new Map(pool.map((f) => [f.path, f]));
      return hits.flatMap((hit) => {
        const file = byPath.get(hit.path);
        return file ? [{ file, lead: hitLead(hit, cfg.query) }] : [];
      });
    }
    case "links-out":
    case "links-in": {
      const { out, in: inn } = vault.links();
      const paths = (cfg.kind === "links-out" ? out : inn).get(cfg.note) ?? /* @__PURE__ */ new Set();
      const covered = new Set((vault.relate?.connections(cfg.note) ?? []).map((c) => c.path));
      const hits = pool.filter((f) => paths.has(f.path) && f.path !== cfg.note && !covered.has(f.path));
      return plain(cfg.kind === "links-in" ? hits.sort((a, b) => b.stat.mtime - a.stat.mtime) : hits);
    }
    case "relationship": {
      const byPath = new Map(pool.map((f) => [f.path, f]));
      const conns = vault.relate?.connections(cfg.note) ?? [];
      return plain(conns.filter((c) => c.prop === cfg.relation).flatMap((c) => byPath.get(c.path) ?? []));
    }
    case "similar": {
      const byPath = new Map(pool.map((f) => [f.path, f]));
      const hits = vault.relate?.meaningReady() ? vault.relate.similar(cfg.note, cfg.count * 4) : [];
      return hits.flatMap((h) => {
        const file = byPath.get(h.path);
        return file && file.path !== cfg.note ? [{ file, lead: closeness(h.score) }] : [];
      });
    }
    case "tag": {
      const want = cfg.tag.replace(/^#/, "").toLowerCase();
      if (!want) return [];
      const hits = pool.filter(
        (f) => tagsOf(cacheOf(f)).some((t) => {
          const tag = t.toLowerCase();
          return tag === want || tag.startsWith(`${want}/`);
        })
      );
      return plain(sortByKey(vault, hits, cfg.sortKey, cfg.sortDir, settings));
    }
    case "property": {
      if (!cfg.propertyKey) return [];
      const want = cfg.propertyValue.trim().toLowerCase();
      const hits = pool.filter((f) => {
        const raw = frontmatterValue(cacheOf(f), cfg.propertyKey);
        if (raw == null || raw === "") return false;
        return !want || asStringList(raw).some((v) => v.toLowerCase() === want);
      });
      return plain(sortByKey(vault, hits, cfg.sortKey || cfg.propertyKey, cfg.sortDir, settings));
    }
  }
}

// src/compose/legacy-typify.ts
async function loadTypifyIcons(app, typeKey) {
  const out = /* @__PURE__ */ new Map();
  const path = `${app.vault.configDir}/plugins/typify/data.json`;
  try {
    if (!await app.vault.adapter.exists(path)) return out;
    const parsed = JSON.parse(await app.vault.adapter.read(path));
    for (const style of parsed.statusStyles ?? []) {
      const name = (style.name ?? "").trim();
      const icon = (style.icon ?? "").trim();
      if (!name || !icon) continue;
      if (!(style.appliesTo ?? ["type"]).includes(typeKey)) continue;
      out.set(name.toLowerCase(), icon);
    }
  } catch {
    return /* @__PURE__ */ new Map();
  }
  return out;
}

// src/compose/images.ts
var IMAGE_FILE = /\.(png|jpe?g|gif|webp|svg|avif|bmp)$/i;
var bare = (link) => link.split("|")[0].split("#")[0].trim();
function imageLink(raw) {
  const value = Array.isArray(raw) ? raw[0] : raw;
  if (typeof value !== "string") return null;
  let text = value.trim();
  const wiki = /^!?\[\[([^\]]+)\]\]$/.exec(text);
  const markdown = /^!?\[[^\]]*\]\(<?([^)>]+)>?\)$/.exec(text);
  if (wiki) text = wiki[1];
  else if (markdown) text = markdown[1];
  text = bare(text);
  if (!text || /^[a-z][a-z0-9+.-]*:/i.test(text)) return null;
  try {
    text = decodeURI(text);
  } catch {
    return null;
  }
  return IMAGE_FILE.test(text) ? text : null;
}
function imageLinkFor(cache, properties) {
  for (const key of splitList(properties)) {
    const link = imageLink(propertyValue(cache, key));
    if (link) return link;
  }
  for (const embed of cache?.embeds ?? []) {
    const link = bare(embed.link);
    if (IMAGE_FILE.test(link) && !/^[a-z][a-z0-9+.-]*:/i.test(link)) return link;
  }
  return null;
}

// src/compose/vault.ts
var NO_ACTIVITY = { events: () => [], visits: () => /* @__PURE__ */ new Map() };
var VaultSnapshot = class {
  constructor(app, now = /* @__PURE__ */ new Date(), history = [], scope = null, activity = NO_ACTIVITY, relate = null) {
    this.app = app;
    this.now = now;
    this.history = history;
    this.activity = activity;
    this.relate = relate;
    this.inbound = null;
    this.graph = null;
    this.files = notesIn(app, scope);
  }
  /**
   * The note-to-note link graph, from the metadata cache's resolved links,
   * built once per compose on first use. Links to attachments are left out.
   */
  links() {
    if (this.graph) return this.graph;
    const out = /* @__PURE__ */ new Map();
    const inn = /* @__PURE__ */ new Map();
    const add = (map, key, value) => {
      const set = map.get(key);
      if (set) set.add(value);
      else map.set(key, /* @__PURE__ */ new Set([value]));
    };
    for (const [source, targets] of Object.entries(this.app.metadataCache.resolvedLinks ?? {})) {
      for (const target of Object.keys(targets ?? {})) {
        if (target === source || !target.endsWith(".md")) continue;
        add(out, source, target);
        add(inn, target, source);
      }
    }
    return this.graph = { out, in: inn };
  }
  /** The note at `path`, inside the page's scope or not; null when there is none. */
  fileAt(path) {
    return this.app.vault.getFileByPath(path);
  }
  /** Distinct notes linked to or from `path`. */
  degree(path) {
    const { out, in: inn } = this.links();
    const o = out.get(path);
    const i = inn.get(path);
    if (!o) return i?.size ?? 0;
    if (!i) return o.size;
    let n = o.size;
    for (const p of i) if (!o.has(p)) n++;
    return n;
  }
  /** Paths of recently opened files, newest first. */
  openedPaths() {
    return mergeOpened(this.app.workspace.getLastOpenFiles(), this.history);
  }
  cacheOf(file) {
    return this.app.metadataCache.getFileCache(file);
  }
  /**
   * The resource URL of a note's card image, resolved as Obsidian resolves
   * a link written in that note; null when the link leads to no image.
   */
  imageUrl(file, cache, properties) {
    const link = imageLinkFor(cache, properties);
    if (!link) return null;
    const dest = this.app.metadataCache.getFirstLinkpathDest(link, file.path);
    return dest && IMAGE_FILE.test(dest.path) ? this.app.vault.getResourcePath(dest) : null;
  }
  /** Inbound link totals per path; computed on first use. */
  inboundCounts() {
    return this.inbound ??= inboundCounts(this.app);
  }
};
function notesIn(app, scope) {
  const all = app.vault.getMarkdownFiles();
  if (!scope) return all;
  return all.filter((file) => scope(file, app.metadataCache.getFileCache(file)));
}
function untitledPath(folder, exists) {
  const prefix = folder ? `${folder}/` : "";
  for (let n = 0; ; n++) {
    const path = `${prefix}Untitled${n ? ` ${n}` : ""}.md`;
    if (!exists(path)) return path;
  }
}
function discoverPropertyTypes(app) {
  const samples = /* @__PURE__ */ new Map();
  for (const file of app.vault.getMarkdownFiles()) {
    const fm = app.metadataCache.getFileCache(file)?.frontmatter;
    if (!fm) continue;
    for (const [k, v] of Object.entries(fm)) {
      if (k === "position") continue;
      const list = samples.get(k) ?? [];
      if (list.length < 300) list.push(v);
      samples.set(k, list);
    }
  }
  const keys = [...samples.keys()].sort((a, b) => a.localeCompare(b));
  return new Map(keys.map((k) => [k, inferType(samples.get(k) ?? [])]));
}
function discoverValues(app, key, limit = 200) {
  const counts = /* @__PURE__ */ new Map();
  for (const file of app.vault.getMarkdownFiles()) {
    const raw = propertyValue(app.metadataCache.getFileCache(file), key);
    for (const v of Array.isArray(raw) ? raw : [raw]) {
      if (typeof v !== "string" && typeof v !== "number") continue;
      const text = String(v).trim();
      if (text) counts.set(text, (counts.get(text) ?? 0) + 1);
    }
  }
  return [...counts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, limit).map(([v]) => v);
}
function inboundCounts(app) {
  const totals = /* @__PURE__ */ new Map();
  const table = app.metadataCache.resolvedLinks ?? {};
  for (const targets of Object.values(table)) {
    for (const [target, n] of Object.entries(targets ?? {})) {
      totals.set(target, (totals.get(target) ?? 0) + n);
    }
  }
  return totals;
}

// src/compose/note-page.ts
var CARDS = 8;
function noteSections(path, relate, links) {
  const size = (n) => Math.min(LIMITS.count.max, Math.max(CARDS, n));
  const sizes = /* @__PURE__ */ new Map();
  for (const c of relate?.connections(path) ?? []) sizes.set(c.prop, (sizes.get(c.prop) ?? 0) + 1);
  const sections = [...sizes].map(
    ([prop, n]) => blankSection({
      id: `note-rel-${prop}`,
      kind: "relationship",
      note: path,
      relation: prop,
      count: size(n)
    })
  );
  const props = [...sizes.keys()];
  const rest = props.length > 0;
  sections.push(
    blankSection({ id: "note-out", kind: "links-out", note: path, count: size(links.out.get(path)?.size ?? 0), title: rest ? "Other links in this note" : "" }),
    blankSection({ id: "note-in", kind: "links-in", note: path, count: size(links.in.get(path)?.size ?? 0), title: rest ? "Other backlinks" : "" })
  );
  if (relate?.meaningReady()) sections.push(blankSection({ id: "note-similar", kind: "similar", note: path, count: CARDS }));
  return sections;
}
function neighbourCount(path, links, relate) {
  const all = /* @__PURE__ */ new Set([...links.out.get(path) ?? [], ...links.in.get(path) ?? []]);
  for (const c of relate?.connections(path) ?? []) all.add(c.path);
  all.delete(path);
  return all.size;
}

// src/compose/compose.ts
var MORE_PAGES = 3;
function pageOrder(sections) {
  const enabled = sections.filter((cfg) => cfg.enabled);
  return [...enabled.filter((cfg) => cfg.kind === "pinned"), ...enabled.filter((cfg) => cfg.kind !== "pinned")];
}
async function iconsFor(app, settings) {
  return settings.showGlyph && settings.typifyIcons ? loadTypifyIcons(app, settings.typeProperty) : /* @__PURE__ */ new Map();
}
async function composePage(app, settings, { deks, now = /* @__PURE__ */ new Date(), opened = [], sections: listed = settings.sections, scope = null, activity, relate = null, searches: searchOptions, note } = {}) {
  const icons = await iconsFor(app, settings);
  const queries = note ? [] : listed.filter((cfg) => cfg.enabled && cfg.kind === "relate").map((cfg) => cfg.query);
  const searches = relate && queries.length ? await runSearches(relate, queries, searchOptions) : /* @__PURE__ */ new Map();
  const vault = new VaultSnapshot(app, now, opened, scope, activity, relate ? relateView(relate, searches) : null);
  const configs = note ? noteSections(note, vault.relate, vault.links()) : [...listed];
  const notes = note ? neighbourCount(note, vault.links(), vault.relate) : vault.files.length;
  const sections = pageOrder(configs);
  const taken = /* @__PURE__ */ new Set();
  const ranked = sections.map((cfg) => {
    const all = rankSection(vault, cfg, settings);
    const picked = [];
    let claimed = 0;
    let next = 0;
    for (; next < all.length && picked.length < cfg.count; next++) {
      const r = all[next];
      if (settings.dedupe && taken.has(r.file.path)) {
        claimed++;
        continue;
      }
      picked.push(r);
    }
    for (const r of picked) taken.add(r.file.path);
    return { cfg, all, next, picked, claimed };
  });
  const extras = ranked.map(({ cfg, all, next }) => {
    const more = [];
    for (let i = next; i < all.length && more.length < cfg.count * MORE_PAGES; i++) {
      const r = all[i];
      if (settings.dedupe && taken.has(r.file.path)) continue;
      more.push(r);
      if (settings.dedupe) taken.add(r.file.path);
    }
    return more;
  });
  const composed = await Promise.all(
    ranked.map(async ({ cfg, picked, claimed }, i) => {
      const ctx = {
        settings,
        cacheOf: (f) => vault.cacheOf(f),
        now,
        metaKey: cfg.sortKey || cfg.propertyKey || "date",
        fields: cfg.fields,
        image: cfg.image,
        imageUrl: (f, cache) => vault.imageUrl(f, cache, settings.imageProperties),
        icons,
        deks
      };
      const lazy = { ...ctx, deks: void 0 };
      const [cards, more] = await Promise.all([
        Promise.all(picked.map((r) => buildCard(ctx, r.file, r.lead))),
        Promise.all(extras[i].map((r) => buildCard(lazy, r.file, r.lead)))
      ]);
      return { config: cfg, cards, more, claimed };
    })
  );
  return { sections: composed, configs, notes };
}

// src/settings/custom-background.ts
var CUSTOM_PREFIX = "custom-";
var CUSTOM_BACKGROUNDS = {
  /** How many images a vault may keep. Each is a few hundred KB at most. */
  max: 12,
  /** Fade a new image starts with: a share of the theme background over it. */
  defaultFade: 75,
  /** A pattern is stored no wider than this, and drawn at half of it. */
  patternWidth: 800,
  /** A picture's longer side is stored no longer than this. */
  pictureEdge: 2400,
  /** Smaller images repeat as noise or blur when stretched. */
  minEdge: 16,
  /** Source files above this are refused before decoding. */
  maxSourceBytes: 25 * 1024 * 1024,
  /** Longest label kept. */
  maxLabel: 40,
  /** Folder inside the plugin's own folder that holds the stored images. */
  folder: "backgrounds"
};
var STORED_FILE = /^[A-Za-z0-9_-]+\.(webp|png|jpe?g|gif)$/;
var CUSTOM_ID = /^custom-[a-z0-9]+$/;
var isStoredFileName = (name) => STORED_FILE.test(name);
var isCustomId = (id) => CUSTOM_ID.test(id);
function newBackgroundId() {
  return `${CUSTOM_PREFIX}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}
function selectedCustom(settings) {
  return settings.customBackgrounds.find((bg) => bg.id === settings.background);
}
function sniffImage(head) {
  const starts = (...bytes) => bytes.every((b, i) => head[i] === b);
  if (starts(137, 80, 78, 71)) return "png";
  if (starts(255, 216, 255)) return "jpeg";
  if (starts(71, 73, 70, 56)) return "gif";
  if (starts(82, 73, 70, 70) && head[8] === 87 && head[9] === 69 && head[10] === 66 && head[11] === 80) {
    return "webp";
  }
  return null;
}
function storedSize(width, height, fit) {
  const scale = fit === "pattern" ? Math.min(1, CUSTOM_BACKGROUNDS.patternWidth / width) : Math.min(1, CUSTOM_BACKGROUNDS.pictureEdge / Math.max(width, height));
  return {
    width: Math.max(1, Math.round(width * scale)),
    height: Math.max(1, Math.round(height * scale))
  };
}
function labelFromFileName(name) {
  const base = name.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
  return (base || "Background").slice(0, CUSTOM_BACKGROUNDS.maxLabel);
}

// src/render/backgrounds.ts
var import_obsidian = require("obsidian");
var BackgroundError = class extends Error {
};
var BACKGROUND_PROPS = ["--hc-tile", "--hc-veil", "--hc-tile-w"];
function backgroundFolder(plugin) {
  const base = plugin.manifest.dir ?? `${plugin.app.vault.configDir}/plugins/${plugin.manifest.id}`;
  return (0, import_obsidian.normalizePath)(`${base}/${CUSTOM_BACKGROUNDS.folder}`);
}
var storedPath = (plugin, bg) => `${backgroundFolder(plugin)}/${bg.file}`;
function backgroundUrl(plugin, bg) {
  return plugin.app.vault.adapter.getResourcePath(storedPath(plugin, bg));
}
async function backgroundExists(plugin, bg) {
  try {
    return await plugin.app.vault.adapter.exists(storedPath(plugin, bg));
  } catch {
    return false;
  }
}
function backgroundProps(url, bg) {
  return {
    "--hc-tile": `url("${url.replace(/["\\]/g, "\\$&")}")`,
    "--hc-veil": `${bg.fade}%`,
    "--hc-tile-w": `${bg.width}px`
  };
}
async function encode(source, fit) {
  if (source.size > CUSTOM_BACKGROUNDS.maxSourceBytes) {
    throw new BackgroundError("That file is larger than 25 MB.");
  }
  const head = new Uint8Array(await source.slice(0, 16).arrayBuffer());
  if (!sniffImage(head)) throw new BackgroundError("Use a PNG, JPEG, WebP or GIF image.");
  let bitmap;
  try {
    bitmap = await createImageBitmap(source);
  } catch {
    throw new BackgroundError("That image could not be read.");
  }
  try {
    const { minEdge } = CUSTOM_BACKGROUNDS;
    if (bitmap.width < minEdge || bitmap.height < minEdge) {
      throw new BackgroundError("That image is too small to use.");
    }
    const size = storedSize(bitmap.width, bitmap.height, fit);
    const canvas = createEl("canvas");
    canvas.width = size.width;
    canvas.height = size.height;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new BackgroundError("This device cannot resize images.");
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(bitmap, 0, 0, size.width, size.height);
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/webp", 0.85));
    canvas.width = 0;
    if (!blob) throw new BackgroundError("That image could not be converted.");
    return {
      data: await blob.arrayBuffer(),
      width: size.width,
      extension: blob.type === "image/webp" ? "webp" : "png"
    };
  } finally {
    bitmap.close();
  }
}
async function addBackground(plugin, source, draft) {
  if (plugin.settings.customBackgrounds.length >= CUSTOM_BACKGROUNDS.max) {
    throw new BackgroundError(
      `Home Cards keeps up to ${CUSTOM_BACKGROUNDS.max} backgrounds. Remove one to add another.`
    );
  }
  const stored = await encode(source, draft.fit);
  const id = newBackgroundId();
  const bg = {
    id,
    label: draft.label.trim().slice(0, CUSTOM_BACKGROUNDS.maxLabel) || "Background",
    file: `${id}.${stored.extension}`,
    fit: draft.fit,
    width: stored.width,
    fade: draft.fade
  };
  const { adapter } = plugin.app.vault;
  const dir = backgroundFolder(plugin);
  try {
    if (!await adapter.exists(dir)) await adapter.mkdir(dir);
    await adapter.writeBinary(storedPath(plugin, bg), stored.data);
  } catch (err) {
    console.error("Home Cards: could not store the background", err);
    throw new BackgroundError("The image could not be saved in the plugin folder.");
  }
  return bg;
}
async function removeBackground(plugin, bg) {
  const { adapter } = plugin.app.vault;
  const dir = backgroundFolder(plugin);
  try {
    const path = storedPath(plugin, bg);
    if (await adapter.exists(path)) await adapter.remove(path);
    const left = await adapter.list(dir);
    if (!left.files.length && !left.folders.length) await adapter.rmdir(dir, false);
  } catch (err) {
    console.error("Home Cards: could not remove the background file", err);
  }
}
function chooseImage(onFile) {
  const input = createEl("input", { type: "file" });
  input.accept = "image/png,image/jpeg,image/webp,image/gif";
  input.addEventListener("change", () => {
    const file = input.files?.[0];
    if (file) onFile(file);
  });
  input.click();
}

// src/render/appearance.ts
function applyAppearance(root, plugin) {
  const s = plugin.settings;
  root.addClass("home-cards");
  root.dataset.surface = s.cardSurface;
  const custom = selectedCustom(s);
  if (custom) {
    root.dataset.pattern = "custom";
    root.dataset.fit = custom.fit;
    root.setCssProps(backgroundProps(backgroundUrl(plugin, custom), custom));
  } else {
    delete root.dataset.fit;
    for (const prop of BACKGROUND_PROPS) root.style.removeProperty(prop);
    if (s.background === "plain") delete root.dataset.pattern;
    else root.dataset.pattern = s.background;
  }
  root.toggleClass("hc-accent-rubrics", s.accentRubrics);
  root.setCssProps({
    "--hc-card-min": `${s.cardMinWidth}px`,
    "--hc-dek-lines": String(s.dekLines)
  });
}

// src/render/actions.ts
var import_obsidian3 = require("obsidian");

// src/compose/templates.ts
var EMPTY_TEMPLATE = Object.freeze({ folder: "", tags: [], properties: {} });
function hasFacts(t) {
  return t.tags.length > 0 || Object.keys(t.properties).length > 0;
}
function literalTag(raw) {
  const tag = raw.trim().replace(/^#/, "");
  return /^[^\s,*#]+$/.test(tag) ? tag : null;
}
function literalKey(raw) {
  const key = raw.trim();
  return key && !/[\n:]/.test(key) ? key : null;
}
function typedValue(raw) {
  const text = raw.trim();
  if (/^-?\d+(\.\d+)?$/.test(text)) return Number(text);
  if (/^(true|false)$/i.test(text)) return text.toLowerCase() === "true";
  return text;
}
function templateForScope(scope) {
  const t = { folder: "", tags: [], properties: {} };
  switch (scope.kind) {
    case "folder":
      t.folder = scope.folder;
      break;
    case "tag": {
      const tag = literalTag(scope.tag);
      if (tag) t.tags.push(tag);
      break;
    }
    case "property": {
      const key = literalKey(scope.propertyKey);
      if (key && scope.propertyValue.trim()) t.properties[key] = typedValue(scope.propertyValue);
      break;
    }
    default:
      break;
  }
  return t;
}
function mergeTemplates(...parts) {
  const out = { folder: "", tags: [], properties: {} };
  for (const part of parts) {
    if (part.folder) {
      if (out.folder && out.folder !== part.folder) return null;
      out.folder = part.folder;
    }
    for (const tag of part.tags) if (!out.tags.includes(tag)) out.tags.push(tag);
    for (const [key, value] of Object.entries(part.properties)) {
      if (key in out.properties && out.properties[key] !== value) return null;
      out.properties[key] = value;
    }
  }
  return out;
}
var RANKING_ONLY = /* @__PURE__ */ new Set(["recent-created", "recent-modified", "most-linked", "least-linked"]);
function sectionWrite(cfg, now) {
  const t = { folder: "", tags: [], properties: {} };
  let complete = true;
  if (cfg.kind === "property") {
    const key = literalKey(cfg.propertyKey);
    if (key && cfg.propertyValue.trim()) t.properties[key] = typedValue(cfg.propertyValue);
    else complete = false;
  } else if (cfg.kind === "tag") {
    const tag = literalTag(cfg.tag);
    if (tag) t.tags.push(tag);
    else complete = false;
  } else if (!RANKING_ONLY.has(cfg.kind)) {
    complete = false;
  }
  const tags = splitList(cfg.filterTags);
  if (tags.length === 1 && literalTag(tags[0])) t.tags.push(literalTag(tags[0]) ?? "");
  else if (tags.length) complete = false;
  const props = splitList(cfg.filterProps);
  const rule = props.length === 1 ? /^([^=]+)=(.+)$/.exec(props[0]) : null;
  const ruleKey = rule ? literalKey(rule[1]) : null;
  if (rule && ruleKey) t.properties[ruleKey] = typedValue(rule[2]);
  else if (props.length) complete = false;
  const folders = splitList(cfg.filterFolders);
  if (folders.length === 1 && folders[0].includes("/") && !folders[0].includes("*")) {
    t.folder = normalizeFolderPath(folders[0]);
  } else if (folders.length) complete = false;
  for (const cond of cfg.conditions) {
    if (!cond.property.trim()) continue;
    const stated = statedValue(cond);
    if (stated) {
      const key = literalKey(stated.key);
      const value2 = typedValue(stated.value);
      if (!key || key in t.properties && t.properties[key] !== value2) return { template: t, complete: false };
      t.properties[key] = value2;
      continue;
    }
    const test = compileCondition(cond, now);
    if (!test) continue;
    const field = cond.property.trim();
    const value = isFileField(field) ? now : t.properties[field];
    if (!test(value)) complete = false;
  }
  return { template: t, complete };
}
function acceptsMoves(write) {
  return write.complete && hasFacts(write.template) && !write.template.folder;
}
function describeTemplate(t) {
  const sets = Object.entries(t.properties).map(([k, v]) => `${k} to ${plainValue(v)}`);
  const parts = [];
  if (sets.length) parts.push(`set ${sets.join(", ")}`);
  if (t.tags.length) parts.push(`add ${t.tags.map((tag) => `#${tag}`).join(", ")}`);
  if (t.folder) parts.push(`file in ${t.folder}`);
  const text = parts.join(" and ");
  return text.charAt(0).toUpperCase() + text.slice(1);
}
function plainValue(value) {
  const text = String(value);
  return /^\[\[([^\]|#]+)(?:[#|][^\]]*)?\]\]$/.exec(text.trim())?.[1] ?? text;
}
function mergeValue(existing, value, replacing) {
  const sameAs = (target) => (v) => v === target || normalText(v) !== "" && normalText(v) === normalText(target);
  const same = sameAs(value);
  if (Array.isArray(existing)) {
    const old = replacing === void 0 ? null : sameAs(replacing);
    const kept = old ? existing.filter((v) => !old(v)) : existing;
    const dropped = kept.length < existing.length;
    if (kept.some(same)) return dropped ? { next: kept, change: "replaced" } : { next: existing, change: "unchanged" };
    return { next: [...kept, value], change: dropped ? "replaced" : "added" };
  }
  if (existing !== void 0 && existing !== null && same(existing)) return { next: existing, change: "unchanged" };
  return { next: value, change: "set" };
}
function describeChanges(changes, tags) {
  const parts = [];
  for (const c of changes) {
    const value = plainValue(c.value);
    if (c.change === "added") parts.push(`added ${value} to ${c.key}`);
    else if (c.change === "set") parts.push(`set ${c.key} to ${value}`);
    else if (c.change === "replaced") parts.push(`changed ${c.key} from ${plainValue(c.from ?? "")} to ${value}`);
  }
  if (tags.length) parts.push(`added ${tags.map((t) => `#${t}`).join(", ")}`);
  if (!parts.length) return "";
  const text = parts.length > 1 ? `${parts.slice(0, -1).join(", ")} and ${parts[parts.length - 1]}` : parts[0];
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// src/render/property-picker.ts
var import_obsidian2 = require("obsidian");
var KeyPicker = class extends import_obsidian2.FuzzySuggestModal {
  constructor(app, keys, onPick) {
    super(app);
    this.keys = keys;
    this.onPick = onPick;
    this.setPlaceholder("Choose a property");
  }
  getItems() {
    return this.keys;
  }
  getItemText(key) {
    return key;
  }
  onChooseItem(key) {
    this.onPick(key);
  }
};
var ValuePicker = class extends import_obsidian2.SuggestModal {
  constructor(app, key, known, onPick) {
    super(app);
    this.known = known;
    this.onPick = onPick;
    this.setPlaceholder(`Value for ${key}`);
  }
  getSuggestions(query) {
    const q = query.trim();
    const matches = this.known.filter((v) => v.toLowerCase().includes(q.toLowerCase()));
    return q && !this.known.some((v) => v.toLowerCase() === q.toLowerCase()) ? [q, ...matches] : matches;
  }
  renderSuggestion(value, el) {
    el.setText(value);
  }
  onChooseSuggestion(value) {
    this.onPick(value);
  }
};
function pickProperty(app, file) {
  const types = discoverPropertyTypes(app);
  new KeyPicker(app, [...types.keys()], (key) => {
    const type = types.get(key) ?? "text";
    const known = type === "boolean" ? ["true", "false"] : discoverValues(app, key);
    new ValuePicker(app, key, known, (value) => void setProperty(app, file, key, value, type === "list")).open();
  }).open();
}
async function setProperty(app, file, key, raw, addToList) {
  const value = typedValue(raw);
  const current = propertyValue(app.metadataCache.getFileCache(file), key);
  await app.fileManager.processFrontMatter(file, (fm) => {
    if (addToList) {
      const list = Array.isArray(fm[key]) ? fm[key] : fm[key] == null ? [] : [fm[key]];
      if (!list.some((v) => String(v) === String(value))) fm[key] = [...list, value];
    } else {
      fm[key] = value;
    }
  });
  const change = addToList ? `Added ${String(value)} to ${key}` : current === void 0 ? `Set ${key} to ${String(value)}` : `Changed ${key} to ${String(value)}`;
  new import_obsidian2.Notice(`${change} on ${file.basename}.`);
}

// src/render/actions.ts
function leafFor(app, where) {
  return app.workspace.getLeaf(where);
}
function cardActions(app, owner, hoverParent, source, marks) {
  return {
    open: (file, where) => void leafFor(app, where).openFile(file),
    menu: (file, evt, context) => showFileMenu(app, file, evt, source, context, marks),
    hover: hoverTracker(app, owner, hoverParent, source)
  };
}
function hoverTracker(app, owner, hoverParent, source) {
  let current = null;
  let x = 0;
  let y = 0;
  const show = (event) => {
    if (!current?.el.isConnected) return;
    app.workspace.trigger("hover-link", {
      event,
      source,
      hoverParent,
      targetEl: current.el,
      linktext: current.file.path,
      sourcePath: ""
    });
  };
  const listening = /* @__PURE__ */ new WeakSet();
  const listen = (doc) => {
    if (listening.has(doc)) return;
    listening.add(doc);
    owner.registerDomEvent(doc, "mousemove", (evt) => {
      if (!current) return;
      x = evt.clientX;
      y = evt.clientY;
    });
    owner.registerDomEvent(doc, "keydown", (evt) => {
      if (!current || evt.repeat || evt.key !== "Meta" && evt.key !== "Control") return;
      const view = doc.defaultView ?? void 0;
      show(new MouseEvent("mouseover", { view, clientX: x, clientY: y, metaKey: evt.metaKey, ctrlKey: evt.ctrlKey }));
    });
  };
  return {
    enter: (file, el, evt) => {
      listen(el.ownerDocument);
      current = { file, el };
      x = evt.clientX;
      y = evt.clientY;
      show(evt);
    },
    leave: (el) => {
      if (current?.el === el) current = null;
    },
    preview: (file, el) => {
      const box = el.getBoundingClientRect();
      const view = el.ownerDocument.defaultView ?? void 0;
      current = { file, el };
      show(new MouseEvent("mouseover", { view, clientX: box.left + box.width / 2, clientY: box.top + box.height / 2, metaKey: true, ctrlKey: true }));
      current = null;
    }
  };
}
function showFileMenu(app, file, evt, source, context, marks) {
  const menu = new import_obsidian3.Menu();
  const open = (title, icon, where) => menu.addItem(
    (item) => item.setSection("open").setTitle(title).setIcon(icon).onClick(() => void app.workspace.getLeaf(where).openFile(file))
  );
  open("Open in new tab", "file-plus", "tab");
  open("Open to the right", "separator-vertical", "split");
  if (marks) addMarkItems(menu, file.path, context, marks);
  for (const move of context.moves ?? []) {
    menu.addItem(
      (i) => i.setSection("action").setTitle(`Move to ${move.title}`).setIcon("arrow-right-to-line").onClick(() => move.run(file))
    );
  }
  menu.addItem(
    (i) => i.setSection("action").setTitle("Set a property\u2026").setIcon("list-plus").onClick(() => pickProperty(app, file))
  );
  app.workspace.trigger("file-menu", menu, file, source);
  if (evt.clientX === 0 && evt.clientY === 0 && evt.target instanceof HTMLElement) {
    const rect = evt.target.getBoundingClientRect();
    menu.showAtPosition({ x: rect.left + 16, y: rect.top + 16 });
  } else {
    menu.showAtMouseEvent(evt);
  }
}
function addMarkItems(menu, path, context, marks) {
  const item = (title, icon, run) => menu.addItem((i) => i.setSection("action").setTitle(title).setIcon(icon).onClick(run));
  const pinned = marks.isPinned(path);
  item(pinned ? "Unpin from Home" : "Pin to Home", pinned ? "pin-off" : "pin", () => marks.togglePin(path));
  if (!pinned) {
    item("Snooze for a week", "alarm-clock", () => marks.snooze(path, 7));
    item("Snooze for a month", "alarm-clock", () => marks.snooze(path, 30));
  }
  if (context.sectionKind === "rediscover") {
    const quiet = marks.isQuiet(path);
    item(quiet ? "Rediscover again" : "Don't rediscover", quiet ? "eye" : "eye-off", () => marks.toggleQuiet(path));
  }
}
async function createNote(app, where, template = EMPTY_TEMPLATE) {
  const chosen = template.folder ? app.vault.getFolderByPath(template.folder) : null;
  const folder = chosen ?? app.fileManager.getNewFileParent("");
  const exists = (p) => !!app.vault.getAbstractFileByPath((0, import_obsidian3.normalizePath)(p));
  const path = (0, import_obsidian3.normalizePath)(untitledPath(folder.isRoot() ? "" : folder.path, exists));
  const file = await app.vault.create(path, "");
  await applyTemplate(app, file, template);
  await leafFor(app, where).openFile(file, { active: true, eState: { rename: "all" } });
  return file;
}
async function applyTemplate(app, file, template, from) {
  const keys = Object.keys(template.properties);
  const changes = [];
  let added = [];
  if (!keys.length && !template.tags.length) return describeChanges(changes, added);
  await app.fileManager.processFrontMatter(file, (fm) => {
    for (const key of keys) {
      const value = template.properties[key];
      const old = from?.properties[key];
      const replacing = old !== void 0 && old !== value ? old : void 0;
      const { next, change } = mergeValue(fm[key], value, replacing);
      if (change !== "unchanged") fm[key] = next;
      changes.push({ key, value, change, from: replacing });
    }
    if (template.tags.length) {
      const current = Array.isArray(fm.tags) ? fm.tags : fm.tags != null ? [fm.tags] : [];
      const names = current.filter((t) => typeof t === "string");
      added = template.tags.filter((t) => !names.includes(t));
      fm.tags = [.../* @__PURE__ */ new Set([...names, ...template.tags])];
    }
  });
  return describeChanges(changes, added);
}
function rediscoverNote(app, settings, where, scope = null) {
  const months = settings.rediscoverMonths;
  const pool = forgottenNotes(notesIn(app, scope), /* @__PURE__ */ new Date(), months);
  if (!pool.length) {
    new import_obsidian3.Notice(`Every note has changed in the last ${months} ${months === 1 ? "month" : "months"}.`);
    return;
  }
  const file = pool[Math.floor(Math.random() * pool.length)];
  void leafFor(app, where).openFile(file);
}

// src/render/card.ts
var import_obsidian4 = require("obsidian");
var dragging = null;
var DRAG_TYPE = "application/x-home-cards-note";
var NO_DEK = "No opening sentence.";
function paneFor(evt) {
  const where = import_obsidian4.Keymap.isModEvent(evt);
  return where === true ? "tab" : where;
}
function renderImage(parent, src, onFail) {
  const img = parent.createEl("img", { attr: { src, alt: "", loading: "lazy", decoding: "async", draggable: "false" } });
  img.addEventListener("error", onFail, { once: true });
  return img;
}
function renderMedia(head, card) {
  const tile = () => {
    const el = createSpan({ cls: "hc-thumb is-tile", attr: { "aria-hidden": "true" } });
    if (card.icon) (0, import_obsidian4.setIcon)(el, card.icon);
    if (!el.firstElementChild) el.setText(card.title.charAt(0).toUpperCase());
    return el;
  };
  if (!card.image) {
    head.prepend(tile());
    return;
  }
  const img = renderImage(head, card.image, () => img.replaceWith(tile()));
  img.addClass("hc-thumb");
  head.prepend(img);
}
function renderGlyph(head, card) {
  const glyph = head.createSpan({ cls: "hc-glyph" });
  if (card.icon) {
    (0, import_obsidian4.setIcon)(glyph, card.icon);
    if (glyph.firstElementChild) {
      glyph.addClass("has-icon");
      return glyph;
    }
  }
  glyph.setText(card.title.charAt(0).toUpperCase());
  return glyph;
}
function renderPills(parent, card, opts) {
  const type = opts.showRubric ? card.rubric : "";
  if (!type && !card.tags.length) return;
  const pills = parent.createDiv({ cls: "hc-pills" });
  if (type) pills.createSpan({ cls: "hc-pill is-type", text: type });
  for (const t of card.tags) pills.createSpan({ cls: "hc-pill is-tag", text: t });
}
function renderDek(el, card) {
  if (card.dek === null) {
    const dek = el.createEl("p", { cls: "hc-dek" });
    dek.dataset.hcDekPath = card.file.path;
    dek.dataset.hcPending = "";
    return;
  }
  el.createEl("p", {
    cls: card.dek ? "hc-dek" : "hc-dek is-empty",
    text: card.dek || NO_DEK
  });
}
function settleDek(el, dek) {
  delete el.dataset.hcPending;
  el.toggleClass("is-empty", !dek);
  el.closest(".hc-card")?.toggleClass("no-dek", !dek);
  el.setText(dek || NO_DEK);
}
function renderCard(parent, card, opts, actions, context, dragFrom) {
  const el = parent.createEl("article", { cls: "hc-card" });
  const media = card.imageSlot !== "none";
  el.toggleClass("has-media", media);
  el.toggleClass("has-thumb", card.imageSlot === "thumbnail");
  el.toggleClass("has-glyph", !media && opts.showGlyph);
  el.dataset.search = card.search;
  el.dataset.hcPath = card.file.path;
  el.tabIndex = 0;
  if (card.image && card.imageMode === "cover") {
    el.addClass("has-cover");
    const cover = el.createDiv({ cls: "hc-cover" });
    renderImage(cover, card.image, () => {
      cover.remove();
      el.removeClass("has-cover");
    });
  }
  const head = el.createDiv({ cls: "hc-card-head" });
  head.createEl("h3", { cls: "hc-title", text: card.title });
  renderPills(head, card, opts);
  if (media) renderMedia(head, card);
  else if (opts.showGlyph) head.prepend(renderGlyph(head, card));
  if (opts.showDeks) renderDek(el, card);
  el.toggleClass("no-dek", !opts.showDeks || card.dek === "");
  if (card.meta) el.createEl("footer", { cls: "hc-foot", text: card.meta });
  const go = (evt) => actions.open(card.file, paneFor(evt));
  el.addEventListener("click", go);
  el.addEventListener("auxclick", (evt) => {
    if (evt.button === 1) actions.open(card.file, "tab");
  });
  el.addEventListener("keydown", (evt) => {
    if (evt.key !== "Enter") return;
    evt.preventDefault();
    go(evt);
  });
  const { menu, hover } = actions;
  if (menu) {
    el.addEventListener("contextmenu", (evt) => {
      evt.preventDefault();
      menu(card.file, evt, context);
    });
  }
  if (dragFrom !== null) {
    el.draggable = true;
    el.addEventListener("dragstart", (evt) => {
      dragging = { path: card.file.path, sectionId: dragFrom };
      evt.dataTransfer?.setData("text/plain", `[[${card.file.basename}]]`);
      evt.dataTransfer?.setData(DRAG_TYPE, card.file.path);
      el.addClass("is-dragging");
    });
    el.addEventListener("dragend", () => {
      dragging = null;
      el.removeClass("is-dragging");
    });
  }
  if (hover) {
    el.addEventListener("mouseenter", (evt) => hover.enter(card.file, el, evt));
    el.addEventListener("mouseleave", () => hover.leave(el));
  }
  return el;
}
function renderSection(parent, title, cards, opts, actions, options = {}) {
  const { emptyText = "", more = [], fold, paging, menuContext = {}, create, dragId, drop } = options;
  const section = parent.createDiv({ cls: "hc-section" });
  section.dataset.hcVisible = String(cards.length);
  if (title) renderHead(section, title, cards.length, fold, create);
  if (drop && dragId) acceptDrops(section, dragId, drop);
  if (!cards.length && !more.length && emptyText) {
    section.createDiv({ cls: "hc-empty", text: emptyText });
    return section;
  }
  const grid = section.createDiv({ cls: "hc-grid" });
  [...cards, ...more].forEach((card, i) => {
    renderCard(grid, card, opts, actions, menuContext, dragId ?? null).dataset.hcIndex = String(i);
  });
  if (more.length && paging) {
    const row = section.createDiv({ cls: "hc-more-row" });
    pagingButton(row, "hc-more", "See more", "chevron-down", paging.more);
    pagingButton(row, "hc-less", "Show fewer", "chevron-up", paging.fewer);
  }
  return section;
}
function pagingButton(row, cls, text, icon, run) {
  const btn = row.createEl("button", { cls });
  (0, import_obsidian4.setIcon)(btn.createSpan({ cls: "hc-more-icon" }), icon);
  btn.createSpan({ text });
  btn.addEventListener("click", run);
}
function renderHead(section, title, count, fold, create) {
  const head = section.createDiv({ cls: "hc-section-head" });
  head.createEl("h2", { text: title });
  head.createSpan({ cls: "hc-count", text: String(count) });
  if (create) {
    const add = head.createEl("button", { cls: "hc-create clickable-icon" });
    (0, import_obsidian4.setIcon)(add, "plus");
    (0, import_obsidian4.setTooltip)(add, create.tooltip, { placement: "top" });
    add.addEventListener("click", (evt) => {
      evt.stopPropagation();
      create.run(evt);
    });
  }
  if (!fold) return;
  head.addClass("is-foldable");
  const toggle = head.createEl("button", { cls: "hc-fold clickable-icon" });
  (0, import_obsidian4.setIcon)(toggle, "chevron-down");
  const paint = (collapsed) => {
    section.toggleClass("is-collapsed", collapsed);
    toggle.setAttr("aria-expanded", String(!collapsed));
    (0, import_obsidian4.setTooltip)(toggle, collapsed ? "Expand section" : "Collapse section", { placement: "left" });
  };
  paint(fold.collapsed);
  head.addEventListener("click", () => {
    const collapsed = !section.hasClass("is-collapsed");
    paint(collapsed);
    fold.onToggle(collapsed);
  });
}
function acceptDrops(section, sectionId, drop) {
  const accepts = (evt) => dragging !== null && dragging.sectionId !== sectionId && (evt.dataTransfer?.types.includes(DRAG_TYPE) ?? false);
  let hint = null;
  const clear = () => {
    section.removeClass("is-drop-target");
    hint?.remove();
    hint = null;
  };
  section.addEventListener("dragover", (evt) => {
    if (!accepts(evt)) return;
    evt.preventDefault();
    if (evt.dataTransfer) evt.dataTransfer.dropEffect = "move";
    if (!hint) {
      section.addClass("is-drop-target");
      hint = section.createDiv({ cls: "hc-drop-hint", text: drop.hint });
      section.find(".hc-section-head")?.after(hint);
    }
  });
  section.addEventListener("dragleave", (evt) => {
    if (!section.contains(evt.relatedTarget)) clear();
  });
  section.addEventListener("drop", (evt) => {
    const from = dragging;
    clear();
    if (!from || !accepts(evt)) return;
    evt.preventDefault();
    drop.run(from.path, from.sectionId);
  });
  section.addEventListener("dragend", clear);
}

// src/render/lazy-deks.ts
function observeDeks(root, fill) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target;
        observer.unobserve(el);
        const path = el.dataset.hcDekPath;
        if (path) fill(path, el);
      }
    },
    // Start one viewport early so the text is there on arrival.
    { root: null, rootMargin: "100% 0px" }
  );
  for (const el of Array.from(root.querySelectorAll("[data-hc-dek-path]"))) {
    observer.observe(el);
  }
  return () => observer.disconnect();
}

// src/render/bases-view.ts
var BASES_VIEW_ID = "home-cards";
var HomeCardsBasesView = class extends import_obsidian5.BasesView {
  constructor(controller, containerEl, plugin) {
    super(controller);
    this.plugin = plugin;
    this.type = BASES_VIEW_ID;
    /** Invalidates async renders that land after newer data or an unload. */
    this.generation = 0;
    this.disposeObserver = null;
    /** Holds the hover preview Obsidian opens for a card. */
    this.hover = { hoverPopover: null };
    this.root = containerEl.createDiv({ cls: "hc-in-bases" });
    this.actions = cardActions(plugin.app, this, this.hover, BASES_VIEW_ID, plugin.markActions);
    this.registerEvent(
      plugin.onRefresh(() => {
        if (this.hasData()) this.onDataUpdated();
      })
    );
  }
  onunload() {
    this.generation++;
    this.stopObserving();
    this.root.remove();
  }
  /**
   * Bases calls this on every query re-run and replaces `this.data`
   * wholesale, so the view keeps nothing from a previous run.
   */
  onDataUpdated() {
    const token = ++this.generation;
    this.stopObserving();
    this.render(token).catch((err) => {
      console.error("Home Cards: Bases render failed", err);
      if (token !== this.generation) return;
      this.root.empty();
      this.root.createDiv({
        cls: "hc-empty",
        text: "Could not render this view. See the console for details."
      });
    });
  }
  /** Whether Bases has delivered a query result yet. */
  hasData() {
    return this.data !== void 0;
  }
  async render(token) {
    if (!this.hasData()) return;
    const { app } = this;
    const { plugin } = this;
    const settings = plugin.settings;
    const groups = this.data.groupedData;
    const ctx = {
      settings,
      cacheOf: (f) => app.metadataCache.getFileCache(f),
      now: /* @__PURE__ */ new Date(),
      metaKey: "date",
      fields: [],
      image: "none",
      icons: await iconsFor(app, settings)
    };
    const sections = await Promise.all(
      groups.map(async (group) => ({
        title: group.hasKey() ? group.key?.toString() ?? "" : "",
        cards: await Promise.all(group.entries.map((entry) => buildCard(ctx, entry.file)))
      }))
    );
    if (token !== this.generation) return;
    const root = this.root;
    root.empty();
    applyAppearance(root, plugin);
    root.dataset.view = "grid";
    for (const { title, cards } of sections) {
      renderSection(root, title, cards, settings, this.actions);
    }
    this.disposeObserver = observeDeks(root, (path, el) => {
      const file = app.vault.getFileByPath(path);
      if (!file) return;
      void plugin.dekCache.get(app, file, plugin.settings).then((dek) => {
        if (token === this.generation) settleDek(el, dek);
      });
    });
  }
  stopObserving() {
    this.disposeObserver?.();
    this.disposeObserver = null;
  }
};
function registerBasesView(plugin) {
  return plugin.registerBasesView(BASES_VIEW_ID, {
    name: "Home cards",
    icon: "layout-grid",
    factory: (controller, containerEl) => new HomeCardsBasesView(controller, containerEl, plugin)
  });
}

// src/render/folder-picker.ts
var import_obsidian6 = require("obsidian");
var FolderPicker = class extends import_obsidian6.FuzzySuggestModal {
  constructor(app, folders, onPick) {
    super(app);
    this.folders = folders;
    this.onPick = onPick;
    this.setPlaceholder("Choose a folder");
  }
  getItems() {
    return [...this.folders];
  }
  getItemText(folder) {
    return folder.path;
  }
  onChooseItem(folder) {
    this.onPick(folder);
  }
};
function pickableFolders(app, exclude = /* @__PURE__ */ new Set()) {
  return app.vault.getAllFolders(false).filter((f) => !f.path.split("/").some((part) => part.startsWith(".")) && !exclude.has(f.path)).sort((a, b) => a.path.localeCompare(b.path));
}
function pickFolder(app, onPick, exclude) {
  new FolderPicker(app, pickableFolders(app, exclude), onPick).open();
}

// src/render/home-view.ts
var import_obsidian8 = require("obsidian");

// src/compose/greeting.ts
var PARTS = [
  { part: "night", from: 0 },
  { part: "early", from: 5 },
  { part: "morning", from: 8 },
  { part: "midday", from: 12 },
  { part: "afternoon", from: 14 },
  { part: "evening", from: 17 },
  { part: "late", from: 21 }
];
var MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
function partOf(hour) {
  let found = PARTS[0];
  for (const p of PARTS) if (hour >= p.from) found = p;
  return found;
}
var OCCASIONS = [
  {
    month: 1,
    day: 1,
    name: "New Year's Day",
    texts: ["Happy New Year", "Bonne ann\xE9e", "Feliz a\xF1o nuevo", "New year, same brilliant vault", "Fresh calendar, {name}"]
  },
  {
    month: 2,
    day: 14,
    name: "Valentine's Day",
    texts: ["Happy Valentine's Day", "Love letters count as notes", "Be mine, {name}. Says your vault"]
  },
  { month: 3, day: 14, name: "Pi Day", texts: ["Happy Pi Day", "Happy 3.14159", "An irrational amount of notes"] },
  { month: 3, day: 17, name: "St. Patrick's Day", texts: ["Happy St. Patrick's Day", "Sl\xE1inte", "Luck of the Irish, {name}"] },
  {
    month: 4,
    day: 1,
    name: "April Fools' Day",
    texts: ["Trust nothing today", "Happy April Fools'", "All your notes are gone. Kidding."]
  },
  { month: 4, day: 22, name: "Earth Day", texts: ["Happy Earth Day", "Paperless since forever"] },
  { month: 4, day: 23, name: "World Book Day", texts: ["Happy World Book Day", "Read anything good, {name}?"] },
  { month: 5, day: 4, name: "Star Wars Day", texts: ["May the Fourth be with you", "These are the notes you're looking for"] },
  { month: 5, day: 25, name: "Towel Day", texts: ["Happy Towel Day", "Don't panic", "Know where your towel is, {name}?"] },
  { month: 10, day: 31, name: "Halloween", texts: ["Happy Halloween", "Boo", "Spooky notes ahead, {name}", "Trick or treat?"] },
  { month: 12, day: 24, name: "Christmas Eve", texts: ["Merry Christmas Eve", "Not long now, {name}"] },
  {
    month: 12,
    day: 25,
    name: "Christmas Day",
    texts: ["Merry Christmas", "Joyeux No\xEBl", "Feliz Navidad", "Buon Natale", "Season's greetings, {name}"]
  },
  { month: 12, day: 31, name: "New Year's Eve", texts: ["Happy New Year's Eve", "See you next year", "Last notes of the year, {name}"] }
];
function occasionOn(now) {
  return OCCASIONS.find((o) => o.month === now.getMonth() + 1 && o.day === now.getDate());
}
var SALUTATIONS = [
  "Hello",
  "Hi there",
  "Hey",
  "Welcome back",
  "Hola",
  "Bonjour",
  "Ciao",
  "Ol\xE1",
  "Hallo",
  "Hej",
  "Moin",
  "Servus",
  "Salut",
  "Ahoj",
  "Szia",
  "Tere",
  "Merhaba",
  "Yassou",
  "Dia dhuit",
  "Namaste",
  "Namaskar",
  "Vanakkam",
  "Sat sri akal",
  "Salaam",
  "Shalom",
  "Habari",
  "Jambo",
  "Sawubona",
  "Konnichiwa",
  "Ni hao",
  "Annyeong",
  "Sawasdee",
  "Xin ch\xE0o",
  "Kumusta",
  "Mabuhay",
  "Selamat datang",
  "Aloha",
  "Kia ora",
  "G'day",
  "Howdy"
];
var ANYTIME = [
  "Good to see you, {name}",
  "Back for more, {name}?",
  "Your notes missed you",
  "Everything is where you left it",
  "Ready when you are, {name}",
  "What are we thinking about today?",
  "Another idea worth writing down?",
  "Pick up where you left off",
  "The cards are dealt, {name}",
  "Fresh page, familiar notes"
];
var BY_PART = {
  night: [
    "Still up, {name}?",
    "The vault never sleeps",
    "Good night, owl",
    "It's late. Or early.",
    "Sleep is overrated, apparently",
    "Shh, the notes are sleeping",
    "Burning the midnight oil"
  ],
  early: [
    "Good morning",
    "Rise and shine",
    "Early start, {name}",
    "Up with the birds",
    "Coffee first, then ideas",
    "Before the inbox wakes up",
    "Ohay\u014D",
    "Bom dia"
  ],
  morning: [
    "Good morning",
    "Buongiorno",
    "Guten Morgen",
    "Buenos d\xEDas",
    "Bom dia",
    "Suprabhat",
    "Selamat pagi",
    "Top of the morning",
    "Morning, {name}. Coffee in hand?",
    "A clear head and a clean page",
    "Morning pages, anyone?"
  ],
  midday: [
    "Good afternoon",
    "Bon app\xE9tit, {name}",
    "Lunch break reading?",
    "Halfway through the day",
    "Midday check-in, {name}",
    "Buon pranzo"
  ],
  afternoon: [
    "Good afternoon",
    "Buenas tardes",
    "Boa tarde",
    "Guten Tag",
    "Selamat sore",
    "Tea time, {name}?",
    "Afternoon slump? Not here",
    "Second wind incoming",
    "The afternoon is young"
  ],
  evening: [
    "Good evening",
    "Bonsoir",
    "Guten Abend",
    "Buonasera",
    "Boa noite",
    "Shubh sandhya",
    "Selamat malam",
    "Winding down, {name}?",
    "One more thought before dinner",
    "The day's notes are in"
  ],
  late: [
    "Evening, {name}. Still at it?",
    "Just one more note",
    "Night owl hours",
    "Burning the midnight oil",
    "Late one, {name}",
    "Good night"
  ]
};
var BY_WEEKDAY = [
  ["Lazy Sunday", "Sunday thinking", "Easy does it, {name}"],
  ["Happy Monday. Mostly.", "Monday again, {name}", "Fresh week, fresh notes"],
  ["Tuesday, the quiet achiever", "Happy Tuesday"],
  ["Halfway there, {name}", "Happy hump day"],
  ["Nearly Friday", "Thursday: Friday's opening act"],
  ["Happy Friday", "Nearly the weekend", "Friday at last, {name}"],
  ["Happy Saturday", "Saturday, no meetings", "Weekend mode, {name}"]
];
function monthStart(now) {
  if (now.getDate() > 3) return [];
  const month = MONTHS[now.getMonth()];
  const lines = [`${month} already, {name}?`];
  if (now.getMonth() === 0) lines.push("New year, same great vault");
  if (now.getMonth() === 6) lines.push("Halfway through the year, {name}");
  if (now.getMonth() === 11) lines.push("Last month of the year, {name}");
  return lines;
}
function pick(list, rng) {
  return list[Math.floor(rng() * list.length) % list.length];
}
function greetingFor(now, options = {}) {
  const { occasions = true, rng = Math.random } = options;
  const occasion = occasions ? occasionOn(now) : void 0;
  if (occasion) return pick(occasion.texts, rng);
  const pool = [
    ...BY_PART[partOf(now.getHours()).part],
    ...BY_WEEKDAY[now.getDay()],
    ...monthStart(now),
    ...SALUTATIONS,
    ...ANYTIME
  ];
  return pick(pool, rng);
}
var NAME = "{name}";
function withName(template, name) {
  const n = name.trim();
  if (template.includes(NAME)) {
    if (n) return template.replace(NAME, n);
    return template.replace(/,\s*\{name\}/, "").replace(/\{name\},\s*/, "").replace(/\s*\{name\}/, "").trim();
  }
  const short = template.split(/\s+/).length <= 3 && !/[.?!]$/.test(template);
  return n && short ? `${template}, ${n}` : template;
}

// src/settings/pages.ts
function refFromState(state) {
  const raw = state ?? {};
  if (typeof raw.page === "string" && raw.page) return { page: raw.page };
  if (typeof raw.note === "string" && raw.note.endsWith(".md")) return { note: raw.note };
  if (typeof raw.folder === "string") {
    const folder = normalizeFolderPath(raw.folder);
    if (folder) return { folder };
  }
  return {};
}
function stateFromRef(ref) {
  if (ref.page) return { page: ref.page };
  if (ref.folder) return { folder: ref.folder };
  if (ref.note) return { note: ref.note };
  return {};
}
function sameRef(a, b) {
  return (a.page ?? "") === (b.page ?? "") && (a.folder ?? "") === (b.folder ?? "") && (a.note ?? "") === (b.note ?? "");
}
function findPage(pages, id) {
  return pages.find((page) => page.id === id);
}
function findFolderPage(pages, folder) {
  return pages.find((page) => page.scope.kind === "folder" && page.scope.folder === folder);
}
function findPageByName(pages, text) {
  const wanted = text.trim().toLowerCase();
  if (!wanted) return void 0;
  return pages.find((p) => p.id === text.trim()) ?? pages.find((p) => p.name.toLowerCase() === wanted);
}
function scopeIcon(scope) {
  return PAGE_SCOPES.find((s) => s.id === scope.kind)?.icon ?? "layout-grid";
}
function fromRecord(settings, page) {
  return {
    key: `page:${page.id}`,
    isHome: false,
    record: page,
    title: page.name,
    scope: page.scope,
    sections: page.sections ?? settings.sections,
    icon: scopeIcon(page.scope)
  };
}
function resolvePage(settings, ref) {
  if (ref.page) {
    const page = findPage(settings.pages, ref.page);
    return page ? fromRecord(settings, page) : null;
  }
  if (ref.folder) {
    const page = findFolderPage(settings.pages, ref.folder);
    if (page) return fromRecord(settings, page);
    const scope = { ...blankScope(), kind: "folder", folder: ref.folder };
    return {
      key: `folder:${ref.folder}`,
      isHome: false,
      record: null,
      title: folderName(ref.folder),
      scope,
      sections: settings.sections,
      icon: scopeIcon(scope)
    };
  }
  if (ref.note) {
    return {
      key: `note:${ref.note}`,
      isHome: false,
      record: null,
      note: ref.note,
      title: noteName(ref.note),
      scope: blankScope(),
      sections: [],
      icon: "file-text"
    };
  }
  return {
    key: "home",
    isHome: true,
    record: null,
    title: "Home",
    scope: blankScope(),
    sections: settings.sections,
    icon: scopeIcon(blankScope())
  };
}
function isScopeBlank(scope) {
  switch (scope.kind) {
    case "folder":
      return !scope.folder;
    case "tag":
      return !scope.tag.trim();
    case "property":
      return !scope.propertyKey.trim();
    default:
      return true;
  }
}
function scopeSummary(scope) {
  if (isScopeBlank(scope)) return scope.kind === "all" ? "Whole vault" : `${labelOfKind(scope)}: not set`;
  switch (scope.kind) {
    case "folder":
      return `Folder: ${scope.folder}`;
    case "tag":
      return `Tag: #${scope.tag.replace(/^#/, "")}`;
    default:
      return scope.propertyValue ? `Property: ${scope.propertyKey} = ${scope.propertyValue}` : `Property: ${scope.propertyKey}`;
  }
}
function labelOfKind(scope) {
  return PAGE_SCOPES.find((s) => s.id === scope.kind)?.label ?? scope.kind;
}
function suggestPageName(scope) {
  if (isScopeBlank(scope)) return "Page";
  switch (scope.kind) {
    case "folder":
      return folderName(scope.folder);
    case "tag":
      return `#${scope.tag.replace(/^#/, "")}`;
    default:
      return scope.propertyValue ? `${scope.propertyKey}: ${scope.propertyValue}` : scope.propertyKey;
  }
}
function uniquePageName(pages, wanted, exceptId = "") {
  const base = wanted.trim().slice(0, LIMITS.pageName.max).trim() || "Page";
  const taken = new Set(pages.filter((p) => p.id !== exceptId).map((p) => p.name.toLowerCase()));
  if (!taken.has(base.toLowerCase())) return base;
  for (let n = 2; ; n++) {
    const suffix = ` ${n}`;
    const name = base.slice(0, LIMITS.pageName.max - suffix.length).trim() + suffix;
    if (!taken.has(name.toLowerCase())) return name;
  }
}
function legacyFolderPageId(folder) {
  let hash = 2166136261;
  for (let i = 0; i < folder.length; i++) {
    hash ^= folder.charCodeAt(i);
    hash = Math.imul(hash, 16777619) >>> 0;
  }
  return `page-f${hash.toString(36)}`;
}
function renamePageFolders(pages, from, to) {
  let changed = false;
  for (const page of pages) {
    if (page.scope.kind !== "folder") continue;
    const next = reparent(page.scope.folder, from, to);
    if (next !== page.scope.folder) {
      page.scope.folder = next;
      changed = true;
    }
  }
  return changed;
}

// src/render/keyboard.ts
function visibleCards(root) {
  return root.findAll(".hc-card").filter((el) => !el.hasClass("is-hidden") && el.offsetParent !== null);
}
function nextCard(cards, from, dir) {
  if (!cards.length) return null;
  const at = from ? cards.indexOf(from) : -1;
  if (at < 0) return cards[0];
  if (dir === "next") return cards[Math.min(at + 1, cards.length - 1)];
  if (dir === "prev") return cards[Math.max(at - 1, 0)];
  const box = from?.getBoundingClientRect();
  if (!box) return null;
  const centre = (r) => r.left + r.width / 2;
  const rows = cards.filter((c) => c !== from).map((c) => ({ c, r: c.getBoundingClientRect() })).filter(({ r }) => dir === "down" ? r.top >= box.bottom - 2 : r.bottom <= box.top + 2);
  if (!rows.length) return from;
  const edge = dir === "down" ? Math.min(...rows.map(({ r }) => r.top)) : Math.max(...rows.map(({ r }) => r.bottom));
  const row = rows.filter(({ r }) => Math.abs((dir === "down" ? r.top : r.bottom) - edge) < 2);
  row.sort((a, b) => Math.abs(centre(a.r) - centre(box)) - Math.abs(centre(b.r) - centre(box)));
  return row[0]?.c ?? from;
}
function registerCardKeys(scope, root, actions) {
  const typing = (evt) => evt.target instanceof HTMLInputElement || evt.target instanceof HTMLTextAreaElement;
  const focused = () => {
    const el = root()?.ownerDocument.activeElement;
    return el instanceof HTMLElement && el.hasClass("hc-card") ? el : null;
  };
  const move = (dir) => (evt) => {
    const body = root();
    if (typing(evt) || !body) return true;
    const target = nextCard(visibleCards(body), focused(), dir);
    target?.focus();
    target?.scrollIntoView({ block: "nearest" });
    return false;
  };
  scope.register([], "/", (evt) => {
    if (typing(evt)) return true;
    actions.focusSearch();
    return false;
  });
  scope.register([], "j", move("next"));
  scope.register([], "k", move("prev"));
  scope.register([], "ArrowDown", move("down"));
  scope.register([], "ArrowUp", move("up"));
  scope.register([], "ArrowRight", move("next"));
  scope.register([], "ArrowLeft", move("prev"));
  scope.register([], " ", (evt) => {
    const card = focused();
    if (typing(evt) || !card) return true;
    actions.preview(card);
    return false;
  });
  scope.register([], "p", (evt) => {
    const path = focused()?.dataset.hcPath;
    if (typing(evt) || !path) return true;
    actions.togglePin(path);
    return false;
  });
}

// src/render/swatches.ts
function renderBackgroundPicker(parent, plugin, onPick) {
  const grid = parent.createDiv({
    cls: "hc-swatches",
    attr: { role: "radiogroup", "aria-label": "Background" }
  });
  const choices = [
    ...BACKGROUNDS.map((bg) => ({ id: bg.id, label: bg.label, custom: null })),
    ...plugin.settings.customBackgrounds.map((bg) => ({ id: bg.id, label: bg.label, custom: bg }))
  ];
  const items = choices.map((bg) => {
    const item = grid.createEl("button", { cls: "hc-swatch-item", attr: { role: "radio" } });
    const face = item.createDiv({ cls: "hc-swatch" });
    if (bg.custom) {
      face.dataset.pattern = "custom";
      face.dataset.fit = bg.custom.fit;
      face.setCssProps(backgroundProps(backgroundUrl(plugin, bg.custom), bg.custom));
    } else if (bg.id !== "plain") {
      face.dataset.pattern = bg.id;
    }
    item.createDiv({ cls: "hc-swatch-label", text: bg.label });
    item.addEventListener("click", () => {
      if (plugin.settings.background === bg.id) return;
      plugin.settings.background = bg.id;
      paint();
      onPick?.();
      void plugin.commit();
    });
    return { id: bg.id, item };
  });
  const paint = () => {
    for (const { id, item } of items) {
      const on = plugin.settings.background === id;
      item.toggleClass("is-selected", on);
      item.setAttr("aria-checked", String(on));
    }
  };
  paint();
  return { paint };
}

// src/render/whats-new.ts
var import_obsidian7 = require("obsidian");

// src/settings/release-notes.ts
var RELEASE_GROUPS = [
  { key: "new", label: "New" },
  { key: "improved", label: "Improved" },
  { key: "changed", label: "Changed" },
  { key: "fixed", label: "Fixed" }
];
var RELEASES_URL = "https://github.com/ttangents/obsidian-home-cards/releases";
var RECENT_RELEASES = 5;
var RELEASE_NOTES = [
  {
    version: "1.33.1",
    date: "2026-10-22",
    headline: "A note page's title shows it opens the note in the theme's link color.",
    announce: false,
    changed: [
      "Under the pointer, the title of a note's page takes the theme's link hover color in place of an underline, which clears the last warning from Obsidian's automated review."
    ]
  },
  {
    version: "1.33.0",
    date: "2026-10-22",
    headline: "Every note now has a page of its own, and Home Cards works with Relate, now in Community plugins.",
    announce: true,
    new: [
      "Each note now has a page that shows, as cards, the notes it links to and the notes that link to it. Right-click a note and choose Open Home Cards page, or run Open page for current note. Click the page's title to open the note."
    ],
    improved: [
      "The page is quieter: patterns recede into texture, cards rest flat and lift slightly under the pointer, a card's type is its only shaped label, and the header groups the filter, the layout switch and the page actions."
    ],
    fixed: [
      `Dropping a card on a section such as "project is Q3 Plan" used to replace all of the note's projects. Now the note keeps its other projects and gains the new one. Moving a card between two such sections still swaps one project for the other.`
    ],
    worksWith: {
      plugin: "Relate",
      url: "https://community.obsidian.md/plugins/relate",
      about: "which links notes both ways and can search by meaning",
      items: [
        'A section can list the results of a Relate search, such as "notes of Q3 Plan this week", and each card says why it is there.',
        "A note's page gives each of the note's relationships a section of its own, and lists the notes closest in meaning.",
        `Related to recent work names the relationship behind each card, such as "Q3 Plan's notes". Rediscover gains Similar but unlinked.`
      ]
    }
  },
  {
    version: "1.32.2",
    date: "2026-10-21",
    headline: "Republishes 1.32.1 with its plugin files attached.",
    announce: false,
    fixed: [
      "The 1.32.1 release went out without its plugin files, so Obsidian could not install it. This release carries the same code with the files attached."
    ]
  },
  {
    version: "1.32.1",
    date: "2026-10-21",
    headline: "Pinned sections lead the page and stay hidden until you pin a note.",
    announce: false,
    changed: [
      "A Pinned section always comes first on its page, wherever it sits in the section list, and claims its notes before any other section. It stays hidden while you have no pins."
    ],
    improved: [
      "Home Cards lays out card headers and image rows with simpler styles, which clear the warnings from Obsidian's automated review. Cards look as they did in 1.32.0."
    ]
  },
  {
    version: "1.32.0",
    date: "2026-10-20",
    headline: "You can pin, snooze and move cards, and sections can show cover images and filter notes by their property values.",
    announce: true,
    new: [
      'Conditions: a section can keep only the notes whose properties pass a test, such as "due is in the next 7 days", "status is active" or "rating is at least 4". Each property offers only the tests that suit its values.',
      "Card fields and images: each section picks the properties its cards show, and whether they show a cover, a thumbnail or no image. Home Cards finds the image in the properties you name in settings, then in the note's first embedded image.",
      'Pins and snoozes: pin a note from its card menu, from any file menu in Obsidian or with the "Pin or unpin the current note" command, and a Pinned section keeps it in view. Snooze hides a card for a week or a month.',
      "Continue working: a section that groups the notes you opened lately into work sessions, newest first.",
      "Related to recent work: a section of notes that link to, or share links and tags with, the notes you opened lately.",
      `Rediscover strategies: a Rediscover section can draw forgotten notes, forgotten gems, unfinished thoughts, notes from this week in earlier years, sleeping hubs or old friends. "Don't rediscover" in a card's menu keeps a note out.`,
      `Create and move: a section that names exact values, such as "status is active", has a + button that creates a note with those values. Drag a card onto that section, or choose Move to in the card's menu, to give the note those values.`,
      "Keyboard: / goes to the filter box, the arrow keys or j and k move between cards, Enter opens a card, Space previews it and p pins it.",
      "What's new: this notice appears on the home page after an update. Settings \u2192 Home Cards turns it off and opens past release notes."
    ],
    improved: [
      "Home Cards now uses only Obsidian's public API, which makes it less likely to break when Obsidian updates.",
      "Cover images crop from the top, so book titles and faces stay in view.",
      "Cards with thumbnails line up across a row: the pills, summaries and footers start at the same height whatever the length of the titles. In the rows layout, images sit in a column of their own.",
      "Settings from earlier versions load unchanged, and every new section type starts switched off."
    ]
  },
  {
    version: "1.31.0",
    date: "2026-10-17",
    headline: "Give a folder, a tag or a property its own page, with its own command and its own sections.",
    announce: true,
    new: [
      "Pages: a page has a name and a scope: a folder, a tag, a property or the whole vault. It shows the home page's sections, or sections of its own, in a tab of its own.",
      'Each page gets a command that takes a hotkey. "Open a page" lists them all, and obsidian://home-cards?page=Name links open a page from a note, a shortcut or a launcher.',
      "A folder's context menu opens a page for that folder, and the page follows the folder when you rename it.",
      "Backgrounds of your own: add an image as a repeating pattern or as a single picture, and set how far it fades. Home Cards keeps the image in its own folder, outside the vault.",
      "A new note from a tag or property page carries that tag or property."
    ],
    fixed: [
      "A tab's title now changes when you rename its page.",
      "Opening a page that is already open now switches to its tab."
    ]
  },
  {
    version: "1.29.1",
    date: "2026-10-15",
    headline: "Removes the Apple Intelligence greeting.",
    announce: false,
    changed: [
      "The Apple Intelligence greeting needed file and shell access, so it is gone. The built-in greetings remain."
    ]
  },
  {
    version: "1.29.0",
    date: "2026-10-14",
    headline: "Settings use Obsidian's own rows and appear in its settings search.",
    announce: false,
    improved: [
      "Settings use Obsidian's own rows and appear in its settings search. You drag sections to reorder them, and each has a switch and an editor."
    ],
    fixed: [
      "Previewing a card from the keyboard no longer raises an error.",
      "Held-back and filtered cards now stay hidden in the rows layout."
    ]
  }
];
function parseVersion(version) {
  const m = /^(\d+)\.(\d+)\.(\d+)$/.exec(version.trim());
  return m ? [Number(m[1]), Number(m[2]), Number(m[3])] : null;
}
function compareVersions(a, b) {
  const x = parseVersion(a);
  const y = parseVersion(b);
  if (!x || !y) return (x ? 1 : 0) - (y ? 1 : 0);
  for (let i = 0; i < 3; i++) if (x[i] !== y[i]) return x[i] - y[i];
  return 0;
}
function laterVersion(a, b) {
  const later = compareVersions(a, b) >= 0 ? a : b;
  return parseVersion(later) ? later.trim() : "";
}
function notesSince(seen, current, notes = RELEASE_NOTES) {
  return notes.filter((n) => compareVersions(n.version, seen) > 0 && compareVersions(n.version, current) <= 0);
}
function recentNotes(current, notes = RELEASE_NOTES) {
  return notes.filter((n) => compareVersions(n.version, current) <= 0).slice(0, RECENT_RELEASES);
}
function checkForUpdate(check, notes = RELEASE_NOTES) {
  const { current, seen } = check;
  if (!parseVersion(current)) return { kind: "none" };
  if (check.firstRun) return { kind: "record" };
  if (parseVersion(seen) && compareVersions(current, seen) <= 0) return { kind: "none" };
  if (!check.enabled) return { kind: "record" };
  const unseen = parseVersion(seen) ? notesSince(seen, current, notes) : notesSince("", current, notes).slice(0, 1);
  return unseen.some((n) => n.announce) ? { kind: "announce", notes: unseen } : { kind: "record" };
}
function announcementTitle(notes) {
  const newest = notes[0];
  if (!newest) return "";
  const earlier = notes.length - 1;
  return earlier > 0 ? `Home Cards ${newest.version}, with ${earlier} earlier ${earlier === 1 ? "release" : "releases"}` : `Home Cards ${newest.version}`;
}

// src/render/whats-new.ts
function renderUpdateNotice(el, notes, actions) {
  el.empty();
  const newest = notes[0];
  if (!newest) return;
  el.setAttr("role", "status");
  const icon = el.createSpan({ cls: "hc-update-icon", attr: { "aria-hidden": "true" } });
  (0, import_obsidian7.setIcon)(icon, "sparkles");
  if (!icon.firstElementChild) (0, import_obsidian7.setIcon)(icon, "star");
  const text = el.createDiv({ cls: "hc-update-text" });
  text.createSpan({ cls: "hc-update-title", text: announcementTitle(notes) });
  text.createSpan({ cls: "hc-update-headline", text: newest.headline });
  const open = el.createEl("button", { cls: "hc-update-open", text: "See what's new" });
  open.addEventListener("click", () => actions.open());
  const close = el.createEl("button", { cls: "hc-update-close clickable-icon" });
  (0, import_obsidian7.setIcon)(close, "x");
  (0, import_obsidian7.setTooltip)(close, "Dismiss", { placement: "bottom" });
  close.addEventListener("click", () => actions.dismiss());
}
var WhatsNewModal = class extends import_obsidian7.Modal {
  constructor(app, notes, onDone) {
    super(app);
    this.notes = notes;
    this.onDone = onDone;
  }
  onOpen() {
    this.setTitle("What's new in Home Cards");
    this.modalEl.addClass("hc-whats-new");
    const { contentEl } = this;
    contentEl.empty();
    for (const note of this.notes) {
      const release = contentEl.createDiv({ cls: "hc-release" });
      const head = release.createDiv({ cls: "hc-release-head" });
      head.createEl("h3", { text: note.version });
      head.createSpan({ cls: "hc-release-date", text: formatReleaseDate(note.date) });
      release.createEl("p", { cls: "hc-release-headline", text: note.headline });
      for (const group of RELEASE_GROUPS) {
        const items = note[group.key];
        if (!items?.length) continue;
        release.createDiv({ cls: "hc-release-group", text: group.label });
        const list = release.createEl("ul");
        for (const item of items) list.createEl("li", { text: item });
      }
      const other = note.worksWith;
      if (other) {
        release.createDiv({ cls: "hc-release-group", text: `Works with ${other.plugin}` });
        const intro = release.createEl("p", { cls: "hc-release-intro" });
        intro.appendText("Home Cards works well with ");
        intro.createEl("a", { text: other.plugin, href: other.url });
        intro.appendText(`, my other plugin, ${other.about}. Install it from Settings \u2192 Community plugins. You don't need it to use Home Cards. If you use both:`);
        const list = release.createEl("ul");
        for (const item of other.items) list.createEl("li", { text: item });
      }
    }
    const footer2 = this.modalEl.createDiv({ cls: "hc-whats-new-footer" });
    footer2.createEl("a", { text: "All releases", href: RELEASES_URL });
    const done = footer2.createEl("button", { cls: "mod-cta", text: "Done" });
    done.addEventListener("click", () => this.close());
    window.setTimeout(() => done.focus(), 0);
  }
  onClose() {
    this.contentEl.empty();
    this.modalEl.find(".hc-whats-new-footer")?.remove();
    this.onDone?.();
  }
};
function formatReleaseDate(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return iso;
  const date = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return date.toLocaleDateString(void 0, { day: "numeric", month: "long", year: "numeric" });
}

// src/render/home-view.ts
var VIEW_TYPE_HOME = "home-cards-view";
var RECOMPOSE_SPIN_MS = 600;
var COLLAPSED_KEY = "home-cards-collapsed";
var HomeView = class extends import_obsidian8.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    /** The open hover preview, if any; Obsidian manages it. */
    this.hoverPopover = null;
    this.shell = null;
    this.greeting = "";
    this.query = "";
    this.picker = null;
    /** Cards revealed by "See more", by section id; survives recomposes. */
    this.revealed = /* @__PURE__ */ new Map();
    this.disposeDeks = null;
    /** Invalidates composes that finish after a newer one or a close. */
    this.generation = 0;
    /** Which page this view shows; empty for the home page. */
    this.ref = {};
    /** The tab title and icon last handed to Obsidian; see syncTab. */
    this.tabLook = "";
    /** True while Obsidian is setting this view's state, which updates the tab itself. */
    this.settingState = false;
    /** False until Obsidian first hands the view its state; see getDisplayText. */
    this.stateApplied = false;
    /** The releases the notice shows now, by version; redrawn only when they change. */
    this.noticeFor = "";
    this.mode = plugin.settings.defaultView;
    this.actions = cardActions(this.app, this, this, VIEW_TYPE_HOME, plugin.markActions);
  }
  getViewType() {
    return VIEW_TYPE_HOME;
  }
  /** The page this view shows now, or null when its named page was deleted. */
  page() {
    return resolvePage(this.plugin.settings, this.ref);
  }
  /**
   * Obsidian writes the title in the view's own header once, when it opens
   * the view and before it sets the view's state, and offers no public way
   * to change it later. Until the state arrives the view names itself, so
   * that header reads "Home Cards" on every page; the tab, which Obsidian
   * reads again after the state is set, shows the page.
   */
  getDisplayText() {
    if (!this.stateApplied) return "Home Cards";
    return this.page()?.title ?? "Missing page";
  }
  getIcon() {
    return this.page()?.icon ?? "layout-grid";
  }
  /** The page goes into the saved layout, so the tab returns after a restart. */
  getState() {
    return stateFromRef(this.ref);
  }
  async setState(state, result) {
    const next = refFromState(state);
    this.stateApplied = true;
    await super.setState(state, result);
    if (sameRef(next, this.ref)) return;
    this.ref = next;
    this.revealed.clear();
    this.settingState = true;
    try {
      await this.refresh();
    } finally {
      this.settingState = false;
    }
  }
  async onOpen() {
    this.greeting = this.pickGreeting();
    this.shell = this.buildShell(this.contentEl);
    this.registerEvent(this.plugin.onRefresh(() => void this.refresh()));
    this.registerEvent(
      this.app.vault.on("rename", (file, oldPath) => {
        if (this.ref.note && file instanceof import_obsidian8.TFile && this.ref.note === oldPath) {
          void this.leaf.setViewState({ type: VIEW_TYPE_HOME, state: { note: file.path } });
          return;
        }
        const folder = this.ref.folder;
        if (!folder || !(file instanceof import_obsidian8.TFolder)) return;
        const next = reparent(folder, oldPath, file.path);
        if (next === folder) return;
        void this.leaf.setViewState({ type: VIEW_TYPE_HOME, state: { folder: next } });
      })
    );
    const doc = this.contentEl.ownerDocument;
    this.registerDomEvent(doc, "pointerdown", (evt) => {
      const target = evt.target;
      if (!this.picker || !target) return;
      if (this.picker.panel.contains(target) || this.shell?.pickerToggle.contains(target)) return;
      this.closePicker();
    });
    this.registerDomEvent(doc, "keydown", (evt) => {
      if (evt.key !== "Escape" || !this.picker) return;
      evt.preventDefault();
      this.closePicker();
      this.shell?.pickerToggle.focus();
    });
    this.scope = new import_obsidian8.Scope(this.app.scope);
    registerCardKeys(this.scope, () => this.shell?.body ?? null, {
      focusSearch: () => this.shell?.search.focus(),
      preview: (card) => {
        const file = this.app.vault.getFileByPath(card.dataset.hcPath ?? "");
        if (file) this.actions.hover?.preview(file, card);
      },
      togglePin: (path) => this.plugin.markActions.togglePin(path)
    });
    await this.refresh();
  }
  async onClose() {
    this.closePicker();
    this.disposeDeks?.();
    this.disposeDeks = null;
    this.generation++;
    this.noticeFor = "";
    this.shell = null;
    this.contentEl.empty();
  }
  /** Re-read settings and recompose. Safe to call at any time. */
  async refresh() {
    const shell = this.shell;
    if (!shell) return;
    applyAppearance(shell.root, this.plugin);
    const page = this.page();
    const test = page && !page.note ? compilePageScope(page.scope) : null;
    const count = page && !page.note ? notesIn(this.app, test).length : null;
    this.syncTab(page);
    this.paintHeader(shell, page, count);
    this.paintNotice(shell, page);
    this.picker?.grid.paint();
    await this.recompose(shell, page, test, count);
  }
  /**
   * Keep the tab in step with the page. Obsidian reads a tab's title and
   * icon when a view's state is set, so after a rename or a change of scope
   * the same state is set again.
   */
  syncTab(page) {
    const title = page?.title ?? "Missing page";
    const look = `${title}
${page?.icon ?? ""}`;
    if (look === this.tabLook) return;
    const first = this.tabLook === "";
    this.tabLook = look;
    if (!first && !this.settingState) {
      void this.leaf.setViewState({ type: VIEW_TYPE_HOME, state: this.getState() });
    }
  }
  // ------------------------------------------------------------- header
  buildShell(container) {
    const root = container.createDiv({ cls: "home-cards" });
    const wrap = root.createDiv({ cls: "hc-wrap" });
    const top = wrap.createDiv({ cls: "hc-top" });
    const masthead = top.createDiv({ cls: "hc-masthead" });
    const greeting = masthead.createEl("h1", { cls: "hc-greeting" });
    const openNote = (evt) => {
      const note = this.page()?.note;
      const file = note ? this.app.vault.getFileByPath(note) : null;
      if (file) void this.app.workspace.getLeaf(paneFor(evt)).openFile(file);
    };
    greeting.addEventListener("click", openNote);
    greeting.addEventListener("keydown", (evt) => {
      if (evt.key === "Enter") openNote(evt);
    });
    const dateline = masthead.createDiv({ cls: "hc-dateline" });
    const controls = top.createDiv({ cls: "hc-controls" });
    const search = controls.createEl("input", {
      cls: "hc-search",
      attr: { type: "search", placeholder: "Filter notes\u2026", spellcheck: "false" }
    });
    search.setAttr("aria-keyshortcuts", "/");
    search.addEventListener("input", () => {
      this.query = search.value;
      this.applyFilter();
    });
    search.addEventListener("keydown", (evt) => {
      if (evt.key !== "Escape") return;
      if (search.value) {
        search.value = "";
        this.query = "";
        this.applyFilter();
      } else {
        search.blur();
        this.shell?.body.find(".hc-card:not(.is-hidden)")?.focus();
      }
      evt.preventDefault();
    });
    const seg = controls.createDiv({ cls: "hc-seg" });
    const tools = controls.createDiv({ cls: "hc-tools" });
    const button = (parent, label, icon, cls) => {
      const btn = parent.createEl("button", cls ? { cls } : {});
      (0, import_obsidian8.setIcon)(btn, icon);
      (0, import_obsidian8.setTooltip)(btn, label, { placement: "bottom" });
      return btn;
    };
    const toggles = /* @__PURE__ */ new Map();
    for (const mode of VIEW_MODES) {
      const btn = button(seg, `${mode.label} view`, mode.icon);
      btn.addEventListener("click", () => this.setMode(mode.id));
      toggles.set(mode.id, btn);
    }
    const action = (cls, label, icon, run) => {
      const btn = button(tools, label, icon, `${cls} clickable-icon`);
      btn.addEventListener("click", (evt) => run(paneFor(evt)));
      return btn;
    };
    action("hc-new-note", "New note", "square-pen", (where) => {
      const page = this.page();
      void createNote(this.app, where, page ? templateForScope(page.scope) : void 0);
    });
    action("hc-rediscover", "Rediscover a note", "shuffle", (where) => {
      const page = this.page();
      rediscoverNote(this.app, this.plugin.settings, where, page ? compilePageScope(page.scope) : null);
    });
    const pageSettings = action(
      "hc-page-settings",
      "Page settings",
      "sliders-horizontal",
      () => this.plugin.editPage(this.ref)
    );
    const pickerToggle = button(tools, "Background", "swatch-book", "hc-picker-toggle clickable-icon");
    pickerToggle.setAttrs({ "aria-haspopup": "dialog", "aria-expanded": "false" });
    if (!pickerToggle.firstElementChild) (0, import_obsidian8.setIcon)(pickerToggle, "palette");
    pickerToggle.addEventListener("click", () => {
      if (this.picker) this.closePicker();
      else this.openPicker(controls, pickerToggle);
    });
    const recompose = button(tools, "Recompose", "refresh-cw", "hc-reload clickable-icon");
    recompose.addEventListener("click", () => void this.recomposeNow(recompose));
    const notice = wrap.createDiv({ cls: "hc-update" });
    notice.hide();
    const body = wrap.createDiv({ cls: "hc-body" });
    body.createDiv({ cls: "hc-loading", text: "Composing\u2026" });
    const shell = { root, search, greeting, dateline, toggles, pickerToggle, pageSettings, notice, body };
    this.paintMode(shell);
    return shell;
  }
  paintHeader(shell, page, count) {
    const s = this.plugin.settings;
    const home = page?.isHome ?? false;
    shell.pageSettings.toggle(page !== null && !home && !page.note);
    shell.greeting.toggle(!home || s.greetingEnabled);
    shell.greeting.setText(home ? withName(this.greeting, s.greetingName) : page?.title ?? "Missing page");
    const linked = !!page?.note;
    shell.greeting.toggleClass("is-note-link", linked);
    if (linked) shell.greeting.setAttrs({ role: "link", tabindex: "0", "aria-label": `Open ${page?.title ?? "the note"}` });
    else for (const a of ["role", "tabindex", "aria-label"]) shell.greeting.removeAttribute(a);
    const bits = [];
    if (home) {
      bits.push(
        (/* @__PURE__ */ new Date()).toLocaleDateString(void 0, {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric"
        })
      );
    } else if (page) {
      const where = datelineScope(page);
      if (where) bits.push(where);
    }
    if (page && count !== null && (s.showNoteCount || !home)) bits.push(`${count} ${count === 1 ? "note" : "notes"}`);
    shell.dateline.setText(bits.join("  \xB7  "));
  }
  /**
   * The notice after an update, on the home page only: other pages are
   * about their notes, and the home page is where a reader starts.
   */
  paintNotice(shell, page) {
    const { plugin } = this;
    const notes = page?.isHome && plugin.settings.showReleaseNotes ? plugin.releaseNotes : [];
    const key = notes.map((n) => n.version).join(" ");
    if (key === this.noticeFor) return;
    this.noticeFor = key;
    shell.notice.toggle(notes.length > 0);
    renderUpdateNotice(shell.notice, notes, {
      open: () => plugin.showWhatsNew(),
      dismiss: () => plugin.dismissReleaseNotes()
    });
  }
  /**
   * Open the background picker under the header controls. A pick applies
   * to this page at once and stays open, so patterns can be compared;
   * the plugin then saves it and redraws every other open view.
   */
  openPicker(controls, toggle) {
    const root = this.shell?.root;
    if (!root) return;
    const panel = controls.createDiv({
      cls: "hc-picker",
      attr: { role: "dialog", "aria-label": "Background" }
    });
    const grid = renderBackgroundPicker(panel, this.plugin, () => applyAppearance(root, this.plugin));
    this.picker = { panel, grid };
    toggle.addClass("is-active");
    toggle.setAttr("aria-expanded", "true");
    panel.querySelector(".hc-swatch-item.is-selected")?.focus();
  }
  closePicker() {
    if (!this.picker) return;
    this.picker.panel.remove();
    this.picker = null;
    const toggle = this.shell?.pickerToggle;
    toggle?.removeClass("is-active");
    toggle?.setAttr("aria-expanded", "false");
  }
  /**
   * The Recompose button: a fresh greeting and fresh cards. The icon
   * spins for at least one turn, so a click always shows it registered,
   * even when the cards come back unchanged.
   */
  async recomposeNow(button) {
    if (button.hasClass("is-spinning")) return;
    button.addClass("is-spinning");
    const minimum = new Promise((resolve) => window.setTimeout(resolve, RECOMPOSE_SPIN_MS));
    this.greeting = this.pickGreeting();
    try {
      await Promise.all([this.refresh(), minimum]);
    } finally {
      button.removeClass("is-spinning");
    }
  }
  /** A greeting for this moment, drawn from the built-in list. */
  pickGreeting() {
    return greetingFor(/* @__PURE__ */ new Date(), { occasions: this.plugin.settings.greetingOccasions });
  }
  /** Layout switches are pure CSS: no recompose, no network of listeners. */
  setMode(mode) {
    this.mode = mode;
    if (this.shell) this.paintMode(this.shell);
  }
  paintMode(shell) {
    shell.root.dataset.view = this.mode;
    for (const [mode, btn] of shell.toggles) {
      const on = mode === this.mode;
      btn.toggleClass("is-active", on);
      btn.setAttr("aria-pressed", String(on));
    }
  }
  // --------------------------------------------------------------- body
  async recompose(shell, page, test, scopeCount) {
    const token = ++this.generation;
    const { app, plugin } = this;
    const settings = plugin.settings;
    const gone = !page ? "This page no longer exists." : page.note && !app.vault.getFileByPath(page.note) ? "This note no longer exists." : page.scope.kind === "folder" && page.scope.folder && !app.vault.getFolderByPath(page.scope.folder) ? "This folder no longer exists." : null;
    if (!page || gone) {
      this.disposeDeks?.();
      this.disposeDeks = null;
      shell.body.replaceChildren();
      shell.body.createDiv({ cls: "hc-empty", text: gone ?? "This page no longer exists." });
      return;
    }
    const relate = plugin.relate;
    let composed;
    try {
      composed = await composePage(app, settings, {
        deks: (file) => plugin.dekCache.get(app, file, settings),
        opened: plugin.openHistory.list(),
        activity: plugin.activity,
        sections: page.sections,
        scope: test,
        relate,
        searches: plugin.relateSearches,
        note: page.note
      });
    } catch (err) {
      console.error("Home Cards: compose failed", err);
      if (token === this.generation) {
        shell.body.empty();
        shell.body.createDiv({
          cls: "hc-empty",
          text: "Could not compose the page. See the console for details."
        });
      }
      return;
    }
    if (token !== this.generation) return;
    const pageSections = composed.configs;
    let sections = composed.sections;
    const count = scopeCount ?? composed.notes;
    if (page.note) this.paintHeader(shell, page, count);
    const writes = new Map(pageSections.map((cfg) => [cfg.id, sectionWrite(cfg, /* @__PURE__ */ new Date())]));
    const takesMoves = (id) => {
      const w = writes.get(id);
      return w !== void 0 && acceptsMoves(w);
    };
    if (!page.isHome) sections = sections.filter((s) => s.cards.length > 0 || takesMoves(s.config.id));
    sections = sections.filter((s) => s.config.kind !== "pinned" || s.cards.length > 0);
    const next = createDiv();
    const empty = (text) => next.createDiv({ cls: "hc-empty", text });
    if (page.note && !sections.length) {
      empty(relate ? "This note has no links, backlinks or relationships yet." : "This note has no links or backlinks yet.");
    } else if (!page.isHome && !page.note && count === 0) {
      empty(emptyPageText(page));
    } else if (!sections.length) {
      empty(
        pageSections.some((cfg) => cfg.enabled) ? "No notes on this page match its sections." : page.isHome ? "Turn on a section in Settings \u2192 Home Cards to fill this page." : "Turn on a section in this page's settings to fill it."
      );
    } else if (count === 0 && !page.note) {
      empty("Cards appear here as you write notes.");
    } else {
      const collapsed = new Set(this.collapsedIds());
      const pageTemplate = templateForScope(page.scope);
      const targets = sections.filter((s) => takesMoves(s.config.id));
      const moveTo = (cfg, from) => {
        const write = writes.get(cfg.id);
        if (!write) return null;
        return {
          title: sectionTitle(cfg),
          change: describeTemplate(write.template),
          run: (file) => void this.applyChange(file, write.template, writes.get(from.id)?.template)
        };
      };
      for (const { config, cards, more, claimed } of sections) {
        const write = writes.get(config.id);
        const own = write?.complete && hasFacts(write.template) ? mergeTemplates(pageTemplate, write.template) : null;
        const moves = targets.filter((t) => t.config.id !== config.id).flatMap((t) => moveTo(t.config, config) ?? []);
        const emptyText = claimed ? "Every matching note already appears in a section above." : emptyFor(config, relate) ?? EMPTY_BY_KIND[config.kind] ?? "This section has no matching notes.";
        const el = renderSection(next, sectionTitle(config), cards, settings, this.actions, {
          menuContext: { sectionKind: config.kind, moves },
          create: own ? {
            tooltip: `New note here: ${lowerFirst(describeTemplate(own))}`,
            run: (evt) => void createNote(app, paneFor(evt), own)
          } : void 0,
          dragId: targets.length ? config.id : void 0,
          drop: write && takesMoves(config.id) ? {
            hint: `Drop to ${lowerFirst(describeTemplate(write.template))}`,
            run: (path, fromSection) => {
              const file = app.vault.getFileByPath(path);
              if (file) void this.applyChange(file, write.template, writes.get(fromSection)?.template);
            }
          } : void 0,
          emptyText,
          more,
          fold: {
            collapsed: collapsed.has(this.foldKey(config.id, page)),
            onToggle: (now) => this.rememberCollapsed(this.foldKey(config.id, page), now)
          },
          paging: {
            more: () => {
              const shown = this.revealed.get(config.id) ?? cards.length;
              this.revealed.set(config.id, shown + config.count);
              this.applyFilter();
            },
            fewer: () => {
              this.revealed.delete(config.id);
              this.applyFilter();
              el.find(".hc-more-row")?.scrollIntoView({ block: "nearest" });
            }
          }
        });
        el.dataset.hcSection = config.id;
        el.dataset.hcBase = String(cards.length);
      }
    }
    this.disposeDeks?.();
    shell.body.replaceChildren(...Array.from(next.childNodes));
    this.applyFilter();
    this.disposeDeks = observeDeks(shell.body, (path, el) => {
      const file = app.vault.getFileByPath(path);
      if (!file) return;
      void plugin.dekCache.get(app, file, plugin.settings).then((dek) => settleDek(el, dek));
    });
  }
  /** Make a section's stated change to a note, through Obsidian, and say what changed. */
  async applyChange(file, template, from) {
    try {
      const done = await applyTemplate(this.app, file, template, from);
      new import_obsidian8.Notice(done ? `${done} on ${file.basename}.` : `${file.basename} already has these values.`);
    } catch (err) {
      console.error("Home Cards: could not change the note", err);
      new import_obsidian8.Notice(`Could not change ${file.basename}. See the console for details.`);
    }
  }
  // ------------------------------------------------------- section state
  /**
   * The key a section's folded state is stored under. Every other page
   * keys on its own identity as well, so folding "Recently modified" on
   * one page does not fold it on the rest; the home page keeps its
   * original keys.
   */
  foldKey(sectionId, page) {
    return page.isHome ? sectionId : `${sectionId}@${page.key}`;
  }
  /** Folded sections, by key. Kept per device, in Obsidian's local storage. */
  collapsedIds() {
    const stored = this.app.loadLocalStorage(COLLAPSED_KEY);
    return Array.isArray(stored) ? stored.filter((v) => typeof v === "string") : [];
  }
  rememberCollapsed(id, collapsed) {
    const ids = new Set(this.collapsedIds());
    if (collapsed) ids.add(id);
    else ids.delete(id);
    this.app.saveLocalStorage(COLLAPSED_KEY, [...ids]);
  }
  /**
   * Decide which cards show. Unfiltered, a section shows its first cards
   * plus any "See more" has revealed. Filtering searches every card,
   * held back or not, and opens folded sections while the query lasts.
   */
  applyFilter() {
    const body = this.shell?.body;
    if (!body) return;
    const q = this.query.trim().toLowerCase();
    body.toggleClass("is-filtering", q !== "");
    for (const section of body.findAll(".hc-section")) {
      const id = section.dataset.hcSection ?? "";
      const base = Number(section.dataset.hcBase ?? "0");
      const limit = this.revealed.get(id) ?? base;
      const cards = section.findAll(".hc-card");
      let shown = 0;
      for (const card of cards) {
        const index = Number(card.dataset.hcIndex ?? "0");
        const visible = q ? (card.dataset.search ?? "").includes(q) : index < limit;
        card.toggleClass("is-hidden", !visible);
        if (visible) shown++;
      }
      section.find(".hc-count")?.setText(String(shown));
      const canMore = limit < cards.length;
      const canFewer = limit > base;
      section.find(".hc-more")?.toggleClass("is-hidden", !canMore);
      section.find(".hc-less")?.toggleClass("is-hidden", !canFewer);
      section.find(".hc-more-row")?.toggleClass("is-hidden", q !== "" || !(canMore || canFewer));
      section.toggleClass("is-hidden", q !== "" && shown === 0);
    }
  }
};
var EMPTY_BY_KIND = {
  continue: "Notes you open on this device appear here, grouped by work session.",
  related: "Notes linked to what you open appear here."
};
function emptyFor(cfg, relate) {
  if (cfg.kind === "relate") {
    if (!relate) return "This section shows a search from the Relate plugin, which is not running.";
    if (!cfg.query.trim()) return "Add a search in this section's settings.";
    return "Relate found no notes for this search.";
  }
  if (cfg.kind === "rediscover" && cfg.strategy === "unlinked") {
    if (!relate) return "This strategy uses search by meaning from the Relate plugin, which is not running.";
    if (!safely(() => relate.meaningReady())) return "Turn on search by meaning in Relate's settings to fill this section.";
  }
  return void 0;
}
function safely(fn) {
  try {
    return fn();
  } catch {
    return false;
  }
}
var lowerFirst = (text) => text.charAt(0).toLowerCase() + text.slice(1);
function datelineScope(page) {
  const { scope } = page;
  if (page.note) return page.note.split("/").slice(0, -1).join(" / ");
  switch (scope.kind) {
    case "folder":
      return scope.folder.split("/").slice(0, -1).join(" / ");
    case "all":
      return "";
    default:
      return scopeSummary(scope).replace(/^[^:]+: /, "");
  }
}
function emptyPageText(page) {
  switch (page.scope.kind) {
    case "folder":
      return "This folder has no notes yet. Cards appear here as you add them.";
    case "tag":
      return "No notes have this tag yet. Cards appear here as you tag them.";
    case "property":
      return "No notes have this property yet. Cards appear here as you add it.";
    default:
      return "Cards appear here as you write notes.";
  }
}

// src/render/page-picker.ts
var import_obsidian9 = require("obsidian");
var PagePicker = class extends import_obsidian9.FuzzySuggestModal {
  constructor(plugin) {
    super(plugin.app);
    this.plugin = plugin;
    this.setPlaceholder("Choose a page");
  }
  getItems() {
    const pages = this.plugin.settings.pages.map((page) => ({
      ref: { page: page.id },
      title: page.name,
      note: scopeSummary(page.scope)
    }));
    return [{ ref: {}, title: "Home", note: "The home page" }, ...pages];
  }
  getItemText(choice2) {
    return choice2.title;
  }
  renderSuggestion(match, el) {
    super.renderSuggestion(match, el);
    el.find(".suggestion-content")?.createDiv({ cls: "suggestion-note", text: match.item.note });
  }
  onChooseItem(choice2) {
    void this.plugin.activateView(choice2.ref);
  }
};
function pickPage(plugin) {
  new PagePicker(plugin).open();
}

// src/settings/normalize.ts
var isObject = (v) => typeof v === "object" && v !== null && !Array.isArray(v);
var str = (v, fallback) => typeof v === "string" ? v : fallback;
var bool = (v, fallback) => typeof v === "boolean" ? v : fallback;
function int(v, fallback, range) {
  const n = typeof v === "number" ? v : typeof v === "string" ? Number(v) : NaN;
  if (!Number.isFinite(n)) return fallback;
  return Math.min(range.max, Math.max(range.min, Math.round(n)));
}
function choice(registry, v, fallback) {
  return registry.some((c) => c.id === v) ? v : fallback;
}
var LEGACY_TITLES = /* @__PURE__ */ new Set([
  "Recently opened",
  "Recently created",
  "Recently modified",
  "By dateline",
  "Referenced but never written",
  "New section"
]);
function migrate(raw) {
  const r = { ...raw };
  if (r.defaultView === "masonry" || r.defaultView === "tiles") r.defaultView = "grid";
  if (typeof r.paperStyle === "string" && r.paperStyle !== "blank") r.background = "suns";
  if (r.backgroundPattern === true) r.background = "suns";
  const retiredPatterns = {
    hearts: "diamonds",
    interlace: "diamonds",
    regal: "diamonds",
    crosses: "diamonds",
    waves: "stitches"
  };
  if (typeof r.background === "string" && r.background in retiredPatterns) {
    r.background = retiredPatterns[r.background];
  }
  const surfaceMap = {
    secondary: "flat",
    "primary-alt": "elevated",
    transparent: "frosted",
    outline: "frosted"
  };
  if (typeof r.cardSurface === "string" && r.cardSurface in surfaceMap) {
    r.cardSurface = surfaceMap[r.cardSurface];
  }
  if (!Array.isArray(r.pages) && Array.isArray(r.folderPages)) {
    r.pages = r.folderPages.flatMap((entry) => {
      if (!isObject(entry)) return [];
      const path = normalizeFolderPath(str(entry.path, ""));
      if (!path) return [];
      return [
        {
          id: legacyFolderPageId(path),
          name: path.slice(path.lastIndexOf("/") + 1),
          scope: { kind: "folder", folder: path },
          sections: entry.sections
        }
      ];
    });
  }
  delete r.folderPages;
  if (!("showFileSize" in r) && typeof r.showWordCount === "boolean") {
    r.showFileSize = r.showWordCount;
  }
  return r;
}
function normalizeSection(e, index) {
  const legacyUnresolved = e.kind === "unresolved";
  const title = str(e.title, "");
  const cfg = {
    id: str(e.id, "") || `s${index}-${newSectionId()}`,
    title: legacyUnresolved || LEGACY_TITLES.has(title.trim()) ? "" : title,
    kind: legacyUnresolved ? "most-linked" : choice(SECTION_KINDS, e.kind, BLANK_SECTION.kind),
    count: int(e.count, BLANK_SECTION.count, LIMITS.count),
    enabled: e.enabled !== false,
    propertyKey: str(e.propertyKey, ""),
    propertyValue: str(e.propertyValue, ""),
    sortKey: str(e.sortKey, ""),
    sortDir: e.sortDir === "asc" ? "asc" : "desc",
    tag: str(e.tag, ""),
    strategy: choice(REDISCOVER_STRATEGIES, e.strategy, "forgotten"),
    filterTags: str(e.filterTags, ""),
    filterProps: str(e.filterProps, ""),
    filterFolders: str(e.filterFolders, ""),
    conditions: normalizeConditions(e.conditions),
    fields: normalizeFields(e.fields),
    image: choice(CARD_IMAGES, e.image, "none"),
    query: str(e.query, ""),
    note: str(e.note, ""),
    relation: str(e.relation, "")
  };
  if (!legacyUnresolved) return [cfg];
  return [cfg, blankSection({ id: `${cfg.id}-least`, kind: "least-linked" })];
}
function normalizeConditions(raw) {
  if (!Array.isArray(raw)) return [];
  const out = [];
  for (const entry of raw) {
    if (out.length >= LIMITS.conditions.max) break;
    if (!isObject(entry) || !CONDITION_OPS.some((op) => op.id === entry.op)) continue;
    out.push({
      property: str(entry.property, "").trim(),
      op: choice(CONDITION_OPS, entry.op, "exists"),
      value: str(entry.value, typeof entry.value === "number" ? String(entry.value) : "")
    });
  }
  return out;
}
function normalizeFields(raw) {
  if (!Array.isArray(raw)) return [];
  const out = [];
  for (const v of raw) {
    const key = typeof v === "string" ? v.trim() : "";
    if (key && !out.includes(key) && out.length < LIMITS.fields.max) out.push(key);
  }
  return out;
}
function normalizeSections(raw) {
  if (!Array.isArray(raw)) return defaultSections();
  const seen = /* @__PURE__ */ new Set();
  const out = [];
  raw.forEach((entry, i) => {
    if (!isObject(entry)) return;
    for (const cfg of normalizeSection(entry, i)) {
      while (seen.has(cfg.id)) cfg.id += "x";
      seen.add(cfg.id);
      out.push(cfg);
    }
  });
  return out.length ? out : defaultSections();
}
function normalizeScope(raw) {
  const e = isObject(raw) ? raw : {};
  return {
    ...blankScope(),
    kind: choice(PAGE_SCOPES, e.kind, "all"),
    folder: normalizeFolderPath(str(e.folder, "")),
    tag: str(e.tag, "").trim().replace(/^#/, ""),
    propertyKey: str(e.propertyKey, "").trim(),
    propertyValue: str(e.propertyValue, "").trim()
  };
}
function normalizePages(raw) {
  if (!Array.isArray(raw)) return [];
  const ids = /* @__PURE__ */ new Set();
  const out = [];
  for (const entry of raw) {
    if (out.length >= LIMITS.pages.max) break;
    if (!isObject(entry)) continue;
    let id = str(entry.id, "");
    if (!/^[A-Za-z0-9-]{1,48}$/.test(id) || ids.has(id)) id = `page-n${out.length}`;
    while (ids.has(id)) id += "x";
    ids.add(id);
    const scope = normalizeScope(entry.scope);
    const sections = Array.isArray(entry.sections) && entry.sections.length ? normalizeSections(entry.sections) : null;
    const name = uniquePageName(out, str(entry.name, "").trim() || suggestPageName(scope));
    out.push({ id, name, scope, sections });
  }
  return out;
}
function normalizeCustomBackgrounds(raw) {
  if (!Array.isArray(raw)) return [];
  const seen = /* @__PURE__ */ new Set();
  const out = [];
  for (const entry of raw) {
    if (out.length >= CUSTOM_BACKGROUNDS.max) break;
    if (!isObject(entry)) continue;
    const id = str(entry.id, "");
    const file = str(entry.file, "");
    if (!isCustomId(id) || seen.has(id) || !isStoredFileName(file)) continue;
    seen.add(id);
    out.push({
      id,
      label: str(entry.label, "").trim().slice(0, CUSTOM_BACKGROUNDS.maxLabel) || "Background",
      file,
      fit: choice(BACKGROUND_FITS, entry.fit, "pattern"),
      width: int(entry.width, 400, { min: CUSTOM_BACKGROUNDS.minEdge, max: CUSTOM_BACKGROUNDS.pictureEdge }),
      fade: int(entry.fade, CUSTOM_BACKGROUNDS.defaultFade, LIMITS.fade)
    });
  }
  return out;
}
function pathList(raw, max) {
  if (!Array.isArray(raw)) return [];
  return [...new Set(raw.filter((p) => typeof p === "string" && p.trim() !== ""))].slice(0, max);
}
function normalizeMarks(raw) {
  const e = isObject(raw) ? raw : {};
  const snoozed = {};
  if (isObject(e.snoozed)) {
    for (const [path, until] of Object.entries(e.snoozed)) {
      if (Object.keys(snoozed).length >= LIMITS.snoozed.max) break;
      if (path && typeof until === "string" && /^\d{4}-\d{2}-\d{2}$/.test(until)) snoozed[path] = until;
    }
  }
  return {
    pinned: pathList(e.pinned, LIMITS.pinned.max),
    snoozed,
    quiet: pathList(e.quiet, LIMITS.quiet.max)
  };
}
function normalizeSettings(stored) {
  const d = defaultSettings();
  if (!isObject(stored)) return d;
  const r = migrate(stored);
  const customBackgrounds = normalizeCustomBackgrounds(r.customBackgrounds);
  const background = str(r.background, d.background);
  return {
    version: SETTINGS_VERSION,
    sections: normalizeSections(r.sections),
    pages: normalizePages(r.pages),
    marks: normalizeMarks(r.marks),
    dedupe: bool(r.dedupe, d.dedupe),
    rediscoverMonths: int(r.rediscoverMonths, d.rediscoverMonths, LIMITS.rediscoverMonths),
    greetingEnabled: bool(r.greetingEnabled, d.greetingEnabled),
    greetingOccasions: bool(r.greetingOccasions, d.greetingOccasions),
    greetingName: str(r.greetingName, d.greetingName),
    showNoteCount: bool(r.showNoteCount, d.showNoteCount),
    openOnStartup: bool(r.openOnStartup, d.openOnStartup),
    showReleaseNotes: bool(r.showReleaseNotes, d.showReleaseNotes),
    // Anything but a plain version reads as no marker.
    lastShownVersion: laterVersion(str(r.lastShownVersion, ""), d.lastShownVersion),
    defaultView: choice(VIEW_MODES, r.defaultView, d.defaultView),
    cardMinWidth: int(r.cardMinWidth, d.cardMinWidth, LIMITS.cardMinWidth),
    cardSurface: choice(SURFACES, r.cardSurface, d.cardSurface),
    // A stored custom id survives only while its record does.
    background: BACKGROUNDS.some((b) => b.id === background) || customBackgrounds.some((b) => b.id === background) ? background : d.background,
    customBackgrounds,
    accentRubrics: bool(r.accentRubrics, d.accentRubrics),
    // Blank falls back to the default: a card always has a type key.
    typeProperty: str(r.typeProperty, d.typeProperty).trim() || d.typeProperty,
    showGlyph: bool(r.showGlyph, d.showGlyph),
    typifyIcons: bool(r.typifyIcons, d.typifyIcons),
    showRubric: bool(r.showRubric, d.showRubric),
    showTags: bool(r.showTags, d.showTags),
    maxTags: int(r.maxTags, d.maxTags, LIMITS.maxTags),
    showDeks: bool(r.showDeks, d.showDeks),
    dekLines: int(r.dekLines, d.dekLines, LIMITS.dekLines),
    showFileSize: bool(r.showFileSize, d.showFileSize),
    imageProperties: str(r.imageProperties, d.imageProperties),
    summaryProperty: str(r.summaryProperty, d.summaryProperty).trim(),
    boilerplateOpeners: str(r.boilerplateOpeners, d.boilerplateOpeners),
    titlePrefixes: str(r.titlePrefixes, d.titlePrefixes),
    stripTrailingDates: bool(r.stripTrailingDates, d.stripTrailingDates)
  };
}

// src/settings-tab/page-modal.ts
var import_obsidian13 = require("obsidian");

// src/settings-tab/section-list.ts
var import_obsidian12 = require("obsidian");

// src/settings-tab/section-modal.ts
var import_obsidian11 = require("obsidian");

// src/settings-tab/condition-list.ts
var import_obsidian10 = require("obsidian");
function renderConditionList(el, conditions, types, changed, redraw) {
  const typeOf = (field) => FILE_FIELDS.find((f) => f.id === field)?.type ?? types.get(field) ?? "text";
  conditions.forEach((cond, i) => {
    const row = new import_obsidian10.Setting(el).setName(i === 0 ? "Where" : "And");
    const ops = opsFor(typeOf(cond.property));
    if (!ops.some((op2) => op2.id === cond.op)) cond.op = ops[0].id;
    const op = CONDITION_OPS.find((o) => o.id === cond.op);
    row.setDesc(!cond.property.trim() ? "Choose a property." : op?.input === "days" ? "In days, counting today." : "");
    row.settingEl.setAttr("aria-label", describeCondition(cond));
    row.addDropdown((d) => {
      d.addOption("", "Property");
      for (const f of FILE_FIELDS) d.addOption(f.id, f.label);
      for (const key of types.keys()) d.addOption(key, key);
      if (cond.property && !FILE_FIELDS.some((f) => f.id === cond.property) && !types.has(cond.property)) {
        d.addOption(cond.property, `${cond.property} (not in vault)`);
      }
      d.setValue(cond.property).onChange((v) => {
        cond.property = v;
        changed();
        redraw();
      });
    });
    row.addDropdown((d) => {
      for (const o of ops) d.addOption(o.id, o.label);
      d.setValue(cond.op).onChange((v) => {
        const next = CONDITION_OPS.find((o) => o.id === v);
        if (!next) return;
        cond.op = next.id;
        if (next.input === "none") cond.value = "";
        changed();
        redraw();
      });
    });
    if (op && op.input !== "none") {
      row.addText(
        (t) => t.setPlaceholder(op.input === "days" ? "Days" : op.input === "number" ? "Number" : "Value").setValue(cond.value).onChange((v) => {
          cond.value = v;
          row.settingEl.setAttr("aria-label", describeCondition(cond));
          changed();
        })
      );
    }
    row.addExtraButton(
      (b) => b.setIcon("trash").setTooltip("Remove condition").onClick(() => {
        conditions.splice(i, 1);
        changed();
        redraw();
      })
    );
  });
  if (conditions.length < LIMITS.conditions.max) {
    new import_obsidian10.Setting(el).addButton(
      (b) => b.setButtonText("Add condition").onClick(() => {
        conditions.push({ property: "", op: "is", value: "" });
        changed();
        redraw();
      })
    );
  }
}

// src/settings-tab/widgets.ts
function choiceOptions(registry) {
  return Object.fromEntries(registry.map((c) => [c.id, c.label]));
}
function addChoices(dropdown, registry) {
  return dropdown.addOptions(choiceOptions(registry));
}
function sectionSummary(cfg) {
  const cards = `${cfg.count} ${cfg.count === 1 ? "card" : "cards"}`;
  const source = labelOf(SECTION_KINDS, cfg.kind);
  const bits = cfg.title.trim() && source !== sectionTitle(cfg) ? [source] : [];
  const conditions = cfg.conditions.filter((c) => c.property.trim());
  if (conditions.length) {
    const more = conditions.length > 1 ? ` and ${conditions.length - 1} more` : "";
    bits.push(`where ${describeCondition(conditions[0])}${more}`);
  }
  bits.push(cards);
  if (cfg.kind === "pinned") bits.push("always first, hidden without pins");
  return bits.join(" \xB7 ");
}

// src/settings-tab/section-modal.ts
var SOURCE_NOTES = {
  pinned: "Notes you pin from a card's menu, the latest pin first. A Pinned section always leads the page, and it stays hidden while you have no pins.",
  continue: "Your latest work session on this device, then notes edited during it, then the session before.",
  related: "Notes linked to what you opened most recently, or sharing links or tags with it.",
  "recent-opened": "Notes opened on this device, the latest first.",
  relate: "Notes from a search in the Relate plugin, which reads relationships, chains of links and dates. Each card says why it matches."
};
var SectionModal = class extends import_obsidian11.Modal {
  constructor(plugin, cfg, onDone) {
    super(plugin.app);
    this.plugin = plugin;
    this.cfg = cfg;
    this.onDone = onDone;
    /** Frontmatter keys and their types, gathered once per opening: the walk is vault-wide. */
    this.types = /* @__PURE__ */ new Map();
    this.properties = [];
  }
  onOpen() {
    this.types = discoverPropertyTypes(this.app);
    this.properties = [...this.types.keys()];
    this.modalEl.addClass("hc-section-modal");
    this.draw();
  }
  onClose() {
    this.contentEl.empty();
    this.onDone();
  }
  /** Draw every field for the current source. */
  draw() {
    const { cfg, contentEl } = this;
    contentEl.empty();
    this.setTitle(sectionTitle(cfg));
    let heading = null;
    const touch = () => {
      this.setTitle(sectionTitle(cfg));
      heading?.setPlaceholder(autoTitle(cfg));
      this.plugin.touch();
    };
    const redraw = () => {
      this.plugin.touch();
      this.draw();
    };
    const row = (name, desc) => {
      const setting = new import_obsidian11.Setting(contentEl).setName(name);
      if (desc) setting.setDesc(desc);
      return setting;
    };
    const text = (name, desc, placeholder, key) => row(name, desc).addText(
      (t) => t.setPlaceholder(placeholder).setValue(cfg[key]).onChange((v) => {
        cfg[key] = v;
        touch();
      })
    );
    row("Heading", "Leave empty to follow the source.").addText(
      (t) => (heading = t).setPlaceholder(autoTitle(cfg)).setValue(cfg.title).onChange((v) => {
        cfg.title = v;
        touch();
      })
    );
    const relate = this.plugin.relate !== null;
    const offered = (list, current) => list.filter((k) => relate || k.id === current || !needsRelate(k));
    const kinds = offered(SECTION_KINDS, cfg.kind).filter((k) => k.id === cfg.kind || !isGenerated(k.id));
    row("Source", SOURCE_NOTES[cfg.kind] ?? "").addDropdown(
      (d) => addChoices(d, kinds).setValue(cfg.kind).onChange((v) => {
        if (!isChoice(SECTION_KINDS, v)) return;
        cfg.kind = v;
        redraw();
      })
    );
    row("Cards", "How many the section shows before See more.").addSlider(
      (sl) => sl.setLimits(LIMITS.count.min, LIMITS.count.max, 1).setValue(cfg.count).onChange((v) => {
        cfg.count = v;
        touch();
      })
    );
    if (cfg.kind === "rediscover") {
      const strategy = REDISCOVER_STRATEGIES.find((st) => st.id === cfg.strategy);
      row("Strategy", strategy?.desc ?? "").addDropdown(
        (d) => addChoices(d, offered(REDISCOVER_STRATEGIES, cfg.strategy)).setValue(cfg.strategy).onChange((v) => {
          if (!isChoice(REDISCOVER_STRATEGIES, v)) return;
          cfg.strategy = v;
          redraw();
        })
      );
    }
    if (cfg.kind === "property") {
      const desc = this.properties.length ? "Only notes with this property appear here." : "The notes in this vault have no properties yet.";
      row("Property", desc).addDropdown((d) => {
        this.propertyOptions(d.addOption("", "Pick a property"), cfg.propertyKey);
        d.setValue(cfg.propertyKey).onChange((v) => {
          cfg.propertyKey = v;
          if (!cfg.sortKey) cfg.sortKey = v;
          redraw();
        });
      });
      text("Value", "Optional. Leave empty to include every note with the property.", "Report", "propertyValue");
    }
    if (cfg.kind === "relate") {
      text(
        "Search",
        relate ? "Any search Relate understands." : "Relate is not running, so this section stays empty until it is.",
        "notes of Q3 Plan this week",
        "query"
      );
    }
    if (cfg.kind === "tag") {
      text("Tag", "Matches the tag and any tag nested under it.", "project/active", "tag");
    }
    if (cfg.kind === "property" || cfg.kind === "tag") {
      row("Sort by", "Notes without the property sort by when they last changed.").addDropdown((d) => {
        this.propertyOptions(d.addOption("", "File modified"), cfg.sortKey);
        d.setValue(cfg.sortKey).onChange((v) => {
          cfg.sortKey = v;
          this.plugin.touch();
        });
      }).addDropdown(
        (d) => d.addOption("desc", "Newest first").addOption("asc", "Oldest first").setValue(cfg.sortDir).onChange((v) => {
          cfg.sortDir = v === "asc" ? "asc" : "desc";
          this.plugin.touch();
        })
      );
    }
    new import_obsidian11.Setting(contentEl).setName("Filters").setHeading();
    text("Tags", "Comma separated. A tag includes the tags nested under it.", "project/active, reading", "filterTags");
    text("Properties", "A key requires the property; key=value matches its value.", "status=active, author", "filterProps");
    text("Folders", "A pattern with a slash matches a path; anything else matches a folder name.", "/Projects/*, archive", "filterFolders");
    new import_obsidian11.Setting(contentEl).setName("Conditions").setDesc("A note must meet every condition. Dates count in days from today.").setHeading();
    renderConditionList(contentEl, cfg.conditions, this.types, () => this.plugin.touch(), () => this.draw());
    new import_obsidian11.Setting(contentEl).setName("Card display").setHeading();
    const fieldsRow = row("Fields", "Shown in each card's footer, in this order. Leave all empty for the page's usual footer.");
    for (let i = 0; i < LIMITS.fields.max; i++) {
      fieldsRow.addDropdown((d) => {
        d.addOption("", "None");
        for (const f of FILE_FIELDS) d.addOption(f.id, f.label);
        this.propertyOptions(d, cfg.fields[i] ?? "");
        d.setValue(cfg.fields[i] ?? "").onChange((v) => {
          const next = [...cfg.fields];
          next[i] = v;
          cfg.fields = next.filter((f, at) => f && next.indexOf(f) === at);
          redraw();
        });
      });
    }
    row("Image", "From the image properties in Settings, or else the note's first embedded image.").addDropdown(
      (d) => addChoices(d, CARD_IMAGES).setValue(cfg.image).onChange((v) => {
        if (!isChoice(CARD_IMAGES, v)) return;
        cfg.image = v;
        this.plugin.touch();
      })
    );
  }
  /** Every vault property, plus a stored key the vault no longer uses. */
  propertyOptions(d, stored) {
    for (const k of this.properties) d.addOption(k, k);
    const known = this.properties.includes(stored) || FILE_FIELDS.some((f) => f.id === stored);
    if (stored && !known) d.addOption(stored, `${stored} (not in vault)`);
  }
};

// src/settings-tab/section-list.ts
function renderSectionList(el, plugin, sections, changed, redraw) {
  const move = (index, by) => {
    const [moved2] = sections.splice(index, 1);
    if (!moved2) return;
    sections.splice(index + by, 0, moved2);
    changed();
    redraw();
  };
  const edit = (cfg) => {
    new SectionModal(plugin, cfg, redraw).open();
  };
  new import_obsidian12.Setting(el).setName("Sections").setHeading();
  sections.forEach((cfg, i) => {
    new import_obsidian12.Setting(el).setName(sectionTitle(cfg)).setDesc(sectionSummary(cfg)).addToggle(
      (t) => t.setTooltip("Show this section").setValue(cfg.enabled).onChange((on) => {
        cfg.enabled = on;
        changed();
      })
    ).addExtraButton(
      (b) => b.setIcon("arrow-up").setTooltip("Move up").setDisabled(i === 0).onClick(() => move(i, -1))
    ).addExtraButton(
      (b) => b.setIcon("arrow-down").setTooltip("Move down").setDisabled(i === sections.length - 1).onClick(() => move(i, 1))
    ).addExtraButton((b) => b.setIcon("pencil").setTooltip("Edit section").onClick(() => edit(cfg))).addExtraButton(
      (b) => b.setIcon("trash").setTooltip("Delete section").onClick(() => {
        sections.splice(i, 1);
        changed();
        redraw();
      })
    );
  });
  new import_obsidian12.Setting(el).addButton(
    (b) => b.setButtonText("Add section").onClick(() => {
      const cfg = blankSection({ id: newSectionId() });
      sections.push(cfg);
      changed();
      redraw();
      edit(cfg);
    })
  );
}

// src/settings-tab/page-modal.ts
var PageModal = class extends import_obsidian13.Modal {
  constructor(plugin, page, mode, onDone) {
    super(plugin.app);
    this.plugin = plugin;
    this.page = page;
    this.mode = mode;
    this.onDone = onDone;
    /** The page's own sections, set aside while the toggle is off. */
    this.stash = null;
    this.created = false;
  }
  onOpen() {
    this.modalEl.addClass("hc-section-modal");
    this.draw();
  }
  onClose() {
    const { page, plugin } = this;
    this.contentEl.empty();
    if (this.mode === "create") {
      if (this.created) this.onDone(page);
      return;
    }
    page.name = uniquePageName(plugin.settings.pages, page.name.trim() || suggestPageName(page.scope), page.id);
    plugin.touch();
    this.onDone(page);
  }
  /** Record an edit. A draft is not in the settings yet, so it has nothing to save. */
  changed() {
    if (this.mode === "edit") this.plugin.touch();
  }
  draw() {
    const { contentEl, page } = this;
    contentEl.empty();
    this.setTitle(this.mode === "create" ? "New page" : page.name || "Page");
    new import_obsidian13.Setting(contentEl).setName("Name").setDesc("Shown as the page's title and tab, and used in links to it.").addText(
      (t) => t.setPlaceholder(suggestPageName(page.scope)).setValue(page.name).onChange((value) => {
        page.name = value;
        this.changed();
      })
    );
    new import_obsidian13.Setting(contentEl).setName("About").setDesc("The notes the page shows. Its sections draw only from these.").addDropdown((d) => {
      for (const scope of PAGE_SCOPES) d.addOption(scope.id, scope.label);
      d.setValue(page.scope.kind).onChange((kind) => {
        page.scope.kind = kind;
        this.changed();
        this.draw();
      });
    });
    this.drawScopeFields(contentEl);
    new import_obsidian13.Setting(contentEl).setName("Own sections").setDesc(
      page.sections ? "This page uses the sections below, not the home page's." : "This page shows the home page's sections, limited to its notes. Turn this on to give it sections of its own."
    ).addToggle((t) => t.setValue(page.sections !== null).onChange((on) => this.setOwn(on)));
    if (page.sections) {
      renderSectionList(contentEl, this.plugin, page.sections, () => this.changed(), () => this.draw());
    }
    if (this.mode === "create") {
      new import_obsidian13.Setting(contentEl).addButton((b) => b.setButtonText("Cancel").onClick(() => this.close())).addButton((b) => b.setButtonText("Create page").setCta().onClick(() => this.create()));
    }
  }
  drawScopeFields(el) {
    const { scope } = this.page;
    switch (scope.kind) {
      case "folder":
        new import_obsidian13.Setting(el).setName("Folder").setDesc(scope.folder || "No folder chosen. Its subfolders count too.").addButton(
          (b) => b.setButtonText(scope.folder ? "Change" : "Choose").onClick(
            () => pickFolder(this.app, (folder) => {
              scope.folder = folder.path;
              this.changed();
              this.draw();
            })
          )
        );
        break;
      case "tag":
        new import_obsidian13.Setting(el).setName("Tag").setDesc("Notes with this tag or a tag under it. Leave out the #.").addText(
          (t) => t.setPlaceholder("Tag name").setValue(scope.tag).onChange((value) => {
            scope.tag = value.trim().replace(/^#/, "");
            this.changed();
          })
        );
        break;
      case "property":
        new import_obsidian13.Setting(el).setName("Property").setDesc("Notes that have this property, and hold this value when one is given.").addText(
          (t) => t.setPlaceholder("Property name").setValue(scope.propertyKey).onChange((value) => {
            scope.propertyKey = value.trim();
            this.changed();
          })
        ).addText(
          (t) => t.setPlaceholder("Value (optional)").setValue(scope.propertyValue).onChange((value) => {
            scope.propertyValue = value.trim();
            this.changed();
          })
        );
        break;
      default:
        break;
    }
  }
  /** Give the page its own sections, or return it to the home page's. */
  setOwn(on) {
    const { page, plugin } = this;
    if (on) {
      page.sections = this.stash ?? cloneSections(plugin.settings.sections);
    } else {
      this.stash = page.sections;
      page.sections = null;
    }
    this.changed();
    this.draw();
  }
  create() {
    const { page, plugin } = this;
    if (page.scope.kind !== "all" && isScopeBlank(page.scope)) {
      new import_obsidian13.Notice("Choose what the page is about first.");
      return;
    }
    page.name = uniquePageName(plugin.settings.pages, page.name.trim() || suggestPageName(page.scope));
    plugin.settings.pages.push(page);
    this.created = true;
    this.close();
  }
};

// src/settings-tab/tab.ts
var import_obsidian15 = require("obsidian");

// src/settings-tab/background-modal.ts
var import_obsidian14 = require("obsidian");
var BackgroundModal = class extends import_obsidian14.Modal {
  constructor(plugin, target, onDone) {
    super(plugin.app);
    this.plugin = plugin;
    this.target = target;
    this.onDone = onDone;
    this.fit = "picture";
    /** Width the stored image will have, for a pattern preview. */
    this.width = 400;
    this.busy = false;
    this.preview = null;
    if (target.kind === "add") {
      this.label = labelFromFileName(target.file.name);
      this.fade = CUSTOM_BACKGROUNDS.defaultFade;
      this.previewUrl = URL.createObjectURL(target.file);
      this.ownsPreviewUrl = true;
    } else {
      this.label = target.background.label;
      this.fit = target.background.fit;
      this.fade = target.background.fade;
      this.width = target.background.width;
      this.previewUrl = backgroundUrl(plugin, target.background);
      this.ownsPreviewUrl = false;
    }
  }
  onOpen() {
    this.modalEl.addClass("hc-section-modal");
    this.setTitle(this.target.kind === "add" ? "Add background" : "Edit background");
    const { contentEl } = this;
    this.preview = contentEl.createDiv({ cls: "hc-swatch hc-bg-preview", attr: { "aria-hidden": "true" } });
    this.paintPreview();
    if (this.target.kind === "add") void this.measure(this.target.file);
    new import_obsidian14.Setting(contentEl).setName("Name").addText(
      (t) => t.setValue(this.label).onChange((v) => {
        this.label = v;
        if (this.target.kind === "edit") this.target.background.label = v.trim().slice(0, CUSTOM_BACKGROUNDS.maxLabel) || "Background";
        this.store();
      })
    );
    if (this.target.kind === "add") {
      new import_obsidian14.Setting(contentEl).setName("Use as").setDesc("A pattern repeats across the page, like the built-in ones. A picture covers the page once.").addDropdown(
        (d) => addChoices(d, BACKGROUND_FITS).setValue(this.fit).onChange((v) => {
          this.fit = v === "pattern" ? "pattern" : "picture";
          this.paintPreview();
        })
      );
    }
    new import_obsidian14.Setting(contentEl).setName("Fade").setDesc("How much of your theme's background covers the image. Raise it when text is hard to read.").addSlider(
      (sl) => sl.setLimits(LIMITS.fade.min, LIMITS.fade.max, 5).setValue(this.fade).onChange((v) => {
        this.fade = v;
        if (this.target.kind === "edit") this.target.background.fade = v;
        this.paintPreview();
        this.store();
      })
    );
    if (this.target.kind === "add") {
      new import_obsidian14.Setting(contentEl).addButton(
        (b) => b.setButtonText("Add background").setCta().onClick(() => {
          b.setDisabled(true);
          void this.add().finally(() => {
            b.setDisabled(false);
          });
        })
      );
    }
  }
  onClose() {
    if (this.ownsPreviewUrl) URL.revokeObjectURL(this.previewUrl);
    this.contentEl.empty();
    this.onDone();
  }
  /** Save an edit of a stored image; redraws the open pages. */
  store() {
    if (this.target.kind === "edit") this.plugin.touch();
  }
  paintPreview() {
    const el = this.preview;
    if (!el) return;
    el.dataset.pattern = "custom";
    el.dataset.fit = this.fit;
    el.setCssProps(backgroundProps(this.previewUrl, { fade: this.fade, width: this.width }));
  }
  /** Read the picked image's width so a pattern previews at its stored scale. */
  async measure(file) {
    try {
      const bitmap = await createImageBitmap(file);
      this.width = Math.min(bitmap.width, CUSTOM_BACKGROUNDS.patternWidth);
      bitmap.close();
      this.paintPreview();
    } catch {
    }
  }
  async add() {
    if (this.target.kind !== "add" || this.busy) return;
    this.busy = true;
    try {
      const { settings } = this.plugin;
      const bg = await addBackground(this.plugin, this.target.file, {
        label: this.label,
        fit: this.fit,
        fade: this.fade
      });
      settings.customBackgrounds.push(bg);
      settings.background = bg.id;
      await this.plugin.commit();
      this.close();
    } catch (err) {
      new import_obsidian14.Notice(err instanceof BackgroundError ? err.message : "The image could not be added.");
      if (!(err instanceof BackgroundError)) console.error("Home Cards: could not add the background", err);
    } finally {
      this.busy = false;
    }
  }
};

// src/settings-tab/tab.ts
var COLLECTIONS = ["version", "sections", "pages", "marks", "customBackgrounds", "lastShownVersion"];
var DEFAULTS = defaultSettings();
var CHOICES = {
  defaultView: VIEW_MODES,
  cardSurface: SURFACES
};
var TEXT_RULES = {
  typeProperty: (v) => v.trim() || DEFAULTS.typeProperty,
  summaryProperty: (v) => v.trim()
};
var GLYPH = "glyph";
var GLYPH_OPTIONS = { off: "None", letter: "Initial letter", typify: "Icon from Typify" };
var HomeCardsSettingTab = class extends import_obsidian15.PluginSettingTab {
  constructor(plugin) {
    super(plugin.app, plugin);
    this.plugin = plugin;
    plugin.registerEvent(plugin.onPagesChanged(() => this.update()));
  }
  /** Obsidian calls this when the tab closes: write any pending edit. */
  hide() {
    super.hide();
    void this.plugin.flush();
  }
  // ------------------------------------------------------------ bindings
  getControlValue(key) {
    const s = this.plugin.settings;
    if (key === GLYPH) return !s.showGlyph ? "off" : s.typifyIcons ? "typify" : "letter";
    return isScalarKey(key) ? s[key] : void 0;
  }
  setControlValue(key, value) {
    const s = this.plugin.settings;
    if (key === GLYPH) {
      s.showGlyph = value !== "off";
      s.typifyIcons = value === "typify";
    } else if (isScalarKey(key)) {
      const next = coerce(key, value, s[key]);
      if (next === void 0) return;
      Object.assign(s, { [key]: next });
    } else {
      return;
    }
    this.plugin.touch();
    this.refreshDomState();
  }
  // --------------------------------------------------------- definitions
  /**
   * Called on every redraw and once at startup for the search index, so
   * it only describes rows; the vault-wide work (the property list for
   * the section editor) waits until a row is drawn or a modal opens.
   */
  getSettingDefinitions() {
    const s = this.plugin.settings;
    return [
      ...this.general(),
      this.sectionList(s),
      this.pageList(s),
      this.cardsGroup(s),
      this.textGroup(),
      this.appearanceGroup(),
      this.backgroundList(s),
      this.headerGroup(s)
    ];
  }
  general() {
    return [
      {
        name: "Open on startup",
        desc: "Show the home page when Obsidian opens.",
        control: { type: "toggle", key: "openOnStartup" }
      },
      {
        name: "Default view",
        desc: "The layout the home page opens in. The header switches it for the current page.",
        control: { type: "dropdown", key: "defaultView", options: choiceOptions(VIEW_MODES) }
      },
      {
        name: "One section per note",
        desc: "Show each note only in the first section that claims it, so section order sets precedence.",
        control: { type: "toggle", key: "dedupe" }
      },
      {
        name: "Rediscover notes untouched for",
        desc: "In months. Rediscover sections and the shuffle button draw from these notes.",
        aliases: ["random note", "forgotten notes"],
        control: {
          type: "slider",
          key: "rediscoverMonths",
          min: LIMITS.rediscoverMonths.min,
          max: LIMITS.rediscoverMonths.max,
          step: 1
        }
      },
      {
        name: "Snoozed and passed-over notes",
        desc: "Cards you snoozed, or told Rediscover to pass over, from their menus. Clearing brings them back; pins stay.",
        aliases: ["snooze", "don't rediscover"],
        render: (setting) => {
          const marks = this.plugin.settings.marks;
          const count = (n, one, many) => `${n} ${n === 1 ? one : many}`;
          setting.addButton(
            (b) => b.setButtonText(`Clear ${count(Object.keys(marks.snoozed).length, "snooze", "snoozes")}`).setDisabled(!Object.keys(marks.snoozed).length).onClick(() => {
              this.plugin.settings.marks.snoozed = {};
              void this.restructure();
            })
          ).addButton(
            (b) => b.setButtonText(`Clear ${count(marks.quiet.length, "passed-over note", "passed-over notes")}`).setDisabled(!marks.quiet.length).onClick(() => {
              this.plugin.settings.marks.quiet = [];
              void this.restructure();
            })
          );
        }
      },
      {
        name: "Announce updates",
        desc: "After Home Cards updates, show a note at the top of the home page that opens the release notes.",
        aliases: ["what's new", "release notes", "changelog"],
        control: { type: "toggle", key: "showReleaseNotes" }
      },
      {
        name: "What's new",
        desc: `Release notes for Home Cards ${this.plugin.manifest.version} and the releases before it.`,
        aliases: ["release notes", "changelog"],
        render: (setting) => {
          setting.addButton((b) => b.setButtonText("Show").onClick(() => this.plugin.showWhatsNew()));
        }
      }
    ];
  }
  /**
   * One row per section, in page order. Obsidian adds the delete button
   * and drag handle; each row adds its toggle and edit button. Callbacks
   * look the section up by its id, which survives reordering.
   */
  sectionList(s) {
    const find = (id) => this.plugin.settings.sections.find((c) => c.id === id);
    return {
      type: "list",
      heading: "Sections",
      emptyState: "No sections. Add one to fill the home page.",
      addItem: {
        name: "Add section",
        action: () => {
          const cfg = blankSection({ id: newSectionId() });
          this.plugin.settings.sections.push(cfg);
          void this.restructure();
          this.editSection(cfg.id);
        }
      },
      onReorder: (from, to) => {
        const list = this.plugin.settings.sections;
        const [moved2] = list.splice(from, 1);
        if (moved2) list.splice(to, 0, moved2);
        void this.restructure();
      },
      onDelete: (index) => {
        this.plugin.settings.sections.splice(index, 1);
        void this.restructure();
      },
      items: s.sections.map((cfg) => ({
        name: sectionTitle(cfg),
        desc: sectionSummary(cfg),
        searchable: false,
        render: (setting) => {
          setting.addToggle(
            (t) => t.setTooltip("Show this section").setValue(cfg.enabled).onChange((on) => {
              const live = find(cfg.id);
              if (!live) return;
              live.enabled = on;
              this.plugin.touch();
            })
          ).addExtraButton(
            (b) => b.setIcon("pencil").setTooltip("Edit section").onClick(() => this.editSection(cfg.id))
          );
        }
      }))
    };
  }
  /**
   * Named pages. A folder without an entry here still opens a page, with
   * the home sections limited to it, so this list holds only the pages
   * the user made or customized.
   */
  pageList(s) {
    const { app } = this.plugin;
    return {
      type: "list",
      heading: "Pages",
      emptyState: "No pages yet. A page shows the notes of one folder, tag or property, with the home sections or sections of its own.",
      addItem: {
        name: "Add page",
        action: () => this.plugin.createPage({ open: false, onCreated: () => void this.restructure() })
      },
      onDelete: (index) => {
        this.plugin.settings.pages.splice(index, 1);
        void this.restructure();
      },
      items: s.pages.map((page) => {
        const own = page.sections ? `${page.sections.length} ${page.sections.length === 1 ? "section" : "sections"}` : "home sections";
        const folderGone = page.scope.kind === "folder" && page.scope.folder !== "" && !app.vault.getFolderByPath(page.scope.folder);
        return {
          name: page.name,
          desc: `${scopeSummary(page.scope)} \xB7 ${own}${folderGone ? " \xB7 folder not found" : ""}`,
          searchable: false,
          render: (setting) => {
            setting.addExtraButton(
              (b) => b.setIcon("layout-grid").setTooltip("Open page").onClick(() => void this.plugin.activateView({ page: page.id }))
            ).addExtraButton(
              (b) => b.setIcon("pencil").setTooltip("Edit page").onClick(() => this.editPage(page.id))
            );
          }
        };
      })
    };
  }
  cardsGroup(s) {
    return {
      type: "group",
      heading: "Cards",
      items: [
        {
          name: "Glyph",
          desc: "A mark in the corner of each card. Typify icons need the Typify plugin; types without one keep the letter.",
          control: { type: "dropdown", key: GLYPH, options: GLYPH_OPTIONS }
        },
        {
          name: "Type label",
          desc: "Show the note's type as the first pill on each card.",
          control: { type: "toggle", key: "showRubric" }
        },
        {
          name: "Type property",
          desc: "The property that holds each note's type.",
          control: { type: "text", key: "typeProperty", placeholder: DEFAULTS.typeProperty },
          visible: () => s.showRubric
        },
        {
          name: "Type label in accent color",
          desc: "Off uses the theme's muted text color.",
          control: { type: "toggle", key: "accentRubrics" },
          visible: () => s.showRubric
        },
        {
          name: "Image properties",
          desc: "Properties that name a card's image, in order of preference, separated by commas. Sections choose whether to show images.",
          control: { type: "text", key: "imageProperties", placeholder: DEFAULTS.imageProperties }
        },
        {
          name: "Tags",
          desc: "Frontmatter tags first, then inline tags.",
          control: { type: "toggle", key: "showTags" }
        },
        {
          name: "Tags per card",
          control: { type: "slider", key: "maxTags", min: LIMITS.maxTags.min, max: LIMITS.maxTags.max, step: 1 },
          visible: () => s.showTags
        },
        {
          name: "Opening sentence",
          desc: "The note's first sentence of prose, or its summary property.",
          control: { type: "toggle", key: "showDeks" }
        },
        {
          name: "Lines of the opening sentence",
          control: { type: "slider", key: "dekLines", min: LIMITS.dekLines.min, max: LIMITS.dekLines.max, step: 1 },
          visible: () => s.showDeks
        },
        {
          name: "File size in the footer",
          desc: "Adds each note's size at the end of its card's footer.",
          control: { type: "toggle", key: "showFileSize" }
        }
      ]
    };
  }
  textGroup() {
    return {
      type: "group",
      heading: "Card text",
      items: [
        {
          name: "Summary property",
          desc: "When a note has this property, its value replaces the opening sentence.",
          control: { type: "text", key: "summaryProperty", placeholder: "summary" }
        },
        {
          name: "Skip openings that begin with",
          desc: "Comma separated. Home Cards passes over a first sentence that starts with one of these.",
          control: { type: "text", key: "boilerplateOpeners", placeholder: "this note, this page" }
        },
        {
          name: "Remove from titles",
          desc: "Comma separated prefixes to drop from card titles.",
          control: { type: "text", key: "titlePrefixes", placeholder: "(Draft)" }
        },
        {
          name: "Remove trailing dates from titles",
          desc: "Drops a date stamp at the end of a title, such as 2026-10-14.",
          control: { type: "toggle", key: "stripTrailingDates" }
        }
      ]
    };
  }
  appearanceGroup() {
    return {
      type: "group",
      heading: "Appearance",
      items: [
        {
          name: "Minimum card width",
          desc: "Cards reflow to fill the page; this sets how narrow they may get.",
          control: {
            type: "slider",
            key: "cardMinWidth",
            min: LIMITS.cardMinWidth.min,
            max: LIMITS.cardMinWidth.max,
            step: 2,
            displayFormat: (v) => `${v}px`
          }
        },
        {
          name: "Card surface",
          desc: "Flat uses the theme's panel color and a thin border. Elevated lifts each card on a shadow. Frosted lets a background pattern show through, blurred.",
          control: { type: "dropdown", key: "cardSurface", options: choiceOptions(SURFACES) }
        },
        {
          name: "Background",
          desc: "Plain follows the theme. Each pattern has a light and a dark version that follow the theme's mode.",
          aliases: ["pattern", "wallpaper"],
          render: (setting) => {
            setting.settingEl.addClass("hc-picker-row");
            setting.settingEl.findAll(".hc-swatches").forEach((grid) => grid.remove());
            renderBackgroundPicker(setting.settingEl, this.plugin);
          }
        }
      ]
    };
  }
  /**
   * Images the user added as backgrounds. Their files live in the
   * plugin's own folder; deleting a row deletes its file.
   */
  backgroundList(s) {
    return {
      type: "list",
      heading: "Your backgrounds",
      emptyState: "Add a PNG, JPEG, WebP or GIF to use as the page background. Home Cards keeps a resized copy in its own plugin folder and leaves your vault's files alone.",
      addItem: {
        name: "Add image",
        action: () => chooseImage(
          (file) => new BackgroundModal(this.plugin, { kind: "add", file }, () => void this.restructure()).open()
        )
      },
      onDelete: (index) => void this.deleteBackground(index),
      items: s.customBackgrounds.map((bg) => ({
        name: bg.label,
        desc: `${labelOf(BACKGROUND_FITS, bg.fit)} \xB7 ${bg.fade}% fade`,
        searchable: false,
        render: (setting) => {
          setting.addExtraButton(
            (b) => b.setIcon("pencil").setTooltip("Edit background").onClick(
              () => new BackgroundModal(
                this.plugin,
                { kind: "edit", background: bg },
                () => void this.restructure()
              ).open()
            )
          );
          void backgroundExists(this.plugin, bg).then((found) => {
            if (!found) setting.setDesc("The image file is missing. Remove this entry or add the image again.");
          });
        }
      }))
    };
  }
  headerGroup(s) {
    return {
      type: "group",
      heading: "Header",
      items: [
        {
          name: "Greeting",
          desc: "Follows the time of day and the calendar, with a word from another language now and then.",
          control: { type: "toggle", key: "greetingEnabled" }
        },
        {
          name: "Your name",
          desc: "Some greetings address you by it.",
          control: { type: "text", key: "greetingName", placeholder: "Your name" },
          visible: () => s.greetingEnabled
        },
        {
          name: "Holiday greetings",
          desc: "Mark fixed-date holidays, such as New Year's Day, from the next time the home page opens.",
          control: { type: "toggle", key: "greetingOccasions" },
          visible: () => s.greetingEnabled
        },
        {
          name: "Note count",
          desc: "Show how many notes the vault holds, after the date.",
          control: { type: "toggle", key: "showNoteCount" }
        }
      ]
    };
  }
  // ------------------------------------------------------------- actions
  /** Write now and rebuild the rows, for changes to the section list. */
  async restructure() {
    await this.plugin.commit();
    this.update();
  }
  /** Remove an added background and its file. */
  async deleteBackground(index) {
    const settings = this.plugin.settings;
    const [bg] = settings.customBackgrounds.splice(index, 1);
    if (!bg) return;
    if (settings.background === bg.id) settings.background = "plain";
    await this.plugin.commit();
    await removeBackground(this.plugin, bg);
    this.update();
  }
  /** Open the editor for one page; its row redraws when it closes. */
  editPage(id) {
    const page = this.plugin.settings.pages.find((p) => p.id === id);
    if (!page) return;
    new PageModal(this.plugin, page, "edit", () => void this.restructure()).open();
  }
  /** Open the editor for one section; its row redraws when it closes. */
  editSection(id) {
    const cfg = this.plugin.settings.sections.find((c) => c.id === id);
    if (!cfg) return;
    new SectionModal(this.plugin, cfg, () => void this.restructure()).open();
  }
};
function isScalarKey(key) {
  return !COLLECTIONS.includes(key) && key in DEFAULTS;
}
function coerce(key, value, current) {
  if (key in CHOICES) {
    const registry = CHOICES[key];
    return typeof value === "string" && isChoice(registry, value) ? value : void 0;
  }
  if (typeof value !== typeof current) return void 0;
  const rule = TEXT_RULES[key];
  return rule && typeof value === "string" ? rule(value) : value;
}

// src/main.ts
var REFRESH = "refresh";
var PAGES = "pages";
var SAVE_DELAY_MS = 400;
var ACTIVITY_SAVE_MS = 5e3;
var RESOLVE_DELAY_MS = 1500;
var RELEASE_KEY = "home-cards-release-seen";
var HomeCardsPlugin = class extends import_obsidian16.Plugin {
  constructor() {
    super(...arguments);
    this.settings = defaultSettings();
    /** Shared by every view. Bounded, and self-invalidating on mtime and settings. */
    this.dekCache = new DekCache();
    /** Opened notes beyond the ten Obsidian remembers, for "Recently opened". */
    this.openHistory = new OpenHistory(this.app);
    /** Timed opens and visits, for Continue working, Related and Old friends. */
    this.activity = new ActivityLog(this.app);
    this.saveActivity = (0, import_obsidian16.debounce)(() => this.activity.flush(), ACTIVITY_SAVE_MS, true);
    /**
     * Views subscribe here to redraw after a settings change or a metadata
     * update. The plugin holds no view references; each view's Component
     * releases its subscription when the view closes.
     */
    this.events = new import_obsidian16.Events();
    /** True while an edit sits in memory that data.json does not have. */
    this.dirty = false;
    this.flushSoon = (0, import_obsidian16.debounce)(() => void this.flush(), SAVE_DELAY_MS, true);
    /**
     * Pins, snoozes and quiet notes, as cards and menus change them. Each
     * change writes at once and redraws every page.
     */
    this.markActions = {
      isPinned: (path) => isPinned(this.settings.marks, path),
      togglePin: (path) => this.mark(togglePin(this.settings.marks, path)),
      snooze: (path, days) => this.mark(snooze(this.settings.marks, path, /* @__PURE__ */ new Date(), days)),
      isQuiet: (path) => isQuiet(this.settings.marks, path),
      toggleQuiet: (path) => this.mark(toggleQuiet(this.settings.marks, path))
    };
    /**
     * Releases the home page announces, newest first; empty once the reader
     * has read or dismissed them, or when there is nothing new.
     */
    this.releaseNotes = [];
    /**
     * Relate's API while the Relate plugin runs, else null. Relate hands it
     * over through workspace events; see connectRelate.
     */
    this.relate = null;
    /**
     * Relate searches kept between redraws, so every open page shares one
     * search per query until the vault or Relate changes. A search that
     * misses the page's wait redraws the pages when it arrives.
     */
    this.relateSearches = {
      cache: /* @__PURE__ */ new Map(),
      onLate: () => this.refreshViews(),
      sleep: (ms) => new Promise((resolve) => window.setTimeout(resolve, ms))
    };
    /**
     * One redraw per burst of changes, whether the metadata cache or Relate
     * reports them: one edit to a relationship fires both.
     */
    this.settle = (0, import_obsidian16.debounce)(
      () => {
        this.relateSearches.cache?.clear();
        this.refreshViews();
      },
      RESOLVE_DELAY_MS,
      true
    );
    /** Named pages that have a command, with the name each was registered under. */
    this.pageCommands = /* @__PURE__ */ new Map();
  }
  mark(changed) {
    if (changed) void this.commit();
  }
  async onload() {
    const firstRun = !await this.loadSettings();
    this.reviewRelease(firstRun);
    this.registerView(VIEW_TYPE_HOME, (leaf) => new HomeView(leaf, this));
    this.registerHoverLinkSource(VIEW_TYPE_HOME, { display: "Home Cards", defaultMod: true });
    registerBasesView(this);
    this.addSettingTab(new HomeCardsSettingTab(this));
    this.addRibbonIcon("layout-grid", "Open home page", () => void this.activateView());
    this.addCommand({ id: "open", name: "Open", callback: () => void this.activateView() });
    this.addCommand({ id: "recompose", name: "Recompose", callback: () => this.refreshViews() });
    this.addCommand({ id: "whats-new", name: "Show what's new", callback: () => this.showWhatsNew() });
    this.addCommand({ id: "open-page", name: "Open a page", callback: () => pickPage(this) });
    this.addCommand({ id: "create-page", name: "Create a page", callback: () => this.createPage({ open: true }) });
    this.addCommand({
      id: "open-current-folder",
      name: "Open page for current folder",
      checkCallback: (checking) => {
        const folder = this.app.workspace.getActiveFile()?.parent;
        if (!folder || folder.isRoot()) return false;
        if (!checking) void this.activateView({ folder: folder.path });
        return true;
      }
    });
    this.addCommand({
      id: "open-folder",
      name: "Open page for a folder",
      callback: () => pickFolder(this.app, (folder) => void this.activateView({ folder: folder.path }))
    });
    this.registerEvent(
      this.app.workspace.on("file-menu", (menu, file) => {
        const ref = file instanceof import_obsidian16.TFolder && !file.isRoot() ? { folder: file.path } : file instanceof import_obsidian16.TFile && file.extension === "md" ? { note: file.path } : null;
        if (!ref) return;
        menu.addItem(
          (item) => item.setSection("action").setTitle("Open Home Cards page").setIcon("layout-grid").onClick(() => void this.activateView(ref))
        );
      })
    );
    this.registerObsidianProtocolHandler("home-cards", (params) => void this.openFromLink(params));
    this.syncPageCommands();
    this.addCommand({
      id: "open-current-note",
      name: "Open page for current note",
      checkCallback: (checking) => {
        const file = this.app.workspace.getActiveFile();
        if (!file || file.extension !== "md") return false;
        if (!checking) void this.activateView({ note: file.path });
        return true;
      }
    });
    this.connectRelate();
    this.registerEvent(this.app.metadataCache.on("resolved", () => this.settle()));
    this.registerEvent(
      this.app.workspace.on("file-open", (file) => {
        if (file?.extension !== "md") return;
        this.openHistory.record(file.path);
        this.activity.record(file.path);
        this.saveActivity();
      })
    );
    this.registerEvent(
      this.app.vault.on("rename", (file, oldPath) => {
        this.openHistory.rename(oldPath, file.path);
        this.activity.rename(oldPath, file.path);
        this.saveActivity();
        const pages = file instanceof import_obsidian16.TFolder && renamePageFolders(this.settings.pages, oldPath, file.path);
        const marks = renameMarks(this.settings.marks, oldPath, file.path);
        if (pages || marks) this.touch();
      })
    );
    this.registerEvent(
      this.app.vault.on("delete", (file) => {
        if (forgetMarks(this.settings.marks, file.path)) this.touch();
        this.activity.forget(file.path);
        this.saveActivity();
      })
    );
    this.registerEvent(
      this.app.workspace.on("file-menu", (menu, file, source) => {
        if (source === VIEW_TYPE_HOME || source === BASES_VIEW_ID) return;
        if (!(file instanceof import_obsidian16.TFile) || file.extension !== "md") return;
        const pinned = isPinned(this.settings.marks, file.path);
        menu.addItem(
          (item) => item.setSection("action").setTitle(pinned ? "Unpin from Home" : "Pin to Home").setIcon(pinned ? "pin-off" : "pin").onClick(() => this.markActions.togglePin(file.path))
        );
      })
    );
    this.addCommand({
      id: "toggle-pin",
      name: "Pin or unpin the current note",
      checkCallback: (checking) => {
        const file = this.app.workspace.getActiveFile();
        if (!file || file.extension !== "md") return false;
        if (!checking) this.markActions.togglePin(file.path);
        return true;
      }
    });
    if (this.settings.openOnStartup) {
      this.app.workspace.onLayoutReady(() => void this.activateView());
    }
  }
  /**
   * data.json changed on disk, from a sync service or another device.
   * Without an edit pending here, the stored settings win; with one, the
   * next save writes this device's edit over them, as it would anyway.
   */
  async onExternalSettingsChange() {
    if (this.dirty) return;
    await this.loadSettings();
    if (this.releaseNotes.length && compareVersions(this.seenVersion(), this.manifest.version) >= 0) {
      this.releaseNotes = [];
    }
    if (this.syncPageCommands()) this.events.trigger(PAGES);
    this.refreshViews();
  }
  onunload() {
    this.settle.cancel();
    void this.write();
    this.saveActivity.cancel();
    this.activity.flush();
  }
  // ------------------------------------------------------------ persistence
  /** Record an edit; write once the edits stop. For keystrokes and sliders. */
  touch() {
    this.dirty = true;
    this.flushSoon();
  }
  /** Record an edit and write it now. For structural changes. */
  async commit() {
    this.dirty = true;
    await this.flush();
  }
  /** Write a pending edit, if any, and redraw the views that show it. */
  async flush() {
    const wrote = await this.write();
    if (this.syncPageCommands()) this.events.trigger(PAGES);
    if (wrote) this.refreshViews();
  }
  /** Write a pending edit. Resolves true when there was one. */
  async write() {
    this.flushSoon.cancel();
    if (!this.dirty) return false;
    this.dirty = false;
    try {
      await this.saveData(this.settings);
    } catch (err) {
      this.dirty = true;
      console.error("Home Cards: could not save settings", err);
    }
    return true;
  }
  /** Read data.json. Resolves false when there was none: a new install. */
  async loadSettings() {
    let stored = null;
    try {
      stored = await this.loadData();
    } catch (err) {
      console.error("Home Cards: settings unreadable, using defaults", err);
    }
    this.settings = normalizeSettings(stored);
    if (pruneSnoozes(this.settings.marks, /* @__PURE__ */ new Date())) this.dirty = true;
    return stored !== null && stored !== void 0;
  }
  // -------------------------------------------------------------- releases
  /** The newest release seen here: the later of the synced and the local marker. */
  seenVersion() {
    const local = this.app.loadLocalStorage(RELEASE_KEY);
    return laterVersion(this.settings.lastShownVersion, typeof local === "string" ? local : "");
  }
  /** At load: queue the notice for unseen releases, or mark this version seen. */
  reviewRelease(firstRun) {
    const decision = checkForUpdate({
      current: this.manifest.version,
      seen: this.seenVersion(),
      firstRun,
      enabled: this.settings.showReleaseNotes
    });
    if (decision.kind === "announce") this.releaseNotes = decision.notes;
    else if (decision.kind === "record") this.markReleaseSeen();
  }
  /**
   * Mark the installed version seen, here and in synced settings, never
   * moving a marker back. Returns true when it saves, which redraws the views.
   */
  markReleaseSeen() {
    const current = this.manifest.version;
    const local = this.app.loadLocalStorage(RELEASE_KEY);
    this.app.saveLocalStorage(RELEASE_KEY, laterVersion(typeof local === "string" ? local : "", current));
    const synced = laterVersion(this.settings.lastShownVersion, current);
    if (synced === this.settings.lastShownVersion) return false;
    this.settings.lastShownVersion = synced;
    void this.commit();
    return true;
  }
  /** Close the home page's notice without reading the notes. */
  dismissReleaseNotes() {
    if (!this.releaseNotes.length) return;
    this.releaseNotes = [];
    if (!this.markReleaseSeen()) this.refreshViews();
  }
  /**
   * Open the release notes: the unseen ones when the home page announces
   * them, and closing the window marks them read; otherwise the latest.
   */
  showWhatsNew() {
    const unseen = this.releaseNotes.length > 0;
    const notes = unseen ? this.releaseNotes : recentNotes(this.manifest.version);
    new WhatsNewModal(this.app, notes, unseen ? () => this.dismissReleaseNotes() : void 0).open();
  }
  // ------------------------------------------------------------------ views
  /**
   * Reveal a page, opening it in a new tab if it is not open. Every page
   * has at most one tab, however it was reached: a folder with a named
   * page opens that page.
   */
  async activateView(ref = {}) {
    const { workspace } = this.app;
    const target = resolvePage(this.settings, ref);
    if (!target) {
      new import_obsidian16.Notice("Home Cards: that page no longer exists.");
      return;
    }
    const existing = workspace.getLeavesOfType(VIEW_TYPE_HOME).find((leaf2) => {
      const open = resolvePage(this.settings, refFromState(leaf2.getViewState().state));
      return open?.key === target.key;
    });
    if (existing) {
      await workspace.revealLeaf(existing);
      workspace.setActiveLeaf(existing, { focus: true });
      return;
    }
    const leaf = workspace.getLeaf("tab");
    const state = stateFromRef(target.record ? { page: target.record.id } : ref);
    await leaf.setViewState({ type: VIEW_TYPE_HOME, active: true, state });
    await workspace.revealLeaf(leaf);
  }
  // ------------------------------------------------------------------ pages
  /** Open a page from an `obsidian://home-cards` link. */
  async openFromLink(params) {
    const shown = (text) => text.length > 60 ? `${text.slice(0, 60)}\u2026` : text;
    if (params.page) {
      const page = findPageByName(this.settings.pages, params.page);
      if (page) await this.activateView({ page: page.id });
      else new import_obsidian16.Notice(`Home Cards: no page named "${shown(params.page)}".`);
    } else if (params.note) {
      const note = this.app.metadataCache.getFirstLinkpathDest(params.note, "");
      if (note?.extension === "md") await this.activateView({ note: note.path });
      else new import_obsidian16.Notice(`Home Cards: no note named "${shown(params.note)}".`);
    } else if (params.folder) {
      const folder = normalizeFolderPath(params.folder);
      if (folder && this.app.vault.getFolderByPath(folder)) await this.activateView({ folder });
      else new import_obsidian16.Notice(`Home Cards: no folder named "${shown(params.folder)}".`);
    } else {
      await this.activateView();
    }
  }
  /**
   * Keep one command per named page, named for the page. A renamed page
   * gets its command replaced under the same id, so its hotkey stays.
   * Called after every save and once at load. Returns whether any command
   * was added, renamed or removed.
   */
  syncPageCommands() {
    let changed = false;
    const wanted = new Map(this.settings.pages.map((page) => [page.id, page.name]));
    for (const [id, name] of this.pageCommands) {
      if (wanted.get(id) === name) continue;
      this.removeCommand(`open-${id}`);
      this.pageCommands.delete(id);
      changed = true;
    }
    for (const [id, name] of wanted) {
      if (this.pageCommands.has(id)) continue;
      this.addCommand({ id: `open-${id}`, name: `Open ${name} page`, callback: () => void this.activateView({ page: id }) });
      this.pageCommands.set(id, name);
      changed = true;
    }
    return changed;
  }
  /**
   * Open the editor for a new page. Nothing is saved until the editor's
   * Create button; `open` also opens the page in a tab once it exists.
   */
  createPage({ open, onCreated }) {
    if (this.settings.pages.length >= LIMITS.pages.max) {
      new import_obsidian16.Notice(`Home Cards: a vault can have up to ${LIMITS.pages.max} pages.`);
      return;
    }
    const draft = { id: newPageId(), name: "", scope: blankScope(), sections: null };
    new PageModal(this, draft, "create", (page) => {
      void this.commit().then(async () => {
        onCreated?.(page);
        if (open) await this.activateView({ page: page.id });
      });
    }).open();
  }
  /**
   * Open the editor for a page. A folder page that has no record is saved
   * as a named page for the editor to change; if the editor closes with it
   * untouched, the record is dropped again and the folder follows the home
   * page as before.
   */
  editPage(ref) {
    const resolved = resolvePage(this.settings, ref);
    if (!resolved || resolved.isHome) return;
    let page = resolved.record;
    let untouched = null;
    if (!page) {
      if (this.settings.pages.length >= LIMITS.pages.max) {
        new import_obsidian16.Notice(`Home Cards: a vault can have up to ${LIMITS.pages.max} pages.`);
        return;
      }
      page = {
        id: newPageId(),
        name: uniquePageName(this.settings.pages, suggestPageName(resolved.scope)),
        scope: { ...resolved.scope },
        sections: null
      };
      this.settings.pages.push(page);
      untouched = JSON.stringify(page);
    }
    const saved = page;
    new PageModal(this, saved, "edit", () => {
      if (untouched !== null && JSON.stringify(saved) === untouched) {
        const pages = this.settings.pages;
        pages.splice(pages.indexOf(saved), 1);
        this.touch();
      }
      void this.flush();
    }).open();
  }
  // ------------------------------------------------------------------ Relate
  /**
   * Listen for the Relate plugin, which is optional. Relate announces its
   * API with a public workspace event when it is ready and answers a
   * request from a plugin that loaded after it, so either load order works.
   * Home Cards never reads Relate's plugin instance or files, and a Relate
   * whose contract it does not know counts as absent.
   */
  connectRelate() {
    const bus = this.app.workspace;
    const use = (api) => {
      if (api === this.relate) return;
      this.relate = api;
      this.relateSearches.cache?.clear();
      this.refreshViews();
    };
    this.registerEvent(bus.on(RELATE_EVENTS.ready, (api) => use(asRelateApi(api))));
    this.registerEvent(bus.on(RELATE_EVENTS.unload, () => use(null)));
    this.registerEvent(
      bus.on(RELATE_EVENTS.changed, () => {
        if (this.relate) this.settle();
      })
    );
    bus.trigger(RELATE_EVENTS.request);
  }
  /** Subscribe to changes in the list of pages; pass the result to `registerEvent`. */
  onPagesChanged(callback) {
    return this.events.on(PAGES, callback);
  }
  /** Subscribe to redraw requests; pass the result to `registerEvent`. */
  onRefresh(callback) {
    return this.events.on(REFRESH, callback);
  }
  /** Ask every open Home and Bases view to redraw. */
  refreshViews() {
    this.events.trigger(REFRESH);
  }
};

/* nosourcemap */
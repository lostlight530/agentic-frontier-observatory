const OWNER = 'lostlight530';
const body = document.body;
const mode = body.dataset.observatory;
const repo = body.dataset.repo;
const twinRepo = body.dataset.twinRepo;

const CONFIG = {
  global: {
    label: 'Agentic Frontier Observatory',
    short: 'Global',
    evidence: [
      ['FACT', 'fact'], ['EXTERNAL CLAIM', 'claim'], ['ANALYSIS', 'analysis'], ['UNCERTAIN', 'uncertain']
    ],
    workstreams: [
      ['F1', 'History / Theory / Paradigm', 'F1-history-theory.md'],
      ['F2', 'Models / Algorithms / Multimodality', 'F2-models-algorithms.md'],
      ['F3', 'Compute / Data / Infrastructure', 'F3-infrastructure.md'],
      ['F4', 'Agents / Runtimes / Protocols', 'F4-agentic-systems.md'],
      ['F5', 'Evaluation / Safety / Governance', 'F5-evaluation-governance.md'],
      ['F6', 'Open Source / Industry / Society', 'F6-ecosystem-society.md'],
      ['F7', 'Cross-system synthesis', 'F7-synthesis.md']
    ]
  },
  china: {
    label: 'China Agentic Observatory',
    short: 'China',
    evidence: [
      ['OFFICIAL_FACT', 'fact'], ['PROJECT_FACT', 'fact'], ['EXTERNAL_CLAIM', 'claim'], ['OBSERVATORY_ANALYSIS', 'analysis'], ['UNCERTAIN', 'uncertain']
    ],
    workstreams: [
      ['C1', 'History / Policy', 'C1-history-policy.md'],
      ['C2', 'Standards / Protocols', 'C2-standards-protocols.md'],
      ['C3', 'Research / Models', 'C3-research-models.md'],
      ['C4', 'Agents / Open Source', 'C4-agents-open-source.md'],
      ['C5', 'Infrastructure / Industry', 'C5-infrastructure-industry.md'],
      ['C6', 'Applications / Governance', 'C6-applications-governance.md'],
      ['C7', 'China–Global comparison', 'C7-china-global.md'],
      ['C8', 'Synthesis / Judgment revision', 'C8-synthesis.md']
    ]
  }
};

const cfg = CONFIG[mode];
const el = id => document.getElementById(id);
const API_BASE = `https://api.github.com/repos/${OWNER}`;
const rawBase = (r, ref) => `https://raw.githubusercontent.com/${OWNER}/${r}/${ref}/`;
const githubFile = (r, path, ref = 'main') => `https://github.com/${OWNER}/${r}/blob/${ref}/${path}`;
const githubRepo = r => `https://github.com/${OWNER}/${r}`;
const githubCommit = (r, sha) => `https://github.com/${OWNER}/${r}/commit/${sha}`;

const HEAD_RECHECK_MIN_MS = 15 * 60 * 1000;
let pinnedPrimaryHead = null;
let pinnedTwinHead = null;
let projectionReadAt = null;
let lastHeadCheckAt = 0;
let headCheckInFlight = false;

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
}

function plainMarkdown(value = '') {
  return value
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_~`>#]/g, '')
    .replace(/^\s*[-+]\s+/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function sourceExcerpt(value = '', max = 1500) {
  const paragraphs = value.split(/\n\s*\n/).map(p => plainMarkdown(p)).filter(Boolean).slice(0, 4);
  let text = paragraphs.join('\n\n');
  if (text.length > max) text = `${text.slice(0, max).trim()}…`;
  return text.split(/\n\n/).map(p => `<p>${escapeHtml(p)}</p>`).join('');
}

async function fetchHead(r) {
  const response = await fetch(`${API_BASE}/${r}/branches/main`, {
    cache: 'no-store',
    headers: {Accept: 'application/vnd.github+json'}
  });
  if (!response.ok) throw new Error(`${r} main HEAD: HTTP ${response.status}`);
  const data = await response.json();
  const sha = data?.commit?.sha || '';
  if (!/^[0-9a-f]{40}$/i.test(sha)) throw new Error(`${r} main HEAD: invalid SHA`);
  return {sha, short: sha.slice(0, 7), htmlUrl: data?.commit?.html_url || githubCommit(r, sha)};
}

async function fetchText(r, path, ref) {
  if (!ref) throw new Error(`${path}: missing pinned revision`);
  const response = await fetch(`${rawBase(r, ref)}${path}`, {cache: 'no-store'});
  if (!response.ok) throw new Error(`${path}@${String(ref).slice(0, 7)}: HTTP ${response.status}`);
  return response.text();
}

function shanghaiDateParts() {
  const parts = new Intl.DateTimeFormat('en-CA', {timeZone: 'Asia/Shanghai', year:'numeric', month:'2-digit', day:'2-digit'}).formatToParts(new Date());
  const map = Object.fromEntries(parts.map(p => [p.type, p.value]));
  return {year:Number(map.year), month:Number(map.month), day:Number(map.day)};
}

function monthCandidates(count = 4) {
  const d = shanghaiDateParts();
  const out = [];
  let y = d.year, m = d.month;
  for (let i=0; i<count; i++) {
    out.push({year:y, month:m});
    m -= 1;
    if (m < 1) { m = 12; y -= 1; }
  }
  return out;
}

async function latestDailyContext(r, ref) {
  for (const {year, month} of monthCandidates()) {
    const mm = String(month).padStart(2, '0');
    const indexPath = `reports/daily/${year}/${mm}/README.md`;
    try {
      const index = await fetchText(r, indexPath, ref);
      const dates = [...index.matchAll(/\b(\d{4}-\d{2}-\d{2})\b/g)].map(m => m[1]);
      const unique = [...new Set(dates)].sort();
      if (!unique.length) continue;
      const latest = unique.at(-1);
      return {year, month:mm, latest, dates:unique, index, indexPath};
    } catch (_) {}
  }
  throw new Error('No current Daily index could be read.');
}

function isoWeekInfo(dateString) {
  const d = new Date(`${dateString}T00:00:00Z`);
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const isoYear = d.getUTCFullYear();
  const yearStart = new Date(Date.UTC(isoYear, 0, 1));
  const week = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return {year: isoYear, week};
}

function section(markdown, headingPrefix) {
  const lines = markdown.split('\n');
  const start = lines.findIndex(line => line.trim().startsWith(headingPrefix));
  if (start < 0) return '';
  const level = (lines[start].match(/^#+/) || ['##'])[0].length;
  const end = lines.findIndex((line, i) => i > start && new RegExp(`^#{1,${level}}\\s`).test(line));
  return lines.slice(start + 1, end < 0 ? lines.length : end).join('\n').trim();
}

function firstHeading(markdown) {
  const line = markdown.split('\n').find(l => /^#\s+/.test(l));
  return line ? plainMarkdown(line.replace(/^#\s+/, '')) : 'Untitled source';
}

function parseMarkdownTable(markdown) {
  const rows = markdown.split('\n').filter(line => /^\s*\|.*\|\s*$/.test(line));
  if (rows.length < 2) return {headers:[], rows:[]};
  const cells = line => line.trim().slice(1, -1).split('|').map(x => plainMarkdown(x.trim()));
  const headers = cells(rows[0]);
  const data = rows.slice(1).filter(line => !/^\s*\|(?:\s*:?-+:?\s*\|)+\s*$/.test(line)).map(cells).filter(r => r.length === headers.length);
  return {headers, rows:data};
}

function parseWeeklyState(markdown) {
  const stateLine = markdown.split('\n').find(line => /State:|状态：|Weekly state/i.test(line));
  if (!stateLine) return 'UNVERIFIED';
  return plainMarkdown(stateLine.replace(/^#+\s*/, '').replace(/^State:\s*/i, '')).trim();
}

function parseMonthlyState(markdown) {
  const match = markdown.match(/\*\*Monthly state[^*]*\*\*\s*[:：]\s*\*\*([^*]+)\*\*/i) || markdown.match(/Monthly state[^\n]*[:：]\s*([A-Z_-]+)/i);
  return match ? plainMarkdown(match[1]) : 'UNVERIFIED';
}

function parseRegistryCutoff(markdown) {
  const match = markdown.match(/Updated through:\s*\*\*([^*]+)\*\*/i) || markdown.match(/Updated through:\s*([^\n]+)/i);
  return match ? plainMarkdown(match[1]) : 'UNVERIFIED';
}

function parseHypotheses(markdown) {
  const lines = markdown.split('\n');
  const items = [];
  for (const line of lines) {
    if (!/^###\s+H\d{2}-\d+/.test(line.trim())) continue;
    const cleaned = plainMarkdown(line.replace(/^###\s+/, ''));
    const id = (cleaned.match(/^H\d{2}-\d+/) || ['H?'])[0];
    const parts = cleaned.split(/\s+[—–-]\s+/);
    const statusCandidate = parts.at(-1) || '';
    const status = /OPEN|CLOSED|REFUTED|STRENGTHENED|DURABLE/i.test(statusCandidate) ? statusCandidate : 'OPEN';
    const title = parts.slice(1, status === statusCandidate ? -1 : undefined).join(' — ') || cleaned.replace(id, '').trim();
    items.push({id, title, status});
  }
  return items;
}

function statusClass(status = '') {
  const s = status.toUpperCase();
  if (s.includes('REFUT')) return 'refuted';
  if (s.includes('CLOSED') || s.includes('DURABLE')) return 'closed';
  if (s.includes('OPEN') || s.includes('STRENGTH')) return 'open';
  return 'unknown';
}

function isoWeekLabel(date) {
  const {year, week} = isoWeekInfo(date);
  return `${year}-W${String(week).padStart(2, '0')}`;
}

function renderStatus(context) {
  const cells = [
    ['Latest Daily', context.daily.latest, 'Asia/Shanghai observation'],
    ['Canonical Weekly', context.weeklyState, context.weeklyLabel],
    ['Monthly', context.monthlyState, context.monthlyLabel],
    ['Source Registry', context.registryCutoff, 'registry cutoff'],
    ['Snapshot', `main@${context.revision.short}`, 'all canonical reads pinned']
  ];
  el('status-grid').innerHTML = cells.map(([label, value, sub]) => `<div class="status-cell"><div class="status-label">${escapeHtml(label)}</div><div class="status-value">${escapeHtml(value)}</div><div class="status-sub">${escapeHtml(sub)}</div></div>`).join('');
}

function renderEvidenceLegend() {
  el('evidence-legend').innerHTML = cfg.evidence.map(([label, kind]) => `<span class="evidence-chip ${kind}">${escapeHtml(label)}</span>`).join('');
}

function renderTimeline(ctx) {
  const dates = ctx.daily.dates.slice(-14);
  el('timeline-list').innerHTML = dates.map(date => {
    const [y,m] = date.split('-');
    const path = `reports/daily/${y}/${m}/${date}.md`;
    return `<li><a href="${githubFile(repo, path, ctx.revision.sha)}"><span class="timeline-date">${date}</span><span class="timeline-week">${isoWeekLabel(date)}</span></a></li>`;
  }).join('');
}

function renderHypotheses(hypotheses) {
  el('hypothesis-list').innerHTML = hypotheses.length ? hypotheses.map(h => `<article class="hypothesis"><span class="status-chip ${statusClass(h.status)}">${escapeHtml(h.status)}</span><div><h3>${escapeHtml(h.id)} · ${escapeHtml(h.title)}</h3><p>Weekly hypothesis state projected from the canonical Weekly.</p></div></article>`).join('') : '<p class="empty-note">No hypothesis headings were parsed from the current Weekly.</p>';
}

async function renderWorkstreams(daily, revision) {
  const pathBase = `reports/daily/${daily.year}/${daily.month}/${daily.latest}`;
  const cards = await Promise.all(cfg.workstreams.map(async ([id, label, filename]) => {
    const path = `${pathBase}/${filename}`;
    try {
      const md = await fetchText(repo, path, revision.sha);
      const title = firstHeading(md).replace(new RegExp(`^${id}\\s*[—–:-]?\\s*`, 'i'), '') || label;
      const body = section(md, '## 0') || md.split('\n').slice(1).join('\n');
      return `<article class="workstream-card"><div class="workstream-top"><span class="workstream-id">${id}</span><span class="status-chip open">LATEST PACK</span></div><h3>${escapeHtml(title)}</h3><div class="source-excerpt">${sourceExcerpt(body, 600)}</div><a class="source-link" href="${githubFile(repo, path, revision.sha)}">Open ${id} source ↗</a></article>`;
    } catch (error) {
      return `<article class="workstream-card"><div class="workstream-top"><span class="workstream-id">${id}</span><span class="status-chip unknown">UNAVAILABLE</span></div><h3>${escapeHtml(label)}</h3><p>Latest pack source could not be read. No finding is inferred.</p><a class="source-link" href="${githubFile(repo, path, revision.sha)}">Inspect expected source ↗</a></article>`;
    }
  }));
  el('workstream-grid').innerHTML = cards.join('');
}

function renderWatchlist(markdown) {
  const table = parseMarkdownTable(markdown);
  const rows = table.rows.filter(row => row.some(cell => /OPEN|STRENGTH/i.test(cell))).slice(0, 12);
  const headers = table.headers.slice(0, 4);
  if (!headers.length || !rows.length) { el('watchlist-table-wrap').innerHTML = '<p class="empty-note">No open watchlist table rows were parsed.</p>'; return; }
  el('watchlist-table-wrap').innerHTML = `<table><thead><tr>${headers.map(h=>`<th scope="col">${escapeHtml(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.slice(0,4).map(cell=>`<td>${escapeHtml(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
}

function registryModel(markdown) {
  const table = parseMarkdownTable(markdown);
  const urlIndex = table.headers.findIndex(h => /URL/i.test(h));
  return {headers: table.headers, rows: table.rows, urlIndex};
}

function renderRegistry(model, query = '') {
  const q = query.trim().toLowerCase();
  const rows = model.rows.filter(r => !q || r.join(' ').toLowerCase().includes(q));
  const displayRows = rows.slice(0, 40);
  if (!model.headers.length) { el('source-table-wrap').innerHTML = '<p class="empty-note">Source Registry table could not be parsed.</p>'; return; }
  el('source-table-wrap').innerHTML = `<table><thead><tr>${model.headers.map(h=>`<th scope="col">${escapeHtml(h)}</th>`).join('')}</tr></thead><tbody>${displayRows.map(row=>`<tr>${row.map((cell,i)=>{const safe=escapeHtml(cell); if(i===model.urlIndex && /^https:\/\//i.test(cell)) return `<td><a class="source-link" href="${safe}" target="_blank" rel="noopener noreferrer">Primary source ↗</a></td>`; return `<td>${safe}</td>`;}).join('')}</tr>`).join('')}</tbody></table>${rows.length>40?`<p class="empty-note">Showing 40 of ${rows.length} matching registry rows. Refine the filter to narrow the projection.</p>`:''}`;
}

async function buildContext(r, revision) {
  const daily = await latestDailyContext(r, revision.sha);
  const [y,m] = daily.latest.split('-');
  const dailyPath = `reports/daily/${y}/${m}/${daily.latest}.md`;
  const weeklyInfo = isoWeekInfo(daily.latest);
  const weeklyLabel = `${weeklyInfo.year}-W${String(weeklyInfo.week).padStart(2,'0')}`;
  const weeklyPath = `reports/weekly/${weeklyInfo.year}/${weeklyLabel}.md`;
  const monthlyLabel = `${y}-${m}`;
  const monthlyPath = `reports/monthly/${y}/${monthlyLabel}.md`;
  const [dailyMd, weeklyMd, monthlyMd, registryMd, watchlistMd] = await Promise.all([
    fetchText(r, dailyPath, revision.sha),
    fetchText(r, weeklyPath, revision.sha).catch(()=>''),
    fetchText(r, monthlyPath, revision.sha).catch(()=>''),
    fetchText(r, 'SOURCE_REGISTRY.md', revision.sha),
    fetchText(r, 'watchlist/ACTIVE.md', revision.sha).catch(()=> '')
  ]);
  return {
    daily, dailyPath, dailyMd,
    weeklyPath, weeklyMd, weeklyLabel, weeklyState: weeklyMd ? parseWeeklyState(weeklyMd) : 'UNAVAILABLE',
    monthlyPath, monthlyMd, monthlyLabel, monthlyState: monthlyMd ? parseMonthlyState(monthlyMd) : 'UNAVAILABLE',
    registryMd, registryCutoff: parseRegistryCutoff(registryMd),
    watchlistMd,
    revision
  };
}

function renderTwin(primary, twin, twinMode) {
  const cards = [
    [cfg.label, repo, primary],
    [CONFIG[twinMode].label, twinRepo, twin]
  ];
  el('twin-grid').innerHTML = cards.map(([label, r, c]) => `<article class="twin-card"><div class="panel-heading"><p class="panel-kicker">${escapeHtml(label)}</p><a class="source-link" href="${githubCommit(r, c.revision.sha)}">main@${escapeHtml(c.revision.short)} ↗</a></div><dl class="twin-metrics"><div class="twin-metric"><dt>Latest Daily</dt><dd>${escapeHtml(c.daily.latest)}</dd></div><div class="twin-metric"><dt>Weekly</dt><dd>${escapeHtml(c.weeklyLabel)} · ${escapeHtml(c.weeklyState)}</dd></div><div class="twin-metric"><dt>Monthly</dt><dd>${escapeHtml(c.monthlyLabel)} · ${escapeHtml(c.monthlyState)}</dd></div><div class="twin-metric"><dt>Registry cutoff</dt><dd>${escapeHtml(c.registryCutoff)}</dd></div></dl></article>`).join('');
}

function renderLoadStatus(newer = null) {
  if (!pinnedPrimaryHead || !pinnedTwinHead || !projectionReadAt) return;
  const node = el('load-status');
  node.classList.toggle('is-newer', Boolean(newer));
  const readAt = new Intl.DateTimeFormat(undefined, {dateStyle:'medium', timeStyle:'short'}).format(projectionReadAt);
  const primary = `<a href="${githubCommit(repo, pinnedPrimaryHead.sha)}">main@${escapeHtml(pinnedPrimaryHead.short)}</a>`;
  const twin = `<a href="${githubCommit(twinRepo, pinnedTwinHead.sha)}">twin@${escapeHtml(pinnedTwinHead.short)}</a>`;
  let html = `Pinned snapshot · ${primary} · ${twin} · read ${escapeHtml(readAt)}`;
  if (newer) {
    const advanced = [];
    if (newer.primary.sha !== pinnedPrimaryHead.sha) advanced.push(`${cfg.short} main@${newer.primary.short}`);
    if (newer.twin.sha !== pinnedTwinHead.sha) advanced.push(`${CONFIG[mode === 'global' ? 'china' : 'global'].short} main@${newer.twin.short}`);
    html += ` · newer merged state available: ${escapeHtml(advanced.join(' + '))} <button type="button" id="refresh-projection">Reload projection ↻</button>`;
  }
  node.innerHTML = html;
  el('refresh-projection')?.addEventListener('click', () => window.location.reload());
}

async function checkForNewerHeads() {
  const now = Date.now();
  if (headCheckInFlight || now - lastHeadCheckAt < HEAD_RECHECK_MIN_MS) return;
  headCheckInFlight = true;
  lastHeadCheckAt = now;
  try {
    const [primary, twin] = await Promise.all([fetchHead(repo), fetchHead(twinRepo)]);
    if (primary.sha !== pinnedPrimaryHead.sha || twin.sha !== pinnedTwinHead.sha) renderLoadStatus({primary, twin});
  } catch (error) {
    console.warn('HEAD recheck unavailable; keeping the pinned snapshot.', error);
  } finally {
    headCheckInFlight = false;
  }
}

function installHeadRecheck() {
  const maybeCheck = () => {
    if (document.visibilityState === 'visible') checkForNewerHeads();
  };
  document.addEventListener('visibilitychange', maybeCheck);
  window.addEventListener('focus', maybeCheck);
}

async function init() {
  renderEvidenceLegend();
  try {
    const twinMode = mode === 'global' ? 'china' : 'global';
    const [primaryRevision, twinRevision] = await Promise.all([fetchHead(repo), fetchHead(twinRepo)]);
    pinnedPrimaryHead = primaryRevision;
    pinnedTwinHead = twinRevision;
    lastHeadCheckAt = Date.now();
    const [ctx, twinCtx] = await Promise.all([buildContext(repo, primaryRevision), buildContext(twinRepo, twinRevision)]);
    projectionReadAt = new Date();

    renderStatus(ctx);
    el('latest-title').textContent = firstHeading(ctx.dailyMd);
    el('latest-judgment').innerHTML = sourceExcerpt(section(ctx.dailyMd, '## 0'), 2000);
    el('latest-daily-link').href = githubFile(repo, ctx.dailyPath, ctx.revision.sha);
    el('weekly-link').href = githubFile(repo, ctx.weeklyPath, ctx.revision.sha);
    el('watchlist-link').href = githubFile(repo, 'watchlist/ACTIVE.md', ctx.revision.sha);
    renderTimeline(ctx);
    renderHypotheses(parseHypotheses(ctx.weeklyMd));
    await renderWorkstreams(ctx.daily, ctx.revision);
    renderWatchlist(ctx.watchlistMd);
    const registry = registryModel(ctx.registryMd);
    renderRegistry(registry);
    el('source-search').addEventListener('input', event => renderRegistry(registry, event.target.value));
    renderTwin(ctx, twinCtx, twinMode);
    renderLoadStatus();
    installHeadRecheck();
  } catch (error) {
    console.error(error);
    el('load-status').textContent = 'Projection incomplete';
    el('status-grid').innerHTML = `<div class="status-cell"><div class="status-label">State</div><div class="status-value">UNAVAILABLE</div><div class="status-sub">A coherent pinned repository snapshot could not be read; no state is inferred.</div></div>`;
    el('latest-title').textContent = 'Current projection unavailable';
    el('latest-judgment').innerHTML = '<p class="error-note">The frontend could not resolve or read one coherent canonical repository snapshot. Use the repository links below; this UI does not substitute guessed state.</p>';
  }
}

init();

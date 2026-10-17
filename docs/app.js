'use strict';
const data = window.SURVEY_DATA;
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeUrl = (value) => /^https?:\/\//.test(value) ? escapeHtml(value) : '';

const menu = $('.menu-toggle');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  $('#navigation').classList.toggle('open', open);
});
$$('#navigation a').forEach(a => a.addEventListener('click', () => {
  $('#navigation').classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Open navigation');
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    $('#navigation').classList.remove('open');
    menu.setAttribute('aria-expanded','false');
    menu.setAttribute('aria-label','Open navigation');
  }
});

let scrollScheduled = false;
function updateScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  $('.reading-progress').style.width = (max > 0 ? window.scrollY / max * 100 : 0) + '%';
  let active = '';
  $$('main section[id]').forEach(section => { if (section.getBoundingClientRect().top < 160) active = section.id; });
  $$('#navigation a').forEach(a => {
    const selected = a.getAttribute('href') === '#' + active;
    a.classList.toggle('active', selected);
    if (selected) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current');
  });
  scrollScheduled = false;
}
window.addEventListener('scroll', () => { if (!scrollScheduled) { window.requestAnimationFrame(updateScroll); scrollScheduled = true; } }, {passive:true});
window.addEventListener('resize', updateScroll);
updateScroll();

const forms = {
  textual:{eyebrow:'EXPLICIT & INSPECTABLE',title:'Textual memory',description:'Selected experience is retained as natural language or structured text, making personal information available for direct inspection and revision.',categories:['Event records','Hierarchical summaries','Task-state records','User profiles','Procedural experience']},
  vector:{eyebrow:'SIMILARITY & COMPRESSION',title:'Vector memory',description:'Text, images, and trajectories become numerical representations. Vectors may index explicit records or serve as memory units consumed directly by the model.',categories:['Vector indexes','Compressed embeddings','Bounded memory slots']},
  kv:{eyebrow:'REUSING COMPUTED CONTEXT',title:'KV-cache memory',description:'Previously computed key and value states preserve reusable context. Their footprint and compatibility with model versions and input segments shape on-device reuse.',categories:['Cache compression','Cache reuse','Tiered storage']},
  graph:{eyebrow:'EXPLICIT RELATIONSHIPS',title:'Graph-structured memory',description:'Addressable nodes and edges preserve relationships among entities, events, states, or memory entries, supporting access beyond isolated records.',categories:['Personal knowledge graphs','Lightweight structured memory','Multi-entity graphs']},
  parametric:{eyebrow:'EXPERIENCE IN MODEL PARAMETERS',title:'Parametric memory',description:'Selected facts and patterns are incorporated into model parameters and influence later generation directly, reducing the need to repeatedly supply complete histories.',categories:['Personalized parametric memory','Task-specific parametric memory','Merging parameter units']}
};
function selectForm(button, focus = false) {
  const form = forms[button.dataset.form];
  $$('.form-tabs [role="tab"]').forEach(tab => { const selected = tab === button; tab.setAttribute('aria-selected',String(selected)); tab.tabIndex = selected ? 0 : -1; });
  $('#form-panel').setAttribute('aria-labelledby',button.id);
  $('#form-panel').innerHTML = `<div><span class="small-label">${form.eyebrow}</span><h3>${form.title}</h3><p>${form.description}</p></div><div><span class="small-label">CATEGORIES IN THE SURVEY</span><ul>${form.categories.map(category=>`<li>${category}</li>`).join('')}</ul></div>`;
  if (focus) button.focus();
  const tabBar = button.parentElement;
  if (button.offsetLeft < tabBar.scrollLeft) tabBar.scrollLeft = button.offsetLeft;
  else if (button.offsetLeft + button.offsetWidth > tabBar.scrollLeft + tabBar.clientWidth) tabBar.scrollLeft = button.offsetLeft + button.offsetWidth - tabBar.clientWidth;
}
$$('.form-tabs [role="tab"]').forEach((tab,index,tabs) => {
  tab.addEventListener('click',() => selectForm(tab));
  tab.addEventListener('keydown',event => {
    let next;
    if(event.key === 'ArrowRight') next = (index+1)%tabs.length;
    if(event.key === 'ArrowLeft') next = (index-1+tabs.length)%tabs.length;
    if(event.key === 'Home') next = 0;
    if(event.key === 'End') next = tabs.length-1;
    if(next !== undefined){event.preventDefault();selectForm(tabs[next],true);}
  });
});

const dialog = $('.image-dialog');
const figureImage = $('#expanded-figure');
const figureViewport = $('.dialog-image-wrap');
let figureZoom = 1;
function renderFigureZoom() {
  if (!dialog.open) return;
  const style = getComputedStyle(figureViewport);
  const fitWidth = Math.max(1, figureViewport.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight));
  figureImage.style.width = Math.round(fitWidth * figureZoom) + 'px';
  figureImage.style.height = 'auto';
  $('#figure-zoom-level').textContent = Math.round(figureZoom * 100) + '%';
  $('#figure-zoom-out').disabled = figureZoom <= 1;
  $('#figure-zoom-in').disabled = figureZoom >= 6;
}
function setFigureZoom(next) {
  const previous = figureZoom;
  const centerX = (figureViewport.scrollLeft + figureViewport.clientWidth / 2) / previous;
  const centerY = (figureViewport.scrollTop + figureViewport.clientHeight / 2) / previous;
  figureZoom = Math.min(6, Math.max(1, next));
  renderFigureZoom();
  figureViewport.scrollTo({left:figureZoom === 1 ? 0 : centerX * figureZoom - figureViewport.clientWidth / 2, top:figureZoom === 1 ? 0 : centerY * figureZoom - figureViewport.clientHeight / 2, behavior:'auto'});
}
$$('[data-figure]').forEach(button => button.addEventListener('click', () => {
  figureImage.src = button.dataset.figure;
  figureImage.alt = button.querySelector('img').alt;
  $('#figure-caption').textContent = button.dataset.caption;
  $('#figure-original').href = button.dataset.figure;
  figureZoom = 1;
  dialog.showModal();
  document.body.classList.add('dialog-open');
  renderFigureZoom();
  figureViewport.scrollTo({left:0,top:0,behavior:'auto'});
}));
$$('[data-open-figure]').forEach(button => button.addEventListener('click', () => button.closest('figure').querySelector('[data-figure]').click()));
$('#figure-zoom-in').addEventListener('click', () => setFigureZoom(figureZoom + .5));
$('#figure-zoom-out').addEventListener('click', () => setFigureZoom(figureZoom - .5));
$('#figure-fit').addEventListener('click', () => setFigureZoom(1));
figureImage.addEventListener('load', renderFigureZoom);
window.addEventListener('resize', renderFigureZoom);
if ('ResizeObserver' in window) new ResizeObserver(renderFigureZoom).observe(figureViewport);
dialog.addEventListener('keydown', event => {
  if (event.key === '+' || event.key === '=') {event.preventDefault();setFigureZoom(figureZoom + .5);}
  if (event.key === '-') {event.preventDefault();setFigureZoom(figureZoom - .5);}
  if (event.key === '0') {event.preventDefault();setFigureZoom(1);}
});
$('#close-figure').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
dialog.addEventListener('click', event => {if(event.target === dialog){const box=dialog.getBoundingClientRect();if(event.clientX<box.left || event.clientX>box.right || event.clientY<box.top || event.clientY>box.bottom) dialog.close();}});

let visibleBenchmarks = 6;

let benchFilter = 'All';
function renderBenchmarks() {
  const query = $('#benchmark-search').value.trim().toLowerCase();
  const results = data.benchmarks.filter(b => (benchFilter==='All'||b.group===benchFilter) && [b.name,b.scenario,b.focus].join(' ').toLowerCase().includes(query));
  $('#benchmark-count').textContent = `${results.length} of ${data.benchmarks.length} benchmark entries`;
  $('#reset-benchmarks').hidden = !query && benchFilter === 'All';
  $('#benchmark-body').innerHTML = results.length ? results.map(b => `<tr><td>${escapeHtml(b.name)}<span class="bench-group">${escapeHtml(b.group)}</span></td><td>${escapeHtml(b.scenario)}</td><td>${escapeHtml(b.focus)}</td><td>${b.url?`<a href="${safeUrl(b.url)}" target="_blank" rel="noopener" aria-label="${escapeHtml(b.name)} resource">Resource ↗</a>`:b.paperUrl?`<a class="paper-only" href="${safeUrl(b.paperUrl)}" target="_blank" rel="noopener" aria-label="${escapeHtml(b.name)} paper">Paper only ↗</a>`:'—'}</td></tr>`).join('') : '<tr><td colspan="4" class="empty-results">No benchmarks match. Try another name or clear your search.</td></tr>';
  const cards = results.slice(0, visibleBenchmarks);
  $('#benchmark-cards').innerHTML = cards.length ? cards.map(b => `<article class="bench-card"><div class="bench-card-heading"><h4>${escapeHtml(b.name)}</h4><span class="bench-card-group">${escapeHtml(b.group)}</span></div><dl><div><dt>SCENARIO</dt><dd>${escapeHtml(b.scenario)}</dd></div><div><dt>EVALUATION FOCUS</dt><dd>${escapeHtml(b.focus)}</dd></div></dl>${b.url ? `<a href="${safeUrl(b.url)}" target="_blank" rel="noopener" aria-label="${escapeHtml(b.name)} resource">View resource ↗</a>` : b.paperUrl ? `<a href="${safeUrl(b.paperUrl)}" target="_blank" rel="noopener" aria-label="${escapeHtml(b.name)} paper">Read paper ↗</a>` : ''}</article>`).join('') : '<p class="empty-results">No benchmarks match. Try another name or reset your filters.</p>';
  $('#benchmark-cards-note').textContent = `Showing ${cards.length} of ${results.length} entries`;
  $('#more-benchmarks').hidden = visibleBenchmarks >= results.length;

}
$$('[data-bench-filter]').forEach(button => button.addEventListener('click',() => {
  benchFilter = button.dataset.benchFilter;
  visibleBenchmarks = 6;
  $$('[data-bench-filter]').forEach(b=>{const selected = b===button;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));});
  renderBenchmarks();
}));
$('#benchmark-search').addEventListener('input', () => {visibleBenchmarks = 6;renderBenchmarks();});

let visiblePapers = 12;
function renderPapers() {
  const query = $('#paper-search').value.trim().toLowerCase();
  const topic = $('#paper-topic').value;
  const results = data.papers.filter(p => (topic==='All'||p.topics.includes(topic)) && [p.title,p.authors,p.year,p.venue].join(' ').toLowerCase().includes(query));
  const visible = results.slice(0,visiblePapers);
  $('#paper-count').textContent = `${results.length} cited ${results.length === 1 ? 'work' : 'works'} · showing ${visible.length}`;
  $('#reset-papers').hidden = !query && topic === 'All';
  $('#paper-list').innerHTML = visible.length ? visible.map(p => `<article class="paper-row"><span class="paper-year">${escapeHtml(p.year)}</span><div class="paper-content">${p.url?`<a class="paper-title" href="${safeUrl(p.url)}" target="_blank" rel="noopener">${escapeHtml(p.title)}</a>`:`<span class="paper-title">${escapeHtml(p.title)}</span>`}<p class="paper-meta">${escapeHtml(p.shortAuthor)} · ${escapeHtml(p.venue)}</p><div class="paper-topics">${p.topics.map(t=>`<span>${escapeHtml(t)}</span>`).join('')}</div></div>${p.url?'<span class="paper-arrow" aria-hidden="true">↗</span>':''}</article>`).join('') : '<p class="empty-results">No cited works match your search. Try a broader term or another topic.</p>';
  $('#load-more').hidden = visiblePapers >= results.length;
  updateScroll();
}
$('#paper-search').addEventListener('input',()=>{visiblePapers=12;renderPapers();});
$('#paper-topic').addEventListener('change',()=>{visiblePapers=12;renderPapers();});
$('#load-more').addEventListener('click',()=>{visiblePapers+=12;renderPapers();});

$('#bibtex').textContent = data.citation;
$('#copy-bib').addEventListener('click',async () => {
  try {
    await navigator.clipboard.writeText(data.citation);
    $('#copy-status').textContent = 'BibTeX copied to clipboard.';
    $('#copy-bib').textContent = 'Copied ✓';
  } catch {
    const range = document.createRange(); range.selectNodeContents($('#bibtex'));
    const selection = window.getSelection();selection.removeAllRanges();selection.addRange(range);
    $('#copy-status').textContent = 'BibTeX selected. Press Ctrl+C or ⌘C to copy, or download the .bib file.';
  }
});
renderBenchmarks();
renderPapers();

// Budget chips provide a compact explanation on pointer hover, keyboard focus, or tap.
const budgetDescriptions = {
  runtime: 'Peak runtime memory covers the agent as a whole: memory processing and model inference draw on the same available capacity.',
  storage: 'Persistent storage preserves memory across interactions. Its budget limits the total storage footprint of the chosen system configuration.',
  latency: 'Response time runs from receipt of a request to return of its result. Memory access and processing share this response budget with inference.',
  energy: 'Energy includes both interactive processing and background maintenance over the period of operation. Moving maintenance off the response path still consumes energy.'
};
function selectBudget(button) {
  const key = button.dataset.budget;
  if (!budgetDescriptions[key]) return;
  $$('[data-budget]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  $$('[data-budget-panel]').forEach(panel => panel.setAttribute('aria-hidden', String(panel.dataset.budgetPanel !== key)));
}
$$('[data-budget]').forEach(button => {
  button.addEventListener('click', () => selectBudget(button));
  button.addEventListener('focus', () => selectBudget(button));
  button.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse' && window.matchMedia('(hover: hover) and (pointer: fine)').matches) selectBudget(button);
  });
});


// Reset all active filters in place, keeping keyboard users in the search field.
$('#reset-benchmarks').addEventListener('click', () => {
  $('#benchmark-search').value = '';
  benchFilter = 'All';
  visibleBenchmarks = 6;
  $$('[data-bench-filter]').forEach(button => {
    const selected = button.dataset.benchFilter === 'All';
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  renderBenchmarks();
  $('#benchmark-search').focus({preventScroll:true});
});
$('#reset-papers').addEventListener('click', () => {
  $('#paper-search').value = '';
  $('#paper-topic').value = 'All';
  visiblePapers = 12;
  renderPapers();
  $('#paper-search').focus({preventScroll:true});
});

const benchmarkScroll = $('.table-scroll');
function updateTableHint() {
  $('#table-scroll-hint').hidden = benchmarkScroll.scrollWidth <= benchmarkScroll.clientWidth + 1;
}
if ('ResizeObserver' in window) {
  const tableResizeObserver = new ResizeObserver(updateTableHint);
  tableResizeObserver.observe(benchmarkScroll);
  tableResizeObserver.observe($('.benchmark-table'));
} else {
  window.addEventListener('resize', updateTableHint);
}
updateTableHint();


$('#more-benchmarks').addEventListener('click', () => {visibleBenchmarks += 6;renderBenchmarks();});
$$('[data-bench-view]').forEach(button => button.addEventListener('click', () => {
  $('#evaluation').dataset.benchmarkView = button.dataset.benchView;
  $$('[data-bench-view]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  updateTableHint();
}));
const benchmarkDialog = $('.benchmark-dialog');
$('#expand-benchmarks').addEventListener('click', () => {
  const table = $('.table-scroll .benchmark-table').cloneNode(true);
  table.querySelectorAll('[id]').forEach(element => element.removeAttribute('id'));
  $('.expanded-table-scroll').replaceChildren(table);
  $('#table-dialog-count').textContent = $('#benchmark-count').textContent;
  benchmarkDialog.showModal();
  document.body.classList.add('dialog-open');
});
$('#close-benchmark-table').addEventListener('click', () => benchmarkDialog.close());
benchmarkDialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));

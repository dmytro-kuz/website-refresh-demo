const site = document.getElementById('site');
const tabs = document.querySelectorAll('.toggle button');
const fixable = document.querySelectorAll('.link-fixable');

// Remember the working hrefs so the "before" mode can swap in the broken ones.
fixable.forEach((a) => { a.dataset.fixed = a.getAttribute('href'); });

function setMode(mode) {
  site.classList.toggle('after', mode === 'after');
  site.classList.toggle('before', mode === 'before');
  tabs.forEach((t) => t.setAttribute('aria-selected', String(t.dataset.mode === mode)));
  fixable.forEach((a) => a.setAttribute('href', mode === 'after' ? a.dataset.fixed : a.dataset.broken));
  history.replaceState(null, '', mode === 'before' ? '#before' : location.pathname);
}

tabs.forEach((t) => t.addEventListener('click', () => setMode(t.dataset.mode)));
setMode(location.hash === '#before' ? 'before' : 'after');

const notesBtn = document.getElementById('notes-btn');
const notes = document.getElementById('notes');
notesBtn.addEventListener('click', () => {
  const open = notes.hidden;
  notes.hidden = !open;
  notesBtn.setAttribute('aria-expanded', String(open));
});

const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

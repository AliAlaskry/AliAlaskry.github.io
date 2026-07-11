(function () {
  var C = window.SiteContent || {};
  var CFG = window.SiteConfig || {};

  var skillsTabButtons = [];
  var skillsPanels = [];
  var lastFocused = null;
  var lastActiveSection = null;

  function el(tag, opts) {
    opts = opts || {};
    var node = document.createElement(tag);
    if (opts.class) node.className = opts.class;
    if (opts.html !== undefined) node.innerHTML = opts.html;
    if (opts.text !== undefined) node.textContent = opts.text;
    return node;
  }

  var VIDEO_EXT = ['mp4', 'webm', 'mov', 'ogg', 'm4v'];
  function isVideoSrc(src) {
    if (!src) return false;
    var ext = src.split('.').pop().toLowerCase();
    return VIDEO_EXT.indexOf(ext) !== -1;
  }

  // ---- theme + motion (theme itself is applied earlier, by config.js) ----
  function applyMotionPrefs() {
    document.documentElement.classList.toggle('no-motion', CFG.animations === false);
    document.documentElement.setAttribute('data-reveal', CFG.revealStyle || 'fade-up');
  }

  // ---- section visibility + numbering ----
  function applyVisibility() {
    var cfg = CFG.sections || {};
    Object.keys(cfg).forEach(function (id) {
      var sec = document.getElementById(id);
      if (sec) sec.hidden = cfg[id] === false;
    });
  }

  function assignSectionNumbers() {
    var order = ['achievements', 'showcase', 'skills', 'experience', 'systems', 'contact'];
    var n = 0;
    order.forEach(function (id) {
      var sec = document.getElementById(id);
      if (!sec) return;
      if (sec.hidden) {
        sec.removeAttribute('data-index');
      } else {
        n += 1;
        sec.setAttribute('data-index', n < 10 ? '0' + n : String(n));
      }
    });
  }

  // ---- nav ----
  function renderNav() {
    var wrap = document.getElementById('nav-links');
    (CFG.nav || []).forEach(function (item) {
      if (CFG.sections && CFG.sections[item.id] === false) return;
      var a = el('a', { text: item.label });
      a.href = '#' + item.id;
      a.setAttribute('data-section', item.id);
      wrap.appendChild(a);
    });

    var resumeBtn = document.getElementById('nav-resume');
    if (resumeBtn) {
      var resumeUrl = (C.contact && C.contact.resume) || '';
      var showResume = CFG.showResumeButton !== false;
      resumeBtn.hidden = !(showResume && resumeUrl);
      if (resumeUrl) resumeBtn.href = resumeUrl;
    }
  }

  function setNavHeightVar() {
    var nav = document.getElementById('nav');
    if (nav) document.documentElement.style.setProperty('--nav-h', nav.offsetHeight + 'px');
  }

  // ---- hero ----
  function renderHero() {
    var h = C.hero;
    if (!h) return;
    document.getElementById('hero-title').textContent = h.title;
    var roleEl = document.getElementById('hero-role');
    if (roleEl) roleEl.textContent = h.role || '';
    document.getElementById('hero-pitch').textContent = h.pitch;
    var tagsEl = document.getElementById('hero-tags');
    (h.tags || []).forEach(function (t) { tagsEl.appendChild(el('span', { text: t })); });
    var heroResume = document.getElementById('hero-resume');
    if (heroResume && C.contact && C.contact.resume) heroResume.href = C.contact.resume;

    var introBtn = document.getElementById('hero-intro-btn');
    if (introBtn) {
      introBtn.textContent = h.introButtonLabel || 'Who is Ali';
      introBtn.addEventListener('click', function () { openVideoModal(h.introVideo); });
    }
  }

  // ---- introduction video modal ----
  function extractYouTubeId(url) {
    var m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?/]+)/);
    return m ? m[1] : url;
  }

  function openVideoModal(video) {
    var modal = document.getElementById('video-modal');
    var mediaWrap = document.getElementById('video-modal-media');
    mediaWrap.innerHTML = '';
    mediaWrap.style.aspectRatio = '16 / 9';
    mediaWrap.style.background = '#000';
    if (video && video.src) {
      if (video.type === 'youtube') {
        var iframe = document.createElement('iframe');
        var id = video.src.indexOf('http') === 0 ? extractYouTubeId(video.src) : video.src;
        iframe.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1&rel=0';
        iframe.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture');
        iframe.setAttribute('allowfullscreen', '');
        mediaWrap.appendChild(iframe);
      } else if (video.type === 'image') {
        var img = document.createElement('img');
        img.src = video.src;
        img.alt = video.alt || '';
        img.loading = 'lazy';
        img.className = 'video-modal__image';

        img.onload = function () {
            mediaWrap.style.aspectRatio =
                img.naturalWidth + ' / ' + img.naturalHeight;
            mediaWrap.style.background = 'transparent';
        };

        mediaWrap.appendChild(img);
      } else {
        var v = document.createElement('video');
        v.src = video.src;
        v.controls = true;
        v.autoplay = true;
        v.playsInline = true;
        mediaWrap.appendChild(v);
    }
    } else {
      mediaWrap.appendChild(el('p', { class: 'video-modal__placeholder', text: 'Video coming soon.' }));
    }
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    lastFocused = document.activeElement;
    document.getElementById('video-modal-close').focus();
  }

  function closeVideoModal() {
    var modal = document.getElementById('video-modal');
    modal.hidden = true;
    document.getElementById('video-modal-media').innerHTML = ''; // stops playback
    document.body.style.overflow = '';
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  function setupVideoModal() {
    document.getElementById('video-modal-close').addEventListener('click', closeVideoModal);
    document.getElementById('video-modal-backdrop').addEventListener('click', closeVideoModal);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        var modal = document.getElementById('video-modal');
        if (!modal.hidden) closeVideoModal();
      }
    });
  }

  // ---- drag-to-scroll (click and hold, desktop mouse only — touch already swipes natively) ----
  function setupDragScroll(container) {
    var isDown = false;
    var startX = 0;
    var startScroll = 0;
    var moved = false;

    container.addEventListener('mousedown', function (e) {
      isDown = true;
      moved = false;
      startX = e.pageX;
      startScroll = container.scrollLeft;
      container.classList.add('is-dragging');
    });

    window.addEventListener('mousemove', function (e) {
      if (!isDown) return;
      var dx = e.pageX - startX;
      if (Math.abs(dx) > 4) moved = true;
      container.scrollLeft = startScroll - dx;
    });

    window.addEventListener('mouseup', function () {
      if (!isDown) return;
      isDown = false;
      container.classList.remove('is-dragging');
      if (moved) {
        container.setAttribute('data-just-dragged', 'true');
        setTimeout(function () { container.removeAttribute('data-just-dragged'); }, 50);
      }
    });

    container.addEventListener('dragstart', function (e) { e.preventDefault(); });
  }

  // ---- achievements (horizontal drag-scroll cards, or a vertical list) ----
  function renderAchievements() {
    var data = C.achievements || {};
    var headingEl = document.getElementById('achievements-heading');
    if (headingEl && data.heading) headingEl.textContent = data.heading;
    var hintEl = document.querySelector('#achievements .section__hint');
    if (hintEl && data.hint) hintEl.textContent = data.hint;

    var list = document.getElementById('achievements-list');
    var layout = CFG.achievementsLayout || 'horizontal';
    list.classList.toggle('achievements__list--vertical', layout === 'vertical');

    (data.items || []).forEach(function (a) {
      var card = el('div', { class: 'achievement-card reveal' });
      card.appendChild(el('span', { class: 'achievement-card__value', text: a.value }));
      card.appendChild(el('span', { class: 'achievement-card__text', text: a.text }));
      card.appendChild(el('span', { class: 'achievement-card__context', text: a.context || '' }));
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', 'How I did it: ' + a.text);
      card.addEventListener('click', function () {
        if (list.getAttribute('data-just-dragged') === 'true') return;
        openLightbox({ eyebrow: a.context, title: a.value, description: a.description || a.text, steps: a.steps });
      });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
      });
      list.appendChild(card);
    });

    if (layout !== 'vertical') setupDragScroll(list);
  }

  // ---- showcase ----
  function renderShowcase() {
    var data = C.showcase || {};
    var headingEl = document.getElementById('showcase-heading');
    if (headingEl && data.heading) headingEl.textContent = data.heading;
    var hintEl = document.querySelector('#showcase .section__hint');
    if (hintEl && data.hint) hintEl.textContent = data.hint;

    var grid = document.getElementById('showcase-grid');
    var layout = CFG.showcaseLayout || 'grid';
    grid.classList.toggle('showcase__grid--list', layout === 'list');

    (data.items || []).forEach(function (p) {
      var card = el('div', { class: 'showcase-card reveal' });

      var media;
      if (p.thumbnail && !isVideoSrc(p.thumbnail)) {
        media = el('div', { class: 'showcase-card__media showcase-card__media--img' });
        var img = document.createElement('img');
        img.src = p.thumbnail;
        img.alt = p.title;
        media.appendChild(img);
      } else {
        var mediaText = p.status === 'building' ? 'Preview coming soon' : 'Media pending';
        media = el('div', { class: 'showcase-card__media', text: mediaText });
      }
      media.appendChild(el('span', { class: 'showcase-card__view', text: 'View project →' }));

      var body = el('div', { class: 'showcase-card__body' });
      var statusLabel = p.status === 'building' ? 'In progress' : 'Case study';
      body.appendChild(el('span', { class: 'showcase-card__status showcase-card__status--' + p.status, text: statusLabel }));
      body.appendChild(el('h3', { class: 'showcase-card__title', text: p.title }));
      body.appendChild(el('p', { class: 'showcase-card__stack', text: p.stack }));
      body.appendChild(el('p', { class: 'showcase-card__note', text: p.note }));

      var primaryLink = null;
      (p.links || []).some(function (l) { if (l.url) { primaryLink = l; return true; } return false; });
      if (primaryLink) {
        var a = el('a', { class: 'showcase-card__link', text: primaryLink.label + ' ↗' });
        a.href = primaryLink.url;
        a.target = '_blank';
        a.rel = 'noopener';
        a.addEventListener('click', function (e) { e.stopPropagation(); });
        body.appendChild(a);
      }

      card.appendChild(media);
      card.appendChild(body);
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', 'View ' + p.title);
      card.addEventListener('click', function () {
        openLightbox({
          eyebrow: p.stack,
          title: p.title,
          description: p.description || p.note,
          showContribution: true,
          contribution: p.contribution,
          mediaGroups: p.mediaGroups,
          links: p.links
        });
      });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
      });

      grid.appendChild(card);
    });
  }

  // ---- lightbox (shared by showcase + achievements) ----
  function openLightbox(opts) {
    var lb = document.getElementById('lightbox');
    document.getElementById('lightbox-eyebrow').textContent = opts.eyebrow || '';
    document.getElementById('lightbox-title').textContent = opts.title || '';
    document.getElementById('lightbox-description').textContent = opts.description || '';

    var contribWrap = document.getElementById('lightbox-contribution');
    var contribList = document.getElementById('lightbox-contribution-list');
    contribList.innerHTML = '';
    if (opts.showContribution) {
      var points = (opts.contribution && opts.contribution.length)
        ? opts.contribution
        : ['Designed, built, and shipped this project entirely on my own.'];
      points.forEach(function (pt) { contribList.appendChild(el('li', { text: pt })); });
      contribWrap.hidden = false;
    } else {
      contribWrap.hidden = true;
    }

    var stepsEl = document.getElementById('lightbox-steps');
    stepsEl.innerHTML = '';
    if (opts.steps && opts.steps.length) {
      opts.steps.forEach(function (s) { stepsEl.appendChild(el('li', { text: s })); });
      stepsEl.hidden = false;
    } else {
      stepsEl.hidden = true;
    }

    var groupsWrap = document.getElementById('lightbox-groups');
    groupsWrap.innerHTML = '';
    if (opts.mediaGroups) {
      var groups = opts.mediaGroups.filter(function (g) { return g.items && g.items.length; });
      if (!groups.length) {
        groupsWrap.appendChild(el('p', { class: 'lightbox__empty-groups', text: 'Media coming soon.' }));
      } else {
        groups.forEach(function (g) {
          var gWrap = el('div', { class: 'lightbox__group' });
          gWrap.appendChild(el('div', { class: 'lightbox__group-title', text: g.title }));
          var gGrid = el('div', { class: 'lightbox__group-grid' });
          (g.items || []).forEach(function (m) {
            var type = m.type || (isVideoSrc(m.src) ? 'video' : 'image');
            var node;
            if (type === 'video') {
              node = document.createElement('video');
              node.src = m.src; node.controls = true; node.playsInline = true;
            } else {
              node = document.createElement('img');
              node.src = m.src; node.alt = g.title;
            }
            gGrid.appendChild(node);
          });
          gWrap.appendChild(gGrid);
          groupsWrap.appendChild(gWrap);
        });
      }
      groupsWrap.hidden = false;
    } else {
      groupsWrap.hidden = true;
    }

    var linksWrap = document.getElementById('lightbox-links');
    linksWrap.innerHTML = '';
    var hasLinks = false;
    (opts.links || []).forEach(function (l) {
      if (!l.url) return;
      hasLinks = true;
      var a = el('a', { class: 'btn btn--ghost', text: l.label + ' ↗' });
      a.href = l.url; a.target = '_blank'; a.rel = 'noopener';
      linksWrap.appendChild(a);
    });
    linksWrap.hidden = !hasLinks;

    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    lastFocused = document.activeElement;
    document.getElementById('lightbox-close').focus();
  }

  function closeLightbox() {
    var lb = document.getElementById('lightbox');
    lb.hidden = true;
    document.body.style.overflow = '';
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  function setupLightbox() {
    document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
    document.getElementById('lightbox-backdrop').addEventListener('click', closeLightbox);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        var lb = document.getElementById('lightbox');
        if (!lb.hidden) closeLightbox();
      }
    });
  }

  // ---- skills (horizontal pill tabs + single bulleted card + search) ----
  function activateTab(index) {
    skillsTabButtons.forEach(function (b, i) { b.classList.toggle('is-active', i === index); });
    skillsPanels.forEach(function (p, i) { p.classList.toggle('is-active', i === index); });
    var searchInput = document.getElementById('skills-search');
    if (searchInput) searchInput.value = '';
    document.getElementById('skills-panels').hidden = false;
    document.getElementById('skills-results').hidden = true;
  }

  function renderSkills() {
    var data = C.skills || {};
    var headingEl = document.getElementById('skills-heading');
    if (headingEl && data.heading) headingEl.textContent = data.heading;
    var hintEl = document.querySelector('#skills .section__hint');
    if (hintEl && data.hint) hintEl.textContent = data.hint;

    var tabsWrap = document.getElementById('skills-tabs');
    var panelsWrap = document.getElementById('skills-panels');

    (data.groups || []).forEach(function (group, i) {
      var tab = el('button', { class: 'skills__tab', text: group.category });
      tab.type = 'button';
      tab.setAttribute('role', 'tab');
      tabsWrap.appendChild(tab);
      skillsTabButtons.push(tab);

      var panel = el('div', { class: 'skills__panel' });
      var card = el('div', { class: 'skill-group-card' });
      var ul = el('ul');
      (group.items || []).forEach(function (item) { ul.appendChild(el('li', { text: item })); });
      card.appendChild(ul);
      panel.appendChild(card);
      panelsWrap.appendChild(panel);
      skillsPanels.push(panel);

      tab.addEventListener('click', function () { activateTab(i); });
    });

    if (skillsTabButtons.length) activateTab(0);

    setupSkillsSearch(data.groups || []);
  }

  function setupSkillsSearch(groups) {
    var input = document.getElementById('skills-search');
    var resultsWrap = document.getElementById('skills-results');
    var panelsWrap = document.getElementById('skills-panels');
    if (!input) return;
    input.addEventListener('input', function () {
      var q = input.value.trim().toLowerCase();
      if (!q) {
        resultsWrap.hidden = true;
        panelsWrap.hidden = false;
        return;
      }
      panelsWrap.hidden = true;
      resultsWrap.hidden = false;
      resultsWrap.innerHTML = '';

      var matches = [];
      groups.forEach(function (g) {
        (g.items || []).forEach(function (item) {
          if (item.toLowerCase().indexOf(q) !== -1) matches.push({ item: item, category: g.category });
        });
      });

      var card = el('div', { class: 'skill-results-card' });
      var ul = el('ul');
      if (!matches.length) {
        ul.appendChild(el('li', { text: 'No matching skills.' }));
      } else {
        matches.forEach(function (m) {
          var li = el('li');
          li.appendChild(el('span', { text: m.item }));
          li.appendChild(el('span', { class: 'group-tag', text: m.category }));
          ul.appendChild(li);
        });
      }
      card.appendChild(ul);
      resultsWrap.appendChild(card);
    });
  }

  // ---- experience (console, single-open accordion) ----
  function renderExperience() {
    var data = C.experience || {};
    var headingEl = document.getElementById('experience-heading');
    if (headingEl && data.heading) headingEl.textContent = data.heading;
    var hintEl = document.querySelector('#experience .section__hint');
    if (hintEl && data.hint) hintEl.textContent = data.hint;

    var wrap = document.getElementById('console-log');
    (data.items || []).forEach(function (job) {
      var entry = el('details', { class: 'console__entry reveal' });
      entry.setAttribute('data-id', job.id || '');
      var summary = el('summary');
      summary.appendChild(el('span', { class: 'console__chevron', html: '&#9656;' }));
      summary.appendChild(el('span', { class: 'console__dot' + (job.current ? ' console__dot--current' : '') }));
      var line = el('span', { class: 'console__line' });
      line.appendChild(el('span', { class: 'console__title', text: job.title + ' ' }));
      line.appendChild(el('span', { class: 'console__company', text: '— ' + job.company }));
      line.appendChild(el('span', { class: 'console__summary', text: job.summary }));
      summary.appendChild(line);
      summary.appendChild(el('span', { class: 'console__dates', text: job.dates }));
      entry.appendChild(summary);
      var details = el('div', { class: 'console__details' });
      var ul = el('ul');
      (job.details || []).forEach(function (d) { ul.appendChild(el('li', { text: d })); });
      details.appendChild(ul);
      entry.appendChild(details);
      wrap.appendChild(entry);
    });
  }

  function openExperienceEntry(id) {
    var entry = document.querySelector('.console__entry[data-id="' + id + '"]');
    if (!entry) return;
    entry.open = true;
    entry.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // ---- systems / playbook (single-open accordion) ----
  function renderSystems() {
    var data = C.systems || {};
    var headingEl = document.getElementById('systems-heading');
    if (headingEl && data.heading) headingEl.textContent = data.heading;
    var hintEl = document.querySelector('#systems .section__hint');
    if (hintEl && data.hint) hintEl.textContent = data.hint;

    var wrap = document.getElementById('systems-list');
    (data.items || []).forEach(function (item) {
      var entry = el('details', { class: 'systems-item reveal' });
      entry.setAttribute('data-id', item.id || '');
      var summary = el('summary');
      summary.appendChild(el('span', { class: 'systems-item__chevron', html: '&#9656;' }));
      summary.appendChild(el('span', { text: item.title }));
      entry.appendChild(summary);
      var ol = el('ol', { class: 'systems-item__steps' });
      (item.steps || []).forEach(function (s) { ol.appendChild(el('li', { text: s })); });
      entry.appendChild(ol);
      wrap.appendChild(entry);
    });
  }

  function openSystemsEntry(id) {
    var entry = document.querySelector('.systems-item[data-id="' + id + '"]');
    if (!entry) return;
    entry.open = true;
    entry.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // Only one entry open at a time within a given accordion group
  function setupAccordionGroup(containerSelector, itemSelector) {
    var container = document.querySelector(containerSelector);
    if (!container) return;
    var items = Array.prototype.slice.call(container.querySelectorAll(itemSelector));
    items.forEach(function (item) {
      item.addEventListener('toggle', function () {
        if (item.open) {
          items.forEach(function (other) { if (other !== item) other.open = false; });
        }
      });
    });
  }

  // ---- contact ----
  function renderContact() {
    var data = C.contact || {};
    var headingEl = document.getElementById('contact-heading');
    if (headingEl && data.heading) headingEl.textContent = data.heading;
    var grid = document.getElementById('contact-grid');
    (data.items || []).forEach(function (l) {
      if (!l.url) return;
      var a = el('a', { class: 'contact-link', text: l.label });
      a.href = l.url;
      grid.appendChild(a);
    });
  }

  // ---- sidebar + subnav (sub-navigation for the active section) ----
  function getSubItems(sectionId) {
    if (sectionId === 'achievements') {
      return ((C.achievements && C.achievements.items) || []).map(function (a) {
        return { label: a.value, action: function () {
          openLightbox({ eyebrow: a.context, title: a.value, description: a.description || a.text, steps: a.steps });
        } };
      });
    }
    if (sectionId === 'showcase') {
      return ((C.showcase && C.showcase.items) || []).map(function (p) {
        return { label: p.title, action: function () {
          openLightbox({
            eyebrow: p.stack, title: p.title, description: p.description || p.note,
            showContribution: true, contribution: p.contribution, mediaGroups: p.mediaGroups, links: p.links
          });
        } };
      });
    }
    if (sectionId === 'skills') {
      return ((C.skills && C.skills.groups) || []).map(function (g, i) {
        return { label: g.category, action: function () {
          document.getElementById('skills').scrollIntoView({ behavior: 'smooth', block: 'start' });
          activateTab(i);
        } };
      });
    }
    if (sectionId === 'experience') {
      return ((C.experience && C.experience.items) || []).map(function (job) {
        return { label: job.company, action: function () { openExperienceEntry(job.id); } };
      });
    }
    if (sectionId === 'systems') {
      return ((C.systems && C.systems.items) || []).map(function (item) {
        return { label: item.title, action: function () { openSystemsEntry(item.id); } };
      });
    }
    return [];
  }

  function buildSubItemButtons(container, className, subs) {
    container.innerHTML = '';
    subs.forEach(function (s) {
      var btn = el('button', { class: className, text: s.label });
      btn.type = 'button';
      btn.addEventListener('click', s.action);
      container.appendChild(btn);
    });
  }

  function updateSidebar(id) {
    var subs = getSubItems(id);
    var hasSubs = subs.length > 0;

    var navItem = null;
    (CFG.nav || []).some(function (n) { if (n.id === id) { navItem = n; return true; } return false; });
    var label = navItem ? navItem.label : '';

    document.getElementById('sidebar-label').textContent = label;
    buildSubItemButtons(document.getElementById('sidebar-list'), 'sidebar__item', subs);
    document.getElementById('sidebar').hidden = !hasSubs;

    document.getElementById('subnav-label').textContent = label;
    buildSubItemButtons(document.getElementById('subnav-list'), 'subnav__item', subs);
    document.getElementById('subnav').hidden = !hasSubs;
  }

  // A different, gentle blend strength per section so a single seed color still
  // produces the "each section feels a little different" effect as you scroll.
  var SEED_MIX = {
    hero: 5, achievements: 9, showcase: 7, skills: 11, experience: 4, systems: 10, contact: 14
  };

  function updateBackground(id) {
    var layer = document.getElementById('bg-layer');
    if (!layer) return;
    var override = CFG.backgrounds && CFG.backgrounds[id];
    if (override) {
      layer.style.backgroundColor = override;
      return;
    }
    if (CFG.backgroundSeed) {
      var pct = SEED_MIX[id] || 8;
      layer.style.backgroundColor = 'color-mix(in srgb, ' + CFG.backgroundSeed + ' ' + pct + '%, var(--bg))';
      return;
    }
    var themed = getComputedStyle(document.documentElement).getPropertyValue('--sec-' + id).trim();
    if (themed) layer.style.backgroundColor = themed;
  }

  // ---- scroll spy: nav highlight + sidebar/subnav + background ----
  function setupScrollBehavior() {
    var items = (CFG.nav || []).map(function (n) {
      var sec = document.getElementById(n.id);
      var link = document.querySelector('.nav__links a[data-section="' + n.id + '"]');
      return (sec && !sec.hidden) ? { id: n.id, el: sec, link: link } : null;
    }).filter(Boolean);

    function update() {
      var scrollPos = window.scrollY + 160;
      var activeId = items.length ? items[0].id : null;
      items.forEach(function (it) { if (it.el.offsetTop <= scrollPos) activeId = it.id; });

      if (activeId !== lastActiveSection) {
        items.forEach(function (it) {
          if (it.link) it.link.classList.toggle('is-active', it.id === activeId);
          it.el.classList.toggle('is-active-section', it.id === activeId);
        });
        updateSidebar(activeId);
        updateBackground(activeId);
        lastActiveSection = activeId;
      }
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  function setupReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach(function (i) { i.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    items.forEach(function (i) { io.observe(i); });
  }

  applyMotionPrefs();
  applyVisibility();
  assignSectionNumbers();
  renderNav();
  setNavHeightVar();
  renderHero();
  renderAchievements();
  renderShowcase();
  renderSkills();
  renderExperience();
  renderSystems();
  renderContact();
  setupLightbox();
  setupVideoModal();
  setupReveal();
  setupScrollBehavior();
  setupAccordionGroup('#console-log', '.console__entry');
  setupAccordionGroup('#systems-list', '.systems-item');
  window.addEventListener('resize', setNavHeightVar);
})();

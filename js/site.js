/**
 * THE MUSIC FACTORY — Portable site bundle (classic script, no modules)
 *
 * Why this file exists:
 * The original code used ES modules (`type="module"` + `import ... from ...`).
 * Browsers BLOCK ES module imports over `file://` (CORS), so double-clicking
 * index.html left the site half-dead: empty Programs section, broken mobile
 * menu, gallery, counters, FAQ and contact form.
 *
 * This is a byte-for-byte behaviour copy of js/*.js bundled into ONE classic
 * <script> with no imports/exports/fetch, so the site runs instantly when:
 *   - double-clicked from any folder / USB stick (file://)
 *   - opened on any device (Windows, macOS, Linux, Android, iOS)
 *   - offline (except the optional Google Fonts, which degrade gracefully)
 *   - served over http(s) (normal hosting still works)
 *
 * No build step, no npm, no Python, nothing to install.
 * Original modules are kept in js/ for developers; this file is what the
 * HTML pages actually load.
 */
(function () {
  'use strict';

  /* ---------------- Shared utilities (from js/utils.js) ---------------- */
  function throttle(fn, delay) {
    delay = delay === undefined ? 100 : delay;
    var last = 0;
    return function () {
      var args = arguments;
      var now = Date.now();
      if (now - last >= delay) { last = now; fn.apply(null, args); }
    };
  }

  function focusTrap(container) {
    var focusable = 'a[href],button:not([disabled]),input,textarea,select,[tabindex]:not([tabindex="-1"])';
    var els = Array.prototype.slice.call(container.querySelectorAll(focusable));
    if (!els.length) return;
    var first = els[0], last = els[els.length - 1];
    container.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus(); } }
      else { if (document.activeElement === last) { e.preventDefault(); first.focus(); } }
    });
  }

  /* ---------------- Course data (from js/course-data.js) ---------------- */
  var COURSES = [
    {
      id: 'foundation',
      level: 'Program 01 \u00B7 Beginners',
      title: 'Foundation',
      icon: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
      tagline: 'Built for absolute beginners \u2014 rhythm, melody, listening and the first steps of your musical journey.',
      description: 'The Foundation program is designed for absolute beginners who are starting their musical journey for the first time. It builds strong fundamentals in rhythm, melody, listening, practice habits, and basic performance skills. The course is suitable for children, teenagers, and adults with little or no prior musical training.',
      objectives: [
        'Develop a steady sense of beat and rhythm.',
        'Understand the basic language of music.',
        'Learn simple scales, chords, and melodies.',
        'Build daily practice habits.',
        'Gain confidence through beginner-level songs and activities.'
      ],
      chapters: [
        { name: 'Chapter 1 \u00B7 Music Begins Here', points: ['What is music?', 'Beat, rhythm, melody, and harmony', 'Listening activities', 'Instrument introduction', 'Posture and practice habits'] },
        { name: 'Chapter 2 \u00B7 Finding the Pulse', points: ['Tempo and metronome', 'Clapping patterns', 'Body rhythm activities', 'Breath and finger coordination', 'Counting aloud'] },
        { name: 'Chapter 3 \u00B7 My First Melody', points: ['Musical alphabet', 'Major scale', 'Simple notation', 'Melody singing and playing', 'Phrasing and dynamics'] },
        { name: 'Chapter 4 \u00B7 Songs Start Here', points: ['Major and minor chords', 'Chord changes', 'Basic accompaniment', 'Simple progressions', 'First complete songs'] },
        { name: 'Chapter 5 \u00B7 Ear Training Fun', points: ['High and low sounds', 'Loud and soft sounds', 'Same and different sounds', 'Echo singing and rhythm imitation', 'Listening games'] }
      ]
    },
    {
      id: 'intermediate',
      level: 'Program 02 \u00B7 Developing Musicians',
      title: 'Intermediate',
      icon: '<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.2 19.1 19.1"/>',
      tagline: 'For students with basic skills \u2014 musicianship, expression, rhythm control, ensemble awareness and stage confidence.',
      description: 'The Intermediate program is for students who have completed Foundation or already possess basic musical skills. The course develops musicianship, expression, rhythm control, ensemble awareness, and stage confidence.',
      objectives: [
        'Improve musical expression and phrasing.',
        'Strengthen rhythm and accompaniment skills.',
        'Learn to perform with other musicians.',
        'Develop listening awareness while playing or singing.',
        'Build confidence for public performance.'
      ],
      chapters: [
        { name: 'Chapter 1 \u00B7 Rhythm in Real Music', points: ['Groove and pulse', 'Strumming patterns', 'Accompaniment rhythms', 'Tempo control', 'Rhythm exercises'] },
        { name: 'Chapter 2 \u00B7 Singing Through the Instrument', points: ['Phrasing', 'Tone production', 'Articulation', 'Dynamics', 'Emotional delivery'] },
        { name: 'Chapter 3 \u00B7 Playing Together', points: ['Ensemble listening', 'Balance and blending', 'Cueing and eye contact', 'Starting and ending together', 'Group performance exercises'] },
        { name: 'Chapter 4 \u00B7 Confidence on Stage', points: ['Stage posture', 'Microphone basics', 'Audience interaction', 'Handling mistakes', 'Performance psychology'] },
        { name: 'Chapter 5 \u00B7 The Circle of Fifths Made Easy', points: ['The musical clock', 'Friendly chord families', 'Key relationships', 'Common song progressions', 'Chord family activities'] },
        { name: 'Chapter 6 \u00B7 Ear Training Adventure', points: ['Melody direction', 'Rhythm imitation', 'Chord mood recognition', 'Phrase echo exercises', 'Listening memory games'] }
      ]
    },
    {
      id: 'performance',
      level: 'Program 03 \u00B7 Advanced',
      title: 'Performance Lab',
      icon: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>',
      tagline: 'An advanced practical course focused on live performance \u2014 preparing, rehearsing, presenting and owning the stage.',
      description: 'The Performance Lab is an advanced practical course focused on live performance. Students learn how to prepare, rehearse, present, and perform confidently on stage.',
      objectives: [
        'Prepare complete performances independently.',
        'Develop professional stage habits.',
        'Improve audience communication.',
        'Experience rehearsal and showcase preparation.',
        'Build confidence through public performance.'
      ],
      chapters: [
        { name: 'Chapter 1 \u00B7 Building a Performance', points: ['Song selection', 'Practice planning', 'Memorization techniques', 'Performance structure', 'Rehearsal scheduling'] },
        { name: 'Chapter 2 \u00B7 The Stage Experience', points: ['Stage entry and exit', 'Body language', 'Microphone handling', 'Audience connection', 'Performance etiquette'] },
        { name: 'Chapter 3 \u00B7 Studio and Creativity', points: ['Basic recording awareness', 'Performing with backing tracks', 'Simple improvisation', 'Creative musical exercises', 'Musical storytelling'] },
        { name: 'Chapter 4 \u00B7 Graduation Showcase', points: ['Dress rehearsal', 'Final performance preparation', 'Stage coordination', 'Reflection and self-evaluation', 'Showcase presentation'] }
      ]
    },
    {
      id: 'songwriting',
      level: 'Program 04 \u00B7 Aspiring Creators',
      title: 'Songwriting & Music Production',
      icon: '<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/>',
      tagline: 'Create original music \u2014 songwriting, melody, lyric writing, home recording and beginner-level production.',
      description: 'This course is designed for students who wish to create original music. It introduces songwriting, melody writing, lyric writing, home recording, and beginner-level music production using a computer-based setup.',
      objectives: [
        'Write original songs.',
        'Understand song structure.',
        'Create melodies and chord progressions.',
        'Record basic demos.',
        'Learn the foundations of digital music production.'
      ],
      chapters: [
        { name: 'Chapter 1 \u00B7 What Makes a Song?', points: ['Verse, chorus, bridge, intro, and outro', 'Song structure analysis', 'Listening and songwriting observation'] },
        { name: 'Chapter 2 \u00B7 Melody Writing', points: ['Creating singable melodies', 'Repetition and variation', 'Melodic phrasing', 'Hook writing'] },
        { name: 'Chapter 3 \u00B7 Lyric Writing', points: ['Themes and emotions', 'Storytelling in songs', 'Rhyme and rhythm', 'Writing exercises'] },
        { name: 'Chapter 4 \u00B7 Chords for Songwriters', points: ['Popular chord progressions', 'Emotional effect of chords', 'Writing with four chords', 'Chord movement practice'] },
        { name: 'Chapter 5 \u00B7 Introduction to Music Production', points: ['Home studio basics', 'Audio interface and microphone awareness', 'Recording simple vocals and instruments', 'Session organization'] },
        { name: 'Chapter 6 \u00B7 FL Studio Basics', points: ['Interface overview', 'Playlist and channel rack', 'Piano roll basics', 'Drum programming', 'Simple arrangement'] },
        { name: 'Chapter 7 \u00B7 MIDI & Virtual Instruments', points: ['MIDI keyboard basics', 'Playing virtual instruments', 'Editing MIDI notes', 'Layering sounds'] },
        { name: 'Chapter 8 \u00B7 Build Your First Demo', points: ['Recording a song idea', 'Adding drums, chords, and melody', 'Basic mixing awareness', 'Exporting a demo track'] }
      ]
    },
    {
      id: 'musicsoul',
      level: 'Program 05 \u00B7 Adults & Professionals',
      title: 'Music for Soul',
      icon: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
      tagline: 'A relaxed, non-competitive program for working adults \u2014 music as joy, relaxation and personal wellbeing.',
      description: 'Music for Soul is a relaxed and non-competitive program created for working professionals, homemakers, entrepreneurs, and adults who want music as a source of joy, relaxation, and personal wellbeing.',
      objectives: [
        'Enjoy music without academic pressure.',
        'Reduce stress through singing and playing.',
        'Learn favorite songs in a simple way.',
        'Build confidence for informal singing and playing.',
        'Experience music as a daily wellness practice.'
      ],
      chapters: [
        { name: 'Chapter 1 \u00B7 Music for Relaxation', points: ['Breathing and sound', 'Gentle vocal exercises', 'Relaxed listening', 'Mindful music practice'] },
        { name: 'Chapter 2 \u00B7 Sing Your Favorite Songs', points: ['Easy melody singing', 'Comfort range singing', 'Expression without perfection', 'Personal song selection'] },
        { name: 'Chapter 3 \u00B7 Easy Guitar / Keyboard Accompaniment', points: ['Simple chords', 'Basic rhythm patterns', 'Singing while accompanying', 'Home practice routines'] },
        { name: 'Chapter 4 \u00B7 Music and Emotions', points: ['Music for calmness', 'Music for energy', 'Music for reflection', 'Personal music journal'] },
        { name: 'Chapter 5 \u00B7 Weekend Music Circle', points: ['Group singing', 'Informal performance', 'Listening and sharing', 'Community music activities'] },
        { name: 'Chapter 6 \u00B7 Music as a Lifelong Companion', points: ['Creating a personal music routine', 'Continuing practice independently', 'Music for family and friends', 'Joyful lifelong learning'] }
      ]
    }
  ];

  /* ---------------- Theme (from js/theme.js) ---------------- */
  var THEME_KEY = 'theme';
  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  }
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var toggles = document.querySelectorAll('.theme-toggle');
    for (var i = 0; i < toggles.length; i++) {
      toggles[i].setAttribute('aria-checked', String(theme === 'dark'));
    }
    var metas = document.querySelectorAll('meta[name="theme-color"]');
    for (var j = 0; j < metas.length; j++) {
      metas[j].setAttribute('content', theme === 'dark' ? '#0B0B0B' : '#f5f5f5');
    }
  }
  function initTheme() {
    var toggles = document.querySelectorAll('.theme-toggle');
    if (!toggles.length) return;
    applyTheme(currentTheme());
    for (var i = 0; i < toggles.length; i++) {
      toggles[i].addEventListener('click', function () {
        var next = currentTheme() === 'dark' ? 'light' : 'dark';
        try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* private mode / file:// restrictions */ }
        applyTheme(next);
      });
    }
  }

  /* ---------------- Navbar (from js/navbar.js) ---------------- */
  function initNavbar() {
    var navbar = document.getElementById('site-header');
    var hamburger = document.querySelector('.navbar__hamburger');
    var drawer = document.querySelector('.nav__drawer');
    var overlay = document.querySelector('.nav__overlay');
    if (!navbar) return;

    var onScroll = throttle(function () {
      var bar = navbar.querySelector('.navbar');
      if (bar) bar.classList.toggle('scrolled', window.scrollY > 80);
    }, 100);
    window.addEventListener('scroll', onScroll, { passive: true });

    var links = document.querySelectorAll('.navbar__link, .nav__drawer-link');
    for (var i = 0; i < links.length; i++) {
      (function (link) {
        var href = link.getAttribute('href');
        if (!href) return;
        // Works on both file:// and http(s): match by file name, not just pathname.
        var page = window.location.pathname.split('/').pop() || 'index.html';
        if (document.querySelector('a[href="' + href + '"][aria-current="page"]')) return;
        if (href === window.location.pathname || href === page ||
            href === page.replace('.html', '') ||
            (page === '' && href === 'index.html')) {
          link.classList.add('active');
        }
      })(links[i]);
    }

    if (!hamburger || !drawer || !overlay) return;

    function openMenu() {
      drawer.classList.add('is-open');
      overlay.style.display = 'block';
      requestAnimationFrame(function () { overlay.classList.add('is-open'); });
      document.body.classList.add('menu-open');
      hamburger.setAttribute('aria-expanded', 'true');
      focusTrap(drawer);
      var first = drawer.querySelector('a');
      if (first) first.focus();
    }
    function closeMenu() {
      drawer.classList.remove('is-open');
      overlay.classList.remove('is-open');
      document.body.classList.remove('menu-open');
      hamburger.setAttribute('aria-expanded', 'false');
      setTimeout(function () { overlay.style.display = ''; }, 300);
    }
    hamburger.addEventListener('click', function () {
      if (hamburger.getAttribute('aria-expanded') === 'true') closeMenu(); else openMenu();
    });
    overlay.addEventListener('click', closeMenu);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
  }

  /* ---------------- Courses (from js/courses.js) ---------------- */
  function chapterCardHTML(chapters) {
    return chapters.map(function (ch) {
      return (
        '<li class="course-card__chapter">' +
          '<strong class="course-card__chapter-title">' + ch.name + '</strong>' +
          '<ul class="course-card__chapter-points">' +
            ch.points.map(function (p) { return '<li>' + p + '</li>'; }).join('') +
          '</ul>' +
        '</li>'
      );
    }).join('');
  }
  function cardMarkup(course) {
    return (
      '<article class="course-card fade-up" id="' + course.id + '">' +
        '<button class="course-card__header" aria-expanded="false" aria-controls="' + course.id + '-body">' +
          '<span class="course-card__icon" aria-hidden="true">' +
            '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + course.icon + '</svg>' +
          '</span>' +
          '<span class="course-card__head">' +
            '<span class="course-card__level">' + course.level + '</span>' +
            '<span class="course-card__title">' + course.title + '</span>' +
            '<span class="course-card__tagline">' + course.tagline + '</span>' +
          '</span>' +
          '<span class="course-card__toggle" aria-hidden="true">+</span>' +
        '</button>' +
        '<div class="course-card__body" id="' + course.id + '-body" aria-hidden="true">' +
          '<div class="course-card__body-inner">' +
            '<p class="course-card__desc">' + course.description + '</p>' +
            '<div class="course-card__block">' +
              '<h4 class="course-card__block-title">Course Objectives</h4>' +
              '<ul class="course-card__objectives">' +
                course.objectives.map(function (o) { return '<li>' + o + '</li>'; }).join('') +
              '</ul>' +
            '</div>' +
            '<div class="course-card__block">' +
              '<h4 class="course-card__block-title">Chapters</h4>' +
              '<ol class="course-card__chapters">' + chapterCardHTML(course.chapters) + '</ol>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</article>'
    );
  }
  function initCourseCards() {
    var roots = document.querySelectorAll('[data-course-cards]');
    if (!roots.length) return;
    for (var r = 0; r < roots.length; r++) {
      (function (root) {
        root.innerHTML = COURSES.map(cardMarkup).join('');
        var headers = root.querySelectorAll('.course-card__header');
        for (var h = 0; h < headers.length; h++) {
          (function (btn) {
            btn.addEventListener('click', function () {
              var isOpen = btn.getAttribute('aria-expanded') === 'true';
              for (var k = 0; k < headers.length; k++) {
                headers[k].setAttribute('aria-expanded', 'false');
                var card = headers[k].closest('.course-card');
                if (card) card.classList.remove('is-open');
                var b = document.getElementById(headers[k].getAttribute('aria-controls'));
                if (b) b.setAttribute('aria-hidden', 'true');
              }
              if (!isOpen) {
                btn.setAttribute('aria-expanded', 'true');
                var self = btn.closest('.course-card');
                if (self) self.classList.add('is-open');
                var body = document.getElementById(btn.getAttribute('aria-controls'));
                if (body) body.setAttribute('aria-hidden', 'false');
              }
            });
          })(headers[h]);
        }
      })(roots[r]);
    }
  }

  /* ---------------- Animations (from js/animations.js) ---------------- */
  function initAnimations() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      var els = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .zoom-in');
      for (var i = 0; i < els.length; i++) els[i].classList.add('is-visible');
      return;
    }
    if (!('IntersectionObserver' in window)) {
      var all = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .zoom-in');
      for (var j = 0; j < all.length; j++) all[j].classList.add('is-visible');
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    var targets = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .zoom-in');
    for (var k = 0; k < targets.length; k++) observer.observe(targets[k]);
    // Course cards are rendered dynamically above; observe any new ones too.
    if ('MutationObserver' in window) {
      var mo = new MutationObserver(function () {
        var fresh = document.querySelectorAll('.course-card.fade-up:not(.is-visible)');
        for (var m = 0; m < fresh.length; m++) observer.observe(fresh[m]);
      });
      mo.observe(document.documentElement, { childList: true, subtree: true });
      setTimeout(function () { mo.disconnect(); }, 5000);
    }
  }
  function initCounters() {
    var counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;
    function animate(el) {
      var target = parseInt(el.dataset.count, 10);
      if (isNaN(target)) return;
      var duration = 1500;
      var start = performance.now();
      function tick(now) {
        var progress = Math.min((now - start) / duration, 1);
        var ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(ease * target) + (el.dataset.suffix || '');
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
    if (!('IntersectionObserver' in window)) {
      for (var i = 0; i < counters.length; i++) animate(counters[i]);
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        animate(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.5 });
    for (var j = 0; j < counters.length; j++) observer.observe(counters[j]);
  }
  function initCarousel() {
    var carousel = document.querySelector('[data-carousel]');
    if (!carousel) return;
    var track = carousel.querySelector('.testimonials__track');
    var prev = carousel.querySelector('[data-carousel-prev]');
    var next = carousel.querySelector('[data-carousel-next]');
    if (!track || !prev || !next) return;
    var card = track.querySelector('.testimonial-card');
    function step() {
      if (window.matchMedia('(min-width: 1025px)').matches) return 0;
      if (!card) return track.clientWidth;
      return Math.max(card.getBoundingClientRect().width + card.clientLeft, 0);
    }
    prev.addEventListener('click', function () {
      var s = step();
      if (s) track.scrollBy({ left: -s, behavior: 'smooth' });
    });
    next.addEventListener('click', function () {
      var s = step();
      if (s) track.scrollBy({ left: s, behavior: 'smooth' });
    });
  }

  /* ---------------- Gallery (from js/gallery.js) ---------------- */
  function initGallery() {
    initFilters();
    initLightbox();
  }
  function initFilters() {
    var filters = Array.prototype.slice.call(document.querySelectorAll('.gallery-filter'));
    var items = Array.prototype.slice.call(document.querySelectorAll('.gallery-masonry__item'));
    if (!filters.length || !items.length) return;
    filters.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = btn.dataset.filter;
        filters.forEach(function (b) {
          var on = b === btn;
          b.classList.toggle('is-active', on);
          b.setAttribute('aria-pressed', String(on));
        });
        items.forEach(function (item) {
          var show = filter === 'all' || item.dataset.category === filter;
          item.classList.toggle('is-hidden', !show);
        });
      });
    });
  }
  function initLightbox() {
    var lightbox = document.querySelector('.lightbox');
    if (!lightbox) return;
    var lightboxImg = lightbox.querySelector('.lightbox__img');
    var caption = lightbox.querySelector('.lightbox__caption');
    var closeBtn = lightbox.querySelector('.lightbox__close');
    var prevBtn = lightbox.querySelector('.lightbox__prev');
    var nextBtn = lightbox.querySelector('.lightbox__next');
    function getItems() {
      return Array.prototype.slice.call(
        document.querySelectorAll('.gallery-masonry__item[data-src], .gallery-item[data-src]')
      ).filter(function (el) { return !el.classList.contains('is-hidden'); });
    }
    var items = getItems();
    var current = 0;
    function render(i) {
      items = getItems();
      if (!items.length) return;
      current = (i + items.length) % items.length;
      lightboxImg.src = items[current].dataset.src;
      lightboxImg.alt = items[current].dataset.caption || '';
      if (caption) caption.textContent = items[current].dataset.caption || '';
    }
    function open(index) {
      render(index);
      lightbox.classList.add('is-open');
      document.body.classList.add('menu-open');
      if (closeBtn) closeBtn.focus();
    }
    function close() {
      lightbox.classList.remove('is-open');
      document.body.classList.remove('menu-open');
      if (items[current]) items[current].focus();
    }
    function navigate(dir) {
      render(current + dir);
      [1, -1].forEach(function (d) {
        var idx = (current + d + items.length) % items.length;
        if (items[idx]) { var img = new Image(); img.src = items[idx].dataset.src; }
      });
    }
    getItems().forEach(function (item) {
      item.addEventListener('click', function () {
        items = getItems();
        open(items.indexOf(item));
      });
      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(getItems().indexOf(item)); }
      });
    });
    if (closeBtn) closeBtn.addEventListener('click', close);
    if (prevBtn) prevBtn.addEventListener('click', function () { navigate(-1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { navigate(1); });
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) close(); });
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    });
    var touchX = null;
    lightbox.addEventListener('touchstart', function (e) { touchX = e.touches[0].clientX; }, { passive: true });
    lightbox.addEventListener('touchend', function (e) {
      if (touchX === null) return;
      var dx = e.changedTouches[0].clientX - touchX;
      touchX = null;
      if (Math.abs(dx) > 40) navigate(dx < 0 ? 1 : -1);
    }, { passive: true });
  }

  /* ---------------- Contact (from js/contact.js) ---------------- */
  function initContact() {
    var form = document.querySelector('.contact-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;
      var fields = form.querySelectorAll('[required]');
      for (var i = 0; i < fields.length; i++) {
        (function (field) {
          var error = field.parentElement ? field.parentElement.querySelector('.form-error') : null;
          if (!field.value.trim()) {
            field.classList.add('error');
            if (error) error.textContent = 'This field is required.';
            valid = false;
          } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
            field.classList.add('error');
            if (error) error.textContent = 'Please enter a valid email.';
            valid = false;
          } else {
            field.classList.remove('error');
            if (error) error.textContent = '';
          }
        })(fields[i]);
      }
      if (valid) {
        var btn = form.querySelector('[type="submit"]');
        var status = form.querySelector('.form-status');
        btn.textContent = 'Sending\u2026';
        btn.disabled = true;
        setTimeout(function () {
          btn.textContent = 'Message Sent!';
          if (status) {
            status.textContent = 'Thank you! We have received your message and will get back to you soon.';
            status.classList.remove('visually-hidden');
          }
          form.reset();
          setTimeout(function () { btn.textContent = 'Send Message'; btn.disabled = false; }, 4000);
        }, 900);
      }
    });
    var live = form.querySelectorAll('[required]');
    for (var j = 0; j < live.length; j++) {
      (function (field) {
        field.addEventListener('input', function () {
          field.classList.remove('error');
          var error = field.parentElement ? field.parentElement.querySelector('.form-error') : null;
          if (error) error.textContent = '';
        });
      })(live[j]);
    }
  }

  /* ---------------- FAQ (from js/faq.js) ---------------- */
  function initFAQ() {
    var questions = document.querySelectorAll('.faq__question');
    if (!questions.length) return;
    for (var i = 0; i < questions.length; i++) {
      (function (btn) {
        btn.addEventListener('click', function () {
          var isOpen = btn.getAttribute('aria-expanded') === 'true';
          for (var k = 0; k < questions.length; k++) {
            questions[k].setAttribute('aria-expanded', 'false');
            var body = document.getElementById(questions[k].getAttribute('aria-controls'));
            if (body) body.setAttribute('aria-hidden', 'true');
          }
          if (!isOpen) {
            btn.setAttribute('aria-expanded', 'true');
            var self = document.getElementById(btn.getAttribute('aria-controls'));
            if (self) self.setAttribute('aria-hidden', 'false');
          }
        });
      })(questions[i]);
    }
  }

  /* ---------------- Boot (from js/main.js) ---------------- */
  function boot() {
    initNavbar();
    initTheme();
    initCourseCards();
    initAnimations();
    initCounters();
    initCarousel();
    initGallery();
    initContact();
    initFAQ();
    var btn = document.querySelector('.back-to-top');
    if (btn) {
      window.addEventListener('scroll', function () {
        btn.classList.toggle('visible', window.scrollY > 400);
      }, { passive: true });
      btn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();

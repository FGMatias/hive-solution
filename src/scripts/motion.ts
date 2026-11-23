/**
 * Motion for the landing page. GSAP + ScrollTrigger, loaded only on the home page.
 *
 * Motion thesis (see DESIGN.md, "Motion"):
 *  - A shared signature: every section title arrives word by word behind a mask, like the hero.
 *  - Each section then enters in its own way, matched to what it is: the problems draw their
 *    rules and rise, the demos reveal the capture, the services slide in from the left, and so on.
 *  - Scroll-linked motion only where the scroll relationship carries meaning: the tagline lights
 *    up as you read it, the process cells fill in order, and the footer wordmark rises at the end.
 *  - Continuity: when the carousel changes project or screen, the new content settles in.
 *
 * Content is visible by default. `html.motion` (set by a tiny inline script in <head> only when
 * the visitor has not asked for reduced motion) hides the starting states until this file takes
 * over. If this file fails to load, the inline script removes the class after a few seconds.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    __motion?: boolean;
  }
}

window.__motion = true;

const root = document.documentElement;
const OUT = 'expo.out';
const CREAM = '#f6e8d4';
const CREAM_DIM = 'rgba(246, 232, 212, 0.3)';
const NEON = '#ff7a1a';
const NEON_DIM = 'rgba(255, 122, 26, 0.3)';

const mm = gsap.matchMedia();

/** Split an element's text into words, each behind a mask, so they can rise into place. */
function splitWords(el: HTMLElement, cleanups: Array<() => void>): HTMLElement[] {
  const original = el.textContent ?? '';
  const words: HTMLElement[] = [];
  el.setAttribute('aria-label', original.trim());
  el.textContent = '';
  original
    .trim()
    .split(/\s+/)
    .forEach((word, i, all) => {
      const mask = document.createElement('span');
      mask.className = 'w';
      mask.setAttribute('aria-hidden', 'true');
      const inner = document.createElement('span');
      inner.className = 'wi';
      inner.textContent = word;
      mask.append(inner);
      el.append(mask);
      if (i < all.length - 1) el.append(' ');
      words.push(inner);
    });
  cleanups.push(() => {
    el.textContent = original;
    el.removeAttribute('aria-label');
  });
  return words;
}

/** Run one section's setup; if it throws, leave that section fully visible. */
function safe(name: string, fn: () => void, scope: string) {
  try {
    fn();
  } catch (error) {
    console.warn(`motion: ${name} skipped`, error);
    gsap.set(`${scope}, ${scope} *`, { clearProps: 'all' });
  }
}

mm.add('(prefers-reduced-motion: no-preference)', () => {
  const cleanups: Array<() => void> = [];

  safe('hero', () => hero(cleanups), '.hero');
  safe('problems', () => problems(cleanups), '#t-prob, .problems');
  safe('demos', () => demos(cleanups), '#demos');
  tagline();
  safe('process', () => process(cleanups), '#proceso');
  safe('services', () => services(cleanups), '.svc');
  safe('about', () => about(cleanups), '.facts');
  safe('faq', () => faq(cleanups), '#faq');
  safe('cta', () => cta(cleanups), '.cta');
  carousel(cleanups);
  footer();

  // Starting states are now inline, so the CSS safety net can go in the same frame.
  root.classList.remove('motion');

  document.fonts?.ready.then(() => ScrollTrigger.refresh());

  return () => {
    root.classList.remove('motion');
    cleanups.forEach((fn) => fn());
  };
});

mm.add('(prefers-reduced-motion: reduce)', () => {
  root.classList.remove('motion');
});

/* ---------------------------------------------------------------- hero */

function hero(cleanups: Array<() => void>) {
  const section = document.querySelector<HTMLElement>('.hero');
  if (!section) return;

  const title = section.querySelector<HTMLElement>('.hero-title');
  const lead = section.querySelector<HTMLElement>('.hero-lead');
  const actions = section.querySelector<HTMLElement>('.hero-actions');
  const cells = Array.from(section.querySelectorAll<HTMLElement | SVGElement>('.cell-lit, .cell-m'));

  const words = title ? splitWords(title, cleanups) : [];

  gsap.set(words, { yPercent: 118 });
  gsap.set(title, { opacity: 1 });
  gsap.set([lead, actions], { opacity: 0, y: 16 });
  gsap.set(cells, { opacity: 0, scale: 0.2, transformOrigin: '50% 50%' });

  gsap
    .timeline({
      defaults: { ease: OUT },
      onComplete: () => {
        gsap.set([lead, actions], { clearProps: 'transform,opacity' });
        gsap.set(words, { clearProps: 'transform' });
      },
    })
    .to(words, { yPercent: 0, duration: 0.95, stagger: 0.075 }, 0.05)
    .to(lead, { opacity: 0.9, y: 0, duration: 0.8 }, 0.4)
    .to(actions, { opacity: 1, y: 0, duration: 0.8 }, 0.55)
    .to(cells, { opacity: 1, scale: 1, duration: 1.3 }, 0.6);

  // Cursor spotlight on the mesh. The mask lives in the SVG's own units, so the pointer is
  // converted from screen pixels, then eased with quickTo so the glow follows with inertia.
  const mesh = section.querySelector<SVGSVGElement>('.hero-mesh');
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!mesh || !canHover) return;

  const VIEW_W = 1440;
  const VIEW_H = 900;
  const RADIUS = 170;
  const pos = { x: -400, y: -400 };
  const write = () => {
    section.style.setProperty('--mx', `${pos.x.toFixed(1)}px`);
    section.style.setProperty('--my', `${pos.y.toFixed(1)}px`);
  };
  const qx = gsap.quickTo(pos, 'x', { duration: 0.6, ease: 'power3', onUpdate: write });
  const qy = gsap.quickTo(pos, 'y', { duration: 0.6, ease: 'power3', onUpdate: write });
  let seeded = false;

  const onMove = (event: PointerEvent) => {
    const box = mesh.getBoundingClientRect();
    const scale = Math.max(box.width / VIEW_W, box.height / VIEW_H);
    const x = (event.clientX - box.left - (box.width - VIEW_W * scale)) / scale; // xMax
    const y = (event.clientY - box.top - (box.height - VIEW_H * scale) / 2) / scale; // YMid
    if (!seeded) {
      pos.x = x;
      pos.y = y;
      seeded = true;
    }
    section.style.setProperty('--mr', `${(RADIUS / scale).toFixed(1)}px`);
    qx(x);
    qy(y);
    section.classList.add('is-hot');
  };
  const onLeave = () => section.classList.remove('is-hot');

  section.addEventListener('pointermove', onMove);
  section.addEventListener('pointerleave', onLeave);
  cleanups.push(() => {
    section.removeEventListener('pointermove', onMove);
    section.removeEventListener('pointerleave', onLeave);
    section.classList.remove('is-hot');
  });
}

/* ------------------------------------------------- section entrances */

/**
 * The shared signature: the section title rises word by word behind a mask, then the line
 * under it settles. Same family as the hero headline, quicker and quieter.
 */
function heading(scope: string, cleanups: Array<() => void>) {
  const title = document.querySelector<HTMLElement>(`${scope} h2.heading-2`);
  const sub = document.querySelector<HTMLElement>(`${scope} .sec-sub`);
  if (!title) {
    console.warn(`motion: no title found for ${scope}`);
    return;
  }
  const words = splitWords(title, cleanups);

  gsap.set(words, { yPercent: 118 });
  gsap.set(title, { opacity: 1 });
  if (sub) gsap.set(sub, { opacity: 0, y: 14 });

  const tl = gsap
    .timeline({
      defaults: { ease: OUT },
      scrollTrigger: { trigger: title, start: 'top 88%', once: true },
      onComplete: () => {
        gsap.set(words, { clearProps: 'transform' });
        if (sub) gsap.set(sub, { clearProps: 'transform,opacity' });
      },
    })
    .to(words, { yPercent: 0, duration: 0.8, stagger: 0.05 }, 0);
  if (sub) tl.to(sub, { opacity: 1, y: 0, duration: 0.7 }, 0.25);
}

/** Once per element, when it comes into view. */
function onceInView(trigger: Element, start: string, play: () => void) {
  ScrollTrigger.create({ trigger, start, once: true, onEnter: play });
}

// Problems: each row draws its rule from the left, then its text rises. They are read one by one.
function problems(cleanups: Array<() => void>) {
  heading('[aria-labelledby="t-prob"]', cleanups);
  const rows = gsap.utils.toArray<HTMLElement>('.problems li');
  gsap.set(rows, { '--draw': 0 });
  rows.forEach((row) => {
    const parts = row.querySelectorAll('.p-text, .p-link');
    gsap.set(parts, { opacity: 0, y: 18 });
    onceInView(row, 'top 90%', () => {
      gsap
        .timeline({ defaults: { ease: OUT } })
        .to(row, { '--draw': 1, duration: 0.9 }, 0)
        .to(parts, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, clearProps: 'transform,opacity' }, 0.15);
    });
  });
}

// Demos: the capture is the protagonist, so it is revealed like a plate coming out of the dark,
// and the description settles in beside it.
function demos(cleanups: Array<() => void>) {
  heading('#demos', cleanups);
  const carousel = document.querySelector<HTMLElement>('.carousel');
  if (!carousel) return;
  const bar = carousel.querySelector('.car-bar');
  const first = carousel.querySelector<HTMLElement>('[data-slide]');
  const image = first?.querySelector('.shot:not([inert]) img');
  const behind = first?.querySelectorAll('.shot[inert]');
  const caption = first?.querySelector('.shot-ctl');
  const info = first?.querySelectorAll('.info-head h3, .demo-lead, .ba > div, .info-act > *');

  gsap.set(carousel, { opacity: 1 });
  gsap.set(bar, { opacity: 0, y: 12 });
  gsap.set(image, { clipPath: 'inset(0 0 100% 0)', scale: 1.05 });
  gsap.set([caption, info], { opacity: 0, y: 16 });
  gsap.set(behind ?? [], { opacity: 0 });

  onceInView(carousel, 'top 80%', () => {
    gsap
      .timeline({ defaults: { ease: OUT } })
      .to(bar, { opacity: 1, y: 0, duration: 0.6, clearProps: 'transform,opacity' }, 0)
      .to(image, { clipPath: 'inset(0 0 0% 0)', scale: 1, duration: 1.2, clearProps: 'clipPath,transform' }, 0.1)
      .to(caption, { opacity: 1, y: 0, duration: 0.7, clearProps: 'transform,opacity' }, 0.6)
      .to(behind ?? [], { opacity: 1, duration: 0.9, stagger: 0.12, clearProps: 'opacity' }, 0.8)
      .to(info ?? [], { opacity: 1, y: 0, duration: 0.7, stagger: 0.07, clearProps: 'transform,opacity' }, 0.45);
  });
}

// Services: rows slide in from the left, as a catalogue being laid out.
function services(cleanups: Array<() => void>) {
  heading('[aria-labelledby="t-svc"]', cleanups);
  const rows = gsap.utils.toArray<HTMLElement>('.svc li');
  rows.forEach((row) => {
    const title = row.querySelector('h3');
    const rest = row.querySelectorAll('.svc-body, .svc-demo');
    gsap.set(title, { opacity: 0, x: -26 });
    gsap.set(rest, { opacity: 0, y: 14 });
    onceInView(row, 'top 90%', () => {
      gsap
        .timeline({ defaults: { ease: OUT } })
        .to(title, { opacity: 1, x: 0, duration: 0.85, clearProps: 'transform,opacity' }, 0)
        .to(rest, { opacity: 1, y: 0, duration: 0.75, stagger: 0.1, clearProps: 'transform,opacity' }, 0.15);
    });
  });
}

// About: three plain facts step up one after another.
function about(cleanups: Array<() => void>) {
  heading('[aria-labelledby="t-nos"]', cleanups);
  const lead = document.querySelector('.about-p');
  const facts = gsap.utils.toArray<HTMLElement>('.facts li');
  gsap.set(lead, { opacity: 0, y: 14 });
  gsap.set(facts, { opacity: 0, y: 28 });
  const block = document.querySelector('#t-nos');
  if (block) {
    onceInView(block, 'top 85%', () => {
      gsap.to(lead, { opacity: 1, y: 0, duration: 0.8, ease: OUT, delay: 0.2, clearProps: 'transform,opacity' });
    });
  }
  const list = document.querySelector('.facts');
  if (list) {
    onceInView(list, 'top 88%', () => {
      gsap.to(facts, { opacity: 1, y: 0, duration: 0.9, stagger: 0.14, ease: OUT, clearProps: 'transform,opacity' });
    });
  }
}

// FAQ: a quick, light cascade. The questions are scanned, so it stays short.
function faq(cleanups: Array<() => void>) {
  heading('#faq', cleanups);
  const items = gsap.utils.toArray<HTMLElement>('.faq details');
  gsap.set(items, { opacity: 0, y: 12 });
  const list = document.querySelector('.faq');
  if (list) {
    onceInView(list, 'top 85%', () => {
      gsap.to(items, { opacity: 1, y: 0, duration: 0.55, stagger: 0.05, ease: OUT, clearProps: 'transform,opacity' });
    });
  }
}

// Closing call: the title, then the button, while the photo slowly settles behind.
function cta(cleanups: Array<() => void>) {
  heading('.cta', cleanups);
  const actions = document.querySelector('.cta .hero-actions');
  const photo = document.querySelector('.cta-bg img');
  gsap.set(actions, { opacity: 0, y: 18 });
  gsap.set(photo, { scale: 1.12 });
  const block = document.querySelector('.cta');
  if (!block) return;
  onceInView(block, 'top 70%', () => {
    gsap.to(actions, { opacity: 1, y: 0, duration: 0.8, ease: OUT, delay: 0.5, clearProps: 'transform,opacity' });
    gsap.to(photo, { scale: 1, duration: 2.4, ease: 'power2.out', clearProps: 'transform' });
  });
}

/* ------------------------------------------------------------- tagline */

// The sentence lights up as you read it: progress is tied to scroll, word by word.
function tagline() {
  const block = document.querySelector<HTMLElement>('[data-tagline]');
  if (!block) return;
  const words = Array.from(block.querySelectorAll<HTMLElement>('.tg-word'));
  if (!words.length) return;

  const lit = (el: Element) => (el.classList.contains('tg-accent') ? NEON : CREAM);
  const dim = (el: Element) => (el.classList.contains('tg-accent') ? NEON_DIM : CREAM_DIM);

  gsap.set(words, { color: (_i, el) => dim(el) });
  gsap.to(words, {
    color: (_i, el) => lit(el),
    ease: 'none',
    duration: 0.6,
    stagger: 0.4,
    scrollTrigger: {
      trigger: block,
      start: 'top 78%',
      end: 'bottom 44%',
      scrub: 0.6,
    },
  });
}

/* ------------------------------------------------------------- process */

// Each cell fills with honey the first time it comes into view, then the thread to the next
// cell draws. On desktop the four cells share a row, so they fill left to right.
function process(cleanups: Array<() => void>) {
  heading('#proceso', cleanups);
  const steps = Array.from(document.querySelectorAll<HTMLElement>('[data-comb] .comb-step'));
  if (!steps.length) return;

  const honeys = steps.map((step) => step.querySelector<HTMLElement>('.hex-honey'));
  gsap.set(honeys, { yPercent: 101 });
  gsap.set(steps, { '--draw': 0 });

  steps.forEach((step, i) => {
    ScrollTrigger.create({
      trigger: step,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        const top = step.getBoundingClientRect().top;
        const row = steps.filter((s) => Math.abs(s.getBoundingClientRect().top - top) < 8);
        const delay = Math.max(0, row.indexOf(step)) * 0.24;
        gsap
          .timeline({ delay, defaults: { ease: OUT } })
          .to(honeys[i], { yPercent: 0, duration: 1 }, 0)
          .to(step, { '--draw': 1, duration: 0.8 }, 0.45);
      },
    });
  });
}

/* ------------------------------------------------------------ carousel */

// When the carousel changes project, the new content settles in (screens inside a project are cards
// animated by the carousel script itself). This is state
// continuity: it tells the eye that something changed and where.
function carousel(cleanups: Array<() => void>) {
  const onSlide = (event: Event) => {
    const index = (event as CustomEvent<number>).detail;
    const slide = document.querySelectorAll<HTMLElement>('[data-slide]')[index];
    if (!slide) return;
    const image = slide.querySelector('.shot:not([inert]) img');
    const lead = slide.querySelector('.demo-lead');
    const rest = slide.querySelectorAll('.info-head h3, .ba > div, .info-act > *');

    if (image) {
      gsap.fromTo(
        image,
        { opacity: 0.5, scale: 1.03 },
        { opacity: 1, scale: 1, duration: 0.8, ease: OUT, overwrite: 'auto', clearProps: 'transform,opacity' }
      );
    }
    gsap.fromTo(
      rest,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: OUT, overwrite: 'auto', clearProps: 'transform,opacity' }
    );
    if (lead) {
      gsap.fromTo(
        lead,
        { opacity: 0, y: 14 },
        { opacity: 0.9, y: 0, duration: 0.6, ease: OUT, overwrite: 'auto', clearProps: 'transform,opacity' }
      );
    }
  };

  window.addEventListener('hive:slide', onSlide);
  cleanups.push(() => {
    window.removeEventListener('hive:slide', onSlide);
  });
}

/* -------------------------------------------------------------- footer */

// The end of the page: the Hive wordmark rises into view as you reach the bottom.
function footer() {
  const mark = document.querySelector<HTMLElement>('.foot-mark');
  const block = document.querySelector<HTMLElement>('.footer');
  if (!mark || !block) return;

  gsap.fromTo(
    mark,
    { yPercent: 38 },
    {
      yPercent: 0,
      ease: 'none',
      scrollTrigger: { trigger: block, start: 'top 92%', end: 'bottom bottom', scrub: true },
    }
  );
}

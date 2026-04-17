/**
 * Blue Nile – Collection Slider Block
 * AEM Edge Delivery Services
 *
 * Desktop: ~3.5 cards visible (overflow hints more)
 * Mobile:  ~1.5 cards visible
 * Scroll-snap, no scrollbar, optional nav arrows
 */

const COLLECTIONS = [
  {
    title: 'PERSONALIZED GEMSTONES COLLECTION',
    img: 'https://dam.bluenile.com/images/public/46613/gold-gemstone-jewelry-collection.webp',
    href: 'https://www.bluenile.com/jewelry/collections/personalized',
  },
  {
    title: 'THE HEARTS CAPSULE',
    img: 'https://dam.bluenile.com/images/public/53737/GOLD-NECKLACE-HEART-DIAMOND-PENDANT.webp',
    href: 'https://www.bluenile.com/jewelry/collections/bezel',
  },
  {
    title: 'BY JAMES ALLEN',
    img: 'https://dam.bluenile.com/images/public/53621/GOLD-BAND-RING-PEAR-DIAMOND.webp',
    href: 'https://www.bluenile.com/jewelry/by-james-allen',
  },
  {
    title: 'THE EXTRAORDINARY COLLECTION',
    img: 'https://dam.bluenile.com/images/public/53994/DIAMOND-EARRINGS-ON-FLOWER.webp',
    href: 'https://www.bluenile.com/jewelry/extraordinary-collection',
  },
  {
    title: 'NEW: SAPPHIRE & DIAMONDS COLLECTION',
    img: 'https://dam.bluenile.com/images/public/46579/sapphire-diamond-rings-set.webp',
    href: 'https://www.bluenile.com/jewelry/collections/blue-sapphire-diamond',
  },
];

/** Build a single card element */
function buildCard({ title, img, href }) {
  const a = document.createElement('a');
  a.href = href;
  a.className = 'collection-card';
  a.setAttribute('aria-label', title);

  const image = document.createElement('img');
  image.src = img;
  image.alt = title;
  image.loading = 'lazy';
  image.decoding = 'async';

  const overlay = document.createElement('div');
  overlay.className = 'collection-card-overlay';

  const titleEl = document.createElement('span');
  titleEl.className = 'collection-card-title';
  titleEl.textContent = title;

  const btn = document.createElement('span');
  btn.className = 'collection-card-btn';
  btn.textContent = 'SHOP NOW';
  btn.setAttribute('aria-hidden', 'true'); // parent <a> is the interactive element

  overlay.append(titleEl, btn);
  a.append(image, overlay);
  return a;
}

/** Build a nav arrow button */
function buildNavBtn(direction) {
  const btn = document.createElement('button');
  btn.className = `collection-slider-nav ${direction}`;
  btn.setAttribute('aria-label', direction === 'prev' ? 'Previous collections' : 'Next collections');
  btn.setAttribute('type', 'button');

  const d = direction === 'prev'
    ? 'M15 18l-6-6 6-6'   // left chevron
    : 'M9 18l6-6-6-6';    // right chevron

  btn.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="${direction === 'prev' ? '15 18 9 12 15 6' : '9 18 15 12 9 6'}"/></svg>`;
  return btn;
}

/** Scroll the track by one card-width in the given direction */
function scrollTrack(track, direction) {
  const cardWidth = track.querySelector('.collection-card')?.offsetWidth ?? 280;
  const gap = 16;
  const step = cardWidth + gap;
  track.scrollBy({ left: direction === 'next' ? step : -step, behavior: 'smooth' });
}

/** Update disabled state on arrows based on scroll position */
function syncNavState(track, prevBtn, nextBtn) {
  const { scrollLeft, scrollWidth, clientWidth } = track;
  prevBtn.disabled = scrollLeft <= 0;
  nextBtn.disabled = scrollLeft + clientWidth >= scrollWidth - 1;
}

export default function decorate(block) {
  // Wrap block contents in a container div
  const container = document.createElement('div');
  container.className = 'collection-slider-container';

  // Build track
  const track = document.createElement('div');
  track.className = 'collection-slider-track';
  track.setAttribute('role', 'list');

  COLLECTIONS.forEach((item) => {
    const card = buildCard(item);
    card.setAttribute('role', 'listitem');
    track.appendChild(card);
  });

  // Build nav arrows
  const prevBtn = buildNavBtn('prev');
  const nextBtn = buildNavBtn('next');

  prevBtn.addEventListener('click', () => scrollTrack(track, 'prev'));
  nextBtn.addEventListener('click', () => scrollTrack(track, 'next'));

  // Keep arrows in sync with scroll position
  track.addEventListener('scroll', () => syncNavState(track, prevBtn, nextBtn), { passive: true });

  container.append(prevBtn, track, nextBtn);

  // Clear any EDS-generated markup and replace with our component
  block.textContent = '';
  block.appendChild(container);

  // Set initial arrow state after paint
  requestAnimationFrame(() => syncNavState(track, prevBtn, nextBtn));
}

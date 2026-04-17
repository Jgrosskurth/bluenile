/**
 * AEM EDS — category-carousel block decorator
 * Blue Nile
 *
 * Expected block table structure (one row per tile):
 *   Col 0: image (picture/img element, optionally wrapped in a link)
 *   Col 1: label text (paragraph)
 *
 * An href is resolved in priority order:
 *   1. <a> wrapping the image in col 0
 *   2. <a> anywhere in col 1
 *   3. data-href attribute on the row div
 *   4. Hardcoded label → URL mapping (fallback)
 */

const HREF_MAP = {
  'engagement rings': 'https://www.bluenile.com/engagement-rings/styles',
  'wedding rings':    'https://www.bluenile.com/jewelry/rings/wedding-rings',
  'diamonds':         'https://www.bluenile.com/diamonds',
  'diamond jewelry':  'https://www.bluenile.com/diamond-jewelry',
  'earrings':         'https://www.bluenile.com/jewelry/earrings',
  'necklaces':        'https://www.bluenile.com/jewelry/necklaces',
  'bracelets':        'https://www.bluenile.com/jewelry/bracelets',
  'all jewelry':      'https://www.bluenile.com/jewelry',
};

function resolveHref(row, label) {
  // 1. Link wrapping the image
  const imgLink = row.querySelector(':scope > div:first-child a[href]');
  if (imgLink) return imgLink.href;

  // 2. Link in the label cell
  const labelLink = row.querySelector(':scope > div:last-child a[href]');
  if (labelLink) return labelLink.href;

  // 3. data-href on the row
  if (row.dataset.href) return row.dataset.href;

  // 4. Fallback mapping
  return HREF_MAP[label.toLowerCase()] || '#';
}

function buildTile(row) {
  const cells = row.querySelectorAll(':scope > div');
  if (cells.length < 2) return null;

  const [imageCell, labelCell] = cells;

  // Extract img element (may be inside <picture>)
  const img = imageCell.querySelector('img');
  if (!img) return null;

  // Extract label text
  const label = labelCell.textContent.trim();

  // Resolve href
  const href = resolveHref(row, label);

  // Build tile
  const tile = document.createElement('a');
  tile.className = 'carousel-tile';
  tile.href = href;
  tile.setAttribute('aria-label', label);

  // Image wrapper (1:1 crop)
  const wrap = document.createElement('div');
  wrap.className = 'tile-image-wrap';

  const tileImg = document.createElement('img');
  tileImg.className = 'tile-image';
  tileImg.src = img.src;
  tileImg.alt = img.alt || label;
  tileImg.loading = 'lazy';
  tileImg.width = img.width || 160;
  tileImg.height = img.height || 160;

  wrap.append(tileImg);

  // Label
  const span = document.createElement('span');
  span.className = 'tile-label';
  span.textContent = label;

  tile.append(wrap, span);
  return tile;
}

function decorate(block) {
  // Each direct child div is one row/item
  const rows = [...block.querySelectorAll(':scope > div > div, :scope > div')].filter((el) => {
    // We want rows that are direct children of the wrapper div
    return el.parentElement === block.querySelector(':scope > div') || el.parentElement === block;
  });

  // Normalise: some EDS structures nest one extra wrapper div
  const wrapper = block.querySelector(':scope > div') || block;
  const itemRows = [...wrapper.querySelectorAll(':scope > div')];

  const track = document.createElement('div');
  track.className = 'carousel-track';

  itemRows.forEach((row) => {
    const tile = buildTile(row);
    if (tile) track.append(tile);
  });

  // Replace block content
  block.innerHTML = '';
  block.append(track);
}

export default decorate;

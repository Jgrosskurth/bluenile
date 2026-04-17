/**
 * Blue Nile — promo-banner block decorator
 *
 * Handles three layout variants driven by classes the author places on the
 * block in the document table:
 *
 *   image-left            → 60 % image | 40 % text (white bg)
 *   text-left dark        → 40 % text (navy bg) | 60 % image
 *   text-over-image center → full-width image with centered text overlay
 *
 * Expected table row order (author-defined, flexible):
 *   Row containing <picture>/<img>  → becomes .promo-image
 *   Row(s) containing text          → eyebrow / heading / body / CTA link
 *
 * After decoration the block contains exactly two children:
 *   .promo-content  — eyebrow, h2, body-text, cta-wrap
 *   .promo-image    — picture > img
 */

/**
 * Promote inline elements that look like an eyebrow label.
 * Returns true when the paragraph was converted.
 */
function tryEyebrow(el) {
  const text = el.textContent.trim();
  // Eyebrow heuristic: ALL-CAPS, short (≤ 60 chars), no child block elements
  if (
    text === text.toUpperCase() &&
    text.length <= 60 &&
    !el.querySelector('a') &&
    !el.querySelector('strong em') // not styled as heading
  ) {
    el.classList.add('eyebrow');
    return true;
  }
  return false;
}

/**
 * Convert every plain <a> inside .cta-wrap into a button by adding the
 * class. (CSS handles all visual styling — no inline styles injected.)
 */
function applyCtaClass(wrap) {
  wrap.querySelectorAll('a').forEach((a) => {
    a.classList.add('button');
  });
}

/**
 * Given a list of EDS row <div> elements, pull out the image row and the
 * remaining text rows, then build a structured .promo-content + .promo-image
 * layout inside the block.
 *
 * @param {HTMLElement} block
 */
function decorate(block) {
  // ── 1. Collect rows ──────────────────────────────────────────────────────
  const rows = [...block.querySelectorAll(':scope > div')];

  let imageEl = null; // the <picture> or <img> node
  const textNodes = []; // flat list of content nodes (p, h1-h6, etc.)

  rows.forEach((row) => {
    // Each EDS row has one or more cell <div>s
    const cells = [...row.querySelectorAll(':scope > div')];

    cells.forEach((cell) => {
      const pic = cell.querySelector('picture');
      const img = cell.querySelector('img');

      if ((pic || img) && !imageEl) {
        // This cell is the image cell — grab the outermost media element
        imageEl = pic || img;
      } else {
        // Treat every child node of the cell as content
        [...cell.childNodes].forEach((node) => {
          // Skip empty text nodes
          if (node.nodeType === Node.TEXT_NODE && !node.textContent.trim()) return;
          textNodes.push(node.cloneNode(true));
        });
      }
    });
  });

  // ── 2. Build .promo-image ────────────────────────────────────────────────
  const promoImage = document.createElement('div');
  promoImage.classList.add('promo-image');

  if (imageEl) {
    // Ensure lazy loading on the img inside
    const img = imageEl.tagName === 'IMG' ? imageEl : imageEl.querySelector('img');
    if (img && !img.getAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    promoImage.appendChild(imageEl);
  }

  // ── 3. Build .promo-content ──────────────────────────────────────────────
  const promoContent = document.createElement('div');
  promoContent.classList.add('promo-content');

  textNodes.forEach((node) => {
    // Promote Element nodes; pass text nodes through as-is
    if (node.nodeType !== Node.ELEMENT_NODE) {
      promoContent.appendChild(node);
      return;
    }

    const tag = node.tagName.toLowerCase();

    // ── Headings pass through unchanged ──
    if (/^h[1-6]$/.test(tag)) {
      // Normalise all headings to h2 for consistent styling
      if (tag !== 'h2') {
        const h2 = document.createElement('h2');
        h2.innerHTML = node.innerHTML;
        promoContent.appendChild(h2);
      } else {
        promoContent.appendChild(node);
      }
      return;
    }

    // ── Paragraphs ──
    if (tag === 'p') {
      const anchor = node.querySelector('a');

      if (anchor) {
        // CTA: wrap in .cta-wrap
        const wrap = document.createElement('p');
        wrap.classList.add('cta-wrap');
        wrap.appendChild(node.querySelector('a').cloneNode(true));
        applyCtaClass(wrap);
        promoContent.appendChild(wrap);
        return;
      }

      // Eyebrow detection (before falling through to body-text)
      if (tryEyebrow(node)) {
        promoContent.appendChild(node);
        return;
      }

      // Regular body paragraph
      node.classList.add('body-text');
      promoContent.appendChild(node);
      return;
    }

    // ── Anything else passes through ──
    promoContent.appendChild(node);
  });

  // ── 4. Determine column order from variant classes ───────────────────────
  //
  // Variants and their DOM order:
  //   image-left        → promoImage first, promoContent second
  //   text-left         → promoContent first, promoImage second
  //   text-over-image   → promoImage first (abs positioned), promoContent second
  //
  // CSS handles the visual order via flexbox `order` properties, so we simply
  // append in document order (image first for image-left / text-over-image,
  // content first for text-left).

  const isTextLeft = block.classList.contains('text-left');

  block.innerHTML = '';

  if (isTextLeft) {
    block.append(promoContent, promoImage);
  } else {
    block.append(promoImage, promoContent);
  }
}

export default decorate;

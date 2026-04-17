// hero.js — EDS block decorator
function decorate(block) {
  // Structure the block
  const wrapper = block.querySelector(':scope > div');
  if (!wrapper) return;
  const [leftCell, rightCell] = wrapper.querySelectorAll(':scope > div');
  if (leftCell) {
    leftCell.classList.add('hero-content');
    // First <p> before h1 is eyebrow
    const firstP = leftCell.querySelector('p:first-child');
    if (firstP && !firstP.querySelector('a')) {
      firstP.classList.add('hero-eyebrow');
    }
    // Wrap CTA links as button-style
    const ctaP = leftCell.querySelector('p:has(a)');
    if (ctaP) {
      ctaP.classList.add('hero-cta-group');
      ctaP.querySelectorAll('a').forEach(a => a.classList.add('hero-btn'));
    }
  }
  if (rightCell) {
    rightCell.classList.add('hero-image');
    const img = rightCell.querySelector('img');
    if (img) img.loading = 'eager';
  }
}

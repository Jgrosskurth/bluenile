function decorate(block) {
  const shapes = [
    { label: 'Asscher',  img: 'https://dam.bluenile.com/images/public/41326/asscher_cut_diamond.webp' },
    { label: 'Round',    img: 'https://dam.bluenile.com/images/public/41334/round_cut_diamond.webp' },
    { label: 'Cushion',  img: 'https://dam.bluenile.com/images/public/41342/cushion_cut_diamond.webp' },
    { label: 'Emerald',  img: 'https://dam.bluenile.com/images/public/41350/emerald-cut_diamond.webp' },
    { label: 'Marquise', img: 'https://dam.bluenile.com/images/public/41358/marquise_cut_diamond.webp' },
    { label: 'Oval',     img: 'https://dam.bluenile.com/images/public/41366/oval_cut_diamond.webp' },
    { label: 'Princess', img: 'https://dam.bluenile.com/images/public/41390/princess_cut_diamond.webp' },
    { label: 'Pear',     img: 'https://dam.bluenile.com/images/public/41382/pear_shaped_diamond.webp' },
    { label: 'Radiant',  img: 'https://dam.bluenile.com/images/public/41398/radiant_cut_diamond.webp' },
  ];

  block.innerHTML = `
    <div class="diamond-shapes-hero">
      <img
        src="https://dam.bluenile.com/images/public/50205/diamond-cuts-collection.webp"
        alt="Diamond cuts collection"
        loading="lazy"
      >
    </div>
    <div class="diamond-shapes-grid-panel">
      <h3 class="diamond-shapes-title">EXPLORE DIAMOND SHAPES</h3>
      <div class="diamond-shapes-grid">
        ${shapes.map((s) => `
          <a href="https://www.bluenile.com/diamonds" class="diamond-shape-tile">
            <img
              src="${s.img}"
              alt="${s.label} cut diamond"
              loading="lazy"
            >
            <span class="diamond-shape-label">${s.label}</span>
          </a>
        `).join('')}
      </div>
      <a href="https://www.bluenile.com/diamonds" class="diamond-shapes-cta">FIND YOUR DIAMOND</a>
    </div>
  `;
}

export default decorate;

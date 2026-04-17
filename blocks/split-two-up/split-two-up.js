function decorate(block) {
  const panels = [
    {
      img: 'https://dam.bluenile.com/images/public/53751/PEARL-DIAMOND-JEWELRY-COLLECTION.webp',
      alt: 'Pearl and diamond jewelry collection',
      cta: { text: 'GIFT GUIDE', href: 'https://www.bluenile.com/jewelry/gifts' }
    },
    {
      img: 'https://dam.bluenile.com/images/public/54010/DIAMOND-NECKLACE-ON-BLUE-FABRIC.webp',
      alt: 'Diamond necklace on blue fabric',
      cta: { text: 'DIAMOND ESSENTIALS', href: 'https://www.bluenile.com/diamond-jewelry/diamond-essentials' }
    }
  ];

  block.innerHTML = panels.map(p => `
    <div class="split-panel">
      <img src="${p.img}" alt="${p.alt}" loading="lazy">
      <a href="${p.cta.href}" class="split-panel-cta">${p.cta.text}</a>
    </div>
  `).join('');
}
export default decorate;

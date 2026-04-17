function decorate(block) {
  const items = [
    {
      img: 'https://dam.bluenile.com/images/public/41460/artisan_crafting_a_Blue_Nile_diamond_ring_by_hand.webp',
      alt: 'Artisan crafting a Blue Nile diamond ring',
      title: 'A TRUE ORIGINAL',
      desc: "Blue Nile is the original online jeweler. Since 1999, we've provided the best product quality and price with the transparency you deserve.",
    },
    {
      img: 'https://dam.bluenile.com/images/public/41468/Blue_Nile_showroom_representative_presenting_diamond_engagement_rings_to_customer.webp',
      alt: 'Blue Nile showroom representative presenting diamond rings',
      title: 'DISTINCTIVE SERVICE',
      desc: "Don't know where to start? We provide expert guidance and knowledgeable advice at every touchpoint. Our specialists are here to help — online and in showrooms.",
    },
    {
      img: 'https://dam.bluenile.com/images/public/41476/Blue_Nile_diamond_jewelry_featured_with_GIA_certification_logo.webp',
      alt: 'Blue Nile diamond jewelry with GIA certification',
      title: 'INDUSTRY LEADERS',
      desc: 'We set a higher standard in fine jewelry with ethically sourced diamonds, responsible mining, and creating the purest metals. Our jewels meet the highest grading standards.',
    },
    {
      img: 'https://dam.bluenile.com/images/public/41484/mixed_styles_yellow_gold_diamond_rings_stacked.webp',
      alt: 'Mixed styles yellow gold diamond rings stacked',
      title: 'INNOVATIVE ASSORTMENT',
      desc: "Choose from the world's most beautiful diamonds, hand selected by our experts and crafted into exceptional jewelry that will last a lifetime.",
    },
  ];

  block.innerHTML = `
    <h2 class="value-props-heading">ONLY AT BLUE NILE</h2>
    <div class="value-props-grid">
      ${items.map((item) => `
        <div class="value-prop-card">
          <img src="${item.img}" alt="${item.alt}" class="value-prop-image" loading="lazy">
          <h3 class="value-prop-title">${item.title}</h3>
          <p class="value-prop-description">${item.desc}</p>
        </div>
      `).join('')}
    </div>
  `;
}

export default decorate;

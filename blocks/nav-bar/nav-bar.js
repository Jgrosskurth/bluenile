/**
 * Blue Nile — nav-bar block
 * Renders a 3-layer navigation: utility bar, main nav, icons.
 */

function decorate(block) {
  block.innerHTML = `
    <div class="nav-bar-top">
      <span class="nav-top-promo">Mother's Day Sale Up To 30% Off*</span>
      <div class="nav-top-utils">
        <a href="https://www.bluenile.com/jewelry-stores">Store</a>
        <a href="https://www.bluenile.com/virtual-appointment">Virtual Appointment</a>
        <a href="tel:+18002422728">+1&#8209;800&#8209;242&#8209;2728</a>
      </div>
    </div>
    <div class="nav-bar-main">
      <a href="https://www.bluenile.com/" class="nav-bar-logo">
        <img
          src="https://ecommo--ion.bluenile.com/bn-main/logo.6b793.svg"
          alt="Blue Nile"
          loading="eager"
          height="28"
        >
      </a>
      <nav aria-label="Primary navigation">
        <ul class="nav-bar-links">
          <li><a href="https://www.bluenile.com/engagement-rings/styles">Engagement Rings</a></li>
          <li><a href="https://www.bluenile.com/jewelry/rings">Rings</a></li>
          <li><a href="https://www.bluenile.com/jewelry/earrings">Earrings</a></li>
          <li><a href="https://www.bluenile.com/jewelry/bracelets">Bracelets</a></li>
          <li><a href="https://www.bluenile.com/jewelry/necklaces">Necklaces</a></li>
          <li><a href="https://www.bluenile.com/diamonds">Diamonds</a></li>
          <li><a href="https://www.bluenile.com/gemstones">Gemstones</a></li>
          <li><a href="https://www.bluenile.com/jewelry/gifts">Gifts &amp; Collections</a></li>
        </ul>
      </nav>
      <div class="nav-bar-utils">
        <button class="nav-icon-btn nav-search" aria-label="Search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               aria-hidden="true">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </button>
        <button class="nav-icon-btn nav-wishlist" aria-label="Wishlist">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
        <button class="nav-icon-btn nav-bag" aria-label="Shopping bag">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               aria-hidden="true">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
        </button>
        <button class="nav-hamburger" aria-label="Open menu" aria-expanded="false">&#9776;</button>
      </div>
    </div>
  `;
}

export default decorate;

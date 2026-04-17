/**
 * Blue Nile — footer block
 * Renders a 4-column top section + dark navy bottom bar.
 */

function decorate(block) {
  block.innerHTML = `
    <div class="footer-top">

      <!-- Col 1: Customer Care -->
      <div class="footer-col">
        <a href="https://www.bluenile.com/contact-us" class="footer-col-heading">Customer Care</a>
        <ul class="footer-links">
          <li><a href="#">Live Chat</a></li>
          <li><a href="tel:+18002422728">+1&#8209;800&#8209;242&#8209;2728</a></li>
          <li><a href="mailto:service@bluenile.com">Email Us</a></li>
          <li><a href="https://www.bluenile.com/contact-us">Contact Us</a></li>
          <li><a href="https://www.bluenile.com/contact-us/faq">FAQ</a></li>
          <li><a href="https://www.bluenile.com/services/free-returns">Returns</a></li>
        </ul>
      </div>

      <!-- Col 2: Why Blue Nile -->
      <div class="footer-col">
        <a href="https://www.bluenile.com/services" class="footer-col-heading">Why Blue Nile</a>
        <ul class="footer-links">
          <li><a href="https://www.bluenile.com/services/free-returns">Return Policy</a></li>
          <li><a href="https://www.signetjewelers.com/sustainability/default.aspx">Conflict Free Diamonds</a></li>
          <li><a href="https://www.bluenile.com/services/diamond-price-match">Diamond Price Matching</a></li>
          <li><a href="https://www.bluenile.com/services/diamond-upgrade-program">Diamond Upgrade Program</a></li>
          <li><a href="https://www.bluenile.com/services/warranty">Free Lifetime Warranty</a></li>
          <li><a href="https://www.bluenile.com/services/shipping">Free Secure Shipping</a></li>
          <li><a href="https://www.bluenile.com/services/packaging">Blue Nile Packaging</a></li>
          <li><a href="https://www.bluenile.com/services/insurance">Jewelry Insurance</a></li>
          <li><a href="https://www.bluenile.com/protection-plans">Jewelry Protection Plans</a></li>
        </ul>
      </div>

      <!-- Col 3: About Blue Nile -->
      <div class="footer-col">
        <a href="https://www.bluenile.com/blue-nile-experience" class="footer-col-heading">About Blue Nile</a>
        <ul class="footer-links">
          <li><a href="https://www.bluenile.com/blue-nile-experience">Quality &amp; Value</a></li>
          <li><a href="https://www.bluenile.com/reviews">Reviews</a></li>
          <li><a href="https://www.bluenile.com/policies/diamond-sustainability">Diamond Sustainability</a></li>
          <li><a href="https://www.bluenile.com/blog">Blue Nile Blog</a></li>
          <li><a href="https://www.bluenile.com/jewelry-stores">Locations</a></li>
          <li><a href="https://signetjewelers.wd1.myworkdayjobs.com/BlueNile">Careers</a></li>
          <li><a href="https://www.bluenile.com/affiliates">Affiliate Program</a></li>
        </ul>
      </div>

      <!-- Col 4: Email signup + social -->
      <div class="footer-col footer-col-signup">
        <span class="footer-signup-heading">Join the Blue Nile List</span>
        <span class="footer-signup-tagline">Get Exclusive Offers and News</span>
        <form class="footer-signup-form" onsubmit="return false">
          <input
            type="email"
            placeholder="Email Address"
            class="footer-signup-input"
            aria-label="Email address"
          >
          <button type="submit" class="footer-signup-btn">JOIN</button>
        </form>
        <p class="footer-signup-terms">
          I agree to receive promotional emails from Blue Nile. You can unsubscribe at any time.
          By clicking join, you accept our
          <a href="https://www.bluenile.com/policies/privacy">Privacy Policy</a>.
        </p>
        <div class="footer-social">
          <a href="https://www.facebook.com/bluenile" class="footer-social-link" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com/bluenilediamond" class="footer-social-link" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.pinterest.com/BlueNile" class="footer-social-link" target="_blank" rel="noopener noreferrer">Pinterest</a>
        </div>
      </div>

    </div>

    <!-- Bottom bar -->
    <div class="footer-bottom">
      <div class="footer-bottom-left">
        <img
          src="https://ecommo--ion.bluenile.com/bn-main/logo.6b793.svg"
          alt="Blue Nile"
          loading="lazy"
          height="20"
        >
      </div>
      <span class="footer-copyright">&copy; 2026 Blue Nile Inc.</span>
      <div class="footer-legal-links">
        <a href="https://www.bluenile.com/policies/terms-and-conditions">Terms &amp; Conditions</a>
        <a href="https://www.bluenile.com/policies/privacy">Privacy Policy</a>
        <a href="https://www.bluenile.com/sitemap">Site Map</a>
        <a href="https://www.bluenile.com/policies/accessibility">Accessibility</a>
        <a href="https://www.bluenile.com/policies/cookies-policy">Cookies Policy</a>
      </div>
    </div>
  `;
}

export default decorate;

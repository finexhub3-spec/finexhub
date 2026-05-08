import { Link } from 'react-router-dom';
import logo from '../images/bexlogo.jpeg';
import './Footer.css';

const footerLinks = ['Services', 'Calculator', 'Process', 'Blog', 'Contact'];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src={logo} alt="Bex Sigma Finance" className="footer-logo" loading="lazy" decoding="async" />
          <span>Bex Sigma Finance</span>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          {footerLinks.map((item) => (
            <a key={item} href={`/${item === 'Reviews' ? 'testimonials' : item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <div className="footer-copy">
          <p>Bex Sigma Finance is a premium fintech experience. Loan conditions depend on eligibility, jurisdiction, and lender terms.</p>
          <small>© 2026 Bex Sigma Finance. All rights reserved.</small>
          <div className="footer-legal-links">
            <Link to="/legal">Privacy Policy</Link>
            <span className="footer-sep">•</span>
            <Link to="/legal">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

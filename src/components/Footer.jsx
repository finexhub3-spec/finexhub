import { Link } from 'react-router-dom';
import logo from '../images/logo_mark.png';
import './Footer.css';

const footerLinks = ['Services', 'Calculator', 'Process', 'Blog', 'Contact'];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src={logo} alt="FinEx Hub" className="footer-logo" loading="lazy" decoding="async" />
          <span>FinEx Hub</span>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          {footerLinks.map((item) => (
            <Link key={item} to={`/${item.toLowerCase()}`}>
              {item}
            </Link>
          ))}
        </nav>
        <div className="footer-copy">
          <p>FinEx Hub is a premium fintech experience. Conditions depend on eligibility, jurisdiction, and partner terms.</p>
          <small>© 2026 FinEx Hub. All rights reserved.</small>
          <div className="footer-legal-links">
            <Link to="/legal?tab=privacy">Privacy Policy</Link>
            <span className="footer-sep">•</span>
            <Link to="/legal?tab=terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

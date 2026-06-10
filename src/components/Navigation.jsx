import { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import logo from '../images/finexhub_logo.png';
import ApplicationModal from './ApplicationModal';
import './Navigation.css';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Calculator', href: '/calculator' },
  { label: 'Process', href: '/process' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const openModal = () => {
    setIsModalOpen(true);
    closeMenu();
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <motion.header
        className="site-header"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <NavLink to="/" className="brand">
          <img src={logo} alt="FinEx Hub logo" className="brand-logo" />

          <span className="brand-text">
            <span className="bex">FinEx</span>
            <span className="sigma"> Hub</span>
          </span>
        </NavLink>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              onClick={closeMenu}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <button className="nav-cta mobile-cta" onClick={openModal}>
            Apply Now
          </button>
        </nav>

        <button className="nav-cta desktop-cta" onClick={openModal}>
          Apply Now
        </button>
      </motion.header>

      {/* Backdrop — shown only on mobile when menu is open */}
      <div
        className={`nav-backdrop ${menuOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <ApplicationModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default Navigation;

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { supportServices } from '../data/services.js';
import './SupportServices.css';

function SupportServices() {
  return (
    <section className="section support-section" id="support">
      <div className="section-head readable-head">
        <span className="eyebrow">Wealth, Funds & Insurance</span>
        <h2>Grow and secure your financial future.</h2>
        <p>Explore our targeted wealth management, growth mutual funds, and custom insurance solutions.</p>
      </div>
      <div className="service-grid">
        {supportServices.map((service, index) => (
          <motion.article
            key={service.title}
            className="service-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.detail}</p>
            <Link className="service-link" to={`/services/${service.slug}`}>
              View details
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default SupportServices;

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { allServices } from '../data/services.js';
import './ServiceDirectory.css';

function ServiceDirectory() {
  return (
    <section className="section service-directory-section">
      <div className="section-head readable-head">
        <span className="eyebrow">Full service list</span>
        <h2>Choose a service and open its details.</h2>
        <p>Every loan product and support service has a dedicated page with benefits, documents, and next steps.</p>
      </div>

      <div className="service-directory-list">
        {allServices.map((service, index) => (
          <motion.div
            className="service-directory-item"
            key={service.slug}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <strong>{service.title}</strong>
              <p>{service.description}</p>
            </div>
            <Link to={`/services/${service.slug}`}>Open</Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ServiceDirectory;

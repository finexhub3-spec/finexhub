import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { loanServices, wealthServices, fundServices, insuranceServices } from '../data/services.js';
import './ServiceDirectory.css';

const categories = [
  { title: 'Loans', items: loanServices, icon: '💰' },
  { title: 'Wealth Management', items: wealthServices, icon: '📈' },
  { title: 'Mutual Funds', items: fundServices, icon: '📊' },
  { title: 'Insurance', items: insuranceServices, icon: '🛡️' }
];

function ServiceDirectory() {
  return (
    <section className="section service-directory-section">
      <div className="section-head readable-head">
        <span className="eyebrow">Full service directory</span>
        <h2>Choose a service and open its details.</h2>
        <p>Every product has a dedicated page with benefits, documents, and next steps.</p>
      </div>

      <div className="service-directory-categories" style={{ display: 'grid', gap: '40px' }}>
        {categories.map((cat) => (
          <div key={cat.title} className="service-directory-cat">
            <h3 style={{
              fontSize: '1.4rem',
              color: 'var(--text-light, #ffffff)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              borderBottom: '1.5px solid rgba(255, 255, 255, 0.05)',
              paddingBottom: '12px',
              marginBottom: '20px'
            }}>
              <span style={{ fontSize: '1.3rem' }}>{cat.icon}</span> {cat.title}
            </h3>

            <div className="service-directory-list">
              {cat.items.map((service, index) => (
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceDirectory;

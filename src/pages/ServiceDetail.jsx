import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { allServices } from '../data/services.js';
import './ServiceDetail.css';

function ServiceDetail() {
  const { serviceSlug } = useParams();
  const service = allServices.find((item) => item.slug === serviceSlug);

  if (!service) {
    return (
      <section className="section service-detail-section">
        <div className="service-detail-empty readable-panel">
          <span className="eyebrow">Service not found</span>
          <h1>We could not find this service.</h1>
          <p>Explore the full service list and choose the loan support you need.</p>
          <Link className="button button-primary" to="/services">
            View all services
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section service-detail-section">
      <div className="service-detail-hero">
        <motion.div
          className="service-detail-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">{service.type}</span>
          <h1>{service.title}</h1>
          <p>{service.detail}</p>
          <div className="service-detail-actions">
            <Link className="button button-primary" to="/contact">
              Apply for this service
            </Link>
            <Link className="button button-secondary" to="/services">
              All services
            </Link>
          </div>
        </motion.div>

        <motion.aside
          className="service-summary-card"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {service.interactiveComponent ? (
            <service.interactiveComponent />
          ) : service.image ? (
            <img src={service.image} alt={service.title} loading="eager" decoding="async" />
          ) : (
            <div className="service-summary-icon">{service.icon}</div>
          )}
          <div>
            <span>{service.tag || service.icon}</span>
            <strong>{service.title}</strong>
            <p>{service.description}</p>
          </div>
        </motion.aside>
      </div>

      <div className="service-detail-grid">
        <article className="readable-card service-info-card">
          <span className="eyebrow">What you get</span>
          <h2>Focused support from eligibility to next step.</h2>
          <ul>
            {service.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </article>

        <article className="readable-card service-info-card">
          <span className="eyebrow">Documents</span>
          <h2>Prepare these before applying.</h2>
          <ul>
            {service.documents.map((document) => (
              <li key={document}>{document}</li>
            ))}
          </ul>
        </article>

        <article className="readable-card service-info-card service-wide-card">
          <span className="eyebrow">How Bex Sigma helps</span>
          <h2>Clear comparison, cleaner decisions.</h2>
          <p>
            We review your basic profile, match the service with suitable lender options, help you understand EMI comfort,
            and guide the documents needed for a smoother application.
          </p>
        </article>
      </div>
    </section>
  );
}

export default ServiceDetail;

import { motion } from 'framer-motion';
import businessLoanImage from '../images/business loan.webp';
import propertyLoanImage from '../images/property loan.webp';
import './About.css';

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="split-grid">
        <motion.div
          className="text-panel readable-panel"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          <span className="eyebrow">Why FinEx Hub?</span>
          <h2>A borrower system built for clarity.</h2>
          <p>
            Move through loan discovery with the same ease as a modern SaaS dashboard:
            compare products, understand eligibility, prepare documents, and calculate EMI in one place.
          </p>
          <ul>
            <li>Structured loan comparison for faster decisions.</li>
            <li>Practical eligibility and documentation guidance.</li>
            <li>Lightweight interface tuned for smooth browsing.</li>
          </ul>
        </motion.div>

        <motion.div
          className="visual-panel"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          <div className="image-card image-card-large">
            <img src={businessLoanImage} alt="Business loan planning visual" loading="lazy" decoding="async" />
          </div>
          <div className="image-card image-card-small">
            <div className="image-accent" />
            <img src={propertyLoanImage} alt="Property loan visual" loading="lazy" decoding="async" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

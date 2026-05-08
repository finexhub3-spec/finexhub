import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import propertyLoanImage from '../images/property loan.webp';
import ApplicationModal from './ApplicationModal';
import './FinalCTA.css';

function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className="section final-cta-section" id="contact">
        <motion.div
          className="final-cta-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="final-cta-copy">
            <span className="eyebrow">Ready to begin?</span>
            <h2>Start with a clear loan plan.</h2>
            <p>
              Apply in minutes, read the important details clearly, and track your next steps with confidence.
            </p>
          </div>
          <div className="final-cta-actions">
            <motion.button
              className="button button-primary"
              onClick={openModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.button>
            <Link to="/calculator" className="button button-secondary">
              Calculate EMI
            </Link>
          </div>
          <img
            className="final-cta-image"
            src={propertyLoanImage}
            alt="Premium loan services visual"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </section>

      <ApplicationModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default FinalCTA;

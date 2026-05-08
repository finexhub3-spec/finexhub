import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroDashboardImage from '../images/loan-hero-dashboard.png';
import './Hero.css';

const partners = ['HDFC', 'ICICI', 'Axis', 'SBI', 'Kotak', 'NBFC+', 'Bajaj', 'IDFC'];
const proofFaces = ['BK', 'AM', 'RS', 'JP', 'NV'];

const headlineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const copyY = useTransform(scrollYProgress, [0, 0.58], [0, -118]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.42], [1, 0.28]);
  const visualY = useTransform(scrollYProgress, [0, 1], [42, -94]);
  const visualScale = useTransform(scrollYProgress, [0, 0.86], [0.92, 1.08]);
  const visualRadius = useTransform(scrollYProgress, [0, 0.86], [8, 0]);
  const trustY = useTransform(scrollYProgress, [0, 0.58], [0, -58]);
  const trustOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);

  const headline = "Fast Approval. Honest Advice. Zero Confusion";

  return (
    <section className="section hero-section" id="home" ref={heroRef}>
      <div className="hero-sticky">
        <motion.div
          className="hero-copy"
          style={{ y: copyY, opacity: copyOpacity }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span 
            className="hero-pill"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            Loan planning
          </motion.span>
          
          <motion.h1
            className="hero-headline"
            variants={headlineVariants}
            initial="hidden"
            animate="visible"
          >
            {headline.split('').map((char, index) => (
              <motion.span
                key={index}
                className="letter"
                variants={letterVariants}
                style={{
                  display: char === ' ' ? 'inline' : 'inline-block',
                  minWidth: char === ' ' ? '0.25em' : 'auto',
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Compare eligibility, EMI options, documents, and bank offers in one clean view.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link className="button button-primary" to="/calculator">
              Get started
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-proof"
          style={{ y: trustY, opacity: trustOpacity }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="proof-stack" aria-hidden="true">
            {proofFaces.map((face, index) => (
              <span key={face} style={{ '--avatar-index': index }}>
                {face}
              </span>
            ))}
          </div>
          <strong>Trusted by borrowers, founders and families</strong>
        </motion.div>

        <motion.div
          className="hero-visual"
          style={{ y: visualY, scale: visualScale, borderRadius: visualRadius }}
          initial={{ opacity: 0, y: 72, scale: 0.9 }}
          animate={{ opacity: 1, y: 42, scale: 0.92 }}
          transition={{ duration: 0.9, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={heroDashboardImage}
            alt="Loan eligibility and EMI planning dashboard"
            fetchPriority="high"
            decoding="async"
          />
        </motion.div>

        <div className="partner-strip" aria-label="Bank and NBFC partners">
          <div className="partner-track">
            {[...partners, ...partners].map((partner, index) => (
              <strong key={`${partner}-${index}`}>{partner}</strong>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

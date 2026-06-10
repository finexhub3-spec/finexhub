import { motion } from 'framer-motion';
import './LoanFAQ.css';

const faqs = [
  [
    'What services does FinEx Hub provide?',
    'We offer a comprehensive suite of financial solutions including Loans (Home, LAP, Business, Personal, Education, and Vehicle), Wealth Management (Fixed Deposits, Recurring Deposits), Mutual Funds (Child Education, Retirement Planning), and Insurance (Health, Life, Vehicle).'
  ],
  [
    'How do I start investing or applying for a loan?',
    'You can start by submitting an online inquiry or application via our website. Our certified financial advisors will review your profile and match you with the best rates or investment schemes within 24 hours.'
  ],
  [
    'Is consultation free of charge?',
    'Yes, our initial assessment, eligibility checks, and investment suggestions are completely free. We guide you through the process with transparent details and zero hidden charges.'
  ],
  [
    'Which banks and financial institutions do you partner with?',
    'We work with over 30 leading public/private sector banks, NBFCs, mutual fund houses, and top-tier insurance providers in India to secure optimal terms for you.'
  ]
];

function LoanFAQ() {
  return (
    <section className="section faq-section">
      <motion.div
        className="section-head readable-head faq-head"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="eyebrow">FAQ</span>
        <h2>Questions before you begin.</h2>
      </motion.div>

      <div className="faq-list">
        {faqs.map(([question, answer], index) => (
          <motion.details
            key={question}
            className="faq-item"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <summary>{question}</summary>
            <p>{answer}</p>
          </motion.details>
        ))}
      </div>
    </section>
  );
}

export default LoanFAQ;

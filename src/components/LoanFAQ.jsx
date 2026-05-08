import { motion } from 'framer-motion';
import './LoanFAQ.css';

const faqs = [
  ['Which loan can I apply for?', 'Home, personal, business, vehicle, and loan against property options are supported.'],
  ['How fast can I get guidance?', 'Most profile reviews can be discussed within 24 to 48 hours after basic details are shared.'],
  ['Do I need all documents first?', 'No. You can begin with a profile check and then prepare documents based on the selected lender.'],
  ['Can EMI be planned before applying?', 'Yes. Use the EMI calculator to test amount, tenure, and rate before moving forward.'],
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
        <h2>Questions before you apply.</h2>
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

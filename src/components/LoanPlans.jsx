import { motion } from 'framer-motion';
import './LoanPlans.css';

const plans = [
  {
    name: 'Starter Check',
    price: 'Free',
    description: 'For borrowers who want a first eligibility and EMI direction.',
    features: ['Profile review', 'Basic EMI estimate', 'Loan category guidance'],
  },
  {
    name: 'Application Assist',
    price: 'Guided',
    description: 'For applicants who want document support and lender comparison.',
    features: ['Bank/NBFC matching', 'Document checklist', 'Application follow-up'],
    featured: true,
  },
  {
    name: 'Business Desk',
    price: 'Custom',
    description: 'For founders and owners planning larger funding requirements.',
    features: ['MSME and working capital review', 'Collateral planning', 'Priority consultation'],
  },
];

function LoanPlans() {
  return (
    <section className="section plans-section" id="plans">
      <motion.div
        className="section-head readable-head plans-head"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <span className="eyebrow">Choose your track</span>
        <h2>Start small or get guided end to end.</h2>
        <p>Pick the level of support that matches where you are in the loan journey.</p>
      </motion.div>

      <div className="plans-grid">
        {plans.map((plan, index) => (
          <motion.article
            className={`plan-card ${plan.featured ? 'featured' : ''}`}
            key={plan.name}
            initial={{ opacity: 0, y: 34, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: index * 0.09, ease: 'easeOut' }}
          >
            <span>{plan.name}</span>
            <strong>{plan.price}</strong>
            <p>{plan.description}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default LoanPlans;

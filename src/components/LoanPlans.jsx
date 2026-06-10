import { motion } from 'framer-motion';
import './LoanPlans.css';

const plans = [
  {
    name: 'Retail Services Desk',
    price: 'Loans & Cover',
    description: 'For individuals seeking housing, vehicle, education loans or personal insurance.',
    features: ['Home & personal loan mapping', 'Health & vehicle insurance plans', 'Eligibility assessment'],
  },
  {
    name: 'Wealth Advisory Desk',
    price: 'Grow & Secure',
    description: 'For families planning long-term mutual fund goals and deposit portfolios.',
    features: ['Child education planning SIPs', 'Retirement corpus building', 'FD / RD yield maximization'],
    featured: true,
  },
  {
    name: 'Corporate Desk',
    price: 'SME Solutions',
    description: 'For business owners seeking expansion capital and property mortgage advisory.',
    features: ['MSME working capital review', 'Loan against property options', 'Commercial assets planning'],
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
        <span className="eyebrow">Our Segment Expertise</span>
        <h2>Personalized financial solutions for everyone.</h2>
        <p>Select your segment to explore how our specialized advisors can guide your journey.</p>
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

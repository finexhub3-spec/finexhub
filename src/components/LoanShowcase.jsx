import { motion } from 'framer-motion';
import './LoanShowcase.css';

const features = [
  {
    eyebrow: 'Eligibility overview',
    title: 'See where your loan profile stands before applying.',
    body: 'Review estimated eligibility, tenure comfort, and lender fit in a clean approval snapshot.',
    metric: '92%',
    label: 'Profile match',
    bars: [78, 64, 88],
  },
  {
    eyebrow: 'Documents & checks',
    title: 'Know what is ready and what still needs attention.',
    body: 'Track KYC, income proof, bank statements, property papers, and business documents before submission.',
    metric: '7/9',
    label: 'Docs ready',
    bars: [92, 74, 52],
  },
  {
    eyebrow: 'EMI progress',
    title: 'Plan your monthly commitment with more confidence.',
    body: 'Compare loan amount, rate, and tenure choices so the final EMI fits your cash flow.',
    metric: 'Rs 28k',
    label: 'Estimated EMI',
    bars: [58, 82, 69],
  },
];

function LoanShowcase() {
  return (
    <section className="section showcase-section">
      {features.map((feature, index) => (
        <motion.article
          className="showcase-row"
          key={feature.title}
          initial={{ opacity: 0, y: 46 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.72, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="showcase-copy">
            <span className="eyebrow">{feature.eyebrow}</span>
            <h2>{feature.title}</h2>
            <p>{feature.body}</p>
          </div>

          <motion.div
            className="showcase-visual"
            initial={{ opacity: 0, scale: 0.96, rotateX: 8 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="visual-header">
              <span />
              <span />
              <span />
            </div>
            <div className="visual-metric">
              <small>{feature.label}</small>
              <strong>{feature.metric}</strong>
            </div>
            <div className="visual-chart">
              {feature.bars.map((bar, barIndex) => (
                <i key={`${feature.title}-${bar}`} style={{ height: `${bar}%`, animationDelay: `${barIndex * 0.18}s` }} />
              ))}
            </div>
            <div className="visual-list">
              <span>Bank match</span>
              <b>Strong</b>
              <span>Risk check</span>
              <b>Low</b>
              <span>Next step</span>
              <b>Apply</b>
            </div>
          </motion.div>
        </motion.article>
      ))}
    </section>
  );
}

export default LoanShowcase;

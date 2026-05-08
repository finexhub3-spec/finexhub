import { motion } from 'framer-motion';
import './Process.css';

const steps = [
  { title: 'Discover', description: 'Search the right loan experience for your goals.', icon: '01' },
  { title: 'Apply', description: 'Submit a clean application with quick verification.', icon: '02' },
  { title: 'Approve', description: 'Get approval guidance with clear next steps.', icon: '03' },
  { title: 'Disburse', description: 'Move funds quickly to the account you choose.', icon: '04' },
];

function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="section-head readable-head">
        <span className="eyebrow">Workflow</span>
        <h2>A simple path from profile to disbursement.</h2>
      </div>
      <div className="process-lines">
        <div className="process-track" />
        {steps.map((step, index) => (
          <motion.article
            key={step.title}
            className="process-step"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="step-index">{step.icon}</div>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Process;

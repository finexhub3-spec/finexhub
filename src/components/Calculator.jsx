import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import './Calculator.css';

function formatMoney(value) {
  return value.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
}

function Calculator() {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(8.5);
  const [months, setMonths] = useState(60);

  const monthlyPayment = useMemo(() => {
    const principal = Number(amount);
    const monthlyRate = Number(rate) / 100 / 12;
    const factor = Math.pow(1 + monthlyRate, months);
    const payment = monthlyRate === 0 ? principal / months : (principal * monthlyRate * factor) / (factor - 1);
    return payment || 0;
  }, [amount, rate, months]);

  return (
    <section className="section calculator-section" id="calculator">
      <div className="glass-card calculator-card">
        <div className="section-head">
          <span className="eyebrow">EMI calculator</span>
          <h2>Plan the number before you apply.</h2>
        </div>
        <div className="slider-grid">
          <div className="slider-row">
            <label>Loan amount</label>
            <div className="slider-value">{formatMoney(amount)}</div>
            <input
              type="range"
              min="50000"
              max="10000000"
              step="50000"
              value={amount}
              onChange={(event) => setAmount(Number(event.target.value))}
            />
          </div>
          <div className="slider-row">
            <label>Interest rate</label>
            <div className="slider-value">{rate.toFixed(1)}%</div>
            <input
              type="range"
              min="5"
              max="16"
              step="0.1"
              value={rate}
              onChange={(event) => setRate(Number(event.target.value))}
            />
          </div>
          <div className="slider-row">
            <label>Tenure</label>
            <div className="slider-value">{months} months</div>
            <input
              type="range"
              min="12"
              max="120"
              step="6"
              value={months}
              onChange={(event) => setMonths(Number(event.target.value))}
            />
          </div>
        </div>
        <motion.div
          className="emi-result"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <p>Estimated monthly payment</p>
          <strong>{formatMoney(Math.round(monthlyPayment))}</strong>
        </motion.div>
      </div>
    </section>
  );
}

export default Calculator;

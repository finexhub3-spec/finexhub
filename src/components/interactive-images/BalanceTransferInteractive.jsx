import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BalanceTransferInteractive = () => {
  const [currentLoan, setCurrentLoan] = useState(500000);
  const [currentRate, setCurrentRate] = useState(15);
  const [newRate, setNewRate] = useState(12);
  const [tenure, setTenure] = useState(5);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [transferStep, setTransferStep] = useState(0);

  // EMI Calculations
  const calculateEMI = (principal, rate, time) => {
    const monthlyRate = rate / (12 * 100);
    const months = time * 12;
    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(emi);
  };

  const currentEMI = calculateEMI(currentLoan, currentRate, tenure);
  const newEMI = calculateEMI(currentLoan, newRate, tenure);
  const monthlySavings = currentEMI - newEMI;
  const annualSavings = monthlySavings * 12;

  const transferSteps = [
    { label: 'Apply Online', status: 'completed', icon: '📝' },
    { label: 'Document Verification', status: 'completed', icon: '✅' },
    { label: 'Bank Approval', status: 'in-progress', icon: '🏦' },
    { label: 'Fund Transfer', status: 'pending', icon: '💰' }
  ];

  const handleStepClick = (stepIndex) => {
    setTransferStep(stepIndex);
  };

  return (
    <div className="interactive-image-container" style={{ width: '400px', height: '300px', position: 'relative' }}>
      <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="transferGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ED8936', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#DD6B20', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#transferGradient)"/>

        {/* Transfer Flow Visualization */}
        <motion.path
          d="M50 100 Q200 50 350 100 Q200 150 50 100"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />

        {/* Bank Icons */}
        <motion.circle
          cx="80" cy="100" r="25"
          fill="#E53E3E"
          stroke="#FFFFFF"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <text x="80" y="107" textAnchor="middle" fill="#FFFFFF" fontSize="16">🏦</text>
        <text x="80" y="125" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">Current</text>

        <motion.circle
          cx="320" cy="100" r="25"
          fill="#48BB78"
          stroke="#FFFFFF"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <text x="320" y="107" textAnchor="middle" fill="#FFFFFF" fontSize="16">🏦</text>
        <text x="320" y="125" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">New</text>

        {/* Transfer Arrow */}
        <motion.path
          d="M105 100 L295 100 L285 90 M295 100 L285 110"
          stroke="#FFFFFF"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Money Transfer Animation */}
        <motion.circle
          cx="200" cy="100" r="8"
          fill="#FFD700"
          stroke="#FFFFFF"
          strokeWidth="1"
          initial={{ x: -50, opacity: 0 }}
          animate={{
            x: transferStep >= 2 ? 50 : 0,
            opacity: transferStep >= 2 ? 1 : 0.5
          }}
          transition={{ duration: 1, delay: transferStep >= 2 ? 0.5 : 0 }}
        />
        <text x="200" y="105" textAnchor="middle" fill="#000" fontSize="10" fontWeight="bold">₹</text>

        {/* Interactive Sliders */}
        <text x="20" y="170" fill="#FFFFFF" fontSize="10" fontWeight="bold">Current Rate: {currentRate}%</text>
        <line x1="20" y1="180" x2="120" y2="180" stroke="#E2E8F0" strokeWidth="2"/>
        <motion.circle
          cx={20 + ((currentRate - 10) / (25 - 10)) * 100}
          cy="180" r="6"
          fill="#E53E3E"
          stroke="#FFFFFF"
          strokeWidth="1"
          drag="x"
          dragConstraints={{ left: 20, right: 120 }}
          onDrag={(event, info) => {
            const newRate = Math.round(10 + (info.point.x - 20) / 100 * (25 - 10));
            setCurrentRate(Math.max(10, Math.min(25, newRate)));
          }}
          style={{ cursor: 'pointer' }}
        />

        <text x="140" y="170" fill="#FFFFFF" fontSize="10" fontWeight="bold">New Rate: {newRate}%</text>
        <line x1="140" y1="180" x2="240" y2="180" stroke="#E2E8F0" strokeWidth="2"/>
        <motion.circle
          cx={140 + ((newRate - 8) / (18 - 8)) * 100}
          cy="180" r="6"
          fill="#48BB78"
          stroke="#FFFFFF"
          strokeWidth="1"
          drag="x"
          dragConstraints={{ left: 140, right: 240 }}
          onDrag={(event, info) => {
            const newRate = Math.round(8 + (info.point.x - 140) / 100 * (18 - 8));
            setNewRate(Math.max(8, Math.min(18, newRate)));
          }}
          style={{ cursor: 'pointer' }}
        />

        {/* Savings Display */}
        <motion.rect
          x="260" y="160" width="120" height="60"
          fill="#FFFFFF"
          stroke="#2D3748"
          rx="8"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
        <text x="320" y="175" textAnchor="middle" fill="#2D3748" fontSize="12" fontWeight="bold">Monthly Savings</text>
        <motion.text
          x="320" y="195"
          textAnchor="middle"
          fill="#48BB78"
          fontSize="14"
          fontWeight="bold"
          key={monthlySavings}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          ₹{monthlySavings.toLocaleString()}
        </motion.text>
        <text x="320" y="210" textAnchor="middle" fill="#4A5568" fontSize="10">Annual: ₹{annualSavings.toLocaleString()}</text>

        {/* Progress Steps */}
        {transferSteps.map((step, index) => (
          <motion.g key={index}>
            <motion.circle
              cx={50 + index * 75} cy="250" r="15"
              fill={
                index <= transferStep
                  ? (index === transferStep ? '#ED8936' : '#48BB78')
                  : '#E2E8F0'
              }
              stroke="#FFFFFF"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => handleStepClick(index)}
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHoveredElement(`step${index}`)}
              onMouseLeave={() => setHoveredElement(null)}
            />
            <text x={50 + index * 75} y="255" textAnchor="middle" fill="#FFFFFF" fontSize="12">{step.icon}</text>
            <text x={50 + index * 75} y="275" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">
              {step.label.split(' ')[0]}
            </text>
          </motion.g>
        ))}

        {/* Title */}
        <text x="200" y="290" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">Balance Transfer Calculator</text>

        {/* Tooltip */}
        {hoveredElement && hoveredElement.startsWith('step') && (
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <rect x="150" y="50" width="100" height="25" fill="#2D3748" rx="5"/>
            <text
              x="200" y="65"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="11"
              fontWeight="bold"
            >
              {transferSteps[parseInt(hoveredElement.replace('step', ''))]?.label}
            </text>
          </motion.g>
        )}

        {/* EMI Comparison */}
        <motion.rect
          x="20" y="30" width="80" height="30"
          fill="#E53E3E"
          stroke="#FFFFFF"
          rx="5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <text x="60" y="45" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">Current EMI</text>
        <text x="60" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">₹{currentEMI.toLocaleString()}</text>

        <motion.rect
          x="110" y="30" width="80" height="30"
          fill="#48BB78"
          stroke="#FFFFFF"
          rx="5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <text x="150" y="45" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">New EMI</text>
        <text x="150" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">₹{newEMI.toLocaleString()}</text>
      </svg>
    </div>
  );
};

export default BalanceTransferInteractive;
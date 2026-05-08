import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EMIEligibilityInteractive = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(12);
  const [tenure, setTenure] = useState(5);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [selectedTab, setSelectedTab] = useState('calculator');

  // EMI Calculation
  const calculateEMI = (principal, rate, time) => {
    const monthlyRate = rate / (12 * 100);
    const months = time * 12;
    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(emi);
  };

  const emi = calculateEMI(loanAmount, interestRate, tenure);
  const totalAmount = emi * tenure * 12;
  const totalInterest = totalAmount - loanAmount;

  const eligibilityCriteria = [
    { label: 'Age', value: '21-65 years', status: 'eligible' },
    { label: 'Income', value: '₹25,000/month', status: 'eligible' },
    { label: 'Credit Score', value: '650+', status: 'eligible' },
    { label: 'Employment', value: 'Salaried/Self-employed', status: 'eligible' }
  ];

  return (
    <div className="interactive-image-container" style={{ width: '400px', height: '300px', position: 'relative' }}>
      <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="emiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#4299E1', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#3182CE', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#emiGradient)"/>

        {/* Tab Navigation */}
        <motion.rect
          x="20" y="20" width="80" height="25"
          fill={selectedTab === 'calculator' ? '#63B3ED' : '#4299E1'}
          stroke="#FFFFFF"
          strokeWidth="1"
          rx="5"
          onClick={() => setSelectedTab('calculator')}
          style={{ cursor: 'pointer' }}
          initial={{ scale: 1 }}
          animate={{ scale: selectedTab === 'calculator' ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
        />
        <text x="60" y="35" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">Calculator</text>

        <motion.rect
          x="110" y="20" width="80" height="25"
          fill={selectedTab === 'eligibility' ? '#63B3ED' : '#4299E1'}
          stroke="#FFFFFF"
          strokeWidth="1"
          rx="5"
          onClick={() => setSelectedTab('eligibility')}
          style={{ cursor: 'pointer' }}
          initial={{ scale: 1 }}
          animate={{ scale: selectedTab === 'eligibility' ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
        />
        <text x="150" y="35" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">Eligibility</text>

        {selectedTab === 'calculator' && (
          <>
            {/* Loan Amount Slider */}
            <text x="50" y="70" fill="#FFFFFF" fontSize="12" fontWeight="bold">Loan Amount: ₹{loanAmount.toLocaleString()}</text>
            <line x1="50" y1="80" x2="350" y2="80" stroke="#E2E8F0" strokeWidth="3"/>
            <motion.circle
              cx={50 + ((loanAmount - 100000) / (2000000 - 100000)) * 300}
              cy="80" r="8"
              fill="#48BB78"
              stroke="#FFFFFF"
              strokeWidth="2"
              drag="x"
              dragConstraints={{ left: 50, right: 350 }}
              onDrag={(event, info) => {
                const newAmount = Math.round(100000 + (info.point.x - 50) / 300 * (2000000 - 100000));
                setLoanAmount(Math.max(100000, Math.min(2000000, newAmount)));
              }}
              style={{ cursor: 'pointer' }}
            />

            {/* Interest Rate */}
            <text x="50" y="110" fill="#FFFFFF" fontSize="12" fontWeight="bold">Interest Rate: {interestRate}%</text>
            <line x1="50" y1="120" x2="350" y2="120" stroke="#E2E8F0" strokeWidth="3"/>
            <motion.circle
              cx={50 + ((interestRate - 8) / (20 - 8)) * 300}
              cy="120" r="8"
              fill="#ED8936"
              stroke="#FFFFFF"
              strokeWidth="2"
              drag="x"
              dragConstraints={{ left: 50, right: 350 }}
              onDrag={(event, info) => {
                const newRate = Math.round(8 + (info.point.x - 50) / 300 * (20 - 8));
                setInterestRate(Math.max(8, Math.min(20, newRate)));
              }}
              style={{ cursor: 'pointer' }}
            />

            {/* Tenure */}
            <text x="50" y="150" fill="#FFFFFF" fontSize="12" fontWeight="bold">Tenure: {tenure} years</text>
            <line x1="50" y1="160" x2="350" y2="160" stroke="#E2E8F0" strokeWidth="3"/>
            <motion.circle
              cx={50 + ((tenure - 1) / (30 - 1)) * 300}
              cy="160" r="8"
              fill="#9F7AEA"
              stroke="#FFFFFF"
              strokeWidth="2"
              drag="x"
              dragConstraints={{ left: 50, right: 350 }}
              onDrag={(event, info) => {
                const newTenure = Math.round(1 + (info.point.x - 50) / 300 * (30 - 1));
                setTenure(Math.max(1, Math.min(30, newTenure)));
              }}
              style={{ cursor: 'pointer' }}
            />

            {/* EMI Display */}
            <motion.rect
              x="150" y="180" width="100" height="50"
              fill="#FFFFFF"
              stroke="#2D3748"
              rx="8"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <text x="200" y="195" textAnchor="middle" fill="#2D3748" fontSize="14" fontWeight="bold">Monthly EMI</text>
            <motion.text
              x="200" y="215"
              textAnchor="middle"
              fill="#48BB78"
              fontSize="16"
              fontWeight="bold"
              key={emi}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              ₹{emi.toLocaleString()}
            </motion.text>

            {/* Breakdown */}
            <text x="50" y="250" fill="#FFFFFF" fontSize="10">Total Amount: ₹{totalAmount.toLocaleString()}</text>
            <text x="50" y="265" fill="#FFFFFF" fontSize="10">Interest: ₹{totalInterest.toLocaleString()}</text>
            <text x="250" y="250" fill="#FFFFFF" fontSize="10">Principal: ₹{loanAmount.toLocaleString()}</text>
          </>
        )}

        {selectedTab === 'eligibility' && (
          <>
            {/* Eligibility Criteria */}
            {eligibilityCriteria.map((criteria, index) => (
              <motion.g key={index}>
                <motion.rect
                  x="50" y={70 + index * 35} width="300" height="25"
                  fill={criteria.status === 'eligible' ? '#48BB78' : '#E53E3E'}
                  stroke="#FFFFFF"
                  strokeWidth="1"
                  rx="5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredElement(`criteria${index}`)}
                  onMouseLeave={() => setHoveredElement(null)}
                />
                <text x="60" y={85 + index * 35} fill="#FFFFFF" fontSize="12" fontWeight="bold">
                  {criteria.label}: {criteria.value}
                </text>
                <circle cx="330" cy={82 + index * 35} r="6" fill="#FFFFFF"/>
                <path
                  d={criteria.status === 'eligible' ? "M325 78 L328 81 L335 74" : "M325 78 L335 78 M330 78 L330 88"}
                  stroke={criteria.status === 'eligible' ? '#48BB78' : '#E53E3E'}
                  strokeWidth="2"
                  fill="none"
                />
              </motion.g>
            ))}

            {/* Eligibility Status */}
            <motion.rect
              x="150" y="240" width="100" height="30"
              fill="#48BB78"
              stroke="#FFFFFF"
              rx="15"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
            <text x="200" y="258" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Eligible</text>
          </>
        )}

        {/* Title */}
        <text x="200" y="290" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">EMI Eligibility Calculator</text>

        {/* Tooltip */}
        {hoveredElement && hoveredElement.startsWith('criteria') && (
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <rect x="120" y="50" width="160" height="25" fill="#2D3748" rx="5"/>
            <text
              x="200" y="65"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="11"
              fontWeight="bold"
            >
              {eligibilityCriteria[parseInt(hoveredElement.replace('criteria', ''))]?.label} Check
            </text>
          </motion.g>
        )}
      </svg>
    </div>
  );
};

export default EMIEligibilityInteractive;
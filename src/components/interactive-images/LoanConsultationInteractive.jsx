import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LoanConsultationInteractive = () => {
  const [hoveredElement, setHoveredElement] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [consultationStep, setConsultationStep] = useState(0);

  const features = [
    { id: 'profile', label: 'Profile Review', color: '#FFFFFF', x: 200, y: 100 },
    { id: 'products', label: 'Product Matching', color: '#4299E1', x: 160, y: 140 },
    { id: 'readiness', label: 'Application Ready', color: '#48BB78', x: 240, y: 140 },
    { id: 'advisor', label: 'Expert Advisor', color: '#ED8936', x: 200, y: 180 }
  ];

  const consultationSteps = [
    'Initial Assessment',
    'Profile Analysis',
    'Product Recommendation',
    'Application Guidance'
  ];

  const handleAdvisorClick = () => {
    setConsultationStep(prev => (prev + 1) % consultationSteps.length);
  };

  return (
    <div className="interactive-image-container" style={{ width: '400px', height: '300px', position: 'relative' }}>
      <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="consultationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#4299E1', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#3182CE', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#consultationGradient)"/>

        {/* Interactive Profile/Document Stack */}
        <motion.rect
          x="180" y="80" width="40" height="50"
          fill={hoveredElement === 'profile' ? '#F7FAFC' : '#FFFFFF'}
          stroke="#2D3748"
          strokeWidth="2"
          rx="3"
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'profile' ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('profile')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'profile' ? null : 'profile')}
          style={{ cursor: 'pointer' }}
        />

        {/* Document lines */}
        <motion.line
          x1="185" y1="95" x2="215" y2="95"
          stroke="#E2E8F0"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        <motion.line
          x1="185" y1="105" x2="210" y2="105"
          stroke="#E2E8F0"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />

        {/* Interactive Product Icons */}
        <motion.circle
          cx="160" cy="140" r="15"
          fill={hoveredElement === 'products' ? '#63B3ED' : '#4299E1'}
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'products' ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('products')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'products' ? null : 'products')}
          style={{ cursor: 'pointer' }}
        />

        <motion.circle
          cx="200" cy="140" r="15"
          fill={hoveredElement === 'products' ? '#63B3ED' : '#4299E1'}
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'products' ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('products')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'products' ? null : 'products')}
          style={{ cursor: 'pointer' }}
        />

        <motion.circle
          cx="240" cy="140" r="15"
          fill={hoveredElement === 'readiness' ? '#68D391' : '#48BB78'}
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'readiness' ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('readiness')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'readiness' ? null : 'readiness')}
          style={{ cursor: 'pointer' }}
        />

        {/* Interactive Advisor */}
        <motion.circle
          cx="200" cy="180" r="25"
          fill={hoveredElement === 'advisor' ? '#F6AD55' : '#ED8936'}
          stroke="#2D3748"
          strokeWidth="3"
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'advisor' ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('advisor')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={handleAdvisorClick}
          style={{ cursor: 'pointer' }}
        />

        {/* Advisor face */}
        <circle cx="195" cy="175" r="2" fill="#FFFFFF"/>
        <circle cx="205" cy="175" r="2" fill="#FFFFFF"/>
        <path d="M 195 182 Q 200 185 205 182" stroke="#FFFFFF" strokeWidth="1" fill="none"/>

        {/* Consultation Step Indicator */}
        <motion.rect
          x="150" y="220" width="100" height="25"
          fill="#FFFFFF"
          stroke="#2D3748"
          rx="12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.text
          x="200" y="237"
          textAnchor="middle"
          fill="#2D3748"
          fontSize="12"
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {consultationSteps[consultationStep]}
        </motion.text>

        {/* Progress dots */}
        {[0, 1, 2, 3].map((i) => (
          <motion.circle
            key={i}
            cx={160 + i * 20} cy="250" r="3"
            fill={i <= consultationStep ? '#48BB78' : '#E2E8F0'}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          />
        ))}

        <text x="200" y="270" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold">Loan Consultation</text>

        {/* Tooltip */}
        {hoveredElement && (
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <rect
              x={features.find(f => f.id === hoveredElement)?.x - 45 || 155}
              y={features.find(f => f.id === hoveredElement)?.y - 40 || 80}
              width="90"
              height="25"
              fill="#2D3748"
              rx="5"
            />
            <text
              x={features.find(f => f.id === hoveredElement)?.x || 200}
              y={features.find(f => f.id === hoveredElement)?.y - 25 || 95}
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="11"
              fontWeight="bold"
            >
              {features.find(f => f.id === hoveredElement)?.label}
            </text>
          </motion.g>
        )}
      </svg>

      {/* Feature Details Panel */}
      {selectedFeature && (
        <motion.div
          className="feature-details"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '10px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            maxWidth: '150px',
            fontSize: '12px'
          }}
        >
          <h4 style={{ margin: '0 0 5px 0', color: '#2D3748' }}>
            {features.find(f => f.id === selectedFeature)?.label}
          </h4>
          <p style={{ margin: 0, color: '#4A5568' }}>
            {selectedFeature === 'profile' && 'Comprehensive financial profile analysis'}
            {selectedFeature === 'products' && 'Matching loans to your specific needs'}
            {selectedFeature === 'readiness' && 'Prepare complete documentation'}
            {selectedFeature === 'advisor' && 'Click to see consultation progress'}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default LoanConsultationInteractive;
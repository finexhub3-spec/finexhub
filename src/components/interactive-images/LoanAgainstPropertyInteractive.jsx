import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LoanAgainstPropertyInteractive = () => {
  const [hoveredElement, setHoveredElement] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [showValue, setShowValue] = useState(false);

  const features = [
    { id: 'document', label: 'Property Documents', color: '#FFFFFF', x: 200, y: 130 },
    { id: 'house', label: 'Your Property', color: '#4A90E2', x: 200, y: 115 },
    { id: 'key', label: 'Loan Access', color: '#F6E05E', x: 240, y: 150 },
    { id: 'money1', label: 'Higher Amount', color: '#48BB78', x: 140, y: 150 },
    { id: 'money2', label: 'Lower Interest', color: '#38A169', x: 142, y: 147 },
    { id: 'money3', label: 'Longer Tenure', color: '#2F855A', x: 144, y: 144 }
  ];

  const handleDocumentClick = () => {
    setShowValue(!showValue);
  };

  return (
    <div className="interactive-image-container" style={{ width: '400px', height: '300px', position: 'relative' }}>
      <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="propertyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#E53E3E', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#C53030', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#propertyGradient)"/>

        {/* Interactive Property Document */}
        <motion.rect
          x="120" y="80" width="160" height="120"
          fill={hoveredElement === 'document' ? '#F7FAFC' : '#FFFFFF'}
          stroke="#2D3748"
          strokeWidth="3"
          rx="5"
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'document' ? 1.02 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('document')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={handleDocumentClick}
          style={{ cursor: 'pointer' }}
        />

        {/* Document lines */}
        <motion.line
          x1="130" y1="100" x2="270" y2="100"
          stroke="#E2E8F0"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        <motion.line
          x1="130" y1="120" x2="250" y2="120"
          stroke="#E2E8F0"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />

        <motion.line
          x1="130" y1="140" x2="260" y2="140"
          stroke="#E2E8F0"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />

        {/* Interactive House Icon on Document */}
        <motion.polygon
          points="200,110 220,110 220,130 200,130"
          fill={hoveredElement === 'house' ? '#63B3ED' : '#4A90E2'}
          stroke="#2C5282"
          strokeWidth="1"
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'house' ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('house')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'house' ? null : 'house')}
          style={{ cursor: 'pointer' }}
        />

        <motion.polygon
          points="190,110 210,95 230,110"
          fill={hoveredElement === 'house' ? '#F56565' : '#E53E3E'}
          stroke="#C53030"
          strokeWidth="1"
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'house' ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('house')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'house' ? null : 'house')}
          style={{ cursor: 'pointer' }}
        />

        {/* Interactive Key */}
        <motion.circle
          cx="240" cy="150" r="8"
          fill={hoveredElement === 'key' ? '#F6AD55' : '#F6E05E'}
          stroke="#D69E2E"
          strokeWidth="2"
          initial={{ rotate: 0 }}
          animate={{ rotate: hoveredElement === 'key' ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setHoveredElement('key')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'key' ? null : 'key')}
          style={{ cursor: 'pointer' }}
        />

        <motion.rect
          x="240" y="142" width="20" height="4"
          fill={hoveredElement === 'key' ? '#F6AD55' : '#F6E05E'}
          initial={{ rotate: 0 }}
          animate={{ rotate: hoveredElement === 'key' ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setHoveredElement('key')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'key' ? null : 'key')}
          style={{ cursor: 'pointer' }}
        />

        {/* Interactive Money Stack */}
        <motion.rect
          x="140" y="150" width="25" height="3"
          fill={hoveredElement === 'money1' ? '#68D391' : '#48BB78'}
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'money1' ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('money1')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'money1' ? null : 'money1')}
          style={{ cursor: 'pointer' }}
        />

        <motion.rect
          x="142" y="147" width="21" height="3"
          fill={hoveredElement === 'money2' ? '#9AE6B4' : '#38A169'}
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'money2' ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('money2')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'money2' ? null : 'money2')}
          style={{ cursor: 'pointer' }}
        />

        <motion.rect
          x="144" y="144" width="17" height="3"
          fill={hoveredElement === 'money3' ? '#C6F6D5' : '#2F855A'}
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'money3' ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('money3')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'money3' ? null : 'money3')}
          style={{ cursor: 'pointer' }}
        />

        {/* Value Display */}
        {showValue && (
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <rect x="150" y="200" width="100" height="30" fill="#FFFFFF" stroke="#2D3748" rx="5"/>
            <text x="200" y="220" textAnchor="middle" fill="#2D3748" fontSize="16" fontWeight="bold">
              Up to 70% of Property Value
            </text>
          </motion.g>
        )}

        <text x="200" y="270" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold">Loan Against Property</text>

        {/* Tooltip */}
        {hoveredElement && (
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <rect
              x={features.find(f => f.id === hoveredElement)?.x - 50 || 150}
              y={features.find(f => f.id === hoveredElement)?.y - 40 || 80}
              width="100"
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
            {selectedFeature === 'document' && 'Click to see loan-to-value ratio'}
            {selectedFeature === 'house' && 'Use residential or commercial property'}
            {selectedFeature === 'key' && 'Unlock funds without selling property'}
            {selectedFeature === 'money1' && 'Higher loan amounts available'}
            {selectedFeature === 'money2' && 'Lower interest rates than unsecured loans'}
            {selectedFeature === 'money3' && 'Longer repayment periods'}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default LoanAgainstPropertyInteractive;
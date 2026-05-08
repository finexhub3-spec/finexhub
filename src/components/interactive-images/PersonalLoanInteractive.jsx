import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PersonalLoanInteractive = () => {
  const [hoveredElement, setHoveredElement] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [moneyAmount, setMoneyAmount] = useState(50000);

  const features = [
    { id: 'person', label: 'Quick Access', color: '#FFFFFF', x: 200, y: 70 },
    { id: 'moneybag', label: 'Instant Cash', color: '#F6E05E', x: 200, y: 190 },
    { id: 'dollar1', label: 'Flexible Amount', color: '#48BB78', x: 195, y: 175 },
    { id: 'dollar2', label: 'Fast Approval', color: '#48BB78', x: 205, y: 175 },
    { id: 'dollar3', label: 'No Collateral', color: '#48BB78', x: 200, y: 185 }
  ];

  const handleMoneyClick = () => {
    setMoneyAmount(prev => prev === 50000 ? 100000 : prev === 100000 ? 200000 : 50000);
  };

  return (
    <div className="interactive-image-container" style={{ width: '400px', height: '300px', position: 'relative' }}>
      <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="personalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#48BB78', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#38A169', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#personalGradient)"/>

        {/* Interactive Person */}
        <motion.circle
          cx="200" cy="60" r="25"
          fill={hoveredElement === 'person' ? '#F7FAFC' : '#FFFFFF'}
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'person' ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('person')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'person' ? null : 'person')}
          style={{ cursor: 'pointer' }}
        />

        <motion.rect
          x="185" y="85" width="30" height="40"
          fill={hoveredElement === 'person' ? '#F7FAFC' : '#FFFFFF'}
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'person' ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('person')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'person' ? null : 'person')}
          style={{ cursor: 'pointer' }}
        />

        {/* Interactive Money Bag */}
        <motion.ellipse
          cx="200" cy="180" rx="30" ry="20"
          fill={hoveredElement === 'moneybag' ? '#F6AD55' : '#F6E05E'}
          initial={{ scale: 1, y: 0 }}
          animate={{
            scale: hoveredElement === 'moneybag' ? 1.05 : 1,
            y: hoveredElement === 'moneybag' ? -5 : 0
          }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setHoveredElement('moneybag')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={handleMoneyClick}
          style={{ cursor: 'pointer' }}
        />

        <motion.rect
          x="185" y="160" width="30" height="20"
          fill={hoveredElement === 'moneybag' ? '#F6AD55' : '#F6E05E'}
          initial={{ scale: 1, y: 0 }}
          animate={{
            scale: hoveredElement === 'moneybag' ? 1.05 : 1,
            y: hoveredElement === 'moneybag' ? -5 : 0
          }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setHoveredElement('moneybag')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={handleMoneyClick}
          style={{ cursor: 'pointer' }}
        />

        {/* Animated Dollar Signs */}
        <motion.circle
          cx="195" cy="175" r="3"
          fill={hoveredElement === 'dollar1' ? '#68D391' : '#48BB78'}
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'dollar1' ? 1.2 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('dollar1')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'dollar1' ? null : 'dollar1')}
          style={{ cursor: 'pointer' }}
        />

        <motion.circle
          cx="205" cy="175" r="3"
          fill={hoveredElement === 'dollar2' ? '#68D391' : '#48BB78'}
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'dollar2' ? 1.2 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('dollar2')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'dollar2' ? null : 'dollar2')}
          style={{ cursor: 'pointer' }}
        />

        <motion.circle
          cx="200" cy="185" r="3"
          fill={hoveredElement === 'dollar3' ? '#68D391' : '#48BB78'}
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'dollar3' ? 1.2 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('dollar3')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'dollar3' ? null : 'dollar3')}
          style={{ cursor: 'pointer' }}
        />

        {/* Amount Display */}
        <motion.text
          x="200" y="220"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="Arial, sans-serif"
          fontSize="18"
          fontWeight="bold"
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'moneybag' ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        >
          ₹{moneyAmount.toLocaleString()}
        </motion.text>

        <text x="200" y="270" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold">Personal Loan</text>

        {/* Tooltip */}
        {hoveredElement && (
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <rect
              x={features.find(f => f.id === hoveredElement)?.x - 40 || 160}
              y={features.find(f => f.id === hoveredElement)?.y - 40 || 80}
              width="80"
              height="25"
              fill="#2D3748"
              rx="5"
            />
            <text
              x={features.find(f => f.id === hoveredElement)?.x || 200}
              y={features.find(f => f.id === hoveredElement)?.y - 25 || 95}
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="12"
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
            {selectedFeature === 'person' && 'Get funds in your account quickly'}
            {selectedFeature === 'moneybag' && 'Flexible amounts from ₹50K to ₹25L'}
            {selectedFeature === 'dollar1' && 'Choose amount that fits your needs'}
            {selectedFeature === 'dollar2' && 'Approval in 24-48 hours'}
            {selectedFeature === 'dollar3' && 'No property or asset required'}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default PersonalLoanInteractive;
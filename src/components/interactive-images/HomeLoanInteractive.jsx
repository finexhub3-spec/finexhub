import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HomeLoanInteractive = () => {
  const [hoveredElement, setHoveredElement] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    { id: 'roof', label: 'Roof Protection', color: '#E53E3E', x: 200, y: 30 },
    { id: 'house', label: 'Property Value', color: '#FFFFFF', x: 200, y: 120 },
    { id: 'door', label: 'Easy Access', color: '#2D3748', x: 190, y: 170 },
    { id: 'window1', label: 'Transparency', color: '#4299E1', x: 160, y: 130 },
    { id: 'window2', label: 'Clear Terms', color: '#4299E1', x: 220, y: 130 }
  ];

  return (
    <div className="interactive-image-container" style={{ width: '400px', height: '300px', position: 'relative' }}>
      <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="homeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#4A90E2', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#357ABD', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#homeGradient)"/>

        {/* Interactive House Elements */}
        <motion.polygon
          points="150,100 250,100 250,200 150,200"
          fill={hoveredElement === 'house' ? '#E2E8F0' : '#FFFFFF'}
          stroke="#2C5282"
          strokeWidth="3"
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'house' ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('house')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'house' ? null : 'house')}
          style={{ cursor: 'pointer' }}
        />

        <motion.polygon
          points="130,100 200,30 270,100"
          fill={hoveredElement === 'roof' ? '#F56565' : '#E53E3E'}
          stroke="#C53030"
          strokeWidth="3"
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'roof' ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('roof')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'roof' ? null : 'roof')}
          style={{ cursor: 'pointer' }}
        />

        <motion.rect
          x="190" y="150" width="20" height="50"
          fill={hoveredElement === 'door' ? '#4A5568' : '#2D3748'}
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'door' ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('door')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'door' ? null : 'door')}
          style={{ cursor: 'pointer' }}
        />

        <motion.rect
          x="160" y="120" width="20" height="20"
          fill={hoveredElement === 'window1' ? '#63B3ED' : '#4299E1'}
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'window1' ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('window1')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'window1' ? null : 'window1')}
          style={{ cursor: 'pointer' }}
        />

        <motion.rect
          x="220" y="120" width="20" height="20"
          fill={hoveredElement === 'window2' ? '#63B3ED' : '#4299E1'}
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'window2' ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('window2')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'window2' ? null : 'window2')}
          style={{ cursor: 'pointer' }}
        />

        <text x="200" y="270" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold">Home Loan</text>

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
            {selectedFeature === 'roof' && 'Long-term protection and stability'}
            {selectedFeature === 'house' && 'Build your dream home with flexible financing'}
            {selectedFeature === 'door' && 'Easy application process'}
            {selectedFeature === 'window1' && 'Clear loan terms and conditions'}
            {selectedFeature === 'window2' && 'Transparent fee structure'}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default HomeLoanInteractive;
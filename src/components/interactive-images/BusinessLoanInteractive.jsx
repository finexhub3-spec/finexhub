import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BusinessLoanInteractive = () => {
  const [hoveredElement, setHoveredElement] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [growthStage, setGrowthStage] = useState(0);

  const features = [
    { id: 'building', label: 'Business Growth', color: '#FFFFFF', x: 200, y: 140 },
    { id: 'window1', label: 'Working Capital', color: '#4299E1', x: 160, y: 130 },
    { id: 'window2', label: 'Expansion', color: '#4299E1', x: 180, y: 130 },
    { id: 'window3', label: 'Equipment', color: '#4299E1', x: 200, y: 130 },
    { id: 'window4', label: 'MSME Support', color: '#4299E1', x: 220, y: 130 },
    { id: 'chart', label: 'Growth Trajectory', color: '#FFFFFF', x: 100, y: 180 }
  ];

  const growthStages = [
    { points: '50,180 80,160 110,140', label: 'Startup' },
    { points: '50,180 80,160 110,140 140,120', label: 'Growth' },
    { points: '50,180 80,160 110,140 140,120 170,100', label: 'Scale' }
  ];

  const handleChartClick = () => {
    setGrowthStage(prev => (prev + 1) % growthStages.length);
  };

  return (
    <div className="interactive-image-container" style={{ width: '400px', height: '300px', position: 'relative' }}>
      <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="businessGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ED8936', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#DD6B20', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#businessGradient)"/>

        {/* Interactive Building */}
        <motion.rect
          x="150" y="120" width="100" height="80"
          fill={hoveredElement === 'building' ? '#F7FAFC' : '#FFFFFF'}
          stroke="#2D3748"
          strokeWidth="3"
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'building' ? 1.02 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('building')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'building' ? null : 'building')}
          style={{ cursor: 'pointer' }}
        />

        {/* Interactive Windows */}
        {[1, 2, 3, 4].map((i) => (
          <motion.rect
            key={i}
            x={140 + i * 20} y="130" width="15" height="15"
            fill={hoveredElement === `window${i}` ? '#63B3ED' : '#4299E1'}
            initial={{ scale: 1 }}
            animate={{ scale: hoveredElement === `window${i}` ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setHoveredElement(`window${i}`)}
            onMouseLeave={() => setHoveredElement(null)}
            onClick={() => setSelectedFeature(selectedFeature === `window${i}` ? null : `window${i}`)}
            style={{ cursor: 'pointer' }}
          />
        ))}

        {/* Interactive Growth Chart */}
        <motion.polyline
          points={growthStages[growthStage].points}
          fill="none"
          stroke={hoveredElement === 'chart' ? '#FFFFFF' : '#FFFFFF'}
          strokeWidth="4"
          markerEnd="url(#arrow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          onMouseEnter={() => setHoveredElement('chart')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={handleChartClick}
          style={{ cursor: 'pointer' }}
        />

        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#FFFFFF"/>
          </marker>
        </defs>

        {/* Growth Stage Indicator */}
        <motion.circle
          cx="200" cy="50"
          r="20"
          fill="#FFFFFF"
          stroke="#2D3748"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        />

        <motion.text
          x="200" y="56"
          textAnchor="middle"
          fill="#2D3748"
          fontFamily="Arial, sans-serif"
          fontSize="12"
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          {growthStages[growthStage].label}
        </motion.text>

        <text x="200" y="270" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold">Business Loan</text>

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
            {selectedFeature === 'building' && 'Scale your business operations'}
            {selectedFeature === 'window1' && 'Maintain daily cash flow'}
            {selectedFeature === 'window2' && 'Expand to new markets'}
            {selectedFeature === 'window3' && 'Purchase machinery & equipment'}
            {selectedFeature === 'window4' && 'Government-backed MSME loans'}
            {selectedFeature === 'chart' && 'Track your business growth journey'}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default BusinessLoanInteractive;
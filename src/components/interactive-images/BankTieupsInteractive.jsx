import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BankTieupsInteractive = () => {
  const [hoveredElement, setHoveredElement] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [selectedBank, setSelectedBank] = useState(null);

  const features = [
    { id: 'comparison', label: 'Rate Comparison', color: '#FFFFFF', x: 200, y: 120 },
    { id: 'bank1', label: 'HDFC Bank', color: '#4299E1', x: 150, y: 160 },
    { id: 'bank2', label: 'ICICI Bank', color: '#48BB78', x: 200, y: 160 },
    { id: 'bank3', label: 'SBI', color: '#ED8936', x: 250, y: 160 },
    { id: 'matching', label: 'Smart Matching', color: '#9F7AEA', x: 200, y: 200 }
  ];

  const banks = [
    { id: 'hdfc', name: 'HDFC', rate: '8.5%', color: '#4299E1' },
    { id: 'icici', name: 'ICICI', rate: '8.2%', color: '#48BB78' },
    { id: 'sbi', name: 'SBI', rate: '8.8%', color: '#ED8936' },
    { id: 'axis', name: 'Axis', rate: '8.3%', color: '#E53E3E' }
  ];

  return (
    <div className="interactive-image-container" style={{ width: '400px', height: '300px', position: 'relative' }}>
      <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bankGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ED8936', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#DD6B20', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#bankGradient)"/>

        {/* Interactive Comparison Table */}
        <motion.rect
          x="120" y="100" width="160" height="80"
          fill={hoveredElement === 'comparison' ? '#F7FAFC' : '#FFFFFF'}
          stroke="#2D3748"
          strokeWidth="2"
          rx="5"
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'comparison' ? 1.02 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('comparison')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'comparison' ? null : 'comparison')}
          style={{ cursor: 'pointer' }}
        />

        {/* Table headers */}
        <text x="160" y="115" fill="#2D3748" fontSize="10" fontWeight="bold">Bank</text>
        <text x="220" y="115" fill="#2D3748" fontSize="10" fontWeight="bold">Rate</text>
        <line x1="200" y1="105" x2="200" y2="175" stroke="#E2E8F0" strokeWidth="1"/>

        {/* Bank rows */}
        {banks.slice(0, 3).map((bank, index) => (
          <g key={bank.id}>
            <motion.text
              x="160" y={130 + index * 15}
              fill="#4A5568"
              fontSize="9"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {bank.name}
            </motion.text>
            <motion.text
              x="220" y={130 + index * 15}
              fill="#2D3748"
              fontSize="9"
              fontWeight="bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
            >
              {bank.rate}
            </motion.text>
          </g>
        ))}

        {/* Interactive Bank Logos */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx={150 + i * 50} cy="160" r="12"
            fill={hoveredElement === `bank${i + 1}` ? banks[i].color : '#FFFFFF'}
            stroke={banks[i].color}
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            onMouseEnter={() => setHoveredElement(`bank${i + 1}`)}
            onMouseLeave={() => setHoveredElement(null)}
            onClick={() => setSelectedBank(selectedBank === banks[i].id ? null : banks[i].id)}
            style={{ cursor: 'pointer' }}
          />
        ))}

        {/* Bank initials */}
        {['H', 'I', 'S'].map((initial, i) => (
          <text
            key={i}
            x={150 + i * 50} y="165"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="10"
            fontWeight="bold"
          >
            {initial}
          </text>
        ))}

        {/* Interactive Matching Algorithm */}
        <motion.circle
          cx="200" cy="200" r="20"
          fill={hoveredElement === 'matching' ? '#B794F6' : '#9F7AEA'}
          stroke="#2D3748"
          strokeWidth="2"
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'matching' ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('matching')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'matching' ? null : 'matching')}
          style={{ cursor: 'pointer' }}
        />

        {/* Matching icon (target/crosshair) */}
        <circle cx="200" cy="200" r="8" fill="none" stroke="#FFFFFF" strokeWidth="1"/>
        <circle cx="200" cy="200" r="2" fill="#FFFFFF"/>
        <line x1="192" y1="200" x2="196" y2="200" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="200" y1="192" x2="200" y2="196" stroke="#FFFFFF" strokeWidth="1"/>

        {/* Connection lines */}
        {selectedBank && (
          <motion.line
            x1="200" y1="180" x2={150 + banks.findIndex(b => b.id === selectedBank) * 50} y2="172"
            stroke="#FFFFFF"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}

        <text x="200" y="270" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold">Bank Tie-ups</text>

        {/* Bank Details Popup */}
        {selectedBank && (
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <rect x="120" y="30" width="160" height="50" fill="#FFFFFF" stroke="#2D3748" rx="5"/>
            <text x="200" y="45" textAnchor="middle" fill="#2D3748" fontSize="14" fontWeight="bold">
              {banks.find(b => b.id === selectedBank)?.name} Bank
            </text>
            <text x="200" y="65" textAnchor="middle" fill="#4A5568" fontSize="12">
              Best Rate: {banks.find(b => b.id === selectedBank)?.rate}
            </text>
          </motion.g>
        )}

        {/* Tooltip */}
        {hoveredElement && !selectedBank && (
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
            {selectedFeature === 'comparison' && 'Compare rates across all partner banks'}
            {selectedFeature === 'bank1' && 'Click bank logos for details'}
            {selectedFeature === 'bank2' && 'Click bank logos for details'}
            {selectedFeature === 'bank3' && 'Click bank logos for details'}
            {selectedFeature === 'matching' && 'AI-powered bank matching algorithm'}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default BankTieupsInteractive;
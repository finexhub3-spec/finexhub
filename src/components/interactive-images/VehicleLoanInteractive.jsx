import React, { useState } from 'react';
import { motion } from 'framer-motion';

const VehicleLoanInteractive = () => {
  const [hoveredElement, setHoveredElement] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [carMoving, setCarMoving] = useState(false);

  const features = [
    { id: 'car', label: 'Vehicle Purchase', color: '#FFFFFF', x: 200, y: 120 },
    { id: 'wheel1', label: 'New Vehicle', color: '#2D3748', x: 130, y: 135 },
    { id: 'wheel2', label: 'Used Vehicle', color: '#2D3748', x: 170, y: 135 },
    { id: 'window', label: 'Clear Financing', color: '#4299E1', x: 200, y: 115 },
    { id: 'headlight', label: 'Fast Processing', color: '#F6E05E', x: 195, y: 118 },
    { id: 'road', label: 'Smooth Journey', color: '#4A5568', x: 200, y: 147 }
  ];

  const handleCarClick = () => {
    setCarMoving(true);
    setTimeout(() => setCarMoving(false), 2000);
  };

  return (
    <div className="interactive-image-container" style={{ width: '400px', height: '300px', position: 'relative' }}>
      <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="vehicleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#9F7AEA', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#805AD5', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#vehicleGradient)"/>

        {/* Road */}
        <motion.line
          x1="50" y1="147" x2="350" y2="147"
          stroke={hoveredElement === 'road' ? '#718096' : '#4A5568'}
          strokeWidth="4"
          onMouseEnter={() => setHoveredElement('road')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'road' ? null : 'road')}
          style={{ cursor: 'pointer' }}
        />

        <motion.line
          x1="50" y1="150" x2="350" y2="150"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeDasharray="10,10"
          initial={{ x: 0 }}
          animate={{ x: carMoving ? 100 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Interactive Car Body */}
        <motion.ellipse
          cx="150" cy="120" rx="40" ry="15"
          fill={hoveredElement === 'car' ? '#F7FAFC' : '#FFFFFF'}
          initial={{ x: 0 }}
          animate={{ x: carMoving ? 100 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          onMouseEnter={() => setHoveredElement('car')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={handleCarClick}
          style={{ cursor: 'pointer' }}
        />

        <motion.rect
          x="110" y="105" width="80" height="30" rx="15"
          fill={hoveredElement === 'car' ? '#F7FAFC' : '#FFFFFF'}
          initial={{ x: 0 }}
          animate={{ x: carMoving ? 100 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          onMouseEnter={() => setHoveredElement('car')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={handleCarClick}
          style={{ cursor: 'pointer' }}
        />

        {/* Interactive Wheels */}
        <motion.circle
          cx="130" cy="135" r="12"
          fill={hoveredElement === 'wheel1' ? '#4A5568' : '#2D3748'}
          initial={{ x: 0, rotate: 0 }}
          animate={{
            x: carMoving ? 100 : 0,
            rotate: carMoving ? 360 : 0
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
          onMouseEnter={() => setHoveredElement('wheel1')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'wheel1' ? null : 'wheel1')}
          style={{ cursor: 'pointer' }}
        />

        <motion.circle
          cx="170" cy="135" r="12"
          fill={hoveredElement === 'wheel2' ? '#4A5568' : '#2D3748'}
          initial={{ x: 0, rotate: 0 }}
          animate={{
            x: carMoving ? 100 : 0,
            rotate: carMoving ? 360 : 0
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
          onMouseEnter={() => setHoveredElement('wheel2')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'wheel2' ? null : 'wheel2')}
          style={{ cursor: 'pointer' }}
        />

        {/* Inner wheel circles */}
        <motion.circle
          cx="130" cy="135" r="6"
          fill="#FFFFFF"
          initial={{ x: 0, rotate: 0 }}
          animate={{
            x: carMoving ? 100 : 0,
            rotate: carMoving ? -360 : 0
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        <motion.circle
          cx="170" cy="135" r="6"
          fill="#FFFFFF"
          initial={{ x: 0, rotate: 0 }}
          animate={{
            x: carMoving ? 100 : 0,
            rotate: carMoving ? -360 : 0
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Interactive Windows */}
        <motion.rect
          x="125" y="110" width="15" height="10"
          fill={hoveredElement === 'window' ? '#63B3ED' : '#4299E1'}
          initial={{ x: 0 }}
          animate={{ x: carMoving ? 100 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          onMouseEnter={() => setHoveredElement('window')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'window' ? null : 'window')}
          style={{ cursor: 'pointer' }}
        />

        <motion.rect
          x="145" y="110" width="20" height="10"
          fill={hoveredElement === 'window' ? '#63B3ED' : '#4299E1'}
          initial={{ x: 0 }}
          animate={{ x: carMoving ? 100 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          onMouseEnter={() => setHoveredElement('window')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'window' ? null : 'window')}
          style={{ cursor: 'pointer' }}
        />

        <motion.rect
          x="170" y="110" width="15" height="10"
          fill={hoveredElement === 'window' ? '#63B3ED' : '#4299E1'}
          initial={{ x: 0 }}
          animate={{ x: carMoving ? 100 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          onMouseEnter={() => setHoveredElement('window')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'window' ? null : 'window')}
          style={{ cursor: 'pointer' }}
        />

        {/* Interactive Headlight */}
        <motion.circle
          cx="195" cy="118" r="3"
          fill={hoveredElement === 'headlight' ? '#F6AD55' : '#F6E05E'}
          initial={{ x: 0 }}
          animate={{ x: carMoving ? 100 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          onMouseEnter={() => setHoveredElement('headlight')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'headlight' ? null : 'headlight')}
          style={{ cursor: 'pointer' }}
        />

        <text x="200" y="270" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold">Vehicle Loan</text>

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
            {selectedFeature === 'car' && 'Click to see your vehicle in motion'}
            {selectedFeature === 'wheel1' && 'Financing for brand new vehicles'}
            {selectedFeature === 'wheel2' && 'Loans for pre-owned vehicles'}
            {selectedFeature === 'window' && 'Transparent loan terms'}
            {selectedFeature === 'headlight' && 'Quick approval and disbursement'}
            {selectedFeature === 'road' && 'Smooth journey to vehicle ownership'}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default VehicleLoanInteractive;
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FastApprovalInteractive = () => {
  const [hoveredElement, setHoveredElement] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [approvalStage, setApprovalStage] = useState(0);

  const features = [
    { id: 'application', label: 'Application Submitted', color: '#4299E1', x: 150, y: 120 },
    { id: 'processing', label: 'Under Processing', color: '#ED8936', x: 200, y: 120 },
    { id: 'approved', label: 'Loan Approved', color: '#48BB78', x: 250, y: 120 },
    { id: 'tracker', label: 'Status Tracker', color: '#9F7AEA', x: 200, y: 200 }
  ];

  const stages = [
    { label: 'Application Received', status: 'completed', time: '2 mins' },
    { label: 'Document Verification', status: 'completed', time: '15 mins' },
    { label: 'Credit Check', status: 'in-progress', time: '30 mins' },
    { label: 'Final Approval', status: 'pending', time: '2 hours' }
  ];

  const handleTrackerClick = () => {
    setApprovalStage(prev => (prev + 1) % stages.length);
  };

  return (
    <div className="interactive-image-container" style={{ width: '400px', height: '300px', position: 'relative' }}>
      <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="approvalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#48BB78', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#38A169', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#approvalGradient)"/>

        {/* Progress Timeline */}
        <line x1="100" y1="140" x2="300" y2="140" stroke="#E2E8F0" strokeWidth="4"/>
        <motion.line
          x1="100" y1="140" x2="300" y2="140"
          stroke="#48BB78"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: (approvalStage + 1) / stages.length }}
          transition={{ duration: 1 }}
        />

        {/* Stage Circles */}
        {[0, 1, 2, 3].map((i) => (
          <motion.circle
            key={i}
            cx={100 + i * 50} cy="140" r="12"
            fill={
              i <= approvalStage
                ? (i === approvalStage ? '#ED8936' : '#48BB78')
                : '#E2E8F0'
            }
            stroke="#FFFFFF"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            onMouseEnter={() => setHoveredElement(`stage${i}`)}
            onMouseLeave={() => setHoveredElement(null)}
            onClick={() => setApprovalStage(i)}
            style={{ cursor: 'pointer' }}
          />
        ))}

        {/* Stage Labels */}
        {stages.map((stage, i) => (
          <motion.text
            key={i}
            x={100 + i * 50} y="165"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="9"
            fontWeight="bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
          >
            {stage.label.split(' ')[0]}
          </motion.text>
        ))}

        {/* Interactive Status Cards */}
        <motion.rect
          x="120" y="180" width="60" height="30"
          fill={hoveredElement === 'application' ? '#63B3ED' : '#4299E1'}
          stroke="#FFFFFF"
          strokeWidth="1"
          rx="5"
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'application' ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('application')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'application' ? null : 'application')}
          style={{ cursor: 'pointer' }}
        />

        <motion.rect
          x="190" y="180" width="60" height="30"
          fill={hoveredElement === 'processing' ? '#F6AD55' : '#ED8936'}
          stroke="#FFFFFF"
          strokeWidth="1"
          rx="5"
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'processing' ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('processing')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'processing' ? null : 'processing')}
          style={{ cursor: 'pointer' }}
        />

        <motion.rect
          x="260" y="180" width="60" height="30"
          fill={hoveredElement === 'approved' ? '#68D391' : '#48BB78'}
          stroke="#FFFFFF"
          strokeWidth="1"
          rx="5"
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'approved' ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('approved')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'approved' ? null : 'approved')}
          style={{ cursor: 'pointer' }}
        />

        <text x="150" y="197" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">Applied</text>
        <text x="220" y="197" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">Processing</text>
        <text x="290" y="197" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">Approved</text>

        {/* Interactive Tracker */}
        <motion.circle
          cx="200" cy="230" r="20"
          fill={hoveredElement === 'tracker' ? '#B794F6' : '#9F7AEA'}
          stroke="#FFFFFF"
          strokeWidth="2"
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'tracker' ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('tracker')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={handleTrackerClick}
          style={{ cursor: 'pointer' }}
        />

        {/* Tracker icon */}
        <path d="M190 225 L195 230 L210 215" stroke="#FFFFFF" strokeWidth="2" fill="none"/>
        <circle cx="200" cy="235" r="2" fill="#FFFFFF"/>

        <text x="200" y="270" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold">Fast Approval</text>

        {/* Current Stage Display */}
        <motion.rect
          x="150" y="30" width="100" height="40"
          fill="#FFFFFF"
          stroke="#2D3748"
          rx="5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.text
          x="200" y="45"
          textAnchor="middle"
          fill="#2D3748"
          fontSize="12"
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {stages[approvalStage].label}
        </motion.text>

        <motion.text
          x="200" y="60"
          textAnchor="middle"
          fill="#4A5568"
          fontSize="10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Est. Time: {stages[approvalStage].time}
        </motion.text>

        {/* Tooltip */}
        {hoveredElement && hoveredElement.startsWith('stage') && (
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <rect x="120" y="70" width="160" height="30" fill="#2D3748" rx="5"/>
            <text
              x="200" y="85"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="12"
              fontWeight="bold"
            >
              {stages[parseInt(hoveredElement.replace('stage', ''))]?.label}
            </text>
          </motion.g>
        )}

        {hoveredElement && !hoveredElement.startsWith('stage') && (
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
            {selectedFeature === 'application' && 'Submit application online instantly'}
            {selectedFeature === 'processing' && 'Automated document verification'}
            {selectedFeature === 'approved' && 'Funds disbursed within 24 hours'}
            {selectedFeature === 'tracker' && 'Real-time status updates via SMS/email'}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default FastApprovalInteractive;
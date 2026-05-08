import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DocumentationSupportInteractive = () => {
  const [hoveredElement, setHoveredElement] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [checkedItems, setCheckedItems] = useState([]);

  const features = [
    { id: 'kyc', label: 'KYC Documents', color: '#FFFFFF', x: 150, y: 120 },
    { id: 'income', label: 'Income Proof', color: '#4299E1', x: 200, y: 120 },
    { id: 'bank', label: 'Bank Statements', color: '#48BB78', x: 250, y: 120 },
    { id: 'checklist', label: 'Document Checklist', color: '#ED8936', x: 200, y: 180 }
  ];

  const documents = [
    { id: 'pan', label: 'PAN Card', checked: checkedItems.includes('pan') },
    { id: 'aadhar', label: 'Aadhaar Card', checked: checkedItems.includes('aadhar') },
    { id: 'salary', label: 'Salary Slips', checked: checkedItems.includes('salary') },
    { id: 'bankStmt', label: 'Bank Statements', checked: checkedItems.includes('bankStmt') }
  ];

  const handleDocumentClick = (docId) => {
    setCheckedItems(prev =>
      prev.includes(docId)
        ? prev.filter(id => id !== docId)
        : [...prev, docId]
    );
  };

  return (
    <div className="interactive-image-container" style={{ width: '400px', height: '300px', position: 'relative' }}>
      <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="documentationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#48BB78', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#38A169', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#documentationGradient)"/>

        {/* Interactive Document Folders */}
        <motion.rect
          x="130" y="100" width="40" height="30"
          fill={hoveredElement === 'kyc' ? '#F7FAFC' : '#FFFFFF'}
          stroke="#2D3748"
          strokeWidth="2"
          rx="3"
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'kyc' ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('kyc')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'kyc' ? null : 'kyc')}
          style={{ cursor: 'pointer' }}
        />

        <motion.rect
          x="180" y="100" width="40" height="30"
          fill={hoveredElement === 'income' ? '#63B3ED' : '#4299E1'}
          stroke="#2D3748"
          strokeWidth="2"
          rx="3"
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'income' ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('income')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'income' ? null : 'income')}
          style={{ cursor: 'pointer' }}
        />

        <motion.rect
          x="230" y="100" width="40" height="30"
          fill={hoveredElement === 'bank' ? '#68D391' : '#48BB78'}
          stroke="#2D3748"
          strokeWidth="2"
          rx="3"
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'bank' ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('bank')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'bank' ? null : 'bank')}
          style={{ cursor: 'pointer' }}
        />

        {/* Folder tabs */}
        <polygon points="130,100 145,85 150,100" fill="#E2E8F0"/>
        <polygon points="180,100 195,85 200,100" fill="#E2E8F0"/>
        <polygon points="230,100 245,85 250,100" fill="#E2E8F0"/>

        {/* Interactive Checklist */}
        <motion.rect
          x="150" y="160" width="100" height="40"
          fill={hoveredElement === 'checklist' ? '#F6AD55' : '#ED8936'}
          stroke="#2D3748"
          strokeWidth="2"
          rx="5"
          initial={{ scale: 1 }}
          animate={{ scale: hoveredElement === 'checklist' ? 1.02 : 1 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredElement('checklist')}
          onMouseLeave={() => setHoveredElement(null)}
          onClick={() => setSelectedFeature(selectedFeature === 'checklist' ? null : 'checklist')}
          style={{ cursor: 'pointer' }}
        />

        {/* Checklist items */}
        {documents.map((doc, index) => (
          <g key={doc.id}>
            <motion.rect
              x="160" y={170 + index * 8} width="6" height="6"
              fill={doc.checked ? '#48BB78' : '#FFFFFF'}
              stroke="#2D3748"
              strokeWidth="1"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => handleDocumentClick(doc.id)}
              style={{ cursor: 'pointer' }}
            />
            <motion.text
              x="175" y={176 + index * 8}
              fill="#FFFFFF"
              fontSize="8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
            >
              {doc.label}
            </motion.text>
          </g>
        ))}

        {/* Check mark for completed items */}
        {documents.filter(doc => doc.checked).map((doc, index) => (
          <motion.path
            key={`check-${doc.id}`}
            d="M 162 172 L 164 174 L 166 170"
            stroke="#FFFFFF"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3 }}
          />
        ))}

        {/* Progress indicator */}
        <motion.rect
          x="150" y="210" width="100" height="8"
          fill="#E2E8F0"
          rx="4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.rect
          x="150" y="210" width={`${100 * (checkedItems.length / documents.length)}`} height="8"
          fill="#48BB78"
          rx="4"
          initial={{ width: 0 }}
          animate={{ width: 100 * (checkedItems.length / documents.length) }}
          transition={{ duration: 0.5 }}
        />

        <motion.text
          x="200" y="225"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {checkedItems.length}/{documents.length} Complete
        </motion.text>

        <text x="200" y="270" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold">Documentation Support</text>

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
            {selectedFeature === 'kyc' && 'Identity and address verification documents'}
            {selectedFeature === 'income' && 'Salary slips, ITR, or business proof'}
            {selectedFeature === 'bank' && '6-month bank statement review'}
            {selectedFeature === 'checklist' && 'Click documents to mark as complete'}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default DocumentationSupportInteractive;
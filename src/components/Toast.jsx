import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Toast.css';

function Toast({ message, type = 'success', isVisible, onClose, duration = 3000 }) {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose, duration]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`toast toast-${type}`}
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="toast-content">
            <span className="toast-icon">
              {type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}
            </span>
            <span className="toast-message">{message}</span>
          </div>
          <button className="toast-close" onClick={onClose}>×</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Toast;
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Toast from './Toast.jsx';
import './ApplicationModal.css';

function ApplicationModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    panNumber: '',
    aadhaarNumber: '',

    // Employment Details
    employmentType: '',
    monthlyIncome: '',
    companyName: '',
    workExperience: '',

    // Loan Details
    loanType: '',
    loanAmount: '',
    tenure: '',
    purpose: '',

    // Address Information
    currentAddress: '',
    city: '',
    state: '',
    pincode: '',

    // Additional Information
    existingLoans: '',
    creditScore: '',
    coApplicant: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/bexsigmatech@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'Full Name': formData.fullName,
          'Email': formData.email,
          'Phone': formData.phone,
          'Date of Birth': formData.dateOfBirth,
          'PAN Number': formData.panNumber,
          'Aadhaar Number': formData.aadhaarNumber,
          'Employment Type': formData.employmentType,
          'Monthly Income': `₹${formData.monthlyIncome}`,
          'Company Name': formData.companyName,
          'Work Experience': `${formData.workExperience} years`,
          'Loan Type': formData.loanType,
          'Loan Amount': `₹${formData.loanAmount}`,
          'Tenure': `${formData.tenure} years`,
          'Loan Purpose': formData.purpose,
          'Current Address': formData.currentAddress,
          'City': formData.city,
          'State': formData.state,
          'Pincode': formData.pincode,
          'Existing Loans': formData.existingLoans || 'None',
          'Credit Score': formData.creditScore || 'Not provided',
          'Co-Applicant': formData.coApplicant || 'None',
          _subject: `New Loan Application from ${formData.fullName}`,
          _template: 'table'
        })
      });

      if (!response.ok) throw new Error('Submission failed');

      setSubmitStatus('success');
      setToast({
        show: true,
        message: 'Successfully submitted your application!',
        type: 'success'
      });

      // Close modal after showing success toast
      setTimeout(() => {
        onClose();
        setStep(1);
        setSubmitStatus(null);
        setToast({ show: false, message: '', type: 'success' });
        setFormData({
          fullName: '', email: '', phone: '', dateOfBirth: '', panNumber: '', aadhaarNumber: '',
          employmentType: '', monthlyIncome: '', companyName: '', workExperience: '',
          loanType: '', loanAmount: '', tenure: '', purpose: '',
          currentAddress: '', city: '', state: '', pincode: '',
          existingLoans: '', creditScore: '', coApplicant: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Application submission failed:', error);
      setSubmitStatus('error');

      const errorMessage = !navigator.onLine
        ? 'No internet connection. Please check your connection and try again.'
        : 'Failed to submit application. Please try again.';

      setToast({
        show: true,
        message: errorMessage,
        type: 'error'
      });
      setIsSubmitting(false);
    }
  };

  const steps = [
    { number: 1, title: 'Personal Info', description: 'Basic details' },
    { number: 2, title: 'Employment', description: 'Income details' },
    { number: 3, title: 'Loan Details', description: 'Loan requirements' },
    { number: 4, title: 'Review & Submit', description: 'Final confirmation' }
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="application-modal"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header">
            <h2>Apply for Loan</h2>
            <button className="modal-close" onClick={onClose}>×</button>
          </div>

          {/* Progress Steps */}
          <div className="progress-steps">
            {steps.map((stepInfo) => (
              <div
                key={stepInfo.number}
                className={`progress-step ${step >= stepInfo.number ? 'active' : ''} ${step > stepInfo.number ? 'completed' : ''}`}
              >
                <div className="step-number">{stepInfo.number}</div>
                <div className="step-info">
                  <div className="step-title">{stepInfo.title}</div>
                  <div className="step-description">{stepInfo.description}</div>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <motion.div
                className="form-step"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3>Personal Information</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div className="form-group">
                    <label>Date of Birth *</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>PAN Number *</label>
                    <input
                      type="text"
                      name="panNumber"
                      value={formData.panNumber}
                      onChange={handleInputChange}
                      required
                      placeholder="AAAAA0000A"
                      pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                    />
                  </div>
                  <div className="form-group">
                    <label>Aadhaar Number *</label>
                    <input
                      type="text"
                      name="aadhaarNumber"
                      value={formData.aadhaarNumber}
                      onChange={handleInputChange}
                      required
                      placeholder="XXXX XXXX XXXX"
                      pattern="[0-9]{4} [0-9]{4} [0-9]{4}"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Employment Details */}
            {step === 2 && (
              <motion.div
                className="form-step"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3>Employment Details</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Employment Type *</label>
                    <select
                      name="employmentType"
                      value={formData.employmentType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select employment type</option>
                      <option value="salaried">Salaried</option>
                      <option value="self-employed">Self-Employed</option>
                      <option value="business-owner">Business Owner</option>
                      <option value="professional">Professional</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Monthly Income (₹) *</label>
                    <input
                      type="number"
                      name="monthlyIncome"
                      value={formData.monthlyIncome}
                      onChange={handleInputChange}
                      required
                      placeholder="50000"
                      min="15000"
                    />
                  </div>
                  <div className="form-group">
                    <label>Company Name *</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter company name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Work Experience (Years) *</label>
                    <input
                      type="number"
                      name="workExperience"
                      value={formData.workExperience}
                      onChange={handleInputChange}
                      required
                      placeholder="2"
                      min="0"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Loan Details */}
            {step === 3 && (
              <motion.div
                className="form-step"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3>Loan Details</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Loan Type *</label>
                    <select
                      name="loanType"
                      value={formData.loanType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select loan type</option>
                      <option value="home">Home Loan</option>
                      <option value="personal">Personal Loan</option>
                      <option value="business">Business Loan</option>
                      <option value="vehicle">Vehicle Loan</option>
                      <option value="education">Education Loan</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Loan Amount (₹) *</label>
                    <input
                      type="number"
                      name="loanAmount"
                      value={formData.loanAmount}
                      onChange={handleInputChange}
                      required
                      placeholder="500000"
                      min="50000"
                      step="10000"
                    />
                  </div>
                  <div className="form-group">
                    <label>Tenure (Years) *</label>
                    <select
                      name="tenure"
                      value={formData.tenure}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select tenure</option>
                      <option value="1">1 year</option>
                      <option value="2">2 years</option>
                      <option value="3">3 years</option>
                      <option value="4">4 years</option>
                      <option value="5">5 years</option>
                      <option value="6">6 years</option>
                      <option value="7">7 years</option>
                      <option value="8">8 years</option>
                      <option value="9">9 years</option>
                      <option value="10">10 years</option>
                      <option value="11">11 years</option>
                      <option value="12">12 years</option>
                      <option value="13">13 years</option>
                      <option value="14">14 years</option>
                      <option value="15">15 years</option>
                      <option value="16">16 years</option>
                      <option value="17">17 years</option>
                      <option value="18">18 years</option>
                      <option value="19">19 years</option>
                      <option value="20">20 years</option>
                      <option value="21">21 years</option>
                      <option value="22">22 years</option>
                      <option value="23">23 years</option>
                      <option value="24">24 years</option>
                      <option value="25">25 years</option>
                      <option value="26">26 years</option>
                      <option value="27">27 years</option>
                      <option value="28">28 years</option>
                      <option value="29">29 years</option>
                      <option value="30">30 years</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Loan Purpose *</label>
                    <select
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select purpose</option>
                      <option value="home-purchase">Home Purchase</option>
                      <option value="home-construction">Home Construction</option>
                      <option value="home-renovation">Home Renovation</option>
                      <option value="business-expansion">Plot Purchase Loan</option>
                      <option value="education">Plot Mortgage</option>
                      <option value="vehicle">Plot Purchase+Construction Loan</option>
                      <option value="personal">Loan against Property</option>
                      <option value="debt-consolidation">Balance Transfer</option>
                      <option value="debt-consolidation">Commercial Property Construction/Extension Loan</option>
                      <option value="debt-consolidation">Commercial Property Purchase Loan</option>
                      <option value="debt-consolidation">Express Balance Transfer</option>
                      <option value="debt-consolidation">Express Balance Transfer+Top up</option>
                      <option value="debt-consolidation">Education Loan</option>
                      <option value="debt-consolidation">Vehicle Loan</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Review & Submit */}
            {step === 4 && (
              <motion.div
                className="form-step"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3>Review Your Application</h3>
                <div className="review-section">
                  <div className="review-item">
                    <strong>Personal Details:</strong>
                    <p>{formData.fullName} • {formData.email} • {formData.phone}</p>
                  </div>
                  <div className="review-item">
                    <strong>Employment:</strong>
                    <p>{formData.employmentType} • ₹{formData.monthlyIncome}/month • {formData.companyName}</p>
                  </div>
                  <div className="review-item">
                    <strong>Loan Request:</strong>
                    <p>{formData.loanType} • ₹{formData.loanAmount} • {formData.tenure} years</p>
                  </div>
                </div>

                <div className="terms-agreement">
                  <input type="checkbox" id="terms" required />
                  <label htmlFor="terms">
                    I agree to the <a href="#terms" target="_blank">Terms & Conditions</a> and
                    <a href="#privacy" target="_blank">Privacy Policy</a>
                  </label>
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    className="submit-success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✅ Application submitted successfully! We'll review your application and get back to you within 24-48 hours.
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="form-navigation">
              {step > 1 && (
                <button type="button" className="button button-secondary" onClick={prevStep}>
                  Previous
                </button>
              )}
              {step < 4 ? (
                <button type="button" className="button button-primary" onClick={nextStep}>
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="button button-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </motion.div>

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </AnimatePresence>
  );
}

export default ApplicationModal;
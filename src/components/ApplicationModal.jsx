import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setSubmitStatus(null);
      setAgreedToTerms(false);
      setErrors({});
      setFormData({
        fullName: '', email: '', phone: '', dateOfBirth: '', panNumber: '', aadhaarNumber: '',
        employmentType: '', monthlyIncome: '', companyName: '', workExperience: '',
        loanType: '', loanAmount: '', tenure: '', purpose: '',
        currentAddress: '', city: '', state: '', pincode: '',
      });
    }
  }, [isOpen]);

  const validateField = (name, value) => {
    let errorMsg = null;
    const trimmedVal = (value || '').toString().trim();

    switch (name) {
      case 'fullName':
        if (!trimmedVal) {
          errorMsg = 'Full Name is required.';
        } else if (!/^[a-zA-Z\s]{2,50}$/.test(trimmedVal)) {
          errorMsg = 'Name must be at least 2 characters and contain only letters.';
        }
        break;
      case 'email':
        if (!trimmedVal) {
          errorMsg = 'Email Address is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedVal)) {
          errorMsg = 'Please enter a valid email address.';
        }
        break;
      case 'phone':
        if (!trimmedVal) {
          errorMsg = 'Phone Number is required.';
        } else if (!/^[6-9]\d{9}$/.test(trimmedVal)) {
          errorMsg = 'Please enter a valid 10-digit mobile number starting with 6-9.';
        }
        break;
      case 'dateOfBirth':
        if (!trimmedVal) {
          errorMsg = 'Date of Birth is required.';
        } else {
          const dob = new Date(trimmedVal);
          const today = new Date();
          
          let age = today.getFullYear() - dob.getFullYear();
          const m = today.getMonth() - dob.getMonth();
          if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
            age--;
          }
          
          if (isNaN(dob.getTime())) {
            errorMsg = 'Please enter a valid date.';
          } else if (dob > today) {
            errorMsg = 'Date of Birth cannot be in the future.';
          } else if (age < 18) {
            errorMsg = 'Applicant must be at least 18 years old.';
          } else if (age > 100) {
            errorMsg = 'Please enter a valid age (under 100).';
          }
        }
        break;
      case 'panNumber':
        if (!trimmedVal) {
          errorMsg = 'PAN Number is required.';
        } else if (!/^[A-Z]{5}\d{4}[A-Z]{1}$/.test(trimmedVal.toUpperCase())) {
          errorMsg = 'Invalid PAN format. Must be like ABCDE1234F.';
        }
        break;
      case 'aadhaarNumber': {
        const rawAadhaar = trimmedVal.replace(/\s/g, '');
        if (!trimmedVal) {
          errorMsg = 'Aadhaar Number is required.';
        } else if (!/^\d{12}$/.test(rawAadhaar)) {
          errorMsg = 'Aadhaar must be a 12-digit number.';
        }
        break;
      }
      case 'employmentType':
        if (!trimmedVal) errorMsg = 'Please select employment type.';
        break;
      case 'monthlyIncome':
        if (!trimmedVal) {
          errorMsg = 'Monthly Income is required.';
        } else {
          const income = parseFloat(trimmedVal);
          if (isNaN(income) || income < 15000) {
            errorMsg = 'Monthly Income must be at least ₹15,000.';
          }
        }
        break;
      case 'companyName':
        if (!trimmedVal) errorMsg = 'Company Name is required.';
        break;
      case 'workExperience':
        if (trimmedVal === '') {
          errorMsg = 'Work experience is required.';
        } else {
          const exp = parseFloat(trimmedVal);
          if (isNaN(exp) || exp < 0) {
            errorMsg = 'Work experience must be 0 or more years.';
          }
        }
        break;
      case 'loanType':
        if (!trimmedVal) errorMsg = 'Please select a service type.';
        break;
      case 'loanAmount':
        if (!trimmedVal) {
          errorMsg = 'Loan Amount is required.';
        } else {
          const amt = parseFloat(trimmedVal);
          if (isNaN(amt) || amt < 50000) {
            errorMsg = 'Loan Amount must be at least ₹50,000.';
          }
        }
        break;
      case 'tenure':
        if (!trimmedVal) errorMsg = 'Please select tenure.';
        break;
      case 'purpose':
        if (!trimmedVal) errorMsg = 'Please select purpose.';
        break;
      case 'currentAddress':
        if (!trimmedVal) errorMsg = 'Current Address is required.';
        break;
      case 'city':
        if (!trimmedVal) {
          errorMsg = 'City is required.';
        } else if (!/^[a-zA-Z\s]{2,50}$/.test(trimmedVal)) {
          errorMsg = 'City should only contain letters.';
        }
        break;
      case 'state':
        if (!trimmedVal) errorMsg = 'Please select a state.';
        break;
      case 'pincode':
        if (!trimmedVal) {
          errorMsg = 'Pincode is required.';
        } else if (!/^\d{6}$/.test(trimmedVal)) {
          errorMsg = 'Pincode must be exactly 6 digits.';
        }
        break;
      default:
        break;
    }

    return errorMsg;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let cleanValue = value;

    if (name === 'phone') {
      cleanValue = value.replace(/\D/g, '').slice(0, 10);
    } else if (name === 'panNumber') {
      cleanValue = value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 10);
    } else if (name === 'aadhaarNumber') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 12);
      const match = digitsOnly.match(/.{1,4}/g);
      cleanValue = match ? match.join(' ') : digitsOnly;
    } else if (name === 'pincode') {
      cleanValue = value.replace(/\D/g, '').slice(0, 6);
    }

    setFormData(prev => ({
      ...prev,
      [name]: cleanValue
    }));

    if (errors[name]) {
      const errorMsg = validateField(name, cleanValue);
      setErrors(prev => ({
        ...prev,
        [name]: errorMsg
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errorMsg = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: errorMsg
    }));
  };

  // Required fields per step
  const requiredFieldsByStep = {
    1: ['fullName', 'email', 'phone', 'dateOfBirth', 'panNumber', 'aadhaarNumber'],
    2: ['employmentType', 'monthlyIncome', 'companyName', 'workExperience'],
    3: ['loanType', 'loanAmount', 'tenure', 'purpose'],
    4: ['currentAddress', 'city', 'state', 'pincode'],
  };

  // Check if all required fields for a given step are filled and valid
  const isStepValid = (stepNum) => {
    const fields = requiredFieldsByStep[stepNum];
    if (!fields) return true;
    return fields.every((field) => {
      const val = formData[field];
      return val.toString().trim() !== '' && validateField(field, val) === null;
    });
  };

  // Check if ALL steps are valid (for submit)
  const isFormComplete = () => {
    return [1, 2, 3, 4].every(isStepValid) && agreedToTerms;
  };

  const nextStep = () => {
    const fields = requiredFieldsByStep[step];
    let stepHasErrors = false;
    const newErrors = { ...errors };

    if (fields) {
      fields.forEach((field) => {
        const errorMsg = validateField(field, formData[field]);
        if (errorMsg) {
          newErrors[field] = errorMsg;
          stepHasErrors = true;
        } else {
          delete newErrors[field];
        }
      });
    }

    setErrors(newErrors);

    if (stepHasErrors) {
      setToast({
        show: true,
        message: 'Please resolve all validation errors before proceeding.',
        type: 'error'
      });
      return;
    }
    if (step < 5) {
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
      const response = await fetch('https://formsubmit.co/ajax/finexhub3@gmail.com', {
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
        setAgreedToTerms(false);
        setToast({ show: false, message: '', type: 'success' });
        setFormData({
          fullName: '', email: '', phone: '', dateOfBirth: '', panNumber: '', aadhaarNumber: '',
          employmentType: '', monthlyIncome: '', companyName: '', workExperience: '',
          loanType: '', loanAmount: '', tenure: '', purpose: '',
          currentAddress: '', city: '', state: '', pincode: '',
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
    { number: 4, title: 'Address', description: 'Residential details' },
    { number: 5, title: 'Review & Submit', description: 'Final confirmation' }
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
            {steps.map((stepInfo, idx) => (
              <div
                key={stepInfo.number}
                className={`progress-step ${step >= stepInfo.number ? 'active' : ''} ${step > stepInfo.number ? 'completed' : ''}`}
              >
                {idx > 0 && <div className="step-connector" />}
                <div className="step-dot">
                  {step > stepInfo.number ? '✓' : stepInfo.number}
                </div>
                <span className="step-label">{stepInfo.title}</span>
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
                  <div className={`form-group ${errors.fullName ? 'has-error' : ''}`}>
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                  </div>
                  <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      placeholder="your@email.com"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                  <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>
                  <div className={`form-group ${errors.dateOfBirth ? 'has-error' : ''}`}>
                    <label>Date of Birth *</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                    />
                    {errors.dateOfBirth && <span className="error-message">{errors.dateOfBirth}</span>}
                  </div>
                  <div className={`form-group ${errors.panNumber ? 'has-error' : ''}`}>
                    <label>PAN Number *</label>
                    <input
                      type="text"
                      name="panNumber"
                      value={formData.panNumber}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      placeholder="AAAAA0000A"
                    />
                    {errors.panNumber && <span className="error-message">{errors.panNumber}</span>}
                  </div>
                  <div className={`form-group ${errors.aadhaarNumber ? 'has-error' : ''}`}>
                    <label>Aadhaar Number *</label>
                    <input
                      type="text"
                      name="aadhaarNumber"
                      value={formData.aadhaarNumber}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      placeholder="XXXX XXXX XXXX"
                    />
                    {errors.aadhaarNumber && <span className="error-message">{errors.aadhaarNumber}</span>}
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
                  <div className={`form-group ${errors.employmentType ? 'has-error' : ''}`}>
                    <label>Employment Type *</label>
                    <select
                      name="employmentType"
                      value={formData.employmentType}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                    >
                      <option value="">Select employment type</option>
                      <option value="salaried">Salaried</option>
                      <option value="self-employed">Self-Employed</option>
                      <option value="business-owner">Business Owner</option>
                      <option value="professional">Professional</option>
                    </select>
                    {errors.employmentType && <span className="error-message">{errors.employmentType}</span>}
                  </div>
                  <div className={`form-group ${errors.monthlyIncome ? 'has-error' : ''}`}>
                    <label>Monthly Income (₹) *</label>
                    <input
                      type="number"
                      name="monthlyIncome"
                      value={formData.monthlyIncome}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      placeholder="50000"
                      min="15000"
                    />
                    {errors.monthlyIncome && <span className="error-message">{errors.monthlyIncome}</span>}
                  </div>
                  <div className={`form-group ${errors.companyName ? 'has-error' : ''}`}>
                    <label>Company Name *</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      placeholder="Enter company name"
                    />
                    {errors.companyName && <span className="error-message">{errors.companyName}</span>}
                  </div>
                  <div className={`form-group ${errors.workExperience ? 'has-error' : ''}`}>
                    <label>Work Experience (Years) *</label>
                    <input
                      type="number"
                      name="workExperience"
                      value={formData.workExperience}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      placeholder="2"
                      min="0"
                    />
                    {errors.workExperience && <span className="error-message">{errors.workExperience}</span>}
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
                  <div className={`form-group ${errors.loanType ? 'has-error' : ''}`}>
                    <label>Service Type *</label>
                    <select
                      name="loanType"
                      value={formData.loanType}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                    >
                      <option value="">Select service type</option>
                      <optgroup label="Loans">
                        <option value="Home Loan">Home Loan</option>
                        <option value="Loan Against Property">Loan Against Property</option>
                        <option value="Business Loan">Business Loan</option>
                        <option value="Personal Loan">Personal Loan</option>
                        <option value="Education Loan">Education Loan</option>
                        <option value="Vehicle Loan">Vehicle Loan</option>
                      </optgroup>
                      <optgroup label="Wealth Management">
                        <option value="Fixed Deposit">Fixed Deposit</option>
                        <option value="Recurring Deposit">Recurring Deposit</option>
                      </optgroup>
                      <optgroup label="Mutual Funds">
                        <option value="Child Education Planning">Child Education Planning</option>
                        <option value="Retirement Planning">Retirement Planning</option>
                      </optgroup>
                      <optgroup label="Insurance">
                        <option value="Health Insurance">Health Insurance</option>
                        <option value="Life Insurance">Life Insurance</option>
                        <option value="Vehicle Insurance">Vehicle Insurance</option>
                      </optgroup>
                    </select>
                    {errors.loanType && <span className="error-message">{errors.loanType}</span>}
                  </div>
                  <div className={`form-group ${errors.loanAmount ? 'has-error' : ''}`}>
                    <label>Loan Amount (₹) *</label>
                    <input
                      type="number"
                      name="loanAmount"
                      value={formData.loanAmount}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      placeholder="500000"
                      min="50000"
                      step="10000"
                    />
                    {errors.loanAmount && <span className="error-message">{errors.loanAmount}</span>}
                  </div>
                  <div className={`form-group ${errors.tenure ? 'has-error' : ''}`}>
                    <label>Tenure (Years) *</label>
                    <select
                      name="tenure"
                      value={formData.tenure}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
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
                    {errors.tenure && <span className="error-message">{errors.tenure}</span>}
                  </div>
                  <div className={`form-group ${errors.purpose ? 'has-error' : ''}`}>
                    <label>Purpose *</label>
                    <select
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                    >
                      <option value="">Select purpose / detail</option>
                      <option value="new-investment">New Investment / Account</option>
                      <option value="home-purchase">Home Purchase</option>
                      <option value="home-construction">Home Construction / Renovation</option>
                      <option value="plot-purchase">Plot Purchase / Mortgage</option>
                      <option value="business-expansion">Business Expansion / Capital</option>
                      <option value="education">Education / Study Abroad</option>
                      <option value="vehicle">Vehicle Purchase</option>
                      <option value="insurance-policy">Insurance Coverage</option>
                      <option value="other">Other / General Query</option>
                    </select>
                    {errors.purpose && <span className="error-message">{errors.purpose}</span>}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Address Information */}
            {step === 4 && (
              <motion.div
                className="form-step"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3>Address Information</h3>
                <div className="form-grid">
                  <div className={`form-group full-width ${errors.currentAddress ? 'has-error' : ''}`}>
                    <label>Current Address *</label>
                    <textarea
                      name="currentAddress"
                      value={formData.currentAddress}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      placeholder="Enter your full residential address"
                      rows="3"
                    />
                    {errors.currentAddress && <span className="error-message">{errors.currentAddress}</span>}
                  </div>
                  <div className={`form-group ${errors.city ? 'has-error' : ''}`}>
                    <label>City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      placeholder="Enter city"
                    />
                    {errors.city && <span className="error-message">{errors.city}</span>}
                  </div>
                  <div className={`form-group ${errors.state ? 'has-error' : ''}`}>
                    <label>State *</label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                    >
                      <option value="">Select state</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Puducherry">Puducherry</option>
                      <option value="Chandigarh">Chandigarh</option>
                    </select>
                    {errors.state && <span className="error-message">{errors.state}</span>}
                  </div>
                  <div className={`form-group ${errors.pincode ? 'has-error' : ''}`}>
                    <label>Pincode *</label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      placeholder="600001"
                    />
                    {errors.pincode && <span className="error-message">{errors.pincode}</span>}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 5: Review & Submit */}
            {step === 5 && (
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
                  <div className="review-item">
                    <strong>Address:</strong>
                    <p>{formData.currentAddress}, {formData.city}, {formData.state} — {formData.pincode}</p>
                  </div>
                </div>

                <div className="terms-agreement">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                  />
                  <label htmlFor="terms">
                    I agree to the{' '}
                    <Link to="/legal?tab=terms" onClick={onClose}>Terms & Conditions</Link> and{' '}
                    <Link to="/legal?tab=privacy" onClick={onClose}>Privacy Policy</Link>
                  </label>
                </div>

                {!agreedToTerms && (
                  <p className="terms-warning">⚠️ You must agree to the Terms & Conditions and Privacy Policy to submit.</p>
                )}

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
              {step < 5 ? (
                <button type="button" className="button button-primary" onClick={nextStep}>
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="button button-primary"
                  disabled={isSubmitting || !isFormComplete()}
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
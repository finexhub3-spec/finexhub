import { useState } from 'react';
import { motion } from 'framer-motion';
import PageIntro from '../components/PageIntro.jsx';
import Toast from '../components/Toast.jsx';
import { useSEO } from '../hooks/useSEO.js';
import './ContactPage.css';

function ContactPage() {
  useSEO({
    title: 'Contact Us — Apply for Loan, Get Finance Consultation',
    description: 'Contact Bex Sigma Finance for expert loan and finance consultation. Apply for home loan, personal loan, or business loan. Call +91 9626900913 or email bexsigmatech@gmail.com.',
    canonical: '/contact',
    keywords: ['contact finance consultant India', 'apply for home loan', 'loan consultation', 'finance advisor contact', 'apply personal loan India', 'Bex Sigma Finance contact'],
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: '',
    loanAmount: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    setStatusMessage('');

    if (!formData.message.trim()) {
      const errorMessage = 'Please enter your message before sending.';
      setSubmitStatus('error');
      setStatusMessage(errorMessage);
      setToast({
        show: true,
        message: errorMessage,
        type: 'error'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/bexsigmatech@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          'Loan Type': formData.loanType,
          'Loan Amount': formData.loanAmount,
          message: formData.message,
          _subject: `New Contact Enquiry from ${formData.name}`,
          _template: 'table'
        })
      });

      if (!response.ok) throw new Error('Submission failed');

      setSubmitStatus('success');
      setStatusMessage('Successfully submitted your message!');
      setToast({
        show: true,
        message: 'Successfully submitted your message!',
        type: 'success'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        loanType: '',
        loanAmount: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');

      let errorMessage = !navigator.onLine
        ? 'No internet connection. Please check your connection and try again.'
        : 'Failed to send message. Please try again.';

      setStatusMessage(errorMessage);
      setToast({
        show: true,
        message: errorMessage,
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      details: '+91 9626900913',
      description: 'Mon-Sat 9AM-6PM IST'
    },
    {
      icon: '📧',
      title: 'Email',
      details: 'bexsigmatech@gmail.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: '📍',
      title: 'Office',
      details: 'Ayyampettai,Kancheepuram',
      description: 'Serving all major cities'
    }
  ];

  return (
    <>
      <PageIntro eyebrow="Get Started" title="Contact Us Today">
        Start with a profile review, EMI estimate, or guided loan application.
      </PageIntro>

      <section className="section contact-section">
        <div className="contact-container">
          {/* Contact Information */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Get in Touch</h3>
            <p>Ready to start your loan journey? We're here to help you every step of the way.</p>

            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="contact-method"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    <p className="contact-primary">{info.details}</p>
                    <p className="contact-secondary">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send us a Message</h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="loanType">Loan Type</label>
                  <select
                    id="loanType"
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select loan type</option>
                    <option value="home">Home Loan</option>
                    <option value="personal">Personal Loan</option>
                    <option value="business">Business Loan</option>
                    <option value="vehicle">Vehicle Loan</option>
                    <option value="education">Education Loan</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="loanAmount">Loan Amount (₹)</label>
                <input
                  type="number"
                  id="loanAmount"
                  name="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleInputChange}
                  placeholder="Enter loan amount"
                  min="50000"
                  step="10000"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your loan requirements..."
                  rows="4"
                  required
                />
              </div>

              {submitStatus === 'error' && statusMessage && (
                <div className="submit-error" role="alert">
                  {statusMessage}
                </div>
              )}

              {submitStatus === 'success' && statusMessage && (
                <div className="submit-success" role="status">
                  {statusMessage}
                </div>
              )}

              <motion.button
                type="submit"
                className="button button-primary contact-submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>

            <Toast
              message={toast.message}
              type={toast.type}
              isVisible={toast.show}
              onClose={() => setToast({ ...toast, show: false })}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;

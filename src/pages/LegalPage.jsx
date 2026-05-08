import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageIntro from '../components/PageIntro.jsx';
import { useSEO } from '../hooks/useSEO.js';
import './LegalPage.css';

/* ── Privacy Policy Data ─────────────────────────────────── */
const privacyPolicy = [
  {
    number: '01',
    title: 'Introduction',
    icon: '🛡️',
    content:
      'BEx Sigma Finance ("Company") is committed to protecting the privacy and confidentiality of customer information. This Privacy Policy outlines how we collect, use, store, and protect your personal data in compliance with applicable regulations.',
  },
  {
    number: '02',
    title: 'Information Collection',
    icon: '📋',
    content:
      'We collect personal, financial, and transactional data including KYC details (Aadhaar, PAN, address proof), income proof, employment details, credit history, bank statements, and contact information necessary for loan processing and assessment.',
  },
  {
    number: '03',
    title: 'Purpose of Data Usage',
    icon: '🎯',
    content:
      'Data is used exclusively for loan processing, risk assessment, credit evaluation, regulatory compliance, customer communication, and improving our services. We do not use your data for purposes unrelated to our financial services.',
  },
  {
    number: '04',
    title: 'Data Sharing',
    icon: '🤝',
    content:
      'Information may be shared with partnered banks, financial institutions, credit bureaus (CIBIL, Equifax, Experian), regulatory authorities, and authorized third parties solely for the purpose of loan facilitation and compliance.',
  },
  {
    number: '05',
    title: 'Data Security',
    icon: '🔒',
    content:
      'We implement industry-standard security measures including encryption, secure servers, access controls, and regular audits to protect your data against unauthorized access, alteration, disclosure, or destruction.',
  },
  {
    number: '06',
    title: 'Cookies & Digital Tracking',
    icon: '🍪',
    content:
      'Our digital platforms may use cookies and similar technologies to enhance user experience, analyze traffic patterns, and improve our services. You can manage cookie preferences through your browser settings.',
  },
  {
    number: '07',
    title: 'Customer Rights',
    icon: '✋',
    content:
      'Customers may request access to, correction of, or deletion of their personal data subject to legal obligations and regulatory requirements. Requests can be submitted via our support channels.',
  },
  {
    number: '08',
    title: 'Data Retention',
    icon: '📦',
    content:
      'Data is retained for the duration required under applicable laws, regulatory mandates, and legitimate business purposes. Post-retention, data is securely disposed of following industry best practices.',
  },
  {
    number: '09',
    title: 'Consent',
    icon: '✅',
    content:
      'By using our services, customers consent to data collection, processing, and sharing as outlined in this Privacy Policy. Consent may be withdrawn at any time, subject to legal and contractual obligations.',
  },
  {
    number: '10',
    title: 'Regulatory Compliance',
    icon: '⚖️',
    content:
      'This policy complies with applicable Indian laws including the Information Technology Act, 2000, IT (Reasonable Security Practices and Procedures) Rules, 2011, and other applicable data protection regulations.',
  },
  {
    number: '11',
    title: 'Policy Updates',
    icon: '🔄',
    content:
      'The Company reserves the right to update this policy periodically. Changes will be communicated through our website and other appropriate channels. Continued use constitutes acceptance of updated terms.',
  },
  {
    number: '12',
    title: 'Contact',
    icon: '📧',
    content:
      'For privacy concerns, data requests, or any queries related to this policy, please contact us at bexsigmatech@gmail.com. We are committed to addressing your concerns promptly.',
  },
];

/* ── Terms & Conditions Data ─────────────────────────────── */
const termsConditions = [
  {
    number: '01',
    title: 'Definitions',
    icon: '📖',
    content:
      '"Company" refers to BEx Sigma Finance. "Borrower" includes the applicant, co-applicant, and guarantor where applicable. "Loan" encompasses personal loans, home loans, loan against property (LAP), business loans, and car/vehicle loans facilitated through the Company.',
  },
  {
    number: '02',
    title: 'Eligibility',
    icon: '✔️',
    content:
      'Loan approval is subject to successful KYC verification, credit assessment, evaluation of repayment capacity, and compliance with the Company\'s internal policies. Meeting eligibility criteria does not guarantee loan approval.',
  },
  {
    number: '03',
    title: 'Sanction & Disbursement',
    icon: '💰',
    content:
      'Loan sanction is provisional and subject to final verification of all submitted documents. Disbursement is contingent upon satisfactory legal, technical, and financial clearance by the lending institution.',
  },
  {
    number: '04',
    title: 'Interest Rate',
    icon: '📊',
    content:
      'Interest rates may be fixed or floating, as specified in the loan agreement. Floating rates are subject to periodic revision based on prevailing market conditions, RBI policy changes, and lender guidelines.',
  },
  {
    number: '05',
    title: 'Repayment',
    icon: '💳',
    content:
      'The Borrower shall repay the loan through Equated Monthly Installments (EMI) or Pre-EMI (PEMI) as per the agreed schedule. Delay in repayment attracts penal interest and additional charges as specified.',
  },
  {
    number: '06',
    title: 'Prepayment & Foreclosure',
    icon: '⏩',
    content:
      'Prepayment and foreclosure of the loan are permitted subject to applicable charges as per the Company\'s prevailing policy and regulatory guidelines. Part-prepayment options may also be available.',
  },
  {
    number: '07',
    title: 'Security',
    icon: '🏠',
    content:
      'Loans may be secured by mortgage, hypothecation, or pledge of assets. The Borrower must maintain clear, marketable title over the secured property and ensure it remains free from encumbrances throughout the loan tenure.',
  },
  {
    number: '08',
    title: 'Fees & Charges',
    icon: '🧾',
    content:
      'Processing fees, legal charges, valuation fees, administrative charges, and other applicable service charges are payable by the Borrower. All fees are non-refundable unless explicitly specified otherwise.',
  },
  {
    number: '09',
    title: 'Insurance',
    icon: '🛡️',
    content:
      'The Borrower may be required to obtain and maintain life insurance and/or property insurance for the duration of the loan tenure, as mandated by the lending institution.',
  },
  {
    number: '10',
    title: 'Borrower Obligations',
    icon: '📝',
    content:
      'The Borrower is obligated to provide accurate and complete information, make timely repayments, comply with all applicable legal norms, and promptly inform the Company of any material changes in financial status.',
  },
  {
    number: '11',
    title: 'Default',
    icon: '⚠️',
    content:
      'Non-payment of dues, misrepresentation of information, or violation of any loan terms may lead to recall of the entire outstanding loan amount and initiation of appropriate legal proceedings.',
  },
  {
    number: '12',
    title: 'Governing Law',
    icon: '🏛️',
    content:
      'This agreement shall be governed by and construed in accordance with the laws of India. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.',
  },
  {
    number: '13',
    title: 'Amendments',
    icon: '📄',
    content:
      'The Company reserves the right to modify, amend, or update these terms and conditions at any time with reasonable notice. Continued use of services post-amendment constitutes acceptance of revised terms.',
  },
  {
    number: '14',
    title: 'Consent',
    icon: '🤝',
    content:
      'The Borrower hereby consents to data verification through authorized agencies, credit bureau checks (CIBIL, Equifax, Experian, CRIF High Mark), and receiving communications via SMS, email, and phone.',
  },
  {
    number: '15',
    title: 'Indemnity',
    icon: '🔐',
    content:
      'The Borrower agrees to indemnify and hold the Company harmless against any losses, damages, costs, or liabilities arising from false information, misrepresentation, or non-compliance with these terms.',
  },
];

/* ── Animation Variants ──────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

/* ── Component ───────────────────────────────────────────── */
function LegalPage() {
  const [activeTab, setActiveTab] = useState('privacy');

  useSEO({
    title:
      activeTab === 'privacy'
        ? 'Privacy Policy — Data Protection & Customer Privacy'
        : 'Terms & Conditions — Loan Agreement Terms',
    description:
      activeTab === 'privacy'
        ? 'BEx Sigma Finance Privacy Policy. Learn how we collect, use, and protect your personal data during loan processing. Compliant with IT Act and Indian data protection laws.'
        : 'BEx Sigma Finance Terms & Conditions for loan services. Understand eligibility, repayment terms, interest rates, and borrower obligations.',
    canonical: activeTab === 'privacy' ? '/legal' : '/legal',
    keywords:
      activeTab === 'privacy'
        ? ['privacy policy', 'data protection', 'BEx Sigma Finance privacy', 'loan data security', 'customer privacy India']
        : ['terms and conditions', 'loan terms', 'loan agreement', 'borrower obligations', 'BEx Sigma Finance terms'],
  });

  const sections = activeTab === 'privacy' ? privacyPolicy : termsConditions;

  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title={activeTab === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
      >
        {activeTab === 'privacy'
          ? 'Your trust is our priority. Read how BEx Sigma Finance safeguards your personal information.'
          : 'Understand the terms governing our loan facilitation services and your rights as a borrower.'}
      </PageIntro>

      <section className="section legal-section">
        {/* ── Tab Switcher ──────────────────── */}
        <div className="legal-tabs" role="tablist" aria-label="Legal document tabs">
          <button
            role="tab"
            id="tab-privacy"
            aria-selected={activeTab === 'privacy'}
            aria-controls="panel-privacy"
            className={`legal-tab ${activeTab === 'privacy' ? 'active' : ''}`}
            onClick={() => setActiveTab('privacy')}
          >
            <span className="tab-icon">🛡️</span>
            Privacy Policy
          </button>
          <button
            role="tab"
            id="tab-terms"
            aria-selected={activeTab === 'terms'}
            aria-controls="panel-terms"
            className={`legal-tab ${activeTab === 'terms' ? 'active' : ''}`}
            onClick={() => setActiveTab('terms')}
          >
            <span className="tab-icon">📜</span>
            Terms & Conditions
          </button>
        </div>

        {/* ── Last Updated ──────────────────── */}
        <div className="legal-meta">
          <span className="legal-effective">
            <span className="meta-dot" />
            Effective Date: May 1, 2026
          </span>
          <span className="legal-version">Version 1.0</span>
        </div>

        {/* ── Content Panels ────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
            className="legal-content"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {sections.map((item) => (
              <motion.article
                key={item.number}
                className="legal-card readable-panel"
                variants={itemVariants}
              >
                <div className="legal-card-header">
                  <span className="legal-number">{item.number}</span>
                  <span className="legal-icon">{item.icon}</span>
                </div>
                <h3 className="legal-card-title">{item.title}</h3>
                <p className="legal-card-body">{item.content}</p>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Contact Footer ────────────────── */}
        <motion.div
          className="legal-contact readable-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="legal-contact-inner">
            <div className="legal-contact-info">
              <h3>Questions about our policies?</h3>
              <p>
                If you have any questions or concerns about our Privacy Policy or Terms &amp; Conditions,
                our team is here to help. We are committed to transparency and your complete satisfaction.
              </p>
            </div>
            <div className="legal-contact-actions">
              <a href="mailto:bexsigmatech@gmail.com" className="button button-primary">
                📧 Email Support
              </a>
              <a href="/contact" className="button button-secondary">
                💬 Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default LegalPage;

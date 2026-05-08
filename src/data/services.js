import homeLoanImage from '../images/home-loan.svg';
import personalLoanImage from '../images/personal-loan.svg';
import businessLoanImage from '../images/business-loan.svg';
import vehicleLoanImage from '../images/vehicle-loan.svg';
import propertyLoanImage from '../images/loan-against-property.svg';
import {
  HomeLoanInteractive,
  PersonalLoanInteractive,
  BusinessLoanInteractive,
  VehicleLoanInteractive,
  LoanAgainstPropertyInteractive,
  LoanConsultationInteractive,
  DocumentationSupportInteractive,
  BankTieupsInteractive,
  FastApprovalInteractive,
  EMIEligibilityInteractive,
  BalanceTransferInteractive,
  
} from '../components/interactive-images';

export const loanServices = [
  {
    title: 'Home Loan',
    slug: 'home-loan',
    description: 'New house purchase, construction loan, balance transfer, and home renovation support.',
    features: ['Low interest rates', 'Long tenure up to 30 years', 'High loan amount eligibility'],
    tag: 'Home',
    icon: 'HL',
    image: homeLoanImage,
    interactiveComponent: HomeLoanInteractive,
    detail:
      'Home loan support for salaried and self-employed applicants who want clear eligibility checks, bank comparison, EMI planning, and document guidance before applying.',
    benefits: ['Property purchase and construction support', 'Balance transfer review', 'Top-up and renovation options'],
    documents: ['PAN and Aadhaar', 'Income proof', 'Bank statements', 'Property papers'],
  },
   {
    title: 'Loan Against Property',
    slug: 'loan-against-property',
    description: 'Use owned property as collateral for higher loan amounts and longer repayment tenure.',
    features: ['Lower interest than personal loans', 'Long repayment tenure', 'Ideal for large expenses'],
    tag: 'Property',
    icon: 'LAP',
    image: propertyLoanImage,
    interactiveComponent: LoanAgainstPropertyInteractive,
    detail:
      'Loan against property support for large funding needs where an owned residential or commercial property can help secure better rates and longer tenure.',
    benefits: ['Higher loan amount potential', 'Useful for business or personal needs', 'Longer repayment window'],
    documents: ['KYC documents', 'Income proof', 'Property ownership papers', 'Existing loan details if any'],
  },
  {
    title: 'Business Loan',
    slug: 'business-loan',
    description: 'Startup funding, working capital, MSME loans, and growth capital for business owners.',
    features: ['Supports business growth', 'Flexible EMI options', 'Government schemes available'],
    tag: 'Business',
    icon: 'BL',
    image: businessLoanImage,
    interactiveComponent: BusinessLoanInteractive,
    detail:
      'Business loan guidance for working capital, expansion, machinery, inventory, and MSME funding, with attention to cash flow and repayment comfort.',
    benefits: ['Working capital and expansion funding', 'MSME and professional loan options', 'Secured and unsecured choices'],
    documents: ['KYC documents', 'Business registration proof', 'GST or ITR records', 'Bank statements'],
  },
   {
    title: 'Personal Loan',
    slug: 'personal-loan',
    description: 'Instant cash for medical needs, travel, education, family expenses, or emergency plans.',
    features: ['Quick approval in 24 to 48 hours', 'Minimal documentation', 'Flexible repayment'],
    tag: 'Personal',
    icon: 'PL',
    image: personalLoanImage,
    interactiveComponent: PersonalLoanInteractive,
    detail:
      'Personal loan assistance for quick unsecured funding, with lender matching based on income, credit score, existing EMI load, and required disbursal speed.',
    benefits: ['Emergency and planned expense funding', 'No collateral requirement', 'Multiple bank and NBFC options'],
    documents: ['PAN and Aadhaar', 'Salary slips or income proof', 'Bank statements', 'Employment details'],
  },
  {
    title: 'Vehicle Loan',
    slug: 'vehicle-loan',
    description: 'Car, bike, and commercial vehicle loans with quick eligibility review and disbursement.',
    features: ['Up to 90% funding', 'Low EMI options', 'Quick disbursement'],
    tag: 'Vehicle',
    icon: 'VL',
    image: vehicleLoanImage,
    interactiveComponent: VehicleLoanInteractive,
    detail:
      'Vehicle loan support for new, used, and commercial vehicles, including loan amount planning, down payment review, and fast lender comparison.',
    benefits: ['New and used vehicle funding', 'Commercial vehicle options', 'Flexible down payment planning'],
    documents: ['KYC documents', 'Income proof', 'Bank statements', 'Vehicle quotation'],
  },
];

export const supportServices = [
  {
    title: 'Loan Consultation',
    slug: 'loan-consultation',
    detail: 'Expert financial advice and profile-based suggestions.',
    icon: 'LC',
    interactiveComponent: LoanConsultationInteractive,
    benefits: ['Profile review', 'Loan product selection', 'Application readiness check'],
  },
  {
    title: 'Documentation Support',
    slug: 'documentation-support',
    detail: 'Assistance with KYC and document collection.',
    icon: 'DS',
    interactiveComponent: DocumentationSupportInteractive,
    benefits: ['KYC checklist', 'Income document review', 'Missing document guidance'],
  },
  {
    title: 'Bank Tie-ups',
    slug: 'bank-tie-ups',
    detail: 'Comparison across multiple Bank and NBFC partners.',
    icon: 'BT',
    interactiveComponent: BankTieupsInteractive,
    benefits: ['Bank and NBFC comparison', 'Rate and tenure review', 'Suitable lender matching'],
  },
  {
    title: 'Fast Approval',
    slug: 'fast-approval',
    detail: 'End-to-end status tracking and rapid processing.',
    icon: 'FA',
    interactiveComponent: FastApprovalInteractive,
    benefits: ['Application follow-up', 'Faster file movement', 'Status clarity'],
  },
  {
    title: 'EMI & Eligibility',
    slug: 'emi-eligibility',
    detail: 'Interactive calculators for informed decision making.',
    icon: 'EMI',
    interactiveComponent: EMIEligibilityInteractive,
    benefits: ['EMI planning', 'Eligibility estimate', 'Tenure and interest comparison'],
  },
  {
    title: 'Balance Transfer',
    slug: 'balance-transfer',
    detail: 'Optimization of existing debt to lower interest rates.',
    icon: 'BT',
    interactiveComponent: BalanceTransferInteractive,
    benefits: ['Existing loan review', 'Interest saving estimate', 'Transfer process support'],
  },
 
];

export const allServices = [
  ...loanServices.map((service) => ({ ...service, type: 'Loan Product' })),
  ...supportServices.map((service) => ({
    ...service,
    type: 'Support Service',
    description: service.detail,
    features: service.benefits,
    tag: service.icon,
    detail:
      `${service.detail} This service helps applicants reduce confusion and move through the loan journey with better preparation.`,
    documents: ['Basic KYC', 'Applicant profile details', 'Existing loan or income details when applicable'],
  })),
];

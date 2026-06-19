import homeLoanImage from '../images/home-loan.png';
import personalLoanImage from '../images/personal-loan.png';
import businessLoanImage from '../images/business-loan.png';
import vehicleLoanImage from '../images/vehicle-loan.png';
import propertyLoanImage from '../images/property-loan.png';
import fdImage from '../images/fixed-deposit.png';
import rdImage from '../images/recurring-deposit.png';
import childEducationImage from '../images/child-education.png';
import retirementPlanningImage from '../images/retirement-planning.png';
import educationLoanImage from '../images/education-loan.png';
import healthInsuranceImage from '../images/health-insurance.png';
import lifeInsuranceImage from '../images/life-insurance.png';

export const loanServices = [
  {
    title: 'Home Loan',
    slug: 'home-loan',
    description: 'New house purchase, construction loan, balance transfer, and home renovation support.',
    features: ['Low interest rates', 'Long tenure up to 30 years', 'High loan amount eligibility'],
    tag: 'Home',
    icon: 'HL',
    image: homeLoanImage,
    interactiveComponent: null,
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
    interactiveComponent: null,
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
    interactiveComponent: null,
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
    interactiveComponent: null,
    detail:
      'Personal loan assistance for quick unsecured funding, with lender matching based on income, credit score, existing EMI load, and required disbursal speed.',
    benefits: ['Emergency and planned expense funding', 'No collateral requirement', 'Multiple bank and NBFC options'],
    documents: ['PAN and Aadhaar', 'Salary slips or income proof', 'Bank statements', 'Employment details'],
  },
  {
    title: 'Education Loan',
    slug: 'education-loan',
    description: 'Funding for top universities in India and abroad, covering tuition fees, accommodation, and travel.',
    features: ['High loan limits', 'Flexible moratorium period', 'Co-applicant flexibility'],
    tag: 'Education',
    icon: 'EL',
    image: educationLoanImage,
    interactiveComponent: null,
    detail:
      'Structured education loan support for students looking for admissions in India or abroad. Covers complete educational expenses, with competitive rates and student-friendly repayment terms.',
    benefits: ['Covers up to 100% of education expenses', 'Tax benefits under Section 80E', 'Customized repayment structures'],
    documents: ['Admission letter from college/university', 'Academic mark sheets', 'KYC of student & co-borrower', 'Income proof of co-borrower'],
  },
  {
    title: 'Vehicle Loan',
    slug: 'vehicle-loan',
    description: 'Car, bike, and commercial vehicle loans with quick eligibility review and disbursement.',
    features: ['Up to 90% funding', 'Low EMI options', 'Quick disbursement'],
    tag: 'Vehicle',
    icon: 'VL',
    image: vehicleLoanImage,
    interactiveComponent: null,
    detail:
      'Vehicle loan support for new, used, and commercial vehicles, including loan amount planning, down payment review, and fast lender comparison.',
    benefits: ['New and used vehicle funding', 'Commercial vehicle options', 'Flexible down payment planning'],
    documents: ['KYC documents', 'Income proof', 'Bank statements', 'Vehicle quotation'],
  },
];

export const wealthServices = [
  {
    title: 'Fixed Deposit',
    slug: 'fixed-deposit',
    description: 'Secure, guaranteed return investment options with flexible tenures and attractive interest rates.',
    features: ['Guaranteed returns', 'Flexible tenure choices', 'Loan/Overdraft facility'],
    tag: 'Wealth',
    icon: 'FD',
    image: fdImage,
    interactiveComponent: null,
    detail:
      'Assist in finding and booking the highest yielding Fixed Deposits across partner banks and corporate entities, ensuring safety and growth of capital.',
    benefits: ['Higher interest for senior citizens', 'Flexible payout intervals (monthly/quarterly)', 'Premature withdrawal option'],
    documents: ['PAN and Aadhaar card', 'Bank account details', 'Recent photograph'],
  },
  {
    title: 'Recurring Deposit',
    slug: 'recurring-deposit',
    description: 'Save a fixed amount monthly to build a disciplined savings pool with compound interest returns.',
    features: ['Disciplined monthly savings', 'Compounded interest growth', 'Low minimum starting amount'],
    tag: 'Wealth',
    icon: 'RD',
    image: rdImage,
    interactiveComponent: null,
    detail:
      'Facilitate systematic monthly savings plan setup with top financial institutions, helping you build wealth incrementally.',
    benefits: ['Automated monthly savings', 'Higher returns than savings accounts', 'Tenure options from 12 to 120 months'],
    documents: ['KYC documents (Aadhaar & PAN)', 'Active savings account credentials', 'Nominee details'],
  },
];

export const fundServices = [
  {
    title: 'Child Education',
    slug: 'child-education',
    description: 'Plan and invest in customized mutual fund portfolios to secure your child\'s future higher education.',
    features: ['Goal-targeted portfolios', 'SIP or lump sum investments', 'Inflation-adjusted projections'],
    tag: 'Funds',
    icon: 'CEP',
    image: childEducationImage,
    interactiveComponent: null,
    detail:
      'Personalized mutual fund selection tailored to meet the future cost of higher education, balancing risk and long-term capital appreciation.',
    benefits: ['Tax efficient wealth growth', 'Diversified mutual fund selection', 'Automatic rebalancing support'],
    documents: ['KYC of parent/guardian', 'Bank account details for SIP', 'Child\'s birth certificate copy'],
  },
  {
    title: 'Retirement Planning',
    slug: 'retirement-planning',
    description: 'Build a substantial post-retirement corpus with tax-efficient, growth-oriented mutual funds.',
    features: ['Long-term wealth compounding', 'Tax savings under Section 80C', 'Customizable withdrawal plans (SWP)'],
    tag: 'Funds',
    icon: 'RP',
    image: retirementPlanningImage,
    interactiveComponent: null,
    detail:
      'Strategic retirement asset allocation mapping to ensure financial independence, with systematic investment and pension planning.',
    benefits: ['Diversified mutual fund basket', 'Systematic withdrawal plans post-retirement', 'Inflation protection'],
    documents: ['PAN and Aadhaar', 'Address proof', 'Income proof (for high-value SIPs)'],
  },
];

export const insuranceServices = [
  {
    title: 'Health Insurance',
    slug: 'health-insurance',
    description: 'Comprehensive medical coverage for family and individual hospitalization, critical illness, and day-care.',
    features: ['Cashless treatment at network hospitals', 'Tax benefits under Sec 80D', 'Pre and post-hospitalization cover'],
    tag: 'Insurance',
    icon: 'HI',
    image: healthInsuranceImage,
    interactiveComponent: null,
    detail:
      'Profile-based health insurance advisory with cashless hospital networks, quick claim assistance, and maximum cover benefits.',
    benefits: ['No claim bonus protection', 'Critical illness add-ons', 'Comprehensive family floater options'],
    documents: ['Proposal form', 'Medical history declaration', 'KYC and age proof'],
  },
  {
    title: 'Life Insurance',
    slug: 'life-insurance',
    description: 'Secure your family\'s financial future with Term Life or Endowment plans offering high coverage.',
    features: ['Affordable term insurance premiums', 'High sum assured protection', 'Critical illness riders'],
    tag: 'Insurance',
    icon: 'LI',
    image: lifeInsuranceImage,
    interactiveComponent: null,
    detail:
      'Structured life cover planning to secure your family\'s future, ensuring outstanding liabilities are covered in all circumstances.',
    benefits: ['Tax exemption on maturity & payouts', 'Accidental death benefit riders', 'Flexible premium payment options'],
    documents: ['Income verification (salary slips/ITR)', 'KYC documents', 'Medical report (if required)'],
  },
  {
    title: 'Vehicle Insurance',
    slug: 'vehicle-insurance',
    description: 'Zero depreciation, third-party, and comprehensive policies for cars, two-wheelers, and commercial vehicles.',
    features: ['Hassle-free cashless garage claims', 'Zero depreciation covers', 'Instant policy renewal'],
    tag: 'Insurance',
    icon: 'VI',
    image: vehicleLoanImage,
    interactiveComponent: null,
    detail:
      'Quick quotes and comparison for third-party and own damage insurance covers for cars, bikes, and business fleets.',
    benefits: ['No claim bonus transfer assistance', '24/7 roadside assistance add-on', 'Engine protection and key replacement cover'],
    documents: ['Previous policy details', 'Vehicle RC copy', 'Owner-driver KYC'],
  },
];

export const supportServices = [
  ...wealthServices,
  ...fundServices,
  ...insuranceServices,
];

export const allServices = [
  ...loanServices.map((service) => ({ ...service, type: 'Loan Product' })),
  ...wealthServices.map((service) => ({ ...service, type: 'Wealth Management' })),
  ...fundServices.map((service) => ({ ...service, type: 'Mutual Fund' })),
  ...insuranceServices.map((service) => ({ ...service, type: 'Insurance' })),
];

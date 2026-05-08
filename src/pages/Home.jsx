import Hero from '../components/Hero.jsx';
import LoanTypes from '../components/LoanTypes.jsx';
import Calculator from '../components/Calculator.jsx';
import SupportServices from '../components/SupportServices.jsx';
import LoanShowcase from '../components/LoanShowcase.jsx';
import Process from '../components/Process.jsx';
import LoanPlans from '../components/LoanPlans.jsx';
import LoanFAQ from '../components/LoanFAQ.jsx';
import FinalCTA from '../components/FinalCTA.jsx';
import { useSEO } from '../hooks/useSEO.js';

function Home() {
  useSEO({
    title: 'Best Loan & Finance Consultancy India — Home Loan, Personal Loan, Business Loan',
    description: "Bex Sigma Finance is India's trusted loan & finance consultancy. Get fast approvals on home loans, personal loans, business loans, vehicle loans. Compare banks, check EMI, apply in minutes.",
    canonical: '/',
    keywords: ['finance company India', 'loan consultancy India', 'home loan', 'personal loan', 'business loan', 'EMI calculator', 'loan approval', 'NBFC loans', 'fast loan approval India', 'best loan rates', 'finance services', 'Bex Sigma Finance'],
  });

  return (
    <>
      <Hero />
      <LoanShowcase />
      <LoanTypes />
      <SupportServices />
      <Calculator />
      <Process />
      <LoanPlans />
      <LoanFAQ />
      <FinalCTA />
    </>
  );
}

export default Home;

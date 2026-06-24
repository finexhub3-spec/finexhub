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
    title: "FinEx Hub — India's Premier Finance & Loan Consultancy",
    description: "FinEx Hub is India's trusted finance and loan consultancy. Get expert guidance on home loans, LAP, business loans, vehicle loans, wealth management, mutual funds, and insurance. Compare, plan, and apply.",
    canonical: '/',
    keywords: ['finance company India', 'loan consultancy India', 'home loan', 'personal loan', 'business loan', 'EMI calculator', 'loan approval', 'NBFC loans', 'fast loan approval India', 'best loan rates', 'finance services', 'FinEx Hub', 'wealth management India', 'mutual funds planning', 'insurance agent'],
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

import Calculator from '../components/Calculator.jsx';
import PageIntro from '../components/PageIntro.jsx';
import { useSEO } from '../hooks/useSEO.js';

function CalculatorPage() {
  useSEO({
    title: 'Free EMI Calculator — Calculate Home Loan, Personal Loan EMI Online',
    description: 'Use Bex Sigma Finance free EMI calculator to instantly calculate your monthly loan payments. Find the best EMI for home loans, personal loans, and business loans in India.',
    canonical: '/calculator',
    keywords: ['EMI calculator', 'home loan EMI', 'personal loan EMI calculator', 'loan calculator India', 'monthly loan payment', 'loan interest calculator', 'free EMI calculator online', 'Bex Sigma Finance calculator'],
  });

  return (
    <>
      <PageIntro eyebrow="EMI Calculator" title="Calculate Your Loan EMI">
        Estimate monthly payments before you choose amount, tenure, and lender direction.
      </PageIntro>
      <Calculator />
    </>
  );
}

export default CalculatorPage;

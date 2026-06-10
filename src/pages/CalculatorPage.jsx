import Calculator from '../components/Calculator.jsx';
import PageIntro from '../components/PageIntro.jsx';
import { useSEO } from '../hooks/useSEO.js';

function CalculatorPage() {
  useSEO({
    title: 'Free EMI Calculator — Plan Your Monthly Payments Online',
    description: 'Use FinEx Hub free EMI calculator to instantly calculate your monthly loan payments. Estimate EMIs for home loans, personal loans, business loans, and education loans in India.',
    canonical: '/calculator',
    keywords: ['EMI calculator', 'home loan EMI', 'personal loan EMI calculator', 'loan calculator India', 'monthly loan payment', 'loan interest calculator', 'free EMI calculator online', 'FinEx Hub calculator'],
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

import Process from '../components/Process.jsx';
import PageIntro from '../components/PageIntro.jsx';
import { useSEO } from '../hooks/useSEO.js';

function ProcessPage() {
  useSEO({
    title: 'How to Apply for a Loan — Simple Loan Approval Process in India',
    description: 'Learn how to apply for a loan with Bex Sigma Finance. Simple steps from eligibility check to loan disbursement. Fast, transparent, and hassle-free loan process in India.',
    canonical: '/process',
    keywords: ['how to apply for home loan', 'loan approval process India', 'loan application steps', 'fast loan approval', 'loan eligibility check', 'loan disbursement process', 'Bex Sigma Finance process'],
  });

  return (
    <>
      <PageIntro eyebrow="How It Works" title="Simple Steps to Your Loan">
        Follow a structured path from profile discovery to approval support and disbursement.
      </PageIntro>
      <Process />
    </>
  );
}

export default ProcessPage;

import Process from '../components/Process.jsx';
import PageIntro from '../components/PageIntro.jsx';
import { useSEO } from '../hooks/useSEO.js';

function ProcessPage() {
  useSEO({
    title: 'How to Apply — Simple Financial Process in India',
    description: 'Learn how to apply for loans, set up wealth accounts, mutual funds, or get insurance cover with FinEx Hub. Simple steps from profile match to final approval in India.',
    canonical: '/process',
    keywords: ['how to apply for home loan', 'loan approval process India', 'loan application steps', 'fast loan approval', 'loan eligibility check', 'wealth management setup', 'mutual funds planning', 'FinEx Hub process'],
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

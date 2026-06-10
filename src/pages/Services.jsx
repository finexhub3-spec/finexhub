import LoanTypes from '../components/LoanTypes.jsx';
import SupportServices from '../components/SupportServices.jsx';
import Process from '../components/Process.jsx';
import PageIntro from '../components/PageIntro.jsx';
import ServiceDirectory from '../components/ServiceDirectory.jsx';
import { useSEO } from '../hooks/useSEO.js';

function Services() {
  useSEO({
    title: 'Financial Services — Loans, Wealth Management, Mutual Funds, Insurance',
    description: 'Explore all financial services by FinEx Hub — home loans, personal loans, business loans, vehicle loans, education loans, wealth management, fixed deposits, mutual funds, and insurance across India.',
    canonical: '/services',
    keywords: ['finance services India', 'home loan services', 'personal loan India', 'business loan consultancy', 'vehicle loan', 'education loan', 'wealth management', 'fixed deposit', 'recurring deposit', 'mutual funds', 'insurance services', 'FinEx Hub'],
  });

  return (
    <>
      <PageIntro eyebrow="Our Services" title="All Services Available">
        Explore our complete loan service structure, support modules, and approval workflow.
      </PageIntro>
      <ServiceDirectory />
      <LoanTypes />
      <SupportServices />
      <Process />
    </>
  );
}

export default Services;

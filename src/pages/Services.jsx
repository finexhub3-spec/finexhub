import LoanTypes from '../components/LoanTypes.jsx';
import SupportServices from '../components/SupportServices.jsx';
import Process from '../components/Process.jsx';
import PageIntro from '../components/PageIntro.jsx';
import ServiceDirectory from '../components/ServiceDirectory.jsx';
import { useSEO } from '../hooks/useSEO.js';

function Services() {
  useSEO({
    title: 'Loan & Finance Services — Home Loan, Personal Loan, Business Loan, Vehicle Loan',
    description: 'Explore all finance and loan services by Bex Sigma Finance — home loans, personal loans, business loans, vehicle loans, education loans, loan against property, and balance transfer across India.',
    canonical: '/services',
    keywords: ['finance services India', 'home loan services', 'personal loan India', 'business loan consultancy', 'vehicle loan', 'education loan', 'loan against property', 'balance transfer loan', 'Bex Sigma Finance'],
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

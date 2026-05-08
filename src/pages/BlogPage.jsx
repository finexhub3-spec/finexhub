import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import PageIntro from '../components/PageIntro.jsx';
import { useSEO } from '../hooks/useSEO.js';

const articles = [
  {
    category: 'EMI Planning',
    title: 'How to optimize your monthly payments',
    body: 'Learn simple strategies that keep your EMI affordable while accelerating loan payoff. Compare prepayment, refinancing, and tenure choices before you apply.',
  },
  {
    category: 'Business Loans',
    title: 'Scaling growth with the right funding',
    body: 'Match your loan type to your business goals and preserve liquidity for expansion. Review working capital, equipment financing, government schemes, and collateral needs.',
  },
  {
    category: 'Loan Strategy',
    title: 'Choosing the best loan for your needs',
    body: 'Get practical advice on interest rates, repayment terms, processing fees, documents, and faster qualification. Compare fixed and floating rates with confidence.',
  },
  {
    category: 'Personal Finance',
    title: 'Building wealth through smart borrowing',
    body: 'Use loans as a planned financial tool. Understand home loan benefits, education loan outcomes, risk control, tax benefits, and long-term impact.',
  },
  {
    category: 'Customer Requirements',
    title: 'Understanding Your Loan Eligibility Criteria',
    body: 'Discover the key factors that determine your loan approval chances. Learn about income requirements, credit score thresholds, age limits, and employment stability factors that lenders consider.',
  },
  {
    category: 'Customer Requirements',
    title: 'Essential Documents for Loan Application',
    body: 'Prepare your loan application with confidence by knowing exactly which documents you need. From identity proofs to income statements, learn the complete checklist for different loan types.',
  },
  {
    category: 'Customer Requirements',
    title: 'Income Assessment: What Lenders Look For',
    body: 'Understand how lenders evaluate your income stability and earning potential. Learn about salary slips, tax returns, bank statements, and other income verification methods.',
  },
  {
    category: 'Customer Requirements',
    title: 'Credit History and Score Requirements',
    body: 'Your credit score can make or break your loan application. Learn how to check your CIBIL score, understand credit reports, and improve your creditworthiness before applying.',
  },
  {
    category: 'Customer Requirements',
    title: 'Property Documents for Home Loans',
    body: 'Navigate the complex world of property documentation with ease. Understand title deeds, encumbrance certificates, property tax receipts, and legal clearances required for home loans.',
  },
  {
    category: 'Customer Requirements',
    title: 'Business Documentation for Entrepreneurs',
    body: 'Get your business loan application ready with proper documentation. Learn about GST returns, financial statements, business licenses, and ownership papers required by lenders.',
  },
  {
    category: 'Customer Requirements',
    title: 'Age and Employment Requirements',
    body: 'Know the age limits and employment criteria for different loan types. Understand how your job stability, company type, and work experience affect your loan eligibility.',
  },
  {
    category: 'Customer Requirements',
    title: 'Collateral and Security Requirements',
    body: 'Learn about collateral requirements for secured loans. Understand property valuation, gold loan assessments, and other security arrangements that reduce lender risk.',
  },
  {
    category: 'Customer Requirements',
    title: 'Co-applicant and Guarantor Requirements',
    body: 'When you need additional support for loan approval, understand co-applicant and guarantor requirements. Learn about their income, documents, and legal responsibilities.',
  },
  {
    category: 'Customer Requirements',
    title: 'Processing Fees and Charges Structure',
    body: 'Understand the complete cost structure of loan processing. Learn about application fees, valuation charges, legal fees, and other expenses involved in getting a loan.',
  },
  {
    category: 'Customer Requirements',
    title: 'Timeline and Processing Requirements',
    body: 'Plan your loan application timeline effectively. Understand document verification periods, credit assessment timeframes, and legal processing requirements for faster approval.',
  },
];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function Highlight({ text, query }) {
  if (!query.trim()) {
    return text;
  }

  const parts = text.split(new RegExp(`(${escapeRegExp(query.trim())})`, 'ig'));
  return parts.map((part, index) =>
    part.toLowerCase() === query.trim().toLowerCase() ? (
      <mark key={`${part}-${index}`}>{part}</mark>
    ) : (
      part
    )
  );
}

function BlogPage() {
  useSEO({
    title: 'Loan Guide & Finance Insights — EMI Tips, Home Loan Advice, Loan Eligibility',
    description: 'Read expert loan and finance guides from Bex Sigma Finance. Learn about EMI planning, home loan tips, business funding, credit scores, loan eligibility, and required documents for loan approval in India.',
    canonical: '/blog',
    keywords: ['home loan guide India', 'how to get personal loan', 'loan eligibility tips', 'EMI planning', 'CIBIL score for loan', 'loan documents required', 'business loan tips India', 'finance guide India', 'Bex Sigma Finance blog'],
  });

  const [query, setQuery] = useState('');

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return articles;
    }

    return articles.filter((article) =>
      [article.category, article.title, article.body].join(' ').toLowerCase().includes(normalizedQuery)
    );
  }, [query]);

  return (
    <>
      <PageIntro eyebrow="Knowledge Hub" title="Searchable loan insights">
        Find guidance on EMI planning, business funding, customer requirements, documents, interest rates, and smart borrowing strategies.
      </PageIntro>

      <section className="section blog-list-section">
        <motion.div
          className="search-panel"
          role="search"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.label
            htmlFor="article-search"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Search articles
          </motion.label>
          <motion.input
            id="article-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search EMI, business, documents, requirements, interest..."
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileFocus={{ scale: 1.02 }}
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            key={filteredArticles.length}
          >
            {filteredArticles.length} results
          </motion.span>
        </motion.div>

        <div className="article-grid">
          {filteredArticles.map((article, index) => (
            <motion.article
              className="readable-card"
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true }}
            >
              <motion.span
                className="eyebrow"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              >
                <Highlight text={article.category} query={query} />
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
              >
                <Highlight text={article.title} query={query} />
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
              >
                <Highlight text={article.body} query={query} />
              </motion.p>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}

export default BlogPage;

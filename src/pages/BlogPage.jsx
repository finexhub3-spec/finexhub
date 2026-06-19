import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import PageIntro from '../components/PageIntro.jsx';
import { useSEO } from '../hooks/useSEO.js';

const articles = [
  {
    category: 'About FinEx Hub',
    title: 'What is FinEx Hub & How Do We Work?',
    body: 'FinEx Hub is India\'s premier digital financial consultancy. We act as your single point of contact, evaluating your financial profile to match you with custom loan offerings, mutual fund investments, and insurance policies from over 30 leading banks and financial institutions.',
  },
  {
    category: 'About FinEx Hub',
    title: 'Is Consultation on FinEx Hub Free of Cost?',
    body: 'Yes, our core consultation services, eligibility analysis, and EMI planning are 100% free for applicants. We charge zero hidden processing fees, providing complete transparency throughout your financial planning and loan application journey.',
  },
  {
    category: 'About FinEx Hub',
    title: 'Navigating the Service Directory & Portal',
    body: 'Our Service Directory section is structured to help you explore and apply. Browse loans, wealth tools, mutual funds, or insurance. Once you select a service, view the specific details, and use the "Apply Now" form to submit a secure request to our team.',
  },
  {
    category: 'General Doubts',
    title: 'Does checking my loan eligibility impact my credit score?',
    body: 'Checking your loan options or eligibility with FinEx Hub counts as a "soft inquiry" and has absolutely zero impact on your CIBIL credit score. A "hard inquiry" only occurs when a financial partner processes your formal application for final approval.',
  },
  {
    category: 'General Doubts',
    title: 'How secure is my financial data and uploaded document list?',
    body: 'We prioritize your privacy above all. FinEx Hub utilizes bank-grade SSL encryption and secure data policies. Your submitted documents (salary slips, identity proof, tax records) are only shared with authorized lender representatives during your approval process.',
  },
  {
    category: 'General Doubts',
    title: 'What is the difference between Fixed and Floating interest rates?',
    body: 'Fixed interest rates remain constant throughout the loan tenure, giving you predictable EMIs. Floating interest rates fluctuate based on RBI repo rates, meaning your EMI or loan tenure might change over time depending on economic conditions.',
  },
  {
    category: 'Financial Myths',
    title: 'Myth: The lowest interest rate always yields the cheapest loan',
    body: 'Reality Check: A low interest rate doesn\'t guarantee the lowest cost. Lenders often add hidden administrative charges, high processing fees, or severe prepayment penalties. Always evaluate the Total Cost of Credit before finalizing.',
  },
  {
    category: 'Financial Myths',
    title: 'Myth: Collateral is always mandatory for business loans',
    body: 'Reality Check: Many entrepreneurs believe they must pledge property to get capital. However, government schemes like CGTMSE and NBFC-sponsored unsecured business loans offer collateral-free funding up to ₹5 Crore based on annual business turnover.',
  },
  {
    category: 'Financial Myths',
    title: 'Myth: Having a high monthly salary guarantees loan approval',
    body: 'Reality Check: A high salary is only half the story. If your current Fixed Obligation to Income Ratio (FOIR) is high (i.e. you already pay heavy EMIs), lenders will reject new requests. Credit history and job stability are equally vital.',
  },
  {
    category: 'Market News',
    title: 'RBI Repo Rate Updates and Impact on Home Loan EMIs',
    body: 'With the Reserve Bank of India adjusting benchmark repo rates, banks are shifting their interest rates. Floating rate home loans and LAPs will experience adjustments in monthly payments or tenure. We recommend reviewing refinancing options if your interest rate rises.',
  },
  {
    category: 'Market News',
    title: 'RBI\'s New Digital Lending Guidelines: Safe Borrowing Tips',
    body: 'The RBI has introduced updated regulations for digital lending to protect consumers. Loans must be disbursed directly from lender bank accounts, and key fact statements must display all fees transparently. Avoid unverified mobile apps and use recognized consultancies.',
  },
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
    title: 'Business Documentation for Entrepreneurs',
    body: 'Get your business loan application ready with proper documentation. Learn about GST returns, financial statements, business licenses, and ownership papers required by lenders.',
  }
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
    title: 'Financial Guides & Insights — FinEx Hub Knowledge Base',
    description: 'Read expert financial and loan guides from FinEx Hub. Learn about EMI planning, home loan tips, business funding, wealth management, mutual funds, and insurance requirements in India.',
    canonical: '/blog',
    keywords: [
      'finance guide India',
      'home loan guide India',
      'how to get personal loan',
      'loan eligibility tips',
      'EMI planning',
      'wealth management guide',
      'mutual funds checklist',
      'insurance tips',
      'FinEx Hub blog',
      'loan myths',
      'credit score check impact',
      'fixed floating interest rates',
      'RBI repo rate updates'
    ],
  });

  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Dynamically extract categories in a stable order
  const categories = useMemo(() => {
    return ['All', ...new Set(articles.map((article) => article.category))];
  }, []);

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch =
        !normalizedQuery ||
        [article.category, article.title, article.body].join(' ').toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesSearch;
    });
  }, [query, selectedCategory]);

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

        {/* Category Filter Tabs */}
        <motion.div
          className="category-filters-container"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="category-filters">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <motion.button
                  key={cat}
                  type="button"
                  className={`category-chip ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-category-pill"
                      className="active-pill-bg"
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}
                  <span className="chip-text">{cat}</span>
                </motion.button>
              );
            })}
          </div>
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
                delay: Math.min(index * 0.05, 0.4), // Cap delay so large lists don't animate forever
                ease: "easeOut"
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 }
              }}
              layout
              viewport={{ once: true }}
            >
              <motion.span
                className="eyebrow"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05 + 0.1, 0.5) }}
              >
                <Highlight text={article.category} query={query} />
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05 + 0.15, 0.65) }}
              >
                <Highlight text={article.title} query={query} />
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05 + 0.2, 0.8) }}
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

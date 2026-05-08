import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import BackgroundLayers from './components/BackgroundLayers.jsx';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';

// Home loads immediately — it's the entry point
import Home from './pages/Home.jsx';
import About from './components/About.jsx';

// All other pages lazy loaded — only fetched when user navigates to them
const Services       = lazy(() => import('./pages/Services.jsx'));
const ServiceDetail  = lazy(() => import('./pages/ServiceDetail.jsx'));
const CalculatorPage = lazy(() => import('./pages/CalculatorPage.jsx'));
const BlogPage       = lazy(() => import('./pages/BlogPage.jsx'));
const ProcessPage    = lazy(() => import('./pages/ProcessPage.jsx'));

const ContactPage    = lazy(() => import('./pages/ContactPage.jsx'));
const LegalPage      = lazy(() => import('./pages/LegalPage.jsx'));
 
// Minimal inline fallback — no extra component needed
function PageFallback() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.4,
      fontSize: '0.9rem',
      color: 'var(--text, #5d6a64)',
    }}>
      Loading…
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-shell">
        <BackgroundLayers />
        <Navigation />
        <main className="page-shell">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/"               element={<Home />} />
              <Route path="/about"          element={<About />} />
              <Route path="/services"       element={<Services />} />
              <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
              <Route path="/calculator"     element={<CalculatorPage />} />
              <Route path="/blog"           element={<BlogPage />} />
              <Route path="/process"        element={<ProcessPage />} />
             
              <Route path="/contact"        element={<ContactPage />} />
              <Route path="/legal"          element={<LegalPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

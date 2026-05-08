import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { loanServices } from '../data/services.js';
import './LoanTypes.css';

/* ── Animated counter ───────────────────────────────────────── */
function AnimatedCounter({ target, suffix = '', duration = 1600 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const ran = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !ran.current) {
        ran.current = true;
        const t0 = performance.now();
        const tick = (now) => {
          const p = Math.min((now - t0) / duration, 1);
          setCount(Math.round((1 - Math.pow(1 - p, 3)) * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return <span ref={ref}>{count.toLocaleString('en-IN')}{suffix}</span>;
}

/* ── SVG Ring Progress ──────────────────────────────────────── */
function RingProgress({ pct, color = '#bdf26d', size = 56, stroke = 5, label }) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  return (
    <div className="lt2-ring-wrap">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={stroke} />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none"
          stroke={color} strokeWidth={stroke}
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: 'stroke-dasharray 1.2s cubic-bezier(0.22,1,0.36,1)' }}
        />
        <text x="50%" y="52%" dominantBaseline="middle" textAnchor="middle"
          fill={color} fontSize="11" fontWeight="900">{pct}%</text>
      </svg>
      {label && <span className="lt2-ring-label">{label}</span>}
    </div>
  );
}

/* ── Live Rate Ticker ───────────────────────────────────────── */
const RATE_DATA = [
  { bank: 'SBI', rate: '8.50%' }, { bank: 'HDFC', rate: '8.75%' },
  { bank: 'ICICI', rate: '8.80%' }, { bank: 'Axis', rate: '8.90%' },
  { bank: 'Kotak', rate: '8.65%' }, { bank: 'PNB', rate: '8.45%' },
];
function RateTicker() {
  return (
    <div className="lt2-ticker" aria-label="Live indicative rates">
      <span className="lt2-ticker-label">Live Rates</span>
      <div className="lt2-ticker-track">
        <div className="lt2-ticker-inner">
          {[...RATE_DATA, ...RATE_DATA].map((r, i) => (
            <span key={i} className="lt2-ticker-item">
              <b>{r.bank}</b> {r.rate}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Data ───────────────────────────────────────────────────── */
const STATS = [
  { label: 'Loans Processed', target: 3800, suffix: '+', accent: '#bdf26d' },
  { label: 'Approval Rate',   target: 94,   suffix: '%', accent: '#65d6ad' },
  { label: 'Bank Partners',   target: 25,   suffix: '+', accent: '#f9fff0' },
  { label: 'Years Active',    target: 8,    suffix: '+', accent: '#bdf26d' },
];

const LOAN_META = {
  'home-loan':             { ring: 92, ringLabel: 'Eligibility', rate: '8.50%', tenure: '30 yrs', color: '#bdf26d' },
  'loan-against-property': { ring: 85, ringLabel: 'LTV Ratio',  rate: '9.20%', tenure: '20 yrs', color: '#65d6ad' },
  'business-loan':         { ring: 78, ringLabel: 'Approval',   rate: '11.0%', tenure: '7 yrs',  color: '#f9b84b' },
  'personal-loan':         { ring: 89, ringLabel: 'Match Score', rate: '10.5%', tenure: '5 yrs',  color: '#a78bfa' },
  'vehicle-loan':          { ring: 95, ringLabel: 'Coverage',   rate: '8.80%', tenure: '7 yrs',  color: '#38bdf8' },
};

const ICONS = {
  Home: '🏠', Property: '🏢', Business: '💼', Personal: '👤', Vehicle: '🚗',
};

/* ── Tilt card hook ─────────────────────────────────────────── */
function useTilt() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top)  / r.height - 0.5);
  };
  const onLeave = () => { x.set(0); y.set(0); };
  return { rotateX, rotateY, onMove, onLeave };
}

/* ── Main component ─────────────────────────────────────────── */
export default function LoanTypes() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = loanServices[activeIdx];
  const meta   = LOAN_META[active.slug] ?? { ring: 80, ringLabel: 'Score', rate: '9.00%', tenure: '10 yrs', color: '#bdf26d' };
  const tilt   = useTilt();

  return (
    <section className="lt2-section" id="loans">

      {/* ── Orb background glows ─────────────────────────────── */}
      <div className="lt2-orb lt2-orb--a" aria-hidden="true" />
      <div className="lt2-orb lt2-orb--b" aria-hidden="true" />
      <div className="lt2-orb lt2-orb--c" aria-hidden="true" />

      {/* ── Rate ticker ──────────────────────────────────────── */}
      <div className="lt2-ticker-row">
        <RateTicker />
      </div>

      {/* ── Top header + stats ───────────────────────────────── */}
      <div className="lt2-top">
        <motion.div
          className="lt2-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="lt2-eyebrow">
            <span className="lt2-eyebrow-dot" />
            Loan products
          </span>
          <h2 className="lt2-title">The right loan,<br /> <em>right now.</em></h2>
          <p className="lt2-subtitle">
            Select any loan type to explore eligibility, features, and how we help you get approved faster.
          </p>
        </motion.div>

        <motion.div
          className="lt2-stats"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.14 }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="lt2-stat">
              <strong style={{ color: s.accent }}>
                <AnimatedCounter target={s.target} suffix={s.suffix} />
              </strong>
              <span>{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Body ─────────────────────────────────────────────── */}
      <div className="lt2-body">

        {/* LEFT nav */}
        <motion.nav
          className="lt2-nav"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          aria-label="Loan type selector"
        >
          {loanServices.map((loan, i) => (
            <button
              key={loan.slug}
              className={`lt2-nav-btn${activeIdx === i ? ' lt2-nav-btn--active' : ''}`}
              onClick={() => setActiveIdx(i)}
            >
              <span className="lt2-nav-icon">{ICONS[loan.tag] ?? '📄'}</span>
              <span className="lt2-nav-info">
                <span className="lt2-nav-name">{loan.title}</span>
                <span className="lt2-nav-teaser">{loan.features[0]}</span>
              </span>
              <svg className="lt2-nav-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M5 8h6M8 5l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {activeIdx === i && (
                <motion.span className="lt2-nav-pill" layoutId="lt2-pill" transition={{ duration: 0.3, ease: [0.22,1,0.36,1] }} />
              )}
            </button>
          ))}

          {/* Quick rate chip below nav */}
          <div className="lt2-rate-chip">
            <span className="lt2-rate-chip-dot" />
            <span>Starting from <b>8.45% p.a.</b></span>
          </div>
        </motion.nav>

        {/* RIGHT spotlight */}
        <div className="lt2-spotlight">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.slug}
              className="lt2-card"
              style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformStyle: 'preserve-3d' }}
              onMouseMove={tilt.onMove}
              onMouseLeave={tilt.onLeave}
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.44, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* image column */}
              <div className="lt2-card-img">
                <img src={active.image} alt={active.title} loading="lazy" decoding="async" />
                <div className="lt2-card-img-overlay" />
                <span className="lt2-card-badge">{active.tag}</span>

                {/* floating stats chips on image */}
                <div className="lt2-card-chips">
                  <div className="lt2-chip">
                    <span className="lt2-chip-label">Rate</span>
                    <span className="lt2-chip-val">{meta.rate}</span>
                  </div>
                  <div className="lt2-chip">
                    <span className="lt2-chip-label">Tenure</span>
                    <span className="lt2-chip-val">{meta.tenure}</span>
                  </div>
                </div>
              </div>

              {/* content column */}
              <div className="lt2-card-content">
                <div className="lt2-card-meta">
                  <div className="lt2-card-meta-left">
                    <span className="lt2-card-icon">{ICONS[active.tag] ?? '📄'}</span>
                    <span className="lt2-card-num">0{activeIdx + 1} / 0{loanServices.length}</span>
                  </div>
                  <RingProgress pct={meta.ring} color={meta.color} label={meta.ringLabel} />
                </div>

                <h3 className="lt2-card-title">{active.title}</h3>
                <p className="lt2-card-desc">{active.description}</p>

                <ul className="lt2-card-feats">
                  {active.features.map((f, fi) => (
                    <motion.li key={f}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: fi * 0.08, duration: 0.34 }}
                    >
                      <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
                        <circle cx="9" cy="9" r="8" fill="rgba(189,242,109,0.15)" />
                        <path d="M5.5 9l2.5 2.5 4.5-5" stroke="#bdf26d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {f}
                    </motion.li>
                  ))}
                </ul>

                {/* progress bar row */}
                <div className="lt2-card-progress">
                  <span className="lt2-progress-label">Eligibility score</span>
                  <div className="lt2-progress-track">
                    <motion.div
                      className="lt2-progress-fill"
                      style={{ background: `linear-gradient(90deg, ${meta.color}, #65d6ad)` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${meta.ring}%` }}
                      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                  <span className="lt2-progress-val">{meta.ring}%</span>
                </div>

                <div className="lt2-card-footer">
                  <Link className="lt2-card-cta" to={`/services/${active.slug}`}>
                    Explore {active.title}
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>

                  <div className="lt2-dots" aria-label="Loan navigation dots">
                    {loanServices.map((_, i) => (
                      <button
                        key={i}
                        className={`lt2-dot${activeIdx === i ? ' lt2-dot--active' : ''}`}
                        onClick={() => setActiveIdx(i)}
                        aria-label={`Go to ${loanServices[i].title}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* prev / next */}
          <button
            className="lt2-arrow lt2-arrow--prev"
            onClick={() => setActiveIdx((p) => (p - 1 + loanServices.length) % loanServices.length)}
            aria-label="Previous loan"
          >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M12 5l-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className="lt2-arrow lt2-arrow--next"
            onClick={() => setActiveIdx((p) => (p + 1) % loanServices.length)}
            aria-label="Next loan"
          >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M8 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

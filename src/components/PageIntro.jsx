import './PageIntro.css';

function PageIntro({ eyebrow, title, children }) {
  return (
    <section className="section page-hero">
      <div className="section-head readable-head">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </section>
  );
}

export default PageIntro;

import { useEffect } from 'react';

/**
 * useSEO — Dynamically sets page title, description, and canonical URL
 * for every page so each route has unique, crawlable meta tags.
 *
 * @param {string} title        — Page-specific title (will be appended with brand)
 * @param {string} description  — Page-specific meta description (≤160 chars)
 * @param {string} [canonical]  — Optional canonical URL path (e.g. '/services')
 * @param {string[]} [keywords] — Optional extra keywords for this page
 */
export function useSEO({ title, description, canonical, keywords }) {
  useEffect(() => {
    const brand = 'FinEx Hub';
    const fullTitle = title ? `${title} | ${brand}` : `${brand} — Finance, Loans & Wealth Management India`;

    // Title
    document.title = fullTitle;

    // Meta description
    setMeta('name', 'description', description || '');

    // Keywords (extend base keywords)
    if (keywords?.length) {
      setMeta('name', 'keywords', keywords.join(', '));
    }

    // Canonical
    const base = 'https://www.finexhub.com';
    const canonicalUrl = canonical ? `${base}${canonical}` : base + window.location.pathname;
    setLink('canonical', canonicalUrl);

    // Open Graph
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description || '');
    setMeta('property', 'og:url', canonicalUrl);

    // Twitter
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description || '');
  }, [title, description, canonical, keywords]);
}

function setMeta(attrName, attrValue, content) {
  let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

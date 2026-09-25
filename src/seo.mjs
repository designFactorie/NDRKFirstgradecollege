export const SITE_URL = 'https://ndrkfgc.edu.in';
export const pages = {
 '/': ['NDRK First Grade College, Hassan | Official Website', 'Explore B.Com, BBA, BCA and M.Com programs at NDRK First Grade College, Hassan. Find course details, admission information and campus facilities.'],
 '/about-us': ['About NDRK First Grade College, Hassan', 'Learn about NDRK First Grade College in Hassan, its educational approach, leadership and student community.'],
 '/academics': ['Academics | NDRK First Grade College, Hassan', 'Explore academic programs, learning facilities and student opportunities at NDRK First Grade College, Hassan.'],
 '/courses': ['B.Com, BBA, BCA & M.Com Courses in Hassan | NDRK', 'Explore commerce, management and computer applications programs at NDRK First Grade College, Hassan, and enquire about your preferred course.'],
 '/admissions': ['Admissions | NDRK First Grade College, Hassan', 'Review course eligibility, required documents and the admission enquiry process at NDRK First Grade College, Hassan.'],
 '/alumni': ['Alumni | NDRK First Grade College, Hassan', 'Explore alumni stories, events and opportunities to connect with the NDRK First Grade College community.'],
 '/life': ['Campus Life | NDRK First Grade College, Hassan', 'Discover student activities, sports, cultural events and community initiatives at NDRK First Grade College, Hassan.'],
 '/career-academy': ['Coursera Career Academy | NDRK First Grade College', 'Explore career-focused learning and Coursera Career Academy opportunities at NDRK First Grade College, Hassan.'],
 '/faqs': ['College & Admission FAQs | NDRK First Grade College', 'Find answers to common questions about courses, admissions, facilities and student life at NDRK First Grade College, Hassan.'],
 '/mandatory-disclosure': ['Mandatory Disclosure | NDRK First Grade College', 'Access institutional records and links to official disclosure documents from NDRK First Grade College, Hassan.'],
};
export function pageSeo(pathname) {
 const path = pathname.replace(/\/+$/, '') || '/';
 const page = pages[path];
 return { path, title: page?.[0] || 'Page Not Found | NDRK First Grade College',
  description: page?.[1] || 'This page could not be found. Explore NDRK First Grade College from the homepage.',
  canonical: page ? SITE_URL + path : null, robots: page ? 'index,follow' : 'noindex,follow' };
}
export function structuredData(pathname) {
 const page = pageSeo(pathname);
 if (!page.canonical) return null;
 return { '@context': 'https://schema.org', '@graph': [
  { '@type': 'CollegeOrUniversity', '@id': SITE_URL + '/#college', name: 'NDRK First Grade College', url: SITE_URL + '/',
   address: { '@type': 'PostalAddress', addressLocality: 'Hassan', addressRegion: 'Karnataka', postalCode: '573201', addressCountry: 'IN' } },
  { '@type': 'WebSite', '@id': SITE_URL + '/#website', url: SITE_URL + '/', name: 'NDRK First Grade College', publisher: { '@id': SITE_URL + '/#college' } },
  { '@type': 'WebPage', '@id': page.canonical, url: page.canonical, name: page.title, description: page.description,
   isPartOf: { '@id': SITE_URL + '/#website' }, about: { '@id': SITE_URL + '/#college' } },
 ] };
}
export const escapeHtml = value => value.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export function seoHead(pathname) {
 const page = pageSeo(pathname);
 const meta = (key, value, property = false) => `<meta ${property ? 'property' : 'name'}="${key}" content="${escapeHtml(value)}" data-seo />`;
 return [
  `<title>${escapeHtml(page.title)}</title>`, meta('description', page.description), meta('robots', page.robots),
  page.canonical ? `<link rel="canonical" href="${page.canonical}" data-seo />` : '',
  meta('og:title', page.title, true), meta('og:description', page.description, true), meta('og:type', 'website', true),
  meta('og:site_name', 'NDRK First Grade College', true), page.canonical ? meta('og:url', page.canonical, true) : '',
  meta('twitter:card', 'summary'), meta('twitter:title', page.title), meta('twitter:description', page.description),
  page.canonical ? `<script type="application/ld+json" data-seo>${JSON.stringify(structuredData(pathname)).replace(/</g, '\\u003c')}</script>` : '',
 ].join('\n');
}

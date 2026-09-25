import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoHead } from '../seo.mjs';

export default function Seo() {
 const { pathname } = useLocation();
 useEffect(() => {
  const template = document.createElement('template');
  template.innerHTML = seoHead(pathname);
  document.head.querySelectorAll('title, [data-seo]').forEach(node => node.remove());
  document.head.append(template.content);
 }, [pathname]);
 return null;
}

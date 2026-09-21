import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Modal from './Modal';
import { useSiteActions } from './siteActions';

const navLinks = [
    { name: 'Story', path: '/about-us' },
    { name: 'Academics', path: '/academics' },
    { name: 'Courses', path: '/courses' },
    { name: 'Life', path: '/life' },
    { name: 'Alumni', path: '/alumni' },
    { name: 'Coursera', path: '/career-academy' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Disclosure', path: '/mandatory-disclosure' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname.replace(/\/+$/, '') || '/';
    const { openEnquiry } = useSiteActions();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const desktop = window.matchMedia('(min-width: 1280px)');
        const close = () => setMenuOpen(false);
        const resize = () => { if (desktop.matches) close(); };
        desktop.addEventListener('change', resize);
        window.addEventListener('popstate', close);
        return () => {
            desktop.removeEventListener('change', resize);
            window.removeEventListener('popstate', close);
        };
    }, []);

    return (
        <>
            <a href="#main-content" className="skip-link" onClick={(event) => {
                event.preventDefault();
                const main = document.querySelector('main');
                main?.focus();
                main?.scrollIntoView();
            }}>Skip to content</a>
            <nav aria-label="Main navigation" className={`site-navbar ${scrolled ? 'site-navbar--compact' : ''} fixed top-0 left-0 right-0 z-[60] px-6 md:px-10 flex justify-between gap-6 items-center transition-all duration-300 ${scrolled ? 'py-3 md:py-4 bg-[#00113a]/95 backdrop-blur-md shadow-lg' : 'pt-4 pb-6 md:pt-6 md:pb-8 bg-[#00113a] shadow-md'}`}>
                <Link to="/" aria-label="NDRK First Grade College home" className="font-headline font-bold leading-[0.9] tracking-tighter text-white flex flex-col shrink-0">
                    <span className="text-xl md:text-3xl">NDRK</span>
                    <span className="text-[7px] md:text-[10px] uppercase tracking-[0.15em] font-black opacity-90">First Grade College</span>
                </Link>
                <div className="hidden xl:flex gap-5 2xl:gap-8 font-medium text-xs uppercase tracking-widest">
                    {navLinks.map((link) => <Link key={link.path} to={link.path}
                        aria-current={currentPath === link.path ? 'page' : undefined}
                        className={`py-3 hover:text-secondary-fixed-dim transition-colors ${currentPath === link.path ? 'text-secondary-fixed-dim' : 'text-white'}`}>{link.name}</Link>)}
                </div>
                <div className="flex items-center gap-3">
                    <Link to="/admissions" aria-current={currentPath === '/admissions' ? 'page' : undefined} className="hidden sm:inline-block bg-secondary text-white px-5 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all shrink-0">Admissions</Link>
                    <button type="button" onClick={() => setMenuOpen(true)} className="p-3 text-white xl:hidden bg-white/10 rounded-lg" aria-label="Open menu" aria-expanded={menuOpen} aria-haspopup="dialog" aria-controls="mobile-navigation"><Menu size={24} /></button>
                </div>
            </nav>
            <Modal open={menuOpen} onClose={() => setMenuOpen(false)} titleId="menu-title" className="navigation-dialog">
                <h2 id="menu-title" className="font-headline text-xl font-bold mb-6 pr-12">Explore NDRK</h2>
                <nav id="mobile-navigation" aria-label="Mobile navigation" className="flex flex-col gap-1">
                    {navLinks.map((link) => <Link key={link.path} to={link.path} onClick={() => setMenuOpen(false)}
                        aria-current={currentPath === link.path ? 'page' : undefined}
                        className={`rounded-lg px-4 py-3 text-lg hover:bg-slate-100 ${currentPath === link.path ? 'bg-slate-100 text-secondary font-bold' : 'text-primary'}`}>{link.name}</Link>)}
                    <Link to="/admissions" onClick={() => setMenuOpen(false)} className="rounded-lg px-4 py-3 text-lg text-primary hover:bg-slate-100">Admissions</Link>
                    <button type="button" className="enquiry-submit mt-4" onClick={() => { setMenuOpen(false); openEnquiry(); }}>Apply Now</button>
                </nav>
            </Modal>
        </>
    );
}

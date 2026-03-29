import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    // Close menu when location changes
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [menuOpen]);

    const navLinks = [
        { name: 'Story', path: '/about-us' },
        { name: 'Academics', path: '/academics' },
        { name: 'Courses', path: '/courses' },
        { name: 'Life', path: '/life' },
        { name: 'Alumni', path: '/alumni' },
        { name: 'Coursera', path: '/career-academy' },
        { name: 'FAQs', path: '/faqs' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[60] px-6 md:px-12 flex justify-between items-center transition-all duration-300 ease-in-out ${scrolled
            ? "py-3 md:py-4 bg-primary/95 backdrop-blur-md shadow-lg"
            : "pt-4 pb-6 md:pt-6 md:pb-8 bg-primary shadow-md"
            }`}>
            {/* Logo */}
            <Link to="/" className="font-headline font-bold leading-[0.9] tracking-tighter pointer-events-auto text-white no-underline flex flex-col group z-[70] shrink-0">
                <span className="text-xl md:text-3xl">NDRK</span>
                <span className="text-[7px] md:text-[10px] uppercase tracking-[0.15em] font-black opacity-90">First Grade College</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-10 lg:gap-12 font-medium text-sm uppercase tracking-widest pointer-events-auto">
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`hover:text-secondary transition-colors ${location.pathname === link.path ? 'text-secondary' : 'text-white'}`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Right side Actions */}
            <div className="flex items-center gap-2 md:gap-4">
                <Link to="/admissions" className="hidden sm:inline-block bg-secondary text-white px-4 md:px-6 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest pointer-events-auto hover:bg-white hover:text-primary transition-all no-underline shrink-0">
                    Admissions
                </Link>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="p-2 text-white md:hidden z-[70] transition-transform active:scale-95 flex items-center justify-center bg-white/10 rounded-lg backdrop-blur-sm"
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-primary z-[65] flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${menuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
                }`}>
                <div className="flex flex-col items-center gap-8 text-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setMenuOpen(false)}
                            className={`text-2xl font-serif tracking-tight border-b border-transparent hover:border-secondary transition-all ${location.pathname === link.path ? 'text-secondary font-bold scale-110' : 'text-white'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/admissions"
                        onClick={() => setMenuOpen(false)}
                        className="mt-4 bg-secondary text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest"
                    >
                        Apply Now
                    </Link>
                </div>

                {/* Decorative background logo */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
                    <span className="text-[40vw] font-black tracking-tighter">NDRK</span>
                </div>
            </div>
        </nav>
    );
}

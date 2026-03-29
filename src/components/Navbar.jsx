import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[60] px-12 flex justify-between items-center transition-all duration-300 ease-in-out ${scrolled
            ? "py-4 bg-primary/85 backdrop-blur-md shadow-lg"
            : "pt-6 pb-8 bg-primary shadow-md"
            }`}>
            <Link to="/" className="font-headline font-bold leading-[0.9] tracking-tighter pointer-events-auto text-white no-underline flex flex-col group">
                <span className="text-3xl">NDRK</span>
                <span className="text-[10px] uppercase tracking-[0.15em] font-black opacity-90">First Grade College</span>
            </Link>
            <div className="hidden md:flex gap-12 font-medium text-sm uppercase tracking-widest pointer-events-auto">
                <Link to="/about-us" className="hover:text-secondary transition-colors text-white">Story</Link>
                <Link to="/academics" className="hover:text-secondary transition-colors text-white">Academics</Link>
                <Link to="/courses" className="hover:text-secondary transition-colors text-white">Courses</Link>
                <Link to="/life" className="hover:text-secondary transition-colors text-white">Life</Link>
                <Link to="/alumni" className="hover:text-secondary transition-colors text-white">Alumni</Link>
                <Link to="/career-academy" className="hover:text-secondary transition-colors text-white">Coursera</Link>
                <Link to="/faqs" className="hover:text-secondary transition-colors text-white">FAQs</Link>
            </div>
            <Link to="/admissions" className="bg-secondary text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest pointer-events-auto hover:bg-white hover:text-primary transition-all text-white no-underline">
                Admissions
            </Link>
        </nav>
    );
}

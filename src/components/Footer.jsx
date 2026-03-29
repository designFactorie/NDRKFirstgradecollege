import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-black/40 backdrop-blur-md py-12 px-8 relative z-50">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-sm text-slate-400">
                <div>
                    <div className="font-headline font-bold text-white text-xl mb-2">NDRK College</div>
                    <p>Hassan, Karnataka, India - 573201</p>
                </div>
                <div className="flex justify-center gap-8">
                    <a className="hover:text-white transition-colors" href="#">Instagram</a>
                    <a className="hover:text-white transition-colors" href="#">LinkedIn</a>
                    <a className="hover:text-white transition-colors" href="#">Twitter</a>
                </div>
                <div className="md:text-right">
                    <p>© 2026 NDRK First Grade College.</p>
                    <p className="text-[10px] mt-1 tracking-widest uppercase">Excellence in Education</p>
                </div>
            </div>
        </footer>
    );
}

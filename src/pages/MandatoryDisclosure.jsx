import React from 'react';
import Footer from '../components/Footer';

export default function MandatoryDisclosure() {
    return (
        <main className="min-h-screen pt-28">
            {/* Hero Header */}
            <header className="relative pt-24 pb-32 overflow-hidden bg-primary">
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                        <div className="max-w-2xl">
                            <span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed font-bold text-[10px] tracking-[0.2em] uppercase rounded-sm mb-6">Transparency & Compliance</span>
                            <h1 className="font-headline text-3xl md:text-6xl font-bold mb-8 leading-tight text-white">Mandatory Disclosure</h1>
                            <p className="text-xl text-white/80 leading-relaxed">As part of our commitment to transparency and regulatory compliance, NDRK First Grade College maintains public access to all essential institutional records.</p>
                        </div>
                        <div className="hidden md:block pb-4">
                            <div className="flex flex-col items-end">
                                <span className="font-serif text-3xl italic text-tertiary">2026-27</span>
                                <span className="text-xs tracking-widest text-slate-400 uppercase font-bold">Academic Cycle</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Background Graphic */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low [clip-path:polygon(0_0,100%_0,100%_85%,0%_100%)] -z-10"></div>
            </header>

            {/* Mandatory Disclosure Section */}
            <section className="bg-surface-container-low py-24">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-4">
                            <h2 className="font-headline font-bold text-3xl md:text-4xl text-primary mb-6">Institutional Records</h2>
                            <p className="text-slate-600 mb-12">Access all official documents, program details, and essential filings required for public disclosure.</p>
                            <div className="space-y-4">
                                <a href="https://drive.google.com/drive/folders/1pogcIK8LcylvDYl4T9wUAkFkXZYp4_we?usp=sharing" target="_blank" rel="noopener noreferrer" className="p-6 bg-surface-container-lowest rounded-xl flex items-center justify-between group cursor-pointer hover:bg-primary transition-all duration-300 shadow-sm border border-outline-variant/20 block no-underline decoration-transparent">
                                    <span className="font-bold text-lg font-headline group-hover:text-white transition-colors text-primary">Desirable Documents</span>
                                    <span className="material-symbols-outlined text-tertiary group-hover:text-white transition-colors">open_in_new</span>
                                </a>
                                <a href="https://drive.google.com/drive/folders/1nVlk7ofg4s5vLH-Jr40z42Cv_ZcwuTJp?usp=sharing" target="_blank" rel="noopener noreferrer" className="p-6 bg-surface-container-lowest rounded-xl flex items-center justify-between group cursor-pointer hover:bg-primary transition-all duration-300 shadow-sm border border-outline-variant/20 block no-underline decoration-transparent">
                                    <span className="font-bold text-lg font-headline group-hover:text-white transition-colors text-primary">Essential Documents</span>
                                    <span className="material-symbols-outlined text-tertiary group-hover:text-white transition-colors">open_in_new</span>
                                </a>
                                <a href="https://drive.google.com/drive/folders/1UcrIDSnsWPn2a7Vcnhs1xyyPMS8LlsOB?usp=sharing" target="_blank" rel="noopener noreferrer" className="p-6 bg-surface-container-lowest rounded-xl flex items-center justify-between group cursor-pointer hover:bg-primary transition-all duration-300 shadow-sm border border-outline-variant/20 block no-underline decoration-transparent">
                                    <span className="font-bold text-lg font-headline group-hover:text-white transition-colors text-primary">Programme Documents</span>
                                    <span className="material-symbols-outlined text-tertiary group-hover:text-white transition-colors">open_in_new</span>
                                </a>
                            </div>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
                                <img className="object-cover w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoWJIsi_9CdUYV4VFQZTRngpTW9Xbvl6ICGwddttcDq4eyvLX6jO6Pe7Gq_-7XlqBck0q73DB2hVnl4PGeTKqyepoaJeE3-oj7_PC0yMRNLafnBkBQkyAAsZ2wucyHLuNLIEBfx--gxTmNeb8aHWu_K0apwSAGzBQBeLWC_ULKhpmxb7EPpLmlLAJC1RrL_LWq32s9DHr3sDiUYu_FyijsEzyxxokH09KntuP1Cz-hx71bzUVQ0YVABe_9onUdzS6mnt5t_rdPx_Io" alt="Library interior" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 text-white">
                                    <span className="font-serif italic text-2xl">Institutional Excellence through Accountability</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

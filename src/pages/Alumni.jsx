import React from 'react';
import Footer from '../components/Footer';

export default function Alumni() {
    return (
        <main className="pt-28">
            {/* Hero Section: Text-Focused Editorial Layout */}
            <section className="relative py-24 md:py-40 flex flex-col items-center bg-surface overflow-visible">
                <div className="max-w-4xl mx-auto px-8 w-full text-center z-10">
                    <span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm mb-6">Network of Excellence</span>
                    <h1 className="font-headline text-5xl md:text-7xl font-bold mb-8 leading-tight text-primary">
                        A Global <span className="italic text-secondary font-serif">Network</span> of Excellence.
                    </h1>
                    <p className="text-slate-600 text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                        NDRK Group of Institutions offers programs & resources to alumni at every phase of your career. From graduates to industry leaders, explore our legacy.
                    </p>
                    <div className="flex flex-wrap gap-6 justify-center items-center mb-16">
                        <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-secondary transition-colors shadow-[0px_20px_40px_rgba(25,28,29,0.1)] cursor-not-allowed opacity-90" disabled>Join The Alumni Portal</button>
                        <button className="text-secondary font-bold flex items-center gap-2 group">Explore Stories <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span></button>
                    </div>

                    <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-outline-variant/10 max-w-lg mx-auto shadow-[0px_20px_40px_rgba(0,0,0,0.03)]">
                        <p className="font-serif text-4xl text-primary italic mb-2">15,000+</p>
                        <p className="text-xs text-slate-500 uppercase tracking-widest font-bold leading-relaxed px-4">
                            Active Alumni Members Contributing to 45+ Global Economies
                        </p>
                    </div>
                </div>

                {/* Decorative Background Element */}
                <div className="absolute top-0 left-0 w-full h-full bg-surface-container-low/30 -z-0"></div>
            </section>

            {/* Stories Section  */}
            <section className="py-24 bg-surface-container-low">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-col mb-16 max-w-2xl">
                        <span className="text-secondary font-bold text-[10px] tracking-widest uppercase mb-4 block">Testimonials</span>
                        <h2 className="font-serif text-5xl text-primary mb-6">Our Alumni stories inspires you!</h2>
                        <p className="text-slate-600 text-lg">Over years, Parents have trusted for their child's future that we can ensure the all round - development of every student in his/ her own way!</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Feature 1 */}
                        <div className="group relative overflow-hidden rounded-xl bg-primary aspect-[4/3] shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
                            <img alt="Samhitha" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYd1F5nxjwk6_anlRNkuo1ybJ6Reu3RK90i5rfYKOiMZ85asWTepVafqADNIHbap1VNsnr-GXSRJshyLpA7z5LCyBR18p3zvE7T1fhIGc65RILBcw9rQ4jr91iyt419m5IQ-BQ5zzSxwbyTXvFg4oxHw8IAGWtcKloNxajG7TpTifc6oxGgp3-7aoIBOvfaAJNJM-vKt9ec1Du766miqd429fVRceg9aYmAuJnFs0cNas7PTw8Vp1khVORSG01rmBpi8dyVcMjs801" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent p-10 flex flex-col justify-end">
                                <span className="text-tertiary-fixed text-[10px] font-bold tracking-widest uppercase mb-2">Class of 2019</span>
                                <h3 className="text-white font-serif text-4xl mb-4">Samhitha</h3>
                                <p className="text-slate-300 mb-6 italic">"The faculty at NDRK are deeply committed to providing an enriching educational experience. Throughout my time there, they consistently encouraged me to challenge myself and explore new ideas. The support and guidance I received were invaluable in shaping my academic and professional journey."</p>
                            </div>
                        </div>

                        {/* Feature 2: Rupesh */}
                        <div className="group relative overflow-hidden rounded-xl bg-primary aspect-[4/3] shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
                            <img alt="Rupesh Mittal" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtTQvM7gwm7DSS5j0jf8g6Lds6a9sqZfxMlEfQvOHZRGhfdB4cTTz9pb-zy8b08BX_l6aWSjWxBqc0E_h9o5J-1tHSg8aTdJC5Lc5DQnJxJkOYSodTom823fqeu-GNxiyNlca-i4bXUmQJ0Il7hAscHJxET3W9fHUJHdu1WLlGgJhm3ARPyjoGFjb5V6BpCfzvz01MTZGYuuCQNZn89n68I4q_uFmwcQ1g-pv2HwKQZz0Q_5pwXSxUzQXVARGcANyJtAtntxRcFs0J" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent p-10 flex flex-col justify-end">
                                <span className="text-tertiary-fixed text-[10px] font-bold tracking-widest uppercase mb-2">Alumni in News</span>
                                <h3 className="text-white font-serif text-4xl mb-4">Rupesh Mittal</h3>
                                <p className="text-slate-300 mb-6 font-medium">Founder of Cyber Jagruthi. Won National Awards, worked with UN agencies, and actively contributes to cybersecurity policy-making.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alumni Events: Tonal Layering */}
            <section className="py-24 bg-surface">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-20">
                        <h2 className="font-serif text-5xl text-primary mb-4 italic">Alumni Events</h2>
                        <div className="w-24 h-1 bg-tertiary mx-auto"></div>
                    </div>
                    <div className="space-y-6">
                        {/* ICBMSS Event */}
                        <div className="flex flex-col md:flex-row items-center gap-8 p-1 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors group">
                            <div className="w-full md:w-64 aspect-video rounded-lg overflow-hidden shrink-0">
                                <img alt="ICBMSS Meet" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsBjC_53bWKzkOwAoeOuIN5yvFv3gY3N1gwWOjzrbgft8AUNGS_9G_jAc0tegQk12sLzT1WREBOY0reYNh8ssc3N14XU0s_T8SoRXGSBTjRgAt6-SrS5wO_-AXgC-15godh9IwgCYrRCBNjL9f-nkF_Rw0ZyoOKy8jV_IRVCQc2M2HlUwPkNZJYrZagU9t9qKn-MD80Vd9Aov8BfozGLcO5m9jY9AViD_Xwao92JPda6xefYeJKNiGb8BrkkRER-Ib9pTsS__GC1RQ" />
                            </div>
                            <div className="flex-grow py-4 px-2">
                                <div className="flex items-center gap-4 mb-2">
                                    <span className="text-secondary font-bold text-[10px] tracking-widest uppercase">Upcoming</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                                    <span className="text-slate-500 text-[10px] font-bold tracking-widest uppercase">Global Forum</span>
                                </div>
                                <h3 className="font-serif text-3xl text-primary mb-2">ICBMSS 2026</h3>
                                <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">The key motive of ICBMSS is to provide a world-class platform for global participants to share their ideas and experiences in person with their peers expected to join from different parts of the world.</p>
                            </div>
                            <div className="px-8 shrink-0 py-4 md:py-0">
                                <a href="https://docs.google.com/spreadsheets/d/11Qp_9_G9tO4sK04bM1h6O1Jd_Z43m3g3v9s72-Z71Xk/edit#gid=0" target="_blank" rel="noreferrer" className="bg-primary-container text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors inline-block text-center">Register Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Give Back Section */}
            <section className="py-24 bg-surface-container-highest">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-5xl text-primary mb-4">How can alumni give back?</h2>
                        <p className="text-slate-600 text-lg">Your support shapes the future of NDRK and its students.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-surface-container-lowest p-8 rounded-xl text-center shadow-[0px_20px_40px_rgba(25,28,29,0.06)] group hover:-translate-y-2 transition-transform duration-300">
                            <span className="material-symbols-outlined text-4xl text-secondary mb-4 group-hover:scale-110 transition-transform">volunteer_activism</span>
                            <h4 className="font-headline text-xl font-bold mb-2">Donate</h4>
                            <p className="text-slate-600 text-sm">Fund scholarships and campus improvements.</p>
                        </div>
                        <div className="bg-surface-container-lowest p-8 rounded-xl text-center shadow-[0px_20px_40px_rgba(25,28,29,0.06)] group hover:-translate-y-2 transition-transform duration-300">
                            <span className="material-symbols-outlined text-4xl text-secondary mb-4 group-hover:scale-110 transition-transform">school</span>
                            <h4 className="font-headline text-xl font-bold mb-2">Teach</h4>
                            <p className="text-slate-600 text-sm">Return as guest faculty and share your expertise.</p>
                        </div>
                        <div className="bg-surface-container-lowest p-8 rounded-xl text-center shadow-[0px_20px_40px_rgba(25,28,29,0.06)] group hover:-translate-y-2 transition-transform duration-300">
                            <span className="material-symbols-outlined text-4xl text-secondary mb-4 group-hover:scale-110 transition-transform">work</span>
                            <h4 className="font-headline text-xl font-bold mb-2">Placements</h4>
                            <p className="text-slate-600 text-sm">Help recruit new talent for your organization.</p>
                        </div>
                        <div className="bg-surface-container-lowest p-8 rounded-xl text-center shadow-[0px_20px_40px_rgba(25,28,29,0.06)] group hover:-translate-y-2 transition-transform duration-300">
                            <span className="material-symbols-outlined text-4xl text-secondary mb-4 group-hover:scale-110 transition-transform">psychology</span>
                            <h4 className="font-headline text-xl font-bold mb-2">Mentorship</h4>
                            <p className="text-slate-600 text-sm">Guide current students on their career paths.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-surface">
                <div className="max-w-4xl mx-auto px-8 bg-surface-container-lowest p-16 rounded-xl text-center shadow-[0px_20px_40px_rgba(25,28,29,0.06)] border border-outline-variant/20">
                    <h3 className="font-serif text-4xl text-primary mb-6">Stay Connected to Your Roots</h3>
                    <p className="text-slate-600 mb-10 text-lg">Update your profile to receive exclusive invitations, career opportunities, and the quarterly Alumni Journal.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input className="bg-surface-container px-6 py-4 rounded-full border border-outline-variant focus:ring-2 focus:ring-secondary w-full sm:w-72" placeholder="Email Address" type="email" />
                        <button className="bg-primary text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-secondary transition-colors shrink-0">Join Network</button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

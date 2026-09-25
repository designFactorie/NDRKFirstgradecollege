import SectionLink from '../components/SectionLink';
import { ChevronDown } from 'lucide-react';
import ActionButton from '../components/ActionButton';
import React from 'react';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <div className="fixed left-2 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-6">
                <div className="vertical-line"></div>
                <div className="flex flex-col gap-1">
                    <SectionLink className="chapter-dot" to="/" section="chapter-1" aria-label="Go to chapter 1"></SectionLink>
                    <SectionLink className="chapter-dot" to="/" section="chapter-2" aria-label="Go to chapter 2"></SectionLink>
                    <SectionLink className="chapter-dot" to="/" section="chapter-3" aria-label="Go to chapter 3"></SectionLink>
                    <SectionLink className="chapter-dot" to="/" section="chapter-4" aria-label="Go to chapter 4"></SectionLink>
                    <SectionLink className="chapter-dot" to="/" section="chapter-5" aria-label="Go to chapter 5"></SectionLink>
                    <SectionLink className="chapter-dot" to="/" section="final" aria-label="Go to final"></SectionLink>
                </div>
                <div className="vertical-line"></div>
            </div>

            <main id="main-content" tabIndex={-1} className="page-shell md:snap-y-container">
                {/* Chapter 1 */}
                <section className="page-hero hero-home" id="chapter-1">
                    <div className="absolute inset-0 overflow-hidden">
                        <img fetchPriority="high" decoding="async" className="w-full h-full object-cover brightness-75" alt="stately university building" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXSeCpXoD3Thp7ONIw8Owj8lQV0kJ9ewZ_AUinlW6_4D_u7gy1O1W3GQ0bSBOBd7Yh3sRr0-IFQjYiGAFj7BqhQoacFI4vDygTgT9LTYE0LlCMvFpH5Zd62IihtaZhB6fbzniWkIHLLEcrNKV63b9Q5KFt08Tl6DtshS_k0I_vFNnJhj71bp5OrIAbS7DFRkQ4lG5wATqirKTvX335ogSdwMoy1NK0iqdqOMx2y_QdEZLTKhTFy6PjmY8ue4c1Qp0bx-umNFjVZKXI" />
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                    <div className="hero-container relative z-20 container mx-auto px-8 text-center">
                        <span className="text-secondary font-bold tracking-[0.4em] uppercase text-sm mb-6 block">Chapter I: The Beginning</span>
                        <h1 className="font-headline text-4xl md:text-6xl font-bold mb-8 leading-tight text-glow text-white">
                            Unlock Your Potential, <br className="hero-break" />
                            <span className="text-secondary-fixed-dim italic">Excel at NDRK First Grade College.</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto text-slate-300">Where Dreams Meet Success!</p>
                        <SectionLink to="/" section="chapter-2" className="hero-scroll-link flex flex-col items-center">
                            <ChevronDown aria-hidden="true" className="hero-icon animate-bounce" />
                            <span className="text-xs uppercase tracking-widest mt-2 text-white">Scroll to Begin</span>
                        </SectionLink>
                    </div>
                </section>

                {/* Chapter 2 */}
                <section className="home-chapter relative md:snap-section min-h-screen lg:h-screen flex items-center py-20 lg:py-0 z-10 bg-primary" id="chapter-2">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-0 bg-primary/90 z-20"></div>
                        <img loading="lazy" decoding="async" alt="" className="w-full h-full object-cover opacity-30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkBhFWRDoA7nBkBT-fy_dkc5yhxbasmWJy9tIOT-WxrqtGQlwh6ub05v2W0oVz668YEkgbUjd6UA9gr_ANVEDEYWaKfMRqs-H_ka87MiY3NnrgSxdvlrlGCCra8u_uKH6jiAIZIv2OwvEgonVHvvrxhJimX_nRP4i5lkRuOyc3OZlErm7yiXIuZfFB6y3HfUAcn6koH3c6xe89GNmy8piK-pm0_75XHajVGhAcnn0PLdVAbMctj-R4KgMzCR9sJL7n3h1QuXuGyxmD" />
                    </div>
                    <div className="relative z-30 container mx-auto px-8 text-white">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="text-tertiary font-bold tracking-[0.4em] uppercase text-sm mb-6 block">Chapter II: The Foundation</span>
                                <h2 className="font-headline text-4xl md:text-6xl font-bold mb-8">Building Excellence by the Numbers.</h2>
                                <p className="text-lg text-slate-300">Our commitment to student success is grounded in a rigorous academic environment and personalized attention.</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="glass-panel p-8 rounded-2xl">
                                    <div className="text-4xl font-bold text-secondary mb-2">18:1</div>
                                    <div className="text-xs uppercase tracking-widest text-slate-400">Student to Faculty Ratio</div>
                                </div>
                                <div className="glass-panel p-8 rounded-2xl">
                                    <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                                    <div className="text-xs uppercase tracking-widest text-slate-400">Financial Assistance</div>
                                </div>
                                <div className="glass-panel p-8 rounded-2xl">
                                    <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                                    <div className="text-xs uppercase tracking-widest text-slate-400">Students from different locations</div>
                                </div>
                                <div className="glass-panel p-8 rounded-2xl">
                                    <div className="text-4xl font-bold text-secondary mb-2">40+</div>
                                    <div className="text-xs uppercase tracking-widest text-slate-400">Student events per year</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Chapter 3 */}
                <section className="home-chapter md:snap-section min-h-screen md:h-screen flex items-start md:items-center py-24 md:py-0" id="chapter-3">
                    <div className="container mx-auto px-8 relative z-10">
                        <span className="text-secondary font-bold tracking-[0.4em] uppercase text-sm mb-12 block text-center">Chapter III: The Pulse</span>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                                <img loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="/assets/images/seminar.webp" alt="Seminars" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 p-8">
                                    <span className="bg-secondary text-[10px] px-2 py-1 rounded mb-4 inline-block font-bold">ACADEMICS</span>
                                    <h3 className="text-2xl font-bold leading-tight mb-2">Seminars</h3>
                                    <p className="text-sm text-slate-300">Attend our insightful seminars led by industry experts and academic leaders.</p>
                                </div>
                            </div>
                            <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl md:mt-12 lg:mt-24">
                                <img loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="/assets/images/exam.webp" alt="Competitive Exams" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 p-8">
                                    <span className="bg-tertiary text-[10px] px-2 py-1 rounded mb-4 inline-block font-bold">OPPORTUNITIES</span>
                                    <h3 className="text-2xl font-bold leading-tight mb-2">Competitive Exams</h3>
                                    <p className="text-sm text-slate-300">Apply here for the competitive exams that are happening in and out of NDRK</p>
                                </div>
                            </div>
                            <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                                <img loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="/assets/images/workshop.webp" alt="Workshops" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 p-8">
                                    <span className="bg-primary text-[10px] px-2 py-1 rounded mb-4 inline-block font-bold uppercase">Skill Building</span>
                                    <h3 className="text-2xl font-bold leading-tight mb-2">Workshops</h3>
                                    <p className="text-sm text-slate-300">Hands-on workshops to bridge the gap between theory and practical application.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Chapter 4 */}
                <section className="home-chapter md:snap-section min-h-screen md:h-screen flex items-start md:items-center bg-[#000a1e] py-24 md:py-0" id="chapter-4">
                    <div className="container mx-auto px-8">
                        <div className="text-center mb-16">
                            <span className="text-tertiary font-bold tracking-[0.4em] uppercase text-sm mb-6 block">Chapter IV: The Pathways</span>
                            <h2 className="font-headline text-5xl font-bold mb-4">Choose Your Future.</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                            <div className="glass-panel p-10 group hover:bg-secondary transition-all duration-500 rounded-3xl">
                                <span aria-hidden="true" className="material-symbols-outlined text-4xl mb-6">account_balance</span>
                                <h4 className="text-3xl font-bold mb-4">B.Com</h4>
                                <p className="text-slate-400 group-hover:text-white transition-colors text-sm">Obtain a comprehensive understanding of the principles of commerce and business. Equip yourself with knowledge for finance and entrepreneurship.</p>
                            </div>
                            <div className="glass-panel p-10 group hover:bg-tertiary transition-all duration-500 rounded-3xl md:mt-8">
                                <span aria-hidden="true" className="material-symbols-outlined text-4xl mb-6">analytics</span>
                                <h4 className="text-3xl font-bold mb-4">M.Com</h4>
                                <p className="text-slate-400 group-hover:text-white transition-colors text-sm">Expand your knowledge, refine your skills, and unlock new opportunities in finance, accounting, and business leadership.</p>
                            </div>
                            <div className="glass-panel p-10 group hover:bg-secondary transition-all duration-500 rounded-3xl">
                                <span aria-hidden="true" className="material-symbols-outlined text-4xl mb-6">terminal</span>
                                <h4 className="text-3xl font-bold mb-4">B.C.A</h4>
                                <p className="text-slate-400 group-hover:text-white transition-colors text-sm">Immerse yourself in software development, database management, and IT solutions, equipping yourself to thrive digitally.</p>
                            </div>
                            <div className="glass-panel p-10 group hover:bg-tertiary transition-all duration-500 rounded-3xl md:mt-8">
                                <span aria-hidden="true" className="material-symbols-outlined text-4xl mb-6">trending_up</span>
                                <h4 className="text-3xl font-bold mb-4">B.B.A</h4>
                                <p className="text-slate-400 group-hover:text-white transition-colors text-sm">Develop a strong foundation in management, entrepreneurship, and strategic decision-making to lead in the dynamic corporate world.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Navbar (Placeholder if needed) */}

                {/* Chapter 5 */}
                <section className="home-chapter relative md:snap-section min-h-screen lg:h-screen flex items-start lg:items-center justify-center py-24 lg:py-0 z-10 bg-primary" id="chapter-5">
                    <div className="absolute inset-0 overflow-hidden">
                        <img loading="lazy" decoding="async" alt="" className="w-full h-full object-cover grayscale opacity-20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOTkVxLgJBv_TA3cxFpwGcReDHVoaOztRTVyKVSjrleqlGrroazL3EEJDMx-bJZvJ31BqYEOArVyY2DSqnUGMSOey8Plt9YTjyYJ9RcB4OcyCFEQ9UbJT6EuVNO5SFkCKNOKaEeLG7U8Zhy96xVVQb4mxMLKkgHI55x-Nl7ahMR1vGZhpCfmcN63d7CA9OPn3X5l_5TSlHMyI8SzT1W2dakKQD7mATsV8wKevTwYdrMyaXbH6fmw8g4Svqy-LK5526d6Dgb9q0gM9P" />
                    </div>
                    <div className="container mx-auto px-8 relative z-10 text-center max-w-5xl">
                        <span className="text-secondary font-bold tracking-[0.4em] uppercase text-sm mb-12 block">Chapter V: The Voice</span>
                        <span aria-hidden="true" className="material-symbols-outlined text-5xl md:text-7xl text-secondary opacity-50 mb-8">format_quote</span>
                        <h3 className="font-headline text-3xl md:text-4xl italic font-light leading-relaxed mb-12 text-slate-200">
                            "Choosing BCA at NDRK First Grade College has been a game-changer for me. The comprehensive curriculum and dedicated faculty have empowered me with the latest knowledge and practical skills..."
                        </h3>
                        <div className="flex flex-col items-center">
                            <img loading="lazy" decoding="async" alt="" className="w-20 h-20 rounded-full border-2 border-secondary mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOTkVxLgJBv_TA3cxFpwGcReDHVoaOztRTVyKVSjrleqlGrroazL3EEJDMx-bJZvJ31BqYEOArVyY2DSqnUGMSOey8Plt9YTjyYJ9RcB4OcyCFEQ9UbJT6EuVNO5SFkCKNOKaEeLG7U8Zhy96xVVQb4mxMLKkgHI55x-Nl7ahMR1vGZhpCfmcN63d7CA9OPn3X5l_5TSlHMyI8SzT1W2dakKQD7mATsV8wKevTwYdrMyaXbH6fmw8g4Svqy-LK5526d6Dgb9q0gM9P" />
                            <div className="font-bold text-xl">Samhitha</div>
                            <div className="text-secondary text-sm uppercase tracking-widest">Class of 2019</div>
                        </div>
                    </div>
                </section>

                {/* Final */}
                <section className="home-chapter md:snap-section min-h-screen md:h-screen flex flex-col" id="final">
                    <div className="flex-grow flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-primary to-primary"></div>
                        <div className="relative z-10 text-center px-8">
                            <h2 className="font-headline text-4xl md:text-6xl font-bold mb-12">The Journey Begins with You.</h2>
                            <p className="text-xl text-slate-400 mb-16 max-w-xl mx-auto">You've seen the vision, the legacy, and the potential. Now, take the first step towards your own success story.</p>
                            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                                <ActionButton  className="bg-white text-primary px-10 py-4 md:px-16 md:py-6 rounded-full font-bold text-lg md:text-2xl hover:bg-secondary hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                                    Apply Now
                                </ActionButton>
                                <ActionButton message="I would like to speak with the admissions team." className="border border-white/30 text-white px-8 py-4 md:px-12 md:py-6 rounded-full font-bold text-base md:text-xl hover:bg-white/10 transition-all">
                                    Talk to Admissions
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </section>
            </main>
        </>
    );
}

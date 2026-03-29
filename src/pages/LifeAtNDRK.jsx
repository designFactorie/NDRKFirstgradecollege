import React from 'react';
import Footer from '../components/Footer';

export default function LifeAtNDRK() {
    return (
        <main className="pt-28">
            {/* Hero Section: Editorial Style */}
            <section className="relative bg-surface overflow-hidden pt-12 lg:pt-24 min-h-[800px]">
                <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-12 items-center">
                    <div className="z-10 relative lg:col-span-7 pt-12">
                        <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Experience NDRK</span>
                        <h1 className="font-headline text-3xl md:text-6xl font-bold mb-8 leading-tight text-primary">
                            The Student Experience: <span className="font-serif italic font-light md:block mt-4 text-secondary">Beyond the Classroom</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-lg mb-10 leading-relaxed">
                            Life at NDRK goes beyond textbooks and lectures. We believe in nurturing well-rounded individuals who not only excel academically but also thrive in extracurricular pursuits.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-secondary transition-colors shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
                                College Virtual Tour <span className="material-symbols-outlined">play_circle</span>
                            </button>
                        </div>
                    </div>
                    <div className="relative lg:col-span-5 h-[600px] hidden md:block mt-8 lg:mt-0">
                        <div className="w-full h-full rounded-3xl overflow-hidden shadow-[0px_20px_40px_rgba(25,28,29,0.06)] relative group">
                            <img alt="Student interaction" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbHRgWEKr96wIvNl50gQFUJ2bNt1Xh-yAZmxSh56mLNkR7b6shxuzGfV-vZUMhP_ctaLHkaGllpZnsjtn9u3gMB9BsA6O81_esX8lOHjRDijKf3v-LFu04t_D3y8VWNvsjzOM3yci-TpzNDBmLIIvRjTnz_6p0OPJuGP1BqHMlxJWpnYmeYj6nrApbZocKnem5tRF7IE8FrJbBWbyRyPu8r4W2pGNIBkIFgtzcQwNvu75FAsRlT7L7hwWpDErOZmxizGJu8lxGna44" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-40"></div>
                        </div>
                        {/* Floating Stat Overlay */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-[200px] border-l-4 border-tertiary">
                            <p className="font-serif italic text-3xl text-primary mb-1">98%</p>
                            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Student Satisfaction Rate</p>
                        </div>
                    </div>
                </div>
                <div className="h-32 bg-surface-container-low mt-12 [clip-path:polygon(0_0,100%_0,100%_85%,0%_100%)]"></div>
            </section>

            {/* Campus Statistics: Minimalist Bento */}
            <section className="py-24 bg-surface">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-surface-container-lowest p-10 rounded-xl flex flex-col items-center text-center shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
                            <span className="material-symbols-outlined text-5xl text-tertiary mb-6">groups</span>
                            <h3 className="text-5xl font-black text-primary mb-2">10+</h3>
                            <p className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500">Student Clubs</p>
                        </div>
                        <div className="bg-surface-container-lowest p-10 rounded-xl flex flex-col items-center text-center shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
                            <span className="material-symbols-outlined text-5xl text-tertiary mb-6">menu_book</span>
                            <h3 className="text-5xl font-black text-primary mb-2">4</h3>
                            <p className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500">Study Spots</p>
                        </div>
                        <div className="bg-primary p-10 rounded-xl flex flex-col items-center text-center text-white shadow-[0px_20px_40px_rgba(25,28,29,0.06)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-20 -mr-16 -mt-16 rounded-full"></div>
                            <span className="material-symbols-outlined text-5xl text-tertiary-fixed mb-6">event_available</span>
                            <h3 className="text-5xl font-black mb-2">40+</h3>
                            <p className="text-xs uppercase tracking-[0.2em] font-bold text-primary-fixed">Student Events per year</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campus Gallery: Asymmetrical Mosaic mapped to Extracurriculars */}
            <section className="py-24 bg-surface-container-low">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="max-w-3xl">
                            <span className="text-[10px] font-bold tracking-widest uppercase text-secondary mb-4 block">Extracurricular</span>
                            <h2 className="font-headline text-3xl md:text-6xl font-black text-primary mb-6">Thrive on Campus and Beyond</h2>
                            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                                Make a difference. We have exciting opportunities for you to connect your classroom experience with helping underserved communities in Hassan, engage in real world business and research or make your debut as an entrepreneur.
                            </p>
                        </div>
                        <a className="text-primary font-bold border-b-2 border-primary-container pb-1 hover:text-secondary hover:border-secondary transition-colors whitespace-nowrap" href="#">View All Activities</a>
                    </div>

                    <div className="grid grid-cols-12 gap-6 md:h-[800px]">
                        {/* Main Item: Sports & Wellness */}
                        <div className="col-span-12 md:col-span-8 h-80 md:h-full rounded-2xl overflow-hidden relative group shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
                            <img alt="Sports" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiWF-LCs4eupCTrZKYo0AWHSDG8SNvG25OrXvIkgibfsuJv4pQCqipp4pejlxat_MpTz9xL4QKa9uS9BLGK3iIs-4J_8Yb0X3BzcqCQcy_f8bpd3I2fgdkBSHcIp_epKydyy-wkwHKZrmLICPu8nXlsoGAkZstONkGMnWOtWNahbAsRnm7SzFgnWp_wl6fyyDg_JfedoENefc4fKvJ-cnQ2SPzOScQRazzij6Nbn7patTAsX35CLf2CbYVRXdD9j3_IFkhBmRpwIWV" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2670&auto=format&fit=crop"; }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white max-w-lg">
                                <h4 className="text-2xl md:text-3xl font-bold mb-2">Sports & Wellness</h4>
                                <p className="text-xs md:text-white/80">From inter-college championships to state-of-the-art gym facilities, we offer a range of sports to keep you active.</p>
                            </div>
                        </div>
                        {/* Small Stack items */}
                        <div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-6 h-full">
                            <div className="rounded-2xl overflow-hidden relative group shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
                                <img alt="Cultural" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwCLENf9urXoTugFPu4rjNcM-XBDiKbgieWrdRyv1JLWWRLVx2uMMFE_AdojhSUexLO3r0-MqRGbe36ZQqrUYCn00sGhylzycVukLqMA33xde890CovPbcrhZqGVnf7Xt0FcEJH3eLQOvFRgZQtzPRCTIYFMUiwsLNEuVWhjJRzHgGqaqmfm4TCHJoNZCjyILu4s1_x6ozZXFOJf6Hl_xBE1VS_638ibeRHW9eBJTxvkWmCu48EoGe7q2ot3ym7J37e7iYv54edLLb" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=2670&auto=format&fit=crop"; }} />
                                <div className="absolute inset-0 bg-black/40 opacity-100 flex items-end p-6">
                                    <div className="text-white">
                                        <span className="bg-secondary text-white px-3 py-1 rounded-full font-bold text-[10px] uppercase mb-2 inline-block">Art</span>
                                        <h4 className="font-bold text-lg">Cultural & Arts</h4>
                                        <p className="text-xs text-white/80 line-clamp-2">Be it dance, dramatics, music or painting, explore avenues that let your creativity shine.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-2xl overflow-hidden relative group shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
                                <img alt="NSS" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCorz4aEaPdbB_0cs62Xiy-nsx4fPTwzcDPchno6mgx2C4uoE2TUV3W49W1COe9edzdzNbnn5ULzJg9_gnIE0IRDtMab09QbwXx5h_K2OlWxRskH1ikMPwMoDDSgVRXIqyoGc3Yh22nuMjul-9PmuqgcLSQ0OzQjb5dUnDgLc8KE6DqNcQYnBvP5GbkJO3RbDZFttHcolf2VfCmQCU1P177R8s-v_qg72WQXHGpZbmy24F4b4Fbim5uIB9BCrI2SqvDSthGS9Jns-JV" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2669&auto=format&fit=crop"; }} />
                                <div className="absolute inset-0 bg-black/40 opacity-100 flex items-end p-6">
                                    <div className="text-white">
                                        <span className="bg-primary text-white px-3 py-1 rounded-full font-bold text-[10px] uppercase mb-2 inline-block">Service</span>
                                        <h4 className="font-bold text-lg">NSS Chapter</h4>
                                        <p className="text-xs text-white/80 line-clamp-2">Engage in community service to build strong social values and leadership.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Bottom Row */}
                        <div className="col-span-12 md:col-span-4 h-64 rounded-2xl overflow-hidden relative group shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
                            <img alt="Nature Club" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz1J3Jze4MvpSgbkJebMluXK4sZahfRTM5nBcwIhW468iKObgkzSZplKddZVEwYCxGuj2VYatdB2ywAMT8bVvHyFHmNHm2fe-qcK6g_ZFNTF_dTruF2k92rWYuEHBRbdKuIKakTi9tdjaJtd42t9uBfYCrUz0J7d8408ca__lyWMA8BfM2CitW0zLXcTPC_jydzt8waeDuiJ98v4c1iaxY2cJyVUNcnZ3uOcB1nVKAYlGF37PNI6mKPVsGN737yhtKnA-fFTyxNXG0" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2674&auto=format&fit=crop"; }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                <div className="text-white">
                                    <span className="bg-tertiary-fixed text-black px-3 py-1 rounded-full font-bold text-[10px] uppercase mb-2 inline-block">Environment</span>
                                    <h4 className="font-bold text-lg">Nature Club</h4>
                                    <p className="text-xs text-white/80 line-clamp-2">Promoting environmental awareness through treks, campaigns, and conservation projects.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-8 h-64 rounded-2xl overflow-hidden relative group shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
                            <img alt="Red Cross" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF3PYtJlK7A3ZV5uEp0wYtVREC_RBC9esciMS_ZH9Kwbz06Bo98g9tAqAfU0ldBUj1Xxrd0vtc0kaF3ChWgYzyX9SklrohZ0bV9U8qpGRcXpXxHJDmDJGvjV15WvlUyAo-FPbkaEOgnQrY6aiFHzu6OsmiQqSHeJ9w5Ez8r1m8EbReCRLgcnTKva_ANeY_jz0_qYwsHanNENK4KrVneR4qirVUFgHj9j_MkePgPnC9eaKJU7h0T4qatYRrTe9hEtLwFm26qRA5K5Ja" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2670&auto=format&fit=crop"; }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                <div className="text-white max-w-lg">
                                    <span className="bg-red-600 text-white px-3 py-1 rounded-full font-bold text-[10px] uppercase mb-2 inline-block">Health & Safety</span>
                                    <h4 className="font-bold text-xl mb-1">Red Cross</h4>
                                    <p className="text-sm text-white/80">Active blood donation drives and health initiative programs to support the community.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Student Blogs */}
            <section className="py-24 bg-surface">
                <div className="max-w-4xl mx-auto px-8">
                    <div className="mb-16 text-center">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-secondary mb-4 block">Other Success Stories</span>
                        <h2 className="font-serif italic text-3xl md:text-4xl text-primary mb-6">Read more about our School NDRK...</h2>
                        <div className="w-16 h-1 bg-tertiary-container mx-auto"></div>
                    </div>

                    {/* Blog Item */}
                    <article className="bg-surface-container-lowest p-8 md:p-12 rounded-2xl shadow-[0px_20px_40px_rgba(25,28,29,0.06)] flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-surface-container ring-1 ring-outline-variant/20">
                            <img alt="Samhitha K" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYd1F5nxjwk6_anlRNkuo1ybJ6Reu3RK90i5rfYKOiMZ85asWTepVafqADNIHbap1VNsnr-GXSRJshyLpA7z5LCyBR18p3zvE7T1fhIGc65RILBcw9rQ4jr91iyt419m5IQ-BQ5zzSxwbyTXvFg4oxHw8IAGWtcKloNxajG7TpTifc6oxGgp3-7aoIBOvfaAJNJM-vKt9ec1Du766miqd429fVRceg9aYmAuJnFs0cNas7PTw8Vp1khVORSG01rmBpi8dyVcMjs801" />
                        </div>
                        <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-4 leading-tight">
                            "Dont Spread Yourself Thin"
                        </h3>
                        <p className="text-slate-600 text-lg md:text-xl italic mb-8 max-w-2xl leading-relaxed">
                            "Cannot stress this enough - your time in college will be the best one ever, allowing you to explore yourself and develop your potential holistically to become the next version of yourself."
                        </p>
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-primary tracking-widest uppercase text-xs">By Samhitha. K</span>
                            <span className="text-secondary font-bold text-[10px] tracking-widest uppercase mt-2">B.Com Graduate</span>
                        </div>
                    </article>

                    <div className="mt-16 text-center">
                        <button className="bg-gradient-to-br from-primary to-primary-container text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-lg">Read More Stories</button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

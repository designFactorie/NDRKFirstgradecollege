import React from 'react';
import Footer from '../components/Footer';

export default function AboutUs() {
    return (
        <main className="pt-28">
            {/* Hero Section */}
            <section className="relative h-[870px] flex items-center overflow-hidden bg-primary">
                <div className="absolute inset-0 z-0">
                    <img alt="Campus Architecture" className="w-full h-full object-cover opacity-40 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbn2cc5tQHZCp_WSmSU6hU17Yu0EX0ZI2RunO-iKk-xy1DBCh-Ld5QINJ61pwLTslKdSC9qkkVqDSHISezRlvbBU0QbTXU4FqgvGROyLg3NZTo8didbwSVdYnIsynkcpXhaFZt17dSDbat9QkkPc2qyJ6vfxbcCHe1eRPu7GajNEBS84nfY2TsOq7tv9nm1W3bVFWzM-ap-qZ_w5RpkKDFocb0C51D6Lv7RYIU4j8hFo-5o3-XML0kZ2Pj5HByVqfCc3yCIB89X84C" />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-primary"></div>
                </div>
                <div className="container mx-auto px-8 relative z-10">
                    <div className="max-w-4xl">
                        <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-sm text-xs font-bold tracking-[0.2rem] mb-6 font-label uppercase">Established 1977</span>
                        <h1 className="font-headline text-4xl md:text-6xl font-bold mb-8 leading-tight text-white">
                            Our Legacy <span className="block text-secondary-fixed-dim not-italic font-headline">& Future</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 max-w-2xl font-light leading-relaxed">
                            Nurturing intellectual curiosity and ethical leadership for over four decades in the heart of academic tradition.
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
                    <span className="material-symbols-outlined text-white text-3xl">expand_more</span>
                </div>
            </section>

            {/* History Section */}
            <section className="py-24 bg-surface relative overflow-hidden">
                <div className="container mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-7 space-y-8">
                            <h2 className="text-5xl md:text-6xl font-serif italic text-primary leading-none">A Tradition of <span className="font-headline not-italic font-bold">Excellence</span></h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed max-w-2xl">
                                <p>Founded in 1977 by the visionary couple, late Smt. Narayani D R Karigowda and Late Sri D R Karigowda, NDRK First Grade College has a rich history rooted in a humble beginning. With a mere 25 students, the college embarked on its journey to provide quality education in the fields of Commerce, Business Management, and Science.</p>
                                <p>Over the years, NDRK First Grade College has grown exponentially, emerging as a distinguished institution that imparts education to over 1200 students annually. With a strong emphasis on academic excellence and holistic development, the college has become a preferred choice for aspiring students seeking a well-rounded education.</p>
                                <p>NDRK First Grade College continues to uphold its founders' vision, fostering a nurturing environment that encourages intellectual curiosity, critical thinking, and real-world application of knowledge.</p>
                                <div className="flex gap-8 pt-6">
                                    <div>
                                        <div className="text-4xl font-headline font-bold text-secondary">40+</div>
                                        <div className="text-xs uppercase tracking-widest font-label font-bold text-slate-500">Years of Impact</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-headline font-bold text-secondary">1200+</div>
                                        <div className="text-xs uppercase tracking-widest font-label font-bold text-slate-500">Students Annually</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-headline font-bold text-secondary">A Grade</div>
                                        <div className="text-xs uppercase tracking-widest font-label font-bold text-slate-500">Accreditation</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative">
                            <div className="rounded-xl overflow-hidden shadow-[0px_20px_40px_rgba(25,28,29,0.06)] bg-white/5">
                                <img alt="A Tradition of Excellence" className="w-full h-auto block" src="/assets/images/tmpt.png" />
                            </div>
                            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[85%] bg-primary p-8 rounded-xl shadow-[0px_20px_40px_rgba(25,28,29,0.1)] hidden md:block text-center border border-white/5">
                                <p className="text-white font-serif italic text-2xl">"Wisdom is the bridge between history and the future."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission, Vision & Values */}
            <section className="py-24 bg-surface-container-low">
                <div className="container mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-surface-container-lowest p-12 rounded-xl shadow-[0px_20px_40px_rgba(25,28,29,0.06)] group hover:bg-primary transition-colors duration-500">
                            <span className="material-symbols-outlined text-secondary text-5xl mb-8 group-hover:text-tertiary-fixed transition-colors">rocket_launch</span>
                            <h3 className="text-3xl font-headline font-bold text-primary mb-6 group-hover:text-white transition-colors">Mission</h3>
                            <p className="text-slate-600 group-hover:text-white/80 transition-colors leading-relaxed">Provide quality education and holistic development opportunities that foster intellectual growth, critical thinking, and ethical values. Nurture a student-centric learning environment that promotes innovation, research, and industry relevance.</p>
                        </div>
                        <div className="bg-surface-container-lowest p-12 rounded-xl shadow-[0px_20px_40px_rgba(25,28,29,0.06)] group hover:bg-primary transition-colors duration-500">
                            <span className="material-symbols-outlined text-secondary text-5xl mb-8 group-hover:text-tertiary-fixed transition-colors">visibility</span>
                            <h3 className="text-3xl font-headline font-bold text-primary mb-6 group-hover:text-white transition-colors">Vision</h3>
                            <p className="text-slate-600 group-hover:text-white/80 transition-colors leading-relaxed">To be a leading educational institution committed to empowering students with knowledge, skills, and values to become successful professionals and responsible global citizens.</p>
                        </div>
                        <div className="bg-surface-container-lowest p-12 rounded-xl shadow-[0px_20px_40px_rgba(25,28,29,0.06)] group hover:bg-primary transition-colors duration-500">
                            <span className="material-symbols-outlined text-secondary text-5xl mb-8 group-hover:text-tertiary-fixed transition-colors">verified_user</span>
                            <h3 className="text-3xl font-headline font-bold text-primary mb-6 group-hover:text-white transition-colors">Core Values</h3>
                            <ul className="space-y-3 text-slate-600 group-hover:text-white/80 transition-colors">
                                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-secondary group-hover:bg-tertiary-fixed"></span> Excellence & Integrity</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-secondary group-hover:bg-tertiary-fixed"></span> Student-Centricity</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-secondary group-hover:bg-tertiary-fixed"></span> Collaboration & Respect</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-secondary group-hover:bg-tertiary-fixed"></span> Lifelong Learning</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-secondary group-hover:bg-tertiary-fixed"></span> Social Responsibility & Innovation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards & Recognitions */}
            <section className="py-24 bg-surface">
                <div className="container mx-auto px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-5xl font-headline font-bold text-primary mb-4">Accolades & Accreditations</h2>
                        <p className="text-slate-600">Our commitment to quality is recognized by the nation's leading educational bodies.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
                        <div className="flex flex-col items-center p-8 border-r border-outline-variant/20 last:border-0 grayscale hover:grayscale-0 transition-all">
                            <img alt="NAAC Seal" className="h-24 mb-4 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzppeGrax8Ao5wk7H-TjX4ek22J_WOBk6tmO0QYmueAYS9S5IENObod-uO5iltw2JlqFEqGgi4er0Gynk9ZtfrO5yV5KG65D5APf9eFMXBHD6f7VbEIUuPLoyVVzgiXbey89vCwPvwNM8q94V-6XuBY1gL7vI2ojFIdkvXtP-l167XOLBKfTtEUZvQQpTeLBegTMcAMvitk-N2RrVQLOrieGHZmCpmNxISA0cyYJldD5CXN1nBgVtAWY4nWf6x7PTGBkDyAX0AlYpS" />
                            <span className="font-label text-xs font-bold text-slate-500 text-center uppercase">NAAC 'A' GRADE ACCREDITED</span>
                        </div>
                        <div className="flex flex-col items-center p-8 border-r border-outline-variant/20 last:border-0 grayscale hover:grayscale-0 transition-all">
                            <img alt="Olympaid" className="h-24 mb-4 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfXxQutJ4ob_1bU2vWuDr1jNeDcI9U4t8A__fhET1gYHCSiBkwW3w8LZbcQImDUZeBU4Y2ILchSn-JVjPYd3rfV5mVDB0O3woWWnxwQ7Vce4TwisuluSxNiCcuxNGyfZqrthXvZeZQxcveR8yYGO_AUeSQ5ZjG5_feGc3VerK9QiLHK6Bozf2WT5ZUdGff3Zpws8Av9log5E6F-rJVhBsKBnms0tKgoReFEHiGppR8S_3Z0nKejl53g-u1qVnWKgnmWb9nMAYYBMDs" />
                            <span className="font-label text-xs font-bold text-slate-500 text-center uppercase">OLYMPIAD 2022 WINNER</span>
                        </div>
                        <div className="flex flex-col items-center p-8 border-r border-outline-variant/20 last:border-0 grayscale hover:grayscale-0 transition-all">
                            <img alt="UGC Recognition" className="h-24 mb-4 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdyjhO1zXZvUxIoVNWXX1twEbIsfFwivDcxvXerwbYCAaXyOSe1feU9c0Abue71AShCQNspqHCim052GekVSnZBfERrjQ9i5MAN6A0HumMUAR1eyA1kMEC1TIq-HK0ruxxn8DIrVY4OwVjDnqwuxOdExZhlYApaOCWGijOddrialwOHxa_f-NJSyTRNHa15UWxUPwNE8XNEzaz_NC6hQpMWNNM-Nn37hWMFPE7HUGdNYyBe9McIfbzhKfRUjBscvyTeUiaZR3tTbVP" />
                            <span className="font-label text-xs font-bold text-slate-500 text-center uppercase">UGC RECOGNIZED INSTITUTION</span>
                        </div>
                        <div className="flex flex-col items-center p-8 border-r border-outline-variant/20 last:border-0 grayscale hover:grayscale-0 transition-all">
                            <img alt="NIRF Ranking" className="h-24 mb-4 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKLoVbUSoRM1SMLep0LugB5U4zCYRaM70djJs4A8O8dwaO9D0slh2-64uIzffi4Tgn6e19uhFm91R65z-d_Ht_u14T9zqcy4OkBLolZchsXbGgIYCCAT91vScZIQ3x35E94SG9-IHu9LnwqXo20EGzGAXACTnd4nZKr20eDBYTGqAaFjxaX_2v6wWeTB1nypDfmoBly2Qt6RHMZ4tATy_aH66S7GSK6fONyJYVT8H3QNlUO-PYvKLtRCjS7QpgWnCgo7KUkKBUcMz2" />
                            <span className="font-label text-xs font-bold text-slate-500 text-center uppercase">TOP 100 NIRF RANKED</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Visionaries (Leadership) */}
            <section className="py-24 bg-primary text-white overflow-hidden">
                <div className="container mx-auto px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div>
                            <span className="text-tertiary-fixed font-label font-bold tracking-widest text-xs uppercase">Our Leadership</span>
                            <h2 className="text-6xl font-serif italic mt-4">The <span className="not-italic font-headline font-bold">Visionaries</span></h2>
                        </div>
                        <p className="max-w-md text-white/60 leading-relaxed pb-2">Meet the dedicated leaders steering NDRK College toward new horizons of academic brilliance and innovation.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="group">
                            <div className="aspect-[3/4] rounded-xl overflow-hidden mb-6 bg-surface-container-highest relative">
                                <img alt="Chairman Portrait" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/assets/images/chairman.png" />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <h4 className="text-xl font-headline font-bold mb-1">Manjula Prasad</h4>
                            <p className="text-tertiary-fixed font-label text-xs uppercase tracking-widest">Chairman</p>
                        </div>
                        <div className="md:col-span-3">
                            <h4 className="text-2xl font-headline font-bold mb-4 mt-8">Message from the Chairman</h4>
                            <p className="text-white/80 leading-relaxed italic text-lg max-w-4xl border-l-4 border-secondary pl-6">"I am really honoured and feel very privileged to function as the Principal/Chairman of NDRK, Hassan. Let me take this opportunity to thank the Management of NDRK institutions."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#e1e3e4]">
                <div className="container mx-auto px-8">
                    <div className="bg-gradient-to-br from-primary to-primary-container rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-5xl md:text-7xl font-serif italic text-white mb-8">Ready to join our <span className="not-italic font-headline font-bold">legacy?</span></h2>
                            <div className="flex flex-col md:flex-row gap-6 justify-center">
                                <button className="bg-tertiary-fixed text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-secondary transition-all">Download Prospectus</button>
                                <button className="bg-transparent border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">Schedule a Campus Visit</button>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                            <span className="material-symbols-outlined text-[30rem]">school</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

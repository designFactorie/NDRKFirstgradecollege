import React from 'react';
import Footer from '../components/Footer';

export default function Courses() {
    return (
        <main className="pt-28">
            {/* Hero Section: Page Title */}
            <header className="relative pt-32 pb-24 overflow-hidden bg-primary">
                <div className="absolute inset-0 opacity-20">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNLHhjWx6CMKq2u2C-vatjesboiyirnNxBSvcWfIVVqvieWe8pziga5o9IKouctn-zPeNiqx0hIr2ezLwIKyEXJ6G0B9iU2xCGdalbgx_dAqpR22nDCempJ8JoMl2RqOnnk9W3gjqitO-0IgbigdDUxgqKKMODlTsTPIlzhCzByf_9lU8Egx6L74wN8QJVVPYBlZveJsZaZvzRZq3L6ZEgltU08zt5WRrUIXzu05IPpRcJGgW3eERjHXBbcGVdGkWqxXCcH-U9kcZP" alt="Hero background" />
                </div>
                <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
                    <span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm mb-6">Academic Programs</span>
                    <h1 className="font-headline text-4xl md:text-6xl font-bold mb-8 leading-tight text-white">Explore Our <br />Courses</h1>
                    <p className="text-xl text-primary-fixed-dim max-w-2xl mx-auto leading-relaxed">
                        Discover programs designed to equip you with the skills needed to thrive in the modern world.
                    </p>
                </div>
            </header>

            {/* Courses Overview Banners (2x2 Grid Layout) */}
            <section className="py-24 bg-surface-container-low">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* BCA Banner */}
                        <div className="bg-surface-container-lowest rounded-2xl p-10 flex flex-col shadow-[0px_20px_40px_rgba(25,28,29,0.06)] border border-outline-variant/20 hover:-translate-y-2 transition-transform duration-500">
                            <span className="material-symbols-outlined text-4xl text-secondary mb-6">terminal</span>
                            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">Bachelor of Computer Application</h2>
                            <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                                Unlock the world of possibilities with our Bachelor of Computer Applications (BCA) program. Dive into the realms of programming, software development, and database management, gaining the skills needed to thrive in the digital age. With hands-on projects, industry-relevant curriculum, and experienced faculty, our BCA program prepares you for a successful career in the dynamic field of technology. Join us and embark on a transformative journey towards becoming a skilled IT professional.
                            </p>
                            <div className="flex flex-wrap gap-4 mt-auto">
                                <a href="/admissions" className="bg-primary text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-colors text-center inline-block">Apply Now</a>
                                <button className="outline outline-1 outline-primary text-primary px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">Download Subjects</button>
                            </div>
                        </div>

                        {/* BCom Banner */}
                        <div className="bg-surface-container-lowest rounded-2xl p-10 flex flex-col shadow-[0px_20px_40px_rgba(25,28,29,0.06)] border border-outline-variant/20 hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden">
                            <span className="material-symbols-outlined text-4xl text-secondary mb-6 relative z-10">account_balance</span>
                            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4 relative z-10">Bachelor of Commerce</h2>
                            <p className="text-slate-600 leading-relaxed mb-8 flex-grow relative z-10">
                                Embark on a transformative journey in the world of commerce with our Bachelor of Commerce (BCom) program. Gain a comprehensive understanding of business principles, finance, accounting, and entrepreneurship, equipping yourself with the skills needed to excel in diverse industries. With a practical and industry-focused curriculum, experienced faculty, and numerous networking opportunities, our BCom program prepares you for a successful career in the dynamic corporate landscape. Join us and unlock endless possibilities for growth and success in the business world.
                            </p>
                            <div className="flex flex-wrap gap-4 mt-auto relative z-10">
                                <a href="/admissions" className="bg-primary text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-colors text-center inline-block">Apply Now</a>
                                <button className="outline outline-1 outline-primary text-primary px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">Download Subjects</button>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -top-32 -right-32 w-64 h-64 bg-tertiary-container rounded-full opacity-20 pointer-events-none"></div>
                        </div>

                        {/* MCom Banner */}
                        <div className="bg-surface-container-lowest rounded-2xl p-10 flex flex-col shadow-[0px_20px_40px_rgba(25,28,29,0.06)] border border-outline-variant/20 hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden">
                            <span className="material-symbols-outlined text-4xl text-secondary mb-6 relative z-10">analytics</span>
                            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4 relative z-10">Master of Commerce</h2>
                            <p className="text-slate-600 leading-relaxed mb-8 flex-grow relative z-10">
                                Elevate your expertise and career prospects with our Master of Commerce (MCom) program. Delve into advanced concepts in finance, accounting, and business management, honing your skills as a strategic decision-maker and leader. With a rigorous curriculum, experienced faculty, and industry collaborations, our MCom program equips you with the knowledge and tools to excel in today's competitive business environment. Join us and take your professional journey to new heights with our comprehensive MCom program.
                            </p>
                            <div className="flex flex-wrap gap-4 mt-auto relative z-10">
                                <a href="/admissions" className="bg-primary text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-colors text-center inline-block">Apply Now</a>
                                <button className="outline outline-1 outline-primary text-primary px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">Download Subjects</button>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -top-24 -left-24 w-48 h-48 bg-secondary-container rounded-full opacity-20 pointer-events-none"></div>
                        </div>

                        {/* BBA Banner */}
                        <div className="bg-surface-container-lowest rounded-2xl p-10 flex flex-col shadow-[0px_20px_40px_rgba(25,28,29,0.06)] border border-outline-variant/20 hover:-translate-y-2 transition-transform duration-500">
                            <span className="material-symbols-outlined text-4xl text-secondary mb-6">business_center</span>
                            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">Bachelor of Business Administration</h2>
                            <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                                Shape your future as a business leader with our Bachelor of Business Administration (BBA) program. Immerse yourself in a dynamic learning environment that nurtures your leadership, communication, and critical thinking skills. With a comprehensive curriculum, industry-focused projects, and experienced faculty, our BBA program prepares you for the challenges and opportunities of the corporate world. Join us and embark on a transformative journey towards becoming a well-rounded professional ready to make a lasting impact in the field of business.
                            </p>
                            <div className="flex flex-wrap gap-4 mt-auto">
                                <a href="/admissions" className="bg-primary text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-colors text-center inline-block">Apply Now</a>
                                <button className="outline outline-1 outline-primary text-primary px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">Download Subjects</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Students Curriculum Segment */}
            <section className="py-24 bg-surface">
                <div className="max-w-4xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <span className="text-xs uppercase tracking-widest font-bold text-secondary mb-4 block">Curriculum Breakdown</span>
                        <h2 className="font-serif text-5xl text-primary mb-6 italic">How the Program Works</h2>
                        <div className="w-16 h-1 bg-tertiary mx-auto"></div>
                    </div>

                    <div className="space-y-6">
                        {/* BCom Curriculum */}
                        <details className="group bg-surface-container-lowest rounded-xl shadow-[0px_10px_30px_rgba(25,28,29,0.04)] border border-outline-variant/20 [&_summary::-webkit-details-marker]:hidden" open>
                            <summary className="flex items-center justify-between p-8 cursor-pointer list-none gap-4 hover:bg-surface-container/50 transition-colors rounded-xl">
                                <div className="flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-full bg-primary-container text-primary flex items-center justify-center font-bold text-sm shrink-0">1</span>
                                    <span className="font-bold text-xl text-primary font-headline">Bachelor of Commerce</span>
                                </div>
                                <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-secondary shrink-0">expand_more</span>
                            </summary>
                            <div className="px-8 pb-8 text-slate-600 leading-relaxed pt-2 ml-12">
                                BCom or Bachelor of Commerce course is a three-year UG degree course recognised by the Universities Grants Commission (UGC). Along with the full-time delivery mode, one can also pursue Distance BCom or Online BCom course. BCom is one of the most popular courses amongst the Class 12 graduates with the Commerce stream. As per the AISHE reports, with nearly 9.33 lakh enrolment, B.Com has been the third most desired course in India after Class 12. Besides B.Com, candidates can also pursue BCom (Honours) if they wish for in-depth knowledge in the Commerce stream.
                            </div>
                        </details>

                        {/* MCom Curriculum */}
                        <details className="group bg-surface-container-lowest rounded-xl shadow-[0px_10px_30px_rgba(25,28,29,0.04)] border border-outline-variant/20 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between p-8 cursor-pointer list-none gap-4 hover:bg-surface-container/50 transition-colors rounded-xl">
                                <div className="flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-full bg-primary-container text-primary flex items-center justify-center font-bold text-sm shrink-0">2</span>
                                    <span className="font-bold text-xl text-primary font-headline">Master of Commerce</span>
                                </div>
                                <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-secondary shrink-0">expand_more</span>
                            </summary>
                            <div className="px-8 pb-8 text-slate-600 leading-relaxed pt-2 ml-12">
                                MCom or Masters of Commerce is a two-year post-graduate level course ideal for candidates who wish to make a career in banking financial services and insurance (BFSI) as well as accounting and commerce sectors. The two-year course delves deeper into the functioning of the economy, capital, revenue, trade, taxes, etc. taught in B.Com. MCom is a very versatile course and gives the students to choose their careers in various fields. Since M.Com is a specialised area in itself, only those candidates who have pursued B.Com can pursue the course. M.Com is also a good option for CA/CS candidates.
                            </div>
                        </details>

                        {/* BBA Curriculum */}
                        <details className="group bg-surface-container-lowest rounded-xl shadow-[0px_10px_30px_rgba(25,28,29,0.04)] border border-outline-variant/20 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between p-8 cursor-pointer list-none gap-4 hover:bg-surface-container/50 transition-colors rounded-xl">
                                <div className="flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-full bg-primary-container text-primary flex items-center justify-center font-bold text-sm shrink-0">3</span>
                                    <span className="font-bold text-xl text-primary font-headline">Bachelor of Business Administration</span>
                                </div>
                                <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-secondary shrink-0">expand_more</span>
                            </summary>
                            <div className="px-8 pb-8 text-slate-600 leading-relaxed pt-2 ml-12">
                                BBA full form is Bachelor of Business Administration. BBA is one of the most popular and sought-after bachelor's degree programmes pursued by students after Class 12. The BBA course is the gateway to a plethora of job opportunities in numerous sectors such as Sales, Marketing, Education, Finance, Sales, and Government to name a few.
                            </div>
                        </details>

                        {/* BCA Curriculum */}
                        <details className="group bg-surface-container-lowest rounded-xl shadow-[0px_10px_30px_rgba(25,28,29,0.04)] border border-outline-variant/20 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between p-8 cursor-pointer list-none gap-4 hover:bg-surface-container/50 transition-colors rounded-xl">
                                <div className="flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-full bg-primary-container text-primary flex items-center justify-center font-bold text-sm shrink-0">4</span>
                                    <span className="font-bold text-xl text-primary font-headline">Bachelor's in Computer Application</span>
                                </div>
                                <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-secondary shrink-0">expand_more</span>
                            </summary>
                            <div className="px-8 pb-8 text-slate-600 leading-relaxed pt-2 ml-12">
                                Bachelors in Computer Application (BCA) is a three-year undergraduate degree course for students who wish to delve into the world of Computer languages. The BCA course is one of the most popular options to get started with a career in Information Technology. The BCA syllabus focuses on database management systems, operating systems, software engineering, computer architecture, web technology and languages such as C, C++, HTML, Java, etc. The IT industry is growing rapidly and with this, the demand for BCA graduates, too, is increasing every passing day. After obtaining a BCA degree, students can find lucrative job opportunities in leading IT companies such as Oracle, IBM, Infosys, and Wipro. Some of the roles that one can bag after completing a BCA programme is that of a System engineer, software tester, junior programmer, web developer, system administrator, software developer, etc. BCA graduates are not only recruited by the private sector but also by public sector organisations. Government organisations like the Indian Air Force(IAF), Indian Army, and India Navy also hire a large bunch of computer professionals for their IT department.
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            {/* The NDRK Difference */}
            <section className="py-32 bg-primary overflow-hidden relative">
                {/* Decorative background vectors */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" /></pattern></defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm mb-6">Pedagogy</span>
                            <h2 className="font-serif text-5xl md:text-7xl text-white mb-8">The NDRK <br /><span className="italic text-secondary">Difference.</span></h2>
                            <p className="text-xl text-white/80 leading-relaxed mb-6 font-medium">
                                At NDRK, our classes are designed to provide individual attention. You are known by name, valued for who you are, and challenged and guided to become who you want to be.
                            </p>
                            <p className="text-lg text-white/60 leading-relaxed mb-12">
                                Through your entire educational journey, you will establish and build upon a strong foundation that will allow you to grow as a confident, empowered and ethical leader. You will develop the essential interpersonal skills that employers prize, giving you a competitive edge in any job market.
                            </p>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl flex items-center gap-6 group hover:bg-secondary transition-colors duration-300 shadow-xl">
                                <div className="w-16 h-16 rounded-full bg-surface/10 flex items-center justify-center shrink-0 border border-white/20">
                                    <span className="text-2xl font-black text-white">01</span>
                                </div>
                                <h4 className="text-2xl font-bold text-white group-hover:text-primary-container transition-colors">Conceptual Clarity through Visual Learning</h4>
                            </div>
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl flex items-center gap-6 group hover:bg-secondary transition-colors duration-300 shadow-xl ml-0 md:ml-8">
                                <div className="w-16 h-16 rounded-full bg-surface/10 flex items-center justify-center shrink-0 border border-white/20">
                                    <span className="text-2xl font-black text-white">02</span>
                                </div>
                                <h4 className="text-2xl font-bold text-white group-hover:text-primary-container transition-colors">Individual Attention for Every Student</h4>
                            </div>
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl flex items-center gap-6 group hover:bg-secondary transition-colors duration-300 shadow-xl ml-0 md:ml-16">
                                <div className="w-16 h-16 rounded-full bg-surface/10 flex items-center justify-center shrink-0 border border-white/20">
                                    <span className="text-2xl font-black text-white">03</span>
                                </div>
                                <h4 className="text-2xl font-bold text-white group-hover:text-primary-container transition-colors">Focus on Consistent Learning</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

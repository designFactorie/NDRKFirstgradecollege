import React from 'react';
import Footer from '../components/Footer';

export default function Admissions() {
    return (
        <main className="bg-surface min-h-screen pt-28">
            {/* Hero Section */}
            <section className="relative h-[819px] flex items-center overflow-hidden bg-primary">
                <div className="absolute inset-0 opacity-40">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCphmSyWxt_XugIcUQt6Ee2h3JJrf7GFDHazeCfXfE0oxtyPEN1dumSe0Q1tgxYDdeTY9cDJrVWFkPZa8WY2e0OMS_CZEalYd2H69IklE5IXJoVhxKnH_v0YCQYr-AC7Z0x12XUs-DKwJ33IxU1P_trLI9C5nal701o1aA2Aslv1V-4VZ2DNX6z4gf3Y6vRAoCW_uxHbO7Z7i24WNUYSWVwqvjZFjnKn69xZmBWv2R6L2w1octvNAm8EFeq1UWTT6XDkkbsTohf7uyY" alt="Campus Building" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
                    <div className="max-w-3xl">
                        <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed px-4 py-1 rounded-sm text-sm font-bold tracking-widest uppercase mb-6">ADMISSIONS 2026</span>
                        <h1 className="font-headline text-4xl md:text-6xl font-bold mb-8 leading-tight text-white">
                            Why <br />
                            <span className="font-serif italic text-tertiary-fixed-dim">NDRKFGC?</span>
                        </h1>
                        <p className="text-xl text-primary-fixed mb-10 max-w-xl font-light leading-relaxed">
                            Discover what makes NDRK the standard for education. From our unparalleled academics to Financial trust, we strive to offer the best resources to the next generation of leaders.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-full font-bold text-lg hover:bg-secondary-fixed transition-colors shadow-lg" href="#apply-form">Apply Now</a>
                            <a className="flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-all font-medium" href="#">
                                <span className="material-symbols-outlined">description</span>
                                Download Prospectus
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why NDRK Grid */}
            <section className="py-24 px-8 max-w-7xl mx-auto border-b border-surface-container-highest">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="group">
                        <h3 className="font-headline text-2xl font-bold mb-4 text-primary">Our Curriculum</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Our supportive learning environment enhances each unique student’s skill set by guiding them through hands-on academic activities.
                        </p>
                    </div>
                    <div className="group">
                        <h3 className="font-headline text-2xl font-bold mb-4 text-primary">NDRK Trust</h3>
                        <p className="text-slate-600 leading-relaxed">
                            The legacy of the Trust is built on a student-centric approach that involves honing their innate skills and addressing their psychological and spiritual needs.
                        </p>
                    </div>
                    <div className="group">
                        <h3 className="font-headline text-2xl font-bold mb-4 text-primary">Our Faculty</h3>
                        <p className="text-slate-600 leading-relaxed">
                            All of our highly trained teachers possess many years of educational experience paired with a passion for growing and nurturing our students.
                        </p>
                    </div>
                </div>
            </section>

            {/* Eligibility Grid */}
            <section className="py-24 px-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">Eligibility Criteria</h2>
                        <p className="text-slate-600 text-lg">Detailed academic requirements for our premier undergraduate and postgraduate programs. Admissions are subject to availability of seats and fulfillment of specific program requirements.</p>
                    </div>
                    <div className="h-[2px] flex-grow bg-surface-container-highest mx-8 hidden md:block"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* B.Com Card */}
                    <div className="group p-8 rounded-xl bg-surface-container-low hover:bg-surface-container-lowest transition-all shadow-[0px_20px_40px_rgba(25,28,29,0.06)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-8 -mt-8"></div>
                        <span className="text-tertiary font-bold tracking-widest text-xs uppercase mb-4 block">UG Program</span>
                        <h3 className="font-headline text-3xl font-bold mb-6 text-primary">B.Com</h3>
                        <ul className="space-y-4 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                                <span>Completed 10+2 or equivalent examination</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                                <span>Minimum aggregate score of 50%</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                                <span>Subject to program requirements</span>
                            </li>
                        </ul>
                    </div>
                    {/* M.Com Card */}
                    <div className="group p-8 rounded-xl bg-surface-container-low hover:bg-surface-container-lowest transition-all shadow-[0px_20px_40px_rgba(25,28,29,0.06)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-full -mr-8 -mt-8"></div>
                        <span className="text-tertiary font-bold tracking-widest text-xs uppercase mb-4 block">PG Program</span>
                        <h3 className="font-headline text-3xl font-bold mb-6 text-primary">M.Com</h3>
                        <ul className="space-y-4 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                                <span>Bachelor's degree in Commerce</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                                <span>Minimum aggregate score of 50%</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                                <span>From a recognized university</span>
                            </li>
                        </ul>
                    </div>
                    {/* BCA Card */}
                    <div className="group p-8 rounded-xl bg-primary text-white hover:scale-[1.02] transition-all shadow-xl relative overflow-hidden">
                        <div className="absolute bottom-0 right-0 opacity-10">
                            <span className="material-symbols-outlined text-9xl">terminal</span>
                        </div>
                        <span className="text-tertiary-fixed font-bold tracking-widest text-xs uppercase mb-4 block">UG Program</span>
                        <h3 className="font-headline text-3xl font-bold mb-6">BCA</h3>
                        <ul className="space-y-4 text-sm text-primary-fixed">
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-secondary-fixed text-lg">check_circle</span>
                                <span>Completed 10+2 or equivalent examination</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-secondary-fixed text-lg">check_circle</span>
                                <span>Minimum aggregate score of 50%</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-secondary-fixed text-lg">check_circle</span>
                                <span>Subject to program requirements</span>
                            </li>
                        </ul>
                    </div>
                    {/* BBA Card */}
                    <div className="group p-8 rounded-xl bg-surface-container-low hover:bg-surface-container-lowest transition-all shadow-[0px_20px_40px_rgba(25,28,29,0.06)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary/5 rounded-bl-full -mr-8 -mt-8"></div>
                        <span className="text-tertiary font-bold tracking-widest text-xs uppercase mb-4 block">UG Program</span>
                        <h3 className="font-headline text-3xl font-bold mb-6 text-primary">BBA</h3>
                        <ul className="space-y-4 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                                <span>Completed 10+2 or equivalent examination</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                                <span>Minimum aggregate score of 50%</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                                <span>Subject to program requirements</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8">
                    <p className="text-xs text-slate-500 italic text-center">Note: All applicants must meet the age criteria set by the university. The eligibility criteria mentioned above are general guidelines. For detailed requirements, please refer to the official admission brochure.</p>
                </div>
            </section>

            {/* Application Requirements Bento */}
            <section className="bg-surface-container-low py-24">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* General Requirements Checklist */}
                        <div className="lg:col-span-7 bg-surface-container-lowest p-12 rounded-xl shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
                            <h2 className="font-headline text-4xl font-bold text-primary mb-12">Application Requirements</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-secondary">description</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1">Marks Cards</h4>
                                        <p className="text-sm text-slate-600">3 copies required</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-secondary">badge</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1">Transfer Certificate</h4>
                                        <p className="text-sm text-slate-600">1 copy required</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-secondary">assignment_ind</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1">Character Certificate</h4>
                                        <p className="text-sm text-slate-600">1 copy required</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-secondary">portrait</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1">Photographs</h4>
                                        <p className="text-sm text-slate-600">3 Passport size photos</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-secondary">account_balance</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1">Income/Caste Certificate</h4>
                                        <p className="text-sm text-slate-600">3 copies if applicable</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Important Notice */}
                        <div className="lg:col-span-5 flex flex-col gap-8">
                            <div className="bg-primary p-8 rounded-xl text-white shadow-lg h-full flex flex-col justify-center">
                                <span className="material-symbols-outlined text-4xl text-tertiary-fixed mb-4">info</span>
                                <h3 className="font-headline text-2xl font-bold mb-4">Important Notice</h3>
                                <p className="text-primary-fixed-dim leading-relaxed text-sm">
                                    Mere submission of application to a course does not entitle right to a candidate for admission. The Principal can deny admission to a candidate without assigning any reason. The decision of the Principal will be final in all matters of admission. All the original certificates should be produced at the time of admission.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="py-24 px-8 max-w-5xl mx-auto" id="apply-form">
                <div className="text-center mb-16">
                    <h2 className="font-headline text-5xl font-bold text-primary mb-4">Application Form</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">Unlock Your Potential, Enroll Today at NDRK First Grade College: Where Dreams Begin!</p>
                </div>
                <form className="space-y-12">
                    {/* Section 1: Personal */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-md">1</span>
                            <h3 className="text-2xl font-bold text-primary">Personal Information</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-slate-500 tracking-wider">FULL NAME</label>
                                <input className="bg-surface-container-highest border-none rounded-sm px-4 py-4 focus:ring-2 focus:ring-secondary outline-none shadow-inner" placeholder="As per 10th marks card" type="text" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-slate-500 tracking-wider">EMAIL ADDRESS</label>
                                <input className="bg-surface-container-highest border-none rounded-sm px-4 py-4 focus:ring-2 focus:ring-secondary outline-none shadow-inner" placeholder="student@example.com" type="email" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-slate-500 tracking-wider">PHONE NUMBER</label>
                                <input className="bg-surface-container-highest border-none rounded-sm px-4 py-4 focus:ring-2 focus:ring-secondary outline-none shadow-inner" placeholder="+91 00000 00000" type="tel" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-slate-500 tracking-wider">DATE OF BIRTH</label>
                                <input className="bg-surface-container-highest border-none rounded-sm px-4 py-4 focus:ring-2 focus:ring-secondary outline-none shadow-inner" type="date" />
                            </div>
                        </div>
                    </div>
                    {/* Section 2: Academic */}
                    <div className="space-y-8 pt-12">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-md">2</span>
                            <h3 className="text-2xl font-bold text-primary">Academic History</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex flex-col gap-2 md:col-span-2">
                                <label className="text-xs font-bold text-slate-500 tracking-wider">PREVIOUS INSTITUTION</label>
                                <input className="bg-surface-container-highest border-none rounded-sm px-4 py-4 focus:ring-2 focus:ring-secondary outline-none shadow-inner" placeholder="College/School Name" type="text" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-slate-500 tracking-wider">PERCENTAGE/CGPA</label>
                                <input className="bg-surface-container-highest border-none rounded-sm px-4 py-4 focus:ring-2 focus:ring-secondary outline-none shadow-inner" placeholder="e.g. 85%" type="text" />
                            </div>
                        </div>
                    </div>
                    {/* Section 3: Selection */}
                    <div className="space-y-8 pt-12">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-md">3</span>
                            <h3 className="text-2xl font-bold text-primary">Course Selection</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-slate-500 tracking-wider">SELECT PROGRAM</label>
                                <select className="bg-surface-container-highest border-none rounded-sm px-4 py-4 focus:ring-2 focus:ring-secondary outline-none shadow-inner">
                                    <option>B.Com</option>
                                    <option>M.Com</option>
                                    <option>BCA</option>
                                    <option>BBA</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-slate-500 tracking-wider">MODE OF ADMISSION</label>
                                <select className="bg-surface-container-highest border-none rounded-sm px-4 py-4 focus:ring-2 focus:ring-secondary outline-none shadow-inner">
                                    <option>Merit Based</option>
                                    <option>Management Quota</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="pt-12">
                        <button className="w-full bg-primary text-white py-6 rounded-full font-black text-xl hover:bg-secondary transition-colors shadow-2xl flex items-center justify-center gap-4" type="submit">
                            Apply Now
                            <span className="material-symbols-outlined">send</span>
                        </button>
                        <p className="text-center text-sm text-slate-500 mt-6">By submitting, you agree to the NDRK Admission Terms and Privacy Policy.</p>
                    </div>
                </form>
            </section>

            <Footer />
        </main>
    );
}

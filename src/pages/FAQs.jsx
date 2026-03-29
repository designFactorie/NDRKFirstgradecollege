import React from 'react';
import Footer from '../components/Footer';

export default function FAQs() {
    return (
        <main className="min-h-screen pt-28">
            {/* Hero Header */}
            <header className="relative pt-24 pb-32 overflow-hidden bg-primary">
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                        <div className="max-w-2xl">
                            <span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed font-bold text-[10px] tracking-[0.2em] uppercase rounded-sm mb-6">Support & Guidance</span>
                            <h1 className="font-headline text-3xl md:text-6xl font-bold mb-8 leading-tight text-white">Frequently Asked Questions</h1>
                            <p className="text-xl text-white/80 leading-relaxed">Find answers to common inquiries regarding admissions, academics, and campus life at NDRK First Grade College.</p>
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

            {/* Common Queries Section */}
            <section className="py-24 bg-surface">
                <div className="max-w-4xl mx-auto px-8">
                    <div className="text-center mb-20">
                        <h2 className="font-serif italic text-3xl md:text-5xl text-primary mb-4">Common Queries</h2>
                        <div className="h-1 w-24 bg-tertiary-container mx-auto"></div>
                    </div>

                    {/* Accordion Group */}
                    <div className="space-y-12">

                        {/* Admissions & Financials Category */}
                        <div className="border-b border-outline-variant/30 pb-6">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="material-symbols-outlined text-secondary">how_to_reg</span>
                                <h3 className="font-headline font-bold text-xl uppercase tracking-wider text-secondary">Admissions & Scholarships</h3>
                            </div>
                            <div className="space-y-4">
                                <details className="group bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none gap-4">
                                        <span className="font-bold text-primary font-headline">What is the admission process at NDRK First Grade College?</span>
                                        <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-secondary shrink-0">expand_more</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-outline-variant/10 pt-4 mt-2">
                                        To apply for admission, you can fill out the online application form available on our website or visit our admissions office. The selection is based on merit and eligibility criteria specific to each program. Please refer to the official admission brochure for detailed information.
                                    </div>
                                </details>
                                <details className="group bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none gap-4">
                                        <span className="font-bold text-primary font-headline">Are there any scholarship opportunities available?</span>
                                        <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-secondary shrink-0">expand_more</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-outline-variant/10 pt-4 mt-2">
                                        Yes, NDRK First Grade College offers various scholarship programs for meritorious students. Scholarships are awarded based on academic performance and specific criteria outlined by the college. We encourage students to check our website or contact the admissions office for more details on scholarship opportunities.
                                    </div>
                                </details>
                            </div>
                        </div>

                        {/* Academics & Careers Category */}
                        <div className="border-b border-outline-variant/30 pb-6">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="material-symbols-outlined text-secondary">menu_book</span>
                                <h3 className="font-headline font-bold text-xl uppercase tracking-wider text-secondary">Academics & Careers</h3>
                            </div>
                            <div className="space-y-4">
                                <details className="group bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 [&_summary::-webkit-details-marker]:hidden" open>
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none gap-4">
                                        <span className="font-bold text-primary font-headline">What academic programs does NDRK First Grade College offer?</span>
                                        <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-secondary shrink-0">expand_more</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-outline-variant/10 pt-4 mt-2">
                                        We offer a range of undergraduate programs including BCom, BBA, and BCA. We also have a postgraduate program, MCom, for those seeking advanced knowledge in commerce. Each program is designed to provide a comprehensive and industry-relevant education.
                                    </div>
                                </details>
                                <details className="group bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none gap-4">
                                        <span className="font-bold text-primary font-headline">Is the college affiliated with any university?</span>
                                        <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-secondary shrink-0">expand_more</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-outline-variant/10 pt-4 mt-2">
                                        Yes, NDRK First Grade College is affiliated with the University of Mysore. Our programs follow the curriculum and guidelines prescribed by the university, ensuring quality education and recognized degrees.
                                    </div>
                                </details>
                                <details className="group bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none gap-4">
                                        <span className="font-bold text-primary font-headline">Tell us about the faculty at NDRK First Grade College.</span>
                                        <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-secondary shrink-0">expand_more</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-outline-variant/10 pt-4 mt-2">
                                        Our faculty members are highly experienced and qualified experts in their respective fields. They bring a wealth of knowledge and industry insights to the classroom, ensuring a dynamic learning experience for our students. Our dedicated faculty members are committed to providing quality education and fostering the holistic development of every student.
                                    </div>
                                </details>
                                <details className="group bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none gap-4">
                                        <span className="font-bold text-primary font-headline">Can students engage in research or pursue additional certifications?</span>
                                        <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-secondary shrink-0">expand_more</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-outline-variant/10 pt-4 mt-2">
                                        Yes, we encourage students to engage in research activities and pursue additional certifications to enhance their academic profile. Our faculty members provide guidance and support for research projects, and students can also explore opportunities for participation in conferences, seminars, and workshops.
                                    </div>
                                </details>
                                <details className="group bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none gap-4">
                                        <span className="font-bold text-primary font-headline">Is there any career guidance and placement support at NDRK First Grade College?</span>
                                        <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-secondary shrink-0">expand_more</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-outline-variant/10 pt-4 mt-2">
                                        Absolutely! We have a dedicated career guidance and placement cell that assists students in their career planning, resume building, interview skills, and connects them with internship and job opportunities. We strive to ensure that our students are well-prepared to enter the professional world with confidence.
                                    </div>
                                </details>
                            </div>
                        </div>

                        {/* General & Campus Life Category */}
                        <div className="pb-6">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="material-symbols-outlined text-secondary">location_city</span>
                                <h3 className="font-headline font-bold text-xl uppercase tracking-wider text-secondary">General & Campus Life</h3>
                            </div>
                            <div className="space-y-4">
                                <details className="group bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none gap-4">
                                        <span className="font-bold text-primary font-headline">What are the college timings at NDRK First Grade College?</span>
                                        <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-secondary shrink-0">expand_more</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-outline-variant/10 pt-4 mt-2">
                                        The college operates from Monday to Friday, with classes typically scheduled between 9:00 AM and 4:00 PM. However, specific timings may vary depending on the program and the timetable assigned to each batch.
                                    </div>
                                </details>
                                <details className="group bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none gap-4">
                                        <span className="font-bold text-primary font-headline">What is the campus like at NDRK First Grade College?</span>
                                        <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-secondary shrink-0">expand_more</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-outline-variant/10 pt-4 mt-2">
                                        Our campus offers a vibrant and conducive learning environment. With modern infrastructure, well-equipped classrooms, state-of-the-art labs, and a well-stocked library, we provide students with the resources they need to excel academically. Additionally, our campus features sports grounds, recreational spaces, and a supportive student community, creating a well-rounded college experience.
                                    </div>
                                </details>
                                <details className="group bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none gap-4">
                                        <span className="font-bold text-primary font-headline">Does the college offer any extracurricular activities?</span>
                                        <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-secondary shrink-0">expand_more</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-outline-variant/10 pt-4 mt-2">
                                        Yes, we believe in the holistic development of our students. Along with academic excellence, we provide a platform for students to participate in a wide range of extracurricular activities, including cultural events, sports competitions, and student clubs. These activities foster creativity, leadership skills, and overall personality development.
                                    </div>
                                </details>
                                <details className="group bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none gap-4">
                                        <span className="font-bold text-primary font-headline">Are there any hostel facilities available for outstation students?</span>
                                        <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-secondary shrink-0">expand_more</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-outline-variant/10 pt-4 mt-2">
                                        Yes, we provide hostel facilities for both male and female students. Our hostels offer comfortable accommodation, study areas, and recreational spaces, creating a conducive environment for students' personal and academic growth.
                                    </div>
                                </details>
                                <details className="group bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none gap-4">
                                        <span className="font-bold text-primary font-headline">What are the modes of transportation available to reach the college?</span>
                                        <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-secondary shrink-0">expand_more</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-outline-variant/10 pt-4 mt-2">
                                        NDRK First Grade College is well-connected with public transportation. Students can easily commute to the college via buses, taxis, or auto-rickshaws. We also provide parking facilities for students who prefer to commute by their own vehicles. Bus facility is available for pick-up and drop-off from the Hassan Main Bus Stand and Sub-Urban Bus Stand.
                                    </div>
                                </details>
                                <details className="group bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none gap-4">
                                        <span className="font-bold text-primary font-headline">Does the college have Wi-Fi and other technological facilities?</span>
                                        <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-secondary shrink-0">expand_more</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-outline-variant/10 pt-4 mt-2">
                                        Yes, our college campus is equipped with Wi-Fi connectivity, allowing students to access online resources and engage in research and academic activities. Additionally, we have computer labs, audio-visual aids, and other technological facilities to enhance the learning experience.
                                    </div>
                                </details>
                                <details className="group bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none gap-4">
                                        <span className="font-bold text-primary font-headline">What are the measures taken for student safety on campus?</span>
                                        <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-secondary shrink-0">expand_more</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-outline-variant/10 pt-4 mt-2">
                                        At NDRK First Grade College, student safety is a top priority. We have implemented various security measures, including 24/7 CCTV surveillance, security personnel, and restricted access to ensure a safe and secure environment for all students.
                                    </div>
                                </details>
                            </div>
                        </div>

                    </div>

                    <div className="mt-8">
                        <p className="text-xs text-slate-500 italic text-center leading-relaxed">Please note that the answers provided above are for informational purposes. For precise and up-to-date information, we recommend referring to the official college website or contacting the admissions office directly.</p>
                    </div>

                </div>
            </section>

            {/* Support Call to Action */}
            <section className="mb-24 px-8">
                <div className="max-w-7xl mx-auto rounded-3xl bg-primary-container p-8 md:p-20 relative overflow-hidden shadow-2xl">
                    <div className="relative z-10 max-w-2xl">
                        <h2 className="font-serif italic text-3xl md:text-5xl text-white mb-6">Still have questions?</h2>
                        <p className="text-primary-fixed text-lg mb-10 leading-relaxed">Our administrative helpdesk is available Monday through Friday for in-person consultations or digital support regarding any complex queries.</p>
                        <div className="flex flex-wrap gap-6">
                            <button className="px-8 py-4 bg-tertiary-fixed text-black font-bold tracking-widest uppercase rounded-full hover:bg-white transition-colors text-xs">Contact Support</button>
                            <button className="px-8 py-4 border border-outline-variant/30 text-white font-bold tracking-widest uppercase rounded-full hover:bg-white/10 transition-colors text-xs">Campus Directory</button>
                        </div>
                    </div>
                    {/* Abstract Texture */}
                    <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none hidden md:block">
                        <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 400C150 400 250 150 400 0V400H0Z" fill="#ffe16d"></path>
                        </svg>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

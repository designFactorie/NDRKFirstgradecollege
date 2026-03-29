import React from 'react';
import Footer from '../components/Footer';

export default function Academics() {
    return (
        <main className="pt-28">
            {/* Hero Section */}
            <section className="relative h-[819px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img alt="Main Building" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNLHhjWx6CMKq2u2C-vatjesboiyirnNxBSvcWfIVVqvieWe8pziga5o9IKouctn-zPeNiqx0hIr2ezLwIKyEXJ6G0B9iU2xCGdalbgx_dAqpR22nDCempJ8JoMl2RqOnnk9W3gjqitO-0IgbigdDUxgqKKMODlTsTPIlzhCzByf_9lU8Egx6L74wN8QJVVPYBlZveJsZaZvzRZq3L6ZEgltU08zt5WRrUIXzu05IPpRcJGgW3eERjHXBbcGVdGkWqxXCcH-U9kcZP" />
                    <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
                </div>
                <div className="container mx-auto px-8 relative z-10 pt-20">
                    <div className="max-w-3xl">
                        <span className="uppercase tracking-[0.1rem] text-tertiary-fixed font-bold mb-4 block">Institutional Excellence</span>
                        <h1 className="font-headline text-4xl md:text-6xl font-bold mb-8 leading-tight text-white">We live at the intersection of <br /><span className="italic text-secondary-fixed-dim">teaching and doing.</span></h1>
                        <p className="text-xl text-white/80 max-w-xl leading-relaxed font-body mb-12">
                            Shaping the future through rigorous academic discourse and specialized industry alignment.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
                            <div>
                                <h4 className="text-4xl font-black text-secondary-fixed">18:1</h4>
                                <p className="text-xs uppercase tracking-widest text-white/70 mt-2 font-bold">Teacher Student Ratio</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-black text-secondary-fixed">100%</h4>
                                <p className="text-xs uppercase tracking-widest text-white/70 mt-2 font-bold">Pass Percentage</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-black text-secondary-fixed">500+</h4>
                                <p className="text-xs uppercase tracking-widest text-white/70 mt-2 font-bold">Students from 40 locations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Offered Section */}
            <section className="py-24 px-8 bg-surface">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-5xl font-serif text-primary mb-6">Our Academic Programs</h2>
                            <p className="text-lg text-slate-600">All our educational programmes are approved by the concerned statutory bodies and are designed to impart comprehensive knowledge.</p>
                        </div>
                        <div className="hidden md:block h-[2px] flex-grow mx-12 bg-outline-variant/30"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* BCom */}
                        <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col h-full shadow-[0px_20px_40px_rgba(25,28,29,0.06)] group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-tertiary-fixed">account_balance</span>
                            </div>
                            <h3 className="text-2xl font-headline text-primary mb-4">B.Com</h3>
                            <p className="text-slate-600 mb-8 flex-grow">A bachelor's degree in commerce opens up many opportunities in finance, accounting, and business operations.</p>
                            <button className="flex items-center gap-2 text-secondary font-bold group-hover:gap-4 transition-all">
                                Learn More <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                        {/* MCom */}
                        <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col h-full shadow-[0px_20px_40px_rgba(25,28,29,0.06)] group hover:-translate-y-2 transition-transform duration-300 border-t-4 border-tertiary">
                            <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-tertiary-fixed">analytics</span>
                            </div>
                            <h3 className="text-2xl font-headline text-primary mb-4">M.Com</h3>
                            <p className="text-slate-600 mb-8 flex-grow">Master's degree in commerce. Focuses on advanced knowledge in accounting, finance, and business management.</p>
                            <button className="flex items-center gap-2 text-secondary font-bold group-hover:gap-4 transition-all">
                                View Syllabus <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                        {/* BCA */}
                        <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col h-full shadow-[0px_20px_40px_rgba(25,28,29,0.06)] group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-tertiary-fixed">terminal</span>
                            </div>
                            <h3 className="text-2xl font-headline text-primary mb-4">B.C.A</h3>
                            <p className="text-slate-600 mb-8 flex-grow">We focus on real-world projects, workshops, and seminars. We want you to be ready to tackle any tech challenge that comes your way.</p>
                            <button className="flex items-center gap-2 text-secondary font-bold group-hover:gap-4 transition-all">
                                Learn More <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                        {/* BBA */}
                        <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col h-full shadow-[0px_20px_40px_rgba(25,28,29,0.06)] group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-tertiary-fixed">business_center</span>
                            </div>
                            <h3 className="text-2xl font-headline text-primary mb-4">B.B.A</h3>
                            <p className="text-slate-600 mb-8 flex-grow">Business Administration degree focuses on developing entrepreneurial and managerial skills for the modern corporate world.</p>
                            <button className="flex items-center gap-2 text-secondary font-bold group-hover:gap-4 transition-all">
                                View Syllabus <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>



            {/* NDRK Facilities Section */}
            <section className="py-24 px-8 bg-primary overflow-hidden">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 border-b border-white/10 pb-12">
                        <div className="mb-8 md:mb-0 max-w-3xl">
                            <span className="uppercase tracking-[0.1rem] text-tertiary-fixed font-bold mb-4 block">NDRK Facilities</span>
                            <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">Design Your Future</h2>
                            <p className="text-white/80 text-lg leading-relaxed mb-4">
                                Create a new app for an underserved population. Improve services for parents and children or create a groundbreaking new health device.
                            </p>
                            <p className="text-white/80 text-lg leading-relaxed">
                                We provide the intellectual depth, innovation and social justice framework so you can help make a better world.
                            </p>
                        </div>
                        <button className="bg-tertiary-fixed text-on-tertiary-fixed px-8 py-4 rounded-full font-bold hover:bg-secondary transition-colors whitespace-nowrap">Book a Campus Tour</button>
                    </div>

                    <div className="grid grid-cols-12 gap-6">
                        {/* Large Library Image */}
                        <div className="col-span-12 md:col-span-7 aspect-[16/11] md:aspect-auto md:h-full relative group rounded-xl overflow-hidden shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
                            <img alt="Library" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPX2pJo6mmjYdeE8yAQGTdvWRzrrwtesstobpeE7An6WUu7WJldbE6w0kxGgVkCq8aFheAWMHcaM0RGYOsCmNldm-FGX0HngQ6nwy5i38-pFUVHqZZSImVKMqUpf1xC2hF5SXuydSsNDxdPCd2gZesTwnbQcnRFPiET9IyFy-JSDllDbzzKylL5rVt4B5LLz1rYNPf88GmREcB3AUOiTI4XhfkbiuNd26tjsN2F1PFB65fR-f8J6HvJXOepGUhEiSby88rzSdkVa7D" />
                            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                <span className="uppercase tracking-[0.1rem] text-[#ffe16d] font-bold block mb-2">Central Library</span>
                                <p className="text-white text-sm max-w-sm">Wide range of resources like reference books, question banks, study materials to enhance student knowledge.</p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-6">
                            {/* Labs */}
                            <div className="relative group rounded-xl overflow-hidden aspect-video shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
                                <img alt="Computer Lab" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUXBjhMAqcnvhv1e7xNtAnTQL6eq5GYoi0_IiDKcIbFTk3vA6WC7ZdIYQFR58lPSIdJuWOKlGgASBzRiS5jyE-eKgkwk5mtV4il38vrrLDbgWNGz0e5lGfi2CWXHD-26y_xv6kDtgueB3nRXHe81mKSU6VGP5_1nz6Vwx7eE6OE0S11Wv2So7HfAEORhXiT14P2PWbuAGYzuJmMk6BlCpqIYxYFUs5dJU3QMFL4EAxQyu-kJFOOEnayDtufkKoQois3D68YLBMYznZ" />
                                <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                    <span className="uppercase tracking-[0.1rem] text-[#ffe16d] font-bold block mb-2">Well Equipped Labs</span>
                                    <p className="text-white text-xs max-w-xs">We provide fully equipped laboratories to enhance the practical understanding of concepts.</p>
                                </div>
                            </div>
                            {/* Hostel */}
                            <div className="relative group rounded-xl overflow-hidden aspect-video shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
                                <img alt="Hostel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_OTaYyd8UG4MYKQe8AcnqDDOyV-Srn6dqQ40k6OHyOQTFyPocbAlmO3Y9P--10xgx-Ny2V0DxF0xaygkiA5nzdKBvZmvwQib9_8V9RINl6fin0J9kM14Ymj7UG9mrVM9y9Ewils4c-HYGw76zVewXeRX5he6xO0SxUJfFGUiLvYsOesPkk_Xb8UkWZEFWdDwLtLQ767ZiWL5sEYYIjfk6JEg0vNJHQHr86-wkhddLxzvvT4Ttn4nxi_Z1cXReGIkoLTUcH_K8U2t3" />
                                <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                    <span className="uppercase tracking-[0.1rem] text-[#ffe16d] font-bold block mb-2">College Hostel</span>
                                    <p className="text-white text-xs max-w-xs">Aesthetically structured separate hostels for girls to ensure a comfortable stay.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        {/* Classrooms */}
                        <div className="aspect-video relative group rounded-xl overflow-hidden shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
                            <img alt="Classroom" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqAaS9_Yfs_a3U4ghvXj-P62KN2mRvozUNNvZRAWG32QBl5r8EK9wi97MSbAHZ-67YmUCWhjr_IuYdUB4ktRiiWQvvS-1nEC9nqHXbux25flIMteICqgPf1QkkMV5PM3RAfkeIcOw-l7aBcWzT0rof9M4DsxpTl8PDcGB39iiFSMNU9Esorv5GxCZ9veQz6bodW4jN-8Fcq8YZgXd5jym7Bo9aZOn--rY9netbYTRl_-S4mLkTM5nKJN2NjelKJ4PJysIaoYvZo3if" />
                            <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                <span className="uppercase tracking-[0.1rem] text-[#ffe16d] font-bold block mb-2">Smart Classrooms</span>
                                <p className="text-white text-sm">Enhanced seating capacity, interactive boards and audio-visual setups.</p>
                            </div>
                        </div>
                        {/* Playground */}
                        <div className="aspect-video relative group rounded-xl overflow-hidden shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
                            <img alt="Playground" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD34W2zL6uA9s2aZ-qK7n5Ntz8O-Wv9Z3U5a7LqH7kI1c2K-R1bKxZ5Y-v-5i6jC2hLq_rW9L9B4w9B4G_R1K6wY3L_3rW6B3J6R7U7T2Y0B6P2Q9F6P7Y1T6C8D8T2K-B8P-M6M-B" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=2671&auto=format&fit=crop"; }} />
                            <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                <span className="uppercase tracking-[0.1rem] text-[#ffe16d] font-bold block mb-2">College Grounds</span>
                                <p className="text-white text-sm">Well maintained, multipurpose sports grounds equipped with sports kits for tournaments.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-24 px-8 bg-surface">
                <div className="container mx-auto bg-surface-variant p-16 rounded-3xl flex flex-col md:flex-row items-center justify-between shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
                    <div className="max-w-xl mb-10 md:mb-0">
                        <h2 className="text-4xl font-serif text-primary mb-4">Stay Informed</h2>
                        <p className="text-slate-600 text-lg">Receive insights on upcoming admissions, curriculum updates, and academic seminars directly in your inbox.</p>
                    </div>
                    <div className="w-full md:w-auto flex flex-col md:flex-row gap-4">
                        <input className="bg-white border-none rounded-full px-8 py-4 w-full md:w-80 focus:ring-2 focus:ring-secondary" placeholder="Your academic email" type="email" />
                        <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-secondary transition-colors shrink-0">Subscribe</button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

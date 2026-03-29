import React from 'react';
import Footer from '../components/Footer';

export default function Coursera() {
    return (
        <main className="pt-28">
            {/* Hero Section */}
            <section className="relative min-h-[819px] flex items-center overflow-hidden bg-primary">
                <div className="absolute inset-0 opacity-40">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmhmC3x2OAnTSb1lbQK-MeBJGranwgt4NsIOUH7J2LY7X6pQycOVYYynwbYK7E5zUWKecieIZ-AcNX0AkyR6zPV59nwkFDqzlDiP5owsvc6k3G-aGobLvkaNmAwrSDkyv7eda5u8L4YuMUxacVYFxSbjXKgcxg12_uW1ex2skMjEsOvGA9Bfxnz5FV2pSCHdRS7zqNkBK12pHjQMo7dVa3BfmhPIG0uDkk2OR7W8E1LpTdZ7hwTkM1mOB1LXavcCwAtG65SXBgadIP" alt="Student learning" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold tracking-[0.2em] rounded-sm mb-6 uppercase shadow-sm">Future-Ready Education</span>
                        <h1 className="font-headline text-4xl md:text-6xl font-bold mb-8 leading-tight text-white">
                            Coursera Career Academy @ NDRK
                        </h1>
                        <p className="text-xl text-primary-fixed-dim font-light max-w-xl mb-10 leading-relaxed">
                            Coursera Career Academy is a new program that NDRK First Grade College is offering to help students develop the skills they need for in-demand careers.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-white rounded-full font-bold tracking-widest uppercase text-xs hover:from-secondary hover:to-secondary-container transition-all duration-300 shadow-lg border border-white/10">Start Learning</button>
                            <button className="px-8 py-4 bg-white/10 text-white rounded-full font-bold tracking-widest uppercase text-xs hover:bg-white/20 transition-all backdrop-blur-sm">Explore Pathways</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* World-Class Certifications (Marquee/Bento style) */}
            <section className="py-24 bg-surface-container-low">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">World-Class Certifications</h2>
                            <p className="text-slate-600 leading-relaxed">The academy offers a variety of Professional Certificates from leading companies, such as Google, IBM, and Meta. These certificates can help students gain the skills they need to get a job in a variety of fields, including data science, cybersecurity, and marketing.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {/* Brand Cards */}
                        <div className="bg-surface-container-lowest p-12 rounded-xl flex flex-col items-center justify-center group hover:scale-[1.02] transition-transform duration-300 shadow-[0px_20px_40px_rgba(25,28,29,0.06)] border border-outline-variant/10">
                            <img className="h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPiShxc65HefqSWBRUhhYHaikMrWWN5g36aUfLE4nzPOYH0aX7yLNZUWiSNdoexukTHWnlCrdWqo8EXAC91dgO5C4sL-LrfWKFgQAyfYNkJEBLDkz8ThrVjyB0nvbAOr7oF-dAhNuTmxbXDu-w_CTkShCwkHV-fi8LRbkVWsTg6XrLT8bTR-iyN-www5QMeOiq7TyQtyrUXwEMhV96Pw-EtnIjJBnXn9iRO5UAKSPCNb8omT2OIdtzh2thVurxWjgfNnCPJze7JgXE" alt="Google" />
                            <span className="mt-6 text-sm font-bold tracking-widest text-slate-500 uppercase">Google</span>
                        </div>
                        <div className="bg-surface-container-lowest p-12 rounded-xl flex flex-col items-center justify-center group hover:scale-[1.02] transition-transform duration-300 shadow-[0px_20px_40px_rgba(25,28,29,0.06)] border border-outline-variant/10">
                            <img className="h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTXVzvhQc8iRcT7JmlQg_2ig89YGkbV8dA2ZRHAPGMRNVmkuQ9NyT88hf0H1H1TyN_Jc2aap6jRVmDcHMD6oJmmREZJraJ5qc1zqeuoHDdhAKa5h8jkmk1VfXQ_WekKx60fzrd9jNIhS1YUqkItlYrpjQZuGPiZfhT5G8jmdTWAEw2Ue1GzDwNXaSo_58ydnio-SiF4G1sZdq9eBx-jLbRCvF7vnUtJAyJ7loYcI4LDTQDLd0Us2_D9AsNceRoMdSlBdD-Ck92mluP" alt="IBM" />
                            <span className="mt-6 text-sm font-bold tracking-widest text-slate-500 uppercase">IBM</span>
                        </div>
                        <div className="bg-surface-container-lowest p-12 rounded-xl flex flex-col items-center justify-center group hover:scale-[1.02] transition-transform duration-300 shadow-[0px_20px_40px_rgba(25,28,29,0.06)] border border-outline-variant/10 text-center">
                            <span className="material-symbols-outlined text-6xl text-slate-400 group-hover:text-primary transition-colors">cloud</span>
                            <span className="mt-6 text-sm font-bold tracking-widest text-slate-500 uppercase">Amazon Web Services</span>
                        </div>
                        <div className="bg-surface-container-lowest p-12 rounded-xl flex flex-col items-center justify-center group hover:scale-[1.02] transition-transform duration-300 shadow-[0px_20px_40px_rgba(25,28,29,0.06)] border border-outline-variant/10">
                            <img className="h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3LA88kL-E1DHSnouZg-KGOGzgEuWtZhBTPnFf4PUDY4LSdsJDmMPl0ga2yEJs2BO5gg2vOGCrMn504lccUonvx--Pw0VEADo0uqQ8vmVXxR3RORWuiQxmHRALGAYvWQHKzIMZzoPq4zNFDyC0bqSdZ11glNKszkiq8JEF20URBjNNbwQExDQH2MXeL1n1fa5mW476yYFvo66T5KI7o7gDTUKNtCzaaEdXIgTabqyHr1AU44dPJms_HYTrmG6mm6lKSnuqUxCP-87A" alt="Meta" />
                            <span className="mt-6 text-sm font-bold tracking-widest text-slate-500 uppercase">Meta</span>
                        </div>
                    </div>

                    <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
                        <h4 className="text-sm font-bold tracking-widest uppercase text-primary mb-4">Also In Partnership With:</h4>
                        <div className="flex flex-wrap gap-4 text-slate-600 font-medium">
                            <span className="bg-surface px-4 py-2 rounded-md">Duke University</span>
                            <span className="bg-surface px-4 py-2 rounded-md">University of Michigan</span>
                            <span className="bg-surface px-4 py-2 rounded-md">University of Pennsylvania</span>
                            <span className="bg-surface px-4 py-2 rounded-md">University of Toronto</span>
                            <span className="bg-surface px-4 py-2 rounded-md">Yale University</span>
                        </div>
                    </div>

                </div>
            </section>

            {/* Strategic Benefits */}
            <section className="py-32 overflow-hidden bg-surface">
                <div className="max-w-7xl mx-auto px-8 grid grid-cols-12 gap-12">
                    <div className="col-span-12 lg:col-span-5 relative mb-12 lg:mb-0">
                        <h3 className="text-5xl md:text-6xl font-headline font-bold text-primary tracking-tighter mb-8 bg-surface">Benefits of Coursera Career Academy</h3>
                        <div className="w-full aspect-[4/5] rounded-xl overflow-hidden shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
                            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZofgpJ5osCl7JfAKQ7lkKkVAyaglS_izabvAp8Q-V1NFVHDv3Q_JU08gTOaZHQ2njUZUlV0LpmWNDbv4ZnQGBhYzX61lLJzXRUXuH4sFigV1ojK5yY4w8aDR8obz2cc4KY3mW-ifyxdKq57r0hurMTNzA2kqhUbDroDLsU2J0Jl4LqQvTGruXrkQ3ifDRJXeADFgKdn2h0BQUT1yqWh_sKvcUAFbW7e8ry-rsYDxD-yD35rLoJ_u6hhtWxodKwWTv_OAWsF04m09n" alt="Professional student" />
                        </div>
                        <div className="absolute -bottom-8 -right-8 bg-tertiary-container p-8 rounded-xl max-w-xs text-on-tertiary-container shadow-xl">
                            <p className="font-headline italic text-xl">"Industry-led training that transforms theoretical knowledge into professional capability."</p>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-7 flex flex-col justify-center space-y-12 lg:pl-16">
                        <div className="group">
                            <div className="flex items-start gap-6">
                                <span className="material-symbols-outlined text-4xl text-secondary">workspace_premium</span>
                                <div>
                                    <h4 className="text-2xl font-bold text-primary mb-2">High-Quality Instruction</h4>
                                    <p className="text-slate-600 leading-relaxed">Access to high-quality instruction from industry leaders across various domains.</p>
                                </div>
                            </div>
                        </div>
                        <div className="group">
                            <div className="flex items-start gap-6">
                                <span className="material-symbols-outlined text-4xl text-secondary">schedule</span>
                                <div>
                                    <h4 className="text-2xl font-bold text-primary mb-2">Flexible Learning</h4>
                                    <p className="text-slate-600 leading-relaxed">Flexible learning options that allow students to learn at their own pace, complementing regular college studies.</p>
                                </div>
                            </div>
                        </div>
                        <div className="group">
                            <div className="flex items-start gap-6">
                                <span className="material-symbols-outlined text-4xl text-secondary">support_agent</span>
                                <div>
                                    <h4 className="text-2xl font-bold text-primary mb-2">Dedicated Support</h4>
                                    <p className="text-slate-600 leading-relaxed">Full support resources, such as online forums and tutoring, mapped directly to help students succeed.</p>
                                </div>
                            </div>
                        </div>
                        <div className="group">
                            <div className="flex items-start gap-6">
                                <span className="material-symbols-outlined text-4xl text-secondary">stars</span>
                                <div>
                                    <h4 className="text-2xl font-bold text-primary mb-2">Professional Certification</h4>
                                    <p className="text-slate-600 leading-relaxed">The opportunity to earn a Professional Certificate that can help students get a job in a high-demand field.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Enroll */}
            <section className="py-24 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 italic">How to Enroll in Coursera Career Academy?</h2>
                        <p className="max-w-2xl mx-auto text-primary-fixed-dim text-lg">
                            Coursera Career Academy is open to all NDRKFGC students who are interested in developing the skills they need for in-demand careers. There are no prerequisites for enrollment.
                        </p>
                    </div>
                    {/* Visual Pathway using grid representation */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative mt-16">
                        {/* Step 1 */}
                        <div className="relative p-8 bg-primary-container rounded-xl group hover:bg-secondary transition-colors duration-500 shadow-lg border border-white/5">
                            <span className="text-5xl font-headline font-extrabold text-white/10 absolute top-4 right-4">01</span>
                            <h5 className="text-xl font-bold mb-4 mt-8">Register</h5>
                            <p className="text-primary-fixed-dim text-sm leading-relaxed">Submit your student ID through the Coursera portal to activate your NDRK sponsored account.</p>
                        </div>
                        {/* Step 2 */}
                        <div className="relative p-8 bg-primary-container rounded-xl group hover:bg-secondary transition-colors duration-500 shadow-lg border border-white/5">
                            <span className="text-5xl font-headline font-extrabold text-white/10 absolute top-4 right-4">02</span>
                            <h5 className="text-xl font-bold mb-4 mt-8">Choose Pathway</h5>
                            <p className="text-primary-fixed-dim text-sm leading-relaxed">Select from Data Analytics, Business, IT & Cloud based on your goals.</p>
                        </div>
                        {/* Step 3 */}
                        <div className="relative p-8 bg-primary-container rounded-xl group hover:bg-secondary transition-colors duration-500 shadow-lg border border-white/5">
                            <span className="text-5xl font-headline font-extrabold text-white/10 absolute top-4 right-4">03</span>
                            <h5 className="text-xl font-bold mb-4 mt-8">Complete Coursework</h5>
                            <p className="text-primary-fixed-dim text-sm leading-relaxed">Engage with video lectures, hands-on labs, and peer-reviewed assignments on the platform.</p>
                        </div>
                        {/* Step 4 */}
                        <div className="relative p-8 bg-primary-container rounded-xl group hover:bg-secondary transition-colors duration-500 shadow-lg border border-white/5">
                            <span className="text-5xl font-headline font-extrabold text-white/10 absolute top-4 right-4">04</span>
                            <h5 className="text-xl font-bold mb-4 mt-8">Earn Certification</h5>
                            <p className="text-primary-fixed-dim text-sm leading-relaxed">Receive your professional certificate issued by the industry leader and Coursera.</p>
                        </div>
                    </div>

                    <div className="mt-20 text-center">
                        <button className="px-12 py-5 bg-tertiary-fixed text-black rounded-full font-bold tracking-[0.2em] uppercase text-sm hover:bg-white transition-colors shadow-2xl">Begin Registration Now</button>
                    </div>
                </div>
            </section>

            {/* CTA / Summary */}
            <section className="py-32 bg-surface">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="bg-surface-container-highest rounded-3xl md:rounded-full overflow-hidden flex flex-col md:flex-row items-center shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
                        <div className="md:w-1/2 p-16 text-center md:text-left">
                            <h2 className="text-4xl font-headline font-bold text-primary mb-6 italic">Empowering student success.</h2>
                            <p className="text-slate-600 mb-10 text-lg">NDRK First Grade College is committed to helping students succeed in their careers. With Coursera Career Academy, students can gain the skills they need to get a job in a high-demand field and start their career on the right foot.</p>
                            <div className="flex justify-center md:justify-start gap-4">
                                <a className="text-secondary font-bold flex items-center gap-2 group hover:text-primary transition-colors" href="#">
                                    Learn More
                                    <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                        <div className="md:w-1/2 h-full min-h-[400px] w-full">
                            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA05slrk6DUTojuqZDUIdnOXRg1HtZYXgtqOFo9xmNSEFCPN2L6xW_OI9tNuvyf85jtYy1HSAQoJaiTWRzFhUkp4ltLbRRKOPWKe4geo9eRHx6qFfy0Foeit3HE8F-qDaDcO1zk01OTaJ8_mFAVi2SuEt2e7_NIb9itjMXacTGbQwYLu5GUGFvopRwAMgeHJrll9BnI5DIOT7wTEKtixuzRZ2BXBjVVPFGO9hsHBnydDJ3gGKjlDEIA85wiPoNDDkF12B54nmFR9o4" alt="Graduation" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

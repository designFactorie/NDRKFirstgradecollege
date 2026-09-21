import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function NotFound() {
    return <main id="main-content" tabIndex={-1} className="pt-28">
        <section className="min-h-[65vh] flex flex-col items-center justify-center px-6 py-20 text-center">
            <p className="text-secondary-fixed-dim font-bold mb-4">404 · PAGE NOT FOUND</p>
            <h1 className="font-headline text-4xl md:text-6xl mb-6">Let’s get you back on track.</h1>
            <p className="text-slate-300 mb-8">This page could not be found. Explore NDRK from the homepage.</p>
            <Link className="bg-white text-primary px-8 py-4 rounded-full font-bold" to="/">Back to Home</Link>
        </section><Footer />
    </main>;
}

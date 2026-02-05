'use client';

import Link from 'next/link';

export default function Contact() {
    return (
        <main className="bg-black text-white min-h-screen selection:bg-white selection:text-black font-sans">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference">
                <Link href="/" className="text-xl font-bold tracking-tighter uppercase">muren.ai</Link>
                <div className="flex gap-4 text-xs font-mono uppercase tracking-widest">
                    <Link href="/">Back to Home</Link>
                </div>
            </nav>

            <div className="container mx-auto px-6 py-32 max-w-3xl min-h-[80vh] flex flex-col justify-center">
                <h1 className="text-4xl sm:text-6xl font-light mb-12 tracking-tighter uppercase">Contact Us</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-sm border-b border-neutral-800 pb-2">Get in Touch</h2>
                        <p className="text-neutral-400 mb-8 leading-relaxed">
                            We are always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="flex flex-col gap-6">
                            <div>
                                <span className="block text-xs font-mono uppercase tracking-widest text-neutral-600 mb-1">Email</span>
                                <a href="mailto:info@muren.ai" className="text-lg hover:underline decoration-1 underline-offset-4">info@muren.ai</a>
                            </div>
                            <div>
                                <span className="block text-xs font-mono uppercase tracking-widest text-neutral-600 mb-1">Phone</span>
                                <a href="tel:+923222805717" className="text-lg hover:underline decoration-1 underline-offset-4">+92 322 2805717</a>
                            </div>
                            <div>
                                <span className="block text-xs font-mono uppercase tracking-widest text-neutral-600 mb-1">Address</span>
                                <p className="text-lg text-neutral-300">
                                    National Science & Technology Park (NSTP)<br />
                                    NUST Islamabad, Pakistan
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-sm border-b border-neutral-800 pb-2">Business Hours</h2>
                        <ul className="space-y-4 text-neutral-400">
                            <li className="flex justify-between border-b border-neutral-900 pb-2">
                                <span>Monday - Friday</span>
                                <span className="text-white">9:00 AM - 6:00 PM</span>
                            </li>
                            <li className="flex justify-between border-b border-neutral-900 pb-2">
                                <span>Saturday</span>
                                <span className="text-white">10:00 AM - 4:00 PM</span>
                            </li>
                            <li className="flex justify-between border-b border-neutral-900 pb-2">
                                <span>Sunday</span>
                                <span className="text-neutral-600">Closed</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Simple Footer */}
            <footer className="w-full py-12 border-t border-neutral-900 text-center text-xs text-neutral-600 font-mono uppercase tracking-widest">
                &copy; {new Date().getFullYear()} muren.ai
            </footer>
        </main>
    );
}

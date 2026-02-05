'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <main className="bg-black text-white min-h-screen selection:bg-white selection:text-black font-sans">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference">
                <Link href="/" className="text-xl font-bold tracking-tighter uppercase">muren.ai</Link>
                <div className="flex gap-4 text-xs font-mono uppercase tracking-widest">
                    <Link href="/">Back to Home</Link>
                </div>
            </nav>

            <div className="container mx-auto px-6 py-32 max-w-3xl">
                <h1 className="text-4xl sm:text-6xl font-light mb-12 tracking-tighter uppercase">Privacy Policy</h1>

                <div className="prose prose-invert prose-lg text-neutral-300">
                    <p className="text-sm font-mono tracking-widest text-neutral-500 mb-8 uppercase">Last Updated: 20 Dec 2025</p>

                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-sm">1. Introduction</h2>
                        <p>
                            MUREN AI & Deep Tech (“MUREN”, “we”, “our”, or “us”) respects your privacy and is committed to protecting personal data. This Privacy Policy explains how we collect, use, and safeguard information when you use our website, products, or services.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-sm">2. Information We Collect</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong className="text-white">Personal Information:</strong> Name, email address, phone number, organization details, and information submitted via contact forms.</li>
                            <li><strong className="text-white">Technical Information:</strong> IP address, browser type, device information, pages visited, and usage analytics.</li>
                            <li><strong className="text-white">Product Data:</strong> User interactions, system logs, and performance metrics within our AI platforms.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-sm">3. How We Use Your Information</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>To operate and improve our AI systems and platforms</li>
                            <li>To respond to inquiries and provide support</li>
                            <li>To conduct research, analytics, and optimization</li>
                            <li>To ensure system security and compliance</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-sm">4. AI & Data Processing</h2>
                        <p>
                            Some MUREN products use artificial intelligence and machine learning. User data is not used to train AI models without explicit consent. We apply anonymization and data minimization wherever possible.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-sm">5. Data Sharing</h2>
                        <p>
                            We do not sell personal data. Information may be shared only with trusted service providers or when required by law.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-sm">6. Data Security</h2>
                        <p>
                            We use appropriate technical and organizational measures to protect data, including secure infrastructure, access controls, and encrypted communication.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-sm">7. Cookies</h2>
                        <p>
                            Our website may use cookies to enhance functionality and analyze usage. You can control cookies through browser settings.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-sm">8. Your Rights</h2>
                        <p>
                            You may request access, correction, or deletion of your personal data by contacting us.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-sm">9. Children’s Privacy</h2>
                        <p>
                            MUREN does not knowingly collect data from children under the age of 13.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-sm">10. Policy Updates</h2>
                        <p>
                            This Privacy Policy may be updated periodically. Changes will be posted on this page.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-sm">11. Contact Information</h2>
                        <p className="mb-2"><strong className="text-white">MUREN AI & Deep Tech</strong></p>
                        <p className="mb-1">National Science & Technology Park (NSTP), NUST Islamabad</p>
                        <p>Email: <a href="mailto:info@muren.ai" className="underline hover:text-white">info@muren.ai</a></p>
                    </section>
                </div>
            </div>

            {/* Simple Footer */}
            <footer className="w-full py-12 border-t border-neutral-900 text-center text-xs text-neutral-600 font-mono uppercase tracking-widest">
                &copy; {new Date().getFullYear()} muren.ai
            </footer>
        </main>
    );
}

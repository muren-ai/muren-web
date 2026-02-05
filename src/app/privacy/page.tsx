'use client';

import { Header } from '@/components/Header';

export default function PrivacyPolicy() {
    return (
        <main className="bg-black text-white min-h-screen selection:bg-white selection:text-black font-sans">
            <Header />

            <div className="container mx-auto px-6 py-32 max-w-4xl">
                <div className="mb-24">
                    <span className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">Legal</span>
                    <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter mb-6">Privacy Policy</h1>
                    <p className="text-neutral-400 text-lg">Last Updated: January 18, 2026</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
                    <div className="hidden md:block sticky top-32 h-fit">
                        <ul className="text-xs font-mono uppercase tracking-widest text-neutral-500 space-y-4">
                            <li><a href="#introduction" className="hover:text-white transition-colors">01. Introduction</a></li>
                            <li><a href="#collection" className="hover:text-white transition-colors">02. Collection</a></li>
                            <li><a href="#usage" className="hover:text-white transition-colors">03. Usage</a></li>
                            <li><a href="#security" className="hover:text-white transition-colors">04. Security</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">05. Contact</a></li>
                        </ul>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-neutral-300 prose-li:text-neutral-300">
                        <section id="introduction" className="mb-20 scroll-mt-32">
                            <h2 className="text-2xl mb-6">Introduction</h2>
                            <p>
                                At Muren AI ("we", "us", or "our"), we respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website <strong>muren.ai</strong> or use our services, including <strong>Escribo</strong> and <strong>CareerKonnect</strong>.
                            </p>
                            <p>
                                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                            </p>
                        </section>

                        <section id="collection" className="mb-20 scroll-mt-32">
                            <h2 className="text-2xl mb-6">Information We Collect</h2>
                            <p>
                                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                            </p>

                            <h3 className="text-xl mt-8 mb-4 text-white">Personal Data</h3>
                            <p>
                                Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or our mobile applications.
                            </p>

                            <h3 className="text-xl mt-8 mb-4 text-white">Derivative Data</h3>
                            <p>
                                Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
                            </p>
                        </section>

                        <section id="usage" className="mb-20 scroll-mt-32">
                            <h2 className="text-2xl mb-6">How We Use Your Information</h2>
                            <p>
                                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li>Create and manage your account.</li>
                                <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
                                <li>Email you regarding your account or order.</li>
                                <li>Enable user-to-user communications.</li>
                                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                                <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
                                <li>Increase the efficiency and operation of the Site.</li>
                            </ul>
                        </section>

                        <section id="security" className="mb-20 scroll-mt-32">
                            <h2 className="text-2xl mb-6">Data Security</h2>
                            <p>
                                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                            </p>
                        </section>

                        <section id="contact" className="mb-20 scroll-mt-32">
                            <h2 className="text-2xl mb-6">Contact Us</h2>
                            <p>
                                If you have questions or comments about this Privacy Policy, please contact us at:
                            </p>
                            <div className="mt-8 p-8 border border-neutral-800 bg-neutral-900/50">
                                <p className="mb-2 font-bold text-white">Muren AI</p>
                                <p className="mb-4 text-neutral-400">National Science & Technology Park (NSTP)<br />NUST Islamabad, Pakistan</p>
                                <p><a href="mailto:info@muren.ai" className="text-white border-b border-white pb-0.5 hover:text-neutral-300 hover:border-neutral-300 transition-colors">info@muren.ai</a></p>
                            </div>
                        </section>
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

'use client';

import { Header } from '@/components/Header';
import { useEffect, useState } from 'react';

export default function PrivacyPolicy() {
    const [activeSection, setActiveSection] = useState('overview');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-20% 0px -50% 0px',
                threshold: 0.1
            }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const navItems = [
        { id: 'overview', label: '01. Overview' },
        { id: 'sources', label: '02. Sources' },
        { id: 'categories', label: '03. Categories' },
        { id: 'cookies', label: '04. Cookies' },
        { id: 'usage', label: '05. Usage' },
        { id: 'ai', label: '06. AI & ML' },
        { id: 'sharing', label: '07. Sharing' },
        { id: 'security', label: '08. Security' },
        { id: 'rights', label: '09. Rights' },
        { id: 'contact', label: '10. Contact' },
    ];

    return (
        <main className="bg-black text-white min-h-screen selection:bg-white selection:text-black font-sans">
            <Header />

            <div className="container mx-auto px-6 py-32 max-w-6xl">
                <div className="mb-24 text-center sm:text-left">
                    <span className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">Legal</span>
                    <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter mb-6">Privacy Policy</h1>
                    <p className="text-neutral-400 text-lg">Last Updated: 5 Feb 2026</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 relative">
                    {/* Sidebar Nav */}
                    <div className="hidden md:flex flex-col justify-center sticky top-24 h-[calc(100vh-12rem)]">
                        <ul className="text-xs font-mono uppercase tracking-widest text-neutral-500 space-y-4 border-l border-neutral-900 pl-6">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        className={`transition-all duration-300 block ${activeSection === item.id
                                                ? 'text-white translate-x-1 font-bold shadow-[0_0_10px_rgba(255,255,255,0.5)]'
                                                : 'hover:text-neutral-300'
                                            }`}
                                        style={{
                                            textShadow: activeSection === item.id ? '0 0 10px rgba(255,255,255,0.5)' : 'none'
                                        }}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-neutral-300 prose-li:text-neutral-300">

                        <section id="overview" className="mb-24 scroll-mt-32">
                            <h2 className="text-2xl mb-6 text-white pb-4 border-b border-neutral-800">Overview</h2>
                            <p>
                                At MUREN (“MUREN,” “we,” “our,” or “us”), we take your privacy seriously. This Privacy Policy explains how we collect, use, retain, disclose, and protect Personal Data when you use or access our services.
                            </p>
                            <p>
                                Your use of MUREN’s website, platforms, products, or services is subject at all times to our Terms & Conditions. Capitalized terms not defined in this Privacy Policy have the meanings set forth in those Terms.
                            </p>

                            <h3 className="text-xl mt-8 mb-4 text-white">What This Privacy Policy Covers</h3>
                            <p>This Privacy Policy describes how we treat Personal Data collected through:</p>
                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li>Our websites and web-based platforms operated by MUREN (“Websites”)</li>
                                <li>Our mobile, desktop, or cloud-based products and tools Under Muren (“Applications”)</li>
                                <li>Our official social media pages (“Social Media Pages”)</li>
                                <li>Emails, newsletters, and other communications that link to this Privacy Policy</li>
                                <li>Offline business interactions, including enterprise engagements</li>
                            </ul>
                            <p className="mt-4">
                                collectively, these are referred to as the “Services.”
                            </p>
                            <p>
                                “Personal Data” means any information that identifies or relates to an identifiable individual, directly or indirectly, as defined under applicable data protection laws.
                            </p>
                            <p>This Privacy Policy does not apply to:</p>
                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li>Third-party services we do not own or control</li>
                                <li>Data processed on behalf of enterprise or institutional clients where MUREN acts solely as a data processor, which is governed by applicable customer agreements</li>
                            </ul>

                            <h3 className="text-xl mt-8 mb-4 text-white">Payment Processing</h3>
                            <p>
                                Our products may use third-party payment processors to handle transactions. Payment-related information is collected directly by those providers and is governed by their privacy policies, not this Privacy Policy. MUREN does not store full payment card details.
                            </p>
                        </section>

                        <section id="sources" className="mb-24 scroll-mt-32">
                            <h2 className="text-2xl mb-6 text-white pb-4 border-b border-neutral-800">Sources of Personal Data</h2>
                            <p>We collect Personal Data from the following sources:</p>
                            <div className="space-y-6 mt-6">
                                <div>
                                    <strong className="text-white">1. You</strong>
                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                        <li>When you create an account, contact us, subscribe to updates, or use our Services</li>
                                        <li>When data is automatically collected during your interaction with our Services</li>
                                    </ul>
                                </div>
                                <div>
                                    <strong className="text-white">2. Affiliates and Partners</strong>
                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                        <li>Billing partners, app stores, or enterprise platforms that provide transaction or account data</li>
                                    </ul>
                                </div>
                                <div>
                                    <strong className="text-white">3. External Parties</strong>
                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                        <li>Service providers supporting analytics, infrastructure, customer support, or security</li>
                                        <li>Social media platforms when you connect or interact with us through third-party accounts</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="mt-6 text-sm text-neutral-500">
                                You are not required to provide Personal Data, but failure to do so may limit our ability to provide certain Services.
                            </p>
                        </section>

                        <section id="categories" className="mb-24 scroll-mt-32">
                            <h2 className="text-2xl mb-6 text-white pb-4 border-b border-neutral-800">Categories of Personal Data We Collect</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse text-sm">
                                    <thead>
                                        <tr className="border-b border-neutral-700">
                                            <th className="py-3 px-2 text-white uppercase font-mono tracking-wider">Category</th>
                                            <th className="py-3 px-2 text-white uppercase font-mono tracking-wider">Description</th>
                                            <th className="py-3 px-2 text-white uppercase font-mono tracking-wider">Collected</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-neutral-800">
                                        <tr>
                                            <td className="py-3 px-2 font-bold text-white">Personal Identifiers</td>
                                            <td className="py-3 px-2">Name, email address, IP address, unique user ID, phone number (optional)</td>
                                            <td className="py-3 px-2 text-green-400">Yes</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-2 font-bold text-white">Customer Records</td>
                                            <td className="py-3 px-2">Contact details provided voluntarily</td>
                                            <td className="py-3 px-2 text-green-400">Yes</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-2 font-bold text-white">Commercial Information</td>
                                            <td className="py-3 px-2">Subscription or transaction data via billing partners</td>
                                            <td className="py-3 px-2 text-green-400">Yes</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-2 font-bold text-white">Internet Activity</td>
                                            <td className="py-3 px-2">Usage logs, interaction data, system performance metrics</td>
                                            <td className="py-3 px-2 text-green-400">Yes</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-2 font-bold text-white">Sensitive Personal Data</td>
                                            <td className="py-3 px-2">Health, biometrics, government IDs, precise location</td>
                                            <td className="py-3 px-2 text-red-400">No</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-2 font-bold text-white">Biometric Data</td>
                                            <td className="py-3 px-2">Facial, voice, or genetic data</td>
                                            <td className="py-3 px-2 text-red-400">No</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-2 font-bold text-white">Children’s Data</td>
                                            <td className="py-3 px-2">Data of users under 16</td>
                                            <td className="py-3 px-2 text-neutral-500">Not knowingly</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="cookies" className="mb-24 scroll-mt-32">
                            <h2 className="text-2xl mb-6 text-white pb-4 border-b border-neutral-800">Information Collected Automatically</h2>
                            <h3 className="text-xl mb-4 text-white">Cookies & Similar Technologies</h3>
                            <p>We use cookies, web beacons, pixel tags, and similar technologies to:</p>
                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li>Ensure platform functionality</li>
                                <li>Improve performance and stability</li>
                                <li>Analyze usage trends</li>
                                <li>Enhance security</li>
                            </ul>

                            <h3 className="text-xl mt-8 mb-4 text-white">Types of Cookies We Use</h3>
                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li><strong className="text-white">Essential Cookies:</strong> Required for core functionality</li>
                                <li><strong className="text-white">Functional Cookies:</strong> Remember preferences and settings</li>
                            </ul>
                            <p className="mt-4">
                                You may control cookies through your browser settings. Disabling cookies may affect certain features.
                            </p>
                        </section>

                        <section id="usage" className="mb-24 scroll-mt-32">
                            <h2 className="text-2xl mb-6 text-white pb-4 border-b border-neutral-800">How We Use Your Personal Data</h2>
                            <p>We use Personal Data for the following purposes:</p>
                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li>To operate, maintain, and improve our Services</li>
                                <li>To create and manage user accounts</li>
                                <li>To provide customer and technical support</li>
                                <li>To communicate updates, notices, and service-related messages</li>
                                <li>To analyze usage and improve AI system performance</li>
                                <li>To conduct research, testing, and product development</li>
                                <li>To ensure security, prevent fraud, and enforce policies</li>
                                <li>To comply with legal and regulatory obligations</li>
                            </ul>
                            <p className="mt-4">
                                Where possible, we aggregate or anonymize data so it no longer identifies individuals.
                            </p>
                        </section>

                        <section id="ai" className="mb-24 scroll-mt-32">
                            <h2 className="text-2xl mb-6 text-white pb-4 border-b border-neutral-800">AI & Machine Learning</h2>
                            <p>Some MUREN Services use artificial intelligence and machine learning technologies.</p>
                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li>User data is not used to train AI models without explicit consent</li>
                                <li>We apply data minimization, anonymization, and access controls</li>
                                <li>AI outputs are generated algorithmically and should be reviewed before use</li>
                            </ul>
                        </section>

                        <section id="sharing" className="mb-24 scroll-mt-32">
                            <h2 className="text-2xl mb-6 text-white pb-4 border-b border-neutral-800">How We Share Personal Data</h2>
                            <p className="text-white font-bold mb-4">We do not sell Personal Data.</p>
                            <p>We may share Personal Data with:</p>
                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li>Service providers (hosting, analytics, security, communications)</li>
                                <li>Affiliates for internal operations</li>
                                <li>Legal authorities when required by law or legal process</li>
                                <li>Business transferees in the event of a merger, acquisition, or restructuring</li>
                            </ul>
                            <p className="mt-4">Users may also voluntarily disclose data through public or collaborative features.</p>
                        </section>

                        <section id="security" className="mb-24 scroll-mt-32">
                            <h2 className="text-2xl mb-6 text-white pb-4 border-b border-neutral-800">Data Security & Retention</h2>
                            <p>We implement appropriate physical, technical, and organizational safeguards, including:</p>
                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li>Encrypted communications</li>
                                <li>Access controls</li>
                                <li>Secure infrastructure</li>
                            </ul>
                            <p className="mt-6">Personal Data is retained only as long as necessary to:</p>
                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li>Provide Services</li>
                                <li>Meet legal or contractual obligations</li>
                                <li>Resolve disputes or enforce agreements</li>
                            </ul>
                        </section>

                        <section id="rights" className="mb-24 scroll-mt-32">
                            <h2 className="text-2xl mb-6 text-white pb-4 border-b border-neutral-800">Your Rights & Choices</h2>
                            <p>Depending on your jurisdiction, you may have the right to:</p>
                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li>Access, correct, or delete Personal Data</li>
                                <li>Object to or restrict processing</li>
                                <li>Request data portability</li>
                                <li>Withdraw consent where applicable</li>
                            </ul>
                            <p className="mt-4">Requests can be made by contacting us at the email below. Identity verification may be required.</p>

                            <h3 className="text-xl mt-8 mb-4 text-white">Children’s Privacy</h3>
                            <p>MUREN does not knowingly collect Personal Data from children under 16 years of age. If we learn such data has been collected, we will delete it promptly.</p>

                            <h3 className="text-xl mt-8 mb-4 text-white">Third-Party Services</h3>
                            <p>This Privacy Policy does not apply to third-party platforms, tools, or services linked from our Services. Their data practices are governed by their own policies.</p>

                            <h3 className="text-xl mt-8 mb-4 text-white">International Data Transfers</h3>
                            <p>Your Personal Data may be processed in countries where we or our service providers operate. We implement appropriate safeguards for cross-border transfers where required by law.</p>

                            <h3 className="text-xl mt-8 mb-4 text-white">Changes to This Privacy Policy</h3>
                            <p>We may update this Privacy Policy from time to time. The “Last Updated” date reflects the most recent revision. Continued use of the Services constitutes acceptance of the updated policy.</p>
                        </section>

                        <section id="contact" className="mb-24 scroll-mt-32">
                            <h2 className="text-2xl mb-6 text-white pb-4 border-b border-neutral-800">Contact Information</h2>
                            <p>
                                MUREN PVT LD<br />
                                National Science & Technology Park (NSTP), NUST Islamabad
                            </p>
                            <div className="mt-8 p-8 border border-neutral-800 bg-neutral-900/50">
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

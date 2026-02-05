'use client';

import Link from 'next/link';
import { Header } from '@/components/Header';

export default function Terms() {
    return (
        <main className="bg-black text-white min-h-screen selection:bg-white selection:text-black font-sans">
            {/* Navigation */}

            <Header />

            <div className="container mx-auto px-6 py-32 max-w-3xl">
                <h1 className="text-4xl sm:text-6xl font-light mb-12 tracking-tighter uppercase">Terms of Service</h1>

                <div className="prose prose-invert prose-lg text-neutral-300">
                    <p className="text-sm font-mono tracking-widest text-neutral-500 mb-8 uppercase">Last Updated: 20 Dec 2025</p>

                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-sm">1. Terms</h2>
                        <p>
                            By accessing the website at <a href="https://muren.ai" className="underline">muren.ai</a>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-sm">2. Use License</h2>
                        <p>
                            Permission is granted to temporarily download one copy of the materials (information or software) on Muren's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                        </p>
                        <ul className="list-disc pl-5 mt-4 space-y-2">
                            <li>modify or copy the materials;</li>
                            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                            <li>attempt to decompile or reverse engineer any software contained on Muren's website;</li>
                            <li>remove any copyright or other proprietary notations from the materials; or</li>
                            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                        </ul>
                        <p className="mt-4">
                            This license shall automatically terminate if you violate any of these restrictions and may be terminated by Muren at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-sm">3. Disclaimer</h2>
                        <p>
                            The materials on Muren's website are provided on an 'as is' basis. Muren makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-sm">4. Limitations</h2>
                        <p>
                            In no event shall Muren or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Muren's website, even if Muren or a Muren authorized representative has been notified orally or in writing of the possibility of such damage.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-sm">5. Accuracy of Materials</h2>
                        <p>
                            The materials appearing on Muren's website could include technical, typographical, or photographic errors. Muren does not warrant that any of the materials on its website are accurate, complete or current. Muren may make changes to the materials contained on its website at any time without notice. However Muren does not make any commitment to update the materials.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-sm">6. Links</h2>
                        <p>
                            Muren has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Muren of the site. Use of any such linked website is at the user's own risk.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-sm">7. Modifications</h2>
                        <p>
                            Muren may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-sm">8. Governing Law</h2>
                        <p>
                            These terms and conditions are governed by and construed in accordance with the laws of Pakistan and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-sm">9. Contact Us</h2>
                        <p className="mb-2">If you have any questions about these Terms, please contact us at:</p>
                        <p className="mb-1"><a href="mailto:info@muren.ai" className="underline hover:text-white">info@muren.ai</a></p>
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

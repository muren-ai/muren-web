'use client';

import Link from 'next/link';

export function Header() {
    return (
        <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference text-white">
            <Link href="/" className="text-xl font-bold tracking-tighter uppercase">
                muren.ai
            </Link>

            <div className="flex gap-6 text-xs font-mono uppercase tracking-widest">
                <Link href="/" className="hover:text-neutral-300 transition-colors">Home</Link>
                <Link href="/contact" className="hover:text-neutral-300 transition-colors">Contact</Link>
                <Link href="/terms" className="hover:text-neutral-300 transition-colors">Terms</Link>
                <Link href="/privacy" className="hover:text-neutral-300 transition-colors">Privacy</Link>
            </div>
        </nav>
    );
}

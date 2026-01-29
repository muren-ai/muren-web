'use client';

import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ProductCardProps {
    title: string;
    description: string;
    features?: string[];
    link?: string;
    linkText?: string;
    status?: string;
    isInverted?: boolean;
}

export function ProductCard({
    title,
    description,
    features,
    link,
    linkText = "Learn More",
    status,
    isInverted = false,
}: ProductCardProps) {
    return (
        <div
            className={`w-full group relative overflow-hidden border border-neutral-800 ${isInverted ? 'bg-white text-black' : 'bg-black text-white'
                } p-8 sm:p-12 transition-colors duration-500`}
        >
            <div className="flex flex-col gap-8 relative z-10">
                <div className="flex justify-between items-start">
                    <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter uppercase">
                        {title}
                    </h2>
                    {status && (
                        <span className={`text-xs font-mono uppercase tracking-widest border ${isInverted ? 'border-black text-black' : 'border-white text-white'
                            } px-3 py-1`}>
                            {status}
                        </span>
                    )}
                </div>

                <p className={`text-xl sm:text-2xl font-light leading-relaxed max-w-2xl ${isInverted ? 'text-neutral-800' : 'text-neutral-300'
                    }`}>
                    {description}
                </p>

                {features && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 font-mono text-sm uppercase tracking-wider opacity-80">
                        {features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-current rounded-full" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}

                {link && (
                    <div className="mt-8">
                        <Link
                            href={link}
                            className={`inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:underline decoration-1 underline-offset-8 transition-all ${isInverted ? 'text-black' : 'text-white'
                                }`}
                        >
                            {linkText}
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                )}
            </div>

            {/* Abstract Background Decoration */}
            <div className={`absolute -bottom-24 -right-24 w-64 h-64 rounded-full blur-[100px] opacity-20 ${isInverted ? 'bg-black' : 'bg-white'
                }`} />
        </div>
    );
}

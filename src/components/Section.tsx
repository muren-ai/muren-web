'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export function Section({ children, className = '', id }: SectionProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`min-h-screen flex flex-col justify-center px-6 py-24 sm:px-12 md:px-24 ${className}`}
        >
            {children}
        </motion.section>
    );
}

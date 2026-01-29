'use client';

import Image from 'next/image';

import { Section } from '@/components/Section';
import { ProductCard } from '@/components/ProductCard';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <main className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
      {/* Navigation / Header */}
      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference">
        <span className="text-xl font-bold tracking-tighter uppercase">muren.ai</span>
        <div className="flex gap-4 text-xs font-mono uppercase tracking-widest">
          <span>EST. 2024</span>
          <span>///</span>
          <span>FUTURE SYSTEMS</span>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.div style={{ opacity, scale }} className="h-screen flex flex-col items-center justify-center relative px-4">
        <h1 className="text-[12vw] sm:text-[15vw] leading-none font-bold tracking-tighter text-center select-none mix-blend-difference">
          MUREN
        </h1>
        <div className="absolute bottom-12 left-0 w-full flex justify-between px-6 sm:px-12 uppercase font-mono text-xs sm:text-sm tracking-widest opacity-70">
          <span className="max-w-[150px] sm:max-w-xs text-left">
            We build digital ecosystems that bridge the gap between physical reality and virtual utility.
          </span>
          <span className="text-right">
            Scroll for Products &darr;
          </span>
        </div>
      </motion.div>

      {/* Products Section */}
      <div className="flex flex-col gap-0 bg-white">

        {/* Escribo */}
        <Section className="bg-white text-black min-h-screen !py-0 !px-0 bg-grid-black/[0.02]">
          <div className="h-full flex flex-col justify-center px-6 py-24 sm:px-12 md:px-24">
            <ProductCard
              title="Escribo"
              description="A mobile application for interactive storytelling through QR-coded apparel. Connect physical clothing with digital stories."
              features={[
                "Interactive QR Apparel",
                "Digital Storytelling",
                "Wearable Tech",
                "iOS & Android"
              ]}
              link="https://www.escribo.ai/"
              linkText="Visit Escribo.ai"
              status="Live"
              isInverted={true}
            />
          </div>
        </Section>

        {/* CareerKonnect */}
        <Section className="bg-black text-white min-h-screen !py-0 !px-0">
          <div className="h-full flex flex-col justify-center px-6 py-24 sm:px-12 md:px-24">
            <ProductCard
              title="CareerKonnect"
              description="An educational ecosystem for students. Fusing massive open online courses with robust assessments and automated resume building."
              features={[
                "Student Ecosystem",
                "Course Assessments",
                "Resume Builder",
                "Skill Verification"
              ]}
              status="In Development"
              isInverted={false}
            />
          </div>
        </Section>

        {/* Leadership Section */}
        <Section className="bg-neutral-900 text-white min-h-screen !py-0 !px-0 border-t border-neutral-800">
          <div className="h-full flex flex-col justify-center px-6 py-24 sm:px-12 md:px-24">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter uppercase mb-16">
              Leadership
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="group">
                <div className="relative w-48 aspect-[3/4] mb-6 overflow-hidden bg-neutral-800 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image
                    src="/huzaifa.jpeg"
                    alt="Huzaifa Sarfaraz"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">CEO</span>
                <h3 className="text-3xl sm:text-4xl font-light">Huzaifa Sarfaraz</h3>
              </div>
              <div className="group">
                <div className="relative w-48 aspect-[3/4] mb-6 overflow-hidden bg-neutral-800 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image
                    src="/zayyan.jpeg"
                    alt="Zayyan Ahmed"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">CTO</span>
                <h3 className="text-3xl sm:text-4xl font-light">Zayyan Ahmed</h3>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-24 px-6 border-t border-neutral-900 border-white/20">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-12 sm:flex-row justify-between items-start">
          <div className="flex flex-col gap-4">
            <span className="text-6xl font-bold tracking-tighter">muren.ai</span>
            <p className="text-neutral-500 max-w-sm">
              Designing the interface for the next generation of human-computer interaction.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 font-mono text-sm uppercase tracking-widest">
            <div className="flex flex-col gap-4">
              <span className="text-neutral-500">Products</span>
              <a href="https://escribo.ai" className="hover:text-neutral-400 text-white">Escribo</a>
              <span className="text-neutral-600">CareerKonnect</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-neutral-500">Social</span>
              <a href="https://github.com/rainsfal1" className="hover:text-neutral-400 text-white">GitHub</a>
              <a href="#" className="hover:text-neutral-400 text-white">Twitter</a>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto mt-24 pt-8 border-t border-neutral-900 flex justify-between text-xs text-neutral-600 font-mono uppercase">
          <span>&copy; {new Date().getFullYear()} muren.ai</span>
          <span>All Rights Reserved</span>
        </div>
      </footer>
    </main>
  );
}

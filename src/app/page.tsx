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
        <h1 className="text-[12vw] sm:text-[15vw] leading-none font-bold tracking-tighter text-center select-none mix-blend-difference z-10">
          MUREN
        </h1>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl mx-auto flex items-center justify-center opacity-20 pointer-events-none">
          {/* Abstract background element if needed, keeping it clean for now */}
        </div>
        <div className="absolute bottom-12 left-0 w-full flex justify-between px-6 sm:px-12 uppercase font-mono text-xs sm:text-sm tracking-widest opacity-70">
          <span className="max-w-[200px] sm:max-w-sm text-left">
            AI & Deep Tech Research Group. We design, validate, and deploy production-ready AI systems.
          </span>
          <span className="text-right">
            Scroll for More &darr;
          </span>
        </div>
      </motion.div>

      {/* Products Section */}
      <div className="flex flex-col gap-0 bg-white">

        {/* Mission & Principles */}
        <Section className="bg-white text-black min-h-screen !py-0 !px-0 bg-grid-black/[0.02]">
          <div className="h-full flex flex-col justify-center px-6 py-24 sm:px-12 md:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-24 mb-24">
              <div>
                <span className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">Our Mission</span>
                <h2 className="text-3xl sm:text-4xl font-light leading-tight">
                  Turning advanced AI research into real-world systems that create measurable impact.
                </h2>
              </div>
              <div className="text-neutral-600 text-sm sm:text-base leading-relaxed flex flex-col gap-4 justify-end">
                <p>
                  We are research-first by design. Every idea is tested, every assumption is questioned, and every system is optimized before it reaches production.
                </p>
                <p>
                  Our goal is simple: to build AI systems that survive real-world pressure, scale responsibly, and actually solve the problems they are meant to address.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-neutral-200 pt-12">
              {[
                { num: "01", title: "Research First", desc: "Validate before we build. Strong foundations for production-ready AI." },
                { num: "02", title: "Real World Impact", desc: "We measure success by deployment and performance in real environments." },
                { num: "03", title: "Innovation & Growth", desc: "Continuously evolving by using new technologies and expanding our capabilities." },
                { num: "04", title: "Relentless Iteration", desc: "We rethink, refine, and rebuild until the system performs under pressure." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <span className="font-mono text-xs text-neutral-400">/{item.num}</span>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-neutral-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Services */}
        <Section className="bg-neutral-50 text-black min-h-[50vh] !py-0 !px-0 border-t border-neutral-200">
          <div className="h-full flex flex-col justify-center px-6 py-24 sm:px-12 md:px-24">
            <span className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-12">Our Services</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {[
                { title: "AI & Machine Learning Systems", desc: "Production-ready AI systems, ML, deep learning, computer vision, and LLMs." },
                { title: "AI Product & MVP Development", desc: "From idea validation to full-stack MVPs with scalable architectures." },
                { title: "Automation & Agentic Workflows", desc: "Intelligent automation using LangChain, CrewAI, n8n, and more." },
                { title: "Research, Optimization & Deployment", desc: "Deep AI research, model optimization, and proper DevOps deployment." }
              ].map((service, i) => (
                <div key={i} className="group">
                  <h3 className="text-2xl font-light mb-4 group-hover:underline decoration-1 underline-offset-4">{service.title}</h3>
                  <p className="text-neutral-600 max-w-md">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

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
              link="https://www.careerkonnect.org"
              linkText="Visit CareerKonnect.org"
              status="Live"
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
                <h3 className="text-3xl sm:text-4xl font-light">Huzaifa Sarfraz</h3>
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
            <p className="text-neutral-600 text-xs w-full max-w-xs">
              National Science & Technology Park (NSTP), NUST Islamabad
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 font-mono text-sm uppercase tracking-widest">
            <div className="flex flex-col gap-4">
              <span className="text-neutral-500">Products</span>
              <a href="https://escribo.ai" target="_blank" className="hover:text-neutral-400 text-white">Escribo</a>
              <a href="https://www.careerkonnect.org" target="_blank" className="hover:text-neutral-400 text-white">CareerKonnect</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-neutral-500">Social</span>
              <a href="https://www.linkedin.com/company/muren/" target="_blank" className="hover:text-neutral-400 text-white">LinkedIn</a>
              <a href="https://www.instagram.com/muren_ai?igsh=MWNzcXl1ZTR2Ymhycw==" target="_blank" className="hover:text-neutral-400 text-white">Instagram</a>
              <a href="mailto:info@muren.ai" className="hover:text-neutral-400 text-white">Email</a>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto mt-24 pt-8 border-t border-neutral-900 flex justify-between text-xs text-neutral-600 font-mono uppercase">
          <span>&copy; {new Date().getFullYear()} muren.ai</span>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-neutral-400 text-white">Privacy Policy</a>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

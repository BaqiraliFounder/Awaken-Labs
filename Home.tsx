
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
// Removed .tsx extension from import
import { SERVICES, Icons } from '../constants';
import { EtheralShadow } from '../components/ui/etheral-shadow';

const NoiseTexture = () => (
  <div
    className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay z-[5]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
    }}
  />
);

const FAQ_DATA = [
  {
    question: "Do you code everything or use no-code / low-code tools?",
    answer: "We use modern AI-powered building tools like Antigravity and Lovable to build MVPs faster and smarter. The goal is not to over-engineer, but to ship a solid, scalable product quickly. These tools allow us to move fast while still keeping the product flexible, clean, and production-ready."
  },
  {
    question: "How long does MVP development take?",
    answer: "Most MVPs are completed within 21 days. This timeline works because we focus only on the most important features required to validate your idea and get real user feedback, without unnecessary complexity."
  },
  {
    question: "What happens after the MVP is done?",
    answer: "You have two clear options. First, we can continue managing and improving your product on a monthly retainer, handling updates, fixes, and new features. Second, you can fully transition the product to your own team. Our codebase is neat, well-structured, and easy to understand, and we actively help you during the transition to ensure a smooth handover."
  },
  {
    question: "What’s included in the MVP package?",
    answer: "The MVP includes everything you need to launch fast. This typically covers 3–4 core product features such as authentication, payments, dashboards, or other essentials based on your idea. You get a fully working web app that is hosted and live, along with a clean, fast, and responsive landing page. We follow a minimal UI approach to move quickly, skipping traditional design tools like Figma, while still ensuring the product looks sharp and professional."
  },
  {
    question: "What services do you offer?",
    answer: "We focus on what we do best: shipping high-quality MVPs. You can work with us in two ways. The first is Full MVP Development, where we take your idea from concept to a launch-ready product. The second is Web Design, where we help turn your idea into a polished final UI/UX design."
  },
  {
    question: "Will my product be scalable?",
    answer: "Yes. We build MVPs with clean architecture and an AI-standard development approach, which makes scaling later straightforward. As your product grows, adding features or handling more users does not require rebuilding everything from scratch."
  },
  {
    question: "Do you help with hosting and deployment?",
    answer: "Yes. We handle deployment, domains, and basic infrastructure setup so you can stay completely stress-free about the technical side of launching your MVP and focus on your product and users instead."
  }
];

// Added React.FC type to FAQItem to properly handle 'key' prop and ensure correct return type for toggle function
const FAQItem: React.FC<{ item: any; index: number; isOpen: boolean; toggle: () => void }> = ({ item, index, isOpen, toggle }) => {
  return (
    <motion.div
      initial={false}
      className={`border-b border-orange-100 transition-colors ${isOpen ? 'bg-orange-50/30' : 'bg-transparent'}`}
    >
      <button
        onClick={toggle}
        className="w-full py-8 flex items-start gap-6 text-left group"
      >
        <span className={`text-[10px] font-black uppercase tracking-widest mt-1.5 transition-colors ${isOpen ? 'text-orange-600' : 'text-zinc-300'}`}>
          {(index + 1).toString().padStart(2, '0')}
        </span>
        <div className="flex-grow">
          <h3 className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-orange-600' : 'text-zinc-900'}`}>
            {item.question}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`flex-shrink-0 mt-1 transition-colors ${isOpen ? 'text-orange-600' : 'text-zinc-400'}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 pl-[calc(0.75rem+2.5rem)] pr-8 text-zinc-500 leading-relaxed font-medium">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Home: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center px-4 md:px-8 relative overflow-hidden perspective-1000">
        <NoiseTexture />

        {/* Deep Atmospheric Background Layers */}
        <div className="absolute inset-0 z-0 bg-white">
          <div className="surface-texture" />
          <div className="absolute inset-0 bg-gradient-to-tr from-white via-orange-50/30 to-white opacity-80 animate-ambient" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vw] bg-radial-gradient from-orange-100/40 via-transparent to-transparent opacity-60 blur-[120px] pointer-events-none" />
          <div className="absolute top-1/3 left-1/4 w-[60vw] h-[60vw] bg-orange-200/20 blur-[150px] rounded-full animate-ambient pointer-events-none" style={{ animationDelay: '-5s' }} />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[600px] bg-orange-600/10 blur-[140px] rounded-full z-[1] pointer-events-none" />

        <motion.div
          animate={{ x: [-15, 15, -15], y: [-10, 10, -10], scale: [1, 1.05, 1], rotate: [0, 1, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 z-[2] pointer-events-none opacity-100"
        >
          <EtheralShadow
            color="rgba(234, 88, 12, 0.35)"
            animation={{ scale: 100, speed: 85 }}
            noise={{ opacity: 0.15, scale: 1.2 }}
            sizing="fill"
            className="w-full h-full"
          />
        </motion.div>

        <motion.div
          animate={{ x: [20, -20, 20], y: [10, -10, 10], scale: [1.1, 1, 1.1], rotate: [180, 182, 180] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 z-[1] pointer-events-none opacity-40"
        >
          <EtheralShadow
            color="rgba(24, 24, 27, 0.08)"
            animation={{ scale: 120, speed: 30 }}
            noise={{ opacity: 0.08, scale: 2 }}
            sizing="fill"
            className="w-full h-full"
          />
        </motion.div>

        <div className="z-10 text-center relative px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[11rem] xl:text-[13rem] font-bold tracking-tighter leading-[0.85] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 via-zinc-800 to-orange-600 drop-shadow-sm uppercase">
              BUILD FAST.<br />SHIP AI.
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.2 }}
            className="text-base md:text-xl lg:text-2xl text-zinc-600 font-medium max-w-3xl mx-auto mb-12 px-4"
          >
            Engineering elite AI SaaS MVPs in 21 days. High-velocity production for visionary founders.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center"
          >
            <a
              href="https://tally.so/r/dWNB9z"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 md:px-12 py-4 md:py-5 bg-orange-600 text-white font-bold uppercase tracking-widest hover:bg-orange-700 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/30 rounded-xl relative overflow-hidden"
              data-cursor="START"
            >
              <span className="relative z-10">Start Your MVP</span>
              <NoiseTexture />
            </a>
            <Link
              to="/workflow"
              className="px-10 md:px-12 py-4 md:py-5 border border-orange-200 text-orange-700 font-bold uppercase tracking-widest hover:bg-white transition-all glass-panel rounded-xl"
            >
              The 21-Day Protocol
            </Link>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Explore</span>
          <div className="w-[1px] h-10 md:h-12 bg-gradient-to-b from-orange-500/50 to-transparent" />
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
          <SectionTitle
            label="Establishment"
            title="The 3-Week Promise."
            subtitle="Most agencies spend months in 'discovery'. We spend 21 days in execution. We specialize in AI-native SaaS products that need to work on Day 1."
          />
          <motion.div
            whileHover={{ rotateY: 5, rotateX: -5 }}
            className="aspect-square bg-orange-50 border border-orange-100 relative group overflow-hidden preserve-3d glow-subtle rounded-3xl"
          >
            <NoiseTexture />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000')] bg-cover opacity-10 group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8 bg-white/90 backdrop-blur-sm border border-orange-200 shadow-2xl transform group-hover:translate-z-10 rounded-2xl relative overflow-hidden">
                <NoiseTexture />
                <p className="relative z-10 text-6xl md:text-8xl font-bold mb-2 text-orange-600">21</p>
                <p className="relative z-10 text-xs uppercase tracking-widest text-zinc-600 font-bold">Days to Launch</p>
              </div>
            </div>
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-orange-100/30 blur-[100px] rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-orange-50 relative overflow-hidden">
        <NoiseTexture />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle
            label="Capability"
            title="Engineering Excellence."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-orange-100 p-8 md:p-12 hover:border-orange-500 transition-all duration-500 group relative overflow-hidden rounded-2xl shadow-sm"
                data-cursor="CORE"
              >
                <NoiseTexture />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 text-zinc-900 group-hover:text-orange-600 transition-colors">{service.title}</h3>
                  <p className="text-zinc-500 mb-8 leading-relaxed text-sm md:text-base">{service.description}</p>
                  <ul className="space-y-3 mb-12">
                    {service.details.map((d) => (
                      <li key={d} className="text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-3 font-bold text-zinc-600">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:scale-150 transition-transform" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Velocity Comparison Section */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-white relative overflow-hidden">
        <NoiseTexture />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="relative glass-panel border border-orange-100 p-8 md:p-20 rounded-[3rem] shadow-2xl shadow-orange-500/5 group overflow-hidden">
            <NoiseTexture />
            <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter mb-8"
              >
                3× Faster Than <span className="text-orange-600">Traditional</span> Teams
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-zinc-500 text-lg font-medium"
              >
                We ship launch-ready MVPs in Days, not months. While traditional agencies take 3–6 months, we deliver faster without sacrificing quality.
              </motion.p>
            </div>

            <div className="space-y-12 md:space-y-16 max-w-4xl mx-auto relative z-10">
              <div className="space-y-4">
                <div className="flex justify-between items-end mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-zinc-900 font-black text-sm md:text-base uppercase tracking-widest">With Our Team (AI-First)</span>
                    <span className="px-3 py-1 bg-orange-600 text-white text-[9px] font-black uppercase tracking-widest rounded-full animate-pulse">AI-Powered</span>
                  </div>
                  <span className="text-orange-600 font-black text-2xl md:text-3xl tracking-tighter">21 Days</span>
                </div>
                <div className="h-12 md:h-16 w-full bg-orange-50 rounded-2xl overflow-hidden relative border border-orange-100/50 p-1">
                  <NoiseTexture />
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl relative shadow-lg shadow-orange-500/20"
                  >
                    <div className="absolute inset-0 bg-white/10" />
                  </motion.div>
                </div>
              </div>

              <div className="space-y-4 opacity-70 group-hover:opacity-100 transition-opacity">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-zinc-400 font-black text-sm md:text-base uppercase tracking-widest">Traditional Agencies</span>
                  <span className="text-zinc-400 font-black text-2xl md:text-3xl tracking-tighter">180 Days</span>
                </div>
                <div className="h-12 md:h-16 w-full bg-zinc-50 rounded-2xl overflow-hidden relative border border-zinc-100 p-1">
                  <NoiseTexture />
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.0, ease: "linear", delay: 0.2 }}
                    className="h-full bg-zinc-200 rounded-xl"
                  />
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="mt-16 md:mt-24 text-center relative z-10"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-300 font-black">
                40+ MVPs launched • Used by founders who value speed and clarity
              </p>
            </motion.div>

            <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500/5 blur-[100px] rounded-full pointer-events-none" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionTitle
            label="Knowledge Base"
            title="FAQs."
            subtitle="Everything you need to know about buidling your MVPs."
            centered
          />

          <div className="mt-16 md:mt-24 border-t border-orange-100">
            {FAQ_DATA.map((item, idx) => (
              <FAQItem
                key={idx}
                item={item}
                index={idx}
                isOpen={openIndex === idx}
                toggle={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 md:py-64 px-4 md:px-8 text-center bg-white relative overflow-hidden">
        <NoiseTexture />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter mb-12 text-zinc-900"
          >
            READY TO <span className="text-orange-600">AWAKEN?</span>
          </motion.h2>
          <p className="text-lg md:text-xl text-zinc-600 mb-16 px-4 font-medium">
            Stop iterating in private. Let's ship your MVP to the world in 3 weeks.
          </p>
          <a
            href="https://tally.so/r/dWNB9z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col md:flex-row items-center gap-6 px-10 md:px-16 py-6 md:py-8 bg-orange-600 text-white text-lg md:text-xl font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl shadow-orange-500/30 rounded-2xl relative overflow-hidden group"
            data-cursor="BOOK"
          >
            <span className="relative z-10">Schedule Discovery Call</span>
            <div className="hidden md:block relative z-10">
              <Icons.ArrowRight />
            </div>
            <NoiseTexture />
          </a>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
      </section>
    </div>
  );
};

export default Home;

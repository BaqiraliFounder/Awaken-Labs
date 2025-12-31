
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Icons } from '../constants';

const About: React.FC = () => {
  const skills = [
    "Vibe Coder",
    "Ai Enthusiast",
    "Entrepreneur",
    "Designer",
    "3D Artist"
  ];

  const socialLinks = [
    { id: 'linkedin', icon: <Icons.Linkedin />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/baqirali-khanushiya-6467bb332?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVJZgsuLRTK%2BWFHp3hpwcqQ%3D%3D' },
    { id: 'x', icon: <Icons.X />, label: 'X (Twitter)', url: 'https://x.com/baqiralikh378' },
    { id: 'discord', icon: <Icons.Discord />, label: 'Discord', url: 'https://discord.gg/ApRWjg6t' },
    { id: 'youtube', icon: <Icons.Youtube />, label: 'YouTube', url: 'https://youtube.com/@itsbaqirali?si=M_-id-oRFTUEGUYP' },
  ];

  return (
    <div className="pt-40 pb-32 px-4 md:px-8 max-w-7xl mx-auto bg-white">
      <SectionTitle
        label="Philosophy"
        title="We build what matters."
        subtitle="Awaken Labs was founded on the belief that speed is the only true competitive advantage in the AI era. We are operators, not observers."
      />

      {/* Philosophy Details & Core Principles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mt-24 mb-32">
        <div className="space-y-8">
          <p className="text-zinc-600 text-lg leading-relaxed font-medium">
            Founded by Baqirali Khanushiya, we realized that founders were spending too much time talking about ideas and not enough time putting them in front of users.
          </p>
          <p className="text-zinc-600 text-lg leading-relaxed font-medium">
            Our 3-week protocol is a battle-tested framework for building production-grade SaaS products. We utilize a high-performance stack and deeply integrated AI capabilities to give you a foundation that scales.
          </p>
        </div>
        <div className="bg-orange-50 border border-orange-100 p-8 md:p-12 rounded-xl">
          <h4 className="text-sm uppercase tracking-widest text-orange-600 mb-8 font-black">Core Principles</h4>
          <ul className="space-y-12">
            {[
              { t: 'Velocity over Validation', d: 'The best validation is a live product in a user\'s hands.' },
              { t: 'Engineering Authority', d: 'We don\'t cut corners. Every line of code is intentional.' },
              { t: 'AI-First Thinking', d: 'AI isn\'t a feature; it\'s the core architect of modern SaaS.' }
            ].map((p, idx) => (
              <motion.li
                key={p.t}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h5 className="text-xl font-bold mb-2 text-zinc-900">{p.t}</h5>
                <p className="text-zinc-500 text-sm font-medium">{p.d}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Redesigned The Architects Section */}
      <section className="mt-48 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="h-1 w-20 bg-orange-600 mb-6" />
            <h3 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase tracking-tighter mb-4">The Architects</h3>
            <p className="text-zinc-500 font-bold text-sm uppercase tracking-[0.3em]">Leadership & Technical Direction</p>
          </motion.div>

          {/* New Horizontal Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col lg:flex-row items-center gap-12 lg:gap-20 p-8 md:p-12 bg-white/40 backdrop-blur-3xl border border-orange-100 rounded-[2.5rem] shadow-2xl shadow-orange-500/5 overflow-hidden"
          >
            {/* Portrait Container */}
            <div className="relative w-full lg:w-[40%] flex-shrink-0">
              <div className="aspect-[4/5] relative rounded-[2rem] overflow-hidden border border-orange-100/50 bg-orange-50 shadow-inner">
                <div className="absolute inset-0 bg-[#D4E4F7] opacity-60" />

                <img
                  src="/baqir2.png"
                  alt="Baqirali Khanushiya"
                  className="relative z-10 w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 via-transparent to-transparent z-20" />
              </div>

              <div className="absolute -bottom-4 -right-4 bg-zinc-900 text-white p-4 rounded-2xl shadow-xl z-30 flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest">Join Community </span>
              </div>
            </div>

            {/* Bio Content Area */}
            <div className="flex-grow space-y-8 relative z-10">
              <div className="space-y-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <h4 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter">Baqirali Khanushiya</h4>
                  <div className="flex gap-2">
                    {socialLinks.map((link) => (
                      <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-zinc-100 rounded-full text-zinc-900 hover:bg-orange-600 hover:text-white transition-all shadow-sm flex items-center justify-center"
                        aria-label={link.label}
                        data-cursor={link.id.toUpperCase()}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
                <p className="text-orange-600 font-bold text-sm uppercase tracking-widest">Founder & CEO, Awaken Labs</p>
              </div>

              <div className="space-y-6">
                <p className="text-zinc-600 text-lg leading-relaxed font-medium">
                  Baqirali Khanushiya is the Founder and CEO of Awaken Labs. He founded Awaken Labs with the mission of empowering visionary founders to rapidly deploy high-performance AI solutions without the traditional overhead of lengthy agency discovery phases. An entrepreneur at heart with an engineering mindset, Baqirali actively contributes to the builder community by sharing his knowledge, insights, and guidance with aspiring creators.
                </p>
                <p className="text-zinc-600 text-lg leading-relaxed font-medium">
                  He is a passionate teenager with a strong urge to create meaningful products. Having access to a computer from an early age played a major role in his rapid growth and skill development.
                </p>
              </div>

              {/* Skills Badges */}
              <div className="pt-6 border-t border-orange-50">
                <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-6">Core Competencies</h5>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white border border-orange-100 rounded-xl text-[10px] font-bold uppercase tracking-widest text-orange-700 shadow-sm hover:border-orange-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Architect watermark */}
            <div className="absolute -right-12 -bottom-4 opacity-[0.03] pointer-events-none select-none">
              <span className="text-[12rem] font-black uppercase tracking-tighter">LEAD</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

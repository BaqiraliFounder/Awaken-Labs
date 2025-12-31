
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { WORKFLOW } from '../constants';

const Workflow: React.FC = () => {
  return (
    <div className="pt-32 md:pt-40 pb-32 bg-white">
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        <SectionTitle
          label="The Protocol"
          title="21 Days. No Excuses."
          subtitle="Our battle-tested workflow is designed for maximum efficiency. We focus on getting you to market before the competition even starts their second meeting."
        />

        <div className="relative mt-24 md:mt-32">
          {/* Vertical Progress Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-orange-100 md:-translate-x-1/2" />

          <div className="space-y-16 md:space-y-32">
            {WORKFLOW.map((step, idx) => (
              <motion.div
                key={step.week}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-8 md:gap-12`}
              >
                {/* Center Node / Mobile Left Node */}
                <div className="absolute left-4 md:left-1/2 top-8 md:top-1/2 w-4 md:w-5 h-4 md:h-5 bg-white border-2 border-orange-600 md:-translate-x-1/2 md:-translate-y-1/2 z-10 shadow-lg shadow-orange-500/20 rounded-full" />

                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <span className="text-orange-50 text-6xl md:text-8xl font-black block mb-2">WEEK {step.week}</span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-zinc-900">{step.title}</h3>
                  {/* Fixed template literal in className */}
                  <p className={`text-zinc-500 text-sm md:text-lg font-medium max-w-md mx-0 ${idx % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    {step.description}
                  </p>
                </div>

                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="bg-white border border-orange-100 p-6 md:p-8 max-w-sm glass-panel shadow-xl shadow-orange-500/5 rounded-xl"
                  >
                    <h4 className="text-[10px] uppercase tracking-widest text-orange-600 font-black mb-6 border-b border-orange-50 pb-2">Execution Checklist</h4>
                    <ul className="space-y-3">
                      {step.tasks.map((task) => (
                        <li key={task} className="flex items-center gap-3 text-xs md:text-sm">
                          <div className="w-1.5 h-1.5 bg-orange-600 flex-shrink-0 rounded-full" />
                          <span className="text-zinc-700 font-bold">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-32 md:mt-48 text-center bg-orange-50 border border-orange-100 p-12 md:p-24 relative overflow-hidden rounded-3xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 italic text-zinc-900">"MVPs that dominate."</h2>
            <p className="text-orange-600 uppercase tracking-widest text-[10px] md:text-xs font-black">- The Awaken Labs</p>
          </div>
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-orange-200/20 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default Workflow;

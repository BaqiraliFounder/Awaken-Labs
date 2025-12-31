
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { PORTFOLIO } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <div className="pt-40 pb-32 px-4 md:px-8 max-w-7xl mx-auto bg-white">
      <SectionTitle
        label="Evidence"
        title="Featured MVPs."
        subtitle="We don't build toys. We build tools that generate revenue and provide technical leverage."
      />

      <div className="space-y-32">
        {PORTFOLIO.map((item) => (
          <div key={item.id} className="group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-zinc-900 group-hover:text-orange-600 transition-colors">{item.name}</h3>
                <p className="text-xl text-zinc-400 mb-12 uppercase tracking-widest font-black">{item.tagline}</p>
                
                <div className="grid grid-cols-2 gap-12 mb-12">
                   <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-orange-600 font-bold mb-4">The Stack</h4>
                      <ul className="flex flex-wrap gap-2">
                        {item.stack.map(s => (
                          <li key={s} className="px-3 py-1 bg-orange-50 text-[10px] font-mono border border-orange-100 text-orange-700 font-bold rounded-md">{s}</li>
                        ))}
                      </ul>
                   </div>
                   <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-orange-600 font-bold mb-4">Outcome</h4>
                      <p className="text-sm leading-relaxed text-zinc-600 font-medium">{item.outcome}</p>
                   </div>
                </div>

                <button
                  className="px-12 py-5 bg-orange-600 text-white font-bold uppercase tracking-widest hover:bg-orange-700 transition-colors shadow-lg shadow-orange-500/20"
                  data-cursor="CASE STUDY"
                >
                  Full Narrative
                </button>
              </div>
              
              <div className="order-1 lg:order-2 aspect-[4/3] bg-orange-50 overflow-hidden border border-orange-100 relative rounded-2xl shadow-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-orange-600/5 group-hover:bg-transparent transition-colors pointer-events-none" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-64 text-center">
        <p className="text-zinc-300 text-sm uppercase tracking-[0.4em] mb-12 font-bold">More samples available upon request</p>
      </div>
    </div>
  );
};

export default Portfolio;

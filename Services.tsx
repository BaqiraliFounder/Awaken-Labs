
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-40 pb-32 bg-white">
      <div className="px-4 md:px-8 max-w-7xl mx-auto mb-24">
        <SectionTitle
          label="Our Services"
          title="Engineered Solutions."
          subtitle="We focus on the technical execution of your vision. No fluff, just high-performance engineering."
        />
      </div>

      <div className="space-y-0 border-t border-orange-100">
        {SERVICES.map((service, idx) => (
          <section key={service.id} className="group border-b border-orange-100 hover:bg-orange-50 transition-colors">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-40 grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <span className="text-orange-100 text-6xl md:text-8xl font-black tracking-tighter block mb-8">0{idx + 1}</span>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 group-hover:translate-x-4 transition-transform duration-500 text-zinc-900 group-hover:text-orange-600">
                  {service.title}
                </h2>
                <p className="text-xl text-zinc-500 max-w-md font-medium">
                  {service.description}
                </p>
              </div>
              <div className="bg-white border border-orange-100 p-8 md:p-12 rounded-xl shadow-lg shadow-orange-500/5">
                <h4 className="text-xs uppercase tracking-widest text-orange-600 mb-8 font-black">The Deliverables</h4>
                <ul className="grid grid-cols-1 gap-6">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-4 text-zinc-900">
                      <div className="w-2 h-2 bg-orange-600" />
                      <span className="text-sm uppercase tracking-[0.15em] font-bold">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Services;

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-orange-100 px-8 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-4">
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 fill-orange-600"
            >
              <path d="M12 2L2 22H22L12 2Z" />
            </svg>
            <h2 className="text-xl font-black tracking-tighter text-zinc-900 uppercase">
              Awaken Labs
            </h2>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Building elite AI-first SaaS products. High-velocity engineering for visionary founders.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-16 md:gap-32">
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-orange-600 mb-6 font-bold">Contact</h4>
            <ul className="space-y-4 text-sm text-zinc-900">
              <li><a href="https://tally.so/r/dWNB9z" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">Book a Call</a></li>
              <li className="text-zinc-500">Remote Agency</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-orange-600 mb-6 font-bold">Social</h4>
            <ul className="space-y-4 text-sm text-zinc-900">
              <li><a href="https://x.com/AwakenLabsReal" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">X(Twitter)</a></li>
              <li><a href="https://www.linkedin.com/in/baqirali-khanushiya-6467bb332/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-orange-50 flex justify-between items-center text-[10px] uppercase tracking-widest text-zinc-400">
        <p>&copy; 2025 Awaken Labs. All rights reserved.</p>
        <p className="text-orange-600 font-bold">21 Days MVP Protocol</p>
      </div>
    </footer>
  );
};

export default Footer;
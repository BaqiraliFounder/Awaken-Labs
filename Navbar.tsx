
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Workflow', path: '/workflow' },
    { name: 'Portfolio', path: '/portfolio' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] px-4 py-3 md:px-8 md:py-5 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">

        {/* Floating Logo Island */}
        <Link
          to="/"
          className={`
            flex items-center gap-2.5 px-5 py-2.5 rounded-full pointer-events-auto transition-all duration-500
            ${scrolled ? 'bg-white/40 backdrop-blur-xl border border-white/40 shadow-sm' : 'bg-transparent'}
          `}
          onClick={() => setIsOpen(false)}
        >
          <div className="relative group" >
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-zinc-900 transition-transform duration-500 group-hover:rotate-[15deg]" >
              <path d="M12 2L2 22H22L12 2Z" />
            </svg>
            <div className="absolute inset-0 bg-orange-500/20 blur-lg rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
          </div>
          <span className="text-base font-black tracking-tighter text-zinc-900 uppercase">
            Awaken Labs
          </span>
        </Link>

        {/* Main Desktop Navigation Island */}
        <div className={`
          hidden lg:flex items-center gap-1.5 p-1.5 rounded-full pointer-events-auto transition-all duration-500
          ${scrolled
            ? 'bg-zinc-900/10 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)]'
            : 'bg-zinc-900/5'
          }
        `}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`
                relative px-6 py-2.5 text-[10px] uppercase tracking-[0.25em] font-black transition-all rounded-full overflow-hidden
                ${location.pathname === link.path ? 'text-white' : 'text-zinc-500 hover:text-zinc-900'}
              `}
            >
              <span className="relative z-10">{link.name}</span>
              {location.pathname === link.path && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-zinc-900 rounded-full"
                  transition={{ type: 'spring', bounce: 0.15, duration: 0.6 }}
                />
              )}
            </Link>
          ))}

          <div className="w-4" /> {/* Spacer */}

          <a
            href="https://tally.so/r/dWNB9z"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-orange-600 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-zinc-900 transition-all rounded-full shadow-lg shadow-orange-500/20 pointer-events-auto"
          >
            Start Now ↗
          </a>
        </div>

        {/* Minimal Mobile Menu Button */}
        <button
          className={`
            lg:hidden p-3 rounded-full pointer-events-auto transition-all duration-300 flex flex-col gap-1.5 items-end group
            ${scrolled || isOpen ? 'bg-white/40 backdrop-blur-xl border border-white/40' : 'bg-white/10'}
          `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`h-[2px] bg-zinc-900 transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
          <div className={`h-[2px] bg-zinc-900 transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`} />
          <div className={`h-[2px] bg-zinc-900 transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
        </button>
      </div>

      {/* Minimal Glass Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-zinc-900/10 backdrop-blur-md z-[1100] pointer-events-auto lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: '100%', opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0.5 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-4 top-4 bottom-4 w-[calc(100%-2rem)] max-w-sm bg-white/70 backdrop-blur-3xl border border-white/50 rounded-[2rem] z-[1200] p-10 flex flex-col shadow-2xl pointer-events-auto lg:hidden"
            >
              <div className="flex flex-col gap-8 mt-16">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-5xl font-black tracking-tighter uppercase transition-colors ${location.pathname === link.path ? 'text-orange-600' : 'text-zinc-900'
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto space-y-6">
                <div className="h-px bg-zinc-900/5 w-full" />
                <a
                  href="https://tally.so/r/dWNB9z"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full py-5 bg-zinc-900 text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-orange-600 transition-all shadow-xl"
                >
                  Initiate protocol ↗
                </a>
                <p className="text-center text-[9px] uppercase tracking-widest text-zinc-400 font-bold">
                  Building the future of AI SaaS
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

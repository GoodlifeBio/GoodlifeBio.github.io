
import React, { useState, useEffect } from 'react';
import { Section, SectionTitle } from './components/Section';
import { PROBES, FEATURES } from './constants';

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update progress bar
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPercent = (winScroll / height) * 100;
      const progress = document.getElementById("progress-bar");
      if (progress) progress.style.width = scrolledPercent + "%";
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
      ? 'bg-white/80 backdrop-blur-xl border-b border-zinc-100 py-4 shadow-sm' 
      : 'bg-transparent py-8 border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
          </div>
          <span className="font-bold tracking-tighter text-xl text-zinc-900">Goodlife<span className="text-zinc-400 font-normal">.bio</span></span>
        </div>
        <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
          <button onClick={() => scrollTo('vision')} className="hover:text-zinc-900 transition-colors">Vision</button>
          <button onClick={() => scrollTo('amr-project')} className="hover:text-zinc-900 transition-colors">AMR Project</button>
          <button onClick={() => scrollTo('workflow')} className="hover:text-zinc-900 transition-colors">Workflow</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-zinc-900 transition-colors">Team</button>
        </div>
        <button 
          onClick={() => alert('Diagnostic Technical Paper (PDF) will open in a new tab.')}
          className="bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-zinc-800 transition-all shadow-sm active:scale-95"
        >
          Research PDF
        </button>
      </div>
    </nav>
  );
};

const Hero: React.FC = () => (
  <Section className="pt-64 pb-32">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="max-w-xl">
        <div className="reveal-item inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          Diagnostics for the critical hour
        </div>
        <h1 className="reveal-item text-6xl md:text-7xl font-bold tracking-tighter leading-[0.85] text-zinc-900 mb-10 text-balance" style={{transitionDelay: '100ms'}}>
          The earlier you know,<br/> the better your chances.
        </h1>
        <p className="reveal-item text-xl md:text-2xl text-zinc-500 font-light leading-snug max-w-2xl text-balance" style={{transitionDelay: '200ms'}}>
          Goodlife.bio develops rapid diagnostics for deadly infections. 
          We believe science works best when biology, engineering, and code sit at the same table.
        </p>
        <div className="reveal-item mt-14 flex flex-wrap gap-5" style={{transitionDelay: '300ms'}}>
          <button 
            onClick={() => document.getElementById('amr-project')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-zinc-900 text-white px-10 py-5 rounded-full font-semibold transition-all hover:px-12 active:scale-95 flex items-center gap-2"
          >
            View Flagship Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </button>
        </div>
      </div>
      <div className="lg:mt-0 mt-12 flex items-center justify-center scale-in" style={{transitionDelay: '400ms'}}>
        <img 
          src="https://raw.githubusercontent.com/StackBlitz/stackblitz-images/main/visualising-the-signal.png" 
          alt="Visualising the Signal" 
          className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-700"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://placehold.co/800x450/ffffff/18181b?text=Visualising+the+Signal+LFA";
          }}
        />
      </div>
    </div>
  </Section>
);

const Vision: React.FC = () => (
  <Section id="vision" className="bg-zinc-50 py-32 border-y border-zinc-100">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
      <div className="reveal-item">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 mb-6">Our Philosophy</h2>
        <p className="text-3xl font-medium tracking-tight leading-tight text-zinc-900">
          In health emergencies, time is the only currency that matters. 
          We build the sensors that give time back to doctors and patients.
        </p>
      </div>
      <div className="space-y-8">
        <div className="reveal-item p-8 bg-white border border-zinc-100 rounded-3xl shadow-sm" style={{transitionDelay: '100ms'}}>
          <h3 className="text-lg font-bold mb-3 italic">Biology × Engineering × Code</h3>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Our platform isn't just a chemical test; it's a multiplexed information system. 
            By encoding antibiotic resistance data into DNA barcodes, we bridge the gap between biological events and digital-grade precision.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div key={i} className="reveal-item flex flex-col gap-2" style={{transitionDelay: `${200 + i * 100}ms`}}>
              <div className="text-zinc-900 mb-1">{f.icon}</div>
              <span className="text-xs font-bold">{f.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

const AMRProject: React.FC = () => (
  <Section id="amr-project">
    <div className="mb-20 reveal-item">
      <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Flagship Project</span>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-4">AMR-DNA Probe System</h2>
      <p className="text-zinc-500 mt-4 max-w-xl text-balance">A novel chemistry-driven diagnostic for rapid &beta;-lactamase detection through programmable DNA barcodes.</p>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-32">
      <div className="space-y-10">
        {[
          { step: '01', title: 'Conjugation', text: 'Each probe is tuned for a specific class of resistance enzyme via its C-7 side chain, conjugated to a unique DNA barcode.' },
          { step: '02', title: 'Trigger', text: 'Enzymatic hydrolysis of the antibiotic ring triggers a self-immolative release, freeing the specific DNA barcode into the sample.' },
          { step: '03', title: 'Readout', text: 'Free barcodes hybridize to spatially separated capture zones on a lateral flow strip, providing a complete profile in under an hour.' }
        ].map((item, i) => (
          <div key={i} className="reveal-item flex gap-8 group" style={{transitionDelay: `${i * 150}ms`}}>
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center font-bold text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-500">
              {item.step}
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="scale-in" style={{transitionDelay: '300ms'}}>
        <img 
          src="https://raw.githubusercontent.com/StackBlitz/stackblitz-images/main/amr-diagnostic-diagram.png" 
          alt="AMR-DNA System Architecture Diagram" 
          className="w-full h-auto object-contain p-4 hover:scale-105 transition-transform duration-1000"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://placehold.co/1200x800/f4f4f5/18181b?text=System+Architecture+Diagram";
          }}
        />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16 border-t border-zinc-100">
      {[
        { title: 'Multiplexing', color: 'blue', text: 'Different probes release unique barcodes (A, B, C) captured at distinct, spatially separated Test Lines on a single strip.' },
        { title: 'Orthogonality', color: 'green', text: 'Computationally designed sequences ensure zero cross-reactivity with human, bacterial, or environmental DNA.' },
        { title: 'Uniformity', color: 'amber', text: 'Bioinformatically optimized melting temperatures (Tm) ensure all barcodes hybridize with equal efficiency under identical conditions.' },
        { title: 'Nuclease Resistance', color: 'red', text: 'Chemically modified phosphorothioate backbones resist degradation by DNases present in complex clinical samples like whole blood.' }
      ].map((item, i) => (
        <div key={i} className="reveal-item space-y-4" style={{transitionDelay: `${i * 100}ms`}}>
          <div className={`w-8 h-8 rounded-full bg-${item.color}-50 flex items-center justify-center text-${item.color}-600`}>
            <div className="w-2 h-2 rounded-full bg-current opacity-20 animate-ping absolute"></div>
            <div className="w-2 h-2 rounded-full bg-current"></div>
          </div>
          <h4 className="font-bold text-zinc-900 uppercase tracking-tighter">{item.title}</h4>
          <p className="text-zinc-500 text-xs leading-relaxed">{item.text}</p>
        </div>
      ))}
    </div>
  </Section>
);

const Probes: React.FC = () => (
  <div className="bg-zinc-50 py-24 border-y border-zinc-100 overflow-hidden">
    <Section>
      <div className="reveal-item">
        <SectionTitle>The Probe Library</SectionTitle>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROBES.map((probe, i) => (
          <div key={probe.id} className="reveal-item bg-white p-8 rounded-3xl border border-zinc-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group" style={{transitionDelay: `${i * 100}ms`}}>
            <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">{probe.id}</span>
            <h3 className="text-lg font-bold mt-4 mb-2 group-hover:text-zinc-900">{probe.target}</h3>
            <p className="text-zinc-400 text-xs mb-6 line-clamp-2">{probe.description}</p>
            <div className="pt-4 border-t border-zinc-50 flex items-center justify-between">
              <span className="text-[10px] font-mono text-zinc-500">Core: {probe.core}</span>
              <div className="w-2 h-2 rounded-full bg-zinc-200 group-hover:bg-zinc-900 transition-colors"></div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  </div>
);

const Workflow: React.FC = () => (
  <Section id="workflow">
    <div className="flex flex-col md:flex-row gap-20 items-end mb-24">
      <div className="max-w-xl reveal-item">
        <SectionTitle>Seamless Implementation</SectionTitle>
        <p className="text-zinc-500 font-light text-lg">
          We prioritize "Field Ready" design. Our workflow requires no complex machinery, just human-centric engineering.
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { step: '01', title: 'Collect', text: 'Small volume of Blood or Sputum.' },
        { step: '02', title: 'Lysis', text: 'Mix with reagent to release bacterial enzymes.' },
        { step: '03', title: 'Incubate', text: 'Wait for probe cleavage & activation.' },
        { step: '04', title: 'Read', text: 'Visual pattern readout on lateral flow.' }
      ].map((item, i) => (
        <div key={i} className="reveal-item p-10 border border-zinc-100 rounded-[2.5rem] bg-zinc-50/50 hover:bg-white hover:shadow-lg transition-all duration-500" style={{transitionDelay: `${i * 150}ms`}}>
          <div className="text-5xl font-black text-zinc-100 mb-6 group-hover:text-zinc-200 transition-colors">{item.step}</div>
          <h4 className="font-bold text-lg mb-2">{item.title}</h4>
          <p className="text-sm text-zinc-500 leading-relaxed">{item.text}</p>
        </div>
      ))}
    </div>
  </Section>
);

const Contact: React.FC = () => (
  <Section id="contact" className="py-40">
    <div className="max-w-3xl mx-auto text-center reveal-item">
      <div className="relative inline-block mb-8">
        <div className="absolute inset-0 bg-zinc-200 rounded-full animate-pulse"></div>
        <img src="https://picsum.photos/200/200?grayscale" alt="Founder" className="relative w-24 h-24 rounded-full border-4 border-white shadow-lg" />
      </div>
      <h2 className="text-3xl font-bold mb-4">Sambhab Mishra</h2>
      <p className="text-zinc-400 font-medium mb-10 text-lg italic">
        "Diagnostics and therapeutics for the critical hour. Earlier is better."
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button 
          onClick={() => window.location.href = 'mailto:hello@goodlife.bio'}
          className="bg-zinc-900 text-white px-12 py-5 rounded-full font-bold hover:bg-zinc-800 transition-all active:scale-95 shadow-lg shadow-zinc-200"
        >
          Contact for Collaboration
        </button>
        <button 
          onClick={() => window.open('https://linkedin.com', '_blank')}
          className="px-12 py-5 border border-zinc-200 rounded-full font-bold hover:bg-zinc-50 transition-all text-zinc-600"
        >
          LinkedIn
        </button>
      </div>
    </div>
  </Section>
);

const Footer: React.FC = () => (
  <footer className="py-16 border-t border-zinc-100 bg-white">
    <Section className="py-0">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 reveal-item">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-zinc-900 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="font-bold tracking-tighter text-lg">Goodlife.bio</span>
          </div>
          <p className="text-sm text-zinc-400 max-w-xs leading-relaxed">
            Leading the charge in rapid diagnostic infrastructure for global health emergencies.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-16">
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-900">Projects</h4>
            <ul className="text-xs text-zinc-400 space-y-3">
              <li><button onClick={() => document.getElementById('amr-project')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-zinc-900 transition-colors">AMR-DNA</button></li>
              <li><span className="opacity-50">Sepsis-Fast (Upcoming)</span></li>
              <li><span className="opacity-50">ViralScan (Upcoming)</span></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-900">Contact</h4>
            <ul className="text-xs text-zinc-400 space-y-3">
              <li><a href="mailto:hello@goodlife.bio" className="hover:text-zinc-900 transition-colors">hello@goodlife.bio</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-zinc-50 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">
        <span>© 2024 Goodlife.bio</span>
        <span>Built at the intersection of Bio, Engineering & Code</span>
      </div>
    </Section>
  </footer>
);

const App: React.FC = () => {
  useEffect(() => {
    // Advanced Intersection Observer
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Track all reveal-items and scale-ins
    document.querySelectorAll('.reveal-item, .scale-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-zinc-900 selection:text-white">
      <Nav />
      <Hero />
      <Vision />
      <AMRProject />
      <Probes />
      <Workflow />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

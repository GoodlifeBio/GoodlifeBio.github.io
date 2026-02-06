import React, { useState, useEffect } from 'react';
import { Section, SectionTitle } from './components/Section';
import { PROBES, FEATURES } from './constants';

const Nav: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-xl z-50 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
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
  <Section className="pt-48 pb-32">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="max-w-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          Diagnostics for the critical hour
        </div>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[0.85] text-zinc-900 mb-10 text-balance">
          The earlier you know,<br/> the better your chances.
        </h1>
        <p className="text-xl md:text-2xl text-zinc-500 font-light leading-snug max-w-2xl text-balance">
          Goodlife.bio develops rapid diagnostics for deadly infections. 
          We believe science works best when biology, engineering, and code sit at the same table.
        </p>
        <div className="mt-14 flex flex-wrap gap-5">
          <button 
            onClick={() => document.getElementById('amr-project')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-zinc-900 text-white px-10 py-5 rounded-full font-semibold transition-all hover:px-12 active:scale-95 flex items-center gap-2"
          >
            View Flagship Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </button>
        </div>
      </div>
      <div className="lg:mt-0 mt-12 flex items-center justify-center">
        <img 
          src="https://raw.githubusercontent.com/StackBlitz/stackblitz-images/main/visualising-the-signal.png" 
          alt="Visualising the Signal" 
          className="w-full h-auto object-contain"
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
      <div>
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 mb-6">Our Philosophy</h2>
        <p className="text-3xl font-medium tracking-tight leading-tight text-zinc-900">
          In health emergencies, time is the only currency that matters. 
          We build the sensors that give time back to doctors and patients.
        </p>
      </div>
      <div className="space-y-8">
        <div className="p-8 bg-white border border-zinc-100 rounded-3xl shadow-sm">
          <h3 className="text-lg font-bold mb-3 italic">Biology × Engineering × Code</h3>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Our platform isn't just a chemical test; it's a multiplexed information system. 
            By encoding antibiotic resistance data into DNA barcodes, we bridge the gap between biological events and digital-grade precision.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div key={i} className="flex flex-col gap-2">
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
    <div className="mb-20">
      <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Flagship Project</span>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-4">AMR-DNA Probe System</h2>
      <p className="text-zinc-500 mt-4 max-w-xl text-balance">A novel chemistry-driven diagnostic for rapid &beta;-lactamase detection through programmable DNA barcodes.</p>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-32">
      <div className="space-y-10">
        <div className="flex gap-8 group">
          <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center font-bold text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-all">01</div>
          <div>
            <h4 className="text-xl font-bold mb-2">Conjugation</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">Each probe is tuned for a specific class of resistance enzyme via its C-7 side chain, conjugated to a unique DNA barcode.</p>
          </div>
        </div>
        <div className="flex gap-8 group">
          <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center font-bold text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-all">02</div>
          <div>
            <h4 className="text-xl font-bold mb-2">Trigger</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">Enzymatic hydrolysis of the antibiotic ring triggers a self-immolative release, freeing the specific DNA barcode into the sample.</p>
          </div>
        </div>
        <div className="flex gap-8 group">
          <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center font-bold text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-all">03</div>
          <div>
            <h4 className="text-xl font-bold mb-2">Readout</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">Free barcodes hybridize to spatially separated capture zones on a lateral flow strip, providing a complete profile in under an hour.</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <img 
          src="https://raw.githubusercontent.com/StackBlitz/stackblitz-images/main/amr-diagnostic-diagram.png" 
          alt="AMR-DNA System Architecture Diagram" 
          className="w-full h-auto object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://placehold.co/1200x800/f4f4f5/18181b?text=System+Architecture+Diagram";
          }}
        />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16 border-t border-zinc-100">
      <div className="space-y-4">
        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
        </div>
        <h4 className="font-bold text-zinc-900 uppercase tracking-tighter">Multiplexing</h4>
        <p className="text-zinc-500 text-xs leading-relaxed">Different probes release unique barcodes (A, B, C) captured at distinct, spatially separated Test Lines on a single strip.</p>
      </div>
      <div className="space-y-4">
        <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        </div>
        <h4 className="font-bold text-zinc-900 uppercase tracking-tighter">Orthogonality</h4>
        <p className="text-zinc-500 text-xs leading-relaxed">Computationally designed sequences ensure zero cross-reactivity with human, bacterial, or environmental DNA.</p>
      </div>
      <div className="space-y-4">
        <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </div>
        <h4 className="font-bold text-zinc-900 uppercase tracking-tighter">Uniformity</h4>
        <p className="text-zinc-500 text-xs leading-relaxed">Bioinformatically optimized melting temperatures (Tm) ensure all barcodes hybridize with equal efficiency under identical conditions.</p>
      </div>
      <div className="space-y-4">
        <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
        </div>
        <h4 className="font-bold text-zinc-900 uppercase tracking-tighter">Nuclease Resistance</h4>
        <p className="text-zinc-500 text-xs leading-relaxed">Chemically modified phosphorothioate backbones resist degradation by DNases present in complex clinical samples like whole blood.</p>
      </div>
    </div>
  </Section>
);

const Probes: React.FC = () => (
  <div className="bg-zinc-50 py-24 border-y border-zinc-100">
    <Section>
      <SectionTitle>The Probe Library</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROBES.map((probe) => (
          <div key={probe.id} className="bg-white p-8 rounded-3xl border border-zinc-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
            <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">{probe.id}</span>
            <h3 className="text-lg font-bold mt-4 mb-2 group-hover:text-zinc-900">{probe.target}</h3>
            <p className="text-zinc-400 text-xs mb-6 line-clamp-2">{probe.description}</p>
            <div className="pt-4 border-t border-zinc-50 flex items-center justify-between">
              <span className="text-[10px] font-mono text-zinc-500">Core: {probe.core}</span>
              <div className="w-2 h-2 rounded-full bg-zinc-200"></div>
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
      <div className="max-w-xl">
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
      ].map((item, idx) => (
        <div key={idx} className="p-10 border border-zinc-100 rounded-[2.5rem] bg-zinc-50/50">
          <div className="text-5xl font-black text-zinc-100 mb-6">{item.step}</div>
          <h4 className="font-bold text-lg mb-2">{item.title}</h4>
          <p className="text-sm text-zinc-500 leading-relaxed">{item.text}</p>
        </div>
      ))}
    </div>
  </Section>
);

const Contact: React.FC = () => (
  <Section id="contact" className="py-40">
    <div className="max-w-3xl mx-auto text-center">
      <img src="https://picsum.photos/200/200?grayscale" alt="Founder" className="w-24 h-24 rounded-full mx-auto mb-8 border-4 border-white shadow-lg" />
      <h2 className="text-3xl font-bold mb-4">Sambhab Mishra</h2>
      <p className="text-zinc-400 font-medium mb-10 text-lg italic">
        "Diagnostics and therapeutics for the critical hour. Earlier is better."
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button 
          onClick={() => window.location.href = 'mailto:hello@goodlife.bio'}
          className="bg-zinc-900 text-white px-12 py-5 rounded-full font-bold hover:bg-zinc-800 transition-all active:scale-95 shadow-lg"
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
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
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
    // Reveal animation on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-4');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-4');
      observer.observe(section);
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

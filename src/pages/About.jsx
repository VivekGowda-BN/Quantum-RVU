import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StarBackground from '../components/StarBackground';
import logo from '../assets/logo.png';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Observer for reveal animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.1 });

      const reveals = containerRef.current.querySelectorAll('.reveal');
      reveals.forEach(el => observer.observe(el));

      // Parallax for Background
      gsap.to('.star-background-mount', {
        y: '5%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });

      // Parallax for Visuals
      const visuals = containerRef.current.querySelectorAll('.parallax-visual');
      visuals.forEach((visual) => {
        gsap.to(visual, {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: visual,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      // Looping Animation: Wave Packet (Oscillation)
      const waveDiagrams = containerRef.current.querySelectorAll('.animate-wave');
      waveDiagrams.forEach((wave) => {
        gsap.to(wave, {
          y: '+=5',
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
        
        gsap.to(wave.querySelectorAll('line'), {
          opacity: 0.4,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: {
            amount: 1,
            from: 'center'
          }
        });
      });

      // Looping Animation: Bloch Sphere (Rotation & Opacity)
      const sphereDiagrams = containerRef.current.querySelectorAll('.animate-sphere');
      sphereDiagrams.forEach((sphere) => {
        gsap.to(sphere.querySelector('svg'), {
          rotation: 360,
          duration: 40,
          repeat: -1,
          ease: 'none'
        });

        gsap.to(sphere, {
          opacity: 0.8,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      });

      // Looping Animation: Energy Manifold (Pulsing)
      const manifoldDiagrams = containerRef.current.querySelectorAll('.animate-manifold');
      manifoldDiagrams.forEach((manifold) => {
        gsap.to(manifold.querySelectorAll('ellipse'), {
          scale: 1.02,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: 0.2
        });
      });

      // Looping Animation: Constellation (Sparkling)
      const constellationDiagrams = containerRef.current.querySelectorAll('.animate-constellation');
      constellationDiagrams.forEach((constellation) => {
        gsap.to(constellation.querySelectorAll('circle'), {
          opacity: 0.4,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: {
            amount: 2,
            from: 'random'
          }
        });
      });

      // Looping Animation: Sinusoidal Paths (Overview)
      const pathDiagrams = containerRef.current.querySelectorAll('.animate-paths');
      pathDiagrams.forEach((path) => {
        const waves = path.querySelectorAll('.feynman-wave');
        waves.forEach((wave, i) => {
          gsap.to(wave, {
            attr: { 
              d: (j) => {
                const points = [];
                const amp = 8 + i * 3;
                const freq = 0.12;
                for (let x = 20; x <= 80; x += 1) {
                  const phase = Math.PI;
                  const y = 50 + Math.sin((x - 20) * freq + phase) * amp;
                  points.push(x === 20 ? `M ${x} ${y}` : `L ${x} ${y}`);
                }
                return points.join(' ');
              }
            },
            duration: 5 + i,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          });
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen text-white font-sans relative overflow-hidden pt-24">
      <StarBackground density={0.35} />
      
      {/* Physics Style Overlays */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03]">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <div className="relative z-10 w-full">
        
        {/* Intro Section */}
        <div className="section !pt-4">
          <div className="section-content max-w-4xl mx-auto px-4 text-center flex flex-col items-center justify-center">
            <div className="mb-6">
              <img src={logo} alt="Quantum Logo" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
            </div>
            <h1 className="reveal text-6xl md:text-7xl font-bold mb-8 tracking-tighter text-white">
              Quantum
            </h1>
            <div className="h-[1px] w-20 bg-white/20 mb-10"></div>
            <p className="reveal text-xl md:text-2xl text-gray-400 leading-relaxed font-light max-w-2xl mx-auto">
              A selective initiative exploring theoretical physics and quantum technologies.
            </p>
          </div>
        </div>

        {/* Section 1: Overview */}
        <div className="section section-alt">
          <div className="section-content max-w-4xl mx-auto px-4">
            <section className="reveal grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="order-2 md:order-1 pt-4">
                <h2 className="reveal text-3xl font-bold mb-6 tracking-tight text-white/95">Program Overview</h2>
                <div className="h-[1px] w-16 bg-white/20 mb-8"></div>
                <div className="space-y-6">
                  <p className="reveal text-gray-400 leading-relaxed font-light text-[17px]">
                    Quantum exists as an academic bridge within a computer science ecosystem. While our university focuses on applied engineering, selected students in the Quantum Cohort explore the profound mathematical structures of the universe.
                  </p>
                  <p className="reveal text-gray-400 leading-relaxed font-light text-[17px]">
                    Through rigorous weekly sessions and sustained, long-term learning pathways, members systematically tackle advanced concepts—bridging computational theory and fundamental physics.
                  </p>
                </div>
              </div>
              
              <div className="order-1 md:order-2 flex justify-center items-center group/symbol parallax-visual animate-paths">
                <svg className="w-64 h-64 opacity-[0.6] text-white/80 group-hover/symbol:opacity-100 group-hover/symbol:scale-105 transition-all duration-500 ease-out cursor-default" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <circle cx="20" cy="50" r="2" fill="currentColor" />
                  <circle cx="80" cy="50" r="2" fill="currentColor" />
                  {[...Array(5)].map((_, i) => {
                    const points = [];
                    const amp = 8 + i * 3;
                    const freq = 0.12;
                    for (let x = 20; x <= 80; x += 1) {
                      const y = 50 + Math.sin((x - 20) * freq) * amp;
                      points.push(x === 20 ? `M ${x} ${y}` : `L ${x} ${y}`);
                    }
                    return (
                      <path 
                        key={i} 
                        className="feynman-wave"
                        d={points.join(' ')} 
                        opacity={0.3 + i * 0.15} 
                        strokeWidth="0.6" 
                      />
                    );
                  })}
                  <path d="M 20 50 L 80 50" strokeWidth="1.2" strokeDasharray="2 2" />
                  <text x="15" y="45" fill="currentColor" fontSize="3" className="font-mono" opacity="0.5">t_1</text>
                  <text x="78" y="45" fill="currentColor" fontSize="3" className="font-mono" opacity="0.5">t_2</text>
                </svg>
              </div>
            </section>
          </div>
        </div>

        {/* Section 2: What You Study */}
        <div className="section">
          <div className="section-content max-w-4xl mx-auto px-4">
            <section className="reveal grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="order-1 md:order-1 flex justify-center items-center hidden md:flex group/symbol parallax-visual animate-wave">
                <svg className="w-64 h-64 opacity-[0.6] text-white/80 group-hover/symbol:opacity-100 group-hover/symbol:scale-105 transition-all duration-500 ease-out cursor-default" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                  {[...Array(20)].map((_, i) => {
                    const x = 15 + i * 3.5;
                    const amplitude = Math.exp(-Math.pow((x - 50) / 15, 2)) * 25;
                    const y = 50 + Math.sin(x * 0.8) * amplitude;
                    return (
                      <g key={i}>
                        <line 
                          x1={x} 
                          y1={y} 
                          x2={x + 3.5} 
                          y2={50 + Math.sin((x+3.5) * 0.8) * Math.exp(-Math.pow((x+3.5 - 50) / 15, 2)) * 25} 
                          strokeWidth="1.2" 
                        />
                        <circle cx={x} cy={y} r="0.6" fill="currentColor" opacity="0.3" />
                      </g>
                    );
                  })}
                  <path d="M 10 50 L 90 50" strokeWidth="0.2" opacity="0.2" />
                  <text x="75" y="45" fill="currentColor" fontSize="3" className="font-mono" opacity="0.4">ψ(x)</text>
                </svg>
              </div>
              
              <div className="order-2 md:order-2">
                <h2 className="reveal text-3xl font-bold mb-6 tracking-tight text-white/95">What You Study</h2>
                <div className="h-[1px] w-16 bg-white/20 mb-8"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="reveal group p-6 border border-white/10 bg-neutral-900/50 backdrop-blur-sm rounded-xl transition-all duration-300 ease-out hover:border-white/30 hover:-translate-y-[5px]" style={{ transitionDelay: '100ms' }}>
                    <svg className="w-6 h-6 mb-4 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="2" />
                      <ellipse cx="12" cy="12" rx="10" ry="4" />
                      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
                      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
                    </svg>
                    <h3 className="text-white font-medium mb-2 text-[15px]">Theoretical Physics</h3>
                    <p className="text-gray-400 font-light text-[13px] leading-relaxed">Advanced classical mechanics and electrodynamics.</p>
                  </div>
                  <div className="reveal group p-6 border border-white/10 bg-neutral-900/50 backdrop-blur-sm rounded-xl transition-all duration-300 ease-out hover:border-white/30 hover:-translate-y-[5px]" style={{ transitionDelay: '200ms' }}>
                    <svg className="w-6 h-6 mb-4 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M 3 12 C 6 4, 10 4, 12 12 S 18 20, 21 12" />
                    </svg>
                    <h3 className="text-white font-medium mb-2 text-[15px]">Quantum Mechanics</h3>
                    <p className="text-gray-400 font-light text-[13px] leading-relaxed">Wave functions and Hilbert space formalism.</p>
                  </div>
                  <div className="reveal group p-6 border border-white/10 bg-neutral-900/50 backdrop-blur-sm rounded-xl transition-all duration-300 ease-out hover:border-white/30 hover:-translate-y-[5px]" style={{ transitionDelay: '300ms' }}>
                    <svg className="w-6 h-6 mb-4 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                    <h3 className="text-white font-medium mb-2 text-[15px]">Quantum Computing</h3>
                    <p className="text-gray-400 font-light text-[13px] leading-relaxed">Qubit manipulation and quantum logic gates.</p>
                  </div>
                  <div className="reveal group p-6 border border-white/10 bg-neutral-900/50 backdrop-blur-sm rounded-xl transition-all duration-300 ease-out hover:border-white/30 hover:-translate-y-[5px]" style={{ transitionDelay: '400ms' }}>
                    <svg className="w-6 h-6 mb-4 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="6" cy="12" r="2" />
                      <circle cx="18" cy="12" r="2" />
                      <path d="M 8 12 H 16" strokeDasharray="2 2" />
                    </svg>
                    <h3 className="text-white font-medium mb-2 text-[15px]">Quantum Information</h3>
                    <p className="text-gray-400 font-light text-[13px] leading-relaxed">Entanglement, entropy, and error correction.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Section 3: Curriculum */}
        <div className="section section-alt">
          <div className="section-content max-w-4xl mx-auto px-4">
            <section className="reveal grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="order-2 md:order-1">
                <h2 className="reveal text-3xl font-bold mb-6 tracking-tight text-white/95">Curriculum Structure</h2>
                <div className="h-[1px] w-16 bg-white/20 mb-8"></div>
                <div className="space-y-4">
                  {[
                    { year: 'Year 1', title: 'Mathematical Tools', desc: 'Linear algebra, differential equations, and classical mechanics.' },
                    { year: 'Year 2', title: 'The Quantum Realm', desc: 'Wave functions, operators, and statistical mechanics.' },
                    { year: 'Year 3', title: 'Specialized Electives', desc: 'Condensed matter, quantum field theory, and algorithms.' },
                    { year: 'Year 4', title: 'Independent Thesis', desc: 'Direct collaboration with faculty on open research problems.' }
                  ].map((item, i) => (
                    <div key={i} className="reveal p-5 border border-white/10 bg-neutral-900/50 backdrop-blur-sm rounded-xl transition-all duration-300 ease-out hover:border-white/30 hover:-translate-y-[5px]" style={{ transitionDelay: `${(i+1)*100}ms` }}>
                      <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase block mb-1">{item.year}</span>
                      <h3 className="text-white font-medium mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="order-1 md:order-2 flex justify-center items-center group/symbol parallax-visual animate-manifold">
                <svg className="w-64 h-64 opacity-[0.6] text-white/80 group-hover/symbol:opacity-100 group-hover/symbol:scale-105 transition-all duration-500 ease-out cursor-default" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
                  {[...Array(6)].map((_, i) => (
                    <ellipse key={i} cx="50" cy="50" rx={10 + i * 8} ry={5 + i * 4} opacity={0.8 - i * 0.1} strokeDasharray={i % 2 === 0 ? "" : "2 2"} />
                  ))}
                  <path d="M 50 10 V 90 M 10 50 H 90" strokeWidth="0.2" opacity="0.3" />
                  <circle cx="50" cy="50" r="1.5" fill="currentColor" />
                </svg>
              </div>
            </section>
          </div>
        </div>

        {/* Section 4: Research */}
        <div className="section">
          <div className="section-content max-w-4xl mx-auto px-4">
            <section className="reveal grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="order-1 md:order-1 flex justify-center items-center group/symbol parallax-visual animate-constellation">
                <svg className="w-72 h-72 opacity-[0.6] text-white/80 group-hover/symbol:opacity-100 group-hover/symbol:scale-105 transition-all duration-500 ease-out cursor-default" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <circle cx="50" cy="50" r="2" fill="currentColor" />
                  {[
                    [30, 25], [70, 20], [85, 45], [75, 75], [40, 85], [15, 60], [45, 35], [55, 65], [25, 45], [65, 40]
                  ].map(([x, y], i, arr) => (
                    <g key={i}>
                      <circle cx={x} cy={y} r="1.2" fill="currentColor" />
                      {arr.map(([x2, y2], j) => (
                        (i !== j && Math.sqrt(Math.pow(x-x2, 2) + Math.pow(y-y2, 2)) < 40) && (
                          <line key={j} x1={x} y1={y} x2={x2} y2={y2} strokeWidth="0.2" opacity="0.4" />
                        )
                      ))}
                    </g>
                  ))}
                </svg>
              </div>
              
              <div className="order-2 md:order-2">
                <h2 className="reveal text-3xl font-bold mb-6 tracking-tight text-white/95">Research & Exploration</h2>
                <div className="h-[1px] w-16 bg-white/20 mb-8"></div>
                <div className="space-y-6">
                  <p className="reveal text-gray-400 leading-relaxed font-light text-[17px]">
                    Research is not an elective; it is the core of the program. Starting from Year 3, students are paired with mentors to contribute to ongoing inquiries in quantum gravity, topological insulators, or computational complexity.
                  </p>
                  <p className="reveal text-gray-400 leading-relaxed font-light text-[17px]">
                    The goal is peer-reviewed publication and a mastery of the scientific method that transcends the boundaries of standard coursework.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Section 5: Why This Matters */}
        <div className="section section-alt">
          <div className="section-content max-w-4xl mx-auto px-4 text-center">
            <h2 className="reveal text-4xl font-bold mb-8 text-white tracking-tighter">Why This Matters</h2>
            <div className="h-[1px] w-20 bg-white/20 mx-auto mb-12"></div>
            <div className="space-y-8 max-w-3xl mx-auto">
              <p className="reveal text-2xl md:text-3xl text-white/95 leading-relaxed font-light tracking-tight">
                The intersection of computer science and theoretical physics is the frontier of modern technology.
              </p>
              <p className="reveal text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                Quantum prepares students for emerging fields by building a deep conceptual understanding of computation's absolute limits. This dual expertise grants an unprecedented advantage in the quantum era.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

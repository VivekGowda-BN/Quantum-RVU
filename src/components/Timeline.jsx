import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';
const Year1Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 md:w-20 md:h-20 text-white/70 hover:text-white transition-colors duration-300">
    <path d="M6 22V18H10V14H14V10H18V6H22V22Z" fill="currentColor" fillOpacity="0.1" />
  </svg>
);

const Year2Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 md:w-20 md:h-20 text-white/70 hover:text-white transition-colors duration-300">
    <path d="M2 6c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2" />
    <path d="M2 12c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2" />
    <path d="M2 18c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2" />
  </svg>
);

const Year3Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 md:w-20 md:h-20 text-white/70 hover:text-white transition-colors duration-300">
    <line x1="5" y1="5" x2="12" y2="3" />
    <line x1="12" y1="3" x2="19" y2="8" />
    <line x1="19" y1="8" x2="14" y2="14" />
    <line x1="14" y1="14" x2="7" y2="18" />
    <line x1="14" y1="14" x2="20" y2="20" />
    <circle cx="5" cy="5" r="1.5" />
    <circle cx="12" cy="3" r="1.5" />
    <circle cx="19" cy="8" r="1.5" />
    <circle cx="14" cy="14" r="1.5" />
    <circle cx="7" cy="18" r="1.5" />
    <circle cx="20" cy="20" r="1.5" />
  </svg>
);

const Year4Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 md:w-20 md:h-20 text-white/70 hover:text-white transition-colors duration-300">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
    <path d="M18 2H6v7c0 3.31 2.69 6 6 6s6-2.69 6-6V2Z"/>
  </svg>
);

const steps = [
  {
    year: 'Year 1',
    title: 'Mathematical Foundations & Classical Physics',
    description:
      'Build rigorous foundations in linear algebra, calculus, differential equations, and classical mechanics — the language of modern physics.',
    icon: Year1Icon,
  },
  {
    year: 'Year 2',
    title: 'Quantum Mechanics & Core Concepts',
    description:
      'Explore the postulates of quantum mechanics, wave functions, operators, and the mathematical formalism underpinning the quantum world.',
    icon: Year2Icon,
  },
  {
    year: 'Year 3',
    title: 'Advanced Topics & Quantum Information',
    description:
      'Dive into quantum computing, entanglement, quantum algorithms, and information theory at the intersection of physics and computer science.',
    icon: Year3Icon,
  },
  {
    year: 'Year 4',
    title: 'Research, Projects & Specialization',
    description:
      'Pursue independent research, contribute to open problems, and specialize in areas such as quantum hardware, field theory, or quantum cryptography.',
    icon: Year4Icon,
  },
];

export default function Timeline() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.timeline-heading', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.timeline-heading',
          start: 'top 85%',
          once: true,
        },
      });

      // Animate each item from its respective side with a stagger
      const items = sectionRef.current.querySelectorAll('.timeline-item');
      
      // Set initial state
      gsap.set(items, { opacity: 0 });

      ScrollTrigger.batch(items, {
        start: 'top 85%',
        once: true,
        onEnter: (batch) => {
          batch.forEach((item, i) => {
            const index = Array.from(items).indexOf(item);
            const isLeft = index % 2 === 0;
            
            // We start them offset
            gsap.set(item, { x: isLeft ? -50 : 50 });
            
            // And animate them to 0 with a stagger
            gsap.to(item, {
              opacity: 1,
              x: 0,
              duration: 0.7,
              ease: 'power2.out',
              delay: i * 0.15, // Stagger effect
            });
          });
        },
      });

      // Subtle parallax effect for timeline icons
      const icons = sectionRef.current.querySelectorAll('.timeline-icon-wrapper');
      icons.forEach((icon) => {
        gsap.fromTo(
          icon,
          { y: 15 },
          {
            y: -15,
            ease: 'none',
            scrollTrigger: {
              trigger: icon.closest('.timeline-item'),
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.5,
            },
          }
        );
      });

      // Active state for items
      items.forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleClass: 'is-active',
        });
      });

      // Scroll-driven progress line and dot calculation
      const setupTimeline = () => {
        const itemsList = sectionRef.current.querySelectorAll('.timeline-item');
        if (itemsList.length < 2) return;

        const firstItem = itemsList[0];
        const lastItem = itemsList[itemsList.length - 1];

        const firstDot = firstItem.querySelector('.z-10');
        const lastDot = lastItem.querySelector('.z-10');

        if (!firstDot || !lastDot) return;

        const getDotY = (item, dot) => item.offsetTop + dot.offsetTop;

        const startY = getDotY(firstItem, firstDot);
        const endY = getDotY(lastItem, lastDot);
        const distance = endY - startY;

        const trackLine = sectionRef.current.querySelector('.timeline-track');
        if (trackLine) {
          trackLine.style.top = `${startY}px`;
          trackLine.style.height = `${distance}px`;
        }

        const progressLine = sectionRef.current.querySelector('.timeline-progress-line');
        if (progressLine) {
          progressLine.style.top = `${startY}px`;
          progressLine.style.height = `${distance}px`;
        }

        const dotElem = sectionRef.current.querySelector('.timeline-progress-dot');

        ScrollTrigger.getById('progressTl')?.kill();

        const progressTl = gsap.timeline({
          scrollTrigger: {
            id: 'progressTl',
            trigger: '.timeline-items',
            start: 'top 80%',
            end: 'bottom 85%',
            scrub: 0.5,
          },
        });

        progressTl.fromTo(
          progressLine,
          { scaleY: 0 },
          { scaleY: 1, ease: 'none' },
          0
        );

        progressTl.fromTo(
          dotElem,
          { top: startY },
          { top: endY, ease: 'none' },
          0
        );
      };

      setupTimeline();
      window.addEventListener('resize', setupTimeline);

      return () => {
        window.removeEventListener('resize', setupTimeline);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 px-4 relative overflow-hidden">
      {/* Radial Gradient Background - Subtle to let particles through */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,20,28,0.7)_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.025] mix-blend-screen pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Heading */}
      <div className="timeline-heading max-w-4xl mx-auto text-center mb-20">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500 mb-4">
          Curriculum
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          Program Journey
        </h2>
        <div className="mt-6 mx-auto w-12 h-[1px] bg-white/20" />
      </div>

      {/* Alternating Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Center vertical line (background track) */}
        <div className="timeline-track absolute left-4 md:left-1/2 md:-translate-x-[0.5px] w-[1px] bg-white/10" />

        {/* Progress fill line (animated) */}
        <div className="timeline-progress-line absolute left-4 md:left-1/2 md:-translate-x-[0.5px] w-[1.5px] bg-gradient-to-b from-white to-gray-500 origin-top" style={{ transform: 'scaleY(0)' }} />

        {/* Glowing Progress Dot */}
        <div className="timeline-progress-dot absolute left-4 md:left-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_16px_6px_rgba(255,255,255,0.6)] -translate-x-[5.25px] md:-translate-x-[5.75px] -translate-y-1/2 z-10" />

        <div className="timeline-items flex flex-col gap-10 md:gap-12">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`timeline-item group relative flex flex-col md:flex-row items-start md:items-center w-full ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Connector Line (Desktop) */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[1px] w-6 lg:w-8 bg-white/10 group-[.is-active]:bg-white/40 transition-colors duration-500 ${isLeft ? 'right-1/2' : 'left-1/2'}`} />

                {/* Connector Line (Mobile) */}
                <div className="md:hidden absolute left-4 top-8 -translate-y-1/2 h-[1px] w-8 bg-white/10 group-[.is-active]:bg-white/40 transition-colors duration-500" />

                {/* Card */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 flex ${isLeft ? 'md:justify-end md:pr-6 lg:pr-8' : 'md:justify-start md:pl-6 lg:pl-8'
                  }`}>
                  <div className={`w-full max-w-md bg-white/5 group-[.is-active]:bg-white/10 backdrop-blur-md border border-white/5 group-[.is-active]:border-white/20 shadow-lg shadow-black/40 group-[.is-active]:shadow-black/70 rounded-xl p-7 transition-all duration-500 hover:scale-[1.02] ${isLeft ? 'md:text-right' : 'md:text-left'
                    }`}>
                    <span className="text-xs font-bold tracking-widest text-blue-400/40 group-[.is-active]:text-blue-400/90 uppercase block transition-colors duration-500">
                      {step.year}
                    </span>
                    <h3 className="text-xl font-semibold text-white/40 group-[.is-active]:text-white mt-3 mb-3 leading-snug transition-colors duration-500">
                      {step.title}
                    </h3>
                    <p className="text-[15px] text-gray-500 group-[.is-active]:text-gray-300 leading-relaxed font-light transition-colors duration-500">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-4 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-black group-[.is-active]:bg-white ring-2 ring-white/20 group-[.is-active]:ring-white/80 group-[.is-active]:shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all duration-500" />
                </div>

                {/* Icon (Desktop only) */}
                <div className={`hidden md:flex md:w-1/2 items-center ${isLeft ? 'justify-start pl-16 lg:pl-24' : 'justify-end pr-16 lg:pr-24'}`}>
                  <div className="timeline-icon-wrapper transition-all duration-500 hover:scale-110 opacity-30 group-[.is-active]:opacity-100">
                    <step.icon />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

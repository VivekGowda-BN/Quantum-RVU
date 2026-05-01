import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';

const steps = [
  {
    year: 'Year 1',
    title: 'Mathematical Foundations & Classical Physics',
    description:
      'Build rigorous foundations in linear algebra, calculus, differential equations, and classical mechanics — the language of modern physics.',
  },
  {
    year: 'Year 2',
    title: 'Quantum Mechanics & Core Concepts',
    description:
      'Explore the postulates of quantum mechanics, wave functions, operators, and the mathematical formalism underpinning the quantum world.',
  },
  {
    year: 'Year 3',
    title: 'Advanced Topics & Quantum Information',
    description:
      'Dive into quantum computing, entanglement, quantum algorithms, and information theory at the intersection of physics and computer science.',
  },
  {
    year: 'Year 4',
    title: 'Research, Projects & Specialization',
    description:
      'Pursue independent research, contribute to open problems, and specialize in areas such as quantum hardware, field theory, or quantum cryptography.',
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

      // Animate each item from its respective side
      const items = sectionRef.current.querySelectorAll('.timeline-item');
      items.forEach((item, i) => {
        const isLeft = i % 2 === 0;
        gsap.from(item, {
          opacity: 0,
          x: isLeft ? -50 : 50,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            once: true,
          },
        });
      });

      // Scroll-driven progress line
      gsap.fromTo(
        '.timeline-progress-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.timeline-items',
            start: 'top 80%',
            end: 'bottom center',
            scrub: 0.5,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 px-4">
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
        <div className="absolute left-4 md:left-1/2 md:-translate-x-[0.5px] top-0 bottom-0 w-[1px] bg-white/5" />

        {/* Progress fill line (animated) */}
        <div className="timeline-progress-line absolute left-4 md:left-1/2 md:-translate-x-[0.5px] top-0 bottom-0 w-[1.5px] bg-white origin-top" style={{ transform: 'scaleY(0)' }} />

        <div className="timeline-items flex flex-col gap-16">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Card */}
                <div className={`w-full md:w-[calc(50%-32px)] pl-12 md:pl-0 ${
                  isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                }`}>
                  <div className="bg-white/[0.03] border border-white/5 rounded-xl p-6 hover:bg-white/[0.05] transition-colors duration-300">
                    <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                      {step.year}
                    </span>
                    <h3 className="text-lg font-semibold text-white mt-2 mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-4 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2">
                  <div className="w-2.5 h-2.5 rounded-full bg-black ring-2 ring-white transition-all duration-300" />
                </div>

                {/* Empty spacer for the other side (desktop only) */}
                <div className="hidden md:block md:w-[calc(50%-32px)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

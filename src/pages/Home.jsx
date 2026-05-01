import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import StarBackground from '../components/StarBackground';
import Timeline from '../components/Timeline';

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade and slide up for the title
      gsap.fromTo('.hero-title', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' }
      );

      // Slight delay for the subtitle
      gsap.fromTo('.hero-subtitle', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: 'power4.out' }
      );

      // Animation for the button
      gsap.fromTo('.hero-button-container', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1.2, delay: 0.6, ease: 'power4.out' }
      );

      // Subtle glow pulse for the button
      gsap.to('.hero-button', {
        boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)',
        borderColor: 'rgba(255, 255, 255, 0.4)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative overflow-hidden">
      <StarBackground density={1} />
      
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center py-32 md:py-48 text-center px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center z-10">
          
          <h1 className="hero-title text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.2] pb-2 bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent opacity-0">
            Advanced Quantum & <br className="hidden md:block" /> Theoretical Physics Initiative
          </h1>
          
          <p className="hero-subtitle text-base md:text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed font-light opacity-0">
            A 4-year journey into theoretical physics, quantum computing, and research for highly motivated CS students.
          </p>
          
          <div className="hero-button-container opacity-0">
            <button className="hero-button px-8 py-3 bg-white text-black rounded-full font-medium shadow-md shadow-white/5 transition-all duration-300 hover:scale-105 hover:bg-gray-100 cursor-pointer border border-transparent">
              Explore Program
            </button>
          </div>

        </div>
      </div>

      {/* Timeline Section */}
      <Timeline />
    </div>
  );
}
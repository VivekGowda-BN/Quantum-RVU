import Timeline from '../components/Timeline';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center py-32 md:py-48 text-center px-4 animate-fade-in">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center z-10">
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.2] pb-2 bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Advanced Quantum & Theoretical Physics Initiative
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed font-light">
            A 4-year journey into theoretical physics, quantum computing, and research for highly motivated CS students.
          </p>
          
          <button className="px-6 py-3 bg-white text-black rounded-full font-medium shadow-md shadow-blue-500/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer">
            Explore Program
          </button>

        </div>
      </div>

      {/* Timeline Section */}
      <Timeline />
    </>
  );
}
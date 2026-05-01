import StarBackground from '../components/StarBackground';

export default function Resources() {
  const resources = [
    { title: 'Foundational Mathematics', desc: 'Core linear algebra and multivariable calculus for physics.', type: 'Math' },
    { title: 'Classical Mechanics', desc: 'Advanced Lagrangian and Hamiltonian dynamics notes.', type: 'Physics' },
    { title: 'Quantum Computing', desc: 'Introductory guides to Qiskit and quantum algorithms.', type: 'Quantum' },
  ];

  return (
    <div className="min-h-screen text-white pt-32 pb-24 px-4 font-sans relative overflow-hidden">
      <StarBackground density={1} />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter text-white">Resources</h1>
          <div className="h-[1px] w-16 bg-white/20 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Curated materials, research papers, and study guides for the Quantum Cohort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((res, i) => (
            <div key={i} className="p-8 border border-white/10 bg-neutral-900/50 backdrop-blur-sm rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400/60 uppercase block mb-3 group-hover:text-blue-400 transition-colors">
                {res.type}
              </span>
              <h3 className="text-xl font-semibold mb-3 text-white/90 group-hover:text-white transition-colors">{res.title}</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">{res.desc}</p>
              <a href="#" className="inline-flex items-center text-sm font-medium text-white/60 hover:text-white transition-colors">
                Access Library <span className="ml-2">&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

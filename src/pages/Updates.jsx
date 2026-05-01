import StarBackground from '../components/StarBackground';

export default function Updates() {
  const updates = [
    { 
      tag: 'Event', 
      title: 'Quantum Computing Workshop', 
      desc: 'An intensive session on superconducting qubits and error correction algorithms.', 
      date: 'May 12, 2026' 
    },
    { 
      tag: 'Research', 
      title: 'New Publication: Topological Insulators', 
      desc: 'Members of the cohort published a new paper on the simulation of topological phases.', 
      date: 'April 28, 2026' 
    },
  ];

  return (
    <div className="min-h-screen text-white pt-32 pb-24 px-4 font-sans relative overflow-hidden">
      <StarBackground density={1} />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter text-white text-left">Updates</h1>
          <div className="h-[1px] w-16 bg-white/20 mb-8"></div>
          <p className="text-lg text-gray-400 font-light text-left">
            Chronological log of events, research milestones, and cohort announcements.
          </p>
        </div>

        <div className="space-y-8">
          {updates.map((upd, i) => (
            <div key={i} className="group p-8 border border-white/10 bg-neutral-900/40 backdrop-blur-sm rounded-2xl shadow-xl flex flex-col md:flex-row gap-8 items-start transition-all duration-300 hover:bg-neutral-900/60">
              <div className="w-full md:w-40 h-40 bg-neutral-800 rounded-xl flex-shrink-0 overflow-hidden border border-white/5">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex-grow pt-2">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">
                    {upd.tag}
                  </span>
                  <span className="text-[10px] text-white/30 font-medium uppercase tracking-widest">
                    {upd.date}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white/90 group-hover:text-white transition-colors tracking-tight">
                  {upd.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed mb-4">
                  {upd.desc}
                </p>
                <button className="text-sm font-medium text-white/40 hover:text-white transition-colors">
                  Read Announcement &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

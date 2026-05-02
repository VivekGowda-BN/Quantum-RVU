import { useState } from 'react';
import StarBackground from '../components/StarBackground';
import resources from '../data/resources';

export default function Resources() {
  const categories = ["Textbooks", "Notes", "Practice Problems", "Lectures", "Research Papers"];
  
  // State for independent filtering per category
  const [categoryFilters, setCategoryFilters] = useState(
    categories.reduce((acc, cat) => ({ ...acc, [cat]: { year: "All", topic: "All" } }), {})
  );

  // Extract dynamic filter options for upload form (global)
  const yearsList = [...new Set(resources.map(res => res.year))].sort();
  const topicsList = [...new Set(resources.map(res => res.topic))].sort();

  const handleFilterChange = (category, type, value) => {
    setCategoryFilters(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [type]: value
      }
    }));
  };

  return (
    <div className="min-h-screen text-white pt-32 pb-24 px-4 font-sans relative overflow-hidden bg-transparent">
      {/* Background Star System */}
      <StarBackground density={1} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter text-white">Resources</h1>
          <div className="h-[1px] w-20 bg-white/20 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            A curated archive of academic materials, textbooks, and research documentation 
            supporting the pursuit of advanced physical sciences.
          </p>
        </div>

        {/* Resources Grouped by Category */}
        {categories.map((category) => {
          const baseResources = resources.filter(res => res.category === category);
          if (baseResources.length === 0) return null;

          const filters = categoryFilters[category];
          
          // Apply filters
          const filteredResources = baseResources.filter(res => {
            const matchYear = filters.year === "All" || res.year === filters.year;
            const matchTopic = filters.topic === "All" || res.topic === filters.topic;
            return matchYear && matchTopic;
          });

          // Extract unique years and topics from the BASE category resources for filter dropdowns
          const categoryYears = [...new Set(baseResources.map(res => res.year))].sort();
          const categoryTopics = [...new Set(baseResources.map(res => res.topic))].sort();

          return (
            <div key={category} className="mb-24 last:mb-0">
              {/* Category Header & Filters Beside Title */}
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                    {category}
                  </h2>
                  <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] font-bold text-white/30 uppercase tracking-widest">
                    {baseResources.length}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {/* Year Dropdown */}
                  <div className="relative group">
                    <select 
                      value={filters.year}
                      onChange={(e) => handleFilterChange(category, 'year', e.target.value)}
                      className="bg-white/5 text-white text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded border border-white/5 hover:border-white/20 outline-none transition-all cursor-pointer appearance-none pr-8"
                    >
                      <option value="All" className="bg-neutral-900 text-white">All Years</option>
                      {categoryYears.map(year => (
                        <option key={year} value={year} className="bg-neutral-900 text-white">{year}</option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Topic Dropdown */}
                  <div className="relative group">
                    <select 
                      value={filters.topic}
                      onChange={(e) => handleFilterChange(category, 'topic', e.target.value)}
                      className="bg-white/5 text-white text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded border border-white/5 hover:border-white/20 outline-none transition-all cursor-pointer appearance-none pr-8"
                    >
                      <option value="All" className="bg-neutral-900 text-white">All Topics</option>
                      {[
                        "Classical Mechanics", "Electromagnetism", "Quantum Mechanics", 
                        "Thermodynamics", "Optics", "Solid-State Physics",
                        "Calculus", "Algebra", "Differential Equations", "Geometry"
                      ].map(topic => (
                        <option key={topic} value={topic} className="bg-neutral-900 text-white">{topic}</option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {filteredResources.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                  {filteredResources.map((res) => (
                    <div 
                      key={res.id} 
                      className="group p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/10 flex flex-col h-full"
                    >
                      <div className="mb-4">
                        <span className={`text-[10px] font-bold uppercase tracking-[0.15em] ${
                          ["Calculus", "Algebra", "Differential Equations", "Geometry"].includes(res.topic) 
                          ? "text-zinc-500" 
                          : "text-gray-400"
                        }`}>
                          {res.topic} • {res.year}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                        {res.title}
                      </h3>
                      
                      <p className="text-sm text-gray-400 font-light leading-relaxed mb-6 flex-grow">
                        {res.description}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                        <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">{res.type}</span>
                        <button className="text-xs font-bold text-blue-400 hover:text-white transition-colors uppercase tracking-widest">
                          Download &rarr;
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-16 text-center border border-dashed border-white/10 rounded-2xl bg-white/2">
                  <p className="text-sm text-white/20 font-bold tracking-widest uppercase italic">No resources found</p>
                </div>
              )}
            </div>
          );
        })}

        {/* Upload Resource Section */}
        <div className="mt-32 pt-20 border-t border-white/10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Contribute to the Archive</h2>
              <p className="text-gray-400 font-light">Submit new academic materials to the cohort repository.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Title</label>
                    <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500/50 outline-none transition-all" placeholder="Resource Title" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Academic Year</label>
                    <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500/50 outline-none transition-all appearance-none text-white/80">
                      <option value="Year 1">Year 1</option>
                      <option value="Year 2">Year 2</option>
                      <option value="Year 3">Year 3</option>
                      <option value="Year 4">Year 4</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Category</label>
                    <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500/50 outline-none transition-all appearance-none text-white/80">
                      <option value="Textbooks">Textbooks</option>
                      <option value="Notes">Notes</option>
                      <option value="Practice Problems">Practice Problems</option>
                      <option value="Lectures">Lectures</option>
                      <option value="Research Papers">Research Papers</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Academic Topic</label>
                    <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500/50 outline-none transition-all appearance-none text-white/80">
                      <optgroup label="Physics" className="bg-neutral-900">
                        <option value="Classical Mechanics">Classical Mechanics</option>
                        <option value="Electromagnetism">Electromagnetism</option>
                        <option value="Quantum Mechanics">Quantum Mechanics</option>
                        <option value="Thermodynamics">Thermodynamics</option>
                        <option value="Optics">Optics</option>
                        <option value="Solid-State Physics">Solid-State Physics</option>
                      </optgroup>
                      <optgroup label="Mathematics" className="bg-neutral-900">
                        <option value="Calculus">Calculus</option>
                        <option value="Algebra">Algebra</option>
                        <option value="Differential Equations">Differential Equations</option>
                        <option value="Geometry">Geometry</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Description</label>
                  <textarea className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500/50 outline-none transition-all h-24 resize-none" placeholder="Brief summary of the resource..."></textarea>
                </div>
                <button type="submit" className="w-full bg-white text-black font-bold py-3.5 rounded-xl hover:bg-gray-200 transition-all active:scale-[0.98] text-sm uppercase tracking-widest">
                  Submit Resource
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

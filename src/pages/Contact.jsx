import StarBackground from '../components/StarBackground';

export default function Contact() {
  return (
    <div className="min-h-screen text-white pt-32 pb-24 px-4 font-sans relative overflow-hidden">
      <StarBackground density={1} />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter text-white">Contact</h1>
          <div className="h-[1px] w-16 bg-white/20 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-xl mx-auto font-light">
            Inquiries regarding the Quantum Cohort, research collaborations, or admissions.
          </p>
        </div>

        <div className="bg-neutral-900/40 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl border border-white/10">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-black/40 px-5 py-4 rounded-xl border border-white/5 focus:border-blue-500/50 focus:ring-0 outline-none transition-all duration-300 text-white placeholder:text-white/10" 
                  placeholder="Isaac Newton" 
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-black/40 px-5 py-4 rounded-xl border border-white/5 focus:border-blue-500/50 focus:ring-0 outline-none transition-all duration-300 text-white placeholder:text-white/10" 
                  placeholder="isaac@cambridge.edu" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Inquiry Details</label>
              <textarea 
                rows="5" 
                className="w-full bg-black/40 px-5 py-4 rounded-xl border border-white/5 focus:border-blue-500/50 focus:ring-0 outline-none transition-all duration-300 text-white placeholder:text-white/10 resize-none" 
                placeholder="Message regarding research or enrollment..."
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-white text-black font-bold py-4 px-6 rounded-xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-[0.99] active:scale-95 shadow-lg shadow-white/5">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

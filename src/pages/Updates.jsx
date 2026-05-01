export default function Updates() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Latest Updates</h1>
      <div className="space-y-6">
        {[1, 2].map((i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-32 h-32 bg-gray-100 rounded-lg flex-shrink-0"></div>
            <div>
              <span className="text-sm text-blue-600 font-bold tracking-wider uppercase">Event</span>
              <h3 className="text-2xl font-bold mt-1 mb-2">Upcoming Workshop {i}</h3>
              <p className="text-gray-600">Join us for an exciting session where we dive deep into modern web technologies and best practices.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Resources() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">Resource Title {i}</h3>
            <p className="text-gray-600 mb-4">Helpful material to guide you through your learning journey.</p>
            <a href="#" className="text-blue-600 font-medium hover:underline">Learn more &rarr;</a>
          </div>
        ))}
      </div>
    </div>
  );
}

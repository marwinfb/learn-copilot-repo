function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            React + Vite + Tailwind CSS
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            A modern, lightning-fast development setup with Tailwind CSS v4 for styling.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
            <button className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

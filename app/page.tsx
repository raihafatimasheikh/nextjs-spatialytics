export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          Welcome to <span className="text-blue-600">Spatialytics</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          We provide geospatial insights, AI-driven analytics, and air quality
          intelligence to help build a sustainable future.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Get in Touch
        </a>
      </section>

      {/* Services Section */}
      <section className="max-w-5xl w-full py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">🌍 Geospatial Data</h3>
            <p className="text-gray-600">
              Spatial data analysis for cities, climate, and sustainability.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">📊 Air Quality Modeling</h3>
            <p className="text-gray-600">
              Forecasting and monitoring NO₂, SO₂, ozone, and aerosols.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">🤖 AI Insights</h3>
            <p className="text-gray-600">
              Machine learning to reveal hidden patterns in environmental data.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

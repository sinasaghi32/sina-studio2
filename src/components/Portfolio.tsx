export default function Portfolio() {
    return (
      <section id="portfolio" className="mt-28 max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-6">What We Deliver</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-3">Conversion-Focused Design</h3>
            <p className="text-gray-300">Every button, color, and layout decision is made to drive results and user action.</p>
          </div>
          <div className="bg-white/5 p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-3">Modern Tech Stack</h3>
            <p className="text-gray-300">We use the same tools as top Silicon Valley startups — React, Tailwind, Framer Motion.</p>
          </div>
          <div className="bg-white/5 p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-3">Fast & Secure Hosting</h3>
            <p className="text-gray-300">Deployed on the fastest global CDN — with top-tier security and zero maintenance needed.</p>
          </div>
        </div>
      </section>
    );
  }
  
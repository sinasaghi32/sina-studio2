export default function Services() {
    return (
      <section id="services" className="mt-28 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center px-4">
        <img
          src="/hero-mockup.png"
          alt="SINA Studio Mockup"
          className="w-full rounded-2xl shadow-2xl border border-white/10"
        />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Businesses Choose SINA Studio</h2>
          <ul className="space-y-4 text-gray-300 text-lg">
            <li>🚀 Blazing fast performance on all devices</li>
            <li>🎯 Built with marketing psychology for conversions</li>
            <li>📱 Pixel-perfect responsive design</li>
            <li>🧠 Smart features: SEO, analytics, lead capture</li>
            <li>🎨 Tailored designs that reflect your brand identity</li>
          </ul>
        </div>
      </section>
    );
  }
  
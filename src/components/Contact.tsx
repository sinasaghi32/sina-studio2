import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mt-28 bg-white/5 backdrop-blur-md rounded-3xl px-8 py-16 max-w-4xl mx-auto text-center shadow-inner"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Let’s Build Your Success</h2>
      <p className="text-gray-300 mb-8 text-lg">Get in touch today and let’s make your digital presence unforgettable.</p>
      <Button className="text-lg px-10 py-4 rounded-2xl shadow-xl hover:scale-105 transition-transform">
        Contact SINA Studio
      </Button>
    </section>
  );
}

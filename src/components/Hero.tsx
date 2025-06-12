import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <header className="max-w-7xl mx-auto text-center pt-40 px-4">
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Premium Websites That Win Clients
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        SINA Studio delivers lightning-fast, conversion-optimized websites that elevate your business and captivate your audience.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Button className="text-lg px-8 py-4 rounded-2xl shadow-xl hover:scale-105 transition-transform">
          Get Your Free Website Audit
        </Button>
      </motion.div>
    </header>
  );
}

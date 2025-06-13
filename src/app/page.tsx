"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as random from 'maath/random';
import { Button } from "@/components/ui/button";
import { 
  FaRocket, FaMobileAlt, FaPaintBrush, FaStar, FaShieldAlt, 
  FaCode, FaServer, FaCloud, FaChartLine, FaPalette, FaLayerGroup,
  FaLaptopCode, FaGlobeAmericas, FaLightbulb, FaMagic
} from 'react-icons/fa';
import { Group } from 'three'; // Add this import
const services = [
  { icon: <FaCode className="text-2xl" />, title: "Custom Web Development", description: "Tailored solutions built with modern stacks" },
  { icon: <FaServer className="text-2xl" />, title: "Backend Architecture", description: "Scalable server infrastructure" },
  { icon: <FaCloud className="text-2xl" />, title: "Cloud Deployment", description: "Optimized cloud solutions" },
  { icon: <FaChartLine className="text-2xl" />, title: "Performance Optimization", description: "Lightning-fast user experiences" },
  { icon: <FaPalette className="text-2xl" />, title: "UI/UX Design", description: "User-centered design systems" },
  { icon: <FaLayerGroup className="text-2xl" />, title: "Fullstack Solutions", description: "End-to-end development" },
];

const testimonials = [
  { name: "Alex Johnson", role: "CTO, TechStart", content: "SINA Studio delivered beyond our expectations. Their technical expertise is unmatched." },
  { name: "Maria Rodriguez", role: "Marketing Director, BrandCo", content: "Our conversion rates increased by 150% after their redesign." },
  { name: "David Kim", role: "Founder, StartupX", content: "The performance optimizations saved us thousands in infrastructure costs." },
  { name: "Sarah Williams", role: "Product Lead, FinTech Inc", content: "Their attention to detail and technical excellence is remarkable." },
];

const StarBackground = (props: any) => {
  const ref = useRef<Group>(null); // Explicitly type the ref for Three.js Group
  const [sphere] = useState(() => random.inSphere(new Float32Array(2000 * 3), { radius: 1.5 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial 
          transparent 
          color="#6366f1" 
          size={0.005} 
          sizeAttenuation={true} 
          depthWrite={false} 
        />
      </Points>
    </group>
  );
}; // Ensure this closing bracket is present

const AnimatedText = ({ text, delay = 0 }) => {
  const shouldReduceMotion = useReducedMotion();
  const letters = Array.from(text);

  return (
    <motion.div className="flex flex-wrap justify-center">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.03,
            type: "spring",
            stiffness: 120,
          }}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-2xl border border-white/10 shadow-xl"
      whileHover={shouldReduceMotion ? {} : { 
        y: -15,
        boxShadow: "0 20px 25px -5px rgba(79, 70, 229, 0.3), 0 10px 10px -5px rgba(79, 70, 229, 0.1)",
        transition: { duration: 0.3 }
      }}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ willChange: 'transform' }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="p-3 bg-indigo-900/30 rounded-full mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

const TestimonialCard = ({ name, role, content, active, onClick }) => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      className={`cursor-pointer p-6 rounded-2xl border ${active ? 'border-indigo-500 bg-indigo-900/20' : 'border-white/10 bg-[#1e293b]/50'}`}
      onClick={onClick}
      whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      style={{ willChange: 'transform' }}
    >
      <div className="flex items-start mb-4">
        <div className="bg-indigo-500 w-10 h-10 rounded-full flex items-center justify-center">
          <span className="font-bold">{name.charAt(0)}</span>
        </div>
        <div className="ml-4">
          <h4 className="font-bold">{name}</h4>
          <p className="text-indigo-300 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-300">{content}</p>
    </motion.div>
  );
};

const FloatingElements = () => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <>
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-indigo-500 blur-xl"
        animate={shouldReduceMotion ? {} : {
          y: [0, -20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ willChange: 'transform' }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-purple-500 blur-xl"
        animate={shouldReduceMotion ? {} : {
          y: [0, 30, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        style={{ willChange: 'transform' }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-5 h-5 rounded-full bg-cyan-500 blur-xl"
        animate={shouldReduceMotion ? {} : {
          y: [0, -30, 0],
          scale: [1, 1.4, 1]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  
  useEffect(() => {
    // Detect touch devices
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    
    // Cursor movement handler with debouncing
    let timeout;
    const mouseMove = e => {
      clearTimeout(timeout);
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      // Clear cursor position when not moving
      timeout = setTimeout(() => {
        setCursorVariant("hidden");
      }, 1000);
    };
    
    if (!isTouchDevice) {
      window.addEventListener('mousemove', mouseMove);
    }
    
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      clearTimeout(timeout);
    };
  }, [isTouchDevice]);
  
  const variants = {
    default: {
      x: cursorPosition.x - 16,
      y: cursorPosition.y - 16,
      scale: 1,
      opacity: 1
    },
    hover: {
      x: cursorPosition.x - 24,
      y: cursorPosition.y - 24,
      scale: 2,
      backgroundColor: "#6366f1",
      mixBlendMode: "difference",
      opacity: 1
    },
    click: {
      x: cursorPosition.x - 16,
      y: cursorPosition.y - 16,
      scale: 0.8,
      backgroundColor: "#8b5cf6",
      opacity: 1
    },
    hidden: {
      scale: 0,
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6 py-12 font-sans overflow-hidden">
      {/* Advanced 3D Star Background */}
      <div className="absolute inset-0 -z-50 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <StarBackground />
          <OrbitControls 
            autoRotate 
            autoRotateSpeed={0.5} 
            enableZoom={false} 
            enablePan={false}
          />
        </Canvas>
      </div>
      
      {/* Interactive Gradient Elements */}
      <FloatingElements />
      
      {/* Custom Cursor */}
      {!isTouchDevice && (
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm pointer-events-none z-[9999]"
          variants={variants}
          animate={cursorVariant}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
      )}
      
      {/* Dynamic Grid Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] -z-10" />

      {/* Navbar */}
      <motion.nav
        className="w-full fixed top-0 left-0 bg-[#0f172a]/90 backdrop-blur-xl z-50 shadow-xl"
        initial={shouldReduceMotion ? { y: 0 } : { y: -100 }}
        animate={shouldReduceMotion ? {} : { y: 0 }}
        transition={{ type: "spring", stiffness: 60 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            className="flex items-center"
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-lg mr-3 flex items-center justify-center">
              <FaMagic className="text-sm" />
            </div>
            <h1 className="text-2xl font-black tracking-widest">
              SINA Studio
            </h1>
          </motion.div>
          <div className="space-x-6 text-sm md:text-base hidden md:flex">
            {["services", "portfolio", "testimonials", "contact"].map((id) => (
              <motion.a
                key={id}
                href={`#${id}`}
                className="hover:text-indigo-300 transition-colors relative"
                whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                onMouseEnter={() => !isTouchDevice && setCursorVariant("hover")}
                onMouseLeave={() => !isTouchDevice && setCursorVariant("default")}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
                <motion.div 
                  className="absolute bottom-0 left-0 w-0 h-px bg-indigo-400"
                  whileHover={shouldReduceMotion ? {} : { width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>
          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            onMouseEnter={() => !isTouchDevice && setCursorVariant("hover")}
            onMouseLeave={() => !isTouchDevice && setCursorVariant("default")}
          >
            <Button className="rounded-full bg-indigo-600 hover:bg-indigo-700 px-6">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto text-center pt-40 relative z-10">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -30 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            <AnimatedText text="Premium Websites That Win Clients" delay={0.2} />
          </h1>
        </motion.div>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={shouldReduceMotion ? {} : { opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          SINA Studio delivers lightning-fast, conversion-optimized websites that elevate your business and captivate your audience.
        </motion.p>
        <motion.div
          initial={shouldReduceMotion ? { scale: 1 } : { scale: 0.8, opacity: 0 }}
          animate={shouldReduceMotion ? {} : { scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          onMouseEnter={() => !isTouchDevice && setCursorVariant("hover")}
          onMouseLeave={() => !isTouchDevice && setCursorVariant("default")}
        >
          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            <Button 
              className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/20"
            >
              <FaRocket className="mr-2" /> Get Your Free Website Audit
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Hero Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          {[
            { value: "240+", label: "Projects" },
            { value: "99.9%", label: "Uptime" },
            { value: "3.2s", label: "Avg. Load" },
            { value: "78%", label: "ROI Increase" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              whileHover={shouldReduceMotion ? {} : { y: -5 }}
              style={{ willChange: 'transform' }}
            >
              <div className="text-3xl font-bold text-indigo-300">{stat.value}</div>
              <div className="text-gray-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </header>

      {/* Services Section */}
      <section id="services" className="mt-48 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-900/50 text-indigo-300 mb-4">
            <FaCode className="mr-2" /> What We Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Premium Digital Solutions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            We craft digital experiences that drive results and leave lasting impressions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard 
              key={i}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="mt-48 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -50 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="bg-gradient-to-tr from-indigo-600 to-purple-600 w-64 h-64 rounded-full absolute top-1/3 left-1/3 blur-3xl opacity-30" />
              <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8 rounded-3xl border border-white/10 shadow-2xl relative">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">Advanced Tech Stack</h3>
                  <FaLaptopCode className="text-indigo-400 text-3xl" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "React/Next.js", color: "bg-blue-500" },
                    { name: "TypeScript", color: "bg-blue-600" },
                    { name: "Node.js", color: "bg-green-500" },
                    { name: "GraphQL", color: "bg-pink-500" },
                    { name: "Tailwind CSS", color: "bg-cyan-500" },
                    { name: "Three.js", color: "bg-gray-500" },
                    { name: "PostgreSQL", color: "bg-blue-400" },
                    { name: "AWS", color: "bg-orange-500" },
                  ].map((tech, i) => (
                    <div key={i} className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${tech.color} mr-2`}></div>
                      <span className="text-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 50 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-900/50 text-indigo-300 mb-4">
              <FaGlobeAmericas className="mr-2" /> Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Strategic Development Approach</h2>
            <p className="text-gray-400 mb-8">
              Our proven methodology ensures we deliver exceptional results on time and within budget.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <FaLightbulb className="text-indigo-400" />, title: "Discovery & Strategy", text: "Deep dive into your business goals" },
                { icon: <FaPalette className="text-indigo-400" />, title: "Design & Prototyping", text: "Creating intuitive user experiences" },
                { icon: <FaCode className="text-indigo-400" />, title: "Development", text: "Agile, test-driven development" },
                { icon: <FaRocket className="text-indigo-400" />, title: "Launch & Optimize", text: "Performance monitoring and iteration" },
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  className="flex items-start"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <div className="p-3 bg-indigo-900/30 rounded-xl mr-4">{step.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg">{step.title}</h3>
                    <p className="text-gray-400">{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="mt-48 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-900/50 text-indigo-300 mb-4">
            <FaStar className="mr-2" /> Client Success
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Trusted by Industry Leaders</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          Don&#39;t just take our word for it - hear what our clients have to say.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard 
              key={i}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              active={activeTestimonial === i}
              onClick={() => setActiveTestimonial(i)}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-48 max-w-4xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-3xl border border-white/10 shadow-2xl px-8 py-16 text-center relative overflow-hidden"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-20" />
          
          <motion.div
            className="relative z-10"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Let's create something extraordinary together. Schedule a free consultation with our experts today.
            </p>
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              onMouseEnter={() => !isTouchDevice && setCursorVariant("hover")}
              onMouseLeave={() => !isTouchDevice && setCursorVariant("default")}
            >
              <Button className="text-lg px-10 py-6 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/30">
                Contact SINA Studio
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <footer className="mt-48 py-16 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg mr-3 flex items-center justify-center">
                <FaMagic className="text-sm" />
              </div>
              <h2 className="text-2xl font-black tracking-widest">
                SINA Studio
              </h2>
            </div>
            
            <div className="flex space-x-8">
              {["Services", "Work", "About", "Blog", "Contact"].map((item, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="text-gray-400 hover:text-indigo-300 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-10">
            <p className="text-gray-500">
              © {new Date().getFullYear()} SINA Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
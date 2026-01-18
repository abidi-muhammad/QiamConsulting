import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-950 group cursor-none">
      {/* Dynamic Color Background that moves with cursor */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-white dark:from-blue-950/20 dark:via-cyan-950/20 dark:to-gray-950" />
        
        {/* Moving gradient overlays */}
        <div 
          className="absolute inset-0 transition-all duration-700 ease-out"
          style={{
            background: `
              radial-gradient(
                800px circle at ${mousePosition.x}% ${mousePosition.y}%,
                rgba(59, 130, 246, 0.2),
                transparent 40%
              ),
              radial-gradient(
                600px circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%,
                rgba(6, 182, 212, 0.15),
                transparent 40%
              )
            `
          }}
        />
        
        {/* Additional moving colors for dark mode */}
        <div 
          className="absolute inset-0 transition-all duration-1000 ease-out dark:block hidden"
          style={{
            background: `
              radial-gradient(
                500px circle at ${mousePosition.x + 30}% ${mousePosition.y - 20}%,
                rgba(139, 92, 246, 0.1),
                transparent 50%
              ),
              radial-gradient(
                400px circle at ${mousePosition.x - 20}% ${mousePosition.y + 30}%,
                rgba(236, 72, 153, 0.08),
                transparent 50%
              )
            `
          }}
        />

        {/* Animated grid with dynamic opacity */}
        <div 
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
            maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
            opacity: 0.5 + (mousePosition.y / 200)
          }}
        />
        
        {/* Gradient orbs that move with cursor */}
        <div 
          className="absolute top-0 left-1/4 w-[500px] h-[500px] transition-all duration-1000 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            filter: 'blur(100px)',
            transform: `translate(calc(-50% + ${mousePosition.x * 0.2}px), calc(-50% + ${mousePosition.y * 0.1}px))`,
            opacity: 0.5
          }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] transition-all duration-1200 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)',
            filter: 'blur(100px)',
            transform: `translate(calc(50% - ${mousePosition.x * 0.15}px), calc(50% - ${mousePosition.y * 0.2}px))`,
            opacity: 0.5
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-24 sm:py-32">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge with dynamic glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 border border-blue-200/50 dark:border-blue-800/50 mb-8 backdrop-blur-sm overflow-hidden"
          >
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `
                  radial-gradient(
                    200px circle at ${mousePosition.x}% ${mousePosition.y}%,
                    rgba(59, 130, 246, 0.2),
                    transparent 50%
                  )
                `
              }}
            />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="relative text-sm font-medium text-gray-900 dark:text-white">
              Trusted by 50+ enterprises worldwide
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6"
          >
            <span 
              className="block text-gray-900 dark:text-white transition-all duration-300"
              style={{
                textShadow: `
                  0 0 20px rgba(59, 130, 246, ${mousePosition.y / 1000}),
                  0 0 40px rgba(6, 182, 212, ${mousePosition.x / 1000})
                `
              }}
            >
              Transform Your
            </span>
            <span 
              className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient mt-2 transition-all duration-500"
              style={{
                backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
                filter: `brightness(${1 + (mousePosition.y / 200)})`
              }}
            >
              Cloud Infrastructure
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Enterprise-grade cloud solutions with{' '}
            <span 
              className="text-gray-900 dark:text-white font-semibold"
            >
              99.99% uptime
            </span>
            , advanced security, and{' '}
            <span 
              className="text-gray-900 dark:text-white font-semibold"
            >
              40% cost savings
            </span>
            .
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div 
                className="absolute -inset-1 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `
                    radial-gradient(
                      200px circle at ${mousePosition.x}% ${mousePosition.y}%,
                      rgba(59, 130, 246, 0.3),
                      transparent 50%
                    )
                  `
                }}
              />
              <Button 
                size="lg"
                className="group relative h-14 px-8 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-2xl text-base font-semibold shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 transition-all overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div 
                className="absolute -inset-1 rounded-2xl opacity-0 hover:opacity-50 transition-opacity duration-500"
                style={{
                  background: `
                    radial-gradient(
                      150px circle at ${mousePosition.x}% ${mousePosition.y}%,
                      rgba(156, 163, 175, 0.2),
                      transparent 50%
                    )
                  `
                }}
              />
              <Button 
                size="lg"
                variant="outline"
                className="group relative h-14 px-8 border-2 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 rounded-2xl text-base font-semibold backdrop-blur-sm bg-white/50 dark:bg-gray-900/50"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-400"
          >
            {['No credit card required', 'Free 14-day trial', 'Cancel anytime'].map((text, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, x: 5 }}
                className="flex items-center gap-2 relative"
              >
                <div 
                  className="absolute -inset-2 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `
                      radial-gradient(
                        100px circle at ${mousePosition.x}% ${mousePosition.y}%,
                        rgba(34, 197, 94, 0.1),
                        transparent 50%
                      )
                    `
                  }}
                />
                <CheckCircle2 className="w-5 h-5 text-green-500 relative z-10" />
                <span className="relative z-10">{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating cards - Modern dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative max-w-6xl mx-auto mt-20"
        >
          {/* Main dashboard mockup */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 backdrop-blur-sm">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>
            
            {/* Dashboard content */}
            <div className="aspect-video bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8">
              <div className="grid grid-cols-3 gap-4 h-full">
                {/* Stats cards */}
                {[
                  { label: 'Active Servers', value: '847', trend: '+12%', color: 'from-blue-500 to-cyan-500' },
                  { label: 'Response Time', value: '23ms', trend: '-8%', color: 'from-green-500 to-emerald-500' },
                  { label: 'Uptime', value: '99.99%', trend: '+0.01%', color: 'from-purple-500 to-pink-500' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg backdrop-blur-sm overflow-hidden group"
                  >
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `
                          radial-gradient(
                            200px circle at ${mousePosition.x}% ${mousePosition.y}%,
                            rgba(var(--${i === 0 ? 'primary' : i === 1 ? 'accent' : 'secondary'}-rgb), 0.1),
                            transparent 50%
                          )
                        `
                      }}
                    />
                    <div className="relative z-10">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{stat.label}</div>
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                      <div className={`text-sm font-medium bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.trend}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating accent cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-8 top-1/4 hidden lg:block"
          >
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-200 dark:border-gray-700 w-64 backdrop-blur-sm overflow-hidden group">
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `
                    radial-gradient(
                      150px circle at ${mousePosition.x}% ${mousePosition.y}%,
                      rgba(34, 197, 94, 0.1),
                      transparent 50%
                    )
                  `
                }}
              />
              <div className="relative z-10 flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">Deployment Success</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">2 minutes ago</div>
                </div>
              </div>
              <div className="relative z-10 text-sm text-gray-600 dark:text-gray-400">
                Production environment updated successfully
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-8 top-1/3 hidden lg:block"
          >
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-200 dark:border-gray-700 w-64 backdrop-blur-sm overflow-hidden group">
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `
                    radial-gradient(
                      150px circle at ${mousePosition.x}% ${mousePosition.y}%,
                      rgba(139, 92, 246, 0.1),
                      transparent 50%
                    )
                  `
                }}
              />
              <div className="relative z-10">
                <div className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Performance</div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600 dark:text-gray-400">CPU Usage</span>
                      <span className="text-gray-900 dark:text-white font-medium">23%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" style={{ width: '23%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600 dark:text-gray-400">Memory</span>
                      <span className="text-gray-900 dark:text-white font-medium">67%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: '67%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
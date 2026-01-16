import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { X, ArrowRight, Home, Briefcase, Users, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { name: 'Home', path: '/', icon: Home, description: 'Back to homepage' },
  { name: 'Services', path: '/services', icon: Briefcase, description: 'Our cloud solutions' },
  { name: 'About', path: '/about', icon: Users, description: 'Our story & team' },
  { name: 'Contact', path: '/contact', icon: Mail, description: 'Get in touch' },
];

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100]"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-[420px] bg-white dark:bg-gray-950 z-[101] shadow-2xl overflow-y-auto"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-cyan-50/50 dark:from-blue-950/50 dark:via-transparent dark:to-cyan-950/50 pointer-events-none" />
            
            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">Menu</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Navigate your journey</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                >
                  <X className="w-6 h-6 text-gray-900 dark:text-white group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-6 space-y-3">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        onClick={onClose}
                        className="block group"
                      >
                        <motion.div
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          className={`relative p-5 rounded-2xl transition-all ${
                            isActive
                              ? 'bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/25'
                              : 'bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800'
                          }`}
                        >
                          {/* Active indicator */}
                          {isActive && (
                            <motion.div
                              layoutId="activeTab"
                              className="absolute inset-0 rounded-2xl ring-2 ring-blue-400 ring-offset-2 ring-offset-white dark:ring-offset-gray-950"
                              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            />
                          )}

                          <div className="relative flex items-center gap-4">
                            {/* Icon */}
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                              isActive 
                                ? 'bg-white/20 shadow-lg' 
                                : 'bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:scale-110'
                            }`}>
                              <Icon className={`w-6 h-6 ${
                                isActive ? 'text-white' : 'text-white'
                              }`} />
                            </div>

                            {/* Text */}
                            <div className="flex-1">
                              <h3 className={`text-base font-semibold mb-0.5 ${
                                isActive 
                                  ? 'text-white' 
                                  : 'text-gray-900 dark:text-white'
                              }`}>
                                {item.name}
                              </h3>
                              <p className={`text-sm ${
                                isActive 
                                  ? 'text-white/80' 
                                  : 'text-gray-600 dark:text-gray-400'
                              }`}>
                                {item.description}
                              </p>
                            </div>

                            {/* Arrow */}
                            <ArrowRight className={`w-5 h-5 transition-all ${
                              isActive 
                                ? 'text-white opacity-100' 
                                : 'text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1'
                            }`} />
                          </div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Footer CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 border-t border-gray-200 dark:border-gray-800 space-y-4"
              >
                {/* Info card */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 rounded-2xl p-5 border border-blue-200 dark:border-blue-800">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Ready to get started?
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Transform your cloud infrastructure with expert solutions.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl shadow-lg">
                    Get Started Free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                {/* Quick links */}
                <div className="flex gap-2 text-sm">
                  <a href="#" className="flex-1 text-center py-2 px-4 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    Help Center
                  </a>
                  <a href="#" className="flex-1 text-center py-2 px-4 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    Support
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
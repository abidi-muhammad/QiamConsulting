import { Link } from "react-router-dom"
// resources/js/Layouts/AppLayout.jsx
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { type ReactNode } from 'react';
import Breadcrumb, { BreadcrumbItem } from './breadcrumb';
import ThemeToggle from './theme-toggle';
import { MobileMenu } from './mobile-menu';
import BookConsultation from '@/components/custom/book-consultation';


interface AppLayoutProps {
  children?: ReactNode;
  breadcrumb_status?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  breadcrumb_page_title?: string;
}
const AppLayout = ({ children, breadcrumb_status = true, breadcrumb_page_title, breadcrumbs = [] }: AppLayoutProps) => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2L2 7v10l10 5l10-5V7L12 2m0 2.8L20 9v6l-8 4l-8-4V9l8-4.2M12 12l-3.2 1.8l.6 1.2L12 13l2.6 1.5l.6-1.2L12 12z" />
              </svg>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Qiamconsulting</span>
            </Link>
          </motion.div>

          {/* Navigation */}
          <NavigationMenu>
            <NavigationMenuList className="hidden lg:flex gap-2">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuLink asChild>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to={link.href}
                        className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 rounded-md transition-colors"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button (will need separate component for mobile menu) */}
          <MobileMenu navLinks={navLinks}/>

          {/* CTA Button */}
          <div className='hidden md:flex flex-row-reverse items-center gap-4'>
            <ThemeToggle />

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookConsultation />
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}

      {breadcrumb_status && <Breadcrumb breadcrumb_page_title={breadcrumb_page_title} items={breadcrumbs} />}
      <main className="flex-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
      >
        <div className="max-w-7xl mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2L2 7v10l10 5l10-5V7L12 2m0 2.8L20 9v6l-8 4l-8-4V9l8-4.2M12 12l-3.2 1.8l.6 1.2L12 13l2.6 1.5l.6-1.2L12 12z" />
                </svg>
                <span className="text-xl font-bold text-gray-900 dark:text-white">Qiamconsulting</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Expert cloud architecture and security consultation services.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contact</h3>
              <address className="not-italic text-gray-600 dark:text-gray-300 space-y-2">
                <p>Canada</p>
                <p>Email: qaimconsulting@gmail.com</p>
                <p>Phone: 00000</p>
              </address>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Connect</h3>
              <div className="flex gap-4">
                {['linkedin', 'twitter', 'github'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="sr-only">{social}</span>
                    <svg className="w-5 h-5 text-gray-700 dark:text-gray-300">
                      {/* Social icons would go here */}
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Qiamconsulting. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default AppLayout;

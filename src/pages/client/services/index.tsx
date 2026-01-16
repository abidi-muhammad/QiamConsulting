import { motion, useInView } from 'framer-motion';
import { Cloud, Shield, Zap, Database, Lock, TrendingUp, Cpu, Network, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import Layout from '../layout';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Cloud,
    title: 'Cloud Migration',
    description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum efficiency.',
    highlights: ['AWS/Azure/GCP', 'Zero Downtime', 'Data Security', '24/7 Support'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Security Audit',
    description: 'Comprehensive security assessment and implementation of industry best practices.',
    highlights: ['Penetration Testing', 'Compliance', 'Risk Assessment', 'Best Practices'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Boost your application performance with cutting-edge optimization techniques.',
    highlights: ['Load Balancing', 'Caching', 'CDN Setup', 'Monitoring'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Scalable database solutions with automated backups and disaster recovery.',
    highlights: ['Database Design', 'Backups', 'Disaster Recovery', 'Scaling'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Lock,
    title: 'Compliance & Governance',
    description: 'Ensure regulatory compliance with industry-standard security frameworks.',
    highlights: ['GDPR', 'HIPAA', 'SOC 2', 'ISO 27001'],
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: TrendingUp,
    title: 'Cost Optimization',
    description: 'Reduce cloud spending by up to 40% through intelligent resource allocation.',
    highlights: ['Cost Analysis', 'Right-sizing', 'Reserved Instances', 'Monitoring'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Cpu,
    title: 'Infrastructure as Code',
    description: 'Automate your infrastructure deployment with modern DevOps tools.',
    highlights: ['Terraform', 'Ansible', 'CI/CD', 'Automation'],
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Network,
    title: 'Network Architecture',
    description: 'Design and implement robust, scalable network architectures.',
    highlights: ['VPC Design', 'Load Balancing', 'CDN', 'DNS Management'],
    color: 'from-violet-500 to-purple-500',
  },
];

const ServicesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),rgba(255,255,255,0)_50%)] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.2),rgba(0,0,0,0)_50%)]" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 border border-blue-200 dark:border-blue-800">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Our Services</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="block text-gray-900 dark:text-white">Comprehensive</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Cloud Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From migration to optimization, we provide end-to-end cloud services tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 dark:from-blue-500/5 dark:to-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 dark:from-purple-500/5 dark:to-pink-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10" ref={ref}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                    {/* Hover gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Icon Container */}
                    <div className={`relative inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <div className="relative space-y-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {service.highlights.map((highlight, i) => (
                          <span 
                            key={i}
                            className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* Learn More Link */}
                      <div className="pt-4">
                        <button className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:gap-3 transition-all">
                          <span>Learn more</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Card Number */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-blue-50 max-w-2xl mx-auto">
              Let's discuss how we can help scale your business with modern cloud solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="px-8 py-6 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 text-lg">
                Schedule Free Consultation
              </Button>
              <Button className="px-8 py-6 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all text-lg">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
import { motion, useInView } from 'framer-motion';
import { Cloud, Shield, Zap, Database, Lock, TrendingUp, Cpu, Network } from 'lucide-react';
import { useRef } from 'react';

const services = [
  {
    icon: Cloud,
    title: 'Cloud Migration',
    description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum efficiency.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    icon: Shield,
    title: 'Security Audit',
    description: 'Comprehensive security assessment and implementation of best practices for your infrastructure.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Boost your application performance with cutting-edge optimization techniques and monitoring.',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Scalable database solutions with automated backups and disaster recovery planning.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20'
  },
  {
    icon: Lock,
    title: 'Compliance & Governance',
    description: 'Ensure regulatory compliance with industry-standard security frameworks and policies.',
    color: 'from-red-500 to-rose-500',
    bgColor: 'bg-red-50 dark:bg-red-900/20'
  },
  {
    icon: TrendingUp,
    title: 'Cost Optimization',
    description: 'Reduce cloud spending by up to 40% through intelligent resource allocation and monitoring.',
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
  },
  {
    icon: Cpu,
    title: 'Infrastructure as Code',
    description: 'Automate your infrastructure deployment with Terraform, Ansible, and modern DevOps tools.',
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'bg-teal-50 dark:bg-teal-900/20'
  },
  {
    icon: Network,
    title: 'Network Architecture',
    description: 'Design and implement robust, scalable network architectures for global operations.',
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-50 dark:bg-violet-900/20'
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-spacing bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 dark:bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/5 dark:bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-medium">
            <Zap className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
            Comprehensive
            <span className="block gradient-text mt-2">Cloud Solutions</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From migration to optimization, we provide end-to-end cloud services tailored to your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full glass rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl card-hover overflow-hidden">
                  {/* Icon Container */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 relative z-10`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3 relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Effect Background */}
                  <div className={`absolute inset-0 ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
                  
                  {/* Decorative Corner */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full transition-transform duration-300 group-hover:scale-150`} />
                </div>

                {/* Card Number */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Transform Your Infrastructure?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss how we can help scale your business with modern cloud solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-medium hover-lift">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 glass rounded-xl font-medium hover-lift">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

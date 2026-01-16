import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cloud, Shield, Server, Database, Award, Briefcase, TrendingUp, Zap, Sparkles } from 'lucide-react';
import Layout from '../layout';

const About = () => {
  const stats = [
    { value: '15+', label: 'Years Experience', icon: TrendingUp },
    { value: '50+', label: 'Enterprise Clients', icon: Briefcase },
    { value: '99.99%', label: 'System Uptime', icon: Server },
    { value: '40%', label: 'Avg. Cost Savings', icon: Zap }
  ];

  const expertise = [
    {
      icon: Cloud,
      title: 'Hybrid Cloud',
      description: 'Azure, AWS, and GCP architecture design and implementation',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'PCI-DSS, HIPAA, and NIST compliant infrastructure',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Server,
      title: 'Migration',
      description: 'Seamless workload transitions with minimal downtime',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Enterprise data platforms and BI solutions',
      color: 'from-orange-500 to-red-500',
    }
  ];

  const experience = [
    {
      role: 'Cloud Security Advisor',
      company: 'InterTrade-Canada Inc.',
      period: 'Feb 2025 - Present',
      highlights: [
        'Azure IAM deployment strategy',
        'Supplier risk assessment',
        'CRM integration with Entra ID'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      role: 'Technical Lead',
      company: 'BMO',
      period: 'Oct 2022 - Jan 2025',
      highlights: [
        'Hadoop cluster migration to Azure',
        'Bank application migration',
        'Azure Sentinel implementation'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),rgba(255,255,255,0)_50%)] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.2),rgba(0,0,0,0)_50%)]" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
            transition={{ duration: 15, repeat: Infinity, delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 border border-blue-200 dark:border-blue-800">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">About Us</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                  <span className="block text-gray-900 dark:text-white">Salman Ahmed</span>
                  <span className="block mt-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    Cloud Expert
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  With over 15 years of experience designing and securing enterprise-scale cloud environments, I help organizations transform their infrastructure with security-first, cost-optimized solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <span>View Resume</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="group border-2"
                >
                  <span>Schedule Consultation</span>
                </Button>
              </div>
            </motion.div>

            {/* Right Column - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl blur-3xl opacity-20"></div>
                
                <div className="relative glass rounded-3xl p-4 shadow-2xl">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl flex items-center justify-center overflow-hidden">
                    {/* Placeholder - replace with actual image */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                      <Award className="w-32 h-32 text-blue-500 dark:text-blue-400" />
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        Azure Certified
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Solutions Architect
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-spacing bg-white dark:bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 dark:from-blue-500/5 dark:to-cyan-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Core <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Specialized knowledge across the full cloud infrastructure stack
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                  
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.color} mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-spacing bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Professional <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Key roles in enterprise IT infrastructure and cloud transformation
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${exp.color} rounded-l-3xl`} />
                
                <div className="pl-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center`}>
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
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
              Let's discuss how my expertise can benefit your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="px-8 py-6 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 text-lg">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
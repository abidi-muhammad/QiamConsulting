import { motion } from 'framer-motion'
import { Cloud, Shield, Server, Database, Award, ArrowRight } from 'lucide-react'
import AppLayout from '../../layouts/AppLayout'

export default function About() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' }
  ]

  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '50+', label: 'Enterprise Clients' },
    { value: '99.99%', label: 'System Uptime' },
    { value: '20%', label: 'Avg. Cost Savings' }
  ]

  const expertise = [
    {
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      title: 'Hybrid Cloud',
      description: 'Azure, AWS, and GCP architecture design and implementation'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Security',
      description: 'PCI-DSS, HIPAA, and NIST compliant infrastructure'
    },
    {
      icon: <Server className="w-6 h-6 text-purple-500" />,
      title: 'Migration',
      description: 'Seamless workload transitions with minimal downtime'
    },
    {
      icon: <Database className="w-6 h-6 text-amber-500" />,
      title: 'Data Analytics',
      description: 'Enterprise data platforms and BI solutions'
    }
  ]

  const experience = [
    {
      role: 'Cloud Security Advisor',
      company: 'InterTrade-Canada Inc.',
      period: 'Feb 2025 - Present',
      highlights: [
        'Azure IAM deployment strategy',
        'Supplier risk assessment',
        'CRM integration with Entra ID'
      ]
    },
    {
      role: 'Technical Lead',
      company: 'BMO',
      period: 'Oct 2022 - Jan 2025',
      highlights: [
        'Hadoop cluster migration to Azure',
        'Bank application migration',
        'Azure Sentinel implementation'
      ]
    }
  ]

  return (
    <AppLayout breadcrumbs={breadcrumbItems}>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Salman Ahmed
              </h1>
              <p className="text-xl text-blue-600 dark:text-blue-400 mb-6">
                IT Infrastructure Leader & Cloud Security Expert
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                With over 15 years of experience designing and securing enterprise-scale cloud
                environments, I help organizations transform their infrastructure with
                security-first, cost-optimized solutions.
              </p>
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-md font-medium transition-colors">
                View My Resume
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="rounded-xl w-full h-64 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 flex items-center justify-center">
                  <div className="text-6xl">👨‍💼</div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 flex items-center gap-2"
              >
                <Award className="w-5 h-5 text-yellow-500" />
                <span className="font-medium">Azure Architect Certified</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-5 xl:px-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-5 xl:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Core Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Specialized knowledge across the full cloud infrastructure stack
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="p-3 rounded-lg bg-blue-50 dark:bg-gray-700 w-fit mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-5 xl:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Professional Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">
              Key roles in enterprise IT infrastructure and cloud transformation
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8"
              >
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-1">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {exp.period}
                  </p>
                </div>
                <div className="md:w-2/3">
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1 text-blue-500">
                          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
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
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto text-center px-5 xl:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how my expertise can benefit your organization.
            </p>
            <button className="flex items-center gap-2 mx-auto px-6 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-md font-medium transition-colors">
              Schedule Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>
    </AppLayout>
  )
}

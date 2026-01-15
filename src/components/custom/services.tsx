// resources/js/Components/Services.jsx
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Cloud,
  ShieldCheck,
  Server,
  Database,
  Lock,
  Zap,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    title: "Hybrid Cloud Architecture",
    icon: <Cloud className="w-6 h-6" />,
    description: "Design and implement secure, scalable hybrid cloud solutions bridging on-prem and cloud environments.",
    highlights: [
      "Azure/AWS/GCP integration",
      "Cost-optimized architecture",
      "Network design",
      "Disaster recovery planning"
    ],
    color: "text-blue-500"
  },
  {
    title: "Cloud Security",
    icon: <ShieldCheck className="w-6 h-6" />,
    description: "Implement robust security frameworks meeting PCI-DSS, HIPAA, and NIST standards.",
    highlights: [
      "Zero Trust Architecture",
      "IAM/PAM solutions",
      "SIEM implementation",
      "Compliance audits"
    ],
    color: "text-green-500"
  },
  {
    title: "Cloud Migration",
    icon: <Server className="w-6 h-6" />,
    description: "Seamless migration of workloads to cloud platforms with minimal downtime.",
    highlights: [
      "Lift-and-shift strategies",
      "VMware to cloud",
      "Database modernization",
      "Application refactoring"
    ],
    color: "text-purple-500"
  },
  {
    title: "Data Analytics",
    icon: <Database className="w-6 h-6" />,
    description: "Build enterprise data lakes, warehouses, and analytics pipelines.",
    highlights: [
      "Hadoop/Netezza migrations",
      "ETL pipeline design",
      "Real-time analytics",
      "Power BI integration"
    ],
    color: "text-amber-500"
  },
  {
    title: "Cost Optimization",
    icon: <Zap className="w-6 h-6" />,
    description: "Reduce cloud costs through continuous assessment and tuning.",
    highlights: [
      "FinOps implementation",
      "Reserved instances",
      "Auto-scaling strategies",
      "Usage analytics"
    ],
    color: "text-yellow-500"
  },
  {
    title: "Disaster Recovery",
    icon: <Lock className="w-6 h-6" />,
    description: "Design business continuity solutions with optimal RTO/RPO.",
    highlights: [
      "Azure Site Recovery",
      "Commvault solutions",
      "Failover testing",
      "DR runbooks"
    ],
    color: "text-red-500"
  }
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-5 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 mb-4">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Comprehensive Cloud Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            End-to-end solutions tailored to your business requirements and technical environment.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full flex flex-col bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className={`p-3 rounded-lg w-fit mb-4 bg-opacity-10 ${service.color} bg-current`}>
                    <div className={service.color}>
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <ul className="space-y-3">
                    {service.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 mt-1 ${service.color}`}>
                          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button variant="outline" className="w-full gap-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
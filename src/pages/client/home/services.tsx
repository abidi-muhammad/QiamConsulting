// resources/js/Components/Services.jsx
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import {
  Cloud,
  ShieldCheck,
  Server,
  Database,
  Lock,
  Zap,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: "Hybrid Cloud Architecture",
    icon: <Cloud className="w-8 h-8 text-blue-500" />,
    description: "Design and implement secure, scalable hybrid cloud solutions bridging on-prem and cloud environments (Azure, AWS, GCP).",
    highlights: [
      "Multi-cloud strategy development",
      "Cost-optimized architecture",
      "Network integration planning",
      "Disaster recovery design"
    ]
  },
  {
    title: "Cloud Security & Compliance",
    icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
    description: "Implement robust security frameworks meeting PCI-DSS, HIPAA, SOX, and NIST standards.",
    highlights: [
      "Zero Trust Architecture",
      "IAM/PAM solutions",
      "SIEM/SOAR implementation",
      "Compliance gap analysis"
    ]
  },
  {
    title: "Cloud Migration",
    icon: <Server className="w-8 h-8 text-purple-500" />,
    description: "Seamless migration of workloads, applications, and data to cloud platforms with minimal downtime.",
    highlights: [
      "Lift-and-shift strategies",
      "VMware to cloud migration",
      "Database modernization",
      "Application refactoring"
    ]
  },
  {
    title: "Data & Analytics Platforms",
    icon: <Database className="w-8 h-8 text-amber-500" />,
    description: "Build enterprise-grade data lakes, warehouses, and analytics pipelines in the cloud.",
    highlights: [
      "Hadoop/Netezza migrations",
      "ETL pipeline optimization",
      "Real-time analytics",
      "Power BI/Tableau integration"
    ]
  },
  {
    title: "Infrastructure Optimization",
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    description: "Reduce costs and improve performance through continuous infrastructure assessment and tuning.",
    highlights: [
      "FinOps implementation",
      "Auto-scaling strategies",
      "Reserved instance planning",
      "vRealize Operations management"
    ]
  },
  {
    title: "Disaster Recovery",
    icon: <Lock className="w-8 h-8 text-red-500" />,
    description: "Design and implement business continuity solutions with optimal RTO/RPO for critical systems.",
    highlights: [
      "Azure Site Recovery",
      "Commvault/Veeam solutions",
      "Failover testing",
      "DR runbook development"
    ]
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
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-5 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300 mb-4">
            Expertise Areas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Cloud & Security Consultation Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Leveraging 15+ years of enterprise IT experience to deliver tailored solutions for your cloud transformation.
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
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-gray-800">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button size="lg" className="gap-2">
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

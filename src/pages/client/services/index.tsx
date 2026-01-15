// resources/js/Pages/Services.jsx
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Cloud, Shield, Server, Database, Lock, Zap, Home } from 'lucide-react';
import AppLayout from '../layout';
import Services from '@/components/custom/services';


const Page = () => {
    const processSteps = [
        {
            title: "Discovery",
            icon: <Cloud className="w-6 h-6 text-blue-500" />,
            description: "We analyze your current infrastructure and identify opportunities for cloud transformation."
        },
        {
            title: "Planning",
            icon: <Shield className="w-6 h-6 text-green-500" />,
            description: "Detailed roadmap creation with security and compliance considerations."
        },
        {
            title: "Migration",
            icon: <Server className="w-6 h-6 text-purple-500" />,
            description: "Seamless transition of workloads with minimal downtime."
        },
        {
            title: "Optimization",
            icon: <Zap className="w-6 h-6 text-yellow-500" />,
            description: "Continuous monitoring and cost-performance tuning."
        }
    ];
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Services', href: null },
    ];
    return (
        <AppLayout breadcrumbs={breadcrumbItems} breadcrumb_page_title='Services'>
          

            {/* Services Grid */}
            <Services />

            {/* Process Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto  px-5 xl:px-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300 mb-4">
                            Our Methodology
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Proven Cloud Transformation Process
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Structured approach to ensure successful cloud adoption and optimization.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-lg bg-blue-50 dark:bg-gray-700">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {step.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                <div className="max-w-7xl mx-auto  px-5 xl:px-0 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Transform Your Cloud Infrastructure?
                        </h2>
                        <p className="text-xl mb-8 text-blue-100">
                            Schedule a free 30-minute consultation to discuss your project requirements and how we can help.
                        </p>
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 gap-2">
                            Book Free Consultation
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </motion.div>
                </div>
            </section>
        </AppLayout>
    );
};

export default Page;

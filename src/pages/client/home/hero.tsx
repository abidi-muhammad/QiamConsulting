// resources/js/Components/Hero.jsx
import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const floatingClouds: Variants = {
        initial: { y: 0 },
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
            }
        }
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 md:py-32">
            <div className="max-w-7xl mx-auto">
                {/* Floating cloud background elements */}
                <motion.div
                    className="absolute top-20 left-10 opacity-10 dark:opacity-5"
                    variants={floatingClouds}
                    animate="animate"
                >
                    <CloudSVG className="w-40 h-40 text-blue-400" />
                </motion.div>

                <motion.div
                    className="absolute bottom-20 right-10 opacity-10 dark:opacity-5"
                    variants={floatingClouds}
                    animate="animate"
                    style={{ rotate: 45 }}
                >
                    <CloudSVG className="w-32 h-32 text-blue-400" />
                </motion.div>

                <div className="max-w-7xl mx-auto px-5 xl:px-0 relative z-10">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Left column - Content */}
                        <div className="space-y-6">
                            <motion.div variants={itemVariants}>
                                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300">
                                    Cloud & Security Expert
                                </span>
                            </motion.div>

                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white"
                                variants={itemVariants}
                            >
                                Transform Your{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                    Cloud Infrastructure
                                </span>
                            </motion.h1>

                            <motion.p
                                className="text-lg text-gray-600 dark:text-gray-300"
                                variants={itemVariants}
                            >
                                15+ years of experience designing, securing, and optimizing enterprise cloud environments.
                                Let me help you build a scalable, secure, and cost-effective cloud strategy.
                            </motion.p>

                            <motion.div
                                className="flex flex-wrap gap-4"
                                variants={itemVariants}
                            >
                                <Button className="gap-2" size="lg">
                                    Get Started
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="lg">
                                    View Case Studies
                                </Button>
                            </motion.div>

                            <motion.div
                                className="flex items-center gap-4 pt-4"
                                variants={itemVariants}
                            >
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((item) => (
                                        <img
                                            key={item}
                                            src={`/images/avatar-${item}.jpg`}
                                            className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                                            alt={`Client ${item}`}
                                        />
                                    ))}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">
                                    <p>Trusted by 50+ enterprises</p>
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                        ))}
                                        <span>5.0 (120 reviews)</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right column - Illustration */}
                        <motion.div
                            className="relative"
                            variants={itemVariants}
                        >
                            <div className="relative aspect-square max-w-lg mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl rotate-6"></div>
                                <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl">
                                    <img
                                        src="/images/cloud-architecture.png"
                                        alt="Cloud Architecture"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Animated floating elements */}
                                <motion.div
                                    className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                                    animate={{
                                        y: [0, -10, 0],
                                        rotate: [0, 5, -5, 0]
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <div className="flex items-center gap-2">
                                        <ShieldCheckIcon className="w-5 h-5 text-green-500" />
                                        <span className="text-sm font-medium">99.99% Uptime</span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                                    animate={{
                                        y: [0, -15, 0],
                                        rotate: [0, -5, 5, 0]
                                    }}
                                    transition={{
                                        duration: 7,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.5
                                    }}
                                >
                                    <div className="flex items-center gap-2">
                                        <DollarSignIcon className="w-5 h-5 text-blue-500" />
                                        <span className="text-sm font-medium">20% Cost Savings</span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>

    );
};

// SVG Components (put these in a separate file if preferred)
const CloudSVG = ({ className }: { className: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 19a5 5 0 01-5-5a5 5 0 015-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03L19 11a4 4 0 014 4a4 4 0 01-4 4h-1c-.55 0-1-.45-1-1s.45-1 1-1h1a2 2 0 002-2a2 2 0 00-2-2h-1.5l-.5-.03C17.18 7.86 14.37 6 11 6C8.24 6 5.82 7.58 5.17 10A3 3 0 003 14a3 3 0 003 3h1c.55 0 1-.45 1-1s-.45-1-1-1H6z" />
    </svg>
);

const StarIcon = ({ className }: { className: string }) => (
    <svg className={className} viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

const ShieldCheckIcon = ({ className }: { className: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const DollarSignIcon = ({ className }: { className: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export default Hero;

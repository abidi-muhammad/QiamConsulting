import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

type ContactForm = {
    name: string,
    email: string,
    phone: string,
    message: string,
};

const ContactSection = () => {
    const [data, setData] = useState<ContactForm>({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState<Partial<ContactForm>>({});
    const [success, setSuccess] = useState(false);

    const handleChange = (field: keyof ContactForm, value: string) => {
        setData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<ContactForm> = {};

        if (!data.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!data.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!data.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit: FormEventHandler = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setProcessing(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setSuccess(true);
            setData({
                name: '',
                email: '',
                phone: '',
                message: '',
            });
            setTimeout(() => setSuccess(false), 5000);
        } catch (error) {
            console.error('Contact form error:', error);
            setErrors({ message: 'An error occurred. Please try again later.' });
        } finally {
            setProcessing(false);
        }
    };

    const contactMethods = [
        {
            icon: Mail,
            title: 'Email',
            value: 'qaimconsulting@gmail.com',
            href: 'mailto:qaimconsulting@gmail.com',
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: Phone,
            title: 'Phone',
            value: 'Coming soon',
            href: '#',
            color: 'from-green-500 to-emerald-500',
        },
        {
            icon: MapPin,
            title: 'Location',
            value: 'Canada',
            href: '#',
            color: 'from-orange-500 to-red-500',
        }
    ];

    return (
        <section id="contact" className="section-spacing bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 dark:from-blue-500/5 dark:to-cyan-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 dark:from-purple-500/5 dark:to-pink-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 border border-blue-200 dark:border-blue-800 mb-6">
                        <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Get In Touch</span>
                    </div>
                    
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="block text-gray-900 dark:text-white">Let's Discuss</span>
                        <span className="block mt-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                            Your Cloud Project
                        </span>
                    </h2>
                    
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Have questions about cloud migration, security, or infrastructure? Reach out for a free consultation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-10 border border-gray-200 dark:border-gray-700 shadow-xl"
                    >
                        {success && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl"
                            >
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                                    <p className="text-green-700 dark:text-green-300 font-medium">
                                        Thank you! Your message has been sent successfully.
                                    </p>
                                </div>
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <Label htmlFor="name" className="mb-2 block text-gray-900 dark:text-white">
                                    Full Name
                                </Label>
                                <Input
                                    id="name"
                                    value={data.name}
                                    onChange={(e) => handleChange('name', e.target.value)}
                                    placeholder="John Smith"
                                    className="h-12"
                                />
                                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                            </div>

                            <div>
                                <Label htmlFor="email" className="mb-2 block text-gray-900 dark:text-white">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    placeholder="john@example.com"
                                    className="h-12"
                                />
                                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                            </div>

                            <div>
                                <Label htmlFor="phone" className="mb-2 block text-gray-900 dark:text-white">
                                    Phone (Optional)
                                </Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    value={data.phone}
                                    onChange={(e) => handleChange('phone', e.target.value)}
                                    placeholder="(123) 456-7890"
                                    className="h-12"
                                />
                            </div>

                            <div>
                                <Label htmlFor="message" className="mb-2 block text-gray-900 dark:text-white">
                                    Your Message
                                </Label>
                                <Textarea
                                    id="message"
                                    value={data.message}
                                    onChange={(e) => handleChange('message', e.target.value)}
                                    placeholder="Tell us about your project..."
                                    rows={5}
                                    className="resize-none"
                                />
                                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                            </div>

                            <Button 
                                type="submit" 
                                disabled={processing} 
                                className="w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all"
                            >
                                {processing ? 'Sending...' : 'Send Message'}
                                <Send className="w-4 h-4 ml-2" />
                            </Button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Contact Methods */}
                        <div className="space-y-4">
                            {contactMethods.map((method, index) => {
                                const Icon = method.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={method.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group block bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`p-4 rounded-xl bg-gradient-to-br ${method.color}`}>
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                                    {method.title}
                                                </h3>
                                                <p className="text-blue-600 dark:text-blue-400 font-medium">
                                                    {method.value}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.a>
                                );
                            })}
                        </div>

                        {/* Hours */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl"
                        >
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                                Consultation Hours
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 dark:text-gray-300">Monday - Friday</span>
                                    <span className="text-gray-900 dark:text-white font-semibold">9:00 AM - 5:00 PM EST</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 dark:text-gray-300">Weekends</span>
                                    <span className="text-gray-900 dark:text-white font-semibold">By appointment</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
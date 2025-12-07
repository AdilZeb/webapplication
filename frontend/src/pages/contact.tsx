import { useState } from 'react';
import Link from 'next/link';
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    MessageSquare,
    Users,
    Headphones,
    CheckCircle,
    ArrowRight,
    Loader2
} from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email Us',
            details: 'support@cardex.com',
            subtext: 'We reply within 24 hours',
        },
        {
            icon: Phone,
            title: 'Call Us',
            details: '+1 (555) 123-4567',
            subtext: 'Mon-Fri 9am-6pm EST',
        },
        {
            icon: MapPin,
            title: 'Visit Us',
            details: '123 Auto Plaza Drive',
            subtext: 'New York, NY 10001',
        },
        {
            icon: Clock,
            title: 'Business Hours',
            details: 'Mon - Fri: 9AM - 6PM',
            subtext: 'Weekend: 10AM - 4PM',
        },
    ];

    const supportOptions = [
        {
            icon: MessageSquare,
            title: 'Sales Inquiries',
            description: 'Get help with buying or selling vehicles on our platform.',
            link: '#contact-form',
        },
        {
            icon: Headphones,
            title: 'Customer Support',
            description: 'Having issues? Our support team is here to help 24/7.',
            link: '#contact-form',
        },
        {
            icon: Users,
            title: 'Partner With Us',
            description: 'Interested in becoming a dealer partner? Let\'s talk.',
            link: '#contact-form',
        },
    ];

    const faqs = [
        {
            question: 'How do I list my vehicle on CARDEX?',
            answer: 'Simply create an account, click on "List Vehicle" in your dashboard, and follow the step-by-step process to add your vehicle details and photos.',
        },
        {
            question: 'Is it free to browse vehicles?',
            answer: 'Yes! Browsing and searching for vehicles on CARDEX is completely free. You only pay when you decide to purchase.',
        },
        {
            question: 'How are dealers verified?',
            answer: 'We conduct thorough background checks, verify business licenses, and continuously monitor customer reviews to ensure dealer quality.',
        },
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit cards, bank transfers, and offer financing options through our partner lenders.',
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-24">
                {/* Decorative Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Get in Touch
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            We'd Love to
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Hear From You</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            Have questions, feedback, or need assistance? Our team is here to help you
                            with anything you need. Reach out and we'll respond as soon as we can.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-12 bg-white relative -mt-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <info.icon className="h-7 w-7 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h3>
                                <p className="text-indigo-600 font-medium mb-1">{info.details}</p>
                                <p className="text-sm text-gray-500">{info.subtext}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support Options */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            How Can We Help?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Choose the option that best fits your needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {supportOptions.map((option, index) => (
                            <a
                                key={index}
                                href={option.link}
                                className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-indigo-500 group-hover:to-purple-600 transition-all duration-300">
                                    <option.icon className="h-8 w-8 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
                                <p className="text-gray-600 mb-4">{option.description}</p>
                                <span className="inline-flex items-center text-indigo-600 font-medium group-hover:text-indigo-700">
                                    Learn more
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map Section */}
            <section id="contact-form" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div>
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
                                <Send className="h-4 w-4 mr-2" />
                                Send a Message
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Drop Us a Line
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Fill out the form below and we'll get back to you within 24 hours.
                            </p>

                            {isSubmitted && (
                                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center text-green-700">
                                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                                    <span>Thank you for your message! We'll be in touch soon.</span>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="sales">Sales Inquiry</option>
                                            <option value="support">Customer Support</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="feedback">Feedback</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                                        placeholder="Tell us how we can help you..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 font-semibold transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="animate-spin h-5 w-5 mr-2" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="ml-2 h-5 w-5" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Map & Additional Info */}
                        <div>
                            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-1 mb-8">
                                <div className="bg-gray-100 rounded-3xl h-80 flex items-center justify-center overflow-hidden">
                                    {/* Placeholder for map - you can integrate Google Maps here */}
                                    <div className="text-center p-8">
                                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                            <MapPin className="h-10 w-10 text-indigo-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Our Headquarters</h3>
                                        <p className="text-gray-600">123 Auto Plaza Drive<br />New York, NY 10001</p>
                                    </div>
                                </div>
                            </div>

                            {/* FAQ Section */}
                            <div className="bg-gray-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                    Frequently Asked Questions
                                </h3>
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <details
                                            key={index}
                                            className="group bg-white rounded-xl border border-gray-100 overflow-hidden"
                                        >
                                            <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                                                <span className="font-medium text-gray-900">{faq.question}</span>
                                                <span className="ml-4 text-indigo-600 group-open:rotate-180 transition-transform">
                                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </span>
                                            </summary>
                                            <div className="p-4 pt-0 text-gray-600">
                                                {faq.answer}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
                                CARDEX
                            </h3>
                            <p className="text-gray-400">
                                The modern marketplace for buying and selling vehicles.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Browse</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link href="/search" className="hover:text-white transition-colors">All Vehicles</Link></li>
                                <li><Link href="/search?type=new" className="hover:text-white transition-colors">New Cars</Link></li>
                                <li><Link href="/search?type=used" className="hover:text-white transition-colors">Used Cars</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Legal</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} CARDEX. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

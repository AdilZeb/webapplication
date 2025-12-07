import Link from 'next/link';
import {
    Users,
    Target,
    Award,
    Zap,
    Globe,
    Heart,
    CheckCircle,
    ArrowRight,
    Car,
    Shield,
    TrendingUp
} from 'lucide-react';

export default function About() {
    const stats = [
        { number: '10,000+', label: 'Happy Customers' },
        { number: '500+', label: 'Verified Dealers' },
        { number: '25,000+', label: 'Cars Listed' },
        { number: '98%', label: 'Satisfaction Rate' },
    ];

    const values = [
        {
            icon: Shield,
            title: 'Trust & Transparency',
            description: 'We believe in complete transparency. Every vehicle and dealer on our platform is verified to ensure you get exactly what you expect.',
        },
        {
            icon: Heart,
            title: 'Customer First',
            description: 'Your satisfaction is our priority. We go above and beyond to ensure every customer has an exceptional experience.',
        },
        {
            icon: Zap,
            title: 'Innovation',
            description: 'We continuously innovate to provide you with the best tools and features for finding your perfect vehicle.',
        },
        {
            icon: Globe,
            title: 'Accessibility',
            description: 'Making car buying accessible to everyone, everywhere. Our platform is designed to be simple and intuitive.',
        },
    ];

    const team = [
        {
            name: 'Sarah Johnson',
            role: 'CEO & Founder',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
        },
        {
            name: 'Michael Chen',
            role: 'CTO',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
        },
        {
            name: 'Emily Rodriguez',
            role: 'Head of Operations',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
        },
        {
            name: 'David Kim',
            role: 'Head of Sales',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
        },
    ];

    const milestones = [
        { year: '2020', event: 'CARDEX was founded with a vision to revolutionize car buying' },
        { year: '2021', event: 'Reached 1,000 verified dealers and 10,000 listings' },
        { year: '2022', event: 'Expanded nationwide with 100+ cities covered' },
        { year: '2023', event: 'Launched mobile app and secure payment integration' },
        { year: '2024', event: 'Serving over 10,000 happy customers monthly' },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-24 lg:py-32">
                {/* Decorative Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
                            <Users className="h-4 w-4 mr-2" />
                            Our Story
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                            Driving the Future of
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Car Buying</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            At CARDEX, we're on a mission to transform the vehicle marketplace. We connect buyers with trusted dealers,
                            making car buying simple, transparent, and enjoyable.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white relative -mt-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
                                <Target className="h-4 w-4 mr-2" />
                                Our Mission
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Making Car Buying
                                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Effortless</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                We believe everyone deserves a seamless, trustworthy car buying experience. Our platform eliminates the
                                traditional hassles of vehicle shopping by connecting you directly with verified dealers and providing
                                all the tools you need to make an informed decision.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Verified dealers with transparent ratings',
                                    'Comprehensive vehicle history reports',
                                    'Secure payment processing',
                                    '24/7 customer support',
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center text-gray-700">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-1">
                                <div className="bg-white rounded-3xl p-8">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl text-center">
                                            <Car className="h-10 w-10 text-indigo-600 mx-auto mb-3" />
                                            <div className="font-bold text-gray-900">Wide Selection</div>
                                        </div>
                                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl text-center">
                                            <Shield className="h-10 w-10 text-indigo-600 mx-auto mb-3" />
                                            <div className="font-bold text-gray-900">100% Secure</div>
                                        </div>
                                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl text-center">
                                            <Award className="h-10 w-10 text-indigo-600 mx-auto mb-3" />
                                            <div className="font-bold text-gray-900">Top Quality</div>
                                        </div>
                                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl text-center">
                                            <TrendingUp className="h-10 w-10 text-indigo-600 mx-auto mb-3" />
                                            <div className="font-bold text-gray-900">Best Prices</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
                            <Heart className="h-4 w-4 mr-2" />
                            Our Values
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            What Drives Us
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Our core values guide everything we do, from product decisions to customer interactions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="group relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative">
                                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <value.icon className="h-7 w-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 bg-gradient-to-br from-gray-900 to-indigo-900">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
                            <Award className="h-4 w-4 mr-2" />
                            Our Journey
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Milestones
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            From a small startup to a nationwide platform, here's how we've grown.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full hidden md:block"></div>

                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                                            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                                {milestone.year}
                                            </div>
                                            <p className="text-gray-300">{milestone.event}</p>
                                        </div>
                                    </div>
                                    <div className="w-4 h-4 bg-white rounded-full shadow-lg shadow-indigo-500/50 relative z-10 hidden md:block"></div>
                                    <div className="flex-1 hidden md:block"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
                            <Users className="h-4 w-4 mr-2" />
                            Our Team
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Meet the People Behind CARDEX
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            A passionate team dedicated to transforming the car buying experience.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="group text-center"
                            >
                                <div className="relative mb-6 mx-auto w-48 h-48">
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full transform rotate-6 group-hover:rotate-12 transition-transform"></div>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="relative w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-indigo-600 font-medium">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
                        Join thousands of satisfied customers and find your perfect vehicle today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/search"
                            className="inline-flex items-center justify-center bg-white text-indigo-600 px-8 py-4 rounded-xl hover:bg-gray-100 font-semibold transition-all shadow-lg hover:shadow-xl"
                        >
                            Browse Vehicles
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white/10 font-semibold transition-all"
                        >
                            Contact Us
                        </Link>
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

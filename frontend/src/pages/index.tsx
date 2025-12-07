import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Search, Car, ShieldCheck, CreditCard, ArrowRight, Star } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function Home() {
  const router = useRouter();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push('/search');
    }
  };

  const features = [
    {
      icon: Car,
      title: 'Wide Selection',
      description: 'Browse thousands of verified vehicles from trusted showrooms nationwide.',
    },
    {
      icon: ShieldCheck,
      title: 'Verified Dealers',
      description: 'All our showrooms are verified and rated by real customers.',
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Protected transactions with industry-leading payment security.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2 fill-current" />
              Trusted by 10,000+ customers
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Find Your
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Perfect </span>
              Vehicle
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Discover thousands of quality vehicles from verified showrooms.
              Your dream car is just a search away.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white rounded-2xl shadow-xl border border-gray-100">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by make, model, or location..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  Search
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-500">
              <span>Popular:</span>
              <button onClick={() => router.push('/search?q=BMW')} className="hover:text-indigo-600 transition-colors">BMW</button>
              <span>•</span>
              <button onClick={() => router.push('/search?q=Mercedes')} className="hover:text-indigo-600 transition-colors">Mercedes</button>
              <span>•</span>
              <button onClick={() => router.push('/search?q=Audi')} className="hover:text-indigo-600 transition-colors">Audi</button>
              <span>•</span>
              <button onClick={() => router.push('/search?q=Tesla')} className="hover:text-indigo-600 transition-colors">Tesla</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CARDEX?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The modern way to buy and sell vehicles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Find Your Dream Car?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their perfect vehicle on CARDEX.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/search"
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl hover:bg-gray-100 font-semibold transition-colors shadow-lg"
            >
              Browse Vehicles
            </Link>
            <Link
              href="/register"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white/10 font-semibold transition-colors"
            >
              List Your Vehicle
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

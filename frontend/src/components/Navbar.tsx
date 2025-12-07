import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const { user, logout } = useAuth();
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path: string) => router.pathname === path;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        CARDEX
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/search"
                            className={`text-sm font-medium transition-colors ${isActive('/search') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
                                }`}
                        >
                            Browse
                        </Link>
                        <Link
                            href="/about"
                            className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
                                }`}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className={`text-sm font-medium transition-colors ${isActive('/contact') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
                                }`}
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* User Actions (Desktop) */}
                    <div className="hidden md:flex items-center space-x-4">
                        {user ? (
                            <div className="flex items-center space-x-4">
                                <Link
                                    href="/dashboard"
                                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2.5 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl font-medium text-sm"
                                >
                                    Dashboard
                                </Link>
                            </div>
                        ) : (
                            <>
                                <Link href="/login" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium text-sm">
                                    Sign In
                                </Link>
                                <Link
                                    href="/register"
                                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2.5 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl font-medium text-sm"
                                >
                                    Get Started
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-600"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 shadow-lg">
                    <nav className="flex flex-col space-y-4">
                        <Link
                            href="/search"
                            className="text-gray-600 hover:text-indigo-600 font-medium py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Browse Vehicles
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-600 hover:text-indigo-600 font-medium py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-600 hover:text-indigo-600 font-medium py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <hr className="border-gray-100 my-2" />
                        {user ? (
                            <Link
                                href="/dashboard"
                                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-3 rounded-lg text-center font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Go to Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="text-gray-700 hover:text-indigo-600 font-medium py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href="/register"
                                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-3 rounded-lg text-center font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Get Started
                                </Link>
                            </>
                        )}
                    </nav>
                </div>
            )}
        </header>
    );
}

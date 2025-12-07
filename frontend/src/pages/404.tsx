import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function Custom404() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4">
            <div className="max-w-md w-full text-center">
                {/* 404 Illustration */}
                <div className="mb-8">
                    <h1 className="text-9xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        404
                    </h1>
                </div>

                {/* Message */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Page Not Found
                </h2>
                <p className="text-gray-600 mb-8">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl font-medium"
                    >
                        <Home className="h-5 w-5 mr-2" />
                        Go Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                    >
                        <ArrowLeft className="h-5 w-5 mr-2" />
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}

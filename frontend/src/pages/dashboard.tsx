import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import {
    LayoutDashboard,
    LogOut,
    Car,
    Settings,
    UserCircle
} from 'lucide-react';

export default function Dashboard() {
    const { user, logout, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Welcome back, <span className="text-indigo-600">{user.name}</span>
                    </h1>
                    <button
                        onClick={logout}
                        className="flex items-center text-gray-500 hover:text-red-600 transition-colors"
                    >
                        <LogOut className="h-5 w-5 mr-2" />
                        Sign Out
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center">
                        <div className="p-3 bg-indigo-50 rounded-xl mr-4">
                            <UserCircle className="h-8 w-8 text-indigo-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Account Type</p>
                            <p className="text-lg font-bold text-gray-900 capitalize">{user.role}</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center">
                        <div className="p-3 bg-green-50 rounded-xl mr-4">
                            <Car className="h-8 w-8 text-green-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Saved Vehicles</p>
                            <p className="text-lg font-bold text-gray-900">0</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center">
                        <div className="p-3 bg-purple-50 rounded-xl mr-4">
                            <Settings className="h-8 w-8 text-purple-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Account Settings</p>
                            <button className="text-indigo-600 font-medium text-sm hover:underline">Manage Account</button>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
                    <div className="max-w-md mx-auto">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">My Dashboard</h3>
                        <p className="text-gray-500 mb-6">
                            This is your personal dashboard where you can manage your account and view your saved vehicles.
                        </p>
                        {user.role === 'customer' && (
                            <button
                                onClick={() => router.push('/search')}
                                className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors"
                            >
                                Browse Vehicles
                            </button>
                        )}
                        {user.role !== 'customer' && (
                            <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors">
                                Manage Listings
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

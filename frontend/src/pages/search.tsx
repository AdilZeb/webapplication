import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Search, Filter, Car, MapPin, X } from 'lucide-react';
import Image from 'next/image';
import { vehicleService } from '@/services/vehicle.service';
import { useAuth } from '@/context/AuthContext';

interface Vehicle {
    _id: string;
    make: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    fuel_type: string;
    transmission: string;
    color: string;
    status: string;
    images: string[];
    showroom?: {
        name: string;
        city: string;
    };
}

export default function SearchPage() {
    const router = useRouter();
    const { user } = useAuth();
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({
        minPrice: '',
        maxPrice: '',
        year: '',
        fuelType: '',
        transmission: '',
    });

    const fetchVehicles = useCallback(async () => {
        try {
            setLoading(true);
            const response = await vehicleService.getVehicles({
                search: router.query.q as string,
                ...filters,
            });
            setVehicles(response.vehicles || []);
        } catch (error) {
            console.error('Failed to fetch vehicles:', error);
            setVehicles([]);
        } finally {
            setLoading(false);
        }
    }, [router.query.q, filters]);

    useEffect(() => {
        if (router.query.q) {
            setSearchQuery(router.query.q as string);
        }
        fetchVehicles();
    }, [router.query.q, fetchVehicles]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    };

    const clearFilters = () => {
        setFilters({
            minPrice: '',
            maxPrice: '',
            year: '',
            fuelType: '',
            transmission: '',
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">


            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Search Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Vehicle</h1>

                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="flex gap-3">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by make, model, or keyword..."
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <button
                            type="button"
                            onClick={() => setShowFilters(!showFilters)}
                            className={`px-4 py-3 rounded-lg border transition-colors flex items-center space-x-2 ${showFilters ? 'bg-indigo-50 border-indigo-200 text-indigo-600' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            <Filter className="h-5 w-5" />
                            <span>Filters</span>
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                        >
                            Search
                        </button>
                    </form>

                    {/* Filters Panel */}
                    {showFilters && (
                        <div className="mt-4 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold text-gray-900">Filters</h3>
                                <button
                                    onClick={clearFilters}
                                    className="text-sm text-indigo-600 hover:text-indigo-500 flex items-center space-x-1"
                                >
                                    <X className="h-4 w-4" />
                                    <span>Clear all</span>
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Min Price</label>
                                    <input
                                        type="number"
                                        placeholder="$0"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        value={filters.minPrice}
                                        onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Max Price</label>
                                    <input
                                        type="number"
                                        placeholder="$100,000"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        value={filters.maxPrice}
                                        onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                                    <input
                                        type="number"
                                        placeholder="2024"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        value={filters.year}
                                        onChange={(e) => setFilters({ ...filters, year: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Fuel Type</label>
                                    <select
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                                        value={filters.fuelType}
                                        onChange={(e) => setFilters({ ...filters, fuelType: e.target.value })}
                                    >
                                        <option value="">All</option>
                                        <option value="gasoline">Gasoline</option>
                                        <option value="diesel">Diesel</option>
                                        <option value="electric">Electric</option>
                                        <option value="hybrid">Hybrid</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Transmission</label>
                                    <select
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                                        value={filters.transmission}
                                        onChange={(e) => setFilters({ ...filters, transmission: e.target.value })}
                                    >
                                        <option value="">All</option>
                                        <option value="automatic">Automatic</option>
                                        <option value="manual">Manual</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Results */}
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                    </div>
                ) : vehicles.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="mx-auto h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                            <Car className="h-10 w-10 text-gray-400" />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">No vehicles found</h2>
                        <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
                        <button
                            onClick={clearFilters}
                            className="text-indigo-600 hover:text-indigo-500 font-medium"
                        >
                            Clear all filters
                        </button>
                    </div>
                ) : (
                    <>
                        <p className="text-gray-600 mb-6">{vehicles.length} vehicles found</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {vehicles.map((vehicle) => (
                                <Link
                                    key={vehicle._id}
                                    href={`/vehicles/${vehicle._id}`}
                                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group"
                                >
                                    {/* Image */}
                                    <div className="aspect-video bg-gray-100 relative overflow-hidden">
                                        {vehicle.images && vehicle.images.length > 0 ? (
                                            <Image
                                                src={vehicle.images[0]}
                                                alt={`${vehicle.make} ${vehicle.model}`}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <Car className="h-16 w-16 text-gray-300" />
                                            </div>
                                        )}
                                        <span className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${vehicle.status === 'available' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                                            }`}>
                                            {vehicle.status}
                                        </span>
                                    </div>

                                    {/* Details */}
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                            {vehicle.year} {vehicle.make} {vehicle.model}
                                        </h3>
                                        <div className="flex items-center text-gray-500 text-sm mt-1">
                                            <MapPin className="h-4 w-4 mr-1" />
                                            {vehicle.showroom?.city || 'Unknown location'}
                                        </div>
                                        <div className="flex items-center justify-between mt-4">
                                            <span className="text-2xl font-bold text-indigo-600">
                                                ${vehicle.price.toLocaleString()}
                                            </span>
                                            <div className="text-sm text-gray-500">
                                                {vehicle.mileage?.toLocaleString()} mi
                                            </div>
                                        </div>
                                        <div className="flex gap-2 mt-3">
                                            <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">
                                                {vehicle.fuel_type}
                                            </span>
                                            <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">
                                                {vehicle.transmission}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </>
                )}
            </main>
        </div>
    );
}

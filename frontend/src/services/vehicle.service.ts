import api from '../lib/axios';

interface VehicleFilters {
    search?: string;
    minPrice?: string;
    maxPrice?: string;
    year?: string;
    fuelType?: string;
    transmission?: string;
    showroomId?: string;
}

interface VehicleData {
    make: string;
    model: string;
    year: number;
    price: number;
    mileage?: number;
    fuel_type?: string;
    transmission?: string;
    color?: string;
    description?: string;
    images?: string[];
    status?: string;
}

export const vehicleService = {
    getVehicles: async (filters: VehicleFilters = {}) => {
        const params: Record<string, string> = {};
        if (filters.search) params.search = filters.search;
        if (filters.minPrice) params.min_price = filters.minPrice;
        if (filters.maxPrice) params.max_price = filters.maxPrice;
        if (filters.year) params.year = filters.year;
        if (filters.fuelType) params.fuel_type = filters.fuelType;
        if (filters.transmission) params.transmission = filters.transmission;
        if (filters.showroomId) params.showroom_id = filters.showroomId;

        const response = await api.get('/vehicles', { params });
        return response.data;
    },

    getAll: async (showroomId?: string) => {
        const params = showroomId ? { showroom_id: showroomId } : {};
        const response = await api.get('/vehicles', { params });
        return response.data;
    },

    getById: async (id: string) => {
        const response = await api.get(`/vehicles/${id}`);
        return response.data;
    },

    create: async (data: VehicleData) => {
        const response = await api.post('/vehicles', data);
        return response.data;
    },

    update: async (id: string, data: Partial<VehicleData>) => {
        const response = await api.put(`/vehicles/${id}`, data);
        return response.data;
    },

    delete: async (id: string) => {
        const response = await api.delete(`/vehicles/${id}`);
        return response.data;
    },
};

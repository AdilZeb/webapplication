import api from '../lib/axios';

interface ShowroomProfileData {
    name: string;
    description?: string;
    address?: string;
    city?: string;
    phone?: string;
    email?: string;
    logo?: string;
}

export const showroomService = {
    getProfile: async () => {
        const response = await api.get('/showroom/profile');
        return response.data;
    },

    saveProfile: async (data: ShowroomProfileData) => {
        const response = await api.post('/showroom/profile', data);
        return response.data;
    },

    getAll: async () => {
        const response = await api.get('/showroom');
        return response.data;
    },
};

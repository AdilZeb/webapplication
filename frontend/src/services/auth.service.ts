import api from '../lib/axios';

export const authService = {
    register: async (data: {
        name: string;
        email: string;
        password: string;
        role?: string;
        phone?: string;
    }) => {
        const response = await api.post('/auth/register', data);
        return response.data;
    },

    login: async (email: string, password: string) => {
        const response = await api.post('/auth/login', { email, password });
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    },

    logout: async () => {
        await api.post('/auth/logout');
        localStorage.removeItem('token');
    },

    getMe: async () => {
        const response = await api.get('/auth/me');
        return response.data;
    },
};

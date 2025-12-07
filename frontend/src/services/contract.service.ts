import api from '../lib/axios';

export const contractService = {
    getById: async (id: string) => {
        const response = await api.get(`/contracts/${id}`);
        return response.data;
    },
};

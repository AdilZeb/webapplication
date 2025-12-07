import api from '../lib/axios';

export const checkoutService = {
    createSession: async (vehicleId: string) => {
        const response = await api.post('/checkout', { vehicleId });
        return response.data;
    },

    finalizeTransaction: async (sessionId: string, vehicleId: string) => {
        const response = await api.post('/checkout/finalize', { sessionId, vehicleId });
        return response.data;
    },
};

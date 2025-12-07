import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/auth.service';

interface User {
    userId: string;
    name: string;
    role: string;
}

interface RegisterData {
    name: string;
    email: string;
    password: string;
    phone?: string;
    role?: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    register: (data: RegisterData) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                const response = await authService.getMe();
                setUser(response.user);
            }
        } catch (error) {
            console.error('Auth check failed:', error);
            localStorage.removeItem('token');
        } finally {
            setLoading(false);
        }
    };

    const login = async (email: string, password: string) => {
        const response = await authService.login(email, password);
        setUser(response.user);
    };

    const logout = async () => {
        await authService.logout();
        setUser(null);
    };

    const register = async (data: RegisterData) => {
        await authService.register(data);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

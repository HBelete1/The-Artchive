'use client'
import { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined,
    });

    useEffect(() => {
        const token = localStorage.getItem('auth-token');
        if (token) {
            setUserData(prev => ({
                ...prev,
                token: token,
            }));
        }
        const user = localStorage.getItem('username');
        if (user) {
            setUserData (prev => ({
                ...prev,
                user: user,
            }))
        }
    }, []);

    return (
        <UserContext.Provider value = {{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
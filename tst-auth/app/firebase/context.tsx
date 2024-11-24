"use client"

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { auth } from './config'; // Your firebase initialization
import { onAuthStateChanged } from 'firebase/auth';
import { ContextType } from './contextType';

const FirebaseContext = createContext<ContextType | undefined>(undefined);

const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<any>(undefined);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user); // Set user info
            } else {
                setUser(undefined); // Set null if no user
            }
        });

        // Cleanup the listener when the component is unmounted
        return () => unsubscribe();
    }, []);

    return (
        <FirebaseContext.Provider value={{ user, setUser }}>
            {children}
        </FirebaseContext.Provider>
    );
};

const useUserContext= () => {
    const context = React.useContext(FirebaseContext);

    if (!context) {
        throw new Error('useFirebaseAuth must be used within a FirebaseProvider');
    }

    return context;
};

export default UserContextProvider;
export { useUserContext }
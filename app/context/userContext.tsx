'use client';
import React, {createContext, useContext, useState, ReactNode, useMemo} from 'react';

interface NameContextType {
    name: string;
    setName: (name: string) => void;
}

const NameContext = createContext<NameContextType | undefined>(undefined);

interface NameProviderProps {
    children: ReactNode;
}

export function NameProvider({ children }: NameProviderProps) {
    const [name, setName] = useState<string>('');
    const contextValue = useMemo(() => ({ name, setName }), [name]);
    return (
        <NameContext.Provider value={contextValue}>
            {children}
        </NameContext.Provider>
    );
}

export function useName() {
    const context = useContext(NameContext);
    if (!context) {
        throw new Error('useName must be used within a NameProvider');
    }
    return context;
}

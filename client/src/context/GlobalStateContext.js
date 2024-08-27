import React, { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const useGlobalState = () => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error('useGlobalState must be used within a GlobalStateProvider');
    }
    return context;
};

export const GlobalStateProvider = ({ children }) => {
    const [isClientView, setIsClientView] = useState(true);

    const toggleView = () => {
        setIsClientView((prevIsClientView) => !prevIsClientView);
    };

    const state = {
        isClientView,
        toggleView,
    };

    return (
        <GlobalStateContext.Provider value={state}>
            {children}
        </GlobalStateContext.Provider>
    );
};
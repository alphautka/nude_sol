import React, { createContext, useReducer, useContext } from 'react';
import { defaultState, reducer } from './reducer';

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, defaultState);
    const value = { state, dispatch };

    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export const useStore = () => useContext(StoreContext);
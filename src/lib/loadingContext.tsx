import React from 'react';

type Action = { type: 'TOGGLE_LOADING' };
type Dispatch = (action: Action) => void;
type State = { loading: boolean };
type LoadingProviderProps = { children: React.ReactNode };

const LoadingStateContext = React.createContext<State | undefined>(undefined);
const LoadingDispatchContext = React.createContext<Dispatch | undefined>(undefined);

const loadingReducer = (state: { loading: boolean }, action: { type: string }) => {
    switch (action.type) {
        case 'TOGGLE_LOADING': {
            return { ...state, loading: !state.loading };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
    const [state, dispatch] = React.useReducer(loadingReducer, {
        loading: false,
    });

    return (
        <LoadingStateContext.Provider value={state}>
            <LoadingDispatchContext.Provider value={dispatch}>{children}</LoadingDispatchContext.Provider>
        </LoadingStateContext.Provider>
    );
};

export const useLoadingState = () => {
    const context = React.useContext(LoadingStateContext);
    if (context === undefined) {
        throw new Error('useLoadingState must be used within a CountProvider');
    }
    return context;
};

export const useLoadingDispatch = () => {
    const context = React.useContext(LoadingDispatchContext);
    if (context === undefined) {
        throw new Error('useLoadingDispatch must be used within a CountProvider');
    }
    return context;
};

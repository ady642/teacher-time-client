import {createContext, useContext, useReducer} from 'react';
import auth from "@/context/auth/reducers";
import initialState from "@/context/state/state";

export const Context = createContext({ dispatch: ({
    type= '', action = {payload: null}
}) => {}, state: initialState });

const combineReducers = (...reducers: ((arg0: any, arg1: any) => any)[]) => (state: any, action: any) => {
    for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
    return state;
};

export const ContextProvider = ({ children = <div>default</div> }) => {
    const [state, dispatch] = useReducer(combineReducers(auth), initialState);
    const value = { state, dispatch };

    return <Context.Provider value={value}>
        {children}
    </Context.Provider>
}

export const useAppContext = () => {
    return useContext(Context);
}

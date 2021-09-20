import {createContext, useContext, useReducer} from 'react';
import auth from "@/context/auth/reducers";
import paymentReducer from "@/context/payment/reducers";
import appReducers from "@/context/app/reducers";
import userReducers from "@/context/user/reducers";
import initialState from "@/context/state/state";
import roomReducers from "@/context/room/reducers";

export const Context = createContext({ dispatch: null, state: initialState });

const combineReducers = (...reducers: ((arg0: any, arg1: any) => any)[]) => (state: any, action: any) => {
	for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
	return state;
};

export const ContextProvider = ({ children = <div>default</div> }) => {
	const [state, dispatch] = useReducer(combineReducers(
		auth, paymentReducer, appReducers, userReducers, roomReducers
	), initialState);
	const value = { state, dispatch };

	return <Context.Provider value={value}>
		{children}
	</Context.Provider>
}

export const useAppContext = () => {
	return useContext(Context);
}

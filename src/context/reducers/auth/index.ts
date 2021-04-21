import {CLOSE_SIGN_IN_MODAL, OPEN_SIGN_IN_MODAL} from "@/context/reducers/auth/reducersTypes";

const authReducer = (state: any, action: { type: string }) => {
    switch (action.type) {
        case OPEN_SIGN_IN_MODAL:
            return { ...state, auth: {signInModalOpened: true }};
        case CLOSE_SIGN_IN_MODAL:
            return { ...state, auth: {signInModalOpened: false }};
        default:
            return state;
    }
}

export default authReducer

import { UserActionTypes, UserState, UserActions } from '@storage/types/user';

const initialState: UserState = {
    currentAccountAddress: null,
    web3Instance: null,
}

export function userReducer(state: UserState = initialState, action: UserActions): UserState {
    switch (action.type) {
        case UserActionTypes.SET_ACCOUNT_ADDRESS: return { ...state, ...action.payload };
        case UserActionTypes.SET_WEB3_INSTANCE: return { ...state, ...action.payload };
        default: return state;
    }
}
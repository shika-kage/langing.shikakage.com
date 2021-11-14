import { UserActions, UserState, UserActionTypes } from '@storage/types/user';

export const setAccountAddress = (currentAccountAddress: UserState): UserActions => {
    return { type: UserActionTypes.SET_ACCOUNT_ADDRESS, payload: { currentAccountAddress } }
};

export const setWeb3Instance = (web3Instance: UserState): UserActions => {
    return { type: UserActionTypes.SET_WEB3_INSTANCE, payload: { web3Instance } }
};
export const UserActionTypes = {
    SET_ACCOUNT_ADDRESS: 'SET_ACCOUNT_ADDRESS',
    SET_WEB3_INSTANCE: 'SET_WEB3_INSTANCE',
} as const;

interface UserProperties {
    currentAccountAddress?: string | null;
    web3Instance?: any;
}

interface SetAccountAddressAction {
    type: typeof UserActionTypes.SET_ACCOUNT_ADDRESS;
    payload: any;
}

interface SetWeb3InstanceAction {
    type: typeof UserActionTypes.SET_WEB3_INSTANCE;
    payload: any;
}

export type UserState = UserProperties;
export type UserActions = SetAccountAddressAction | SetWeb3InstanceAction;
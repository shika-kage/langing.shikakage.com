export const AppActionTypes = {
    SET_LANG_CODE: 'SET_LANG_CODE'
} as const;

interface AppProperties {
    currentLangCode: string
}

interface SetLangCodeAction {
    type: typeof AppActionTypes.SET_LANG_CODE;
    payload: any;
}

export type AppState = AppProperties;
export type AppActions = SetLangCodeAction;
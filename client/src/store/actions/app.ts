import { AppActions, AppState, AppActionTypes } from '@storage/types/app';

export const setLangCode = (currentLangCode: AppState): AppActions => {
    return { type: AppActionTypes.SET_LANG_CODE, payload: { currentLangCode } }
};
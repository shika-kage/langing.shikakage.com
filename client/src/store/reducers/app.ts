import { AppActionTypes, AppState, AppActions } from '@storage/types/app';
import { defaultLangCode } from '@utils/i18n';

const initialState: AppState = {
    currentLangCode: defaultLangCode,
}

export function appReducer(state: AppState = initialState, action: AppActions): AppState {
    switch (action.type) {
        case AppActionTypes.SET_LANG_CODE: return { ...state, ...action.payload };
        default: return state;
    }
}
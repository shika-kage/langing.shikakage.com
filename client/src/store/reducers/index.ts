import { combineReducers } from 'redux';

import { appReducer } from './app';
import { userReducer } from './user';

export const rootReducer = combineReducers<any>({
    app: appReducer,
    user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>
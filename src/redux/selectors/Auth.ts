import {RootState} from 'redux/store';

export const getIsLoggedIn = (state: RootState) => state.Auth.isLoggedIn;

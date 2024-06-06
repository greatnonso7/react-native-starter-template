import {createFilter} from 'redux-persist-transform-filter';

const AuthFilter = createFilter('Auth', ['isLoggedIn', 'access_token']);

export const AllFilters = [AuthFilter];

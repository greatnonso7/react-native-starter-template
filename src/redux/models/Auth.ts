import {reducerActions as reducers} from './reducer';
import {showMessage} from 'react-native-flash-message';
import {capitalizeFirstLetter} from 'utils';

const IsState = {
  access_token: '',
  isLoggedIn: false,
  lastLoggedInEmail: '',
};

export const Auth = {
  name: 'Auth',
  state: IsState,
  reducers,
  effects: (dispatch: any) => ({
    async accessDashboard() {
      dispatch.Auth.setState({
        isLoggedIn: true,
      });
    },

    async cleanAccount() {
      dispatch({type: 'RESET_APP'});
    },

    async handleError(error: any) {
      dispatch.Auth.setError(true);
      if (error || error?.data?.errors || error?.data?.status === 'error') {
        var message =
          error?.message ||
          error?.data?.message ||
          'An error occured. Please try again.';

        if (message === 'invalid token!') {
          dispatch.Auth.logout();
          return;
        }

        return showMessage({
          message: 'Error',
          icon: 'danger',
          description: capitalizeFirstLetter(message),
          type: 'danger',
          duration: 2500,
        });
      }
    },
  }),
};

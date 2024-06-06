import axios from 'axios';
import {Platform} from 'react-native';
import Config from 'react-native-config';
import {getAllModels} from 'utils';

export const Axios = axios.create({
  baseURL: Config.BASE_URL,
  timeout: 60000,
});

console.log(Config.BASE_URL, Platform.OS);

Axios.defaults.headers.post['Content-Type'] = 'application/json';
Axios.defaults.headers.post.Accept = 'application/json';

Axios.interceptors.request.use((config: any) => {
  const models = getAllModels();
  const {access_token} = models.Auth;
  config.headers.Authorization = `Bearer ${access_token}`;
  console.log(config);
  return config;
});

Axios.interceptors.response.use(
  (config: any) => config,
  async (error: {response: {status: number}; config: any}) => {
    if (error && error.response.status === 401) {
      console.log(error.response, 'Response');
    }
    console.log(error.response);
    return Promise.reject(error.response);
  },
);

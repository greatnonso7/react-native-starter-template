import {Axios} from '../Axios';

export const setLogin = async (req: any) => {
  return Axios.post('auth/login', req).then(({data}) => {
    console.log(data, 'data');
    return data;
  });
};

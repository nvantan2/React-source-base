import { URL_USERS } from 'shared/constant/endpoints';
import axiosClient from './axiosClient';

const homeApi = {
  users: ({ params }) => {
    return axiosClient.get(URL_USERS, { params });
  },
};

export default homeApi;

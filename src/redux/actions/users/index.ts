import { REQUEST, usersConstants } from '../../constants';
import { Payload } from '../../../types/';

export const getUsers = (payload: Payload) => ({
  type: REQUEST(usersConstants.GET_USERS),
  payload: payload,
});

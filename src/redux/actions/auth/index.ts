import { REQUEST, authConstants } from '../../constants';
import { Payload } from '../../../types/';

export const loginAction = (payload: Payload) => ({
  type: REQUEST(authConstants.LOGIN),
  payload: payload,
});

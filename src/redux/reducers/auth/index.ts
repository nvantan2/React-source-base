import { authConstants } from '../../constants/auth';
import { REQUEST, SUCCESS, FAILURE } from '../../constants';
import { Action } from '../../../types/';

const initialState: {
  isLoggedIn: boolean;
  isLoading: boolean;
  isError: boolean;
  messageError: string;
  values: { [key: string]: any };
  userRole: string;
} = {
  isLoggedIn: false,
  values: {},
  userRole: '',
  isLoading: false,
  messageError: '',
  isError: false,
};

export const authReducer = (state = initialState, action: Action) => {
  const { payload } = action;
  switch (action.type) {
    case REQUEST(authConstants.LOGIN): {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SUCCESS(authConstants.LOGIN): {
      return {
        ...state,
        values: payload?.response?.data,
        userRole: payload?.response?.role,
        isLoading: false,
      };
    }
    case FAILURE(authConstants.LOGIN): {
      return {
        ...state,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

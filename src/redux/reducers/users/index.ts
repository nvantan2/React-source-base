import { usersConstants } from '../../constants';
import { REQUEST, SUCCESS, FAILURE } from '../../constants';
import { Action } from '../../../types/';

const initialState: {
  isLoading: boolean;
  isError: boolean;
  messageError: string;
  users: { [key: string]: any }[];
  totalUser: number;
} = {
  users: [],
  totalUser: 0,
  isLoading: false,
  messageError: '',
  isError: false,
};

export const usersReducer = (state = initialState, action: Action) => {
  const { payload } = action;
  switch (action.type) {
    case REQUEST(usersConstants.GET_USERS): {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SUCCESS(usersConstants.GET_USERS): {
      return {
        ...state,
        users: payload?.response?.data,
        totalUser: payload?.response?.data?.length,
        isLoading: false,
      };
    }
    case FAILURE(usersConstants.GET_USERS): {
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

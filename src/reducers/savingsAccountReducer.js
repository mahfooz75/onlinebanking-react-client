import { GET_SAVINGS_ACCOUNT } from "../actions/types";

const initialState = {
  savings_account: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SAVINGS_ACCOUNT:
      return {
        ...state,
        savings_account: action.payload,
      };
    default:
      return state;
  }
}

import { GET_ALL_ACCOUNT } from "../actions/types";

const initialState = {
  all_accounts: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_ACCOUNT:
      return {
        ...state,
        all_accounts: action.payload,
      };
    default:
      return state;
  }
}

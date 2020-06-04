import { GET_TRANSACTIONS } from "../actions/types";

const initialState = {
  all_transactions: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        all_transactions: action.payload,
      };
    default:
      return state;
  }
}

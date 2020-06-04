import { DEPOSIT } from "../actions/types";

const initialState = {
  withdraw_details: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DEPOSIT:
      return {
        ...state,
        withdraw_details: action.payload,
      };
    default:
      return state;
  }
}

import { DEPOSIT } from "../actions/types";

const initialState = {
  deposit_details: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DEPOSIT:
      return {
        ...state,
        deposit_details: action.payload,
      };
    default:
      return state;
  }
}

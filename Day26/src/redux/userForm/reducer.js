import { updateFirstName, updateLastName } from "./userFormActionType";

const initialState = {
  firstName: "chai",
  lastName: "paani",
};

export const userFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case updateFirstName:
      return {
        ...state,
        firstName: action.payload,
      };

    case updateLastName:
      return {
        ...state,
        lastName: action.payload,
      };
    default:
      return state
  }
};

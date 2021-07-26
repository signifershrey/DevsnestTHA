import { updateFirstName } from "./userFormActionType";
import { updateLastName } from "./userFormActionType";

//action creators

export const updateFirstNameInput  = (input) => {
    return {
      type: updateFirstName,
      payload : input
    };
}

export const updateLastNameInput = (input) => {
  return {
    type: updateLastName,
    payload: input,
  };
};
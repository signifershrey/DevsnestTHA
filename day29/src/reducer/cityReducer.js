export const cityReducer = (state = "goa", action) => {
  //updatecity is a type
  if (action.type === "UPDATE_CITY") {
    return action.payload;
  }
  return state;
};

import * as AT from "../actions/actionsTypes";

const initialState = {
  addressList: "",
  closestPeople: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.ON_ENTER:
      return {
        ...state,
        addressList: action.payload
      };
    
    case AT.ON_SUBMIT:
      return {
        ...state,
        closestPeople: action.payload
      };
    
    default:
      return state;
  }
};

export default reducer;

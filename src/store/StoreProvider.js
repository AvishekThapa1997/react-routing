
import  StoreContextProvider  from "./storeContext";
import { useReducer } from "react";
const DEFAULT_INITIAL_STATE = {
  data: null,
};
const reducer = (prevState, action) => {
  switch (action.type) {
    case "all-quote": {
      return {
        data: action.data,
      };
    }
    default: {
      return DEFAULT_INITIAL_STATE;
      }
  }
};
const StoreProvider = (props) => {
 return <StoreContextProvider value={useReducer(reducer, DEFAULT_INITIAL_STATE)}>
    {props.children}
  </StoreContextProvider>;
};

export default StoreProvider;

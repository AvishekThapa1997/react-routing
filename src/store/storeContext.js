import { createContext, useContext } from "react";
const StoreContext = createContext();
export const useStoreContext = () => useContext(StoreContext);
const StoreContextProvider = (props) => {
  return (
    <StoreContext.Provider value={props.value}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;

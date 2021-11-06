import { useCallback, useReducer } from "react";
import { useStoreContext } from "../store/storeContext";
const httpReducer = (state, action) => {
  if (action.type === "loading") {
    return {
      data: null,
      error: null,
      status: "loading",
    };
  }

  if (action.type === "success") {
    return {
      data: action.data,
      error: null,
      status: "success",
    };
  }

  if (action.type === "error") {
    return {
      data: null,
      error: action.errorMessage,
      status: "",
    };
  }

  return state;
};

function useHttp(requestFunction, startFromPending = false) {
  const [globalState, globalDispatch] = useStoreContext();
  //console.log(httpState);
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startFromPending ? "loading" : "",
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async function (requestData, actionType) {
      dispatch({ type: "loading" });
      // dispatch({ type: "loading" });
      //console.log(actionType);
      try {
        const responseData = await requestFunction(requestData);
        //dispatch({ type: 'SUCCESS', responseData });
        globalDispatch({ ...actionType, data: responseData });
        dispatch({ type: "success", data: responseData });
      } catch (error) {
        // dispatch({
        //   type: 'ERROR',
        //   errorMessage: error.message || 'Something went wrong!',
        // });
        dispatch({
          type: "error",
          error: error.message || "Something went wrong!",
        });
      }
    },
    [requestFunction, dispatch, globalDispatch]
  );
  return {
    sendRequest,
    state: httpState,
    globalContext: globalState,
  };
}

export default useHttp;

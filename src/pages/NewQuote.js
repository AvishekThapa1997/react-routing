import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router";
// import { DUMMY_DATA } from "../utility/dummyData";
import { addQuote } from "../lib/api";
import useHttp from "../hooks/use-http";
import { useEffect } from "react";
const NewQuote = () => {
  const history = useHistory();
  const { sendRequest,state } = useHttp(addQuote,false);
  useEffect(() => {
    if (state.status === "success") {
      history.goBack();
    }
  }, [state, history]);
  const onAddQuoteHandler = (quote) => {
    // const _quote = {
    //   ...quote,
    //   id: `q${state.data ? state.data.length + 1 : "q1"}`,
    // };
    sendRequest(quote, {
      type : "new-quote"
    });
    // DUMMY_DATA.push(_quote);
  };
  return (
    <QuoteForm
      isLoading={state.status === "loading"}
      onAddQuote={onAddQuoteHandler}
    />
  );
};

export default NewQuote;

import QuoteList from "../components/quotes/QuoteList";
// import { DUMMY_DATA } from "../utility/dummyData";
import { useMemo, Fragment, useEffect } from "react";
import { useLocation, useHistory } from "react-router";
import classes from "./AllQuotes.module.css";
import sortItem from "../utility/sorting";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
const AllQuotes = () => {
  const { search, pathname } = useLocation();
  const history = useHistory();
  const sortingParam = useMemo(() => new URLSearchParams(search), [search]);
  const { sendRequest, state, globalContext } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest("", {
      type : "all-quote"
    });
  }, [sendRequest]);
  let content;
  if (state.status === "loading") {
    content = <p>Loading...</p>;
  } else if (state.error) {
    content = <p>state.error</p>;
  } else if(state.status === "success" && state.data.length > 0){
    const sortingType = sortingParam.get("sort");
    const sortedItems = sortItem(globalContext.data, sortingType);
    const changeSortingHandler = (event) => {
      //history.replace(`${pathname}/?sort=${sortingType === "asc" ? "dsc" : "asc"}`);
      // Instead of doing like above we can also do like
      history.replace({
        pathname: pathname,
        search: `sort=${sortingType === "asc" ? "dsc" : "asc"}`,
      });
    };
    content = (
      <Fragment>
        <div className={classes.sorting}>
          <button onClick={changeSortingHandler}>{`Sort ${
            sortingType === "asc" ? "Descending" : "Ascending"
          }`}</button>
        </div>
        <QuoteList quotes={sortedItems} />
      </Fragment>
    );
  } else {
    content = <NoQuotesFound/>
  }
  return content;
};

export default AllQuotes;

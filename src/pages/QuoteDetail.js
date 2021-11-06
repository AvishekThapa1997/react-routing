import React from "react";
import { Route, useParams, useHistory,useRouteMatch } from "react-router";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import { useStoreContext } from "../store/storeContext";

const QuoteDetail = () => {
  const params = useParams();
  const history = useHistory();
  const match = useRouteMatch();
  const context = useStoreContext();
  const data = context[0].data;
  const quote  = data.find((element) => element.id === params.quoteId);
  const showCommentHandler = (event) => {
    history.replace(`${match.url}/comments`);
  };
  let content;
  if (quote) {
    content = (
      <React.Fragment>
        <HighlightedQuote text={quote.text} author={quote.author} />
        <Route path={match.path} exact>
          <div className="centered">
            <button onClick={showCommentHandler} className="btn--flat">
              Load Comments
            </button>
          </div>
        </Route>
        <Route path={ `${match.path}/comments` }>
          {
            <Comments />
            //Route path="/quotes/${params.quoteId}/comments">
          }
        </Route>
      </React.Fragment>
    );
  } else {
    content = <NoQuotesFound/>;
  }
  return content;
};

export default QuoteDetail;

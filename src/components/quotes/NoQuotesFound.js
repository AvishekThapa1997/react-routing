import classes from "./NoQuotesFound.module.css";
import { NavLink, Route } from "react-router-dom";
const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <Route path="/quotes" exact>
        <NavLink to="/addQuote" className="btn">
          Add a Quote
        </NavLink>
      </Route>
    </div>
  );
};

export default NoQuotesFound;

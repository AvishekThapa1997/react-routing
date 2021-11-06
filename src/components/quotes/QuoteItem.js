import classes from './QuoteItem.module.css';
import { NavLink,useRouteMatch} from 'react-router-dom';

const QuoteItem = (props) => {
  const route = useRouteMatch();
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <NavLink to ={`${route.path}/${props.id}`} className='btn'>
        View Fullscreen
      </NavLink>
    </li>
  );
};

export default QuoteItem;

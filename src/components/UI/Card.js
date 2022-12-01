import classes from './Card.module.css';

const Card = props => {
  return (

    <div className={classes.card}>
      <div>
        <p>{props.symbol}</p>
        <p>{props.val}</p>
        {props.change}
      </div>
    </div>
  )
};

export default Card;
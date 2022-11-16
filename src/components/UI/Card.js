import classes from './Card.module.css';

const Card = props => {
  return (
    // <div className={classes.card}>
    //   {props.children}
    // </div>
    <div className={classes.card}>
      <div>
        <p>{props.symbol}</p>
        <p>{props.val}</p>
        {/* <p>85.65(0.47%)</p> */}
        {props.change}
      </div>
    </div>
  )
};

export default Card;
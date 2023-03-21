import classes from "./button.module.css";
const Button = (props) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.click}
      className={classes.btn}
      data-testid={props.testId}
    >
      {props.title}
    </button>
  );
};

export default Button;

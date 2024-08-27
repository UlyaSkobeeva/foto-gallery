import style from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={style.btn}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;

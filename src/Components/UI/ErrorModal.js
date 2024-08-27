import React from "react";
import Button from "./Button";
import Card from "./Card";
import style from "./ErrorModal.module.css";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onCloseModal}></div>;
};

const Modal = (props) => {
  return (
    <Card className={style.modal}>
      <div className={style.content}>
        <p>{props.message}</p>
      </div>
      <div className={style.action}>
        {/* по клику по кнопке */}
        <Button onClick={props.onCloseModal}>ОК</Button>
      </div>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById("modal")
      )}
      {ReactDom.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          onCloseModal={props.onCloseModal}
        />,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;

import Card from "../UI/Card";
import style from "./NewGallery.module.css";
import Button from "../UI/Button";
import { useContext, useRef, useState } from "react";
import Context from "../store/Context";
import ErrorModal from "../UI/ErrorModal";

const NewGallery = (props) => {
  //связываем инпуты с реф
  const nameInputRef = useRef();
  const imgInputRef = useRef();
  const topicInputRef = useRef();

  const [inputNameIsValid, setInputNameIsValid] = useState();
  const [inputImgIsValid, setInputImgIsValid] = useState();
  const [inputTopicIsValid, setInputTopicIsValid] = useState();

  const [error, setError] = useState();

  const ctx = useContext(Context);

  const formSubmit = (event) => {
    event.preventDefault();
    //получить значения из инпутов и сохранить в переменную
    const inputName = nameInputRef.current.value;
    const inputImg = imgInputRef.current.value;
    const inputTopic = topicInputRef.current.value;

    if (inputName.trim().length === 0) {
      setInputNameIsValid(false);
      setError({
        message: "введите название фотографии!",
      });
      return;
    }

    if (inputImg.trim().length === 0) {
      setInputImgIsValid(false);
      setError({
        message: "введите URL фотографии!",
      });

      return;
    }

    if (inputTopic === "выбрать тему") {
      setInputTopicIsValid(false);
      setError({
        message: "необходимо выбрать тему!",
      });
      return;
    }

    const inputData = {
      id: Math.random().toString(),
      topic: inputTopic,
      name: inputName,
      img: inputImg,
    };

    //отправить данные в app
    ctx.onSubmitForm(inputData);
    // console.log(inputData);

    //очищаем значение инпутов
    nameInputRef.current.value = "";
    imgInputRef.current.value = "";
    topicInputRef.current.value = "выбрать тему";

    setInputNameIsValid();
    setInputImgIsValid();
    setInputTopicIsValid();
  };

  const closeModal = () => {
    setError(false);
  };

  return (
    <>
      {error && (
        <ErrorModal message={error.message} onCloseModal={closeModal} />
      )}

      <Card className={style["new-elem"]}>
        <form onSubmit={formSubmit}>
          <div className={style["new-input"]}>
            <label>название</label>
            <input
              type="text"
              ref={nameInputRef}
              placeholder={` ${
                inputNameIsValid === false ? "ВВЕДИТЕ НАЗВАНИЕ" : ""
              }`}
              className={` ${inputNameIsValid === false ? style.error : ""}`}
            />
          </div>
          <div className={style["new-input"]}>
            <label>URL фото</label>
            <input
              type="text"
              ref={imgInputRef}
              placeholder={` ${
                inputImgIsValid === false ? "ВВЕДИТЕ URL ФОТО" : ""
              }`}
              className={` ${inputImgIsValid === false ? style.error : ""}`}
            />
          </div>
          <div className={style["new-input"]}>
            <label>тема</label>
            <select
              ref={topicInputRef}
              // defaultValue="выбрать тему"
              // required
              className={` ${inputTopicIsValid === false ? style.err : ""}`}
            >
              <option value="выбрать тему" style={{ color: "red" }}>
                НЕОБХОДИМО ВЫБРАТЬ ТЕМУ
              </option>
              <option value="озера" data-color="red">
                озера
              </option>
              <option value="животные">животные</option>
              <option value="горы">горы</option>
              <option value="растения">растения</option>
            </select>
          </div>
          <div className={style["new-button"]}>
            <Button type="submit">Добавить новое фото</Button>
            <Button onClick={props.onCancelFormVisible}>Отмена</Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default NewGallery;

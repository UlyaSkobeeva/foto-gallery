import GalleryList from "./GalleryList";
import style from "./Gallery.module.css";
import GalleryFilter from "./GalleryFilter";
import { useState } from "react";
import NewGallery from "../NewGallery/NewGallery";
import Button from "../UI/Button";

const Gallery = (props) => {
  const { pictures } = props;

  const [selectedTopic, setSelectedTopic] = useState("горы");

  const [formVisible, setFormVisible] = useState(false);

  const selectTopicHandler = (topic) => {
    setSelectedTopic(topic);
  };

  const filteredGallery = pictures.filter((picture) => {
    return picture.topic === selectedTopic;
  });

  //показать форму
  const formVisibleHandler = () => {
    setFormVisible(true);
  };

  //скрыть форму
  const cancelFormVisibleHandler = () => {
    setFormVisible(false);
  };

  return (
    <>
      <h1 className={style.title}>Галерея фотографий</h1>

      {/* если  true*/}
      {!formVisible && (
        <div className={style.btn}>
          <Button onClick={formVisibleHandler}>
            Добавить новую фотографию
          </Button>
        </div>
      )}
      {/*  false*/}
      {formVisible && (
        <NewGallery onCancelFormVisible={cancelFormVisibleHandler} />
      )}

      <GalleryFilter
        topic={selectedTopic}
        onSelectedHandler={selectTopicHandler}
      />

      <GalleryList pictures={filteredGallery} />
    </>
  );
};

export default Gallery;

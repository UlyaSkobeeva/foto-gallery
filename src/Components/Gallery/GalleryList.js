import Card from "../UI/Card";
import GalleryItem from "./GalleryItem";
import style from "./GalleryList.module.css";

const GalleryList = (props) => {
  const { pictures } = props;

  if (pictures.length === 0) {
    return (
      <p className={style.error}>Фотографии по этой теме еще не добавлены!</p>
    ); 
  }

  return (
    <Card className={style.list}>
      {pictures.map((picture) => (
        <GalleryItem key={picture.id} name={picture.name} img={picture.img} />
      ))}
    </Card>
  );
};

export default GalleryList;

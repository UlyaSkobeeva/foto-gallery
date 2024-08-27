import style from "./GalleryItem.module.css";

const GalleryItem = (props) => {
  const { img, name } = props;
  return (
    <div className={style.item}>
      <div className={style.image}>
        <img src={img} alt="" />
      </div>
      <p className={style.title}> {name}</p>
    </div>
  );
};

export default GalleryItem;

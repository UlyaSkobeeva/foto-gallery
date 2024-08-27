import Card from "../UI/Card";
import style from "./GalleryFilter.module.css";

const GalleryFilter = (props) => {
  const { topic } = props;

  const topicChangeHandler = (event) => {
    const selectedTopic = event.target.value;
    props.onSelectedHandler(selectedTopic);
  };

  return (
    <Card className={style.filter}>
      <p className={style.title}>Выберите тему:</p>
      <select value={topic} onChange={topicChangeHandler}>
        <option value="озера">озера</option>
        <option value="растения">растения</option>
        <option value="горы">горы</option>
        <option value="животные">животные</option>
      </select>
    </Card>
  );
};
export default GalleryFilter;

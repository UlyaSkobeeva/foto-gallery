import "./App.css";

import { useState } from "react";
import Gallery from "./Components/Gallery/Gallery";
import Context from "./Components/store/Context";

const INITIAL_GALLERY = [
  {
    id: "1",
    topic: "горы",
    name: "Альпы",
    img: "https://s9.travelask.ru/system/images/files/001/276/193/wysiwyg_jpg/%D0%B0%D0%BB%D1%8C%D0%BF%D1%8B.jpg?1550655537",
  },
  {
    id: "2",
    topic: "озера",
    name: "Байкал",
    img: "https://youtravel.me/upload/medialibrary/463/4636d6acfcb3ab91cff82e7c741c353a.jpg",
  },
  {
    id: "3",
    topic: "горы",
    name: "Арарат",
    img: "https://s9.travelask.ru/system/images/files/001/276/191/wysiwyg_jpg/%D0%B0%D1%80%D0%B0%D1%80%D0%B0%D1%82.jpg?1550655522",
  },
  {
    id: "4",
    topic: "озера",
    name: "Кезеной-Ам",
    img: "https://youtravel.me/upload/medialibrary/082/0826ed0efbd11d7432a3abf950b13a98.jpg",
  },
  {
    id: "5",
    topic: "горы",
    name: "Эверест",
    img: "https://s9.travelask.ru/system/images/files/001/276/184/wysiwyg_jpg/%D0%B4%D0%B6%D0%BE%D0%BC%D0%BE%D0%BB..jpg?1550655398",
  },
  {
    id: "6",
    topic: "растения",
    name: "Ирис желтый",
    img: "https://lh4.googleusercontent.com/FFgp8eNmD94KxiIxVsye5Y9XiAP6tS79-alM0FljahCLt-JhqNHLnkq993Q7wAlj6Bud-mQED15PKOPMvKM9lyA25MMbTzEjMiT9wbqyGELOh0sJEaonIaWo7isnwHjMm34J-hIiu1ZXE9J1n6SfMR8",
  },
  {
    id: "7",
    topic: "растения",
    name: "Ландыш",
    img: "https://lh3.googleusercontent.com/TH8dqQJ8CQr42SJ6TBLvZTN96EJQmBUA-WjNRLVj7my4cpOLwaMy24iMrMU5QsEpsEj1feQhr3-0hqqvGbQDOtZu4F4drGSPqVnu2fN-00r4LKIE6YDlzRX32DgBuHp3Z7rDqwTN9EMEMt8pOCnY2zU",
  },
];

function App() {
  const [pictures, setPictures] = useState(INITIAL_GALLERY);

  const savePicturesHandler = (picture) => {
    setPictures((prevPictures) => {
      return [...prevPictures, picture];
    });
  };

  return (
    <Context.Provider value={{ onSubmitForm: savePicturesHandler }}>
      <Gallery pictures={pictures} />
    </Context.Provider>
  );
}

export default App;

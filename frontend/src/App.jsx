import {useState} from "react";
import "./App.css";
import ContextApi from "./contextApi";
import {FacialRecognition} from "./modules/FacialRecognition";

function App() {
  const [imgSrc, setImgSrc] = useState(null);

  const updateImgSrc = (imgSrc) => {
    setImgSrc(imgSrc);
  };

  return (
    <ContextApi.Provider value={{imgSrc, updateImgSrc}}>
      <FacialRecognition />
    </ContextApi.Provider>
  );
}

export default App;

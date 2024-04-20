import {useState} from "react";
import logo from "../../../../../assets/logo-200-200.png";
import "./styles.css";

export const CardRegisterPerson = () => {
  const [img, setImg] = useState(logo);

  const handleImg = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImg(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="card-register-person-container">
      <img className="card-register-person-image" src={img} alt="" />
      <div className="card-register-person-form">
        <input type="file" placeholder="" onChange={handleImg} />
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="status" />
        <button>Salvar</button>
      </div>
    </div>
  );
};

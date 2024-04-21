import { useContext, useState} from "react";
import logo from "../../../../../assets/logo-200-200.png";
import "./styles.css";
import { ButtonSend } from "../../atoms/buttonPrimary";
import API from "../../../../../services/api";
import { ContextApi } from "../../../../../contextApi";

export const CardRegisterPerson = () => {
  const [isSending, setIsSending] = useState(false);
  const [registerData, setRegisterData] = useState({imageBase64: "", name: "", wanted: true});
  const {updateRefresh} = useContext(ContextApi)

  const handleImg = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setRegisterData((prevState) => ({...prevState, imageBase64: reader.result.replace("data:image/jpeg;base64,", "")}));
    };
    reader.readAsDataURL(file);
  };

  const SendNewPerson = async () => {
    setIsSending(true);
    await API.post("/person-register", registerData).then(() => {
      setIsSending(false);
      setRegisterData({imageBase64: "", name: "", wanted: ""});
      updateRefresh(true);
    });
  };

  return (
    <div className="card-register-person-container">
      <img
        className="card-register-person-image"
        src={registerData.imageBase64 !== "" ? `data:image/jpeg;base64,${registerData.imageBase64}` : logo}
        alt=""
      />
      <div className="card-register-person-form">
        <input type="file" id="file-input" onChange={handleImg} accept="image/jpeg" style={{display: "none"}} />
        <label htmlFor="file-input" className="input-file">
          Escolher imagem
        </label>
        <div className="form-item">
          <label htmlFor="input">
            <b>Nome:</b>
          </label>
          <input
            className="input-text"
            type="text"
            name="input"
            placeholder="Nome"
            onChange={(event) => setRegisterData((prevState) => ({...prevState, name: event.target.value}))}
          />
        </div>
        <div className="form-item">
          <label htmlFor="select">
            <b>Procurado?:</b>
          </label>
          <select
            className="input-text"
            name="select"
            onChange={(event) => setRegisterData((prevState) => ({...prevState, wanted: Boolean(event.target.value)}))}
          >
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
        </div>
        <ButtonSend onClick={SendNewPerson} isSending={isSending}/>
      </div>
    </div>
  );
};

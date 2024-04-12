import {useContext, useRef} from "react";
import {ButtonCam} from "../ButtonCam";
import "./styles.css";
import {ButtonClose} from "../ButtonClose";
import {Cam} from "../../atoms/WebCam";
import {ContextApi} from "../../../../../contextApi";
import {ButtonSend} from "../ButtonSend";
import API from "../../../../../services/api";

export const CardMain = () => {
  const camRef = useRef();
  const context = useContext(ContextApi);

  const sendToRecognition = async () => {
    const resp = await API.post("/person-recognize", {imageBase64: context.imgSrc}).then((response) => {
      return response.data;
    }).catch((error) => {
      return error.response.data;
    })

    if (resp.status === 200) context.updateConsult({name: resp.name, wanted: resp.wanted, status: resp.status});

    if (resp.status !== 200) context.updateConsult({name: resp.message, wanted: false, status: resp.status});
  };

  return (
    <div className="card-main-container">
      <div className="card-main-title">Reconhecimento Facial</div>
      <Cam ref={camRef} />
      <div className="response-container">
        {context?.consult?.status === 200 && (
          <div className="response-success">
            <p>Nome: {context?.consult?.name}</p>
            <p>Procurado: {context?.consult?.wanted ? "Sim" : "Não"}</p>
          </div>
        )}
        {context?.consult?.status !== 200 && (
          <div className="response-success">
            <p>{context?.consult?.name}</p>
          </div>
        )}
      </div>
      <div className="buttons-container">
        {!context.imgSrc && <ButtonCam onClick={() => camRef.current.capture()} />}
        {context.imgSrc && (
          <>
            <ButtonClose onClick={() => {camRef.current.reset(), context.resetAll()}} />
            <ButtonSend onClick={sendToRecognition} />
          </>
        )}
      </div>
    </div>
  );
};

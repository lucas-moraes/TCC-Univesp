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
    context.updateSending(true);
    const resp = await API.post("/person-recognize", {imageBase64: context.imgSrc})
      .then((response) => {
        return response;
      })

    if (resp.status === 200) {
      context.updateConsult({name: resp.data.name, wanted: resp.data.wanted, status: resp.status});
    }
    
    if (resp.status !== 200) {
      context.updateConsult({message: resp.data.message, status: resp.status});
    }

    context.updateSending(false);
  };

  return (
    <div className="card-main-container">
      <div className="card-main-title">Reconhecimento Facial</div>
      <Cam ref={camRef} />
      <div className="response-container">
        {Object.keys(context?.consult).length !== 0 && context?.consult?.status === 200 && (
          <div className="response-success">
            <span><b>Nome</b>: {context?.consult?.name}</span>
            <span><b>Procurado</b>: {context?.consult?.wanted ? "Sim" : "Não"}</span>
          </div>
        )}
        {Object.keys(context?.consult).length !== 0 && context?.consult?.status !== 200 && (
          <div className="response-success">
            <span>{context?.consult?.message}</span>
          </div>
        )}
      </div>
      <div className="buttons-container">
        {!context.imgSrc && <ButtonCam onClick={() => camRef.current.capture()} />}
        {context.imgSrc && (
          <>
            <ButtonClose
              onClick={() => {
                camRef.current.reset(), context.resetAll();
              }}
            />
            <ButtonSend onClick={sendToRecognition} />
          </>
        )}
      </div>
    </div>
  );
};

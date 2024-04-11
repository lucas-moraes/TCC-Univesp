import {useContext, useRef} from "react";
import {ButtonCam} from "../ButtonCam";
import "./styles.css";
import {ButtonClose} from "../ButtonClose";
import {Cam} from "../../atoms/WebCam";
import ContextApi from "../../../../../contextApi";
import {ButtonSend} from "../ButtonSend";

export const CardMain = () => {
  const camRef = useRef();
  const context = useContext(ContextApi);

  console.log(context);

  return (
    <div className="card-main-container">
      <Cam ref={camRef} />
      <div className="buttons-container">
        {!context.imgSrc && <ButtonCam onClick={() => camRef.current.capture()} />}
        {context.imgSrc && (
          <>
            <ButtonClose onClick={() => camRef.current.reset()} />

            <ButtonSend onClick={() => {}} />
          </>
        )}
      </div>
    </div>
  );
};

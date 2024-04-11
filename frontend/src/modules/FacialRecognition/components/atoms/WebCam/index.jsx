import {forwardRef, useContext, useImperativeHandle, useRef} from "react";
import Webcam from "react-webcam";
import "./styles.css";
import ContextApi from "../../../../../contextApi";

export const Cam = forwardRef((props, ref) => {
  const {imgSrc, updateImgSrc} = useContext(ContextApi);
  const webCamRef = useRef(null);

  const capture = () => {
    const imageSrc = webCamRef.current.getScreenshot();
    updateImgSrc(imageSrc);
  };

  const reset = () => {
    updateImgSrc(null);
  };

  useImperativeHandle(ref, () => {
    return {
      capture,
      reset,
    };
  });

  console.log(Webcam)

  return (
    <div className="container">
      {imgSrc && <img src={imgSrc} alt="captured" />}
      {!imgSrc && (
        <Webcam
          audio={false}
          width={300}
          height={300}
          screenshotFormat="image/jpeg"
          videoConstraints={{
            width: 300,
            height: 300,
            facingMode: "user",
          }}
          ref={webCamRef}
        />
      )}
    </div>
  );
});

Cam.displayName = "Cam";

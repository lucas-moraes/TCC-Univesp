import {forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState} from "react";
import Webcam from "react-webcam";
import "./styles.css";
import {ContextApi} from "../../../../../contextApi";
import logo from "../../../../../assets/logo-200-200.png";

export const Cam = forwardRef((props, ref) => {
  const [isLoading, setIsLoading] = useState(true);
  const {imgSrc, isSending, updateImgSrc} = useContext(ContextApi);
  const webCamRef = useRef(null);

  const capture = () => {
    let imageSrc = webCamRef.current.getScreenshot();
    imageSrc = imageSrc.replace("data:image/jpeg;base64,", "");
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

  const HandleUserMedia = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (!imgSrc) {
      setIsLoading(true);
    }
    navigator.mediaDevices.getUserMedia({video: true});
  }, [imgSrc]);

  return (
    <div className="container">
      {isSending && (
        <div className="overflow">
          <div className="webcam-loader-Container">
            <img src={logo} alt="logo" className="logo" />
            <div className="loaderItem">
              <div className="loader"></div>
            </div>
          </div>
        </div>
      )}
      {imgSrc && <img src={`data:image/jpeg;base64,${imgSrc}`} className="web-cam-img" alt="captured" />}
      {!imgSrc && (
        <>
          <Webcam
            audio={false}
            onUserMedia={HandleUserMedia}
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
          {isLoading && (
            <div className="webcam-loader-Container">
              <img src={logo} alt="logo" className="logo" />
              <div className="loaderItem">
                <div className="loader"></div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
});

Cam.displayName = "Cam";

import "./App.css";
import Webcam from "react-webcam";

function App() {
  const videoConstraints = {
    width: 300,
    height: 300,
    facingMode: "user",
  };

  return (
    <div className="container">
      <Webcam
        audio={false}
        width={300}
        height={300}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
    </div>
  );
}

export default App;

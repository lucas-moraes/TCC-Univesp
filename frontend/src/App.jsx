import "./App.css";
import {ContextApiProvider} from "./contextApi";
import {FacialRecognition} from "./modules/FacialRecognition";

function App() {

  return (
    <ContextApiProvider>
      <FacialRecognition />
    </ContextApiProvider>
  );
}

export default App;

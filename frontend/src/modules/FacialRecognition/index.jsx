import {useEffect, useRef, useState} from "react";
import API from "../../services/api";
import {CardMain} from "./components/molecules/CardMain";
import {Loader} from "./components/atoms/Loader";

export const FacialRecognition = () => {
  const [isApiConnected, setIsApiConnected] = useState(false);
  const callApi = useRef(false);
  async function ConnectToApi() {
    await API.get("/health-check").then((response) => {
      if (response.status === 200) {
        setTimeout(() => {
          setIsApiConnected(true);
        }, 3000);
      }
    });
  }

  useEffect(() => {
    if(!callApi.current){
      callApi.current = true;
      ConnectToApi();
    }
  }, []);

  return (
    <>
      <Loader hide={isApiConnected} />
      {isApiConnected && <CardMain />}
    </>
  );
};

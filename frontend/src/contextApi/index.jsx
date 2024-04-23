import React, {useState} from "react";
import PropTypes from "prop-types";

const ContextApi = React.createContext();

const ContextApiProvider = ({children}) => {
  const [consult, setConsult] = useState({});
  const [imgSrc, setImgSrc] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const updateImgSrc = (imgSrc) => {
    setImgSrc(imgSrc);
  };

  const updateConsult = (consult) => {
    setConsult(consult);
  };

  const updateSending = (isSending) => {
    setIsSending(isSending);
  };

  const updateRefresh = (refresh) => {
    setRefresh(refresh);
  };

  const resetAll = () => {
    setConsult({});
    setImgSrc(null);
  };

  return (
    <ContextApi.Provider
      value={{imgSrc, updateImgSrc, consult, updateConsult, isSending, updateSending, refresh, updateRefresh, resetAll}}
    >
      {children}
    </ContextApi.Provider>
  );
};

ContextApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {ContextApi, ContextApiProvider};

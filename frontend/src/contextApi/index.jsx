import React from "react";
import PropTypes from "prop-types";

const ContextApi = React.createContext();

const ContextApiProvider = ({children}) => {
  const [consult, setConsult] = React.useState({});
  const [imgSrc, setImgSrc] = React.useState(null);

  const updateImgSrc = (imgSrc) => {
    setImgSrc(imgSrc);
  };

  const updateConsult = (consult) => {
    setConsult(consult);
  };

  const resetAll = () => {
    setConsult({});
    setImgSrc(null);
  };

  return (
    <ContextApi.Provider value={{imgSrc, updateImgSrc, consult, updateConsult, resetAll}}>
      {children}
    </ContextApi.Provider>
  );
};

ContextApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {ContextApi, ContextApiProvider};

import "./styles.css";
import PropTypes from "prop-types";

export const CardPersons = ({imgSrc, name, wanted}) => {
  return (
    <div className="card-persons">
      <div className="card-persons-header-container">
        <img src={`data:image/jpeg;base64,${imgSrc}`} className="card-person-image" alt=""/>
      </div>
      <div className="card-persons-body-container">
        <span className="card-person-name"><b>Nome: </b>{name}</span>
        <span className="card-person-status"><b>Status: </b>{wanted ? "Procurado" : "Não procurado"}</span>
      </div>
    </div>
  );
};

CardPersons.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  wanted: PropTypes.bool.isRequired,
};

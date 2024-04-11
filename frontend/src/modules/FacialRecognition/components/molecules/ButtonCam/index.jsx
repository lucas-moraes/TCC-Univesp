import {IconCam} from "../../atoms/IconCam";
import PropTypes from "prop-types";
import "./styles.css";

export const ButtonCam = (props) => {
  return (
    <button className="button-primary" onClick={props.onClick}>
      <IconCam />
    </button>
  );
};

ButtonCam.propTypes = {
  onClick: PropTypes.func.isRequired,
};

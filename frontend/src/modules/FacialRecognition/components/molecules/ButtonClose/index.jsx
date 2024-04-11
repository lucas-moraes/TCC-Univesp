import PropTypes from "prop-types";
import "./styles.css";
import { IconClose } from "../../atoms/IconClose";

export const ButtonClose = (props) => {
  return (
    <button className="button-primary" onClick={props.onClick}>
      <IconClose />
    </button>
  );
};

ButtonClose.propTypes = {
  onClick: PropTypes.func.isRequired,
};

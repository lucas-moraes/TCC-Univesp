import PropTypes from "prop-types";
import "./styles.css";
import { IconSend } from "../../atoms/IconSend";

export const ButtonSend = (props) => {
  return (
    <button className="button-secundary" onClick={props.onClick}>
      <IconSend />
    </button>
  );
};

ButtonSend.propTypes = {
  onClick: PropTypes.func.isRequired,
};

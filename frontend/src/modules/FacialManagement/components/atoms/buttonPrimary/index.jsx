import PropTypes from 'prop-types';
import "./styles.css";

export const ButtonSend = (props) => {
    return (
        <button className="button-send" onClick={() => props.onClick()}>
            {props.isSending ? <div className="loader-button"></div> : "Enviar"}
        </button>
    );
};

ButtonSend.propTypes = {
    isSending: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

import OverlayStyles from './ModalOverlay.module.css'
import PropTypes from "prop-types";

export default function ModalOverlay({onClose}) {

    return (<div className={OverlayStyles.overlay} onClick={onClose}/>)
}

ModalOverlay.propTypes = {
    onClose: PropTypes.func.isRequired
};
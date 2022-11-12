import OverlayStyles from './ModalOverlay.module.css';
import PropTypes from 'prop-types';

export default function ModalOverlay({onClose, children}) {
    return (
        <div className={OverlayStyles.overlay} onClick={onClose}>
            {children}
        </div>
    )
}

ModalOverlay.propTypes = {
    onClose: PropTypes.func
};
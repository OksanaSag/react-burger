import OverlayStyles from './ModalOverlay.module.css';

export default function ModalOverlay({onClose, children}) {
    return (
        <div className={OverlayStyles.overlay} onClick={onClose}>
            {children}
        </div>
    )
}
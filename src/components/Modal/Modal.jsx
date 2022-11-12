import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import ModalOverlay  from '../ModalOverlay/ModalOverlay'
import ModalStyles from './Modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function Modal (props) {
    const modalRoot = document.getElementById('react-modals');
    const { open, onClose } = props;

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }
        if (open) {
            document.addEventListener('keydown', onKeyDown)
        }
        return () => {
            document.removeEventListener('keydown', onKeyDown)
        }
    })
    
    if(open) {
        return createPortal(
            (<>
                {(<ModalOverlay onClose={onClose}>
                    <div className={ModalStyles.modal} onClick={props.onClick}>
                        <div className={ModalStyles.title + ' mt-10 ml-10 mr-10'}>
                            <p className='text text_type_main-large'>
                                {props.title}
                            </p>
                            <div style={{cursor: 'pointer'}}>
                            <CloseIcon onClick={onClose} />
                        </div>
                        </div>
                        <div>
                            {props.children}
                        </div>
                    </div>
                </ModalOverlay>
                )}
            </>), modalRoot);
    } return null;
} 

Modal.propTypes = {
    onClose: PropTypes.func,
    title: PropTypes.string,
    onClick: PropTypes.func,
    open: PropTypes.bool
};
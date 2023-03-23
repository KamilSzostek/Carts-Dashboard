import React, { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import ReactDOM from 'react-dom';
import './Modal.scss'

interface IModalProps {
    children: React.ReactNode,
    isOpen: boolean,
    closeModal: () => void
}

const Modal: React.FunctionComponent<IModalProps> = ({ children, isOpen, closeModal }) => {
    const dialogRef = useRef<HTMLDialogElement>(null)
    const backdropRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const dialog = dialogRef.current!;
        isOpen && dialog.show()
    }, [isOpen])

    return ReactDOM.createPortal((

        <section className='modal-alert' >
            <CSSTransition
                in={isOpen}
                nodeRef={backdropRef}
                timeout={300}
                unmountOnExit
                classNames="backdrop">
                <div className='backdrop' ref={backdropRef} onClick={closeModal} />
            </CSSTransition>
            <CSSTransition
                in={isOpen}
                nodeRef={dialogRef}
                timeout={300}
                unmountOnExit
                classNames="modal">
                <dialog ref={dialogRef}>
                    {children}
                </dialog>
            </CSSTransition>
        </section>
    ), document.body)
};

export default Modal;



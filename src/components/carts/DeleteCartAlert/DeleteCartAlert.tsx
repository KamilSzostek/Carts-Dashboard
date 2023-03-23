import React from 'react';
import './DeleteCartAlert.scss'

interface IDeleteCartAlertProps {
    cartNumber: number,
    closeModal: () => void,
    removeCart: () => void
}

const DeleteCartAlert: React.FunctionComponent<IDeleteCartAlertProps> = ({ cartNumber, closeModal, removeCart }) => {
    const removeHandler = ()=>{
        removeCart()
        closeModal()
    }
    
    return (
        <div className='delete-alert'>
            <h3>Do you want delete Cart Nr.{cartNumber}?</h3>
            <section className='controls'>
                <button className='ok' onClick={removeHandler}>Delete</button>
                <button className='cancel' onClick={closeModal}>Cancel</button>
            </section>
        </div>
    );
};

export default DeleteCartAlert;



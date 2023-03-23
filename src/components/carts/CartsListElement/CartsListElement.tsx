import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons'
import { StoreContext } from '../../../store/StoreProvider';
import './CartsListElement.scss';

interface ICartsListElementProps {
    cartId: number,
    openModal: () => void,
    closeModal: () => void,
    setCartToRemove: (cartId: number) => void,
    selectCart: (id: number) => void
}

const CartsListElement: React.FunctionComponent<ICartsListElementProps> = ({ cartId, openModal, setCartToRemove, selectCart }) => {
    const { selectedCart } = useContext(StoreContext);

    const removeHandler = () => {
        setCartToRemove(cartId)
        openModal()
    }
    const clickHandler = (e: React.MouseEvent<HTMLLIElement>) => selectCart(cartId)

    const activeClass = selectedCart?.id === cartId ? 'carts-list-element__container active' : 'carts-list-element__container'

    return (
        <li className='carts-list-element' onClick={clickHandler}>
            <div className={activeClass}>
                <div className='cart-icon'>
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <span>{cartId}</span>
            </div>
            <div className='delete' onClick={removeHandler}>
                <FontAwesomeIcon icon={faTrash} />
            </div>
        </li>
    );
};

export default CartsListElement;

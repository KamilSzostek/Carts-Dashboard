import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../../store/StoreProvider';
import BaseHeader from '../../ui/BaseHeader/BaseHeader';
import CartsListElement from '../CartsListElement/CartsListElement';
import Modal from '../../ui/Modal/Modal';
import DeleteCartAlert from '../DeleteCartAlert/DeleteCartAlert';
import LoadingAlert from '../../ui/LoadingAlert/LoadingAlert';
import './CartsList.scss';


export let renderCartList: () => void;

const CartsList: React.FunctionComponent = () => {
    const { avalibleCarts, setCarts, setCart } = useContext(StoreContext)

    const [render, setRender] = useState(false);
    const [removingCartId, setRemovingCartId] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoadingOpen, setIsLoadingOpen] = useState(true);

    renderCartList = () => setRender(!render)
    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)
    const closeLoading = () => setIsLoadingOpen(false)
    const setCartToRemove = (cartId: number) => {
        setRemovingCartId(cartId)
    }

    useEffect(() => {
        if (avalibleCarts)
            avalibleCarts.length > 0 && closeLoading();
    }, [avalibleCarts])

    const removeCart = () => {
        if (avalibleCarts) {
            const updatedList = avalibleCarts.filter(cart => cart.id !== removingCartId)
            if (setCarts && setCart) {
                setCarts(updatedList)
                setCart(avalibleCarts[0])
            }
        }
    }

    const selectCart = (id: number) => {
        const selectedCart = avalibleCarts?.find(cart => cart.id === id)
        if (setCart)
            setCart(selectedCart!)
    }

    const listElements = avalibleCarts?.map((element) => (
        <CartsListElement
            key={element.id}
            cartId={element.id}
            openModal={openModal}
            closeModal={closeModal}
            setCartToRemove={setCartToRemove}
            selectCart={selectCart}
        />
    ))
    return (
        <aside className='carts-list'>
            <BaseHeader title='avalible carts' />
            <ul>
                {listElements}
            </ul>
            <Modal isOpen={isModalOpen} closeModal={closeModal}>
                <DeleteCartAlert cartNumber={removingCartId} removeCart={removeCart} closeModal={closeModal} />
            </Modal>
            <Modal isOpen={isLoadingOpen} closeModal={closeLoading}>
                <LoadingAlert />
            </Modal>
        </aside>
    );
};

export default CartsList;

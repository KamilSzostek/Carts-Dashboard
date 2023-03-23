import React, { useContext } from 'react';
import { StoreContext } from '../../../store/StoreProvider';
import { renderProductList } from '../ProductsList/ProductsList';
import BaseButton from '../../ui/BaseButton/BaseButton';
import InnerContainer from '../../ui/InnerContainer/InnerContainer';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import './SelectedProduct.scss';

const SelectedProduct: React.FunctionComponent = () => {
    const { selectedProduct, products, setProducts } = useContext(StoreContext)

    const addProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
        const newProducts = products;
        if (selectedProduct) {
            const product = newProducts?.find(product => product.id === selectedProduct.id)
            if (product)
                product.quantity += 1
            else newProducts?.unshift({ ...selectedProduct, quantity: 1 })
        }
        else return
        if (setProducts) {
            setProducts(newProducts!)
            renderProductList()
        }
    }
    return (
        <section className='selected-product d-flex justify-content-between w-100 mt-3'>
            <InnerContainer>
                <label>
                    Selected product:
                    <span className='text-capitalize'>{selectedProduct?.title}</span>
                </label>
            </InnerContainer>
            <BaseButton text='add product' click={addProduct} icon={faPlusCircle} isLight={true}/>
        </section>
    );
};

export default SelectedProduct;

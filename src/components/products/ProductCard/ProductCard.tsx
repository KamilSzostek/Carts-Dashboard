import React, { useContext } from 'react';
import { discountedPrice } from '../../../helpers/discountedProductPrice';
import { StoreContext } from '../../../store/StoreProvider';
import { IProduct } from '../../../types/IProduct';
import './ProductCard.scss';

interface IProductCardProps {
    product: IProduct
}

const ProductCard: React.FunctionComponent<IProductCardProps> = ({ product }) => {
    const { price, title, thumbnail, quantity } = product;


    const { setProduct } = useContext(StoreContext)
    const productSetter = (e: React.MouseEvent<HTMLLIElement>) => {
        if (setProduct)
            setProduct(product)
    }
    return (
        <li onClick={productSetter}>
            <div className='product-card d-flex me-5'>
                <figure className='w-50'>
                    < img src={thumbnail} alt={title} />
                </figure>
                <div className='w-50 product-card__info'>
                    <h5 className='p-1 fs-6'>{title}</h5>
                    <div className='product-card__info__price d-flex justify-content-around'>
                        <p className='product-card__info__price-regular' ><span>{price}</span>$</p>
                        <p className='fs-5 fw-bold' >{discountedPrice(product)}$</p>
                    </div>
                    <p className='product-card__info__quantity fs-5 pb-3' ><span className='fs-6'>Quantity: </span>{quantity}</p>
                </div>
            </div>
        </li>
    );
};

export default ProductCard;

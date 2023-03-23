import React, { useContext, useState } from 'react';
import { StoreContext } from '../../../store/StoreProvider';
import BaseButton from '../../ui/BaseButton/BaseButton';
import ProductCard from '../ProductCard/ProductCard';
import InnerContainer from '../../ui/InnerContainer/InnerContainer';
import { newCart } from '../../../helpers/addCart';
import { renderCartList } from '../../carts/CartsList/CartsList';
import { faCartPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import './ProductsList.scss';


export let renderProductList: () => void;

const ProductsList: React.FunctionComponent = () => {
  const { products, avalibleCarts, setCarts, setProducts } = useContext(StoreContext);

  const [render, setRender] = useState(false)

  renderProductList = () => setRender(!render)

  const clearCartHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (setProducts)
      setProducts([])
  }

  const addCartHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (products && avalibleCarts && setCarts && setProducts && products.length > 0) {
      const newId = avalibleCarts.length + 1
      const updatedCarts = avalibleCarts;
      updatedCarts.push(newCart(products, newId))
      setCarts(updatedCarts)
      setProducts([])
      renderCartList()

    }
  }

  const productCards = products?.map(product => (
    <ProductCard key={product.id} product={product} />
  ))
  return (
    <section className='products-list'>
      <h3 className='ms-4 mt-3'>Products Added to New Cart:</h3>
      <div className='d-flex justify-content-between'>
        <InnerContainer>
          <ul className='d-flex ms-5'>
            {productCards}
          </ul>
        </InnerContainer>
        <div className='product-list__controls me-5'>
          <BaseButton text='clear cart' click={clearCartHandler} icon={faTrash} isCircle={true} />
          <BaseButton text='add cart' icon={faCartPlus} click={addCartHandler} isCircle={true} isLight={true} />
        </div>
      </div>
    </section>
  );
};

export default ProductsList;

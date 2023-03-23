import React from 'react';
import './SelectedCartInfo.scss';

interface ISelectedCartInfoProps {
  id: number,
  productsQuantity: number,
  price: number,
  discountedPrice: number
}

const SelectedCartInfo: React.FunctionComponent<ISelectedCartInfoProps> = ({ id, productsQuantity, price, discountedPrice }) => {
  return (
    <section className='cart-info fs-4 text-capitalize'>
      <h3 className='mt-4 ps-3'>Cart Nr.{id}</h3>
      <hr />
      <div className='cart-info__paragraphs p-4'>
        <p>total products quantity: <span>{productsQuantity}</span></p>
        <p>total price: <span>{price}</span>$</p>
        <p>discounted total price: <span>{discountedPrice}</span>$</p>
      </div>
    </section>
  );
};

export default SelectedCartInfo;

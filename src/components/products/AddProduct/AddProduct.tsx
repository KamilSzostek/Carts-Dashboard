import React from 'react';
import ProductSearch from '../ProductSearch/ProductSearch';
import ProductSelector from '../ProductSelector/ProductSelector';
import SelectedProduct from '../SelectedProduct/SelectedProduct';
import './AddProduct.scss';

const AddProduct: React.FunctionComponent = () => {
  return (
    <section className='add-product'>
      <div className='d-flex justify-content-between'>
        <ProductSearch />
        <ProductSelector />
      </div>
      <div className='d-flex'>
        <SelectedProduct />
      </div>
    </section>
  );
};

export default AddProduct;

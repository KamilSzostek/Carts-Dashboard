import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { getData } from '../../../helpers/getData';
import { StoreContext } from '../../../store/StoreProvider';
import { IProduct } from '../../../types/IProduct';
import Select from './subcomponents/Select';
import './ProductSelector.scss';

const ProductSelector: React.FunctionComponent = () => {
    const { setProduct } = useContext(StoreContext);

    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [products, setProducts] = useState<IProduct[]>([]);

    const categoryHandler = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCategory(e.currentTarget.value)
    const productHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const product = products.find(product => product.title === e.currentTarget.value)
        if (setProduct && product)
            setProduct(product)
        setSelectedProduct(e.currentTarget.value)
    }
    const setCategory = (data: string[]) => setCategories(data);
    const setProductsOfCategory = (data: IProduct[]) => setProducts(data);

    useLayoutEffect(() => {
        getData('https://dummyjson.com/products/categories', '', setCategory)
    }, [])

    useEffect(() => {
        selectedCategory !== '' 
        ? getData(`https://dummyjson.com/products/category/${selectedCategory}`, 'products', setProductsOfCategory)
        : setProducts([])
    }, [selectedCategory])

    useEffect(() => {
        if (setProduct)
            setProduct(products[0])
    }, [products])


    return (
        <section className='product-selector'>
            <div className='product-selector__box mt-3 mb-3'>
                <Select
                    label='Choose product category:'
                    selectedItem={selectedCategory}
                    items={categories} change={categoryHandler}
                    hasBlank={true}
                />
            </div>
            <div className='product-selector__box'>
                <Select
                    label='Choose product:'
                    selectedItem={selectedProduct}
                    items={products} change={productHandler}
                    hasBlank={false}
                    isDisabled={selectedCategory === ''}
                />
            </div>
        </section>
    );
};

export default ProductSelector;

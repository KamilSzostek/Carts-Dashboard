import React from 'react';
import BaseContainer from '../../ui/BaseContainer/BaseContainer';
import BaseHeader from '../../ui/BaseHeader/BaseHeader';
import AddProduct from '../../products/AddProduct/AddProduct';
import ProductsList from '../../products/ProductsList/ProductsList';
import SelectedCart from '../../carts/SelectedCart/SelectedCart';
import './MainLayout.scss';

const MainLayout: React.FunctionComponent = () => {
    return (
        <main className='main-layout'>
            <BaseContainer>
                <BaseHeader title='add new cart' />
                <div className='wrapper'>
                    <AddProduct />
                    <ProductsList />
                </div>
            </BaseContainer>
            <BaseContainer>
                <BaseHeader title='selected cart' />
                <SelectedCart />
            </BaseContainer>
        </main>
    );
};

export default MainLayout;

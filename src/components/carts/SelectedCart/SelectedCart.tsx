import React, { useContext } from 'react';
import SelectedCartChart from '../SelectedCartChart/SelectedCartChart';
import SelectedCartInfo from '../SelectedCartInfo/SelectedCartInfo';
import { StoreContext } from '../../../store/StoreProvider';
import InnerContainer from '../../ui/InnerContainer/InnerContainer';
import './SelectedCart.scss';

const SelectedCart: React.FunctionComponent = () => {
    const { selectedCart } = useContext(StoreContext)
    
    return (
        <section className='selected-cart d-flex'>
            <InnerContainer>
                {selectedCart && <SelectedCartChart products={selectedCart.products} />}
            </InnerContainer>
            {selectedCart && (<SelectedCartInfo
                id={selectedCart!.id}
                productsQuantity={selectedCart!.totalQuantity}
                price={selectedCart!.total}
                discountedPrice={selectedCart!.discountedTotal}
            />)}
        </section>
    );
};

export default SelectedCart;

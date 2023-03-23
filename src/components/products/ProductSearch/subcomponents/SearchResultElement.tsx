import React, { useContext } from 'react';
import { StoreContext } from '../../../../store/StoreProvider';
import { IProduct } from '../../../../types/IProduct';

interface ISearchResultElementProps {
    element: IProduct
}
const SearchResultElement: React.FunctionComponent<ISearchResultElementProps> = ({ element }) => {

    const { setProduct } = useContext(StoreContext)
    const setSelectedProduct = (e: React.MouseEvent<HTMLSpanElement>) => {
        if (setProduct)
            setProduct(element)
    }
    return (<span className='col-5' onClick={setSelectedProduct}>{element.title}</span>);
};

export default SearchResultElement;

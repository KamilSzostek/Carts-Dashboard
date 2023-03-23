import React, { useEffect, useRef, useState } from 'react';
import { getData } from '../../../helpers/getData';
import { IProduct } from '../../../types/IProduct';
import SearchResultElement from './subcomponents/SearchResultElement';
import InnerContainer from '../../ui/InnerContainer/InnerContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './ProductSearch.scss';


const ProductSearch: React.FunctionComponent = () => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [searchResults, setSearchResults] = useState<IProduct[]>([]);

    const errorRef = useRef<HTMLElement>(null);

    const searchInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => setSearchPhrase(e.currentTarget.value)

    const search = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            processData()
        }
    }
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => processData();

    async function processData() {
        if (searchPhrase !== '') {
            const data = await getData(`https://dummyjson.com/products/search?q=${searchPhrase}`, 'products')
            if (data.length > 0) {
                setSearchResults(data)
            }
            else {
                setSearchResults([])
            }
        }
    }

    useEffect(() => {
        const error = errorRef.current!;
        if (error && searchPhrase !== '') {
            error.textContent = 'No search results!';
        };
    }, [searchResults])

    const searchResultElement = searchResults.map(element => (
        <SearchResultElement key={element.id} element={element} />
    ))
    return (
        <div className='search'>
            <div className='search__control'>
                <button onClick={clickHandler}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                <input type="search" value={searchPhrase} placeholder='Search product' onChange={searchInputHandler} onKeyDown={search} />
            </div>
            {searchResults.length > 0
                ? (<InnerContainer>
                    {searchResultElement}
                </InnerContainer>)
                : (<small className='d-block mt-5 fs-4 text-center text-dark' ref={errorRef}></small>)}
        </div>
    );
};

export default ProductSearch;

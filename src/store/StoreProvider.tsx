import React, { createContext, FC, useEffect, useLayoutEffect, useState } from "react";
import { ICart } from "../types/ICart";
import { IProduct } from "../types/IProduct";
import { getData } from "../helpers/getData";

interface Props {
    children?: React.ReactNode;
}

interface IStoreContext {
    selectedCart: ICart | null;
    setCart: (cart: ICart) => void;
    selectedProduct: IProduct | null;
    setProduct: (product: IProduct) => void;
    products: IProduct[],
    setProducts: (cart: IProduct[]) => void
    avalibleCarts: ICart[] | null,
    setCarts: (carts: ICart[]) => void
    error: string
}

export const StoreContext = createContext<Partial<IStoreContext>>({});

const StoreProvider: FC<Props> = ({ children }) => {
    const [selectedCart, setSelectedCart] = useState<ICart | null>(null)
    const [avalibleCarts, setAvalibleCarts] = useState<ICart[] | null>([])
    const [products, setNewProducts] = useState<IProduct[]>([])
    const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null)
    const [error, setError] = useState('')

    const setCart = (cart: ICart) => setSelectedCart(cart)
    const setCarts = (carts: ICart[]) => setAvalibleCarts(carts)
    const setProduct = (product: IProduct) => setSelectedProduct(product)
    const setProducts = (products: IProduct[]) => setNewProducts(products)

    useLayoutEffect(() => {
        processing()
    }, [])
    useEffect(() => {
        if (avalibleCarts) {
            avalibleCarts.length > 0 && setSelectedCart(avalibleCarts[0])
        }
    }, [avalibleCarts])
    async function processing() {
        const result = await getData('https://dummyjson.com/carts', 'carts', setCarts)
        result && setError(result)
    }
    const context = {
        selectedCart,
        setCart,
        selectedProduct,
        setProduct,
        products,
        setProducts,
        avalibleCarts,
        setCarts,
        error

    }
    return (
        <StoreContext.Provider
            value={context}
        >
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
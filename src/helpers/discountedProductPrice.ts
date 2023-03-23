import { IProduct } from "../types/IProduct"

export function discountedPrice(product: IProduct) {
    if (product?.price && product?.discountPercentage)
        return Math.round(product.price - (product.price / 100 * product.discountPercentage))
    else
        return 'No data'
}
import { IProduct } from "../types/IProduct";
import { discountedPrice } from "./discountedProductPrice";

export const cartComputedParams = (products: IProduct[]) => {
  let total = 0;
  let discountedTotal = 0;
  let totalQuantity = 0;

  for (const product of products) {
    total += product.price! * product.quantity;
    const discounted = discountedPrice(product);

    if (typeof discounted === "number")
      discountedTotal += discounted * product.quantity;
    totalQuantity += product.quantity;
  }

  return {
    total,
    discountedTotal,
    totalQuantity,
  };
};

export function newCart(products: IProduct[], id: number) {
    const restParams = cartComputedParams(products);
    const cart = {
      id,
      products,
      userId: 1,
      ...restParams,
    };
    return cart;
}

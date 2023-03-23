import { it, describe, expect, afterEach } from 'vitest'

import { cartComputedParams, newCart } from './addCart.ts'

let products = []

afterEach(() => {
    products = [{
        id: 1,
        title: "iPhone 9",
        price: 500,
        discountPercentage: 10,
        quantity: 2
    },
    {
        id: 2,
        title: "iPhone X",
        price: 700,
        discountPercentage: 15,
        quantity: 1
    }]
})
describe('cart computed params', () => {
    it('should return 0 for every props if, products array has no elements', () => {
        const result = cartComputedParams(products)

        expect(result.discountedTotal).toBe(0)
        expect(result.total).toBe(0)
        expect(result.totalQuantity).toBe(0)
    })
    it('should retrun correct value for total quantity', () => {
        const totalQuantity = 3
        const result = cartComputedParams(products)

        expect(result.totalQuantity).toBe(totalQuantity)
    })
    it('should retrun correct value for total price', () => {
        const total = 1700
        const result = cartComputedParams(products)

        expect(result.total).toBe(total)
    })
    it('should retrun correct value for discounted total price', () => {
        const total = 1495
        const result = cartComputedParams(products)

        expect(result.discountedTotal).toBe(total)
    })
})

describe('new cart', () => {
    it('should return object with ICart props', () => {
        products = [{
            id: 1,
            title: "iPhone 9",
            price: 500,
            discountPercentage: 10,
            quantity: 2
        },
        {
            id: 2,
            title: "iPhone X",
            price: 700,
            discountPercentage: 15,
            quantity: 1
        }]

        const result = newCart(products, 1)

        expect(result).toHaveProperty('id')
        expect(result).toHaveProperty('products')
        expect(result).toHaveProperty('total')
        expect(result).toHaveProperty('discountedTotal')
        expect(result).toHaveProperty('totalQuantity')
    })
})
import { it, expect } from 'vitest'

import { discountedPrice } from './discountedProductPrice'

it('should return no data message if, argument is incorrect', () => {
    const product = null

    const result = discountedPrice(product)

    expect(result).toBe('No data')
})
it('should return number if, argument is correct', () => {
    const product = {
        discountPercentage: 10,
        price: 100
    }

    const result = discountedPrice(product)

    expect(result).toBeTypeOf('number')
})
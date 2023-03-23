import {vi, it, expect} from 'vitest'

import {getData} from './getData.ts'

const fetchData = vi.fn((url) => {
    return new Promise(resolve => {
        const resolveData = {
            ok: false,
            json(){}
        }
        resolve(resolveData)
    })
})

vi.stubGlobal('fetch', fetchData)

it('should return error message if, fetch is rejected', () => {
    const errorMessage = 'Failed to get data'

    expect(getData('exampleUrl')).rejects.toBe(errorMessage)
})
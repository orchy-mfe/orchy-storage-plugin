import {afterEach, describe, expect, test} from 'vitest'

import {Events} from '../events/events'
import {localStorageActions} from './local'

describe('local stategy test', () => {

    afterEach(() => {
        localStorage.clear()
    })

    describe(Events.GET, () => {
        test('without data', () => {
            const result = localStorageActions[Events.GET]('foo', undefined)

            expect(result).toBeNull()
        })

        test('with data data', () => {
            localStorage.setItem('foo', 'fooValue')
            const result = localStorageActions[Events.GET]('foo', undefined)

            expect(result).toBe('fooValue')
        })
    })

    describe(Events.POST, () => {
        test('without data', () => {
            const result = localStorageActions[Events.POST]('foo', 'fooValue')

            expect(result).toBeUndefined()
            expect(localStorage.getItem('foo')).toBe('fooValue')
        })
    })

    describe(Events.DELETE, () => {
        test('without data', () => {
            const result = localStorageActions[Events.DELETE]('foo', undefined)

            expect(result).toBeUndefined()
            expect(localStorage.getItem('foo')).toBeNull()
        })

        test('with data data', () => {
            localStorage.setItem('foo', 'fooValue')
            const result = localStorageActions[Events.DELETE]('foo', undefined)

            expect(result).toBeUndefined()
            expect(localStorage.getItem('foo')).toBeNull()
        })
    })

    describe(Events.CLEAR, () => {
        test('without data', () => {
            const result = localStorageActions[Events.CLEAR](undefined, undefined)

            expect(result).toBeUndefined()
            expect(localStorage.getItem('foo')).toBeNull()
        })

        test('with data data', () => {
            localStorage.setItem('foo', 'fooValue')
            const result = localStorageActions[Events.DELETE]('foo', undefined)

            expect(result).toBeUndefined()
            expect(localStorage.getItem('foo')).toBeNull()
        })
    })

})

import {afterEach, describe, expect, test} from 'vitest'

import {Events} from '../events/events'
import {sessionStorageActions} from './session'

describe('local stategy test', () => {

    afterEach(() => {
        sessionStorage.clear()
    })

    describe(Events.GET, () => {
        test('without data', () => {
            const result = sessionStorageActions[Events.GET]('foo', undefined)

            expect(result).toBeNull()
        })

        test('with data data', () => {
            sessionStorage.setItem('foo', 'fooValue')
            const result = sessionStorageActions[Events.GET]('foo', undefined)

            expect(result).toBe('fooValue')
        })
    })

    describe(Events.POST, () => {
        test('without data', () => {
            const result = sessionStorageActions[Events.POST]('foo', 'fooValue')

            expect(result).toBeUndefined()
            expect(sessionStorage.getItem('foo')).toBe('fooValue')
        })
    })

    describe(Events.DELETE, () => {
        test('without data', () => {
            const result = sessionStorageActions[Events.DELETE]('foo', undefined)

            expect(result).toBeUndefined()
            expect(sessionStorage.getItem('foo')).toBeNull()
        })

        test('with data data', () => {
            sessionStorage.setItem('foo', 'fooValue')
            const result = sessionStorageActions[Events.DELETE]('foo', undefined)

            expect(result).toBeUndefined()
            expect(sessionStorage.getItem('foo')).toBeNull()
        })
    })

    describe(Events.CLEAR, () => {
        test('without data', () => {
            const result = sessionStorageActions[Events.CLEAR](undefined, undefined)

            expect(result).toBeUndefined()
            expect(sessionStorage.getItem('foo')).toBeNull()
        })

        test('with data data', () => {
            sessionStorage.setItem('foo', 'fooValue')
            const result = sessionStorageActions[Events.DELETE]('foo', undefined)

            expect(result).toBeUndefined()
            expect(sessionStorage.getItem('foo')).toBeNull()
        })
    })

})

import {afterEach, describe, expect, test} from 'vitest'

import {EventsLabels} from '../events/eventsLabels'
import {localStorageActions} from './local'

describe('local stategy test', () => {

    afterEach(() => {
        localStorage.clear()
    })

    describe(EventsLabels.GET, () => {
        test('without data', () => {
            const result = localStorageActions[EventsLabels.GET]('foo', undefined)

            expect(result).toBeNull()
        })

        test('with data data', () => {
            localStorage.setItem('foo', 'fooValue')
            const result = localStorageActions[EventsLabels.GET]('foo', undefined)

            expect(result).toBe('fooValue')
        })
    })

    describe(EventsLabels.POST, () => {
        test('without data', () => {
            const result = localStorageActions[EventsLabels.POST]('foo', 'fooValue')

            expect(result).toBeUndefined()
            expect(localStorage.getItem('foo')).toBe('fooValue')
        })
    })

    describe(EventsLabels.DELETE, () => {
        test('without data', () => {
            const result = localStorageActions[EventsLabels.DELETE]('foo', undefined)

            expect(result).toBeUndefined()
            expect(localStorage.getItem('foo')).toBeNull()
        })

        test('with data data', () => {
            localStorage.setItem('foo', 'fooValue')
            const result = localStorageActions[EventsLabels.DELETE]('foo', undefined)

            expect(result).toBeUndefined()
            expect(localStorage.getItem('foo')).toBeNull()
        })
    })

    describe(EventsLabels.CLEAR, () => {
        test('without data', () => {
            const result = localStorageActions[EventsLabels.CLEAR](undefined, undefined)

            expect(result).toBeUndefined()
            expect(localStorage.getItem('foo')).toBeNull()
        })

        test('with data data', () => {
            localStorage.setItem('foo', 'fooValue')
            const result = localStorageActions[EventsLabels.DELETE]('foo', undefined)

            expect(result).toBeUndefined()
            expect(localStorage.getItem('foo')).toBeNull()
        })
    })

})

import {afterEach, describe, expect, test} from 'vitest'

import {EventsLabels} from '../events/eventsLabels'
import {sessionStorageActions} from './session'

describe('local stategy test', () => {

    afterEach(() => {
        sessionStorage.clear()
    })

    describe(EventsLabels.GET, () => {
        test('without data', () => {
            const result = sessionStorageActions[EventsLabels.GET]('foo', undefined)

            expect(result).toBeNull()
        })

        test('with data data', () => {
            sessionStorage.setItem('foo', 'fooValue')
            const result = sessionStorageActions[EventsLabels.GET]('foo', undefined)

            expect(result).toBe('fooValue')
        })
    })

    describe(EventsLabels.POST, () => {
        test('without data', () => {
            const result = sessionStorageActions[EventsLabels.POST]('foo', 'fooValue')

            expect(result).toBeUndefined()
            expect(sessionStorage.getItem('foo')).toBe('fooValue')
        })
    })

    describe(EventsLabels.DELETE, () => {
        test('without data', () => {
            const result = sessionStorageActions[EventsLabels.DELETE]('foo', undefined)

            expect(result).toBeUndefined()
            expect(sessionStorage.getItem('foo')).toBeNull()
        })

        test('with data data', () => {
            sessionStorage.setItem('foo', 'fooValue')
            const result = sessionStorageActions[EventsLabels.DELETE]('foo', undefined)

            expect(result).toBeUndefined()
            expect(sessionStorage.getItem('foo')).toBeNull()
        })
    })

    describe(EventsLabels.CLEAR, () => {
        test('without data', () => {
            const result = sessionStorageActions[EventsLabels.CLEAR](undefined, undefined)

            expect(result).toBeUndefined()
            expect(sessionStorage.getItem('foo')).toBeNull()
        })

        test('with data data', () => {
            sessionStorage.setItem('foo', 'fooValue')
            const result = sessionStorageActions[EventsLabels.DELETE]('foo', undefined)

            expect(result).toBeUndefined()
            expect(sessionStorage.getItem('foo')).toBeNull()
        })
    })

})

import {afterEach, describe, expect, test} from 'vitest'

import {sessionStorageActions} from './session'

describe('local stategy test', () => {

    afterEach(() => {
        sessionStorage.clear()
    })

    describe('orchy-storage:get', () => {
        test('without data', () => {
            const result = sessionStorageActions['orchy-storage:get']('foo', undefined)

            expect(result).toBeNull()
        })

        test('with data data', () => {
            sessionStorage.setItem('foo', 'fooValue')
            const result = sessionStorageActions['orchy-storage:get']('foo', undefined)

            expect(result).toBe('fooValue')
        })
    })

    describe('orchy-storage:post', () => {
        test('without data', () => {
            const result = sessionStorageActions['orchy-storage:post']('foo', 'fooValue')

            expect(result).toBeUndefined()
            expect(sessionStorage.getItem('foo')).toBe('fooValue')
        })
    })

    describe('orchy-storage:delete', () => {
        test('without data', () => {
            const result = sessionStorageActions['orchy-storage:delete']('foo', undefined)

            expect(result).toBeUndefined()
            expect(sessionStorage.getItem('foo')).toBeNull()
        })

        test('with data data', () => {
            sessionStorage.setItem('foo', 'fooValue')
            const result = sessionStorageActions['orchy-storage:delete']('foo', undefined)

            expect(result).toBeUndefined()
            expect(sessionStorage.getItem('foo')).toBeNull()
        })
    })

    describe('orchy-storage:clear', () => {
        test('without data', () => {
            const result = sessionStorageActions['orchy-storage:clear'](undefined, undefined)

            expect(result).toBeUndefined()
            expect(sessionStorage.getItem('foo')).toBeNull()
        })

        test('with data data', () => {
            sessionStorage.setItem('foo', 'fooValue')
            const result = sessionStorageActions['orchy-storage:delete']('foo', undefined)

            expect(result).toBeUndefined()
            expect(sessionStorage.getItem('foo')).toBeNull()
        })
    })

})

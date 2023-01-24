import {afterEach, describe, expect, test} from 'vitest'

import {localStorageActions} from './local'

describe('local stategy test', () => {

    afterEach(() => {
        localStorage.clear()
    })

    describe('orchy-storage:get', () => {
        test('without data', () => {
            const result = localStorageActions['orchy-storage:get']('foo', undefined)

            expect(result).toBeNull()
        })

        test('with data data', () => {
            localStorage.setItem('foo', 'fooValue')
            const result = localStorageActions['orchy-storage:get']('foo', undefined)

            expect(result).toBe('fooValue')
        })
    })

    describe('orchy-storage:post', () => {
        test('without data', () => {
            const result = localStorageActions['orchy-storage:post']('foo', 'fooValue')

            expect(result).toBeUndefined()
            expect(localStorage.getItem('foo')).toBe('fooValue')
        })
    })

    describe('orchy-storage:delete', () => {
        test('without data', () => {
            const result = localStorageActions['orchy-storage:delete']('foo', undefined)

            expect(result).toBeUndefined()
            expect(localStorage.getItem('foo')).toBeNull()
        })

        test('with data data', () => {
            localStorage.setItem('foo', 'fooValue')
            const result = localStorageActions['orchy-storage:delete']('foo', undefined)

            expect(result).toBeUndefined()
            expect(localStorage.getItem('foo')).toBeNull()
        })
    })

    describe('orchy-storage:clear', () => {
        test('without data', () => {
            const result = localStorageActions['orchy-storage:clear'](undefined, undefined)

            expect(result).toBeUndefined()
            expect(localStorage.getItem('foo')).toBeNull()
        })

        test('with data data', () => {
            localStorage.setItem('foo', 'fooValue')
            const result = localStorageActions['orchy-storage:delete']('foo', undefined)

            expect(result).toBeUndefined()
            expect(localStorage.getItem('foo')).toBeNull()
        })
    })

})

import './orchy-storage-plugin'

import {ReplaySubject} from 'rxjs'
import {afterEach, beforeEach, describe, expect, test} from 'vitest'

describe('orchy-storage-plugin', () => {
    describe('local strategy', () => {
        beforeEach(() => localStorage.clear())

        const createPlugin = () => {
            const eventBus = new ReplaySubject()
            const storagePlugin = document.createElement('orchy-storage-plugin')
            storagePlugin.setAttribute('strategy', 'local')
            storagePlugin.eventBus = eventBus

            return storagePlugin
        }

        test('orchy-storage:get', () => new Promise(resolve => {
            const value = 'fooValue'
            const key = 'foo'
            localStorage.setItem(key, value)

            const plugin = createPlugin()
            document.body.appendChild(plugin)
            plugin.eventBus?.next({label: 'orchy-storage:get', payload: {key}})
            plugin.eventBus?.subscribe(event => {
                if(event.label === 'orchy-storage:get:result') {
                    expect(event.payload.value).toBe(value)
                    resolve(true)
                }
            })
        }))

        test('orchy-storage:post', () => {
            const value = 'fooValue'
            const key = 'foo'

            const plugin = createPlugin()
            document.body.appendChild(plugin)

            plugin.eventBus?.next({label: 'orchy-storage:post', payload: {key, value}})

            expect(localStorage.getItem(key)).toBe(value)
        })

        test('orchy-storage:delete', () => {
            const value = 'fooValue'
            const key = 'foo'
            localStorage.setItem(key, value)

            const plugin = createPlugin()
            document.body.appendChild(plugin)
            plugin.eventBus?.next({label: 'orchy-storage:delete', payload: {key}})

            expect(localStorage.getItem(key)).toBeNull()
        })

        test('orchy-storage:clear', () => {
            const value = 'fooValue'
            const key = 'foo'
            localStorage.setItem(key, value)

            const plugin = createPlugin()
            document.body.appendChild(plugin)
            plugin.eventBus?.next({label: 'orchy-storage:clear', payload: {key}})

            expect(localStorage.getItem(key)).toBeNull()
        })
    })

    describe('session strategy', () => {
        afterEach(() => sessionStorage.clear())

        const createPlugin = () => {
            const eventBus = new ReplaySubject()
            const storagePlugin = document.createElement('orchy-storage-plugin')
            storagePlugin.setAttribute('strategy', 'session')
            storagePlugin.eventBus = eventBus

            return storagePlugin
        }

        test('orchy-storage:get', () => new Promise(resolve => {
            const value = 'fooValue'
            const key = 'foo'
            sessionStorage.setItem(key, value)

            const plugin = createPlugin()
            document.body.appendChild(plugin)
            plugin.eventBus?.next({label: 'orchy-storage:get', payload: {key}})
            plugin.eventBus?.subscribe(event => {
                if (event.label === 'orchy-storage:get:result') {
                    expect(event.payload.value).toBe(value)
                    resolve(true)
                }
            })
        }))

        test('orchy-storage:set', () => {
            const value = 'fooValue'
            const key = 'foo'
            sessionStorage.setItem(key, value)

            const plugin = createPlugin()
            document.body.appendChild(plugin)

            plugin.eventBus?.next({label: 'orchy-storage:set', payload: {key, value}})

            expect(sessionStorage.getItem(key)).toBe(value)
        })

        test('orchy-storage:delete', () => {
            const value = 'fooValue'
            const key = 'foo'
            sessionStorage.setItem(key, value)

            const plugin = createPlugin()
            document.body.appendChild(plugin)
            plugin.eventBus?.next({label: 'orchy-storage:delete', payload: {key}})

            expect(sessionStorage.getItem(key)).toBeNull()
        })

        test('orchy-storage:clear', () => {
            const value = 'fooValue'
            const key = 'foo'
            sessionStorage.setItem(key, value)

            const plugin = createPlugin()
            document.body.appendChild(plugin)
            plugin.eventBus?.next({label: 'orchy-storage:clear', payload: {key}})

            expect(sessionStorage.getItem(key)).toBeNull()
        })
    })
})
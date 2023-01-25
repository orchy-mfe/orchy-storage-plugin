import './orchy-storage-plugin'

import {ReplaySubject} from 'rxjs'
import {afterEach, beforeEach, describe, expect, test} from 'vitest'

import {Events} from './events/events'
import {eventsBuilder} from './events/eventsBuilder'

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

        test(Events.GET, () => new Promise(resolve => {
            const value = 'fooValue'
            const key = 'foo'
            localStorage.setItem(key, value)

            const plugin = createPlugin()
            document.body.appendChild(plugin)
            plugin.eventBus?.next(eventsBuilder.get(key))
            plugin.eventBus?.subscribe(event => {
                if(event.label === Events.GET_RESULT) {
                    expect(event.payload.value).toBe(value)
                    resolve(true)
                }
            })
        }))

        test(Events.POST, () => {
            const value = 'fooValue'
            const key = 'foo'

            const plugin = createPlugin()
            document.body.appendChild(plugin)

            plugin.eventBus?.next(eventsBuilder.post(key, value))

            expect(localStorage.getItem(key)).toBe(value)
        })

        test(Events.DELETE, () => {
            const value = 'fooValue'
            const key = 'foo'
            localStorage.setItem(key, value)

            const plugin = createPlugin()
            document.body.appendChild(plugin)
            plugin.eventBus?.next(eventsBuilder.delete(key))

            expect(localStorage.getItem(key)).toBeNull()
        })

        test(Events.CLEAR, () => {
            const value = 'fooValue'
            const key = 'foo'
            localStorage.setItem(key, value)

            const plugin = createPlugin()
            document.body.appendChild(plugin)
            plugin.eventBus?.next(eventsBuilder.clear())

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

        test(Events.GET, () => new Promise(resolve => {
            const value = 'fooValue'
            const key = 'foo'
            sessionStorage.setItem(key, value)

            const plugin = createPlugin()
            document.body.appendChild(plugin)
            plugin.eventBus?.next(eventsBuilder.get(key))
            plugin.eventBus?.subscribe(event => {
                if (event.label === Events.GET_RESULT) {
                    expect(event.payload.value).toBe(value)
                    resolve(true)
                }
            })
        }))

        test(Events.POST, () => {
            const value = 'fooValue'
            const key = 'foo'
            sessionStorage.setItem(key, value)

            const plugin = createPlugin()
            document.body.appendChild(plugin)

            plugin.eventBus?.next(eventsBuilder.post(key, value))

            expect(sessionStorage.getItem(key)).toBe(value)
        })

        test(Events.DELETE, () => {
            const value = 'fooValue'
            const key = 'foo'
            sessionStorage.setItem(key, value)

            const plugin = createPlugin()
            document.body.appendChild(plugin)
            plugin.eventBus?.next(eventsBuilder.delete(key))

            expect(sessionStorage.getItem(key)).toBeNull()
        })

        test(Events.CLEAR, () => {
            const value = 'fooValue'
            const key = 'foo'
            sessionStorage.setItem(key, value)

            const plugin = createPlugin()
            document.body.appendChild(plugin)
            plugin.eventBus?.next(eventsBuilder.clear())

            expect(sessionStorage.getItem(key)).toBeNull()
        })
    })
})
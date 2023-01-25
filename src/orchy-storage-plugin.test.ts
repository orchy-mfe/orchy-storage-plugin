import './orchy-storage-plugin'

import {ReplaySubject} from 'rxjs'
import {afterEach, beforeEach, describe, expect, test} from 'vitest'

import {eventsBuilder} from './events/eventsBuilder'
import {EventsLabels} from './events/eventsLabels'

describe('orchy-storage-plugin', () => {
    const eventFlush = () => new Promise(resolve => setTimeout(resolve, 100))
    describe('local strategy', () => {
        beforeEach(() => localStorage.clear())

        const createPlugin = () => {
            const eventBus = new ReplaySubject()
            const storagePlugin = document.createElement('orchy-storage-plugin')
            storagePlugin.setAttribute('strategy', 'local')
            storagePlugin.eventBus = eventBus

            return storagePlugin
        }

        test(EventsLabels.GET, () => new Promise(resolve => {
            const value = 'fooValue'
            const key = 'foo'
            localStorage.setItem(key, value)

            const plugin = createPlugin()
            document.body.appendChild(plugin)
            plugin.eventBus?.next(eventsBuilder.get(key))
            plugin.eventBus?.subscribe(event => {
                if(event.label === EventsLabels.GET_RESULT) {
                    expect(event.payload.value).toBe(value)
                    resolve(true)
                }
            })
        }))

        test(`${EventsLabels.GET} without data`, () => new Promise(resolve => {
            const key = 'fooKeu'

            const plugin = createPlugin()
            document.body.appendChild(plugin)
            plugin.eventBus?.next(eventsBuilder.get(key))
            plugin.eventBus?.subscribe(event => {
                if (event.label === EventsLabels.GET_RESULT) {
                    expect(event.payload.value).toBeNull()
                    resolve(true)
                }
            })
        }))

        test(EventsLabels.POST, async () => {
            const value = 'fooValue'
            const key = 'foo'

            const plugin = createPlugin()
            document.body.appendChild(plugin)
            plugin.eventBus?.next(eventsBuilder.post(key, value))

            await eventFlush()

            expect(localStorage.getItem(key)).toBe(value)
        })

        test(EventsLabels.DELETE, async () => {
            const value = 'fooValue'
            const key = 'foo'
            localStorage.setItem(key, value)

            const plugin = createPlugin()
            document.body.appendChild(plugin)
            plugin.eventBus?.next(eventsBuilder.delete(key))

            await eventFlush()

            expect(localStorage.getItem(key)).toBeNull()
        })

        test(EventsLabels.CLEAR, async () => {
            const value = 'fooValue'
            const key = 'foo'
            localStorage.setItem(key, value)

            const plugin = createPlugin()
            document.body.appendChild(plugin)
            plugin.eventBus?.next(eventsBuilder.clear())

            await eventFlush()

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

        test(EventsLabels.GET, () => new Promise(resolve => {
            const value = 'fooValue'
            const key = 'foo'
            sessionStorage.setItem(key, value)

            const plugin = createPlugin()
            document.body.appendChild(plugin)
            plugin.eventBus?.next(eventsBuilder.get(key))
            plugin.eventBus?.subscribe(event => {
                if (event.label === EventsLabels.GET_RESULT) {
                    expect(event.payload.value).toBe(value)
                    resolve(true)
                }
            })
        }))

        test(`${EventsLabels.GET} without data`, () => new Promise(resolve => {
            const key = 'fooKeu'

            const plugin = createPlugin()
            document.body.appendChild(plugin)
            plugin.eventBus?.next(eventsBuilder.get(key))
            plugin.eventBus?.subscribe(event => {
                if (event.label === EventsLabels.GET_RESULT) {
                    expect(event.payload.value).toBeNull()
                    resolve(true)
                }
            })
        }))

        test(EventsLabels.POST, async () => {
            const value = 'fooValue'
            const key = 'foo'

            const plugin = createPlugin()
            document.body.appendChild(plugin)
            plugin.eventBus?.next(eventsBuilder.post(key, value))

            await eventFlush()

            expect(sessionStorage.getItem(key)).toBe(value)
        })

        test(EventsLabels.DELETE, async () => {
            const value = 'fooValue'
            const key = 'foo'
            sessionStorage.setItem(key, value)

            const plugin = createPlugin()
            document.body.appendChild(plugin)
            plugin.eventBus?.next(eventsBuilder.delete(key))

            await eventFlush()

            expect(sessionStorage.getItem(key)).toBeNull()
        })

        test(EventsLabels.CLEAR, async () => {
            const value = 'fooValue'
            const key = 'foo'
            sessionStorage.setItem(key, value)

            const plugin = createPlugin()
            document.body.appendChild(plugin)
            plugin.eventBus?.next(eventsBuilder.clear())

            await eventFlush()

            expect(sessionStorage.getItem(key)).toBeNull()
        })
    })
})
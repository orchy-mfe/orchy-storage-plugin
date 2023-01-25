import {OrchyStorageClearEvent, OrchyStorageDeleteEvent, OrchyStorageGetEvent, OrchyStorageGetResultEvent, OrchyStoragePostEvent} from '../types/StorageEvent'
import {Events} from './events'

const getEventBuilder = (key: any): OrchyStorageGetEvent => ({
    label: Events.GET,
    payload: {key}
})

export const getResultEventBuilder = (key: any, value: any): OrchyStorageGetResultEvent => ({
    label: Events.GET_RESULT,
    payload: {key, value}
})

const postEventBuilder = (key: any, value: any): OrchyStoragePostEvent => ({
    label: Events.POST,
    payload: {key, value}
})

const deleteEventBuilder = (key: any): OrchyStorageDeleteEvent => ({
    label: Events.DELETE,
    payload: {key}
})

const clearEventBuilder = (): OrchyStorageClearEvent => ({label: Events.CLEAR})

export const eventsBuilder = {
    get: getEventBuilder,
    post: postEventBuilder,
    delete: deleteEventBuilder,
    clear: clearEventBuilder
}
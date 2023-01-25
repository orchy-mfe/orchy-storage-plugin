import {EventsLabels} from './eventsLabels'
import {OrchyStorageClearEvent, OrchyStorageDeleteEvent, OrchyStorageGetEvent, OrchyStorageGetResultEvent, OrchyStoragePostEvent} from './StorageEvent'

const getEventBuilder = (key: any): OrchyStorageGetEvent => ({
    label: EventsLabels.GET,
    payload: {key}
})

export const getResultEventBuilder = (key: any, value: any): OrchyStorageGetResultEvent => ({
    label: EventsLabels.GET_RESULT,
    payload: {key, value}
})

const postEventBuilder = (key: any, value: any): OrchyStoragePostEvent => ({
    label: EventsLabels.POST,
    payload: {key, value}
})

const deleteEventBuilder = (key: any): OrchyStorageDeleteEvent => ({
    label: EventsLabels.DELETE,
    payload: {key}
})

const clearEventBuilder = (): OrchyStorageClearEvent => ({label: EventsLabels.CLEAR})

export const eventsBuilder = {
    get: getEventBuilder,
    post: postEventBuilder,
    delete: deleteEventBuilder,
    clear: clearEventBuilder
}
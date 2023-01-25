import {EventsLabels} from '../events/eventsLabels'
import {OrchyStorageEvent} from '../events/StorageEvent'

export const sessionStorageActions: Record<NonNullable<OrchyStorageEvent['label']>, (key: any, value: any) => any | undefined> = {
    [EventsLabels.CLEAR]: sessionStorage.clear.bind(sessionStorage),
    [EventsLabels.DELETE]: sessionStorage.removeItem.bind(sessionStorage),
    [EventsLabels.GET]: sessionStorage.getItem.bind(sessionStorage),
    [EventsLabels.GET_RESULT]: () => undefined,
    [EventsLabels.POST]: sessionStorage.setItem.bind(sessionStorage)
}
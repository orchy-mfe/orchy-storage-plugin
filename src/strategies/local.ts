import {EventsLabels} from '../events/eventsLabels'
import {OrchyStorageEvent} from '../events/StorageEvent'

export const localStorageActions: Record<NonNullable<OrchyStorageEvent['label']>, (key: any, value: any) => any> = {
    [EventsLabels.CLEAR]: localStorage.clear.bind(localStorage),
    [EventsLabels.DELETE]: localStorage.removeItem.bind(localStorage),
    [EventsLabels.GET]: localStorage.getItem.bind(localStorage),
    [EventsLabels.GET_RESULT]: () => undefined,
    [EventsLabels.POST]: localStorage.setItem.bind(localStorage)
}
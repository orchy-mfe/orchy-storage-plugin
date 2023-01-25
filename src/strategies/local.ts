import {Events} from '../events/events'
import {OrchyStorageEvent} from '../types/StorageEvent'

export const localStorageActions: Record<NonNullable<OrchyStorageEvent['label']>, (key: any, value: any) => any> = {
    [Events.CLEAR]: localStorage.clear.bind(localStorage),
    [Events.DELETE]: localStorage.removeItem.bind(localStorage),
    [Events.GET]: localStorage.getItem.bind(localStorage),
    [Events.GET_RESULT]: () => undefined,
    [Events.POST]: localStorage.setItem.bind(localStorage)
}
import {Events} from '../events/events'
import {OrchyStorageEvent} from '../types/StorageEvent'

export const sessionStorageActions: Record<NonNullable<OrchyStorageEvent['label']>, (key: any, value: any) => any | undefined> = {
    [Events.CLEAR]: sessionStorage.clear.bind(sessionStorage),
    [Events.DELETE]: sessionStorage.removeItem.bind(sessionStorage),
    [Events.GET]: sessionStorage.getItem.bind(sessionStorage),
    [Events.GET_RESULT]: () => undefined,
    [Events.POST]: sessionStorage.setItem.bind(sessionStorage)
}
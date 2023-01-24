import {OrchyStorageEvent} from '../types/StorageEvent'

export const sessionStorageActions: Record<NonNullable<OrchyStorageEvent['label']>, (key: any, value: any) => any | undefined> = {
    'orchy-storage:clear': sessionStorage.clear.bind(sessionStorage),
    'orchy-storage:delete': sessionStorage.removeItem.bind(sessionStorage),
    'orchy-storage:get': sessionStorage.getItem.bind(sessionStorage),
    'orchy-storage:get:result': () => undefined,
    'orchy-storage:post': sessionStorage.setItem.bind(sessionStorage),
}
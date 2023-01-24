import {OrchyStorageEvent} from '../types/StorageEvent'

export const localStorageActions: Record<NonNullable<OrchyStorageEvent['label']>, (key: any, value: any) => any> = {
    'orchy-storage:clear': localStorage.clear.bind(localStorage),
    'orchy-storage:delete': localStorage.removeItem.bind(localStorage),
    'orchy-storage:get': localStorage.getItem.bind(localStorage),
    'orchy-storage:get:result': () => undefined,
    'orchy-storage:post': localStorage.setItem.bind(localStorage)
}
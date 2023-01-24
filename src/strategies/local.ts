import {OrchyStorageEvent} from '../types/StorageEvent'

export const localStorageActions: Record<NonNullable<OrchyStorageEvent['label']>, (key: any, value: any) => any> = {
    'orchy-storage:clear': localStorage.clear,
    'orchy-storage:delete': localStorage.delete,
    'orchy-storage:get': localStorage.get,
    'orchy-storage:get:result': () => undefined,
    'orchy-storage:post': localStorage.post
}
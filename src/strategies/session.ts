import {OrchyStorageEvent} from '../types/StorageEvent'

export const sessionStorageActions: Record<NonNullable<OrchyStorageEvent['label']>, (key: any, value: any) => any | undefined> = {
    'orchy-storage:clear': sessionStorage.clear,
    'orchy-storage:delete': sessionStorage.delete,
    'orchy-storage:get': sessionStorage.get,
    'orchy-storage:get:result': () => undefined,
    'orchy-storage:post': sessionStorage.post
}
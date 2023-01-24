interface OrchyStorageGetEvent {
    label: 'orchy-storage:get',
    payload: {
        key: any;
    }
}

interface OrchyStoragePostEvent {
    label: 'orchy-storage:post',
    payload: {
        key: any;
        value: any;
    }
}

interface OrchyStorageDeleteEvent {
    label: 'orchy-storage:delete',
    payload: {
        key: any;
    }
}

interface OrchyStorageClearEvent {
    label: 'orchy-storage:clear'
}

interface NonOrchyStorageEvent {
    label: undefined
}

export type OrchyStorageEvent = OrchyStorageGetEvent | OrchyStoragePostEvent | OrchyStorageDeleteEvent | OrchyStorageClearEvent | NonOrchyStorageEvent
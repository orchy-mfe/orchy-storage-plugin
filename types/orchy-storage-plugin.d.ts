import {LitElement, PropertyValueMap} from 'lit'
export declare class OrchyStoragePlugin extends LitElement {
    strategy: 'local' | 'session'
    private eventBus?
    private subscription?
    protected firstUpdated(changedProperties: PropertyValueMap<unknown> | Map<PropertyKey, unknown>): void;
    disconnectedCallback(): void;
}
export declare const orchyStorageEventsBuilder: {
    get: (key: any) => import('./events/StorageEvent').OrchyStorageGetEvent;
    post: (key: any, value: any) => import('./events/StorageEvent').OrchyStoragePostEvent;
    delete: (key: any) => import('./events/StorageEvent').OrchyStorageDeleteEvent;
    clear: () => import('./events/StorageEvent').OrchyStorageClearEvent;
}
export declare const OrchyStorageEventsLabels: {
    readonly GET: 'orchy-storage:get';
    readonly GET_RESULT: 'orchy-storage:get:result';
    readonly POST: 'orchy-storage:post';
    readonly CLEAR: 'orchy-storage:clear';
    readonly DELETE: 'orchy-storage:delete';
}
declare global {
    interface HTMLElementTagNameMap {
        'orchy-storage-plugin': OrchyStoragePlugin;
    }
}

import {LitElement, PropertyValueMap} from 'lit'
export declare class OrchyStoragePlugin extends LitElement {
    strategy: 'local' | 'session'
    private eventBus?
    private subscription?
    protected firstUpdated(changedProperties: PropertyValueMap<unknown> | Map<PropertyKey, unknown>): void;
    disconnectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'orchy-storage-plugin': OrchyStoragePlugin;
    }
}

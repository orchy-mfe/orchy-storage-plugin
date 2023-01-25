import {LitElement} from 'lit'
export declare class OrchyStoragePlugin extends LitElement {
    strategy: 'local' | 'session'
    private eventBus?
    connectedCallback(): void;
    private buildResultPayload
}
declare global {
    interface HTMLElementTagNameMap {
        'orchy-storage-plugin': OrchyStoragePlugin;
    }
}

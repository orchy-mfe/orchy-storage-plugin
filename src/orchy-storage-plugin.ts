import {html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {filter, ReplaySubject} from 'rxjs'

import {OrchyStorageEvent} from './types/StorageEvent'

@customElement('orchy-storage-plugin')
export class OrchyStoragePlugin extends LitElement {
  @property()
  strategy: 'local' | 'session' = 'local'

  @property({attribute: false})
  private eventBus?: ReplaySubject<OrchyStorageEvent>

  connectedCallback(): void {
    this.eventBus?.pipe(
      filter(event => Boolean(event.label?.startsWith('orchy-storage:')))
    ).subscribe()
  }

  render() {
    return html``
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'orchy-storage-plugin': OrchyStoragePlugin
  }
}

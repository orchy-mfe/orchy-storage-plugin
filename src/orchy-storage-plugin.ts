import {LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {filter, ReplaySubject} from 'rxjs'

import {localStorageActions} from './strategies/local'
import {sessionStorageActions} from './strategies/session'
import {OrchyStorageEvent} from './types/StorageEvent'

@customElement('orchy-storage-plugin')
export class OrchyStoragePlugin extends LitElement {
  @property()
  strategy: 'local' | 'session' = 'local'

  @property({attribute: false})
  private eventBus?: ReplaySubject<OrchyStorageEvent>

  connectedCallback(): void {
    const strategyToUse = this.strategy === 'local' ? localStorageActions : sessionStorageActions
    this.eventBus?.pipe(
      filter(event => Boolean(event.label?.startsWith('orchy-storage:')))
    ).subscribe(event => {
      const functionToUse = strategyToUse[event.label!]
      const result = functionToUse?.(event.payload?.key, event.payload?.value)
      if (result) {
        this.eventBus?.next(this.buildResultPayload(event, result))
      }
    })
  }

  private buildResultPayload(event: OrchyStorageEvent, value: any): OrchyStorageEvent {
    return {
      label: 'orchy-storage:get:result',
      payload: {
        key: event.payload?.key,
        value
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'orchy-storage-plugin': OrchyStoragePlugin
  }
}

import {LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {filter, ReplaySubject} from 'rxjs'

import {Events} from './events/events'
import {getResultEventBuilder} from './events/eventsBuilder'
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
      if (event.label === Events.GET) {
        this.eventBus?.next(getResultEventBuilder(event, result))
      }
    })
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'orchy-storage-plugin': OrchyStoragePlugin
  }
}

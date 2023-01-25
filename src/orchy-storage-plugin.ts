import {LitElement, PropertyValueMap} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {filter, ReplaySubject, Subscription} from 'rxjs'

import {getResultEventBuilder} from './events/eventsBuilder'
import {EventsLabels} from './events/eventsLabels'
import {OrchyStorageEvent} from './events/StorageEvent'
import {localStorageActions} from './strategies/local'
import {sessionStorageActions} from './strategies/session'

@customElement('orchy-storage-plugin')
export class OrchyStoragePlugin extends LitElement {
  @property()
  strategy: 'local' | 'session' = 'local'

  @property({attribute: false})
  private eventBus?: ReplaySubject<OrchyStorageEvent>

  private subscription?: Subscription

  protected override firstUpdated(changedProperties: PropertyValueMap<unknown> | Map<PropertyKey, unknown>): void {
    super.firstUpdated(changedProperties)
    const strategyToUse = this.strategy === 'local' ? localStorageActions : sessionStorageActions
    this.subscription = this.eventBus?.pipe(
      filter(event => Boolean(event.label?.startsWith('orchy-storage:')))
    ).subscribe(event => {
      const functionToUse = strategyToUse[event.label!]
      const result = functionToUse?.(event.payload?.key, event.payload?.value)
      if (event.label === EventsLabels.GET) {
        this.eventBus?.next(getResultEventBuilder(event, result))
      }
    })
  }

  disconnectedCallback(): void {
    this.subscription?.unsubscribe()
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'orchy-storage-plugin': OrchyStoragePlugin
  }
}

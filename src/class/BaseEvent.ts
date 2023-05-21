import { EventObject } from '@/types/EventObject'

export class BaseEvent {
  $events: EventObject = {}

  on(event: string, cb: Function) {
    this.$events[event] = this.$events[event] || []
    this.$events[event].push(cb)
  }

  emit(event: string, ...args: any[]) {
    if (this.$events[event]) {
      this.$events[event].forEach((cb) => {
        cb.call(this, ...args)
      })
    }
  }

  init() {}
  initEvent() {}
  initTemplate() {}
  initComponent() {}
  resetEvent() {}
}

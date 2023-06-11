export type EventObject = {
  [props: string]: Function[]
}

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

  // 取消事件监听
  off(event: string, cb: Function) {
    if (this.$events[event]) {
      this.$events[event] = this.$events[event].filter((fn) => {
        if (fn !== cb) return true
        return false
      })
    }
  }
}

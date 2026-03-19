type EventCallback = (data: any) => void;

class PubSub {
  private events: Record<string, EventCallback[]> = {};

  subscribe(event: string, callback: EventCallback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);

    return () => this.unsubscribe(event, callback);
  }

  unsubscribe(event: string, callback: EventCallback) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(cb => cb !== callback);
  }

  publish(event: string, data?: any) {
    console.log(`[Pub/Sub] Event Emitted: ${event}`, data);
    if (!this.events[event]) return;
    this.events[event].forEach(callback => callback(data));
  }
}

export const mockPubSub = new PubSub();

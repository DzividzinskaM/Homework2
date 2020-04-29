export class Observable {
  constructor() {
    this.observers = [];
  }

  // add the ability to subscribe to a new object / DOM element
  // essentially, add something to the observers array
  subscribe(f) {
    this.observers.push(f);
  }

  // add the ability to unsubscribe from a particular object
  // essentially, remove something from the observers array
  unsubscribe(f) {
    this.observers = this.observers.filter((subscriber) => subscriber !== f);
  }

  // update all subscribed objects / DOM elements
  // and pass some data to each of them
  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

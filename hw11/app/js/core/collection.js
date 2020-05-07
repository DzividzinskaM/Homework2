import { Observable } from "./observable";

export class Collection extends Observable {
  constructor(model, collection) {
    super();
    this.model = model;
    this.collection = collection || [];
  }

  _getNewId() {
    const lastElement = this.collection[this.collection.length - 1];
    return lastElement ? lastElement.get("id") + 1 : 1;
  }

  add(data) {
    let dataToAdd = data;

    if (!data.id) {
      dataToAdd.id = this._getNewId();
    }

    if (!(data instanceof this.model)) {
      dataToAdd = new this.model(dataToAdd);
    }

    this.collection.push(dataToAdd);
    this.notify(this.collection);
  }

  remove(id) {
    this.collection = this.collection.filter((i) => i.get("id") !== id);
    this.notify(this.collection);
  }

  getRaw() {
    return this.collection;
  }
}

import { Observable } from "./observable";

export class Model extends Observable {
  constructor(data) {
    super();
    this.data = data || {};
  }

  set(newData) {
    this.data = { ...newData };
    this.notify(this.data);
  }

  update(data) {
    this.data = {
      ...this.data,
      ...data,
    };
    this.notify(this.data);
  }

  get(key) {
    return this.data[key];
  }

  getRaw() {
    return this.data;
  }
}

const model = new Model({ id: 10, name: "sdfsdf" });

model.get("name");

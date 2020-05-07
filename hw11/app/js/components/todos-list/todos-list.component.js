import {todoTemplates} from "./../../templates.js";
 
export class TodosListComponent {
  constructor(properties = {}) {
    this.host = $('<div class="todos-list"></div>');
    this.properties = properties;
    // this.properties.todosCollection.subscribe((list) => {
    //   console.log(list);
    // })
  }

  render() {
     console.log(this.properties.todosCollection.getRaw());
    this.host.html(window.Templates["todo"](this.properties.todosCollection.getRaw()));
    return this.host; 
  }
}

// 1) Отрендерить todos. В templates создать функцию которая будет генерить шаблон для всех todos.
// 2) Создать компонент формы (отренедрить балванку)
// 3) В компоненте форму реаизовать добавление а в списке вывод

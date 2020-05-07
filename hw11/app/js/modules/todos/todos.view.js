export class TodosView {
  constructor(el, providers) {
    this.$host = $(el);
    this.$list = this.$host.find(".todos__list");
    this.$todoText = this.$host.find(".todos-form__input");
    this.$addTodo = this.$host.find(".todos-form__add");
    this.todosModel = providers.todosModel;
    this.todosModel.subscribe((data) => {
      this.render(data);
    });
    this.listen();
  }

  listen() {
    this.listenAdding();
  }

  listenAdding() {
    this.$addTodo.click(() => {
      const todoText = this.$todoText.val();
      if (!todoText) {
        return;
      }
      const newTodo = {
        text: todoText,
      };
      this.todosModel.add(newTodo);
    });
  }

  // listenSearch() {
  //   const foundTodos = this.todosModel.getFilteredBySearch(searchQuery);
  //   this.render(foundTodos);
  // }

  render(todos) {
    let tpl = "";
    todos.forEach((todo) => {
      tpl += `
        <div class="todos__item todo">${todo.text}</div>
      `;
    });
    this.$list.html(tpl);
  }
}

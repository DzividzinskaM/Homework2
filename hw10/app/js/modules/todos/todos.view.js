export class TodosView {
  constructor(el, providers) {
    this.$host = $(el);
    this.$list = this.$host.find(".todos__list");
    this.$todoText = this.$host.find(".todos-form__input");
    this.$addTodo = this.$host.find(".todos-form__add");
    this.list = document.querySelector('.todos__list');
    this.deleteTodo = ".todos__item-delete";
    this.idAttr = "id-attr";
    this.todosModel = providers.todosModel;
    this.todosModel.subscribe((data) => {
      this.render(data);
    });
    this.listen();
  }

  listen() {
    this.listenAdding();
    this.listenRemoving();
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

  listenRemoving() {
    this.list.addEventListener("click", (e)=>{
      if(e.target.matches(this.deleteTodo)){
        let todoId = e.target.parentElement.getAttribute(this.idAttr);
        this.todosModel.remove(+todoId);
      }

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
        <div class="todos__item todo" id-attr=${todo.id}><input type="checkbox" class="todos__item-delete">${todo.text}</div>
      `;
    });
    this.$list.html(tpl);
  }
}

import { TodosModel } from "./modules/todos/todos.model";
import { TodosView } from "./modules/todos/todos.view";

(function () {
  const appProviders = {
    todosModel: new TodosModel(),
  };
  $('[data-component="todos"]').each((index, el) => {
    const providers = {
      todosModel: appProviders.todosModel,
    };
    new TodosView(el, providers);
  });
})();

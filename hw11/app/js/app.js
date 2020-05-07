// import { TodosModel } from "./modules/todos/todos.model";
// import { TodosView } from "./modules/todos/todos.view";

import { TodosContainer } from "./components/todos-container/todos.container";
import { templates } from "./templates";

// (function () {
//   const appProviders = {
//     todosModel: new TodosModel(),
//   };
//   $('[data-component="todos"]').each((index, el) => {
//     const providers = {
//       todosModel: appProviders.todosModel,
//     };
//     new TodosView(el, providers);
//   });
// })();

(function () {
  window.Templates = templates();
  $("#todos-app").html(new TodosContainer().render());
})();

// import { TodosModel } from "./modules/todos/todos.model";
// import { TodosView } from "./modules/todos/todos.view";

import { TodosContainer } from "./components/todos-container/todos.container";
import { templates } from "./templates";
import { TodosForm } from "./components/todos-form/todos.form"

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
  $("#todos-app").html(new TodosContainer().renderContainer());
  //$("#todos-app").html(new TodosContainer().renderForm());
 // $("#todos-app").html(new TodosF.render());
})();

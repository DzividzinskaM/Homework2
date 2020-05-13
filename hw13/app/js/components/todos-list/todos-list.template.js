export function todosTemplate(todos) {
  let tpl = "";
  todos.forEach((t) => {
    tpl += `<div class="todo">${t.id} - ${t.title} <button class="todo__remove" data-id="${t.id}">Remove</button></div>`;
  });
  return tpl;
}

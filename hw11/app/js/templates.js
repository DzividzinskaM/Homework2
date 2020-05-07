export function templates() {
  const templates = {};
  templates["todos-container"] = function () {
    return `
      <div class="todos__form">
        Todos Form
      </div>
      <div class="todos__list">
        TodosList
      </div>
    `;
  };
  templates["todo"] = function(value) {
    let tmplStr = "";
    value.forEach(element => {
     // console.log(element.data.id);
       tmplStr += `
      <div class="todos__item todo">
      <input type="checkbox" class="todos__item-delete" id-attr=${element.data.id}>${element.data.text}
      </div>
      `;  
    });
    return tmplStr;
  };
  return templates;
}




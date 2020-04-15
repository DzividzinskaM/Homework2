class TodosModel {
    constructor(){
        this._todos = [
            {
                id: 1,
                text: "Example",
                done: false
            },
        ];
    }
    getTodos(cb) {
        cb(this._todos);
    }
    addTodo(newTodoText, cb) {
        const newTodo = {
            id: !this._todos.length ? 1 : this._todos[this._todos.length - 1].id + 1,
            text: newTodoText,
            done: false
        };
        this._todos.push(newTodo);
        cb(newTodo);
    }
    removeTodo(todoId, cb){
        let removeIndex = 0;
        this._todos.forEach((todo, index) =>{
           if(todo.id === +todoId){
               removeIndex = index;
           }
        })
        this._todos.splice(removeIndex, 1);
        cb(this._todos);
    }

}



function getTodoTemplate (todo) {
    return `<div class="todos-list__item" data-attribute=${todo.id}>${todo.text}
    <button class="todos-list__delete-item">X</button></div>`;
  }

class TodosView {
    constructor() {
        this.addBtnElement = document.querySelector(".todos__btn");
        this.inputElement = document.querySelector(".todos__input");
        this.listElement = document.querySelector(".todos-list");
       // this.todosList = document.querySelectorAll('.todos-list__delete-item');
        
    }

    listeningRemovingTodo(cb){
        let todosList = document.querySelectorAll('.todos-list__delete-item');       
        todosList.forEach(todo =>{
            todo.addEventListener('click', ()=>{
                let todoId = todo.parentElement.getAttribute("data-attribute")
                console.log(todoId);
                cb(todoId);
            });
        });
     }

    listeningAddingTodo(cb){

        this.addBtnElement.addEventListener("click", () => {
            if (!this.inputElement.value) {
               return;
            }
             const todoText = this.inputElement.value;
             cb(todoText);
        });
    }

    renderTodos (todos) {
        let template = "";

        todos.forEach((todo) => {
            template += getTodoTemplate(todo);
        });
        this.listElement.innerHTML = template; 
    }

    renderNewTodo(todo){
        this.listElement.insertAdjacentHTML("beforeend", getTodoTemplate(todo));
    }
}


class TodosController {
    constructor(model, view){
        this.model = model;
        this.view = view;

        this.init(this.model, this.view);
    }

    init(){
        this.model.getTodos((todos)=>{
            this.view.renderTodos(todos);
        });
        this.listen();
    }

    listen(){
        this.view.listeningAddingTodo((todoText) => {
            this.model.addTodo(todoText, (todo) =>{
                this.view.renderNewTodo(todo);
            });
        });

        this.view.listeningRemovingTodo(todoId =>{
            this.model.removeTodo(todoId, (todos) =>{
                this.view.renderTodos(todos);
            });
        });
        
    }
}

const app = new TodosController(new TodosModel(), new TodosView());
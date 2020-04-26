class Observable {
    constructor() {
      this.observers = [];
    }
  
    subscribe(f) {
      this.observers.push(f);
    }
  
    unsubscribe(obsToUnsubscribe) {
      this.observers = this.observers.filter(obs => obs !== obsToUnsubscribe);
    }
  
    notify(data) {
      this.observers.forEach(o => {
        o(data);
     })
   }
}

class TodosModel extends Observable {
    constructor(){
        super();
        this._todos = [
            {
                id: 1,
                text: "Example",
                done: false
            }
        ];
    }

    getTodo(){
        return this._todos;
    }

    addTodo(newTodoText){
        const newTodo = {
            id: !this._todos.length ? 1 : this._todos[this._todos.length - 1].id + 1,
            text: newTodoText,
            done: false
        };
        this._todos.push(newTodo);
        this.notify(this._todos);
    }

    removeTodo(todoId){
        let removeIndex = 0;
        this._todos.forEach((todo, index) =>{
           if(todo.id === +todoId){
               removeIndex = index;
           }
        })
        this._todos.splice(removeIndex, 1);
        this.notify(this._todos);
    }
}

function getTodoTemplate (todo) {
    return `<div class="todos-list__item" id-attr=${todo.id}>${todo.text}
    <button class="todos__btn--delete">X</button></div>`;
}

class TodosView {
    constructor(model){
        this.model=model;
        
        this.addBtn = document.querySelector(".todos__btn--add");
        this.inputTodoText = document.querySelector(".todos__input");
        this.deleteBtn = ".todos__btn--delete";
        this.todosList = document.querySelector('.todos-list');
        this.idAttr = "id-attr";

        this.init();
        this.listenAdd();
        this.listenDelete();
    }

    init(){
        this.render(this.model.getTodo());

        this.model.subscribe((data => {
            this.render(data);
        }))
    }


    render(todos) {
        let template = "";

        todos.forEach((todo) => {
            template += getTodoTemplate(todo);
        });

        this.todosList.innerHTML = template;
    }

    listenAdd(){
        this.addBtn.addEventListener("click", ()=>{
            let todoText = this.inputTodoText.value;
            if(!todoText){
                return;
            }
            this.model.addTodo(todoText);   
        });
    }

    listenDelete(){
        this.todosList.addEventListener("click", (e) =>{
            if (e.target.matches(this.deleteBtn)) {
               let todoId = e.target.parentElement.getAttribute(this.idAttr);
               this.model.removeTodo(todoId);
            }
        });
    }
}

const todosModel = new TodosModel();
const todosView = new TodosView(todosModel);

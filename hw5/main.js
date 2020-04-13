const TodosModel = (function () {
    const Todos = [
            {
                id: 1,
                text: "Example",
                done: false
            }
    ];
    return {
        addTodo: function(newTodo, cb){
            let todosItem = {};
            !Todos.length ? todosItem.id = 1 : todosItem.id = Todos[Todos.length-1].id + 1;
            todosItem.text = newTodo;
            todosItem.done = false;
            Todos.push(todosItem);
            const todoToRenderInView = Todos[Todos.length - 1];
            cb(todoToRenderInView);
        },
        getTodosList: function (){
            return Todos;
        },
        removeTodo: function(todoId, cb){
            let indexRemoveItem = 0;
            Todos.forEach((todo, index) => {
                if(todo.id === todoId)
                    indexRemoveItem = index;
            });
            Todos.splice(indexRemoveItem, 1);
            cb(Todos);
        }
    };  
})();


const TodosView = (function() {
    let todosList = document.querySelector(".todos-list");
    
    function createStringForHTML(todoText, id){
       return `<input type="checkbox" class="todos-list__item" name="item" value=${id}>
                <label for="item" class="todos-list__item-text">${todoText}</label><br>`
    }

    return {
        listen: function() {
            let todos = document.querySelectorAll('.todos-list__item');
            let btn = document.querySelector('.todos__btn');


            btn.addEventListener('click', (e) =>{
                let todoItemValue = document.getElementById('todos__input').value;
                TodosController.addTodoItem(todoItemValue);
            });


            todos.forEach(todo => {
                todo.addEventListener('click', (e) =>{
                    let todoId = todo.value;
                    TodosController.removeTodoItem(todoId);
                });
            });
        },

        renderTodosList: function(todosListForRender) {
            let todosTpl = "";  
            todosListForRender.forEach(todo => {
                if(!todo.done){
                    todosTpl += createStringForHTML(todo.text, todo.id);
                }
            });
            todosList.innerHTML = todosTpl;
        },
        renderNewTodo: function(todoItem){
           todosList.innerHTML += createStringForHTML(todoItem.text, todoItem.id);
        }
    };
})();

const TodosController = (function() {
    return {
        init: function(){
            const todosListToRender = TodosModel.getTodosList();
            TodosView.renderTodosList(todosListToRender);
            TodosView.listen();
        },
        addTodoItem: function(todoFromView) {
            TodosModel.addTodo(todoFromView, (newTodo) => {       
                TodosView.renderNewTodo(newTodo);
            });
            TodosView.listen();
        },
        removeTodoItem: function(todoId){
            TodosModel.removeTodo(todoId, (newTodoList) => {
                TodosView.renderTodosList(newTodoList);
            })
            TodosView.listen(); 
        }
       
    };

})();

TodosController.init();

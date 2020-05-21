import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public todos: ITodo[];
  constructor() {
    this.todos = [
      {
        id: 1,
        text: "Make smth",
        status: false
      },
      {
        id: 2,
        text: "Example",
        status: false
      }
    ]
  }

  public removeTodo(id: number){
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  public checkTodo(id: number){
    this.todos.forEach(todo => {
      if(todo.id === id){
        todo.status = !(todo.status);
      }
    });
  }
  ngOnInit(): void {
  }
}

class ITodo {
  id: number;
  text: string;
  status: boolean;
}

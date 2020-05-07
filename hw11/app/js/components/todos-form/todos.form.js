export class TodosForm {
    constructor() {
      this.host = $('<div class="todos__form"></div>');
    }
  
    render() {
        this.host.html(window.Templates["form"]());
      return this.host; 
    }
  }
  
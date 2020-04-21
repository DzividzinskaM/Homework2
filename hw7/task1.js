class Model {
  constructor() {
    this.number = 0;
  }

  getNumber() {
    return this.number;
  }

  increment() {
      return new Promise((resolve, reject) =>{
        this.number  += 1;
        resolve(this.number);
      });
  }
  
  decrement() {
    return new Promise((resolve, reject)=>{
        this.number -= 1;
        resolve(this.number);
    });
  }
}

 const model = new Model();

class View {

  constructor() {
    this.counterEl = document.querySelector(".counter__number");
    this.plusBtn = document.querySelector(".counter__btn--plus");
    this.minusBtn = document.querySelector(".counter__btn--minus");
    this.counter = document.querySelector(".counter");

    /* this.btns ={
        plus: false,
        minus: false
    } */

  }

  render(number) {
    this.counterEl.innerHTML = number;
  }


  listenIncrement() {
    return new Promise((resolve, reject) =>{
      this.counter.addEventListener('click', (e) =>{
        if(e.target.matches(".counter__btn--plus")){
          resolve(true);
        }
      });
    });
  }


  listenDecrement() {
    return new Promise((resolve, reject) =>{
      this.counter.addEventListener('click', (e) =>{
        if(e.target.matches(".counter__btn--minus")){
          resolve(true);
        }
      });
    });
  }

 /* listen(){
     this.btns.plus = false;
     this.btns.minus =false;
    return new Promise((resolve, reject) => {
        this.counter.addEventListener('click', (e)=>{
            if(e.target.matches(".counter__btn--plus")){
                this.btns.plus = true;
                resolve(this.btns);
            } else if(e.target.matches(".counter__btn--minus")){
                this.btns.minus = true;
                resolve(this.btns);
            }
        })
    });
  } */
}

const view = new View();

class Controller {
  constructor() {
    view.render(model.getNumber());
    this.listenPlus();
    this.listenMinus();
  }


  async listenPlus(){
   await view.listenIncrement();
   let newNumber = await model.increment();
   view.render(newNumber);

  }

  async listenMinus(){
    await view.listenDecrement();
    let newNumber = await model.decrement();
    view.render(newNumber);

  }
}

const controller = new Controller();
let price = 0;
let phoneImg = "";

let memoryPhone = [
    {
        memory: 64,
        price: 300
    },
    {
        memory: 128,
        price: 500
    },
    {
        memory: 256,
        price: 700
    }
];


let colorPhone = [
    {
        color: "black",
        price: 30,
        image: "black-phone.jpg"
    },
    {
        color: "gold",
        price: 100,
        image: "gold-phone.jpg"
    },
    {
        color: "red",
        price: 20,
        image: "red-phone.jpg"
    },
    {
        color: "white",
        price: 15,
        image: "white-phone.jpg"
    }
];


memory: while(true) {
    memory = prompt("Enter phone memory");
    if(!memory){
        break;
    }
    for (let i = 0; i < memoryPhone.length; i++) {
        if(memoryPhone[i].memory === memory){
            price = memoryPhone[i].price;
            break memory;
        }
    }
    alert("Your information isn't correct, please try again");
}

color: while(price){
    color = prompt("Enter phone color");
    if(!color){
        break;
    }
    for (let i = 0; i < colorPhone.length; i++) {
        if(colorPhone[i].color===color.toLowerCase()){
            price += colorPhone[i].price;
            phoneImg = colorPhone[i].image;
            break color;
        }
    }
    alert("Your information isn't correct, please try again")
}

if(!phoneImg){
    alert("Not enough information");
} else{
    document.write(`<h1>Price: ${price} $</h1><br>`);
    document.write(` <img src="img/${phoneImg}" alt="">`);
}
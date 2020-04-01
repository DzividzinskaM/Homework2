let phoneImg = "";
let price = 0;
let memoryPrice = {
    64: 300,
    128: 500,
    256: 700
}

let PhoneColor = {
    black: {
        image: "black-phone.jpg",
        price: 30
    }, 
    red: {
        image: "red-phone.jpg", 
        price: 20
    },
    white: {
        image: "white-phone.jpg",
        price: 15
    },
    gold: {
        image: "gold-phone.jpg", 
        price: 100
    }
}


let flagOfMemory = false;
let flagOfColor = false;


while(true){
    memory = prompt("Enter phone memory");
    if(!memory){
        break;
    }else if(memoryPrice[memory]){
        price = memoryPrice[memory];
        flagOfMemory = true;
        break;
    } else{
        alert("Your information isn't correct, please try again");
    }
}

while(true){
    color = prompt("Enter phone color");
    if(!color){
        break;
    }
    let value = PhoneColor[color.toLowerCase()];
    if(value){
        phoneImg = value["image"];
        price += value["price"];
        flagOfColor = true;
        break;
    } else{
        alert("Your information isn't correct, please try again");
    }
}

if(!flagOfColor || !flagOfMemory){
    alert("Not enough information");
} else{
    document.write(`<h1>Price: ${price} $</h1><br>`);
    document.write(` <img src="img/${phoneImg}" alt="">`);
}
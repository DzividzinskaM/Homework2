
let phoneImg = "";
let price = 0;
let memoryPrice = {
    64: 300,
    128: 500,
    256: 700
}
let images = {
    black: "black-phone.jpg",
    gold: "gold-phone.jpg",
    red: "red-phone.jpg",
    white: "white-phone.jpg"
}

while(true){
    memory = prompt("Enter phone memory");
    if(!memory){
        break;
    }else if(memoryPrice[memory]){
        price = memoryPrice[memory];
        break;
    } else{
        alert("Your information isn't correct, please try again");
    }
}

while(true){
    color = prompt("Enter phone color");
    if(!color){
        break;
    } else if(images[color.toLowerCase()]){
        phoneImg = images[color.toLowerCase()];
        break;
    } else {
        alert("Your information isn't correct, please try again");
    }
}

if(!price || phoneImg === ""){
    alert("Not enough information");
} else{
    document.write(`<h1>Price: ${price} $</h1><br>`);
    document.write(` <img src="img/${phoneImg}" alt="">`);
}
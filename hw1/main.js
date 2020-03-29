let memory;
let phonePrice = 0;
let color = "";
let phoneImg = "";

memory = prompt("Enter phone memory"); 
if(+memory == 64) {
     phonePrice = 300;
 }  else if (+memory == 128) {
     phonePrice = 500;
 }  else if (+memory == 256) {
     phonePrice = 700;
 }  else {
     alert("Information isn't correct");
 }

 if(phonePrice != 0) {
     alert(phonePrice);
 }


color = prompt("Enter phone color");

if(!color && color.length == 0){
    alert("You don't choose phone color");
} else if(color.toLowerCase() == "black") {
    phoneImg += "black-phone.jpg"
} else if(color.toLowerCase() == "gold") {
    phoneImg += "gold-phone.jpg"
} else if(color.toLowerCase() == "red") {
    phoneImg += "red-phone.jpg"
} else if(color.toLowerCase() == "white") {
    phoneImg += "white-phone.jpg"
} else {
    alert("We don't find " + color + " phone");
}

if(phoneImg.length != 0){
    document.write("<img src=\"img/"+ phoneImg + "\" >");   
}

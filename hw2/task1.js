
let arrayLength = 0;
let arr;

while(true){
    arrayLength = prompt("Enter size of array");
    if(+arrayLength > 0) {
        arr = new Array(+arrayLength);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = new Array(+arrayLength);
        }
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                arr[i][j] = 0;
            }
        }
        break;
    }
    else{
        alert("Size of array isn't correct");
    }
}

console.log(arr);




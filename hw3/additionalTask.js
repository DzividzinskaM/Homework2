function add1(value) {
    return value*10;
}

function map(fn, arr){
    let resultArray = new Array();
    for (let index = 0; index < arr.length; index++) {
        resultArray.push(fn(arr[index]));
    }
    return resultArray;
}


let arr1 = [1, 2, 3, 4, 5];

let result = map(add1, arr1);

console.log(arr1);

console.log(result);



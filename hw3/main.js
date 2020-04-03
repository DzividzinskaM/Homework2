//TASK 1 
let sequence = function(start = 0, step = 1) {
    let flag = false;
    return function() {
        if(!flag){
            flag = true;
            return start;
        }
        return start +=step;
    }
}

var generator = sequence(10, 3);
var generator2 = sequence(7, 1);
var generator3 = sequence(12);
var generator4 = sequence();

console.log(generator());  //10
console.log(generator());  // 13

console.log(generator2()); // 7

console.log(generator()); // 16

console.log(generator2()); // 8

console.log(generator3());
console.log(generator3());

console.log(generator4());
console.log(generator4());



//TASK 2

function take(gen, x){
    let resultArray = new Array();

    while(x>0){
        resultArray.push(gen());
        x--;
    }
    return resultArray;
}

var gen2 = sequence(0, 2);
console.log(take(gen2, 5)); 




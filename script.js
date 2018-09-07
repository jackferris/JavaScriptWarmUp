function isOldEnoughToVote(age) {
    // your code here
    if(age >= 18){
        return true;
    }else{
        return false;
    }
}

function getProperty(obj, key) {
    // your code here
    return obj[key];
}

function addProperty(obj, key) {
    // your code here
    obj[key] = true;
}

function removeProperty(obj, key) {
    // your code here
    delete obj[key];
}

function isEven(num) {
    // your code here
    if(num % 2 == 0) {
        return true;
    }else{
        return false;
    }
}

function isOdd(num) {
    // your code here
    if(num % 2 == 0){
        return false;
    }else{
        return true;
    }
}

function addToFront(arr, element) {
    // your code here
    arr.splice(0, 0, element);
    return arr;
}

function addToBack(arr, element) {
    // your code here
    arr.push(element);
    return arr;
}

function joinArrays(arr1, arr2) {
    // your code here
    return arr1.concat(arr2);

}

function getAllWords(str) {
    // your code here
    if(str.length == 0){
        return [];
    }else{
        return str.split(" ");
    }
}

function extend(obj1, obj2) {
    // your code here
    for(var key in obj2){
        if(!obj1[key]){
            obj1[key] = obj2[key];
        }
    }
    return obj1;
}

function removeStringValues(obj) {
    // your code here
    for(var key in obj){
        if(typeof obj[key] == "string"){
            delete obj[key];
        }
    }
    return obj;
}

function getIndexOf(char, str) {
    // your code here
    var position = str.search(char);
    return position;
}

function keep(array, keeper) {
    // your code here
    var outputArray = [];
    for(var i=0; i<array.length;i++){
        if(array[i] == keeper){
            outputArray.push(keeper);
        }
    }
    return outputArray;
}



function getLargestElementAtProperty(obj, key) {
    // your code here
    if(!obj){
        return undefined;
    }
    var largest = obj.key[0];
    if(obj[key].length == 0){
        return undefined;
    }
    if(!Array.isArray(obj[key])){
        return undefined;
    }
    for(var i = 0; i < obj[key].length; i++){
        if(obj.key[i] >= largest){
            largest = obj.key[i];
        }
    }
    return largest;
}

function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    var afterTax = preTaxAndTipAmount;
    afterTax += (preTaxAndTipAmount * 0.095);
    afterTax += (preTaxAndTipAmount * 0.15);

    return afterTax;
}

function sumDigits(num) {
    // your code here
    var number = 0;
    var string = num.toString();
    for(var i = 0; i < string.length; i++){
        if(parseInt(string) < 0){
            if(i ==1){
                number+= parseInt(string[i]) * -1;

            }else if( i != 0){
                number += parseInt(string[i]);

            }
        }else{
            number += parseInt(string[i]);
    }
    }
    return number;
}

function listAllValues(obj) {
    // your code here
    var values = [];
    for(var key in obj){
        values.push(obj[key]);
    }
    return values;
}

function detectOutlierValue(string){
    var evenCount = 0;
    var oddCount = 0;
    var array = string.split(" ");
    for(var i = 0; i < array.length; i++){
        (parseInt(array[i]) % 2 == 0)? evenCount += 1 : oddCount += 1;
    }
    var remainderValue = (evenCount > oddCount)? 1: 0;
    for(var i = 0; i<array.length; i++){
        if (parseInt(array[i]) % 2 == remainderValue ) {
            return i + 1;
        }
    }
}

function search(array, value) {
    var newIndex = 0;
    while(array.length>1) {
        if(array[Math.floor(array.length/2)] > value){
            array = array.slice(0,Math.floor(array.length/2));

        }else if(array[Math.floor(array.length/2)]< value){
            newIndex += Math.floor(array.length/2) +1;
            array = array.slice((Math.floor(array.length/2) +1))
        }
    }
    if(array.length==1 && array[Math.floor(array.length/2)] != value){
        return null;
    }
    return newIndex;
}



//Assigment 11.

function add(num1,num2){
    return num1+num2;
}
function sub(num1,num2){
    return num1-num2;
}
function mul(num1,num2){
    return num1*num2;
}
function div(num1,num2){
    return num1/num2;
}
function calc(){
    var num1 = parseInt(prompt("enter the first number"));
    var num2 = parseInt(prompt("enter the second number"));
    var fn = prompt("enter the operation: 0 = add, 1 = sub, 2 = mul, 3= div");
    var arr = [add,sub,mul,div];
    console.log(arr[fn](num1,num2));
}

//Assignment 12.
//without callback
function Triangle(a,b,c){
    if(a === b && b === c && a ===c){
        return true;
    }else{
        return false;
    }
}

//with callback
function validate(a,b,c){
    if(a === b && b === c && a ===c){
        return true;
    }else{
        return false;
    }
}
function triangle(){
    var a = parseInt(prompt("enter the first number"));
    var b = parseInt(prompt("enter the second number"));
    var c = parseInt(prompt("enter the third number"));
    console.log(validate(a,b,c));
}

//Assignment 13

function anagram(string1,string2){
    if(string1.length != string2.length){
        console.log("not anagram");
        return;
    }
    string1 = string1.split('').sort().join('');
    string2 = string2.split('').sort().join('');
    if(string1 == string2){
        console.log("true");
    }else{
        console.log("false");
    }
}

//Assignment 14



//Assigmnet 15
asarr = [10,3,15,-1,9,6];

function maxmin(asarr){
    asarr = asarr.sort(function(a, b){return a - b});
    var len = asarr.length-1;
    var maxno = asarr[len];
    var minno = asarr[0];
    return {maxno,minno};
}
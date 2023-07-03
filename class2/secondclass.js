var x = 10;
undefined
var y = new Number(100);
undefined
typeof y;
'object'
y instanceof Number;
true
typeof Number;
'function'
x.toString;
ƒ toString() { [native code] }
x;
10
typeof x;
'number'
var name = "almaaz";
undefined
typeof name;
'string'
var name2 = new String("almaaz");
undefined
typeof name2;
'object'
name2 instanceof string;
VM623:1 Uncaught ReferenceError: string is not defined
    at <anonymous>:1:18
(anonymous) @ VM623:1
name2 instanceof String;
true
name.toUpperCase();
'ALMAAZ'
typeof String;
'function'
function add(){
    console.log("ii am the add");
}
undefined
window.add();
VM827:2 ii am the add
undefined
add();
VM827:2 ii am the add
undefined
var obj = {
    add(){
        console.log("i ma obj bind"):
    }
}
VM1022:3 Uncaught SyntaxError: Unexpected token ':'
var obj = {
    add(){
        console.log("i ma obj bind");
    }
}
undefined
obj.add();
VM1030:3 i ma obj bind
undefined
console.dir(add);
VM1147:1 ƒ add()
undefined
console.dir(add());
VM827:2 ii am the add
VM1159:1 undefined
undefined
function add(){
    console.log("ii am the add" argument.length);
}
VM1290:2 Uncaught SyntaxError: missing ) after argument list
function add(){
    console.log("ii am the add", argument.length);
}
undefined
add();
VM1301:2 Uncaught ReferenceError: argument is not defined
    at add (<anonymous>:2:34)
    at <anonymous>:1:1
add @ VM1301:2
(anonymous) @ VM1323:1
function addd(){
    var sum = 0;
    for(var i=0;i<arguments.length;i++){
        sum = sum + (isNaN(parseInt(arguments[i])));
    }
}
undefined
addd(1,2,3);
undefined
function addd(){
    var sum = 0;
    for(var i=0;i<arguments.length;i++){
        sum = sum + (isNaN(parseInt(arguments[i])));
    }
}
undefined
function addd(){
    var sum = 0;
    for(var i=0;i<arguments.length;i++){
        sum = sum + (isNaN(parseInt(arguments[i])));
    }
    return sum;
}
undefined
addd(1,2,3);
0
function addd(){
    var sum = 0;
    for(var i=0;i<arguments.length;i++){
        sum = sum + parseInt(arguments[i]);
    }
    return sum;
}
undefined
addd(1,2,3);
6
function addd(){
    var sum = 0;
    for(var i=0;i<arguments.length;i++){
        if(isNaN){
        sum = sum + parseInt(arguments[i]);
        }
    }
    return sum;
}
undefined
addd(1,2,"3");
6
addd(1,2,"almaaz");
NaN
sum = sum + (isNaN(parseInt(argumetn[i]))?0:parseInt(argument[i]));
VM2042:1 Uncaught ReferenceError: sum is not defined
    at <anonymous>:1:1
(anonymous) @ VM2042:1
function add(){
    var sum = 0 ;
    for(var i = 0;i<arguments.length;i++){
        if(typeof arguments[i] === 'function'){
            arguments[i] = arguments[i]();
        }
        sum = sum + (isNaN(parseInt(arguments[i]))?0:parseInt(arguments[i]));
    }
    return sum;
}
undefined
add(1,2,"four");
3
function add(x,y){
    return x+y;
}
undefined
function add(){
    var sum = 0 ;
    for(var i = 0;i<arguments.length;i++){
        if(typeof arguments[i] === 'function'){
            arguments[i] = arguments[i]();
        }
        sum = sum + (isNaN(parseInt(arguments[i]))?0:parseInt(arguments[i]));
    }
    return sum;
}
undefined
function adder(x,y){
    return x+y;
}
undefined
adder(10,2);
12
adder(10,null);
10
var x ;
undefined
x?"trithy value":"falsy";
'trithy value'
x = 10;
10
var x = null;
undefined
x?"trithy value":"falsy";
'falsy'
function adder(x,y){
    return x||0 + y||0;
}
undefined
adder(10);
10
function adder(x=0,y=0){
    return x||0 + y||0;
}
undefined
x = undefined;
undefined
x?"truth":"false";
'false'
function add(...arg){
    var sum = 0 ;
    for(var i = 0;i<arg.length;i++){
        if(typeof arg[i] === 'function'){
            arg[i] = arg[i]();
        }
        sum = sum + (isNaN(parseInt(arg[i]))?0:parseInt(arg[i]));
    }
    return sum;
}
undefined
add(1,2,3);
6
function show(x,y=0,...z){
    console.log(x,y,z);
}
show(10,20,30,40);
VM3955:2 10 20 (2) [30, 40]0: 301: 40length: 2[[Prototype]]: Array(0)
undefined
var num = 1029;
undefined
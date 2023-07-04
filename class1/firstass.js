var newdate = new Date();
console.log(newdate.getDate);
console.log(newdate.getDate());
var date = newdate.getDate;
var month = newdate.getMonth;
var year = newdate.getYear;
console.log(`${date}-${month}-${year}`);

// 1.Write a JavaScript program to display the current day and time in the following format.
// Today is : wednesday.
// Current time is : 10 PM : 30 : 38
var date = newdate.getDate();
var month = newdate.getMonth();
var year = newdate.getYear();
console.log(`${date}-${month}-${year}`);

console.log(`${date}-${month}-${year}`);

var day = newdate.getda
var day = newdate.getday();
var day = newdate.getUTCDay();

var day = newdate.getDay();
console.log(day);

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log(days[day]);


var hours = newdate.getHours();
var minutes = newdate.getMinutes();
var second = newdate.getMinutes();
console.log(`${hours}:${minutes}:${second}`);



function time(){
    var ampm = hours>=12?'PM':'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    time = hours +' ' + amp+ ':'+ minutes + ':'+ second;
    return t;
}
console.log(time);

console.log(time());
function time(){
    var ampm = hours>=12?'PM':'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    time = hours +' ' + ampm+ ':'+ minutes + ':'+ second;
    return t;
}
console.log(time());
function time(){
    var ampm = hours>=12?'PM':'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    t = hours +' ' + ampm+ ':'+ minutes + ':'+ second;
    return t;
}
console.log(time());

//solution 1 
function d(){
    console.log("Today is: "+ days[day] );
    console.log("Current time is : " +time());
}
d();

function time(){
    var ampm = hours>=12?'PM':'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    t = hours +' ' + ampm+ ' : '+ minutes + ' : '+ second;
    return t;
}
d();

// 2.Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
function currdate(){
    cd = date + '/' + month + '/' + year;
    return cd;
}
console.log(cd());


year = newdate.getFullYear();
2023
function currdate(){
    cd = date + '/' + month + '/' + year;
    return cd;
}
console.log(currdate());

// 3.WAP to print area and perimeter of rectangle , taking input from the user , using prompt
function perimeter(){
    var length = Number(prompt("enter the length"));
    var breadth = Number(prompt("enter the breadth"));
    var p = 2*(length+breadth);
    return p;
}
perimeter();

// 4.WAP to rotate the string ‘brainmentors in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

// input  = brainmentors

// output = sbrainmentor
var name = "almaaz";
function rotate(text,no=0){
    var n = no % text.length;
    var p1 = text.slice(0,n);
    var p2 = text.slice(n);
    return `${p2}${p1}`;
}
rotate("almaaz",2);
function rotateright(text,no=0){
    var n = no % text.length;
    return rotate(text, text.length-n);
}
rotateright("almaaz",3);

function r(){
    var text = prompt("enter the text");
    var no = prompt("enter the rotation number");
    console.log(rotateright(text,no));
}
r();

// 5.WAP to find out if 1st January will be a Sunday between 2000 and 2030


find();
function jansun(year){
    for(var i = 2000;i<2030;i++){
    var d = new Date(i, 0, 1);
    if(d.getDay() === 0){
        console.log("in " +i+" 1st january was sunday");
    }else{
        console.log("in "+i+" 1st january was not sunday");
    }}
}

jansun();

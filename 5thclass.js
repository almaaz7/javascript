//IIFC immediate invoking function expression

var t = (function (){
    var c = 0;
    function mycount(){
        c++;
        return c;
    }
    return mycount;
})();


function vow(){
    str = prompt("enter the string");
    str = str.split('');
var n = str.filter((ele)=>{
    var count = 0;
    if(ele=='a' || ele == 'e' || ele == 'i'  || ele == 'o' || ele == 'u'){
        count++;
    }
    return count;
})}

//assignment 1
// 1. Find Occurance of a target value in given array;
// arr= [19, 22, 18, 19, 16, 18, 19, 21, 24];
// target = 19;

function target(n){
    console.log(arr.find(ele=>ele==n)?"true":"false");
}

//assigment 2
// 2 . Reverse a given string using reverse() method 
// input = "BrainMentors"
// output = "srotnemniarB"

function rev(){
    var input = prompt("enter you character");
    input = input.split('').reverse().join('');
    console.log(input);
}

//assigment 3
// 3. Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
// Count of vowels in string;
// ex:- str = "brainmentors"
// 		output: count = 4
function vow(){
    str = prompt("enter the string");
    str = str.split('');
var n = str.filter((ele)=>{
    var count = 0;
    if(ele=='a' || ele == 'e' || ele == 'i'  || ele == 'o' || ele == 'u'){
        count++;
    }
    return count;
})
    console.log(n);
}

//assigment 4 
// 4. Write a function to find the sum of all elements in an array.
// ex:- arr = [1,2,3,4,5];
var asarr = [1,2,3,4,5];
asarr.reduce((acc,e)=>acc+e);

//assigment 5
// 5.Write a function to reverse the order of elements in an array.
// don't Use reverse() Method 
// ex:- var arr = ['a','b','c','d','e','f']
			
// 		output = ['f','e','d','c','b','a']

function reverse(b) {
    var output = [];
    while (b.length) {
      output.push(b.pop());
    }
  
    return output;
  }


//assigment 6
// 6. Write a function to remove a specific element from an array.

// 	arr = [1,2,3,4,5];
// 	remove = 3

// 	output :- [1,2,4,5]

function rem(n){
    console.log(asarr.filter(ele=>ele!=n));
}

//assignment 7
// 7. Write a function to find the second largest number in an array.

// ex:- var arr = [12,4,6,9,2,15,3,9];
		
// 		output second largest : 12




// 8.Write a function to rotate an array by a given number of steps to the right.

// ex:- arr = [1,2,3,4,5];
// 		step = 2;

//  output = [5,4,1,2,3]

var rotatearray = function(nums,k){
    for(var i = 0;i<k;i++){
        nums.unshift(nums.pop());
    }
    return nums;
}





// 9.Write a function to find the intersection of two arrays (common elements between the two arrays).

// ex:- arr1 = [2,4,1,7,4,2] , arr2 = [5,1,4,7,3,1];

// output = [1,4,7]

var intersection = function(array1,array2){
    array1 = remdup(array1);
    array2 = remdup(array2);
    var array3 = array1.filter(function(n){
        return array2.indexOf(n) !== -1;
    });
    console.log(array3);
}
intersection(array1,array2);



// 10.Write a function to remove duplicate elements from an array while preserving the original order.
// 	ex:- arr = [1,2,5,2,5,1,6,7,7]

// 		output:- [1,2,5,6,7]



var remdup = function(duparr){
    return duparr.filter((i,index)=>duparr.indexOf(i)===index);
}

console.log(remdup(duparr));
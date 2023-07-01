//IIFC immediate invoking function expression

var t = (function (){
    var c = 0;
    function mycount(){
        c++;
        return c;
    }
    return mycount;
})();
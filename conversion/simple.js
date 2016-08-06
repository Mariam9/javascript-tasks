// 
var value =  10; 

var convert = itoa1;

var result = convert(value);

console.log('given: ' + value + ' (' + typeof(value) + ')');

console.log('result: ' + result + ' (' + typeof(result) + ')');

function itoa1(value) {
    return '' + value;
}

//string  + b = string
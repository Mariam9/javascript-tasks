// 
var tasks = [
    {
        description: 'convert number to string using concat',
        converter: itoa1, 
        input: 10
    }
];



function itoa1(value) {
    return '' + value;
}

for ( var i = 0; i < tasks.length; i++) {
    callback(i, tasks[i]);

}

function callback(i, e) {
   var value =  e.input; 
   var result = e.converter(value);
   console.log('given: ' + value + ' (' + typeof(value) + ')');
   console.log('result: ' + result + ' (' + typeof(result) + ')');
   console.log(e.description)
}
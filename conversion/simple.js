// 
var tasks = [
    {
        description: 'convert number to string using concat',
        converter: itoa1, 
        input: 10
    },

    {
        description: 'convert string to number',
        converter: function() {
            return 0;
        },
        input: '123'
    },


];



function itoa1(value) {
    return '' + value;
}

//  ctr k c, ctrl k u
tasks.forEach(function(i, e, arr) {
    callback(i, e);
});

//forEach(tasks, callback);

function callback(i, e) {
   var value =  e.input; 
   var result = e.converter(value);
   console.log(e.description);
   console.log('given: ' + value + ' (' + typeof(value) + ')');
   console.log('result: ' + result + ' (' + typeof(result) + ')');
   console.log('---------------------------------------------');
}

function forEach(array, func) { //некий массив, некая функция, аргументі, потому что мы не знаем, принимает массив и функцию, с чьей помощью обрабатывает каждый элемент массива
    for (var i = 0; i < array.length; i++) {
        func(i, array[i]);
    }
}


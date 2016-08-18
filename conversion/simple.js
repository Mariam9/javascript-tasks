// 

var tasks = [
    {
        description: 'convert number to string using concat',
        converter: itoa1, 
        input: 10
    },

    {
        description: 'explicit conversion',
        converter: atoiExplicitConversion,
        input: '123'
    },

    {
       description: 'Parseint',
       converter: atoiParsedInt,
       input: 'x12'         
    },

    {
       description: 'convert string to float',
       converter: atof,
       input: '9.9'
    }

];
// input: string begins with a float number, output: float number ('9.9' = 9.9)
// input: string begins with a 


function itoa1(value) {
    return '' + value;
}

function atoiExplicitConversion(value) {
    return Number(value);
}


function atoiParsedInt(value) {
    // if(beginsFromNotAnumber(value)) {
    //     value = cut(value);
    // }
    var parsedNumber = parseInt(value); 
    if(isNaN(parsedNumber)) {
        return 0;
    }
    return parsedFloat;
}

function atof(value) {
    var parsedFloat = parseFloat(value); 
    if(isNaN(parsedFloat)) {
        return 0;
    }
    return parsedFloat;
}

//  ctr k c, ctrl k u
tasks.forEach(function(e, i, arr) {
    processItem(i, e);
});

//forEach(tasks, callback);

function processItem(i, e) {
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

//переменная - имeнованная ссылка на область памяти, действия: определить, записать, прочитать
// функция - именованная или анонимная логически объединенная часть кода, принимающая даннные на вход и возвращающая результат
// сигнатура  - имя функции, а также статические типы ее параметров и результата, уникальная подпись функции
// контракт - то, что обязуется сделать и вернуть функция, при условии передачи параметров, описыввет, как может повести себя функция в зависимости от переданных аргументов
//глобальная переменная менее приоритетная, чем переменная, опредлененная в функции
//если в функции укзан вар - создается новая переменная, которая перетирает значение глобальной. если внутри функции нет вар, значит используется уже существующая глобальная переменная
// null - специальное значение, которое имеет смысл «ничего» или «значение неизвестно», но переменная считается определенной, undefined - переменная не определена
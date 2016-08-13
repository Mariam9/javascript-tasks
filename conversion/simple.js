// 

var tasks = [
    {
        description: 'convert number to string using concat',
        converter: itoa1, 
        input: 10
    },

    {
        description: 'explicit conversion',
        converter: atoi,
        input: '123'
    },


];



function itoa1(value) {
    return '' + value;
}

function atoi(value) {
    return Number(value);
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
// контракт - то, что обязуется вернуть функция, при условии передачи параметров
//глобальная переменная менее приоритетная, чем переменная, опредлененная в функции
//если в функции укзан вар - создается новая переменная, которая перетирает значение глобальной. если внутри функции нет вар, значит используется уже существующая глобальная переменная
// null - специальное значение, которое имеет смысл «ничего» или «значение неизвестно», но переменная считается определенной, undefined - переменная неопределена

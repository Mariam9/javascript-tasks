// 

var myGlobal = 9;

function f1() {
    myGlobal = 10; //если нет вар, для глобальной переменной перезаписывается значение
}

function f2(myGlobal) {
    myGlobal =  11;
    console.log(myGlobal);    
}


console.log(myGlobal);
f1();
console.log(myGlobal);
f2(6);
console.log(myGlobal);
f2(myGlobal);
console.log(myGlobal);
return;



var tasks = [
    {
        description: 'convert number to string using concat',
        converter: itoa1, 
        input: 10
    },

    {
        description: 'convert string to number',
        converter: atoi,
        input: '123'
    },


];



function itoa1(value) {
    return '' + value;
}

function atoi() {
    return 123;
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

//глобальная переменная менее приоритетная, чем переменная, опредлененная в функции
//если в функции укзан вар - создается новая переменная, которая перетирает значение глобальной. если внутри функции нет вар, значит используется уже существующая глобальная переменная
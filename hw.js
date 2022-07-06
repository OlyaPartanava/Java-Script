//Создать массив из 10 случайных чисел и написать несколько функций для
// работы с ним. 
let mass = [];
for (let index = 0; index < 10; index++) {
    mass[index] = Math.floor(Math.random()*10);  
}
alert(mass);

//1. найти, содержит ли массив число, которое ввел пользователь

function getFirstNum () {
    let num = +prompt("Введите число, которое нужно найти в массиве");
    let findNum = mass.includes(num);
    if (findNum == false) {
        alert(`Число ${num} не найдено!`);
        } else {
            alert(`Число ${num} найдено!`);
        }
}
getFirstNum ();
//2. Каждый элемент массива увеличить на число, которое ввел пользователь

function increaseMass () {
    let num = +prompt("Введите число, на которое нужно увеличить элементы массива");
    mass = mass.map(x=>x+num);
   
            alert(`Новый массив - ${mass}`);
        
}
increaseMass ();


// Создать массив фруктов и отсортировать его по алфавиту.
let fruits = ['ЯБЛОКО','МАНДАРИН','СЛИВА','АПЕЛЬСИН','АНАНАС'];
fruits.sort();
alert(fruits);

// Вывод на экран с помощью document.write() в виде списка (с помощью тегов ul
// и li).

    html = '<ul>';
fruits.forEach(function(item, i, arr) {
  html += '<li>'+item+'</li>';
});
html += '</ul>'

document.write(html);

// Поиск фрукта в массиве. Функция принимает название фрукта и возвращает
// индекс найденного элемента или -1, если не найден. Поиск должен быть
// нерегистрозависимым (используйте функцию toUpperCase для строк)

function getName () {
    let nameFruits = prompt("Введите название фрукта");
    let newNameFruits = nameFruits.toUpperCase();
    if(fruits.includes(newNameFruits)) {
        document.write(`${nameFruits} находится в массиве под индексом ${fruits.indexOf(newNameFruits)}`);
    } else {
        document.write(fruits.indexOf(`-1 ${nameFruits} отсутсвует в массиве`));
    }
   
}
getName();

    let car = {
        producer:"Japan",
        model:"Tayota",
        year:"2020",
        avgSpeed:"100"
    }
    function showInfo () {
       
        document.write(" <pre> CAR INFORMATION: " + " Производитель - " + car.producer + ", Модель - "+ car.model + 
        ", Год выпуска - "+ car.year + ", Средняя скорость - " +car.avgSpeed);

    }
    showInfo ();

//     Функция для подсчета необходимого времени для преодоления
// переданного расстояния со средней скоростью. Учтите, что через
// каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
function getTime() {
let distance = +prompt("Введите расстояние");
alert(car.avgSpeed);
let time = (distance/car.avgSpeed);
alert(time);
let timeWithStop = (time + time/4);
alert(`Время для преодоления расстояния ${distance} км составляет ${timeWithStop.toFixed()} часов`);
}
getTime();

let currentDate = new Date(0, 0, 0, 23, 15, 30);
function showTime () {
document.write(" <pre> Текущее время: <pre>"); 
document.write(currentDate.toLocaleTimeString());
}

function increaseHours () {
    let hour = +prompt("На какое количество часов увеличить время?");
    document.write(` <pre> Время после увеличения на ${hour} часа <pre>`); 
    currentDate.setHours(currentDate.getHours() + hour);
    document.write(currentDate.toLocaleTimeString());
}
function increaseMin () {
    let min = +prompt("На какое количество минут увеличить время?");
    document.write(` <pre> Время после увеличения на ${min} минут <pre>`);
    currentDate.setMinutes(currentDate.getMinutes() + min);
    document.write(currentDate.toLocaleTimeString());
}
function increaseSec () {
    let sec = +prompt("На какое количество секунд увеличить время?");
    document.write(` <pre> Время после увеличения на ${sec} секунд <pre>`);
    currentDate.setSeconds(currentDate.getSeconds() + sec);
    document.write(currentDate.toLocaleTimeString());
}

showTime();
increaseHours();
increaseMin();
increaseSec();
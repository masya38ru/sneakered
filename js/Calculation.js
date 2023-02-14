let form2 = document.querySelector('.form');
let firstCoast = document.querySelector('.firstCoast');
let firstNumber = document.querySelector('.firstNumber');
let secondCoast = document.querySelector('.secondCoast');
let secondNumber = document.querySelector('.secondNumber');
let sum = document.querySelector('.sum');

form2.onsubmit = function(evt){
    let firstCoastNumber = Number(firstCoast.value);
    let firstNumberNumber = Number(firstNumber.value);
    let secondCoastNumber = Number(secondCoast.value);
    let secondNumberNumber = Number(secondNumber.value);

    if ((Number.isInteger(firstNumberNumber) && Number.isInteger(secondNumberNumber))&&(Number.isFinite(firstCoastNumber) && Number.isFinite(secondCoastNumber))){
        sum.value = firstCoastNumber*firstNumberNumber+secondCoastNumber*secondNumberNumber;}
    else if (!(Number.isInteger(firstNumberNumber))){
        alert("Вы ввели не целочисленное значения в поле Количество товара №1");
        sum.value = "Операция не может быть преобразована в число"}
    else if (!(Number.isInteger(secondNumberNumber))){
        alert("Вы ввели не целочисленное значения в поле Количество товара №2");
        sum.value = "Операция не может быть преобразована в число"}
    else if (!(Number.isFinite(firstCoastNumber))){
        alert("Вы ввели не численное значения в поле Стоимость товара №1");
        sum.value = "Операция не может быть преобразована в число"}
    else if (!(Number.isFinite(secondCoastNumber))){
        alert("Вы ввели не численное значения в поле Стоимость товара №2");
        sum.value = "Операция не может быть преобразована в число"}
    else {
        alert("Вы ввели неверные значения");
        sum.value = "Операция не может быть преобразована в число"}
    evt.preventDefault();};

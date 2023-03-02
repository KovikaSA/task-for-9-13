'use strict';

/*
2.Написать модуль, который способен выполнять операции с числами любой длины.
4 метода для сложения, умножения, вычитания и деления.
*/

export function addingLargeNum() {
    alert("Сложение больших чисел!")
    let numOne = BigInt(prompt("Введите первое число: "));
    let numTwo = BigInt(prompt("Введите второе число: "));

    if (numOne == null || numOne == '') {
        alert("Первое число либо null либо пусто");
    } else if (numTwo == null || numTwo == '') {
        alert("Второе число либо null либо пусто");
    } else {
        let result = numOne + numTwo;
        alert(result.toString());
    }
}

export function subtractionLargeNum() {
    alert("Вычитание больших чисел!")
    let numOne = BigInt(prompt("Введите первое число: "));
    let numTwo = BigInt(prompt("Введите второе число: "));

    if (numOne == null || numOne == '') {
        alert("Первое число либо null либо пусто");
    } else if (numTwo == null || numTwo == '') {
        alert("Второе число либо null либо пусто");
    } else {
        let result = numOne - numTwo;
        alert(result.toString());
    }
}

export function multiplicationLargeNum() {
    alert("Умножение больших чисел!")
    let numOne = BigInt(prompt("Введите первое число: "));
    let numTwo = BigInt(prompt("Введите второе число: "));

    if (numOne == null || numOne == '') {
        alert("Первое число либо null либо пусто");
    } else if (numTwo == null || numTwo == '') {
        alert("Второе число либо null либо пусто");
    } else {
        let result = numOne * numTwo;
        alert(result.toString());
    }
}

export function divisionLargeNum() {
    alert("Деление больших чисел!")
    let numOne = BigInt(prompt("Введите первое число: "));
    let numTwo = BigInt(prompt("Введите второе число: "));

    if (numOne == null || numOne == '') {
        alert("Первое число либо null либо пусто");
    } else if (numTwo == null || numTwo == '') {
        alert("Второе число либо null либо пусто");
    } else {
        let result = numOne / numTwo;
        alert(result.toString());
    }
}

// '1000000000000000000000000000000000000000000000000000000000000000000000';
// '25000000000000000000000000000';
/*
3. Создать класс данных “Товар”
С полями
Название
Цена
Количество
Описание
Наполнить массив объектами такого класса.
Написать метод, который получает строку вида
“name-contains-fd&price-=2-&quantity->5&description-ends-abc”
“name-starts-fd&quantity=5”
На выходе возвращает массив, только с подходящими объектами
возможны (contains, starts, ends для строковых и <, =, >, <=, >= для числовых)
*/

'use strict';

class Product {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}

String.prototype.contains = String.prototype.includes;
String.prototype.starts = String.prototype.startsWith;
String.prototype.ends = String.prototype.endsWith;

Number.prototype['<'] = function (value) {
    return this <= value;
}
Number.prototype['>'] = function (value) {
    return this >= value;
}
Number.prototype['='] = function (value) {
    return this == value;
}

function filter(arr, str) {
    const strArr = str.split('&');
    const props = strArr.map(item => ({
        ops: item.split(/(-|>=?|<=?|=)/).filter((v) => v && /[^-]/.test(v))
    }));

    const newArr = arr.filter(value => {
        for (let prop of props) {
            if (!value[prop.ops[0]][prop.ops[1]](prop.ops[2]))
                return false;
        }
        return true;
    })
    return newArr;
}

const str = 'name-contains-fd&price-=2-&quantity->5&description-ends-abc';
const str2 = 'name-starts-fd&quantity-=5';

const products = [new Product("Gofd", 2, 6, "---abc"),
new Product("Foofd", 2, 34, "Good abc"),
new Product("fdMeat", 22, 5, "Good abc"),
new Product("Soup", 23, 1, "Good abc"),
new Product("Milk", 60, 4, "Good milk")
];

const newArr = filter(products, str);
console.log("Массив подходящий 'name-contains-fd&price-=2-&quantity->5&description-ends-abc' :")
console.log(newArr);

const newArr2 = filter(products, str2);
console.log("Массив подходящий 'name-starts-fd&quantity=5' :")
console.log(newArr2);
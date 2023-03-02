/*
1. Написать модуль, который будет включать в себя следующие методы.
1.1. Преобразование строки к нижнему регистру, но первая буква большая. “Abscd”
1.2. Преобразование строки с целью правильно расстановки пробелов.
 “Вот пример строки,в которой   используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.” =>
“Вот пример строки,в которой используются знаки препинания. После знаков должны стоять пробелы, а перед знаками их быть не должно. Если есть лишние подряд идущие пробелы, они должны быть устранены.”
1.3. Посдчитывающие кол-во слов в строке.
1.4. Подсчитывающий, уникальные слова. “Текст, в котором слово текст несколько раз встречается и слово тоже” - в ответе, что “слово - 2 раза, текст - 2 раза, в - 1 раз, несколько - 1 раз“. Самостоятельно придумать наиболее удачную структуру данных для ответа.
*/

export function ucFirst(str) {
    if (!str) return str;

    let strNew = str.toLowerCase();

    alert(strNew[0].toUpperCase() + strNew.slice(1));
}

export function withSpace(strSpace) {
    if (!strSpace) return strSpace;

    let words = strSpace.split(' ');

    alert(strSpace.replace(/\p{Po}/gu, "$& "));
    alert("Слов в строке " + words.length);
}

export function unique(arr) {
    arr = arr.replace(/[^a-zа-яё0-9\s]/gi, ' ', '');
    const strItems = arr.split(' ');

    const result = {};
    strItems.forEach(item => {
        const normalItem = item.toLowerCase();

        if (normalItem in result) {
            result[normalItem] = result[normalItem] + 1;
        } else {
            result[normalItem] = 1;
        }
    });

    alert(Object.keys(result).map(k => {
        return `Слово: ${k}: ${result[k]};`
    }).join(' '))
}
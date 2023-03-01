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
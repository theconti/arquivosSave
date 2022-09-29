function valid(parens) {
    let arr = parens;
    if (Array.isArray(parens) === false) {
        arr = arr.split('');
    }

    if (arr.length == 1) return false;
    if (arr[0] == ')') return false;
    if (arr[arr.length - 1] == '(') return false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == ')') {
            arr.splice(i, 1);
            arr.shift();
            break;
        }
    }
    if (arr == []) {
        return true;
    } else if (arr.length > 1) {
        valid(arr);
        return 1;
    }
}

console.log(valid('()'));
// function valid(parens) {
//     let arr = parens.split('');

//     if (element === '(') {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] == ')') {
//                 arr.splice(i, 1);
//                 arr.splice(element, i);
//             }
//         }
//     }
//     if (arr.length == 1) return false;
//     if (arr[0] == ')') return false;
//     console.log(arr);
// }

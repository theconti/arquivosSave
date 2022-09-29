function validParentheses(parens) {
    if (parens.length === 0) {
        return true;
    }
    let arr = parens.split('');

    if (arr.length <= 1 || arr[0] === ')') {
        return false;
    }

    while (arr.length > 1 || arr[0] === '(') {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === ')') {
                arr.splice(i, 1);
                arr.shift();
                i = 0;
                if (arr[0] === ')') {
                    break;
                }
                continue;
                
            }
        }

        console.log(arr);
        if (arr.length === 1 || arr[0] === ')' || arr[arr.length - 1] === '(') {
            return false;
        } else {
            return true;
        }
    }
}
validParentheses('()))');

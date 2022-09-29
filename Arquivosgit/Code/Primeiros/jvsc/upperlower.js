function sameCase(a, b) {
    if (/[^a-z]/gi.test(a) || /[^a-z]/gi.test(b)) return -1;
    if (a === a.toLowerCase()) {
        return b === b.toLowerCase() ? 1 : 0;
    }
    if (a === a.toUpperCase()) {
        return b === b.toUpperCase() ? 1 : 0;
    }
}

function accum(s) {
    let charArray = s.split('');
    let answer = [];
    for (let i = 0; i < charArray.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (j === 0) {
                answer.push(charArray[i].toUpperCase());
            } else {
                answer.push(charArray[i].toLowerCase());
            }
        }
        answer.push('-');
    }
    answer.pop();
    answer = answer.join('');
    return answer;
}

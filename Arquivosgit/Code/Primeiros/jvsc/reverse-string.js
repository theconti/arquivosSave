var reverseString = function (s) {
    let right = s.length - 1;
    let arr = [];
    while (right >= 0) {
        s.slice(right, 1);
        arr.push(s[right]);

        right--;
    }

    arr.forEach((ele, i) => {
        s[i] = arr[i];
    });
    console.log(s);
    return s;
};

function split(teste) {
    return teste.split('');
}

reverseString(split('foo 𝌆 bar mañana mañana'));

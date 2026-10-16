function palindrome(str) {
    let str1 = str.toLowerCase()
    let str2 = '';

    for (let i = str1.length - 1; i >= 0; i--) {
        str2 += str1[i]
    };

    if (str1 === str2) {
        return true
    };

    return false
};

console.log(palindrome("Malayalam"));
console.log(palindrome("Hello"));


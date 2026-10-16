// Write a recursive function that returns a string in reverse order.
// Example
// reverseString("hello"); // "olleh"

function reverseString(str) {
    if (str.length <= 0) return ""

    return str.slice(str.length - 1) + reverseString(str.slice(0, str.length - 1))
}

console.log(reverseString("hello"));

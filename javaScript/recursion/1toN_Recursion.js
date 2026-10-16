let num = 1

function print(n) {
    if (num > n) return
    console.log(num);
    num++
    print(n)

}
print(8)
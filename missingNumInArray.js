var numbers = [0, 2, 3, 5, 7, 8, 9, 10];
function checkNumInArr(arr, num) {
    var result = [];
    while (num > 0) {
        if (arr.indexOf(num) === -1) {
            result.push(num);
        }
        num--;
    }
    return result;
}
console.log(checkNumInArr(numbers, 20));

function binarySearch(list, item) {
    var middle;
    var guess;
    var low = 0;
    var high = list.length - 1;
    while (low <= high) {
        middle = Math.floor((high + low) / 2);
        guess = list[middle];
        if (guess === item) {
            return middle;
        }
        if (guess > item) {
            low = middle + 1;
        }
        else {
            low = middle - 1;
        }
    }
    return -1;
}
var list = [1, 4, 5, 6, 20, 50, 80];
var numero = 20;
var res = binarySearch(list, 20);
console.log(res);

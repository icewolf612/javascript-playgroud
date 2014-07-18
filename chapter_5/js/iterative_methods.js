/**
 * Created by goldbeck on 18.07.2014.
 */
var numbers = [1,2,3,4,5,4,3,2,1];
var everyResult = numbers.every(function(item, index, array) {
    return item > 2;
});
alert("In array " + numbers + ", is every item > 2? " + everyResult);

var someResult = numbers.some(function(item, index, array) {
    return item > 2;
});

alert("In array " + numbers + ", are some items > 2? " + someResult);

var filterResult = numbers.filter(function(item, index, array) {
    return (item > 2);
});

alert("Source Array: " + numbers + "\nFiltered with item > 2: " + filterResult);

var mapResult = numbers.map(function(item, index, array) {
    return (item * index + array.length);
});

alert("Source Array: " + numbers + "\nFor every item: item * index + array.length: " + mapResult);

numbers.forEach(function(item, index, array) {
   console.log("Item " + item + " is at index " + index + " of array: " + array);
});
// Write a function findElement to find a given element in an array.
// It should return the index position of the element in the array and null if there are no elements present.
// In the case of repetition, find the index of the first occurrence of the element.

var a = [3, 10, 18, 20];

let findElement = (arr,el) => {
    
    const index = arr.findIndex((item) => { return item == el });

    return index == -1 ? null : index
}

console.log(findElement(a,20));
// The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function doubleTrouble(arr) {
    if (arr.length === 0) return [];

    const result = [];
    let lastElement = null;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === lastElement) {
            // Handle consecutive duplicates: just add the current element
            result.push(arr[i]);
        } else {
            // Handle the first occurrence of a new element or a new sequence of duplicates
            result.push(arr[i] * 2);
            lastElement = arr[i]; // Update lastElement to the current element
        }
    }

    return result;
}

console.log(doubleTrouble([1, 3, 3, 5, 8, 8, 8 ,9]))
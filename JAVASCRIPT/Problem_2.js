
// Problem : Perform sorting of an array in descending order


let arr = [1,-52,8,74,2225,0,-500];

// approach 1 : using bubble sort
console.log(sortArr1(arr));

// approach 2 : using merge sort
arr = [1,-52,8,74,2225,0,-500];
console.log(sortArr2(arr));



function sortArr1(arr) {

    // compare every element and move the small element to end
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length-1; j++){
            if(arr[j] < arr[j+1]){
                  let temp = arr[j];
                  arr[j] = arr[j+1];
                  arr[j+1] = temp;
            }
        }
    }
    return arr;
}


function sortArr2(arr) {
    if (arr.length <= 1) {
        return arr; // Base case -> An array with one or zero elements is already sorted
    }

    // Split the array in half
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Recursively sort and merge the halves 
    return merge(sortArr2(left), sortArr2(right));
}

function merge(left, right) {
    let ansArr = [];
    let leftIdx = 0;
    let rightIdx = 0;

    // Compare elements from both arrays and add the smaller element to the ansArr
    while (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx] > right[rightIdx]) {
            ansArr.push(left[leftIdx]);
            leftIdx++;
        } else {
            ansArr.push(right[rightIdx]);
            rightIdx++;
        }
    }
    // Add any remaining elements from both arrays, if any
    return ansArr.concat(left.slice(leftIdx), right.slice(rightIdx));
}

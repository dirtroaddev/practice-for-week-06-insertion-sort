// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  let newArr = [...arr]; // Copy of the original array to work with
  let sorted = []; // The array that will store the sorted elements

  // Initially, log the empty 'sorted' array
  console.log(sorted.join(','));

  while (newArr.length > 0) {
    console.log(sorted.join(','));
    // Take the first element from newArr to simulate sorting from smallest to largest as per the failure log
    let currentElement = newArr.shift(); // Adjusted to shift to remove from the start
    let i;
    for (i = sorted.length - 1; i >= 0 && sorted[i] > currentElement; i--) {
      sorted[i + 1] = sorted[i]; // Shift elements rightward to make room for currentElement
    }
    sorted[i + 1] = currentElement; // Insert currentElement in its correct position

    // Log the state of 'sorted' after each insertion
    
  }
  
  return sorted; // The 'sorted' array is now fully sorted
}





// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  // Your code here
}

module.exports = [insertionSort, insertionSortInPlace];
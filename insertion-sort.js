// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  // Copy the original array
  let newArr = [...arr];
  // Create an array to store the sorted values
  let sorted = [];

  // While the newArr array is not empty
  while (newArr.length > 0) {
      // Ensure the logging is the first operation in the loop
      console.log(sorted.join(','));

      // Pop a value from newArr
      let valueToInsert = newArr.pop();

      // Initially, add null to the end of the sorted array to assist in comparison
      sorted.push(null);

      // Walk through the sorted array in reverse order to find the insertion point
      let i;
      for (i = sorted.length - 2; i >= 0 && sorted[i] > valueToInsert; i--) {
          sorted[i + 1] = sorted[i]; // Shift the value to the right by 1
      }

      // Insert the valueToInsert at the found insertion point
      sorted[i + 1] = valueToInsert;

      // Remove the null placeholder at the end if it's no longer needed
      if (sorted[sorted.length - 1] === null) {
          sorted.pop();
      }
  }

  // After sorting is complete, do a final log of the sorted state
  console.log(sorted.join(','));

  return sorted;
}





// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  // Set a pointer dividing the array into sorted and unsorted halves
  // Assuming the first element is already sorted, start from the second element
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    let j = i - 1;

    // Before inserting the current element to its correct position, log the current state of the array
    // Note: Adjust logging here if needed based on the test's specific expectations
    console.log(arr.join(','));

    // Move elements of arr[0..i-1], that are greater than currentElement, to one position ahead of their current position
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentElement;

    // Log after each insertion if your tests require seeing the array after the operation
    // If logging is expected before the operation for each element, consider placing the log at the start of the loop or adjust based on requirements
  }

  // Log the final sorted array if needed
  console.log(arr.join(','));

  return arr;
}



module.exports = [insertionSort, insertionSortInPlace];
function findMinAndRemoveSorted(array) {
  return array.shift()
}

function findMinAndRemove(array1, array2) {
  if (array1[0] < array2[0]){
    return findMinAndRemoveSorted(array1)
  } else {
    return findMinAndRemoveSorted(array2)
  }
}


function merge(array1, array2) {

  let sorted = []
  while (array1.length > 0 && array2.length > 0) {
    sorted.push(findMinAndRemove(array1, array2))
  }

  sorted = sorted.concat(array1).concat(array2)
  return sorted
}


function mergeSort(array) {

  let midpoint = array.length/2
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)

  if (array.length <= 1) {
    return array
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}

console.log(mergeSort([1, 2, 6, 7, 8, 3, 4, 5]))

let nums = [10, 70, 30, 100, 40, 45, 90, 80, 85];
let words = ["dog","at", "good", "eye", "cat", "ball", "fish"];
 
// bubbleSort(nums);
// bubbleSort(words);
 


insertionSort(nums);
insertionSort(words);
console.log(nums);
console.log(words);

function bubbleSort(anArray){
  for (let i = 0; i < anArray.length -1; i++) {
      for (let j = 0; j < (anArray.length - 1); j++) {
        /* compare the adjacent elements */   
        if (anArray[j] > anArray[j+1]){ 
            /* swap them */
            let temp = anArray[j];
            anArray[j] = anArray[j + 1];
            anArray[j + 1] = temp;
        }
      }
  }
  return anArray;
}

function insertionSort(anArray){
    for (let i = 1; i < (anArray.length -1); i++) {
        let currentValue = anArray[i];
        let positionOfValue = i;
 
       while((positionOfValue) > 0 && anArray[positionOfValue-1] > currentValue){
        anArray[positionOfValue] = anArray[positionOfValue-1];
        positionOfValue --;
       }
 
       anArray[positionOfValue] = currentValue;
    }
    return anArray;
}

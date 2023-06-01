let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

function combinedArray(arr1,arr2){
    let combinedArray =[];


for (let i = 0; i < arr1.length; i++) {
    combinedArray.push(arr1[i]);
  }
  
  for (let j = 0; j < arr2.length; j++) {
    combinedArray.push(arr2[j]);
  }
  
  return combinedArray;
}

document.write(combinedArray(arr1,arr2));
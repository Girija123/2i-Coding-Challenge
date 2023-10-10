/** @format */

let expectedSum=15;

let arrWholeNumbers=[0,15,32,2000,15000];

let pairCount=0;

let getSumPairCount=((expectedSum,arrWholeNumbers)=>{
  for(let i=0;i<arrWholeNumbers.length;i++){
      for(let j=1;j<arrWholeNumbers.length;j++){
        if(arrWholeNumbers[i]+arrWholeNumbers[j]==expectedSum){
           pairCount+=1;
           arrWholeNumbers.splice(i,1);
           arrWholeNumbers.splice(j,1);
        }
      }
  }
  return pairCount;
});

console.log(getSumPairCount(expectedSum,arrWholeNumbers));
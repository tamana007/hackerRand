function plusMinus(arr){
  let positiveNum=0;
  let negativeNum=0;
  let zeroNum=0;

  arr.forEach((arr)=>{
    if(arr>0){
      positiveNum++
    }
    else if(arr<0){
      negativeNum++
    }
    else{
      zeroNum++
    }
  })
   const totalCountArr=arr.length;
   const positiveRatio=positiveNum/totalCountArr;
   const negativeRatio=negativeNum/totalCountArr;
   const zeroRation=zeroNum/totalCountArr;

console.log('positive ratios',positiveRatio.toFixed(6));
console.log('negative ratios',negativeRatio.toFixed(6));
console.log('positive ratios',zeroRation.toFixed(6));



}
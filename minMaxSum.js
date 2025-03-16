function minMax(arr){
  arr.sort((a,b)=>a-b)
  const maxNum=arr.slice(0,4).reduce((acc,num)=>acc+num,0);
  const minNum=arr.slice(1).reduce((acc,num)=>num+acc,0);

  console.log(maxNum);
  console.log(minNum);
}
minMax([1,2,3,4,5])
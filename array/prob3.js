let num=[1,2,3,4,5,6,7,8,9,10];
let sum=0;
let count=0;
for(let i=0;i<num.length;i++){

  if(num[i] % 2==0){
    sum=sum+num[i];
    count=count+1;
      }
 
}console.log(sum/count);
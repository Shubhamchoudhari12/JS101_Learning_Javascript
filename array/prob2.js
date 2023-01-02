let lower=["a","b","c","d","e"];
let upper=["A","B","C","D","E"];

for(let i=0;i<lower.length;i++){

  if(i<upper.length){
    lower[i]=upper[i];
  }
  console.log(lower[i]);
}
let str="go%.a$.";
let one="";
for(let i=0;i<str.length;i++){
if(str[i]=="g"){
  one=one+str[i];
}
else if(str[i]=="o"){
  
  one=one+str[i];
}  
else if(str[i]=="%"){
  one=one+str[i];
}  
else if(str[i]=="."){
  one=one+str[i];
}  
else if(str[i]=="a"){
  one=one+str[i];
}  
else if(str[i]=="$"){
  one=one+str[i];
}  
else if(str[i]=="."){
  one=one+str[i];
}  


  
}console.log(one);
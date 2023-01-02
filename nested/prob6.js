for(let hori=1;hori<=10;hori++){
  let a="";
  for(let ver=1;ver<=10;ver++){

    if(hori==1 || hori==10){
      a=a+"*";
    }
    else if(ver==1 || ver==10){
      a=a+"*";
    }
    else{
      a=a+" ";
    }
  }
  console.log(a);
}
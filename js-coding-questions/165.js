function removeChars(input){
  input = input.replaceAll("b","");
  while(input.includes("ac")){
    input= input.replaceAll("ac","");
    
  }
  return input;
}

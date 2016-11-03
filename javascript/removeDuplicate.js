function removeDuplicates(negara) {
  var x,
      len=negara.length,
      out=[],
      obj={};
 
  for (x=0; x<len; x++) {
    obj[negara[x]]=0;
  }
  for (x in obj) {
    out.push(x);
  }
  return out;
}
var Mynegara = ["Antarctica", "Afghanistan", "Austria", "Antigua and Barbuda", "Antarctica", "Albania", "Algeria", "Austria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Argentina", "Antigua and Barbuda", "Armenia", "Austria", "Aruba", "Australia", "Austria", "Azerbaijan"];
result = removeDuplicates(Mynegara).sort("");

console.log(result);
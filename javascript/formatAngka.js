var formatAngka = function format(a,b){
  
  if (a < b) {
  console.log('error');
} else if (a > b) {
  console.log((a/b).toLocaleString());
}
};


formatAngka(250000,100)
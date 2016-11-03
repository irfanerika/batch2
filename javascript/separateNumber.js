var separateNumber = function (number){
  var arra = number.split("");
  
  for (i=0; i<=arra.length; i++) {
        if (arra[i] % 2 === 1 && arra[(i+1)] % 2 === 1) {
                (arra[i] = arra[i] + "-");
        }
}
  console.log(arra.join(""))
};

separateNumber('9113020675971081');
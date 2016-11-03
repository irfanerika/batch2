 var str = prompt("tuliskan kata");
if(str !== null && str !== undefined && str !== NaN) {
 var strStripped = str.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@]/g,"");
 var strSqueezed = strStripped.replace(/ /g, "");
 var i, k;
 k = strSqueezed.length-1;
 var numOfValidComparisons = 0;
  for(i=0; i<strSqueezed.length; i++) {
   if(strSqueezed.charAt(i) === strSqueezed.charAt(k)) {
     numOfValidComparisons++;
   }
   k--;
  }
 if(numOfValidComparisons === strSqueezed.length)
   alert(true);
 else
   alert(false);
   }
   
 //alternatif
 
 function palindrome(str) {
   str = str.toLowerCase().replace(/[^a-z]+/g,"");
   return str === str.split("").reverse().join("")
}

alert(palindrome("katak")); //true
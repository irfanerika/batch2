function calculate(num){
    var str =0;
    for (i=1;i<=num;i++){
        if (num % i === 0){
            str += ','+i;
        }
    }
    console.log(str);
}

calculate(18);
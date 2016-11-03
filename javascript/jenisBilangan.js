function jenisBilangan(x){
    var bilangan = [];
    console.log("1 Ganjil")
    for (i=2; i<=x; i++){
        if (!bilangan[i]){
            console.log(i+" Prima");
            for(j=i; j<=x; j+=i){
                bilangan[j] = true;
            }
        }else{
            if((i%2==1) == true){
                console.log(i+ " Ganjil")
            }
            if((i%2==0) == true){
                console.log(i+ " Genap")
            }
        }
    }
}
jenisBilangan(100);

//EJERCICIO 1
console.log("-----------------------------------------");
console.log("EJERCICIO 1")
        numero1=5;
        numero2=8;
        console.log("VALORES")
        console.log("NUMERO1 =>"+numero1);
        console.log("NUMERO2 =>"+numero2);
        console.log("")
        if(numero1<numero2) {
            console.log("numero1 no es mayor que numero2");
        }
        if(numero2>0) {
            console.log("numero2 es positivo");
        }
        if(numero1!=0) {
            console.log("numero1 es negativo o distinto de cero");
        }
        numero1++;
        if(numero1<numero2) {
            console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
        }
console.log("")

//EJERCICIO 2 
console.log("-----------------------------------------")
console.log("EJERCICIO 2")
class factorial{
    static mostrarFactorial(n){
        console.log("Factorial de "+n+" es:");
        let factorial=1;
        for(let i=1;i<=n;i++){
            factorial=factorial*i;
        }
        return factorial;
    }
}
    console.log(factorial.mostrarFactorial(5));
    console.log("")

//EJERCICIO 3
console.log("-----------------------------------------")
console.log("EJERCICIO 3")
class parEImpar{
    static mostrarResultado(n){
        if ((n % 2) == 0){
            return "el numero "+n+" es par";
        }else{
            return "el numero "+n+" es impar";
        }
        
    }
}
console.log(parEImpar.mostrarResultado(112));
console.log("")

//EJERCICIO 4
console.log("-----------------------------------------")
console.log("EJERCICIO 4")
class palindromo{
    static mostrarResultado(cadena){
        let cadenaOriginal=cadena;
        cadenaOriginal= cadenaOriginal.replace(/[\W_]/g, "").toLowerCase()
        console.log("TEXTO ORIGINAL => "+cadenaOriginal);
        const newStr = cadena.replace(/[\W_]/g, "").toLowerCase()
        const Reversion = newStr.split("").reverse().join(""); 
        console.log("TEXTO REVERSADO => "+Reversion);
        if (Reversion===cadenaOriginal){
            return ("LA CADENA DE TEXTO ES PALINDROMO");
        }else{
            return ("LA CADENA DE TEXTO NO ES PALINDROMO");
        }
        
    }
   
}
console.log(palindromo.mostrarResultado("“La ruta nos aporto otro paso natural”"));
console.log("")


//BONUS
console.log("-----------------------------------------")
console.log("BONUS")
console.log("");
function combinaciones(cadena){
    console.log("LA CADENA PARA EL PROCESO ES: "+cadena)
    var combi = [];
    var temp= "";
    var letLen = Math.pow(2, cadena.length);
    
    for (var i = 0; i < letLen ; i++){
        temp= "";
        for (var j=0;j<cadena.length;j++) {
            if ((i & Math.pow(2,j))){ 
                temp += cadena[j]+ " "
            }
        }
        if (temp !== "") {
            combi.push(temp);
        }
        
    }
    console.log(combi);
    }

    combinaciones("CASA");




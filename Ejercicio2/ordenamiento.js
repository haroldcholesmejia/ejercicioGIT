function ordenar(){
let n=9;
var v = new Array(n);
console.log("ORDENAMIENTO DE UN ARREGLO");
console.log("CANTIDAD DE VALORES: "+n);
v[0]="unacadena";
v[1]=3;
v[2]=9;
v[3]=1;
v[4]=10;
v[5]=500;
v[6]=1;
v[7]=10;
v[8]=true;
console.log("Valores del arreglo: ["+v[0],v[1],v[2],v[3],v[4],v[5],v[6],v[7],v[8]+"]");
console.log("--------------------------------------");
console.log("Proceso de Verificacion de valores del arreglo")
for (var j=0;j<=n;j++){
  if ((typeof v[j]===null) || (typeof v[j] === 'string' || v[j] instanceof String) || (typeof v[j]==='boolean') || (typeof v[j]==='object')){
    console.log("valor "+v[j]+ " de tipo "+typeof v[j]+" ==> eliminado");  
    v.splice(j,1);
    n--;  
  }
}

j=0;
while (j<n){
   if (v[j]<v[j+1]){
     temp=v[j];
     v[j]=v[j+1];
     v[j+1]=temp;
     j=0;
   }else{
     j++;
   }
}


console.log("EL ARREGLO RESULTANTE ES:"); 
for (let vector in v){
  console.log(v[vector]); 
}
}
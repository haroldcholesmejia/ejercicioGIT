function mostrar(n){
    var v = new Array(n);
    console.log("SERIE DE FIBONACCI");
    console.log("CANTIDAD DE VALORES: "+n);
    let j=2;
    v[0]=0;
    v[1]=1;
     while (j<n){
      v[j]=v[j-2]+v[j-1];
           j++;   
    }
    j=0;
    while (j<n){
     console.log( v[j]); 
     j++;
    }
    
}
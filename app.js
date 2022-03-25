 


    let entrada = prompt("Ingrese el valor a financiar para saber el capital final o presiones ´Salir´ para salir")
const Monto = [];
if ( Monto< 50000 ) { 
    console.log(entrada*1.4) 
}
if((Monto >=50000) && (Monto<100000)){
    console.log(entrada*1.383)
} if ((Monto >=100000) && (Monto<500000)) {
    console.log(Monto*1.367)
} if (Monto >=500000) {
    console.log(Monto*1.35)  }
 while (entrada != "Salir") {
 Monto.push(entrada)
 entrada = prompt("Ingrese el valor a financiar para saber el capital final o presiones ´Salir´ para salir")
   }
  for (let index = 0; index < Monto.length; index++){  
    console.log(Monto[index])  
 }
     
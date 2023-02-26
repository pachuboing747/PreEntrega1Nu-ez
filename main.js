let impuestoPais = 0.30
let impuestoGanancias = 0.35
let katar = 0.45
let bienesPersonales = 0.25

let nombre = prompt ("Ingrese su nombre"); 
function name(){
    while (nombre === ""){
        nombre = prompt ("Ingrese su nombre")
    }  
}
alert(" bienvenido/a 👋 " + nombre);

let edad = parseInt(prompt("ingresa tu edad 😎"))
if  (edad >= 18){
    alert( "Puedes comprar dolares 💵🤑💲") 
} else{
    alert( "Todavia no puedes comprar dolares 😭😤😢")
    
}

// tomando el valor del dolar oficial se calculan otros tipos de dolares, a partir de los diferentes impuestos.

function cambio(){
    ahorro() 
    turista()  
}

function ahorro(){
    dolarOficial = parseFloat(document.getElementById("dolar-oficial").value);  
    resultado= dolarOficial * (impuestoPais + impuestoGanancias) + dolarOficial;
    document.getElementById("ahorro").innerHTML = resultado;
}

function turista(){
    dolarOficial = parseFloat(document.getElementById("dolar-oficial").value);  
    resultado = dolarOficial * ( katar + impuestoPais ) + dolarOficial;
    document.getElementById("tarjeta").innerHTML = resultado;
                  
    resultado = dolarOficial * (katar + impuestoPais + bienesPersonales) + dolarOficial;
    document.getElementById("qatar").innerHTML= resultado;
 
}

let montoCompra = 1
while(montoCompra == 1){
    alert("info: si compras hasta usd 200 mensuales, podes comprar dolar ahorro. Si necesitas mas, podes comprar dolar BLUE 💵")
    break;
}










   



    
      
    
      




 
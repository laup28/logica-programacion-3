function calcularFactorial(){

    let numero = document.getElementById('numeroUsuario').value;

    if (isNaN(numero) || numero < 0 || numero === "") {
        document.getElementById('resultadoFactorial').innerHTML = "Por favor ingresa un número válido";
        return;
    }
     
    let resultado = 1;

    for(let i=1; i<=numero; i++){
        resultado = resultado*i;
    }
    document.getElementById('resultadoFactorial').innerHTML = `El factorial de ${numero} es: ${resultado}`;
}
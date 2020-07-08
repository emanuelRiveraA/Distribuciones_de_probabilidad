
'use strict'

window.onload = function(){

    var txt_numero = null;
    const btn_calcular = document.querySelector('#btn_calcular');

    /** variables para los elementos de distribucion binomial */
    const txt_p = document.getElementById('txt_p');
    const txt_q = document.getElementById('txt_q');
    const txt_n = document.getElementById('txt_n');
    const txt_x = document.getElementById('txt_x');
    const btn_calcular_binomial = document.getElementById('btn_calcular_binomial');

    /** variables para los elementos de distribucion hipergeometrica */
    const txt_N_mayuscula = document.getElementById('txt_N_mayuscula');
    const txt_n2 = document.getElementById('txt_n2');
    const txt_k = document.getElementById('txt_k');
    const txt_x2 = document.getElementById('txt_x2');
    const btn_calcular_hipergeometrica = document.getElementById('btn_calcular_hipergeometrica');

    /** funcion para calcular el factorial de un número */
    function calcularFactorial (numero){
        
        let resultado = 1;

        for (let i = 1; i <= numero; i++) {
            resultado = resultado * i;
            
        }

        console.log('el factorial de '+ numero + ' = ' + resultado);

        return resultado;        
    }    
/************************************************************************ */

    btn_calcular.addEventListener('click', function(event) {
        event.preventDefault();
        txt_numero = document.getElementById('txt_numero').value;
        alert("Dds"+txt_numero);
    });

    /* Distribucion binomial */

    btn_calcular_binomial.addEventListener('click', function(event){
        event.preventDefault();//para evitar que refesque la pagina

        calcularCombinacion();
        
    });

    function calcularCombinacion(){
        let numero_p = txt_p.value;
        let numero_q = txt_q.value;
        let numero_n = txt_n.value;
        let numero_x = txt_x.value;
        let coeficiente_binomial = 0;
        let resta = numero_n - numero_x;
        let resultado = 0;

        coeficiente_binomial = calcularFactorial(numero_n) / (calcularFactorial(numero_x) * calcularFactorial(resta));
        console.log('la distribucion binomial es: ' + coeficiente_binomial);
        resultado = coeficiente_binomial * Math.pow(numero_p/100,numero_x) * Math.pow(numero_q/100, resta);
        console.log(resultado);
        alert("La probabilidad de que de "+ numero_n + " seleccionados " + numero_x + " resulte en fracaso es de: " + resultado + " es decir: " + Number.parseFloat(resultado*100).toFixed(2)+"%");
        return resultado;
    }
  

    /* Distribucion hipergeometrica */
    btn_calcular_hipergeometrica.addEventListener('click', function(event){
        event.preventDefault();

        let numero_N_mayuscula = txt_N_mayuscula.value;
        let numero_n2 = txt_n2.value;
        let numero_k = txt_k.value;
        let numero_x2 = txt_x2.value;
        let comb_kx = 0;
        let comb_NK = 0;
        let comb_Nn = 0;
        let resultado = 0;

        comb_kx = calcularFactorial(numero_k) / (calcularFactorial(numero_x2) * calcularFactorial(numero_k - numero_x2));
        console.log(comb_kx);
        comb_NK = calcularFactorial(numero_N_mayuscula - numero_k) / ( calcularFactorial(numero_n2 - numero_x2) * calcularFactorial((numero_N_mayuscula - numero_k) - (numero_n2 - numero_x2)));
        console.log(Number.parseFloat(comb_NK));
        comb_Nn = calcularFactorial(numero_N_mayuscula) / (calcularFactorial(numero_n2) * calcularFactorial(numero_N_mayuscula - numero_n2));
        console.log(comb_Nn);
        resultado = (comb_kx * comb_NK) / comb_Nn;
        console.log(resultado);

    });



}

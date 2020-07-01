
'use strict'

window.onload = function(){

    var txt_numero = null;
    const btn_calcular = document.querySelector('#btn_calcular');

    const txt_p = document.getElementById('txt_p').value;
    const txt_q = document.getElementById('txt_q').value;
    const txt_n = document.getElementById('txt_n');
    const txt_x = document.getElementById('txt_x');
    const btn_calcular_binomial = document.getElementById('btn_calcular_binomial');
    var factorial_n = null;
    var factorial_x = null;


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
        
        let numero_n = txt_n.value;
        let numero_x = txt_x.value;

        factorial_n = calcularFactorial(numero_n);
        factorial_x = calcularFactorial(numero_x);

        let distribucion_binomial = factorial_x * numero_n - numero_x;
        console.log('la distribucion binomial es: ' + distribucion_binomial);
    }

    function calcularFactorial (numero){
        
        let resultado = 1;

        for (let i = 1; i <= numero; i++) {
            resultado = resultado * i;
            
        }

        console.log('el factorial de '+ numero + ' = ' + resultado);
    }

    



}

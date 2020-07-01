
'use strict'

window.onload = function(){

    var txt_numero = null;
    const btn_calcular = document.querySelector('#btn_calcular');

    btn_calcular.addEventListener('click', function(event) {
        txt_numero = document.getElementById('txt_numero').value;
        alert("Dds"+txt_numero);
    });





}

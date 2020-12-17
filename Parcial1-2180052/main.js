
function editar(fila){
 if(formulario==null){
            if(fila=="f1"){
            var esconder='label1';
            var mostrar='inputOculto1';
            }
            if(fila=="f2"){
                var esconder='label2';
                var mostrar='inputOculto2';
            }
            if(fila=="f3"){
                var esconder='label3';
                var mostrar='inputOculto3';
            }
            if(fila=="f4"){
                var esconder='label4';
                var mostrar='inputOculto4';
            }
        $('.'+ esconder).css('display','none');
        $('.'+ mostrar).css('display','block');
        document.getElementById("lastItems").style.display="block"
    }
    else{ alert("Se deben cancelar los cambios"); } 
}

function enviarFormulario(formulario){
    $("#"+formulario).submit();
}

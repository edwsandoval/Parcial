function getURLParameter(url, name) {return (RegExp(name + '=' + '(.+?)(&|$)').exec(url) || [, null])[1];}

$(document).ready(() => {

	var url = window.location.href
	var alimento = getURLParameter(url, 'alimento');
	var calorias = getURLParameter(url, 'calorias');
	var grasas = getURLParameter(url, 'grasas');
	var proteinas = getURLParameter(url, 'proteinas');
	var carbohidratos = getURLParameter(url, 'carbohidratos');
	var ok = getURLParameter(url, 'ok');

	$('#alimentoR').text(alimento);
	$('#caloriasR').val(calorias);
	$('#grasasR').val(grasas);
	$('#proteinasR').val(proteinas);
	$('#carbohidratosR').val(carbohidratos);

if(ok=="bien"){
 $("#okR").attr('src','./images/smileFace1.png');
}
else{
    $("#okR").attr('src','./images/deadFace.png');
};
})

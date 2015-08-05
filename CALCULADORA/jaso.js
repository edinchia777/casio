

var operacion = ' ';
var resultado = ' ';


function enviarNumero(calcular) {
		alert("USTED SELECIONO EL NUMERO:   "+calcular);
		operacion = operacion + calcular;
		document.getElementById("valores").innerHTML=calcular;
}


function enviarSigno(calcular) {
		alert("USTED SELECIONO EL SIGNO:   "+calcular);
		operacion = operacion + calcular;
		inserteTesxto();
}


function igual() {
		resultado=eval(operacion);
		alert("EL RESULTADO DE LA OPERACION ES:   "+resultado)
	operacionFinal(resultado);
}

function borrar() {
	operacion='';
	resultado='';
	document.getElementById("total").innerHTML="";
	alert("USTED A SELECIONADO BORRAR PARA QUE EL VALOR ANTERIOR NO SE INTRODUSCA EN LA NUEVA OPERACION :   ");
}


function insertetesxto(){
	document.getElementById("total").innerHTML=operacion;
}


function operacionFinal(calcular){
	document.getElementById("total").innerHTML=operacion+"="+resultado;
}







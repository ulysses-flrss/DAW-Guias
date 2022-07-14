/* * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: calculadora.js *
* Descripción: Realizar operaciones aritméticas básicas.*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * */
//Función que funciona como manejador de evento
//al producirse el evento load (carga de la página)
function init() {
	//Ingresar los datos de los números a operar
	//Elemento div donde se mostrará el menú de las operaciones
	var operaciones = document.getElementById('operaciones');
	//Elemento div donde se mostrarán los resultados
	var resultado = document.getElementById('resultado');
	//Creando el contenido de la página
	var contenido = "<header>\n";
	contenido += "\t<h1></h1>\n";
	contenido += "</header>\n";
	contenido += "<nav class='menu'>\n";
	contenido += "<ul>\n";
	contenido += "\t<li>\n";
	contenido += "\t\t<a href=\"metros_a_pies.html\"><span>Metros a Pies</span></a>\n";
	contenido += "</li>\n";
	contenido += "\t<li>\n";
	contenido += "\t\t<a href=\"metros_a_pulgadas.html\"><span>Metros a Pulgadas</span></a>\n";
	contenido += "</li>\n";
	contenido += "\t<li>\n";
	contenido += "\t\t<a href=\"metros_a_yardas.html\"><span>Metros a Yardas</span></a>\n";
	contenido += "</li>\n";
	contenido += "</ul>\n";
	contenido += "</nav>\n";
	//Colocar el contenido dentro del elemento div
	operaciones.innerHTML = contenido;
	//Preparando el manejo del evento click sobre los enlaces del menú
	var opciones = document.getElementsByTagName('a');
	//Recorrer todos los elementos de enlace (elementos a)
	//y asignar el manejador del evento click
}
window.onload = init;
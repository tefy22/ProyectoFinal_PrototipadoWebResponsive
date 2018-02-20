"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Handlebars.registerHelper("switch", function (value, options) {
	this._switch_value_ = value;
	var html = options.fn(this);
	delete this._switch_value_;
	return html;
});

Handlebars.registerHelper("case", function (value, options) {
	var html = options.fn(this);
	if (value == this._switch_value_) {
		return html;
	}
});

var menu = document.querySelector("#menu");
menu.innerHTML = ProyectoFinal.menu();

var menuItems = [{ "item": "Utilidades", "state": "utilidades", "active": false }, { "item": "Costos", "state": "costos", "active": true }, { "item": "Gastos Operacionales", "state": "gastosOperacionales", "active": false }, { "item": "Liquidaciones", "state": "liquidaciones", "active": false }, { "item": "Obligaciones Laborales", "state": "obligacionesLaborales", "active": false }];
var menuContext = { menuItems: menuItems };
menu.innerHTML = ProyectoFinal.menu(menuContext);

//CONTENIDO
var appContent = document.querySelector("#appContent");
appContent.innerHTML = ProyectoFinal.content();

function getStateTitle(state) {
	for (var i = 0; i < menuItems.length; i++) {
		if (menuItems[i].state === state) {
			return menuItems[i].item;
		}
	}
}

function changeState(state) {
	var _ref;

	//cabecera del contenido, colocar el nombre de la pagina actual
	var appContentContext = { "state": state, "title": getStateTitle(state) };
	appContent.innerHTML = ProyectoFinal.content(appContentContext);

	//redireccionar a la pagina seleccionada
	var statePage = document.querySelector("#" + state);
	$(".menuLinks").removeClass("menuActive");
	$("#" + state + "Link").addClass("menuActive");
	statePage.innerHTML = ProyectoFinal[state]();

	switch (state) {
		case 'utilidades':
			var tablaUtilidades = document.querySelector("#tblUtilidades");
			var dtUtilidades = [{ "concepto": "Ventas", "unitario": "$80.000", "cantidad": "5.000.000", "total": "$400.000.000", "periodo": "01-02-2018", "porcentaje": "100%" }, { "concepto": "Menos: gastos operacionales", "unitario": "$1.120", "cantidad": "5.001.168", "total": "$5.601.309", "periodo": "01-02-2018", "porcentaje": "1%" }, { "concepto": "Menos: costo de ventas", "unitario": "$45.000", "cantidad": "5.000.000", "total": "$225.000.000", "periodo": "01-02-2018", "porcentaje": "56%" }];
			tablaUtilidades.innerHTML = ProyectoFinal.tablaUtilidades({ utilidades: dtUtilidades });
			break;

		case 'gastosOperacionales':
			var tablaGO = document.querySelector("#tblGastosO");
			var dtGastosO = [{ "clasificacion": "Administrativos", "concepto": "Arriendo", "valor": 1000000 }, { "clasificacion": "Administrativos", "concepto": "Nómina", "valor": 5993447 }, { "clasificacion": "Administrativos", "concepto": "Servicios Publicos", "valor": 270000 }, { "clasificacion": "Administrativos", "concepto": "Telefonos", "valor": 580000 }, { "clasificacion": "Administrativos", "concepto": "Depreciación (muebles y enseres)", "valor": 83333 }, { "clasificacion": "Administrativos", "concepto": "Hononarios Contador", "valor": 400000 }, { "clasificacion": "Administrativos", "concepto": "Depreciación (equipos de computo)", "valor": 83334 }, { "clasificacion": "Administrativos", "concepto": "Otros gastos (aseo, cafeteria, entre otros)", "valor": 100000 }, { "clasificacion": "Ventas", "concepto": "Arriendo", "valor": 3000000 }, { "clasificacion": "Ventas", "concepto": "Servicios Publicos", "valor": 500000 }, { "clasificacion": "Ventas", "concepto": "Nómina", "valor": 3064706 }];
			tablaGO.innerHTML = ProyectoFinal.tablaGastosOperacionales({ gastos: dtGastosO });
			break;

		case 'liquidaciones':
			var tablaLiquidaciones = document.querySelector("#tblLiquidacion");
			var datosLiquidacion = [(_ref = { "trabajador": "Gerente Propietario", "salario": "3.000.000", "auxilio": "" }, _defineProperty(_ref, "auxilio", ""), _defineProperty(_ref, "total", "3.000.000"), _ref), { "trabajador": "Secretaria de Gerencia", "salario": "900.000", "auxilio": "55.000", "comision": "", "total": "955.000" }, { "trabajador": "Vendedora 1", "salario": "461.500", "auxilio": "55.000", "comision": "170.000", "total": "689.500" }, { "trabajador": "Vendedora 2", "salario": "461.500", "auxilio": "55.000", "comision": "200.000", "total": "716.000" }, { "trabajador": "Supervisor", "salario": "461.500", "auxilio": "55.000", "comision": "", "total": "461.500" }];
			tablaLiquidaciones.innerHTML = ProyectoFinal.tablaliquidacion({ liquidacion: datosLiquidacion });
			break;

		case 'obligacionesLaborales':
			var tablaOB = document.querySelector("#tblOL");
			var datosOB = [{ "concepto": "A) Prestaciones Sociales", "porcentaje": "" }, { "concepto": "Cesantías", "porcentaje": "8,33%" }, { "concepto": "Prima de Servicios", "porcentaje": "8,33%" }, { "concepto": "Vacaciones", "porcentaje": "4,17%" }, { "concepto": "Intereses a Ceantías", "porcentaje": "1,00%" }, { "concepto": "subtotal", "porcentaje": "21,83%" }, { "concepto": "B) Aportes a la salud social", "porcentaje": "" }, { "concepto": "Salud (EPS)", "porcentaje": "8,50%" }, { "concepto": "Pension", "porcentaje": "11,63%" }, { "concepto": "Riesgos Profesionales (ARP)", "porcentaje": "1%" }, { "concepto": "subtotal", "porcentaje": "21,13%" }, { "concepto": "C) Aportes Parafiscales", "porcentaje": "" }, { "concepto": "ICBF", "porcentaje": "3%" }, { "concepto": "SENA", "porcentaje": "2%" }, { "concepto": "Caja de compensacion familiar", "porcentaje": "4%" }, { "concepto": "subtotal", "porcentaje": "9%" }];
			tablaOB.innerHTML = ProyectoFinal.tablaOL({ obligaciones: datosOB });
			break;
	}
}

changeState("utilidades");
//llamar al boton del menu
$(".button-collapse").sideNav();

$('.datepicker').pickadate({
	selectMonths: true, // Creates a dropdown to control month
	selectYears: 15, // Creates a dropdown of 15 years to control year,
	today: 'Today',
	clear: 'Clear',
	close: 'Ok',
	closeOnSelect: false // Close upon selecting a date,
});

$('select').material_select();
//# sourceMappingURL=menu.js.map

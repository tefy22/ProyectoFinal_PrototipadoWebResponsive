this["ProyectoFinal"]["tablaGastosOperacionales"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<tr>\r\n			<td>\r\n				<input type=\"checkbox\" name=\"productSelection\">\r\n				<label for=\"productSelection\"></label>\r\n			</td>\r\n			<td>"
    + alias4(((helper = (helper = helpers.clasificacion || (depth0 != null ? depth0.clasificacion : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"clasificacion","hash":{},"data":data}) : helper)))
    + "</td>\r\n			<td>"
    + alias4(((helper = (helper = helpers.concepto || (depth0 != null ? depth0.concepto : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"concepto","hash":{},"data":data}) : helper)))
    + "</td>\r\n			<td>"
    + alias4(((helper = (helper = helpers.valor || (depth0 != null ? depth0.valor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"valor","hash":{},"data":data}) : helper)))
    + "</td>\r\n		</tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"bordered responsive-table\">\r\n	<thead>\r\n		<tr>\r\n			<th></th>\r\n			<th>Clasificacion</th>\r\n			<th>Concepto</th>\r\n			<th>Valor</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.gastos : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</tbody>\r\n	<tfoot>\r\n		<tr>\r\n			<td></td>\r\n			<td><b>Total Gastos Administrativos:</b> $8.510.114</td>\r\n			<td><b>Total Gastos Ventas:</b> $6.564.706</td>\r\n			<td><b>Total Gastos Operacionales:</b> $15.074.820</td>\r\n		</tr>	\r\n	</tfoot>\r\n</table>";
},"useData":true});
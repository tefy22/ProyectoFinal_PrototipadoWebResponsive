this["ProyectoFinal"]["tablaliquidacion"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<tr>\r\n			<td>\r\n				<input type=\"checkbox\" name=\"productSelection\">\r\n				<label for=\"productSelection\"></label>\r\n			</td>\r\n			<td>"
    + alias4(((helper = (helper = helpers.trabajador || (depth0 != null ? depth0.trabajador : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"trabajador","hash":{},"data":data}) : helper)))
    + "</td>\r\n			<td>"
    + alias4(((helper = (helper = helpers.salario || (depth0 != null ? depth0.salario : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"salario","hash":{},"data":data}) : helper)))
    + "</td>\r\n			<td>"
    + alias4(((helper = (helper = helpers.auxilio || (depth0 != null ? depth0.auxilio : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"auxilio","hash":{},"data":data}) : helper)))
    + "</td>\r\n			<td>"
    + alias4(((helper = (helper = helpers.auxilio || (depth0 != null ? depth0.auxilio : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"auxilio","hash":{},"data":data}) : helper)))
    + "</td>\r\n			<td>"
    + alias4(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"total","hash":{},"data":data}) : helper)))
    + "</td>\r\n		</tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"bordered responsive-table\">\r\n	<thead>\r\n		<tr>\r\n			<th></th>\r\n			<th>Trabajador</th>\r\n			<th>Salario</th>\r\n			<th>Auxilio de Transporte</th>\r\n			<th>Comision</th>\r\n			<th>Total</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.liquidacion : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</tbody>\r\n	<tfoot>\r\n		<tr>\r\n			\r\n		</tr>\r\n	</tfoot>\r\n</table>";
},"useData":true});
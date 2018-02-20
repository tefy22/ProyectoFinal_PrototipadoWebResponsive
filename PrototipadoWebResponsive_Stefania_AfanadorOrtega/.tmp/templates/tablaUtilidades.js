this["ProyectoFinal"]["tablaUtilidades"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<tr>\r\n			<td>\r\n				<input type=\"checkbox\" name=\"productSelection\">\r\n				<label for=\"productSelection\"></label>\r\n			</td>\r\n			<td>"
    + alias4(((helper = (helper = helpers.concepto || (depth0 != null ? depth0.concepto : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"concepto","hash":{},"data":data}) : helper)))
    + "</td>\r\n			<td>"
    + alias4(((helper = (helper = helpers.unitario || (depth0 != null ? depth0.unitario : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"unitario","hash":{},"data":data}) : helper)))
    + "</td>\r\n			<td>"
    + alias4(((helper = (helper = helpers.cantidad || (depth0 != null ? depth0.cantidad : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cantidad","hash":{},"data":data}) : helper)))
    + "</td>\r\n			<td>"
    + alias4(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"total","hash":{},"data":data}) : helper)))
    + "</td>\r\n			<td>"
    + alias4(((helper = (helper = helpers.periodo || (depth0 != null ? depth0.periodo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"periodo","hash":{},"data":data}) : helper)))
    + "</td>\r\n			<td>"
    + alias4(((helper = (helper = helpers.porcentaje || (depth0 != null ? depth0.porcentaje : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"porcentaje","hash":{},"data":data}) : helper)))
    + "</td>\r\n		</tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"bordered responsive-table\">\r\n	<thead>\r\n		<tr>\r\n			<th></th>\r\n			<th>Concepto</th>\r\n			<th>Valor Unitario</th>\r\n			<th>Cantidad</th>\r\n			<th>Valor Total</th>\r\n			<th>Periodo</th>\r\n			<th>Porcentaje</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.utilidades : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</tbody>\r\n	<tfoot>\r\n		<tr>\r\n			<th></th>\r\n			<th>Utilidad</th>\r\n			<th>$169.398.691</th>\r\n			<th>15.001.168</th>\r\n			<th>$33.880</th>\r\n			<th></th>\r\n			<th>43%</th>\r\n		</tr>\r\n	</tfoot>\r\n</table>";
},"useData":true});
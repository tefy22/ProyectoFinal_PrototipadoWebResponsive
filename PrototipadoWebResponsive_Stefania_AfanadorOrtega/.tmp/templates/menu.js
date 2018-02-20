this["ProyectoFinal"]["menu"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<li>\r\n			<a href=\"#\" onclick=\"changeState('"
    + alias4(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"state","hash":{},"data":data}) : helper)))
    + "')\" id=\""
    + alias4(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"state","hash":{},"data":data}) : helper)))
    + "Link\" class=\"menuLinks\">"
    + alias4(((helper = (helper = helpers.item || (depth0 != null ? depth0.item : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"item","hash":{},"data":data}) : helper)))
    + "</a>\r\n		</li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul id=\"sideMenu\" class=\"side-nav fixed\">\r\n	<li>\r\n		<div class=\"userView grey darken-3\">\r\n			<a href=\"#!user\">\r\n				<div class=\"circle grey lighten-1\"></div>\r\n			</a>\r\n			<p></p>\r\n			<a href=\"#!email\">\r\n				<span class=\"white-text email\">Empresa Anonima<i class=\"material-icons white-text right\">arrow_drop_down</i></span>\r\n			</a>\r\n		</div>\r\n	</li>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.menuItems : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});
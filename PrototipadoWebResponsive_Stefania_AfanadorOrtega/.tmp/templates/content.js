this["ProyectoFinal"] = this["ProyectoFinal"] || {};
this["ProyectoFinal"]["content"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<nav class=\"top-nav grey darken-3 mainContent\">\r\n  <a href=\"#\" data-activates=\"sideMenu\" class=\"button-collapse top-nav full hide-on-large-only\">\r\n    <i class=\"material-icons\">menu</i>\r\n  </a>\r\n  <div class=\"page-title\">\r\n    "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"row mainContent\">\r\n    <div class=\"col s12\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"state","hash":{},"data":data}) : helper)))
    + "\"></div>\r\n          \r\n    </div>\r\n</div>";
},"useData":true});
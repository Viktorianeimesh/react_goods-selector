(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var a=c(3),n=c.n(a),s=c(4),o=c(5),r=c(7),l=c(6),i=c(1),d=c.n(i),u=(c(12),c(13),c(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(e){Object(r.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(s.a)(this,c);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={selectedGood:"Jam"},e.clear=function(){e.setState({selectedGood:""})},e.add=function(t){e.setState({selectedGood:t})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(u.jsxs)("main",{className:"section container",children:[Object(u.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[t?"".concat(t," is selected"):"No goods selected",t&&Object(u.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3","aria-label":"clear",onClick:this.clear})]}),Object(u.jsx)("table",{className:"table",children:Object(u.jsx)("tbody",{children:b.map((function(c){return Object(u.jsxs)("tr",{"data-cy":"Good",className:t===c?"has-background-success-light":"",children:[Object(u.jsx)("td",{children:t===c?Object(u.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:e.clear,children:"-"}):Object(u.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return e.add(c)},children:"+"})}),Object(u.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(d.a.Component);n.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.70002c34.chunk.js.map
(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n.n(c),o=n(3),a=n.n(o),h=(n(13),n(4)),i=n(5),u=n(7),l=n(6),d=(n(14),n(15),n(16),function(e){return Object(r.jsxs)("div",{className:"card-container",children:[Object(r.jsx)("img",{alt:"hero",src:"https://robohash.org/".concat(e.hero.id,"?set=set2&size=180x180")}),Object(r.jsx)("h2",{children:e.hero.name}),Object(r.jsx)("p",{children:e.hero.email})]})}),j=function(e){return Object(r.jsx)("div",{className:"card-list",children:e.heroes.map((function(e){return Object(r.jsx)(d,{hero:e},e.id)}))})},f=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return Object(r.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={heroes:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({heroes:t})}))}},{key:"render",value:function(){var e=this.state,t=e.heroes,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{className:"hero-h1",children:"Heros Ground"}),Object(r.jsx)(f,{placeholder:"search heros",handleChange:this.handleChange}),Object(r.jsx)(j,{heroes:c})]})}}]),n}(c.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.cd9d0758.chunk.js.map
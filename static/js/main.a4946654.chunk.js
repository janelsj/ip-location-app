(this["webpackJsonpip-address-location"]=this["webpackJsonpip-address-location"]||[]).push([[0],{23:function(t,e,n){},43:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),i=n(16),r=n.n(i),o=(n(23),n(7)),s=n.n(o),p=n(17),d=n(3),u=n(18),j=n.n(u).a.create({baseURL:"https://ip-geolocation-ipwhois-io.p.rapidapi.com",headers:{"x-rapidapi-host":"ip-geolocation-ipwhois-io.p.rapidapi.com","x-rapidapi-key":"2cc4f9fb5fmsh6c7c17f151bdaa1p1f3fb7jsne9ae56177c97"}}),b=(n(43),n(1));var f=function(){var t=Object(a.useState)(),e=Object(d.a)(t,2),n=e[0],c=e[1],i=Object(a.useState)(""),r=Object(d.a)(i,2),o=r[0],u=r[1],f=Object(a.useState)(""),h=Object(d.a)(f,2),l=h[0],O=h[1],x=Object(a.useState)(""),v=Object(d.a)(x,2),g=v[0],m=v[1];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h3",{children:"Find Location of IP Address"}),"Enter IP address: ",Object(b.jsx)("input",{type:"text",placeholder:"IPv4 or IPv6 format",onChange:function(t){c(t.target.value)},required:!0,autoFocus:!0}),Object(b.jsx)("button",{onClick:function(t){t.preventDefault(),function(){var t=Object(p.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.get("json/",{params:{ip:n}}).then((function(t){"IPv4"!==t.data.type&&"IPv6"!==t.data.type||(u(t.data.ip),O(t.data.country_capital),m(t.data.country))}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()},children:"Find Location"}),Object(b.jsxs)("div",{className:"output",children:[Object(b.jsx)("b",{children:"IP address:"})," ",o," ",Object(b.jsx)("br",{}),Object(b.jsx)("b",{children:"Area:"})," ",l," ",g]})]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),i(t),r(t)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),h()}},[[45,1,2]]]);
//# sourceMappingURL=main.a4946654.chunk.js.map
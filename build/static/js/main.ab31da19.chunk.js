(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e,a,t){},,function(e,a,t){e.exports=t.p+"static/media/Idli.1b49cb15.jpg"},function(e,a,t){e.exports=t.p+"static/media/dosa.7bc7b0c1.jpg"},function(e,a,t){e.exports=t.p+"static/media/sandwich.1fdd6455.png"},function(e,a,t){e.exports=t.p+"static/media/franky.cba7b27c.jpg"},function(e,a,t){e.exports=t.p+"static/media/burger.5d41ae41.jpg"},function(e,a,t){e.exports=t.p+"static/media/pasta.359aa574.jpg"},function(e,a,t){e.exports=t.p+"static/media/maggie.306d3ea3.png"},function(e,a,t){e.exports=t.p+"static/media/momos.2fc12e8e.jpg"},function(e,a,t){e.exports=t.p+"static/media/tea.9199331c.jpg"},,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(4),i=t.n(r),o=(t(20),t(1)),s=t(14),m=(t(21),t(5)),l=t.n(m),u=t(6),p=t.n(u),g=t(7),d=t.n(g),f=t(8),v=t.n(f),b=t(9),h=t.n(b),w=t(10),E=t.n(w),y=t(11),j=t.n(y),k=t(12),x=t.n(k),N=t(13),B=t.n(N),I=[{id:1,category:"Breakfast",image:l.a,name:"Idli",price:"5$"},{id:2,category:"Breakfast",image:p.a,name:"Dosa",price:"8$"},{id:3,category:"Lunch",image:d.a,name:"Sandwich",price:"10$"},{id:4,category:"Lunch",image:v.a,name:"Franky",price:"4$"},{id:5,category:"Dinner",image:h.a,name:"Burger",price:"10$"},{id:6,category:"Dinner",image:E.a,name:"Pasta",price:"8$"},{id:7,category:"Breakfast",image:j.a,name:"Maggie",price:"5$"},{id:8,category:"Breakfast",image:x.a,name:"Momos",price:"4$"},{id:9,category:"Breakfast",image:B.a,name:"Tea",price:"2$"}];t(3);var S=function(e){var a=e.menuData,t=e.searchText,r=Object(n.useState)([]),i=Object(o.a)(r,2),s=i[0],m=i[1],l=function(e){m({cartItem:e.target.value})};return console.log(t),c.a.createElement("div",{className:"contentWrapper"},a.filter(function(e){return!t||!(!e.name.toLowerCase().includes(t.toLowerCase())&&!e.category.toLowerCase().includes(t.toLowerCase()))||void 0}).map(function(e){var a=e.id,t=e.name,n=e.image,r=e.price;return c.a.createElement("div",{className:"background",key:a},c.a.createElement("div",{className:"menuItem"},c.a.createElement("h3",{className:"name"},t),c.a.createElement("img",{src:n,alt:"images",className:"image"}),c.a.createElement("h3",{className:"price"},"Price - ",r),c.a.createElement("button",{className:"cartBtn",value:s,onClick:l},"Add to cart")))}))},$=function(e){var a=e.filterItem,t=e.navItem,n=e.setSearchText;return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"navbar"},t.map(function(e){return c.a.createElement("button",{className:"navBtn",onClick:function(){return a(e)}},c.a.createElement("span",null,e))}),c.a.createElement("input",{className:"search",placeholder:"Search your receipe here...",onChange:function(e){n(e.target.value)}}),c.a.createElement("i",{className:"fas fa-cart-arrow-down cartIcon"})))},O=[].concat(Object(s.a)(new Set(I.map(function(e){return e.category}))),["All"]);console.log(O);var C=function(){var e=Object(n.useState)(I),a=Object(o.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)(O),s=Object(o.a)(i,2),m=s[0],l=(s[1],Object(n.useState)("")),u=Object(o.a)(l,2),p=u[0],g=u[1];return c.a.createElement("div",{className:"back"},c.a.createElement($,{filterItem:function(e){if("All"!==e){var a=I.filter(function(a){return a.category===e});r(a)}else r(I)},navItem:m,setSearchText:g}),c.a.createElement(S,{menuData:t,searchText:p}))};var L=function(){return c.a.createElement("div",null,c.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}],[[15,1,2]]]);
//# sourceMappingURL=main.ab31da19.chunk.js.map
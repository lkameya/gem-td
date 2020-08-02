(this["webpackJsonpgem-td"]=this["webpackJsonpgem-td"]||[]).push([[0],{15:function(n,e,t){n.exports=t(23)},22:function(n,e,t){},23:function(n,e,t){"use strict";t.r(e);var i=t(0),a=t.n(i),o=t(10),r=t.n(o),c=t(14),u=t(7),l=t(1),m=t(2);function s(){var n=Object(l.a)(["\n  outline: none;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #222;\n\n  ",";\n\n  border: 2px solid ",";\n\n  padding: 10px;\n  margin: 2px;\n  width: 18px;\n  font-weight: 500;\n  cursor: pointer;\n  text-align: center;\n"]);return s=function(){return n},n}var d=function(n){var e="";switch(n){case"B":e="#0069c0";break;case"Y":e="#ffa726";break;case"Q":e="#f06292";break;case"R":e="#ba000d";break;case"E":e="#8e24aa";break;case"G":e="#087f23";break;case"D":e="#fbc02d";break;default:e="#6d4c41"}return e},f=m.a.div(s(),(function(n){return n.theme.includes(n.children)&&"background-color: ".concat(d(n.children.toString().split("")[0]),";color: white")}),(function(n){return d(n.color)})),p=function(n){var e=n.type,t=n.index,i=n.handleClick,o=n.choices;return a.a.createElement(f,{color:e,theme:o,onClick:function(){return i(e,t)}},"".concat(e).concat(t))};function b(){var n=Object(l.a)(["\n  display: flex;\n"]);return b=function(){return n},n}function h(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 20px;\n"]);return h=function(){return n},n}var v=m.a.div(h()),g=m.a.div(b()),E=["B","Y","Q","R","E","P","G","D"],x=function(n){return a.a.createElement(v,null,E.map((function(e){return a.a.createElement(g,{color:e,key:e},Array.from(Array(5),(function(n,e){return e+1})).map((function(t){return a.a.createElement(p,{key:e+t,type:e,index:t,choices:n.choices,handleClick:function(){return n.handleClick(e,t)}})})))})))};function w(){var n=Object(l.a)(["\n  width: 50%;\n  text-align: center;\n"]);return w=function(){return n},n}function y(){var n=Object(l.a)(["\n  width: 50%;\n  text-align: center;\n"]);return y=function(){return n},n}function P(){var n=Object(l.a)(["\n  display: flex;\n  width: 400px;\n"]);return P=function(){return n},n}var k=m.a.div(P()),B=m.a.div(y()),D=m.a.div(w());function j(){var n=Object(l.a)(["\n  color: ",";\n  font-weight: ",";\n  margin-left: 5px;\n"]);return j=function(){return n},n}var G=m.a.span(j(),(function(n){return n.theme.includes(n.children)?"#00701a":"black"}),(function(n){return n.theme.includes(n.children)?"900":"300"})),O=function(n){var e=n.tower,t=n.choices;return function(n,e){console.log({tower:n});var t=5-e.length-n.combination.filter((function(n){return!e.includes(n)})).length>=0;return console.log({possibleToBuild:t}),t}(e,t)&&a.a.createElement(k,{key:e.name},a.a.createElement(B,null,e.name),a.a.createElement(D,null,e.combination.map((function(n){return a.a.createElement(G,{theme:t,key:n},n)}))))};function R(){var n=Object(l.a)(["\n  width: 50%;\n  text-align: center;\n"]);return R=function(){return n},n}function Y(){var n=Object(l.a)(["\n  width: 50%;\n  text-align: center;\n"]);return Y=function(){return n},n}function S(){var n=Object(l.a)(["\n  display: flex;\n  width: 400px;\n"]);return S=function(){return n},n}function Q(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  img {\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    margin-right: 10px;\n  }\n"]);return Q=function(){return n},n}var C=m.a.div(Q()),A=(m.a.div(S()),m.a.div(Y()),m.a.div(R()),function(n){return a.a.createElement(C,null,n.towers.map((function(e){return a.a.createElement(O,{tower:e,choices:n.choices,key:e.name})})))});function T(){var n=Object(l.a)(["\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);return T=function(){return n},n}var J=[{name:"Silver",combination:["B1","Y1","D1"],points:0},{name:"Pink Diamond",combination:["D5","Y3","D3"],points:0},{name:"Koh-i-noor Diamond",combination:["P1","P2","P3","P4","P5"],points:0},{name:"Malachite",combination:["E1","G1","Q1"],points:0},{name:"Uranium-238",combination:["Y5","B3","E2"],points:0},{name:"Asteriated Ruby",combination:["R2","R1","P1"],points:0},{name:"Bloodstone",combination:["R5","Q4","P3"],points:0},{name:"The Crown Prince\t",combination:["R1","R2","R3","R4","R5"],points:0},{name:"Jade",combination:["G3","E3","B2"],points:0},{name:"Diamond Cullinan",combination:["D1","D2","D3","D4","D5"],points:0},{name:"Quartz",combination:["G4","R3","P2"],points:0},{name:"Golden Jubilee\t",combination:["Y1","Y2","Y3","Y4","Y5"],points:0},{name:"Gold",combination:["P5","P4","D2"],points:0},{name:"Dark Emerald",combination:["G5","B4","Y2"],points:0},{name:"Paraiba Tourmaline",combination:["Q5","E4","G2"],points:0},{name:"Sapphire Star Of Adam",combination:["G1","G2","G3","G4","G5"],points:0},{name:"Deepsea Pearl",combination:["Q4","D4","E2"],points:0},{name:"Chrysoberyl Cat's Eye\t",combination:["E5","D4","Q3"],points:0},{name:"Yellow Saphire",combination:["B5","R4","Y4"],points:0},{name:"Carmen-Lucia",combination:["E1","E2","E3","E4","E5"],points:0},{name:"Star Sapphire\t",combination:["B1","B2","B3","B4","B5"],points:0},{name:"Agate",combination:["G5","E5","Q5"],points:0},{name:"Obsidian",combination:["D5","B5","Y5"],points:0},{name:"Fantastic Miss Shrimp",combination:["G5","R5","B5"],points:0},{name:"The Burning Stone",combination:["R5","R4","P5","P4"],points:0},{name:"Yaphets Stone",combination:["B5","G5","B4","G4"],points:0},{name:"Ensnare Pedal",combination:["Y3","D2"],points:0},{name:"Gale Pedal",combination:["G3","E2"],points:0},{name:"Torrent Pedal",combination:["B3","Q2"],points:0},{name:"Howl Pedal",combination:["P3","R2"],points:0},{name:"Acid Pedal",combination:["Q3","Y2"],points:0},{name:"Paralysis Pedal",combination:["R3","G2"],points:0},{name:"Terrorize Pedal",combination:["D3","P2"],points:0},{name:"Decrepify Pedal",combination:["E3","B2"],points:0}],z=m.a.div(T());var I=function(){var n=Object(i.useState)([]),e=Object(u.a)(n,2),t=e[0],o=e[1],r=Object(i.useState)(J),l=Object(u.a)(r,2),m=l[0],s=l[1];return Object(i.useEffect)((function(){console.log("RODEI");var n=m.sort((function(n,e){return e.points-n.points}));s(n)}),[t,m]),a.a.createElement(z,null,a.a.createElement(x,{handleClick:function(n,e){t.length<5&&!t.includes(n+e)&&o([].concat(Object(c.a)(t),[n+e])),t.includes(n+e)&&o((function(t){return t.filter((function(t){return t!==n+e}))}))},choices:t}),a.a.createElement(A,{towers:m,choices:t}))};t(22),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.d49ec4c8.chunk.js.map
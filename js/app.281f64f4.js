(function(e){function t(t){for(var n,c,a=t[0],u=t[1],i=t[2],d=0,f=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);s&&s(t);while(f.length)f.shift()();return l.push.apply(l,i||[]),o()}function o(){for(var e,t=0;t<l.length;t++){for(var o=l[t],n=!0,a=1;a<o.length;a++){var u=o[a];0!==r[u]&&(n=!1)}n&&(l.splice(t--,1),e=c(c.s=o[0]))}return e}var n={},r={app:0},l=[];function c(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=n,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(o,n,function(t){return e[t]}.bind(null,n));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/ninja-modal-project/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var s=u;l.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"150b":function(e,t,o){},"252b":function(e,t,o){},4079:function(e,t,o){"use strict";o("252b")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),r=Object(n["g"])("p",null,"Welcome...",-1),l=Object(n["g"])("a",{href:"#"},"sign up now",-1),c=Object(n["g"])("a",{href:"#"},"more info",-1),a=Object(n["g"])("h1",null,"Ninja Giveaway!",-1),u=Object(n["g"])("p",null,"Grab your ninja swag for half price!",-1),i=Object(n["g"])("h1",null,"Sign up to the newsletter",-1),s=Object(n["g"])("p",null,"for updates and promo code",-1);function d(e,t,o,d,f,b){var p=Object(n["l"])("Modal");return Object(n["j"])(),Object(n["f"])(n["a"],null,[Object(n["g"])("h1",null,Object(n["m"])(f.title),1),r,f.showModal?(Object(n["j"])(),Object(n["d"])(n["b"],{key:0,to:"#modals"},[Object(n["h"])(p,{theme:"sale",onClose:b.toggleModal},{links:Object(n["n"])((function(){return[l,c]})),default:Object(n["n"])((function(){return[a,u]})),_:1},8,["onClose"])])):Object(n["e"])("",!0),f.showModalTwo?(Object(n["j"])(),Object(n["d"])(n["b"],{key:1,to:"#modals"},[Object(n["h"])(p,{onClose:b.toggleModalTwo},{default:Object(n["n"])((function(){return[i,s]})),_:1},8,["onClose"])])):Object(n["e"])("",!0),Object(n["g"])("button",{onClick:t[0]||(t[0]=Object(n["o"])((function(){return b.toggleModal&&b.toggleModal.apply(b,arguments)}),["alt"]))},"open modal (alt)"),Object(n["g"])("button",{onClick:t[1]||(t[1]=function(){return b.toggleModalTwo&&b.toggleModalTwo.apply(b,arguments)})},"open modal")],64)}o("b0c0");var f={class:"actions"};function b(e,t,o,r,l,c){return Object(n["j"])(),Object(n["f"])("div",{class:"backdrop",onClick:t[0]||(t[0]=Object(n["o"])((function(){return c.closeModal&&c.closeModal.apply(c,arguments)}),["self"]))},[Object(n["g"])("div",{class:Object(n["i"])(["modal",{sale:"sale"===o.theme}])},[Object(n["k"])(e.$slots,"default"),Object(n["g"])("div",f,[Object(n["k"])(e.$slots,"links")])],2)])}var p={props:["header","text","theme"],methods:{closeModal:function(){this.$emit("close")}}},j=(o("db2d"),o("6b0d")),h=o.n(j);const O=h()(p,[["render",b]]);var g=O,w={name:"App",components:{Modal:g},data:function(){return{title:"My First Vue App :)",header:"Sign up for the Giveaway!",text:"Grab your ninja swag for half price!",showModal:!1,showModalTwo:!1}},methods:{handleClick:function(){console.log(this.$refs.name),this.$refs.name.classList.add("active"),this.$refs.name.focus()},toggleModal:function(){this.showModal=!this.showModal},toggleModalTwo:function(){this.showModalTwo=!this.showModalTwo}}};o("4079");const m=h()(w,[["render",d]]);var v=m;o("150b");Object(n["c"])(v).mount("#app")},"7f07":function(e,t,o){},db2d:function(e,t,o){"use strict";o("7f07")}});
//# sourceMappingURL=app.281f64f4.js.map
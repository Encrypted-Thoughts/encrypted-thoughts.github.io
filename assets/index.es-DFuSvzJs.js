import{k as Ht,l as T,m as Yt,p as Xt}from"./_plugin-vue_export-helper-l7SBImn5.js";/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function N(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?N=function(n){return typeof n}:N=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},N(t)}function Gt(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function Kt(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function Vt(t,n,r){return n&&Kt(t.prototype,n),t}function qt(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function u(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{},e=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),e.forEach(function(a){qt(t,a,r[a])})}return t}function bt(t,n){return Jt(t)||Qt(t,n)||Zt()}function Jt(t){if(Array.isArray(t))return t}function Qt(t,n){var r=[],e=!0,a=!1,i=void 0;try{for(var o=t[Symbol.iterator](),s;!(e=(s=o.next()).done)&&(r.push(s.value),!(n&&r.length===n));e=!0);}catch(l){a=!0,i=l}finally{try{!e&&o.return!=null&&o.return()}finally{if(a)throw i}}return r}function Zt(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var st=function(){},et={},wt={},tn=null,kt={mark:st,measure:st};try{typeof window<"u"&&(et=window),typeof document<"u"&&(wt=document),typeof MutationObserver<"u"&&(tn=MutationObserver),typeof performance<"u"&&(kt=performance)}catch{}var nn=et.navigator||{},ft=nn.userAgent,lt=ft===void 0?"":ft,Y=et,g=wt,B=kt;Y.document;var rt=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function";~lt.indexOf("MSIE")||~lt.indexOf("Trident/");var A="___FONT_AWESOME___",xt="fa",Ot="svg-inline--fa",en="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var G={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_t=Y.FontAwesomeConfig||{};function rn(t){var n=g.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function an(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(g&&typeof g.querySelector=="function"){var on=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];on.forEach(function(t){var n=bt(t,2),r=n[0],e=n[1],a=an(rn(r));a!=null&&(_t[e]=a)})}var sn={familyPrefix:xt,replacementClass:Ot,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},J=u({},sn,_t);J.autoReplaceSvg||(J.observeMutations=!1);var b=u({},J);Y.FontAwesomeConfig=b;var C=Y||{};C[A]||(C[A]={});C[A].styles||(C[A].styles={});C[A].hooks||(C[A].hooks={});C[A].shims||(C[A].shims=[]);var _=C[A],fn=[],ln=function t(){g.removeEventListener("DOMContentLoaded",t),Q=1,fn.map(function(n){return n()})},Q=!1;rt&&(Q=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),Q||g.addEventListener("DOMContentLoaded",ln));var at="pending",It="settled",F="fulfilled",W="rejected",cn=function(){},zt=typeof global<"u"&&typeof global.process<"u"&&typeof global.process.emit=="function",un=typeof setImmediate>"u"?setTimeout:setImmediate,L=[],Z;function mn(){for(var t=0;t<L.length;t++)L[t][0](L[t][1]);L=[],Z=!1}function $(t,n){L.push([t,n]),Z||(Z=!0,un(mn,0))}function dn(t,n){function r(a){it(n,a)}function e(a){R(n,a)}try{t(r,e)}catch(a){e(a)}}function St(t){var n=t.owner,r=n._state,e=n._data,a=t[r],i=t.then;if(typeof a=="function"){r=F;try{e=a(e)}catch(o){R(i,o)}}Pt(i,e)||(r===F&&it(i,e),r===W&&R(i,e))}function Pt(t,n){var r;try{if(t===n)throw new TypeError("A promises callback cannot return that same promise.");if(n&&(typeof n=="function"||N(n)==="object")){var e=n.then;if(typeof e=="function")return e.call(n,function(a){r||(r=!0,n===a?At(t,a):it(t,a))},function(a){r||(r=!0,R(t,a))}),!0}}catch(a){return r||R(t,a),!0}return!1}function it(t,n){(t===n||!Pt(t,n))&&At(t,n)}function At(t,n){t._state===at&&(t._state=It,t._data=n,$(vn,t))}function R(t,n){t._state===at&&(t._state=It,t._data=n,$(hn,t))}function Ct(t){t._then=t._then.forEach(St)}function vn(t){t._state=F,Ct(t)}function hn(t){t._state=W,Ct(t),!t._handled&&zt&&global.process.emit("unhandledRejection",t._data,t)}function pn(t){global.process.emit("rejectionHandled",t)}function k(t){if(typeof t!="function")throw new TypeError("Promise resolver "+t+" is not a function");if(!(this instanceof k))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],dn(t,this)}k.prototype={constructor:k,_state:at,_then:null,_data:void 0,_handled:!1,then:function(n,r){var e={owner:this,then:new this.constructor(cn),fulfilled:n,rejected:r};return(r||n)&&!this._handled&&(this._handled=!0,this._state===W&&zt&&$(pn,this)),this._state===F||this._state===W?$(St,e):this._then.push(e),e.then},catch:function(n){return this.then(null,n)}};k.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new k(function(n,r){var e=[],a=0;function i(l){return a++,function(m){e[l]=m,--a||n(e)}}for(var o=0,s;o<t.length;o++)s=t[o],s&&typeof s.then=="function"?s.then(i(o),r):e[o]=s;a||n(e)})};k.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new k(function(n,r){for(var e=0,a;e<t.length;e++)a=t[e],a&&typeof a.then=="function"?a.then(n,r):n(a)})};k.resolve=function(t){return t&&N(t)==="object"&&t.constructor===k?t:new k(function(n){n(t)})};k.reject=function(t){return new k(function(n,r){r(t)})};var j={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function gn(t){if(!(!t||!rt)){var n=g.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var r=g.head.childNodes,e=null,a=r.length-1;a>-1;a--){var i=r[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return g.head.insertBefore(n,e),t}}var yn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function U(){for(var t=12,n="";t-- >0;)n+=yn[Math.random()*62|0];return n}function Mt(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bn(t){return Object.keys(t||{}).reduce(function(n,r){return n+"".concat(r,'="').concat(Mt(t[r]),'" ')},"").trim()}function Et(t){return Object.keys(t||{}).reduce(function(n,r){return n+"".concat(r,": ").concat(t[r],";")},"")}function Tt(t){return t.size!==j.size||t.x!==j.x||t.y!==j.y||t.rotate!==j.rotate||t.flipX||t.flipY}function jt(t){var n=t.transform,r=t.containerWidth,e=t.iconWidth,a={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},m={transform:"translate(".concat(e/2*-1," -256)")};return{outer:a,inner:l,path:m}}var K={x:0,y:0,width:"100%",height:"100%"};function ct(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function wn(t){return t.tag==="g"?t.children:[t]}function kn(t){var n=t.children,r=t.attributes,e=t.main,a=t.mask,i=t.maskId,o=t.transform,s=e.width,l=e.icon,m=a.width,d=a.icon,p=jt({transform:o,containerWidth:m,iconWidth:s}),I={tag:"rect",attributes:u({},K,{fill:"white"})},M=l.children?{children:l.children.map(ct)}:{},z={tag:"g",attributes:u({},p.inner),children:[ct(u({tag:l.tag,attributes:u({},l.attributes,p.path)},M))]},x={tag:"g",attributes:u({},p.outer),children:[z]},w="mask-".concat(i||U()),f="clip-".concat(i||U()),c={tag:"mask",attributes:u({},K,{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,x]},v={tag:"defs",children:[{tag:"clipPath",attributes:{id:f},children:wn(d)},c]};return n.push(v,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(f,")"),mask:"url(#".concat(w,")")},K)}),{children:n,attributes:r}}function xn(t){var n=t.children,r=t.attributes,e=t.main,a=t.transform,i=t.styles,o=Et(i);if(o.length>0&&(r.style=o),Tt(a)){var s=jt({transform:a,containerWidth:e.width,iconWidth:e.width});n.push({tag:"g",attributes:u({},s.outer),children:[{tag:"g",attributes:u({},s.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:u({},e.icon.attributes,s.path)}]}]})}else n.push(e.icon);return{children:n,attributes:r}}function On(t){var n=t.children,r=t.main,e=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(Tt(o)&&r.found&&!e.found){var s=r.width,l=r.height,m={x:s/l/2,y:.5};a.style=Et(u({},i,{"transform-origin":"".concat(m.x+o.x/16,"em ").concat(m.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:n}]}function _n(t){var n=t.prefix,r=t.iconName,e=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(b.familyPrefix,"-").concat(r):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u({},a,{id:o}),children:e}]}]}function In(t){var n=t.icons,r=n.main,e=n.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,m=t.maskId,d=t.titleId,p=t.extra,I=t.watchable,M=I===void 0?!1:I,z=e.found?e:r,x=z.width,w=z.height,f=a==="fak",c=f?"":"fa-w-".concat(Math.ceil(x/w*16)),v=[b.replacementClass,i?"".concat(b.familyPrefix,"-").concat(i):"",c].filter(function(D){return p.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(p.classes).join(" "),h={children:[],attributes:u({},p.attributes,{"data-prefix":a,"data-icon":i,class:v,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(w)})},S=f&&!~p.classes.indexOf("fa-fw")?{width:"".concat(x/w*16*.0625,"em")}:{};M&&(h.attributes[en]=""),l&&h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(d||U())},children:[l]});var O=u({},h,{prefix:a,iconName:i,main:r,mask:e,maskId:m,transform:o,symbol:s,styles:u({},S,p.styles)}),E=e.found&&r.found?kn(O):xn(O),$t=E.children,Ut=E.attributes;return O.children=$t,O.attributes=Ut,s?_n(O):On(O)}var ut=function(){};b.measurePerformance&&B&&B.mark&&B.measure;var V=function(n,r,e,a){var i=Object.keys(n),o=i.length,s=r,l,m,d;for(e===void 0?(l=1,d=n[i[0]]):(l=0,d=e);l<o;l++)m=i[l],d=s(d,n[m],m,n);return d};function Lt(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=r.skipHooks,a=e===void 0?!1:e,i=Object.keys(n).reduce(function(o,s){var l=n[s],m=!!l.icon;return m?o[l.iconName]=l.icon:o[s]=l,o},{});typeof _.hooks.addPack=="function"&&!a?_.hooks.addPack(t,i):_.styles[t]=u({},_.styles[t]||{},i),t==="fas"&&Lt("fa",n)}var mt=_.styles,zn=_.shims,Nt=function(){var n=function(a){return V(mt,function(i,o,s){return i[s]=V(o,a,{}),i},{})};n(function(e,a,i){return a[3]&&(e[a[3]]=i),e}),n(function(e,a,i){var o=a[2];return e[i]=i,o.forEach(function(s){e[s]=i}),e});var r="far"in mt;V(zn,function(e,a){var i=a[0],o=a[1],s=a[2];return o==="far"&&!r&&(o="fas"),e[i]={prefix:o,iconName:s},e},{})};Nt();_.styles;function dt(t,n,r){if(t&&t[n]&&t[n][r])return{prefix:n,iconName:r,icon:t[n][r]}}function Rt(t){var n=t.tag,r=t.attributes,e=r===void 0?{}:r,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?Mt(t):"<".concat(n," ").concat(bn(e),">").concat(i.map(Rt).join(""),"</").concat(n,">")}var Sn=function(n){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n?n.toLowerCase().split(" ").reduce(function(e,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return e.flipX=!0,e;if(o&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(o){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},r):r};function tt(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=new Error().stack}tt.prototype=Object.create(Error.prototype);tt.prototype.constructor=tt;var X={fill:"currentColor"},Dt={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};u({},X,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var ot=u({},Dt,{attributeName:"opacity"});u({},X,{cx:"256",cy:"364",r:"28"}),u({},Dt,{attributeName:"r",values:"28;14;28;28;14;28;"}),u({},ot,{values:"1;0;1;1;0;1;"});u({},X,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),u({},ot,{values:"1;0;0;0;0;1;"});u({},X,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),u({},ot,{values:"0;0;1;1;0;0;"});_.styles;function vt(t){var n=t[0],r=t[1],e=t.slice(4),a=bt(e,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(b.familyPrefix,"-").concat(G.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.familyPrefix,"-").concat(G.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(b.familyPrefix,"-").concat(G.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:r,icon:o}}_.styles;var Pn=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;function An(){var t=xt,n=Ot,r=b.familyPrefix,e=b.replacementClass,a=Pn;if(r!==t||e!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");a=a.replace(i,".".concat(r,"-")).replace(o,"--".concat(r,"-")).replace(s,".".concat(e))}return a}var Cn=function(){function t(){Gt(this,t),this.definitions={}}return Vt(t,[{key:"add",value:function(){for(var r=this,e=arguments.length,a=new Array(e),i=0;i<e;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){r.definitions[s]=u({},r.definitions[s]||{},o[s]),Lt(s,o[s]),Nt()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,e){var a=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,m=o.icon;r[s]||(r[s]={}),r[s][l]=m}),r}}]),t}();function Mn(){b.autoAddCss&&!pt&&(gn(An()),pt=!0)}function En(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(e){return Rt(e)})}}),Object.defineProperty(t,"node",{get:function(){if(rt){var e=g.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function ht(t){var n=t.prefix,r=n===void 0?"fa":n,e=t.iconName;if(e)return dt(jn.definitions,r,e)||dt(_.styles,r,e)}function Tn(t){return function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(n||{}).icon?n:ht(n||{}),a=r.mask;return a&&(a=(a||{}).icon?a:ht(a||{})),t(e,u({},r,{mask:a}))}}var jn=new Cn,pt=!1,nt={transform:function(n){return Sn(n)}},Ln=Tn(function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,e=r===void 0?j:r,a=n.symbol,i=a===void 0?!1:a,o=n.mask,s=o===void 0?null:o,l=n.maskId,m=l===void 0?null:l,d=n.title,p=d===void 0?null:d,I=n.titleId,M=I===void 0?null:I,z=n.classes,x=z===void 0?[]:z,w=n.attributes,f=w===void 0?{}:w,c=n.styles,v=c===void 0?{}:c;if(t){var h=t.prefix,S=t.iconName,O=t.icon;return En(u({type:"icon"},t),function(){return Mn(),b.autoA11y&&(p?f["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(M||U()):(f["aria-hidden"]="true",f.focusable="false")),In({icons:{main:vt(O),mask:s?vt(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:S,transform:u({},j,e),symbol:i,title:p,maskId:m,titleId:M,extra:{attributes:f,styles:v,classes:x}})})}});/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var Kn={prefix:"fas",iconName:"check",icon:[512,512,[],"f00c","M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"]},Vn={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"]},qn={prefix:"fas",iconName:"search",icon:[512,512,[],"f002","M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"]},Jn={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"]};function gt(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,e)}return r}function P(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?gt(Object(r),!0).forEach(function(e){y(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):gt(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function Nn(t,n){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var e=r.call(t,n||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function Rn(t){var n=Nn(t,"string");return typeof n=="symbol"?n:n+""}function H(t){"@babel/helpers - typeof";return H=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},H(t)}function y(t,n,r){return n=Rn(n),n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function Dn(t,n){if(t==null)return{};var r={};for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e)){if(n.indexOf(e)>=0)continue;r[e]=t[e]}return r}function Bn(t,n){if(t==null)return{};var r=Dn(t,n),e,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)e=i[a],!(n.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var Fn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Bt={exports:{}};(function(t){(function(n){var r=function(f,c,v){if(!m(c)||p(c)||I(c)||M(c)||l(c))return c;var h,S=0,O=0;if(d(c))for(h=[],O=c.length;S<O;S++)h.push(r(f,c[S],v));else{h={};for(var E in c)Object.prototype.hasOwnProperty.call(c,E)&&(h[f(E,v)]=r(f,c[E],v))}return h},e=function(f,c){c=c||{};var v=c.separator||"_",h=c.split||/(?=[A-Z])/;return f.split(h).join(v)},a=function(f){return z(f)?f:(f=f.replace(/[\-_\s]+(.)?/g,function(c,v){return v?v.toUpperCase():""}),f.substr(0,1).toLowerCase()+f.substr(1))},i=function(f){var c=a(f);return c.substr(0,1).toUpperCase()+c.substr(1)},o=function(f,c){return e(f,c).toLowerCase()},s=Object.prototype.toString,l=function(f){return typeof f=="function"},m=function(f){return f===Object(f)},d=function(f){return s.call(f)=="[object Array]"},p=function(f){return s.call(f)=="[object Date]"},I=function(f){return s.call(f)=="[object RegExp]"},M=function(f){return s.call(f)=="[object Boolean]"},z=function(f){return f=f-0,f===f},x=function(f,c){var v=c&&"process"in c?c.process:c;return typeof v!="function"?f:function(h,S){return v(h,f,S)}},w={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(f,c){return r(x(a,c),f)},decamelizeKeys:function(f,c){return r(x(o,c),f,c)},pascalizeKeys:function(f,c){return r(x(i,c),f)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=w:n.humps=w})(Fn)})(Bt);var Wn=Bt.exports,$n=["class","style"];function Un(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,r){var e=r.indexOf(":"),a=Wn.camelize(r.slice(0,e)),i=r.slice(e+1).trim();return n[a]=i,n},{})}function Hn(t){return t.split(/\s+/).reduce(function(n,r){return n[r]=!0,n},{})}function Ft(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var e=(t.children||[]).map(function(l){return Ft(l)}),a=Object.keys(t.attributes||{}).reduce(function(l,m){var d=t.attributes[m];switch(m){case"class":l.class=Hn(d);break;case"style":l.style=Un(d);break;default:l.attrs[m]=d}return l},{attrs:{},class:{},style:{}});r.class;var i=r.style,o=i===void 0?{}:i,s=Bn(r,$n);return Xt(t.tag,P(P(P({},n),{},{class:a.class,style:P(P({},a.style),o)},a.attrs),s),e)}var Wt=!1;try{Wt=!0}catch{}function Yn(){if(!Wt&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function q(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?y({},t,n):{}}function Xn(t){var n,r=(n={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},y(y(y(y(y(y(y(y(y(y(n,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),y(y(n,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(r).map(function(e){return r[e]?e:null}).filter(function(e){return e})}function yt(t){if(t&&H(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(nt.icon)return nt.icon(t);if(t===null)return null;if(H(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Qn=Ht({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(n){return[!0,!1,"horizontal","vertical","both"].indexOf(n)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(n){return["right","left"].indexOf(n)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(n){return[90,180,270].indexOf(Number.parseInt(n,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(n){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(n)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(n,r){var e=r.attrs,a=T(function(){return yt(n.icon)}),i=T(function(){return q("classes",Xn(n))}),o=T(function(){return q("transform",typeof n.transform=="string"?nt.transform(n.transform):n.transform)}),s=T(function(){return q("mask",yt(n.mask))}),l=T(function(){return Ln(a.value,P(P(P(P({},i.value),o.value),s.value),{},{symbol:n.symbol,title:n.title,titleId:n.titleId,maskId:n.maskId}))});Yt(l,function(d){if(!d)return Yn("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var m=T(function(){return l.value?Ft(l.value.abstract[0],{},e):null});return function(){return m.value}}});export{Qn as F,Jn as a,Kn as b,qn as c,Vn as f,jn as l};

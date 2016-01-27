/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-backdropfilter-backgroundsize-bgrepeatspace_bgrepeatround-bgsizecover-borderradius-boxshadow-boxsizing-capture-cssanimations-cssfilters-cssgradients-directory-fileinput-formattribute-lastchild-localizednumber-mediaqueries-nthchild-opacity-placeholder-rgba-setclasses-shiv !*/
!function(e,t,n){function r(e,t){return typeof e===t}function i(){var e,t,n,i,a,o,s;for(var d in b)if(b.hasOwnProperty(d)){if(e=[],t=b[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)o=e[a],s=o.split("."),1===s.length?Modernizr[s[0]]=i:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=i),y.push((i?"":"no-")+s.join("-"))}}function a(e){var t=x.className,n=Modernizr._config.classPrefix||"";if(T&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),T?x.className.baseVal=t:x.className=t)}function o(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):T?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(){var e=t.body;return e||(e=o(T?"svg":"body"),e.fake=!0),e}function d(e,n,r,i){var a,d,l,u,c="modernizr",f=o("div"),p=s();if(parseInt(r,10))for(;r--;)l=o("div"),l.id=i?i[r]:c+(r+1),f.appendChild(l);return a=o("style"),a.type="text/css",a.id="s"+c,(p.fake?p:f).appendChild(a),p.appendChild(f),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),f.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",u=x.style.overflow,x.style.overflow="hidden",x.appendChild(p)),d=n(f,e),p.fake?(p.parentNode.removeChild(p),x.style.overflow=u,x.offsetHeight):f.parentNode.removeChild(f),!!d}function l(e,t){return!!~(""+e).indexOf(t)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function c(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var i;for(var a in e)if(e[a]in t)return n===!1?e[a]:(i=t[e[a]],r(i,"function")?c(i,n||t):i);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(p(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];i--;)a.push("("+p(t[i])+":"+r+")");return a=a.join(" or "),d("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,i,a){function s(){c&&(delete F.style,delete F.modElem)}if(a=r(a,"undefined")?!1:a,!r(i,"undefined")){var d=m(e,i);if(!r(d,"undefined"))return d}for(var c,f,p,h,g,v=["modernizr","tspan"];!F.style;)c=!0,F.modElem=o(v.shift()),F.style=F.modElem.style;for(p=e.length,f=0;p>f;f++)if(h=e[f],g=F.style[h],l(h,"-")&&(h=u(h)),F.style[h]!==n){if(a||r(i,"undefined"))return s(),"pfx"==t?h:!0;try{F.style[h]=i}catch(y){}if(F.style[h]!=g)return s(),"pfx"==t?h:!0}return s(),!1}function g(e,t,n,i,a){var o=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+j.join(o+" ")+o).split(" ");return r(t,"string")||r(t,"undefined")?h(s,t,i,a):(s=(e+" "+_.join(o+" ")+o).split(" "),f(s,t,n))}function v(e,t,r){return g(e,n,n,t,r)}var y=[],b=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){b.push({name:e,fn:t,options:n})},addAsyncTest:function(e){b.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var x=t.documentElement,T="svg"===x.nodeName.toLowerCase();T||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=b.elements;return"string"==typeof e?e.split(" "):e}function i(e,t){var n=b.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),b.elements=n+" "+e,l(t)}function a(e){var t=y[e[g]];return t||(t={},v++,e[g]=v,y[v]=t),t}function o(e,n,r){if(n||(n=t),c)return n.createElement(e);r||(r=a(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||m.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function s(e,n){if(e||(e=t),c)return e.createDocumentFragment();n=n||a(e);for(var i=n.frag.cloneNode(),o=0,s=r(),d=s.length;d>o;o++)i.createElement(s[o]);return i}function d(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return b.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(b,t.frag)}function l(e){e||(e=t);var r=a(e);return!b.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||d(e,r),e}var u,c,f="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,c=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,c=!0}}();var b={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:f,shivCSS:p.shivCSS!==!1,supportsUnknownElements:c,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:l,createElement:o,createDocumentFragment:s,addElements:i};e.html5=b,l(t),"object"==typeof module&&module.exports&&(module.exports=b)}("undefined"!=typeof e?e:this,t),Modernizr.addTest("rgba",function(){var e=o("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("capture","capture"in o("input")),Modernizr.addTest("fileinput",function(){if(navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/))return!1;var e=o("input");return e.type="file",!e.disabled}),Modernizr.addTest("formattribute",function(){var e,n=o("form"),r=o("input"),i=o("div"),a="formtest"+(new Date).getTime(),s=!1;n.id=a;try{r.setAttribute("form",a)}catch(d){t.createAttribute&&(e=t.createAttribute("form"),e.nodeValue=a,r.setAttributeNode(e))}return i.appendChild(n),i.appendChild(r),x.appendChild(i),s=n.elements&&1===n.elements.length&&r.form==n,i.parentNode.removeChild(i),s}),Modernizr.addTest("placeholder","placeholder"in o("input")&&"placeholder"in o("textarea"));var S=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];C._prefixes=S,Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",i=0,a=S.length-1;a>i;i++)e=0===i?"to ":"",r+=t+S[i]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var s=o("a"),d=s.style;return d.cssText=r,(""+d.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("opacity",function(){var e=o("a").style;return e.cssText=S.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var w="CSS"in e&&"supports"in e.CSS,E="supportsCSS"in e;Modernizr.addTest("supports",w||E);var k=C.testStyles=d;k("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),Modernizr.addTest("formvalidation",function(){var t=o("form");if(!("checkValidity"in t&&"addEventListener"in t))return!1;if("reportValidity"in t)return!0;var n,r=!1;return Modernizr.formvalidationapi=!0,t.addEventListener("submit",function(t){(!e.opera||e.operamini)&&t.preventDefault(),t.stopPropagation()},!1),t.innerHTML='<input name="modTest" required="required" /><button></button>',k("#modernizr form{position:absolute;top:-99999em}",function(e){e.appendChild(t),n=t.getElementsByTagName("input")[0],n.addEventListener("invalid",function(e){r=!0,e.preventDefault(),e.stopPropagation()},!1),Modernizr.formvalidationmessage=!!n.validationMessage,t.getElementsByTagName("button")[0].click()}),r});var z=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return d("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();C.mq=z,Modernizr.addTest("mediaqueries",z("only all"));var N="Moz O ms Webkit",_=C._config.usePrefixes?N.toLowerCase().split(" "):[];C._domPrefixes=_,Modernizr.addTest("fileinputdirectory",function(){var e=o("input"),t="directory";if(e.type="file",t in e)return!0;for(var n=0,r=_.length;r>n;n++)if(_[n]+t in e)return!0;return!1}),k("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,r=0;5>r;r++)n=n&&t[r].offsetWidth===r%2+1;Modernizr.addTest("nthchild",n)},5);var M=o("input"),P="search tel url email datetime date month week time datetime-local number range color".split(" "),A={};Modernizr.inputtypes=function(e){for(var r,i,a,o=e.length,s="1)",d=0;o>d;d++)M.setAttribute("type",r=e[d]),a="text"!==M.type&&"style"in M,a&&(M.value=s,M.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&M.style.WebkitAppearance!==n?(x.appendChild(M),i=t.defaultView,a=i.getComputedStyle&&"textfield"!==i.getComputedStyle(M,null).WebkitAppearance&&0!==M.offsetHeight,x.removeChild(M)):/^(search|tel)$/.test(r)||(a=/^(url|email)$/.test(r)?M.checkValidity&&M.checkValidity()===!1:M.value!=s)),A[e[d]]=!!a;return A}(P),Modernizr.addTest("localizednumber",function(){if(!Modernizr.inputtypes.number)return!1;if(!Modernizr.formvalidation)return!1;var e,n=o("div"),r=s(),i=function(){return x.insertBefore(r,x.firstElementChild||x.firstChild)}();n.innerHTML='<input type="number" value="1.0" step="0.1"/>';var a=n.childNodes[0];i.appendChild(n),a.focus();try{t.execCommand("InsertText",!1,"1,1")}catch(d){}return e="number"===a.type&&1.1===a.valueAsNumber&&a.checkValidity(),i.removeChild(n),r.fake&&i.parentNode.removeChild(i),e});var j=C._config.usePrefixes?N.split(" "):[];C._cssomPrefixes=j;var L={elem:o("modernizr")};Modernizr._q.push(function(){delete L.elem});var F={style:L.elem.style};Modernizr._q.unshift(function(){delete F.style}),C.testAllProps=g,C.testAllProps=v,Modernizr.addTest("cssanimations",v("animationName","a",!0)),Modernizr.addTest("backdropfilter",v("backdropFilter")),Modernizr.addTest("bgrepeatround",v("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",v("backgroundRepeat","space")),Modernizr.addTest("backgroundsize",v("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",v("backgroundSize","cover")),Modernizr.addTest("borderradius",v("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",v("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",v("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return v("filter","blur(2px)");var e=o("a");return e.style.cssText=S.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),i(),a(y),delete C.addTest,delete C.addAsyncTest;for(var q=0;q<Modernizr._q.length;q++)Modernizr._q[q]();e.Modernizr=Modernizr}(window,document);
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8+s/":function(e,t,n){"use strict";n("sc67"),n("AqHK"),n("pJf4"),n("pS08"),n("R48M");var r,o=n("q1tI"),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},"8ypT":function(e,t,n){},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=(n("8ypT"),n("mzAs"),n("Wbzz")),i=n("TSYQ"),c=n.n(i),u=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1],i=c()("navbar__mobile",{"navbar__mobile--show":t});return o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",{className:"navbar"},o.a.createElement("div",{className:"navbar__home"},o.a.createElement(a.Link,{to:"/"},"RubberDuckie.io")),o.a.createElement("div",{className:"navbar__other-links"},o.a.createElement(a.Link,{to:"/how-does-it-work",activeClassName:"active"},"How does it work?"),o.a.createElement(a.Link,{to:"/faq",activeClassName:"active"},"FAQ"))),o.a.createElement("span",{className:"navbar__hamburger",onClick:function(){n(!t)}},"Quack Menu"),o.a.createElement("nav",{className:i},o.a.createElement("div",{className:"navbar__mobile-links"},o.a.createElement(a.Link,{to:"/"},"RubberDuckie.io"),o.a.createElement(a.Link,{to:"/how-does-it-work",activeClassName:"active"},"How does it work?"),o.a.createElement(a.Link,{to:"/faq",activeClassName:"active"},"FAQ"))))},s=(n("bGgm"),function(e){var t=e.children;return o.a.createElement("div",{className:"container"},t)});t.a=function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{margin:"0 auto",maxWidth:1600,height:"100vh",padding:"0 1.45rem"}},o.a.createElement("main",null,o.a.createElement(u,null),o.a.createElement(s,null,t))))}},C9fy:function(e,t,n){var r=Date.prototype,o=r.toString,a=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("IYdN")(r,"toString",(function(){var e=a.call(this);return e==e?o.call(this):"Invalid Date"}))},R48M:function(e,t,n){var r=n("P8UN");r(r.S+r.F*!n("QPJK"),"Object",{defineProperty:n("rjfK").f})},TSYQ:function(e,t,n){var r;n("MIFh"),function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},bGgm:function(e,t,n){},bmMU:function(e,t,n){"use strict";n("pJf4"),n("Ll4R"),n("q8oJ"),n("C9fy"),n("klQ5"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("MIFh");var r=Array.isArray,o=Object.keys,a=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,u,s,l=r(t),f=r(n);if(l&&f){if((u=t.length)!=n.length)return!1;for(c=u;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(l!=f)return!1;var p=t instanceof Date,d=n instanceof Date;if(p!=d)return!1;if(p&&d)return t.getTime()==n.getTime();var m=t instanceof RegExp,h=n instanceof RegExp;if(m!=h)return!1;if(m&&h)return t.toString()==n.toString();var y=o(t);if((u=y.length)!==o(n).length)return!1;for(c=u;0!=c--;)if(!a.call(n,y[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=u;0!=c--;)if(!("_owner"===(s=y[c])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},klQ5:function(e,t,n){var r=n("emib"),o=n("TUPI"),a=n("rjfK").f,i=n("chL8").f,c=n("mhTz"),u=n("lb9j"),s=r.RegExp,l=s,f=s.prototype,p=/a/g,d=/a/g,m=new s(p)!==p;if(n("QPJK")&&(!m||n("96qb")((function(){return d[n("sOol")("match")]=!1,s(p)!=p||s(d)==d||"/a/i"!=s(p,"i")})))){s=function(e,t){var n=this instanceof s,r=c(e),a=void 0===t;return!n&&r&&e.constructor===s&&a?e:o(m?new l(r&&!a?e.source:e,t):l((r=e instanceof s)?e.source:e,r&&a?u.call(e):t),n?this:f,s)};for(var h=function(e){e in s||a(s,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},y=i(l),b=0;y.length>b;)h(y[b++]);f.constructor=s,s.prototype=f,n("IYdN")(r,"RegExp",s)}n("to/b")("RegExp")},mzAs:function(e,t,n){},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));n("wZFJ"),n("HQhv"),n("n7j8"),n("1dPr"),n("JHok"),n("OeI1"),n("MIFh"),n("sC2a"),n("sc67"),n("LagC"),n("pS08"),n("E5k/"),n("R48M"),n("m210"),n("4DPX"),n("U6Bt"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("AqHK");var r,o,a,i,c=n("17x9"),u=n.n(c),s=n("8+s/"),l=n.n(s),f=n("bmMU"),p=n.n(f),d=n("q1tI"),m=n.n(d),h=n("MgzW"),y=n.n(h),b="bodyAttributes",v="htmlAttributes",g="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),E="cssText",A="href",C="http-equiv",O="innerHTML",S="itemprop",k="name",j="property",P="rel",I="src",L="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",M="defer",R="encodeSpecialCharacters",q="onChangeClientState",D="titleTemplate",_=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),F=[T.NOSCRIPT,T.SCRIPT,T.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},J=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Q=function(e){var t=X(e,T.TITLE),n=X(e,D);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,N);return t||r||void 0},G=function(e){return X(e,q)||function(){}},W=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return K({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],u=c.toLowerCase();-1===t.indexOf(u)||n===P&&"canonical"===e[n].toLowerCase()||u===P&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==O&&c!==E&&c!==S||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],u=y()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},V=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){V(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||V:e.requestAnimationFrame||V,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ue(T.BODY,r),ue(T.HTML,o),ce(f,p);var d={baseTag:se(T.BASE,n),linkTags:se(T.LINK,a),metaTags:se(T.META,i),noscriptTags:se(T.NOSCRIPT,c),scriptTags:se(T.SCRIPT,s),styleTags:se(T.STYLE,l)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(T.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=a.indexOf(u);-1!==l&&a.splice(l,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[x[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=fe(n,r),[m.a.createElement(T.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=le(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+J(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+J(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case v:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=x[e]||e;if(n===O||n===E){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),m.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===O||e===E)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+J(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(T.BASE,t,r),bodyAttributes:pe(b,n,r),htmlAttributes:pe(v,o,r),link:pe(T.LINK,a,r),meta:pe(T.META,i,r),noscript:pe(T.NOSCRIPT,c,r),script:pe(T.SCRIPT,u,r),style:pe(T.STYLE,s,r),title:pe(T.TITLE,{title:f,titleAttributes:p},r)}},me=l()((function(e){return{baseTag:Z([A,L],e),bodyAttributes:W(b,e),defer:X(e,M),encode:X(e,R),htmlAttributes:W(v,e),linkTags:$(T.LINK,[P,A],e),metaTags:$(T.META,[k,w,C,j,S],e),noscriptTags:$(T.NOSCRIPT,[O],e),onChangeClientState:G(e),scriptTags:$(T.SCRIPT,[I,O],e),styleTags:$(T.STYLE,[E],e),title:Q(e),titleAttributes:W(g,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),de)((function(){return null})),he=(o=me,i=a=function(e){function t(){return Y(this,t),z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return K({},r,((t={})[n.type]=[].concat(r[n.type]||[],[K({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case T.TITLE:return K({},o,((t={})[r.type]=i,t.titleAttributes=K({},a),t));case T.BODY:return K({},o,{bodyAttributes:K({},a)});case T.HTML:return K({},o,{htmlAttributes:K({},a)})}return K({},o,((n={})[r.type]=K({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=K({},t);return Object.keys(e).forEach((function(t){var r;n=K({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)}(B(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=B(e,["children"]),r=K({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(o,r)},U(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(m.a.Component),a.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("qhky");function i(e){var t=e.description,n=e.lang,r=e.meta,i=e.title,c=t;return o.a.createElement(a.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | Modern Debugging",meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:title",content:i},{name:"twitter:description",content:c}].concat(r)})}i.defaultProps={lang:"en",meta:[],description:""},t.a=i},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=e50e9c162871c1d91fba5ce567a5656e16dc6783-004859ad28e90ba393cc.js.map
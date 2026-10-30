var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,o)=>(o=n==null?{}:e(i(n)),l(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D={},ee=[],te=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,O=Array.isArray;function k(e,t){for(var n in t)e[n]=t[n];return e}function ne(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function A(e,t,n){var r,i,a,o={};for(a in t)a==`key`?r=t[a]:a==`ref`?i=t[a]:o[a]=t[a];if(arguments.length>2&&(o.children=arguments.length>3?f.call(arguments,2):n),typeof e==`function`&&e.defaultProps!=null)for(a in e.defaultProps)o[a]===void 0&&(o[a]=e.defaultProps[a]);return j(e,o,r,i,null)}function j(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++m,__i:-1,__u:0};return i==null&&p.vnode!=null&&p.vnode(a),a}function re(){return{current:null}}function M(e){return e.children}function N(e,t){this.props=e,this.context=t}function P(e,t){if(t==null)return e.__?P(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type==`function`?P(e):null}function ie(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,r=[],i=[],a=k({},t);a.__v=t.__v+1,p.vnode&&p.vnode(a),he(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,r,n??P(t),!!(32&t.__u),i),a.__v=t.__v,a.__.__k[a.__i]=a,_e(r,a,i),t.__e=t.__=null,a.__e!=n&&ae(a)}}function ae(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),ae(e)}function oe(e){(!e.__d&&(e.__d=!0)&&h.push(e)&&!se.__r++||g!=p.debounceRendering)&&((g=p.debounceRendering)||_)(se)}function se(){try{for(var e,t=1;h.length;)h.length>t&&h.sort(v),e=h.shift(),t=h.length,ie(e)}finally{h.length=se.__r=0}}function ce(e,t,n,r,i,a,o,s,c,l,u){var d,f,p,m,h,g,_=r&&r.__k||ee,v=t.length;for(c=le(n,t,_,c,v),d=0;d<v;d++)(p=n.__k[d])!=null&&(f=p.__i!=-1&&_[p.__i]||D,p.__i=d,g=he(e,p,f,i,a,o,s,c,l,u),m=p.__e,p.ref&&f.ref!=p.ref&&(f.ref&&be(f.ref,null,p),u.push(p.ref,p.__c||m,p)),h==null&&m!=null&&(h=m),4&p.__u?(c=ue(p,c,e),f.__e&&(f.__e=null)):typeof p.type==`function`&&g!==void 0?c=g:m&&(c=m.nextSibling),p.__u&=-7);return n.__e=h,c}function le(e,t,n,r,i){var a,o,s,c,l,u=n.length,d=u,f=0;for(e.__k=Array(i),a=0;a<i;a++)(o=t[a])!=null&&typeof o!=`boolean`&&typeof o!=`function`?(typeof o==`string`||typeof o==`number`||typeof o==`bigint`||o.constructor==String?o=e.__k[a]=j(null,o,null,null,null):O(o)?o=e.__k[a]=j(M,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=e.__k[a]=j(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):e.__k[a]=o,c=a+f,o.__=e,o.__b=e.__b+1,s=null,(l=o.__i=de(o,n,c,d))!=-1&&(d--,(s=n[l])&&(s.__u|=2)),s==null||s.__v==null?(l==-1&&(i>u?f--:i<u&&f++),typeof o.type!=`function`&&(o.__u|=4)):l!=c&&(l==c-1?f--:l==c+1?f++:(l>c?f--:f++,o.__u|=4))):e.__k[a]=null;if(d)for(a=0;a<u;a++)(s=n[a])!=null&&!(2&s.__u)&&(s.__e==r&&(r=P(s)),xe(s,s));return r}function ue(e,t,n){var r,i;if(typeof e.type==`function`){for(r=e.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=e,t=ue(r[i],t,n));return t}e.__e!=t&&(t&&e.type&&!t.parentNode&&(t=P(e)),t=n.insertBefore(e.__e,t||null));do t&&=t.nextSibling;while(t!=null&&t.nodeType==8);return t}function F(e,t){return t||=[],e==null||typeof e==`boolean`||(O(e)?e.some(function(e){F(e,t)}):t.push(e)),t}function de(e,t,n,r){var i,a,o,s=e.key,c=e.type,l=t[n],u=l!=null&&!(2&l.__u);if(l===null&&s==null||u&&s==l.key&&c==l.type)return n;if(r>+!!u){for(i=n-1,a=n+1;i>=0||a<t.length;)if((l=t[o=i>=0?i--:a++])!=null&&!(2&l.__u)&&s==l.key&&c==l.type)return o}return-1}function fe(e,t,n){t[0]==`-`?e.setProperty(t,n??``):e[t]=n==null?``:typeof n!=`number`||te.test(t)?n:n+`px`}function pe(e,t,n,r,i){var a,o;n:if(t==`style`){if(typeof n==`string`)e.style.cssText=n;else{if(typeof r==`string`&&(e.style.cssText=r=``),r)for(t in r)n&&t in n||fe(e.style,t,``);if(n)for(t in n)r&&n[t]==r[t]||fe(e.style,t,n[t])}}else if(t[0]==`o`&&t[1]==`n`)a=t!=(t=t.replace(S,`$1`)),o=t.toLowerCase(),t=o in e||t==`onFocusOut`||t==`onFocusIn`?o.slice(2):t.slice(2),e.l||={},e.l[t+a]=n,n?r?n[x]=r[x]:(n[x]=C,e.addEventListener(t,a?T:w,a)):e.removeEventListener(t,a?T:w,a);else{if(i==`http://www.w3.org/2000/svg`)t=t.replace(/xlink(H|:h)/,`h`).replace(/sName$/,`s`);else if(t!=`width`&&t!=`height`&&t!=`href`&&t!=`list`&&t!=`form`&&t!=`tabIndex`&&t!=`download`&&t!=`rowSpan`&&t!=`colSpan`&&t!=`role`&&t!=`popover`&&t in e)try{e[t]=n??``;break n}catch{}typeof n==`function`||(n==null||!1===n&&t[4]!=`-`?e.removeAttribute(t):e.setAttribute(t,t==`popover`&&n==1?``:n))}}function me(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[b]==null)t[b]=C++;else if(t[b]<n[x])return;return n(p.event?p.event(t):t)}}}function he(e,t,n,r,i,a,o,s,c,l){var u,d,f,m,h,g,_,v,y,b,x,S,C,w,T,E,D=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),a=[s=t.__e=n.__e]),(u=p.__b)&&u(t);n:if(typeof D==`function`){d=o.length;try{if(y=t.props,b=D.prototype&&D.prototype.render,x=(u=D.contextType)&&r[u.__c],S=u?x?x.props.value:u.__:r,n.__c?v=(f=t.__c=n.__c).__=f.__E:(b?t.__c=f=new D(y,S):(t.__c=f=new N(y,S),f.constructor=D,f.render=Se),x&&x.sub(f),f.state||(f.state={}),f.__n=r,m=f.__d=!0,f.__h=[],f._sb=[]),b&&f.__s==null&&(f.__s=f.state),b&&D.getDerivedStateFromProps!=null&&(f.__s==f.state&&(f.__s=k({},f.__s)),k(f.__s,D.getDerivedStateFromProps(y,f.__s))),h=f.props,g=f.state,f.__v=t,m)b&&D.getDerivedStateFromProps==null&&f.componentWillMount!=null&&f.componentWillMount(),b&&f.componentDidMount!=null&&f.__h.push(f.componentDidMount);else{if(b&&D.getDerivedStateFromProps==null&&y!==h&&f.componentWillReceiveProps!=null&&f.componentWillReceiveProps(y,S),t.__v==n.__v||!f.__e&&f.shouldComponentUpdate!=null&&!1===f.shouldComponentUpdate(y,f.__s,S)){t.__v!=n.__v&&(f.props=y,f.state=f.__s,f.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(e){e&&(e.__=t)}),ee.push.apply(f.__h,f._sb),f._sb=[],f.__h.length&&o.push(f),s=P(n);break n}f.componentWillUpdate!=null&&f.componentWillUpdate(y,f.__s,S),b&&f.componentDidUpdate!=null&&f.__h.push(function(){f.componentDidUpdate(h,g,_)})}if(f.context=S,f.props=y,f.__P=e,f.__e=!1,C=p.__r,w=0,b)f.state=f.__s,f.__d=!1,C&&C(t),u=f.render(f.props,f.state,f.context),ee.push.apply(f.__h,f._sb),f._sb=[];else do f.__d=!1,C&&C(t),u=f.render(f.props,f.state,f.context),f.state=f.__s;while(f.__d&&++w<25);f.state=f.__s,f.getChildContext!=null&&(r=k(k({},r),f.getChildContext())),b&&!m&&f.getSnapshotBeforeUpdate!=null&&(_=f.getSnapshotBeforeUpdate(h,g)),T=u!=null&&u.type===M&&u.key==null?ve(u.props.children):u,s=ce(e,O(T)?T:[T],t,n,r,i,a,o,s,c,l),f.base=t.__e,t.__u&=-161,f.__h.length&&o.push(f),v&&(f.__E=f.__=null)}catch(e){if(o.length=d,t.__v=null,c||a!=null){if(e.then){for(t.__u|=c?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;a!=null&&(a[a.indexOf(s)]=null),t.__e=s}else if(a!=null)for(E=a.length;E--;)ne(a[E])}else t.__e=n.__e;t.__k??=n.__k||[],e.then||ge(t),p.__e(e,t,n)}}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):s=t.__e=ye(n.__e,t,n,r,i,a,o,c,l);return(u=p.diffed)&&u(t),128&t.__u?void 0:s}function ge(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(ge))}function _e(e,t,n){for(var r=0;r<n.length;r++)be(n[r],n[++r],n[++r]);p.__c&&p.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){p.__e(e,t.__v)}})}function ve(e){return typeof e!=`object`||!e||e.__b>0?e:O(e)?e.map(ve):e.constructor===void 0?k({},e):null}function ye(e,t,n,r,i,a,o,s,c){var l,u,d,m,h,g,_,v=n.props||D,y=t.props,b=t.type;if(b==`svg`?i=`http://www.w3.org/2000/svg`:b==`math`?i=`http://www.w3.org/1998/Math/MathML`:i||=`http://www.w3.org/1999/xhtml`,a!=null){for(l=0;l<a.length;l++)if((h=a[l])&&`setAttribute`in h==!!b&&(b?h.localName==b:h.nodeType==3)){e=h,a[l]=null;break}}if(e==null){if(b==null)return document.createTextNode(y);e=document.createElementNS(i,b,y.is&&y),s&&=(p.__m&&p.__m(t,a),!1),a=null}if(b==null)v===y||s&&e.data==y||(e.data=y);else{if(a=b==`textarea`&&y.defaultValue!=null?null:a&&f.call(e.childNodes),!s&&a!=null)for(v={},l=0;l<e.attributes.length;l++)v[(h=e.attributes[l]).name]=h.value;for(l in v)h=v[l],l==`dangerouslySetInnerHTML`?d=h:l==`children`||l in y||l==`value`&&`defaultValue`in y||l==`checked`&&`defaultChecked`in y||pe(e,l,null,h,i);for(l in y)h=y[l],l==`children`?m=h:l==`dangerouslySetInnerHTML`?u=h:l==`value`?g=h:l==`checked`?_=h:s&&typeof h!=`function`||v[l]===h||pe(e,l,h,v[l],i);if(u)s||d&&(u.__html==d.__html||u.__html==e.innerHTML)||(e.innerHTML=u.__html),t.__k=[];else if(d&&(e.innerHTML=``),ce(t.type==`template`?e.content:e,O(m)?m:[m],t,n,r,b==`foreignObject`?`http://www.w3.org/1999/xhtml`:i,a,o,a?a[0]:n.__k&&P(n,0),s,c),a!=null)for(l=a.length;l--;)ne(a[l]);s&&b!=`textarea`||(l=`value`,b==`progress`&&g==null?e.removeAttribute(`value`):g!=null&&(g!==e[l]||b==`progress`&&!g||b==`option`&&g!=v[l])&&pe(e,l,g,v[l],i),l=`checked`,_!=null&&_!=e[l]&&pe(e,l,_,v[l],i))}return e}function be(e,t,n){try{if(typeof e==`function`){var r=typeof e.__u==`function`;r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(e){p.__e(e,n)}}function xe(e,t,n){var r,i;if(p.unmount&&p.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||be(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){p.__e(e,t)}r.base=r.__P=r.__n=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&xe(r[i],t,n||typeof e.type!=`function`);n||ne(e.__e),e.__c=e.__=e.__e=void 0}function Se(e,t,n){return this.constructor(e,n)}function I(e,t,n){var r,i,a,o;t==document&&(t=document.documentElement),p.__&&p.__(e,t),i=(r=typeof n==`function`)?null:n&&n.__k||t.__k,a=[],o=[],he(t,e=(!r&&n||t).__k=A(M,null,[e]),i||D,D,t.namespaceURI,!r&&n?[n]:i?null:t.firstChild?f.call(t.childNodes):null,a,!r&&n?n:i?i.__e:t.firstChild,r,o),_e(a,e,o),e.props.children=null}function Ce(e,t){I(e,t,Ce)}function we(e,t,n){var r,i,a,o,s=k({},e.props);for(a in e.type&&e.type.defaultProps&&(o=e.type.defaultProps),t)a==`key`?r=t[a]:a==`ref`?i=t[a]:s[a]=t[a]===void 0&&o!=null?o[a]:t[a];return arguments.length>2&&(s.children=arguments.length>3?f.call(arguments,2):n),j(e.type,s,r||e.key,i||e.ref,null)}function Te(e){function t(e){var n,r;return this.getChildContext||(n=new Set,(r={})[t.__c]=this,this.getChildContext=function(){return r},this.componentWillUnmount=function(){n=null},this.shouldComponentUpdate=function(e){this.props.value!=e.value&&n.forEach(function(e){e.__e=!0,oe(e)})},this.sub=function(e){n.add(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n&&n.delete(e),t&&t.call(e)}}),e.children}return t.__c=`__cC`+E++,t.__=e,t.Provider=t.__l=(t.Consumer=function(e,t){return e.children(t)}).contextType=t,t}f=ee.slice,p={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(t){e=t}throw e}},m=0,N.prototype.setState=function(e,t){var n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=k({},this.state);typeof e==`function`&&(e=e(k({},n),this.props)),e&&k(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),oe(this))},N.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),oe(this))},N.prototype.render=M,h=[],_=typeof Promise==`function`?Promise.prototype.then.bind(Promise.resolve()):setTimeout,v=function(e,t){return e.__v.__b-t.__v.__b},se.__r=0,y=Math.random().toString(8),b=`__d`+y,x=`__a`+y,S=/(PointerCapture)$|Capture$/i,C=0,w=me(!1),T=me(!0),E=0;var L,R,Ee,De,z=0,Oe=[],B=p,ke=B.__b,Ae=B.__r,je=B.diffed,Me=B.__c,Ne=B.unmount,Pe=B.__;function V(e,t){B.__h&&B.__h(R,e,z||t),z=0;var n=R.__H||(R.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function H(e){return z=1,Fe(qe,e)}function Fe(e,t,n){var r=V(L++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):qe(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);t!==n&&(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=R,!R.__f)){var i=function(e,t,n){if(!r.__c.__H)return!0;var i=!1,o=r.__c.props!==e;if(r.__c.__H.__.some(function(e){if(e.__N){i=!0;var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(o=!0)}}),a){var s=a.call(this,e,t,n);return i?s||o:s}return!i||o};R.__f=!0;var a=R.shouldComponentUpdate,o=R.componentWillUpdate;R.componentWillUpdate=function(e,t,n){if(this.__e){var r=a;a=void 0,i(e,t,n),a=r}o&&o.call(this,e,t,n)},R.shouldComponentUpdate=i}return r.__N||r.__}function U(e,t){var n=V(L++,3);!B.__s&&Ke(n.__H,t)&&(n.__=e,n.u=t,R.__H.__h.push(n))}function W(e,t){var n=V(L++,4);!B.__s&&Ke(n.__H,t)&&(n.__=e,n.u=t,R.__h.push(n))}function Ie(e){return z=5,G(function(){return{current:e}},[])}function Le(e,t,n){z=6,W(function(){if(typeof e==`function`){var n=e(t());return function(){e(null),n&&typeof n==`function`&&n()}}if(e)return e.current=t(),function(){return e.current=null}},n==null?n:n.concat(e))}function G(e,t){var n=V(L++,7);return Ke(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Re(e,t){return z=8,G(function(){return e},t)}function ze(e){var t=R.context[e.__c],n=V(L++,9);return n.c=e,t?(n.__??(n.__=!0,t.sub(R)),t.props.value):e.__}function Be(e,t){B.useDebugValue&&B.useDebugValue(t?t(e):e)}function Ve(){var e=V(L++,11);if(!e.__){for(var t=R.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__=`P`+n[0]+`-`+n[1]++}return e.__}function He(){for(var e;e=Oe.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(K),t.__h.some(Ge),t.__h=[]}catch(n){t.__h=[],B.__e(n,e.__v)}}}B.__b=function(e){R=null,ke&&ke(e)},B.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Pe&&Pe(e,t)},B.__r=function(e){Ae&&Ae(e),L=0;var t=(R=e.__c).__H;t&&(Ee===R?(t.__h=[],R.__h=[],t.__.some(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})):(t.__h.some(K),t.__h.some(Ge),t.__h=[],L=0)),Ee=R},B.diffed=function(e){je&&je(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Oe.push(t)!==1&&De===B.requestAnimationFrame||((De=B.requestAnimationFrame)||We)(He)),t.__H.__.some(function(e){e.u&&=(e.__H=e.u,void 0)})),Ee=R=null},B.__c=function(e,t){t.some(function(e){try{e.__h.some(K),e.__h=e.__h.filter(function(e){return!e.__||Ge(e)})}catch(n){t.some(function(e){e.__h&&=[]}),t=[],B.__e(n,e.__v)}}),Me&&Me(e,t)},B.unmount=function(e){Ne&&Ne(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(e){try{K(e)}catch(e){t=e}}),n.__H=void 0,t&&B.__e(t,n.__v))};var Ue=typeof requestAnimationFrame==`function`;function We(e){var t,n=function(){clearTimeout(r),Ue&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);Ue&&(t=requestAnimationFrame(n))}function K(e){var t=R,n=e.__c;typeof n==`function`&&(e.__c=void 0,n()),R=t}function Ge(e){var t=R;e.__c=e.__(),R=t}function Ke(e,t){return!e||e.length!==t.length||t.some(function(t,n){return t!==e[n]})}function qe(e,t){return typeof t==`function`?t(e):t}function Je(e,t){for(var n in t)e[n]=t[n];return e}function Ye(e,t){for(var n in e)if(n!==`__source`&&!(n in t))return!0;for(var r in t)if(r!==`__source`&&e[r]!==t[r])return!0;return!1}function Xe(e,t){var n=t(),r=H({t:{__:n,u:t}}),i=r[0].t,a=r[1];return W(function(){i.__=n,i.u=t,Ze(i)&&a({t:i})},[e,n,t]),U(function(){return Ze(i)&&a({t:i}),e(function(){Ze(i)&&a({t:i})})},[e]),n}function Ze(e){try{return!((t=e.__)===(n=e.u())&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return!0}var t,n}function Qe(e){e()}function $e(e){return e}function et(){return[!1,Qe]}var tt=W;function nt(e,t){this.props=e,this.context=t}function rt(e,t){function n(e){var n=this.props.ref;return n!=e.ref&&n&&(typeof n==`function`?n(null):n.current=null),t?!t(this.props,e)||n!=e.ref:Ye(this.props,e)}function r(t){return this.shouldComponentUpdate=n,A(e,t)}return r.displayName=`Memo(`+(e.displayName||e.name)+`)`,r.__f=r.prototype.isReactComponent=!0,r.type=e,r}(nt.prototype=new N).isPureReactComponent=!0,nt.prototype.shouldComponentUpdate=function(e,t){return Ye(this.props,e)||Ye(this.state,t)};var it=p.__b;p.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),it&&it(e)};var at=typeof Symbol<`u`&&Symbol.for&&Symbol.for(`react.forward_ref`)||3911;function ot(e){function t(t){var n=Je({},t);return delete n.ref,e(n,t.ref||null)}return t.$$typeof=at,t.render=e,t.prototype.isReactComponent=t.__f=!0,t.displayName=`ForwardRef(`+(e.displayName||e.name)+`)`,t}var st=function(e,t){return e==null?null:F(F(e).map(t))},ct={map:st,forEach:st,count:function(e){return e?F(e).length:0},only:function(e){var t=F(e);if(t.length!==1)throw`Children.only`;return t[0]},toArray:F},lt=p.__e;p.__e=function(e,t,n,r){if(e.then){for(var i,a=t;a=a.__;)if((i=a.__c)&&i.__c)return t.__e??(t.__e=n.__e,t.__k=n.__k||[]),i.__c(e,t)}lt(e,t,n,r)};var ut=p.unmount;function dt(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(e){typeof e.__c==`function`&&e.__c()}),e.__c.__H=null),(e=Je({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c.__e=!0,e.__c=null),e.__k=e.__k&&e.__k.map(function(e){return dt(e,t,n)})),e}function ft(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(e){return ft(e,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function pt(){this.__u=0,this.o=null,this.__b=null}function mt(e){var t=e.__&&e.__.__c;return t&&t.__a&&t.__a(e)}function ht(e){var t,n,r,i=null;function a(a){if(t||(t=e()).then(function(e){e&&(i=e.default||e),r=!0},function(e){n=e,r=!0}),n)throw n;if(!r)throw t;return i?A(i,a):null}return a.displayName=`Lazy`,a.__f=!0,a}function q(){this.i=null,this.l=null}p.unmount=function(e){var t=e.__c;t&&(t.__z=!0),t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),ut&&ut(e)},(pt.prototype=new N).__c=function(e,t){var n=t.__c,r=this;r.o??=[],r.o.push(n);var i=mt(r.__v),a=!1,o=function(){a||r.__z||(a=!0,n.__R=null,i?i(c):c())};n.__R=o;var s=n.__P;n.__P=null;var c=function(){if(!--r.__u){if(r.state.__a){var e=r.state.__a;r.__v.__k[0]=ft(e,e.__c.__P,e.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.o.pop();)t.__P=s,t.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(o,o)},pt.prototype.componentWillUnmount=function(){this.o=[]},pt.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement(`div`),r=this.__v.__k[0].__c;this.__v.__k[0]=dt(this.__b,n,r.__O=r.__P)}this.__b=null}var i=t.__a&&A(M,null,e.fallback);return i&&(i.__u&=-33),[A(M,null,t.__a?null:e.children),i]};var gt=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!==`t`||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};function _t(e){return this.getChildContext=function(){return e.context},e.children}function vt(e){var t=this,n=e.h;if(t.componentWillUnmount=function(){I(null,t.v),t.v=null,t.h=null},t.h&&t.h!==n&&t.componentWillUnmount(),!t.v){for(var r=t.__v;r!==null&&!r.__m&&r.__!==null;)r=r.__;t.h=n,t.v={nodeType:1,parentNode:n,childNodes:[],__k:{__m:r.__m},contains:function(){return!0},namespaceURI:n.namespaceURI,insertBefore:function(e,n){this.childNodes.push(e),t.h.insertBefore(e,n)},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),t.h.removeChild(e)}}}I(A(_t,{context:t.context},e.__v),t.v)}function yt(e,t){var n=A(vt,{__v:e,h:t});return n.containerInfo=t,n}(q.prototype=new N).__a=function(e){var t=this,n=mt(t.__v),r=t.l.get(e);return r[0]++,function(i){var a=function(){t.props.revealOrder?(r.push(i),gt(t,e,r)):i()};n?n(a):a()}},q.prototype.render=function(e){this.i=null,this.l=new Map;var t=F(e.children);e.revealOrder&&e.revealOrder[0]===`b`&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},q.prototype.componentDidUpdate=q.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){gt(e,n,t)})};var bt=typeof Symbol<`u`&&Symbol.for&&Symbol.for(`react.element`)||60103,xt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,St=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Ct=/[A-Z0-9]/g,wt=typeof document<`u`,Tt=function(e){return(typeof Symbol<`u`&&typeof Symbol()==`symbol`?/fil|che|rad/:/fil|che|ra/).test(e)};function Et(e,t,n){return t.__k??(t.textContent=``),I(e,t),typeof n==`function`&&n(),e?e.__c:null}function Dt(e,t,n){return Ce(e,t),typeof n==`function`&&n(),e?e.__c:null}N.prototype.isReactComponent=!0,[`componentWillMount`,`componentWillReceiveProps`,`componentWillUpdate`].forEach(function(e){Object.defineProperty(N.prototype,e,{configurable:!0,get:function(){return this[`UNSAFE_`+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Ot=p.event;p.event=function(e){return Ot&&(e=Ot(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e};var kt,At={configurable:!0,get:function(){return this.class}},jt=p.vnode;p.vnode=function(e){typeof e.type==`string`&&function(e){var t=e.props,n=e.type,r={},i=n.indexOf(`-`)==-1;for(var a in t){var o=t[a];if(!(a===`value`&&`defaultValue`in t&&o==null||wt&&a===`children`&&n===`noscript`||a===`class`||a===`className`)){var s=a.toLowerCase();a===`defaultValue`&&`value`in t&&t.value==null?a=`value`:a===`download`&&!0===o?o=``:s===`translate`&&o===`no`?o=!1:s[0]===`o`&&s[1]===`n`?s===`ondoubleclick`?a=`ondblclick`:s!==`onchange`||n!==`input`&&n!==`textarea`||Tt(t.type)?s===`onfocus`?a=`onfocusin`:s===`onblur`?a=`onfocusout`:St.test(a)&&(a=s):s=a=`oninput`:i&&xt.test(a)?a=a.replace(Ct,`-$&`).toLowerCase():o===null&&(o=void 0),s===`oninput`&&r[a=s]&&(a=`oninputCapture`),r[a]=o}}n==`select`&&(r.multiple&&Array.isArray(r.value)&&(r.value=F(t.children).forEach(function(e){e.props.selected=r.value.indexOf(e.props.value)!=-1})),r.defaultValue!=null&&(r.value=F(t.children).forEach(function(e){e.props.selected=r.multiple?r.defaultValue.indexOf(e.props.value)!=-1:r.defaultValue==e.props.value}))),t.class&&!t.className?(r.class=t.class,Object.defineProperty(r,"className",At)):t.className&&(r.class=r.className=t.className),e.props=r}(e),e.$$typeof=bt,jt&&jt(e)};var Mt=p.__r;p.__r=function(e){Mt&&Mt(e),kt=e.__c};var Nt=p.diffed;p.diffed=function(e){Nt&&Nt(e);var t=e.props,n=e.__e;n!=null&&e.type===`textarea`&&`value`in t&&t.value!==n.value&&(n.value=t.value==null?``:t.value),kt=null};var Pt={ReactCurrentDispatcher:{current:{readContext:function(e){return kt.__n[e.__c].props.value},useCallback:Re,useContext:ze,useDebugValue:Be,useDeferredValue:$e,useEffect:U,useId:Ve,useImperativeHandle:Le,useInsertionEffect:tt,useLayoutEffect:W,useMemo:G,useReducer:Fe,useRef:Ie,useState:H,useSyncExternalStore:Xe,useTransition:et}}};function Ft(e){return A.bind(null,e)}function It(e){return!!e&&e.$$typeof===bt}function Lt(e){return It(e)&&e.type===M}function Rt(e){return!!e&&typeof e.displayName==`string`&&e.displayName.indexOf(`Memo(`)==0}function zt(e){return It(e)?we.apply(null,arguments):e}function Bt(e){return!!e.__k&&(I(null,e),!0)}function Vt(e){return e&&(e.base||e.nodeType===1&&e)||null}var Ht={useState:H,useId:Ve,useReducer:Fe,useEffect:U,useLayoutEffect:W,useInsertionEffect:tt,useTransition:et,useDeferredValue:$e,useSyncExternalStore:Xe,startTransition:Qe,useRef:Ie,useImperativeHandle:Le,useMemo:G,useCallback:Re,useContext:ze,useDebugValue:Be,version:`18.3.1`,Children:ct,render:Et,hydrate:Dt,unmountComponentAtNode:Bt,createPortal:yt,createElement:A,createContext:Te,createFactory:Ft,cloneElement:zt,createRef:re,Fragment:M,isValidElement:It,isElement:It,isFragment:Lt,isMemo:Rt,findDOMNode:Vt,Component:N,PureComponent:nt,memo:rt,forwardRef:ot,flushSync:function(e,t){var n,r=p.debounceRendering;p.debounceRendering=function(e){n=e};try{var i=e(t);return n&&n(),i}finally{p.debounceRendering=r}},unstable_batchedUpdates:function(e,t){return e(t)},StrictMode:M,Suspense:pt,SuspenseList:q,lazy:ht,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Pt};function Ut(e){return{render:function(t){Et(t,e)},unmount:function(){Bt(e)}}}var Wt=5097679090,J={comment:`long_text_mkw2gd7g`,dateOfComment:`date4`,escalation:`color_mm3yrx1m`,transcript:`link_mm3yzbbw`,nextStep:`color_mm3xvsq4`,categories:`color_mm33dxbw`,mainCategory:`color_mm33mzct`,subCategory:`color_mm338v9v`,dueDate:`date_mm3xgp56`,linkToDeal:`board_relation_mm3x67yf`},Gt=[`Yes`,`No`],Kt=[`Chase Payment`,`Schedule Meeting`,`Follow Up Email`,`Escalate`,`Qualify Lead`,`Call Back`,`Send Proposal`,`Awaiting Response`,`Negotiate Terms`,`Send Contract`,`Send Invoice`,`Confirm Delivery`],qt=[`W-Quote`,`General`,`W-Order`,`W-WH`,`W-Ship`,`W-Inv`],Jt=`Item.Lead.Quote.PO.Order.WH.Ship.INV.Pay.RMA.SRV.VEND.PURQ.PORD.RCV.QC.CNT.PROJ.FCAST.ITI.MDM.INVN.KIT.HSE.REG.REB.CARR.TEND.INS`.split(`.`),Yt=`COMPL.LEGAL.DG.ARTWK.PKG.PPE.TERMS.APPROVAL.CREDIT.TRACE.LOG.TMS.TAX.MKT.QMS.EHS.SUST.Trade.HS.ORIGIN.HAZWASTE.TEMP.SLED.CALIB.CONTENT.PROMO.PRICEGOV.REBATE.SECURITY.PRIVACY.DOCS.KPI.SLA`.split(`.`),Xt={Yes:`#00c875`,No:`#df2f4a`,"Chase Payment":`#fdab3d`,"Schedule Meeting":`#00c875`,"Follow Up Email":`#df2f4a`,Escalate:`#007eb5`,"Qualify Lead":`#9d50dd`,"Call Back":`#037f4c`,"Send Proposal":`#579bfc`,"Awaiting Response":`#cab641`,"Negotiate Terms":`#ffcb00`,"Send Contract":`#333333`,"Send Invoice":`#bb3354`,"Confirm Delivery":`#ff007f`,"W-Quote":`#fdab3d`,General:`#00c875`,"W-Order":`#007eb5`,"W-WH":`#9d50dd`,"W-Ship":`#037f4c`,"W-Inv":`#579bfc`,Item:`#fdab3d`,Lead:`#00c875`,Quote:`#df2f4a`,PO:`#007eb5`,Order:`#9d50dd`,WH:`#037f4c`,Ship:`#579bfc`,INV:`#cab641`,Pay:`#ffcb00`,RMA:`#333333`,SRV:`#bb3354`,VEND:`#ff007f`,PURQ:`#ff5ac4`,PORD:`#784bd1`,RCV:`#9cd326`,QC:`#66ccff`,CNT:`#757575`,PROJ:`#7f5347`,FCAST:`#ff6d3b`,ITI:`#ff7575`,MDM:`#faa1f1`,INVN:`#ffadad`,KIT:`#7e3b8a`,HSE:`#9aadbd`,REG:`#74afcc`,REB:`#225091`,CARR:`#4eccc6`,TEND:`#5559df`,INS:`#401694`,COMPL:`#fdab3d`,LEGAL:`#00c875`,DG:`#df2f4a`,ARTWK:`#007eb5`,PKG:`#9d50dd`,PPE:`#037f4c`,TERMS:`#579bfc`,APPROVAL:`#cab641`,CREDIT:`#ffcb00`,TRACE:`#333333`,LOG:`#bb3354`,TMS:`#ff007f`,TAX:`#ff5ac4`,MKT:`#784bd1`,QMS:`#9cd326`,EHS:`#66ccff`,SUST:`#757575`,Trade:`#7f5347`,HS:`#ff6d3b`,ORIGIN:`#ff7575`,HAZWASTE:`#faa1f1`,TEMP:`#ffadad`,SLED:`#7e3b8a`,CALIB:`#9aadbd`,CONTENT:`#74afcc`,PROMO:`#225091`,PRICEGOV:`#4eccc6`,REBATE:`#5559df`,SECURITY:`#401694`,PRIVACY:`#563e3e`,DOCS:`#bda8f9`,KPI:`#216edf`,"Order Confirmed":`#fdab3d`,"Customer Won/ PO Received":`#00c875`,"Deal Lost":`#df2f4a`,Negotiation:`#007eb5`,"Quote In Progress":`#9d50dd`,"Negotiation Failed":`#bb3354`,"Sales Quote Released":`#579bfc`,"Order Created":`#cab641`,"Deal Closing":`#ffcb00`,"Order Reopen":`#4eccc6`,"Quote Reopen":`#037f4c`,Escalation:`#df2f4a`,SLA:`#a9bee8`},Y=e=>Xt[e]||`#c4c4c4`,Zt=s(((e,t)=>{t.exports={convertToArrayIfNeeded:e=>Array.isArray(e)?e:[e],isBrowser:typeof window<`u`&&window.document!==void 0}})),Qt=s(((e,t)=>{function n(){return typeof process<`u`}function r(){return n()&&!1}var i=(e,t)=>r()&&{}[e]!==`undefined`&&{}[e]!==void 0?{}[e]:t,a=()=>i(`MONDAY_COM_PROTOCOL`,`https`),o=()=>i(`MONDAY_COM_DOMAIN`,`monday.com`),s=()=>i(`MONDAY_SUBDOMAIN_API`,`api.`),c=()=>i(`MONDAY_OAUTH_SUBDOMAIN`,`auth.`),l=()=>`${a()}://${s()}${o()}/v2`,u=()=>`${a()}://${c()}${o()}/oauth2/authorize`,d=()=>`${a()}://${c()}${o()}/oauth2/token`;t.exports={REPORT_TIME_PHASES:{LOAD:`load`,INTERACTIVE:`interactive`},get MONDAY_DOMAIN(){return o()},get MONDAY_PROTOCOL(){return a()},get MONDAY_API_URL(){return l()},get MONDAY_OAUTH_URL(){return u()},get MONDAY_OAUTH_TOKEN_URL(){return d()}}})),$t=s(((e,t)=>{var n=function(){if(typeof self<`u`)return self;if(typeof window<`u`)return window;if(typeof global<`u`)return global;throw Error(`unable to locate global object`)}();t.exports=e=n.fetch,n.fetch&&(e.default=n.fetch.bind(n)),e.Headers=n.Headers,e.Request=n.Request,e.Response=n.Response})),en=s(((e,t)=>{var n=$t();function r(e,t={}){return n(e,t)}t.exports={nodeFetch:r}})),tn=s(((e,t)=>{var{MONDAY_API_URL:n,MONDAY_OAUTH_TOKEN_URL:r}=Qt(),i=en(),a=`Could not parse JSON from monday.com's GraphQL API response`,o=`Token is required`,s=`Received timeout from monday.com's GraphQL API`;function c(e,t,n,r={}){return i.nodeFetch(e,{method:r.method||`POST`,body:JSON.stringify(t||{}),headers:{Authorization:n,"Content-Type":`application/json`,...r.apiVersion?{"API-Version":r.apiVersion}:{}}})}async function l(e,t,i={}){if(!t&&i.url!==r)throw Error(o);let l=await c(`${i.url||n}${i.path||``}`,e,t,i),u=l.status,d=l.headers.get(`content-type`);if(!d||!d.includes(`application/json`)){if(u===504)throw Error(s);let e=await l.text();throw Error(e)}try{return await l.json()}catch{throw Error(a)}}t.exports={execute:l,COULD_NOT_PARSE_JSON_RESPONSE_ERROR:a,TOKEN_IS_REQUIRED_ERROR:o,API_TIMEOUT_ERROR:s}})),nn=s(((e,t)=>{t.exports=tn()})),rn=s(((e,t)=>{var n=!1;function r(){if(n)return;n=!0;let e=document.createElement(`style`);e.appendChild(document.createTextNode(`body::before { content: ""; position: fixed; top: 0; right: 0; bottom: 0; left: 0; pointer-events: none; z-index: 2147483647; /* mondaySdk css - can be disabled with: mondaySdk({withoutScrollHelper: true }) */ }`)),(document.head||document.getElementsByTagName(`head`)[0]).appendChild(e)}t.exports={initScrollHelperIfNeeded:r}})),an=s(((e,t)=>{var n=!1;t.exports={initBackgroundTracking:e=>{if(n)return;n=!0;let t=()=>{e.track(`ping`)};t(),setInterval(t,3e5)}}})),on=s(((e,t)=>{t.exports={logWarnings:e=>{let t=e&&e.extensions&&e.extensions.warnings;return!t||!Array.isArray(t)||t.forEach(e=>{if(!(!e||!e.message))try{let t=e.locations&&e.locations.map(e=>`line ${e.line}, column ${e.column}`).join(`; `),n=e.path&&e.path.join(` → `),r=e.message;r=r.replace(/\.$/,``),r=r.charAt(0).toLowerCase()+r.slice(1);let i=[`[monday API]`,`${n}:`,r,t&&`@ ${t}`,e.extensions?[`

Additional details:`,e.extensions]:void 0].flat().filter(Boolean);console.warn(...i)}catch{e&&console.warn(`[monday API] Warning:`,e)}}),e}}})),sn=c({author:()=>pn,default:()=>vn,dependencies:()=>hn,devDependencies:()=>gn,files:()=>mn,license:()=>`MIT`,main:()=>dn,name:()=>cn,repository:()=>un,scripts:()=>_n,types:()=>fn,version:()=>ln}),cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn=o((()=>{cn=`monday-sdk-js`,ln=`0.5.9`,un=`https://github.com/mondaycom/monday-sdk-js`,dn=`src/index.js`,fn=`types/index.d.ts`,pn=`talharamati <tal@monday.com>`,mn=[`LICENSE`,`README.md`,`dist/`,`src/`,`types/`,`server-sdk.js`],hn={"node-fetch":`^2.6.0`},gn={"@babel/cli":`^7.6.0`,"@babel/core":`^7.6.0`,"@babel/node":`^7.6.1`,"@babel/preset-env":`^7.6.0`,"@babel/preset-react":`^7.0.0`,"@babel/register":`^7.6.0`,"@types/source-map":`^0.5.2`,"babel-loader":`^8.0.6`,chai:`^4.2.0`,eslint:`^6.8.0`,jsdom:`^16.2.0`,mocha:`^7.1.0`,prettier:`^1.19.1`,sinon:`^9.0.0`,"sinon-chai":`^3.5.0`,typescript:`^4.9.5`,webpack:`^4.38.0`,"webpack-cli":`^3.3.6`,"webpack-dev-server":`^3.7.2`},_n={start:`webpack-dev-server`,build:`webpack --mode=production --env.WEBPACK_BUILD=true`,test:`mocha './src/**/*-test.js'`,"test:watch":`mocha './src/**/*-test.js' --watch`,precommit:`yarn lint && yarn style-check`,lint:`eslint './src/**/*.*'`,"style-check":`prettier --check './src/**/*.js'`,"style-fix":`prettier --write './src/**/*.js'`,"compile-types":`tsc --noEmit`},vn={name:cn,version:ln,private:!1,repository:un,main:dn,types:fn,author:pn,license:`MIT`,files:mn,dependencies:hn,devDependencies:gn,scripts:_n}})),bn=s(((e,t)=>{var n=nn(),{MONDAY_OAUTH_URL:r,REPORT_TIME_PHASES:i}=Qt(),{convertToArrayIfNeeded:a}=Zt(),{initScrollHelperIfNeeded:o}=rn(),{initBackgroundTracking:s}=an(),{logWarnings:c}=on(),l=[],u={GLOBAL:`v2`,INSTANCE:`instance`},f=class{constructor(e={}){this._clientId=e.clientId,this._apiToken=e.apiToken,this._apiVersion=e.apiVersion,this.listeners={},this.setClientId=this.setClientId.bind(this),this.setToken=this.setToken.bind(this),this.setApiVersion=this.setApiVersion.bind(this),this.api=this.api.bind(this),this.listen=this.listen.bind(this),this.get=this.get.bind(this),this.set=this.set.bind(this),this.execute=this.execute.bind(this),this.reportTime=this.reportTime.bind(this),this.oauth=this.oauth.bind(this),this._receiveMessage=this._receiveMessage.bind(this),this.storage={setItem:this.setStorageItem.bind(this),getItem:this.getStorageItem.bind(this),deleteItem:this.deleteStorageItem.bind(this),instance:{setItem:this.setStorageInstanceItem.bind(this),getItem:this.getStorageInstanceItem.bind(this),deleteItem:this.deleteStorageInstanceItem.bind(this)}},window.addEventListener(`message`,this._receiveMessage,!1),e.withoutScrollHelper||o(),s(this)}setClientId(e){this._clientId=e}setToken(e){this._apiToken=e}setApiVersion(e){this._apiVersion=e}api(e,t={}){console.warn(`[DEPRECATION WARNING] monday.api() is deprecated and will be removed in version 1.0.0.
Use the official @mondaydotcomorg/api package instead: https://www.npmjs.com/package/@mondaydotcomorg/api`);let r={query:e,variables:t.variables},i=t.token||this._apiToken,a=t.apiVersion||this._apiVersion,o;return o=i?n.execute(r,i,{apiVersion:a}):this._localApi(`api`,{params:r,apiVersion:a}).then(e=>e.data),o.then(c)}listen(e,t,n){let r=a(e);r.includes(`itemIds`)&&console.warn(`[DEPRECATION WARNING] monday.listen('itemIds') is deprecated and considered legacy. Avoid using it in new code.
Use the API to fetch item IDs instead: https://developer.monday.com/apps/docs/mondaylisten#for-large-boards-fetch-all-filtered-item-ids-via-the-api`);let i=[];return r.forEach(e=>{i.push(this._addListener(e,t)),this._localApi(`listen`,{type:e,params:n})}),()=>{i.forEach(e=>e())}}get(e,t){return this._localApi(`get`,{type:e,params:t})}set(e,t){return this._localApi(`set`,{type:e,params:t})}execute(e,t){return this._localApi(`execute`,{type:e,params:t})}track(e,t){return this.execute(`track`,{name:e,data:t})}reportTime(e,t={}){if(!Object.values(i).includes(e))return;let n={phase:e,...t},r={memoryMetrics:this._collectMemoryMetrics()};return e===i.LOAD&&(r.resourceMetrics=this._collectResourceMetrics()),n.sdkPerformanceMetrics=r,this.execute(`reportTime`,n)}_collectMemoryMetrics(){let e=typeof performance<`u`&&performance.memory;return e?{usedJSHeapSize:e.usedJSHeapSize,totalJSHeapSize:e.totalJSHeapSize,jsHeapSizeLimit:e.jsHeapSizeLimit}:null}_collectResourceMetrics(){if(typeof performance>`u`)return null;let e=performance.getEntriesByType(`resource`),t=``;try{t=new URL(e[0].name).origin}catch{}return e.map(e=>({name:t?e.name.replace(t,``):e.name,tsSize:e.transferSize,encSize:e.encodedBodySize,dur:Math.round(e.duration)}))}oauth(e={}){let t=e.clientId||this._clientId;if(!t)throw Error(`clientId is required`);let n=`${e.mondayOauthUrl||r}?client_id=${t}`;window.location=n}setStorageItem(e,t,n={}){return this._localApi(`storage`,{method:`set`,key:e,value:t,options:n,segment:u.GLOBAL})}getStorageItem(e,t={}){return this._localApi(`storage`,{method:`get`,key:e,options:t,segment:u.GLOBAL})}deleteStorageItem(e,t={}){return this._localApi(`storage`,{method:`delete`,key:e,options:t,segment:u.GLOBAL})}setStorageInstanceItem(e,t,n={}){return this._localApi(`storage`,{method:`set`,key:e,value:t,options:n,segment:u.INSTANCE})}getStorageInstanceItem(e,t={}){return this._localApi(`storage`,{method:`get`,key:e,options:t,segment:u.INSTANCE})}deleteStorageInstanceItem(e,t={}){return this._localApi(`storage`,{method:`delete`,key:e,options:t,segment:u.INSTANCE})}_localApi(e,t){return new Promise((n,r)=>{let i=this._generateRequestId(),a=this._clientId,o=(yn(),d(sn).default).version;window.parent.postMessage({method:e,args:t,requestId:i,clientId:a,version:o},`*`);let s=this._addListener(i,e=>{if(s(),e.errorMessage){let t=Error(e.errorMessage);t.data=e.data,r(t)}else n(e)})})}_receiveMessage(e){let{method:t,type:n,requestId:r}=e.data,i=this.listeners[t]||l,a=this.listeners[n]||l,o=this.listeners[r]||l,s=new Set([...i,...a,...o]);s&&s.forEach(t=>{try{t(e.data)}catch(e){console.error(`Message callback error: `,e)}})}_addListener(e,t){return this.listeners[e]=this.listeners[e]||new Set,this.listeners[e].add(t),()=>{this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]}}_generateRequestId(){return Math.random().toString(36).substring(2,9)}_removeEventListener(){window.removeEventListener(`message`,this._receiveMessage,!1)}_clearListeners(){this.listeners=[]}};function p(e={}){return new f(e)}t.exports=p})),xn=s(((e,t)=>{var{execute:n}=nn(),{MONDAY_OAUTH_TOKEN_URL:r}=Qt();t.exports={oauthToken:(e,t,i)=>n({code:e,client_id:t,client_secret:i},null,{url:r})}})),Sn=s(((e,t)=>{var{logWarnings:n}=on(),r=nn(),{oauthToken:i}=xn(),a=`Should send 'token' as an option or call mondaySdk.setToken(TOKEN)`,o=class{constructor(e={}){console.warn(`[DEPRECATION WARNING] The monday-sdk-js server SDK is deprecated and will be removed in version 1.0.0.
The 'api()' method for GraphQL queries should be replaced with the official @mondaydotcomorg/api package: https://www.npmjs.com/package/@mondaydotcomorg/api
For more information, visit: https://developer.monday.com/api-reference/docs/api-sdk`),this._token=e.token,this._apiVersion=e.apiVersion,this.setToken=this.setToken.bind(this),this.setApiVersion=this.setApiVersion.bind(this),this.api=this.api.bind(this)}setToken(e){this._token=e}setApiVersion(e){this._apiVersion=e}api(e,t={}){let i={query:e,variables:t.variables},o=t.token||this._token,s=t.apiVersion||this._apiVersion;if(!o)throw Error(a);return r.execute(i,o,{apiVersion:s}).then(n)}oauthToken(e,t,n){return i(e,t,n)}};function s(e={}){return new o(e)}t.exports=s})),Cn=(e=>{let t=e;for(let e=0;e<3&&t&&typeof t!=`function`;e+=1)t=t.default;if(typeof t!=`function`)throw Error(`monday-sdk-js did not export a callable initialiser.`);return t})(u(s(((e,t)=>{var{isBrowser:n}=Zt(),r=n?bn():Sn();(function(n,r){typeof define==`function`&&define.amd?define(r):typeof e==`object`?t.exports=r():n&&=r()})(typeof self<`u`?self:e,function(){return typeof __BUNDLE__<`u`&&__BUNDLE__&&(window.mondaySdk=r),r})}))(),1))();if(typeof Cn.api!=`function`)throw Error(`monday-sdk-js client has no .api() — install monday-sdk-js@^0.5.9, not 1.0.0-beta.`);var X=e=>JSON.stringify(String(e??``));async function wn(e,t){let n=await Cn.api(e,t?{variables:t}:void 0);if(n?.errors?.length)throw Error(n.errors.map(e=>e.message).join(`; `));if(n?.error_message)throw Error(n.error_message);return n.data}
// Comment Builder: data layer (v4).
// build.py swaps this file into the v2 bundle in place of its original Tn/En/Dn/On functions.
// Relies on the bundle's `wn(query, variables)` helper (monday.api wrapper that throws on GraphQL errors).

// One entry per workspace, keyed by its Deals board ID. The app picks the entry for the board it is opened on.
var DCL_ENVS = {
  // Netgains Sandbox (original)
  "5094120922": {
    name: `Netgains Sandbox`,
    leadBoard: `5094120770`, // Qualified Warm Lead Board
    leadsBoard: { id: `5097679090`, label: `Sandbox Leads Comments` },
    commentsBoard: { id: `5097679207`, label: `Sandbox Comments` },
  },
  // Netgains Dev Sandbox (copy of the above; column IDs assumed identical)
  "5099245981": {
    name: `Netgains Dev Sandbox`,
    leadBoard: `5099246029`, // Lead Qualification Board (Dev)
    // Other boards with the tab (SQL, Opportunity, the 4 Lead data boards): comments go to Leads Comments,
    // linked through its "Comment source" connect column.
    sourceBoards: [`5100294110`, `5099246016`, `5099245930`, `5099245948`, `5099245938`, `5099245967`, `5106281544`], // + 🟢Warm Lead Mining Board🟢 (Copy)
    // Boards whose comments are NOT linked to the item; only the Source Board / Source Status text says where they came from.
    // unlinkedBoards → Leads Comments; customerBoards (the active customer workflow) → Sandbox Comments.
    unlinkedBoards: [
      `5099246051`, // Lead Generation Board (Dev)
      `5099245977`, // V2 Sandbox Shipping & Fulfilment (dev)
    ],
    customerBoards: [
      `5099246246`, // ✅ (Dev) Sandbox Kontakte (Contacts)
      `5099246109`, // ✅ (Dev) Sandbox Kunden (customers)
      `5099246214`, // ✅ V3 (Dev) Sandbox Email Address Master Board
      `5099246179`, // ✅ (Dev) Sandbox Address Master Board
    ],
    sourceLinkCol: `board_relation_mm8c72kx`,
    leadsBoard: { id: `5099245971`, label: `Sandbox Leads Comments (dev)` },
    commentsBoard: { id: `5099246381`, label: `Sandbox Comments (dev)` },
    // Column IDs that differ from the original boards (checked 22 Oct 2026), plus the "Source Board" / "Source Status" text columns.
    boardCols: {
      "5099245971": { sourceBoard: `text_mm8crwmz`, sourceStatus: `text_mm8ccqwj` },
      "5099246381": { sourceBoard: `text_mm89jz79`, sourceStatus: `text_mm8c5dc1`, transcript: `text_mm5j655k`, escalation: `color_mm5jagza` },
    },
  },
};

var DCL_WON_STAGE = /customer won/i; // Deal Stage label "Customer Won/ PO Received"

// Columns on the Deals item (same IDs in both workspaces).
var DCL_DEAL_COLS = {
  leadLink: `board_relation_mm1z3d4k`, // Sandbox Lead Qualification Board
};

// Column IDs differ between the two kinds of comment board.
var DCL_LEADS_COLS = {
  comment: `long_text_mkw2gd7g`,
  dateOfComment: `date4`,
  escalation: `color_mm3yrx1m`,
  transcript: `link_mm3yzbbw`,
  transcriptIsLink: true,
  nextStep: `color_mm3xvsq4`,
  categories: `color_mm33dxbw`,
  mainCategory: `color_mm33mzct`,
  subCategory: `color_mm338v9v`,
  dueDate: `date_mm3xgp56`,
  linkToDeal: `board_relation_mm3x67yf`,
  linkToLead: `board_relation_mm3xkrqc`, // "Sandbox Lead Qualification Board"
};
var DCL_COMMENTS_COLS = {
  comment: `long_text_mkw2gd7g`,
  dateOfComment: `date4`,
  escalation: `color_mm5jzt3a`,
  transcript: `text_mm5jx42z`,
  transcriptIsLink: false,
  nextStep: `color_mm3xvsq4`,
  categories: `color_mm33dxbw`,
  mainCategory: `color_mm33mzct`,
  subCategory: `color_mm338v9v`,
  dueDate: `date_mm3ye7y5`,
  linkToDeal: `board_relation_mm3x4wbq`,
};

// Every comment board, by board ID: { label, cols }.
var DCL_BOARDS = {};
Object.values(DCL_ENVS).forEach(env => {
  let extra = id => (env.boardCols || {})[id] || {};
  DCL_BOARDS[env.leadsBoard.id] = { label: env.leadsBoard.label, cols: { ...DCL_LEADS_COLS, ...extra(env.leadsBoard.id) } };
  DCL_BOARDS[env.commentsBoard.id] = { label: env.commentsBoard.label, cols: { ...DCL_COMMENTS_COLS, ...extra(env.commentsBoard.id) } };
});

// Lead boards, by board ID → the environment (workspace) they belong to.
var DCL_LEAD_BOARDS = {};
Object.values(DCL_ENVS).forEach(env => env.leadBoard && (DCL_LEAD_BOARDS[env.leadBoard] = env));

// Source boards (see sourceBoards) → their environment; comment boards → their environment.
// Unlinked boards → the comment board their comments go to (see unlinkedBoards / customerBoards).
var DCL_SOURCE_BOARDS = {}, DCL_UNLINKED_BOARDS = {}, DCL_COMMENT_ENVS = {};
Object.values(DCL_ENVS).forEach(env => {
  (env.sourceBoards || []).forEach(id => (DCL_SOURCE_BOARDS[id] = env));
  (env.unlinkedBoards || []).forEach(id => ((DCL_SOURCE_BOARDS[id] = env), (DCL_UNLINKED_BOARDS[id] = env.leadsBoard.id)));
  (env.customerBoards || []).forEach(id => ((DCL_SOURCE_BOARDS[id] = env), (DCL_UNLINKED_BOARDS[id] = env.commentsBoard.id)));
  DCL_COMMENT_ENVS[env.leadsBoard.id] = env;
  DCL_COMMENT_ENVS[env.commentsBoard.id] = env;
});

// Environment for a Deals board, a lead board or a source board.
function dclEnvFor(board) {
  let id = String(board?.id);
  let env = DCL_ENVS[id] || DCL_LEAD_BOARDS[id] || DCL_SOURCE_BOARDS[id];
  if (!env) throw Error(`Comment Builder is not set up for the board "${board?.name || board?.id}". No comment will be saved.`);
  return env;
}

// Routing rule for deals: Deal Stage "Customer Won/ PO Received" → Sandbox Comments, every other stage → Sandbox Leads Comments.
function dclPickBoard(env, stage) {
  return DCL_WON_STAGE.test(stage || ``) ? env.commentsBoard.id : env.leadsBoard.id;
}

// Load the deal for this item view. On a Deals item that's the item itself. On a comment-board item (Sandbox Comments,
// Sandbox Leads Comments…) it's the deal the comment is linked to, so the tab shows the same full interface there.
async function Tn(e) {
  let first = (await wn(`
    query ($itemId: [ID!]) {
      items (ids: $itemId) {
        id
        name
        board { id name }
        column_values (types: [board_relation]) { id ... on BoardRelationValue { linked_item_ids } }
      }
    }
  `, { itemId: [String(e)] }))?.items?.[0];
  if (!first) throw Error(`Item ${e} could not be loaded.`);
  if (DCL_LEAD_BOARDS[String(first.board?.id)]) return dclLoadLead(e);
  if (DCL_SOURCE_BOARDS[String(first.board?.id)]) return dclLoadSource(e);
  let commentBoard = DCL_BOARDS[String(first.board?.id)];
  if (!commentBoard) return dclLoadDeal(e);
  let linked = col => (col ? first.column_values.find(c => c.id === col)?.linked_item_ids?.[0] : null);
  let cEnv = DCL_COMMENT_ENVS[String(first.board?.id)];
  let srcCol = String(first.board?.id) === cEnv?.leadsBoard.id ? cEnv?.sourceLinkCol : null;
  let dealId = linked(commentBoard.cols.linkToDeal), leadId = linked(commentBoard.cols.linkToLead), sourceId = linked(srcCol);
  if (!dealId && !leadId && !sourceId) throw Error(`This comment on "${first.board?.name}" isn't linked to a deal, lead or source item yet. Link it to see that item here.`);
  let target = dealId ? await dclLoadDeal(dealId) : leadId ? await dclLoadLead(leadId) : await dclLoadSource(sourceId);
  target.openedFrom = { boardName: first.board?.name || commentBoard.label, itemName: first.name, itemId: first.id };
  return target;
}

// Load an item from a source board (SQL, Opportunity, Lead data boards). Comments go to Leads Comments, linked through
// the environment's "Comment source" column.
async function dclLoadSource(e) {
  let t = (await wn(`
    query ($itemId: [ID!]) {
      items (ids: $itemId) {
        id
        name
        board { id name }
        column_values (types: [status, people, text]) { id type text column { title } }
      }
    }
  `, { itemId: [String(e)] }))?.items?.[0];
  if (!t) throw Error(`Item ${e} could not be loaded.`);
  let env = dclEnvFor(t.board);
  let unlinkedTarget = DCL_UNLINKED_BOARDS[String(t.board?.id)];
  let target = unlinkedTarget || env.leadsBoard.id;
  if (!unlinkedTarget && !env.sourceLinkCol) throw Error(`Comment Builder can't link comments to "${t.board?.name}" yet. No comment will be saved.`);
  let cv = t.column_values || [];
  let byTitle = re => cv.find(c => re.test(c.column?.title || ``))?.text || ``;
  let stage = cv.find(c => c.id === `status`)?.text || byTitle(/stage|status/i) || cv.find(c => c.type === `status` && c.text)?.text || ``;
  return {
    id: t.id,
    name: t.name,
    kind: `source`,
    boardId: t.board?.id,
    boardName: t.board?.name || ``,
    envName: env.name,
    stage,
    owner: byTitle(/owner/i) || cv.find(c => c.type === `people` && c.text)?.text || ``,
    dealId: byTitle(/^(lead|opportunity|deal|customer|kunden)\s*(id|nr|nummer|no\.?)$/i),
    value: ``,
    leadNo: ``,
    leadIds: [],
    leads: [],
    noLink: !!unlinkedTarget,
    linkCol: unlinkedTarget ? null : env.sourceLinkCol,
    targetBoardId: target,
    targetLabel: DCL_BOARDS[target].label,
  };
}

// Load a lead (Lead Qualification board item). Comments on leads always go to Sandbox Leads Comments, linked to the lead.
async function dclLoadLead(e) {
  let t = (await wn(`
    query ($itemId: [ID!]) {
      items (ids: $itemId) {
        id
        name
        board { id name }
        column_values (types: [status, people, text]) { id text column { title } }
      }
    }
  `, { itemId: [String(e)] }))?.items?.[0];
  if (!t) throw Error(`Lead item ${e} could not be loaded.`);
  let env = dclEnvFor(t.board);
  let cv = t.column_values || [];
  let byTitle = re => cv.find(c => re.test(c.column?.title || ``))?.text || ``;
  let stage = cv.find(c => c.id === `status`)?.text || byTitle(/lead stage|lifecycle/i);
  return {
    id: t.id,
    name: t.name,
    kind: `lead`,
    boardId: t.board?.id,
    boardName: t.board?.name || ``,
    envName: env.name,
    stage,
    owner: byTitle(/owner/i),
    dealId: byTitle(/^lead id$/i),
    value: ``,
    leadNo: ``,
    leadIds: [String(t.id)],
    leads: [{ id: t.id, name: t.name, status: stage }],
    targetBoardId: env.leadsBoard.id,
    targetLabel: DCL_BOARDS[env.leadsBoard.id].label,
  };
}

// Load a deal (and its linked leads); its Deal Stage decides the target board (see dclPickBoard).
async function dclLoadDeal(e) {
  let t = (await wn(`
    query ($itemId: [ID!]) {
      items (ids: $itemId) {
        id
        name
        board { id name }
        column_values (ids: ["status", "person", "text_mm25rpgg", "text_mm1g2vs2", "text_mm3q51dx", "${DCL_DEAL_COLS.leadLink}"]) {
          id
          text
          ... on BoardRelationValue { linked_item_ids }
        }
      }
    }
  `, { itemId: [String(e)] }))?.items?.[0];
  if (!t) throw Error(`Deal item ${e} could not be loaded.`);
  let env = dclEnvFor(t.board);
  let n = Object.fromEntries(t.column_values.map(c => [c.id, c.text]));
  let leadCol = t.column_values.find(c => c.id === DCL_DEAL_COLS.leadLink);
  if (!leadCol) throw Error(`The lead link column was not found on "${t.board?.name}". No comment will be saved.`);
  let leadIds = (leadCol.linked_item_ids || []).map(String);
  let leads = [];
  if (leadIds.length) {
    leads = ((await wn(`
      query ($ids: [ID!]) {
        items (ids: $ids, limit: 100) {
          id
          name
          column_values (ids: ["status"]) { text }
        }
      }
    `, { ids: leadIds }))?.items || []).map(l => ({ id: l.id, name: l.name, status: l.column_values?.[0]?.text || `` }));
  }
  let target = dclPickBoard(env, n.status);
  return {
    id: t.id,
    name: t.name,
    boardId: t.board?.id,
    boardName: t.board?.name || ``,
    envName: env.name,
    stage: n.status || ``,
    owner: n.person || ``,
    dealId: n.text_mm25rpgg || ``,
    value: n.text_mm1g2vs2 || ``,
    leadNo: n.text_mm3q51dx || ``,
    leadIds,
    leads,
    targetBoardId: target,
    targetLabel: DCL_BOARDS[target].label,
  };
}

// "Saves as" preview: the item is named after the deal (customer), not the comment.
function En(e, t, d) {
  return `${t || `Deal`}${d?.targetLabel ? ` → ${d.targetLabel}` : ``}`;
}

// Create the comment item on the board chosen for this deal.
async function Dn({ form: e, deal: t }) {
  let b = DCL_BOARDS[t.targetBoardId];
  let c = b.cols;
  let n = {
    [c.comment]: e.comment,
    [c.dateOfComment]: { date: e.dateOfComment },
  };
  if (t.linkCol) {
    n[t.linkCol] = { item_ids: [String(t.id)] };
  } else if (t.noLink) {
    // Unlinked board: the Source Board / Source Status text below says where the comment came from.
  } else if (t.kind === `lead`) {
    if (!c.linkToLead) throw Error(`${b.label} has no column to link a comment to a lead.`);
    n[c.linkToLead] = { item_ids: [String(t.id)] };
  } else {
    n[c.linkToDeal] = { item_ids: [String(t.id)] };
  }
  if (e.escalation) n[c.escalation] = { label: e.escalation };
  if (e.nextStep) n[c.nextStep] = { label: e.nextStep };
  if (e.categories) n[c.categories] = { label: e.categories };
  if (e.mainCategory) n[c.mainCategory] = { label: e.mainCategory };
  if (e.subCategory) n[c.subCategory] = { label: e.subCategory };
  if (e.dueDate) n[c.dueDate] = { date: e.dueDate };
  // Where the comment came from, as plain text (a connect column can only show the item's name).
  if (c.sourceBoard && t.boardName) n[c.sourceBoard] = t.boardName;
  if (c.sourceStatus && t.stage) n[c.sourceStatus] = t.stage;
  if (e.transcript?.trim()) {
    n[c.transcript] = c.transcriptIsLink ? { url: e.transcript.trim(), text: `AI Transcript` } : e.transcript.trim();
  }
  let created = (await wn(`
    mutation ($boardId: ID!, $groupId: String!, $itemName: String!, $columnValues: JSON!) {
      create_item (
        board_id: $boardId,
        group_id: $groupId,
        item_name: $itemName,
        column_values: $columnValues,
        create_labels_if_missing: false
      ) { id name }
    }
  `, { boardId: t.targetBoardId, groupId: `topics`, itemName: t.name || `Deal`, columnValues: JSON.stringify(n) })).create_item;
  return { ...created, boardLabel: b.label };
}

// Items on `boardId` whose connect column `columnId` links to `itemId`. Uses monday's filter when available,
// otherwise scans the newest 500 items of the board.
async function dclFindLinked(boardId, columnId, itemId) {
  try {
    let d = await wn(`
      query ($b: [ID!], $col: ID!, $v: CompareValue!) {
        boards (ids: $b) { items_page (limit: 200, query_params: { rules: [{ column_id: $col, compare_value: $v, operator: any_of }] }) { items { id } } }
      }
    `, { b: [String(boardId)], col: columnId, v: [Number(itemId)] });
    return (d?.boards?.[0]?.items_page?.items || []).map(i => String(i.id));
  } catch {}
  try {
    let d = await wn(`
      query ($b: [ID!]) {
        boards (ids: $b) { items_page (limit: 500) { items { id column_values (ids: ["${columnId}"]) { ... on BoardRelationValue { linked_item_ids } } } } }
      }
    `, { b: [String(boardId)] });
    return (d?.boards?.[0]?.items_page?.items || [])
      .filter(i => (i.column_values?.[0]?.linked_item_ids || []).map(String).includes(String(itemId)))
      .map(i => String(i.id));
  } catch {
    return [];
  }
}

// History: every item linked to the deal (two-way connect columns) that sits on this workspace's comment boards.
// Board-relation `value` is always null in the current API; linked_item_ids is the reliable field.
async function On(e, extra = []) {
  let d = (await wn(`
    query ($itemId: [ID!]) {
      items (ids: $itemId) {
        board { id name }
        column_values (types: [board_relation]) {
          ... on BoardRelationValue { linked_item_ids }
        }
      }
    }
  `, { itemId: [String(e)] }))?.items?.[0];
  if (!d) return [];
  let env = dclEnvFor(d.board);
  let envBoards = [env.leadsBoard.id, env.commentsBoard.id];
  let leadLinked = DCL_LEAD_BOARDS[String(d.board?.id)]
    ? await dclFindLinked(env.leadsBoard.id, DCL_LEADS_COLS.linkToLead, e)
    : DCL_SOURCE_BOARDS[String(d.board?.id)] && !DCL_UNLINKED_BOARDS[String(d.board?.id)] && env.sourceLinkCol
      ? await dclFindLinked(env.leadsBoard.id, env.sourceLinkCol, e)
      : [];
  let ids = [...new Set([...(d.column_values || []).flatMap(c => c.linked_item_ids || []), ...leadLinked, ...extra].map(String))];
  let items = [];
  for (let i = 0; i < ids.length; i += 100) {
    let page = (await wn(`
      query ($ids: [ID!]) {
        items (ids: $ids, limit: 100) {
          id
          name
          created_at
          creator { id name email }
          board { id }
          column_values {
            id
            text
            ... on BoardRelationValue { linked_items { id name board { id name } } }
          }
        }
      }
    `, { ids: ids.slice(i, i + 100) }))?.items || [];
    items.push(...page);
  }
  return items
    .filter(it => envBoards.includes(String(it.board?.id)))
    .map(it => {
      let b = DCL_BOARDS[it.board.id];
      let c = b.cols;
      let v = Object.fromEntries(it.column_values.map(x => [x.id, x.text || ``]));
      // Origin = the deal or lead this comment was logged on (a lead link wins, as lead comments only link to the lead).
      let linkedOf = col => (col ? it.column_values.find(x => x.id === col)?.linked_items?.[0] : null);
      let srcCol = String(it.board.id) === env.leadsBoard.id ? env.sourceLinkCol : null;
      let origin = linkedOf(srcCol) || linkedOf(c.linkToLead) || linkedOf(c.linkToDeal);
      return {
        id: it.id,
        name: it.name,
        createdAt: it.created_at,
        boardLabel: b.label,
        author: it.creator?.name || ``,
        authorEmail: it.creator?.email || ``,
        originBoard: origin?.board?.name || ``,
        originItem: origin?.name || ``,
        comment: v[c.comment] || ``,
        date: v[c.dateOfComment] || ``,
        escalation: v[c.escalation] || ``,
        nextStep: v[c.nextStep] || ``,
        categories: v[c.categories] || ``,
        mainCategory: v[c.mainCategory] || ``,
        subCategory: v[c.subCategory] || ``,
      };
    })
    .filter(x => x.comment.trim())
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

var kn=0;Array.isArray;function Z(e,t,n,r,i,a){t||={};var o,s,c=t;if(`ref`in c)for(s in c={},t)s==`ref`?o=t[s]:c[s]=t[s];var l={type:e,props:c,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--kn,__i:-1,__u:0,__source:i,__self:a};if(typeof e==`function`&&(o=e.defaultProps))for(s in o)c[s]===void 0&&(c[s]=o[s]);return p.vnode&&p.vnode(l),l}var An=()=>new Date().toISOString().slice(0,10),jn=()=>({comment:``,dateOfComment:An(),escalation:``,transcript:``,nextStep:``,categories:``,mainCategory:``,subCategory:``,dueDate:``});function Q({label:e,required:t,hint:n,children:r}){return Z(`div`,{className:`field`,role:`group`,"aria-label":e,children:[Z(`span`,{className:`field-label`,children:[e,t&&Z(`span`,{className:`req`,"aria-hidden":`true`,children:`*`}),n&&Z(`span`,{className:`hint`,children:n})]}),r]})}function Mn({options:e,value:t,onChange:n,columns:r=`auto`}){return Z(`div`,{className:`chips chips-${r}`,role:`group`,children:[e.map(e=>{let r=t===e;return Z(`button`,{type:`button`,className:`chip${r?` chip-active`:``}`,style:r?{background:Y(e),borderColor:Y(e)}:void 0,"aria-pressed":r,onClick:()=>n(r?``:e),children:[!r&&Z(`span`,{className:`chip-dot`,style:{background:Y(e)}}),e]},e)}),t&&Z(`button`,{type:`button`,className:`chip chip-clear`,onClick:()=>n(``),children:`Clear`})]})}function Nn({options:e,value:t,onChange:n,placeholder:r}){let[i,a]=H(!1),[o,s]=H(``),c=G(()=>{let t=o.trim().toLowerCase();return t?e.filter(e=>e.toLowerCase().includes(t)):e},[e,o]);return Z(`div`,{className:`select${i?` select-open`:``}`,children:[Z(`button`,{type:`button`,className:`select-trigger`,onClick:()=>{a(e=>!e),s(``)},children:[t?Z(`span`,{className:`select-value`,children:[Z(`span`,{className:`chip-dot`,style:{background:Y(t)}}),t]}):Z(`span`,{className:`select-placeholder`,children:r}),Z(`span`,{className:`select-caret`,children:`▾`})]}),t&&Z(`button`,{type:`button`,className:`select-clear`,"aria-label":`Clear selection`,onClick:()=>n(``),children:`×`}),i&&Z(M,{children:[Z(`div`,{className:`select-backdrop`,onClick:()=>a(!1)}),Z(`div`,{className:`select-menu`,children:[Z(`input`,{className:`select-search`,autoFocus:!0,value:o,placeholder:`Search…`,onChange:e=>s(e.target.value)}),Z(`div`,{className:`select-list`,children:[c.length===0&&Z(`div`,{className:`select-empty`,children:`No matches`}),c.map(e=>Z(`button`,{type:`button`,className:`select-option${e===t?` is-selected`:``}`,onClick:()=>{n(e),a(!1)},children:[Z(`span`,{className:`chip-dot`,style:{background:Y(e)}}),e]},e))]})]})]})]})}function $({label:e}){return e?Z(`span`,{className:`pill`,style:{background:Y(e)},children:e}):null}
// Comment Builder (v4): the deal's monday Updates, shown inside the app like monday's Updates tab.
// build.py inserts this file (followed by ui.js) into the v2 bundle in place of its original `function Pn(){…}`.
// Uses the bundle's own helpers: Z (jsx), H (useState), U (useEffect), Re (useCallback), Cn (monday SDK).
// Optional extras (likes, viewers, item e-mail, people for @mentions) are loaded best-effort: if monday refuses
// one of them, that detail is simply hidden and everything else keeps working.

var DCL_ACCOUNT_URL = `https://zvg-group.monday.com`;
// Default "custom" update address monday gives every item: pulse-<item id>@<account>.<region>.monday.com
var DCL_CUSTOM_EMAIL_DOMAIN = `zvg-group.eu.monday.com`;
var DCL_FEEDBACK_URL = `https://forms.monday.com/forms/98e54dc3488d8019915d8c3114c55f47?r=use1`;
var DCL_EMOJIS = `👍 👏 🙌 🎉 ✅ ❌ 🔥 💡 🚀 ⭐ ❤️ 😊 😂 😉 🤔 😮 😢 🙏 👀 💪 📌 📎 📅 ⏰ 📞 ✉️ 💬 ⚠️ ❗ ❓ 👉 💯`.split(` `);

/* ---------- API ---------- */

// Like wn(), but the error message includes monday's details (error code, missing scope, bad field…).
// The SDK rejects with Error(errorMessage) and hides monday's response in `err.data`, so that is surfaced too.
async function dclApi(query, variables) {
  let detail = x => (x ? ` ${JSON.stringify(x).slice(0, 600)}` : ``);
  let r;
  try {
    r = await Cn.api(query, { variables });
  } catch (err) {
    console.error(`[Comment Builder] monday API error`, err, err?.data);
    throw Error(`${err?.message || `monday API error`}${detail(err?.data)}`);
  }
  if (r?.errors?.length) {
    console.error(`[Comment Builder] monday API errors`, r);
    throw Error(r.errors.map(e => `${e.message}${detail(e.extensions)}`).join(`; `));
  }
  if (r?.error_message) {
    console.error(`[Comment Builder] monday API error`, r);
    throw Error(`${r.error_message}${detail(r.error_data || r.error_code)}`);
  }
  return r.data;
}

async function dclTry(fn) {
  try {
    return await fn();
  } catch (err) {
    console.warn(`[Comment Builder] optional detail unavailable:`, err?.message);
    return null;
  }
}

function dclItemVars(itemId) {
  return { itemId: [String(itemId)] };
}

// Tried in order: if monday rejects a field in one shape, the next, simpler shape is used.
var DCL_UPDATE_QUERIES = [
  `query ($itemId: [ID!]) {
    items (ids: $itemId) {
      updates (limit: 50) {
        id
        body
        created_at
        creator { id name photo_thumb_small }
        replies { id body created_at creator { id name photo_thumb_small } }
      }
    }
  }`,
  `query ($itemId: [ID!]) {
    items (ids: $itemId) {
      updates (limit: 50) { id body created_at creator { id name photo_thumb_small } }
    }
  }`,
  `query ($itemId: [ID!]) {
    items (ids: $itemId) {
      updates (limit: 50) { id body created_at creator_id }
    }
  }`,
];

async function dclLoadUpdates(itemId) {
  let errors = [];
  for (let q of DCL_UPDATE_QUERIES) {
    try {
      let updates = (await dclApi(q, dclItemVars(itemId)))?.items?.[0]?.updates || [];
      if (updates.some(u => !(`creator` in u) && u.creator_id)) await dclAttachCreators(updates);
      return updates.map(u => ({ ...u, replies: u.replies || [] }));
    } catch (err) {
      errors.push(err.message);
    }
  }
  throw Error(errors[0] || `Could not load updates.`);
}

// For the minimal query: fill in author name/photo from creator_id (best effort).
async function dclAttachCreators(updates) {
  let ids = [...new Set(updates.map(u => u.creator_id).filter(Boolean).map(String))];
  let byId = {};
  let users = (await dclTry(() => dclApi(`query ($ids: [ID!]) { users (ids: $ids) { id name photo_thumb_small } }`, { ids })))?.users || [];
  users.forEach(u => (byId[String(u.id)] = u));
  updates.forEach(u => (u.creator = u.creator_id ? byId[String(u.creator_id)] || { name: `User ${u.creator_id}` } : null));
}

// Viewer counts and likes per update id: { [id]: { viewers?: n, likes?: [userId…] } }.
async function dclLoadReactions(itemId) {
  let out = {};
  let put = (id, k, v) => (out[id] = { ...(out[id] || {}), [k]: v });
  let [views, likes, pins] = await Promise.all([
    dclTry(() => dclApi(`query ($itemId: [ID!]) { items (ids: $itemId) { updates (limit: 50) { id viewers { user_id } } } }`, dclItemVars(itemId))),
    dclTry(() => dclApi(`query ($itemId: [ID!]) { items (ids: $itemId) { updates (limit: 50) { id likes { id creator_id } } } }`, dclItemVars(itemId))),
    dclTry(() => dclApi(`query ($itemId: [ID!]) { items (ids: $itemId) { updates (limit: 50) { id pinned_to_top { item_id } } } }`, dclItemVars(itemId))),
  ]);
  (views?.items?.[0]?.updates || []).forEach(u => put(u.id, `viewers`, (u.viewers || []).length));
  (likes?.items?.[0]?.updates || []).forEach(u => put(u.id, `likes`, (u.likes || []).map(l => String(l.creator_id))));
  (pins?.items?.[0]?.updates || []).forEach(u => {
    let pt = u.pinned_to_top;
    put(u.id, `pinned`, Array.isArray(pt) ? pt.length > 0 : !!pt);
  });
  return out;
}

// Pin an update to the top of the deal's Updates (or unpin it).
function dclPinUpdate(id, itemId, pinned) {
  let vars = { id: String(id), itemId: String(itemId) };
  return pinned
    ? dclApi(`mutation ($id: ID!, $itemId: ID) { unpin_from_top (id: $id, item_id: $itemId) { id } }`, vars)
    : dclApi(`mutation ($id: ID!, $itemId: ID) { pin_to_top (id: $id, item_id: $itemId) { id } }`, vars);
}

// Calls the app's own server (monday code: same address as this page). Every request carries monday's signed
// session token so the server can check it comes from this app and a logged-in user.
// Returns null when there is no server (e.g. the page was uploaded as a zip): the UI then says "coming soon".
async function dclServer(path, body) {
  let token = ``;
  try {
    token = (await Cn.get(`sessionToken`))?.data || ``;
  } catch {}
  let res;
  try {
    res = await fetch(`/api${path}`, {
      method: `POST`,
      headers: { "Content-Type": `application/json`, Authorization: token },
      body: JSON.stringify(body),
    });
  } catch {
    return null;
  }
  let isJson = (res.headers.get(`content-type`) || ``).includes(`application/json`);
  if (!isJson) return null; // no app server behind this page
  let data = await res.json().catch(() => ({}));
  if (!res.ok) throw Error(data.error || `The AI request failed (${res.status}).`);
  return data;
}

// Summarize: a few short bullet points about an update (server → OpenAI gpt-4o-mini).
async function dclAiSummarize(text, context) {
  return (await dclServer(`/ai/summarize`, { text }))?.text || null;
}

// Reminders still need a scheduled job on the server (next step); null shows "coming soon".
// dclSetReminder: notify the user about an update at `when`.
async function dclSetReminder(update, when, context) {
  return null;
}

var DCL_REMINDERS = [
  [`In 1 hour`, () => new Date(Date.now() + 3600e3)],
  [`In 3 hours`, () => new Date(Date.now() + 3 * 3600e3)],
  [`Tomorrow, 9:00`, () => { let d = new Date(); d.setDate(d.getDate() + 1); d.setHours(9, 0, 0, 0); return d; }],
  [`Next week, Monday 9:00`, () => { let d = new Date(); d.setDate(d.getDate() + ((8 - d.getDay()) % 7 || 7)); d.setHours(9, 0, 0, 0); return d; }],
];

async function dclLoadItemEmail(itemId) {
  return (await dclTry(() => dclApi(`query ($itemId: [ID!]) { items (ids: $itemId) { email } }`, dclItemVars(itemId))))?.items?.[0]?.email || ``;
}

// People that can be @mentioned.
// If the list can't be loaded, the reason is kept here so the @ picker can show it.
var DCL_USERS_ERROR = ``;

async function dclLoadUsers() {
  let errors = [];
  for (let q of [
    `query { users (limit: 500, kind: non_guests) { id name title email photo_thumb_small } }`,
    `query { users (limit: 500, kind: non_guests) { id name photo_thumb_small } }`,
    `query { users (limit: 500) { id name photo_thumb_small } }`,
  ]) {
    try {
      let users = (await dclApi(q))?.users || [];
      DCL_USERS_ERROR = users.length ? `` : `monday returned no people.`;
      return users.sort((a, b) => a.name.localeCompare(b.name));
    } catch (err) {
      errors.push(err.message);
    }
  }
  DCL_USERS_ERROR = errors[0] || `Could not load people.`;
  console.warn(`[Comment Builder] people list for @mentions unavailable:`, DCL_USERS_ERROR);
  return [];
}

// Board members (listed first under "People") and the account's teams (teams need the teams:read permission;
// if it is missing, the Teams section shows only "Everyone on this board").
async function dclLoadMentionExtras(boardId) {
  let [subs, teams] = await Promise.all([
    boardId ? dclTry(() => dclApi(`query ($b: [ID!]) { boards (ids: $b) { subscribers { id } } }`, { b: [String(boardId)] })) : null,
    dclTry(() => dclApi(`query { teams { id name picture_url } }`)),
  ]);
  return {
    memberIds: (subs?.boards?.[0]?.subscribers || []).map(u => String(u.id)),
    teams: (teams?.teams || []).sort((a, b) => a.name.localeCompare(b.name)),
  };
}

// Post a new update, or a reply when parentId is given. Mentions are sent as mentions_list when monday accepts it.
async function dclPostUpdate(itemId, html, parentId, mentionIds) {
  let vars = { itemId: String(itemId), body: html };
  if (parentId) vars.parentId = String(parentId);
  let sig = `$itemId: ID!, $body: String!${parentId ? `, $parentId: ID!` : ``}`;
  let args = `item_id: $itemId, body: $body${parentId ? `, parent_id: $parentId` : ``}`;
  if (mentionIds?.length) {
    try {
      return (await dclApi(
        `mutation (${sig}, $mentions: [UpdateMention]) { create_update (${args}, mentions_list: $mentions) { id } }`,
        { ...vars, mentions: mentionIds.map(m => ({ id: String(m.id ?? m), type: m.type || `User` })) },
      )).create_update;
    } catch (err) {
      // Only retry without mentions_list when monday rejected the query shape (nothing was created).
      if (!/validation|argument|unknown|type|field/i.test(err.message)) throw err;
    }
  }
  return (await dclApi(`mutation (${sig}) { create_update (${args}) { id } }`, vars)).create_update;
}

function dclEditUpdate(id, html) {
  return dclApi(`mutation ($id: ID!, $body: String!) { edit_update (id: $id, body: $body) { id } }`, { id: String(id), body: html });
}

function dclDeleteUpdate(id) {
  return dclApi(`mutation ($id: ID!) { delete_update (id: $id) { id } }`, { id: String(id) });
}

function dclLikeUpdate(id, liked) {
  return liked
    ? dclApi(`mutation ($id: ID!) { unlike_update (update_id: $id) { id } }`, { id: String(id) })
    : dclApi(`mutation ($id: ID!) { like_update (update_id: $id) { id } }`, { id: String(id) });
}

function dclOpenMondayUpdates(itemId) {
  try {
    Cn.execute(`openItemCard`, { itemId: Number(itemId), kind: `updates` });
  } catch {}
}

async function dclCopy(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      let t = document.createElement(`textarea`);
      t.value = text;
      document.body.appendChild(t);
      t.select();
      let ok = document.execCommand(`copy`);
      t.remove();
      return ok;
    } catch {
      return false;
    }
  }
}

/* ---------- HTML handling ---------- */

function dclEscHtml(s) {
  return String(s).replace(/&/g, `&amp;`).replace(/</g, `&lt;`).replace(/>/g, `&gt;`).replace(/"/g, `&quot;`);
}

// Plain text from the composer → update HTML (one paragraph per line).
function dclTextToHtml(text) {
  return text.trim().split(`\n`).map(line => `<p>${line ? dclEscHtml(line) : `<br>`}</p>`).join(``);
}

// Update bodies are HTML written by people, automations and incoming emails, so only a safe subset is kept:
// whitelisted tags, a few safe styles (colour, size, alignment, direction), http(s)/mailto links, https images and
// monday @mention links. Everything else is dropped or turned into text. Used both for showing and for sending.
var DCL_ALLOWED_TAGS = { p: 1, br: 1, b: 1, strong: 1, i: 1, em: 1, u: 1, s: 1, strike: 1, del: 1, a: 1, ul: 1, ol: 1, li: 1, blockquote: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1, span: 1, div: 1, img: 1, pre: 1, code: 1, hr: 1, table: 1, thead: 1, tbody: 1, tr: 1, td: 1, th: 1, sub: 1, sup: 1, font: 1 };
var DCL_VOID_TAGS = { br: 1, img: 1, hr: 1 };
var DCL_FONT_SIZES = { 1: `10px`, 2: `12px`, 3: `14px`, 4: `16px`, 5: `20px`, 6: `24px`, 7: `32px` };

function dclDecodeEntities(s) {
  return s
    .replace(/&#x([0-9a-f]+);?/gi, (m, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/&#(\d+);?/g, (m, d) => String.fromCharCode(+d))
    .replace(/&colon;/gi, `:`).replace(/&quot;/g, `"`).replace(/&#39;|&apos;/g, `'`).replace(/&nbsp;/g, ` `)
    .replace(/&lt;/g, `<`).replace(/&gt;/g, `>`).replace(/&amp;/g, `&`);
}

function dclAttr(attrs, name) {
  let m = attrs.match(new RegExp(`(?:^|\\s)${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s"'>]+))`, `i`));
  return m ? dclDecodeEntities(m[1] ?? m[2] ?? m[3] ?? ``).trim() : ``;
}

function dclSafeUrl(url, httpsOnly) {
  let squeezed = url.replace(/[\u0000- \u007f]/g, ``);
  return (httpsOnly ? /^https:\/\//i : /^(https?:\/\/|mailto:)/i).test(squeezed) ? url : ``;
}

// Only these CSS properties, and only plain values (no url(), expressions, etc.).
var DCL_STYLE_RULES = {
  color: /^(#[0-9a-f]{3,8}|rgba?\([\d\s.,%]+\)|[a-z]{3,20})$/i,
  "background-color": /^(#[0-9a-f]{3,8}|rgba?\([\d\s.,%]+\)|[a-z]{3,20})$/i,
  "font-size": /^\d{1,2}(\.\d+)?(px|em|rem|%)$/i,
  "text-align": /^(left|right|center|justify|start|end)$/i,
  direction: /^(ltr|rtl)$/i,
};

function dclSafeStyle(attrs, tag) {
  let out = [];
  dclAttr(attrs, `style`).split(`;`).forEach(rule => {
    let i = rule.indexOf(`:`);
    if (i < 0) return;
    let prop = rule.slice(0, i).trim().toLowerCase(), val = rule.slice(i + 1).trim();
    if (DCL_STYLE_RULES[prop] && DCL_STYLE_RULES[prop].test(val)) out.push(`${prop}:${val}`);
  });
  if (tag === `font`) {
    let c = dclAttr(attrs, `color`), sz = dclAttr(attrs, `size`);
    if (c && DCL_STYLE_RULES.color.test(c)) out.push(`color:${c}`);
    if (DCL_FONT_SIZES[sz]) out.push(`font-size:${DCL_FONT_SIZES[sz]}`);
  }
  let align = dclAttr(attrs, `align`);
  if (align && DCL_STYLE_RULES[`text-align`].test(align)) out.push(`text-align:${align}`);
  return out.length ? ` style="${dclEscHtml(out.join(`;`))}"` : ``;
}

function dclSanitizeHtml(html) {
  let s = String(html || ``), prev;
  do {
    prev = s;
    s = s.replace(/<(script|style|iframe|object|embed|noscript|template|svg|math|title|head|textarea|select)\b[\s\S]*?<\/\1\s*>/gi, ``);
  } while (s !== prev);
  s = s.replace(/<!--[\s\S]*?-->/g, ``);
  let out = ``, last = 0, m;
  let re = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)\b([^<>]*)>/g;
  let text = t => t.replace(/</g, `&lt;`).replace(/>/g, `&gt;`);
  while ((m = re.exec(s))) {
    out += text(s.slice(last, m.index));
    last = re.lastIndex;
    let closing = m[1] === `/`, tag = m[2].toLowerCase(), attrs = m[3];
    if (!DCL_ALLOWED_TAGS[tag]) continue;
    let outTag = tag === `font` ? `span` : tag;
    if (closing) {
      if (!DCL_VOID_TAGS[tag]) out += `</${outTag}>`;
      continue;
    }
    if (tag === `a`) {
      let href = dclSafeUrl(dclAttr(attrs, `href`));
      let mentionId = dclAttr(attrs, `data-mention-id`);
      let mentionType = dclAttr(attrs, `data-mention-type`) || `User`;
      if (/^\d+$/.test(mentionId) && DCL_MENTION_PATHS[mentionType] && /user_mention_editor/.test(dclAttr(attrs, `class`))) {
        out += dclMentionLinkOpen(mentionType, mentionId);
      } else {
        out += href ? `<a href="${dclEscHtml(href)}" target="_blank" rel="noopener noreferrer">` : `<a>`;
      }
    } else if (tag === `img`) {
      let src = dclSafeUrl(dclAttr(attrs, `src`), true);
      if (src) out += `<img src="${dclEscHtml(src)}" alt="">`;
    } else if (DCL_VOID_TAGS[tag]) {
      out += `<${outTag}>`;
    } else {
      let dir = dclAttr(attrs, `dir`).toLowerCase();
      out += `<${outTag}${dclSafeStyle(attrs, tag)}${dir === `rtl` || dir === `ltr` ? ` dir="${dir}"` : ``}>`;
    }
  }
  return out + text(s.slice(last));
}

// Editor HTML → update body: safe subset, no trailing empty lines.
function dclEditorToHtml(html) {
  return dclTidyHtml(dclSanitizeHtml(html).replace(/(<br>\s*)+$/, ``));
}

// @mentions can point at a person, a team or "everyone on this board".
var DCL_MENTION_PATHS = { User: `users`, Team: `teams`, Board: `boards` };

function dclMentionLinkOpen(type, id) {
  return `<a class="user_mention_editor router" href="${dclEscHtml(`${DCL_ACCOUNT_URL}/${DCL_MENTION_PATHS[type]}/${id}`)}" data-mention-type="${type}" data-mention-id="${id}" target="_blank" rel="noopener noreferrer">`;
}

// @mentions contained in an update body, as [{ type, id }] (for mentions_list).
function dclMentionIds(html) {
  let seen = {}, out = [];
  for (let m of String(html).matchAll(/data-mention-type="(User|Team|Board)" data-mention-id="(\d+)"/g)) {
    if (!seen[m[1] + m[2]]) (seen[m[1] + m[2]] = 1), out.push({ type: m[1], id: m[2] });
  }
  return out;
}

// Drop the runs of empty paragraphs / line breaks that email updates are full of.
function dclTidyHtml(html) {
  let empty = `<(p|div)>(?:\\s|&nbsp;|<br>)*</\\1>`;
  return html
    .replace(new RegExp(`(?:${empty}\\s*){2,}`, `g`), `<p><br></p>`)
    .replace(new RegExp(`^(?:\\s*${empty})+`), ``)
    .replace(new RegExp(`(?:${empty}\\s*)+$`), ``)
    .replace(/(?:<br>\s*){3,}/g, `<br><br>`);
}

/* ---------- Shared bits (also used by ui.js) ---------- */

function dclFmtShort(iso) {
  let d = new Date(iso);
  if (isNaN(d)) return iso || ``;
  let opts = { day: `numeric`, month: `short` };
  if (d.getFullYear() !== new Date().getFullYear()) opts.year = `numeric`;
  return d.toLocaleDateString(`en-GB`, opts);
}

function dclFmtFull(iso) {
  let d = new Date(iso);
  return isNaN(d) ? iso || `` : d.toLocaleString(`en-GB`, { day: `numeric`, month: `short`, year: `numeric`, hour: `2-digit`, minute: `2-digit` });
}

// "Just now", "5m", "2h", "Yesterday", then the short date (exact time is in the tooltip).
function dclFmtRelative(iso) {
  let d = new Date(iso);
  if (isNaN(d)) return iso || ``;
  let mins = Math.round((Date.now() - d.getTime()) / 60000);
  if (mins < 1) return `Just now`;
  if (mins < 60) return `${mins}m`;
  if (mins < 24 * 60) return `${Math.floor(mins / 60)}h`;
  let y = new Date();
  y.setDate(y.getDate() - 1);
  if (d.toDateString() === y.toDateString()) return `Yesterday`;
  return dclFmtShort(iso);
}

function dclIsRecent(iso) {
  let t = new Date(iso).getTime();
  return !isNaN(t) && Date.now() - t < 24 * 3600 * 1000;
}

function dclInitials(name) {
  return (name || `?`).split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join(``);
}

function dclSectionTitle(icon, label, count) {
  return Z(`div`, {
    className: `section-title`,
    children: [Z(`span`, { className: `section-icon`, children: icon }), label, count > 0 && Z(`span`, { className: `count`, children: count })],
  });
}

var DCL_AVATAR_COLORS = [`#579bfc`, `#00c875`, `#fdab3d`, `#a25ddc`, `#ff642e`, `#037f4c`, `#e2445c`, `#0086c0`];

function DclAvatar({ person, small }) {
  let cls = `upd-avatar${small ? ` upd-avatar-sm` : ``}`;
  // Automations (no person): three coloured bars, like monday's automation avatar.
  if (!person) {
    return Z(`span`, { className: `${cls} upd-avatar-auto`, title: `Automations`, children: [Z(`i`, {}), Z(`i`, {}), Z(`i`, {})] });
  }
  let name = person.name || ``;
  let color = DCL_AVATAR_COLORS[[...name].reduce((h, ch) => h + ch.charCodeAt(0), 0) % DCL_AVATAR_COLORS.length];
  return Z(`span`, {
    className: `${cls}${person.photo_thumb_small ? ` has-photo` : ``}`,
    title: name,
    style: person.photo_thumb_small ? undefined : { background: color },
    children: person.photo_thumb_small ? Z(`img`, { src: person.photo_thumb_small, alt: `` }) : dclInitials(name),
  });
}

// Small line icons (feather style).
var DCL_ICONS = {
  mail: [[`path`, { d: `M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z` }], [`polyline`, { points: `22,6 12,13 2,6` }]],
  feedback: [[`path`, { d: `M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z` }]],
  at: [[`circle`, { cx: `12`, cy: `12`, r: `4` }], [`path`, { d: `M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94` }]],
  clip: [[`path`, { d: `M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48` }]],
  smile: [[`circle`, { cx: `12`, cy: `12`, r: `10` }], [`path`, { d: `M8 14s1.5 2 4 2 4-2 4-2` }], [`line`, { x1: `9`, y1: `9`, x2: `9.01`, y2: `9` }], [`line`, { x1: `15`, y1: `9`, x2: `15.01`, y2: `9` }]],
  like: [[`path`, { d: `M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3` }]],
  reply: [[`polyline`, { points: `9 14 4 9 9 4` }], [`path`, { d: `M20 20v-7a4 4 0 0 0-4-4H4` }]],
  eye: [[`path`, { d: `M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z` }], [`circle`, { cx: `12`, cy: `12`, r: `3` }]],
  more: [[`circle`, { cx: `12`, cy: `12`, r: `1` }], [`circle`, { cx: `19`, cy: `12`, r: `1` }], [`circle`, { cx: `5`, cy: `12`, r: `1` }]],
  link: [[`path`, { d: `M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71` }], [`path`, { d: `M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71` }]],
  edit: [[`path`, { d: `M12 20h9` }], [`path`, { d: `M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z` }]],
  trash: [[`polyline`, { points: `3 6 5 6 21 6` }], [`path`, { d: `M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2` }]],
  list: [[`line`, { x1: `8`, y1: `6`, x2: `21`, y2: `6` }], [`line`, { x1: `8`, y1: `12`, x2: `21`, y2: `12` }], [`line`, { x1: `8`, y1: `18`, x2: `21`, y2: `18` }], [`line`, { x1: `3`, y1: `6`, x2: `3.01`, y2: `6` }], [`line`, { x1: `3`, y1: `12`, x2: `3.01`, y2: `12` }], [`line`, { x1: `3`, y1: `18`, x2: `3.01`, y2: `18` }]],
  table: [[`rect`, { x: `3`, y: `3`, width: `18`, height: `18`, rx: `2` }], [`line`, { x1: `3`, y1: `9`, x2: `21`, y2: `9` }], [`line`, { x1: `3`, y1: `15`, x2: `21`, y2: `15` }], [`line`, { x1: `12`, y1: `3`, x2: `12`, y2: `21` }]],
  align: [[`line`, { x1: `17`, y1: `10`, x2: `3`, y2: `10` }], [`line`, { x1: `21`, y1: `6`, x2: `3`, y2: `6` }], [`line`, { x1: `21`, y1: `14`, x2: `3`, y2: `14` }], [`line`, { x1: `17`, y1: `18`, x2: `3`, y2: `18` }]],
  minus: [[`line`, { x1: `5`, y1: `12`, x2: `19`, y2: `12` }]],
  direction: [[`polyline`, { points: `17 1 21 5 17 9` }], [`path`, { d: `M3 11V9a4 4 0 0 1 4-4h14` }], [`polyline`, { points: `7 23 3 19 7 15` }], [`path`, { d: `M21 13v2a4 4 0 0 1-4 4H3` }]],
  check: [[`path`, { d: `M22 11.08V12a10 10 0 1 1-5.93-9.14` }], [`polyline`, { points: `22 4 12 14.01 9 11.01` }]],
  aipen: [[`path`, { d: `M12 20h9` }], [`path`, { d: `M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z` }], [`path`, { d: `M5 3v4M3 5h4` }]],
  summarize: [[`path`, { d: `M4 5h12M4 10h12M4 15h7` }], [`path`, { d: `M18 14v6M15 17h6` }]],
  reminder: [[`path`, { d: `M15 8A5 5 0 0 0 5 8c0 6-2.5 8-2.5 8h15S15 14 15 8` }], [`path`, { d: `M11.5 20a1.7 1.7 0 0 1-3 0` }], [`circle`, { cx: `18`, cy: `6`, r: `3.5` }], [`path`, { d: `M18 4.5V6l1 1` }]],
  pin: [[`path`, { d: `M12 17v5` }], [`path`, { d: `M9 3h6l-1 6 3 3v2H7v-2l3-3-1-6z` }]],
  bookmark: [[`path`, { d: `M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z` }]],
  open: [[`path`, { d: `M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6` }], [`polyline`, { points: `15 3 21 3 21 9` }], [`line`, { x1: `10`, y1: `14`, x2: `21`, y2: `3` }]],
};

function DclIcon({ name, size }) {
  return Z(`svg`, {
    className: `ic`,
    viewBox: `0 0 24 24`,
    width: size || 16,
    height: size || 16,
    fill: `none`,
    stroke: `currentColor`,
    "stroke-width": `2`,
    "stroke-linecap": `round`,
    "stroke-linejoin": `round`,
    "aria-hidden": `true`,
    children: (DCL_ICONS[name] || []).map(([tag, attrs]) => Z(tag, attrs)),
  });
}

/* ---------- Body ---------- */

// Update / reply body, collapsed behind "See more" when long.
function DclUpdateBody({ html }) {
  let [open, setOpen] = H(false);
  let safe = dclTidyHtml(dclSanitizeHtml(html));
  let plain = safe.replace(/<[^>]+>/g, ``);
  let blocks = (safe.match(/<(p|br|div|li|tr|h\d)\b/g) || []).length;
  let long = plain.length > 420 || blocks > 10;
  return Z(`div`, {
    className: `upd-body-wrap`,
    children: [
      Z(`div`, { className: `upd-body${long && !open ? ` upd-clamped` : ``}`, dangerouslySetInnerHTML: { __html: safe } }),
      long && Z(`button`, { type: `button`, className: `upd-link`, onClick: () => setOpen(!open), children: open ? `… See less` : `… See more` }),
    ],
  });
}

/* ---------- Composer (new update, reply, edit): rich editor like monday's ---------- */

// - dclUploadFile: upload a file from the computer to an update (needs a server upload route; returns null for now).
// - dclAiWrite: turn a short description into an update text, through the app's server (see dclServer).
async function dclUploadFile(file, itemId) {
  return null;
}
// Write with AI: turn a short description into update text (server → OpenAI gpt-4o-mini).
async function dclAiWrite(prompt, context) {
  return (await dclServer(`/ai/write`, { prompt }))?.text || null;
}

var DCL_TEXT_COLORS = [`#323338`, `#e2445c`, `#fdab3d`, `#ffcb00`, `#00c875`, `#0086c0`, `#579bfc`, `#a25ddc`, `#ff158a`, `#7f5347`, `#676879`, `#c4c4c4`];
var DCL_SIZES = [[`Small`, `2`], [`Normal`, `3`], [`Large`, `5`], [`Huge`, `6`]];
var DCL_BLOCKS = [[`Normal text`, `p`], [`Heading 1`, `h1`], [`Heading 2`, `h2`], [`Heading 3`, `h3`]];
var DCL_ALIGNS = [[`Align left`, `justifyLeft`], [`Center`, `justifyCenter`], [`Align right`, `justifyRight`]];
var DCL_CLOUDS = [
  [`drive`, `From Google Drive`, `Google Drive`],
  [`dropbox`, `From DropBox`, `DropBox`],
  [`box`, `From Box`, `Box`],
  [`onedrive`, `From OneDrive & SharePoint`, `OneDrive`],
];

// Which formats are on at the cursor (drives the highlighted toolbar buttons, like monday's).
function dclReadFormats(el) {
  let sel = window.getSelection();
  if (!el || !sel || !sel.rangeCount || !el.contains(sel.anchorNode)) return {};
  let st = cmd => { try { return document.queryCommandState(cmd); } catch { return false; } };
  let block = ``;
  try { block = String(document.queryCommandValue(`formatBlock`) || ``).toLowerCase(); } catch {}
  let node = sel.anchorNode.nodeType === 1 ? sel.anchorNode : sel.anchorNode.parentElement;
  return {
    bold: st(`bold`), italic: st(`italic`), underline: st(`underline`), strike: st(`strikeThrough`),
    ol: st(`insertOrderedList`), ul: st(`insertUnorderedList`),
    align: st(`justifyCenter`) || st(`justifyRight`),
    heading: /^h[1-3]$/.test(block),
    link: !!node?.closest(`a`),
    rtl: node?.closest(`[dir="rtl"]`) ? true : false,
  };
}

function dclIsEmptyEditor(el) {
  return !el || (!el.textContent.replace(/ /g, ` `).trim() && !el.querySelector(`img,hr,table,a`));
}

// "@partial" just before the caret, or null.
function dclMentionAtCaret(el) {
  let sel = window.getSelection();
  if (!sel || !sel.rangeCount || !el || !el.contains(sel.anchorNode)) return null;
  let r = sel.getRangeAt(0), node = r.startContainer;
  if (node.nodeType !== 3) return null;
  let before = node.textContent.slice(0, r.startOffset);
  let m = before.match(/(?:^|[\s ])@([^@\n]{0,40})$/);
  if (!m) return null;
  return { query: m[1].replace(/ /g, ` `), node, start: r.startOffset - m[1].length - 1, end: r.startOffset, rect: dclCaretRect(r, el) };
}

// Screen position for the @ list: just under the caret (or above it when there is no room below), like monday's.
function dclCaretRect(range, el) {
  let rect = range.getBoundingClientRect();
  if (!rect || (!rect.height && !rect.width)) {
    let tmp = document.createElement(`span`);
    tmp.textContent = `​`;
    let r2 = range.cloneRange();
    r2.insertNode(tmp);
    rect = tmp.getBoundingClientRect();
    tmp.remove();
  }
  if (!rect || (!rect.height && !rect.width)) rect = el.getBoundingClientRect();
  return { left: rect.left, top: rect.top, bottom: rect.bottom };
}

// Fixed position for a menu opened from a button: just below it (like monday's), above only if there's no room.
function dclPopStyle(rect, w, h) {
  if (!rect) return undefined;
  let vw = window.innerWidth || 1024, vh = window.innerHeight || 768;
  let left = Math.max(8, Math.min(rect.left, vw - w - 8));
  let below = vh - rect.bottom - 10;
  return below >= h || below >= rect.top
    ? { position: `fixed`, left: `${left}px`, top: `${rect.bottom + 6}px`, bottom: `auto`, maxHeight: `${Math.max(140, below)}px`, overflowY: `auto` }
    : { position: `fixed`, left: `${left}px`, bottom: `${vh - rect.top + 6}px`, top: `auto`, maxHeight: `${Math.max(140, rect.top - 10)}px`, overflowY: `auto` };
}

function dclPickerStyle(rect) {
  if (!rect) return undefined;
  let w = 340, vw = window.innerWidth || 1024, vh = window.innerHeight || 768;
  let left = Math.max(8, Math.min(rect.left - 12, vw - w - 8));
  let below = vh - rect.bottom - 12, above = rect.top - 12;
  return below >= 220 || below >= above
    ? { position: `fixed`, left: `${left}px`, top: `${rect.bottom + 6}px`, bottom: `auto`, maxHeight: `${Math.max(160, Math.min(340, below))}px` }
    : { position: `fixed`, left: `${left}px`, bottom: `${vh - rect.top + 6}px`, top: `auto`, maxHeight: `${Math.max(160, Math.min(340, above))}px` };
}

function DclToolBtn({ title, onClick, active, on, children, label }) {
  return Z(`button`, {
    type: `button`,
    className: `rt-btn${active ? ` is-active` : ``}${on ? ` is-on` : ``}${label ? ` rt-btn-text` : ``}`,
    title,
    "aria-label": title,
    "aria-pressed": on ? `true` : undefined,
    onMouseDown: e => e.preventDefault(), // keep the text selection in the editor
    onClick,
    children,
  });
}

function DclComposer({ placeholder, buttonLabel, onSubmit, onCancel, autoFocus, initialHtml, users, people, itemId, me, compact, inputRef, allowAi }) {
  users = people?.users || users || [];
  let [box] = H(() => ({ el: null, range: null })); // editor element + last selection (kept across renders)
  let [empty, setEmpty] = H(!initialHtml), [busy, setBusy] = H(false), [err, setErr] = H(``), [note, setNote] = H(``);
  let [focused, setFocused] = H(!!autoFocus), [menu, setMenu] = H(null), [picker, setPicker] = H(null);
  let [linkUrl, setLinkUrl] = H(``), [ai, setAi] = H(null); // ai: { prompt, busy, note }
  let [fmt, setFmt] = H({}), [menuRect, setMenuRect] = H(null);
  let syncFmt = () => {
    let next = dclReadFormats(box.el);
    setFmt(prev => (JSON.stringify(prev) === JSON.stringify(next) ? prev : next));
  };
  U(() => {
    if (!focused) return;
    document.addEventListener(`selectionchange`, syncFmt);
    return () => document.removeEventListener(`selectionchange`, syncFmt);
  }, [focused]);
  let open = focused || !empty || busy || !!err || !!note || !!menu || !!picker || !!onCancel;
  if (!box.attachRoot) box.attachRoot = el => { if (el) box.root = el; };
  // Close any open menu / @ list when clicking outside this composer or pressing Esc.
  U(() => {
    if (!menu && !picker) return;
    let onDown = e => {
      if (box.root && !box.root.contains(e.target)) setMenu(null), setPicker(null);
    };
    let onKey = e => {
      if (e.key === `Escape`) setMenu(null), setPicker(null);
    };
    // Keep the floating @ list next to the caret while the page scrolls.
    let onScroll = e => {
      if (box.root && box.root.contains(e.target) && e.target !== document) return; // scrolling inside a menu
      let m = picker && dclMentionAtCaret(box.el);
      if (m) setPicker(prev => (prev ? { ...prev, rect: m.rect } : prev));
      if (menu === `attach` || menu === `emoji` || String(menu).startsWith(`cloud:`)) setMenu(null);
    };
    document.addEventListener(`mousedown`, onDown, true);
    document.addEventListener(`keydown`, onKey, true);
    window.addEventListener(`scroll`, onScroll, true);
    return () => {
      document.removeEventListener(`mousedown`, onDown, true);
      document.removeEventListener(`keydown`, onKey, true);
      window.removeEventListener(`scroll`, onScroll, true);
    };
  }, [menu, picker]);

  // Stable ref callback (created once), so the editor element is wired up only when it mounts.
  box.inputRef = inputRef;
  if (!box.attach) {
    box.attach = el => {
      if (!el || box.el === el) return;
      box.el = el;
      if (initialHtml) el.innerHTML = initialHtml;
      if (autoFocus) setTimeout(() => el.focus(), 0);
      box.inputRef?.(el);
    };
  }
  let saveRange = () => {
    let sel = window.getSelection();
    if (sel && sel.rangeCount && box.el && box.el.contains(sel.anchorNode)) box.range = sel.getRangeAt(0).cloneRange();
  };
  let restoreRange = () => {
    if (!box.el) return;
    box.el.focus();
    let sel = window.getSelection();
    if (box.range && sel) {
      sel.removeAllRanges();
      sel.addRange(box.range);
    }
  };
  let changed = () => {
    setEmpty(dclIsEmptyEditor(box.el));
    syncFmt();
    let m = dclMentionAtCaret(box.el);
    // A typed full name ("@Daniel K") keeps the list open while it still matches someone.
    if (m && /\s/.test(m.query)) {
      let ql = m.query.trim().toLowerCase();
      let any = users.some(u => u.name.toLowerCase().includes(ql)) || (people?.teams || []).some(t => t.name.toLowerCase().includes(ql)) || `everyone on this board`.includes(ql);
      if (!any || /\s\s$/.test(m.query)) m = null;
    }
    if (m) setPicker(prev => ({ query: m.query, rect: m.rect, index: prev && prev.query === m.query ? prev.index || 0 : 0 }));
    else if (picker) setPicker(null);
    saveRange();
  };
  // Only put the saved selection back when the cursor has left the editor. Re-applying it while the cursor is
  // still inside would wipe the browser's pending "bold on/off" state, so a second click couldn't switch it off.
  let ensureSelection = () => {
    let sel = window.getSelection();
    if (document.activeElement === box.el && sel && sel.rangeCount && box.el.contains(sel.anchorNode)) return;
    restoreRange();
  };
  let exec = (cmd, val) => {
    ensureSelection();
    document.execCommand(cmd, false, val);
    setMenu(null);
    changed();
  };
  let insertHtml = html => exec(`insertHTML`, html);

  function toggleDirection() {
    restoreRange();
    let sel = window.getSelection();
    let node = sel && sel.anchorNode;
    let block = node && (node.nodeType === 1 ? node : node.parentElement)?.closest(`p,div,li,h1,h2,h3,td`);
    if (!block || !box.el.contains(block) || block === box.el) {
      document.execCommand(`formatBlock`, false, `p`);
      node = window.getSelection().anchorNode;
      block = node && (node.nodeType === 1 ? node : node.parentElement)?.closest(`p,div,li,h1,h2,h3,td`);
    }
    if (block && box.el.contains(block) && block !== box.el) block.setAttribute(`dir`, block.getAttribute(`dir`) === `rtl` ? `ltr` : `rtl`);
    changed();
  }

  // target: { type: `User`|`Team`|`Board`, id, name }
  function pickMention(t) {
    restoreRange();
    let m = dclMentionAtCaret(box.el);
    if (m) {
      let r = document.createRange();
      r.setStart(m.node, m.start);
      r.setEnd(m.node, m.end);
      let sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(r);
    }
    let link = `${dclMentionLinkOpen(t.type, t.id)}@${dclEscHtml(t.name)}</a>&nbsp;`;
    document.execCommand(`insertHTML`, false, link);
    setPicker(null);
    changed();
  }

  function startMention() {
    restoreRange();
    document.execCommand(`insertText`, false, `@`);
    setPicker({ query: `` });
    changed();
  }

  function addLink(kind) {
    let url = linkUrl.trim();
    if (!/^https?:\/\//i.test(url)) return setNote(`Please paste a full link starting with https://`);
    let cloud = DCL_CLOUDS.find(c => c[0] === kind);
    let label = cloud ? `📎 ${cloud[2]} file` : url;
    restoreRange();
    let sel = window.getSelection();
    if (!cloud && sel && sel.rangeCount && !sel.getRangeAt(0).collapsed) document.execCommand(`createLink`, false, url);
    else document.execCommand(`insertHTML`, false, `<a href="${dclEscHtml(url)}" target="_blank" rel="noopener noreferrer">${dclEscHtml(label)}</a>&nbsp;`);
    setLinkUrl(``), setMenu(null), setNote(``);
    changed();
  }

  async function onFile(ev) {
    let file = ev.target.files?.[0];
    ev.target.value = ``;
    setMenu(null);
    if (!file) return;
    let res = await dclUploadFile(file, itemId);
    if (res?.url) insertHtml(`<a href="${dclEscHtml(res.url)}" target="_blank" rel="noopener noreferrer">📎 ${dclEscHtml(file.name)}</a>&nbsp;`);
    else setNote(`Uploading "${file.name}" from your computer is coming soon (it needs the app's server part). For now, attach it in monday's Updates tab.`);
  }

  async function generate() {
    if (!ai?.prompt?.trim() || ai.busy) return;
    setAi({ ...ai, busy: true, note: `` });
    try {
      let text = await dclAiWrite(ai.prompt, { itemId });
      if (text) {
        box.el.innerHTML += dclTextToHtml(text);
        setAi(null);
        setTimeout(() => { box.el?.focus(); changed(); }, 0);
      } else {
        setAi({ ...ai, busy: false, note: `Write with AI is coming soon. It needs the app's server part to connect an AI service.` });
      }
    } catch (e) {
      setAi({ ...ai, busy: false, note: e.message || `Could not generate the text.` });
    }
  }

  async function submit() {
    if (dclIsEmptyEditor(box.el) || busy) return;
    setBusy(true), setErr(``);
    try {
      let html = dclEditorToHtml(box.el.innerHTML);
      await onSubmit(html, dclMentionIds(html));
      box.el.innerHTML = ``;
      setEmpty(true), setPicker(null), setNote(``);
    } catch (e) {
      setErr(e.message || `Could not post.`);
    } finally {
      setBusy(false);
    }
  }

  let keep = e => e.preventDefault();
  let q = (picker?.query || ``).trim().toLowerCase();
  // @ list like monday's: People (board members first, then everyone; searchable by name, title or email), then Teams.
  let members = new Set(people?.memberIds || []);
  let personOpts = picker
    ? users
        .filter(u => !q || [u.name, u.title, u.email].some(v => (v || ``).toLowerCase().includes(q)))
        .sort((a, b) => members.has(String(b.id)) - members.has(String(a.id)) || a.name.localeCompare(b.name))
        .slice(0, 50)
        .map(u => ({ type: `User`, id: u.id, name: u.name, sub: u.title, person: u }))
    : [];
  let teamOpts = picker
    ? [
        people?.boardId && { type: `Board`, id: people.boardId, name: `Everyone on this board` },
        ...(people?.teams || []).map(t => ({ type: `Team`, id: t.id, name: t.name, photo: t.picture_url })),
      ].filter(t => t && (!q || t.name.toLowerCase().includes(q)))
    : [];
  let options = [...personOpts, ...teamOpts];
  let active = Math.min(picker?.index || 0, Math.max(options.length - 1, 0));
  let optionRow = (o, i) => Z(`button`, {
    type: `button`,
    className: `upd-picker-item${i === active ? ` is-active` : ``}`,
    onMouseDown: keep,
    onMouseEnter: () => setPicker({ ...picker, index: i }),
    onClick: () => pickMention(o),
    children: [
      o.type === `User` ? Z(DclAvatar, { person: o.person, small: true }) : Z(`span`, { className: `upd-team-ic`, children: o.photo ? Z(`img`, { src: o.photo, alt: `` }) : `👥` }),
      Z(`span`, { className: `upd-picker-name`, children: [o.name, o.sub && Z(`span`, { className: `upd-picker-sub`, children: ` (${o.sub})` })] }),
    ],
  }, `${o.type}:${o.id}`);
  let pop = (key, children, cls, style) => menu === key && Z(`div`, { className: `rt-pop${cls ? ` ${cls}` : ``}`, style, onMouseDown: e => { if (e.target.tagName !== `INPUT`) e.preventDefault(); }, children });
  let toggle = (key, ev) => {
    saveRange();
    if (ev?.currentTarget) setMenuRect(ev.currentTarget.getBoundingClientRect());
    setMenu(menu === key ? null : key);
    setLinkUrl(``);
  };

  // Formatting bar (shown while the editor is in use, like monday's).
  let toolbar = open && Z(`div`, {
    className: `rt-toolbar`,
    children: [
      Z(`div`, { className: `rt-group`, children: [
        Z(DclToolBtn, { title: `Text style`, label: true, on: fmt.heading, active: menu === `block`, onClick: () => toggle(`block`), children: `¶` }),
        pop(`block`, DCL_BLOCKS.map(([label, tag]) => Z(`button`, { type: `button`, className: `rt-pop-item rt-block-${tag}`, onClick: () => exec(`formatBlock`, `<${tag}>`), children: label }, tag))),
      ] }),
      Z(DclToolBtn, { title: `Bold (⌘B)`, label: true, on: fmt.bold, onClick: () => exec(`bold`), children: Z(`b`, { children: `B` }) }),
      Z(DclToolBtn, { title: `Italic (⌘I)`, label: true, on: fmt.italic, onClick: () => exec(`italic`), children: Z(`i`, { children: `I` }) }),
      Z(DclToolBtn, { title: `Underline (⌘U)`, label: true, on: fmt.underline, onClick: () => exec(`underline`), children: Z(`u`, { children: `U` }) }),
      Z(DclToolBtn, { title: `Strikethrough`, label: true, on: fmt.strike, onClick: () => exec(`strikeThrough`), children: Z(`s`, { children: `S` }) }),
      Z(`div`, { className: `rt-group`, children: [
        Z(DclToolBtn, { title: `Text color`, label: true, active: menu === `color`, onClick: () => toggle(`color`), children: Z(`span`, { className: `rt-color-a`, children: `A` }) }),
        pop(`color`, DCL_TEXT_COLORS.map(c => Z(`button`, { type: `button`, className: `rt-swatch`, title: c, style: { background: c }, onClick: () => exec(`foreColor`, c) }, c)), `rt-swatches`),
      ] }),
      Z(`div`, { className: `rt-group`, children: [
        Z(DclToolBtn, { title: `Font size`, label: true, active: menu === `size`, onClick: () => toggle(`size`), children: `A↕` }),
        pop(`size`, DCL_SIZES.map(([label, v]) => Z(`button`, { type: `button`, className: `rt-pop-item`, onClick: () => exec(`fontSize`, v), children: label }, v))),
      ] }),
      Z(`span`, { className: `rt-sep` }),
      Z(DclToolBtn, { title: `Numbered list`, label: true, on: fmt.ol, onClick: () => exec(`insertOrderedList`), children: `1.` }),
      Z(DclToolBtn, { title: `Bulleted list`, on: fmt.ul, onClick: () => exec(`insertUnorderedList`), children: Z(DclIcon, { name: `list` }) }),
      Z(DclToolBtn, {
        title: `Insert table`,
        onClick: () => insertHtml(`<table><tbody><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table><p><br></p>`),
        children: Z(DclIcon, { name: `table` }),
      }),
      Z(`div`, { className: `rt-group`, children: [
        Z(DclToolBtn, { title: `Link`, on: fmt.link, active: menu === `link`, onClick: () => toggle(`link`), children: Z(DclIcon, { name: `link` }) }),
        pop(`link`, [
          Z(`input`, { className: `rt-input`, type: `url`, value: linkUrl, placeholder: `Paste a link…`, autoFocus: true, onChange: e => setLinkUrl(e.target.value), onKeyDown: e => { if (e.key === `Enter`) { e.preventDefault(); addLink(); } } }),
          Z(`button`, { type: `button`, className: `btn btn-primary upd-btn`, onClick: () => addLink(), children: `Add` }),
        ], `rt-linkpop`),
      ] }),
      Z(`div`, { className: `rt-group`, children: [
        Z(DclToolBtn, { title: `Align`, on: fmt.align, active: menu === `align`, onClick: () => toggle(`align`), children: Z(DclIcon, { name: `align` }) }),
        pop(`align`, DCL_ALIGNS.map(([label, cmd]) => Z(`button`, { type: `button`, className: `rt-pop-item`, onClick: () => exec(cmd), children: label }, cmd))),
      ] }),
      Z(DclToolBtn, { title: `Divider line`, onClick: () => exec(`insertHorizontalRule`), children: Z(DclIcon, { name: `minus` }) }),
      Z(DclToolBtn, { title: `Text direction (left-to-right / right-to-left)`, on: fmt.rtl, onClick: toggleDirection, children: Z(DclIcon, { name: `direction` }) }),
      Z(DclToolBtn, { title: `Checklist item`, onClick: () => insertHtml(`<p>☐&nbsp;</p>`), children: Z(DclIcon, { name: `check` }) }),
    ],
  });

  let aiPanel = ai && Z(`div`, {
    className: `ai-panel`,
    children: [
      Z(`div`, {
        className: `ai-panel-head`,
        children: [
          Z(`span`, { className: `ai-panel-title`, children: [Z(`span`, { children: `✨` }), `Write with AI`] }),
          Z(`span`, { className: `ai-beta`, children: `Beta` }),
          Z(`button`, { type: `button`, className: `upd-icon-btn`, title: `Close`, onClick: () => setAi(null), children: `✕` }),
        ],
      }),
      Z(`textarea`, {
        className: `ai-panel-input`,
        rows: 3,
        value: ai.prompt,
        autoFocus: true,
        placeholder: `Describe your update and what it should include…`,
        onChange: e => setAi({ ...ai, prompt: e.target.value, note: `` }),
        onKeyDown: e => { if ((e.metaKey || e.ctrlKey) && e.key === `Enter`) generate(); },
      }),
      ai.note && Z(`div`, { className: `ai-note`, children: [Z(`span`, { children: `✨` }), ai.note] }),
      Z(`div`, {
        className: `ai-panel-bar`,
        children: Z(`button`, { type: `button`, className: `btn ai-generate`, disabled: !ai.prompt.trim() || ai.busy, onClick: generate, children: [`✦ `, ai.busy ? `Generating…` : `Generate`] }),
      }),
    ],
  });

  return Z(`div`, {
    className: `upd-composer-row${compact ? ` is-compact` : ``}`,
    ref: box.attachRoot,
    children: [
      compact && Z(DclAvatar, { person: me, small: true }),
      aiPanel,
      Z(`div`, {
        className: `upd-composer rt-composer${open ? ` is-open` : ``}`,
        style: ai ? { display: `none` } : undefined,
        children: [
          toolbar,
          Z(`div`, {
            className: `rt-editor${empty ? ` is-empty` : ``}`,
            contentEditable: true,
            role: `textbox`,
            "aria-multiline": `true`,
            "data-placeholder": placeholder,
            ref: box.attach,
            onFocus: () => setFocused(true),
            onBlur: () => { saveRange(); setFocused(false); },
            onInput: changed,
            onKeyUp: saveRange,
            onMouseUp: saveRange,
            onMouseDown: () => menu && setMenu(null),
            onKeyDown: e => {
              if (picker && options.length && (e.key === `ArrowDown` || e.key === `ArrowUp`)) {
                e.preventDefault();
                setPicker({ ...picker, index: (active + (e.key === `ArrowDown` ? 1 : options.length - 1)) % options.length });
                return;
              }
              if (picker && options.length && (e.key === `Enter` || e.key === `Tab`) && !e.metaKey && !e.ctrlKey) {
                e.preventDefault();
                pickMention(options[active]);
                return;
              }
              if ((e.metaKey || e.ctrlKey) && e.key === `Enter`) { e.preventDefault(); submit(); }
              if (allowAi && (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === `j`) { e.preventDefault(); setAi({ prompt: ``, busy: false, note: `` }); }
              if (e.key === `Escape`) setPicker(null), setMenu(null);
            },
          }),
          picker && Z(`div`, {
            className: `upd-picker upd-mention-picker`,
            style: dclPickerStyle(picker.rect),
            onMouseDown: keep,
            children: options.length
              ? [
                  personOpts.length > 0 && Z(`div`, { className: `upd-picker-head`, children: `People` }),
                  ...personOpts.map((o, i) => optionRow(o, i)),
                  teamOpts.length > 0 && Z(`div`, { className: `upd-picker-head`, children: `Teams` }),
                  ...teamOpts.map((o, i) => optionRow(o, personOpts.length + i)),
                ]
              : Z(`div`, {
                  className: `upd-picker-empty`,
                  children: users?.length
                    ? `No one matches "${picker.query}"`
                    : [
                        Z(`strong`, { children: `Can't load people to mention.` }),
                        Z(`div`, { children: `The app needs the "users:read" permission (Developer Center → OAuth & permissions).` }),
                        DCL_USERS_ERROR && Z(`div`, { className: `upd-picker-reason`, children: DCL_USERS_ERROR }),
                      ],
                }),
          }),
          menu === `emoji` && Z(`div`, {
            className: `upd-picker upd-emoji-grid`,
            style: dclPopStyle(menuRect, 316, 180),
            onMouseDown: keep,
            children: DCL_EMOJIS.map(em => Z(`button`, { type: `button`, className: `upd-emoji`, title: em, onMouseDown: keep, onClick: () => exec(`insertText`, em), children: em }, em)),
          }),
          note && Z(`div`, { className: `rt-note`, children: [note, Z(`button`, { type: `button`, className: `hp-clear`, onClick: () => setNote(``), children: `OK` })] }),
          Z(`div`, {
            className: `upd-composer-bar`,
            children: [
              Z(`div`, {
                className: `upd-tools`,
                children: [
                  Z(DclToolBtn, { title: `Mention someone`, onClick: startMention, children: Z(DclIcon, { name: `at` }) }),
                  Z(`div`, { className: `rt-group`, children: [
                    Z(DclToolBtn, { title: `Add file`, active: menu === `attach` || String(menu).startsWith(`cloud:`), onClick: ev => toggle(`attach`, ev), children: Z(DclIcon, { name: `clip` }) }),
                    pop(`attach`, [
                      Z(`label`, {
                        className: `rt-pop-item rt-attach-item`,
                        children: [Z(`span`, { className: `rt-attach-ic`, children: Z(DclIcon, { name: `clip` }) }), `From Computer`, Z(`input`, { type: `file`, className: `rt-file`, onChange: onFile })],
                      }),
                      ...DCL_CLOUDS.map(([kind, label]) => Z(`button`, {
                        type: `button`,
                        className: `rt-pop-item rt-attach-item`,
                        onClick: () => { setMenu(`cloud:${kind}`); setLinkUrl(``); },
                        children: [Z(`span`, { className: `rt-attach-ic rt-cloud-${kind}` }), label],
                      }, kind)),
                    ], `rt-attachpop`, dclPopStyle(menuRect, 260, 270)),
                    String(menu).startsWith(`cloud:`) && Z(`div`, {
                      className: `rt-pop rt-linkpop rt-attachpop`,
                      style: dclPopStyle(menuRect, 300, 120),
                      children: [
                        Z(`span`, { className: `rt-pop-hint`, children: `Paste the ${DCL_CLOUDS.find(c => `cloud:${c[0]}` === menu)?.[2]} share link` }),
                        Z(`input`, { className: `rt-input`, type: `url`, value: linkUrl, placeholder: `https://…`, autoFocus: true, onChange: e => setLinkUrl(e.target.value), onKeyDown: e => { if (e.key === `Enter`) { e.preventDefault(); addLink(menu.slice(6)); } } }),
                        Z(`button`, { type: `button`, className: `btn btn-primary upd-btn`, onClick: () => addLink(menu.slice(6)), children: `Add` }),
                      ],
                    }),
                  ] }),
                  Z(DclToolBtn, { title: `Emoji`, active: menu === `emoji`, onClick: ev => toggle(`emoji`, ev), children: Z(DclIcon, { name: `smile` }) }),
                  allowAi && Z(DclToolBtn, { title: `Write with AI (⌘J)`, onClick: () => setAi({ prompt: ``, busy: false, note: `` }), children: Z(DclIcon, { name: `aipen` }) }),
                ],
              }),
              open && Z(`div`, {
                className: `upd-submit`,
                children: [
                  err ? Z(`span`, { className: `upd-error`, children: err }) : Z(`span`, { className: `upd-hint`, children: `⌘ + Enter` }),
                  onCancel && Z(`button`, { type: `button`, className: `btn btn-ghost upd-btn`, onClick: onCancel, disabled: busy, children: `Cancel` }),
                  Z(`button`, { type: `button`, className: `btn btn-primary upd-btn`, disabled: empty || busy, onMouseDown: keep, onClick: submit, children: busy ? `Posting…` : buttonLabel }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

/* ---------- Update card ---------- */

function DclUpdateCard({ u, itemId, boardId, userId, me, users, people, reaction, onChanged, onReactionsChanged }) {
  let [menu, setMenu] = H(false), [editing, setEditing] = H(false), [confirmDelete, setConfirmDelete] = H(false);
  let [note, setNote] = H(``), [replyEl, setReplyEl] = H(null), [likeBusy, setLikeBusy] = H(false);
  let [panel, setPanel] = H(null), [summary, setSummary] = H(null), [reminderNote, setReminderNote] = H(``), [pinBusy, setPinBusy] = H(false);
  let pinned = !!reaction?.pinned;
  let replies = [...(u.replies || [])].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  let mine = userId && String(u.creator?.id) === String(userId);
  let likes = reaction?.likes;
  let liked = !!(likes && userId && likes.includes(String(userId)));
  let flash = msg => { setNote(msg); setTimeout(() => setNote(``), 2500); };

  async function copyLink() {
    setMenu(false);
    let ok = await dclCopy(`${DCL_ACCOUNT_URL}/boards/${boardId}/pulses/${itemId}/posts/${u.id}`);
    flash(ok ? `Link copied` : `Could not copy the link`);
  }

  async function doDelete() {
    try {
      await dclDeleteUpdate(u.id);
      await onChanged();
    } catch (e) {
      setConfirmDelete(false);
      flash(e.message || `Could not delete`);
    }
  }

  async function toggleLike() {
    if (likeBusy) return;
    setLikeBusy(true);
    try {
      await dclLikeUpdate(u.id, liked);
      await onReactionsChanged();
    } catch (e) {
      flash(e.message || `Could not update the like`);
    } finally {
      setLikeBusy(false);
    }
  }

  async function togglePin() {
    setMenu(false);
    if (pinBusy) return;
    setPinBusy(true);
    try {
      await dclPinUpdate(u.id, itemId, pinned);
      await onReactionsChanged();
      flash(pinned ? `Unpinned` : `Pinned to top`);
    } catch (e) {
      flash(e.message || `Could not pin the update`);
    } finally {
      setPinBusy(false);
    }
  }

  async function openSummary() {
    if (panel === `summary`) return setPanel(null);
    setPanel(`summary`), setSummary({ loading: true });
    let plain = dclDecodeEntities(String(u.body || ``).replace(/<br\s*\/?>/gi, `\n`).replace(/<[^>]+>/g, ` `)).replace(/[ \t]+/g, ` `).trim();
    try {
      let text = await dclAiSummarize(plain, { itemId, updateId: u.id });
      setSummary(text ? { text } : { soon: true });
    } catch (e) {
      setSummary({ error: e.message || `Could not summarize.` });
    }
  }

  async function remind([label, when]) {
    try {
      let ok = await dclSetReminder(u, when(), { itemId, userId });
      setReminderNote(ok ? `Reminder set: ${label}` : `Reminders are coming soon. They need the app's server part to notify you at the right time.`);
    } catch (e) {
      setReminderNote(e.message || `Could not set the reminder.`);
    }
  }

  // ⋯ menu item. opts: { danger, disabled, hint }
  let menuItem = (icon, label, onClick, opts = {}) =>
    Z(`button`, {
      type: `button`,
      className: `upd-menu-item${opts.danger ? ` is-danger` : ``}${opts.disabled ? ` is-disabled` : ``}`,
      disabled: !!opts.disabled,
      title: opts.hint || undefined,
      onClick,
      children: [Z(DclIcon, { name: icon }), label],
    });
  let menuSep = () => Z(`div`, { className: `upd-menu-sep` });

  return Z(`article`, {
    className: `upd-card`,
    children: [
      Z(`div`, {
        className: `upd-head`,
        children: [
          Z(DclAvatar, { person: u.creator }),
          Z(`strong`, { className: `upd-name`, children: u.creator?.name || `Automations` }),
          Z(`span`, { className: `upd-time`, title: dclFmtFull(u.created_at), children: dclFmtRelative(u.created_at) }),
          dclIsRecent(u.created_at) && Z(`span`, { className: `upd-new`, children: `New` }),
          pinned && Z(`span`, { className: `upd-pinned`, title: `Pinned to top`, children: [Z(DclIcon, { name: `pin`, size: 13 }), `Pinned`] }),
          Z(`div`, {
            className: `upd-head-actions`,
            children: [
              note && Z(`span`, { className: `upd-note`, children: note }),
              Z(`button`, {
                type: `button`,
                className: `upd-icon-btn${panel === `summary` ? ` is-active` : ``}`,
                title: `Summarize`,
                onClick: openSummary,
                children: Z(DclIcon, { name: `summarize`, size: 18 }),
              }),
              Z(`div`, {
                className: `rt-group`,
                children: [
                  Z(`button`, {
                    type: `button`,
                    className: `upd-icon-btn${panel === `reminder` ? ` is-active` : ``}`,
                    title: `Set reminder`,
                    onClick: () => { setReminderNote(``); setPanel(panel === `reminder` ? null : `reminder`); },
                    children: Z(DclIcon, { name: `reminder`, size: 18 }),
                  }),
                  panel === `reminder` && Z(`div`, { className: `select-backdrop`, onClick: () => setPanel(null) }),
                  panel === `reminder` && Z(`div`, {
                    className: `upd-menu upd-reminder-menu`,
                    children: [
                      Z(`div`, { className: `upd-menu-head`, children: `Remind me about this update` }),
                      ...DCL_REMINDERS.map(r => Z(`button`, { type: `button`, className: `upd-menu-item`, onClick: () => remind(r), children: [Z(DclIcon, { name: `reminder` }), r[0]] }, r[0])),
                      reminderNote && Z(`div`, { className: `upd-menu-note`, children: reminderNote }),
                    ],
                  }),
                ],
              }),
              Z(`button`, { type: `button`, className: `upd-icon-btn${menu ? ` is-active` : ``}`, title: `More actions`, onClick: () => setMenu(!menu), children: Z(DclIcon, { name: `more`, size: 18 }) }),
              menu && Z(`div`, { className: `select-backdrop`, onClick: () => setMenu(false) }),
              menu && Z(`div`, {
                className: `upd-menu`,
                children: [
                  menuItem(`edit`, `Edit update`, () => { setMenu(false), setEditing(true); }, { disabled: !mine, hint: mine ? `` : `Only the author can edit this update` }),
                  menuSep(),
                  menuItem(`pin`, pinned ? `Unpin from top` : `Pin to top`, togglePin, { disabled: pinBusy }),
                  menuItem(`bookmark`, `Bookmark to update feed`, () => {}, { disabled: true, hint: `Bookmarks are only available in monday's own Updates tab` }),
                  menuSep(),
                  menuItem(`link`, `Copy link to update`, copyLink),
                  menuSep(),
                  menuItem(`trash`, `Delete update`, () => { setMenu(false), setConfirmDelete(true); }, { danger: true }),
                ],
              }),
            ],
          }),
        ],
      }),
      panel === `summary` && Z(`div`, {
        className: `upd-summary`,
        children: [
          Z(`div`, {
            className: `upd-summary-head`,
            children: [Z(`span`, { children: [`✨ `, `Summary`] }), Z(`button`, { type: `button`, className: `upd-icon-btn`, title: `Close`, onClick: () => setPanel(null), children: `✕` })],
          }),
          Z(`div`, {
            className: `upd-summary-body`,
            children: summary?.loading
              ? `Summarizing…`
              : summary?.text
                ? summary.text
                : summary?.error || `Summarize is coming soon. It needs the AI service that will be connected in step 2.`,
          }),
        ],
      }),
      editing
        ? Z(`div`, {
            className: `upd-edit`,
            children: Z(DclComposer, {
              placeholder: `Edit update…`,
              buttonLabel: `Save`,
              initialHtml: dclSanitizeHtml(u.body),
              autoFocus: true,
              users,
              people,
              itemId,
              onCancel: () => setEditing(false),
              onSubmit: async html => { await dclEditUpdate(u.id, html); setEditing(false); await onChanged(); },
            }),
          })
        : Z(DclUpdateBody, { html: u.body }),
      confirmDelete && Z(`div`, {
        className: `upd-confirm`,
        children: [
          Z(`span`, { children: `Delete this update? This can't be undone.` }),
          Z(`button`, { type: `button`, className: `btn btn-ghost upd-btn`, onClick: () => setConfirmDelete(false), children: `Cancel` }),
          Z(`button`, { type: `button`, className: `btn upd-btn upd-btn-danger`, onClick: doDelete, children: `Delete` }),
        ],
      }),
      typeof reaction?.viewers === `number` && Z(`div`, {
        className: `upd-viewers`,
        title: `Seen by ${reaction.viewers}`,
        children: [Z(DclIcon, { name: `eye` }), reaction.viewers],
      }),
      Z(`div`, {
        className: `upd-actions`,
        children: [
          Z(`button`, {
            type: `button`,
            className: `upd-action${liked ? ` is-liked` : ``}`,
            disabled: likeBusy,
            onClick: toggleLike,
            children: [Z(DclIcon, { name: `like` }), liked ? `Liked` : `Like`, likes?.length > 0 && Z(`span`, { className: `upd-like-count`, children: likes.length })],
          }),
          Z(`button`, { type: `button`, className: `upd-action`, onClick: () => replyEl?.focus(), children: [Z(DclIcon, { name: `reply` }), `Reply`] }),
        ],
      }),
      Z(`div`, {
        className: `upd-replies`,
        children: [
          ...replies.map(r => Z(`div`, {
            className: `upd-reply`,
            children: [
              Z(DclAvatar, { person: r.creator, small: true }),
              Z(`div`, {
                className: `upd-reply-main`,
                children: [
                  Z(`div`, {
                    className: `upd-reply-head`,
                    children: [
                      Z(`strong`, { children: r.creator?.name || `Automations` }),
                      Z(`span`, { className: `upd-time`, title: dclFmtFull(r.created_at), children: dclFmtRelative(r.created_at) }),
                    ],
                  }),
                  Z(DclUpdateBody, { html: r.body }),
                ],
              }),
            ],
          }, r.id)),
          Z(DclComposer, {
            placeholder: `Write a reply and mention others with @`,
            buttonLabel: `Reply`,
            compact: true,
            me,
            users,
            people,
            itemId,
            inputRef: setReplyEl,
            onSubmit: async (html, mentionIds) => { await dclPostUpdate(itemId, html, u.id, mentionIds); await onChanged(); },
          }),
        ],
      }),
    ],
  });
}

/* ---------- "Create updates via email" window (like monday's) ---------- */

// Show the start and the domain of a long address: zvg-group_puls…@euc1.mx.monday.com
function dclShortEmail(email) {
  let [local, domain] = String(email).split(`@`);
  return local && local.length > 16 ? `${local.slice(0, 14)}…@${domain}` : email;
}

function DclEmailModal({ email, itemId, onClose }) {
  let [copied, setCopied] = H(``), [customOpen, setCustomOpen] = H(false), [customCopied, setCustomCopied] = H(``);
  let customEmail = `pulse-${itemId}@${DCL_CUSTOM_EMAIL_DOMAIN}`;
  U(() => {
    let onKey = e => { if (e.key === `Escape`) onClose(); };
    document.addEventListener(`keydown`, onKey);
    return () => document.removeEventListener(`keydown`, onKey);
  }, []);
  return Z(`div`, {
    className: `em-overlay`,
    onMouseDown: e => { if (e.target === e.currentTarget) onClose(); },
    children: Z(`div`, {
      className: `em-card`,
      role: `dialog`,
      "aria-modal": `true`,
      "aria-label": `Create updates via email`,
      children: [
        Z(`button`, { type: `button`, className: `em-close`, title: `Close`, onClick: onClose, children: `✕` }),
        Z(`h2`, { className: `em-title`, children: `Create updates via email` }),
        Z(`p`, { className: `em-sub`, children: `Create updates on this item by sending an email to this address.` }),
        Z(`div`, {
          className: `em-section`,
          children: [
            Z(`div`, { className: `em-section-title`, children: [Z(`span`, { className: `em-ic`, children: `🛡` }), `Secure address`] }),
            Z(`div`, { className: `em-section-sub`, children: `Can be used by people outside the company` }),
            email === null
              ? Z(`div`, { className: `em-address`, children: Z(`span`, { className: `muted`, children: `Loading…` }) })
              : email
                ? Z(`div`, {
                    className: `em-address`,
                    children: [
                      Z(`span`, { className: `em-address-text`, title: email, children: dclShortEmail(email) }),
                      Z(`button`, {
                        type: `button`,
                        className: `em-copy`,
                        onClick: async () => { setCopied((await dclCopy(email)) ? `Copied` : `Copy failed`); setTimeout(() => setCopied(``), 2000); },
                        children: [`⧉ `, copied || `Copy`],
                      }),
                    ],
                  })
                : Z(`div`, { className: `em-address`, children: Z(`span`, { className: `muted`, children: `The address isn't available here. Open monday's Updates tab to get it.` }) }),
          ],
        }),
        Z(`div`, {
          className: `em-section em-section-custom`,
          children: [
            Z(`button`, {
              type: `button`,
              className: `em-expand`,
              onClick: () => setCustomOpen(!customOpen),
              "aria-expanded": customOpen,
              children: [
                Z(`span`, {
                  children: [
                    Z(`span`, { className: `em-section-title`, children: [Z(`span`, { className: `em-ic`, children: `⚙` }), `Custom address`] }),
                    Z(`span`, { className: `em-section-sub`, children: `Can be used only by account members` }),
                  ],
                }),
                Z(`span`, { className: `em-chevron`, children: customOpen ? `▴` : `▾` }),
              ],
            }),
            customOpen && Z(`div`, {
              className: `em-address em-address-custom`,
              children: [
                Z(`span`, { className: `em-address-text`, title: customEmail, children: dclShortEmail(customEmail) }),
                Z(`button`, {
                  type: `button`,
                  className: `em-copy em-copy-dark`,
                  onClick: async () => { setCustomCopied((await dclCopy(customEmail)) ? `Copied` : `Copy failed`); setTimeout(() => setCustomCopied(``), 2000); },
                  children: [`⧉ `, customCopied || `Copy`],
                }),
              ],
            }),
            customOpen && Z(`div`, {
              className: `em-custom-note`,
              children: [
                `This is the item's default address. If someone renamed it in monday's own Updates tab (✎), use that one instead. `,
                Z(`button`, { type: `button`, className: `hp-clear`, onClick: () => { onClose(); dclOpenMondayUpdates(itemId); }, children: `Open monday Updates` }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}

/* ---------- Feed ---------- */

// The deal's monday Updates: links + write box on top, then the feed (newest first).
function DclUpdatesFeed({ itemId, boardId, userId }) {
  let [list, setList] = H([]), [loading, setLoading] = H(true), [err, setErr] = H(``), [all, setAll] = H(false);
  let [reactions, setReactions] = H({}), [users, setUsers] = H([]), [me, setMe] = H(null);
  let [emailOpen, setEmailOpen] = H(false), [email, setEmail] = H(null);
  let [extras, setExtras] = H({ memberIds: [], teams: [] });
  let people = { users, memberIds: extras.memberIds, teams: extras.teams, boardId };

  let loadReactions = Re(async () => setReactions(await dclLoadReactions(itemId)), [itemId]);
  let load = Re(async () => {
    setErr(``);
    try {
      setList(await dclLoadUpdates(itemId));
      loadReactions();
    } catch (e) {
      setErr(e.message || `Could not load updates.`);
    } finally {
      setLoading(false);
    }
  }, [itemId, loadReactions]);
  U(() => { load(); }, [load]);
  U(() => {
    dclLoadUsers().then(list => {
      setUsers(list);
      let self = userId && list.find(u => String(u.id) === String(userId));
      if (self) setMe(self);
      else if (userId) dclTry(() => dclApi(`query ($ids: [ID!]) { users (ids: $ids) { id name photo_thumb_small } }`, { ids: [String(userId)] })).then(d => d?.users?.[0] && setMe(d.users[0]));
    });
  }, [userId]);
  U(() => { dclLoadMentionExtras(boardId).then(setExtras); }, [boardId]);

  async function openEmail() {
    setEmailOpen(true);
    if (email === null) setEmail(await dclLoadItemEmail(itemId));
  }

  let ordered = [...list].sort((a, b) => (reactions[b.id]?.pinned ? 1 : 0) - (reactions[a.id]?.pinned ? 1 : 0)); // pinned first, else newest first
  let shown = all ? ordered : ordered.slice(0, 5);
  return Z(`section`, {
    className: `upd-section upd-panel`,
    children: [
      // Panel header: title + count on the left, monday's two links on the right.
      Z(`div`, {
        className: `upd-panel-head`,
        children: [
          dclSectionTitle(`💬`, `Updates`, list.length),
          Z(`div`, {
            className: `upd-toplinks`,
            children: [
              Z(`button`, { type: `button`, className: `upd-toplink`, onClick: openEmail, children: [Z(DclIcon, { name: `mail` }), `Update via email`] }),
              Z(`span`, { className: `upd-sep` }),
              Z(`a`, { className: `upd-toplink`, href: DCL_FEEDBACK_URL, target: `_blank`, rel: `noopener noreferrer`, children: [Z(DclIcon, { name: `feedback` }), `Give feedback`] }),
            ],
          }),
        ],
      }),
      emailOpen && Z(DclEmailModal, { email, itemId, onClose: () => setEmailOpen(false) }),
      Z(DclComposer, {
        placeholder: `Write an update and mention others with @`,
        buttonLabel: `Update`,
        allowAi: true,
        users,
        people,
        itemId,
        onSubmit: async (html, mentionIds) => { await dclPostUpdate(itemId, html, null, mentionIds); await load(); },
      }),
      err && Z(`div`, { className: `banner banner-error`, role: `alert`, children: [Z(`strong`, { children: `Updates could not be loaded.` }), ` `, err] }),
      loading
        ? Z(`div`, {
            className: `upd-list`,
            "aria-label": `Loading updates`,
            children: [0, 1].map(k => Z(`div`, {
              className: `upd-skel`,
              children: [
                Z(`div`, { className: `upd-skel-head`, children: [Z(`span`, { className: `upd-skel-avatar` }), Z(`span`, { className: `upd-skel-line upd-skel-short` })] }),
                Z(`span`, { className: `upd-skel-line` }),
                Z(`span`, { className: `upd-skel-line upd-skel-mid` }),
              ],
            }, k)),
          })
        : !err && list.length === 0
          ? Z(`div`, { className: `upd-empty`, children: `No updates yet on this deal.` })
          : Z(`div`, {
              className: `upd-list`,
              children: shown.map(u => Z(DclUpdateCard, {
                u,
                itemId,
                boardId,
                userId,
                me,
                users,
                people,
                reaction: reactions[u.id],
                onChanged: load,
                onReactionsChanged: loadReactions,
              }, u.id)),
            }),
      list.length > shown.length && Z(`button`, {
        type: `button`,
        className: `btn btn-ghost upd-older`,
        onClick: () => setAll(true),
        children: `Show ${list.length - shown.length} older update${list.length - shown.length === 1 ? `` : `s`}`,
      }),
    ],
  });
}

// Comment Builder (v4): main screen.
// build.py inserts updates-feed.js and then this file into the v2 bundle in place of its original `function Pn(){…}`.
// Layout, top to bottom: deal header → monday Updates (updates-feed.js) → comment form with the comment
// history panel beside it (sticky, searchable, filterable — no scrolling down, no separate tab).
// Uses the bundle's own helpers: Z (jsx), H (useState), U (useEffect), Re (useCallback), Cn (monday SDK),
// Q (field), Mn (chips), Nn (dropdown), $ (pill), Y (label colour), jn (empty form), option lists Gt/qt/Jt/Yt/Kt,
// and from updates-feed.js: DclUpdatesFeed, dclSectionTitle, dclFmtShort, dclFmtFull, dclInitials.

/* ---------- ✨ Autofill ---------- */

// Sends the comment to the app server (/api/ai/autofill → OpenAI), which picks the classification using the team's
// category definitions and priority rules. Returns e.g.
//   { escalation: `Yes`, categories: `W-Quote`, mainCategory: `Quote`, subCategory: `TERMS`, nextStep: `Send Proposal`, dueDate: `2026-10-30` }
// Every value is checked against this form's own option lists; anything else is dropped.
// Returns null when there is no app server (zip version): the button then shows "coming soon".
function dclYmd(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, `0`)}-${String(d.getDate()).padStart(2, `0`)}`;
}

async function dclAiAutofill(comment, deal, history) {
  let now = new Date();
  let options = { escalation: Gt, categories: qt, mainCategory: Jt, subCategory: Yt, nextStep: Kt };
  // Earlier comments on this deal that the team already tagged: examples of how they classify.
  let examples = (history || [])
    .filter(h => h.comment && (h.categories || h.mainCategory || h.subCategory || h.nextStep))
    .slice(0, 8)
    .map(h => ({ comment: h.comment.slice(0, 400), escalation: h.escalation, categories: h.categories, mainCategory: h.mainCategory, subCategory: h.subCategory, nextStep: h.nextStep }));
  let data = await dclServer(`/ai/autofill`, {
    comment,
    today: dclYmd(now),
    weekday: now.toLocaleDateString(`en-GB`, { weekday: `long` }),
    dealName: deal?.name || ``,
    dealStage: deal?.stage || ``,
    options,
    examples,
  });
  if (!data) return null;
  let f = data.fields || {}, out = {};
  let pick = (val, list) => list.find(o => o.toLowerCase() === String(val || ``).trim().toLowerCase()) || ``;
  for (let key of Object.keys(options)) {
    let v = pick(f[key], options[key]);
    if (v) out[key] = v;
  }
  if (/^\d{4}-\d{2}-\d{2}$/.test(f.dueDate || ``)) out.dueDate = f.dueDate;
  if (/^https?:\/\//i.test(f.transcript || ``)) out.transcript = f.transcript;
  return out;
}

/* ---------- Comment history panel (beside the form) ---------- */

function dclHistDate(e) {
  return e.date ? dclFmtShort(`${e.date}T12:00:00`) : dclFmtShort(e.createdAt);
}

function DclHistoryPanel({ items, highlightId }) {
  let [query, setQuery] = H(``), [filter, setFilter] = H(`all`), [openId, setOpenId] = H(null);
  let [cat, setCat] = H(``); // Catagories filter, e.g. `W-Quote` (same chips as the form)
  let boards = [...new Set(items.map(e => e.boardLabel).filter(Boolean))];
  let escalations = items.filter(e => e.escalation === `Yes`).length;
  let q = query.trim().toLowerCase();
  let anyFilter = !!cat || filter !== `all` || !!q;
  let shown = items.filter(e => {
    if (filter === `esc` && e.escalation !== `Yes`) return false;
    if (filter.startsWith(`board:`) && e.boardLabel !== filter.slice(6)) return false;
    if (cat && e.categories !== cat) return false;
    if (!q) return true;
    return [e.comment, e.categories, e.mainCategory, e.subCategory, e.nextStep, e.boardLabel, e.author, e.authorEmail, e.originBoard].join(` `).toLowerCase().includes(q);
  });
  // One chip per category (qt = the form's Catagories options), coloured like the form.
  let catChips = qt.map(c => {
    let active = cat === c;
    let count = items.filter(e => e.categories === c).length;
    return Z(`button`, {
      type: `button`,
      className: `chip hp-cat${active ? ` chip-active` : ``}${count ? `` : ` is-empty`}`,
      style: active ? { background: Y(c), borderColor: Y(c) } : undefined,
      "aria-pressed": active,
      onClick: () => setCat(active ? `` : c),
      children: [!active && Z(`span`, { className: `chip-dot`, style: { background: Y(c) } }), c, Z(`span`, { className: `hp-cat-count`, children: count })],
    }, c);
  });
  // "All" clears the category too; the other chips keep it.
  let chip = (key, label, count) =>
    Z(`button`, {
      type: `button`,
      className: `hp-chip${filter === key && (key !== `all` || !cat) ? ` is-active` : ``}`,
      onClick: () => { setFilter(key); if (key === `all`) setCat(``); },
      children: [label, Z(`span`, { className: `hp-chip-count`, children: count })],
    }, key);

  return Z(`aside`, {
    className: `hp`,
    children: [
      Z(`div`, {
        className: `hp-head`,
        children: [
          Z(`div`, {
            className: `hp-title`,
            children: [Z(`span`, { className: `section-icon`, children: `🕘` }), `Comment history`, items.length > 0 && Z(`span`, { className: `count`, children: items.length })],
          }),
          items.length > 0 && Z(`input`, {
            className: `hp-search`,
            type: `search`,
            value: query,
            placeholder: `Search comments…`,
            onChange: ev => setQuery(ev.target.value),
          }),
          items.length > 0 && Z(`div`, {
            className: `hp-chips`,
            children: [
              chip(`all`, `All`, items.length),
              escalations > 0 && chip(`esc`, `Escalations`, escalations),
              ...(boards.length > 1 ? boards.map(b => chip(`board:${b}`, b, items.filter(e => e.boardLabel === b).length)) : []),
              ...catChips, // Catagories, right beside "All"
            ],
          }),
          anyFilter && Z(`div`, {
            className: `hp-result`,
            children: [
              `Showing ${shown.length} of ${items.length}`,
              Z(`button`, { type: `button`, className: `hp-clear`, onClick: () => { setCat(``), setFilter(`all`), setQuery(``); }, children: `Clear filters` }),
            ],
          }),
        ],
      }),
      Z(`div`, {
        className: `hp-list`,
        children: items.length === 0
          ? Z(`div`, { className: `hp-empty`, children: [Z(`div`, { className: `hp-empty-icon`, children: `💬` }), `No comments yet. Your first one will appear here.`] })
          : shown.length === 0
            ? Z(`div`, { className: `hp-empty`, children: `Nothing matches this search.` })
            : shown.map((e, idx) => {
                let open = openId === e.id;
                let tags = [e.escalation === `Yes` && Z($, { label: `Escalation` }), Z($, { label: e.categories }), Z($, { label: e.mainCategory }), Z($, { label: e.subCategory })].filter(Boolean);
                return Z(`article`, {
                  className: `hp-item${open ? ` is-open` : ``}${e.id === highlightId ? ` is-new` : ``}${e.escalation === `Yes` ? ` is-esc` : ``}`,
                  children: [
                    Z(`button`, {
                      type: `button`,
                      className: `hp-row`,
                      onClick: () => setOpenId(open ? null : e.id),
                      "aria-expanded": open,
                      children: [
                        Z(`span`, { className: `hp-rail`, children: [Z(`span`, { className: `hp-dot` }), idx < shown.length - 1 && Z(`span`, { className: `hp-line` })] }),
                        Z(`span`, {
                          className: `hp-main`,
                          children: [
                            Z(`span`, {
                              className: `hp-top`,
                              children: [
                                Z(`strong`, { title: dclFmtFull(e.createdAt), children: dclHistDate(e) }),
                                e.id === highlightId && Z(`span`, { className: `hp-new`, children: `New` }),
                                e.escalation === `Yes` && Z(`span`, { className: `hp-flag`, children: `⚑ Escalation` }),
                                e.author && Z(`span`, { className: `hp-by`, children: `by ${e.author}` }),
                                Z(`span`, { className: `hp-chevron`, children: open ? `▴` : `▾` }),
                              ],
                            }),
                            Z(`span`, { className: `hp-text`, children: e.comment || e.name }),
                          ],
                        }),
                      ],
                    }),
                    open && Z(`div`, {
                      className: `hp-details`,
                      children: [
                        tags.length > 0 && Z(`div`, { className: `hp-tags`, children: tags }),
                        e.nextStep && Z(`div`, { className: `hp-detail`, children: [Z(`span`, { children: `Next step` }), Z($, { label: e.nextStep })] }),
                        (e.author || e.authorEmail) && Z(`div`, {
                          className: `hp-detail`,
                          children: [
                            Z(`span`, { children: `Logged by` }),
                            Z(`span`, {
                              className: `hp-author`,
                              children: [
                                Z(`strong`, { children: e.author || e.authorEmail }),
                                e.author && e.authorEmail && Z(`a`, { className: `hp-email`, href: `mailto:${e.authorEmail}`, children: e.authorEmail }),
                              ],
                            }),
                          ],
                        }),
                        e.originBoard && Z(`div`, {
                          className: `hp-detail`,
                          children: [Z(`span`, { children: `From` }), Z(`strong`, { children: [e.originBoard, e.originItem && Z(`span`, { className: `hp-origin-item`, children: ` · ${e.originItem}` })] })],
                        }),
                        e.boardLabel && Z(`div`, { className: `hp-detail`, children: [Z(`span`, { children: `Saved on` }), Z(`strong`, { children: e.boardLabel })] }),
                        Z(`div`, { className: `hp-detail`, children: [Z(`span`, { children: `Logged` }), Z(`strong`, { children: dclFmtFull(e.createdAt) })] }),
                      ],
                    }),
                  ],
                }, e.id);
              }),
      }),
    ],
  });
}

/* ---------- Main screen ---------- */

function Pn() {
  let [e, t] = H(null), // monday context
    [n, r] = H(null), // deal
    [i, a] = H(jn), // form
    [o, s] = H([]), // comment history
    [u, d] = H(!0), // loading
    [f, p] = H(!1), // saving
    [m, h] = H(``), // error
    [g, _] = H(null), // toast
    [lastId, setLastId] = H(null), // just-logged comment (highlighted in the history panel)
    [aiBusy, setAiBusy] = H(!1),
    [aiNote, setAiNote] = H(``),
    v = k => val => a(prev => ({ ...prev, [k]: val }));
  U(() => {
    Cn.listen(`context`, c => t(c.data));
    Cn.get(`context`).then(c => t(c.data)).catch(() => {});
  }, []);
  let y = e?.itemId || e?.itemIds?.[0],
    b = Re(async () => {
      if (y) {
        d(!0), h(``);
        try {
          let deal = await Tn(y);
          r(deal), s(await On(deal.id || y));
        } catch (err) {
          h(err.message || `Could not load this deal.`);
        } finally {
          d(!1);
        }
      }
    }, [y]);
  U(() => { b(); }, [b]);
  let x = i.comment.trim().length,
    S = x > 0 && !f && !!n,
    C = En(i.comment, n?.name, n);
  async function w(ev) {
    if ((ev.preventDefault(), S)) {
      p(!0), h(``);
      try {
        let created = await Dn({ form: i, deal: n });
        a(jn()), setAiNote(``), setLastId(created.id), _(`Comment logged to ${created.boardLabel} — "${created.name}"`), s(await On(n.id || y, [created.id])), setTimeout(() => _(null), 4e3);
      } catch (err) {
        h(err.message || `Could not save the comment.`);
      } finally {
        p(!1);
      }
    }
  }
  // ✨ Autofill: fills the fields below the comment from its text (see dclAiAutofill).
  async function autofill() {
    if (!x || aiBusy) return;
    setAiBusy(!0), setAiNote(``);
    try {
      let fields = await dclAiAutofill(i.comment, n, o);
      if (fields === null) setAiNote(`Autofill is coming soon. It will fill Classification, Next step and Due date from your comment.`);
      else if (!Object.keys(fields).length) setAiNote(`Autofill couldn't tell the classification from this comment. Add a bit more detail and try again.`);
      else {
        a(prev => ({ ...prev, ...fields }));
        let labels = { escalation: `Escalation`, categories: `Catagories`, mainCategory: `Main`, subCategory: `Sub`, nextStep: `Next step`, dueDate: `Due date`, transcript: `Transcript` };
        let missing = [`mainCategory`, `subCategory`, `categories`, `escalation`].filter(k => !fields[k]).map(k => labels[k]);
        setAiNote(`Filled by Autofill: ${Object.keys(fields).map(k => labels[k] || k).join(`, `)}.${missing.length ? ` Not filled: ${missing.join(`, `)}.` : ``} Please check before saving.`);
      }
    } catch (err) {
      setAiNote(err.message || `Autofill failed.`);
    } finally {
      setAiBusy(!1);
    }
  }
  if (u) return Z(`div`, { className: `app app-center`, children: [Z(`div`, { className: `spinner` }), Z(`p`, { className: `muted`, children: `Loading deal…` })] });
  if (!y) {
    return Z(`div`, {
      className: `app app-center`,
      children: [Z(`h2`, { children: `No deal in context` }), Z(`p`, { className: `muted`, children: `Open this view from inside a Deals item so the comment can be linked back to the right deal.` })],
    });
  }
  return Z(`div`, {
    className: `app`,
    children: [
      Z(`header`, {
        className: `header`,
        children: [
          Z(`div`, { className: `deal-avatar`, "aria-hidden": `true`, children: dclInitials(n?.name || `Deal`) }),
          Z(`div`, {
            className: `header-main`,
            children: [
              Z(`div`, { className: `eyebrow`, children: `Logging a comment on` }),
              n?.openedFrom && Z(`div`, { className: `opened-from`, children: [`Opened from `, Z(`strong`, { children: n.openedFrom.boardName }), ` ("${n.openedFrom.itemName}"). Showing its ${n.kind === `lead` ? `lead` : n.kind === `source` ? `item` : `deal`}.`] }),
              Z(`h1`, { className: `deal-name`, children: n?.name || `Deal` }),
              Z(`div`, {
                className: `meta`,
                children: [
                  n?.stage && Z($, { label: n.stage }),
                  n?.kind === `source` && n.boardName && Z(`span`, { className: `meta-item`, children: n.boardName }),
                  n?.dealId && Z(`span`, { className: `meta-item`, children: [n.kind === `lead` ? `Lead ID ` : n.kind === `source` ? `ID ` : `Deal ID `, n.dealId] }),
                  n?.owner && Z(`span`, { className: `meta-item`, children: n.owner }),
                ],
              }),
            ],
          }),
          Z(`div`, {
            className: `linked-badge`,
            title: n?.noLink ? `Comments from this board are saved with the board name, without a link` : `This comment is linked automatically`,
            children: [Z(`span`, { className: `link-icon`, children: `🔗` }), Z(`span`, { children: n?.noLink ? `Not linked (saved with board name)` : n?.kind === `lead` ? `Auto-linked to this lead` : n?.kind === `source` ? `Auto-linked to this item` : `Auto-linked to this deal` })],
          }),
        ],
      }),
      m && Z(`div`, {
        className: `banner banner-error`,
        role: `alert`,
        children: [Z(`strong`, { children: `Something went wrong.` }), ` `, m, Z(`button`, { className: `banner-action`, onClick: b, children: `Retry` })],
      }),
      // 1. monday Updates of this deal
      n && Z(DclUpdatesFeed, { itemId: n.id || y, boardId: n.boardId, userId: e?.user?.id }),
      // 2. Deal comment form (unchanged behaviour)
      dclSectionTitle(`✏️`, `Log a new comment`, 0),
      Z(`div`, {
        className: `cb-split`,
        children: [
      Z(`form`, {
        className: `form`,
        onSubmit: w,
        children: [
          Z(`section`, {
            className: `card card-primary cb-comment-card`,
            children: [
              // Label row: "Comment * the only required field" on the left, Autofill button on the right (same line, no overlap).
              Z(`div`, {
                className: `field`,
                role: `group`,
                "aria-label": `Comment`,
                children: [
                  Z(`div`, {
                    className: `cb-comment-head`,
                    children: [
                      Z(`span`, {
                        className: `field-label`,
                        children: [`Comment`, Z(`span`, { className: `req`, "aria-hidden": `true`, children: `*` }), Z(`span`, { className: `hint`, children: `the only required field` })],
                      }),
                      Z(`button`, {
                        type: `button`,
                        className: `ai-btn${aiBusy ? ` is-busy` : ``}`,
                        disabled: !x || aiBusy,
                        title: x ? `Fill Classification, Next step and Due date from this comment` : `Write a comment first`,
                        onClick: autofill,
                        children: [Z(`span`, { className: `ai-spark`, children: `✨` }), aiBusy ? `Filling…` : `Autofill`],
                      }),
                    ],
                  }),
                  Z(`textarea`, {
                    className: `textarea`,
                    rows: 5,
                    value: i.comment,
                    placeholder: `What happened on this deal? Log it plainly — you can tag it below, or not at all.`,
                    onChange: ev => v(`comment`)(ev.target.value),
                  }),
                ],
              }),
              Z(`div`, {
                className: `under-textarea`,
                children: [
                  Z(`span`, { className: `muted small`, children: [`Saves as: `, Z(`strong`, { children: C })] }),
                  Z(`span`, { className: `muted small${x ? `` : ` dim`}`, children: [x, ` characters`] }),
                ],
              }),
              aiNote && Z(`div`, { className: `ai-note`, role: `status`, children: [Z(`span`, { children: `✨` }), aiNote] }),
            ],
          }),
          Z(`div`, {
            className: `grid-2`,
            children: [
              Z(`section`, {
                className: `card`,
                children: Z(Q, {
                  label: `Date of comment`,
                  children: Z(`input`, { type: `date`, className: `input`, value: i.dateOfComment, onChange: ev => v(`dateOfComment`)(ev.target.value) }),
                }),
              }),
              Z(`section`, {
                className: `card`,
                children: Z(Q, { label: `Escalation needed`, children: Z(Mn, { options: Gt, value: i.escalation, onChange: v(`escalation`) }) }),
              }),
            ],
          }),
          Z(`section`, {
            className: `card`,
            children: [
              Z(`div`, { className: `card-title`, children: [`Classification `, Z(`span`, { className: `muted small`, children: `— all optional` })] }),
              Z(Q, { label: `Catagories`, children: Z(Mn, { options: qt, value: i.categories, onChange: v(`categories`) }) }),
              Z(`div`, {
                className: `grid-2`,
                children: [
                  Z(Q, { label: `Main Catagory`, children: Z(Nn, { options: Jt, value: i.mainCategory, onChange: v(`mainCategory`), placeholder: `Select main category` }) }),
                  Z(Q, { label: `Sub catagory`, children: Z(Nn, { options: Yt, value: i.subCategory, onChange: v(`subCategory`), placeholder: `Select sub category` }) }),
                ],
              }),
              Z(Q, { label: `Next Step`, children: Z(Nn, { options: Kt, value: i.nextStep, onChange: v(`nextStep`), placeholder: `Select next step` }) }),
              Z(`div`, {
                className: `grid-2`,
                children: [
                  Z(Q, {
                    label: `Due Date`,
                    children: Z(`input`, { type: `date`, className: `input`, value: i.dueDate, onChange: ev => v(`dueDate`)(ev.target.value) }),
                  }),
                  Z(Q, {
                    label: `Discussed Topic — AI Transcript`,
                    children: Z(`input`, { type: `url`, className: `input`, value: i.transcript, placeholder: `https://…`, onChange: ev => v(`transcript`)(ev.target.value) }),
                  }),
                ],
              }),
            ],
          }),
          Z(`footer`, {
            className: `actions`,
            children: [
              Z(`button`, { type: `button`, className: `btn btn-ghost`, onClick: () => { a(jn()), setAiNote(``); }, disabled: f, children: `Clear` }),
              Z(`button`, { type: `submit`, className: `btn btn-primary`, disabled: !S, children: f ? `Saving…` : `Log comment` }),
            ],
          }),
        ],
      }),
      // 3. Comment history, beside the form (sticky; no scrolling down, no separate tab)
      n && Z(DclHistoryPanel, { items: o, highlightId: lastId }),
        ],
      }),
      g && Z(`div`, { className: `toast`, role: `status`, children: g }),
    ],
  });
}

Ut(document.getElementById(`root`)).render(Z(Ht.StrictMode,{children:Z(Pn,{})}));
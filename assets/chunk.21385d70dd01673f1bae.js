(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[0],{25:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},26:function(e,t,n){var r,i,o
function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}o=function(){"use strict"
var e=navigator.userAgent,t=navigator.platform,n=/gecko\/\d/i.test(e),r=/MSIE \d/.test(e),i=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),o=/Edge\/(\d+)/.exec(e),s=r||i||o,l=s&&(r?document.documentMode||6:+(o||i)[1]),c=!o&&/WebKit\//.test(e),u=c&&/Qt\/\d+\.\d+/.test(e),d=!o&&/Chrome\//.test(e),h=/Opera\//.test(e),f=/Apple Computer/.test(navigator.vendor),p=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),g=/PhantomJS/.test(e),m=!o&&/AppleWebKit/.test(e)&&/Mobile\/\w+/.test(e),v=/Android/.test(e),y=m||v||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),b=m||/Mac/.test(t),C=/\bCrOS\b/.test(e),w=/win/i.test(t),_=h&&e.match(/Version\/(\d*\.\d*)/)
_&&(_=Number(_[1])),_&&_>=15&&(h=!1,c=!0)
var T=b&&(u||h&&(null==_||_<12.11)),E=n||s&&l>=9
function x(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}var S,N=function(e,t){var n=e.className,r=x(t).exec(n)
if(r){var i=n.slice(r.index+r[0].length)
e.className=n.slice(0,r.index)+(i?r[1]+i:"")}}
function k(e){for(var t=e.childNodes.length;t>0;--t)e.removeChild(e.firstChild)
return e}function L(e,t){return k(e).appendChild(t)}function M(e,t,n,r){var i=document.createElement(e)
if(n&&(i.className=n),r&&(i.style.cssText=r),"string"==typeof t)i.appendChild(document.createTextNode(t))
else if(t)for(var o=0;o<t.length;++o)i.appendChild(t[o])
return i}function A(e,t,n,r){var i=M(e,t,n,r)
return i.setAttribute("role","presentation"),i}function O(e,t){if(3==t.nodeType&&(t=t.parentNode),e.contains)return e.contains(t)
do{if(11==t.nodeType&&(t=t.host),t==e)return!0}while(t=t.parentNode)}function B(){var e
try{e=document.activeElement}catch(t){e=document.body||null}for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement
return e}function D(e,t){var n=e.className
x(t).test(n)||(e.className+=(n?" ":"")+t)}function I(e,t){for(var n=e.split(" "),r=0;r<n.length;r++)n[r]&&!x(n[r]).test(t)&&(t+=" "+n[r])
return t}S=document.createRange?function(e,t,n,r){var i=document.createRange()
return i.setEnd(r||e,n),i.setStart(e,t),i}:function(e,t,n){var r=document.body.createTextRange()
try{r.moveToElementText(e.parentNode)}catch(e){return r}return r.collapse(!0),r.moveEnd("character",n),r.moveStart("character",t),r}
var R=function(e){e.select()}
function P(e){var t=Array.prototype.slice.call(arguments,1)
return function(){return e.apply(null,t)}}function H(e,t,n){for(var r in t||(t={}),e)!e.hasOwnProperty(r)||!1===n&&t.hasOwnProperty(r)||(t[r]=e[r])
return t}function F(e,t,n,r,i){null==t&&-1==(t=e.search(/[^\s\u00a0]/))&&(t=e.length)
for(var o=r||0,a=i||0;;){var s=e.indexOf("\t",o)
if(s<0||s>=t)return a+(t-o)
a+=s-o,a+=n-a%n,o=s+1}}m?R=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:s&&(R=function(e){try{e.select()}catch(e){}})
var U=function(){this.id=null,this.f=null,this.time=0,this.handler=P(this.onTimeout,this)}
function W(e,t){for(var n=0;n<e.length;++n)if(e[n]==t)return n
return-1}U.prototype.onTimeout=function(e){e.id=0,e.time<=+new Date?e.f():setTimeout(e.handler,e.time-+new Date)},U.prototype.set=function(e,t){this.f=t
var n=+new Date+e;(!this.id||n<this.time)&&(clearTimeout(this.id),this.id=setTimeout(this.handler,e),this.time=n)}
var q={toString:function(){return"CodeMirror.Pass"}},j={scroll:!1},z={origin:"*mouse"},V={origin:"+move"}
function K(e,t,n){for(var r=0,i=0;;){var o=e.indexOf("\t",r);-1==o&&(o=e.length)
var a=o-r
if(o==e.length||i+a>=t)return r+Math.min(a,t-i)
if(i+=o-r,r=o+1,(i+=n-i%n)>=t)return r}}var G=[""]
function $(e){for(;G.length<=e;)G.push(Y(G)+" ")
return G[e]}function Y(e){return e[e.length-1]}function X(e,t){for(var n=[],r=0;r<e.length;r++)n[r]=t(e[r],r)
return n}function Z(){}function Q(e,t){var n
return Object.create?n=Object.create(e):(Z.prototype=e,n=new Z),t&&H(t,n),n}var J=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/
function ee(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||J.test(e))}function te(e,t){return t?!!(t.source.indexOf("\\w")>-1&&ee(e))||t.test(e):ee(e)}function ne(e){for(var t in e)if(e.hasOwnProperty(t)&&e[t])return!1
return!0}var re=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/
function ie(e){return e.charCodeAt(0)>=768&&re.test(e)}function oe(e,t,n){for(;(n<0?t>0:t<e.length)&&ie(e.charAt(t));)t+=n
return t}function ae(e,t,n){for(var r=t>n?-1:1;;){if(t==n)return t
var i=(t+n)/2,o=r<0?Math.ceil(i):Math.floor(i)
if(o==t)return e(o)?t:n
e(o)?n=o:t=o+r}}var se=null
function le(e,t,n){var r
se=null
for(var i=0;i<e.length;++i){var o=e[i]
if(o.from<t&&o.to>t)return i
o.to==t&&(o.from!=o.to&&"before"==n?r=i:se=i),o.from==t&&(o.from!=o.to&&"before"!=n?r=i:se=i)}return null!=r?r:se}var ce=function(){var e=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,t=/[stwN]/,n=/[LRr]/,r=/[Lb1n]/,i=/[1n]/
function o(e,t,n){this.level=e,this.from=t,this.to=n}return function(a,s){var l="ltr"==s?"L":"R"
if(0==a.length||"ltr"==s&&!e.test(a))return!1
for(var c,u=a.length,d=[],h=0;h<u;++h)d.push((c=a.charCodeAt(h))<=247?"bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(c):1424<=c&&c<=1524?"R":1536<=c&&c<=1785?"nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(c-1536):1774<=c&&c<=2220?"r":8192<=c&&c<=8203?"w":8204==c?"b":"L")
for(var f=0,p=l;f<u;++f){var g=d[f]
"m"==g?d[f]=p:p=g}for(var m=0,v=l;m<u;++m){var y=d[m]
"1"==y&&"r"==v?d[m]="n":n.test(y)&&(v=y,"r"==y&&(d[m]="R"))}for(var b=1,C=d[0];b<u-1;++b){var w=d[b]
"+"==w&&"1"==C&&"1"==d[b+1]?d[b]="1":","!=w||C!=d[b+1]||"1"!=C&&"n"!=C||(d[b]=C),C=w}for(var _=0;_<u;++_){var T=d[_]
if(","==T)d[_]="N"
else if("%"==T){var E=void 0
for(E=_+1;E<u&&"%"==d[E];++E);for(var x=_&&"!"==d[_-1]||E<u&&"1"==d[E]?"1":"N",S=_;S<E;++S)d[S]=x
_=E-1}}for(var N=0,k=l;N<u;++N){var L=d[N]
"L"==k&&"1"==L?d[N]="L":n.test(L)&&(k=L)}for(var M=0;M<u;++M)if(t.test(d[M])){var A=void 0
for(A=M+1;A<u&&t.test(d[A]);++A);for(var O="L"==(M?d[M-1]:l),B=O==("L"==(A<u?d[A]:l))?O?"L":"R":l,D=M;D<A;++D)d[D]=B
M=A-1}for(var I,R=[],P=0;P<u;)if(r.test(d[P])){var H=P
for(++P;P<u&&r.test(d[P]);++P);R.push(new o(0,H,P))}else{var F=P,U=R.length,W="rtl"==s?1:0
for(++P;P<u&&"L"!=d[P];++P);for(var q=F;q<P;)if(i.test(d[q])){F<q&&(R.splice(U,0,new o(1,F,q)),U+=W)
var j=q
for(++q;q<P&&i.test(d[q]);++q);R.splice(U,0,new o(2,j,q)),U+=W,F=q}else++q
F<P&&R.splice(U,0,new o(1,F,P))}return"ltr"==s&&(1==R[0].level&&(I=a.match(/^\s+/))&&(R[0].from=I[0].length,R.unshift(new o(0,0,I[0].length))),1==Y(R).level&&(I=a.match(/\s+$/))&&(Y(R).to-=I[0].length,R.push(new o(0,u-I[0].length,u)))),"rtl"==s?R.reverse():R}}()
function ue(e,t){var n=e.order
return null==n&&(n=e.order=ce(e.text,t)),n}var de=[],he=function(e,t,n){if(e.addEventListener)e.addEventListener(t,n,!1)
else if(e.attachEvent)e.attachEvent("on"+t,n)
else{var r=e._handlers||(e._handlers={})
r[t]=(r[t]||de).concat(n)}}
function fe(e,t){return e._handlers&&e._handlers[t]||de}function pe(e,t,n){if(e.removeEventListener)e.removeEventListener(t,n,!1)
else if(e.detachEvent)e.detachEvent("on"+t,n)
else{var r=e._handlers,i=r&&r[t]
if(i){var o=W(i,n)
o>-1&&(r[t]=i.slice(0,o).concat(i.slice(o+1)))}}}function ge(e,t){var n=fe(e,t)
if(n.length)for(var r=Array.prototype.slice.call(arguments,2),i=0;i<n.length;++i)n[i].apply(null,r)}function me(e,t,n){return"string"==typeof t&&(t={type:t,preventDefault:function(){this.defaultPrevented=!0}}),ge(e,n||t.type,e,t),_e(t)||t.codemirrorIgnore}function ve(e){var t=e._handlers&&e._handlers.cursorActivity
if(t)for(var n=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),r=0;r<t.length;++r)-1==W(n,t[r])&&n.push(t[r])}function ye(e,t){return fe(e,t).length>0}function be(e){e.prototype.on=function(e,t){he(this,e,t)},e.prototype.off=function(e,t){pe(this,e,t)}}function Ce(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function we(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function _e(e){return null!=e.defaultPrevented?e.defaultPrevented:0==e.returnValue}function Te(e){Ce(e),we(e)}function Ee(e){return e.target||e.srcElement}function xe(e){var t=e.which
return null==t&&(1&e.button?t=1:2&e.button?t=3:4&e.button&&(t=2)),b&&e.ctrlKey&&1==t&&(t=3),t}var Se,Ne,ke=function(){if(s&&l<9)return!1
var e=M("div")
return"draggable"in e||"dragDrop"in e}()
function Le(e){if(null==Se){var t=M("span","​")
L(e,M("span",[t,document.createTextNode("x")])),0!=e.firstChild.offsetHeight&&(Se=t.offsetWidth<=1&&t.offsetHeight>2&&!(s&&l<8))}var n=Se?M("span","​"):M("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px")
return n.setAttribute("cm-text",""),n}function Me(e){if(null!=Ne)return Ne
var t=L(e,document.createTextNode("AخA")),n=S(t,0,1).getBoundingClientRect(),r=S(t,1,2).getBoundingClientRect()
return k(e),!(!n||n.left==n.right)&&(Ne=r.right-n.right<3)}var Ae,Oe=3!="\n\nb".split(/\n/).length?function(e){for(var t=0,n=[],r=e.length;t<=r;){var i=e.indexOf("\n",t);-1==i&&(i=e.length)
var o=e.slice(t,"\r"==e.charAt(i-1)?i-1:i),a=o.indexOf("\r");-1!=a?(n.push(o.slice(0,a)),t+=a+1):(n.push(o),t=i+1)}return n}:function(e){return e.split(/\r\n?|\n/)},Be=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch(e){return!1}}:function(e){var t
try{t=e.ownerDocument.selection.createRange()}catch(e){}return!(!t||t.parentElement()!=e)&&0!=t.compareEndPoints("StartToEnd",t)},De="oncopy"in(Ae=M("div"))||(Ae.setAttribute("oncopy","return;"),"function"==typeof Ae.oncopy),Ie=null,Re={},Pe={}
function He(e,t){arguments.length>2&&(t.dependencies=Array.prototype.slice.call(arguments,2)),Re[e]=t}function Fe(e){if("string"==typeof e&&Pe.hasOwnProperty(e))e=Pe[e]
else if(e&&"string"==typeof e.name&&Pe.hasOwnProperty(e.name)){var t=Pe[e.name]
"string"==typeof t&&(t={name:t}),(e=Q(t,e)).name=t.name}else{if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return Fe("application/xml")
if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return Fe("application/json")}return"string"==typeof e?{name:e}:e||{name:"null"}}function Ue(e,t){t=Fe(t)
var n=Re[t.name]
if(!n)return Ue(e,"text/plain")
var r=n(e,t)
if(We.hasOwnProperty(t.name)){var i=We[t.name]
for(var o in i)i.hasOwnProperty(o)&&(r.hasOwnProperty(o)&&(r["_"+o]=r[o]),r[o]=i[o])}if(r.name=t.name,t.helperType&&(r.helperType=t.helperType),t.modeProps)for(var a in t.modeProps)r[a]=t.modeProps[a]
return r}var We={}
function qe(e,t){H(t,We.hasOwnProperty(e)?We[e]:We[e]={})}function je(e,t){if(!0===t)return t
if(e.copyState)return e.copyState(t)
var n={}
for(var r in t){var i=t[r]
i instanceof Array&&(i=i.concat([])),n[r]=i}return n}function ze(e,t){for(var n;e.innerMode&&(n=e.innerMode(t))&&n.mode!=e;)t=n.state,e=n.mode
return n||{mode:e,state:t}}function Ve(e,t,n){return!e.startState||e.startState(t,n)}var Ke=function(e,t,n){this.pos=this.start=0,this.string=e,this.tabSize=t||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=n}
function Ge(e,t){if((t-=e.first)<0||t>=e.size)throw new Error("There is no line "+(t+e.first)+" in the document.")
for(var n=e;!n.lines;)for(var r=0;;++r){var i=n.children[r],o=i.chunkSize()
if(t<o){n=i
break}t-=o}return n.lines[t]}function $e(e,t,n){var r=[],i=t.line
return e.iter(t.line,n.line+1,(function(e){var o=e.text
i==n.line&&(o=o.slice(0,n.ch)),i==t.line&&(o=o.slice(t.ch)),r.push(o),++i})),r}function Ye(e,t,n){var r=[]
return e.iter(t,n,(function(e){r.push(e.text)})),r}function Xe(e,t){var n=t-e.height
if(n)for(var r=e;r;r=r.parent)r.height+=n}function Ze(e){if(null==e.parent)return null
for(var t=e.parent,n=W(t.lines,e),r=t.parent;r;t=r,r=r.parent)for(var i=0;r.children[i]!=t;++i)n+=r.children[i].chunkSize()
return n+t.first}function Qe(e,t){var n=e.first
e:do{for(var r=0;r<e.children.length;++r){var i=e.children[r],o=i.height
if(t<o){e=i
continue e}t-=o,n+=i.chunkSize()}return n}while(!e.lines)
for(var a=0;a<e.lines.length;++a){var s=e.lines[a].height
if(t<s)break
t-=s}return n+a}function Je(e,t){return t>=e.first&&t<e.first+e.size}function et(e,t){return String(e.lineNumberFormatter(t+e.firstLineNumber))}function tt(e,t,n){if(void 0===n&&(n=null),!(this instanceof tt))return new tt(e,t,n)
this.line=e,this.ch=t,this.sticky=n}function nt(e,t){return e.line-t.line||e.ch-t.ch}function rt(e,t){return e.sticky==t.sticky&&0==nt(e,t)}function it(e){return tt(e.line,e.ch)}function ot(e,t){return nt(e,t)<0?t:e}function at(e,t){return nt(e,t)<0?e:t}function st(e,t){return Math.max(e.first,Math.min(t,e.first+e.size-1))}function lt(e,t){if(t.line<e.first)return tt(e.first,0)
var n=e.first+e.size-1
return t.line>n?tt(n,Ge(e,n).text.length):function(e,t){var n=e.ch
return null==n||n>t?tt(e.line,t):n<0?tt(e.line,0):e}(t,Ge(e,t.line).text.length)}function ct(e,t){for(var n=[],r=0;r<t.length;r++)n[r]=lt(e,t[r])
return n}Ke.prototype.eol=function(){return this.pos>=this.string.length},Ke.prototype.sol=function(){return this.pos==this.lineStart},Ke.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},Ke.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},Ke.prototype.eat=function(e){var t=this.string.charAt(this.pos)
if("string"==typeof e?t==e:t&&(e.test?e.test(t):e(t)))return++this.pos,t},Ke.prototype.eatWhile=function(e){for(var t=this.pos;this.eat(e););return this.pos>t},Ke.prototype.eatSpace=function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos
return this.pos>e},Ke.prototype.skipToEnd=function(){this.pos=this.string.length},Ke.prototype.skipTo=function(e){var t=this.string.indexOf(e,this.pos)
if(t>-1)return this.pos=t,!0},Ke.prototype.backUp=function(e){this.pos-=e},Ke.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=F(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?F(this.string,this.lineStart,this.tabSize):0)},Ke.prototype.indentation=function(){return F(this.string,null,this.tabSize)-(this.lineStart?F(this.string,this.lineStart,this.tabSize):0)},Ke.prototype.match=function(e,t,n){if("string"!=typeof e){var r=this.string.slice(this.pos).match(e)
return r&&r.index>0?null:(r&&!1!==t&&(this.pos+=r[0].length),r)}var i=function(e){return n?e.toLowerCase():e}
if(i(this.string.substr(this.pos,e.length))==i(e))return!1!==t&&(this.pos+=e.length),!0},Ke.prototype.current=function(){return this.string.slice(this.start,this.pos)},Ke.prototype.hideFirstChars=function(e,t){this.lineStart+=e
try{return t()}finally{this.lineStart-=e}},Ke.prototype.lookAhead=function(e){var t=this.lineOracle
return t&&t.lookAhead(e)},Ke.prototype.baseToken=function(){var e=this.lineOracle
return e&&e.baseToken(this.pos)}
var ut=function(e,t){this.state=e,this.lookAhead=t},dt=function(e,t,n,r){this.state=t,this.doc=e,this.line=n,this.maxLookAhead=r||0,this.baseTokens=null,this.baseTokenPos=1}
function ht(e,t,n,r){var i=[e.state.modeGen],o={}
wt(e,t.text,e.doc.mode,n,(function(e,t){return i.push(e,t)}),o,r)
for(var a=n.state,s=function(r){n.baseTokens=i
var s=e.state.overlays[r],l=1,c=0
n.state=!0,wt(e,t.text,s.mode,n,(function(e,t){for(var n=l;c<e;){var r=i[l]
r>e&&i.splice(l,1,e,i[l+1],r),l+=2,c=Math.min(e,r)}if(t)if(s.opaque)i.splice(n,l-n,e,"overlay "+t),l=n+2
else for(;n<l;n+=2){var o=i[n+1]
i[n+1]=(o?o+" ":"")+"overlay "+t}}),o),n.state=a,n.baseTokens=null,n.baseTokenPos=1},l=0;l<e.state.overlays.length;++l)s(l)
return{styles:i,classes:o.bgClass||o.textClass?o:null}}function ft(e,t,n){if(!t.styles||t.styles[0]!=e.state.modeGen){var r=pt(e,Ze(t)),i=t.text.length>e.options.maxHighlightLength&&je(e.doc.mode,r.state),o=ht(e,t,r)
i&&(r.state=i),t.stateAfter=r.save(!i),t.styles=o.styles,o.classes?t.styleClasses=o.classes:t.styleClasses&&(t.styleClasses=null),n===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier))}return t.styles}function pt(e,t,n){var r=e.doc,i=e.display
if(!r.mode.startState)return new dt(r,!0,t)
var o=function(e,t,n){for(var r,i,o=e.doc,a=n?-1:t-(e.doc.mode.innerMode?1e3:100),s=t;s>a;--s){if(s<=o.first)return o.first
var l=Ge(o,s-1),c=l.stateAfter
if(c&&(!n||s+(c instanceof ut?c.lookAhead:0)<=o.modeFrontier))return s
var u=F(l.text,null,e.options.tabSize);(null==i||r>u)&&(i=s-1,r=u)}return i}(e,t,n),a=o>r.first&&Ge(r,o-1).stateAfter,s=a?dt.fromSaved(r,a,o):new dt(r,Ve(r.mode),o)
return r.iter(o,t,(function(n){gt(e,n.text,s)
var r=s.line
n.stateAfter=r==t-1||r%5==0||r>=i.viewFrom&&r<i.viewTo?s.save():null,s.nextLine()})),n&&(r.modeFrontier=s.line),s}function gt(e,t,n,r){var i=e.doc.mode,o=new Ke(t,e.options.tabSize,n)
for(o.start=o.pos=r||0,""==t&&mt(i,n.state);!o.eol();)vt(i,o,n.state),o.start=o.pos}function mt(e,t){if(e.blankLine)return e.blankLine(t)
if(e.innerMode){var n=ze(e,t)
return n.mode.blankLine?n.mode.blankLine(n.state):void 0}}function vt(e,t,n,r){for(var i=0;i<10;i++){r&&(r[0]=ze(e,n).mode)
var o=e.token(t,n)
if(t.pos>t.start)return o}throw new Error("Mode "+e.name+" failed to advance stream.")}dt.prototype.lookAhead=function(e){var t=this.doc.getLine(this.line+e)
return null!=t&&e>this.maxLookAhead&&(this.maxLookAhead=e),t},dt.prototype.baseToken=function(e){if(!this.baseTokens)return null
for(;this.baseTokens[this.baseTokenPos]<=e;)this.baseTokenPos+=2
var t=this.baseTokens[this.baseTokenPos+1]
return{type:t&&t.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-e}},dt.prototype.nextLine=function(){this.line++,this.maxLookAhead>0&&this.maxLookAhead--},dt.fromSaved=function(e,t,n){return t instanceof ut?new dt(e,je(e.mode,t.state),n,t.lookAhead):new dt(e,je(e.mode,t),n)},dt.prototype.save=function(e){var t=!1!==e?je(this.doc.mode,this.state):this.state
return this.maxLookAhead>0?new ut(t,this.maxLookAhead):t}
var yt=function(e,t,n){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=t||null,this.state=n}
function bt(e,t,n,r){var i,o,a=e.doc,s=a.mode,l=Ge(a,(t=lt(a,t)).line),c=pt(e,t.line,n),u=new Ke(l.text,e.options.tabSize,c)
for(r&&(o=[]);(r||u.pos<t.ch)&&!u.eol();)u.start=u.pos,i=vt(s,u,c.state),r&&o.push(new yt(u,i,je(a.mode,c.state)))
return r?o:new yt(u,i,c.state)}function Ct(e,t){if(e)for(;;){var n=e.match(/(?:^|\s+)line-(background-)?(\S+)/)
if(!n)break
e=e.slice(0,n.index)+e.slice(n.index+n[0].length)
var r=n[1]?"bgClass":"textClass"
null==t[r]?t[r]=n[2]:new RegExp("(?:^|\\s)"+n[2]+"(?:$|\\s)").test(t[r])||(t[r]+=" "+n[2])}return e}function wt(e,t,n,r,i,o,a){var s=n.flattenSpans
null==s&&(s=e.options.flattenSpans)
var l,c=0,u=null,d=new Ke(t,e.options.tabSize,r),h=e.options.addModeClass&&[null]
for(""==t&&Ct(mt(n,r.state),o);!d.eol();){if(d.pos>e.options.maxHighlightLength?(s=!1,a&&gt(e,t,r,d.pos),d.pos=t.length,l=null):l=Ct(vt(n,d,r.state,h),o),h){var f=h[0].name
f&&(l="m-"+(l?f+" "+l:f))}if(!s||u!=l){for(;c<d.start;)i(c=Math.min(d.start,c+5e3),u)
u=l}d.start=d.pos}for(;c<d.pos;){var p=Math.min(d.pos,c+5e3)
i(p,u),c=p}}var _t=!1,Tt=!1
function Et(e,t,n){this.marker=e,this.from=t,this.to=n}function xt(e,t){if(e)for(var n=0;n<e.length;++n){var r=e[n]
if(r.marker==t)return r}}function St(e,t){for(var n,r=0;r<e.length;++r)e[r]!=t&&(n||(n=[])).push(e[r])
return n}function Nt(e,t){if(t.full)return null
var n=Je(e,t.from.line)&&Ge(e,t.from.line).markedSpans,r=Je(e,t.to.line)&&Ge(e,t.to.line).markedSpans
if(!n&&!r)return null
var i=t.from.ch,o=t.to.ch,a=0==nt(t.from,t.to),s=function(e,t,n){var r
if(e)for(var i=0;i<e.length;++i){var o=e[i],a=o.marker
if(null==o.from||(a.inclusiveLeft?o.from<=t:o.from<t)||o.from==t&&"bookmark"==a.type&&(!n||!o.marker.insertLeft)){var s=null==o.to||(a.inclusiveRight?o.to>=t:o.to>t);(r||(r=[])).push(new Et(a,o.from,s?null:o.to))}}return r}(n,i,a),l=function(e,t,n){var r
if(e)for(var i=0;i<e.length;++i){var o=e[i],a=o.marker
if(null==o.to||(a.inclusiveRight?o.to>=t:o.to>t)||o.from==t&&"bookmark"==a.type&&(!n||o.marker.insertLeft)){var s=null==o.from||(a.inclusiveLeft?o.from<=t:o.from<t);(r||(r=[])).push(new Et(a,s?null:o.from-t,null==o.to?null:o.to-t))}}return r}(r,o,a),c=1==t.text.length,u=Y(t.text).length+(c?i:0)
if(s)for(var d=0;d<s.length;++d){var h=s[d]
if(null==h.to){var f=xt(l,h.marker)
f?c&&(h.to=null==f.to?null:f.to+u):h.to=i}}if(l)for(var p=0;p<l.length;++p){var g=l[p]
null!=g.to&&(g.to+=u),null==g.from?xt(s,g.marker)||(g.from=u,c&&(s||(s=[])).push(g)):(g.from+=u,c&&(s||(s=[])).push(g))}s&&(s=kt(s)),l&&l!=s&&(l=kt(l))
var m=[s]
if(!c){var v,y=t.text.length-2
if(y>0&&s)for(var b=0;b<s.length;++b)null==s[b].to&&(v||(v=[])).push(new Et(s[b].marker,null,null))
for(var C=0;C<y;++C)m.push(v)
m.push(l)}return m}function kt(e){for(var t=0;t<e.length;++t){var n=e[t]
null!=n.from&&n.from==n.to&&!1!==n.marker.clearWhenEmpty&&e.splice(t--,1)}return e.length?e:null}function Lt(e){var t=e.markedSpans
if(t){for(var n=0;n<t.length;++n)t[n].marker.detachLine(e)
e.markedSpans=null}}function Mt(e,t){if(t){for(var n=0;n<t.length;++n)t[n].marker.attachLine(e)
e.markedSpans=t}}function At(e){return e.inclusiveLeft?-1:0}function Ot(e){return e.inclusiveRight?1:0}function Bt(e,t){var n=e.lines.length-t.lines.length
if(0!=n)return n
var r=e.find(),i=t.find(),o=nt(r.from,i.from)||At(e)-At(t)
return o?-o:nt(r.to,i.to)||Ot(e)-Ot(t)||t.id-e.id}function Dt(e,t){var n,r=Tt&&e.markedSpans
if(r)for(var i=void 0,o=0;o<r.length;++o)(i=r[o]).marker.collapsed&&null==(t?i.from:i.to)&&(!n||Bt(n,i.marker)<0)&&(n=i.marker)
return n}function It(e){return Dt(e,!0)}function Rt(e){return Dt(e,!1)}function Pt(e,t){var n,r=Tt&&e.markedSpans
if(r)for(var i=0;i<r.length;++i){var o=r[i]
o.marker.collapsed&&(null==o.from||o.from<t)&&(null==o.to||o.to>t)&&(!n||Bt(n,o.marker)<0)&&(n=o.marker)}return n}function Ht(e,t,n,r,i){var o=Ge(e,t),a=Tt&&o.markedSpans
if(a)for(var s=0;s<a.length;++s){var l=a[s]
if(l.marker.collapsed){var c=l.marker.find(0),u=nt(c.from,n)||At(l.marker)-At(i),d=nt(c.to,r)||Ot(l.marker)-Ot(i)
if(!(u>=0&&d<=0||u<=0&&d>=0)&&(u<=0&&(l.marker.inclusiveRight&&i.inclusiveLeft?nt(c.to,n)>=0:nt(c.to,n)>0)||u>=0&&(l.marker.inclusiveRight&&i.inclusiveLeft?nt(c.from,r)<=0:nt(c.from,r)<0)))return!0}}}function Ft(e){for(var t;t=It(e);)e=t.find(-1,!0).line
return e}function Ut(e,t){var n=Ge(e,t),r=Ft(n)
return n==r?t:Ze(r)}function Wt(e,t){if(t>e.lastLine())return t
var n,r=Ge(e,t)
if(!qt(e,r))return t
for(;n=Rt(r);)r=n.find(1,!0).line
return Ze(r)+1}function qt(e,t){var n=Tt&&t.markedSpans
if(n)for(var r=void 0,i=0;i<n.length;++i)if((r=n[i]).marker.collapsed){if(null==r.from)return!0
if(!r.marker.widgetNode&&0==r.from&&r.marker.inclusiveLeft&&jt(e,t,r))return!0}}function jt(e,t,n){if(null==n.to){var r=n.marker.find(1,!0)
return jt(e,r.line,xt(r.line.markedSpans,n.marker))}if(n.marker.inclusiveRight&&n.to==t.text.length)return!0
for(var i=void 0,o=0;o<t.markedSpans.length;++o)if((i=t.markedSpans[o]).marker.collapsed&&!i.marker.widgetNode&&i.from==n.to&&(null==i.to||i.to!=n.from)&&(i.marker.inclusiveLeft||n.marker.inclusiveRight)&&jt(e,t,i))return!0}function zt(e){for(var t=0,n=(e=Ft(e)).parent,r=0;r<n.lines.length;++r){var i=n.lines[r]
if(i==e)break
t+=i.height}for(var o=n.parent;o;o=(n=o).parent)for(var a=0;a<o.children.length;++a){var s=o.children[a]
if(s==n)break
t+=s.height}return t}function Vt(e){if(0==e.height)return 0
for(var t,n=e.text.length,r=e;t=It(r);){var i=t.find(0,!0)
r=i.from.line,n+=i.from.ch-i.to.ch}for(r=e;t=Rt(r);){var o=t.find(0,!0)
n-=r.text.length-o.from.ch,n+=(r=o.to.line).text.length-o.to.ch}return n}function Kt(e){var t=e.display,n=e.doc
t.maxLine=Ge(n,n.first),t.maxLineLength=Vt(t.maxLine),t.maxLineChanged=!0,n.iter((function(e){var n=Vt(e)
n>t.maxLineLength&&(t.maxLineLength=n,t.maxLine=e)}))}var Gt=function(e,t,n){this.text=e,Mt(this,t),this.height=n?n(this):1}
function $t(e){e.parent=null,Lt(e)}Gt.prototype.lineNo=function(){return Ze(this)},be(Gt)
var Yt={},Xt={}
function Zt(e,t){if(!e||/^\s*$/.test(e))return null
var n=t.addModeClass?Xt:Yt
return n[e]||(n[e]=e.replace(/\S+/g,"cm-$&"))}function Qt(e,t){var n=A("span",null,null,c?"padding-right: .1px":null),r={pre:A("pre",[n],"CodeMirror-line"),content:n,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:e.getOption("lineWrapping")}
t.measure={}
for(var i=0;i<=(t.rest?t.rest.length:0);i++){var o=i?t.rest[i-1]:t.line,a=void 0
r.pos=0,r.addToken=en,Me(e.display.measure)&&(a=ue(o,e.doc.direction))&&(r.addToken=tn(r.addToken,a)),r.map=[],rn(o,r,ft(e,o,t!=e.display.externalMeasured&&Ze(o))),o.styleClasses&&(o.styleClasses.bgClass&&(r.bgClass=I(o.styleClasses.bgClass,r.bgClass||"")),o.styleClasses.textClass&&(r.textClass=I(o.styleClasses.textClass,r.textClass||""))),0==r.map.length&&r.map.push(0,0,r.content.appendChild(Le(e.display.measure))),0==i?(t.measure.map=r.map,t.measure.cache={}):((t.measure.maps||(t.measure.maps=[])).push(r.map),(t.measure.caches||(t.measure.caches=[])).push({}))}if(c){var s=r.content.lastChild;(/\bcm-tab\b/.test(s.className)||s.querySelector&&s.querySelector(".cm-tab"))&&(r.content.className="cm-tab-wrap-hack")}return ge(e,"renderLine",e,t.line,r.pre),r.pre.className&&(r.textClass=I(r.pre.className,r.textClass||"")),r}function Jt(e){var t=M("span","•","cm-invalidchar")
return t.title="\\u"+e.charCodeAt(0).toString(16),t.setAttribute("aria-label",t.title),t}function en(e,t,n,r,i,o,a){if(t){var c,u=e.splitSpaces?function(e,t){if(e.length>1&&!/  /.test(e))return e
for(var n=t,r="",i=0;i<e.length;i++){var o=e.charAt(i)
" "!=o||!n||i!=e.length-1&&32!=e.charCodeAt(i+1)||(o=" "),r+=o,n=" "==o}return r}(t,e.trailingSpace):t,d=e.cm.state.specialChars,h=!1
if(d.test(t)){c=document.createDocumentFragment()
for(var f=0;;){d.lastIndex=f
var p=d.exec(t),g=p?p.index-f:t.length-f
if(g){var m=document.createTextNode(u.slice(f,f+g))
s&&l<9?c.appendChild(M("span",[m])):c.appendChild(m),e.map.push(e.pos,e.pos+g,m),e.col+=g,e.pos+=g}if(!p)break
f+=g+1
var v=void 0
if("\t"==p[0]){var y=e.cm.options.tabSize,b=y-e.col%y;(v=c.appendChild(M("span",$(b),"cm-tab"))).setAttribute("role","presentation"),v.setAttribute("cm-text","\t"),e.col+=b}else"\r"==p[0]||"\n"==p[0]?((v=c.appendChild(M("span","\r"==p[0]?"␍":"␤","cm-invalidchar"))).setAttribute("cm-text",p[0]),e.col+=1):((v=e.cm.options.specialCharPlaceholder(p[0])).setAttribute("cm-text",p[0]),s&&l<9?c.appendChild(M("span",[v])):c.appendChild(v),e.col+=1)
e.map.push(e.pos,e.pos+1,v),e.pos++}}else e.col+=t.length,c=document.createTextNode(u),e.map.push(e.pos,e.pos+t.length,c),s&&l<9&&(h=!0),e.pos+=t.length
if(e.trailingSpace=32==u.charCodeAt(t.length-1),n||r||i||h||o){var C=n||""
r&&(C+=r),i&&(C+=i)
var w=M("span",[c],C,o)
if(a)for(var _ in a)a.hasOwnProperty(_)&&"style"!=_&&"class"!=_&&w.setAttribute(_,a[_])
return e.content.appendChild(w)}e.content.appendChild(c)}}function tn(e,t){return function(n,r,i,o,a,s,l){i=i?i+" cm-force-border":"cm-force-border"
for(var c=n.pos,u=c+r.length;;){for(var d=void 0,h=0;h<t.length&&!((d=t[h]).to>c&&d.from<=c);h++);if(d.to>=u)return e(n,r,i,o,a,s,l)
e(n,r.slice(0,d.to-c),i,o,null,s,l),o=null,r=r.slice(d.to-c),c=d.to}}}function nn(e,t,n,r){var i=!r&&n.widgetNode
i&&e.map.push(e.pos,e.pos+t,i),!r&&e.cm.display.input.needsContentAttribute&&(i||(i=e.content.appendChild(document.createElement("span"))),i.setAttribute("cm-marker",n.id)),i&&(e.cm.display.input.setUneditable(i),e.content.appendChild(i)),e.pos+=t,e.trailingSpace=!1}function rn(e,t,n){var r=e.markedSpans,i=e.text,o=0
if(r)for(var a,s,l,c,u,d,h,f=i.length,p=0,g=1,m="",v=0;;){if(v==p){l=c=u=s="",h=null,d=null,v=1/0
for(var y=[],b=void 0,C=0;C<r.length;++C){var w=r[C],_=w.marker
if("bookmark"==_.type&&w.from==p&&_.widgetNode)y.push(_)
else if(w.from<=p&&(null==w.to||w.to>p||_.collapsed&&w.to==p&&w.from==p)){if(null!=w.to&&w.to!=p&&v>w.to&&(v=w.to,c=""),_.className&&(l+=" "+_.className),_.css&&(s=(s?s+";":"")+_.css),_.startStyle&&w.from==p&&(u+=" "+_.startStyle),_.endStyle&&w.to==v&&(b||(b=[])).push(_.endStyle,w.to),_.title&&((h||(h={})).title=_.title),_.attributes)for(var T in _.attributes)(h||(h={}))[T]=_.attributes[T]
_.collapsed&&(!d||Bt(d.marker,_)<0)&&(d=w)}else w.from>p&&v>w.from&&(v=w.from)}if(b)for(var E=0;E<b.length;E+=2)b[E+1]==v&&(c+=" "+b[E])
if(!d||d.from==p)for(var x=0;x<y.length;++x)nn(t,0,y[x])
if(d&&(d.from||0)==p){if(nn(t,(null==d.to?f+1:d.to)-p,d.marker,null==d.from),null==d.to)return
d.to==p&&(d=!1)}}if(p>=f)break
for(var S=Math.min(f,v);;){if(m){var N=p+m.length
if(!d){var k=N>S?m.slice(0,S-p):m
t.addToken(t,k,a?a+l:l,u,p+k.length==v?c:"",s,h)}if(N>=S){m=m.slice(S-p),p=S
break}p=N,u=""}m=i.slice(o,o=n[g++]),a=Zt(n[g++],t.cm.options)}}else for(var L=1;L<n.length;L+=2)t.addToken(t,i.slice(o,o=n[L]),Zt(n[L+1],t.cm.options))}function on(e,t,n){this.line=t,this.rest=function(e){for(var t,n;t=Rt(e);)e=t.find(1,!0).line,(n||(n=[])).push(e)
return n}(t),this.size=this.rest?Ze(Y(this.rest))-n+1:1,this.node=this.text=null,this.hidden=qt(e,t)}function an(e,t,n){for(var r,i=[],o=t;o<n;o=r){var a=new on(e.doc,Ge(e.doc,o),o)
r=o+a.size,i.push(a)}return i}var sn=null,ln=null
function cn(e,t){var n=fe(e,t)
if(n.length){var r,i=Array.prototype.slice.call(arguments,2)
sn?r=sn.delayedCallbacks:ln?r=ln:(r=ln=[],setTimeout(un,0))
for(var o=function(e){r.push((function(){return n[e].apply(null,i)}))},a=0;a<n.length;++a)o(a)}}function un(){var e=ln
ln=null
for(var t=0;t<e.length;++t)e[t]()}function dn(e,t,n,r){for(var i=0;i<t.changes.length;i++){var o=t.changes[i]
"text"==o?pn(e,t):"gutter"==o?mn(e,t,n,r):"class"==o?gn(e,t):"widget"==o&&vn(e,t,r)}t.changes=null}function hn(e){return e.node==e.text&&(e.node=M("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),s&&l<8&&(e.node.style.zIndex=2)),e.node}function fn(e,t){var n=e.display.externalMeasured
return n&&n.line==t.line?(e.display.externalMeasured=null,t.measure=n.measure,n.built):Qt(e,t)}function pn(e,t){var n=t.text.className,r=fn(e,t)
t.text==t.node&&(t.node=r.pre),t.text.parentNode.replaceChild(r.pre,t.text),t.text=r.pre,r.bgClass!=t.bgClass||r.textClass!=t.textClass?(t.bgClass=r.bgClass,t.textClass=r.textClass,gn(e,t)):n&&(t.text.className=n)}function gn(e,t){!function(e,t){var n=t.bgClass?t.bgClass+" "+(t.line.bgClass||""):t.line.bgClass
if(n&&(n+=" CodeMirror-linebackground"),t.background)n?t.background.className=n:(t.background.parentNode.removeChild(t.background),t.background=null)
else if(n){var r=hn(t)
t.background=r.insertBefore(M("div",null,n),r.firstChild),e.display.input.setUneditable(t.background)}}(e,t),t.line.wrapClass?hn(t).className=t.line.wrapClass:t.node!=t.text&&(t.node.className="")
var n=t.textClass?t.textClass+" "+(t.line.textClass||""):t.line.textClass
t.text.className=n||""}function mn(e,t,n,r){if(t.gutter&&(t.node.removeChild(t.gutter),t.gutter=null),t.gutterBackground&&(t.node.removeChild(t.gutterBackground),t.gutterBackground=null),t.line.gutterClass){var i=hn(t)
t.gutterBackground=M("div",null,"CodeMirror-gutter-background "+t.line.gutterClass,"left: "+(e.options.fixedGutter?r.fixedPos:-r.gutterTotalWidth)+"px; width: "+r.gutterTotalWidth+"px"),e.display.input.setUneditable(t.gutterBackground),i.insertBefore(t.gutterBackground,t.text)}var o=t.line.gutterMarkers
if(e.options.lineNumbers||o){var a=hn(t),s=t.gutter=M("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?r.fixedPos:-r.gutterTotalWidth)+"px")
if(e.display.input.setUneditable(s),a.insertBefore(s,t.text),t.line.gutterClass&&(s.className+=" "+t.line.gutterClass),!e.options.lineNumbers||o&&o["CodeMirror-linenumbers"]||(t.lineNumber=s.appendChild(M("div",et(e.options,n),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+r.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),o)for(var l=0;l<e.display.gutterSpecs.length;++l){var c=e.display.gutterSpecs[l].className,u=o.hasOwnProperty(c)&&o[c]
u&&s.appendChild(M("div",[u],"CodeMirror-gutter-elt","left: "+r.gutterLeft[c]+"px; width: "+r.gutterWidth[c]+"px"))}}}function vn(e,t,n){t.alignable&&(t.alignable=null)
for(var r=x("CodeMirror-linewidget"),i=t.node.firstChild,o=void 0;i;i=o)o=i.nextSibling,r.test(i.className)&&t.node.removeChild(i)
bn(e,t,n)}function yn(e,t,n,r){var i=fn(e,t)
return t.text=t.node=i.pre,i.bgClass&&(t.bgClass=i.bgClass),i.textClass&&(t.textClass=i.textClass),gn(e,t),mn(e,t,n,r),bn(e,t,r),t.node}function bn(e,t,n){if(Cn(e,t.line,t,n,!0),t.rest)for(var r=0;r<t.rest.length;r++)Cn(e,t.rest[r],t,n,!1)}function Cn(e,t,n,r,i){if(t.widgets)for(var o=hn(n),a=0,s=t.widgets;a<s.length;++a){var l=s[a],c=M("div",[l.node],"CodeMirror-linewidget"+(l.className?" "+l.className:""))
l.handleMouseEvents||c.setAttribute("cm-ignore-events","true"),wn(l,c,n,r),e.display.input.setUneditable(c),i&&l.above?o.insertBefore(c,n.gutter||n.text):o.appendChild(c),cn(l,"redraw")}}function wn(e,t,n,r){if(e.noHScroll){(n.alignable||(n.alignable=[])).push(t)
var i=r.wrapperWidth
t.style.left=r.fixedPos+"px",e.coverGutter||(i-=r.gutterTotalWidth,t.style.paddingLeft=r.gutterTotalWidth+"px"),t.style.width=i+"px"}e.coverGutter&&(t.style.zIndex=5,t.style.position="relative",e.noHScroll||(t.style.marginLeft=-r.gutterTotalWidth+"px"))}function _n(e){if(null!=e.height)return e.height
var t=e.doc.cm
if(!t)return 0
if(!O(document.body,e.node)){var n="position: relative;"
e.coverGutter&&(n+="margin-left: -"+t.display.gutters.offsetWidth+"px;"),e.noHScroll&&(n+="width: "+t.display.wrapper.clientWidth+"px;"),L(t.display.measure,M("div",[e.node],null,n))}return e.height=e.node.parentNode.offsetHeight}function Tn(e,t){for(var n=Ee(t);n!=e.wrapper;n=n.parentNode)if(!n||1==n.nodeType&&"true"==n.getAttribute("cm-ignore-events")||n.parentNode==e.sizer&&n!=e.mover)return!0}function En(e){return e.lineSpace.offsetTop}function xn(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function Sn(e){if(e.cachedPaddingH)return e.cachedPaddingH
var t=L(e.measure,M("pre","x","CodeMirror-line-like")),n=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,r={left:parseInt(n.paddingLeft),right:parseInt(n.paddingRight)}
return isNaN(r.left)||isNaN(r.right)||(e.cachedPaddingH=r),r}function Nn(e){return 50-e.display.nativeBarWidth}function kn(e){return e.display.scroller.clientWidth-Nn(e)-e.display.barWidth}function Ln(e){return e.display.scroller.clientHeight-Nn(e)-e.display.barHeight}function Mn(e,t,n){if(e.line==t)return{map:e.measure.map,cache:e.measure.cache}
for(var r=0;r<e.rest.length;r++)if(e.rest[r]==t)return{map:e.measure.maps[r],cache:e.measure.caches[r]}
for(var i=0;i<e.rest.length;i++)if(Ze(e.rest[i])>n)return{map:e.measure.maps[i],cache:e.measure.caches[i],before:!0}}function An(e,t,n,r){return Dn(e,Bn(e,t),n,r)}function On(e,t){if(t>=e.display.viewFrom&&t<e.display.viewTo)return e.display.view[dr(e,t)]
var n=e.display.externalMeasured
return n&&t>=n.lineN&&t<n.lineN+n.size?n:void 0}function Bn(e,t){var n=Ze(t),r=On(e,n)
r&&!r.text?r=null:r&&r.changes&&(dn(e,r,n,ar(e)),e.curOp.forceUpdate=!0),r||(r=function(e,t){var n=Ze(t=Ft(t)),r=e.display.externalMeasured=new on(e.doc,t,n)
r.lineN=n
var i=r.built=Qt(e,r)
return r.text=i.pre,L(e.display.lineMeasure,i.pre),r}(e,t))
var i=Mn(r,t,n)
return{line:t,view:r,rect:null,map:i.map,cache:i.cache,before:i.before,hasHeights:!1}}function Dn(e,t,n,r,i){t.before&&(n=-1)
var o,a=n+(r||"")
return t.cache.hasOwnProperty(a)?o=t.cache[a]:(t.rect||(t.rect=t.view.text.getBoundingClientRect()),t.hasHeights||(function(e,t,n){var r=e.options.lineWrapping,i=r&&kn(e)
if(!t.measure.heights||r&&t.measure.width!=i){var o=t.measure.heights=[]
if(r){t.measure.width=i
for(var a=t.text.firstChild.getClientRects(),s=0;s<a.length-1;s++){var l=a[s],c=a[s+1]
Math.abs(l.bottom-c.bottom)>2&&o.push((l.bottom+c.top)/2-n.top)}}o.push(n.bottom-n.top)}}(e,t.view,t.rect),t.hasHeights=!0),(o=function(e,t,n,r){var i,o=Pn(t.map,n,r),a=o.node,c=o.start,u=o.end,d=o.collapse
if(3==a.nodeType){for(var h=0;h<4;h++){for(;c&&ie(t.line.text.charAt(o.coverStart+c));)--c
for(;o.coverStart+u<o.coverEnd&&ie(t.line.text.charAt(o.coverStart+u));)++u
if((i=s&&l<9&&0==c&&u==o.coverEnd-o.coverStart?a.parentNode.getBoundingClientRect():Hn(S(a,c,u).getClientRects(),r)).left||i.right||0==c)break
u=c,c-=1,d="right"}s&&l<11&&(i=function(e,t){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!function(e){if(null!=Ie)return Ie
var t=L(e,M("span","x")),n=t.getBoundingClientRect(),r=S(t,0,1).getBoundingClientRect()
return Ie=Math.abs(n.left-r.left)>1}(e))return t
var n=screen.logicalXDPI/screen.deviceXDPI,r=screen.logicalYDPI/screen.deviceYDPI
return{left:t.left*n,right:t.right*n,top:t.top*r,bottom:t.bottom*r}}(e.display.measure,i))}else{var f
c>0&&(d=r="right"),i=e.options.lineWrapping&&(f=a.getClientRects()).length>1?f["right"==r?f.length-1:0]:a.getBoundingClientRect()}if(s&&l<9&&!c&&(!i||!i.left&&!i.right)){var p=a.parentNode.getClientRects()[0]
i=p?{left:p.left,right:p.left+or(e.display),top:p.top,bottom:p.bottom}:Rn}for(var g=i.top-t.rect.top,m=i.bottom-t.rect.top,v=(g+m)/2,y=t.view.measure.heights,b=0;b<y.length-1&&!(v<y[b]);b++);var C=b?y[b-1]:0,w=y[b],_={left:("right"==d?i.right:i.left)-t.rect.left,right:("left"==d?i.left:i.right)-t.rect.left,top:C,bottom:w}
return i.left||i.right||(_.bogus=!0),e.options.singleCursorHeightPerLine||(_.rtop=g,_.rbottom=m),_}(e,t,n,r)).bogus||(t.cache[a]=o)),{left:o.left,right:o.right,top:i?o.rtop:o.top,bottom:i?o.rbottom:o.bottom}}var In,Rn={left:0,right:0,top:0,bottom:0}
function Pn(e,t,n){for(var r,i,o,a,s,l,c=0;c<e.length;c+=3)if(s=e[c],l=e[c+1],t<s?(i=0,o=1,a="left"):t<l?o=1+(i=t-s):(c==e.length-3||t==l&&e[c+3]>t)&&(i=(o=l-s)-1,t>=l&&(a="right")),null!=i){if(r=e[c+2],s==l&&n==(r.insertLeft?"left":"right")&&(a=n),"left"==n&&0==i)for(;c&&e[c-2]==e[c-3]&&e[c-1].insertLeft;)r=e[2+(c-=3)],a="left"
if("right"==n&&i==l-s)for(;c<e.length-3&&e[c+3]==e[c+4]&&!e[c+5].insertLeft;)r=e[(c+=3)+2],a="right"
break}return{node:r,start:i,end:o,collapse:a,coverStart:s,coverEnd:l}}function Hn(e,t){var n=Rn
if("left"==t)for(var r=0;r<e.length&&(n=e[r]).left==n.right;r++);else for(var i=e.length-1;i>=0&&(n=e[i]).left==n.right;i--);return n}function Fn(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var t=0;t<e.rest.length;t++)e.measure.caches[t]={}}function Un(e){e.display.externalMeasure=null,k(e.display.lineMeasure)
for(var t=0;t<e.display.view.length;t++)Fn(e.display.view[t])}function Wn(e){Un(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function qn(){return d&&v?-(document.body.getBoundingClientRect().left-parseInt(getComputedStyle(document.body).marginLeft)):window.pageXOffset||(document.documentElement||document.body).scrollLeft}function jn(){return d&&v?-(document.body.getBoundingClientRect().top-parseInt(getComputedStyle(document.body).marginTop)):window.pageYOffset||(document.documentElement||document.body).scrollTop}function zn(e){var t=0
if(e.widgets)for(var n=0;n<e.widgets.length;++n)e.widgets[n].above&&(t+=_n(e.widgets[n]))
return t}function Vn(e,t,n,r,i){if(!i){var o=zn(t)
n.top+=o,n.bottom+=o}if("line"==r)return n
r||(r="local")
var a=zt(t)
if("local"==r?a+=En(e.display):a-=e.display.viewOffset,"page"==r||"window"==r){var s=e.display.lineSpace.getBoundingClientRect()
a+=s.top+("window"==r?0:jn())
var l=s.left+("window"==r?0:qn())
n.left+=l,n.right+=l}return n.top+=a,n.bottom+=a,n}function Kn(e,t,n){if("div"==n)return t
var r=t.left,i=t.top
if("page"==n)r-=qn(),i-=jn()
else if("local"==n||!n){var o=e.display.sizer.getBoundingClientRect()
r+=o.left,i+=o.top}var a=e.display.lineSpace.getBoundingClientRect()
return{left:r-a.left,top:i-a.top}}function Gn(e,t,n,r,i){return r||(r=Ge(e.doc,t.line)),Vn(e,r,An(e,r,t.ch,i),n)}function $n(e,t,n,r,i,o){function a(t,a){var s=Dn(e,i,t,a?"right":"left",o)
return a?s.left=s.right:s.right=s.left,Vn(e,r,s,n)}r=r||Ge(e.doc,t.line),i||(i=Bn(e,r))
var s=ue(r,e.doc.direction),l=t.ch,c=t.sticky
if(l>=r.text.length?(l=r.text.length,c="before"):l<=0&&(l=0,c="after"),!s)return a("before"==c?l-1:l,"before"==c)
function u(e,t,n){return a(n?e-1:e,1==s[t].level!=n)}var d=le(s,l,c),h=se,f=u(l,d,"before"==c)
return null!=h&&(f.other=u(l,h,"before"!=c)),f}function Yn(e,t){var n=0
t=lt(e.doc,t),e.options.lineWrapping||(n=or(e.display)*t.ch)
var r=Ge(e.doc,t.line),i=zt(r)+En(e.display)
return{left:n,right:n,top:i,bottom:i+r.height}}function Xn(e,t,n,r,i){var o=tt(e,t,n)
return o.xRel=i,r&&(o.outside=r),o}function Zn(e,t,n){var r=e.doc
if((n+=e.display.viewOffset)<0)return Xn(r.first,0,null,-1,-1)
var i=Qe(r,n),o=r.first+r.size-1
if(i>o)return Xn(r.first+r.size-1,Ge(r,o).text.length,null,1,1)
t<0&&(t=0)
for(var a=Ge(r,i);;){var s=tr(e,a,i,t,n),l=Pt(a,s.ch+(s.xRel>0||s.outside>0?1:0))
if(!l)return s
var c=l.find(1)
if(c.line==i)return c
a=Ge(r,i=c.line)}}function Qn(e,t,n,r){r-=zn(t)
var i=t.text.length,o=ae((function(t){return Dn(e,n,t-1).bottom<=r}),i,0)
return{begin:o,end:i=ae((function(t){return Dn(e,n,t).top>r}),o,i)}}function Jn(e,t,n,r){return n||(n=Bn(e,t)),Qn(e,t,n,Vn(e,t,Dn(e,n,r),"line").top)}function er(e,t,n,r){return!(e.bottom<=n)&&(e.top>n||(r?e.left:e.right)>t)}function tr(e,t,n,r,i){i-=zt(t)
var o=Bn(e,t),a=zn(t),s=0,l=t.text.length,c=!0,u=ue(t,e.doc.direction)
if(u){var d=(e.options.lineWrapping?rr:nr)(e,t,n,o,u,r,i)
s=(c=1!=d.level)?d.from:d.to-1,l=c?d.to:d.from-1}var h,f,p=null,g=null,m=ae((function(t){var n=Dn(e,o,t)
return n.top+=a,n.bottom+=a,!!er(n,r,i,!1)&&(n.top<=i&&n.left<=r&&(p=t,g=n),!0)}),s,l),v=!1
if(g){var y=r-g.left<g.right-r,b=y==c
m=p+(b?0:1),f=b?"after":"before",h=y?g.left:g.right}else{c||m!=l&&m!=s||m++,f=0==m?"after":m==t.text.length?"before":Dn(e,o,m-(c?1:0)).bottom+a<=i==c?"after":"before"
var C=$n(e,tt(n,m,f),"line",t,o)
h=C.left,v=i<C.top?-1:i>=C.bottom?1:0}return Xn(n,m=oe(t.text,m,1),f,v,r-h)}function nr(e,t,n,r,i,o,a){var s=ae((function(s){var l=i[s],c=1!=l.level
return er($n(e,tt(n,c?l.to:l.from,c?"before":"after"),"line",t,r),o,a,!0)}),0,i.length-1),l=i[s]
if(s>0){var c=1!=l.level,u=$n(e,tt(n,c?l.from:l.to,c?"after":"before"),"line",t,r)
er(u,o,a,!0)&&u.top>a&&(l=i[s-1])}return l}function rr(e,t,n,r,i,o,a){var s=Qn(e,t,r,a),l=s.begin,c=s.end;/\s/.test(t.text.charAt(c-1))&&c--
for(var u=null,d=null,h=0;h<i.length;h++){var f=i[h]
if(!(f.from>=c||f.to<=l)){var p=Dn(e,r,1!=f.level?Math.min(c,f.to)-1:Math.max(l,f.from)).right,g=p<o?o-p+1e9:p-o;(!u||d>g)&&(u=f,d=g)}}return u||(u=i[i.length-1]),u.from<l&&(u={from:l,to:u.to,level:u.level}),u.to>c&&(u={from:u.from,to:c,level:u.level}),u}function ir(e){if(null!=e.cachedTextHeight)return e.cachedTextHeight
if(null==In){In=M("pre",null,"CodeMirror-line-like")
for(var t=0;t<49;++t)In.appendChild(document.createTextNode("x")),In.appendChild(M("br"))
In.appendChild(document.createTextNode("x"))}L(e.measure,In)
var n=In.offsetHeight/50
return n>3&&(e.cachedTextHeight=n),k(e.measure),n||1}function or(e){if(null!=e.cachedCharWidth)return e.cachedCharWidth
var t=M("span","xxxxxxxxxx"),n=M("pre",[t],"CodeMirror-line-like")
L(e.measure,n)
var r=t.getBoundingClientRect(),i=(r.right-r.left)/10
return i>2&&(e.cachedCharWidth=i),i||10}function ar(e){for(var t=e.display,n={},r={},i=t.gutters.clientLeft,o=t.gutters.firstChild,a=0;o;o=o.nextSibling,++a){var s=e.display.gutterSpecs[a].className
n[s]=o.offsetLeft+o.clientLeft+i,r[s]=o.clientWidth}return{fixedPos:sr(t),gutterTotalWidth:t.gutters.offsetWidth,gutterLeft:n,gutterWidth:r,wrapperWidth:t.wrapper.clientWidth}}function sr(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function lr(e){var t=ir(e.display),n=e.options.lineWrapping,r=n&&Math.max(5,e.display.scroller.clientWidth/or(e.display)-3)
return function(i){if(qt(e.doc,i))return 0
var o=0
if(i.widgets)for(var a=0;a<i.widgets.length;a++)i.widgets[a].height&&(o+=i.widgets[a].height)
return n?o+(Math.ceil(i.text.length/r)||1)*t:o+t}}function cr(e){var t=e.doc,n=lr(e)
t.iter((function(e){var t=n(e)
t!=e.height&&Xe(e,t)}))}function ur(e,t,n,r){var i=e.display
if(!n&&"true"==Ee(t).getAttribute("cm-not-content"))return null
var o,a,s=i.lineSpace.getBoundingClientRect()
try{o=t.clientX-s.left,a=t.clientY-s.top}catch(t){return null}var l,c=Zn(e,o,a)
if(r&&c.xRel>0&&(l=Ge(e.doc,c.line).text).length==c.ch){var u=F(l,l.length,e.options.tabSize)-l.length
c=tt(c.line,Math.max(0,Math.round((o-Sn(e.display).left)/or(e.display))-u))}return c}function dr(e,t){if(t>=e.display.viewTo)return null
if((t-=e.display.viewFrom)<0)return null
for(var n=e.display.view,r=0;r<n.length;r++)if((t-=n[r].size)<0)return r}function hr(e,t,n,r){null==t&&(t=e.doc.first),null==n&&(n=e.doc.first+e.doc.size),r||(r=0)
var i=e.display
if(r&&n<i.viewTo&&(null==i.updateLineNumbers||i.updateLineNumbers>t)&&(i.updateLineNumbers=t),e.curOp.viewChanged=!0,t>=i.viewTo)Tt&&Ut(e.doc,t)<i.viewTo&&pr(e)
else if(n<=i.viewFrom)Tt&&Wt(e.doc,n+r)>i.viewFrom?pr(e):(i.viewFrom+=r,i.viewTo+=r)
else if(t<=i.viewFrom&&n>=i.viewTo)pr(e)
else if(t<=i.viewFrom){var o=gr(e,n,n+r,1)
o?(i.view=i.view.slice(o.index),i.viewFrom=o.lineN,i.viewTo+=r):pr(e)}else if(n>=i.viewTo){var a=gr(e,t,t,-1)
a?(i.view=i.view.slice(0,a.index),i.viewTo=a.lineN):pr(e)}else{var s=gr(e,t,t,-1),l=gr(e,n,n+r,1)
s&&l?(i.view=i.view.slice(0,s.index).concat(an(e,s.lineN,l.lineN)).concat(i.view.slice(l.index)),i.viewTo+=r):pr(e)}var c=i.externalMeasured
c&&(n<c.lineN?c.lineN+=r:t<c.lineN+c.size&&(i.externalMeasured=null))}function fr(e,t,n){e.curOp.viewChanged=!0
var r=e.display,i=e.display.externalMeasured
if(i&&t>=i.lineN&&t<i.lineN+i.size&&(r.externalMeasured=null),!(t<r.viewFrom||t>=r.viewTo)){var o=r.view[dr(e,t)]
if(null!=o.node){var a=o.changes||(o.changes=[]);-1==W(a,n)&&a.push(n)}}}function pr(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function gr(e,t,n,r){var i,o=dr(e,t),a=e.display.view
if(!Tt||n==e.doc.first+e.doc.size)return{index:o,lineN:n}
for(var s=e.display.viewFrom,l=0;l<o;l++)s+=a[l].size
if(s!=t){if(r>0){if(o==a.length-1)return null
i=s+a[o].size-t,o++}else i=s-t
t+=i,n+=i}for(;Ut(e.doc,n)!=n;){if(o==(r<0?0:a.length-1))return null
n+=r*a[o-(r<0?1:0)].size,o+=r}return{index:o,lineN:n}}function mr(e){for(var t=e.display.view,n=0,r=0;r<t.length;r++){var i=t[r]
i.hidden||i.node&&!i.changes||++n}return n}function vr(e){e.display.input.showSelection(e.display.input.prepareSelection())}function yr(e,t){void 0===t&&(t=!0)
for(var n=e.doc,r={},i=r.cursors=document.createDocumentFragment(),o=r.selection=document.createDocumentFragment(),a=0;a<n.sel.ranges.length;a++)if(t||a!=n.sel.primIndex){var s=n.sel.ranges[a]
if(!(s.from().line>=e.display.viewTo||s.to().line<e.display.viewFrom)){var l=s.empty();(l||e.options.showCursorWhenSelecting)&&br(e,s.head,i),l||wr(e,s,o)}}return r}function br(e,t,n){var r=$n(e,t,"div",null,null,!e.options.singleCursorHeightPerLine),i=n.appendChild(M("div"," ","CodeMirror-cursor"))
if(i.style.left=r.left+"px",i.style.top=r.top+"px",i.style.height=Math.max(0,r.bottom-r.top)*e.options.cursorHeight+"px",r.other){var o=n.appendChild(M("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"))
o.style.display="",o.style.left=r.other.left+"px",o.style.top=r.other.top+"px",o.style.height=.85*(r.other.bottom-r.other.top)+"px"}}function Cr(e,t){return e.top-t.top||e.left-t.left}function wr(e,t,n){var r=e.display,i=e.doc,o=document.createDocumentFragment(),a=Sn(e.display),s=a.left,l=Math.max(r.sizerWidth,kn(e)-r.sizer.offsetLeft)-a.right,c="ltr"==i.direction
function u(e,t,n,r){t<0&&(t=0),t=Math.round(t),r=Math.round(r),o.appendChild(M("div",null,"CodeMirror-selected","position: absolute; left: "+e+"px;\n                             top: "+t+"px; width: "+(null==n?l-e:n)+"px;\n                             height: "+(r-t)+"px"))}function d(t,n,r){var o,a,d=Ge(i,t),h=d.text.length
function f(n,r){return Gn(e,tt(t,n),"div",d,r)}function p(t,n,r){var i=Jn(e,d,null,t),o="ltr"==n==("after"==r)?"left":"right"
return f("after"==r?i.begin:i.end-(/\s/.test(d.text.charAt(i.end-1))?2:1),o)[o]}var g=ue(d,i.direction)
return function(e,t,n,r){if(!e)return r(t,n,"ltr",0)
for(var i=!1,o=0;o<e.length;++o){var a=e[o];(a.from<n&&a.to>t||t==n&&a.to==t)&&(r(Math.max(a.from,t),Math.min(a.to,n),1==a.level?"rtl":"ltr",o),i=!0)}i||r(t,n,"ltr")}(g,n||0,null==r?h:r,(function(e,t,i,d){var m="ltr"==i,v=f(e,m?"left":"right"),y=f(t-1,m?"right":"left"),b=null==n&&0==e,C=null==r&&t==h,w=0==d,_=!g||d==g.length-1
if(y.top-v.top<=3){var T=(c?C:b)&&_,E=(c?b:C)&&w?s:(m?v:y).left,x=T?l:(m?y:v).right
u(E,v.top,x-E,v.bottom)}else{var S,N,k,L
m?(S=c&&b&&w?s:v.left,N=c?l:p(e,i,"before"),k=c?s:p(t,i,"after"),L=c&&C&&_?l:y.right):(S=c?p(e,i,"before"):s,N=!c&&b&&w?l:v.right,k=!c&&C&&_?s:y.left,L=c?p(t,i,"after"):l),u(S,v.top,N-S,v.bottom),v.bottom<y.top&&u(s,v.bottom,null,y.top),u(k,y.top,L-k,y.bottom)}(!o||Cr(v,o)<0)&&(o=v),Cr(y,o)<0&&(o=y),(!a||Cr(v,a)<0)&&(a=v),Cr(y,a)<0&&(a=y)})),{start:o,end:a}}var h=t.from(),f=t.to()
if(h.line==f.line)d(h.line,h.ch,f.ch)
else{var p=Ge(i,h.line),g=Ge(i,f.line),m=Ft(p)==Ft(g),v=d(h.line,h.ch,m?p.text.length+1:null).end,y=d(f.line,m?0:null,f.ch).start
m&&(v.top<y.top-2?(u(v.right,v.top,null,v.bottom),u(s,y.top,y.left,y.bottom)):u(v.right,v.top,y.left-v.right,v.bottom)),v.bottom<y.top&&u(s,v.bottom,null,y.top)}n.appendChild(o)}function _r(e){if(e.state.focused){var t=e.display
clearInterval(t.blinker)
var n=!0
t.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?t.blinker=setInterval((function(){return t.cursorDiv.style.visibility=(n=!n)?"":"hidden"}),e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(t.cursorDiv.style.visibility="hidden")}}function Tr(e){e.state.focused||(e.display.input.focus(),xr(e))}function Er(e){e.state.delayingBlurEvent=!0,setTimeout((function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,Sr(e))}),100)}function xr(e,t){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1),"nocursor"!=e.options.readOnly&&(e.state.focused||(ge(e,"focus",e,t),e.state.focused=!0,D(e.display.wrapper,"CodeMirror-focused"),e.curOp||e.display.selForContextMenu==e.doc.sel||(e.display.input.reset(),c&&setTimeout((function(){return e.display.input.reset(!0)}),20)),e.display.input.receivedFocus()),_r(e))}function Sr(e,t){e.state.delayingBlurEvent||(e.state.focused&&(ge(e,"blur",e,t),e.state.focused=!1,N(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout((function(){e.state.focused||(e.display.shift=!1)}),150))}function Nr(e){for(var t=e.display,n=t.lineDiv.offsetTop,r=0;r<t.view.length;r++){var i=t.view[r],o=e.options.lineWrapping,a=void 0,c=0
if(!i.hidden){if(s&&l<8){var u=i.node.offsetTop+i.node.offsetHeight
a=u-n,n=u}else{var d=i.node.getBoundingClientRect()
a=d.bottom-d.top,!o&&i.text.firstChild&&(c=i.text.firstChild.getBoundingClientRect().right-d.left-1)}var h=i.line.height-a
if((h>.005||h<-.005)&&(Xe(i.line,a),kr(i.line),i.rest))for(var f=0;f<i.rest.length;f++)kr(i.rest[f])
if(c>e.display.sizerWidth){var p=Math.ceil(c/or(e.display))
p>e.display.maxLineLength&&(e.display.maxLineLength=p,e.display.maxLine=i.line,e.display.maxLineChanged=!0)}}}}function kr(e){if(e.widgets)for(var t=0;t<e.widgets.length;++t){var n=e.widgets[t],r=n.node.parentNode
r&&(n.height=r.offsetHeight)}}function Lr(e,t,n){var r=n&&null!=n.top?Math.max(0,n.top):e.scroller.scrollTop
r=Math.floor(r-En(e))
var i=n&&null!=n.bottom?n.bottom:r+e.wrapper.clientHeight,o=Qe(t,r),a=Qe(t,i)
if(n&&n.ensure){var s=n.ensure.from.line,l=n.ensure.to.line
s<o?(o=s,a=Qe(t,zt(Ge(t,s))+e.wrapper.clientHeight)):Math.min(l,t.lastLine())>=a&&(o=Qe(t,zt(Ge(t,l))-e.wrapper.clientHeight),a=l)}return{from:o,to:Math.max(a,o+1)}}function Mr(e,t){var n=e.display,r=ir(e.display)
t.top<0&&(t.top=0)
var i=e.curOp&&null!=e.curOp.scrollTop?e.curOp.scrollTop:n.scroller.scrollTop,o=Ln(e),a={}
t.bottom-t.top>o&&(t.bottom=t.top+o)
var s=e.doc.height+xn(n),l=t.top<r,c=t.bottom>s-r
if(t.top<i)a.scrollTop=l?0:t.top
else if(t.bottom>i+o){var u=Math.min(t.top,(c?s:t.bottom)-o)
u!=i&&(a.scrollTop=u)}var d=e.curOp&&null!=e.curOp.scrollLeft?e.curOp.scrollLeft:n.scroller.scrollLeft,h=kn(e)-(e.options.fixedGutter?n.gutters.offsetWidth:0),f=t.right-t.left>h
return f&&(t.right=t.left+h),t.left<10?a.scrollLeft=0:t.left<d?a.scrollLeft=Math.max(0,t.left-(f?0:10)):t.right>h+d-3&&(a.scrollLeft=t.right+(f?0:10)-h),a}function Ar(e,t){null!=t&&(Dr(e),e.curOp.scrollTop=(null==e.curOp.scrollTop?e.doc.scrollTop:e.curOp.scrollTop)+t)}function Or(e){Dr(e)
var t=e.getCursor()
e.curOp.scrollToPos={from:t,to:t,margin:e.options.cursorScrollMargin}}function Br(e,t,n){null==t&&null==n||Dr(e),null!=t&&(e.curOp.scrollLeft=t),null!=n&&(e.curOp.scrollTop=n)}function Dr(e){var t=e.curOp.scrollToPos
t&&(e.curOp.scrollToPos=null,Ir(e,Yn(e,t.from),Yn(e,t.to),t.margin))}function Ir(e,t,n,r){var i=Mr(e,{left:Math.min(t.left,n.left),top:Math.min(t.top,n.top)-r,right:Math.max(t.right,n.right),bottom:Math.max(t.bottom,n.bottom)+r})
Br(e,i.scrollLeft,i.scrollTop)}function Rr(e,t){Math.abs(e.doc.scrollTop-t)<2||(n||ci(e,{top:t}),Pr(e,t,!0),n&&ci(e),ii(e,100))}function Pr(e,t,n){t=Math.max(0,Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,t)),(e.display.scroller.scrollTop!=t||n)&&(e.doc.scrollTop=t,e.display.scrollbars.setScrollTop(t),e.display.scroller.scrollTop!=t&&(e.display.scroller.scrollTop=t))}function Hr(e,t,n,r){t=Math.max(0,Math.min(t,e.display.scroller.scrollWidth-e.display.scroller.clientWidth)),(n?t==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-t)<2)&&!r||(e.doc.scrollLeft=t,hi(e),e.display.scroller.scrollLeft!=t&&(e.display.scroller.scrollLeft=t),e.display.scrollbars.setScrollLeft(t))}function Fr(e){var t=e.display,n=t.gutters.offsetWidth,r=Math.round(e.doc.height+xn(e.display))
return{clientHeight:t.scroller.clientHeight,viewHeight:t.wrapper.clientHeight,scrollWidth:t.scroller.scrollWidth,clientWidth:t.scroller.clientWidth,viewWidth:t.wrapper.clientWidth,barLeft:e.options.fixedGutter?n:0,docHeight:r,scrollHeight:r+Nn(e)+t.barHeight,nativeBarWidth:t.nativeBarWidth,gutterWidth:n}}var Ur=function(e,t,n){this.cm=n
var r=this.vert=M("div",[M("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),i=this.horiz=M("div",[M("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar")
r.tabIndex=i.tabIndex=-1,e(r),e(i),he(r,"scroll",(function(){r.clientHeight&&t(r.scrollTop,"vertical")})),he(i,"scroll",(function(){i.clientWidth&&t(i.scrollLeft,"horizontal")})),this.checkedZeroWidth=!1,s&&l<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")}
Ur.prototype.update=function(e){var t=e.scrollWidth>e.clientWidth+1,n=e.scrollHeight>e.clientHeight+1,r=e.nativeBarWidth
if(n){this.vert.style.display="block",this.vert.style.bottom=t?r+"px":"0"
var i=e.viewHeight-(t?r:0)
this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+i)+"px"}else this.vert.style.display="",this.vert.firstChild.style.height="0"
if(t){this.horiz.style.display="block",this.horiz.style.right=n?r+"px":"0",this.horiz.style.left=e.barLeft+"px"
var o=e.viewWidth-e.barLeft-(n?r:0)
this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+o)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0"
return!this.checkedZeroWidth&&e.clientHeight>0&&(0==r&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:n?r:0,bottom:t?r:0}},Ur.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},Ur.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},Ur.prototype.zeroWidthHack=function(){var e=b&&!p?"12px":"18px"
this.horiz.style.height=this.vert.style.width=e,this.horiz.style.pointerEvents=this.vert.style.pointerEvents="none",this.disableHoriz=new U,this.disableVert=new U},Ur.prototype.enableZeroWidthBar=function(e,t,n){e.style.pointerEvents="auto",t.set(1e3,(function r(){var i=e.getBoundingClientRect();("vert"==n?document.elementFromPoint(i.right-1,(i.top+i.bottom)/2):document.elementFromPoint((i.right+i.left)/2,i.bottom-1))!=e?e.style.pointerEvents="none":t.set(1e3,r)}))},Ur.prototype.clear=function(){var e=this.horiz.parentNode
e.removeChild(this.horiz),e.removeChild(this.vert)}
var Wr=function(){}
function qr(e,t){t||(t=Fr(e))
var n=e.display.barWidth,r=e.display.barHeight
jr(e,t)
for(var i=0;i<4&&n!=e.display.barWidth||r!=e.display.barHeight;i++)n!=e.display.barWidth&&e.options.lineWrapping&&Nr(e),jr(e,Fr(e)),n=e.display.barWidth,r=e.display.barHeight}function jr(e,t){var n=e.display,r=n.scrollbars.update(t)
n.sizer.style.paddingRight=(n.barWidth=r.right)+"px",n.sizer.style.paddingBottom=(n.barHeight=r.bottom)+"px",n.heightForcer.style.borderBottom=r.bottom+"px solid transparent",r.right&&r.bottom?(n.scrollbarFiller.style.display="block",n.scrollbarFiller.style.height=r.bottom+"px",n.scrollbarFiller.style.width=r.right+"px"):n.scrollbarFiller.style.display="",r.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(n.gutterFiller.style.display="block",n.gutterFiller.style.height=r.bottom+"px",n.gutterFiller.style.width=t.gutterWidth+"px"):n.gutterFiller.style.display=""}Wr.prototype.update=function(){return{bottom:0,right:0}},Wr.prototype.setScrollLeft=function(){},Wr.prototype.setScrollTop=function(){},Wr.prototype.clear=function(){}
var zr={native:Ur,null:Wr}
function Vr(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&N(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new zr[e.options.scrollbarStyle]((function(t){e.display.wrapper.insertBefore(t,e.display.scrollbarFiller),he(t,"mousedown",(function(){e.state.focused&&setTimeout((function(){return e.display.input.focus()}),0)})),t.setAttribute("cm-not-content","true")}),(function(t,n){"horizontal"==n?Hr(e,t):Rr(e,t)}),e),e.display.scrollbars.addClass&&D(e.display.wrapper,e.display.scrollbars.addClass)}var Kr=0
function Gr(e){var t
e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++Kr},t=e.curOp,sn?sn.ops.push(t):t.ownsGroup=sn={ops:[t],delayedCallbacks:[]}}function $r(e){var t=e.curOp
t&&function(e,t){var n=e.ownsGroup
if(n)try{!function(e){var t=e.delayedCallbacks,n=0
do{for(;n<t.length;n++)t[n].call(null)
for(var r=0;r<e.ops.length;r++){var i=e.ops[r]
if(i.cursorActivityHandlers)for(;i.cursorActivityCalled<i.cursorActivityHandlers.length;)i.cursorActivityHandlers[i.cursorActivityCalled++].call(null,i.cm)}}while(n<t.length)}(n)}finally{sn=null,function(e){for(var t=0;t<e.ops.length;t++)e.ops[t].cm.curOp=null
!function(e){for(var t=e.ops,n=0;n<t.length;n++)Yr(t[n])
for(var r=0;r<t.length;r++)Xr(t[r])
for(var i=0;i<t.length;i++)Zr(t[i])
for(var o=0;o<t.length;o++)Qr(t[o])
for(var a=0;a<t.length;a++)Jr(t[a])}(e)}(n)}}(t)}function Yr(e){var t=e.cm,n=t.display
!function(e){var t=e.display
!t.scrollbarsClipped&&t.scroller.offsetWidth&&(t.nativeBarWidth=t.scroller.offsetWidth-t.scroller.clientWidth,t.heightForcer.style.height=Nn(e)+"px",t.sizer.style.marginBottom=-t.nativeBarWidth+"px",t.sizer.style.borderRightWidth=Nn(e)+"px",t.scrollbarsClipped=!0)}(t),e.updateMaxLine&&Kt(t),e.mustUpdate=e.viewChanged||e.forceUpdate||null!=e.scrollTop||e.scrollToPos&&(e.scrollToPos.from.line<n.viewFrom||e.scrollToPos.to.line>=n.viewTo)||n.maxLineChanged&&t.options.lineWrapping,e.update=e.mustUpdate&&new ai(t,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function Xr(e){e.updatedDisplay=e.mustUpdate&&si(e.cm,e.update)}function Zr(e){var t=e.cm,n=t.display
e.updatedDisplay&&Nr(t),e.barMeasure=Fr(t),n.maxLineChanged&&!t.options.lineWrapping&&(e.adjustWidthTo=An(t,n.maxLine,n.maxLine.text.length).left+3,t.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(n.scroller.clientWidth,n.sizer.offsetLeft+e.adjustWidthTo+Nn(t)+t.display.barWidth),e.maxScrollLeft=Math.max(0,n.sizer.offsetLeft+e.adjustWidthTo-kn(t))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=n.input.prepareSelection())}function Qr(e){var t=e.cm
null!=e.adjustWidthTo&&(t.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<t.doc.scrollLeft&&Hr(t,Math.min(t.display.scroller.scrollLeft,e.maxScrollLeft),!0),t.display.maxLineChanged=!1)
var n=e.focus&&e.focus==B()
e.preparedSelection&&t.display.input.showSelection(e.preparedSelection,n),(e.updatedDisplay||e.startHeight!=t.doc.height)&&qr(t,e.barMeasure),e.updatedDisplay&&di(t,e.barMeasure),e.selectionChanged&&_r(t),t.state.focused&&e.updateInput&&t.display.input.reset(e.typing),n&&Tr(e.cm)}function Jr(e){var t=e.cm,n=t.display,r=t.doc
e.updatedDisplay&&li(t,e.update),null==n.wheelStartX||null==e.scrollTop&&null==e.scrollLeft&&!e.scrollToPos||(n.wheelStartX=n.wheelStartY=null),null!=e.scrollTop&&Pr(t,e.scrollTop,e.forceScroll),null!=e.scrollLeft&&Hr(t,e.scrollLeft,!0,!0),e.scrollToPos&&function(e,t){if(!me(e,"scrollCursorIntoView")){var n=e.display,r=n.sizer.getBoundingClientRect(),i=null
if(t.top+r.top<0?i=!0:t.bottom+r.top>(window.innerHeight||document.documentElement.clientHeight)&&(i=!1),null!=i&&!g){var o=M("div","​",null,"position: absolute;\n                         top: "+(t.top-n.viewOffset-En(e.display))+"px;\n                         height: "+(t.bottom-t.top+Nn(e)+n.barHeight)+"px;\n                         left: "+t.left+"px; width: "+Math.max(2,t.right-t.left)+"px;")
e.display.lineSpace.appendChild(o),o.scrollIntoView(i),e.display.lineSpace.removeChild(o)}}}(t,function(e,t,n,r){var i
null==r&&(r=0),e.options.lineWrapping||t!=n||(n="before"==(t=t.ch?tt(t.line,"before"==t.sticky?t.ch-1:t.ch,"after"):t).sticky?tt(t.line,t.ch+1,"before"):t)
for(var o=0;o<5;o++){var a=!1,s=$n(e,t),l=n&&n!=t?$n(e,n):s,c=Mr(e,i={left:Math.min(s.left,l.left),top:Math.min(s.top,l.top)-r,right:Math.max(s.left,l.left),bottom:Math.max(s.bottom,l.bottom)+r}),u=e.doc.scrollTop,d=e.doc.scrollLeft
if(null!=c.scrollTop&&(Rr(e,c.scrollTop),Math.abs(e.doc.scrollTop-u)>1&&(a=!0)),null!=c.scrollLeft&&(Hr(e,c.scrollLeft),Math.abs(e.doc.scrollLeft-d)>1&&(a=!0)),!a)break}return i}(t,lt(r,e.scrollToPos.from),lt(r,e.scrollToPos.to),e.scrollToPos.margin))
var i=e.maybeHiddenMarkers,o=e.maybeUnhiddenMarkers
if(i)for(var a=0;a<i.length;++a)i[a].lines.length||ge(i[a],"hide")
if(o)for(var s=0;s<o.length;++s)o[s].lines.length&&ge(o[s],"unhide")
n.wrapper.offsetHeight&&(r.scrollTop=t.display.scroller.scrollTop),e.changeObjs&&ge(t,"changes",t,e.changeObjs),e.update&&e.update.finish()}function ei(e,t){if(e.curOp)return t()
Gr(e)
try{return t()}finally{$r(e)}}function ti(e,t){return function(){if(e.curOp)return t.apply(e,arguments)
Gr(e)
try{return t.apply(e,arguments)}finally{$r(e)}}}function ni(e){return function(){if(this.curOp)return e.apply(this,arguments)
Gr(this)
try{return e.apply(this,arguments)}finally{$r(this)}}}function ri(e){return function(){var t=this.cm
if(!t||t.curOp)return e.apply(this,arguments)
Gr(t)
try{return e.apply(this,arguments)}finally{$r(t)}}}function ii(e,t){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(t,P(oi,e))}function oi(e){var t=e.doc
if(!(t.highlightFrontier>=e.display.viewTo)){var n=+new Date+e.options.workTime,r=pt(e,t.highlightFrontier),i=[]
t.iter(r.line,Math.min(t.first+t.size,e.display.viewTo+500),(function(o){if(r.line>=e.display.viewFrom){var a=o.styles,s=o.text.length>e.options.maxHighlightLength?je(t.mode,r.state):null,l=ht(e,o,r,!0)
s&&(r.state=s),o.styles=l.styles
var c=o.styleClasses,u=l.classes
u?o.styleClasses=u:c&&(o.styleClasses=null)
for(var d=!a||a.length!=o.styles.length||c!=u&&(!c||!u||c.bgClass!=u.bgClass||c.textClass!=u.textClass),h=0;!d&&h<a.length;++h)d=a[h]!=o.styles[h]
d&&i.push(r.line),o.stateAfter=r.save(),r.nextLine()}else o.text.length<=e.options.maxHighlightLength&&gt(e,o.text,r),o.stateAfter=r.line%5==0?r.save():null,r.nextLine()
if(+new Date>n)return ii(e,e.options.workDelay),!0})),t.highlightFrontier=r.line,t.modeFrontier=Math.max(t.modeFrontier,r.line),i.length&&ei(e,(function(){for(var t=0;t<i.length;t++)fr(e,i[t],"text")}))}}var ai=function(e,t,n){var r=e.display
this.viewport=t,this.visible=Lr(r,e.doc,t),this.editorIsHidden=!r.wrapper.offsetWidth,this.wrapperHeight=r.wrapper.clientHeight,this.wrapperWidth=r.wrapper.clientWidth,this.oldDisplayWidth=kn(e),this.force=n,this.dims=ar(e),this.events=[]}
function si(e,t){var n=e.display,r=e.doc
if(t.editorIsHidden)return pr(e),!1
if(!t.force&&t.visible.from>=n.viewFrom&&t.visible.to<=n.viewTo&&(null==n.updateLineNumbers||n.updateLineNumbers>=n.viewTo)&&n.renderedView==n.view&&0==mr(e))return!1
fi(e)&&(pr(e),t.dims=ar(e))
var i=r.first+r.size,o=Math.max(t.visible.from-e.options.viewportMargin,r.first),a=Math.min(i,t.visible.to+e.options.viewportMargin)
n.viewFrom<o&&o-n.viewFrom<20&&(o=Math.max(r.first,n.viewFrom)),n.viewTo>a&&n.viewTo-a<20&&(a=Math.min(i,n.viewTo)),Tt&&(o=Ut(e.doc,o),a=Wt(e.doc,a))
var s=o!=n.viewFrom||a!=n.viewTo||n.lastWrapHeight!=t.wrapperHeight||n.lastWrapWidth!=t.wrapperWidth
!function(e,t,n){var r=e.display
0==r.view.length||t>=r.viewTo||n<=r.viewFrom?(r.view=an(e,t,n),r.viewFrom=t):(r.viewFrom>t?r.view=an(e,t,r.viewFrom).concat(r.view):r.viewFrom<t&&(r.view=r.view.slice(dr(e,t))),r.viewFrom=t,r.viewTo<n?r.view=r.view.concat(an(e,r.viewTo,n)):r.viewTo>n&&(r.view=r.view.slice(0,dr(e,n)))),r.viewTo=n}(e,o,a),n.viewOffset=zt(Ge(e.doc,n.viewFrom)),e.display.mover.style.top=n.viewOffset+"px"
var l=mr(e)
if(!s&&0==l&&!t.force&&n.renderedView==n.view&&(null==n.updateLineNumbers||n.updateLineNumbers>=n.viewTo))return!1
var u=function(e){if(e.hasFocus())return null
var t=B()
if(!t||!O(e.display.lineDiv,t))return null
var n={activeElt:t}
if(window.getSelection){var r=window.getSelection()
r.anchorNode&&r.extend&&O(e.display.lineDiv,r.anchorNode)&&(n.anchorNode=r.anchorNode,n.anchorOffset=r.anchorOffset,n.focusNode=r.focusNode,n.focusOffset=r.focusOffset)}return n}(e)
return l>4&&(n.lineDiv.style.display="none"),function(e,t,n){var r=e.display,i=e.options.lineNumbers,o=r.lineDiv,a=o.firstChild
function s(t){var n=t.nextSibling
return c&&b&&e.display.currentWheelTarget==t?t.style.display="none":t.parentNode.removeChild(t),n}for(var l=r.view,u=r.viewFrom,d=0;d<l.length;d++){var h=l[d]
if(h.hidden);else if(h.node&&h.node.parentNode==o){for(;a!=h.node;)a=s(a)
var f=i&&null!=t&&t<=u&&h.lineNumber
h.changes&&(W(h.changes,"gutter")>-1&&(f=!1),dn(e,h,u,n)),f&&(k(h.lineNumber),h.lineNumber.appendChild(document.createTextNode(et(e.options,u)))),a=h.node.nextSibling}else{var p=yn(e,h,u,n)
o.insertBefore(p,a)}u+=h.size}for(;a;)a=s(a)}(e,n.updateLineNumbers,t.dims),l>4&&(n.lineDiv.style.display=""),n.renderedView=n.view,function(e){if(e&&e.activeElt&&e.activeElt!=B()&&(e.activeElt.focus(),!/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName)&&e.anchorNode&&O(document.body,e.anchorNode)&&O(document.body,e.focusNode))){var t=window.getSelection(),n=document.createRange()
n.setEnd(e.anchorNode,e.anchorOffset),n.collapse(!1),t.removeAllRanges(),t.addRange(n),t.extend(e.focusNode,e.focusOffset)}}(u),k(n.cursorDiv),k(n.selectionDiv),n.gutters.style.height=n.sizer.style.minHeight=0,s&&(n.lastWrapHeight=t.wrapperHeight,n.lastWrapWidth=t.wrapperWidth,ii(e,400)),n.updateLineNumbers=null,!0}function li(e,t){for(var n=t.viewport,r=!0;;r=!1){if(r&&e.options.lineWrapping&&t.oldDisplayWidth!=kn(e))r&&(t.visible=Lr(e.display,e.doc,n))
else if(n&&null!=n.top&&(n={top:Math.min(e.doc.height+xn(e.display)-Ln(e),n.top)}),t.visible=Lr(e.display,e.doc,n),t.visible.from>=e.display.viewFrom&&t.visible.to<=e.display.viewTo)break
if(!si(e,t))break
Nr(e)
var i=Fr(e)
vr(e),qr(e,i),di(e,i),t.force=!1}t.signal(e,"update",e),e.display.viewFrom==e.display.reportedViewFrom&&e.display.viewTo==e.display.reportedViewTo||(t.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function ci(e,t){var n=new ai(e,t)
if(si(e,n)){Nr(e),li(e,n)
var r=Fr(e)
vr(e),qr(e,r),di(e,r),n.finish()}}function ui(e){var t=e.gutters.offsetWidth
e.sizer.style.marginLeft=t+"px"}function di(e,t){e.display.sizer.style.minHeight=t.docHeight+"px",e.display.heightForcer.style.top=t.docHeight+"px",e.display.gutters.style.height=t.docHeight+e.display.barHeight+Nn(e)+"px"}function hi(e){var t=e.display,n=t.view
if(t.alignWidgets||t.gutters.firstChild&&e.options.fixedGutter){for(var r=sr(t)-t.scroller.scrollLeft+e.doc.scrollLeft,i=t.gutters.offsetWidth,o=r+"px",a=0;a<n.length;a++)if(!n[a].hidden){e.options.fixedGutter&&(n[a].gutter&&(n[a].gutter.style.left=o),n[a].gutterBackground&&(n[a].gutterBackground.style.left=o))
var s=n[a].alignable
if(s)for(var l=0;l<s.length;l++)s[l].style.left=o}e.options.fixedGutter&&(t.gutters.style.left=r+i+"px")}}function fi(e){if(!e.options.lineNumbers)return!1
var t=e.doc,n=et(e.options,t.first+t.size-1),r=e.display
if(n.length!=r.lineNumChars){var i=r.measure.appendChild(M("div",[M("div",n)],"CodeMirror-linenumber CodeMirror-gutter-elt")),o=i.firstChild.offsetWidth,a=i.offsetWidth-o
return r.lineGutter.style.width="",r.lineNumInnerWidth=Math.max(o,r.lineGutter.offsetWidth-a)+1,r.lineNumWidth=r.lineNumInnerWidth+a,r.lineNumChars=r.lineNumInnerWidth?n.length:-1,r.lineGutter.style.width=r.lineNumWidth+"px",ui(e.display),!0}return!1}function pi(e,t){for(var n=[],r=!1,i=0;i<e.length;i++){var o=e[i],a=null
if("string"!=typeof o&&(a=o.style,o=o.className),"CodeMirror-linenumbers"==o){if(!t)continue
r=!0}n.push({className:o,style:a})}return t&&!r&&n.push({className:"CodeMirror-linenumbers",style:null}),n}function gi(e){var t=e.gutters,n=e.gutterSpecs
k(t),e.lineGutter=null
for(var r=0;r<n.length;++r){var i=n[r],o=i.className,a=i.style,s=t.appendChild(M("div",null,"CodeMirror-gutter "+o))
a&&(s.style.cssText=a),"CodeMirror-linenumbers"==o&&(e.lineGutter=s,s.style.width=(e.lineNumWidth||1)+"px")}t.style.display=n.length?"":"none",ui(e)}function mi(e){gi(e.display),hr(e),hi(e)}function vi(e,t,r,i){var o=this
this.input=r,o.scrollbarFiller=M("div",null,"CodeMirror-scrollbar-filler"),o.scrollbarFiller.setAttribute("cm-not-content","true"),o.gutterFiller=M("div",null,"CodeMirror-gutter-filler"),o.gutterFiller.setAttribute("cm-not-content","true"),o.lineDiv=A("div",null,"CodeMirror-code"),o.selectionDiv=M("div",null,null,"position: relative; z-index: 1"),o.cursorDiv=M("div",null,"CodeMirror-cursors"),o.measure=M("div",null,"CodeMirror-measure"),o.lineMeasure=M("div",null,"CodeMirror-measure"),o.lineSpace=A("div",[o.measure,o.lineMeasure,o.selectionDiv,o.cursorDiv,o.lineDiv],null,"position: relative; outline: none")
var a=A("div",[o.lineSpace],"CodeMirror-lines")
o.mover=M("div",[a],null,"position: relative"),o.sizer=M("div",[o.mover],"CodeMirror-sizer"),o.sizerWidth=null,o.heightForcer=M("div",null,null,"position: absolute; height: 50px; width: 1px;"),o.gutters=M("div",null,"CodeMirror-gutters"),o.lineGutter=null,o.scroller=M("div",[o.sizer,o.heightForcer,o.gutters],"CodeMirror-scroll"),o.scroller.setAttribute("tabIndex","-1"),o.wrapper=M("div",[o.scrollbarFiller,o.gutterFiller,o.scroller],"CodeMirror"),s&&l<8&&(o.gutters.style.zIndex=-1,o.scroller.style.paddingRight=0),c||n&&y||(o.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(o.wrapper):e(o.wrapper)),o.viewFrom=o.viewTo=t.first,o.reportedViewFrom=o.reportedViewTo=t.first,o.view=[],o.renderedView=null,o.externalMeasured=null,o.viewOffset=0,o.lastWrapHeight=o.lastWrapWidth=0,o.updateLineNumbers=null,o.nativeBarWidth=o.barHeight=o.barWidth=0,o.scrollbarsClipped=!1,o.lineNumWidth=o.lineNumInnerWidth=o.lineNumChars=null,o.alignWidgets=!1,o.cachedCharWidth=o.cachedTextHeight=o.cachedPaddingH=null,o.maxLine=null,o.maxLineLength=0,o.maxLineChanged=!1,o.wheelDX=o.wheelDY=o.wheelStartX=o.wheelStartY=null,o.shift=!1,o.selForContextMenu=null,o.activeTouch=null,o.gutterSpecs=pi(i.gutters,i.lineNumbers),gi(o),r.init(o)}ai.prototype.signal=function(e,t){ye(e,t)&&this.events.push(arguments)},ai.prototype.finish=function(){for(var e=0;e<this.events.length;e++)ge.apply(null,this.events[e])}
var yi=0,bi=null
function Ci(e){var t=e.wheelDeltaX,n=e.wheelDeltaY
return null==t&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(t=e.detail),null==n&&e.detail&&e.axis==e.VERTICAL_AXIS?n=e.detail:null==n&&(n=e.wheelDelta),{x:t,y:n}}function wi(e){var t=Ci(e)
return t.x*=bi,t.y*=bi,t}function _i(e,t){var r=Ci(t),i=r.x,o=r.y,a=e.display,s=a.scroller,l=s.scrollWidth>s.clientWidth,u=s.scrollHeight>s.clientHeight
if(i&&l||o&&u){if(o&&b&&c)e:for(var d=t.target,f=a.view;d!=s;d=d.parentNode)for(var p=0;p<f.length;p++)if(f[p].node==d){e.display.currentWheelTarget=d
break e}if(i&&!n&&!h&&null!=bi)return o&&u&&Rr(e,Math.max(0,s.scrollTop+o*bi)),Hr(e,Math.max(0,s.scrollLeft+i*bi)),(!o||o&&u)&&Ce(t),void(a.wheelStartX=null)
if(o&&null!=bi){var g=o*bi,m=e.doc.scrollTop,v=m+a.wrapper.clientHeight
g<0?m=Math.max(0,m+g-50):v=Math.min(e.doc.height,v+g+50),ci(e,{top:m,bottom:v})}yi<20&&(null==a.wheelStartX?(a.wheelStartX=s.scrollLeft,a.wheelStartY=s.scrollTop,a.wheelDX=i,a.wheelDY=o,setTimeout((function(){if(null!=a.wheelStartX){var e=s.scrollLeft-a.wheelStartX,t=s.scrollTop-a.wheelStartY,n=t&&a.wheelDY&&t/a.wheelDY||e&&a.wheelDX&&e/a.wheelDX
a.wheelStartX=a.wheelStartY=null,n&&(bi=(bi*yi+n)/(yi+1),++yi)}}),200)):(a.wheelDX+=i,a.wheelDY+=o))}}s?bi=-.53:n?bi=15:d?bi=-.7:f&&(bi=-1/3)
var Ti=function(e,t){this.ranges=e,this.primIndex=t}
Ti.prototype.primary=function(){return this.ranges[this.primIndex]},Ti.prototype.equals=function(e){if(e==this)return!0
if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1
for(var t=0;t<this.ranges.length;t++){var n=this.ranges[t],r=e.ranges[t]
if(!rt(n.anchor,r.anchor)||!rt(n.head,r.head))return!1}return!0},Ti.prototype.deepCopy=function(){for(var e=[],t=0;t<this.ranges.length;t++)e[t]=new Ei(it(this.ranges[t].anchor),it(this.ranges[t].head))
return new Ti(e,this.primIndex)},Ti.prototype.somethingSelected=function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0
return!1},Ti.prototype.contains=function(e,t){t||(t=e)
for(var n=0;n<this.ranges.length;n++){var r=this.ranges[n]
if(nt(t,r.from())>=0&&nt(e,r.to())<=0)return n}return-1}
var Ei=function(e,t){this.anchor=e,this.head=t}
function xi(e,t,n){var r=e&&e.options.selectionsMayTouch,i=t[n]
t.sort((function(e,t){return nt(e.from(),t.from())})),n=W(t,i)
for(var o=1;o<t.length;o++){var a=t[o],s=t[o-1],l=nt(s.to(),a.from())
if(r&&!a.empty()?l>0:l>=0){var c=at(s.from(),a.from()),u=ot(s.to(),a.to()),d=s.empty()?a.from()==a.head:s.from()==s.head
o<=n&&--n,t.splice(--o,2,new Ei(d?u:c,d?c:u))}}return new Ti(t,n)}function Si(e,t){return new Ti([new Ei(e,t||e)],0)}function Ni(e){return e.text?tt(e.from.line+e.text.length-1,Y(e.text).length+(1==e.text.length?e.from.ch:0)):e.to}function ki(e,t){if(nt(e,t.from)<0)return e
if(nt(e,t.to)<=0)return Ni(t)
var n=e.line+t.text.length-(t.to.line-t.from.line)-1,r=e.ch
return e.line==t.to.line&&(r+=Ni(t).ch-t.to.ch),tt(n,r)}function Li(e,t){for(var n=[],r=0;r<e.sel.ranges.length;r++){var i=e.sel.ranges[r]
n.push(new Ei(ki(i.anchor,t),ki(i.head,t)))}return xi(e.cm,n,e.sel.primIndex)}function Mi(e,t,n){return e.line==t.line?tt(n.line,e.ch-t.ch+n.ch):tt(n.line+(e.line-t.line),e.ch)}function Ai(e){e.doc.mode=Ue(e.options,e.doc.modeOption),Oi(e)}function Oi(e){e.doc.iter((function(e){e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null)})),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,ii(e,100),e.state.modeGen++,e.curOp&&hr(e)}function Bi(e,t){return 0==t.from.ch&&0==t.to.ch&&""==Y(t.text)&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function Di(e,t,n,r){function i(e){return n?n[e]:null}function o(e,n,i){!function(e,t,n,r){e.text=t,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),null!=e.order&&(e.order=null),Lt(e),Mt(e,n)
var i=r?r(e):1
i!=e.height&&Xe(e,i)}(e,n,i,r),cn(e,"change",e,t)}function a(e,t){for(var n=[],o=e;o<t;++o)n.push(new Gt(c[o],i(o),r))
return n}var s=t.from,l=t.to,c=t.text,u=Ge(e,s.line),d=Ge(e,l.line),h=Y(c),f=i(c.length-1),p=l.line-s.line
if(t.full)e.insert(0,a(0,c.length)),e.remove(c.length,e.size-c.length)
else if(Bi(e,t)){var g=a(0,c.length-1)
o(d,d.text,f),p&&e.remove(s.line,p),g.length&&e.insert(s.line,g)}else if(u==d)if(1==c.length)o(u,u.text.slice(0,s.ch)+h+u.text.slice(l.ch),f)
else{var m=a(1,c.length-1)
m.push(new Gt(h+u.text.slice(l.ch),f,r)),o(u,u.text.slice(0,s.ch)+c[0],i(0)),e.insert(s.line+1,m)}else if(1==c.length)o(u,u.text.slice(0,s.ch)+c[0]+d.text.slice(l.ch),i(0)),e.remove(s.line+1,p)
else{o(u,u.text.slice(0,s.ch)+c[0],i(0)),o(d,h+d.text.slice(l.ch),f)
var v=a(1,c.length-1)
p>1&&e.remove(s.line+1,p-1),e.insert(s.line+1,v)}cn(e,"change",e,t)}function Ii(e,t,n){!function e(r,i,o){if(r.linked)for(var a=0;a<r.linked.length;++a){var s=r.linked[a]
if(s.doc!=i){var l=o&&s.sharedHist
n&&!l||(t(s.doc,l),e(s.doc,r,l))}}}(e,null,!0)}function Ri(e,t){if(t.cm)throw new Error("This document is already in use.")
e.doc=t,t.cm=e,cr(e),Ai(e),Pi(e),e.options.lineWrapping||Kt(e),e.options.mode=t.modeOption,hr(e)}function Pi(e){("rtl"==e.doc.direction?D:N)(e.display.lineDiv,"CodeMirror-rtl")}function Hi(e){this.done=[],this.undone=[],this.undoDepth=1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e||1}function Fi(e,t){var n={from:it(t.from),to:Ni(t),text:$e(e,t.from,t.to)}
return ji(e,n,t.from.line,t.to.line+1),Ii(e,(function(e){return ji(e,n,t.from.line,t.to.line+1)}),!0),n}function Ui(e){for(;e.length&&Y(e).ranges;)e.pop()}function Wi(e,t,n,r){var i=e.history
i.undone.length=0
var o,a,s=+new Date
if((i.lastOp==r||i.lastOrigin==t.origin&&t.origin&&("+"==t.origin.charAt(0)&&i.lastModTime>s-(e.cm?e.cm.options.historyEventDelay:500)||"*"==t.origin.charAt(0)))&&(o=function(e,t){return t?(Ui(e.done),Y(e.done)):e.done.length&&!Y(e.done).ranges?Y(e.done):e.done.length>1&&!e.done[e.done.length-2].ranges?(e.done.pop(),Y(e.done)):void 0}(i,i.lastOp==r)))a=Y(o.changes),0==nt(t.from,t.to)&&0==nt(t.from,a.to)?a.to=Ni(t):o.changes.push(Fi(e,t))
else{var l=Y(i.done)
for(l&&l.ranges||qi(e.sel,i.done),o={changes:[Fi(e,t)],generation:i.generation},i.done.push(o);i.done.length>i.undoDepth;)i.done.shift(),i.done[0].ranges||i.done.shift()}i.done.push(n),i.generation=++i.maxGeneration,i.lastModTime=i.lastSelTime=s,i.lastOp=i.lastSelOp=r,i.lastOrigin=i.lastSelOrigin=t.origin,a||ge(e,"historyAdded")}function qi(e,t){var n=Y(t)
n&&n.ranges&&n.equals(e)||t.push(e)}function ji(e,t,n,r){var i=t["spans_"+e.id],o=0
e.iter(Math.max(e.first,n),Math.min(e.first+e.size,r),(function(n){n.markedSpans&&((i||(i=t["spans_"+e.id]={}))[o]=n.markedSpans),++o}))}function zi(e){if(!e)return null
for(var t,n=0;n<e.length;++n)e[n].marker.explicitlyCleared?t||(t=e.slice(0,n)):t&&t.push(e[n])
return t?t.length?t:null:e}function Vi(e,t){var n=function(e,t){var n=t["spans_"+e.id]
if(!n)return null
for(var r=[],i=0;i<t.text.length;++i)r.push(zi(n[i]))
return r}(e,t),r=Nt(e,t)
if(!n)return r
if(!r)return n
for(var i=0;i<n.length;++i){var o=n[i],a=r[i]
if(o&&a)e:for(var s=0;s<a.length;++s){for(var l=a[s],c=0;c<o.length;++c)if(o[c].marker==l.marker)continue e
o.push(l)}else a&&(n[i]=a)}return n}function Ki(e,t,n){for(var r=[],i=0;i<e.length;++i){var o=e[i]
if(o.ranges)r.push(n?Ti.prototype.deepCopy.call(o):o)
else{var a=o.changes,s=[]
r.push({changes:s})
for(var l=0;l<a.length;++l){var c=a[l],u=void 0
if(s.push({from:c.from,to:c.to,text:c.text}),t)for(var d in c)(u=d.match(/^spans_(\d+)$/))&&W(t,Number(u[1]))>-1&&(Y(s)[d]=c[d],delete c[d])}}}return r}function Gi(e,t,n,r){if(r){var i=e.anchor
if(n){var o=nt(t,i)<0
o!=nt(n,i)<0?(i=t,t=n):o!=nt(t,n)<0&&(t=n)}return new Ei(i,t)}return new Ei(n||t,t)}function $i(e,t,n,r,i){null==i&&(i=e.cm&&(e.cm.display.shift||e.extend)),Ji(e,new Ti([Gi(e.sel.primary(),t,n,i)],0),r)}function Yi(e,t,n){for(var r=[],i=e.cm&&(e.cm.display.shift||e.extend),o=0;o<e.sel.ranges.length;o++)r[o]=Gi(e.sel.ranges[o],t[o],null,i)
Ji(e,xi(e.cm,r,e.sel.primIndex),n)}function Xi(e,t,n,r){var i=e.sel.ranges.slice(0)
i[t]=n,Ji(e,xi(e.cm,i,e.sel.primIndex),r)}function Zi(e,t,n,r){Ji(e,Si(t,n),r)}function Qi(e,t,n){var r=e.history.done,i=Y(r)
i&&i.ranges?(r[r.length-1]=t,eo(e,t,n)):Ji(e,t,n)}function Ji(e,t,n){eo(e,t,n),function(e,t,n,r){var i=e.history,o=r&&r.origin
n==i.lastSelOp||o&&i.lastSelOrigin==o&&(i.lastModTime==i.lastSelTime&&i.lastOrigin==o||function(e,t,n,r){var i=t.charAt(0)
return"*"==i||"+"==i&&n.ranges.length==r.ranges.length&&n.somethingSelected()==r.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}(e,o,Y(i.done),t))?i.done[i.done.length-1]=t:qi(t,i.done),i.lastSelTime=+new Date,i.lastSelOrigin=o,i.lastSelOp=n,r&&!1!==r.clearRedo&&Ui(i.undone)}(e,e.sel,e.cm?e.cm.curOp.id:NaN,n)}function eo(e,t,n){(ye(e,"beforeSelectionChange")||e.cm&&ye(e.cm,"beforeSelectionChange"))&&(t=function(e,t,n){var r={ranges:t.ranges,update:function(t){this.ranges=[]
for(var n=0;n<t.length;n++)this.ranges[n]=new Ei(lt(e,t[n].anchor),lt(e,t[n].head))},origin:n&&n.origin}
return ge(e,"beforeSelectionChange",e,r),e.cm&&ge(e.cm,"beforeSelectionChange",e.cm,r),r.ranges!=t.ranges?xi(e.cm,r.ranges,r.ranges.length-1):t}(e,t,n))
var r=n&&n.bias||(nt(t.primary().head,e.sel.primary().head)<0?-1:1)
to(e,ro(e,t,r,!0)),n&&!1===n.scroll||!e.cm||Or(e.cm)}function to(e,t){t.equals(e.sel)||(e.sel=t,e.cm&&(e.cm.curOp.updateInput=1,e.cm.curOp.selectionChanged=!0,ve(e.cm)),cn(e,"cursorActivity",e))}function no(e){to(e,ro(e,e.sel,null,!1))}function ro(e,t,n,r){for(var i,o=0;o<t.ranges.length;o++){var a=t.ranges[o],s=t.ranges.length==e.sel.ranges.length&&e.sel.ranges[o],l=oo(e,a.anchor,s&&s.anchor,n,r),c=oo(e,a.head,s&&s.head,n,r);(i||l!=a.anchor||c!=a.head)&&(i||(i=t.ranges.slice(0,o)),i[o]=new Ei(l,c))}return i?xi(e.cm,i,t.primIndex):t}function io(e,t,n,r,i){var o=Ge(e,t.line)
if(o.markedSpans)for(var a=0;a<o.markedSpans.length;++a){var s=o.markedSpans[a],l=s.marker,c="selectLeft"in l?!l.selectLeft:l.inclusiveLeft,u="selectRight"in l?!l.selectRight:l.inclusiveRight
if((null==s.from||(c?s.from<=t.ch:s.from<t.ch))&&(null==s.to||(u?s.to>=t.ch:s.to>t.ch))){if(i&&(ge(l,"beforeCursorEnter"),l.explicitlyCleared)){if(o.markedSpans){--a
continue}break}if(!l.atomic)continue
if(n){var d=l.find(r<0?1:-1),h=void 0
if((r<0?u:c)&&(d=ao(e,d,-r,d&&d.line==t.line?o:null)),d&&d.line==t.line&&(h=nt(d,n))&&(r<0?h<0:h>0))return io(e,d,t,r,i)}var f=l.find(r<0?-1:1)
return(r<0?c:u)&&(f=ao(e,f,r,f.line==t.line?o:null)),f?io(e,f,t,r,i):null}}return t}function oo(e,t,n,r,i){var o=r||1
return io(e,t,n,o,i)||!i&&io(e,t,n,o,!0)||io(e,t,n,-o,i)||!i&&io(e,t,n,-o,!0)||(e.cantEdit=!0,tt(e.first,0))}function ao(e,t,n,r){return n<0&&0==t.ch?t.line>e.first?lt(e,tt(t.line-1)):null:n>0&&t.ch==(r||Ge(e,t.line)).text.length?t.line<e.first+e.size-1?tt(t.line+1,0):null:new tt(t.line,t.ch+n)}function so(e){e.setSelection(tt(e.firstLine(),0),tt(e.lastLine()),j)}function lo(e,t,n){var r={canceled:!1,from:t.from,to:t.to,text:t.text,origin:t.origin,cancel:function(){return r.canceled=!0}}
return n&&(r.update=function(t,n,i,o){t&&(r.from=lt(e,t)),n&&(r.to=lt(e,n)),i&&(r.text=i),void 0!==o&&(r.origin=o)}),ge(e,"beforeChange",e,r),e.cm&&ge(e.cm,"beforeChange",e.cm,r),r.canceled?(e.cm&&(e.cm.curOp.updateInput=2),null):{from:r.from,to:r.to,text:r.text,origin:r.origin}}function co(e,t,n){if(e.cm){if(!e.cm.curOp)return ti(e.cm,co)(e,t,n)
if(e.cm.state.suppressEdits)return}if(!(ye(e,"beforeChange")||e.cm&&ye(e.cm,"beforeChange"))||(t=lo(e,t,!0))){var r=_t&&!n&&function(e,t,n){var r=null
if(e.iter(t.line,n.line+1,(function(e){if(e.markedSpans)for(var t=0;t<e.markedSpans.length;++t){var n=e.markedSpans[t].marker
!n.readOnly||r&&-1!=W(r,n)||(r||(r=[])).push(n)}})),!r)return null
for(var i=[{from:t,to:n}],o=0;o<r.length;++o)for(var a=r[o],s=a.find(0),l=0;l<i.length;++l){var c=i[l]
if(!(nt(c.to,s.from)<0||nt(c.from,s.to)>0)){var u=[l,1],d=nt(c.from,s.from),h=nt(c.to,s.to);(d<0||!a.inclusiveLeft&&!d)&&u.push({from:c.from,to:s.from}),(h>0||!a.inclusiveRight&&!h)&&u.push({from:s.to,to:c.to}),i.splice.apply(i,u),l+=u.length-3}}return i}(e,t.from,t.to)
if(r)for(var i=r.length-1;i>=0;--i)uo(e,{from:r[i].from,to:r[i].to,text:i?[""]:t.text,origin:t.origin})
else uo(e,t)}}function uo(e,t){if(1!=t.text.length||""!=t.text[0]||0!=nt(t.from,t.to)){var n=Li(e,t)
Wi(e,t,n,e.cm?e.cm.curOp.id:NaN),po(e,t,n,Nt(e,t))
var r=[]
Ii(e,(function(e,n){n||-1!=W(r,e.history)||(yo(e.history,t),r.push(e.history)),po(e,t,null,Nt(e,t))}))}}function ho(e,t,n){var r=e.cm&&e.cm.state.suppressEdits
if(!r||n){for(var i,o=e.history,a=e.sel,s="undo"==t?o.done:o.undone,l="undo"==t?o.undone:o.done,c=0;c<s.length&&(i=s[c],n?!i.ranges||i.equals(e.sel):i.ranges);c++);if(c!=s.length){for(o.lastOrigin=o.lastSelOrigin=null;;){if(!(i=s.pop()).ranges){if(r)return void s.push(i)
break}if(qi(i,l),n&&!i.equals(e.sel))return void Ji(e,i,{clearRedo:!1})
a=i}var u=[]
qi(a,l),l.push({changes:u,generation:o.generation}),o.generation=i.generation||++o.maxGeneration
for(var d=ye(e,"beforeChange")||e.cm&&ye(e.cm,"beforeChange"),h=function(n){var r=i.changes[n]
if(r.origin=t,d&&!lo(e,r,!1))return s.length=0,{}
u.push(Fi(e,r))
var o=n?Li(e,r):Y(s)
po(e,r,o,Vi(e,r)),!n&&e.cm&&e.cm.scrollIntoView({from:r.from,to:Ni(r)})
var a=[]
Ii(e,(function(e,t){t||-1!=W(a,e.history)||(yo(e.history,r),a.push(e.history)),po(e,r,null,Vi(e,r))}))},f=i.changes.length-1;f>=0;--f){var p=h(f)
if(p)return p.v}}}}function fo(e,t){if(0!=t&&(e.first+=t,e.sel=new Ti(X(e.sel.ranges,(function(e){return new Ei(tt(e.anchor.line+t,e.anchor.ch),tt(e.head.line+t,e.head.ch))})),e.sel.primIndex),e.cm)){hr(e.cm,e.first,e.first-t,t)
for(var n=e.cm.display,r=n.viewFrom;r<n.viewTo;r++)fr(e.cm,r,"gutter")}}function po(e,t,n,r){if(e.cm&&!e.cm.curOp)return ti(e.cm,po)(e,t,n,r)
if(t.to.line<e.first)fo(e,t.text.length-1-(t.to.line-t.from.line))
else if(!(t.from.line>e.lastLine())){if(t.from.line<e.first){var i=t.text.length-1-(e.first-t.from.line)
fo(e,i),t={from:tt(e.first,0),to:tt(t.to.line+i,t.to.ch),text:[Y(t.text)],origin:t.origin}}var o=e.lastLine()
t.to.line>o&&(t={from:t.from,to:tt(o,Ge(e,o).text.length),text:[t.text[0]],origin:t.origin}),t.removed=$e(e,t.from,t.to),n||(n=Li(e,t)),e.cm?function(e,t,n){var r=e.doc,i=e.display,o=t.from,a=t.to,s=!1,l=o.line
e.options.lineWrapping||(l=Ze(Ft(Ge(r,o.line))),r.iter(l,a.line+1,(function(e){if(e==i.maxLine)return s=!0,!0}))),r.sel.contains(t.from,t.to)>-1&&ve(e),Di(r,t,n,lr(e)),e.options.lineWrapping||(r.iter(l,o.line+t.text.length,(function(e){var t=Vt(e)
t>i.maxLineLength&&(i.maxLine=e,i.maxLineLength=t,i.maxLineChanged=!0,s=!1)})),s&&(e.curOp.updateMaxLine=!0)),function(e,t){if(e.modeFrontier=Math.min(e.modeFrontier,t),!(e.highlightFrontier<t-10)){for(var n=e.first,r=t-1;r>n;r--){var i=Ge(e,r).stateAfter
if(i&&(!(i instanceof ut)||r+i.lookAhead<t)){n=r+1
break}}e.highlightFrontier=Math.min(e.highlightFrontier,n)}}(r,o.line),ii(e,400)
var c=t.text.length-(a.line-o.line)-1
t.full?hr(e):o.line!=a.line||1!=t.text.length||Bi(e.doc,t)?hr(e,o.line,a.line+1,c):fr(e,o.line,"text")
var u=ye(e,"changes"),d=ye(e,"change")
if(d||u){var h={from:o,to:a,text:t.text,removed:t.removed,origin:t.origin}
d&&cn(e,"change",e,h),u&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(h)}e.display.selForContextMenu=null}(e.cm,t,r):Di(e,t,r),eo(e,n,j),e.cantEdit&&oo(e,tt(e.firstLine(),0))&&(e.cantEdit=!1)}}function go(e,t,n,r,i){var o
r||(r=n),nt(r,n)<0&&(n=(o=[r,n])[0],r=o[1]),"string"==typeof t&&(t=e.splitLines(t)),co(e,{from:n,to:r,text:t,origin:i})}function mo(e,t,n,r){n<e.line?e.line+=r:t<e.line&&(e.line=t,e.ch=0)}function vo(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i],a=!0
if(o.ranges){o.copied||((o=e[i]=o.deepCopy()).copied=!0)
for(var s=0;s<o.ranges.length;s++)mo(o.ranges[s].anchor,t,n,r),mo(o.ranges[s].head,t,n,r)}else{for(var l=0;l<o.changes.length;++l){var c=o.changes[l]
if(n<c.from.line)c.from=tt(c.from.line+r,c.from.ch),c.to=tt(c.to.line+r,c.to.ch)
else if(t<=c.to.line){a=!1
break}}a||(e.splice(0,i+1),i=0)}}}function yo(e,t){var n=t.from.line,r=t.to.line,i=t.text.length-(r-n)-1
vo(e.done,n,r,i),vo(e.undone,n,r,i)}function bo(e,t,n,r){var i=t,o=t
return"number"==typeof t?o=Ge(e,st(e,t)):i=Ze(t),null==i?null:(r(o,i)&&e.cm&&fr(e.cm,i,n),o)}function Co(e){this.lines=e,this.parent=null
for(var t=0,n=0;n<e.length;++n)e[n].parent=this,t+=e[n].height
this.height=t}function wo(e){this.children=e
for(var t=0,n=0,r=0;r<e.length;++r){var i=e[r]
t+=i.chunkSize(),n+=i.height,i.parent=this}this.size=t,this.height=n,this.parent=null}Ei.prototype.from=function(){return at(this.anchor,this.head)},Ei.prototype.to=function(){return ot(this.anchor,this.head)},Ei.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch},Co.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,t){for(var n=e,r=e+t;n<r;++n){var i=this.lines[n]
this.height-=i.height,$t(i),cn(i,"delete")}this.lines.splice(e,t)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,t,n){this.height+=n,this.lines=this.lines.slice(0,e).concat(t).concat(this.lines.slice(e))
for(var r=0;r<t.length;++r)t[r].parent=this},iterN:function(e,t,n){for(var r=e+t;e<r;++e)if(n(this.lines[e]))return!0}},wo.prototype={chunkSize:function(){return this.size},removeInner:function(e,t){this.size-=t
for(var n=0;n<this.children.length;++n){var r=this.children[n],i=r.chunkSize()
if(e<i){var o=Math.min(t,i-e),a=r.height
if(r.removeInner(e,o),this.height-=a-r.height,i==o&&(this.children.splice(n--,1),r.parent=null),0==(t-=o))break
e=0}else e-=i}if(this.size-t<25&&(this.children.length>1||!(this.children[0]instanceof Co))){var s=[]
this.collapse(s),this.children=[new Co(s)],this.children[0].parent=this}},collapse:function(e){for(var t=0;t<this.children.length;++t)this.children[t].collapse(e)},insertInner:function(e,t,n){this.size+=t.length,this.height+=n
for(var r=0;r<this.children.length;++r){var i=this.children[r],o=i.chunkSize()
if(e<=o){if(i.insertInner(e,t,n),i.lines&&i.lines.length>50){for(var a=i.lines.length%25+25,s=a;s<i.lines.length;){var l=new Co(i.lines.slice(s,s+=25))
i.height-=l.height,this.children.splice(++r,0,l),l.parent=this}i.lines=i.lines.slice(0,a),this.maybeSpill()}break}e-=o}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this
do{var t=new wo(e.children.splice(e.children.length-5,5))
if(e.parent){e.size-=t.size,e.height-=t.height
var n=W(e.parent.children,e)
e.parent.children.splice(n+1,0,t)}else{var r=new wo(e.children)
r.parent=e,e.children=[r,t],e=r}t.parent=e.parent}while(e.children.length>10)
e.parent.maybeSpill()}},iterN:function(e,t,n){for(var r=0;r<this.children.length;++r){var i=this.children[r],o=i.chunkSize()
if(e<o){var a=Math.min(t,o-e)
if(i.iterN(e,a,n))return!0
if(0==(t-=a))break
e=0}else e-=o}}}
var _o=function(e,t,n){if(n)for(var r in n)n.hasOwnProperty(r)&&(this[r]=n[r])
this.doc=e,this.node=t}
function To(e,t,n){zt(t)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&Ar(e,n)}_o.prototype.clear=function(){var e=this.doc.cm,t=this.line.widgets,n=this.line,r=Ze(n)
if(null!=r&&t){for(var i=0;i<t.length;++i)t[i]==this&&t.splice(i--,1)
t.length||(n.widgets=null)
var o=_n(this)
Xe(n,Math.max(0,n.height-o)),e&&(ei(e,(function(){To(e,n,-o),fr(e,r,"widget")})),cn(e,"lineWidgetCleared",e,this,r))}},_o.prototype.changed=function(){var e=this,t=this.height,n=this.doc.cm,r=this.line
this.height=null
var i=_n(this)-t
i&&(qt(this.doc,r)||Xe(r,r.height+i),n&&ei(n,(function(){n.curOp.forceUpdate=!0,To(n,r,i),cn(n,"lineWidgetChanged",n,e,Ze(r))})))},be(_o)
var Eo=0,xo=function(e,t){this.lines=[],this.type=t,this.doc=e,this.id=++Eo}
function So(e,t,n,r,i){if(r&&r.shared)return function(e,t,n,r,i){(r=H(r)).shared=!1
var o=[So(e,t,n,r,i)],a=o[0],s=r.widgetNode
return Ii(e,(function(e){s&&(r.widgetNode=s.cloneNode(!0)),o.push(So(e,lt(e,t),lt(e,n),r,i))
for(var l=0;l<e.linked.length;++l)if(e.linked[l].isParent)return
a=Y(o)})),new No(o,a)}(e,t,n,r,i)
if(e.cm&&!e.cm.curOp)return ti(e.cm,So)(e,t,n,r,i)
var o=new xo(e,i),a=nt(t,n)
if(r&&H(r,o,!1),a>0||0==a&&!1!==o.clearWhenEmpty)return o
if(o.replacedWith&&(o.collapsed=!0,o.widgetNode=A("span",[o.replacedWith],"CodeMirror-widget"),r.handleMouseEvents||o.widgetNode.setAttribute("cm-ignore-events","true"),r.insertLeft&&(o.widgetNode.insertLeft=!0)),o.collapsed){if(Ht(e,t.line,t,n,o)||t.line!=n.line&&Ht(e,n.line,t,n,o))throw new Error("Inserting collapsed marker partially overlapping an existing one")
Tt=!0}o.addToHistory&&Wi(e,{from:t,to:n,origin:"markText"},e.sel,NaN)
var s,l=t.line,c=e.cm
if(e.iter(l,n.line+1,(function(e){c&&o.collapsed&&!c.options.lineWrapping&&Ft(e)==c.display.maxLine&&(s=!0),o.collapsed&&l!=t.line&&Xe(e,0),function(e,t){e.markedSpans=e.markedSpans?e.markedSpans.concat([t]):[t],t.marker.attachLine(e)}(e,new Et(o,l==t.line?t.ch:null,l==n.line?n.ch:null)),++l})),o.collapsed&&e.iter(t.line,n.line+1,(function(t){qt(e,t)&&Xe(t,0)})),o.clearOnEnter&&he(o,"beforeCursorEnter",(function(){return o.clear()})),o.readOnly&&(_t=!0,(e.history.done.length||e.history.undone.length)&&e.clearHistory()),o.collapsed&&(o.id=++Eo,o.atomic=!0),c){if(s&&(c.curOp.updateMaxLine=!0),o.collapsed)hr(c,t.line,n.line+1)
else if(o.className||o.startStyle||o.endStyle||o.css||o.attributes||o.title)for(var u=t.line;u<=n.line;u++)fr(c,u,"text")
o.atomic&&no(c.doc),cn(c,"markerAdded",c,o)}return o}xo.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,t=e&&!e.curOp
if(t&&Gr(e),ye(this,"clear")){var n=this.find()
n&&cn(this,"clear",n.from,n.to)}for(var r=null,i=null,o=0;o<this.lines.length;++o){var a=this.lines[o],s=xt(a.markedSpans,this)
e&&!this.collapsed?fr(e,Ze(a),"text"):e&&(null!=s.to&&(i=Ze(a)),null!=s.from&&(r=Ze(a))),a.markedSpans=St(a.markedSpans,s),null==s.from&&this.collapsed&&!qt(this.doc,a)&&e&&Xe(a,ir(e.display))}if(e&&this.collapsed&&!e.options.lineWrapping)for(var l=0;l<this.lines.length;++l){var c=Ft(this.lines[l]),u=Vt(c)
u>e.display.maxLineLength&&(e.display.maxLine=c,e.display.maxLineLength=u,e.display.maxLineChanged=!0)}null!=r&&e&&this.collapsed&&hr(e,r,i+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&no(e.doc)),e&&cn(e,"markerCleared",e,this,r,i),t&&$r(e),this.parent&&this.parent.clear()}},xo.prototype.find=function(e,t){var n,r
null==e&&"bookmark"==this.type&&(e=1)
for(var i=0;i<this.lines.length;++i){var o=this.lines[i],a=xt(o.markedSpans,this)
if(null!=a.from&&(n=tt(t?o:Ze(o),a.from),-1==e))return n
if(null!=a.to&&(r=tt(t?o:Ze(o),a.to),1==e))return r}return n&&{from:n,to:r}},xo.prototype.changed=function(){var e=this,t=this.find(-1,!0),n=this,r=this.doc.cm
t&&r&&ei(r,(function(){var i=t.line,o=Ze(t.line),a=On(r,o)
if(a&&(Fn(a),r.curOp.selectionChanged=r.curOp.forceUpdate=!0),r.curOp.updateMaxLine=!0,!qt(n.doc,i)&&null!=n.height){var s=n.height
n.height=null
var l=_n(n)-s
l&&Xe(i,i.height+l)}cn(r,"markerChanged",r,e)}))},xo.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp
t.maybeHiddenMarkers&&-1!=W(t.maybeHiddenMarkers,this)||(t.maybeUnhiddenMarkers||(t.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},xo.prototype.detachLine=function(e){if(this.lines.splice(W(this.lines,e),1),!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;(t.maybeHiddenMarkers||(t.maybeHiddenMarkers=[])).push(this)}},be(xo)
var No=function(e,t){this.markers=e,this.primary=t
for(var n=0;n<e.length;++n)e[n].parent=this}
function ko(e){return e.findMarks(tt(e.first,0),e.clipPos(tt(e.lastLine())),(function(e){return e.parent}))}function Lo(e){for(var t=function(t){var n=e[t],r=[n.primary.doc]
Ii(n.primary.doc,(function(e){return r.push(e)}))
for(var i=0;i<n.markers.length;i++){var o=n.markers[i];-1==W(r,o.doc)&&(o.parent=null,n.markers.splice(i--,1))}},n=0;n<e.length;n++)t(n)}No.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0
for(var e=0;e<this.markers.length;++e)this.markers[e].clear()
cn(this,"clear")}},No.prototype.find=function(e,t){return this.primary.find(e,t)},be(No)
var Mo=0,Ao=function e(t,n,r,i,o){if(!(this instanceof e))return new e(t,n,r,i,o)
null==r&&(r=0),wo.call(this,[new Co([new Gt("",null)])]),this.first=r,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=r
var a=tt(r,0)
this.sel=Si(a),this.history=new Hi(null),this.id=++Mo,this.modeOption=n,this.lineSep=i,this.direction="rtl"==o?"rtl":"ltr",this.extend=!1,"string"==typeof t&&(t=this.splitLines(t)),Di(this,{from:a,to:a,text:t}),Ji(this,Si(a),j)};(Ao.prototype=Q(wo.prototype,{constructor:Ao,iter:function(e,t,n){n?this.iterN(e-this.first,t-e,n):this.iterN(this.first,this.first+this.size,e)},insert:function(e,t){for(var n=0,r=0;r<t.length;++r)n+=t[r].height
this.insertInner(e-this.first,t,n)},remove:function(e,t){this.removeInner(e-this.first,t)},getValue:function(e){var t=Ye(this,this.first,this.first+this.size)
return!1===e?t:t.join(e||this.lineSeparator())},setValue:ri((function(e){var t=tt(this.first,0),n=this.first+this.size-1
co(this,{from:t,to:tt(n,Ge(this,n).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&Br(this.cm,0,0),Ji(this,Si(t),j)})),replaceRange:function(e,t,n,r){go(this,e,t=lt(this,t),n=n?lt(this,n):t,r)},getRange:function(e,t,n){var r=$e(this,lt(this,e),lt(this,t))
return!1===n?r:r.join(n||this.lineSeparator())},getLine:function(e){var t=this.getLineHandle(e)
return t&&t.text},getLineHandle:function(e){if(Je(this,e))return Ge(this,e)},getLineNumber:function(e){return Ze(e)},getLineHandleVisualStart:function(e){return"number"==typeof e&&(e=Ge(this,e)),Ft(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return lt(this,e)},getCursor:function(e){var t=this.sel.primary()
return null==e||"head"==e?t.head:"anchor"==e?t.anchor:"end"==e||"to"==e||!1===e?t.to():t.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:ri((function(e,t,n){Zi(this,lt(this,"number"==typeof e?tt(e,t||0):e),null,n)})),setSelection:ri((function(e,t,n){Zi(this,lt(this,e),lt(this,t||e),n)})),extendSelection:ri((function(e,t,n){$i(this,lt(this,e),t&&lt(this,t),n)})),extendSelections:ri((function(e,t){Yi(this,ct(this,e),t)})),extendSelectionsBy:ri((function(e,t){Yi(this,ct(this,X(this.sel.ranges,e)),t)})),setSelections:ri((function(e,t,n){if(e.length){for(var r=[],i=0;i<e.length;i++)r[i]=new Ei(lt(this,e[i].anchor),lt(this,e[i].head))
null==t&&(t=Math.min(e.length-1,this.sel.primIndex)),Ji(this,xi(this.cm,r,t),n)}})),addSelection:ri((function(e,t,n){var r=this.sel.ranges.slice(0)
r.push(new Ei(lt(this,e),lt(this,t||e))),Ji(this,xi(this.cm,r,r.length-1),n)})),getSelection:function(e){for(var t,n=this.sel.ranges,r=0;r<n.length;r++){var i=$e(this,n[r].from(),n[r].to())
t=t?t.concat(i):i}return!1===e?t:t.join(e||this.lineSeparator())},getSelections:function(e){for(var t=[],n=this.sel.ranges,r=0;r<n.length;r++){var i=$e(this,n[r].from(),n[r].to())
!1!==e&&(i=i.join(e||this.lineSeparator())),t[r]=i}return t},replaceSelection:function(e,t,n){for(var r=[],i=0;i<this.sel.ranges.length;i++)r[i]=e
this.replaceSelections(r,t,n||"+input")},replaceSelections:ri((function(e,t,n){for(var r=[],i=this.sel,o=0;o<i.ranges.length;o++){var a=i.ranges[o]
r[o]={from:a.from(),to:a.to(),text:this.splitLines(e[o]),origin:n}}for(var s=t&&"end"!=t&&function(e,t,n){for(var r=[],i=tt(e.first,0),o=i,a=0;a<t.length;a++){var s=t[a],l=Mi(s.from,i,o),c=Mi(Ni(s),i,o)
if(i=s.to,o=c,"around"==n){var u=e.sel.ranges[a],d=nt(u.head,u.anchor)<0
r[a]=new Ei(d?c:l,d?l:c)}else r[a]=new Ei(l,l)}return new Ti(r,e.sel.primIndex)}(this,r,t),l=r.length-1;l>=0;l--)co(this,r[l])
s?Qi(this,s):this.cm&&Or(this.cm)})),undo:ri((function(){ho(this,"undo")})),redo:ri((function(){ho(this,"redo")})),undoSelection:ri((function(){ho(this,"undo",!0)})),redoSelection:ri((function(){ho(this,"redo",!0)})),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,t=0,n=0,r=0;r<e.done.length;r++)e.done[r].ranges||++t
for(var i=0;i<e.undone.length;i++)e.undone[i].ranges||++n
return{undo:t,redo:n}},clearHistory:function(){var e=this
this.history=new Hi(this.history.maxGeneration),Ii(this,(function(t){return t.history=e.history}),!0)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:Ki(this.history.done),undone:Ki(this.history.undone)}},setHistory:function(e){var t=this.history=new Hi(this.history.maxGeneration)
t.done=Ki(e.done.slice(0),null,!0),t.undone=Ki(e.undone.slice(0),null,!0)},setGutterMarker:ri((function(e,t,n){return bo(this,e,"gutter",(function(e){var r=e.gutterMarkers||(e.gutterMarkers={})
return r[t]=n,!n&&ne(r)&&(e.gutterMarkers=null),!0}))})),clearGutter:ri((function(e){var t=this
this.iter((function(n){n.gutterMarkers&&n.gutterMarkers[e]&&bo(t,n,"gutter",(function(){return n.gutterMarkers[e]=null,ne(n.gutterMarkers)&&(n.gutterMarkers=null),!0}))}))})),lineInfo:function(e){var t
if("number"==typeof e){if(!Je(this,e))return null
if(t=e,!(e=Ge(this,e)))return null}else if(null==(t=Ze(e)))return null
return{line:t,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:ri((function(e,t,n){return bo(this,e,"gutter"==t?"gutter":"class",(function(e){var r="text"==t?"textClass":"background"==t?"bgClass":"gutter"==t?"gutterClass":"wrapClass"
if(e[r]){if(x(n).test(e[r]))return!1
e[r]+=" "+n}else e[r]=n
return!0}))})),removeLineClass:ri((function(e,t,n){return bo(this,e,"gutter"==t?"gutter":"class",(function(e){var r="text"==t?"textClass":"background"==t?"bgClass":"gutter"==t?"gutterClass":"wrapClass",i=e[r]
if(!i)return!1
if(null==n)e[r]=null
else{var o=i.match(x(n))
if(!o)return!1
var a=o.index+o[0].length
e[r]=i.slice(0,o.index)+(o.index&&a!=i.length?" ":"")+i.slice(a)||null}return!0}))})),addLineWidget:ri((function(e,t,n){return function(e,t,n,r){var i=new _o(e,n,r),o=e.cm
return o&&i.noHScroll&&(o.display.alignWidgets=!0),bo(e,t,"widget",(function(t){var n=t.widgets||(t.widgets=[])
if(null==i.insertAt?n.push(i):n.splice(Math.min(n.length-1,Math.max(0,i.insertAt)),0,i),i.line=t,o&&!qt(e,t)){var r=zt(t)<e.scrollTop
Xe(t,t.height+_n(i)),r&&Ar(o,i.height),o.curOp.forceUpdate=!0}return!0})),o&&cn(o,"lineWidgetAdded",o,i,"number"==typeof t?t:Ze(t)),i}(this,e,t,n)})),removeLineWidget:function(e){e.clear()},markText:function(e,t,n){return So(this,lt(this,e),lt(this,t),n,n&&n.type||"range")},setBookmark:function(e,t){var n={replacedWith:t&&(null==t.nodeType?t.widget:t),insertLeft:t&&t.insertLeft,clearWhenEmpty:!1,shared:t&&t.shared,handleMouseEvents:t&&t.handleMouseEvents}
return So(this,e=lt(this,e),e,n,"bookmark")},findMarksAt:function(e){var t=[],n=Ge(this,(e=lt(this,e)).line).markedSpans
if(n)for(var r=0;r<n.length;++r){var i=n[r];(null==i.from||i.from<=e.ch)&&(null==i.to||i.to>=e.ch)&&t.push(i.marker.parent||i.marker)}return t},findMarks:function(e,t,n){e=lt(this,e),t=lt(this,t)
var r=[],i=e.line
return this.iter(e.line,t.line+1,(function(o){var a=o.markedSpans
if(a)for(var s=0;s<a.length;s++){var l=a[s]
null!=l.to&&i==e.line&&e.ch>=l.to||null==l.from&&i!=e.line||null!=l.from&&i==t.line&&l.from>=t.ch||n&&!n(l.marker)||r.push(l.marker.parent||l.marker)}++i})),r},getAllMarks:function(){var e=[]
return this.iter((function(t){var n=t.markedSpans
if(n)for(var r=0;r<n.length;++r)null!=n[r].from&&e.push(n[r].marker)})),e},posFromIndex:function(e){var t,n=this.first,r=this.lineSeparator().length
return this.iter((function(i){var o=i.text.length+r
if(o>e)return t=e,!0
e-=o,++n})),lt(this,tt(n,t))},indexFromPos:function(e){var t=(e=lt(this,e)).ch
if(e.line<this.first||e.ch<0)return 0
var n=this.lineSeparator().length
return this.iter(this.first,e.line,(function(e){t+=e.text.length+n})),t},copy:function(e){var t=new Ao(Ye(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction)
return t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,t.sel=this.sel,t.extend=!1,e&&(t.history.undoDepth=this.history.undoDepth,t.setHistory(this.getHistory())),t},linkedDoc:function(e){e||(e={})
var t=this.first,n=this.first+this.size
null!=e.from&&e.from>t&&(t=e.from),null!=e.to&&e.to<n&&(n=e.to)
var r=new Ao(Ye(this,t,n),e.mode||this.modeOption,t,this.lineSep,this.direction)
return e.sharedHist&&(r.history=this.history),(this.linked||(this.linked=[])).push({doc:r,sharedHist:e.sharedHist}),r.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n],i=r.find(),o=e.clipPos(i.from),a=e.clipPos(i.to)
if(nt(o,a)){var s=So(e,o,a,r.primary,r.primary.type)
r.markers.push(s),s.parent=r}}}(r,ko(this)),r},unlinkDoc:function(e){if(e instanceof Sa&&(e=e.doc),this.linked)for(var t=0;t<this.linked.length;++t)if(this.linked[t].doc==e){this.linked.splice(t,1),e.unlinkDoc(this),Lo(ko(this))
break}if(e.history==this.history){var n=[e.id]
Ii(e,(function(e){return n.push(e.id)}),!0),e.history=new Hi(null),e.history.done=Ki(this.history.done,n),e.history.undone=Ki(this.history.undone,n)}},iterLinkedDocs:function(e){Ii(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):Oe(e)},lineSeparator:function(){return this.lineSep||"\n"},setDirection:ri((function(e){var t
"rtl"!=e&&(e="ltr"),e!=this.direction&&(this.direction=e,this.iter((function(e){return e.order=null})),this.cm&&ei(t=this.cm,(function(){Pi(t),hr(t)})))}))})).eachLine=Ao.prototype.iter
var Oo=0
function Bo(e){var t=this
if(Do(t),!me(t,e)&&!Tn(t.display,e)){Ce(e),s&&(Oo=+new Date)
var n=ur(t,e,!0),r=e.dataTransfer.files
if(n&&!t.isReadOnly())if(r&&r.length&&window.FileReader&&window.File)for(var i=r.length,o=Array(i),a=0,l=function(){++a==i&&ti(t,(function(){var e={from:n=lt(t.doc,n),to:n,text:t.doc.splitLines(o.filter((function(e){return null!=e})).join(t.doc.lineSeparator())),origin:"paste"}
co(t.doc,e),Qi(t.doc,Si(lt(t.doc,n),lt(t.doc,Ni(e))))}))()},c=function(e,n){if(t.options.allowDropFileTypes&&-1==W(t.options.allowDropFileTypes,e.type))l()
else{var r=new FileReader
r.onerror=function(){return l()},r.onload=function(){var e=r.result;/[\x00-\x08\x0e-\x1f]{2}/.test(e)||(o[n]=e),l()},r.readAsText(e)}},u=0;u<r.length;u++)c(r[u],u)
else{if(t.state.draggingText&&t.doc.sel.contains(n)>-1)return t.state.draggingText(e),void setTimeout((function(){return t.display.input.focus()}),20)
try{var d=e.dataTransfer.getData("Text")
if(d){var h
if(t.state.draggingText&&!t.state.draggingText.copy&&(h=t.listSelections()),eo(t.doc,Si(n,n)),h)for(var f=0;f<h.length;++f)go(t.doc,"",h[f].anchor,h[f].head,"drag")
t.replaceSelection(d,"around","paste"),t.display.input.focus()}}catch(e){}}}}function Do(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function Io(e){if(document.getElementsByClassName){for(var t=document.getElementsByClassName("CodeMirror"),n=[],r=0;r<t.length;r++){var i=t[r].CodeMirror
i&&n.push(i)}n.length&&n[0].operation((function(){for(var t=0;t<n.length;t++)e(n[t])}))}}var Ro=!1
function Po(e){var t=e.display
t.cachedCharWidth=t.cachedTextHeight=t.cachedPaddingH=null,t.scrollbarsClipped=!1,e.setSize()}for(var Ho={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},Fo=0;Fo<10;Fo++)Ho[Fo+48]=Ho[Fo+96]=String(Fo)
for(var Uo=65;Uo<=90;Uo++)Ho[Uo]=String.fromCharCode(Uo)
for(var Wo=1;Wo<=12;Wo++)Ho[Wo+111]=Ho[Wo+63235]="F"+Wo
var qo={}
function jo(e){var t,n,r,i,o=e.split(/-(?!$)/)
e=o[o.length-1]
for(var a=0;a<o.length-1;a++){var s=o[a]
if(/^(cmd|meta|m)$/i.test(s))i=!0
else if(/^a(lt)?$/i.test(s))t=!0
else if(/^(c|ctrl|control)$/i.test(s))n=!0
else{if(!/^s(hift)?$/i.test(s))throw new Error("Unrecognized modifier name: "+s)
r=!0}}return t&&(e="Alt-"+e),n&&(e="Ctrl-"+e),i&&(e="Cmd-"+e),r&&(e="Shift-"+e),e}function zo(e){var t={}
for(var n in e)if(e.hasOwnProperty(n)){var r=e[n]
if(/^(name|fallthrough|(de|at)tach)$/.test(n))continue
if("..."==r){delete e[n]
continue}for(var i=X(n.split(" "),jo),o=0;o<i.length;o++){var a=void 0,s=void 0
o==i.length-1?(s=i.join(" "),a=r):(s=i.slice(0,o+1).join(" "),a="...")
var l=t[s]
if(l){if(l!=a)throw new Error("Inconsistent bindings for "+s)}else t[s]=a}delete e[n]}for(var c in t)e[c]=t[c]
return e}function Vo(e,t,n,r){var i=(t=Yo(t)).call?t.call(e,r):t[e]
if(!1===i)return"nothing"
if("..."===i)return"multi"
if(null!=i&&n(i))return"handled"
if(t.fallthrough){if("[object Array]"!=Object.prototype.toString.call(t.fallthrough))return Vo(e,t.fallthrough,n,r)
for(var o=0;o<t.fallthrough.length;o++){var a=Vo(e,t.fallthrough[o],n,r)
if(a)return a}}}function Ko(e){var t="string"==typeof e?e:Ho[e.keyCode]
return"Ctrl"==t||"Alt"==t||"Shift"==t||"Mod"==t}function Go(e,t,n){var r=e
return t.altKey&&"Alt"!=r&&(e="Alt-"+e),(T?t.metaKey:t.ctrlKey)&&"Ctrl"!=r&&(e="Ctrl-"+e),(T?t.ctrlKey:t.metaKey)&&"Cmd"!=r&&(e="Cmd-"+e),!n&&t.shiftKey&&"Shift"!=r&&(e="Shift-"+e),e}function $o(e,t){if(h&&34==e.keyCode&&e.char)return!1
var n=Ho[e.keyCode]
return null!=n&&!e.altGraphKey&&(3==e.keyCode&&e.code&&(n=e.code),Go(n,e,t))}function Yo(e){return"string"==typeof e?qo[e]:e}function Xo(e,t){for(var n=e.doc.sel.ranges,r=[],i=0;i<n.length;i++){for(var o=t(n[i]);r.length&&nt(o.from,Y(r).to)<=0;){var a=r.pop()
if(nt(a.from,o.from)<0){o.from=a.from
break}}r.push(o)}ei(e,(function(){for(var t=r.length-1;t>=0;t--)go(e.doc,"",r[t].from,r[t].to,"+delete")
Or(e)}))}function Zo(e,t,n){var r=oe(e.text,t+n,n)
return r<0||r>e.text.length?null:r}function Qo(e,t,n){var r=Zo(e,t.ch,n)
return null==r?null:new tt(t.line,r,n<0?"after":"before")}function Jo(e,t,n,r,i){if(e){"rtl"==t.doc.direction&&(i=-i)
var o=ue(n,t.doc.direction)
if(o){var a,s=i<0?Y(o):o[0],l=i<0==(1==s.level)?"after":"before"
if(s.level>0||"rtl"==t.doc.direction){var c=Bn(t,n)
a=i<0?n.text.length-1:0
var u=Dn(t,c,a).top
a=ae((function(e){return Dn(t,c,e).top==u}),i<0==(1==s.level)?s.from:s.to-1,a),"before"==l&&(a=Zo(n,a,1))}else a=i<0?s.to:s.from
return new tt(r,a,l)}}return new tt(r,i<0?n.text.length:0,i<0?"before":"after")}qo.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},qo.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},qo.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},qo.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},qo.default=b?qo.macDefault:qo.pcDefault
var ea={selectAll:so,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),j)},killLine:function(e){return Xo(e,(function(t){if(t.empty()){var n=Ge(e.doc,t.head.line).text.length
return t.head.ch==n&&t.head.line<e.lastLine()?{from:t.head,to:tt(t.head.line+1,0)}:{from:t.head,to:tt(t.head.line,n)}}return{from:t.from(),to:t.to()}}))},deleteLine:function(e){return Xo(e,(function(t){return{from:tt(t.from().line,0),to:lt(e.doc,tt(t.to().line+1,0))}}))},delLineLeft:function(e){return Xo(e,(function(e){return{from:tt(e.from().line,0),to:e.from()}}))},delWrappedLineLeft:function(e){return Xo(e,(function(t){var n=e.charCoords(t.head,"div").top+5
return{from:e.coordsChar({left:0,top:n},"div"),to:t.from()}}))},delWrappedLineRight:function(e){return Xo(e,(function(t){var n=e.charCoords(t.head,"div").top+5,r=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:n},"div")
return{from:t.from(),to:r}}))},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(tt(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(tt(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy((function(t){return ta(e,t.head.line)}),{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy((function(t){return na(e,t.head)}),{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy((function(t){return function(e,t){var n=Ge(e.doc,t),r=function(e){for(var t;t=Rt(e);)e=t.find(1,!0).line
return e}(n)
return r!=n&&(t=Ze(r)),Jo(!0,e,n,t,-1)}(e,t.head.line)}),{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy((function(t){var n=e.cursorCoords(t.head,"div").top+5
return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:n},"div")}),V)},goLineLeft:function(e){return e.extendSelectionsBy((function(t){var n=e.cursorCoords(t.head,"div").top+5
return e.coordsChar({left:0,top:n},"div")}),V)},goLineLeftSmart:function(e){return e.extendSelectionsBy((function(t){var n=e.cursorCoords(t.head,"div").top+5,r=e.coordsChar({left:0,top:n},"div")
return r.ch<e.getLine(r.line).search(/\S/)?na(e,t.head):r}),V)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"char")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("\t")},insertSoftTab:function(e){for(var t=[],n=e.listSelections(),r=e.options.tabSize,i=0;i<n.length;i++){var o=n[i].from(),a=F(e.getLine(o.line),o.ch,r)
t.push($(r-a%r))}e.replaceSelections(t)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){return ei(e,(function(){for(var t=e.listSelections(),n=[],r=0;r<t.length;r++)if(t[r].empty()){var i=t[r].head,o=Ge(e.doc,i.line).text
if(o)if(i.ch==o.length&&(i=new tt(i.line,i.ch-1)),i.ch>0)i=new tt(i.line,i.ch+1),e.replaceRange(o.charAt(i.ch-1)+o.charAt(i.ch-2),tt(i.line,i.ch-2),i,"+transpose")
else if(i.line>e.doc.first){var a=Ge(e.doc,i.line-1).text
a&&(i=new tt(i.line,1),e.replaceRange(o.charAt(0)+e.doc.lineSeparator()+a.charAt(a.length-1),tt(i.line-1,a.length-1),i,"+transpose"))}n.push(new Ei(i,i))}e.setSelections(n)}))},newlineAndIndent:function(e){return ei(e,(function(){for(var t=e.listSelections(),n=t.length-1;n>=0;n--)e.replaceRange(e.doc.lineSeparator(),t[n].anchor,t[n].head,"+input")
t=e.listSelections()
for(var r=0;r<t.length;r++)e.indentLine(t[r].from().line,null,!0)
Or(e)}))},openLine:function(e){return e.replaceSelection("\n","start")},toggleOverwrite:function(e){return e.toggleOverwrite()}}
function ta(e,t){var n=Ge(e.doc,t),r=Ft(n)
return r!=n&&(t=Ze(r)),Jo(!0,e,r,t,1)}function na(e,t){var n=ta(e,t.line),r=Ge(e.doc,n.line),i=ue(r,e.doc.direction)
if(!i||0==i[0].level){var o=Math.max(n.ch,r.text.search(/\S/)),a=t.line==n.line&&t.ch<=o&&t.ch
return tt(n.line,a?0:o,n.sticky)}return n}function ra(e,t,n){if("string"==typeof t&&!(t=ea[t]))return!1
e.display.input.ensurePolled()
var r=e.display.shift,i=!1
try{e.isReadOnly()&&(e.state.suppressEdits=!0),n&&(e.display.shift=!1),i=t(e)!=q}finally{e.display.shift=r,e.state.suppressEdits=!1}return i}var ia=new U
function oa(e,t,n,r){var i=e.state.keySeq
if(i){if(Ko(t))return"handled"
if(/\'$/.test(t)?e.state.keySeq=null:ia.set(50,(function(){e.state.keySeq==i&&(e.state.keySeq=null,e.display.input.reset())})),aa(e,i+" "+t,n,r))return!0}return aa(e,t,n,r)}function aa(e,t,n,r){var i=function(e,t,n){for(var r=0;r<e.state.keyMaps.length;r++){var i=Vo(t,e.state.keyMaps[r],n,e)
if(i)return i}return e.options.extraKeys&&Vo(t,e.options.extraKeys,n,e)||Vo(t,e.options.keyMap,n,e)}(e,t,r)
return"multi"==i&&(e.state.keySeq=t),"handled"==i&&cn(e,"keyHandled",e,t,n),"handled"!=i&&"multi"!=i||(Ce(n),_r(e)),!!i}function sa(e,t){var n=$o(t,!0)
return!!n&&(t.shiftKey&&!e.state.keySeq?oa(e,"Shift-"+n,t,(function(t){return ra(e,t,!0)}))||oa(e,n,t,(function(t){if("string"==typeof t?/^go[A-Z]/.test(t):t.motion)return ra(e,t)})):oa(e,n,t,(function(t){return ra(e,t)})))}var la=null
function ca(e){var t=this
if(!(e.target&&e.target!=t.display.input.getField()||(t.curOp.focus=B(),me(t,e)))){s&&l<11&&27==e.keyCode&&(e.returnValue=!1)
var r=e.keyCode
t.display.shift=16==r||e.shiftKey
var i=sa(t,e)
h&&(la=i?r:null,i||88!=r||De||!(b?e.metaKey:e.ctrlKey)||t.replaceSelection("",null,"cut")),n&&!b&&!i&&46==r&&e.shiftKey&&!e.ctrlKey&&document.execCommand&&document.execCommand("cut"),18!=r||/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className)||function(e){var t=e.display.lineDiv
function n(e){18!=e.keyCode&&e.altKey||(N(t,"CodeMirror-crosshair"),pe(document,"keyup",n),pe(document,"mouseover",n))}D(t,"CodeMirror-crosshair"),he(document,"keyup",n),he(document,"mouseover",n)}(t)}}function ua(e){16==e.keyCode&&(this.doc.sel.shift=!1),me(this,e)}function da(e){var t=this
if(!(e.target&&e.target!=t.display.input.getField()||Tn(t.display,e)||me(t,e)||e.ctrlKey&&!e.altKey||b&&e.metaKey)){var n=e.keyCode,r=e.charCode
if(h&&n==la)return la=null,void Ce(e)
if(!h||e.which&&!(e.which<10)||!sa(t,e)){var i=String.fromCharCode(null==r?n:r)
"\b"!=i&&(function(e,t,n){return oa(e,"'"+n+"'",t,(function(t){return ra(e,t,!0)}))}(t,e,i)||t.display.input.onKeyPress(e))}}}var ha,fa,pa=function(e,t,n){this.time=e,this.pos=t,this.button=n}
function ga(e){var t=this,n=t.display
if(!(me(t,e)||n.activeTouch&&n.input.supportsTouch()))if(n.input.ensurePolled(),n.shift=e.shiftKey,Tn(n,e))c||(n.scroller.draggable=!1,setTimeout((function(){return n.scroller.draggable=!0}),100))
else if(!ya(t,e)){var r=ur(t,e),i=xe(e),o=r?function(e,t){var n=+new Date
return fa&&fa.compare(n,e,t)?(ha=fa=null,"triple"):ha&&ha.compare(n,e,t)?(fa=new pa(n,e,t),ha=null,"double"):(ha=new pa(n,e,t),fa=null,"single")}(r,i):"single"
window.focus(),1==i&&t.state.selectingText&&t.state.selectingText(e),r&&function(e,t,n,r,i){var o="Click"
return"double"==r?o="Double"+o:"triple"==r&&(o="Triple"+o),oa(e,Go(o=(1==t?"Left":2==t?"Middle":"Right")+o,i),i,(function(t){if("string"==typeof t&&(t=ea[t]),!t)return!1
var r=!1
try{e.isReadOnly()&&(e.state.suppressEdits=!0),r=t(e,n)!=q}finally{e.state.suppressEdits=!1}return r}))}(t,i,r,o,e)||(1==i?r?function(e,t,n,r){s?setTimeout(P(Tr,e),0):e.curOp.focus=B()
var i,o=function(e,t,n){var r=e.getOption("configureMouse"),i=r?r(e,t,n):{}
if(null==i.unit){var o=C?n.shiftKey&&n.metaKey:n.altKey
i.unit=o?"rectangle":"single"==t?"char":"double"==t?"word":"line"}return(null==i.extend||e.doc.extend)&&(i.extend=e.doc.extend||n.shiftKey),null==i.addNew&&(i.addNew=b?n.metaKey:n.ctrlKey),null==i.moveOnDrag&&(i.moveOnDrag=!(b?n.altKey:n.ctrlKey)),i}(e,n,r),a=e.doc.sel
e.options.dragDrop&&ke&&!e.isReadOnly()&&"single"==n&&(i=a.contains(t))>-1&&(nt((i=a.ranges[i]).from(),t)<0||t.xRel>0)&&(nt(i.to(),t)>0||t.xRel<0)?function(e,t,n,r){var i=e.display,o=!1,a=ti(e,(function(t){c&&(i.scroller.draggable=!1),e.state.draggingText=!1,pe(i.wrapper.ownerDocument,"mouseup",a),pe(i.wrapper.ownerDocument,"mousemove",u),pe(i.scroller,"dragstart",d),pe(i.scroller,"drop",a),o||(Ce(t),r.addNew||$i(e.doc,n,null,null,r.extend),c&&!f||s&&9==l?setTimeout((function(){i.wrapper.ownerDocument.body.focus({preventScroll:!0}),i.input.focus()}),20):i.input.focus())})),u=function(e){o=o||Math.abs(t.clientX-e.clientX)+Math.abs(t.clientY-e.clientY)>=10},d=function(){return o=!0}
c&&(i.scroller.draggable=!0),e.state.draggingText=a,a.copy=!r.moveOnDrag,i.scroller.dragDrop&&i.scroller.dragDrop(),he(i.wrapper.ownerDocument,"mouseup",a),he(i.wrapper.ownerDocument,"mousemove",u),he(i.scroller,"dragstart",d),he(i.scroller,"drop",a),Er(e),setTimeout((function(){return i.input.focus()}),20)}(e,r,t,o):function(e,t,n,r){var i=e.display,o=e.doc
Ce(t)
var a,s,l=o.sel,c=l.ranges
if(r.addNew&&!r.extend?(s=o.sel.contains(n),a=s>-1?c[s]:new Ei(n,n)):(a=o.sel.primary(),s=o.sel.primIndex),"rectangle"==r.unit)r.addNew||(a=new Ei(n,n)),n=ur(e,t,!0,!0),s=-1
else{var u=ma(e,n,r.unit)
a=r.extend?Gi(a,u.anchor,u.head,r.extend):u}r.addNew?-1==s?(s=c.length,Ji(o,xi(e,c.concat([a]),s),{scroll:!1,origin:"*mouse"})):c.length>1&&c[s].empty()&&"char"==r.unit&&!r.extend?(Ji(o,xi(e,c.slice(0,s).concat(c.slice(s+1)),0),{scroll:!1,origin:"*mouse"}),l=o.sel):Xi(o,s,a,z):(s=0,Ji(o,new Ti([a],0),z),l=o.sel)
var d=n
function h(t){if(0!=nt(d,t))if(d=t,"rectangle"==r.unit){for(var i=[],c=e.options.tabSize,u=F(Ge(o,n.line).text,n.ch,c),h=F(Ge(o,t.line).text,t.ch,c),f=Math.min(u,h),p=Math.max(u,h),g=Math.min(n.line,t.line),m=Math.min(e.lastLine(),Math.max(n.line,t.line));g<=m;g++){var v=Ge(o,g).text,y=K(v,f,c)
f==p?i.push(new Ei(tt(g,y),tt(g,y))):v.length>y&&i.push(new Ei(tt(g,y),tt(g,K(v,p,c))))}i.length||i.push(new Ei(n,n)),Ji(o,xi(e,l.ranges.slice(0,s).concat(i),s),{origin:"*mouse",scroll:!1}),e.scrollIntoView(t)}else{var b,C=a,w=ma(e,t,r.unit),_=C.anchor
nt(w.anchor,_)>0?(b=w.head,_=at(C.from(),w.anchor)):(b=w.anchor,_=ot(C.to(),w.head))
var T=l.ranges.slice(0)
T[s]=function(e,t){var n=t.anchor,r=t.head,i=Ge(e.doc,n.line)
if(0==nt(n,r)&&n.sticky==r.sticky)return t
var o=ue(i)
if(!o)return t
var a=le(o,n.ch,n.sticky),s=o[a]
if(s.from!=n.ch&&s.to!=n.ch)return t
var l,c=a+(s.from==n.ch==(1!=s.level)?0:1)
if(0==c||c==o.length)return t
if(r.line!=n.line)l=(r.line-n.line)*("ltr"==e.doc.direction?1:-1)>0
else{var u=le(o,r.ch,r.sticky),d=u-a||(r.ch-n.ch)*(1==s.level?-1:1)
l=u==c-1||u==c?d<0:d>0}var h=o[c+(l?-1:0)],f=l==(1==h.level),p=f?h.from:h.to,g=f?"after":"before"
return n.ch==p&&n.sticky==g?t:new Ei(new tt(n.line,p,g),r)}(e,new Ei(lt(o,_),b)),Ji(o,xi(e,T,s),z)}}var f=i.wrapper.getBoundingClientRect(),p=0
function g(t){e.state.selectingText=!1,p=1/0,t&&(Ce(t),i.input.focus()),pe(i.wrapper.ownerDocument,"mousemove",m),pe(i.wrapper.ownerDocument,"mouseup",v),o.history.lastSelOrigin=null}var m=ti(e,(function(t){0!==t.buttons&&xe(t)?function t(n){var a=++p,s=ur(e,n,!0,"rectangle"==r.unit)
if(s)if(0!=nt(s,d)){e.curOp.focus=B(),h(s)
var l=Lr(i,o);(s.line>=l.to||s.line<l.from)&&setTimeout(ti(e,(function(){p==a&&t(n)})),150)}else{var c=n.clientY<f.top?-20:n.clientY>f.bottom?20:0
c&&setTimeout(ti(e,(function(){p==a&&(i.scroller.scrollTop+=c,t(n))})),50)}}(t):g(t)})),v=ti(e,g)
e.state.selectingText=v,he(i.wrapper.ownerDocument,"mousemove",m),he(i.wrapper.ownerDocument,"mouseup",v)}(e,r,t,o)}(t,r,o,e):Ee(e)==n.scroller&&Ce(e):2==i?(r&&$i(t.doc,r),setTimeout((function(){return n.input.focus()}),20)):3==i&&(E?t.display.input.onContextMenu(e):Er(t)))}}function ma(e,t,n){if("char"==n)return new Ei(t,t)
if("word"==n)return e.findWordAt(t)
if("line"==n)return new Ei(tt(t.line,0),lt(e.doc,tt(t.line+1,0)))
var r=n(e,t)
return new Ei(r.from,r.to)}function va(e,t,n,r){var i,o
if(t.touches)i=t.touches[0].clientX,o=t.touches[0].clientY
else try{i=t.clientX,o=t.clientY}catch(t){return!1}if(i>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1
r&&Ce(t)
var a=e.display,s=a.lineDiv.getBoundingClientRect()
if(o>s.bottom||!ye(e,n))return _e(t)
o-=s.top-a.viewOffset
for(var l=0;l<e.display.gutterSpecs.length;++l){var c=a.gutters.childNodes[l]
if(c&&c.getBoundingClientRect().right>=i)return ge(e,n,e,Qe(e.doc,o),e.display.gutterSpecs[l].className,t),_e(t)}}function ya(e,t){return va(e,t,"gutterClick",!0)}function ba(e,t){Tn(e.display,t)||function(e,t){return!!ye(e,"gutterContextMenu")&&va(e,t,"gutterContextMenu",!1)}(e,t)||me(e,t,"contextmenu")||E||e.display.input.onContextMenu(t)}function Ca(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),Wn(e)}pa.prototype.compare=function(e,t,n){return this.time+400>e&&0==nt(t,this.pos)&&n==this.button}
var wa={toString:function(){return"CodeMirror.Init"}},_a={},Ta={}
function Ea(e,t,n){if(!t!=!(n&&n!=wa)){var r=e.display.dragFunctions,i=t?he:pe
i(e.display.scroller,"dragstart",r.start),i(e.display.scroller,"dragenter",r.enter),i(e.display.scroller,"dragover",r.over),i(e.display.scroller,"dragleave",r.leave),i(e.display.scroller,"drop",r.drop)}}function xa(e){e.options.lineWrapping?(D(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(N(e.display.wrapper,"CodeMirror-wrap"),Kt(e)),cr(e),hr(e),Wn(e),setTimeout((function(){return qr(e)}),100)}function Sa(e,t){var n=this
if(!(this instanceof Sa))return new Sa(e,t)
this.options=t=t?H(t):{},H(_a,t,!1)
var r=t.value
"string"==typeof r?r=new Ao(r,t.mode,null,t.lineSeparator,t.direction):t.mode&&(r.modeOption=t.mode),this.doc=r
var i=new Sa.inputStyles[t.inputStyle](this),o=this.display=new vi(e,r,i,t)
for(var a in o.wrapper.CodeMirror=this,Ca(this),t.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),Vr(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new U,keySeq:null,specialChars:null},t.autofocus&&!y&&o.input.focus(),s&&l<11&&setTimeout((function(){return n.display.input.reset(!0)}),20),function(e){var t=e.display
he(t.scroller,"mousedown",ti(e,ga)),he(t.scroller,"dblclick",s&&l<11?ti(e,(function(t){if(!me(e,t)){var n=ur(e,t)
if(n&&!ya(e,t)&&!Tn(e.display,t)){Ce(t)
var r=e.findWordAt(n)
$i(e.doc,r.anchor,r.head)}}})):function(t){return me(e,t)||Ce(t)}),he(t.scroller,"contextmenu",(function(t){return ba(e,t)})),he(t.input.getField(),"contextmenu",(function(n){t.scroller.contains(n.target)||ba(e,n)}))
var n,r={end:0}
function i(){t.activeTouch&&(n=setTimeout((function(){return t.activeTouch=null}),1e3),(r=t.activeTouch).end=+new Date)}function o(e,t){if(null==t.left)return!0
var n=t.left-e.left,r=t.top-e.top
return n*n+r*r>400}he(t.scroller,"touchstart",(function(i){if(!me(e,i)&&!function(e){if(1!=e.touches.length)return!1
var t=e.touches[0]
return t.radiusX<=1&&t.radiusY<=1}(i)&&!ya(e,i)){t.input.ensurePolled(),clearTimeout(n)
var o=+new Date
t.activeTouch={start:o,moved:!1,prev:o-r.end<=300?r:null},1==i.touches.length&&(t.activeTouch.left=i.touches[0].pageX,t.activeTouch.top=i.touches[0].pageY)}})),he(t.scroller,"touchmove",(function(){t.activeTouch&&(t.activeTouch.moved=!0)})),he(t.scroller,"touchend",(function(n){var r=t.activeTouch
if(r&&!Tn(t,n)&&null!=r.left&&!r.moved&&new Date-r.start<300){var a,s=e.coordsChar(t.activeTouch,"page")
a=!r.prev||o(r,r.prev)?new Ei(s,s):!r.prev.prev||o(r,r.prev.prev)?e.findWordAt(s):new Ei(tt(s.line,0),lt(e.doc,tt(s.line+1,0))),e.setSelection(a.anchor,a.head),e.focus(),Ce(n)}i()})),he(t.scroller,"touchcancel",i),he(t.scroller,"scroll",(function(){t.scroller.clientHeight&&(Rr(e,t.scroller.scrollTop),Hr(e,t.scroller.scrollLeft,!0),ge(e,"scroll",e))})),he(t.scroller,"mousewheel",(function(t){return _i(e,t)})),he(t.scroller,"DOMMouseScroll",(function(t){return _i(e,t)})),he(t.wrapper,"scroll",(function(){return t.wrapper.scrollTop=t.wrapper.scrollLeft=0})),t.dragFunctions={enter:function(t){me(e,t)||Te(t)},over:function(t){me(e,t)||(function(e,t){var n=ur(e,t)
if(n){var r=document.createDocumentFragment()
br(e,n,r),e.display.dragCursor||(e.display.dragCursor=M("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),L(e.display.dragCursor,r)}}(e,t),Te(t))},start:function(t){return function(e,t){if(s&&(!e.state.draggingText||+new Date-Oo<100))Te(t)
else if(!me(e,t)&&!Tn(e.display,t)&&(t.dataTransfer.setData("Text",e.getSelection()),t.dataTransfer.effectAllowed="copyMove",t.dataTransfer.setDragImage&&!f)){var n=M("img",null,null,"position: fixed; left: 0; top: 0;")
n.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",h&&(n.width=n.height=1,e.display.wrapper.appendChild(n),n._top=n.offsetTop),t.dataTransfer.setDragImage(n,0,0),h&&n.parentNode.removeChild(n)}}(e,t)},drop:ti(e,Bo),leave:function(t){me(e,t)||Do(e)}}
var a=t.input.getField()
he(a,"keyup",(function(t){return ua.call(e,t)})),he(a,"keydown",ti(e,ca)),he(a,"keypress",ti(e,da)),he(a,"focus",(function(t){return xr(e,t)})),he(a,"blur",(function(t){return Sr(e,t)}))}(this),function(){var e
Ro||(he(window,"resize",(function(){null==e&&(e=setTimeout((function(){e=null,Io(Po)}),100))})),he(window,"blur",(function(){return Io(Sr)})),Ro=!0)}(),Gr(this),this.curOp.forceUpdate=!0,Ri(this,r),t.autofocus&&!y||this.hasFocus()?setTimeout(P(xr,this),20):Sr(this),Ta)Ta.hasOwnProperty(a)&&Ta[a](this,t[a],wa)
fi(this),t.finishInit&&t.finishInit(this)
for(var u=0;u<Na.length;++u)Na[u](this)
$r(this),c&&t.lineWrapping&&"optimizelegibility"==getComputedStyle(o.lineDiv).textRendering&&(o.lineDiv.style.textRendering="auto")}Sa.defaults=_a,Sa.optionHandlers=Ta
var Na=[]
function ka(e,t,n,r){var i,o=e.doc
null==n&&(n="add"),"smart"==n&&(o.mode.indent?i=pt(e,t).state:n="prev")
var a=e.options.tabSize,s=Ge(o,t),l=F(s.text,null,a)
s.stateAfter&&(s.stateAfter=null)
var c,u=s.text.match(/^\s*/)[0]
if(r||/\S/.test(s.text)){if("smart"==n&&((c=o.mode.indent(i,s.text.slice(u.length),s.text))==q||c>150)){if(!r)return
n="prev"}}else c=0,n="not"
"prev"==n?c=t>o.first?F(Ge(o,t-1).text,null,a):0:"add"==n?c=l+e.options.indentUnit:"subtract"==n?c=l-e.options.indentUnit:"number"==typeof n&&(c=l+n),c=Math.max(0,c)
var d="",h=0
if(e.options.indentWithTabs)for(var f=Math.floor(c/a);f;--f)h+=a,d+="\t"
if(h<c&&(d+=$(c-h)),d!=u)return go(o,d,tt(t,0),tt(t,u.length),"+input"),s.stateAfter=null,!0
for(var p=0;p<o.sel.ranges.length;p++){var g=o.sel.ranges[p]
if(g.head.line==t&&g.head.ch<u.length){var m=tt(t,u.length)
Xi(o,p,new Ei(m,m))
break}}}Sa.defineInitHook=function(e){return Na.push(e)}
var La=null
function Ma(e){La=e}function Aa(e,t,n,r,i){var o=e.doc
e.display.shift=!1,r||(r=o.sel)
var a=+new Date-200,s="paste"==i||e.state.pasteIncoming>a,l=Oe(t),c=null
if(s&&r.ranges.length>1)if(La&&La.text.join("\n")==t){if(r.ranges.length%La.text.length==0){c=[]
for(var u=0;u<La.text.length;u++)c.push(o.splitLines(La.text[u]))}}else l.length==r.ranges.length&&e.options.pasteLinesPerSelection&&(c=X(l,(function(e){return[e]})))
for(var d=e.curOp.updateInput,h=r.ranges.length-1;h>=0;h--){var f=r.ranges[h],p=f.from(),g=f.to()
f.empty()&&(n&&n>0?p=tt(p.line,p.ch-n):e.state.overwrite&&!s?g=tt(g.line,Math.min(Ge(o,g.line).text.length,g.ch+Y(l).length)):s&&La&&La.lineWise&&La.text.join("\n")==t&&(p=g=tt(p.line,0)))
var m={from:p,to:g,text:c?c[h%c.length]:l,origin:i||(s?"paste":e.state.cutIncoming>a?"cut":"+input")}
co(e.doc,m),cn(e,"inputRead",e,m)}t&&!s&&Ba(e,t),Or(e),e.curOp.updateInput<2&&(e.curOp.updateInput=d),e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=-1}function Oa(e,t){var n=e.clipboardData&&e.clipboardData.getData("Text")
if(n)return e.preventDefault(),t.isReadOnly()||t.options.disableInput||ei(t,(function(){return Aa(t,n,0,null,"paste")})),!0}function Ba(e,t){if(e.options.electricChars&&e.options.smartIndent)for(var n=e.doc.sel,r=n.ranges.length-1;r>=0;r--){var i=n.ranges[r]
if(!(i.head.ch>100||r&&n.ranges[r-1].head.line==i.head.line)){var o=e.getModeAt(i.head),a=!1
if(o.electricChars){for(var s=0;s<o.electricChars.length;s++)if(t.indexOf(o.electricChars.charAt(s))>-1){a=ka(e,i.head.line,"smart")
break}}else o.electricInput&&o.electricInput.test(Ge(e.doc,i.head.line).text.slice(0,i.head.ch))&&(a=ka(e,i.head.line,"smart"))
a&&cn(e,"electricInput",e,i.head.line)}}}function Da(e){for(var t=[],n=[],r=0;r<e.doc.sel.ranges.length;r++){var i=e.doc.sel.ranges[r].head.line,o={anchor:tt(i,0),head:tt(i+1,0)}
n.push(o),t.push(e.getRange(o.anchor,o.head))}return{text:t,ranges:n}}function Ia(e,t,n,r){e.setAttribute("autocorrect",n?"":"off"),e.setAttribute("autocapitalize",r?"":"off"),e.setAttribute("spellcheck",!!t)}function Ra(){var e=M("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),t=M("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;")
return c?e.style.width="1000px":e.setAttribute("wrap","off"),m&&(e.style.border="1px solid black"),Ia(e),t}function Pa(e,t,n,r,i){var o=t,a=n,s=Ge(e,t.line),l=i&&"rtl"==e.direction?-n:n
function c(r){var o,a
if(null==(o=i?function(e,t,n,r){var i=ue(t,e.doc.direction)
if(!i)return Qo(t,n,r)
n.ch>=t.text.length?(n.ch=t.text.length,n.sticky="before"):n.ch<=0&&(n.ch=0,n.sticky="after")
var o=le(i,n.ch,n.sticky),a=i[o]
if("ltr"==e.doc.direction&&a.level%2==0&&(r>0?a.to>n.ch:a.from<n.ch))return Qo(t,n,r)
var s,l=function(e,n){return Zo(t,e instanceof tt?e.ch:e,n)},c=function(n){return e.options.lineWrapping?(s=s||Bn(e,t),Jn(e,t,s,n)):{begin:0,end:t.text.length}},u=c("before"==n.sticky?l(n,-1):n.ch)
if("rtl"==e.doc.direction||1==a.level){var d=1==a.level==r<0,h=l(n,d?1:-1)
if(null!=h&&(d?h<=a.to&&h<=u.end:h>=a.from&&h>=u.begin)){var f=d?"before":"after"
return new tt(n.line,h,f)}}var p=function(e,t,r){for(var o=function(e,t){return t?new tt(n.line,l(e,1),"before"):new tt(n.line,e,"after")};e>=0&&e<i.length;e+=t){var a=i[e],s=t>0==(1!=a.level),c=s?r.begin:l(r.end,-1)
if(a.from<=c&&c<a.to)return o(c,s)
if(c=s?a.from:l(a.to,-1),r.begin<=c&&c<r.end)return o(c,s)}},g=p(o+r,r,u)
if(g)return g
var m=r>0?u.end:l(u.begin,-1)
return null==m||r>0&&m==t.text.length||!(g=p(r>0?0:i.length-1,r,c(m)))?null:g}(e.cm,s,t,n):Qo(s,t,n))){if(r||(a=t.line+l)<e.first||a>=e.first+e.size||(t=new tt(a,t.ch,t.sticky),!(s=Ge(e,a))))return!1
t=Jo(i,e.cm,s,t.line,l)}else t=o
return!0}if("char"==r)c()
else if("column"==r)c(!0)
else if("word"==r||"group"==r)for(var u=null,d="group"==r,h=e.cm&&e.cm.getHelper(t,"wordChars"),f=!0;!(n<0)||c(!f);f=!1){var p=s.text.charAt(t.ch)||"\n",g=te(p,h)?"w":d&&"\n"==p?"n":!d||/\s/.test(p)?null:"p"
if(!d||f||g||(g="s"),u&&u!=g){n<0&&(n=1,c(),t.sticky="after")
break}if(g&&(u=g),n>0&&!c(!f))break}var m=oo(e,t,o,a,!0)
return rt(o,m)&&(m.hitSide=!0),m}function Ha(e,t,n,r){var i,o,a=e.doc,s=t.left
if("page"==r){var l=Math.min(e.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight),c=Math.max(l-.5*ir(e.display),3)
i=(n>0?t.bottom:t.top)+n*c}else"line"==r&&(i=n>0?t.bottom+3:t.top-3)
for(;(o=Zn(e,s,i)).outside;){if(n<0?i<=0:i>=a.height){o.hitSide=!0
break}i+=5*n}return o}var Fa=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new U,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null}
function Ua(e,t){var n=On(e,t.line)
if(!n||n.hidden)return null
var r=Ge(e.doc,t.line),i=Mn(n,r,t.line),o=ue(r,e.doc.direction),a="left"
o&&(a=le(o,t.ch)%2?"right":"left")
var s=Pn(i.map,t.ch,a)
return s.offset="right"==s.collapse?s.end:s.start,s}function Wa(e,t){return t&&(e.bad=!0),e}function qa(e,t,n){var r
if(t==e.display.lineDiv){if(!(r=e.display.lineDiv.childNodes[n]))return Wa(e.clipPos(tt(e.display.viewTo-1)),!0)
t=null,n=0}else for(r=t;;r=r.parentNode){if(!r||r==e.display.lineDiv)return null
if(r.parentNode&&r.parentNode==e.display.lineDiv)break}for(var i=0;i<e.display.view.length;i++){var o=e.display.view[i]
if(o.node==r)return ja(o,t,n)}}function ja(e,t,n){var r=e.text.firstChild,i=!1
if(!t||!O(r,t))return Wa(tt(Ze(e.line),0),!0)
if(t==r&&(i=!0,t=r.childNodes[n],n=0,!t)){var o=e.rest?Y(e.rest):e.line
return Wa(tt(Ze(o),o.text.length),i)}var a=3==t.nodeType?t:null,s=t
for(a||1!=t.childNodes.length||3!=t.firstChild.nodeType||(a=t.firstChild,n&&(n=a.nodeValue.length));s.parentNode!=r;)s=s.parentNode
var l=e.measure,c=l.maps
function u(t,n,r){for(var i=-1;i<(c?c.length:0);i++)for(var o=i<0?l.map:c[i],a=0;a<o.length;a+=3){var s=o[a+2]
if(s==t||s==n){var u=Ze(i<0?e.line:e.rest[i]),d=o[a]+r
return(r<0||s!=t)&&(d=o[a+(r?1:0)]),tt(u,d)}}}var d=u(a,s,n)
if(d)return Wa(d,i)
for(var h=s.nextSibling,f=a?a.nodeValue.length-n:0;h;h=h.nextSibling){if(d=u(h,h.firstChild,0))return Wa(tt(d.line,d.ch-f),i)
f+=h.textContent.length}for(var p=s.previousSibling,g=n;p;p=p.previousSibling){if(d=u(p,p.firstChild,-1))return Wa(tt(d.line,d.ch+g),i)
g+=p.textContent.length}}Fa.prototype.init=function(e){var t=this,n=this,r=n.cm,i=n.div=e.lineDiv
function o(e){for(var t=e.target;t;t=t.parentNode){if(t==i)return!0
if(/\bCodeMirror-(?:line)?widget\b/.test(t.className))break}return!1}function a(e){if(o(e)&&!me(r,e)){if(r.somethingSelected())Ma({lineWise:!1,text:r.getSelections()}),"cut"==e.type&&r.replaceSelection("",null,"cut")
else{if(!r.options.lineWiseCopyCut)return
var t=Da(r)
Ma({lineWise:!0,text:t.text}),"cut"==e.type&&r.operation((function(){r.setSelections(t.ranges,0,j),r.replaceSelection("",null,"cut")}))}if(e.clipboardData){e.clipboardData.clearData()
var a=La.text.join("\n")
if(e.clipboardData.setData("Text",a),e.clipboardData.getData("Text")==a)return void e.preventDefault()}var s=Ra(),l=s.firstChild
r.display.lineSpace.insertBefore(s,r.display.lineSpace.firstChild),l.value=La.text.join("\n")
var c=document.activeElement
R(l),setTimeout((function(){r.display.lineSpace.removeChild(s),c.focus(),c==i&&n.showPrimarySelection()}),50)}}Ia(i,r.options.spellcheck,r.options.autocorrect,r.options.autocapitalize),he(i,"paste",(function(e){!o(e)||me(r,e)||Oa(e,r)||l<=11&&setTimeout(ti(r,(function(){return t.updateFromDOM()})),20)})),he(i,"compositionstart",(function(e){t.composing={data:e.data,done:!1}})),he(i,"compositionupdate",(function(e){t.composing||(t.composing={data:e.data,done:!1})})),he(i,"compositionend",(function(e){t.composing&&(e.data!=t.composing.data&&t.readFromDOMSoon(),t.composing.done=!0)})),he(i,"touchstart",(function(){return n.forceCompositionEnd()})),he(i,"input",(function(){t.composing||t.readFromDOMSoon()})),he(i,"copy",a),he(i,"cut",a)},Fa.prototype.screenReaderLabelChanged=function(e){e?this.div.setAttribute("aria-label",e):this.div.removeAttribute("aria-label")},Fa.prototype.prepareSelection=function(){var e=yr(this.cm,!1)
return e.focus=document.activeElement==this.div,e},Fa.prototype.showSelection=function(e,t){e&&this.cm.display.view.length&&((e.focus||t)&&this.showPrimarySelection(),this.showMultipleSelections(e))},Fa.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()},Fa.prototype.showPrimarySelection=function(){var e=this.getSelection(),t=this.cm,r=t.doc.sel.primary(),i=r.from(),o=r.to()
if(t.display.viewTo==t.display.viewFrom||i.line>=t.display.viewTo||o.line<t.display.viewFrom)e.removeAllRanges()
else{var a=qa(t,e.anchorNode,e.anchorOffset),s=qa(t,e.focusNode,e.focusOffset)
if(!a||a.bad||!s||s.bad||0!=nt(at(a,s),i)||0!=nt(ot(a,s),o)){var l=t.display.view,c=i.line>=t.display.viewFrom&&Ua(t,i)||{node:l[0].measure.map[2],offset:0},u=o.line<t.display.viewTo&&Ua(t,o)
if(!u){var d=l[l.length-1].measure,h=d.maps?d.maps[d.maps.length-1]:d.map
u={node:h[h.length-1],offset:h[h.length-2]-h[h.length-3]}}if(c&&u){var f,p=e.rangeCount&&e.getRangeAt(0)
try{f=S(c.node,c.offset,u.offset,u.node)}catch(e){}f&&(!n&&t.state.focused?(e.collapse(c.node,c.offset),f.collapsed||(e.removeAllRanges(),e.addRange(f))):(e.removeAllRanges(),e.addRange(f)),p&&null==e.anchorNode?e.addRange(p):n&&this.startGracePeriod()),this.rememberSelection()}else e.removeAllRanges()}}},Fa.prototype.startGracePeriod=function(){var e=this
clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout((function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation((function(){return e.cm.curOp.selectionChanged=!0}))}),20)},Fa.prototype.showMultipleSelections=function(e){L(this.cm.display.cursorDiv,e.cursors),L(this.cm.display.selectionDiv,e.selection)},Fa.prototype.rememberSelection=function(){var e=this.getSelection()
this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},Fa.prototype.selectionInEditor=function(){var e=this.getSelection()
if(!e.rangeCount)return!1
var t=e.getRangeAt(0).commonAncestorContainer
return O(this.div,t)},Fa.prototype.focus=function(){"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()&&document.activeElement==this.div||this.showSelection(this.prepareSelection(),!0),this.div.focus())},Fa.prototype.blur=function(){this.div.blur()},Fa.prototype.getField=function(){return this.div},Fa.prototype.supportsTouch=function(){return!0},Fa.prototype.receivedFocus=function(){var e=this
this.selectionInEditor()?this.pollSelection():ei(this.cm,(function(){return e.cm.curOp.selectionChanged=!0})),this.polling.set(this.cm.options.pollInterval,(function t(){e.cm.state.focused&&(e.pollSelection(),e.polling.set(e.cm.options.pollInterval,t))}))},Fa.prototype.selectionChanged=function(){var e=this.getSelection()
return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},Fa.prototype.pollSelection=function(){if(null==this.readDOMTimeout&&!this.gracePeriod&&this.selectionChanged()){var e=this.getSelection(),t=this.cm
if(v&&d&&this.cm.display.gutterSpecs.length&&function(e){for(var t=e;t;t=t.parentNode)if(/CodeMirror-gutter-wrapper/.test(t.className))return!0
return!1}(e.anchorNode))return this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),void this.focus()
if(!this.composing){this.rememberSelection()
var n=qa(t,e.anchorNode,e.anchorOffset),r=qa(t,e.focusNode,e.focusOffset)
n&&r&&ei(t,(function(){Ji(t.doc,Si(n,r),j),(n.bad||r.bad)&&(t.curOp.selectionChanged=!0)}))}}},Fa.prototype.pollContent=function(){null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null)
var e,t,n,r=this.cm,i=r.display,o=r.doc.sel.primary(),a=o.from(),s=o.to()
if(0==a.ch&&a.line>r.firstLine()&&(a=tt(a.line-1,Ge(r.doc,a.line-1).length)),s.ch==Ge(r.doc,s.line).text.length&&s.line<r.lastLine()&&(s=tt(s.line+1,0)),a.line<i.viewFrom||s.line>i.viewTo-1)return!1
a.line==i.viewFrom||0==(e=dr(r,a.line))?(t=Ze(i.view[0].line),n=i.view[0].node):(t=Ze(i.view[e].line),n=i.view[e-1].node.nextSibling)
var l,c,u=dr(r,s.line)
if(u==i.view.length-1?(l=i.viewTo-1,c=i.lineDiv.lastChild):(l=Ze(i.view[u+1].line)-1,c=i.view[u+1].node.previousSibling),!n)return!1
for(var d=r.doc.splitLines(function(e,t,n,r,i){var o="",a=!1,s=e.doc.lineSeparator(),l=!1
function c(){a&&(o+=s,l&&(o+=s),a=l=!1)}function u(e){e&&(c(),o+=e)}function d(t){if(1==t.nodeType){var n=t.getAttribute("cm-text")
if(n)return void u(n)
var o,h=t.getAttribute("cm-marker")
if(h){var f=e.findMarks(tt(r,0),tt(i+1,0),(m=+h,function(e){return e.id==m}))
return void(f.length&&(o=f[0].find(0))&&u($e(e.doc,o.from,o.to).join(s)))}if("false"==t.getAttribute("contenteditable"))return
var p=/^(pre|div|p|li|table|br)$/i.test(t.nodeName)
if(!/^br$/i.test(t.nodeName)&&0==t.textContent.length)return
p&&c()
for(var g=0;g<t.childNodes.length;g++)d(t.childNodes[g]);/^(pre|p)$/i.test(t.nodeName)&&(l=!0),p&&(a=!0)}else 3==t.nodeType&&u(t.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))
var m}for(;d(t),t!=n;)t=t.nextSibling,l=!1
return o}(r,n,c,t,l)),h=$e(r.doc,tt(t,0),tt(l,Ge(r.doc,l).text.length));d.length>1&&h.length>1;)if(Y(d)==Y(h))d.pop(),h.pop(),l--
else{if(d[0]!=h[0])break
d.shift(),h.shift(),t++}for(var f=0,p=0,g=d[0],m=h[0],v=Math.min(g.length,m.length);f<v&&g.charCodeAt(f)==m.charCodeAt(f);)++f
for(var y=Y(d),b=Y(h),C=Math.min(y.length-(1==d.length?f:0),b.length-(1==h.length?f:0));p<C&&y.charCodeAt(y.length-p-1)==b.charCodeAt(b.length-p-1);)++p
if(1==d.length&&1==h.length&&t==a.line)for(;f&&f>a.ch&&y.charCodeAt(y.length-p-1)==b.charCodeAt(b.length-p-1);)f--,p++
d[d.length-1]=y.slice(0,y.length-p).replace(/^\u200b+/,""),d[0]=d[0].slice(f).replace(/\u200b+$/,"")
var w=tt(t,f),_=tt(l,h.length?Y(h).length-p:0)
return d.length>1||d[0]||nt(w,_)?(go(r.doc,d,w,_,"+input"),!0):void 0},Fa.prototype.ensurePolled=function(){this.forceCompositionEnd()},Fa.prototype.reset=function(){this.forceCompositionEnd()},Fa.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},Fa.prototype.readFromDOMSoon=function(){var e=this
null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout((function(){if(e.readDOMTimeout=null,e.composing){if(!e.composing.done)return
e.composing=null}e.updateFromDOM()}),80))},Fa.prototype.updateFromDOM=function(){var e=this
!this.cm.isReadOnly()&&this.pollContent()||ei(this.cm,(function(){return hr(e.cm)}))},Fa.prototype.setUneditable=function(e){e.contentEditable="false"},Fa.prototype.onKeyPress=function(e){0==e.charCode||this.composing||(e.preventDefault(),this.cm.isReadOnly()||ti(this.cm,Aa)(this.cm,String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),0))},Fa.prototype.readOnlyChanged=function(e){this.div.contentEditable=String("nocursor"!=e)},Fa.prototype.onContextMenu=function(){},Fa.prototype.resetPosition=function(){},Fa.prototype.needsContentAttribute=!0
var za=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new U,this.hasSelection=!1,this.composing=null}
za.prototype.init=function(e){var t=this,n=this,r=this.cm
this.createField(e)
var i=this.textarea
function o(e){if(!me(r,e)){if(r.somethingSelected())Ma({lineWise:!1,text:r.getSelections()})
else{if(!r.options.lineWiseCopyCut)return
var t=Da(r)
Ma({lineWise:!0,text:t.text}),"cut"==e.type?r.setSelections(t.ranges,null,j):(n.prevInput="",i.value=t.text.join("\n"),R(i))}"cut"==e.type&&(r.state.cutIncoming=+new Date)}}e.wrapper.insertBefore(this.wrapper,e.wrapper.firstChild),m&&(i.style.width="0px"),he(i,"input",(function(){s&&l>=9&&t.hasSelection&&(t.hasSelection=null),n.poll()})),he(i,"paste",(function(e){me(r,e)||Oa(e,r)||(r.state.pasteIncoming=+new Date,n.fastPoll())})),he(i,"cut",o),he(i,"copy",o),he(e.scroller,"paste",(function(t){if(!Tn(e,t)&&!me(r,t)){if(!i.dispatchEvent)return r.state.pasteIncoming=+new Date,void n.focus()
var o=new Event("paste")
o.clipboardData=t.clipboardData,i.dispatchEvent(o)}})),he(e.lineSpace,"selectstart",(function(t){Tn(e,t)||Ce(t)})),he(i,"compositionstart",(function(){var e=r.getCursor("from")
n.composing&&n.composing.range.clear(),n.composing={start:e,range:r.markText(e,r.getCursor("to"),{className:"CodeMirror-composing"})}})),he(i,"compositionend",(function(){n.composing&&(n.poll(),n.composing.range.clear(),n.composing=null)}))},za.prototype.createField=function(e){this.wrapper=Ra(),this.textarea=this.wrapper.firstChild},za.prototype.screenReaderLabelChanged=function(e){e?this.textarea.setAttribute("aria-label",e):this.textarea.removeAttribute("aria-label")},za.prototype.prepareSelection=function(){var e=this.cm,t=e.display,n=e.doc,r=yr(e)
if(e.options.moveInputWithCursor){var i=$n(e,n.sel.primary().head,"div"),o=t.wrapper.getBoundingClientRect(),a=t.lineDiv.getBoundingClientRect()
r.teTop=Math.max(0,Math.min(t.wrapper.clientHeight-10,i.top+a.top-o.top)),r.teLeft=Math.max(0,Math.min(t.wrapper.clientWidth-10,i.left+a.left-o.left))}return r},za.prototype.showSelection=function(e){var t=this.cm.display
L(t.cursorDiv,e.cursors),L(t.selectionDiv,e.selection),null!=e.teTop&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},za.prototype.reset=function(e){if(!this.contextMenuPending&&!this.composing){var t=this.cm
if(t.somethingSelected()){this.prevInput=""
var n=t.getSelection()
this.textarea.value=n,t.state.focused&&R(this.textarea),s&&l>=9&&(this.hasSelection=n)}else e||(this.prevInput=this.textarea.value="",s&&l>=9&&(this.hasSelection=null))}},za.prototype.getField=function(){return this.textarea},za.prototype.supportsTouch=function(){return!1},za.prototype.focus=function(){if("nocursor"!=this.cm.options.readOnly&&(!y||B()!=this.textarea))try{this.textarea.focus()}catch(e){}},za.prototype.blur=function(){this.textarea.blur()},za.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},za.prototype.receivedFocus=function(){this.slowPoll()},za.prototype.slowPoll=function(){var e=this
this.pollingFast||this.polling.set(this.cm.options.pollInterval,(function(){e.poll(),e.cm.state.focused&&e.slowPoll()}))},za.prototype.fastPoll=function(){var e=!1,t=this
t.pollingFast=!0,t.polling.set(20,(function n(){t.poll()||e?(t.pollingFast=!1,t.slowPoll()):(e=!0,t.polling.set(60,n))}))},za.prototype.poll=function(){var e=this,t=this.cm,n=this.textarea,r=this.prevInput
if(this.contextMenuPending||!t.state.focused||Be(n)&&!r&&!this.composing||t.isReadOnly()||t.options.disableInput||t.state.keySeq)return!1
var i=n.value
if(i==r&&!t.somethingSelected())return!1
if(s&&l>=9&&this.hasSelection===i||b&&/[\uf700-\uf7ff]/.test(i))return t.display.input.reset(),!1
if(t.doc.sel==t.display.selForContextMenu){var o=i.charCodeAt(0)
if(8203!=o||r||(r="​"),8666==o)return this.reset(),this.cm.execCommand("undo")}for(var a=0,c=Math.min(r.length,i.length);a<c&&r.charCodeAt(a)==i.charCodeAt(a);)++a
return ei(t,(function(){Aa(t,i.slice(a),r.length-a,null,e.composing?"*compose":null),i.length>1e3||i.indexOf("\n")>-1?n.value=e.prevInput="":e.prevInput=i,e.composing&&(e.composing.range.clear(),e.composing.range=t.markText(e.composing.start,t.getCursor("to"),{className:"CodeMirror-composing"}))})),!0},za.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},za.prototype.onKeyPress=function(){s&&l>=9&&(this.hasSelection=null),this.fastPoll()},za.prototype.onContextMenu=function(e){var t=this,n=t.cm,r=n.display,i=t.textarea
t.contextMenuPending&&t.contextMenuPending()
var o=ur(n,e),a=r.scroller.scrollTop
if(o&&!h){n.options.resetSelectionOnContextMenu&&-1==n.doc.sel.contains(o)&&ti(n,Ji)(n.doc,Si(o),j)
var u,d=i.style.cssText,f=t.wrapper.style.cssText,p=t.wrapper.offsetParent.getBoundingClientRect()
t.wrapper.style.cssText="position: static",i.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(e.clientY-p.top-5)+"px; left: "+(e.clientX-p.left-5)+"px;\n      z-index: 1000; background: "+(s?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",c&&(u=window.scrollY),r.input.focus(),c&&window.scrollTo(null,u),r.input.reset(),n.somethingSelected()||(i.value=t.prevInput=" "),t.contextMenuPending=m,r.selForContextMenu=n.doc.sel,clearTimeout(r.detectingSelectAll),s&&l>=9&&g(),E?(Te(e),he(window,"mouseup",(function e(){pe(window,"mouseup",e),setTimeout(m,20)}))):setTimeout(m,50)}function g(){if(null!=i.selectionStart){var e=n.somethingSelected(),o="​"+(e?i.value:"")
i.value="⇚",i.value=o,t.prevInput=e?"":"​",i.selectionStart=1,i.selectionEnd=o.length,r.selForContextMenu=n.doc.sel}}function m(){if(t.contextMenuPending==m&&(t.contextMenuPending=!1,t.wrapper.style.cssText=f,i.style.cssText=d,s&&l<9&&r.scrollbars.setScrollTop(r.scroller.scrollTop=a),null!=i.selectionStart)){(!s||s&&l<9)&&g()
var e=0
r.detectingSelectAll=setTimeout((function o(){r.selForContextMenu==n.doc.sel&&0==i.selectionStart&&i.selectionEnd>0&&"​"==t.prevInput?ti(n,so)(n):e++<10?r.detectingSelectAll=setTimeout(o,500):(r.selForContextMenu=null,r.input.reset())}),200)}}},za.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled="nocursor"==e},za.prototype.setUneditable=function(){},za.prototype.needsContentAttribute=!1,function(e){var t=e.optionHandlers
function n(n,r,i,o){e.defaults[n]=r,i&&(t[n]=o?function(e,t,n){n!=wa&&i(e,t,n)}:i)}e.defineOption=n,e.Init=wa,n("value","",(function(e,t){return e.setValue(t)}),!0),n("mode",null,(function(e,t){e.doc.modeOption=t,Ai(e)}),!0),n("indentUnit",2,Ai,!0),n("indentWithTabs",!1),n("smartIndent",!0),n("tabSize",4,(function(e){Oi(e),Wn(e),hr(e)}),!0),n("lineSeparator",null,(function(e,t){if(e.doc.lineSep=t,t){var n=[],r=e.doc.first
e.doc.iter((function(e){for(var i=0;;){var o=e.text.indexOf(t,i)
if(-1==o)break
i=o+t.length,n.push(tt(r,o))}r++}))
for(var i=n.length-1;i>=0;i--)go(e.doc,t,n[i],tt(n[i].line,n[i].ch+t.length))}})),n("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,(function(e,t,n){e.state.specialChars=new RegExp(t.source+(t.test("\t")?"":"|\t"),"g"),n!=wa&&e.refresh()})),n("specialCharPlaceholder",Jt,(function(e){return e.refresh()}),!0),n("electricChars",!0),n("inputStyle",y?"contenteditable":"textarea",(function(){throw new Error("inputStyle can not (yet) be changed in a running editor")}),!0),n("spellcheck",!1,(function(e,t){return e.getInputField().spellcheck=t}),!0),n("autocorrect",!1,(function(e,t){return e.getInputField().autocorrect=t}),!0),n("autocapitalize",!1,(function(e,t){return e.getInputField().autocapitalize=t}),!0),n("rtlMoveVisually",!w),n("wholeLineUpdateBefore",!0),n("theme","default",(function(e){Ca(e),mi(e)}),!0),n("keyMap","default",(function(e,t,n){var r=Yo(t),i=n!=wa&&Yo(n)
i&&i.detach&&i.detach(e,r),r.attach&&r.attach(e,i||null)})),n("extraKeys",null),n("configureMouse",null),n("lineWrapping",!1,xa,!0),n("gutters",[],(function(e,t){e.display.gutterSpecs=pi(t,e.options.lineNumbers),mi(e)}),!0),n("fixedGutter",!0,(function(e,t){e.display.gutters.style.left=t?sr(e.display)+"px":"0",e.refresh()}),!0),n("coverGutterNextToScrollbar",!1,(function(e){return qr(e)}),!0),n("scrollbarStyle","native",(function(e){Vr(e),qr(e),e.display.scrollbars.setScrollTop(e.doc.scrollTop),e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)}),!0),n("lineNumbers",!1,(function(e,t){e.display.gutterSpecs=pi(e.options.gutters,t),mi(e)}),!0),n("firstLineNumber",1,mi,!0),n("lineNumberFormatter",(function(e){return e}),mi,!0),n("showCursorWhenSelecting",!1,vr,!0),n("resetSelectionOnContextMenu",!0),n("lineWiseCopyCut",!0),n("pasteLinesPerSelection",!0),n("selectionsMayTouch",!1),n("readOnly",!1,(function(e,t){"nocursor"==t&&(Sr(e),e.display.input.blur()),e.display.input.readOnlyChanged(t)})),n("screenReaderLabel",null,(function(e,t){t=""===t?null:t,e.display.input.screenReaderLabelChanged(t)})),n("disableInput",!1,(function(e,t){t||e.display.input.reset()}),!0),n("dragDrop",!0,Ea),n("allowDropFileTypes",null),n("cursorBlinkRate",530),n("cursorScrollMargin",0),n("cursorHeight",1,vr,!0),n("singleCursorHeightPerLine",!0,vr,!0),n("workTime",100),n("workDelay",100),n("flattenSpans",!0,Oi,!0),n("addModeClass",!1,Oi,!0),n("pollInterval",100),n("undoDepth",200,(function(e,t){return e.doc.history.undoDepth=t})),n("historyEventDelay",1250),n("viewportMargin",10,(function(e){return e.refresh()}),!0),n("maxHighlightLength",1e4,Oi,!0),n("moveInputWithCursor",!0,(function(e,t){t||e.display.input.resetPosition()})),n("tabindex",null,(function(e,t){return e.display.input.getField().tabIndex=t||""})),n("autofocus",null),n("direction","ltr",(function(e,t){return e.doc.setDirection(t)}),!0),n("phrases",null)}(Sa),function(e){var t=e.optionHandlers,n=e.helpers={}
e.prototype={constructor:e,focus:function(){window.focus(),this.display.input.focus()},setOption:function(e,n){var r=this.options,i=r[e]
r[e]==n&&"mode"!=e||(r[e]=n,t.hasOwnProperty(e)&&ti(this,t[e])(this,n,i),ge(this,"optionChange",this,e))},getOption:function(e){return this.options[e]},getDoc:function(){return this.doc},addKeyMap:function(e,t){this.state.keyMaps[t?"push":"unshift"](Yo(e))},removeKeyMap:function(e){for(var t=this.state.keyMaps,n=0;n<t.length;++n)if(t[n]==e||t[n].name==e)return t.splice(n,1),!0},addOverlay:ni((function(t,n){var r=t.token?t:e.getMode(this.options,t)
if(r.startState)throw new Error("Overlays may not be stateful.")
!function(e,t,n){for(var r=0,i=n(t);r<e.length&&n(e[r])<=i;)r++
e.splice(r,0,t)}(this.state.overlays,{mode:r,modeSpec:t,opaque:n&&n.opaque,priority:n&&n.priority||0},(function(e){return e.priority})),this.state.modeGen++,hr(this)})),removeOverlay:ni((function(e){for(var t=this.state.overlays,n=0;n<t.length;++n){var r=t[n].modeSpec
if(r==e||"string"==typeof e&&r.name==e)return t.splice(n,1),this.state.modeGen++,void hr(this)}})),indentLine:ni((function(e,t,n){"string"!=typeof t&&"number"!=typeof t&&(t=null==t?this.options.smartIndent?"smart":"prev":t?"add":"subtract"),Je(this.doc,e)&&ka(this,e,t,n)})),indentSelection:ni((function(e){for(var t=this.doc.sel.ranges,n=-1,r=0;r<t.length;r++){var i=t[r]
if(i.empty())i.head.line>n&&(ka(this,i.head.line,e,!0),n=i.head.line,r==this.doc.sel.primIndex&&Or(this))
else{var o=i.from(),a=i.to(),s=Math.max(n,o.line)
n=Math.min(this.lastLine(),a.line-(a.ch?0:1))+1
for(var l=s;l<n;++l)ka(this,l,e)
var c=this.doc.sel.ranges
0==o.ch&&t.length==c.length&&c[r].from().ch>0&&Xi(this.doc,r,new Ei(o,c[r].to()),j)}}})),getTokenAt:function(e,t){return bt(this,e,t)},getLineTokens:function(e,t){return bt(this,tt(e),t,!0)},getTokenTypeAt:function(e){e=lt(this.doc,e)
var t,n=ft(this,Ge(this.doc,e.line)),r=0,i=(n.length-1)/2,o=e.ch
if(0==o)t=n[2]
else for(;;){var a=r+i>>1
if((a?n[2*a-1]:0)>=o)i=a
else{if(!(n[2*a+1]<o)){t=n[2*a+2]
break}r=a+1}}var s=t?t.indexOf("overlay "):-1
return s<0?t:0==s?null:t.slice(0,s-1)},getModeAt:function(t){var n=this.doc.mode
return n.innerMode?e.innerMode(n,this.getTokenAt(t).state).mode:n},getHelper:function(e,t){return this.getHelpers(e,t)[0]},getHelpers:function(e,t){var r=[]
if(!n.hasOwnProperty(t))return r
var i=n[t],o=this.getModeAt(e)
if("string"==typeof o[t])i[o[t]]&&r.push(i[o[t]])
else if(o[t])for(var a=0;a<o[t].length;a++){var s=i[o[t][a]]
s&&r.push(s)}else o.helperType&&i[o.helperType]?r.push(i[o.helperType]):i[o.name]&&r.push(i[o.name])
for(var l=0;l<i._global.length;l++){var c=i._global[l]
c.pred(o,this)&&-1==W(r,c.val)&&r.push(c.val)}return r},getStateAfter:function(e,t){var n=this.doc
return pt(this,(e=st(n,null==e?n.first+n.size-1:e))+1,t).state},cursorCoords:function(e,t){var n=this.doc.sel.primary()
return $n(this,null==e?n.head:"object"==a(e)?lt(this.doc,e):e?n.from():n.to(),t||"page")},charCoords:function(e,t){return Gn(this,lt(this.doc,e),t||"page")},coordsChar:function(e,t){return Zn(this,(e=Kn(this,e,t||"page")).left,e.top)},lineAtHeight:function(e,t){return e=Kn(this,{top:e,left:0},t||"page").top,Qe(this.doc,e+this.display.viewOffset)},heightAtLine:function(e,t,n){var r,i=!1
if("number"==typeof e){var o=this.doc.first+this.doc.size-1
e<this.doc.first?e=this.doc.first:e>o&&(e=o,i=!0),r=Ge(this.doc,e)}else r=e
return Vn(this,r,{top:0,left:0},t||"page",n||i).top+(i?this.doc.height-zt(r):0)},defaultTextHeight:function(){return ir(this.display)},defaultCharWidth:function(){return or(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(e,t,n,r,i){var o,a,s=this.display,l=(e=$n(this,lt(this.doc,e))).bottom,c=e.left
if(t.style.position="absolute",t.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(t),s.sizer.appendChild(t),"over"==r)l=e.top
else if("above"==r||"near"==r){var u=Math.max(s.wrapper.clientHeight,this.doc.height),d=Math.max(s.sizer.clientWidth,s.lineSpace.clientWidth);("above"==r||e.bottom+t.offsetHeight>u)&&e.top>t.offsetHeight?l=e.top-t.offsetHeight:e.bottom+t.offsetHeight<=u&&(l=e.bottom),c+t.offsetWidth>d&&(c=d-t.offsetWidth)}t.style.top=l+"px",t.style.left=t.style.right="","right"==i?(c=s.sizer.clientWidth-t.offsetWidth,t.style.right="0px"):("left"==i?c=0:"middle"==i&&(c=(s.sizer.clientWidth-t.offsetWidth)/2),t.style.left=c+"px"),n&&(null!=(a=Mr(o=this,{left:c,top:l,right:c+t.offsetWidth,bottom:l+t.offsetHeight})).scrollTop&&Rr(o,a.scrollTop),null!=a.scrollLeft&&Hr(o,a.scrollLeft))},triggerOnKeyDown:ni(ca),triggerOnKeyPress:ni(da),triggerOnKeyUp:ua,triggerOnMouseDown:ni(ga),execCommand:function(e){if(ea.hasOwnProperty(e))return ea[e].call(null,this)},triggerElectric:ni((function(e){Ba(this,e)})),findPosH:function(e,t,n,r){var i=1
t<0&&(i=-1,t=-t)
for(var o=lt(this.doc,e),a=0;a<t&&!(o=Pa(this.doc,o,i,n,r)).hitSide;++a);return o},moveH:ni((function(e,t){var n=this
this.extendSelectionsBy((function(r){return n.display.shift||n.doc.extend||r.empty()?Pa(n.doc,r.head,e,t,n.options.rtlMoveVisually):e<0?r.from():r.to()}),V)})),deleteH:ni((function(e,t){var n=this.doc.sel,r=this.doc
n.somethingSelected()?r.replaceSelection("",null,"+delete"):Xo(this,(function(n){var i=Pa(r,n.head,e,t,!1)
return e<0?{from:i,to:n.head}:{from:n.head,to:i}}))})),findPosV:function(e,t,n,r){var i=1,o=r
t<0&&(i=-1,t=-t)
for(var a=lt(this.doc,e),s=0;s<t;++s){var l=$n(this,a,"div")
if(null==o?o=l.left:l.left=o,(a=Ha(this,l,i,n)).hitSide)break}return a},moveV:ni((function(e,t){var n=this,r=this.doc,i=[],o=!this.display.shift&&!r.extend&&r.sel.somethingSelected()
if(r.extendSelectionsBy((function(a){if(o)return e<0?a.from():a.to()
var s=$n(n,a.head,"div")
null!=a.goalColumn&&(s.left=a.goalColumn),i.push(s.left)
var l=Ha(n,s,e,t)
return"page"==t&&a==r.sel.primary()&&Ar(n,Gn(n,l,"div").top-s.top),l}),V),i.length)for(var a=0;a<r.sel.ranges.length;a++)r.sel.ranges[a].goalColumn=i[a]})),findWordAt:function(e){var t=Ge(this.doc,e.line).text,n=e.ch,r=e.ch
if(t){var i=this.getHelper(e,"wordChars")
"before"!=e.sticky&&r!=t.length||!n?++r:--n
for(var o=t.charAt(n),a=te(o,i)?function(e){return te(e,i)}:/\s/.test(o)?function(e){return/\s/.test(e)}:function(e){return!/\s/.test(e)&&!te(e)};n>0&&a(t.charAt(n-1));)--n
for(;r<t.length&&a(t.charAt(r));)++r}return new Ei(tt(e.line,n),tt(e.line,r))},toggleOverwrite:function(e){null!=e&&e==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?D(this.display.cursorDiv,"CodeMirror-overwrite"):N(this.display.cursorDiv,"CodeMirror-overwrite"),ge(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==B()},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:ni((function(e,t){Br(this,e,t)})),getScrollInfo:function(){var e=this.display.scroller
return{left:e.scrollLeft,top:e.scrollTop,height:e.scrollHeight-Nn(this)-this.display.barHeight,width:e.scrollWidth-Nn(this)-this.display.barWidth,clientHeight:Ln(this),clientWidth:kn(this)}},scrollIntoView:ni((function(e,t){null==e?(e={from:this.doc.sel.primary().head,to:null},null==t&&(t=this.options.cursorScrollMargin)):"number"==typeof e?e={from:tt(e,0),to:null}:null==e.from&&(e={from:e,to:null}),e.to||(e.to=e.from),e.margin=t||0,null!=e.from.line?function(e,t){Dr(e),e.curOp.scrollToPos=t}(this,e):Ir(this,e.from,e.to,e.margin)})),setSize:ni((function(e,t){var n=this,r=function(e){return"number"==typeof e||/^\d+$/.test(String(e))?e+"px":e}
null!=e&&(this.display.wrapper.style.width=r(e)),null!=t&&(this.display.wrapper.style.height=r(t)),this.options.lineWrapping&&Un(this)
var i=this.display.viewFrom
this.doc.iter(i,this.display.viewTo,(function(e){if(e.widgets)for(var t=0;t<e.widgets.length;t++)if(e.widgets[t].noHScroll){fr(n,i,"widget")
break}++i})),this.curOp.forceUpdate=!0,ge(this,"refresh",this)})),operation:function(e){return ei(this,e)},startOperation:function(){return Gr(this)},endOperation:function(){return $r(this)},refresh:ni((function(){var e=this.display.cachedTextHeight
hr(this),this.curOp.forceUpdate=!0,Wn(this),Br(this,this.doc.scrollLeft,this.doc.scrollTop),ui(this.display),(null==e||Math.abs(e-ir(this.display))>.5||this.options.lineWrapping)&&cr(this),ge(this,"refresh",this)})),swapDoc:ni((function(e){var t=this.doc
return t.cm=null,this.state.selectingText&&this.state.selectingText(),Ri(this,e),Wn(this),this.display.input.reset(),Br(this,e.scrollLeft,e.scrollTop),this.curOp.forceScroll=!0,cn(this,"swapDoc",this,t),t})),phrase:function(e){var t=this.options.phrases
return t&&Object.prototype.hasOwnProperty.call(t,e)?t[e]:e},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},be(e),e.registerHelper=function(t,r,i){n.hasOwnProperty(t)||(n[t]=e[t]={_global:[]}),n[t][r]=i},e.registerGlobalHelper=function(t,r,i,o){e.registerHelper(t,r,o),n[t]._global.push({pred:i,val:o})}}(Sa)
var Va="iter insert remove copy getEditor constructor".split(" ")
for(var Ka in Ao.prototype)Ao.prototype.hasOwnProperty(Ka)&&W(Va,Ka)<0&&(Sa.prototype[Ka]=function(e){return function(){return e.apply(this.doc,arguments)}}(Ao.prototype[Ka]))
return be(Ao),Sa.inputStyles={textarea:za,contenteditable:Fa},Sa.defineMode=function(e){Sa.defaults.mode||"null"==e||(Sa.defaults.mode=e),He.apply(this,arguments)},Sa.defineMIME=function(e,t){Pe[e]=t},Sa.defineMode("null",(function(){return{token:function(e){return e.skipToEnd()}}})),Sa.defineMIME("text/plain","null"),Sa.defineExtension=function(e,t){Sa.prototype[e]=t},Sa.defineDocExtension=function(e,t){Ao.prototype[e]=t},Sa.fromTextArea=function(e,t){if((t=t?H(t):{}).value=e.value,!t.tabindex&&e.tabIndex&&(t.tabindex=e.tabIndex),!t.placeholder&&e.placeholder&&(t.placeholder=e.placeholder),null==t.autofocus){var n=B()
t.autofocus=n==e||null!=e.getAttribute("autofocus")&&n==document.body}function r(){e.value=s.getValue()}var i
if(e.form&&(he(e.form,"submit",r),!t.leaveSubmitMethodAlone)){var o=e.form
i=o.submit
try{var a=o.submit=function(){r(),o.submit=i,o.submit(),o.submit=a}}catch(e){}}t.finishInit=function(n){n.save=r,n.getTextArea=function(){return e},n.toTextArea=function(){n.toTextArea=isNaN,r(),e.parentNode.removeChild(n.getWrapperElement()),e.style.display="",e.form&&(pe(e.form,"submit",r),t.leaveSubmitMethodAlone||"function"!=typeof e.form.submit||(e.form.submit=i))}},e.style.display="none"
var s=Sa((function(t){return e.parentNode.insertBefore(t,e.nextSibling)}),t)
return s},function(e){e.off=pe,e.on=he,e.wheelEventPixels=wi,e.Doc=Ao,e.splitLines=Oe,e.countColumn=F,e.findColumn=K,e.isWordChar=ee,e.Pass=q,e.signal=ge,e.Line=Gt,e.changeEnd=Ni,e.scrollbarModel=zr,e.Pos=tt,e.cmpPos=nt,e.modes=Re,e.mimeModes=Pe,e.resolveMode=Fe,e.getMode=Ue,e.modeExtensions=We,e.extendMode=qe,e.copyState=je,e.startState=Ve,e.innerMode=ze,e.commands=ea,e.keyMap=qo,e.keyName=$o,e.isModifierKey=Ko,e.lookupKey=Vo,e.normalizeKeyMap=zo,e.StringStream=Ke,e.SharedTextMarker=No,e.TextMarker=xo,e.LineWidget=_o,e.e_preventDefault=Ce,e.e_stopPropagation=we,e.e_stop=Te,e.addClass=D,e.contains=O,e.rmClass=N,e.keyNames=Ho}(Sa),Sa.version="5.54.0",Sa},"object"===a(t)&&void 0!==e?e.exports=o():void 0===(i="function"==typeof(r=o)?r.call(t,n,t,e):r)||(e.exports=i)},5:function(e,t,n){(function(e){var r,i,o,a
function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
 * @toast-ui/editor
 * @version 2.1.2 | Wed May 13 2020
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */window,a=function(e){return function(e){var t={}
function n(r){if(t[r])return t[r].exports
var i=t[r]={i:r,l:!1,exports:{}}
return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e
if(4&t&&"object"===s(e)&&e&&e.__esModule)return e
var r=Object.create(null)
if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i))
return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=65)}([function(e,t,n){"use strict"
var r=n(2),i=n.n(r),o=n(8),a=n.n(o),s=n(9),l=n.n(s),c=n(3),u=n.n(c),d=n(5),h=n.n(d),f=n(6),p=n.n(f),g=n(16),m=n.n(g),v=n(12),y=n.n(v),b=/\u200B/g,C=window.getComputedStyle,w=function(e){return e&&e.nodeType===Node.TEXT_NODE},_=function(e){return e&&e.nodeType===Node.ELEMENT_NODE},T=function(e){return _(e)?e.tagName:"TEXT"},E=function(e){var t
return _(e)?t=e.textContent.replace(b,"").length:w(e)&&(t=e.nodeValue.replace(b,"").length),t},x=function(e){var t,n,r,i=e.parentNode.childNodes
for(t=0,n=i.length;t<n;t+=1)if(i[t]===e){r=t
break}return r},S=function(e,t){var n
return w(e)?n=e:e.childNodes.length&&t>=0&&(n=e.childNodes[t]),n},N=function(e,t,n){for(var r,i,o=e+"Sibling";t&&!t[o]&&(r=T(t.parentNode))!==n&&"BODY"!==r;)t=t.parentNode
return t[o]&&(i=t[o]),i},k=function(e,t,n){for(var r;e.parentNode&&!t(e.parentNode)&&(e=e.parentNode,!n||!n(e.parentNode)););return t(e.parentNode)&&(r=e),r},L=function(e,t){return l()(t)?k(e,(function(e){return t===T(e)})):k(e,(function(e){return t===e}))},M=function(e,t,n){var r,i=e+"Sibling"
return(t=L(t,n))&&t[i]&&(r=t[i]),r},A=function(e){var t={}
t.tagName=e.nodeName,e.id&&(t.id=e.id)
var n=e.className.trim()
return n&&(t.className=n),t},O=function(e,t,n){var r=t
if(r&&e===r.parentNode)for(;r!==n;){var i=r.nextSibling
e.removeChild(r),r=i}},B=function(e){return!!e&&("UL"===e.nodeName||"OL"===e.nodeName)},D=function(e,t){e.hasChildNodes()&&(i()(e.childNodes).forEach((function(){t.appendChild(e.firstChild)})),t.normalize()),e.parentNode&&e.parentNode.removeChild(e)},I=function(e,t){if("SPAN"!==e.nodeName)for(var n=e.parentNode,r=e;r.childNodes&&1===r.childNodes.length&&!w(r.firstChild)&&"SPAN"!==(r=r.firstChild).nodeName;)if(r.nodeName===t){var i=document.createElement(t)
return D(r,r.parentNode),n.replaceChild(i,e),i.appendChild(e),i}return e},R=function(e,t,n){var r=I(e,n)
if(r.nodeName===n)for(var i=I(t,n),o=r,a=r.nextSibling;a;){var s=a.nextSibling
if((a=I(a,n)).nodeName===n?o?D(a,o):o=a:o=null,a===i)break
a=s}}
function P(e,t){var n=i()(e.querySelectorAll(t))
return n.length?n:[]}function H(e,t){var n
for(n=l()(t)?function(e){return y()(e,t)}:function(e){return e===t};e&&e!==document;){if(_(e)&&n(e))return e
e=e.parentNode}return null}function F(e,t){for(var n=[];e&&e!==document;)(e=H(e.parentNode,t))&&n.push(e)
return n}function U(e,t){var n
return n=e.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.childNodes:e.children,i()(n).filter((function(e){return y()(e,t)}))}function W(e){e.parentNode&&e.parentNode.removeChild(e)}t.a={getNodeName:T,isTextNode:w,isElemNode:_,isBlockNode:function(e){return/^(ADDRESS|ARTICLE|ASIDE|BLOCKQUOTE|DETAILS|DIALOG|DD|DIV|DL|DT|FIELDSET|FIGCAPTION|FIGURE|FOOTER|FORM|H[\d]|HEADER|HGROUP|HR|LI|MAIN|NAV|OL|P|PRE|SECTION|UL)$/gi.test(this.getNodeName(e))},getTextLength:E,getOffsetLength:function(e){var t
return _(e)?t=e.childNodes.length:w(e)&&(t=e.nodeValue.replace(b,"").length),t},getPrevOffsetNodeUntil:function(e,t,n){return t>0?S(e,t-1):N("previous",e,n)},getNodeOffsetOfParent:x,getChildNodeByOffset:S,getNodeWithDirectionUntil:N,containsNode:function(e,t){for(var n=document.createTreeWalker(e,4,null,!1),r=e===t;!r&&n.nextNode();)r=n.currentNode===t
return r},getTopPrevNodeUnder:function(e,t){return M("previous",e,t)},getTopNextNodeUnder:function(e,t){return M("next",e,t)},getParentUntilBy:k,getParentUntil:L,getTopBlockNode:function(e){return L(e,"BODY")},getPrevTextNode:function(e){for(e=e.previousSibling||e.parentNode;!w(e)&&"BODY"!==T(e);)if(e.previousSibling)for(e=e.previousSibling;e.lastChild;)e=e.lastChild
else e=e.parentNode
return"BODY"===T(e)&&(e=null),e},findOffsetNode:function(e,t,n){var r,i=[],o="",s=0
if(!t.length)return i
for(var l=t.shift(),c=document.createTreeWalker(e,4,null,!1);c.nextNode();){for(o=c.currentNode.nodeValue||"",n&&(o=n(o)),r=s+o.length;r>=l;){if(i.push({container:c.currentNode,offsetInContainer:l-s,offset:l}),!t.length)return i
l=t.shift()}s=r}do{i.push({container:c.currentNode,offsetInContainer:o.length,offset:l}),l=t.shift()}while(!a()(l))
return i},getPath:function(e,t){for(var n=[];e&&e!==t;)_(e)&&n.unshift(A(e)),e=e.parentNode
return n},getNodeInfo:A,getTableCellByDirection:function(e,t){var n=null
return a()(t)||"next"!==t&&"previous"!==t||(n="next"===t?e.nextElementSibling:e.previousElementSibling),n},getSiblingRowCellByDirection:function(e,t,n){var r,i,o,s,l,c=null
return a()(t)||"next"!==t&&"previous"!==t||e&&("next"===t?(i=e.parentNode&&e.parentNode.nextSibling,l=(s=(o=F(e,"thead"))[0]&&o[0].nextSibling)&&"TBODY"===T(s),r=0):(i=e.parentNode&&e.parentNode.previousSibling,l=(s=(o=F(e,"tbody"))[0]&&o[0].previousSibling)&&"THEAD"===T(s),r=e.parentNode.childNodes.length-1),!a()(n)&&n||(r=x(e)),i?c=U(i,"td,th")[r]:o[0]&&l&&(c=P(s,"td,th")[r])),c},isMDSupportInlineNode:function(e){return/^(A|B|BR|CODE|DEL|EM|I|IMG|S|SPAN|STRONG)$/gi.test(e.nodeName)},isStyledNode:function(e){return/^(A|ABBR|ACRONYM|B|BDI|BDO|BIG|CITE|CODE|DEL|DFN|EM|I|INS|KBD|MARK|Q|S|SAMP|SMALL|SPAN|STRONG|SUB|SUP|U|VAR)$/gi.test(e.nodeName)},removeChildFromStartToEndNode:O,removeNodesByDirection:function(e,t,n){for(var r=t;r!==e;){var i=r.parentNode,o=r,a=o.nextSibling,s=o.previousSibling
!n&&a?O(i,a,null):n&&s&&O(i,i.childNodes[0],r),r=i}},getLeafNode:function(e){for(var t=e;t.childNodes&&t.childNodes.length;){var n=t.firstChild
t=w(n)&&!E(n)&&n.nextSibling||n}return t},isInsideTaskBox:function(e,t,n){var r=parseInt(e.left,10),i=parseInt(e.top,10),o=parseInt(e.width,10),a=parseInt(e.height,10)
return t>=r&&t<=r+o&&n>=i&&n<=i+a},isListNode:B,isFirstListItem:function(e){var t=e.nodeName,n=e.parentNode
return"LI"===t&&e===n.firstChild},isFirstLevelListItem:function(e){var t=e.nodeName,n=e.parentNode.parentNode
return"LI"===t&&!B(n)},mergeNode:D,createHorizontalRule:function(){var e=document.createElement("div"),t=document.createElement("hr")
return e.setAttribute("contenteditable",!1),t.setAttribute("contenteditable",!1),e.appendChild(t),e},createEmptyLine:function(){var e=document.createElement("div")
return e.appendChild(document.createElement("br")),e},changeTagOrder:I,mergeSameNodes:R,optimizeRange:function(e,t){var n=e.collapsed,r=e.commonAncestorContainer,i=e.startContainer,o=e.endContainer
if(!n){var a=null
if(i!==o){var s=L(i,r),l=L(o,r)
s&&l&&R(s,l,t),a=r}else w(i)&&(a=i.parentNode)
if(a&&a.nodeName===t){var c,u=a.previousSibling
u&&(c=I(u)).nodeName===t&&D(a,c)
var d=a.nextSibling
d&&(c=I(d)).nodeName===t&&D(c,a)}}},getAllTextNode:function(e){for(var t=document.createTreeWalker(e,4,null,!1),n=[];t.nextNode();){var r=t.currentNode
w(r)&&n.push(r)}return n},isCellNode:function(e){return!!e&&("TD"===e.nodeName||"TH"===e.nodeName)},getLastNodeBy:function(e,t){for(var n=e&&e.lastChild;n&&t(n);)n=n.lastChild
return n},getParentNodeBy:function(e,t){for(;e&&t(e.parentNode,e);)e=e.parentNode
return e},getSiblingNodeBy:function(e,t,n){for(var r=t+"Sibling";e&&n(e[r],e);)e=e[r]
return e},createElementWith:function(e,t){var n=document.createElement("div")
l()(e)?n.innerHTML=e:n.appendChild(e)
var r=n.firstChild
return t&&t.appendChild(r),r},findAll:P,isContain:function(e,t){return e!==t&&e.contains(t)},closest:H,parent:function(e,t){var n=e.parentNode
return t?n&&y()(n,t)?n:null:n},parents:F,parentsUntil:function(e,t){for(var n=[];e.parentNode&&!y()(e.parentNode,t);)(e=e.parentNode)&&n.push(e)
return n},children:U,append:function(e,t){if(l()(t))e.insertAdjacentHTML("beforeEnd",t)
else for(var n=0,r=(t=t.length?i()(t):[t]).length;n<r;n+=1)e.appendChild(t[n])},prepend:function(e,t){if(l()(t))e.insertAdjacentHTML("afterBegin",t)
else for(var n=(t=t.length?i()(t):[t]).length-1;n>=0;n-=1)e.insertBefore(t[n],e.firstChild)},insertBefore:function(e,t){var n=t.parentNode
n&&n.insertBefore(e,t)},insertAfter:function(e,t){var n=t.parentNode
n&&n.insertBefore(e,t.nextSibling)},replaceWith:function(e,t){(e=e.length?i()(e):[e]).forEach((function(e){e.insertAdjacentHTML("afterEnd",t),e.parentNode.removeChild(e)}))},wrap:function(e,t){(e=e.length?i()(e):[e]).forEach((function(e){var n=document.createElement(t)
e.parentNode.insertBefore(n,e),n.appendChild(e)}))},wrapInner:function(e,t){(e=e.length?i()(e):[e]).forEach((function(e){var n=document.createElement(t)
for(e.appendChild(n);e.firstChild!==n;)n.appendChild(e.firstChild)}))},unwrap:function(e){for(var t=[];e.firstChild;)t.push(e.firstChild),e.parentNode.insertBefore(e.firstChild,e)
return W(e),t},remove:W,empty:function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},setOffset:function(e,t){var n=e.parentNode.getBoundingClientRect(),r=n.top,i=n.left
u()(e,{top:t.top-r-document.body.scrollTop+"px"}),u()(e,{left:t.left-i-document.body.scrollLeft+"px"})},getOffset:function(e,t){void 0===t&&(t="document")
var n=0,r=0
do{n+=e.offsetTop||0,r+=e.offsetLeft||0,e=e.offsetParent}while(e&&!y()(e,t))
return{top:n,left:r}},getOuterWidth:function(e,t){var n=e.offsetWidth
if(t){var r=C(e),i=r.marginLeft,o=r.marginRight
n+=parseInt(i,10)+parseInt(o,10)}return n},getOuterHeight:function(e,t){var n=e.offsetHeight
if(t){var r=C(e),i=r.marginTop,o=r.marginBottom
n+=parseInt(i,10)+parseInt(o,10)}return n},toggleClass:function(e,t,n){a()(n)&&(n=!m()(e,t)),(n?h.a:p.a)(e,t)},finalizeHtml:function(e,t){var n
if(t)n=e.innerHTML
else{for(var r=document.createDocumentFragment(),o=i()(e.childNodes),a=o.length,s=0;s<a;s+=1)r.appendChild(o[s])
n=r}return n}}},function(e,t,n){"use strict"
var r=n(7),i=n.n(r),o=function(){function e(e,t,n){this.name=e,this.type=t,n&&this.setKeyMap(n)}var t=e.prototype
return t.getName=function(){return this.name},t.getType=function(){return this.type},t.isMDType=function(){return this.type===e.TYPE.MD},t.isWWType=function(){return this.type===e.TYPE.WW},t.isGlobalType=function(){return this.type===e.TYPE.GB},t.setKeyMap=function(e,t){this.keyMap=[e,t]},e}()
o.factory=function(e,t){var n
"markdown"===e?n=o.TYPE.MD:"wysiwyg"===e?n=o.TYPE.WW:"global"===e&&(n=o.TYPE.GB)
var r=new o(t.name,n)
return i()(r,t),r},o.TYPE={MD:0,WW:1,GB:2}
var a=o,s=n(11),l=n(23),c=s.b?1:0,u=function(){function e(e,t){void 0===t&&(t={}),this._command=new l.a,this._mdCommand=new l.a,this._wwCommand=new l.a,this._options=i()({useCommandShortcut:!0},t),this.base=e,this.keyMapCommand={},this._initEvent()}var t=e.prototype
return t._addCommandBefore=function(e){var t={command:e}
return this.base.eventManager.emit("addCommandBefore",t),t.command||e},t.addCommand=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i]
r.length&&(t=e.command.apply(e,[t].concat(r)))
var o,a=(t=this._addCommandBefore(t)).getName()
return t.isMDType()?o=this._mdCommand:t.isWWType()?o=this._wwCommand:t.isGlobalType()&&(o=this._command),o.set(a,t),t.keyMap&&(this.keyMapCommand[t.keyMap[c]]=a),t},t._initEvent=function(){var e=this
this.base.eventManager.listen("command",(function(){e.exec.apply(e,arguments)})),this.base.eventManager.listen("keyMap",(function(t){if(e._options.useCommandShortcut){var n=e.keyMapCommand[t.keyMap]
n&&(t.data.preventDefault(),e.exec(n))}}))},t.exec=function(e){var t,n,r=this.base
if((t=this._command.get(e))||(this.base.isMarkdownMode()?(t=this._mdCommand.get(e),r=this.base.mdEditor):(t=this._wwCommand.get(e),r=this.base.wwEditor)),t){for(var i,o=arguments.length,a=new Array(o>1?o-1:0),s=1;s<o;s++)a[s-1]=arguments[s]
a.unshift(r),n=(i=t).exec.apply(i,a)}return n},e}()
u.command=function(e,t){var n=a.factory(e,t.name,t.keyMap)
return i()(n,t),n},t.a=u},function(e,t,n){"use strict"
var r=n(20)
e.exports=function(e){var t
try{t=Array.prototype.slice.call(e)}catch(n){t=[],r(e,(function(e){t.push(e)}))}return t}},function(e,t,n){"use strict"
var r=n(9),i=n(26)
e.exports=function(e,t,n){var o=e.style
r(t)?o[t]=n:i(t,(function(e,t){o[t]=e}))}},function(e,t,n){"use strict"
function r(e){return e.sourcepos[0][0]}function i(e){return e.sourcepos[1][0]}function o(e){return e.sourcepos[0][1]}function a(e){return e.sourcepos[1][1]}function s(e){var t=e.type
return"codeBlock"===t||"paragraph"===t}function l(e){var t=e.type
return"htmlBlock"===t||"htmlInline"===t}function c(e){var t=e.type
return"strike"===t||"strong"===t||"emph"===t}function u(e){return"item"===e.type}function d(e){switch(e.type){case"code":case"text":case"emph":case"strong":case"strike":case"link":case"image":case"htmlInline":case"linebreak":case"softbreak":return!0
default:return!1}}function h(e,t,n){for(void 0===n&&(n=!0),e=n?e:e.parent;e&&"document"!==e.type;){if(t(e))return e
e=e.parent}return null}function f(e,t,n){for(void 0===n&&(n=!0),e=n?e:e.parent;e&&"document"!==e.type;)t(e),e=e.parent}function p(e,t){return{line:e.line,ch:e.ch+t}}function g(e,t){return{line:e.line,ch:t}}n.d(t,"f",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"j",(function(){return s})),n.d(t,"g",(function(){return l})),n.d(t,"k",(function(){return c})),n.d(t,"i",(function(){return u})),n.d(t,"h",(function(){return d})),n.d(t,"b",(function(){return h})),n.d(t,"m",(function(){return f})),n.d(t,"a",(function(){return p})),n.d(t,"l",(function(){return g})),n(11)},function(e,t,n){"use strict"
var r=n(26),i=n(14),o=n(32),a=n(39)
e.exports=function(e){var t,n=Array.prototype.slice.call(arguments,1),s=e.classList,l=[]
s?r(n,(function(t){e.classList.add(t)})):((t=o(e))&&(n=[].concat(t.split(/\s+/),n)),r(n,(function(e){i(e,l)<0&&l.push(e)})),a(e,l))}},function(e,t,n){"use strict"
var r=n(20),i=n(14),o=n(32),a=n(39)
e.exports=function(e){var t,n,s=Array.prototype.slice.call(arguments,1),l=e.classList
l?r(s,(function(e){l.remove(e)})):(t=o(e).split(/\s+/),n=[],r(t,(function(e){i(e,s)<0&&n.push(e)})),a(e,n))}},function(e,t,n){"use strict"
e.exports=function(e,t){var n,r,i,o,a=Object.prototype.hasOwnProperty
for(i=1,o=arguments.length;i<o;i+=1)for(r in n=arguments[i])a.call(n,r)&&(e[r]=n[r])
return e}},function(e,t,n){"use strict"
e.exports=function(e){return void 0===e}},function(e,t,n){"use strict"
e.exports=function(e){return"string"==typeof e||e instanceof String}},function(e,t,n){"use strict"
e.exports=function(e,t,n){var r
for(r in n=n||null,e)if(e.hasOwnProperty(r)&&!1===t.call(n,e[r],r,e))break}},function(e,t,n){"use strict"
n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return d}))
var r=n(8),i=n.n(r),o=n(43),a=n.n(o),s=/Mac/.test(navigator.platform)
function l(){a()("editor","UA-129966929-1")}function c(e,t){return-1!==e.indexOf(t)}var u=["rel","target","contenteditable","hreflang","type"]
function d(e){if(!e)return null
var t={}
return u.forEach((function(n){i()(e[n])||(t[n]=e[n])})),t}},function(e,t,n){"use strict"
var r=n(14),i=n(2),o=Element.prototype,a=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(e){var t=this.document||this.ownerDocument
return r(this,i(t.querySelectorAll(e)))>-1}
e.exports=function(e,t){return a.call(e,t)}},function(e,t,n){"use strict"
var r,i,o,a,s,l,c,u,d,h,f={chrome:!1,firefox:!1,safari:!1,msie:!1,edge:!1,others:!1,version:0}
"undefined"!=typeof window&&window.navigator&&(a=(o=window.navigator).appName.replace(/\s/g,"_"),s=o.userAgent,l=/MSIE\s([0-9]+[.0-9]*)/,c=/Trident.*rv:11\./,u=/Edge\/(\d+)\./,d={firefox:/Firefox\/(\d+)\./,chrome:/Chrome\/(\d+)\./,safari:/Version\/([\d.]+).*Safari\/(\d+)/},(h={Microsoft_Internet_Explorer:function(){var e=s.match(l)
e?(f.msie=!0,f.version=parseFloat(e[1])):f.others=!0},Netscape:function(){var e=!1
if(c.exec(s))f.msie=!0,f.version=11,e=!0
else if(u.exec(s))f.edge=!0,f.version=s.match(u)[1],e=!0
else for(r in d)if(d.hasOwnProperty(r)&&(i=s.match(d[r]))&&i.length>1){f[r]=e=!0,f.version=parseFloat(i[1]||0)
break}e||(f.others=!0)}})[a]&&h[a]()),e.exports=f},function(e,t,n){"use strict"
var r=n(21)
e.exports=function(e,t,n){var i,o
if(n=n||0,!r(t))return-1
if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,n)
for(o=t.length,i=n;n>=0&&i<o;i+=1)if(t[i]===e)return i
return-1}},function(t,n){t.exports=e},function(e,t,n){"use strict"
var r=n(14),i=n(32)
e.exports=function(e,t){var n
return e.classList?e.classList.contains(t):(n=i(e).split(/\s+/),r(t,n)>-1)}},function(e,t,n){"use strict"
n.d(t,"h",(function(){return l})),n.d(t,"b",(function(){return c})),n.d(t,"f",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return h})),n.d(t,"g",(function(){return f})),n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return m}))
var r=n(11),i=n(4),o=["list","blockQuote"],a=["UL","OL","BLOCKQUOTE"],s=["TR","TH","TBODY","TD"]
function l(e){return!Object(r.a)(o,e.type)}function c(e,t,n,r){var i=(e-t)/n
return i<1?i*r:r}function u(e){for(var t=document.querySelector('[data-nodeid="'+e.id+'"]');!t||Object(r.a)(s,e.type)||Object(i.k)(e);)e=e.parent,t=document.querySelector('[data-nodeid="'+e.id+'"]')
return function(e){for(var t=e.mdNode,n=e.node;Object(r.a)(o,t.type)&&t.firstChild;)t=t.firstChild,n=n.firstElementChild
return{mdNode:t,node:n}}(function(e){for(var t=e;e&&"document"!==e;){if("item"===e.type){t=e
break}e=e.parent}return{mdNode:t,node:document.querySelector('[data-nodeid="'+t.id+'"]')}}(e))}function d(e,t){var n=Object(i.f)(e),r=Object(i.d)(e),o=t.lineInfo(n-1).handle.height,a=t.heightAtLine(r,"local")-t.heightAtLine(n-1,"local")
return a<=0?o:a+h(t,Object(i.d)(e))}function h(e,t,n){void 0===n&&(n=Number.MAX_VALUE)
var r=e.lineInfo(t)
if(!r)return 0
for(var i=r.handle,o=0;t<=n&&!i.text.trim();)o+=i.height,t+=1,i=e.lineInfo(t).handle
return o}function f(e,t){for(var n=0;e&&e!==t&&(Object(r.a)(a,e.tagName)||(n+=e.offsetTop),e.offsetParent!==t.offsetParent);)e=e.parentElement
return n}function p(e,t){for(var n=t,r=null;n;){var i=n.firstElementChild
if(!i)break
r=n,n=g(i,e,f(n,t))}var o=n||r
return o===t?null:o}function g(e,t,n){return e&&t>n+e.offsetTop?g(e.nextElementSibling,t,n)||e:null}function m(e){var t=e.latestScrollTop,n=e.scrollTop,r=e.targetScrollTop,i=e.sourceScrollTop
return null===t?r:t<n?Math.max(r,i):Math.min(r,i)}},function(e,t,n){"use strict"
var r=n(9),i=n(26),o=n(40)
function a(e,t,n,r){function a(t){n.call(r||e,t||window.event)}"addEventListener"in e?e.addEventListener(t,a):"attachEvent"in e&&e.attachEvent("on"+t,a),function(e,t,n,r){var a=o(e,t),s=!1
i(a,(function(e){return e.handler!==n||(s=!0,!1)})),s||a.push({handler:n,wrappedHandler:r})}(e,t,n,a)}e.exports=function(e,t,n,o){r(t)?i(t.split(/\s+/g),(function(t){a(e,t,n,o)})):i(t,(function(t,r){a(e,r,t,n)}))}},function(e,t,n){"use strict"
var r=n(9),i=n(26),o=n(40)
function a(e,t,n){var r,a=o(e,t)
n?(i(a,(function(i,o){return n!==i.handler||(s(e,t,i.wrappedHandler),r=o,!1)})),a.splice(r,1)):(i(a,(function(n){s(e,t,n.wrappedHandler)})),a.splice(0,a.length))}function s(e,t,n){"removeEventListener"in e?e.removeEventListener(t,n):"detachEvent"in e&&e.detachEvent("on"+t,n)}e.exports=function(e,t,n){r(t)?i(t.split(/\s+/g),(function(t){a(e,t,n)})):i(t,(function(t,n){a(e,n,t)}))}},function(e,t,n){"use strict"
e.exports=function(e,t,n){var r=0,i=e.length
for(n=n||null;r<i&&!1!==t.call(n,e[r],r,e);r+=1);}},function(e,t,n){"use strict"
e.exports=function(e){return e instanceof Array}},function(e,t){!function(e,t){for(var n in t)e[n]=t[n]}(t,function(e){var t={}
function n(r){if(t[r])return t[r].exports
var i=t[r]={i:r,l:!1,exports:{}}
return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e
if(4&t&&"object"==s(e)&&e&&e.__esModule)return e
var r=Object.create(null)
if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i))
return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=10)}([function(e,t,n){"use strict"
n.r(t),n.d(t,"__extends",(function(){return i})),n.d(t,"__assign",(function(){return o})),n.d(t,"__rest",(function(){return a})),n.d(t,"__decorate",(function(){return l})),n.d(t,"__param",(function(){return c})),n.d(t,"__metadata",(function(){return u})),n.d(t,"__awaiter",(function(){return d})),n.d(t,"__generator",(function(){return h})),n.d(t,"__exportStar",(function(){return f})),n.d(t,"__values",(function(){return p})),n.d(t,"__read",(function(){return g})),n.d(t,"__spread",(function(){return m})),n.d(t,"__spreadArrays",(function(){return v})),n.d(t,"__await",(function(){return y})),n.d(t,"__asyncGenerator",(function(){return b})),n.d(t,"__asyncDelegator",(function(){return C})),n.d(t,"__asyncValues",(function(){return w})),n.d(t,"__makeTemplateObject",(function(){return _})),n.d(t,"__importStar",(function(){return T})),n.d(t,"__importDefault",(function(){return E}))

;/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)}
function i(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e}).apply(this,arguments)}
function a(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function l(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r
if("object"==("undefined"==typeof Reflect?"undefined":s(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r)
else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a)
return o>3&&a&&Object.defineProperty(t,n,a),a}function c(e,t){return function(n,r){t(n,r,e)}}function u(e,t){if("object"==("undefined"==typeof Reflect?"undefined":s(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function d(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){e.done?i(e.value):new n((function(t){t(e.value)})).then(a,s)}l((r=r.apply(e,t||[])).next())}))}function h(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.")
for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return a.label++,{value:o[1],done:!1}
case 5:a.label++,r=o[1],o=[0]
continue
case 7:o=a.ops.pop(),a.trys.pop()
continue
default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1]
break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o
break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o)
break}i[2]&&a.ops.pop(),a.trys.pop()
continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function f(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}function p(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0
return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}}function g(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var r,i,o=n.call(e),a=[]
try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function m(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]))
return e}function v(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length
var r=Array(e),i=0
for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a]
return r}function y(e){return this instanceof y?(this.v=e,this):new y(e)}function b(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var r,i=n.apply(e,t||[]),o=[]
return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r
function a(e){i[e]&&(r[e]=function(t){return new Promise((function(n,r){o.push([e,t,n,r])>1||s(e,t)}))})}function s(e,t){try{(n=i[e](t)).value instanceof y?Promise.resolve(n.value.v).then(l,c):u(o[0][2],n)}catch(e){u(o[0][3],e)}var n}function l(e){s("next",e)}function c(e){s("throw",e)}function u(e,t){e(t),o.shift(),o.length&&s(o[0][0],o[0][1])}}function C(e){var t,n
return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t
function r(r,i){t[r]=e[r]?function(t){return(n=!n)?{value:y(e[r](t)),done:"return"===r}:i?i(t):t}:i}}function w(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var t,n=e[Symbol.asyncIterator]
return n?n.call(e):(e=p(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t)
function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,i){!function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)}(r,i,(t=e[n](t)).done,t.value)}))}}}function _(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function T(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t.default=e,t}function E(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(0),i=r.__importDefault(n(17))
function o(e){switch(e.type){case"document":case"blockQuote":case"list":case"item":case"paragraph":case"heading":case"emph":case"strong":case"strike":case"link":case"image":case"table":case"tableHead":case"tableBody":case"tableRow":case"tableCell":case"tableDelimRow":return!0
default:return!1}}t.isContainer=o
var a=1,s={}
t.getNodeById=function(e){return s[e]},t.removeNodeById=function(e){delete s[e]},t.removeAllNode=function(){s={}}
var l=function(){function e(e,t){this.parent=null,this.prev=null,this.next=null,this.firstChild=null,this.lastChild=null,this.literal=null,this.id="document"===e?-1:a++,this.type=e,this.sourcepos=t,s[this.id]=this}return e.prototype.isContainer=function(){return o(this)},e.prototype.unlink=function(){this.prev?this.prev.next=this.next:this.parent&&(this.parent.firstChild=this.next),this.next?this.next.prev=this.prev:this.parent&&(this.parent.lastChild=this.prev),this.parent=null,this.next=null,this.prev=null},e.prototype.replaceWith=function(e){this.insertBefore(e),this.unlink()},e.prototype.insertAfter=function(e){e.unlink(),e.next=this.next,e.next&&(e.next.prev=e),e.prev=this,this.next=e,this.parent&&(e.parent=this.parent,e.next||(e.parent.lastChild=e))},e.prototype.insertBefore=function(e){e.unlink(),e.prev=this.prev,e.prev&&(e.prev.next=e),e.next=this,this.prev=e,e.parent=this.parent,e.prev||(e.parent.firstChild=e)},e.prototype.appendChild=function(e){e.unlink(),e.parent=this,this.lastChild?(this.lastChild.next=e,e.prev=this.lastChild,this.lastChild=e):(this.firstChild=e,this.lastChild=e)},e.prototype.prependChild=function(e){e.unlink(),e.parent=this,this.firstChild?(this.firstChild.prev=e,e.next=this.firstChild,this.firstChild=e):(this.firstChild=e,this.lastChild=e)},e.prototype.walker=function(){return new i.default(this)},e}()
t.Node=l
var c=function(e){function t(t,n){var r=e.call(this,t,n)||this
return r.open=!0,r.lineOffsets=null,r.stringContent=null,r.lastLineBlank=!1,r.lastLineChecked=!1,r.type=t,r}return r.__extends(t,e),t}(l)
t.BlockNode=c
var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.listData=null,t}return r.__extends(t,e),t}(c)
t.ListNode=u
var d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.level=0,t.headingType="atx",t}return r.__extends(t,e),t}(c)
t.HeadingNode=d
var h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.destination=null,t.title=null,t.extendedAutolink=!1,t}return r.__extends(t,e),t}(l)
t.LinkNode=h
var f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.isFenced=!1,t.fenceChar=null,t.fenceLength=0,t.fenceOffset=-1,t.info=null,t}return r.__extends(t,e),t}(c)
t.CodeBlockNode=f
var p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.htmlBlockType=-1,t}return r.__extends(t,e),t}(c)
t.HtmlBlockNode=p
var g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.tickCount=0,t}return r.__extends(t,e),t}(l)
t.CodeNode=g
var m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.columns=[],t}return r.__extends(t,e),t}(c)
t.TableNode=m
var v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.columnIdx=0,t.paddingLeft=0,t.paddingRight=0,t.ignored=!1,t}return r.__extends(t,e),t}(c)
t.TableCellNode=v
var y=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.title="",t.dest="",t.label="",t}return r.__extends(t,e),t}(c)
function b(e,t){switch(e){case"heading":return new d(e,t)
case"list":case"item":return new u(e,t)
case"link":case"image":return new h(e,t)
case"codeBlock":return new f(e,t)
case"htmlBlock":return new p(e,t)
case"table":return new m(e,t)
case"tableCell":return new v(e,t)
case"document":case"paragraph":case"blockQuote":case"thematicBreak":case"tableRow":case"tableBody":case"tableHead":return new c(e,t)
case"code":return new g(e,t)
case"refDef":return new y(e,t)
default:return new l(e,t)}}t.RefDefNode=y,t.createNode=b,t.isCodeBlock=function(e){return"codeBlock"===e.type},t.isHtmlBlock=function(e){return"htmlBlock"===e.type},t.isHeading=function(e){return"heading"===e.type},t.isList=function(e){return"list"===e.type},t.isTable=function(e){return"table"===e.type},t.isRefDef=function(e){return"refDef"===e.type},t.text=function(e,t){var n=b("text",t)
return n.literal=e,n}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(0).__importDefault(n(11)),i=n(7)
t.ENTITY="&(?:#x[a-f0-9]{1,6}|#[0-9]{1,7}|[a-z][a-z0-9]{1,31});"
var o=/[\\&]/
t.ESCAPABLE="[!\"#$%&'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]"
var a=new RegExp("\\\\"+t.ESCAPABLE+"|"+t.ENTITY,"gi"),s=new RegExp('[&<>"]',"g"),l=function(e){return 92===e.charCodeAt(0)?e.charAt(1):i.decodeHTML(e)}
function c(e){switch(e){case"&":return"&amp;"
case"<":return"&lt;"
case">":return"&gt;"
case'"':return"&quot;"
default:return e}}t.unescapeString=function(e){return o.test(e)?e.replace(a,l):e},t.normalizeURI=function(e){try{return r.default(e)}catch(t){return e}},t.escapeXml=function(e){return s.test(e)?e.replace(s,c):e},t.repeat=function(e,t){for(var n=[],r=0;r<t;r++)n.push(e)
return n.join("")},t.last=function(e){return e.length?e[e.length-1]:null},t.isEmpty=function(e){return!e||!/[^ \t]+/.test(e)}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(0)
t.last=function(e){return e[e.length-1]},t.normalizeReference=function(e){return e.slice(1,e.length-1).trim().replace(/[ \t\r\n]+/," ").toLowerCase().toUpperCase()},t.iterateObject=function(e,t){Object.keys(e).forEach((function(n){t(n,e[n])}))},t.omit=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
var i=r.__assign({},e)
return t.forEach((function(e){delete i[e]})),i},t.isEmptyObj=function(e){return!Object.keys(e).length},t.clearObj=function(e){Object.keys(e).forEach((function(t){delete e[t]}))}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.CODE_INDENT=4,t.C_TAB=9,t.C_NEWLINE=10,t.C_GREATERTHAN=62,t.C_LESSTHAN=60,t.C_SPACE=32,t.C_OPEN_BRACKET=91,t.reNonSpace=/[^ \t\f\v\r\n]/,t.reClosingCodeFence=/^(?:`{3,}|~{3,})(?= *$)/,t.endsWithBlankLine=function(e){for(var t=e;t;){if(t.lastLineBlank)return!0
var n=t.type
if(t.lastLineChecked||"list"!==n&&"item"!==n){t.lastLineChecked=!0
break}t.lastLineChecked=!0,t=t.lastChild}return!1},t.peek=function(e,t){return t<e.length?e.charCodeAt(t):-1},t.isBlank=function(e){return!t.reNonSpace.test(e)},t.isSpaceOrTab=function(e){return e===t.C_SPACE||e===t.C_TAB}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(0),i=n(6),o=n(1),a=n(25),s=n(9),l=n(3),c=n(4),u=/\r\n|\n|\r/
function d(e){return{id:e.id,title:e.title,sourcepos:e.sourcepos,unlinked:!1,destination:e.dest}}t.createRefDefState=d
var h=function(){function e(e,t){var n
this.refMap={},this.refLinkCandidateMap={},this.refDefCandidateMap={},this.referenceDefinition=!!(null===(n=t)||void 0===n?void 0:n.referenceDefinition),this.parser=new i.Parser(t),this.parser.setRefMaps(this.refMap,this.refLinkCandidateMap,this.refDefCandidateMap),this.eventHandlerMap={change:[]},e=e||"",this.lineTexts=e.split(u),this.root=this.parser.parse(e)}return e.prototype.updateLineTexts=function(e,t,n){var i,o=e[0],a=e[1],s=t[0],l=t[1],c=n.split(u),d=c.length,h=this.lineTexts[o-1],f=this.lineTexts[s-1]
c[0]=h.slice(0,a-1)+c[0],c[d-1]=c[d-1]+f.slice(l-1)
var p=s-o+1
return(i=this.lineTexts).splice.apply(i,r.__spreadArrays([o-1,p],c)),d-p},e.prototype.updateRootNodeState=function(){if(1===this.lineTexts.length&&""===this.lineTexts[0])return this.root.lastLineBlank=!0,void(this.root.sourcepos=[[1,1],[1,0]])
this.root.lastChild&&(this.root.lastLineBlank=this.root.lastChild.lastLineBlank)
for(var e=this.lineTexts,t=e.length-1;""===e[t];)t-=1
e.length-2>t&&(t+=1),this.root.sourcepos[1]=[t+1,e[t].length]},e.prototype.replaceRangeNodes=function(e,t,n){e?(a.insertNodesBefore(e,n),a.removeNextUntil(e,t),[e.id,t.id].forEach((function(e){return o.removeNodeById(e)})),e.unlink()):t?(a.insertNodesBefore(t,n),o.removeNodeById(t.id),t.unlink()):a.prependChildNodes(this.root,n)},e.prototype.getNodeRange=function(e,t){var n=a.findChildNodeAtLine(this.root,e[0]),r=a.findChildNodeAtLine(this.root,t[0])
return r&&r.next&&t[0]+1===r.next.sourcepos[0][0]&&(r=r.next),[n,r]},e.prototype.trigger=function(e,t){this.eventHandlerMap[e].forEach((function(e){e(t)}))},e.prototype.extendEndLine=function(e){for(;""===this.lineTexts[e];)e+=1
return e},e.prototype.parseRange=function(e,t,n,r){var i
e&&e.prev&&(o.isList(e.prev)&&function(e){var t=e.match(/^[ \t]+/)
if(t&&(t[0].length>=2||/\t/.test(t[0])))return!0
var n=t?e.slice(t.length):e
return s.reBulletListMarker.test(n)||s.reOrderedListMarker.test(n)}(this.lineTexts[n-1])||o.isTable(e.prev)&&(i=this.lineTexts[n-1],!c.isBlank(i)&&-1!==i.indexOf("|")))&&(n=(e=e.prev).sourcepos[0][0])
for(var l=this.lineTexts.slice(n-1,r),u=this.parser.partialParseStart(n,l),d=t?t.next:this.root.firstChild;u.lastChild&&o.isList(u.lastChild)&&d&&("list"===d.type||d.sourcepos[0][1]>=2);){var h=this.extendEndLine(d.sourcepos[1][0])
this.parser.partialParseExtends(this.lineTexts.slice(r,h)),e||(e=t),t=d,r=h,d=d.next}return this.parser.partialParseFinish(),{newNodes:a.getChildNodes(u),extStartNode:e,extEndNode:t}},e.prototype.getRemovedNodeRange=function(e,t){return!e||e&&o.isRefDef(e)||t&&o.isRefDef(t)?null:{id:[e.id,t.id],line:[e.sourcepos[0][0]-1,t.sourcepos[1][0]-1]}},e.prototype.markDeletedRefMap=function(e,t){var n=this
if(!l.isEmptyObj(this.refMap)){var r=function(e){if(o.isRefDef(e)){var t=n.refMap[e.label]
t&&e.id===t.id&&(t.unlinked=!0)}}
e&&a.invokeNextUntil(r,e.parent,t),t&&a.invokeNextUntil(r,t)}},e.prototype.replaceWithNewRefDefState=function(e){var t=this
if(!l.isEmptyObj(this.refMap)){var n=function(e){if(o.isRefDef(e)){var n=e.label,r=t.refMap[n]
r&&!r.unlinked||(t.refMap[n]=d(e))}}
e.forEach((function(e){a.invokeNextUntil(n,e)}))}},e.prototype.replaceWithRefDefCandidate=function(){var e=this
l.isEmptyObj(this.refDefCandidateMap)||l.iterateObject(this.refDefCandidateMap,(function(t,n){var r=n.label,i=n.sourcepos,o=e.refMap[r];(!o||o.unlinked||o.sourcepos[0][0]>i[0][0])&&(e.refMap[r]=d(n))}))},e.prototype.getRangeWithRefDef=function(e,t,n,r,i){if(this.referenceDefinition&&!l.isEmptyObj(this.refMap)){var s=a.findChildNodeAtLine(this.root,e-1),c=a.findChildNodeAtLine(this.root,t+1)
s&&o.isRefDef(s)&&s!==n&&s!==r&&(e=(n=s).sourcepos[0][0]),c&&o.isRefDef(c)&&c!==n&&c!==r&&(r=c,t=this.extendEndLine(r.sourcepos[1][0]+i))}return[n,r,e,t]},e.prototype.parse=function(e,t,n){void 0===n&&(n=0)
var r=this.getNodeRange(e,t),i=r[0],o=r[1],a=i?Math.min(i.sourcepos[0][0],e[0]):e[0],s=this.extendEndLine((o?Math.max(o.sourcepos[1][0],t[0]):t[0])+n),l=this.parseRange.apply(this,this.getRangeWithRefDef(a,s,i,o,n)),c=l.newNodes,u=l.extStartNode,d=l.extEndNode,h=this.getRemovedNodeRange(u,d),f=d?d.next:this.root.firstChild
return this.referenceDefinition?(this.markDeletedRefMap(u,d),this.replaceRangeNodes(u,d,c),this.replaceWithNewRefDefState(c)):this.replaceRangeNodes(u,d,c),{nodes:c,removedNodeRange:h,nextNode:f}},e.prototype.parseRefLink=function(){var e=this,t=[]
return l.isEmptyObj(this.refMap)||l.iterateObject(this.refMap,(function(n,r){r.unlinked&&delete e.refMap[n],l.iterateObject(e.refLinkCandidateMap,(function(r,i){var o=i.node
i.refLabel===n&&t.push(e.parse(o.sourcepos[0],o.sourcepos[1]))}))})),t},e.prototype.removeUnlinkedCandidate=function(){l.isEmptyObj(this.refDefCandidateMap)||[this.refLinkCandidateMap,this.refDefCandidateMap].forEach((function(e){l.iterateObject(e,(function(t){a.isUnlinked(t)&&delete e[t]}))}))},e.prototype.editMarkdown=function(e,t,n){var r=this.updateLineTexts(e,t,n),i=this.parse(e,t,r),o=l.omit(i,"nextNode")
a.updateNextLineNumbers(i.nextNode,r),this.updateRootNodeState()
var s=[o]
return this.referenceDefinition&&(this.removeUnlinkedCandidate(),this.replaceWithRefDefCandidate(),s=s.concat(this.parseRefLink())),this.trigger("change",s),s},e.prototype.getLineTexts=function(){return this.lineTexts},e.prototype.getRootNode=function(){return this.root},e.prototype.findNodeAtPosition=function(e){var t=a.findNodeAtPosition(this.root,e)
return t&&t!==this.root?t:null},e.prototype.findFirstNodeAtLine=function(e){return a.findFirstNodeAtLine(this.root,e)},e.prototype.on=function(e,t){this.eventHandlerMap[e].push(t)},e.prototype.off=function(e,t){var n=this.eventHandlerMap[e],r=n.indexOf(t)
n.splice(r,1)},e.prototype.findNodeById=function(e){return a.findNodeById(e)},e.prototype.removeAllNode=function(){o.removeAllNode()},e}()
t.ToastMark=h},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(0),i=n(2),o=n(1),a=n(18),s=n(21),l=n(4),c=n(9),u=n(3),d=[/./,/<\/(?:script|pre|style)>/i,/-->/,/\?>/,/>/,/\]\]>/],h=/^[#`~*+_=<>0-9-]/,f=/\r\n|\n|\r/
function p(){return o.createNode("document",[[1,1],[0,0]])}var g={smart:!1,tagFilter:!1,extendedAutolinks:!1,disallowedHtmlBlockTags:[],referenceDefinition:!1,disallowDeepHeading:!1},m=function(){function e(e){this.options=r.__assign(r.__assign({},g),e),this.doc=p(),this.tip=this.doc,this.oldtip=this.doc,this.lineNumber=0,this.offset=0,this.column=0,this.nextNonspace=0,this.nextNonspaceColumn=0,this.indent=0,this.currentLine="",this.indented=!1,this.blank=!1,this.partiallyConsumedTab=!1,this.allClosed=!0,this.lastMatchedContainer=this.doc,this.refMap={},this.refLinkCandidateMap={},this.refDefCandidateMap={},this.lastLineLength=0,this.inlineParser=new a.InlineParser(this.options)}return e.prototype.advanceOffset=function(e,t){void 0===t&&(t=!1)
for(var n,r,i,o=this.currentLine;e>0&&(i=o[this.offset]);)"\t"===i?(n=4-this.column%4,t?(this.partiallyConsumedTab=n>e,r=n>e?e:n,this.column+=r,this.offset+=this.partiallyConsumedTab?0:1,e-=r):(this.partiallyConsumedTab=!1,this.column+=n,this.offset+=1,e-=1)):(this.partiallyConsumedTab=!1,this.offset+=1,this.column+=1,e-=1)},e.prototype.advanceNextNonspace=function(){this.offset=this.nextNonspace,this.column=this.nextNonspaceColumn,this.partiallyConsumedTab=!1},e.prototype.findNextNonspace=function(){for(var e,t=this.currentLine,n=this.offset,r=this.column;""!==(e=t.charAt(n));)if(" "===e)n++,r++
else{if("\t"!==e)break
n++,r+=4-r%4}this.blank="\n"===e||"\r"===e||""===e,this.nextNonspace=n,this.nextNonspaceColumn=r,this.indent=this.nextNonspaceColumn-this.column,this.indented=this.indent>=l.CODE_INDENT},e.prototype.addLine=function(){if(this.partiallyConsumedTab){this.offset+=1
var e=4-this.column%4
this.tip.stringContent+=i.repeat(" ",e)}this.tip.lineOffsets?this.tip.lineOffsets.push(this.offset):this.tip.lineOffsets=[this.offset],this.tip.stringContent+=this.currentLine.slice(this.offset)+"\n"},e.prototype.addChild=function(e,t){for(;!s.blockHandlers[this.tip.type].canContain(e);)this.finalize(this.tip,this.lineNumber-1)
var n=t+1,r=o.createNode(e,[[this.lineNumber,n],[0,0]])
return r.stringContent="",this.tip.appendChild(r),this.tip=r,r},e.prototype.closeUnmatchedBlocks=function(){if(!this.allClosed){for(;this.oldtip!==this.lastMatchedContainer;){var e=this.oldtip.parent
this.finalize(this.oldtip,this.lineNumber-1),this.oldtip=e}this.allClosed=!0}},e.prototype.finalize=function(e,t){var n=e.parent
e.open=!1,e.sourcepos[1]=[t,this.lastLineLength],s.blockHandlers[e.type].finalize(this,e),this.tip=n},e.prototype.processInlines=function(e){var t,n=e.walker()
for(this.inlineParser.refMap=this.refMap,this.inlineParser.refLinkCandidateMap=this.refLinkCandidateMap,this.inlineParser.refDefCandidateMap=this.refDefCandidateMap,this.inlineParser.options=this.options;t=n.next();){var r=t.node,i=r.type
t.entering||"paragraph"!==i&&"heading"!==i&&("tableCell"!==i||r.ignored)||this.inlineParser.parse(r)}},e.prototype.incorporateLine=function(e){var t=this.doc
this.oldtip=this.tip,this.offset=0,this.column=0,this.blank=!1,this.partiallyConsumedTab=!1,this.lineNumber+=1,-1!==e.indexOf("\0")&&(e=e.replace(/\0/g,"�")),this.currentLine=e
for(var n,r=!0;(n=t.lastChild)&&n.open;){switch(t=n,this.findNextNonspace(),s.blockHandlers[t.type].continue(this,t)){case 0:break
case 1:r=!1
break
case 2:return void(this.lastLineLength=e.length)
default:throw new Error("continue returned illegal value, must be 0, 1, or 2")}if(!r){t=t.parent
break}}this.allClosed=t===this.oldtip,this.lastMatchedContainer=t
for(var i="paragraph"!==t.type&&s.blockHandlers[t.type].acceptsLines,a=c.blockStarts.length;!i;){if(this.findNextNonspace(),"table"!==t.type&&"tableBody"!==t.type&&"paragraph"!==t.type&&!this.indented&&!h.test(e.slice(this.nextNonspace))){this.advanceNextNonspace()
break}for(var l=0;l<a;){var u=c.blockStarts[l](this,t)
if(1===u){t=this.tip
break}if(2===u){t=this.tip,i=!0
break}l++}if(l===a){this.advanceNextNonspace()
break}}if(this.allClosed||this.blank||"paragraph"!==this.tip.type){this.closeUnmatchedBlocks(),this.blank&&t.lastChild&&(t.lastChild.lastLineBlank=!0)
for(var f=t.type,p=this.blank&&!("blockQuote"===f||o.isCodeBlock(t)&&t.isFenced||"item"===f&&!t.firstChild&&t.sourcepos[0][0]===this.lineNumber),g=t;g;)g.lastLineBlank=p,g=g.parent
s.blockHandlers[f].acceptsLines?(this.addLine(),o.isHtmlBlock(t)&&t.htmlBlockType>=1&&t.htmlBlockType<=5&&d[t.htmlBlockType].test(this.currentLine.slice(this.offset))&&(this.lastLineLength=e.length,this.finalize(t,this.lineNumber))):this.offset<e.length&&!this.blank&&(t=this.addChild("paragraph",this.offset),this.advanceNextNonspace(),this.addLine())}else this.addLine()
this.lastLineLength=e.length},e.prototype.parse=function(e){this.doc=p(),this.tip=this.doc,this.lineNumber=0,this.lastLineLength=0,this.offset=0,this.column=0,this.lastMatchedContainer=this.doc,this.currentLine=""
var t=e.split(f),n=t.length
this.options.referenceDefinition&&this.clearRefMaps(),e.charCodeAt(e.length-1)===a.C_NEWLINE&&(n-=1)
for(var r=0;r<n;r++)this.incorporateLine(t[r])
for(;this.tip;)this.finalize(this.tip,n)
return this.processInlines(this.doc),this.doc},e.prototype.partialParseStart=function(e,t){this.doc=p(),this.tip=this.doc,this.lineNumber=e-1,this.lastLineLength=0,this.offset=0,this.column=0,this.lastMatchedContainer=this.doc,this.currentLine=""
for(var n=t.length,r=0;r<n;r++)this.incorporateLine(t[r])
return this.doc},e.prototype.partialParseExtends=function(e){for(var t=0;t<e.length;t++)this.incorporateLine(e[t])},e.prototype.partialParseFinish=function(){for(;this.tip;)this.finalize(this.tip,this.lineNumber)
this.processInlines(this.doc)},e.prototype.setRefMaps=function(e,t,n){this.refMap=e,this.refLinkCandidateMap=t,this.refDefCandidateMap=n},e.prototype.clearRefMaps=function(){[this.refMap,this.refLinkCandidateMap,this.refDefCandidateMap].forEach((function(e){u.clearObj(e)}))},e}()
t.Parser=m},function(e,t,n){"use strict"
var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0})
var i=r(n(12)),o=r(n(13)),a=r(n(14)),s=r(n(15))
function l(e){var t=Object.keys(e).join("|"),n=u(e),r=new RegExp("&(?:"+(t+="|#[xX][\\da-fA-F]+|#\\d+")+");","g")
return function(e){return String(e).replace(r,n)}}t.decodeXML=l(a.default),t.decodeHTMLStrict=l(i.default)
var c=function(e,t){return e<t?1:-1}
function u(e){return function(t){return"#"===t.charAt(1)?"X"===t.charAt(2)||"x"===t.charAt(2)?s.default(parseInt(t.substr(3),16)):s.default(parseInt(t.substr(2),10)):e[t.slice(1,-1)]}}t.decodeHTML=function(){for(var e=Object.keys(o.default).sort(c),t=Object.keys(i.default).sort(c),n=0,r=0;n<t.length;n++)e[r]===t[n]?(t[n]+=";?",r++):t[n]+=";"
var a=new RegExp("&(?:"+t.join("|")+"|#[xX][\\da-fA-F]+;?|#\\d+;?)","g"),s=u(i.default)
function l(e){return";"!==e.substr(-1)&&(e+=";"),s(e)}return function(e){return String(e).replace(a,l)}}()},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.OPENTAG="<[A-Za-z][A-Za-z0-9-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*/?>",t.CLOSETAG="</[A-Za-z][A-Za-z0-9-]*\\s*[>]"
var r="(?:"+t.OPENTAG+"|"+t.CLOSETAG+"|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|[<][?].*?[?][>]|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"
t.reHtmlTag=new RegExp("^"+r,"i")},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(1),i=n(8),o=n(4),a=n(24),s=/^`{3,}(?!.*`)|^~{3,}/,l=[/./,/^<(?:script|pre|style)(?:\s|>|$)/i,/^<!--/,/^<[?]/,/^<![A-Z]/,/^<!\[CDATA\[/,/^<[/]?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[123456]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|[/]?[>]|$)/i,new RegExp("^(?:"+i.OPENTAG+"|"+i.CLOSETAG+")\\s*$","i")],c=/^(?:=+|-+)[ \t]*$/,u=/^#{1,6}(?:[ \t]+|$)/,d=/^(?:(?:\*[ \t]*){3,}|(?:_[ \t]*){3,}|(?:-[ \t]*){3,})[ \t]*$/
function h(e,t){return e.options.disallowDeepHeading&&("blockQuote"===t.type||"item"===t.type)}t.reBulletListMarker=/^[*+-]/,t.reOrderedListMarker=/^(\d{1,9})([.)])/,t.blockStarts=[function(e){return e.indented||o.peek(e.currentLine,e.nextNonspace)!==o.C_GREATERTHAN?0:(e.advanceNextNonspace(),e.advanceOffset(1,!1),o.isSpaceOrTab(o.peek(e.currentLine,e.offset))&&e.advanceOffset(1,!0),e.closeUnmatchedBlocks(),e.addChild("blockQuote",e.nextNonspace),1)},function(e,t){var n
if(!e.indented&&!h(e,t)&&(n=e.currentLine.slice(e.nextNonspace).match(u))){e.advanceNextNonspace(),e.advanceOffset(n[0].length,!1),e.closeUnmatchedBlocks()
var r=e.addChild("heading",e.nextNonspace)
return r.level=n[0].trim().length,r.headingType="atx",r.stringContent=e.currentLine.slice(e.offset).replace(/^[ \t]*#+[ \t]*$/,"").replace(/[ \t]+#+[ \t]*$/,""),e.advanceOffset(e.currentLine.length-e.offset),2}return 0},function(e){var t
if(!e.indented&&(t=e.currentLine.slice(e.nextNonspace).match(s))){var n=t[0].length
e.closeUnmatchedBlocks()
var r=e.addChild("codeBlock",e.nextNonspace)
return r.isFenced=!0,r.fenceLength=n,r.fenceChar=t[0][0],r.fenceOffset=e.indent,e.advanceNextNonspace(),e.advanceOffset(n,!1),2}return 0},function(e,t){if(!e.indented&&o.peek(e.currentLine,e.nextNonspace)===o.C_LESSTHAN){var n=e.currentLine.slice(e.nextNonspace),r=e.options.disallowedHtmlBlockTags,i=void 0
for(i=1;i<=7;i++){var a=n.match(l[i])
if(a){if(7===i){if("paragraph"===t.type)return 0
if(r.length>0&&new RegExp("</?(?:"+r.join("|")+")","i").test(a[0]))return 0}return e.closeUnmatchedBlocks(),e.addChild("htmlBlock",e.offset).htmlBlockType=i,2}}}return 0},function(e,t){var n
if(null!==t.stringContent&&!e.indented&&"paragraph"===t.type&&!h(e,t.parent)&&(n=e.currentLine.slice(e.nextNonspace).match(c))){e.closeUnmatchedBlocks()
for(var i=void 0;o.peek(t.stringContent,0)===o.C_OPEN_BRACKET&&(i=e.inlineParser.parseReference(t,e.refMap));)t.stringContent=t.stringContent.slice(i)
if(t.stringContent.length>0){var a=r.createNode("heading",t.sourcepos)
return a.level="="===n[0][0]?1:2,a.headingType="setext",a.stringContent=t.stringContent,t.insertAfter(a),t.unlink(),e.tip=a,e.advanceOffset(e.currentLine.length-e.offset,!1),2}return 0}return 0},function(e){return!e.indented&&d.test(e.currentLine.slice(e.nextNonspace))?(e.closeUnmatchedBlocks(),e.addChild("thematicBreak",e.nextNonspace),e.advanceOffset(e.currentLine.length-e.offset,!1),2):0},function(e,n){var r,i,a,s=n
return e.indented&&"list"!==n.type||!(r=function(e,n){var r,i,a=e.currentLine.slice(e.nextNonspace),s={type:"bullet",tight:!0,bulletChar:"",start:0,delimiter:"",padding:0,markerOffset:e.indent,task:!1,checked:!1}
if(e.indent>=4)return null
if(r=a.match(t.reBulletListMarker))s.type="bullet",s.bulletChar=r[0][0]
else{if(!(r=a.match(t.reOrderedListMarker))||"paragraph"===n.type&&"1"!==r[1])return null
s.type="ordered",s.start=parseInt(r[1],10),s.delimiter=r[2]}if(-1!==(i=o.peek(e.currentLine,e.nextNonspace+r[0].length))&&i!==o.C_TAB&&i!==o.C_SPACE)return null
if("paragraph"===n.type&&!e.currentLine.slice(e.nextNonspace+r[0].length).match(o.reNonSpace))return null
e.advanceNextNonspace(),e.advanceOffset(r[0].length,!0)
var l=e.column,c=e.offset
do{e.advanceOffset(1,!0),i=o.peek(e.currentLine,e.offset)}while(e.column-l<5&&o.isSpaceOrTab(i))
var u=-1===o.peek(e.currentLine,e.offset),d=e.column-l
return d>=5||d<1||u?(s.padding=r[0].length+1,e.column=l,e.offset=c,o.isSpaceOrTab(o.peek(e.currentLine,e.offset))&&e.advanceOffset(1,!0)):s.padding=r[0].length+d,s}(e,s))?0:(e.closeUnmatchedBlocks(),"list"===e.tip.type&&(a=r,(i=s.listData).type===a.type&&i.delimiter===a.delimiter&&i.bulletChar===a.bulletChar)||((s=e.addChild("list",e.nextNonspace)).listData=r),(s=e.addChild("item",e.nextNonspace)).listData=r,1)},function(e){return e.indented&&"paragraph"!==e.tip.type&&!e.blank?(e.advanceOffset(o.CODE_INDENT,!0),e.closeUnmatchedBlocks(),e.addChild("codeBlock",e.offset),2):0},a.tableHead,a.tableBody]},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(5)
t.ToastMark=r.ToastMark
var i=n(26)
t.createRenderHTML=i.createRenderHTML
var o=n(6)
t.Parser=o.Parser},function(e,t,n){"use strict"
var r={}
function i(e,t,n){var o,a,s,l,c,u=""
for("string"!=typeof t&&(n=t,t=i.defaultChars),void 0===n&&(n=!0),c=function(e){var t,n,i=r[e]
if(i)return i
for(i=r[e]=[],t=0;t<128;t++)n=String.fromCharCode(t),/^[0-9a-z]$/i.test(n)?i.push(n):i.push("%"+("0"+t.toString(16).toUpperCase()).slice(-2))
for(t=0;t<e.length;t++)i[e.charCodeAt(t)]=e[t]
return i}(t),o=0,a=e.length;o<a;o++)if(s=e.charCodeAt(o),n&&37===s&&o+2<a&&/^[0-9a-f]{2}$/i.test(e.slice(o+1,o+3)))u+=e.slice(o,o+3),o+=2
else if(s<128)u+=c[s]
else if(s>=55296&&s<=57343){if(s>=55296&&s<=56319&&o+1<a&&(l=e.charCodeAt(o+1))>=56320&&l<=57343){u+=encodeURIComponent(e[o]+e[o+1]),o++
continue}u+="%EF%BF%BD"}else u+=encodeURIComponent(e[o])
return u}i.defaultChars=";/?:@&=+$,-_.!~*'()#",i.componentChars="-_.!~*'()",e.exports=i},function(e){e.exports=JSON.parse('{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}')},function(e){e.exports=JSON.parse('{"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","QUOT":"\\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}')},function(e){e.exports=JSON.parse('{"amp":"&","apos":"\'","gt":">","lt":"<","quot":"\\""}')},function(e,t,n){"use strict"
var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0})
var i=r(n(16))
t.default=function(e){if(e>=55296&&e<=57343||e>1114111)return"�"
e in i.default&&(e=i.default[e])
var t=""
return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|1023&e),t+String.fromCharCode(e)}},function(e){e.exports=JSON.parse('{"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}')},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(1),i=function(){function e(e){this.current=e,this.root=e,this.entering=!0}return e.prototype.next=function(){var e=this.current,t=this.entering
if(null===e)return null
var n=r.isContainer(e)
return t&&n?e.firstChild?(this.current=e.firstChild,this.entering=!0):this.entering=!1:e===this.root?this.current=null:null===e.next?(this.current=e.parent,this.entering=!1):(this.current=e.next,this.entering=!0),{entering:t,node:e}},e.prototype.resumeAt=function(e,t){this.current=e,this.entering=!0===t},e}()
t.default=i},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(0),i=n(1),o=n(2),a=n(8),s=r.__importDefault(n(19)),l=n(7),c=n(20),u=n(3),d=n(5)
t.C_NEWLINE=10
var h="\\\\"+o.ESCAPABLE,f=new RegExp(/[!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/),p=new RegExp('^(?:"('+h+'|[^"\\x00])*"|\'('+h+"|[^'\\x00])*'|\\(("+h+"|[^()\\x00])*\\))"),g=/^(?:<(?:[^<>\n\\\x00]|\\.)*>)/,m=new RegExp("^"+o.ESCAPABLE),v=new RegExp("^"+o.ENTITY,"i"),y=/`+/,b=/^`+/,C=/\.\.\./g,w=/--+/g,_=/^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,T=/^<[A-Za-z][A-Za-z0-9.+-]{1,31}:[^<>\x00-\x20]*>/i,E=/^ *(?:\n *)?/,x=/^[ \t\n\x0b\x0c\x0d]/,S=/^\s/,N=/ *$/,k=/^ */,L=/^ *(?:\n|$)/,M=/^\[(?:[^\\\[\]]|\\.){0,1000}\]/,A=/^[^\n`\[\]\\!<&*_'"~]+/m,O=function(){function e(e){this.subject="",this.delimiters=null,this.brackets=null,this.pos=0,this.lineStartNum=0,this.lineIdx=0,this.lineOffsets=[0],this.linePosOffset=0,this.refMap={},this.refLinkCandidateMap={},this.refDefCandidateMap={},this.options=e}return e.prototype.sourcepos=function(e,t){var n=this.linePosOffset+this.lineOffsets[this.lineIdx],r=this.lineStartNum+this.lineIdx,i=[r,e+n]
return"number"==typeof t?[i,[r,t+n]]:i},e.prototype.nextLine=function(){this.lineIdx+=1,this.linePosOffset=-this.pos},e.prototype.match=function(e){var t=e.exec(this.subject.slice(this.pos))
return null===t?null:(this.pos+=t.index+t[0].length,t[0])},e.prototype.peek=function(){return this.pos<this.subject.length?this.subject.charCodeAt(this.pos):-1},e.prototype.spnl=function(){return this.match(E),!0},e.prototype.parseBackticks=function(e){var t=this.pos+1,n=this.match(b)
if(null===n)return!1
for(var r,o=this.pos;null!==(r=this.match(y));)if(r===n){var a=this.subject.slice(o,this.pos-n.length),s=this.sourcepos(t,this.pos),l=a.split("\n")
if(l.length>1){var c=u.last(l)
this.lineIdx+=l.length-1,this.linePosOffset=-(this.pos-c.length-n.length),s[1]=this.sourcepos(this.pos),a=l.join(" ")}var d=i.createNode("code",s)
return a.length>0&&null!==a.match(/[^ ]/)&&" "==a[0]&&" "==a[a.length-1]?d.literal=a.slice(1,a.length-1):d.literal=a,d.tickCount=n.length,e.appendChild(d),!0}return this.pos=o,e.appendChild(i.text(n,this.sourcepos(t,this.pos-1))),!0},e.prototype.parseBackslash=function(e){var n,r=this.subject
this.pos+=1
var o=this.pos
return this.peek()===t.C_NEWLINE?(this.pos+=1,n=i.createNode("linebreak",this.sourcepos(this.pos-1,this.pos)),e.appendChild(n),this.nextLine()):m.test(r.charAt(this.pos))?(e.appendChild(i.text(r.charAt(this.pos),this.sourcepos(o,this.pos))),this.pos+=1):e.appendChild(i.text("\\",this.sourcepos(o,o))),!0},e.prototype.parseAutolink=function(e){var t,n,r,a=this.pos+1
return(t=this.match(_))?(n=t.slice(1,t.length-1),(r=i.createNode("link",this.sourcepos(a,this.pos))).destination=o.normalizeURI("mailto:"+n),r.title="",r.appendChild(i.text(n,this.sourcepos(a+1,this.pos-1))),e.appendChild(r),!0):!!(t=this.match(T))&&(n=t.slice(1,t.length-1),(r=i.createNode("link",this.sourcepos(a,this.pos))).destination=o.normalizeURI(n),r.title="",r.appendChild(i.text(n,this.sourcepos(a+1,this.pos-1))),e.appendChild(r),!0)},e.prototype.parseHtmlTag=function(e){var t=this.pos+1,n=this.match(a.reHtmlTag)
if(null===n)return!1
var r=i.createNode("htmlInline",this.sourcepos(t,this.pos))
return r.literal=n,e.appendChild(r),!0},e.prototype.scanDelims=function(e){var t=0,n=this.pos
if(39===e||34===e)t++,this.pos++
else for(;this.peek()===e;)t++,this.pos++
if(0===t||t<2&&126===e)return this.pos=n,null
var r,i=0===n?"\n":this.subject.charAt(n-1),o=this.peek()
r=-1===o?"\n":s.default(o)
var a,l,c=S.test(r),u=f.test(r),d=S.test(i),h=f.test(i),p=!c&&(!u||d||h),g=!d&&(!h||c||u)
return 95===e?(a=p&&(!g||h),l=g&&(!p||u)):39===e||34===e?(a=p&&!g,l=g):(a=p,l=g),this.pos=n,{numdelims:t,canOpen:a,canClose:l}},e.prototype.handleDelim=function(e,t){var n=this.scanDelims(e)
if(!n)return!1
var r,o=n.numdelims,a=this.pos+1
this.pos+=o,r=39===e?"’":34===e?"“":this.subject.slice(a-1,this.pos)
var s=i.text(r,this.sourcepos(a,this.pos))
return t.appendChild(s),(n.canOpen||n.canClose)&&(this.options.smart||39!==e&&34!==e)&&(this.delimiters={cc:e,numdelims:o,origdelims:o,node:s,previous:this.delimiters,next:null,canOpen:n.canOpen,canClose:n.canClose},this.delimiters.previous&&(this.delimiters.previous.next=this.delimiters)),!0},e.prototype.removeDelimiter=function(e){null!==e.previous&&(e.previous.next=e.next),null===e.next?this.delimiters=e.previous:e.next.previous=e.previous},e.prototype.removeDelimitersBetween=function(e,t){e.next!==t&&(e.next=t,t.previous=e)},e.prototype.processEmphasis=function(e){var t,n,r,o,a,s,l,c=!1,u=((t={})[95]=[e,e,e],t[42]=[e,e,e],t[39]=[e],t[34]=[e],t[126]=[e],t)
for(r=this.delimiters;null!==r&&r.previous!==e;)r=r.previous
for(;null!==r;){var d=r.cc,h=95===d||42===d
if(r.canClose){for(n=r.previous,l=!1;null!==n&&n!==e&&n!==u[d][h?r.origdelims%3:0];){if(c=h&&(r.canOpen||n.canClose)&&r.origdelims%3!=0&&(n.origdelims+r.origdelims)%3==0,n.cc===r.cc&&n.canOpen&&!c){l=!0
break}n=n.previous}if(o=r,h||126===d)if(l){if(n){var f=r.numdelims>=2&&n.numdelims>=2?2:1,p=h?0:1
a=n.node,s=r.node
var g=i.createNode(h?1===f?"emph":"strong":"strike"),m=a.sourcepos[1],v=s.sourcepos[0]
g.sourcepos=[[m[0],m[1]-f+1],[v[0],v[1]+f-1]],a.sourcepos[1][1]-=f,s.sourcepos[0][1]+=f,a.literal=a.literal.slice(f),s.literal=s.literal.slice(f),n.numdelims-=f,r.numdelims-=f
for(var y=a.next,b=void 0;y&&y!==s;)b=y.next,y.unlink(),g.appendChild(y),y=b
if(a.insertAfter(g),this.removeDelimitersBetween(n,r),n.numdelims<=p&&(0===n.numdelims&&a.unlink(),this.removeDelimiter(n)),r.numdelims<=p){0===r.numdelims&&s.unlink()
var C=r.next
this.removeDelimiter(r),r=C}}}else r=r.next
else 39===d?(r.node.literal="’",l&&(n.node.literal="‘"),r=r.next):34===d&&(r.node.literal="”",l&&(n.node.literal="“"),r=r.next)
l||(u[d][h?o.origdelims%3:0]=o.previous,o.canOpen||this.removeDelimiter(o))}else r=r.next}for(;null!==this.delimiters&&this.delimiters!==e;)this.removeDelimiter(this.delimiters)},e.prototype.parseLinkTitle=function(){var e=this.match(p)
return null===e?null:o.unescapeString(e.substr(1,e.length-2))},e.prototype.parseLinkDestination=function(){var e=this.match(g)
if(null===e){if(60===this.peek())return null
for(var t=this.pos,n=0,r=void 0;-1!==(r=this.peek());)if(92===r&&m.test(this.subject.charAt(this.pos+1)))this.pos+=1,-1!==this.peek()&&(this.pos+=1)
else if(40===r)this.pos+=1,n+=1
else if(41===r){if(n<1)break
this.pos+=1,n-=1}else{if(null!==x.exec(s.default(r)))break
this.pos+=1}return this.pos===t&&41!==r||0!==n?null:(e=this.subject.substr(t,this.pos-t),o.normalizeURI(o.unescapeString(e)))}return o.normalizeURI(o.unescapeString(e.substr(1,e.length-2)))},e.prototype.parseLinkLabel=function(){var e=this.match(M)
return null===e||e.length>1001?0:e.length},e.prototype.parseOpenBracket=function(e){var t=this.pos
this.pos+=1
var n=i.text("[",this.sourcepos(this.pos,this.pos))
return e.appendChild(n),this.addBracket(n,t,!1),!0},e.prototype.parseBang=function(e){var t=this.pos
if(this.pos+=1,91===this.peek()){this.pos+=1
var n=i.text("![",this.sourcepos(this.pos-1,this.pos))
e.appendChild(n),this.addBracket(n,t+1,!0)}else n=i.text("!",this.sourcepos(this.pos,this.pos)),e.appendChild(n)
return!0},e.prototype.parseCloseBracket=function(e){var t=null,n=null,r=!1
this.pos+=1
var o=this.pos,a=this.brackets
if(null===a)return e.appendChild(i.text("]",this.sourcepos(o,o))),!0
if(!a.active)return e.appendChild(i.text("]",this.sourcepos(o,o))),this.removeBracket(),!0
var s=a.image,l=this.pos
40===this.peek()&&(this.pos++,this.spnl()&&null!==(t=this.parseLinkDestination())&&this.spnl()&&(x.test(this.subject.charAt(this.pos-1))&&(n=this.parseLinkTitle()),1)&&this.spnl()&&41===this.peek()?(this.pos+=1,r=!0):this.pos=l)
var c=""
if(!r){var d=this.pos,h=this.parseLinkLabel()
if(h>2?c=this.subject.slice(d,d+h):a.bracketAfter||(c=this.subject.slice(a.index,o)),0===h&&(this.pos=l),c){c=u.normalizeReference(c)
var f=this.refMap[c]
f&&(t=f.destination,n=f.title,r=!0)}}if(r){var p=i.createNode(s?"image":"link")
p.destination=t,p.title=n||"",p.sourcepos=[a.startpos,this.sourcepos(this.pos)]
for(var g=a.node.next,m=void 0;g;)m=g.next,g.unlink(),p.appendChild(g),g=m
if(e.appendChild(p),this.processEmphasis(a.previousDelimiter),this.removeBracket(),a.node.unlink(),!s)for(a=this.brackets;null!==a;)a.image||(a.active=!1),a=a.previous
return this.options.referenceDefinition&&(this.refLinkCandidateMap[e.id]={node:e,refLabel:c}),!0}return this.removeBracket(),this.pos=o,e.appendChild(i.text("]",this.sourcepos(o,o))),this.options.referenceDefinition&&(this.refLinkCandidateMap[e.id]={node:e,refLabel:c}),!0},e.prototype.addBracket=function(e,t,n){null!==this.brackets&&(this.brackets.bracketAfter=!0),this.brackets={node:e,startpos:this.sourcepos(t+(n?0:1)),previous:this.brackets,previousDelimiter:this.delimiters,index:t,image:n,active:!0}},e.prototype.removeBracket=function(){this.brackets&&(this.brackets=this.brackets.previous)},e.prototype.parseEntity=function(e){var t,n=this.pos+1
return!!(t=this.match(v))&&(e.appendChild(i.text(l.decodeHTML(t),this.sourcepos(n,this.pos))),!0)},e.prototype.parseString=function(e){var t,n=this.pos+1
if(t=this.match(A)){if(this.options.smart){var r=t.replace(C,"…").replace(w,(function(e){var t=0,n=0
return e.length%3==0?n=e.length/3:e.length%2==0?t=e.length/2:e.length%3==2?(t=1,n=(e.length-2)/3):(t=2,n=(e.length-4)/3),o.repeat("—",n)+o.repeat("–",t)}))
e.appendChild(i.text(r,this.sourcepos(n,this.pos)))}else{var a=i.text(t,this.sourcepos(n,this.pos))
e.appendChild(a)}return!0}return!1},e.prototype.parseNewline=function(e){this.pos+=1
var t=e.lastChild
if(t&&"text"===t.type&&" "===t.literal[t.literal.length-1]){var n=" "===t.literal[t.literal.length-2],r=t.literal.length
t.literal=t.literal.replace(N,"")
var o=r-t.literal.length
t.sourcepos[1][1]-=o,e.appendChild(i.createNode(n?"linebreak":"softbreak",this.sourcepos(this.pos-o,this.pos)))}else e.appendChild(i.createNode("softbreak",this.sourcepos(this.pos,this.pos)))
return this.nextLine(),this.match(k),!0},e.prototype.parseReference=function(e,t){if(!this.options.referenceDefinition)return 0
this.subject=e.stringContent,this.pos=0
var n=null,r=this.pos,o=this.parseLinkLabel()
if(0===o)return 0
var a=this.subject.substr(0,o)
if(58!==this.peek())return this.pos=r,0
this.pos++,this.spnl()
var s=this.parseLinkDestination()
if(null===s)return this.pos=r,0
var l=this.pos
this.spnl(),this.pos!==l&&(n=this.parseLinkTitle()),null===n&&(n="",this.pos=l)
var c=!0
if(null===this.match(L)&&(""===n?c=!1:(n="",this.pos=l,c=null!==this.match(L))),!c)return this.pos=r,0
var h=u.normalizeReference(a)
if(""===h)return this.pos=r,0
var f=this.getReferenceDefSourcepos(e)
e.sourcepos[0][0]=f[1][0]+1
var p=i.createNode("refDef",f)
return p.title=n,p.dest=s,p.label=h,e.insertBefore(p),t[h]?this.refDefCandidateMap[p.id]=p:t[h]=d.createRefDefState(p),this.pos-r},e.prototype.mergeTextNodes=function(e){for(var t,n=[];t=e.next();){var r=t.entering,i=t.node
if(r&&"text"===i.type)n.push(i)
else if(1===n.length)n=[]
else if(n.length>1){var o=n[0],a=n[n.length-1]
o.sourcepos&&a.sourcepos&&(o.sourcepos[1]=a.sourcepos[1]),o.next=a.next,o.next&&(o.next.prev=o)
for(var s=1;s<n.length;s+=1)o.literal+=n[s].literal,n[s].unlink()
n=[]}}},e.prototype.getReferenceDefSourcepos=function(e){for(var t=e.stringContent.split(/\n|\r\n/),n=!1,r=0,i={line:0,ch:0},o=0;o<t.length;o+=1){var a=t[o]
if(x.test(a))break
if(/\:/.test(a)&&0===r){if(n)break
var s=a.indexOf(":")===a.length-1?o+1:o
i={line:s,ch:t[s].length},n=!0}var l=a.match(/'|"/g)
if(l&&(r+=l.length),2===r){i={line:o,ch:a.length}
break}}return[[e.sourcepos[0][0],e.sourcepos[0][1]],[e.sourcepos[0][0]+i.line,i.ch]]},e.prototype.parseInline=function(e){var n,r=!1,o=this.peek()
if(-1===o)return!1
switch(o){case t.C_NEWLINE:r=this.parseNewline(e)
break
case 92:r=this.parseBackslash(e)
break
case 96:r=this.parseBackticks(e)
break
case 42:case 95:case 126:r=this.handleDelim(o,e)
break
case 39:case 34:r=!!(null===(n=this.options)||void 0===n?void 0:n.smart)&&this.handleDelim(o,e)
break
case 91:r=this.parseOpenBracket(e)
break
case 33:r=this.parseBang(e)
break
case 93:r=this.parseCloseBracket(e)
break
case 60:r=this.parseAutolink(e)||this.parseHtmlTag(e)
break
case 38:r=this.parseEntity(e)
break
default:r=this.parseString(e)}return r||(this.pos+=1,e.appendChild(i.text(s.default(o),this.sourcepos(this.pos,this.pos+1)))),!0},e.prototype.parse=function(e){for(this.subject=e.stringContent.trim(),this.pos=0,this.delimiters=null,this.brackets=null,this.lineOffsets=e.lineOffsets||[0],this.lineIdx=0,this.linePosOffset=0,this.lineStartNum=e.sourcepos[0][0],i.isHeading(e)&&(this.lineOffsets[0]+=e.level+1);this.parseInline(e););e.stringContent=null,this.processEmphasis(null),this.mergeTextNodes(e.walker())
var t=this.options.extendedAutolinks
t&&c.convertExtAutoLinks(e.walker(),t)},e}()
t.InlineParser=O},function(e,t,n){"use strict";/*! http://mths.be/fromcodepoint v0.2.1 by @mathias */var r
if(Object.defineProperty(t,"__esModule",{value:!0}),String.fromCodePoint)r=function(e){try{return String.fromCodePoint(e)}catch(e){if(e instanceof RangeError)return String.fromCharCode(65533)
throw e}}
else{var i=String.fromCharCode,o=Math.floor
r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
var n,r,a=16384,s=[],l=-1,c=e.length
if(!c)return""
for(var u="";++l<c;){var d=Number(e[l])
if(!isFinite(d)||d<0||d>1114111||o(d)!==d)return String.fromCharCode(65533)
d<=65535?s.push(d):(n=55296+((d-=65536)>>10),r=d%1024+56320,s.push(n,r)),(l+1===c||s.length>a)&&(u+=i.apply(void 0,s),s.length=0)}return u}}t.default=r},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(0),i=n(1)
function o(e){var t=/\)+$/.exec(e)
if(t){for(var n=0,r=0,i=e;r<i.length;r++){var o=i[r]
"("===o?n<0?n=1:n+=1:")"===o&&(n-=1)}if(n<0){var a=Math.min(-n,t[0].length)
return e.substring(0,e.length-a)}}return e}function a(e){return e.replace(/&[A-Za-z0-9]+;$/,"")}function s(e){for(var t,n=new RegExp("[\\w.+-]+@(?:[\\w-]+\\.)+[\\w-]+","g"),r=[];t=n.exec(e);){var i=t[0];/[_-]+$/.test(i)||r.push({text:i,range:[t.index,t.index+i.length-1],url:"mailto:"+i})}return r}function l(e){for(var t,n=new RegExp("(www|https?://).(?:[w-]+.)*[A-Za-z0-9-]+.[A-Za-z0-9-]+[^<\\s]*[^<?!.,:*_?~\\s]","g"),r=[];t=n.exec(e);){var i=a(o(t[0])),s="www"===t[1]?"http://":""
r.push({text:i,range:[t.index,t.index+i.length-1],url:""+s+i})}return r}function c(e){return r.__spreadArrays(l(e),s(e)).sort((function(e,t){return e.range[0]-t.range[0]}))}t.parseEmailLink=s,t.parseUrlLink=l,t.convertExtAutoLinks=function(e,t){var n
"boolean"==typeof t&&(t=c)
for(var r=function(){var e=n.entering,r=n.node
if(e&&"text"===r.type&&"link"!==r.parent.type){var o=r.literal,a=t(o)
if(!a||!a.length)return"continue"
for(var s=0,l=r.sourcepos[0],c=l[0],u=l[1],d=function(e,t){return[[c,u+e],[c,u+t]]},h=[],f=0,p=a;f<p.length;f++){var g=p[f],m=g.range,v=g.url,y=g.text
m[0]>s&&h.push(i.text(o.substring(s,m[0]),d(s,m[0]-1)))
var b=i.createNode("link",d.apply(void 0,m))
b.appendChild(i.text(y,d.apply(void 0,m))),b.destination=v,b.extendedAutolink=!0,h.push(b),s=m[1]+1}s<o.length&&h.push(i.text(o.substring(s),d(s,o.length-1)))
for(var C=0,w=h;C<w.length;C++){var _=w[C]
r.insertBefore(_)}r.unlink()}};n=e.next();)r()}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(22),i=n(23),o=n(4),a=n(2),s={continue:function(){return 0},finalize:function(e,t){for(var n=t.firstChild;n;){if(o.endsWithBlankLine(n)&&n.next){t.listData.tight=!1
break}for(var r=n.firstChild;r;){if(o.endsWithBlankLine(r)&&(n.next||r.next)){t.listData.tight=!1
break}r=r.next}n=n.next}},canContain:function(e){return"item"===e},acceptsLines:!1},l={continue:function(e){var t=e.currentLine
return e.indented||o.peek(t,e.nextNonspace)!==o.C_GREATERTHAN?1:(e.advanceNextNonspace(),e.advanceOffset(1,!1),o.isSpaceOrTab(o.peek(t,e.offset))&&e.advanceOffset(1,!0),0)},finalize:function(){},canContain:function(e){return"item"!==e},acceptsLines:!1},c={continue:function(e,t){if(e.blank){if(null===t.firstChild)return 1
e.advanceNextNonspace()}else{if(!(e.indent>=t.listData.markerOffset+t.listData.padding))return 1
e.advanceOffset(t.listData.markerOffset+t.listData.padding,!0)}return 0},finalize:r.taskListItemFinalize,canContain:function(e){return"item"!==e},acceptsLines:!1},u={continue:function(e,t){var n=e.currentLine,r=e.indent
if(t.isFenced){var i=r<=3&&n.charAt(e.nextNonspace)===t.fenceChar&&n.slice(e.nextNonspace).match(o.reClosingCodeFence)
if(i&&i[0].length>=t.fenceLength)return e.lastLineLength=e.offset+r+i[0].length,e.finalize(t,e.lineNumber),2
for(var a=t.fenceOffset;a>0&&o.isSpaceOrTab(o.peek(n,e.offset));)e.advanceOffset(1,!0),a--}else if(r>=o.CODE_INDENT)e.advanceOffset(o.CODE_INDENT,!0)
else{if(!e.blank)return 1
e.advanceNextNonspace()}return 0},finalize:function(e,t){var n
if(null!==t.stringContent){if(t.isFenced){var r=t.stringContent,i=r.indexOf("\n"),o=r.slice(0,i),s=r.slice(i+1)
t.info=a.unescapeString(o.trim()),t.literal=s}else t.literal=null===(n=t.stringContent)||void 0===n?void 0:n.replace(/(\n *)+$/,"\n")
t.stringContent=null}},canContain:function(){return!1},acceptsLines:!0},d={continue:function(e){return e.blank?1:0},finalize:function(e,t){if(null!==t.stringContent){for(var n,r=!1;o.peek(t.stringContent,0)===o.C_OPEN_BRACKET&&(n=e.inlineParser.parseReference(t,e.refMap));)t.stringContent=t.stringContent.slice(n),r=!0
r&&o.isBlank(t.stringContent)&&t.unlink()}},canContain:function(){return!1},acceptsLines:!0}
t.blockHandlers={document:{continue:function(){return 0},finalize:function(){},canContain:function(e){return"item"!==e},acceptsLines:!1},list:s,blockQuote:l,item:c,heading:{continue:function(){return 1},finalize:function(){},canContain:function(){return!1},acceptsLines:!1},thematicBreak:{continue:function(){return 1},finalize:function(){},canContain:function(){return!1},acceptsLines:!1},codeBlock:u,htmlBlock:{continue:function(e,t){return!e.blank||6!==t.htmlBlockType&&7!==t.htmlBlockType?0:1},finalize:function(e,t){var n
t.literal=(null===(n=t.stringContent)||void 0===n?void 0:n.replace(/(\n *)+$/,""))||null,t.stringContent=null},canContain:function(){return!1},acceptsLines:!0},paragraph:d,table:i.table,tableBody:i.tableBody,tableHead:i.tableHead,tableRow:i.tableRow,tableCell:i.tableCell,tableDelimRow:i.tableDelimRow,tableDelimCell:i.tableDelimCell,refDef:{continue:function(){return 1},finalize:function(){},canContain:function(){return!1},acceptsLines:!0}}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=/^\[([ \txX])\][ \t]+/
t.taskListItemFinalize=function(e,t){if(t.firstChild&&"paragraph"===t.firstChild.type){var n=t.firstChild,i=n.stringContent.match(r)
if(i){var o=i[0].length
n.stringContent=n.stringContent.substring(o-1),n.sourcepos[0][1]+=o,n.lineOffsets[0]+=o,t.listData.task=!0,t.listData.checked=/[xX]/.test(i[1])}}}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.table={continue:function(){return 0},finalize:function(){},canContain:function(e){return"tableHead"===e||"tableBody"===e},acceptsLines:!1},t.tableBody={continue:function(){return 0},finalize:function(){},canContain:function(e){return"tableRow"===e},acceptsLines:!1},t.tableHead={continue:function(){return 1},finalize:function(){},canContain:function(e){return"tableRow"===e||"tableDelimRow"===e},acceptsLines:!1},t.tableDelimRow={continue:function(){return 1},finalize:function(){},canContain:function(e){return"tableDelimCell"===e},acceptsLines:!1},t.tableDelimCell={continue:function(){return 1},finalize:function(){},canContain:function(){return!1},acceptsLines:!1},t.tableRow={continue:function(){return 1},finalize:function(){},canContain:function(e){return"tableCell"===e},acceptsLines:!1},t.tableCell={continue:function(){return 1},finalize:function(){},canContain:function(){return!1},acceptsLines:!1}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(2),i=n(1),o=n(3)
function a(e){for(var t=0,n=0,i=[],o=0;o<e.length;o+=1)if("|"===e[o]&&"\\"!==e[o-1]){var a=e.substring(t,o)
0===t&&r.isEmpty(a)?n=o+1:i.push(a),t=o+1}return t<e.length&&(a=e.substring(t,e.length),r.isEmpty(a)||i.push(a)),[n,i]}function s(e,t,n,r){for(var o=[],a=0,s=t;a<s.length;a++){var l=s[a],c=l.match(/^[ \t]+/),u=c?c[0].length:0,d=void 0,h=void 0
if(u===l.length)u=0,d=0,h=""
else{var f=l.match(/[ \t]+$/)
d=f?f[0].length:0,h=l.slice(u,l.length-d)}var p=r+u,g=i.createNode(e,[[n,r],[n,r+l.length-1]])
g.stringContent=h.replace(/\\\|/g,"|"),g.columnIdx=o.length,g.lineOffsets=[p-1],g.paddingLeft=u,g.paddingRight=d,o.push(g),r+=l.length+1}return o}function l(e){var t="left",n=e.stringContent,r=n[0]
return":"===n[n.length-1]&&(t=":"===r?"center":"right"),{align:t}}t.tableHead=function(e,t){var n=t.stringContent
if("paragraph"===t.type&&!e.indented&&!e.blank){var r=n.length-1,c=n.lastIndexOf("\n",r-1)+1,u=n.slice(c,r),d=e.currentLine.slice(e.nextNonspace),h=a(u),f=h[0],p=h[1],g=a(d),m=g[0],v=g[1],y=/^[ \t]*:?-+:?[ \t]*$/
if(!p.length||!v.length||v.some((function(e){return!y.test(e)}))||1===v.length&&0!==d.indexOf("|"))return 0
var b=t.lineOffsets,C=e.lineNumber-1,w=o.last(b)+1,_=i.createNode("table",[[C,w],[e.lineNumber,e.offset]])
if(_.columns=v.map((function(){return{align:"left"}})),t.insertAfter(_),1===b.length)t.unlink()
else{t.stringContent=n.slice(0,c)
var T=c-(n.lastIndexOf("\n",c-2)+1)-1
e.lastLineLength=b[b.length-2]+T,e.finalize(t,C-1)}e.advanceOffset(e.currentLine.length-e.offset,!1)
var E=i.createNode("tableHead",[[C,w],[e.lineNumber,e.offset]])
_.appendChild(E)
var x=i.createNode("tableRow",[[C,w],[C,w+u.length-1]]),S=i.createNode("tableDelimRow",[[e.lineNumber,e.nextNonspace+1],[e.lineNumber,e.offset]])
E.appendChild(x),E.appendChild(S),s("tableCell",p,C,w+f).forEach((function(e){x.appendChild(e)}))
var N=s("tableDelimCell",v,e.lineNumber,e.nextNonspace+1+m)
return N.forEach((function(e){S.appendChild(e)})),_.columns=N.map(l),e.tip=_,2}return 0},t.tableBody=function(e,t){if("table"!==t.type&&"tableBody"!==t.type||!e.blank&&-1===e.currentLine.indexOf("|"))return 0
if(e.advanceOffset(e.currentLine.length-e.offset,!1),e.blank){var n=t
return"tableBody"===t.type&&(n=t.parent,e.finalize(t,e.lineNumber)),e.finalize(n,e.lineNumber),0}var r=t
"table"===t.type&&((r=e.addChild("tableBody",e.nextNonspace)).stringContent=null)
var o=i.createNode("tableRow",[[e.lineNumber,e.nextNonspace+1],[e.lineNumber,e.currentLine.length]])
r.appendChild(o)
var l=r.parent,c=a(e.currentLine.slice(e.nextNonspace)),u=c[0]
return s("tableCell",c[1],e.lineNumber,e.nextNonspace+1+u).forEach((function(e,t){t>=l.columns.length&&(e.ignored=!0),o.appendChild(e)})),2}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(1)
function i(e,t){return e[0]<t[0]?1:e[0]>t[0]?-1:e[1]<t[1]?1:e[1]>t[1]?-1:0}function o(e,t){var n=e[0]
return 1===i(e[1],t)?1:-1===i(n,t)?-1:0}function a(e,t){var n=e[0]
return e[1][0]<t?1:n[0]>t?-1:0}function s(e){return r.getNodeById(e)||null}t.getAllParents=function(e){for(var t=[];e.parent;)t.push(e.parent),e=e.parent
return t.reverse()},t.removeNextUntil=function(e,t){if(e.parent===t.parent&&e!==t){for(var n=e.next;n&&n!==t;){for(var i=n.next,o=0,a=["parent","prev","next"];o<a.length;o++){var s=a[o]
n[s]&&(r.removeNodeById(n[s].id),n[s]=null)}n=i}e.next=t.next,t.next?t.next.prev=e:e.parent.lastChild=e}},t.getChildNodes=function(e){for(var t=[],n=e.firstChild;n;)t.push(n),n=n.next
return t},t.insertNodesBefore=function(e,t){for(var n=0,r=t;n<r.length;n++){var i=r[n]
e.insertBefore(i)}},t.prependChildNodes=function(e,t){for(var n=t.length-1;n>=0;n-=1)e.prependChild(t[n])},t.updateNextLineNumbers=function(e,t){if(e&&e.parent&&0!==t){var n,r=e.parent.walker()
for(r.resumeAt(e,!0);n=r.next();){var i=n.node
n.entering&&(i.sourcepos[0][0]+=t,i.sourcepos[1][0]+=t)}}},t.findChildNodeAtLine=function(e,t){for(var n=e.firstChild;n;){var r=a(n.sourcepos,t)
if(0===r)return n
if(-1===r)return n.prev||n
n=n.next}return e.lastChild},t.findFirstNodeAtLine=function(e,t){for(var n=e.firstChild,r=null;n;){var i=a(n.sourcepos,t)
if(0===i){if(n.sourcepos[0][0]===t||!n.firstChild)return n
r=n,n=n.firstChild}else{if(-1===i)break
r=n,n=n.next}}return r?function(e){for(;e.parent&&"document"!==e.parent.type&&e.parent.sourcepos[0][0]===e.sourcepos[0][0];)e=e.parent
return e}(function(e){for(;e.lastChild;)e=e.lastChild
return e}(r)):null},t.findNodeAtPosition=function(e,t){for(var n=e,r=null;n;){var i=o(n.sourcepos,t)
if(0===i){if(!n.firstChild)return n
r=n,n=n.firstChild}else{if(-1===i)return r
if(!n.next)return r
n=n.next}}return n},t.toString=function(e){return e?"type: "+e.type+", sourcepos: "+e.sourcepos+", firstChild: "+(e.firstChild&&e.firstChild.type)+", lastChild: "+(e.lastChild&&e.lastChild.type)+", prev: "+(e.prev&&e.prev.type)+", next: "+(e.next&&e.next.type):"null"},t.findNodeById=s,t.invokeNextUntil=function(e,t,n){if(void 0===n&&(n=null),t)for(var r=t.walker();t&&t!==n;){e(t)
var i=r.next()
if(!i)break
t=i.node}},t.isUnlinked=function(e){var t=s(e)
if(!t)return!0
for(;t&&"document"!==t.type;){if(!t.parent&&!t.prev&&!t.next)return!0
t=t.parent}return!1}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(0),i=n(1),o=n(2),a=n(3),s=n(27),l=n(29),c={softbreak:"\n",gfm:!1,tagFilter:!1,nodeId:!1}
function u(e){e.length&&"\n"!==a.last(a.last(e))&&e.push("\n")}function d(e,t){e.outerNewLine&&u(t)}function h(e,t){e.innerNewLine&&u(t)}function f(e){for(var t=[],n=e.walker(),r=null;r=n.next();){var i=r.node
"text"===i.type&&t.push(i.literal)}return t.join("")}t.createRenderHTML=function(e){var t=r.__assign(r.__assign({},c),e),n=r.__assign({},s.baseConvertors)
if(t.gfm&&(n=r.__assign(r.__assign({},n),l.gfmConvertors)),t.convertors){var a=t.convertors
Object.keys(a).forEach((function(e){var t=n[e],r=a[e]
n[e]=t?function(e,n){return n.origin=function(){return t(e,n)},r(e,n)}:r})),delete t.convertors}return function(e){return function(e,t,n){for(var r=[],a=e.walker(),s=null,l=function(){var e=s.node,l=s.entering,c=t[e.type]
if(!c)return"continue"
var u=!1,p={entering:l,leaf:!i.isContainer(e),options:n,getChildrenText:f,skipChildren:function(){u=!0}},g=c(e,p)
g&&((Array.isArray(g)?g:[g]).forEach((function(t,i){"openTag"===t.type&&n.nodeId&&0===i&&(t.attributes||(t.attributes={}),t.attributes["data-nodeid"]=String(e.id)),function(e,t){switch(e.type){case"openTag":case"closeTag":!function(e,t){"openTag"===e.type?(d(e,t),t.push(function(e){var t=[],n=e.tagName,r=e.classNames,i=e.attributes
return t.push("<"+n),r&&r.length>0&&t.push(' class="'+r.join(" ")+'"'),i&&Object.keys(i).forEach((function(e){var n=i[e]
t.push(" "+e+'="'+n+'"')})),e.selfClose&&t.push(" /"),t.push(">"),t.join("")}(e)),e.selfClose?d(e,t):h(e,t)):(h(e,t),t.push("</"+e.tagName+">"),d(e,t))}(e,t)
break
case"text":!function(e,t){t.push(o.escapeXml(e.content))}(e,t)
break
case"html":!function(e,t){d(e,t),t.push(e.content),d(e,t)}(e,t)}}(t,r)})),u&&(a.resumeAt(e,!1),a.next()))};s=a.next();)l()
return u(r),r.join("")}(e,n,t)}}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(0),i=n(2),o=n(28)
t.baseConvertors={heading:function(e,t){return{type:t.entering?"openTag":"closeTag",tagName:"h"+e.level,outerNewLine:!0}},text:function(e){return{type:"text",content:e.literal}},softbreak:function(e,t){return{type:"html",content:t.options.softbreak}},linebreak:function(){return{type:"html",content:"<br />\n"}},emph:function(e,t){return{type:t.entering?"openTag":"closeTag",tagName:"em"}},strong:function(e,t){return{type:t.entering?"openTag":"closeTag",tagName:"strong"}},paragraph:function(e,t){var n,r=t.entering,i=null===(n=e.parent)||void 0===n?void 0:n.parent
return i&&"list"===i.type&&i.listData.tight?null:{type:r?"openTag":"closeTag",tagName:"p",outerNewLine:!0}},thematicBreak:function(){return{type:"openTag",tagName:"hr",outerNewLine:!0,selfClose:!0}},blockQuote:function(e,t){return{type:t.entering?"openTag":"closeTag",tagName:"blockquote",outerNewLine:!0,innerNewLine:!0}},list:function(e,t){var n=t.entering,r=e.listData,i=r.type,o=r.start,a="bullet"===i?"ul":"ol",s={}
return"ol"===a&&null!==o&&1!==o&&(s.start=o.toString()),{type:n?"openTag":"closeTag",tagName:a,attributes:s,outerNewLine:!0}},item:function(e,t){return{type:t.entering?"openTag":"closeTag",tagName:"li",outerNewLine:!0}},htmlInline:function(e,t){return{type:"html",content:t.options.tagFilter?o.filterDisallowedTags(e.literal):e.literal}},htmlBlock:function(e,t){var n=t.options,r=n.tagFilter?o.filterDisallowedTags(e.literal):e.literal
return n.nodeId?[{type:"openTag",tagName:"div",outerNewLine:!0},{type:"html",content:r},{type:"closeTag",tagName:"div",outerNewLine:!0}]:{type:"html",content:r,outerNewLine:!0}},code:function(e){return[{type:"openTag",tagName:"code"},{type:"text",content:e.literal},{type:"closeTag",tagName:"code"}]},codeBlock:function(e){var t=e.info,n=t?t.split(/\s+/):[],r=[]
return n.length>0&&n[0].length>0&&r.push("language-"+i.escapeXml(n[0])),[{type:"openTag",tagName:"pre",outerNewLine:!0},{type:"openTag",tagName:"code",classNames:r},{type:"text",content:e.literal},{type:"closeTag",tagName:"code"},{type:"closeTag",tagName:"pre",outerNewLine:!0}]},link:function(e,t){if(t.entering){var n=e,o=n.title,a=n.destination
return{type:"openTag",tagName:"a",attributes:r.__assign({href:i.escapeXml(a)},o&&{title:i.escapeXml(o)})}}return{type:"closeTag",tagName:"a"}},image:function(e,t){var n=t.getChildrenText,o=t.skipChildren,a=e,s=a.title,l=a.destination
return o(),{type:"openTag",tagName:"img",selfClose:!0,attributes:r.__assign({src:i.escapeXml(l),alt:n(e)},s&&{title:i.escapeXml(s)})}}}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=new RegExp("<(/?(?:"+["title","textarea","style","xmp","iframe","noembed","noframes","script","plaintext"].join("|")+")[^>]*>)","ig")
t.filterDisallowedTags=function(e){return r.test(e)?e.replace(r,(function(e,t){return"&lt;"+t})):e}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(0)
t.gfmConvertors={strike:function(e,t){return{type:t.entering?"openTag":"closeTag",tagName:"del"}},item:function(e,t){var n=t.entering,i=e.listData,o=i.checked,a=i.task
if(n){var s={type:"openTag",tagName:"li",outerNewLine:!0}
return a?[s,{type:"openTag",tagName:"input",selfClose:!0,attributes:r.__assign(r.__assign({},o&&{checked:""}),{disabled:"",type:"checkbox"})},{type:"text",content:" "}]:s}return{type:"closeTag",tagName:"li",outerNewLine:!0}},table:function(e,t){return{type:t.entering?"openTag":"closeTag",tagName:"table",outerNewLine:!0}},tableHead:function(e,t){return{type:t.entering?"openTag":"closeTag",tagName:"thead",outerNewLine:!0}},tableBody:function(e,t){return{type:t.entering?"openTag":"closeTag",tagName:"tbody",outerNewLine:!0}},tableRow:function(e,t){if(t.entering)return{type:"openTag",tagName:"tr",outerNewLine:!0}
var n=[]
if(e.lastChild)for(var r=e.parent.parent.columns.length,i=e.lastChild.columnIdx+1;i<r;i+=1)n.push({type:"openTag",tagName:"td",outerNewLine:!0},{type:"closeTag",tagName:"td",outerNewLine:!0})
return n.push({type:"closeTag",tagName:"tr",outerNewLine:!0}),n},tableCell:function(e,t){var n=t.entering
if(e.ignored)return{type:"text",content:""}
var i=e.parent.parent,o="tableHead"===i.type?"th":"td",a=i.parent.columns[e.columnIdx],s=a&&"left"!==a.align?a.align:null,l=s?{align:s}:null
return n?r.__assign({type:"openTag",tagName:o,outerNewLine:!0},l&&{attributes:l}):{type:"closeTag",tagName:o,outerNewLine:!0}}}}]))},function(e,t,n){"use strict"
var r=n(14),i=n.n(r),o=n(20),a=n.n(o),s=function(){function e(){this._keys=[],this._values=[]}var t=e.prototype
return t._getKeyIndex=function(e){return i()(e,this._keys)},t.get=function(e){return this._values[this._getKeyIndex(e)]},t.set=function(e,t){var n=this._getKeyIndex(e)
n>-1?this._values[n]=t:(this._keys.push(e),this._values.push(t))},t.has=function(e){return this._getKeyIndex(e)>-1},t.delete=function(e){var t=this._getKeyIndex(e)
t>-1&&(this._keys.splice(t,1),this._values.splice(t,1))},t.forEach=function(e,t){var n=this
void 0===t&&(t=this),a()(this._values,(function(r,i){r&&n._keys[i]&&e.call(t,r,n._keys[i],n)}))},e}()
t.a=s},function(e,t,n){"use strict"
n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u}))
var r=n(2),i=n.n(r),o={}
function a(e,t){o[e]=o[e]||{},o[e].height=t}function s(e,t){o[e]=o[e]||{},o[e].offsetTop=t}function l(e){return o[e]&&o[e].height}function c(e){return o[e]&&o[e].offsetTop}function u(e){e&&(delete o[e.getAttribute("data-nodeid")],i()(e.children).forEach((function(e){u(e),u(e.nextElementSibling)})))}},function(e,t,n){"use strict"
var r=n(2),i=n.n(r),o=n(9),a=n.n(o),s=n(0),l=new RegExp("^(abbr|align|alt|axis|bgcolor|border|cellpadding|cellspacing|class|clear|color|cols|compact|coords|dir|face|headers|height|hreflang|hspace|ismap|lang|language|nohref|nowrap|rel|rev|rows|rules|scope|scrolling|shape|size|span|start|summary|tabindex|target|title|type|valign|value|vspace|width|checked|mathvariant|encoding|id|name|background|cite|href|longdesc|src|usemap|xlink:href|data-+|checked|style)","g"),c=new RegExp("^(accent-height|accumulate|additive|alphabetic|arabic-form|ascent|baseProfile|bbox|begin|by|calcMode|cap-height|class|color|color-rendering|content|cx|cy|d|dx|dy|descent|display|dur|end|fill|fill-rule|font-family|font-size|font-stretch|font-style|font-variant|font-weight|from|fx|fy|g1|g2|glyph-name|gradientUnits|hanging|height|horiz-adv-x|horiz-origin-x|ideographic|k|keyPoints|keySplines|keyTimes|lang|marker-end|marker-mid|marker-start|markerHeight|markerUnits|markerWidth|mathematical|max|min|offset|opacity|orient|origin|overline-position|overline-thickness|panose-1|path|pathLength|points|preserveAspectRatio|r|refX|refY|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|rotate|rx|ry|slope|stemh|stemv|stop-color|stop-opacity|strikethrough-position|strikethrough-thickness|stroke|stroke-dasharray|stroke-dashoffset|stroke-linecap|stroke-linejoin|stroke-miterlimit|stroke-opacity|stroke-width|systemLanguage|target|text-anchor|to|transform|type|u1|u2|underline-position|underline-thickness|unicode|unicode-range|units-per-em|values|version|viewBox|visibility|width|widths|x|x-height|x1|x2|xlink:actuate|xlink:arcrole|xlink:role|xlink:show|xlink:title|xlink:type|xml:base|xml:lang|xml:space|xmlns|xmlns:xlink|y|y1|y2|zoomAndPan)","g"),u={href:/^(javascript:).*/g}
t.a=function(e,t){var n=document.createElement("div")
return a()(e)?(e=e.replace(/<!--[\s\S]*?-->/g,""),n.innerHTML=e):n.appendChild(e),function(e){s.a.findAll(e,"script, iframe, textarea, form, button, select, meta, style, link, title, embed, object, details, summary").forEach((function(e){s.a.remove(e)}))}(n),function(e){s.a.findAll(e,"*").forEach((function(e){var t=e.attributes,n=i()(t).filter((function(e){var t=e.name.match(l),n=e.name.match(c)
return!t&&!n}))
i()(n).forEach((function(e){t.getNamedItem(e.name)&&t.removeNamedItem(e.name)}))}))}(n),function(e){var t=function(t){u.hasOwnProperty(t)&&s.a.findAll(e,"["+t+"]").forEach((function(e){var n=e.attributes,r=u[t],i=n.getNamedItem(t)
r&&i&&i.value.toLowerCase().match(r)&&n.removeNamedItem(t)}))}
for(var n in u)t(n)}(n),s.a.finalizeHtml(n,t)}},function(e,t,n){"use strict"
var r=n(21),i=n(20),o=n(10)
e.exports=function(e,t,n){r(e)?i(e,t,n):o(e,t,n)}},function(e,t,n){"use strict"
var r=n(8),i=n(48)
e.exports=function(e){return!r(e)&&!i(e)}},function(e,t,n){"use strict"
function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return o}))
var i={paragraph:function(e,t){var n=t.entering,r=t.origin
return t.options.nodeId?{type:n?"openTag":"closeTag",outerNewLine:!0,tagName:"p"}:r()},softbreak:function(e){return{type:"html",content:e.prev&&"htmlInline"===e.prev.type&&/<br ?\/?>/.test(e.prev.literal)?"\n":"<br>\n"}},item:function(e,t){if(t.entering){var n={},r=[]
return e.listData.task&&(n["data-te-task"]="",r.push("task-list-item"),e.listData.checked&&r.push("checked")),{type:"openTag",tagName:"li",classNames:r,attributes:n,outerNewLine:!0}}return{type:"closeTag",tagName:"li",outerNewLine:!0}},code:function(e){return[{type:"openTag",tagName:"code",attributes:{"data-backticks":e.tickCount}},{type:"text",content:e.literal},{type:"closeTag",tagName:"code"}]},codeBlock:function(e){var t=e.info?e.info.split(/\s+/):[],n=[],r={}
if(e.fenceLength>3&&(r["data-backticks"]=e.fenceLength),t.length>0&&t[0].length>0){var i=t[0]
n.push("lang-"+i),r["data-language"]=i}return[{type:"openTag",tagName:"pre",classNames:n},{type:"openTag",tagName:"code",attributes:r},{type:"text",content:e.literal},{type:"closeTag",tagName:"code"},{type:"closeTag",tagName:"pre"}]}}
function o(e,t){var n=r({},i)
return e&&(n.link=function(t,n){var i=n.entering,o=(0,n.origin)()
return i&&(o.attributes=r({},o.attributes,{},e)),o}),t&&Object.keys(t).forEach((function(e){var i=n[e],o=t[e]
n[e]=i?function(e,t){var n=r({},t)
return n.origin=function(){return i(e,t)},o(e,n)}:o})),n}},function(e,t,n){"use strict"
var r=function(){function e(){this._replacers={}}var t=e.prototype
return t.setReplacer=function(e,t){this._replacers[e]=t},t.getReplacer=function(e){return this._replacers[e]},t.createCodeBlockHtml=function(e,t){var n=this.getReplacer(e)
return n?n(t,e):(!1,t.replace(/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"))},e}()
t.a=new r},function(e,t,n){"use strict"
e.exports=function(e){return e instanceof Function}},function(e,t,n){var r
"undefined"!=typeof self&&self,r=function(){return function(e){var t={}
function n(r){if(t[r])return t[r].exports
var i=t[r]={i:r,l:!1,exports:{}}
return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict"
var r=n(1),i=/\n$/g,o=/[ \xA0]+\n\n/g,a=/([ \xA0]+\n){2,}/g,s=/href\=\"(.*?)\"/,l=/^/gm,c=r.factory({TEXT_NODE:function(e){var t=this.trim(this.getSpaceCollapsedText(e.nodeValue))
return this._isNeedEscapeBackSlash(t)&&(t=this.escapeTextBackSlash(t)),t=this.escapePairedCharacters(t),this._isNeedEscapeHtml(t)&&(t=this.escapeTextHtml(t)),this._isNeedEscape(t)&&(t=this.escapeText(t)),this.getSpaceControlled(t,e)},"CODE TEXT_NODE":function(e){return e.nodeValue},"EM, I":function(e,t){var n=""
return this.isEmptyText(t)||(n="*"+t+"*"),n},"STRONG, B":function(e,t){var n=""
return this.isEmptyText(t)||(n="**"+t+"**"),n},A:function(e,t){var n,r,i=t,o=""
return(n=s.exec(e.outerHTML))&&(r=n[1].replace(/&amp;/g,"&")),e.title&&(o=' "'+e.title+'"'),!this.isEmptyText(t)&&r&&(i="["+this.escapeTextForLink(t)+"]("+r+o+")"),i},IMG:function(e){var t="",n=e.getAttribute("src"),r=e.alt
return n&&(t="!["+this.escapeTextForLink(r)+"]("+n+")"),t},BR:function(){return"  \n"},CODE:function(e,t){var n,r,i=""
return this.isEmptyText(t)||(r=parseInt(e.getAttribute("data-backticks"),10),i=(n=isNaN(r)?"`":Array(r+1).join("`"))+t+n),i},P:function(e,t){var n=""
return t=t.replace(a,"  \n"),this.isEmptyText(t)||(n="\n\n"+t+"\n\n"),n},"BLOCKQUOTE P":function(e,t){return t},"LI P":function(e,t){var n=""
return this.isEmptyText(t)||(n=t),n},"H1, H2, H3, H4, H5, H6":function(e,t){for(var n="",r=parseInt(e.tagName.charAt(1),10);r;)n+="#",r-=1
return n+=" ","\n\n"+(n+=t)+"\n\n"},"LI H1, LI H2, LI H3, LI H4, LI H5, LI H6":function(e,t){var n=parseInt(e.tagName.charAt(1),10)
return Array(n+1).join("#")+" "+t},"UL, OL":function(e,t){return"\n\n"+t+"\n\n"},"LI OL, LI UL":function(e,t){return"\n"+t.replace(o,"\n").replace(i,"").replace(l,"    ")},"UL LI":function(e,t){var n=""
return t=t.replace(a,"  \n"),e.firstChild&&"P"===e.firstChild.tagName&&(n+="\n"),n+"* "+t+"\n"},"OL LI":function(e,t){for(var n="",r=parseInt(e.parentNode.getAttribute("start")||1,10);e.previousSibling;)1===(e=e.previousSibling).nodeType&&"LI"===e.tagName&&(r+=1)
return t=t.replace(a,"  \n"),e.firstChild&&"P"===e.firstChild.tagName&&(n+="\n"),n+(r+". ")+t+"\n"},HR:function(){return"\n\n- - -\n\n"},BLOCKQUOTE:function(e,t){return t=t.replace(a,"\n\n"),"\n\n"+this.trim(t).replace(l,"> ")+"\n\n"},"PRE CODE":function(e,t){return"\n\n"+t.replace(i,"").replace(l,"    ")+"\n\n"}})
e.exports=c},function(e,t,n){"use strict"
var r=/^\u0020/,i=/.+\u0020$/,o=/[\n\s\t]+/g,a=/^[\u0020\r\n\t]+|[\u0020\r\n\t]+$/g,s=/[\u0020]+/g,l=/[>(){}\[\]+-.!#|]/g,c=/[\[\]]/g,u=/!\[.*\]\(.*\)/g
function d(e,t,n){var r
for(r in n=n||null,e)if(e.hasOwnProperty(r)&&!1===t.call(n,e[r],r,e))break}function h(e){this.rules={},e&&this.addRules(e)}function f(e){var t=e.tagName
return"S"===t||"B"===t||"I"===t||"EM"===t||"STRONG"===t||"A"===t||"IMG"===t||"CODE"===t}h.prototype.lineFeedReplacement="​​",h.prototype.addRule=function(e,t){var n=e.split(", "),r=n.pop()
for(t.fname=e;r;)this._setConverterWithSelector(r,t),r=n.pop()},h.prototype.addRules=function(e){d(e,(function(e,t){this.addRule(t,e)}),this)},h.prototype.getSpaceControlled=function(e,t){var n,o="",a=""
return t.previousSibling&&(3===t.previousSibling.nodeType||f(t.previousSibling))&&(n=t.previousSibling.innerHTML||t.previousSibling.nodeValue,(i.test(n)||r.test(t.innerHTML||t.nodeValue))&&(o=" ")),t.nextSibling&&(3===t.nextSibling.nodeType||f(t.nextSibling))&&(n=t.nextSibling.innerHTML||t.nextSibling.nodeValue,(r.test(n)||i.test(t.innerHTML||t.nodeValue))&&(a=" ")),o+e+a},h.prototype.convert=function(e,t){var n,r=this._getConverter(e)
return e&&e.nodeType===Node.ELEMENT_NODE&&e.hasAttribute("data-tomark-pass")?(e.removeAttribute("data-tomark-pass"),n=function(e,t){var n=e.cloneNode(!1)
return n.innerHTML=t,n.outerHTML}(e,t)):r?n=r.call(this,e,t):e&&(n=this.getSpaceControlled(this._getInlineHtml(e,t),e)),n||""},h.prototype._getInlineHtml=function(e,t){var n=e.outerHTML,r=e.tagName,i=t.replace(/\$/g,"$$$$")
return n.replace(new RegExp("(<"+r+" ?.*?>).*(</"+r+">)","i"),"$1"+i+"$2")},h.prototype._getConverter=function(e){for(var t,n=this.rules;e&&n;)n=this._getNextRule(n,this._getRuleNameFromNode(e)),e=this._getPrevNode(e),n&&n.converter&&(t=n.converter)
return t},h.prototype._getNextRule=function(e,t){return e[t]},h.prototype._getRuleNameFromNode=function(e){return e.tagName||"TEXT_NODE"},h.prototype._getPrevNode=function(e){var t,n=e.parentNode
return n&&!n.__htmlRootByToMark&&(t=n),t},h.prototype._setConverterWithSelector=function(e,t){var n=this.rules
this._eachSelector(e,(function(e){n[e]||(n[e]={}),n=n[e]})),n.converter=t},h.prototype._eachSelector=function(e,t){var n,r
for(r=(n=e.split(" ")).length-1;r>=0;)t(n[r]),r-=1},h.prototype.trim=function(e){return e.replace(a,"")},h.prototype.isEmptyText=function(e){return""===e.replace(o,"")},h.prototype.getSpaceCollapsedText=function(e){return e.replace(s," ")},h.prototype.escapeText=function(e){return e.replace(l,(function(e){return"\\"+e}))},h.prototype.escapeTextForLink=function(e){for(var t=[],n=u.exec(e);n;)t.push([n.index,n.index+n[0].length]),n=u.exec(e)
return e.replace(c,(function(e,n){return t.some((function(e){return n>e[0]&&n<e[1]}))?e:"\\"+e}))},h.prototype.escapeTextHtml=function(e){return e.replace(new RegExp(h.markdownTextToEscapeHtmlRx.source,"g"),(function(e){return"\\"+e}))},h.prototype.escapeTextBackSlash=function(e){return e.replace(new RegExp(h.markdownTextToEscapeBackSlashRx.source,"g"),(function(e){return"\\"+e}))},h.prototype.escapePairedCharacters=function(e){return e.replace(new RegExp(h.markdownTextToEscapePairedCharsRx.source,"g"),(function(e){return"\\"+e}))},h.markdownTextToEscapeRx={codeblock:/(^ {4}[^\n]+\n*)+/,hr:/^ *((\* *){3,}|(- *){3,} *|(_ *){3,}) */,heading:/^(#{1,6}) +[\s\S]+/,lheading:/^([^\n]+)\n *(=|-){2,} */,blockquote:/^( *>[^\n]+.*)+/,list:/^ *(\*+|-+|\d+\.) [\s\S]+/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? */,link:/!?\[.*\]\(.*\)/,reflink:/!?\[.*\]\s*\[([^\]]*)\]/,verticalBar:/\u007C/,codeblockGfm:/^(`{3,})/,codeblockTildes:/^(~{3,})/},h.markdownTextToEscapeHtmlRx=/<([a-zA-Z_][a-zA-Z0-9\-\._]*)(\s|[^\\/>])*\/?>|<(\/)([a-zA-Z_][a-zA-Z0-9\-\._]*)\s*\/?>|<!--[^-]+-->|<([a-zA-Z_][a-zA-Z0-9\-\.:/]*)>/,h.markdownTextToEscapeBackSlashRx=/\\[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\\]/,h.markdownTextToEscapePairedCharsRx=/[*_~`]/,h.prototype._isNeedEscape=function(e){var t,n=!1,r=h.markdownTextToEscapeRx
for(t in r)if(r.hasOwnProperty(t)&&r[t].test(e)){n=!0
break}return n},h.prototype._isNeedEscapeHtml=function(e){return h.markdownTextToEscapeHtmlRx.test(e)},h.prototype._isNeedEscapeBackSlash=function(e){return h.markdownTextToEscapeBackSlashRx.test(e)},h.prototype.mix=function(e){!function e(t,n){d(n,(function(n,r){"converter"!==r?(t[r]||(t[r]={}),e(t[r],n)):t[r]=n}))}(this.rules,e.rules)},h.factory=function(e,t){var n=new h
return t?n.mix(e):t=e,n.addRules(t),n},e.exports=h},function(e,t,n){"use strict"
var r=n(1),i=n(0),o=r.factory(i,{"DEL, S":function(e,t){return"~~"+t+"~~"},"PRE CODE":function(e,t){var n,r="",i=e.getAttribute("data-backticks")
return e.getAttribute("data-language")&&(r=" "+e.getAttribute("data-language")),i=parseInt(i,10),"\n\n"+(n=isNaN(i)?"```":Array(i+1).join("`"))+r+"\n"+(t=t.replace(/(\r\n)|(\r)|(\n)/g,this.lineFeedReplacement))+"\n"+n+"\n\n"},PRE:function(e,t){return t},"UL LI":function(e,t){return i.convert(e,a(e,t))},"OL LI":function(e,t){return i.convert(e,a(e,t))},TABLE:function(e,t){return"\n\n"+t+"\n\n"},"TBODY, TFOOT":function(e,t){return t},"TR TD, TR TH":function(e,t){return" "+(t=t.replace(/(\r\n)|(\r)|(\n)/g,""))+" |"},"TD BR, TH BR":function(){return"<br>"},TR:function(e,t){return"|"+t+"\n"},THEAD:function(e,t){var n,r,i,o=""
for(i=(r=l(l(e,"TR")[0],"TH")).length,n=0;n<i;n+=1)o+=" "+s(r[n])+" |"
return t?t+"|"+o+"\n":""}})
function a(e,t){return-1!==e.className.indexOf("task-list-item")&&(t="["+(-1!==e.className.indexOf("checked")?"x":" ")+"] "+t),t}function s(e){var t,n,r,i
return t=e.align,i=e.textContent?e.textContent.length:e.innerText.length,n="",r="",t&&("left"===t?(n=":",i-=1):"right"===t?(r=":",i-=1):"center"===t&&(r=":",n=":",i-=2)),n+function(e,t){var n="-"
for(t=Math.max(t,3);t>1;)n+="-",t-=1
return n}(0,i)+r}function l(e,t){var n,r=e.childNodes,i=r.length,o=[]
for(n=0;n<i;n+=1)r[n].tagName&&r[n].tagName===t&&o.push(r[n])
return o}e.exports=o},function(e,t,n){"use strict"
var r=n(4),i=n(1),o=n(0),a=n(2)
r.Renderer=i,r.basicRenderer=o,r.gfmRenderer=a,e.exports=r},function(e,t,n){"use strict"
var r=n(5),i=n(6),o=n(0),a=n(2),s=/[ \xA0]+(\n\n)/g,l=/^[\n]+|[\s\n]+$/g,c=/([ \xA0]+\n){2,}/g,u=/([ \xA0]){2,}\n/g,d=/[ \xA0\n]+/g
function h(e,t){var n,r,i="",o=e.getNode()
for(n=0,r=o.childNodes.length;n<r;n+=1)e.next(),i+=h(e,t)
return t.convert(o,i)}e.exports=function(e,t){var n,f=!0
return e?(n=a,t&&(!1===(f=t.gfm)&&(n=o),n=t.renderer||n),function(e,t,n){return e=(e=(e=(e=(e=e.replace(s,"\n")).replace(c,"\n\n")).replace(d,(function(e){return(e.match(/\n/g)||[]).length>=3?"\n\n":e>=1?"\n":e}))).replace(l,"")).replace(new RegExp(n,"g"),"\n"),t&&(e=e.replace(u,"\n")),e}(function(e,t){for(var n="";e.next();)n+=h(e,t)
return n}(new r(i(e)),n),f,n.lineFeedReplacement)):""}},function(e,t,n){"use strict"
var r={ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3}
function i(e){this._normalizeTextChildren(e),this._root=e,this._current=e}i.prototype.next=function(){var e,t=this._current
if(this._current){for(e=this._getNextNode(t);this._isNeedNextSearch(e,t);)e=(t=t.parentNode).nextSibling
this._current=e}return this._current},i.prototype.getNode=function(){return this._normalizeTextChildren(this._current),this._current},i.prototype._normalizeTextChildren=function(e){var t,n
if(e&&!(e.childNodes.length<2))for(t=e.firstChild;t.nextSibling;)n=t.nextSibling,t.nodeType===r.TEXT_NODE&&n.nodeType===r.TEXT_NODE?(t.nodeValue+=n.nodeValue,e.removeChild(n)):t=n},i.prototype.getNodeText=function(){var e=this.getNode()
return e.nodeType===r.TEXT_NODE?e.nodeValue:e.textContent||e.innerText},i.prototype._isNeedNextSearch=function(e,t){return!e&&t!==this._root&&t.parentNode!==this._root},i.prototype._getNextNode=function(e){return e.firstChild||e.nextSibling},i.NODE_TYPE=r,e.exports=i},function(e,t,n){"use strict"
var r=/^[\s\r\n\t]+|[\s\r\n\t]+$/g,i=/>[\r\n\t]+</g,o=/>[ ]+</g
function a(e){var t
return"[object String]"===Object.prototype.toString.call(e)?(t=document.createElement("div")).innerHTML=s(e):t=e,t.__htmlRootByToMark=!0,t}function s(e){return(e=(e=e.replace(r,"")).replace(i,"><")).replace(o,"> <")}a.preProcess=s,e.exports=a}])},e.exports=r()},function(e,t,n){"use strict"
var r=n(8)
e.exports=function(e){return e&&e.className?r(e.className.baseVal)?e.className:e.className.baseVal:""}},function(e,t,n){"use strict"
e.exports=function(e){return"number"==typeof e||e instanceof Number}},function(e,t,n){"use strict"
var r=n(18),i=n.n(r),o=n(19),a=n.n(o),s=n(5),l=n.n(s),c=n(6),u=n.n(c),d=n(22),h=n(38),f=n(0),p=n(28),g=n(17),m=n(24),v=n(4),y=function(e){var t,n
function r(t,n,r,i){var o;(o=e.call(this,t,n,r,i.isViewer)||this).lazyRunner.registerLazyRunFunction("invokeCodeBlock",o.invokeCodeBlockPlugins,o.delayCodeBlockTime,function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(o))
var a=i.linkAttribute,s=i.customHTMLRenderer,l=i.highlight,c=void 0!==l&&l
return o.renderHTML=Object(d.createRenderHTML)({gfm:!0,nodeId:!0,convertors:Object(p.a)(a,s)}),o.cursorNodeId=null,o._initEvent(c),o}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n
var o=r.prototype
return o._initEvent=function(e){var t=this
this.eventManager.listen("contentChangedFromMarkdown",this.update.bind(this)),e&&this.eventManager.listen("cursorActivity",(function(e){var n=e.markdownNode,r=e.cursor
t._updateCursorNode(n,r)})),i()(this.el,"scroll",(function(e){t.eventManager.emit("scroll",{source:"preview",data:Object(g.a)(e.target.scrollTop,t._previewContent)})}))},o._updateCursorNode=function(e,t){e&&("tableRow"===(e=Object(v.b)(e,(function(e){return!Object(v.h)(e)}))).type?e=function(e,t){for(var n=t.ch,r=e.firstChild;r&&r.next&&!(Object(v.e)(r.next)>n+1);)r=r.next
return r}(e,t):"tableBody"===e.type&&(e=null))
var n=e?e.id:null
if(this.cursorNodeId!==n){var r=this._getElementByNodeId(this.cursorNodeId),i=this._getElementByNodeId(n)
r&&u()(r,"te-preview-highlight"),i&&l()(i,"te-preview-highlight"),this.cursorNodeId=n}},o._getElementByNodeId=function(e){return e?this._previewContent.querySelector('[data-nodeid="'+e+'"]'):null},o.update=function(e){var t=this
e.forEach((function(e){return t.replaceRangeNodes(e)})),this.eventManager.emit("previewRenderAfter",this)},o.replaceRangeNodes=function(e){var t=this,n=e.nodes,r=e.removedNodeRange,i=this._previewContent,o=this.eventManager.emitReduce("convertorAfterMarkdownToHtmlConverted",n.map((function(e){return t.renderHTML(e)})).join(""))
if(r){var a=r.id,s=a[0],l=a[1],c=this._getElementByNodeId(s),u=this._getElementByNodeId(l)
if(c){c.insertAdjacentHTML("beforebegin",o)
for(var d=c;d!==u;){var h=d.nextElementSibling
d.parentNode.removeChild(d),Object(m.c)(d),d=h}d.parentNode&&(f.a.remove(d),Object(m.c)(d))}}else i.insertAdjacentHTML("afterbegin",o)
var p=this.getCodeBlockElements(n.map((function(e){return e.id})))
p.length&&this.lazyRunner.run("invokeCodeBlock",p)},o.render=function(t){e.prototype.render.call(this,t),this.eventManager.emit("previewRenderAfter",this)},o.remove=function(){a()(this.el,"scroll"),this.el=null},r}(h.a)
t.a=y},function(e,t,n){"use strict"
var r=n(10),i=n.n(r),o=n(8),a=n.n(o),s=n(44),l=n.n(s),c=n(45),u=n.n(c),d=n(23),h=["previewBeforeHook","previewRenderAfter","previewNeedsRefresh","addImageBlobHook","setMarkdownAfter","contentChangedFromWysiwyg","changeFromWysiwyg","contentChangedFromMarkdown","changeFromMarkdown","change","changeModeToWysiwyg","changeModeToMarkdown","changeModeBefore","changeMode","changePreviewStyle","changePreviewTabPreview","changePreviewTabWrite","openPopupAddLink","openPopupAddImage","openPopupAddTable","openPopupTableUtils","openHeadingSelect","openPopupCodeBlockLanguages","openPopupCodeBlockEditor","openDropdownToolbar","closePopupCodeBlockLanguages","closePopupCodeBlockEditor","closeAllPopup","command","addCommandBefore","htmlUpdate","markdownUpdate","renderedHtmlUpdated","removeEditor","convertorAfterMarkdownToHtmlConverted","convertorBeforeHtmlToMarkdownConverted","convertorAfterHtmlToMarkdownConverted","stateChange","wysiwygSetValueAfter","wysiwygSetValueBefore","wysiwygGetValueBefore","wysiwygProcessHTMLText","wysiwygRangeChangeAfter","wysiwygKeyEvent","scroll","click","mousedown","mouseover","mouseout","mouseup","contextmenu","keydown","keyup","keyMap","load","focus","blur","paste","pasteBefore","willPaste","copy","copyBefore","copyAfter","cut","cutAfter","drop","show","hide","changeLanguage","cursorActivity","requireScrollSync","requireScrollIntoView","setCodeBlockLanguages"],f=function(){function e(){this.events=new d.a,this.TYPE=new u.a(h)}var t=e.prototype
return t.listen=function(e,t){var n=this._getTypeInfo(e),r=this.events.get(n.type)||[]
if(!this._hasEventType(n.type))throw new Error("There is no event type "+n.type)
n.namespace&&(t.namespace=n.namespace),r.push(t),this.events.set(n.type,r)},t.emit=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
var r,o=t.shift(),s=this._getTypeInfo(o),l=this.events.get(s.type)
return l&&i()(l,(function(e){var n=e.apply(void 0,t)
a()(n)||(r=r||[]).push(n)})),r},t.emitReduce=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
var r=t.shift(),o=this.events.get(r)
return o&&i()(o,(function(e){var n=e.apply(void 0,t)
l()(n)||(t[0]=n)})),t[0]},t._getTypeInfo=function(e){var t=e.split(".")
return{type:t[0],namespace:t[1]}},t._hasEventType=function(e){return!a()(this.TYPE[this._getTypeInfo(e).type])},t.addEventType=function(e){if(this._hasEventType(e))throw new Error("There is already have event type "+e)
this.TYPE.set(e)},t.removeEventHandler=function(e,t){var n=this,r=this._getTypeInfo(e),i=r.type,o=r.namespace
i&&t?this._removeEventHandlerWithHandler(i,t):i&&!o?this.events.delete(i):!i&&o?this.events.forEach((function(e,t){n._removeEventHandlerWithTypeInfo(t,o)})):i&&o&&this._removeEventHandlerWithTypeInfo(i,o)},t._removeEventHandlerWithHandler=function(e,t){var n=this.events.get(e)||[],r=n.indexOf(t)
r>=0&&n.splice(r,1)},t._removeEventHandlerWithTypeInfo=function(e,t){var n=[],r=this.events.get(e)
r&&(r.map((function(e){return e.namespace!==t&&n.push(e),null})),this.events.set(e,n))},e}()
t.a=f},function(e,t,n){"use strict"
var r=n(31),i=n.n(r),o=n(22),a=n(28),s=n(0),l=new RegExp("(\\\\<|<)([A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*)(\\/?>)","g"),c=function(){function e(e,t){void 0===t&&(t={})
var n=t,r=n.linkAttribute,i=n.customHTMLRenderer,s=n.extendedAutolinks,l=n.referenceDefinition
this.mdReader=new o.Parser({extendedAutolinks:s,disallowedHtmlBlockTags:["br"],referenceDefinition:l,disallowDeepHeading:!0}),this.renderHTML=Object(o.createRenderHTML)({gfm:!0,convertors:Object(a.a)(r,i)}),this.eventManager=e}var t=e.prototype
return t._markdownToHtmlWithCodeHighlight=function(e){return e=this._replaceImgAttrToDataProp(e),this.renderHTML(this.mdReader.parse(e))},t._markdownToHtml=function(e){return e=e.replace(l,(function(e,t,n,r){return"\\"!==e[0]?""+t+n+" data-tomark-pass "+r:e})),e=this._replaceImgAttrToDataProp(e),this.renderHTML(this.mdReader.parse(e))},t._replaceImgAttrToDataProp=function(e){for(var t=/(<img[^>]*)(onerror\s*=\s*[\\"']?[^\\"']*[\\"']?)(.*)/i;t.exec(e);)e=e.replace(t,"$1$3")
return e},t._removeBrToMarkPassAttributeInCode=function(e){var t=s.a.createElementWith("<div>"+e+"</div>")
return s.a.findAll(t,"code, pre").forEach((function(e){var t=e
t.innerHTML=t.innerHTML.replace(/\sdata-tomark-pass\s(\/?)&gt;/g,"$1&gt;")})),t.innerHTML},t.toHTMLWithCodeHighlight=function(e){var t=this._markdownToHtmlWithCodeHighlight(e)
return this.eventManager.emitReduce("convertorAfterMarkdownToHtmlConverted",t)},t.toHTML=function(e){var t=this._markdownToHtml(e)
return t=this.eventManager.emitReduce("convertorAfterMarkdownToHtmlConverted",t),this._removeBrToMarkPassAttributeInCode(t)},t.initHtmlSanitizer=function(e){this.eventManager.listen("convertorAfterMarkdownToHtmlConverted",(function(t){return e(t,!0)}))},t.toMarkdown=function(e,t){var n=[]
e=this.eventManager.emitReduce("convertorBeforeHtmlToMarkdownConverted",e),e=this._appendAttributeForLinkIfNeed(e),e=this._appendAttributeForBrIfNeed(e)
var r=i()(e,t)
return r=this.eventManager.emitReduce("convertorAfterHtmlToMarkdownConverted",r),(r=this._removeNewlinesBeforeAfterAndBlockElement(r)).split("\n").forEach((function(e,t){/^(<br>)+\||\|[^|]*\|/gi.test(e)?e=e.replace(/^(<br>)+\|/gi,(function(e){return e.replace(/<br>/gi,"<br>\n")})):/`[^`]*<br>[^`]*`/gi.test(e)||(e=e.replace(/<br>/gi,"<br>\n")),n[t]=e})),n.join("\n")},t._removeNewlinesBeforeAfterAndBlockElement=function(e){return(e=e.replace(/<br>\n\n(#{1,6} .*|```|\||(\*+|-+|\d+\.) .*| *>[^\n]+.*)/g,"<br>$1")).replace(/(#{1,6} .*|```|\|)\n\n<br>/g,"$1\n<br>")},t._appendAttributeForLinkIfNeed=function(e){return e.replace(/!?\[.*\]\(<\s*a[^>]*>(.*?)<\s*\/\s*a>\)/gi,(function(e){return e.replace(/<a /gi,'<a data-tomark-pass="" ')}))},t._appendAttributeForBrIfNeed=function(e){var t=new RegExp(/([^>]|<\/a>|<\/code>|<\/span>|<\/b>|<\/i>|<\/s>|<img [^>]*>)/.source+/<br data-tomark-pass \/><br data-tomark-pass \/>/.source,"g")
return(e=(e=(e=(e=(e=(e=e.replace(/<br>/gi,"<br />")).replace(/<br \/><br \/>/gi,"<br data-tomark-pass /><br data-tomark-pass />")).replace(/<br data-tomark-pass="">/gi,"<br data-tomark-pass />")).replace(/<br data-tomark-pass \/><br \/>(.)/gi,"<br data-tomark-pass /><br data-tomark-pass />$1")).replace(t,"$1<br /><br />")).replace(/(.)<br \/><br \/>(<h[1-6]>|<pre>|<table>|<ul>|<ol>|<blockquote>)/g,"$1<br /><br data-tomark-pass />$2")).replace(/(<\/h[1-6]>|<\/pre>|<\/table>|<\/ul>|<\/ol>|<\/blockquote>)<br \/>(.)/g,"$1<br data-tomark-pass />$2")},e}()
t.a=c},function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var r=n(21),i=n.n(r),o=n(30),a=n.n(o)
function s(e,t){e.forEach((function(e){if(a()(e))e(t)
else if(i()(e)){var n=e[0],r=e[1]
n(t,void 0===r?{}:r)}}))}},function(e,t,n){"use strict"
var r=n(3),i=n.n(r),o=n(9),a=n.n(o),s=function(){function e(){this.globalTOID=null,this.lazyRunFunctions={}}var t=e.prototype
return t.run=function(e,t,n,r){var i
return a()(e)?i=this._runRegisteredRun(e,t,n,r):(i=this._runSingleRun(e,t,n,r,this.globalTOID),this.globalTOID=i),i},t.registerLazyRunFunction=function(e,t,n,r){r=r||this,this.lazyRunFunctions[e]={fn:t,delay:n,context:r,TOID:null}},t._runSingleRun=function(e,t,n,r,i){return this._clearTOIDIfNeed(i),setTimeout((function(){e.call(n,t)}),r)},t._runRegisteredRun=function(e,t,n,r){var i=this.lazyRunFunctions[e],o=i.fn,a=i.TOID
return r=r||i.delay,n=n||i.context,a=this._runSingleRun(o,t,n,r,a),i.TOID=a,a},t._clearTOIDIfNeed=function(e){e&&clearTimeout(e)},e}(),l=n(0),c=n(29),u=function(){function e(e,t,n,r){this.eventManager=t,this.convertor=n,this.el=e,this.isViewer=!!r,this.delayCodeBlockTime=500,this._initContentSection(),this.lazyRunner=new s}var t=e.prototype
return t._initContentSection=function(){this._previewContent=l.a.createElementWith('<div class="tui-editor-contents"></div>'),this.el.appendChild(this._previewContent)},t.getCodeBlockElements=function(e){var t=this._previewContent,n=[]
return(e?e.map((function(e){return t.querySelector('[data-nodeid="'+e+'"]')})).filter(Boolean):[t]).forEach((function(e){n.push.apply(n,l.a.findAll(e,"code[data-language]"))})),n},t.invokeCodeBlockPlugins=function(e){e.forEach((function(e){var t=e.getAttribute("data-language"),n=c.a.createCodeBlockHtml(t,e.textContent)
e.innerHTML=n}))},t.refresh=function(e){void 0===e&&(e=""),this.render(this.convertor.toHTMLWithCodeHighlight(e)),this.invokeCodeBlockPlugins(this.getCodeBlockElements())},t.getHTML=function(){return this._previewContent.innerHTML},t.setHTML=function(e){this._previewContent.innerHTML=e},t.render=function(e){var t=this._previewContent
e=this.eventManager.emit("previewBeforeHook",e)||e,l.a.empty(t),t.innerHTML=e},t.setHeight=function(e){i()(this.el,{height:e+"px"})},t.setMinHeight=function(e){i()(this.el,{minHeight:e+"px"})},t.isVisible=function(){return"none"!==this.el.style.display},e}()
t.a=u},function(e,t,n){"use strict"
var r=n(21),i=n(8)
e.exports=function(e,t){t=(t=r(t)?t.join(" "):t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(e.className.baseVal)?e.className=t:e.className.baseVal=t}},function(e,t,n){"use strict"
e.exports=function(e,t){var n,r=e._feEventKey
return r||(r=e._feEventKey={}),(n=r[t])||(n=r[t]=[]),n}},function(e,t,n){},function(e,t,n){"use strict"
var r=n(27)
e.exports=function(e){return r(e)&&!1!==e}},function(e,t,n){"use strict"
var r=n(8),i=n(49)
e.exports=function(e,t){var n=location.hostname,o="TOAST UI "+e+" for "+n+": Statistics",a=window.localStorage.getItem(o);(r(window.tui)||!1!==window.tui.usageStatistics)&&(a&&!function(e){return(new Date).getTime()-e>6048e5}(a)||(window.localStorage.setItem(o,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:t,cid:n,dp:n,dh:e,el:e,ec:"use"})}),1e3)))}},function(e,t,n){"use strict"
var r=n(42)
e.exports=function(e){return!r(e)}},function(e,t,n){"use strict"
var r=n(33),i=n(21),o=n(2),a=n(26),s=function(){try{return Object.defineProperty({},"x",{}),!0}catch(e){return!1}}(),l=0
function c(e){e&&this.set.apply(this,arguments)}c.prototype.set=function(e){var t=this
i(e)||(e=o(arguments)),a(e,(function(e){t._addItem(e)}))},c.prototype.getName=function(e){var t,n=this
return a(this,(function(r,i){if(n._isEnumItem(i)&&e===r)return t=i,!1})),t},c.prototype._addItem=function(e){var t
this.hasOwnProperty(e)||(t=this._makeEnumValue(),s?Object.defineProperty(this,e,{enumerable:!0,configurable:!1,writable:!1,value:t}):this[e]=t)},c.prototype._makeEnumValue=function(){var e
return e=l,l+=1,e},c.prototype._isEnumItem=function(e){return r(this[e])},e.exports=c},function(e,t,n){"use strict"
var r=n(10),i=n.n(r),o=n(7),a=n.n(o),s=n(18),l=n.n(s),c=n(19),u=n.n(c),d=n(34),h=n(35),f=n(1),p=n(36),g=n(0),m=n(29),v=n(37),y=n(11),b=n(25)
function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var w=function(){function e(e){var t=this
this.options=a()({useDefaultHTMLSanitizer:!0,linkAttribute:null,extendedAutolinks:!1,customConvertor:null,customHTMLRenderer:null,referenceDefinition:!1,customHTMLSanitizer:null},e),this.codeBlockLanguages=[],this.eventManager=new h.a,this.commandManager=new f.a(this)
var n=Object(y.c)(this.options.linkAttribute),r=this.options,o=r.customHTMLRenderer,s=r.customHTMLSanitizer,c={linkAttribute:n,customHTMLRenderer:o,extendedAutolinks:r.extendedAutolinks,referenceDefinition:r.referenceDefinition}
this.options.customConvertor?this.convertor=new this.options.customConvertor(this.eventManager,c):this.convertor=new p.a(this.eventManager,c)
var u=s||(this.options.useDefaultHTMLSanitizer?b.a:null)
u&&this.convertor.initHtmlSanitizer(u),this.options.hooks&&i()(this.options.hooks,(function(e,n){t.addHook(n,e)})),this.options.events&&i()(this.options.events,(function(e,n){t.on(n,e)}))
var g=this.options,m=g.el,w=g.initialValue,_=m.innerHTML
m.innerHTML="",this.preview=new d.a(m,this.eventManager,this.convertor,C({},c,{isViewer:!0})),l()(this.preview.el,"mousedown",this._toggleTask.bind(this)),this.options.plugins&&Object(v.a)(this.options.plugins,this),w?this.setMarkdown(w):_&&this.preview.setHTML(_),this.eventManager.emit("load",this)}var t=e.prototype
return t._toggleTask=function(e){var t=getComputedStyle(e.target,":before")
e.target.hasAttribute("data-te-task")&&g.a.isInsideTaskBox(t,e.offsetX,e.offsetY)&&(g.a.toggleClass(e.target,"checked"),this.eventManager.emit("change",{source:"viewer",data:e}))},t.setMarkdown=function(e){this.markdownValue=e=e||"",this.preview.refresh(this.markdownValue),this.eventManager.emit("setMarkdownAfter",this.markdownValue)},t.on=function(e,t){this.eventManager.listen(e,t)},t.off=function(e){this.eventManager.removeEventHandler(e)},t.remove=function(){this.eventManager.emit("removeEditor"),u()(this.preview.el,"mousedown",this._toggleTask.bind(this)),this.preview.remove(),this.options=null,this.eventManager=null,this.commandManager=null,this.convertor=null,this.preview=null},t.addHook=function(e,t){this.eventManager.removeEventHandler(e),this.eventManager.listen(e,t)},t.isViewer=function(){return!0},t.isMarkdownMode=function(){return!1},t.isWysiwygMode=function(){return!1},t.setCodeBlockLanguages=function(e){var t=this
void 0===e&&(e=[]),e.forEach((function(e){t.codeBlockLanguages.indexOf(e)<0&&t.codeBlockLanguages.push(e)}))},e}()
w.isViewer=!0,w.domUtils=g.a,w.codeBlockManager=m.a,w.WwCodeBlockManager=null,w.WwTableManager=null,w.WwTableSelectionManager=null,t.a=w},function(e,t,n){"use strict"
e.exports=function(e,t){var n,r
return t=t||0,function(){r=Array.prototype.slice.call(arguments),window.clearTimeout(n),n=window.setTimeout((function(){e.apply(null,r)}),t)}}},function(e,t,n){"use strict"
e.exports=function(e){return null===e}},function(e,t,n){"use strict"
var r=n(10)
e.exports=function(e,t){var n=document.createElement("img"),i=""
return r(t,(function(e,t){i+="&"+t+"="+e})),i=i.substring(1),n.src=e+"?"+i,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict"
e.exports=function(e){return e===Object(e)}},function(e,t,n){!function(t,n){"use strict"
function r(e,t,n){this.root=this.currentNode=e,this.nodeType=t,this.filter=n||le}function i(e){return e.nodeType===I&&!!ue[e.nodeName]}function o(e){switch(e.nodeType){case R:return he
case I:case H:if(ie&&ge.has(e))return ge.get(e)
break
default:return de}var t
return t=function(e,t){for(var n=e.length;n--;)if(!t(e[n]))return!1
return!0}(e.childNodes,a)?ce.test(e.nodeName)?he:fe:pe,ie&&ge.set(e,t),t}function a(e){return o(e)===he}function s(e){return o(e)===fe}function l(e){return o(e)===pe}function c(e,t){var n=new r(t,F,s)
return n.currentNode=e,n}function u(e,t){return(e=c(e,t).previousNode())!==t?e:null}function d(e,t){return(e=c(e,t).nextNode())!==t?e:null}function h(e,t){return!i(e)&&e.nodeType===t.nodeType&&e.nodeName===t.nodeName&&"A"!==e.nodeName&&e.className===t.className&&(!e.style&&!t.style||e.style.cssText===t.style.cssText)}function f(e,t,n){if(e.nodeName!==t)return!1
for(var r in n)if(e.getAttribute(r)!==n[r])return!1
return!0}function p(e,t,n,r){for(;e&&e!==t;){if(f(e,n,r))return e
e=e.parentNode}return null}function g(e,t){for(;t;){if(t===e)return!0
t=t.parentNode}return!1}function m(e){var t=e.nodeType
return t===I||t===H?e.childNodes.length:e.length||0}function v(e){var t=e.parentNode
return t&&t.removeChild(e),e}function y(e,t){var n=e.parentNode
n&&n.replaceChild(t,e)}function b(e){for(var t=e.ownerDocument.createDocumentFragment(),n=e.childNodes,r=n?n.length:0;r--;)t.appendChild(e.firstChild)
return t}function C(e,t,r,i){var o,a,s,l=e.createElement(t)
if(r instanceof Array&&(i=r,r=null),r)for(o in r)r[o]!==n&&l.setAttribute(o,r[o])
if(i)for(a=0,s=i.length;a<s;a+=1)l.appendChild(i[a])
return l}function w(e,t){var n,r,o=t.__squire__,s=e.ownerDocument,l=e
if(e===t&&((r=e.firstChild)&&"BR"!==r.nodeName||(n=o.createDefaultBlock(),r?e.replaceChild(n,r):e.appendChild(n),e=n,n=null)),e.nodeType===R)return l
if(a(e)){for(r=e.firstChild;te&&r&&r.nodeType===R&&!r.data;)e.removeChild(r),r=e.firstChild
r||(te?(n=s.createTextNode(U),o._didAddZWS()):n=s.createTextNode(""))}else if(ee){for(;e.nodeType!==R&&!i(e);){if(!(r=e.firstChild)){n=s.createTextNode("")
break}e=r}e.nodeType===R?/^ +$/.test(e.data)&&(e.data=""):i(e)&&e.parentNode.insertBefore(s.createTextNode(""),e)}else if("HR"!==e.nodeName&&!e.querySelector("BR"))for(n=C(s,"BR");(r=e.lastElementChild)&&!a(r);)e=r
if(n)try{e.appendChild(n)}catch(t){o.didError({name:"Squire: fixCursor – "+t,message:"Parent: "+e.nodeName+"/"+e.innerHTML+" appendChild: "+n.nodeName})}return l}function _(e,t){var n,r,i,o,s=e.childNodes,c=e.ownerDocument,u=null,d=t.__squire__._config
for(n=0,r=s.length;n<r;n+=1)!(o="BR"===(i=s[n]).nodeName)&&a(i)?(u||(u=C(c,d.blockTag,d.blockAttributes)),u.appendChild(i),n-=1,r-=1):(o||u)&&(u||(u=C(c,d.blockTag,d.blockAttributes)),w(u,t),o?e.replaceChild(u,i):(e.insertBefore(u,i),n+=1,r+=1),u=null),l(i)&&_(i,t)
return u&&e.appendChild(w(u,t)),e}function T(e,t,n,r){var i,o,a,s=e.nodeType
if(s===R&&e!==n)return T(e.parentNode,e.splitText(t),n,r)
if(s===I){if("number"==typeof t&&(t=t<e.childNodes.length?e.childNodes[t]:null),e===n)return t
for(i=e.parentNode,o=e.cloneNode(!1);t;)a=t.nextSibling,o.appendChild(t),t=a
return"OL"===e.nodeName&&p(e,r,"BLOCKQUOTE")&&(o.start=(+e.start||1)+e.childNodes.length-1),w(e,r),w(o,r),(a=e.nextSibling)?i.insertBefore(o,a):i.appendChild(o),T(i,o,n,r)}return t}function E(e,t){if(e.nodeType===R&&(e=e.parentNode),e.nodeType===I){var n={startContainer:t.startContainer,startOffset:t.startOffset,endContainer:t.endContainer,endOffset:t.endOffset};(function e(t,n){for(var r,i,o,s=t.childNodes,l=s.length,c=[];l--;)if(r=s[l],i=l&&s[l-1],l&&a(r)&&h(r,i)&&!ue[r.nodeName])n.startContainer===r&&(n.startContainer=i,n.startOffset+=m(i)),n.endContainer===r&&(n.endContainer=i,n.endOffset+=m(i)),n.startContainer===t&&(n.startOffset>l?n.startOffset-=1:n.startOffset===l&&(n.startContainer=i,n.startOffset=m(i))),n.endContainer===t&&(n.endOffset>l?n.endOffset-=1:n.endOffset===l&&(n.endContainer=i,n.endOffset=m(i))),v(r),r.nodeType===R?i.appendData(r.data):c.push(b(r))
else if(r.nodeType===I){for(o=c.length;o--;)r.appendChild(c.pop())
e(r,n)}})(e,n),t.setStart(n.startContainer,n.startOffset),t.setEnd(n.endContainer,n.endOffset)}}function x(e){var t=e.nodeName
return"TD"===t||"TH"===t||"TR"===t||"TBODY"===t||"THEAD"===t}function S(e,t,n,r){var i,o,a,s=t
if(!x(e)||!x(t)){for(;(i=s.parentNode)&&i!==r&&i.nodeType===I&&1===i.childNodes.length;)s=i
v(s),a=e.childNodes.length,(o=e.lastChild)&&"BR"===o.nodeName&&(e.removeChild(o),a-=1),e.appendChild(b(t)),n.setStart(e,a),n.collapse(!0),E(e,n),Y&&(o=e.lastChild)&&"BR"===o.nodeName&&e.removeChild(o)}}function N(e,t){var n,r,i=e.previousSibling,o=e.firstChild,a=e.ownerDocument,s="LI"===e.nodeName
if((!s||o&&/^[OU]L$/.test(o.nodeName))&&!x(e))if(i&&h(i,e)&&i.isContentEditable&&e.isContentEditable){if(!l(i)){if(!s)return;(r=C(a,"DIV")).appendChild(b(i)),i.appendChild(r)}v(e),n=!l(e),i.appendChild(b(e)),n&&_(i,t),o&&N(o,t)}else s&&(i=C(a,"DIV"),e.insertBefore(i,o),w(i,t))}function k(e){this.isShiftDown=e.shiftKey}function L(e,t,n){var r,i
if(e||(e={}),t)for(r in t)!n&&r in e||(i=t[r],e[r]=i&&i.constructor===Object?L(e[r],i,n):i)
return e}function M(e,t){e.nodeType===P&&(e=e.body)
var n,r=e.ownerDocument,i=r.defaultView
this._win=i,this._doc=r,this._root=e,this._events={},this._isFocused=!1,this._lastSelection=null,ne&&this.addEventListener("beforedeactivate",this.getSelection),this._hasZWS=!1,this._lastAnchorNode=null,this._lastFocusNode=null,this._path="",this._willUpdatePath=!1,"onselectionchange"in r?this.addEventListener("selectionchange",this._updatePathOnEvent):(this.addEventListener("keyup",this._updatePathOnEvent),this.addEventListener("mouseup",this._updatePathOnEvent)),this._undoIndex=-1,this._undoStack=[],this._undoStackLength=0,this._isInUndoState=!1,this._ignoreChange=!1,this._ignoreAllChanges=!1,re?((n=new MutationObserver(this._docWasChanged.bind(this))).observe(e,{childList:!0,attributes:!0,characterData:!0,subtree:!0}),this._mutation=n):this.addEventListener("keyup",this._keyUpDetectChange),this._restoreSelection=!1,this.addEventListener("blur",A),this.addEventListener("mousedown",O),this.addEventListener("touchstart",O),this.addEventListener("focus",B),this._awaitingPaste=!1,this.addEventListener($?"beforecut":"cut",Qe),this.addEventListener("copy",Je),this.addEventListener("keydown",k),this.addEventListener("keyup",k),this.addEventListener($?"beforepaste":"paste",et),this.addEventListener("drop",tt),this.addEventListener(Y?"keypress":"keydown",Oe),this._keyHandlers=Object.create(Re),this.setConfig(t),$&&(i.Text.prototype.splitText=function(e){var t=this.ownerDocument.createTextNode(this.data.slice(e)),n=this.nextSibling,r=this.parentNode,i=this.length-e
return n?r.insertBefore(t,n):r.appendChild(t),i&&this.deleteData(e,i),t}),e.setAttribute("contenteditable","true")
try{r.execCommand("enableObjectResizing",!1,"false"),r.execCommand("enableInlineTableEditing",!1,"false")}catch(e){}e.__squire__=this,this.setHTML("")}function A(){this._restoreSelection=!0}function O(){this._restoreSelection=!1}function B(){this._restoreSelection&&this.setSelection(this._lastSelection)}function D(e,t,n){var r,i
for(r=t.firstChild;r;r=i){if(i=r.nextSibling,a(r)){if(r.nodeType===R||"BR"===r.nodeName||"IMG"===r.nodeName){n.appendChild(r)
continue}}else if(s(r)){n.appendChild(e.createDefaultBlock([D(e,r,e._doc.createDocumentFragment())]))
continue}D(e,r,n)}return n}var I=1,R=3,P=9,H=11,F=1,U="​",W=t.defaultView,q=navigator.userAgent,j=/Android/.test(q),z=/iP(?:ad|hone|od)/.test(q),V=/Mac OS X/.test(q),K=/Windows NT/.test(q),G=/Gecko\//.test(q),$=/Trident\/[456]\./.test(q),Y=!!W.opera,X=/Edge\//.test(q),Z=!X&&/WebKit\//.test(q),Q=/Trident\/[4567]\./.test(q),J=V?"meta-":"ctrl-",ee=$||Y,te=$||Z,ne=$,re="undefined"!=typeof MutationObserver,ie="undefined"!=typeof WeakMap,oe=/[^ \t\r\n]/,ae=Array.prototype.indexOf
Object.create||(Object.create=function(e){var t=function(){}
return t.prototype=e,new t})
var se={1:1,2:2,3:4,8:128,9:256,11:1024},le=function(){return!0}
r.prototype.nextNode=function(){for(var e,t=this.currentNode,n=this.root,r=this.nodeType,i=this.filter;;){for(e=t.firstChild;!e&&t&&t!==n;)(e=t.nextSibling)||(t=t.parentNode)
if(!e)return null
if(se[e.nodeType]&r&&i(e))return this.currentNode=e,e
t=e}},r.prototype.previousNode=function(){for(var e,t=this.currentNode,n=this.root,r=this.nodeType,i=this.filter;;){if(t===n)return null
if(e=t.previousSibling)for(;t=e.lastChild;)e=t
else e=t.parentNode
if(!e)return null
if(se[e.nodeType]&r&&i(e))return this.currentNode=e,e
t=e}},r.prototype.previousPONode=function(){for(var e,t=this.currentNode,n=this.root,r=this.nodeType,i=this.filter;;){for(e=t.lastChild;!e&&t&&t!==n;)(e=t.previousSibling)||(t=t.parentNode)
if(!e)return null
if(se[e.nodeType]&r&&i(e))return this.currentNode=e,e
t=e}}
var ce=/^(?:#text|A(?:BBR|CRONYM)?|B(?:R|D[IO])?|C(?:ITE|ODE)|D(?:ATA|EL|FN)|EM|FONT|I(?:FRAME|MG|NPUT|NS)?|KBD|Q|R(?:P|T|UBY)|S(?:AMP|MALL|PAN|TR(?:IKE|ONG)|U[BP])?|TIME|U|VAR|WBR)$/,ue={BR:1,HR:1,IFRAME:1,IMG:1,INPUT:1},de=0,he=1,fe=2,pe=3,ge=ie?new WeakMap:null,me=function(e,t){for(var n=e.childNodes;t&&e.nodeType===I;)t=(n=(e=n[t-1]).childNodes).length
return e},ve=function(e,t){if(e.nodeType===I){var n=e.childNodes
if(t<n.length)e=n[t]
else{for(;e&&!e.nextSibling;)e=e.parentNode
e&&(e=e.nextSibling)}}return e},ye=function(e,t){var n,r,i,o,a=e.startContainer,s=e.startOffset,l=e.endContainer,c=e.endOffset
a.nodeType===R?(r=(n=a.parentNode).childNodes,s===a.length?(s=ae.call(r,a)+1,e.collapsed&&(l=n,c=s)):(s&&(o=a.splitText(s),l===a?(c-=s,l=o):l===n&&(c+=1),a=o),s=ae.call(r,a)),a=n):r=a.childNodes,s===(i=r.length)?a.appendChild(t):a.insertBefore(t,r[s]),a===l&&(c+=r.length-i),e.setStart(a,s),e.setEnd(l,c)},be=function(e,t,n){var r=e.startContainer,i=e.startOffset,o=e.endContainer,a=e.endOffset
t||(t=e.commonAncestorContainer),t.nodeType===R&&(t=t.parentNode)
for(var s,l,c,u,d,h=T(o,a,t,n),f=T(r,i,t,n),p=t.ownerDocument.createDocumentFragment();f!==h;)s=f.nextSibling,p.appendChild(f),f=s
return r=t,i=h?ae.call(t.childNodes,h):t.childNodes.length,(l=(c=t.childNodes[i])&&c.previousSibling)&&l.nodeType===R&&c.nodeType===R&&(r=l,i=l.length,u=l.data,d=c.data," "===u.charAt(u.length-1)&&" "===d.charAt(0)&&(d=" "+d.slice(1)),l.appendData(d),v(c)),e.setStart(r,i),e.collapse(!0),w(t,n),p},Ce=function(e,t){var n,r,i=xe(e,t),o=Se(e,t),a=i!==o
return Te(e),Ee(e,i,o,t),n=be(e,null,t),Te(e),a&&(o=Se(e,t),i&&o&&i!==o&&S(i,o,e,t)),i&&w(i,t),(r=t.firstChild)&&"BR"!==r.nodeName?e.collapse(!0):(w(t,t),e.selectNodeContents(t.firstChild)),n},we=function(e,t,n){var r,i,o,s,c,h,f,g,v,y
for(_(t,n),r=t;r=d(r,n);)w(r,n)
if(e.collapsed||Ce(e,n),Te(e),e.collapse(!1),s=p(e.endContainer,n,"BLOCKQUOTE")||n,i=xe(e,n),f=d(t,t),i&&f&&!function(e,t,n){for(;e&&e!==t;){if(n.test(e.nodeName))return e
e=e.parentNode}return null}(f,t,/PRE|TABLE|H[1-6]|OL|UL|BLOCKQUOTE/)){if(Ee(e,i,i,n),e.collapse(!0),c=e.endContainer,h=e.endOffset,Xe(i,n,!1),a(c)&&(c=(g=T(c,h,u(c,n),n)).parentNode,h=ae.call(c.childNodes,g)),h!==m(c))for(o=n.ownerDocument.createDocumentFragment();r=c.childNodes[h];)o.appendChild(r)
S(c,f,e,n),h=ae.call(c.parentNode.childNodes,c)+1,c=c.parentNode,e.setEnd(c,h)}m(t)&&(Ee(e,s,s,n),v=(g=T(e.endContainer,e.endOffset,s,n))?g.previousSibling:s.lastChild,s.insertBefore(t,g),g?e.setEndBefore(g):e.setEnd(s,m(s)),i=Se(e,n),Te(e),c=e.endContainer,h=e.endOffset,g&&l(g)&&N(g,n),(g=v&&v.nextSibling)&&l(g)&&N(g,n),e.setEnd(c,h)),o&&(S(i,o,y=e.cloneRange(),n),e.setEnd(y.endContainer,y.endOffset)),Te(e)},_e=function(e,t,n){var r=t.ownerDocument.createRange()
if(r.selectNode(t),n){var i=e.compareBoundaryPoints(3,r)>-1,o=e.compareBoundaryPoints(1,r)<1
return!i&&!o}var a=e.compareBoundaryPoints(0,r)<1,s=e.compareBoundaryPoints(2,r)>-1
return a&&s},Te=function(e){for(var t,n=e.startContainer,r=e.startOffset,o=e.endContainer,a=e.endOffset,s=!0;n.nodeType!==R&&(t=n.childNodes[r])&&!i(t);)n=t,r=0
if(a)for(;o.nodeType!==R;){if(!(t=o.childNodes[a-1])||i(t)){if(s&&t&&"BR"===t.nodeName){a-=1,s=!1
continue}break}a=m(o=t)}else for(;o.nodeType!==R&&(t=o.firstChild)&&!i(t);)o=t
e.collapsed?(e.setStart(o,a),e.setEnd(n,r)):(e.setStart(n,r),e.setEnd(o,a))},Ee=function(e,t,n,r){var i,o=e.startContainer,a=e.startOffset,s=e.endContainer,l=e.endOffset,c=!0
for(t||(t=e.commonAncestorContainer),n||(n=t);!a&&o!==t&&o!==r;)i=o.parentNode,a=ae.call(i.childNodes,o),o=i
for(;c&&s.nodeType!==R&&s.childNodes[l]&&"BR"===s.childNodes[l].nodeName&&(l+=1,c=!1),s!==n&&s!==r&&l===m(s);)i=s.parentNode,l=ae.call(i.childNodes,s)+1,s=i
e.setStart(o,a),e.setEnd(s,l)},xe=function(e,t){var n,r=e.startContainer
return(n=a(r)?u(r,t):r!==t&&s(r)?r:d(n=me(r,e.startOffset),t))&&_e(e,n,!0)?n:null},Se=function(e,t){var n,r,i=e.endContainer
if(a(i))n=u(i,t)
else if(i!==t&&s(i))n=i
else{if(!(n=ve(i,e.endOffset))||!g(t,n))for(n=t;r=n.lastChild;)n=r
n=u(n,t)}return n&&_e(e,n,!0)?n:null},Ne=new r(null,4|F,(function(e){return e.nodeType===R?oe.test(e.data):"IMG"===e.nodeName})),ke=function(e,t){var n,r=e.startContainer,i=e.startOffset
if(Ne.root=null,r.nodeType===R){if(i)return!1
n=r}else if((n=ve(r,i))&&!g(t,n)&&(n=null),!n&&(n=me(r,i)).nodeType===R&&n.length)return!1
return Ne.currentNode=n,Ne.root=xe(e,t),!Ne.previousNode()},Le=function(e,t){var n,r=e.endContainer,i=e.endOffset
if(Ne.root=null,r.nodeType===R){if((n=r.data.length)&&i<n)return!1
Ne.currentNode=r}else Ne.currentNode=me(r,i)
return Ne.root=Se(e,t),!Ne.nextNode()},Me=function(e,t){var n,r=xe(e,t),i=Se(e,t)
r&&i&&(n=r.parentNode,e.setStart(n,ae.call(n.childNodes,r)),n=i.parentNode,e.setEnd(n,ae.call(n.childNodes,i)+1))},Ae={8:"backspace",9:"tab",13:"enter",32:"space",33:"pageup",34:"pagedown",37:"left",39:"right",46:"delete",219:"[",221:"]"},Oe=function(e){var t=e.keyCode,n=Ae[t],r="",i=this.getSelection()
e.defaultPrevented||(n||(n=String.fromCharCode(t).toLowerCase(),/^[A-Za-z0-9]$/.test(n)||(n="")),Y&&46===e.which&&(n="."),111<t&&t<124&&(n="f"+(t-111)),"backspace"!==n&&"delete"!==n&&(e.altKey&&(r+="alt-"),e.ctrlKey&&(r+="ctrl-"),e.metaKey&&(r+="meta-")),e.shiftKey&&(r+="shift-"),n=r+n,this._keyHandlers[n]?this._keyHandlers[n](this,e,i):i.collapsed||e.isComposing||e.ctrlKey||e.metaKey||1!==(Q?n:e.key||n).length||(this.saveUndoState(i),Ce(i,this._root),this._ensureBottomLine(),this.setSelection(i),this._updatePath(i,!0)))},Be=function(e){return function(t,n){n.preventDefault(),t[e]()}},De=function(e,t){return t=t||null,function(n,r){r.preventDefault()
var i=n.getSelection()
n.hasFormat(e,null,i)?n.changeFormat(null,{tag:e},i):n.changeFormat({tag:e},t,i)}},Ie=function(e,t){try{t||(t=e.getSelection())
var n,r=t.startContainer
for(r.nodeType===R&&(r=r.parentNode),n=r;a(n)&&(!n.textContent||n.textContent===U);)n=(r=n).parentNode
r!==n&&(t.setStart(n,ae.call(n.childNodes,r)),t.collapse(!0),n.removeChild(r),s(n)||(n=u(n,e._root)),w(n,e._root),Te(t)),r===e._root&&(r=r.firstChild)&&"BR"===r.nodeName&&v(r),e._ensureBottomLine(),e.setSelection(t),e._updatePath(t,!0)}catch(t){e.didError(t)}},Re={enter:function(e,t,n){var r,i,o,a,s,l=e._root
if(t.preventDefault(),e._recordUndoState(n),p(n.startContainer,l,"PRE",{"data-te-codeblock":""})||pt(n.startContainer,l,e),e._removeZWS(),e._getRangeAndRemoveBookmark(n),n.collapsed||Ce(n,l),(r=xe(n,l))&&(i=p(r,l,"PRE")))return Te(n),o=n.startContainer,a=n.startOffset,o.nodeType!==R&&(o=e._doc.createTextNode(""),i.insertBefore(o,i.firstChild)),t.shiftKey||"\n"!==o.data.charAt(a-1)&&!ke(n,l)||"\n"!==o.data.charAt(a)&&!Le(n,l)?(o.insertData(a,"\n"),w(i,l),o.length===a+1?n.setStartAfter(o):n.setStart(o,a+1)):(o.deleteData(a&&a-1,a?2:1),(o=(s=T(o,a&&a-1,l,l)).previousSibling).textContent||v(o),o=e.createDefaultBlock(),s.parentNode.insertBefore(o,s),s.textContent||v(s),n.setStart(o,0)),n.collapse(!0),e.setSelection(n),e._updatePath(n,!0),void e._docWasChanged()
if(!r||t.shiftKey||/^T[HD]$/.test(r.nodeName))return(i=p(n.endContainer,l,"A"))&&(i=i.parentNode,Ee(n,i,i,l),n.collapse(!1)),ye(n,e.createElement("BR")),n.collapse(!1),e.setSelection(n),void e._updatePath(n,!0)
if((i=p(r,l,"LI"))&&(r=i),function(e){return!e.textContent&&!e.querySelector("IMG")}(r)){if(p(r,l,"UL")||p(r,l,"OL"))return e.decreaseListLevel(n)
if(p(r,l,"BLOCKQUOTE"))return e.modifyBlocks(dt,n)}for(s=ct(e,r,n.startContainer,n.startOffset),at(r),Ge(r),w(r,l);s.nodeType===I;){var c,u=s.firstChild
if("A"===s.nodeName&&(!s.textContent||s.textContent===U)){y(s,u=e._doc.createTextNode("")),s=u
break}for(;u&&u.nodeType===R&&!u.data&&(c=u.nextSibling)&&"BR"!==c.nodeName;)v(u),u=c
if(!u||"BR"===u.nodeName||u.nodeType===R&&!Y)break
s=u}n=e.createRange(s,0),e.setSelection(n),e._updatePath(n,!0)},"shift-enter":function(e,t,n){return e._keyHandlers.enter(e,t,n)},backspace:function(e,t,n){var r=e._root
if(e._removeZWS(),e.saveUndoState(n),n.collapsed)if(ke(n,r)){t.preventDefault()
var i,o=xe(n,r)
if(!o)return
if(_(o.parentNode,r),i=u(o,r)){if(!i.isContentEditable){for(;!i.parentNode.isContentEditable;)i=i.parentNode
return void v(i)}for(S(i,o,n,r),o=i.parentNode;o!==r&&!o.nextSibling;)o=o.parentNode
o!==r&&(o=o.nextSibling)&&N(o,r),e.setSelection(n)}else if(o){if(p(o,r,"UL")||p(o,r,"OL"))return e.decreaseListLevel(n)
if(p(o,r,"BLOCKQUOTE"))return e.modifyBlocks(ut,n)
e.setSelection(n),e._updatePath(n,!0)}}else e.setSelection(n),setTimeout((function(){Ie(e)}),0)
else t.preventDefault(),Ce(n,r),Ie(e,n)},delete:function(e,t,n){var r,i,o,a,s,l,c=e._root
if(e._removeZWS(),e.saveUndoState(n),n.collapsed)if(Le(n,c)){if(t.preventDefault(),!(r=xe(n,c)))return
if(_(r.parentNode,c),i=d(r,c)){if(!i.isContentEditable){for(;!i.parentNode.isContentEditable;)i=i.parentNode
return void v(i)}for(S(r,i,n,c),i=r.parentNode;i!==c&&!i.nextSibling;)i=i.parentNode
i!==c&&(i=i.nextSibling)&&N(i,c),e.setSelection(n),e._updatePath(n,!0)}}else{if(o=n.cloneRange(),Ee(n,c,c,c),a=n.endContainer,s=n.endOffset,a.nodeType===I&&(l=a.childNodes[s])&&"IMG"===l.nodeName)return t.preventDefault(),v(l),Te(n),void Ie(e,n)
e.setSelection(o),setTimeout((function(){Ie(e)}),0)}else t.preventDefault(),Ce(n,c),Ie(e,n)},tab:function(e,t,n){var r,i,o=e._root
if(e._removeZWS(),n.collapsed&&ke(n,o))for(r=xe(n,o);i=r.parentNode;){if("UL"===i.nodeName||"OL"===i.nodeName){t.preventDefault(),e.increaseListLevel(n)
break}r=i}},"shift-tab":function(e,t,n){var r,i=e._root
e._removeZWS(),n.collapsed&&ke(n,i)&&(p(r=n.startContainer,i,"UL")||p(r,i,"OL"))&&(t.preventDefault(),e.decreaseListLevel(n))},space:function(e,t,n){var r,i=e._root
if(e._recordUndoState(n),pt(n.startContainer,i,e),e._getRangeAndRemoveBookmark(n),r=n.endContainer,n.collapsed&&n.endOffset===m(r))do{if("A"===r.nodeName){n.setStartAfter(r)
break}}while(!r.nextSibling&&(r=r.parentNode)&&r!==i)
n.collapsed||(Ce(n,i),e._ensureBottomLine(),e.setSelection(n),e._updatePath(n,!0)),e.setSelection(n)},left:function(e){e._removeZWS()},right:function(e){e._removeZWS()}}
V&&G&&(Re["meta-left"]=function(e,t){t.preventDefault()
var n=ot(e)
n&&n.modify&&n.modify("move","backward","lineboundary")},Re["meta-right"]=function(e,t){t.preventDefault()
var n=ot(e)
n&&n.modify&&n.modify("move","forward","lineboundary")}),V||(Re.pageup=function(e){e.moveCursorToStart()},Re.pagedown=function(e){e.moveCursorToEnd()}),Re[J+"b"]=De("B"),Re[J+"i"]=De("I"),Re[J+"u"]=De("U"),Re[J+"shift-7"]=De("S"),Re[J+"shift-5"]=De("SUB",{tag:"SUP"}),Re[J+"shift-6"]=De("SUP",{tag:"SUB"}),Re[J+"shift-8"]=Be("makeUnorderedList"),Re[J+"shift-9"]=Be("makeOrderedList"),Re[J+"["]=Be("decreaseQuoteLevel"),Re[J+"]"]=Be("increaseQuoteLevel"),Re[J+"d"]=Be("toggleCode"),Re[J+"y"]=Be("redo"),Re[J+"z"]=Be("undo"),Re[J+"shift-z"]=Be("redo")
var Pe={1:10,2:13,3:16,4:18,5:24,6:32,7:48},He={backgroundColor:{regexp:oe,replace:function(e,t,n){return C(e,"SPAN",{class:t.highlight,style:"background-color:"+n})}},color:{regexp:oe,replace:function(e,t,n){return C(e,"SPAN",{class:t.colour,style:"color:"+n})}},fontWeight:{regexp:/^bold|^700/i,replace:function(e){return C(e,"B")}},fontStyle:{regexp:/^italic/i,replace:function(e){return C(e,"I")}},fontFamily:{regexp:oe,replace:function(e,t,n){return C(e,"SPAN",{class:t.fontFamily,style:"font-family:"+n})}},fontSize:{regexp:oe,replace:function(e,t,n){return C(e,"SPAN",{class:t.fontSize,style:"font-size:"+n})}},textDecoration:{regexp:/^underline/i,replace:function(e){return C(e,"U")}}},Fe=function(e){return function(t,n){var r=C(t.ownerDocument,e)
return n.replaceChild(r,t),r.appendChild(b(t)),r}},Ue=function(e,t,n){var r,i,o,a,s,l,c=e.style,u=e.ownerDocument
for(r in He)i=He[r],(o=c[r])&&i.regexp.test(o)&&(l=i.replace(u,n.classNames,o),s||(s=l),a&&a.appendChild(l),a=l,e.style[r]="")
return s&&(a.appendChild(b(e)),"SPAN"===e.nodeName?t.replaceChild(s,e):e.appendChild(s)),a||e},We={P:Ue,SPAN:Ue,STRONG:Fe("B"),EM:Fe("I"),INS:Fe("U"),STRIKE:Fe("S"),FONT:function(e,t,n){var r,i,o,a,s,l=e.face,c=e.size,u=e.color,d=e.ownerDocument,h=n.classNames
return l&&(s=r=C(d,"SPAN",{class:h.fontFamily,style:"font-family:"+l}),a=r),c&&(i=C(d,"SPAN",{class:h.fontSize,style:"font-size:"+Pe[c]+"px"}),s||(s=i),a&&a.appendChild(i),a=i),u&&/^#?([\dA-F]{3}){1,2}$/i.test(u)&&("#"!==u.charAt(0)&&(u="#"+u),o=C(d,"SPAN",{class:h.colour,style:"color:"+u}),s||(s=o),a&&a.appendChild(o),a=o),s||(s=a=C(d,"SPAN")),t.replaceChild(s,e),a.appendChild(b(e)),a},TT:function(e,t,n){var r=C(e.ownerDocument,"SPAN",{class:n.classNames.fontFamily,style:'font-family:menlo,consolas,"courier new",monospace'})
return t.replaceChild(r,e),r.appendChild(b(e)),r}},qe=/^(?:A(?:DDRESS|RTICLE|SIDE|UDIO)|BLOCKQUOTE|CAPTION|D(?:[DLT]|IV)|F(?:IGURE|IGCAPTION|OOTER)|H[1-6]|HEADER|HR|L(?:ABEL|EGEND|I)|O(?:L|UTPUT)|P(?:RE)?|SECTION|T(?:ABLE|BODY|D|FOOT|H|HEAD|R)|COL(?:GROUP)?|UL)$/,je=/^(?:HEAD|META|STYLE)/,ze=new r(null,4|F),Ve=function(e,t){var n,r=t.allowedBlocks,i=!1,o=r.length
if(o){for(n=0;n<o;n+=1)r[n]=r[n].toUpperCase()
i=new RegExp(r.join("|")).test(e)}return qe.test(e)||i},Ke=function e(t,n,r){var i,o,s,l,c,u,d,h,f,p,g,m,v=t.childNodes
for(i=t;a(i);)i=i.parentNode
for(ze.root=i,o=0,s=v.length;o<s;o+=1)if(c=(l=v[o]).nodeName,u=l.nodeType,d=We[c],u===I){if(h=l.childNodes.length,d)l=d(l,t,n)
else{if(je.test(c)){t.removeChild(l),o-=1,s-=1
continue}if(!Ve(c,n)&&!a(l)){o-=1,s+=h-1,t.replaceChild(b(l),l)
continue}}h&&e(l,n,r||"PRE"===c)}else{if(u===R){if(g=l.data,f=!oe.test(g.charAt(0)),p=!oe.test(g.charAt(g.length-1)),r||!f&&!p)continue
if(f){for(ze.currentNode=l;(m=ze.previousPONode())&&!("IMG"===(c=m.nodeName)||"#text"===c&&oe.test(m.data));)if(!a(m)){m=null
break}g=g.replace(/^[ \t\r\n]+/g,m?" ":"")}if(p){for(ze.currentNode=l;(m=ze.nextNode())&&!("IMG"===c||"#text"===c&&oe.test(m.data));)if(!a(m)){m=null
break}g=g.replace(/[ \t\r\n]+$/g,m?" ":"")}if(g){l.data=g
continue}}t.removeChild(l),o-=1,s-=1}return t},Ge=function e(t){for(var n,r=t.childNodes,o=r.length;o--;)if((n=r[o]).nodeType!==I||i(n))n.nodeType!==R||n.data||t.removeChild(n)
else{e(n)
var s="FIGURE"===n.tagName
!a(n)&&!s||n.firstChild||t.removeChild(n)}},$e=function(e){return e.nodeType===I?"BR"===e.nodeName||"IMG"===e.nodeName:oe.test(e.data)},Ye=function(e,t){for(var n,i=e.parentNode;a(i);)i=i.parentNode
return(n=new r(i,4|F,$e)).currentNode=e,!!n.nextNode()||t&&!n.previousNode()},Xe=function(e,t,n){var r,i,o,s=e.querySelectorAll("BR"),l=[],c=s.length
for(r=0;r<c;r+=1)l[r]=Ye(s[r],n)
for(;c--;)(o=(i=s[c]).parentNode)&&(l[c]?a(o)||_(o,t):v(i))},Ze=function(e,t,n,r){var i,o,a=t.ownerDocument.body,s=r.willCutCopy
Xe(t,n,!0),t.setAttribute("style","position:fixed;overflow:hidden;bottom:100%;right:100%;"),a.appendChild(t),i=t.innerHTML,o=t.innerText||t.textContent,s&&(i=s(i)),K&&(o=o.replace(/\r?\n/g,"\r\n")),e.setData("text/html",i),e.setData("text/plain",o),a.removeChild(t)},Qe=function(e){var t,n,r,i,o,a,s=e.clipboardData,l=this.getSelection(),c=this._root,u=this
if(l.collapsed)e.preventDefault()
else{if(this.saveUndoState(l),X||z||!s)setTimeout((function(){try{u._ensureBottomLine()}catch(e){u.didError(e)}}),0)
else{for(n=(t=xe(l,c))===Se(l,c)&&t||c,r=Ce(l,c),(i=l.commonAncestorContainer).nodeType===R&&(i=i.parentNode);i&&i!==n;)(o=i.cloneNode(!1)).appendChild(r),r=o,i=i.parentNode;(a=this.createElement("div")).appendChild(r),Ze(s,a,c,this._config),e.preventDefault()}this.setSelection(l)}},Je=function(e){var t,n,r,i,o,a,s=e.clipboardData,l=this.getSelection(),c=this._root
if(!X&&!z&&s){for(n=(t=xe(l,c))===Se(l,c)&&t||c,l=l.cloneRange(),Te(l),Ee(l,n,n,c),r=l.cloneContents(),(i=l.commonAncestorContainer).nodeType===R&&(i=i.parentNode);i&&i!==n;)(o=i.cloneNode(!1)).appendChild(r),r=o,i=i.parentNode;(a=this.createElement("div")).appendChild(r),Ze(s,a,c,this._config),e.preventDefault()}},et=function(e){var t,n,r,i,o,a=e.clipboardData,s=a&&a.items,l=this.isShiftDown,c=!1,u=!1,d=null,h=this
if(X&&s){for(t=s.length;t--;)!l&&/^image\/.*/.test(s[t].type)&&(u=!0)
u||(s=null)}if(s){for(e.preventDefault(),t=s.length;t--;){if(r=(n=s[t]).type,!l&&"text/html"===r)return void n.getAsString((function(e){h.insertHTML(e,!0)}))
"text/plain"===r&&(d=n),!l&&/^image\/.*/.test(r)&&(u=!0)}u?(this.fireEvent("dragover",{dataTransfer:a,preventDefault:function(){c=!0}}),c&&this.fireEvent("drop",{dataTransfer:a})):d&&d.getAsString((function(e){h.insertPlainText(e,!0)}))}else{if(i=a&&a.types,!X&&i&&(ae.call(i,"text/html")>-1||!G&&ae.call(i,"text/plain")>-1&&ae.call(i,"text/rtf")<0))return e.preventDefault(),void(!l&&(o=a.getData("text/html"))?this.insertHTML(o,!0):((o=a.getData("text/plain"))||(o=a.getData("text/uri-list")))&&this.insertPlainText(o,!0))
this._awaitingPaste=!0
var f=this._doc.body,p=this.getSelection(),g=p.startContainer,m=p.startOffset,y=p.endContainer,b=p.endOffset,C=this.createElement("DIV",{contenteditable:"true",style:"position:fixed; overflow:hidden; top:0; right:100%; width:1px; height:1px;"})
f.appendChild(C),p.selectNodeContents(C),this.setSelection(p),setTimeout((function(){try{h._awaitingPaste=!1
for(var e,t,n="",r=C;C=r;)r=C.nextSibling,v(C),(e=C.firstChild)&&e===C.lastChild&&"DIV"===e.nodeName&&(C=e),n+=C.innerHTML
t=h.createRange(g,m,y,b),h.setSelection(t),n&&h.insertHTML(n,!0)}catch(e){h.didError(e)}}),0)}},tt=function(e){for(var t=e.dataTransfer.types,n=t.length,r=!1,i=!1;n--;)switch(t[n]){case"text/plain":r=!0
break
case"text/html":i=!0
break
default:return}(i||r)&&this.saveUndoState()},nt=M.prototype,rt=function(e,t,n){var r=n._doc,i=e?DOMPurify.sanitize(e,{ALLOW_UNKNOWN_PROTOCOLS:!0,WHOLE_DOCUMENT:!1,RETURN_DOM:!0,RETURN_DOM_FRAGMENT:!0}):null
return i?r.importNode(i,!0):r.createDocumentFragment()}
nt.setConfig=function(e){return(e=L({blockTag:"DIV",blockAttributes:null,tagAttributes:{blockquote:null,ul:null,ol:null,li:null,a:null},classNames:{colour:"colour",fontFamily:"font",fontSize:"size",highlight:"highlight"},leafNodeNames:ue,undo:{documentSizeThreshold:-1,undoLimit:-1},isInsertedHTMLSanitized:!0,isSetHTMLSanitized:!0,sanitizeToDOMFragment:"undefined"!=typeof DOMPurify&&DOMPurify.isSupported?rt:null,willCutCopy:null,allowedBlocks:[]},e,!0)).blockTag=e.blockTag.toUpperCase(),this._config=e,this},nt.createElement=function(e,t,n){return C(this._doc,e,t,n)},nt.createDefaultBlock=function(e){var t=this._config
return w(this.createElement(t.blockTag,t.blockAttributes,e),this._root)},nt.didError=function(e){console.log(e)},nt.getDocument=function(){return this._doc},nt.getRoot=function(){return this._root},nt.modifyDocument=function(e){var t=this._mutation
t&&(t.takeRecords().length&&this._docWasChanged(),t.disconnect()),this._ignoreAllChanges=!0,e(),this._ignoreAllChanges=!1,t&&(t.observe(this._root,{childList:!0,attributes:!0,characterData:!0,subtree:!0}),this._ignoreChange=!1)}
var it={pathChange:1,select:1,input:1,undoStateChange:1}
nt.fireEvent=function(e,t){var n,r,i,o=this._events[e]
if(/^(?:focus|blur)/.test(e))if(n=this._root===this._doc.activeElement,"focus"===e){if(!n||this._isFocused)return this
this._isFocused=!0}else{if(n||!this._isFocused)return this
this._isFocused=!1}if(o)for(t||(t={}),t.type!==e&&(t.type=e),r=(o=o.slice()).length;r--;){i=o[r]
try{i.handleEvent?i.handleEvent(t):i.call(this,t)}catch(t){t.details="Squire: fireEvent error. Event type: "+e,this.didError(t)}}return this},nt.destroy=function(){var e,t=this._events
for(e in t)this.removeEventListener(e)
this._mutation&&this._mutation.disconnect(),delete this._root.__squire__,this._undoIndex=-1,this._undoStack=[],this._undoStackLength=0},nt.handleEvent=function(e){this.fireEvent(e.type,e)},nt.addEventListener=function(e,t){var n=this._events[e],r=this._root
return t?(n||(n=this._events[e]=[],it[e]||("selectionchange"===e&&(r=this._doc),r.addEventListener(e,this,!0))),n.push(t),this):(this.didError({name:"Squire: addEventListener with null or undefined fn",message:"Event type: "+e}),this)},nt.removeEventListener=function(e,t){var n,r=this._events[e],i=this._root
if(r){if(t)for(n=r.length;n--;)r[n]===t&&r.splice(n,1)
else r.length=0
r.length||(delete this._events[e],it[e]||("selectionchange"===e&&(i=this._doc),i.removeEventListener(e,this,!0)))}return this},nt.createRange=function(e,t,n,r){if(e instanceof this._win.Range)return e.cloneRange()
var i=this._doc.createRange()
return i.setStart(e,t),n?i.setEnd(n,r):i.setEnd(e,t),i},nt.getCursorPosition=function(e){if(!e&&!(e=this.getSelection())||!e.getBoundingClientRect)return null
var t,n,r=e.getBoundingClientRect()
return r&&!r.top&&(this._ignoreChange=!0,(t=this._doc.createElement("SPAN")).textContent=U,ye(e,t),r=t.getBoundingClientRect(),(n=t.parentNode).removeChild(t),E(n,e)),r},nt._moveCursorTo=function(e){var t=this._root,n=this.createRange(t,e?0:t.childNodes.length)
return Te(n),this.setSelection(n),this},nt.moveCursorToStart=function(){return this._moveCursorTo(!0)},nt.moveCursorToEnd=function(){return this._moveCursorTo(!1)}
var ot=function(e){return e._win.getSelection()||null}
nt.setSelection=function(e){if(e)if(this._lastSelection=e,this._isFocused)if(j&&!this._restoreSelection)A.call(this),this.blur(),this.focus()
else{z&&this._win.focus()
var t=ot(this)
t&&(t.removeAllRanges(),t.addRange(e))}else A.call(this)
return this},nt.getSelection=function(){var e,t,n,r,o=ot(this),a=this._root
return this._isFocused&&o&&o.rangeCount&&(t=(e=o.getRangeAt(0).cloneRange()).startContainer,n=e.endContainer,t&&i(t)&&e.setStartBefore(t),n&&i(n)&&e.setEndBefore(n)),e&&g(a,e.commonAncestorContainer)?this._lastSelection=e:g((r=(e=this._lastSelection).commonAncestorContainer).ownerDocument,r)||(e=null),e||(e=this.createRange(a.firstChild,0)),e},nt.getSelectedText=function(){var e=this.getSelection()
if(!e||e.collapsed)return""
var t,n=new r(e.commonAncestorContainer,4|F,(function(t){return _e(e,t,!0)})),i=e.startContainer,o=e.endContainer,s=n.currentNode=i,l="",c=!1
for(n.filter(s)||(s=n.nextNode());s;)s.nodeType===R?(t=s.data)&&/\S/.test(t)&&(s===o&&(t=t.slice(0,e.endOffset)),s===i&&(t=t.slice(e.startOffset)),l+=t,c=!0):("BR"===s.nodeName||c&&!a(s))&&(l+="\n",c=!1),s=n.nextNode()
return l},nt.getPath=function(){return this._path}
var at=function(e,t){for(var n,i,o,s=new r(e,4);i=s.nextNode();)for(;(o=i.data.indexOf(U))>-1&&(!t||i.parentNode!==t);){if(1===i.length){do{(n=i.parentNode).removeChild(i),i=n,s.currentNode=n}while(a(i)&&!m(i))
break}i.deleteData(o,1)}}
nt._didAddZWS=function(){this._hasZWS=!0},nt._removeZWS=function(){this._hasZWS&&(at(this._root),this._hasZWS=!1)},nt._updatePath=function(e,t){if(e){var n,r=e.startContainer,i=e.endContainer;(t||r!==this._lastAnchorNode||i!==this._lastFocusNode)&&(this._lastAnchorNode=r,this._lastFocusNode=i,n=r&&i?r===i?function e(t,n,r){var i,o,a,s,l,c=""
return t&&t!==n&&(c=e(t.parentNode,n,r),t.nodeType===I&&(c+=(c?">":"")+t.nodeName,(i=t.id)&&(c+="#"+i),(o=t.className.trim())&&((a=o.split(/\s\s*/)).sort(),c+=".",c+=a.join(".")),(s=t.dir)&&(c+="[dir="+s+"]"),a&&(l=r.classNames,ae.call(a,l.highlight)>-1&&(c+="[backgroundColor="+t.style.backgroundColor.replace(/ /g,"")+"]"),ae.call(a,l.colour)>-1&&(c+="[color="+t.style.color.replace(/ /g,"")+"]"),ae.call(a,l.fontFamily)>-1&&(c+="[fontFamily="+t.style.fontFamily.replace(/ /g,"")+"]"),ae.call(a,l.fontSize)>-1&&(c+="[fontSize="+t.style.fontSize+"]")))),c}(i,this._root,this._config):"(selection)":"",this._path!==n&&(this._path=n,this.fireEvent("pathChange",{path:n}))),this.fireEvent(e.collapsed?"cursor":"select",{range:e})}},nt._updatePathOnEvent=function(e){var t=this
t._isFocused&&!t._willUpdatePath&&(t._willUpdatePath=!0,setTimeout((function(){t._willUpdatePath=!1,t._updatePath(t.getSelection())}),0))},nt.focus=function(){if(Q){try{this._root.setActive()}catch(e){}this.fireEvent("focus")}else this._root.focus()
return this},nt.blur=function(){return this._root.blur(),Q&&this.fireEvent("blur"),this}
var st="squire-selection-end"
nt._saveRangeToBookmark=function(e){var t,n=this.createElement("INPUT",{id:"squire-selection-start",type:"hidden"}),r=this.createElement("INPUT",{id:st,type:"hidden"})
ye(e,n),e.collapse(!1),ye(e,r),2&n.compareDocumentPosition(r)&&(n.id=st,r.id="squire-selection-start",t=n,n=r,r=t),e.setStartAfter(n),e.setEndBefore(r)},nt._getRangeAndRemoveBookmark=function(e){var t=this._root,n=t.querySelector("#squire-selection-start"),r=t.querySelector("#"+st)
if(n&&r){var i=n.parentNode,o=r.parentNode,a=ae.call(i.childNodes,n),s=ae.call(o.childNodes,r)
i===o&&(s-=1),v(n),v(r),e||(e=this._doc.createRange()),e.setStart(i,a),e.setEnd(o,s),E(i,e),i!==o&&E(o,e),e.collapsed&&(i=e.startContainer).nodeType===R&&((o=i.childNodes[e.startOffset])&&o.nodeType===R||(o=i.childNodes[e.startOffset-1]),o&&o.nodeType===R&&(e.setStart(o,0),e.collapse(!0)))}return e||null},nt._keyUpDetectChange=function(e){var t=e.keyCode
e.ctrlKey||e.metaKey||e.altKey||!(t<16||t>20)||!(t<33||t>45)||this._docWasChanged()},nt._docWasChanged=function(){if(ie&&(ge=new WeakMap),!this._ignoreAllChanges){if(re&&this._ignoreChange)return void(this._ignoreChange=!1)
this._isInUndoState&&(this._isInUndoState=!1,this.fireEvent("undoStateChange",{canUndo:!0,canRedo:!1})),this.fireEvent("input")}},nt._recordUndoState=function(e,t){if(!this._isInUndoState||t){var n,r=this._undoIndex,i=this._undoStack,o=this._config.undo,a=o.documentSizeThreshold,s=o.undoLimit
t||(r+=1),r<this._undoStackLength&&(i.length=this._undoStackLength=r),e&&this._saveRangeToBookmark(e),n=this._getHTML(),a>-1&&2*n.length>a&&s>-1&&r>s&&(i.splice(0,r-s),r=s,this._undoStackLength=s),i[r]=n,this._undoIndex=r,this._undoStackLength+=1,this._isInUndoState=!0}},nt.saveUndoState=function(e){return e===n&&(e=this.getSelection()),this._recordUndoState(e,this._isInUndoState),this._getRangeAndRemoveBookmark(e),this},nt.undo=function(){if(0!==this._undoIndex||!this._isInUndoState){this._recordUndoState(this.getSelection(),!1),this._undoIndex-=1,this._setHTML(this._undoStack[this._undoIndex])
var e=this._getRangeAndRemoveBookmark()
e&&this.setSelection(e),this._isInUndoState=!0,this.fireEvent("undoStateChange",{canUndo:0!==this._undoIndex,canRedo:!0}),this.fireEvent("input")}return this},nt.redo=function(){var e=this._undoIndex,t=this._undoStackLength
if(e+1<t&&this._isInUndoState){this._undoIndex+=1,this._setHTML(this._undoStack[this._undoIndex])
var n=this._getRangeAndRemoveBookmark()
n&&this.setSelection(n),this.fireEvent("undoStateChange",{canUndo:!0,canRedo:e+2<t}),this.fireEvent("input")}return this},nt.hasFormat=function(e,t,n){if(e=e.toUpperCase(),t||(t={}),!n&&!(n=this.getSelection()))return!1
!n.collapsed&&n.startContainer.nodeType===R&&n.startOffset===n.startContainer.length&&n.startContainer.nextSibling&&n.setStartBefore(n.startContainer.nextSibling),!n.collapsed&&n.endContainer.nodeType===R&&0===n.endOffset&&n.endContainer.previousSibling&&n.setEndAfter(n.endContainer.previousSibling)
var i,o,a=this._root,s=n.commonAncestorContainer
if(p(s,a,e,t))return!0
if(s.nodeType===R)return!1
i=new r(s,4,(function(e){return _e(n,e,!0)}))
for(var l=!1;o=i.nextNode();){if(!p(o,a,e,t))return!1
l=!0}return l},nt.getFontInfo=function(e){var t,r,i,o={color:n,backgroundColor:n,family:n,size:n},a=0
if(!e&&!(e=this.getSelection()))return o
if(t=e.commonAncestorContainer,e.collapsed||t.nodeType===R)for(t.nodeType===R&&(t=t.parentNode);a<4&&t;)(r=t.style)&&(!o.color&&(i=r.color)&&(o.color=i,a+=1),!o.backgroundColor&&(i=r.backgroundColor)&&(o.backgroundColor=i,a+=1),!o.family&&(i=r.fontFamily)&&(o.family=i,a+=1),!o.size&&(i=r.fontSize)&&(o.size=i,a+=1)),t=t.parentNode
return o},nt._addFormat=function(e,t,n){var i,o,s,l,c,u,d,h,f=this._root
if(n.collapsed){for(i=w(this.createElement(e,t),f),ye(n,i),n.setStart(i.firstChild,i.firstChild.length),n.collapse(!0),h=i;a(h);)h=h.parentNode
at(h,i)}else{if(o=new r(n.commonAncestorContainer,4|F,(function(e){return(e.nodeType===R||"BR"===e.nodeName||"IMG"===e.nodeName)&&_e(n,e,!0)})),s=n.startContainer,c=n.startOffset,l=n.endContainer,u=n.endOffset,o.currentNode=s,o.filter(s)||(s=o.nextNode(),c=0),!s)return n
do{!p(d=o.currentNode,f,e,t)&&(d===l&&d.length>u&&d.splitText(u),d===s&&c&&(d=d.splitText(c),l===s&&(l=d,u-=c),s=d,c=0),y(d,i=this.createElement(e,t)),i.appendChild(d))}while(o.nextNode())
l.nodeType!==R&&(d.nodeType===R?(l=d,u=d.length):(l=d.parentNode,u=1)),n=this.createRange(s,c,l,u)}return n},nt._removeFormat=function(e,t,n,r){this._saveRangeToBookmark(n)
var i,o=this._doc
n.collapsed&&(te?(i=o.createTextNode(U),this._didAddZWS()):i=o.createTextNode(""),ye(n,i))
for(var s=n.commonAncestorContainer;a(s);)s=s.parentNode
var l=n.startContainer,c=n.startOffset,u=n.endContainer,d=n.endOffset,h=[],p=Array.prototype.filter.call(s.getElementsByTagName(e),(function(r){return _e(n,r,!0)&&f(r,e,t)}))
return r||p.forEach((function(e){!function e(t,r){if(!_e(n,t,!1)){var i,o,a=t.nodeType===R
if(!_e(n,t,!0))return void("INPUT"===t.nodeName||a&&!t.data||h.push([r,t]))
if(a)t===u&&d!==t.length&&h.push([r,t.splitText(d)]),t===l&&c&&(t.splitText(c),h.push([r,t]))
else for(i=t.firstChild;i;i=o)o=i.nextSibling,e(i,r)}}(e,e)})),h.forEach((function(e){var t=e[0].cloneNode(!1),n=e[1]
y(n,t),t.appendChild(n)})),p.forEach((function(e){y(e,b(e))})),this._getRangeAndRemoveBookmark(n),i&&n.collapse(!1),E(s,n),n},nt.changeFormat=function(e,t,n,r){return n||(n=this.getSelection())?(this.saveUndoState(n),t&&(n=this._removeFormat(t.tag.toUpperCase(),t.attributes||{},n,r)),e&&(n=this._addFormat(e.tag.toUpperCase(),e.attributes||{},n)),this.setSelection(n),this._updatePath(n,!0),re||this._docWasChanged(),this):this}
var lt={DT:"DD",DD:"DT",LI:"LI",PRE:"PRE"},ct=function(e,t,n,r){var i=lt[t.nodeName],o=null,a=T(n,r,t.parentNode,e._root),s=e._config
return i||(i=s.blockTag,o=s.blockAttributes),f(a,i,o)||(t=C(a.ownerDocument,i,o),a.dir&&(t.dir=a.dir),y(a,t),t.appendChild(b(a)),a=t),a}
nt.forEachBlock=function(e,t,n){if(!n&&!(n=this.getSelection()))return this
t&&this.saveUndoState(n)
var r=this._root,i=xe(n,r),o=Se(n,r)
if(i&&o)do{if(e(i)||i===o)break}while(i=d(i,r))
return t&&(this.setSelection(n),this._updatePath(n,!0),re||this._docWasChanged()),this},nt.modifyBlocks=function(e,t){if(!t&&!(t=this.getSelection()))return this
this._recordUndoState(t,this._isInUndoState)
var n,r=this._root
return Me(t,r),Ee(t,r,r,r),n=be(t,r,r),ye(t,e.call(this,n)),t.endOffset<t.endContainer.childNodes.length&&N(t.endContainer.childNodes[t.endOffset],r),N(t.startContainer.childNodes[t.startOffset],r),this._getRangeAndRemoveBookmark(t),this.setSelection(t),this._updatePath(t,!0),re||this._docWasChanged(),this}
var ut=function(e){var t=this._root,n=e.querySelectorAll("blockquote")
return Array.prototype.filter.call(n,(function(e){return!p(e.parentNode,t,"BLOCKQUOTE")})).forEach((function(e){y(e,b(e))})),e},dt=function(){return this.createDefaultBlock([this.createElement("INPUT",{id:"squire-selection-start",type:"hidden"}),this.createElement("INPUT",{id:st,type:"hidden"})])},ht=function(e,t,n){for(var r,i,o,a,s=c(t,e._root),l=e._config.tagAttributes,u=l[n.toLowerCase()],d=l.li;r=s.nextNode();)"LI"===r.parentNode.nodeName&&(r=r.parentNode,s.currentNode=r.lastChild),"LI"!==r.nodeName?(a=e.createElement("LI",d),r.dir&&(a.dir=r.dir),(o=r.previousSibling)&&o.nodeName===n?(o.appendChild(a),v(r)):y(r,e.createElement(n,u,[a])),a.appendChild(b(r)),s.currentNode=a):(i=(r=r.parentNode).nodeName)!==n&&/^[OU]L$/.test(i)&&y(r,e.createElement(n,u,[b(r)]))},ft=function(e,t){for(var n=e.commonAncestorContainer,r=e.startContainer,i=e.endContainer;n&&n!==t&&!/^[OU]L$/.test(n.nodeName);)n=n.parentNode
if(!n||n===t)return null
for(r===n&&(r=r.childNodes[e.startOffset]),i===n&&(i=i.childNodes[e.endOffset]);r&&r.parentNode!==n;)r=r.parentNode
for(;i&&i.parentNode!==n;)i=i.parentNode
return[n,r,i]}
nt.increaseListLevel=function(e){if(!e&&!(e=this.getSelection()))return this.focus()
var t=this._root,n=ft(e,t)
if(!n)return this.focus()
var r=n[0],i=n[1],o=n[2]
if(!i||i===r.firstChild)return this.focus()
this._recordUndoState(e,this._isInUndoState)
var a,s,l=r.nodeName,c=i.previousSibling
c.nodeName!==l&&(a=this._config.tagAttributes[l.toLowerCase()],c=this.createElement(l,a),r.insertBefore(c,i))
do{s=i===o?null:i.nextSibling,c.appendChild(i)}while(i=s)
return(s=c.nextSibling)&&N(s,t),this._getRangeAndRemoveBookmark(e),this.setSelection(e),this._updatePath(e,!0),re||this._docWasChanged(),this.focus()},nt.decreaseListLevel=function(e){if(!e&&!(e=this.getSelection()))return this.focus()
var t=this._root,n=ft(e,t)
if(!n)return this.focus()
var r=n[0],i=n[1],o=n[2]
i||(i=r.firstChild),o||(o=r.lastChild),this._recordUndoState(e,this._isInUndoState)
var a,s=r.parentNode,l=o.nextSibling?T(r,o.nextSibling,s,t):r.nextSibling
if(s!==t&&"LI"===s.nodeName){for(s=s.parentNode;l;)a=l.nextSibling,o.appendChild(l),l=a
l=r.parentNode.nextSibling}var c=!/^[OU]L$/.test(s.nodeName)
do{a=i===o?null:i.nextSibling,r.removeChild(i),c&&"LI"===i.nodeName&&(i=this.createDefaultBlock([b(i)])),s.insertBefore(i,l)}while(i=a)
return r.firstChild||v(r),l&&N(l,t),this._getRangeAndRemoveBookmark(e),this.setSelection(e),this._updatePath(e,!0),re||this._docWasChanged(),this.focus()},nt._ensureBottomLine=function(){var e=this._root,t=e.lastElementChild
t&&t.nodeName===this._config.blockTag&&s(t)||e.appendChild(this.createDefaultBlock())},nt.setKeyHandler=function(e,t){return this._keyHandlers[e]=t,this},nt._getHTML=function(){return this._root.innerHTML},nt._setHTML=function(e){var t=this._root,n=t
n.innerHTML=e
do{w(n,t)}while(n=d(n,t))
this._ignoreChange=!0},nt.getHTML=function(e){var t,n,r,i,o,a,s=[]
if(e&&(a=this.getSelection())&&this._saveRangeToBookmark(a),ee)for(n=t=this._root;n=d(n,t);)n.textContent||n.querySelector("BR")||(r=this.createElement("BR"),n.appendChild(r),s.push(r))
if(i=this._getHTML().replace(/\u200B/g,""),ee)for(o=s.length;o--;)v(s[o])
return a&&this._getRangeAndRemoveBookmark(a),i},nt.setHTML=function(e){var t,n,r,i=this._config,o=i.isSetHTMLSanitized?i.sanitizeToDOMFragment:null,a=this._root
"function"==typeof o?n=o(e,!1,this):((t=this.createElement("DIV")).innerHTML=e,(n=this._doc.createDocumentFragment()).appendChild(b(t))),Ke(n,i),Xe(n,a,!1),_(n,a)
for(var s=n;s=d(s,a);)w(s,a)
for(this._ignoreChange=!0;r=a.lastChild;)a.removeChild(r)
a.appendChild(n),w(a,a),this._undoIndex=-1,this._undoStack.length=0,this._undoStackLength=0,this._isInUndoState=!1
var l=this._getRangeAndRemoveBookmark()||this.createRange(a.firstChild,0)
return this.saveUndoState(l),this._lastSelection=l,A.call(this),this._updatePath(l,!0),this},nt.insertElement=function(e,t){if(t||(t=this.getSelection()),t.collapse(!0),a(e))ye(t,e),t.setStartAfter(e)
else{for(var n,r=this._root,i=xe(t,r)||r;i!==r&&!i.nextSibling;)i=i.parentNode
i!==r&&(n=T(i.parentNode,i.nextSibling,r,r)),n?r.insertBefore(e,n):(r.appendChild(e),n=this.createDefaultBlock(),r.appendChild(n)),t.setStart(n,0),t.setEnd(n,0),Te(t)}return this.focus(),this.setSelection(t),this._updatePath(t),re||this._docWasChanged(),this},nt.insertImage=function(e,t){var n=this.createElement("IMG",L({src:e},t,!0))
return this.insertElement(n),n},nt.linkRegExp=/\b((?:(?:ht|f)tps?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,}\/)(?:[^\s()<>]+|\([^\s()<>]+\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))|([\w\-.%+]+@(?:[\w\-]+\.)+[A-Z]{2,}\b)(?:\?[^&?\s]+=[^&?\s]+(?:&[^&?\s]+=[^&?\s]+)*)?/i
var pt=function(e,t,n){var i,o,a,s,l,c,u,d=e.ownerDocument,h=new r(e,4,(function(e){return!p(e,t,"A")})),f=n.linkRegExp,g=n._config.tagAttributes.a
if(f)for(;i=h.nextNode();)for(o=i.data,a=i.parentNode;s=f.exec(o);)c=(l=s.index)+s[0].length,l&&(u=d.createTextNode(o.slice(0,l)),a.insertBefore(u,i)),(u=n.createElement("A",L({href:s[1]?/^(?:ht|f)tps?:/i.test(s[1])?s[1]:"http://"+s[1]:"mailto:"+s[0]},g,!1))).textContent=o.slice(l,c),a.insertBefore(u,i),i.data=o=o.slice(c)}
nt.insertHTML=function(e,t){var n,r,i,o,a,s,l,c=this._config,u=c.isInsertedHTMLSanitized?c.sanitizeToDOMFragment:null,h=this.getSelection(),f=this._doc
"function"==typeof u?o=u(e,t,this):(t&&(n=e.indexOf("\x3c!--StartFragment--\x3e"),r=e.lastIndexOf("\x3c!--EndFragment--\x3e"),n>-1&&r>-1&&(e=e.slice(n+20,r))),/<\/td>((?!<\/tr>)[\s\S])*$/i.test(e)&&(e="<TR>"+e+"</TR>"),/<\/tr>((?!<\/table>)[\s\S])*$/i.test(e)&&(e="<TABLE>"+e+"</TABLE>"),(i=this.createElement("DIV")).innerHTML=e,(o=f.createDocumentFragment()).appendChild(b(i))),this.saveUndoState(h)
try{for(a=this._root,s=o,l={fragment:o,preventDefault:function(){this.defaultPrevented=!0},defaultPrevented:!1},pt(o,o,this),Ke(o,c),Xe(o,a,!1),Ge(o),o.normalize();s=d(s,o);)w(s,a)
t&&this.fireEvent("willPaste",l),l.defaultPrevented||(we(h,l.fragment,a),re||this._docWasChanged(),h.collapse(!1),this._ensureBottomLine()),this.setSelection(h),this._updatePath(h,!0),t&&this.focus()}catch(e){this.didError(e)}return this}
var gt=function(e){return e.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")}
nt.insertPlainText=function(e,t){var n=this.getSelection()
if(n.collapsed&&p(n.startContainer,this._root,"PRE")){var r,i,o=n.startContainer,a=n.startOffset
return o&&o.nodeType===R||(r=this._doc.createTextNode(""),o.insertBefore(r,o.childNodes[a]),o=r,a=0),i={text:e,preventDefault:function(){this.defaultPrevented=!0},defaultPrevented:!1},t&&this.fireEvent("willPaste",i),i.defaultPrevented||(e=i.text,o.insertData(a,e),n.setStart(o,a+e.length),n.collapse(!0)),this.setSelection(n),this}var s,l,c,u,d=e.split("\n"),h=this._config,f=h.blockTag,g=h.blockAttributes,m="</"+f+">",v="<"+f
for(s in g)v+=" "+s+'="'+gt(g[s])+'"'
for(v+=">",l=0,c=d.length;l<c;l+=1)u=d[l],u=gt(u).replace(/ (?= )/g,"&nbsp;"),d[l]=v+(u||"<BR>")+m
return this.insertHTML(d.join(""),t)}
var mt=function(e,t,n){return function(){return this[e](t,n),this.focus()}}
nt.addStyles=function(e){if(e){var t=this._doc.documentElement.firstChild,n=this.createElement("STYLE",{type:"text/css"})
n.appendChild(this._doc.createTextNode(e)),t.appendChild(n)}return this},nt.bold=mt("changeFormat",{tag:"B"}),nt.italic=mt("changeFormat",{tag:"I"}),nt.underline=mt("changeFormat",{tag:"U"}),nt.strikethrough=mt("changeFormat",{tag:"S"}),nt.subscript=mt("changeFormat",{tag:"SUB"},{tag:"SUP"}),nt.superscript=mt("changeFormat",{tag:"SUP"},{tag:"SUB"}),nt.removeBold=mt("changeFormat",null,{tag:"B"}),nt.removeItalic=mt("changeFormat",null,{tag:"I"}),nt.removeUnderline=mt("changeFormat",null,{tag:"U"}),nt.removeStrikethrough=mt("changeFormat",null,{tag:"S"}),nt.removeSubscript=mt("changeFormat",null,{tag:"SUB"}),nt.removeSuperscript=mt("changeFormat",null,{tag:"SUP"}),nt.makeLink=function(e,t){var n=this.getSelection()
if(n.collapsed){var r=e.indexOf(":")+1
if(r)for(;"/"===e[r];)r+=1
ye(n,this._doc.createTextNode(e.slice(r)))}return t=L(L({href:e},t,!0),this._config.tagAttributes.a,!1),this.changeFormat({tag:"A",attributes:t},{tag:"A"},n),this.focus()},nt.removeLink=function(){return this.changeFormat(null,{tag:"A"},this.getSelection(),!0),this.focus()},nt.setFontFace=function(e){var t=this._config.classNames.fontFamily
return this.changeFormat(e?{tag:"SPAN",attributes:{class:t,style:"font-family: "+e+", sans-serif;"}}:null,{tag:"SPAN",attributes:{class:t}}),this.focus()},nt.setFontSize=function(e){var t=this._config.classNames.fontSize
return this.changeFormat(e?{tag:"SPAN",attributes:{class:t,style:"font-size: "+("number"==typeof e?e+"px":e)}}:null,{tag:"SPAN",attributes:{class:t}}),this.focus()},nt.setTextColour=function(e){var t=this._config.classNames.colour
return this.changeFormat(e?{tag:"SPAN",attributes:{class:t,style:"color:"+e}}:null,{tag:"SPAN",attributes:{class:t}}),this.focus()},nt.setHighlightColour=function(e){var t=this._config.classNames.highlight
return this.changeFormat(e?{tag:"SPAN",attributes:{class:t,style:"background-color:"+e}}:e,{tag:"SPAN",attributes:{class:t}}),this.focus()},nt.setTextAlignment=function(e){return this.forEachBlock((function(t){var n=t.className.split(/\s+/).filter((function(e){return!!e&&!/^align/.test(e)})).join(" ")
e?(t.className=n+" align-"+e,t.style.textAlign=e):(t.className=n,t.style.textAlign="")}),!0),this.focus()},nt.setTextDirection=function(e){return this.forEachBlock((function(t){e?t.dir=e:t.removeAttribute("dir")}),!0),this.focus()}
var vt=function(e){for(var t,n=this._root,i=this._doc,o=i.createDocumentFragment(),a=c(e,n);t=a.nextNode();){var s,l,u=t.querySelectorAll("BR"),d=[],h=u.length
for(s=0;s<h;s+=1)d[s]=Ye(u[s],!1)
for(;h--;)l=u[h],d[h]?y(l,i.createTextNode("\n")):v(l)
for(h=(u=t.querySelectorAll("CODE")).length;h--;)v(u[h])
o.childNodes.length&&o.appendChild(i.createTextNode("\n")),o.appendChild(b(t))}for(a=new r(o,4);t=a.nextNode();)t.data=t.data.replace(/ /g," ")
return o.normalize(),w(this.createElement("PRE",this._config.tagAttributes.pre,[o]),n)},yt=function(e){for(var t,n,i,o,a,s,l=this._doc,c=this._root,u=e.querySelectorAll("PRE"),d=u.length;d--;){for(n=new r(t=u[d],4);i=n.nextNode();){for(o=(o=i.data).replace(/ (?= )/g," "),a=l.createDocumentFragment();(s=o.indexOf("\n"))>-1;)a.appendChild(l.createTextNode(o.slice(0,s))),a.appendChild(l.createElement("BR")),o=o.slice(s+1)
i.parentNode.insertBefore(a,i),i.data=o}_(t,c),y(t,b(t))}return e}
nt.code=function(){var e=this.getSelection()
return e.collapsed||l(e.commonAncestorContainer)?this.modifyBlocks(vt,e):this.changeFormat({tag:"CODE",attributes:this._config.tagAttributes.code},null,e),this.focus()},nt.removeCode=function(){var e=this.getSelection()
return p(e.commonAncestorContainer,this._root,"PRE")?this.modifyBlocks(yt,e):this.changeFormat(null,{tag:"CODE"},e),this.focus()},nt.toggleCode=function(){return this.hasFormat("PRE")||this.hasFormat("CODE")?this.removeCode():this.code(),this},nt.removeAllFormatting=function(e){if(!e&&!(e=this.getSelection())||e.collapsed)return this
for(var t=this._root,n=e.commonAncestorContainer;n&&!s(n);)n=n.parentNode
if(n||(Me(e,t),n=t),n.nodeType===R)return this
this.saveUndoState(e),Ee(e,n,n,t)
for(var r,i,o=n.ownerDocument,a=e.startContainer,l=e.startOffset,c=e.endContainer,u=e.endOffset,d=o.createDocumentFragment(),h=o.createDocumentFragment(),f=T(c,u,n,t),p=T(a,l,n,t);p!==f;)r=p.nextSibling,d.appendChild(p),p=r
return D(this,d,h),h.normalize(),p=h.firstChild,r=h.lastChild,i=n.childNodes,p?(n.insertBefore(h,f),l=ae.call(i,p),u=ae.call(i,r)+1):u=l=ae.call(i,f),e.setStart(n,l),e.setEnd(n,u),E(n,e),Te(e),this.setSelection(e),this._updatePath(e,!0),this.focus()},nt.increaseQuoteLevel=mt("modifyBlocks",(function(e){return this.createElement("BLOCKQUOTE",this._config.tagAttributes.blockquote,[e])})),nt.decreaseQuoteLevel=mt("modifyBlocks",ut),nt.makeUnorderedList=mt("modifyBlocks",(function(e){return ht(this,e,"UL"),e})),nt.makeOrderedList=mt("modifyBlocks",(function(e){return ht(this,e,"OL"),e})),nt.removeList=mt("modifyBlocks",(function(e){var t,n,r,i,o,a=e.querySelectorAll("UL, OL"),l=e.querySelectorAll("LI"),c=this._root
for(t=0,n=a.length;t<n;t+=1)_(i=b(r=a[t]),c),y(r,i)
for(t=0,n=l.length;t<n;t+=1)s(o=l[t])?y(o,this.createDefaultBlock([b(o)])):(_(o,c),y(o,b(o)))
return e})),M.isInline=a,M.isBlock=s,M.isContainer=l,M.getBlockWalker=c,M.getPreviousBlock=u,M.getNextBlock=d,M.areAlike=h,M.hasTagAttributes=f,M.getNearest=p,M.isOrContains=g,M.detach=v,M.replaceWith=y,M.empty=b,M.getNodeBefore=me,M.getNodeAfter=ve,M.insertNodeInRange=ye,M.extractContentsOfRange=be,M.deleteContentsOfRange=Ce,M.insertTreeFragmentIntoRange=we,M.isNodeContainedInRange=_e,M.moveRangeBoundariesDownTree=Te,M.moveRangeBoundariesUpTree=Ee,M.getStartBlockOfRange=xe,M.getEndBlockOfRange=Se,M.contentWalker=Ne,M.rangeDoesStartAtBlockBoundary=ke,M.rangeDoesEndAtBlockBoundary=Le,M.expandRangeToBlockBoundaries=Me,M.onPaste=et,M.addLinks=pt,M.splitBlock=ct,M.startSelectionId="squire-selection-start",M.endSelectionId=st,e.exports=M}(document)},function(e,t,n){"use strict"
e.exports=function(e){return"boolean"==typeof e||e instanceof Boolean}},function(e,t,n){"use strict";(function(e){var n=function(){if("undefined"!=typeof Map)return Map
function e(e,t){var n=-1
return e.some((function(e,r){return e[0]===t&&(n=r,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n]
return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t)
~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t)
~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null)
for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n]
e.call(t,i[1],i[0])}},t}()}(),r="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,i=void 0!==e&&e.Math===Math?e:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),o="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(i):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)},a=["top","right","bottom","left","width","height","size","weight"],s="undefined"!=typeof MutationObserver,l=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,i=0
function a(){n&&(n=!1,e()),r&&l()}function s(){o(a)}function l(){var e=Date.now()
if(n){if(e-i<2)return
r=!0}else n=!0,r=!1,setTimeout(s,20)
i=e}return l}(this.refresh.bind(this))}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e)
~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}))
return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){r&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),s?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){r&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t
a.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),c=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n]
Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},u=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||i},d=m(0,0,0,0)
function h(e){return parseFloat(e)||0}function f(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
return t.reduce((function(t,n){return t+h(e["border-"+n+"-width"])}),0)}var p="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof u(e).SVGGraphicsElement}:function(e){return e instanceof u(e).SVGElement&&"function"==typeof e.getBBox}
function g(e){return r?p(e)?function(e){var t=e.getBBox()
return m(0,0,t.width,t.height)}(e):function(e){var t=e.clientWidth,n=e.clientHeight
if(!t&&!n)return d
var r=u(e).getComputedStyle(e),i=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=e["padding-"+i]
t[i]=h(o)}return t}(r),o=i.left+i.right,a=i.top+i.bottom,s=h(r.width),l=h(r.height)
if("border-box"===r.boxSizing&&(Math.round(s+o)!==t&&(s-=f(r,"left","right")+o),Math.round(l+a)!==n&&(l-=f(r,"top","bottom")+a)),!function(e){return e===u(e).document.documentElement}(e)){var c=Math.round(s+o)-t,p=Math.round(l+a)-n
1!==Math.abs(c)&&(s-=c),1!==Math.abs(p)&&(l-=p)}return m(i.left,i.top,s,l)}(e):d}function m(e,t,n,r){return{x:e,y:t,width:n,height:r}}var v=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=m(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=g(this.target)
return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_
return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),y=function(e,t){var n,r,i,o,a,s,l,u=(r=(n=t).x,i=n.y,o=n.width,a=n.height,s="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,l=Object.create(s.prototype),c(l,{x:r,y:i,width:o,height:a,top:i,right:r+o,bottom:a+i,left:r}),l)
c(this,{target:e,contentRect:u})},b=function(){function e(e,t,r){if(this.activeObservations_=[],this.observations_=new n,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.")
this.callback_=e,this.controller_=t,this.callbackCtx_=r}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.")
if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof u(e).Element))throw new TypeError('parameter 1 is not of type "Element".')
var t=this.observations_
t.has(e)||(t.set(e,new v(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.")
if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof u(e).Element))throw new TypeError('parameter 1 is not of type "Element".')
var t=this.observations_
t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this
this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new y(e.target,e.broadcastRect())}))
this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),C="undefined"!=typeof WeakMap?new WeakMap:new n,w=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.")
if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.")
var n=l.getInstance(),r=new b(t,n,this)
C.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){w.prototype[e]=function(){var t
return(t=C.get(this))[e].apply(t,arguments)}}))
var _=void 0!==i.ResizeObserver?i.ResizeObserver:w
t.a=_}).call(this,n(59))},function(e,t,n){"use strict"
var r=n(7),i=n(27),o=n(9),a=n(54),s=n(21),l=n(30),c=n(26),u=/\s+/g
function d(){this.events=null,this.contexts=null}d.mixin=function(e){r(e.prototype,d.prototype)},d.prototype._getHandlerItem=function(e,t){var n={handler:e}
return t&&(n.context=t),n},d.prototype._safeEvent=function(e){var t,n=this.events
return n||(n=this.events={}),e&&((t=n[e])||(t=[],n[e]=t),n=t),n},d.prototype._safeContext=function(){var e=this.contexts
return e||(e=this.contexts=[]),e},d.prototype._indexOfContext=function(e){for(var t=this._safeContext(),n=0;t[n];){if(e===t[n][0])return n
n+=1}return-1},d.prototype._memorizeContext=function(e){var t,n
i(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1?t[n][1]+=1:t.push([e,1]))},d.prototype._forgetContext=function(e){var t,n
i(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1&&(t[n][1]-=1,t[n][1]<=0&&t.splice(n,1)))},d.prototype._bindEvent=function(e,t,n){var r=this._safeEvent(e)
this._memorizeContext(n),r.push(this._getHandlerItem(t,n))},d.prototype.on=function(e,t,n){var r=this
o(e)?(e=e.split(u),c(e,(function(e){r._bindEvent(e,t,n)}))):a(e)&&(n=t,c(e,(function(e,t){r.on(t,e,n)})))},d.prototype.once=function(e,t,n){var r=this
if(a(e))return n=t,void c(e,(function(e,t){r.once(t,e,n)}))
this.on(e,(function i(){t.apply(n,arguments),r.off(e,i,n)}),n)},d.prototype._spliceMatches=function(e,t){var n,r=0
if(s(e))for(n=e.length;r<n;r+=1)!0===t(e[r])&&(e.splice(r,1),n-=1,r-=1)},d.prototype._matchHandler=function(e){var t=this
return function(n){var r=e===n.handler
return r&&t._forgetContext(n.context),r}},d.prototype._matchContext=function(e){var t=this
return function(n){var r=e===n.context
return r&&t._forgetContext(n.context),r}},d.prototype._matchHandlerAndContext=function(e,t){var n=this
return function(r){var i=e===r.handler,o=t===r.context,a=i&&o
return a&&n._forgetContext(r.context),a}},d.prototype._offByEventName=function(e,t){var n=this,r=l(t),i=n._matchHandler(t)
e=e.split(u),c(e,(function(e){var t=n._safeEvent(e)
r?n._spliceMatches(t,i):(c(t,(function(e){n._forgetContext(e.context)})),n.events[e]=[])}))},d.prototype._offByHandler=function(e){var t=this,n=this._matchHandler(e)
c(this._safeEvent(),(function(e){t._spliceMatches(e,n)}))},d.prototype._offByObject=function(e,t){var n,r=this
this._indexOfContext(e)<0?c(e,(function(e,t){r.off(t,e)})):o(t)?(n=this._matchContext(e),r._spliceMatches(this._safeEvent(t),n)):l(t)?(n=this._matchHandlerAndContext(t,e),c(this._safeEvent(),(function(e){r._spliceMatches(e,n)}))):(n=this._matchContext(e),c(this._safeEvent(),(function(e){r._spliceMatches(e,n)})))},d.prototype.off=function(e,t){o(e)?this._offByEventName(e,t):arguments.length?l(e)?this._offByHandler(e):a(e)&&this._offByObject(e,t):(this.events={},this.contexts=[])},d.prototype.fire=function(e){this.invoke.apply(this,arguments)},d.prototype.invoke=function(e){var t,n,r,i
if(!this.hasListener(e))return!0
for(t=this._safeEvent(e),n=Array.prototype.slice.call(arguments,1),r=0;t[r];){if(!1===(i=t[r]).handler.apply(i.context,n))return!1
r+=1}return!0},d.prototype.hasListener=function(e){return this.getListenerLength(e)>0},d.prototype.getListenerLength=function(e){return this._safeEvent(e).length},e.exports=d},function(e,t){var n
n=function(){return this}()
try{n=n||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":s(window))&&(n=window)}e.exports=n},,,,,,function(e,t,n){"use strict"
n.r(t)
var r=n(10),i=n.n(r),o=n(27),a=n.n(o),s=n(33),l=n.n(s),c=n(7),u=n.n(c),d=n(3),h=n.n(d),f=n(5),p=n.n(f),g=n(6),m=n.n(g),v=n(22),y=n(28),b=n(11),C=n(56),w=n.n(C),_=n(15),T=n.n(_),E=/^(\s*)((\d+)([.)]\s(?:\[(?:x|\s)\]\s)?))(.*)/
function x(e,t,n,r){var i,o,a,s,l=n,c=r.getLine(e)
do{var u=E.exec(c)
if(i=u[1],o=u[4],a=u[5],(s=i.length)===t)r.replaceRange(""+i+l+o+a,{line:e,ch:0},{line:e,ch:c.length}),l+=1,e+=1
else{if(!(s>t))return e
e=x(e,s,1,r)}c=r.getLine(e)}while(E.test(c))
return e}function S(e,t){for(var n=e,r=t.getLine(e);E.test(r);)n-=1,r=t.getLine(n)
return e===n?n=-1:n+=1,n}T.a.commands.indentLessOrderedList=function(e){return e.getOption("disableInput")?T.a.Pass:(e.execCommand("indentLess"),e.execCommand("fixOrderedListNumber"),null)},T.a.commands.fixOrderedListNumber=function(e){if(e.getOption("disableInput")||e.state.isCursorInCodeBlock)return T.a.Pass
for(var t=e.listSelections(),n=0;n<t.length;n+=1){var r=S(t[n].head.line,e)
if(r>=0){var i=e.getLine(r),o=E.exec(i),a=o[1],s=o[3]
x(r,a.length,parseInt(s,10),e)}}return null},T.a.overlayMode=function(e,t,n){return{startState:function(){return{base:T.a.startState(e),overlay:T.a.startState(t),basePos:0,baseCur:null,overlayPos:0,overlayCur:null,streamSeen:null}},copyState:function(n){return{base:T.a.copyState(e,n.base),overlay:T.a.copyState(t,n.overlay),basePos:n.basePos,baseCur:null,overlayPos:n.overlayPos,overlayCur:null}},token:function(r,i){return(r!=i.streamSeen||Math.min(i.basePos,i.overlayPos)<r.start)&&(i.streamSeen=r,i.basePos=i.overlayPos=r.start),r.start==i.basePos&&(i.baseCur=e.token(r,i.base),i.basePos=r.pos),r.start==i.overlayPos&&(r.pos=r.start,i.overlayCur=t.token(r,i.overlay),i.overlayPos=r.pos),r.pos=Math.min(i.basePos,i.overlayPos),null==i.overlayCur?i.baseCur:null!=i.baseCur&&i.overlay.combineTokens||n&&null==i.overlay.combineTokens?i.baseCur+" "+i.overlayCur:i.overlayCur},indent:e.indent&&function(t,n){return e.indent(t.base,n)},electricChars:e.electricChars,innerMode:function(t){return{state:t.base,mode:e}},blankLine:function(n){e.blankLine&&e.blankLine(n.base),t.blankLine&&t.blankLine(n.overlay)}}}
var N=/^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]\s))(\s*)/,k=/^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/,L=/[*+-]\s/
function M(e,t){var n=t.line,r=0,i=0,o=N.exec(e.getLine(n)),a=o[1]
do{var s=n+(r+=1),l=e.getLine(s),c=N.exec(l)
if(c){var u=c[1],d=parseInt(o[3],10)+r-i,h=parseInt(c[3],10),f=h
if(a!==u||isNaN(h)){if(a.length>u.length)return
if(a.length<u.length&&1===r)return
i+=1}else d===h&&(f=h+1),d>h&&(f=d+1),e.replaceRange(l.replace(N,u+f+c[4]+c[5]),{line:s,ch:0},{line:s,ch:l.length})}}while(c)}function A(e){return O(e)&&e.anchor.ch===e.head.ch}function O(e){return e.anchor.line===e.head.line}function B(e,t,n,r){var i=e.getLine(n.line),o=e.getLine(n.line+r),a={anchor:t,head:n}
e.replaceRange(o,{line:n.line,ch:0},{line:n.line,ch:i.length},"+input"),e.replaceRange(i,{line:n.line+r,ch:0},{line:n.line+r,ch:o.length},"+input"),A(a)?e.setCursor({line:n.line+r,ch:n.ch}):e.setSelection({line:t.line+r,ch:t.ch},{line:n.line+r,ch:n.ch})}function D(e,t,n,r){var i,o=e.getRange({line:t.line,ch:0},{line:n.line,ch:e.getLine(n.line).length}),a=r>0?n:t,s=e.getLine(a.line+r)
i=r>0?t:n,e.replaceRange(s,{line:i.line,ch:0},{line:i.line,ch:e.getLine(i.line).length},"+input"),e.replaceRange(o,{line:t.line+r,ch:0},{line:n.line+r,ch:e.getLine(n.line+r).length},"+input"),e.setSelection({line:t.line+r,ch:t.ch},{line:n.line+r,ch:n.ch})}function I(e){e.state.placeholder&&(e.state.placeholder.parentNode.removeChild(e.state.placeholder),e.state.placeholder=null)}function R(e){I(e)
var t=e.state.placeholder=document.createElement("pre")
t.style.cssText="height: 0; overflow: visible",t.className="CodeMirror-placeholder"
var n=e.getOption("placeholder")
"string"==typeof n&&(n=document.createTextNode(n)),t.appendChild(n),e.display.lineSpace.insertBefore(t,e.display.lineSpace.firstChild)}function P(e){F(e)&&R(e)}function H(e){var t=e.getWrapperElement(),n=F(e)
t.className=t.className.replace(" CodeMirror-empty","")+(n?" CodeMirror-empty":""),n?R(e):I(e)}function F(e){return 1===e.lineCount()&&""===e.getLine(0)}function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}T.a.commands.indentOrderedList=function(e){if(e.getOption("disableInput"))return T.a.Pass
for(var t=e.listSelections(),n=0;n<t.length;n++){var r=t[n].head,i=e.getLine(r.line).substr(0,r.ch)
N.test(i)||e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertSoftTab")}e.execCommand("fixOrderedListNumber")},T.a.commands.newlineAndIndentContinueMarkdownList=function(e){if(e.getOption("disableInput")||e.state.isCursorInCodeBlock)return T.a.Pass
for(var t=e.listSelections(),n=[],r=0;r<t.length;r++){var i=t[r].head,o=e.getLine(i.line),a=N.exec(o),s=/^\s*$/.test(o.slice(0,i.ch))
if(!t[r].empty()||!a||s)return void e.execCommand("newlineAndIndent")
if(k.test(o))/>\s*$/.test(o)||e.replaceRange("",{line:i.line,ch:0},{line:i.line,ch:i.ch+1}),n[r]="\n"
else{var l=a[1],c=a[5],u=!(L.test(a[2])||a[2].indexOf(">")>=0),d=u?parseInt(a[3],10)+1+a[4]:a[2].replace("x"," ")
n[r]="\n"+l+d+c,u&&M(e,i)}}e.replaceSelections(n)},T.a.commands.replaceLineTextToUpper=function(e){if(e.getOption("disableInput"))return T.a.Pass
for(var t=e.listSelections(),n=0;n<t.length;n++){var r=t[n],i=r.anchor,o=r.head
if(O(r)&&o.line>0)B(e,i,o,-1)
else if(!A(r)){var a=i.line<o.line?i.line:o.line
a>0&&D(e,i.line===a?i:o,i.line===a?o:i,-1)}}},T.a.commands.replaceLineTextToLower=function(e){if(e.getOption("disableInput"))return T.a.Pass
for(var t=e.listSelections(),n=0;n<t.length;n++){var r=t[n],i=r.anchor,o=r.head,a=o.line===e.lastLine()
if(O(r)&&!a)B(e,i,o,1)
else if(!A(r)){var s=i.line<o.line?i.line:o.line,l=i.line===s?i:o,c=i.line===s?o:i
c.line<e.lastLine()&&D(e,l,c,1)}}},T.a.defineOption("placeholder","",(function(e,t,n){var r=n&&n!=T.a.Init
if(t&&!r)e.on("blur",P),e.on("change",H),e.on("swapDoc",H),H(e)
else if(!t&&r){e.off("blur",P),e.off("change",H),e.off("swapDoc",H),I(e)
var i=e.getWrapperElement()
i.className=i.className.replace(" CodeMirror-empty","")}t&&!e.hasFocus()&&P(e)}))
var W,q=function(){function e(e,t){void 0===t&&(t={}),this.editorContainerEl=e,this.cm=null,this._init(t)}var t=e.prototype
return t._init=function(e){var t=document.createElement("textarea")
this.editorContainerEl.appendChild(t),e=U({},e,{lineWrapping:!0,theme:"default",extraKeys:U({},e.extraKeys,{"Shift-Tab":"indentLess","Alt-Up":"replaceLineTextToUpper","Alt-Down":"replaceLineTextToLower"}),indentUnit:4,cursorScrollMargin:12,specialCharPlaceholder:function(){return document.createElement("span")}}),this.cm=T.a.fromTextArea(t,e)},t.getCurrentRange=function(){var e=this.cm.getCursor("from"),t=this.cm.getCursor("to")
return{from:e,to:t,collapsed:e.line===t.line&&e.ch===t.ch}},t.focus=function(){this.cm.focus()},t.blur=function(){this.cm.getInputField().blur()},t.remove=function(){this.cm.toTextArea()},t.setValue=function(e,t){void 0===t&&(t=!0),this.cm.setValue(e),t&&this.moveCursorToEnd(),this.cm.doc.clearHistory(),this.cm.refresh()},t.getValue=function(){return this.cm.getValue("\n")},t.getEditor=function(){return this.cm},t.reset=function(){this.setValue("")},t.getCaretPosition=function(){return this.cm.cursorCoords()},t.addWidget=function(e,t,n,r){r&&(e.ch+=r),this.cm.addWidget(e.end,t,!0,n)},t.replaceSelection=function(e,t){t&&this.cm.setSelection(t.from,t.to),this.cm.replaceSelection(e),this.focus()},t.replaceRelativeOffset=function(e,t,n){var r=this.cm.getCursor(),i={from:{line:r.line,ch:r.ch+t},to:{line:r.line,ch:r.ch+t+n}}
this.replaceSelection(e,i)},t.setHeight=function(e){var t=this.getWrapperElement()
h()(t,{height:e+"px"})},t.setMinHeight=function(e){var t=this.getWrapperElement()
h()(t,{minHeight:e+"px"})},t.setPlaceholder=function(e){e&&this.cm.setOption("placeholder",e)},t.getWrapperElement=function(){return this.cm.getWrapperElement()},t.getCursor=function(e){return this.cm.getCursor(e)},t.moveCursorToEnd=function(){var e=this.getEditor().getDoc(),t=e.lastLine()
e.setCursor(t,e.getLine(t).length)},t.moveCursorToStart=function(){var e=this.getEditor().getDoc(),t=e.firstLine()
e.setCursor(t,0)},t.scrollTop=function(e){return e&&this.cm.scrollTo(0,e),this.cm.getScrollInfo().top},t.getRange=function(){var e=this.cm.getCursor("from"),t=this.cm.getCursor("to")
return{start:{line:e.line,ch:e.ch},end:{line:t.line,ch:t.ch}}},t.on=function(e,t){this.cm.on(e,t)},t.off=function(e,t){this.cm.off(e,t)},e}(),j=["","","","CANCEL","","","HELP","","BACK_SPACE","TAB","","","CLEAR","ENTER","ENTER_SPECIAL","","","","","PAUSE","CAPS_LOCK","KANA","EISU","JUNJA","FINAL","HANJA","","ESCAPE","CONVERT","NONCONVERT","ACCEPT","MODECHANGE","SPACE","PAGE_UP","PAGE_DOWN","END","HOME","LEFT","UP","RIGHT","DOWN","SELECT","PRINT","EXECUTE","PRINTSCREEN","INSERT","DELETE","","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","AT","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","","","CONTEXT_MENU","","SLEEP","NUMPAD0","NUMPAD1","NUMPAD2","NUMPAD3","NUMPAD4","NUMPAD5","NUMPAD6","NUMPAD7","NUMPAD8","NUMPAD9","MULTIPLY","ADD","SEPARATOR","SUBTRACT","DECIMAL","DIVIDE","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","F13","F14","F15","F16","F17","F18","F19","F20","F21","F22","F23","F24","","","","","","","","","NUM_LOCK","SCROLL_LOCK","WIN_OEM_FJ_JISHO","WIN_OEM_FJ_MASSHOU","WIN_OEM_FJ_TOUROKU","WIN_OEM_FJ_LOYA","WIN_OEM_FJ_ROYA","","","","","","","","","","@","!",'"',"#","$","%","&","_","(",")","*","+","|","-","{","}","~","","","","","VOLUME_MUTE","VOLUME_DOWN","VOLUME_UP","","",";","=",",","-",".","/","`","","","","","","","","","","","","","","","","","","","","","","","","","","","[","\\","]","'","","META","ALTGR","","WIN_ICO_HELP","WIN_ICO_00","","WIN_ICO_CLEAR","","","WIN_OEM_RESET","WIN_OEM_JUMP","WIN_OEM_PA1","WIN_OEM_PA2","WIN_OEM_PA3","WIN_OEM_WSCTRL","WIN_OEM_CUSEL","WIN_OEM_ATTN","WIN_OEM_FINISH","WIN_OEM_COPY","WIN_OEM_AUTO","WIN_OEM_ENLW","WIN_OEM_BACKTAB","ATTN","CRSEL","EXSEL","EREOF","PLAY","ZOOM","","PA1","WIN_OEM_CLEAR",""],z=function(){function e(e){this._setSplitter(e)}var t=e.prototype
return t._setSplitter=function(e){var t=e?e.splitter:"+"
this._splitter=t},t.convert=function(e){var t=[]
e.shiftKey&&t.push("SHIFT"),e.ctrlKey&&t.push("CTRL"),e.metaKey&&t.push("META"),e.altKey&&t.push("ALT")
var n=this._getKeyCodeChar(e.keyCode)
return n&&t.push(n),t.join(this._splitter)},t._getKeyCodeChar=function(e){return j[e]},e.getSharedInstance=function(){return W||(W=new e),W},e.keyCode=function(e){return j.indexOf(e)},e}(),V=/^[ \t]*([-*]|[\d]+\.)( \[[ xX]])? /,K=/^[ \t]*([*-] |[\d]+\. )(\[[ xX]] )/,G=/^[ \t]*[-*] .*/,$=/^[ \t]*[\d]+\. \[[ xX]] .*/,Y=/([*-] |[\d]+\. )/,X=/([-*] |[\d]+\. )(\[[ xX]] )/,Z=/([-*]|[\d]+\.)( \[[ xX]])? /,Q=/([-*])( \[[ xX]]) /,J=/([\d])+\.( \[[ xX]])? /,ee=/^\|([-\s\w\d\t<>?!@#$%^&*()_=+\\/'";: \r[\]]*\|+)+/i,te=/^#+\s/,ne=/^ {0,3}(```|\||>)/,re=function(){function e(e){this.cm=e.getEditor(),this.doc=this.cm.getDoc(),this.toastMark=e.getToastMark(),this.name="list"}var t=e.prototype
return t._createSortedLineRange=function(e){var t=e.from.line>e.to.line,n={line:t?e.to.line:e.from.line,ch:0},r={line:t?e.from.line:e.to.line,ch:0}
return{start:n.line,end:r.line}},t._calculateOrdinalNumber=function(e){for(var t=1,n=e-1;n>=0;n-=1){var r=this._getListDepth(n)
if(1===r&&J.exec(this.doc.getLine(n))){t=parseInt(RegExp.$1,10)+1
break}if(0===r)break}return t},t._isListLine=function(e){return!!V.exec(this.doc.getLine(e))},t._isCanBeList=function(e){var t=this.doc.getLine(e)
return!ne.test(t)&&!ee.test(t)&&!te.test(t)},t._getChangeFn=function(e){var t,n=this
switch(e){case"ol":case"ul":t=function(t){return n._changeToList(t,e)}
break
case"task":t=function(e){return n._changeToTask(e)}}return t},t.changeSyntax=function(e,t){for(var n=[],r=this._createSortedLineRange(e),i=r.start,o=r.end,a=this._getChangeFn(t),s=i;s<=o&&this._isCanBeList(s);s+=1)this._isListLine(s)||n.push(s),a(s)
this._insertBlankLineForNewList(n),this.cm.focus()},t._replaceLineText=function(e,t){this.doc.replaceRange(e,{line:t,ch:0})},t._changeToList=function(e,t){var n=this
this._isListLine(e)?this._changeSameDepthList(e,"ol"===t?function(e,t){n._replaceListTypeToOL(e,t)}:function(e){n._replaceListTypeToUL(e)}):this._replaceLineText("ol"===t?this._calculateOrdinalNumber(e)+". ":"* ",e)},t._changeToTask=function(e){K.exec(this.doc.getLine(e))?this._replaceLineTextByRegexp(e,X,"$1"):this._isListLine(e)?this._replaceLineTextByRegexp(e,Y,"$1[ ] "):this._replaceLineText("* [ ] ",e)},t._getListDepth=function(e){var t=0
if(this.doc.getLine(e))for(var n=this.toastMark.findFirstNodeAtLine(e+1);n&&"document"!==n.type;)"list"===n.type&&(t+=1),n=n.parent
return t},t._findSameDepthList=function(e,t,n){for(var r,i=this.doc.lineCount(),o=[],a=e;n?a<i-1:a>0;)if(a=n?a+1:a-1,(r=this._getListDepth(a))===t)o.push(a)
else if(r<t)break
return o},t._changeSameDepthList=function(e,t){var n=this._getListDepth(e),r=this._findSameDepthList(e,n,!1).reverse(),i=this._findSameDepthList(e,n,!0)
r.concat([e]).concat(i).forEach((function(e,n){t(e,n+1)}))},t._replaceLineTextByRegexp=function(e,t,n){var r=this.doc.getLine(e),i={line:e,ch:0},o={line:e,ch:r.length}
r=r.replace(t,n),this.doc.replaceRange(r,i,o)},t._replaceListTypeToUL=function(e){var t=this.doc.getLine(e)
Q.exec(t)?this._replaceLineTextByRegexp(e,Q,"$1 "):J.exec(t)&&this._replaceLineTextByRegexp(e,J,"* ")},t._replaceListTypeToOL=function(e,t){var n=this.doc.getLine(e)
G.exec(n)||$.exec(n)?this._replaceLineTextByRegexp(e,Z,t+". "):J.exec(n)&&parseInt(RegExp.$1,10)!==t&&this._replaceLineTextByRegexp(e,J,t+". ")},t._insertBlankLineForNewList=function(e){var t=e.length
if(t){var n=e[0],r=e[t-1]
this._isNotBlankNotListLine(r+1)&&this.doc.replaceRange("\n",{line:r,ch:this.doc.getLine(r).length}),n>0&&this._isNotBlankNotListLine(n-1)&&this.doc.replaceRange("\n",{line:n,ch:0})}},t._isNotBlankNotListLine=function(e){return!!this.doc.getLine(e)&&!this._isListLine(e)},e}(),ie=function(){function e(e){this._managers={},this._editor=e}var t=e.prototype
return t.addManager=function(e,t){t||(t=e,e=null)
var n=new t(this._editor)
this._managers[e||n.name]=n},t.getManager=function(e){return this._managers[e]},t.removeManager=function(e){var t=this.getManager(e)
t&&(t.destroy&&t.destroy(),delete this._managers[e])},e}(),oe=function(){function e(e,t){this._mde=e,this.setRange(t||e.getRange())}var t=e.prototype
return t._setStart=function(e){this._start=e},t._setEnd=function(e){this._end=e},t.setRange=function(e){this._setStart(e.start),this._setEnd(e.end)},t.setEndBeforeRange=function(e){this._setEnd(e.start)},t.expandStartOffset=function(){var e=this._start
0!==e.ch&&(e.ch-=1)},t.expandEndOffset=function(){var e=this._end
e.ch<this._mde.getEditor().getDoc().getLine(e.line).length&&(e.ch+=1)},t.getTextContent=function(){return this._mde.getEditor().getRange(this._start,this._end)},t.replaceContent=function(e){this._mde.getEditor().replaceRange(e,this._start,this._end,"+input")},t.deleteContent=function(){this._mde.getEditor().replaceRange("",this._start,this._end,"+delete")},t.peekStartBeforeOffset=function(e){var t={line:this._start.line,ch:Math.max(this._start.ch-e,0)}
return this._mde.getEditor().getRange(t,this._start)},e}(),ae=n(4),se=n(30),le=n.n(se)
function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ue,de=(ue={DELIM:"delimiter",META:"meta",TEXT:"marked-text",THEMATIC_BREAK:"thematic-break",CODE_BLOCK:"code-block",TABLE:"table",HTML:"html"},i()(ue,(function(e,t){ue[t]=fe(e)})),ue),he={strong:2,emph:1,strike:2}
function fe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return t.map((function(e){return"tui-md-"+e})).join(" ")}function pe(e,t,n){return{start:e,end:t,className:n}}function ge(e,t,n){var r=e.type
return{marks:[pe(t,n,fe(""+r)),pe(t,Object(ae.a)(t,he[r]),de.DELIM),pe(Object(ae.a)(n,-he[r]),n,de.DELIM)]}}function me(e,t,n,r){return[pe(e,t,fe("link")),pe(n,Object(ae.l)(t,r),fe("link-desc")),pe(Object(ae.l)(e,n.ch+1),Object(ae.l)(t,r-1),de.TEXT),pe(Object(ae.l)(t,r),t,fe("link-url")),pe(Object(ae.l)(t,r+1),Object(ae.a)(t,-1),de.TEXT)]}function ve(e,t){for(var n=[];e;){var r=e.type
"paragraph"!==r&&"codeBlock"!==r||n.push(pe({line:Object(ae.f)(e)-1,ch:Object(ae.e)(e)-1},{line:Object(ae.d)(e)-1,ch:Object(ae.c)(e)},t)),e=e.next}return n}var ye={heading:function(e,t,n){var r=e.level,i=e.headingType,o=[pe(t,n,fe("heading","heading"+r))]
return"atx"===i?o.push(pe(t,Object(ae.a)(t,r),de.DELIM)):o.push(pe(Object(ae.l)(n,0),n,de.DELIM+" setext")),{marks:o}},strong:ge,emph:ge,strike:ge,link:function(e,t,n){var r=e.lastChild,i=e.extendedAutolink,o=r?Object(ae.c)(r)+1:2
return{marks:i?[pe(t,n,fe("link","link-desc")+" "+de.TEXT)]:me(t,n,t,o)}},image:function(e,t,n){var r=e.lastChild,i=r?Object(ae.c)(r)+1:3,o=Object(ae.a)(t,1)
return{marks:[pe(t,o,de.META)].concat(me(t,n,o,i))}},code:function(e,t,n){var r=e.tickCount,i=Object(ae.a)(t,r),o=Object(ae.a)(n,-r)
return{marks:[pe(t,n,fe("code")),pe(t,i,de.DELIM+" start"),pe(i,o,de.TEXT),pe(o,n,de.DELIM+" end")]}},codeBlock:function(e,t,n,r){var i=e.fenceOffset,o=e.fenceLength,a=e.fenceChar,s=e.info,l=e.parent,c=i+o,u=Object(ae.a)(t,c),d=[pe(t,n,de.CODE_BLOCK),pe(t,u,de.DELIM)]
s&&(u=Object(ae.l)(t,c+s.length),d.push(pe(Object(ae.l)(t,c),u,de.META)))
var h=n
new RegExp("^(\\s{0,"+i+"})("+a+"{"+o+",})").test(r)&&(h=Object(ae.l)(n,0),d.push(pe(h,n,de.DELIM)))
var f="item"!==l.type&&"blockQuote"!==l.type?{start:t.line,end:n.line,className:de.CODE_BLOCK}:null
return{marks:[].concat(d,[pe(u,h,de.TEXT)]),lineBackground:ce({},f)}},blockQuote:function(e,t,n){var r=e.parent&&"blockQuote"!==e.parent.type?[pe(t,n,fe("block-quote"))]:[]
if(e.firstChild){var i=[]
"paragraph"===e.firstChild.type?i=function(e){for(var t=[];e;)t.push(pe({line:Object(ae.f)(e)-1,ch:Object(ae.e)(e)-1},{line:Object(ae.d)(e)-1,ch:Object(ae.c)(e)},de.TEXT)),e=e.next
return t}(e.firstChild.firstChild,de.TEXT):"list"===e.firstChild.type&&(i=ve(e.firstChild,de.TEXT)),r=[].concat(r,i)}return{marks:r}},item:function(e,t){var n=function(e){for(var t=0;e.parent.parent&&"item"===e.parent.parent.type;)e=e.parent.parent,t+=1
var n=["fisrt","second","third"][t%3]
return fe("list-item",""+["list-item-odd","list-item-even"][t%2])+" "+n}(e),r=e.listData,i=r.padding,o=r.task
return{marks:[pe(t,Object(ae.a)(t,i),n+" "+fe("list-item-bullet"))].concat(o?[pe(Object(ae.a)(t,i),Object(ae.a)(t,i+3),n+" "+de.DELIM),pe(Object(ae.a)(t,i+1),Object(ae.a)(t,i+2),de.META)]:[],ve(e.firstChild,n+" "+de.TEXT))}}},be={thematicBreak:de.THEMATIC_BREAK,table:de.TABLE,tableCell:de.TEXT,htmlInline:de.HTML}
function Ce(){return(Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var we=z.getSharedInstance(),_e={strong:!1,emph:!1,strike:!1,thematicBreak:!1,blockQuote:!1,code:!1,codeBlock:!1,list:!1,taskList:!1,orderedList:!1,heading:!1,table:!1},Te=function(e){var t,n
function r(t,n,r,i){var o
return(o=e.call(this,t,{dragDrop:!0,allowDropFileTypes:["image"],extraKeys:{Enter:"newlineAndIndentContinueMarkdownList",Tab:"indentOrderedList","Shift-Tab":"indentLessOrderedList"},viewportMargin:i&&"auto"===i.height?1/0:10})||this).eventManager=n,o.componentManager=new ie(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(o)),o.toastMark=r,o.componentManager.addManager(re),o._latestState=null,o._markedLines={},o._initEvent(),o}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n
var i=r.prototype
return i._initEvent=function(){var e=this
this.cm.getWrapperElement().addEventListener("click",(function(){e.eventManager.emit("click",{source:"markdown"})})),this.cm.on("beforeChange",(function(t,n){"paste"===n.origin&&e.eventManager.emit("pasteBefore",{source:"markdown",data:n})})),this.cm.on("change",(function(t,n){e._refreshCodeMirrorMarks(n),e._emitMarkdownEditorChangeEvent(n)})),this.cm.on("focus",(function(){e.eventManager.emit("focus",{source:"markdown"})})),this.cm.on("blur",(function(){e.eventManager.emit("blur",{source:"markdown"})})),this.cm.on("scroll",(function(t,n){e.eventManager.emit("scroll",{source:"markdown",data:n})})),this.cm.on("keydown",(function(t,n){e.eventManager.emit("keydown",{source:"markdown",data:n}),e.eventManager.emit("keyMap",{source:"markdown",keyMap:we.convert(n),data:n})})),this.cm.on("keyup",(function(t,n){e.eventManager.emit("keyup",{source:"markdown",data:n})})),this.cm.on("copy",(function(t,n){e.eventManager.emit("copy",{source:"markdown",data:n})})),this.cm.on("cut",(function(t,n){e.eventManager.emit("cut",{source:"markdown",data:n})})),this.cm.on("paste",(function(t,n){e.eventManager.emit("paste",{source:"markdown",data:n})})),this.cm.on("drop",(function(t,n){n.preventDefault(),e.eventManager.emit("drop",{source:"markdown",data:n})})),this.cm.on("cursorActivity",(function(){return e._onChangeCursorActivity()}))},i.setValue=function(t,n){e.prototype.setValue.call(this,t,n)},i.getTextObject=function(e){return new oe(this,e)},i._emitMarkdownEditorContentChangedEvent=function(e){this.eventManager.emit("contentChangedFromMarkdown",e)},i._emitMarkdownEditorChangeEvent=function(e){if("setValue"!==e.origin){var t={source:"markdown"}
this.eventManager.emit("changeFromMarkdown",t),this.eventManager.emit("change",t)}},i._refreshCodeMirrorMarks=function(e){var t=this,n=e.from,r=e.to,i=e.text,o=this.toastMark.editMarkdown([n.line+1,n.ch+1],[r.line+1,r.ch+1],i.join("\n"))
this._emitMarkdownEditorContentChangedEvent(o),o.length&&o.forEach((function(e){return t._markNodes(e)}))},i._markNodes=function(e){var t=e.nodes,n=e.removedNodeRange
if(n&&this._removeBackgroundOfLines(n),t.length){var r=t[0].sourcepos[0],i=t[t.length-1].sourcepos[1],o={line:r[0]-1,ch:r[1]-1},a={line:i[0]-1,ch:i[1]},s=this.cm.findMarks(o,a),l=Array.isArray(s),c=0
for(s=l?s:s[Symbol.iterator]();;){var u
if(l){if(c>=s.length)break
u=s[c++]}else{if((c=s.next()).done)break
u=c.value}var d=u
d.attributes&&"data-tui-mark"in d.attributes&&d.clear()}var h=t,f=Array.isArray(h),p=0
for(h=f?h:h[Symbol.iterator]();;){var g
if(f){if(p>=h.length)break
g=h[p++]}else{if((p=h.next()).done)break
g=p.value}for(var m=g.walker(),v=m.next();v;){var y=v,b=y.node
y.entering&&this._markNode(b),v=m.next()}}}},i._removeBackgroundOfLines=function(e){for(var t=e.line,n=t[0],r=t[1],i=n;i<=r;i+=1)this._markedLines[i]&&(this.cm.removeLineClass(i,"background"),this._markedLines[i]=!1)},i._markNode=function(e){var t=this,n={line:Object(ae.f)(e)-1,ch:Object(ae.e)(e)-1},r={line:Object(ae.d)(e)-1,ch:Object(ae.c)(e)},i=function(e,t,n,r){var i=e.type
return le()(ye[i])?ye[i](e,t,n,r):be[i]?{marks:[pe(t,n,be[i])]}:null}(e,n,r,this.cm.getLine(r.line))
if(i){var o=i.marks,a=void 0===o?[]:o,s=i.lineBackground,l=void 0===s?{}:s,c=l.start,u=l.end,d=l.className
a.forEach((function(e){var n,r=e.start,i=e.end,o=e.className,a=((n={})["data-tui-mark"]="",n)
t.cm.markText(r,i,{className:o,attributes:a})}))
for(var h=c;h<=u;h+=1)this.cm.addLineClass(h,"background",d),this._markedLines[h]=!0}},i._setToolbarState=function(e){if(n=this._latestState,r=e,(n||r)&&(!n&&r||n&&!r||Object.keys(r).some((function(e){return n[e]!==r[e]})))){var t=Ce({source:"markdown"},e||_e)
this.eventManager.emit("stateChange",t)}var n,r
this._latestState=e},i._onChangeCursorActivity=function(){var e=this.cm.getCursor(),t=e.line,n=e.ch,r=t+1,i=this.cm.getLine(t).length===n?n:n+1,o=this.toastMark.findNodeAtPosition([r,i]),a=null
this.cm.state.isCursorInCodeBlock=o&&"codeBlock"===o.type,this.eventManager.emit("cursorActivity",{source:"markdown",cursor:{line:t,ch:n},markdownNode:o}),o&&(a=function(e,t,n,r){var i=Ce({},_e),o=!1
return Object(ae.m)(e,(function(e){var t=function(e){var t=e.type,n=e.listData
return"list"===t||"item"===t?n.task?"taskList":"ordered"===n.type?"orderedList":"list":-1!==t.indexOf("table")?"table":t}(e)
w()(i[t])&&("list"===t||"orderedList"===t?o||(i[t]=!0,o=!0):i[t]=!0)})),Object(ae.k)(e)&&(r===t&&Object(ae.d)(e)===n||r===Object(ae.c)(e)+1&&n===Object(ae.d)(e)||r===Object(ae.e)(e)&&n===Object(ae.f)(e))&&(i[e.type]=!1),i}(o="text"===o.type?o.parent:o,n,r,i)),this._setToolbarState(a)},i.resetState=function(){this._latestState=null},i.getToastMark=function(){return this.toastMark},r.factory=function(e,t,n,i){return new r(e,t,n,i)},r}(q),Ee=n(34),xe=n(2),Se=n.n(xe),Ne=n(20),ke=n.n(Ne),Le=n(8),Me=n.n(Le),Ae=n(21),Oe=n.n(Ae),Be=n(13),De=n.n(Be),Ie=n(47),Re=n.n(Ie),Pe=n(18),He=n.n(Pe),Fe=n(19),Ue=n.n(Fe),We=n(0),qe=n(12),je=n.n(qe),ze=n(25),Ve=function(){function e(e){this.wwe=e}var t=e.prototype
return t.preparePaste=function(e){var t,n,r,i=this.wwe.getEditor().getSelection().cloneRange(),o=this.wwe.componentManager.getManager("codeblock"),a=!1,s=document.createElement("div")
this._pasteFirstAid(e)
for(var l=Se()(e.childNodes);l.length;)n=l[0],r="LI"===(t=We.a.getNodeName(n))||"UL"===t||"OL"===t,o.isInCodeBlock(i)?We.a.append(s,o.prepareToPasteOnCodeblock(l)):r?(We.a.append(s,this._prepareToPasteList(l,i,a)),a=!0):We.a.append(s,l.shift())
e.innerHTML=s.innerHTML},t._wrapOrphanNodeWithDiv=function(e){var t,n=document.createElement("div")
return Se()(e.childNodes).forEach((function(e){var r=3===e.nodeType,i=/^(SPAN|A|CODE|EM|I|STRONG|B|S|U|ABBR|ACRONYM|CITE|DFN|KBD|SAMP|VAR|BDO|Q|SUB|SUP)$/gi.test(e.tagName),o="BR"===e.nodeName
r||i||o?(t||(t=document.createElement("div"),n.appendChild(t)),t.appendChild(e),o&&(t=null)):(t&&"BR"!==t.lastChild.tagName&&t.appendChild(document.createElement("br")),t=null,n.appendChild(e))})),n.innerHTML},t._sanitizeHtml=function(e){var t=this.wwe.getSanitizer(),n=Object(ze.a)(e.innerHTML,!0)
t&&t!==ze.a&&(n=t(n)),e.innerHTML=n},t._pasteFirstAid=function(e){var t=this
this._sanitizeHtml(e),We.a.findAll(e,"*").forEach((function(e){t._removeStyles(e)}))
var n="div, section, article, aside, nav, menus, p"
this._unwrapIfNonBlockElementHasBr(e),this._unwrapNestedBlocks(e,n),this._removeUnnecessaryBlocks(e,n),e.innerHTML=this._wrapOrphanNodeWithDiv(e),this._preElementAid(e),this._tableElementAid(e),Se()(e.children).forEach((function(e){"BR"===We.a.getNodeName(e)&&We.a.remove(e)}))},t._preElementAid=function(e){this.wwe.componentManager.getManager("codeblock").modifyCodeBlockForWysiwyg(e)},t._unwrapIfNonBlockElementHasBr=function(e){We.a.findAll(e,"span, a, b, em, i, s").forEach((function(e){We.a.children(e,"br").length&&"LI"!==e.nodeName&&"UL"!==e.nodeName&&We.a.unwrap(e)}))},t._unwrapNestedBlocks=function(e,t){We.a.findAll(e,"*").filter((function(e){return!je()(e,"b,s,i,em,code,span,hr")&&!e.firstChild})).forEach((function(n){for(var r="BR"===n.nodeName?n.parentNode:n;We.a.parents(r,t).length;){var i=We.a.parent(r,t)
i&&i!==e?We.a.unwrap(i):r=r.parentElement}}))},t._removeUnnecessaryBlocks=function(e,t){We.a.findAll(e,t).forEach((function(e){var n="DIV"===e.tagName,r=!!We.a.parent(e,"li"),i=!!We.a.parent(e,"blockquote"),o=!!We.a.children(e,t).length
n&&(r||i||!o)||(e.lastChild&&"BR"!==e.lastChild.nodeName&&e.appendChild(document.createElement("br")),We.a.replaceWith(e,e.innerHTML))}))},t._removeStyles=function(e){var t
"SPAN"!==We.a.getNodeName(e)?e.removeAttribute("style"):(e.getAttribute("style")&&(t=e.style.color),e.removeAttribute("style"),t?h()(e,{color:t}):We.a.unwrap(e))},t._prepareToPasteList=function(e,t,n){var r=We.a.getNodeName(e[0]),i=e.shift(),o=this.wwe.getEditor().getDocument().createDocumentFragment()
if("LI"!==r&&e.length&&"LI"===e[0].tagName&&(r="LI",i=this._makeNodeAndAppend({tagName:r},i)),"OL"===r||"UL"===r)!n&&this.wwe.getEditor().hasFormat("LI")?We.a.append(o,this._wrapCurrentFormat(i)):o.appendChild(i)
else if("LI"===r){var a=this.wwe.getEditor().getDocument().createDocumentFragment()
for(a.appendChild(i);e.length&&"LI"===e[0].tagName;)a.appendChild(e.shift())
!n&&this.wwe.getEditor().hasFormat("LI")?We.a.append(o,this._wrapCurrentFormat(a)):!t||"UL"!==t.commonAncestorName&&"OL"!==t.commonAncestorName?We.a.append(o,this._makeNodeAndAppend({tagName:"UL"},a)):We.a.append(o,this._makeNodeAndAppend({tagName:t.commonAncestorName},a))}return o},t._unwrapFragmentFirstChildForPasteAsInline=function(e){return We.a.findAll(e,"br").forEach((function(e){return We.a.remove(e)})),e.childNodes},t._wrapCurrentFormat=function(e){var t,n=this
return this._eachCurrentPath((function(r){"DIV"!==r.tagName&&(t=We.a.isElemNode(e)?e.tagName:e.firstChild.tagName,r.tagName!==t&&(e=n._makeNodeAndAppend(r,e)))})),e},t._eachCurrentPath=function(e){for(var t=We.a.getPath(this.wwe.getEditor().getSelection().startContainer,this.wwe.getBody()),n=t.length-1;n>-1;n-=1)e(t[n])},t._makeNodeAndAppend=function(e,t){var n=document.createElement(""+e.tagName)
return n.appendChild(t),e.id&&n.setAttribute("id",e.id),e.className&&p()(n,e.className),n},t._tableElementAid=function(e){this._removeColgroup(e),this._completeTableIfNeed(e),this._updateTableIDClassName(e)},t._removeColgroup=function(e){var t=e.querySelector("colgroup")
t&&We.a.remove(t)},t._completeTableIfNeed=function(e){var t=this.wwe.componentManager.getManager("table"),n=t.wrapDanglingTableCellsIntoTrIfNeed(e)
n&&We.a.append(e,n)
var r=t.wrapTrsIntoTbodyIfNeed(e)
r&&We.a.append(e,r)
var i=t.wrapTheadAndTbodyIntoTableIfNeed(e)
i&&We.a.append(e,i)},t._updateTableIDClassName=function(e){var t=this.wwe.componentManager.getManager("table"),n=We.a.findAll(e,"table")
n.forEach((function(e){var t=e.className.match(/.*\s*(te-content-table-\d+)\s*.*/)
t&&m()(e,t[0])})),n.forEach((function(e){p()(e,t.getTableIDClassName())}))},e}(),Ke=function(){function e(e){this.wwe=e}var t=e.prototype
return t.pasteClipboard=function(e){var t=e.clipboardData||window.clipboardData,n=t&&t.items
n?(this._pasteClipboardItem(n),e.preventDefault()):(this._pasteClipboardUsingPasteArea(),e.squirePrevented=!0)},t._pasteClipboardUsingPasteArea=function(){var e=this,t=this.wwe.getEditor(),n=t.getSelection(),r=n.startContainer,i=n.startOffset,o=n.endContainer,a=n.endOffset,s=document.createElement("div"),l=document.body
s.setAttribute("contenteditable",!0),s.setAttribute("style","position:fixed; overflow:hidden; top:0; right:100%; width:1px; height:1px;"),l.appendChild(s),n.selectNodeContents(s),t.setSelection(n),setTimeout((function(){var c=l.removeChild(s)
n.setStart(r,i),n.setEnd(o,a),t.focus(),t.setSelection(n),e._pasteClipboardHtml(c.innerHTML)}))},t._pasteClipboardItem=function(e){var t=this,n=null,r=null
Se()(e).forEach((function(e){"text/html"===e.type?r=e:"text/plain"===e.type&&(n=e)})),r?r.getAsString((function(e){t._pasteClipboardHtml(e)})):n&&n.getAsString((function(e){t._pasteClipboardContainer(document.createTextNode(e))}))},t._getSanitizedHtml=function(e){var t=this.wwe.getSanitizer()
e=Object(ze.a)(e,!0),t&&t!==ze.a&&(e=t(e))
var n=document.createElement("div")
return n.innerHTML=e,We.a.finalizeHtml(n)},t._pasteClipboardHtml=function(e){var t=document.createDocumentFragment(),n=e.indexOf("\x3c!--StartFragment--\x3e"),r=e.lastIndexOf("\x3c!--EndFragment--\x3e")
n>-1&&r>-1&&(e=e.slice(n+"\x3c!--StartFragment--\x3e".length,r)),/<\/td>((?!<\/tr>)[\s\S])*$/i.test(e)&&(e="<TR>"+e+"</TR>"),/<\/tr>((?!<\/table>)[\s\S])*$/i.test(e)&&(e="<TABLE>"+e+"</TABLE>"),t.appendChild(this._getSanitizedHtml(e)),this._pasteClipboardContainer(t)},t._pasteClipboardContainer=function(e){var t=this.wwe.getEditor(),n=e.childNodes
if(1===n.length&&"TABLE"===n[0].nodeName)this.wwe.componentManager.getManager("table").pasteTableData(e)
else{var r=t.getSelection().cloneRange(),i=this._preparePasteDocumentFragment(e)
t.saveUndoState(r),r.collapsed||this._deleteContentsRange(r),We.a.isTextNode(r.startContainer)?this._pasteIntoTextNode(r,i):this._pasteIntoElements(r,i),t.setSelection(r)}},t._preparePasteDocumentFragment=function(e){var t=e.childNodes,n=document.createDocumentFragment()
return t.length?n.appendChild(this._unwrapBlock(e)):this._isPossibleInsertToTable(e)&&n.appendChild(e),n},t._unwrapBlock=function(e){for(var t=document.createDocumentFragment(),n=Se()(e.childNodes);n.length;){var r=n.shift()
if(this._isPossibleInsertToTable(r))t.appendChild(r)
else{t.appendChild(this._unwrapBlock(r))
var i=t.lastChild
n.length&&i&&"BR"!==i.nodeName&&t.appendChild(document.createElement("br"))}}return t},t._isPossibleInsertToTable=function(e){var t=e.nodeName
return!("CODE"===t&&e.childNodes.length>1)&&("UL"===t||"OL"===t||We.a.isMDSupportInlineNode(e)||We.a.isTextNode(e))},t._pasteIntoElements=function(e,t){var n=e.startContainer,r=e.startOffset,i=We.a.getChildNodeByOffset(n,r)
if(i)n.insertBefore(t,i),e.setStart(i,0)
else if("TD"===n.nodeName)n.appendChild(t),e.setStart(n,n.childNodes.length)
else{var o=n.parentNode,a=n.nextSibling
o.insertBefore(t,a),a?e.setStart(a,0):e.setStartAfter(o.lastChild)}e.collapse(!0)},t._pasteIntoTextNode=function(e,t){var n=e.startContainer,r=e.startOffset,i=n.parentNode,o=n.textContent,a=o.slice(0,r),s=o.slice(r,o.length),l=t.childNodes,c=l[0],u=1===l.length&&We.a.isTextNode(c)
if(a)if(s)if(u){var d=c.textContent
n.textContent=""+a+d+s,e.setStart(n,a.length+d.length)}else{var h=document.createDocumentFragment()
h.appendChild(document.createTextNode(a)),h.appendChild(t),h.appendChild(document.createTextNode(s)),i.replaceChild(h,n)
var f=Se()(i.childNodes),p=0
f.forEach((function(e,t){e.textContent===s&&(p=t)})),e.setStart(i.childNodes[p],0)}else{var g=n.nextSibling
i.insertBefore(t,g),e.setStartAfter(g)}else i.insertBefore(t,n),e.setStart(n,0)
e.collapse(!0)},t._deleteContentsRange=function(e){var t=e.startContainer,n=e.startOffset,r=e.endContainer,i=e.endOffset
t===r?(this._deleteContentsByOffset(t,n,i),e.setStart(t,n),e.collapse(!0)):this._deleteNotCollapsedRangeContents(e)},t._deleteNotCollapsedRangeContents=function(e){var t=e.startContainer,n=e.startOffset,r=e.endContainer,i=e.endOffset,o=e.commonAncestorContainer,a=this._getBlock(t,o,n),s=this._getBlock(r,o,i-1)
if(a===s)this._removeInSameBlock(a,t,r,n,i),s=r!==s?null:s
else{var l=a.nextSibling
"TD"===t.nodeName?l=this._removeOneLine(a):(this._deleteContentsByOffset(t,n,We.a.getOffsetLength(t)),We.a.removeNodesByDirection(a,t,!1)),"TD"===r.nodeName?s=this._removeOneLine(s):(this._deleteContentsByOffset(r,0,i),We.a.removeNodesByDirection(s,r,!0)),We.a.removeChildFromStartToEndNode(o,l,s)}s?e.setStart(s,0):e.setStartAfter(a),e.collapse(!0)},t._removeInSameBlock=function(e,t,n,r,i){var o=t===e?r:0,a=n===e?i:We.a.getOffsetLength(e)
this._deleteContentsByOffset(e,o,a)},t._removeOneLine=function(e){var t=e.nextSibling,n=e.parentNode,r=t
return n.removeChild(e),t&&"BR"===t.nodeName&&(r=t.nextSibling,n.removeChild(t)),r},t._getBlock=function(e,t,n){return We.a.getParentUntil(e,t)||We.a.getChildNodeByOffset(e,n)},t._deleteContentsByOffset=function(e,t,n){if(We.a.isTextNode(e)){var r=e.textContent,i=r.slice(0,t),o=r.slice(n,r.length)
e.textContent=""+i+o}else{var a=We.a.getChildNodeByOffset(e,t),s=We.a.getChildNodeByOffset(e,n)
a&&We.a.removeChildFromStartToEndNode(e,a,s||null)}},e}(),Ge=function(){function e(e){this.wwe=e,this._pch=new Ve(this.wwe),this._tablePasteHelper=new Ke(this.wwe),this._selectedSellCount=0,this._clipboardArea=null}var t=e.prototype
return t.init=function(){var e=this
this.wwe.eventManager.listen("willPaste",(function(t){return e._executeHandler(e._onWillPaste.bind(e),t)})),this.wwe.eventManager.listen("copy",(function(t){return e._executeHandler(e._onCopyCut.bind(e),t)})),this.wwe.eventManager.listen("copyAfter",(function(t){return e._executeHandler(e._onCopyAfter.bind(e),t)})),this.wwe.eventManager.listen("cut",(function(t){return e._executeHandler(e._onCopyCut.bind(e),t)})),this.wwe.eventManager.listen("cutAfter",(function(t){return e._executeHandler(e._onCutAfter.bind(e),t)})),this.wwe.eventManager.listen("paste",(function(t){return e._executeHandler(e._onPasteIntoTable.bind(e),t)}))},t._executeHandler=function(e,t){"wysiwyg"===t.source&&e(t)},t._onCopyCut=function(e){var t=this.wwe.componentManager.getManager("tableSelection")
if(t.getSelectedCells().length)if(t.mergedTableSelectionManager){var n=this.wwe.getEditor(),r=e.data,i=n.getSelection().cloneRange(),o=document.createElement("div")
this._extendRange(i),o.innerHTML=i.cloneContents(),this._updateCopyDataForListTypeIfNeed(i,o),this.wwe.eventManager.emit("copyBefore",{source:"wysiwyg",clipboardContainer:o}),this._setClipboardData(r,o.innerHTML,o.textContent)}else t.createRangeBySelectedCells()},t._clearClipboardArea=function(){this._clipboardArea&&(We.a.remove(this._clipboardArea),this._clipboardArea=null)},t._onCopyAfter=function(){this.wwe.getEditor().getBody().focus(),this._clearClipboardArea()},t._onCutAfter=function(){this.wwe.getEditor().getSelection().deleteContents(),this.wwe.getEditor().focus(),this._clearClipboardArea()},t._onPasteIntoTable=function(e){var t=e.data,n=this.wwe.getEditor().getSelection()
this.wwe.isInTable(n)&&this._isSingleCellSelected(n)&&this._tablePasteHelper.pasteClipboard(t)},t._isSingleCellSelected=function(e){var t=e.startContainer,n=e.endContainer
return this._getCell(t)===this._getCell(n)},t._getCell=function(e){return"TD"===e.nodeName?e:We.a.getParentUntil(e,"TR")},t._replaceNewLineToBr=function(e){We.a.getAllTextNode(e).forEach((function(e){/\n/.test(e.nodeValue)&&(e.parentNode.innerHTML=e.nodeValue.replace(/\n/g,"<br>"))}))},t._onWillPaste=function(e){var t=this,n=e.data,r=document.createElement("div")
r.appendChild(n.fragment.cloneNode(!0)),this._preparePaste(r),this._setTableBookmark(r),n.fragment=document.createDocumentFragment(),Se()(r.childNodes).forEach((function(e){n.fragment.appendChild(e)})),this.wwe.getEditor().addEventListener("input",(function e(){t.wwe.getEditor().removeEventListener("input",e),t.wwe.eventManager.emit("wysiwygRangeChangeAfter",t),t._focusTableBookmark()}))},t._setClipboardData=function(e,t,n){De.a.msie?(e.squirePrevented=!0,this._clipboardArea=this._createClipboardArea(),this._clipboardArea.innerHTML=t,this._clipboardArea.focus(),window.getSelection().selectAllChildren(this._clipboardArea)):(e.preventDefault(),e.stopPropagation(),e.clipboardData.setData("text/html",t),e.clipboardData.setData("text/plain",n))},t._createClipboardArea=function(){var e=document.createElement("div")
return e.setAttribute("contenteditable",!0),h()(e,{position:"fixed",overflow:"hidden",top:0,right:"100%",width:"1px",height:"1px"}),document.body.appendChild(e),e},t._updateCopyDataForListTypeIfNeed=function(e,t){var n=e.commonAncestorContainer.nodeName
if("UL"===n||"OL"===n){var r=document.createElement(n)
r.appendChild(t),t.innerHTML="",t.appendChild(r)}},t._removeEmptyFontElement=function(e){We.a.children(e,"font").forEach((function(e){e.textContent.trim()||We.a.remove(e)}))},t._isFromMs=function(e){return/<p style="[^>]*mso-/.test(e)},t._preProcessPtag=function(e){We.a.findAll(e,"p").forEach((function(e){e.lastChild&&"BR"!==e.lastChild.nodeName&&e.appendChild(document.createElement("br")),e.appendChild(document.createElement("br"))}))},t._preparePaste=function(e){this._isFromMs(e.innerText)||this._preProcessPtag(e),this._replaceNewLineToBr(e),this._removeEmptyFontElement(e),this._pch.preparePaste(e),this.wwe.eventManager.emit("pasteBefore",{source:"wysiwyg",clipboardContainer:e})},t._setTableBookmark=function(e){var t=e.lastChild
t&&"TABLE"===t.nodeName&&p()(t,"tui-paste-table-bookmark")},t._focusTableBookmark=function(){var e=this.wwe.getEditor(),t=e.getSelection().cloneRange(),n=e.getBody().querySelector(".tui-paste-table-bookmark"),r=e.getBody().querySelector(".tui-paste-table-cell-bookmark")
n&&(m()(n,"tui-paste-table-bookmark"),t.setEndAfter(n),t.collapse(!1),e.setSelection(t)),r&&(m()(r,"tui-paste-table-cell-bookmark"),t.selectNodeContents(r),t.collapse(!1),e.setSelection(t))},t._extendRange=function(e){(!We.a.isTextNode(e.commonAncestorContainer)||0===e.startOffset&&e.commonAncestorContainer.textContent.length===e.endOffset||"TD"===e.commonAncestorContainer.nodeName)&&(0===e.startOffset&&(e=this._extendStartRange(e)),e.endOffset===We.a.getOffsetLength(e.endContainer)&&(e=this._extendEndRange(e)),this._isWholeCommonAncestorContainerSelected(e)&&e.selectNode(e.commonAncestorContainer),this.wwe.getEditor().setSelection(e))},t._extendStartRange=function(e){for(var t=e.startContainer;t.parentNode!==e.commonAncestorContainer&&t.parentNode!==this.wwe.getBody()&&!t.previousSibling;)t=t.parentNode
return e.setStart(t.parentNode,We.a.getNodeOffsetOfParent(t)),e},t._extendEndRange=function(e){for(var t=e.endContainer,n=t.nextSibling;t.parentNode!==e.commonAncestorContainer&&t.parentNode!==this.wwe.getBody()&&(!n||"BR"===We.a.getNodeName(n)&&t.parentNode.lastChild===n);)n=(t=t.parentNode).nextSibling
return e.setEnd(t.parentNode,We.a.getNodeOffsetOfParent(t)+1),e},t._isWholeCommonAncestorContainerSelected=function(e){return e.commonAncestorContainer.nodeType===Node.ELEMENT_NODE&&e.commonAncestorContainer!==this.wwe.getBody()&&0===e.startOffset&&e.endOffset===e.commonAncestorContainer.childNodes.length&&e.commonAncestorContainer===e.startContainer&&e.commonAncestorContainer===e.endContainer},e}(),$e=/<li/i,Ye=/(<(?:th|td)[^>]*>)(.*?)(<\/(?:th|td)>)/g,Xe=/<(ul|ol|li)([^>]*)>/g,Ze=function(){function e(e){this.wwe=e,this.eventManager=e.eventManager,this.name="list",this._init()}var t=e.prototype
return t._init=function(){this._initEvent(),this._initKeyHandler()},t._initEvent=function(){var e=this
this.eventManager.listen("wysiwygSetValueBefore",(function(t){return e._convertToArbitraryNestingList(t)})),this.eventManager.listen("wysiwygRangeChangeAfter",(function(){e._findAndRemoveEmptyList(),e._removeBranchListAll()})),this.eventManager.listen("wysiwygSetValueAfter",(function(){e._removeBranchListAll()})),this.eventManager.listen("wysiwygProcessHTMLText",(function(t){return e._convertFromArbitraryNestingList(t)})),this.eventManager.listen("convertorBeforeHtmlToMarkdownConverted",(function(t){return e._insertDataToMarkPassForListInTable(t)}))},t._initKeyHandler=function(){var e=this
this.wwe.addKeyEventHandler(["TAB","CTRL+]","META+]"],(function(t){var n
return e.wwe.getEditor().hasFormat("LI")&&(t.preventDefault(),e.eventManager.emit("command","Indent"),n=!1),n})),this.wwe.addKeyEventHandler(["SHIFT+TAB","CTRL+[","META+["],(function(t,n){var r
if(e.wwe.getEditor().hasFormat("LI")){t.preventDefault()
var i=We.a.children(We.a.closest(n.startContainer,"li"),"OL,UL")
e.eventManager.emit("command","Outdent"),i.length&&!i.previousSibling&&e._removeBranchList(i),r=!1}return r})),this.wwe.addKeyEventHandler("ENTER",(function(t,n){n.collapsed&&e.wwe.getEditor().hasFormat("LI")&&e.wwe.defer((function(){var t=e.wwe.getRange(),n=We.a.parents(t.startContainer,"li")[0]
e._removeBranchListAll(n)}))})),this.wwe.addKeyEventHandler("BACK_SPACE",(function(t,n){n.collapsed&&e.wwe.getEditor().hasFormat("LI")&&e.wwe.defer((function(){e._removeBranchListAll()}))}))},t._findAndRemoveEmptyList=function(){We.a.findAll(this.wwe.getBody(),"OL,UL").forEach((function(e){$e.test(e.innerHTML)||We.a.remove(e)}))},t._removeBranchListAll=function(e){var t=this
e=e||this.wwe.getBody(),We.a.findAll(e,"li > ul, li > ol").forEach((function(e){e&&!e.previousSibling&&t._removeBranchList(e)}))},t._removeBranchList=function(e){for(var t=e;!t.previousSibling&&t.parentElement.tagName.match(/UL|OL|LI/g);)t=t.parentElement
var n=We.a.children(t,"li")[0],r=We.a.unwrap(e)
We.a.prepend(t,r),We.a.remove(n)},t._convertToArbitraryNestingList=function(e){for(var t=We.a.createElementWith("<div>"+e+"</div>"),n=t.querySelector("li > ul, li > ol");null!==n;){var r=n.parentNode
r.parentNode.insertBefore(n,r.nextElementSibling),n=t.querySelector("li > ul, li > ol")}return t.innerHTML},t._convertFromArbitraryNestingList=function(e){for(var t=We.a.createElementWith("<div>"+e+"</div>"),n=t.querySelector("ol > ol, ol > ul, ul > ol, ul > ul");null!==n;){for(var r=n.previousElementSibling;r&&"LI"!==r.tagName;)r=r.previousElementSibling
r?r.appendChild(n):this._unwrap(n),n=t.querySelector("ol > ol, ol > ul, ul > ol, ul > ul")}return t.innerHTML},t._unwrap=function(e){for(var t=document.createDocumentFragment();e.firstChild;)t.appendChild(e.firstChild)
e.parentNode.replaceChild(t,e)},t._insertDataToMarkPassForListInTable=function(e){return e.replace(Ye,(function(e,t,n,r){return""+t+n.replace(Xe,'<$1 data-tomark-pass="" $2>')+r}))},t.getLinesOfSelection=function(e,t){var n,r=[],i=!1,o=!0
We.a.isTextNode(e)&&(e=We.a.parents(e,"DIV,LI")[0]),We.a.isTextNode(t)&&(t=We.a.parents(t,"DIV,LI")[0])
for(var a=e;o&&je()(a,"DIV,LI");a=n)r.push(a),a===t?i=!0:n=this._getNextLine(a,t),o=n&&!i
return r},t._getNextLine=function(e,t){var n=e.nextElementSibling
return n?je()(n,"OL,UL")&&(n=n.querySelector("li")):n=e.parentNode.nextElementSibling,je()(n,"DIV,LI")||n===t?n:this._getNextLine(n)},t.mergeList=function(e){var t=e.parentNode,n=t.previousElementSibling,r=t.nextElementSibling
t.firstElementChild===e&&n&&je()(n,"OL,UL")&&(this._mergeList(t,n),t=n),t.lastElementChild===e&&r&&je()(r,"OL,UL")&&this._mergeList(r,t)},t._mergeList=function(e,t){var n=e.firstElementChild
if(t&&je()(t,"OL,UL")){for(;n;){var r=n.nextElementSibling
t.appendChild(n),n=r}e.parentNode.removeChild(e)}},t.isAvailableMakeListInTable=function(){var e=this.wwe.componentManager.getManager("tableSelection").getSelectedCells(),t=this.wwe.getEditor()
return e&&t.hasFormat("table")&&!t.hasFormat("OL")&&!t.hasFormat("UL")},t._getParentNodeBeforeTD=function(e,t){var n=We.a.getParentUntil(e,"TD")
if(!n){var r=e.childNodes,i=r?r.length:0,o=t>0&&t===i?t-1:t
n=We.a.getChildNodeByOffset(e,o)}return n},t._findLINodeInsideTD=function(e,t){var n=null,r=We.a.getParentUntilBy(e,(function(e){return e&&We.a.isListNode(e)}),(function(e){return e&&"TD"===e.nodeName}))
if(r)n=r
else if("LI"===e.nodeName)n=e
else if(We.a.isListNode(e)){var i=e.childNodes.length
n=e.childNodes[t>=i?i-1:t]}return n},t._getFirstNodeInLineOfTable=function(e,t){var n=this._findLINodeInsideTD(e,t)
if(!n)for(var r=(n=this._getParentNodeBeforeTD(e,t)).previousSibling;r&&"BR"!==r.nodeName&&!We.a.isListNode(r);)r=(n=r).previousSibling
return n},t._getLastNodeInLineOfTable=function(e,t){var n=this._findLINodeInsideTD(e,t)
if(!n)for(n=this._getParentNodeBeforeTD(e,t);n.nextSibling&&"BR"!==n.nodeName&&!We.a.isListNode(n);)n=n.nextSibling
return n},t._isLastNodeInLineOfTable=function(e){var t=e.nodeName
return"LI"===t||"BR"===t},t._getNextNodeInLineOfTable=function(e){var t=e.nextSibling
if("LI"!==e.nodeName||t)We.a.isListNode(t)&&(t=t.firstChild)
else for(var n=e.parentNode;"TD"!==n.nodeName;){if(n.nextSibling){t=n.nextSibling
break}n=n.parentNode}return t},t._getLinesOfSelectionInTable=function(e){for(var t=e.startContainer,n=e.endContainer,r=e.startOffset,i=e.endOffset,o=this._getFirstNodeInLineOfTable(t,r),a=this._getLastNodeInLineOfTable(n,i),s=[],l=[];o;){if(l.push(o),this._isLastNodeInLineOfTable(o)&&(s.push(l),l=[]),o===a){l.length&&s.push(l)
break}o=this._getNextNodeInLineOfTable(o)}return s},t._createListElement=function(e){return document.createElement("TASK"===e?"UL":e)},t._createListItemElement=function(e,t){var n=document.createElement("li")
return e.forEach((function(e){n.appendChild(e)})),"TASK"===t&&this.wwe.componentManager.getManager("task").formatTask(n),n},t._mergeListWithPreviousSibiling=function(e){var t=e.previousSibling,n=e
return t&&e.nodeName===t.nodeName&&(this._mergeList(e,t),n=t),n},t._mergeListWithNextSibiling=function(e){var t=e.nextSibling
return t&&e.nodeName===t.nodeName&&this._mergeList(t,e),e},t.createListInTable=function(e,t){var n=this,r=this._getLinesOfSelectionInTable(e),i=r[r.length-1],o=i[i.length-1],a=o.nextSibling,s=o.parentNode,l=this._createListElement(t),c=l.nodeName,u=[]
return r.forEach((function(e){var r,i=e[0]
if("LI"===i.nodeName){var o=i.parentNode
if(r=i,o.nodeName!==c){var a=o.childNodes
Se()(a).forEach((function(){l.appendChild(o.firstChild)})),o.parentNode.replaceChild(l,o)}l=r.parentNode}else r=n._createListItemElement(e,t),l.appendChild(r)
u.push(r)})),l.parentNode||s.insertBefore(l,a),l=this._mergeListWithPreviousSibiling(l),this._mergeListWithNextSibiling(l),u},t.adjustRange=function(e,t,n,r,i){var o=We.a.containsNode(i[0],e)?e:i[0],a=We.a.containsNode(i[i.length-1],t)?t:i[i.length-1],s="TD"===e.nodeName?0:n,l="TD"===t.nodeName?0:r
this.wwe.setSelectionByContainerAndOffset(o,s,a,l)},e}(),Qe=n(16),Je=n.n(Qe),et=function(){function e(e){this.wwe=e,this.eventManager=e.eventManager,this.name="task",this._init()}var t=e.prototype
return t._init=function(){this._initKeyHandler(),this._initEvent(),this.wwe.getEditor().addEventListener("mousedown",(function(e){var t=getComputedStyle(e.target,":before")
e.target.hasAttribute("data-te-task")&&We.a.isInsideTaskBox(t,e.offsetX,e.offsetY)&&(e.preventDefault(),We.a.toggleClass(e.target,"checked"))}))},t._initEvent=function(){var e=this
this.eventManager.listen("wysiwygSetValueAfter",(function(){e._removeTaskListClass()}))},t._initKeyHandler=function(){var e=this
this.wwe.addKeyEventHandler("ENTER",(function(t,n){e.isInTaskList(n)&&e.wwe.defer((function(){var t=e.wwe.getRange(),n=We.a.closest(t.startContainer,"li")
n&&m()(n,"checked")}))}))},t.isInTaskList=function(e){var t
return e||(e=this.wwe.getEditor().getSelection().cloneRange()),!!(t=e.startContainer.nodeType===Node.ELEMENT_NODE&&"LI"===e.startContainer.tagName?e.startContainer:We.a.parents(e.startContainer,"li")[0])&&Je()(t,"task-list-item")},t.unformatTask=function(e){var t=We.a.closest(e,"li")
m()(t,"task-list-item"),m()(t,"checked"),t.removeAttribute("data-te-task"),t.getAttribute("class")||t.removeAttribute("class")},t.formatTask=function(e){var t=We.a.closest(e,"li")
p()(t,"task-list-item"),t.setAttribute("data-te-task","")},t._formatTaskIfNeed=function(){var e=this.wwe.getEditor().getSelection().cloneRange()
this.isInTaskList(e)&&this.formatTask(e.startContainer)},t._removeTaskListClass=function(){We.a.findAll(this.wwe.getBody(),".task-list").forEach((function(e){m()(e,"task-list")}))},e}(),tt=De.a.msie&&10===De.a.version,nt=De.a.msie&&(10===De.a.version||11===De.a.version),rt=De.a.msie?"":"<br>"
function it(e,t){for(var n="<"+t+"><br /></"+t+">",r="",i=0;i<e;i+=1)r+=n
return r}var ot=function(){function e(e){this.wwe=e,this.eventManager=e.eventManager,this.name="table",this._lastCellNode=null,this._init()}var t=e.prototype
return t._init=function(){this._initKeyHandler(),this._initEvent(),this.tableID=0},t._initEvent=function(){var e=this
this.eventManager.listen("wysiwygRangeChangeAfter.table",(function(){var t=e.wwe.getEditor().getSelection(),n=e.wwe.isInTable(t)
e._unwrapBlockInTable(),e._completeTableIfNeed(),n||e.wwe.componentManager.getManager("tableSelection").removeClassAttrbuteFromAllCellsIfNeed(),e._insertDefaultBlockBetweenTable()})),this.eventManager.listen("wysiwygSetValueAfter.table",(function(){e._unwrapBlockInTable(),e._insertDefaultBlockBetweenTable()})),this.eventManager.listen("wysiwygProcessHTMLText.table",(function(e){return e.replace(/<br \/>(<\/td>|<\/th>)/g,"$1")})),this.eventManager.listen("cut.table",(function(){var t=e.wwe.componentManager.getManager("tableSelection"),n=t.getSelectedCells()
n.length&&n.forEach((function(e){e.innerHTML=rt})),t.removeClassAttrbuteFromAllCellsIfNeed()})),this.eventManager.listen("copyBefore.table",(function(t){var n=t.clipboardContainer
return e.updateTableHtmlOfClipboardIfNeed(n)}))},t.updateTableHtmlOfClipboardIfNeed=function(e){var t=this,n=this.wwe.componentManager.getManager("tableSelection")
if(n.getSelectedCells().length){n.createRangeBySelectedCells()
var r=this.wwe.getEditor().getSelection().cloneContents()
Se()(r.children).forEach((function(e){if(t.isTableOrSubTableElement(e.nodeName))if("TABLE"===e.nodeName&&e.querySelector("thead")&&e.querySelector("tbody"))We.a.remove(e)
else if(e.previousSibling&&"TABLE"===e.previousSibling.nodeName)e.previousSibling.appendChild(e)
else if(t._completeIncompleteTable(e),"TABLE"!==e.nodeName&&"THEAD"!==e.nodeName){var n=We.a.closest(e,"table").querySelector("thead")
We.a.remove(n)}})),e.appendChild(r),We.a.findAll(e,".te-cell-selected").forEach((function(e){m()(e,"te-cell-selected")}))}},t.pasteTableData=function(e){this._expandTableIfNeed(e),this._pasteDataIntoTable(e)},t._initKeyHandler=function(){var e=this
this.keyEventHandlers={DEFAULT:function(t,n,r){var i=e.wwe.isInTable(n)
i&&!e._isModifierKey(r)?(e._recordUndoStateIfNeed(n),e._removeContentsAndChangeSelectionIfNeed(n,r,t)):!i&&e._lastCellNode&&e._recordUndoStateAndResetCellNode(n),i&&!e._isModifierKeyPushed(t)&&e.wwe.getEditor().modifyDocument((function(){e.wwe.componentManager.getManager("tableSelection").removeClassAttrbuteFromAllCellsIfNeed()}))},ENTER:function(t,n){var r
return e._isAfterTable(n)?(t.preventDefault(),n.setStart(n.startContainer,n.startOffset-1),e.wwe.breakToNewDefaultBlock(n),r=!1):e._isBeforeTable(n)?(t.preventDefault(),e.wwe.breakToNewDefaultBlock(n,"before"),r=!1):e.wwe.isInTable(n)&&(!e._isInList(n.startContainer)&&e._isInStyledText(n)?e.wwe.defer((function(){e._removeBRinStyleText()})):e._isEmptyFirstLevelLI(n)&&e.wwe.defer((function(){var t=e.wwe.getRange().cloneRange(),n=t.startContainer,r=document.createElement("br")
n.parentNode.replaceChild(r,n),t.setStartBefore(r),t.collapse(!0),e.wwe.getEditor().setSelection(t)})),e._appendBrIfTdOrThNotHaveAsLastChild(n),r=!1),r},BACK_SPACE:function(t,n,r){return e._handleBackspaceAndDeleteKeyEvent(t,n,r)},DELETE:function(t,n,r){return e._handleBackspaceAndDeleteKeyEvent(t,n,r)},TAB:function(){return e._moveCursorTo("next","cell")},"SHIFT+TAB":function(t){return e._moveCursorTo("previous","cell",t)},UP:function(t){return e._moveCursorTo("previous","row",t)},DOWN:function(t){return e._moveCursorTo("next","row",t)}},i()(this.keyEventHandlers,(function(t,n){return e.wwe.addKeyEventHandler(n,t)}))},t._isEmptyListItem=function(e){var t=e.childNodes
return"LI"===e.nodeName&&1===t.length&&"BR"===t[0].nodeName},t._isEmptyFirstLevelLI=function(e){var t=e.collapsed,n=e.startContainer,r=e.startOffset
return t&&0===r&&this._isEmptyListItem(n)&&We.a.isFirstLevelListItem(n)},t._isInStyledText=function(e){var t,n=e.startContainer
return t=We.a.isTextNode(n)?n.parentNode:n,e.collapsed&&We.a.isStyledNode(t)},t._removeBRinStyleText=function(){var e,t=this.wwe.getRange(),n=t.startContainer,r=t.startOffset,i=(e="TD"===n.nodeName?We.a.getChildNodeByOffset(n,r-1):We.a.getParentUntil(n,"TD")).querySelector("br")
if(i){var o=e,a=o.parentNode,s=o.nodeName
if("CODE"!==s||i.previousSibling)if("CODE"!==s||i.nextSibling){var l=this._splitByBR(e,i)
t.setStart(l,0)}else a.insertBefore(i,e.nextSibling),t.setStart(a,We.a.getNodeOffsetOfParent(i)+1)
else a.insertBefore(i,e),t.setStart(e,0)
t.collapse(!0),this.wwe.getEditor().setSelection(t)}},t._splitByBR=function(e,t){var n=e.cloneNode(!0),r=document.createElement("br"),i=e.parentNode
We.a.removeNodesByDirection(e,t,!1),t.parentNode.removeChild(t)
var o=n.querySelector("br")
We.a.removeNodesByDirection(n,o,!0),o.parentNode.removeChild(o),i.insertBefore(n,e.nextSibling),i.insertBefore(r,n)
var a=We.a.getLeafNode(n)
return We.a.getTextLength(a)||(a.textContent="​"),a},t._isBeforeTable=function(e){return"TABLE"===We.a.getNodeName(We.a.getChildNodeByOffset(e.startContainer,e.startOffset))},t._isAfterTable=function(e){var t=We.a.getPrevOffsetNodeUntil(e.startContainer,e.startOffset)
return"TABLE"===We.a.getNodeName(t)&&e.commonAncestorContainer===this.wwe.getBody()},t._handleBackspaceAndDeleteKeyEvent=function(e,t,n){var r="BACK_SPACE"===n,i=this.wwe.componentManager.getManager("tableSelection").getSelectedCells(),o=!0
if(t.collapsed){if(this.wwe.isInTable(t))r?this._tableHandlerOnBackspace(t,e):this._tableHandlerOnDelete(t,e),this._removeContentsAndChangeSelectionIfNeed(t,n,e),o=!1
else if(!r&&this._isBeforeTable(t)||r&&this._isAfterTable(t)){e.preventDefault()
var a=r?t.startOffset-1:t.startOffset
this._removeTable(t,We.a.getChildNodeByOffset(t.startContainer,a)),o=!1}}else this.wwe.isInTable(t)&&i.length>0&&this._removeContentsAndChangeSelectionIfNeed(t,n,e)&&(e.preventDefault(),o=!1)
return o},t._moveListItemToPreviousOfList=function(e,t){var n=e.parentNode,r=e.firstChild,i=document.createDocumentFragment()
We.a.mergeNode(e,i),n.parentNode.insertBefore(i,n),t.setStart(r,0),t.collapse(!0),this.wwe.getEditor().setSelection(t),n.hasChildNodes()||n.parentNode.removeChild(n)},t._isInList=function(e){return We.a.getParentUntilBy(e,(function(e){return e&&(We.a.isListNode(e)||"LI"===e.nodeName)}),(function(e){return e&&("TD"===e.nodeName||"TH"===e.nodeName)}))},t._findListItem=function(e){return We.a.getParentUntilBy(e,(function(e){return e&&We.a.isListNode(e)}),(function(e){return e&&("TD"===e.nodeName||"TH"===e.nodeName)}))},t._tableHandlerOnBackspace=function(e,t){var n=e.startContainer,r=e.startOffset,i=this._findListItem(n)
if(i&&0===r&&We.a.isFirstListItem(i)&&We.a.isFirstLevelListItem(i))this.wwe.getEditor().saveUndoState(e),this._moveListItemToPreviousOfList(i,e),t.preventDefault()
else{var o=We.a.getPrevOffsetNodeUntil(n,r,"TR")
"BR"===We.a.getNodeName(o)&&1!==o.parentNode.childNodes.length&&(t.preventDefault(),We.a.remove(o))}},t._isDeletingBR=function(e){var t=this._getCurrentNodeInCell(e),n=t&&t.nextSibling
return"BR"===We.a.getNodeName(t)&&!!n&&"BR"===We.a.getNodeName(n)},t._getCurrentNodeInCell=function(e){var t,n=e.startContainer,r=e.startOffset
return"TD"===We.a.getNodeName(n)?t=We.a.getChildNodeByOffset(n,r):We.a.getParentUntil(n,"TD")&&(t=n),t},t._isEndOfList=function(e,t){var n=t.startContainer,r=t.startOffset,i=!1
if(!e.nextSibling)if(e===n){var o=We.a.getOffsetLength(e)
"BR"===e.lastChild.nodeName&&(o-=1),i=o===r}else{var a=We.a.getParentUntil(n,"li")||n,s=We.a.getOffsetLength(n),l=e.lastChild
"BR"===l.nodeName&&(l=l.previousSibling),i=l===a&&s===r}return i},t._getNextLineNode=function(e){for(var t=document.createDocumentFragment(),n=We.a.getParentUntil(e,"TD").nextSibling;n;){var r=n.nextSibling
if(t.appendChild(n),"BR"===n.nodeName)break
n=r}return t},t._tableHandlerOnDelete=function(e,t){var n=this._findListItem(e.startContainer)
if(n&&this._isEndOfList(n,e))this.wwe.getEditor().saveUndoState(e),"BR"===n.lastChild.nodeName&&n.removeChild(n.lastChild),We.a.mergeNode(this._getNextLineNode(n),n),t.preventDefault()
else if(this._isDeletingBR(e)){var r=this._getCurrentNodeInCell(e)
r.parentNode.removeChild(r.nextSibling),t.preventDefault()}},t._appendBrIfTdOrThNotHaveAsLastChild=function(e){var t,n=We.a.getNodeName(e.startContainer)
if("TD"===n||"TH"===n)t=e.startContainer
else{var r=We.a.parentsUntil(e.startContainer,"tr")
t=r[r.length-1]}var i=We.a.getNodeName(t.lastChild)
"BR"===i||"DIV"===i||"UL"===i||"OL"===i||nt||We.a.append(t,"<br />")},t._unwrapBlockInTable=function(){We.a.findAll(this.wwe.getBody(),"td div,th div,tr>br,td>br,th>br").forEach((function(e){if("BR"===We.a.getNodeName(e)){var t=We.a.getNodeName(e.parentNode),n=/TD|TH/.test(t),r=0===e.parentNode.textContent.length,i=e.parentNode.lastChild===e;("TR"===t||n&&!r&&i)&&We.a.remove(e)}else We.a.unwrap(e)}))},t._insertDefaultBlockBetweenTable=function(){We.a.findAll(this.wwe.getBody(),"table").forEach((function(e){if(e.nextElementSibling&&"TABLE"===e.nextElementSibling.nodeName){var t=document.createElement("div")
t.appendChild(document.createElement("br")),We.a.insertAfter(t,e)}}))},t._removeTable=function(e,t){"TABLE"===t.tagName&&(this.wwe.getEditor().saveUndoState(e),this.wwe.saveSelection(e),We.a.remove(t),this.wwe.restoreSavedSelection())},t._recordUndoStateIfNeed=function(e){var t=We.a.getParentUntil(e.startContainer,"TR")
e.collapsed&&t&&this._lastCellNode!==t&&(this.wwe.getEditor().saveUndoState(e),this._lastCellNode=t)},t._recordUndoStateAndResetCellNode=function(e){this.wwe.getEditor().saveUndoState(e),this.resetLastCellNode()},t._pasteDataIntoTable=function(e){var t,n,r,i,o=this.wwe.getEditor().getSelection().startContainer,a=this._getTableDataFromTable(e),s="TD"===o.nodeName||"TH"===o.nodeName,l=tt?"":"<br />"
for(n=t=(t=s?o:(t=We.a.getParentUntilBy(o,(function(e){return e&&("TD"===e.nodeName||"TH"===e.nodeName)}),(function(e){return!!We.a.closest(e,"table")})))?t.parentNode:null)||o.querySelector("th,td");a.length;){for(r=a.shift();n&&r.length;)(i=r.shift()).length?n.textContent=i:n.innerHTML=l,n=We.a.getTableCellByDirection(n,"next")
t=n=We.a.getSiblingRowCellByDirection(t,"next",!1)}},t._getTableDataFromTable=function(e){var t=[]
return We.a.findAll(e,"tr").forEach((function(e){var n=[]
Se()(e.children).forEach((function(e){n.push(e.textContent)})),n.length&&t.push(n)})),t},t._removeTableContents=function(e){this.wwe.getEditor().saveUndoState(),Se()(e).forEach((function(e){var t=tt?"":"<br />"
e.innerHTML=t}))},t.wrapDanglingTableCellsIntoTrIfNeed=function(e){var t,n=We.a.children(e,"td,th")
if(n.length){var r=document.createElement("tr")
Se()(n).forEach((function(e){We.a.append(r,e)})),t=r}return t},t.wrapTrsIntoTbodyIfNeed=function(e){var t,n=We.a.children(e,"tr"),r=[]
if(Se()(n).forEach((function(e){r=r.concat(e.querySelectorAll("th"))})),r.length&&Se()(r).forEach((function(e){var t=document.createElement("td")
t.innerHTML=e.innerHTML,We.a.insertBefore(e,t),We.a.remove(e)})),n.length){var i=document.createElement("tbody")
Se()(n).forEach((function(e){We.a.append(i,e)})),t=i}return t},t.wrapTheadAndTbodyIntoTableIfNeed=function(e){var t,n=We.a.children(e,"thead"),r=We.a.children(e,"tbody"),i=document.createElement("table")
return!r.length&&n.length?(We.a.append(i,n[0]),We.a.append(i,this._createTheadOrTboday("tbody")),t=i):r.length&&!n.length?(We.a.append(i,this._createTheadOrTboday("thead")),We.a.append(i,r[0]),t=i):r.length&&n.length&&(We.a.append(i,n[0]),We.a.append(i,r[0]),t=i),t},t.isTableOrSubTableElement=function(e){return"TABLE"===e||"TBODY"===e||"THEAD"===e||"TR"===e||"TD"===e},t._createTheadOrTboday=function(e){var t=document.createElement(e),n=document.createElement("tr")
return t.appendChild(n),t},t._stuffTableCellsIntoIncompleteRow=function(e,t){Se()(e).forEach((function(e){for(var n=e.querySelectorAll("th,td"),r="THEAD"===We.a.getNodeName(e.parentNode)?"th":"td",i=n.length;i<t;i+=1)We.a.append(e,it(1,r))}))},t.prepareToTableCellStuffing=function(e){var t=e[0].querySelectorAll("th,td").length,n=!1
return Se()(e).forEach((function(e){var r=e.querySelectorAll("th,td").length
t!==r&&(n=!0,t<r&&(t=r))})),{maximumCellLength:t,needTableCellStuffingAid:n}},t._addTbodyOrTheadIfNeed=function(e){var t=!e.querySelector("thead"),n=!e.querySelector("tbody")
t?We.a.prepend(e,"<thead><tr></tr></thead>"):n&&We.a.append(e,"<tbody><tr></tr></tbody>")},t.tableCellAppendAidForTableElement=function(e){this._addTbodyOrTheadIfNeed(e),this._addTrIntoContainerIfNeed(e)
var t=e.querySelectorAll("tr"),n=this.prepareToTableCellStuffing(t),r=n.maximumCellLength
n.needTableCellStuffingAid&&this._stuffTableCellsIntoIncompleteRow(t,r)},t._generateTheadAndTbodyFromTbody=function(e){var t=document.createElement("tr"),n=document.createElement("thead")
return We.a.append(t,it(e.querySelector("tr > td").length,"th")),We.a.append(n,t),{thead:n,tbody:e}},t._generateTheadAndTbodyFromThead=function(e){var t=document.createElement("tr"),n=document.createElement("tbody")
return We.a.append(t,it(e.querySelectorAll("th").length,"td")),We.a.append(n,t),{thead:e,tbody:n}},t._generateTheadAndTbodyFromTr=function(e){var t,n,r=document.createElement("thead"),i=document.createElement("tbody")
return"TH"===e.children[0].tagName?(t=e,n=We.a.createElementWith("<tr>"+it(e.querySelectorAll("th").length,"td")+"</tr>")):(t=We.a.createElementWith("<tr>"+it(e.querySelectorAll("td").length,"th")+"</tr>"),n=e),We.a.append(r,t),We.a.append(i,n),{thead:r,tbody:i}},t._completeIncompleteTable=function(e){var t,n,r=e.tagName
"TABLE"===r?t=e:(t=document.createElement("table"),e.parentNode.insertBefore(t,e.nextSibling),"TBODY"===r?n=this._generateTheadAndTbodyFromTbody(e):"THEAD"===r?n=this._generateTheadAndTbodyFromThead(e):"TR"===r&&(n=this._generateTheadAndTbodyFromTr(e)),t.appendChild(n.thead),t.appendChild(n.tbody)),this._removeEmptyRows(t),this.tableCellAppendAidForTableElement(t)},t._removeEmptyRows=function(e){We.a.findAll(e,"tr").forEach((function(e){e.cells.length||e.parentNode.removeChild(e)}))},t._completeTableIfNeed=function(){var e=this,t=this.wwe.getEditor().getBody()
Se()(t.children).forEach((function(t){e.isTableOrSubTableElement(t.nodeName)&&("TABLE"!==t.nodeName||t.querySelector("tbody")?e._completeIncompleteTable(t):We.a.remove(t))}))},t.resetLastCellNode=function(){this._lastCellNode=null},t.setLastCellNode=function(e){this._lastCellNode=e},t._isModifierKey=function(e){return/((META|SHIFT|ALT|CONTROL)\+?)/g.test(e)},t._isModifierKeyPushed=function(e){return e.metaKey||e.ctrlKey||e.altKey||e.shiftKey},t._addTrIntoContainerIfNeed=function(e){Se()(e.children).forEach((function(e){0===e.querySelectorAll("tr").length&&We.a.append(e,"<tr></tr>")}))},t._expandTableIfNeed=function(e){var t=this.wwe.getEditor().getSelection().cloneRange(),n=We.a.parents(t.startContainer,"table")[0],r=this._getColumnAndRowDifference(e,t)
r.column<0&&this._appendCellForAllRow(n,r.column),r.row<0&&this._appendRow(n,r.row)},t._getColumnAndRowDifference=function(e,t){var n=this._getTableDataFromTable(e),r=n.length,i=n[0].length,o=We.a.closest(t.startContainer,"th,td"),a=o.parentNode,s=We.a.getNodeOffsetOfParent(o),l=We.a.getNodeOffsetOfParent(o.parentNode),c=We.a.parents(a,"table")[0],u=c.querySelector("tr").children.length,d=c.querySelectorAll("tr").length
return!!We.a.parents(a,"tbody").length&&(l+=1),{row:d-(l+r),column:u-(s+i)}},t._appendCellForAllRow=function(e,t){var n=tt?"":"<br />"
We.a.findAll(e,"tr").forEach((function(e,r){for(var i,o=t;o<0;o+=1)i=0===r?"th":"td",We.a.append(e,"<"+i+">"+n+"</"+i+">")}))},t._appendRow=function(e,t){var n=e.querySelectorAll("tr"),r=n[n.length-1].cloneNode(!0),i=tt?"":"<br />"
for(We.a.findAll(r,"td").forEach((function(e){e.innerHTML=i}));t<0;t+=1)We.a.append(e.querySelector("tbody"),r.cloneNode(!0))},t._changeSelectionToTargetCell=function(e,t,n,r){var i,o="next"===n,a="row"===r
a?i=We.a.getSiblingRowCellByDirection(e,n,!1):(i=We.a.getTableCellByDirection(e,n))||(i=We.a.getSiblingRowCellByDirection(e,n,!0)),i?(a&&!o?this._moveToCursorEndOfCell(i,t):t.setStart(i,0),t.collapse(!0)):(i=We.a.parents(e,"table")[0],o?t.setStart(i.nextElementSibling,0):i.previousElementSibling&&"TABLE"!==i.previousElementSibling.nodeName?t.setStart(i.previousElementSibling,1):t.setStartBefore(i),t.collapse(!0))},t._moveToCursorEndOfCell=function(e,t){var n
We.a.isListNode(e.lastChild)&&(n=We.a.getLastNodeBy(e.lastChild,(function(e){return"LI"!==e.nodeName||null!==e.nextSibling})))
var r=We.a.getLastNodeBy(n||e,(function(e){return!We.a.isTextNode(e)})),i=r||n||e,o=r?r.length:i.childNodes.length-1
t.setStart(i,o)},t._moveCursorTo=function(e,t,n){var r,i=this.wwe.getEditor(),o=i.getSelection().cloneRange(),a=We.a.closest(o.startContainer,"td,th")
if(o.collapsed&&this.wwe.isInTable(o)&&a){if("row"===t&&!this._isMovedCursorToRow(o,e))return r
"previous"!==e&&"row"!==t||Me()(n)||n.preventDefault(),this._changeSelectionToTargetCell(a,o,e,t),i.setSelection(o),r=!1}return r},t._isMovedCursorToRow=function(e,t){var n=e.startContainer
return this._isInList(n)?this._isMovedCursorFromListToRow(n,t):this._isMovedCursorFromTextToRow(e,t)},t._isMovedCursorFromListToRow=function(e,t){var n=t+"Sibling",r=this._findListItem(e),i=We.a.getParentNodeBy(r,(function(e,t){var r=null===t[n]&&null===e[n]
return!We.a.isCellNode(e)&&r})),o=We.a.isListNode(i)&&null===i[n]
return We.a.isCellNode(i.parentNode)&&o},t._isMovedCursorFromTextToRow=function(e,t){var n=e.startContainer,r=e.startOffset,i=We.a.isCellNode(n)?n.childNodes[r]:n,o=We.a.getParentNodeBy(i,(function(e){return!We.a.isCellNode(e)&&!We.a.isTextNode(e)})),a=We.a.getSiblingNodeBy(o,t,(function(e){return null!==e&&"BR"!==e.nodeName}))
return a&&null===a[t+"Sibling"]},t._removeContentsAndChangeSelectionIfNeed=function(e,t,n){var r=t.length<=1,i="BACK_SPACE"===t||"DELETE"===t,o=this.wwe.componentManager.getManager("tableSelection").getSelectedCells(),a=o[0],s=!1
return(r||i)&&!this._isModifierKeyPushed(n)&&o.length&&(i&&this._recordUndoStateIfNeed(e),this._removeTableContents(o),this._lastCellNode=a,e.setStart(a,0),e.collapse(!0),this.wwe.getEditor().setSelection(e),s=!0),s},t.getTableIDClassName=function(){var e="te-content-table-"+this.tableID
return this.tableID+=1,e},t.destroy=function(){var e=this
this.eventManager.removeEventHandler("wysiwygRangeChangeAfter.table"),this.eventManager.removeEventHandler("wysiwygSetValueAfter.table"),this.eventManager.removeEventHandler("wysiwygProcessHTMLText.table"),this.eventManager.removeEventHandler("cut.table"),this.eventManager.removeEventHandler("copyBefore.table"),i()(this.keyEventHandlers,(function(t,n){return e.wwe.removeKeyEventHandler(n,t)}))},e}(),at=function(){function e(e){this.wwe=e,this.eventManager=e.eventManager,this.name="tableSelection",this._init()}var t=e.prototype
return t._init=function(){this._initEvent(),De.a.firefox&&(document.execCommand("enableObjectResizing",!1,"false"),document.execCommand("enableInlineTableEditing",!1,"false"))},t._initEvent=function(){var e,t,n,r=this
this._tableSelectionTimer=null,this._removeSelectionTimer=null,this._isSelectionStarted=!1
var i=function(i){t=We.a.closest(i.data.target,"[contenteditable=true] td,th")
var o=r.wwe.getEditor().getSelection(),a=We.a.parents(t,"[contenteditable=true] table"),s=e===t,l=r._isTextSelect(o,s)&&!Je()(e,"te-cell-selected")
r._isSelectionStarted&&a&&!l&&(window.getSelection().removeAllRanges(),De.a.firefox&&!r._removeSelectionTimer&&(r._removeSelectionTimer=setInterval((function(){window.getSelection().removeAllRanges()}),10)),r.highlightTableCellsBy(e,t),n=t)},o=function(){r._isSelectionStarted&&(r._isSelectionStarted=!1,r.eventManager.removeEventHandler("mouseover.tableSelection"),r.eventManager.removeEventHandler("mouseup.tableSelection"))},a=function(i){t=We.a.closest(i.data.target,"[contenteditable=true] td,th")
var a=r.wwe.getEditor().getSelection(),s=e===t,l=r._isTextSelect(a,s)&&!Je()(e,"te-cell-selected")
r._clearTableSelectionTimerIfNeed(),r._isSelectionStarted&&(l||r._isListSelect(a)?r.removeClassAttrbuteFromAllCellsIfNeed():(r.wwe.componentManager.getManager("table").resetLastCellNode(),t=t||n,(a=r.wwe.getEditor().getSelection()).setStart(t,0),De.a.msie?a.setEnd(t,1):(a.setEnd(t,0),a.collapse(!1)),r.wwe.getEditor().setSelection(a)),r.onDragEnd&&r.onDragEnd()),o()}
this.eventManager.listen("mousedown.tableSelection",(function(n){var s=!!(e=We.a.closest(n.data.target,"[contenteditable=true] td,th"))&&Je()(e,"te-cell-selected")
t=null,!s||s&&2!==n.data.button?(r.removeClassAttrbuteFromAllCellsIfNeed(),e&&(r.setTableSelectionTimerIfNeed(e),r.eventManager.listen("mouseover.tableSelection",i),r.eventManager.listen("mouseup.tableSelection",a),r.onDragStart&&r.onDragStart(e))):2===n.data.button&&o()})),this.eventManager.listen("copyBefore.tableSelection",o),this.eventManager.listen("pasteBefore.tableSelection",o)},t._isTextSelect=function(e,t){return/TD|TH|TEXT/i.test(e.commonAncestorContainer.nodeName)&&t},t._isListSelect=function(e){return/UL|OL|LI/i.test(e.commonAncestorContainer.nodeName)},t.setTableSelectionTimerIfNeed=function(e){We.a.parents(e,"[contenteditable=true] table").length&&(this._isSelectionStarted=!0)},t._clearTableSelectionTimerIfNeed=function(){clearTimeout(this._tableSelectionTimer),De.a.firefox&&this._removeSelectionTimer&&(clearTimeout(this._removeSelectionTimer),this._removeSelectionTimer=null)},t._reArrangeSelectionIfneed=function(e,t){var n=We.a.parents(e,"[contenteditable=true] table").length,r=We.a.parents(t,"[contenteditable=true] table").length,i=!r&&n
if(r&&!n)e=We.a.parents(t,"[contenteditable=true] table")[0].querySelectorAll("th")[0]
else if(i){var o=We.a.parents(e,"[contenteditable=true] table")[0].querySelectorAll("td")
t=o[o.length-1]}return{startContainer:e,endContainer:t}},t._applySelectionDirection=function(e,t){var n=We.a.getNodeOffsetOfParent,r=e.startContainer,i=e.endContainer,o=n(We.a.closest(r,"[contenteditable=true] tr"))-n(We.a.closest(i,"[contenteditable=true] tr")),a=n(r)-n(i),s=o<0
return 0===o?a>0?(t.setStart(i,0),t.setEnd(r,1)):(t.setStart(r,0),t.setEnd(i,1)):s?(t.setStart(r,0),t.setEnd(i,1)):(t.setStart(i,0),t.setEnd(r,1)),t},t.getSelectionRangeFromTable=function(e,t){var n,r,i=We.a.getNodeOffsetOfParent,o=i(e.parentNode),a=i(t.parentNode),s=i(e),l=i(t),c=We.a.getParentUntil(e,"TABLE"),u=We.a.getParentUntil(t,"TABLE"),d="TBODY"===We.a.getNodeName(c)&&"THEAD"===We.a.getNodeName(u),h=c!==u,f=!!We.a.parents(e,"tbody").length&&!!We.a.parents(t,"tbody").length,p={row:o,cell:s},g={row:a,cell:l}
return d?p.row+=1:h?g.row+=1:f&&(p.row+=1,g.row+=1),o>a||o===a&&s>l?(n=g,r=p):(n=p,r=g),{from:n,to:r}},t.highlightTableCellsBy=function(e,t){var n=We.a.findAll(We.a.parents(e,"[contenteditable=true] table")[0],"tr"),r=this.getSelectionRangeFromTable(e,t),i=r.from.row,o=r.from.cell,a=r.to.row,s=r.to.cell
n.forEach((function(e,t){We.a.findAll(e,"td,th").forEach((function(e,n){t===i&&n<o||t===a&&n>s||t<i||t>a?m()(e,"te-cell-selected"):p()(e,"te-cell-selected")}))}))},t.removeClassAttrbuteFromAllCellsIfNeed=function(){We.a.findAll(this.wwe.getBody(),"td.te-cell-selected,th.te-cell-selected").forEach((function(e){m()(e,"te-cell-selected"),e.getAttribute("class")||e.removeAttribute("class")}))},t.getSelectedCells=function(){return this.wwe.getBody().querySelectorAll(".te-cell-selected")},t.createRangeBySelectedCells=function(){var e=this.wwe.getEditor(),t=e.getSelection().cloneRange(),n=this.getSelectedCells(),r=n[0],i=n[n.length-1]
n.length&&this.wwe.isInTable(t)&&(t.setStart(r,0),t.setEnd(i,i.childNodes.length),e.setSelection(t))},t.styleToSelectedCells=function(e,t){this.createRangeBySelectedCells(),e(this.wwe.getEditor(),t)},t.destroy=function(){this.eventManager.removeEventHandler("mousedown.tableSelection"),this.eventManager.removeEventHandler("mouseover.tableSelection"),this.eventManager.removeEventHandler("mouseup.tableSelection"),this.eventManager.removeEventHandler("copyBefore.tableSelection"),this.eventManager.removeEventHandler("pasteBefore.tableSelection")},e}(),st=function(){function e(e){this.wwe=e,this.eventManager=e.eventManager,this.name="hr",this._init()}var t=e.prototype
return t._init=function(){this._initEvent()},t._initEvent=function(){var e=this
this.eventManager.listen("wysiwygSetValueAfter",(function(){e._insertEmptyLineIfNeed(),e._changeHRForWysiwyg()}))},t._insertEmptyLineIfNeed=function(){var e=this.wwe.getBody(),t=e.firstChild,n=e.lastChild
t&&"HR"===t.nodeName?e.insertBefore(We.a.createEmptyLine(),t):n&&"HR"===n.nodeName&&e.appendChild(We.a.createEmptyLine())},t._changeHRForWysiwyg=function(){var e=this.wwe.getBody()
We.a.findAll(e,"hr").forEach((function(e){e.parentNode.replaceChild(We.a.createHorizontalRule(),e)}))},e}(),lt=function(){function e(e){this.wwe=e,this.eventManager=e.eventManager,this.name="p",this._initEvent()}var t=e.prototype
return t._initEvent=function(){var e=this
this.eventManager.listen("wysiwygSetValueBefore",(function(t){return e._splitPtagContentLines(t)})),this.eventManager.listen("wysiwygSetValueAfter",(function(){e._ensurePtagContentWrappedWithDiv(),e._unwrapPtags()}))},t._splitPtagContentLines=function(e){if(e){var t=We.a.createElementWith("<div>"+e+"</div>")
We.a.findAll(t,"p").forEach((function(e){var t=e.innerHTML.split(/<br>/gi),n=t.length-1,r=e.nextElementSibling||e.nextSibling,i=""
i=t.map((function(e,t){var r=""
return t>0&&t<n&&(e=e||"<br>"),e&&(r="<div>"+e+"</div>"),r})),r&&"P"===r.nodeName&&i.push("<div><br></div>"),We.a.replaceWith(e,i.join(""))})),e=t.innerHTML}return e},t._ensurePtagContentWrappedWithDiv=function(){var e=this
We.a.findAll(this.wwe.getBody(),"p").forEach((function(t){t.querySelectorAll("div").length||We.a.wrapInner(t,"div"),e._findNextParagraph(t,"p")&&We.a.append(t,"<div><br></div>")}))},t._unwrapPtags=function(){We.a.findAll(this.wwe.getBody(),"div").forEach((function(e){var t=e.parentNode
"P"===t.tagName&&We.a.unwrap(t)}))},t._findNextParagraph=function(e,t){var n=e.nextElementSibling
return t?n&&je()(n,t)?n:null:n},e}(),ct=/h[\d]/i,ut=function(){function e(e){this.wwe=e,this.eventManager=e.eventManager,this.name="heading",this._init()}var t=e.prototype
return t._init=function(){this._initEvent(),this._initKeyHandler()},t._initEvent=function(){var e=this
this.eventManager.listen("wysiwygSetValueAfter",(function(){e._wrapDefaultBlockToHeadingInner()}))},t._initKeyHandler=function(){var e=this
this.wwe.addKeyEventHandler("ENTER",(function(t,n){return!e.wwe.hasFormatWithRx(ct)||(e._onEnter(t,n),!1)})),this.wwe.addKeyEventHandler("BACK_SPACE",(function(t,n){return!e.wwe.hasFormatWithRx(ct)||(e._removePrevTopNodeIfNeed(t,n),!1)}))},t._wrapDefaultBlockToHeadingInner=function(){We.a.findAll(this.wwe.getBody(),"h1, h2, h3, h4, h5, h6").forEach((function(e){!We.a.children(e,"div, p").length&&We.a.wrapInner(e,"div")}))},t._unwrapHeading=function(){this.wwe.unwrapBlockTag((function(e){return ct.test(e)}))},t._onEnter=function(e,t){var n=this
t.startOffset>0?this.wwe.defer((function(e){n._unwrapHeading(),e.getEditor().removeLastUndoStack()})):(e.preventDefault(),this._insertEmptyBlockToPrevious(t))},t._insertEmptyBlockToPrevious=function(e){this.wwe.getEditor().saveUndoState(e)
var t=We.a.createElementWith("<div><br></div>")
We.a.insertBefore(t,We.a.getParentUntil(e.startContainer,this.wwe.getBody()))},t._removePrevTopNodeIfNeed=function(e,t){var n=!1
if(t.collapsed&&0===t.startOffset){var r=t.startContainer,i=We.a.getTopPrevNodeUnder(r,this.wwe.getBody()),o=i&&0===i.textContent.length,a=this.wwe.getEditor()
0===r.textContent.length?n=this._removeHedingAndChangeSelection(e,t,i):o&&(e.preventDefault(),a.saveUndoState(t),We.a.remove(i),n=!0)}return n},t._removeHedingAndChangeSelection=function(e,t,n){var r=t.startContainer,i=this.wwe.getEditor(),o=this.wwe.getBody(),a=ct.test(We.a.getNodeName(r))?r:We.a.parents(r,"h1,h2,h3,h4,h5,h6")[0],s=n,l=1
return e.defaultPrevented||(e.preventDefault(),i.saveUndoState(t)),We.a.remove(a),n||(s=We.a.children(o,"div")[0],l=0),t.setStart(s,l),t.collapse(!0),i.setSelection(t),!0},e}(),dt=n(42),ht=n.n(dt),ft=De.a.msie&&10===De.a.version,pt=ft?"":"<br>",gt={"&":"&amp;","<":"&lt;",">":"&gt;"},mt=/\u200B/g,vt=function(){function e(e){this.wwe=e,this.eventManager=e.eventManager,this.name="codeblock",this._init()}var t=e.prototype
return t._init=function(){this._initKeyHandler(),this._initEvent()},t._initKeyHandler=function(){var e=this
this._keyEventHandlers={BACK_SPACE:this._onBackspaceKeyEventHandler.bind(this),ENTER:function(t,n){!e.wwe.isInTable(n)&&e.wwe.getEditor().hasFormat("CODE")&&e.wwe.defer((function(){var t=e.wwe.getRange().startContainer,n=e._getCodeNode(t)
n&&!We.a.getTextLength(n)&&n.parentNode.removeChild(n)}))}},i()(this._keyEventHandlers,(function(t,n){return e.wwe.addKeyEventHandler(n,t)}))},t._getCodeNode=function(e){var t
return"CODE"===e.nodeName?t=e:"CODE"===e.parentNode.nodeName&&(t=e.parentNode),t},t._initEvent=function(){var e=this
this.eventManager.listen("wysiwygSetValueAfter.codeblock",(function(){e.modifyCodeBlockForWysiwyg()})),this.eventManager.listen("wysiwygProcessHTMLText.codeblock",(function(t){return e._changePreToPreCode(t)}))},t.prepareToPasteOnCodeblock=function(e){var t=this.wwe.getEditor().getDocument().createDocumentFragment(),n=this.convertNodesToText(e)
return n=n.replace(/\n$/,""),t.appendChild(document.createTextNode(n)),t},t.convertNodesToText=function(e){for(var t="",n=e.shift();ht()(n);)n.childNodes&&We.a.isBlockNode(n)?t+=this.convertNodesToText(Se()(n.childNodes)):"BR"===n.nodeName?t+="\n":t+=n.textContent,n=e.shift()
return t},t._copyCodeblockTypeFromRangeCodeblock=function(e,t){var n=We.a.getParentUntil(t.commonAncestorContainer,this.wwe.getBody())
if("PRE"===We.a.getNodeName(n)){var r=n.attributes
i()(r,(function(t){e.setAttribute(t.name,t.value)}))}return e},t._changePreToPreCode=function(e){return e.replace(/<pre( .*?)?>((.|\n)*?)<\/pre>/g,(function(e,t,n){return"<pre><code"+(t||"")+">"+n+"</code></pre>"}))},t.modifyCodeBlockForWysiwyg=function(e){e||(e=this.wwe.getBody()),We.a.findAll(e,"pre").forEach((function(e){var t,n,r=e.querySelector("code")
r&&(t=r.getAttribute("data-language"),n=r.getAttribute("data-backticks")),e.children.length>1&&Se()(e.children).forEach((function(e){"DIV"!==e.nodeName&&"P"!==e.nodeName||e.querySelectorAll("br").length||(e.innerHTML+=e.innerHTML+"\n")}))
var i=e.querySelectorAll("br")
i.length&&We.a.replaceWith(i,"\n")
var o,a=e.textContent.replace(/\s+$/,"")
We.a.empty(e),e.innerHTML=a?(o=a)?o.replace(/[<>&]/g,(function(e){return gt[e]||e})):"":pt,t&&(e.setAttribute("data-language",t),p()(e,"lang-"+t)),n&&e.setAttribute("data-backticks",n),e.setAttribute("data-te-codeblock","")}))},t._onBackspaceKeyEventHandler=function(e,t){var n=!0,r=this.wwe.getEditor(),i=t.commonAncestorContainer
if(this._isCodeBlockFirstLine(t)&&!this._isFrontCodeblock(t))this._removeCodeblockFirstLine(i),t.collapse(!0),n=!1
else if(t.collapsed&&this._isEmptyLine(i)&&this._isBetweenSameCodeblocks(i)){var o=i.previousSibling,a=i.nextSibling,s=o.textContent.length
r.saveUndoState(t),i.parentNode.removeChild(i),this._mergeCodeblocks(o,a),t.setStart(o.childNodes[0],s),t.collapse(!0),n=!1}return n||(r.setSelection(t),e.preventDefault()),n},t._isEmptyLine=function(e){var t=e.nodeName,n=e.childNodes,r=ft?""===e.textContent:1===n.length&&"BR"===n[0].nodeName
return"DIV"===t&&r},t._isBetweenSameCodeblocks=function(e){var t=e.previousSibling,n=e.nextSibling
return"PRE"===We.a.getNodeName(t)&&"PRE"===We.a.getNodeName(n)&&t.getAttribute("data-language")===n.getAttribute("data-language")},t._mergeCodeblocks=function(e,t){var n=t.textContent
e.childNodes[0].textContent+="\n"+n,t.parentNode.removeChild(t)},t._isCodeBlockFirstLine=function(e){return this.isInCodeBlock(e)&&e.collapsed&&0===e.startOffset},t._isFrontCodeblock=function(e){var t=We.a.getParentUntil(e.startContainer,this.wwe.getEditor().getRoot()).previousSibling
return t&&"PRE"===t.nodeName},t._removeCodeblockFirstLine=function(e){var t=this.wwe.getEditor(),n="PRE"===e.nodeName?e:e.parentNode,r=n.textContent.replace(mt,"")
t.modifyBlocks((function(){var e=t.getDocument().createDocumentFragment(),i=r.split("\n"),o=document.createElement("div"),a=i.shift()
if(o.innerHTML=""+a+pt,e.appendChild(o),i.length){var s=n.cloneNode()
s.textContent=i.join("\n"),e.appendChild(s)}return e}))},t.isInCodeBlock=function(e){var t
return t=e.collapsed?e.startContainer:e.commonAncestorContainer,!!We.a.closest(t,"pre")},t.destroy=function(){var e=this
this.eventManager.removeEventHandler("wysiwygSetValueAfter.codeblock"),this.eventManager.removeEventHandler("wysiwygProcessHTMLText.codeblock"),i()(this._keyEventHandlers,(function(t,n){return e.wwe.removeKeyEventHandler(n,t)}))},e}(),yt=n(55),bt=n.n(yt),Ct=/\b(H[\d]|LI|P|BLOCKQUOTE|TD)\b/,wt=/Trident\/[456]\./.test(navigator.userAgent),_t=function(e){var t,n
function r(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i]
return(t=e.call.apply(e,[this].concat(r))||this)._decorateHandlerToCancelable("copy"),t._decorateHandlerToCancelable(wt?"beforecut":"cut"),t._decorateHandlerToCancelable(wt?"beforepaste":"paste"),t.getBody=function(){return t.body=t.body||t.getRoot(),t.body},t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n
var i=r.prototype
return i._decorateHandlerToCancelable=function(e){var t=this._events[e]
if(t.length>1)throw new Error("too many"+e+"handlers in squire")
var n=t[0].bind(this)
t[0]=function(e){e.defaultPrevented||e.squirePrevented||n(e)}},i.changeBlockFormat=function(e,t){var n=this
this.modifyBlocks((function(r){var i,o,a,s,l,c,u
if(r.childNodes.length?i=r.childNodes.item(0):(i=n.createDefaultBlock(),r.appendChild(i)),e){for(;i.firstChild;)i=i.firstChild
for(u=function(e){s.appendChild(e)};i!==r;){if(l=i.tagName,le()(e)?e(l):l===e){s=i.childNodes.item(0),(!We.a.isElemNode(s)||i.childNodes.length>1)&&(s=n.createDefaultBlock(),Se()(i.childNodes).forEach(u),(c=s.lastChild)&&"BR"===We.a.getNodeName(c)&&s.removeChild(c)),a=t?n.createElement(t,[s]):s,(o=n.getDocument().createDocumentFragment()).appendChild(a),r=o
break}i=i.parentNode}}return o&&e||!t||"DIV"!==We.a.getNodeName(r.childNodes[0])||(r=n.createElement(t,[r.childNodes[0]])),r}))},i.changeBlockFormatTo=function(e){this.changeBlockFormat((function(e){return Ct.test(e)}),e)},i.getCaretPosition=function(){return this.getCursorPosition()},i.replaceSelection=function(e,t){t&&this.setSelection(t),this._ignoreChange=!0,this.insertHTML(e)},i.replaceRelativeOffset=function(e,t,n){var r=this.getSelection().cloneRange()
this._replaceRelativeOffsetOfSelection(e,t,n,r)},i._replaceRelativeOffsetOfSelection=function(e,t,n,r){var i,o,a,s=r.endContainer,l=r.endOffset
"TEXT"!==We.a.getNodeName(s)&&(s=this._getClosestTextNode(s,l))&&(l=We.a.isTextNode(s)?s.nodeValue.length:s.textContent.length),s?(i=this.getSelectionInfoByOffset(s,l+t),r.setStart(i.element,i.offset),a=l+(t+n),o=this.getSelectionInfoByOffset(s,a),r.setEnd(o.element,o.offset),this.replaceSelection(e,r)):this.replaceSelection(e)},i._getClosestTextNode=function(e,t){var n=We.a.getChildNodeByOffset(e,t-1)
return"TEXT"!==We.a.getNodeName(n)&&(n=n.previousSibling),n},i.getSelectionInfoByOffset=function(e,t){var n,r,i,o,a=t>=0?"next":"previous",s=Math.abs(t),l=n
for(n="next"===a?e:e.previousSibling,i=s,o=0;n&&!(s<=(o+=r=We.a.isTextNode(n)?n.nodeValue.length:n.textContent.length));)i-=r,We.a.getTextLength(n)>0&&(l=n),n=n[a+"Sibling"]
return n||(n=l,i=We.a.getTextLength(n)),"previous"===a&&(i=We.a.getTextLength(n)-i),{element:n,offset:i}},i.getSelectionPosition=function(e,t,n){var r=this.createElement("INPUT"),i=e.cloneRange(),o=this.getSelectionInfoByOffset(e.endContainer,e.endOffset+(n||0))
i.setStart(i.startContainer,i.startOffset),i.setEnd(o.element,o.offset),this._ignoreChange=!0,this.insertElement(r,i)
var a=We.a.getOffset(r)
return"over"!==t&&(a.top+=r.offsetHeight),r.parentNode.removeChild(r),e.setStart(e.endContainer,e.endOffset),e.collapse(!0),this.setSelection(e),a},i.removeLastUndoStack=function(){this._undoStack.length&&(this._undoStackLength-=1,this._undoIndex-=1,this._undoStack.pop(),this._isInUndoState=!1)},i.replaceParent=function(e,t,n){var r=We.a.closest(e,t)
r&&(We.a.wrapInner(r,n),We.a.unwrap(r))},i.preserveLastLine=function(){var e=this.getBody().children,t=e[e.length-1]
t&&"DIV"!==We.a.getNodeName(t)&&(this._ignoreChange=!0,We.a.insertAfter(this.createDefaultBlock(),t))},i.scrollTop=function(e){return Me()(e)||(this.getBody().scrollTop=e),this.getBody().scrollTop},i.isIgnoreChange=function(){return this._ignoreChange},i.focus=function(){bt.a.prototype.focus.call(this)},i.blockCommandShortcuts=function(){var e=this,t=b.b?"meta":"ctrl";["b","i","u","shift-7","shift-5","shift-6","shift-8","shift-9","[","]","d"].forEach((function(n){e.setKeyHandler(t+"-"+n,(function(e,t){t.preventDefault()}))}))},r}(bt.a),Tt=De.a.msie&&11===De.a.version,Et=-1!==navigator.appVersion.indexOf("Win")&&De.a.chrome,xt=/Windows (NT )?10/g.test(navigator.appVersion),St=Tt||Et&&!xt,Nt=function(){function e(e,t){this._wwe=e,St&&(this.isComposition=!1,this._initCompositionEvent()),this.setRange(t||this._wwe.getRange())}var t=e.prototype
return t._initCompositionEvent=function(){var e=this
this._wwe.getEditor().addEventListener("compositionstart",(function(){e.isComposition=!0})),this._wwe.getEditor().addEventListener("compositionend",(function(){e.isComposition=!1}))},t.setRange=function(e){this._range&&this._range.detach(),this._range=e},t.expandStartOffset=function(){var e=this._range
We.a.isTextNode(e.startContainer)&&e.startOffset>0&&e.setStart(e.startContainer,e.startOffset-1)},t.expandEndOffset=function(){var e=this._range
We.a.isTextNode(e.endContainer)&&e.endOffset<e.endContainer.nodeValue.length&&e.setEnd(e.endContainer,e.endOffset+1)},t.setEndBeforeRange=function(e){var t=e.startOffset
this.isComposition&&(t+=1),this._range.setEnd(e.startContainer,t)},t.getTextContent=function(){return this._range.cloneContents().textContent},t.replaceContent=function(e){this._wwe.getEditor().setSelection(this._range),this._wwe.getEditor().insertHTML(e),this._wwe.isInTable(this._range)&&this._wwe.eventManager.emit("wysiwygRangeChangeAfter",this._wwe),this._range=this._wwe.getRange()},t.deleteContent=function(){this._wwe.getEditor().setSelection(this._range),this._wwe.getEditor().insertHTML(""),this._range=this._wwe.getRange()},t.peekStartBeforeOffset=function(e){var t=this._range.cloneRange()
return t.setStart(t.startContainer,Math.max(t.startOffset-e,0)),t.setEnd(this._range.startContainer,this._range.startOffset),t.cloneContents().textContent},e}(),kt=function(e){var t,n
function r(t){var n,r=t.eventManager,i=t.container,o=t.wysiwygEditor
return(n=e.call(this,{eventManager:r,container:i,attachedSelector:"pre"})||this)._wysiwygEditor=o,n._popupCodeBlockLanguages=null,n._initDOM(),n._initDOMEvent(),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n
var i=r.prototype
return i._initDOM=function(){var e=this
p()(this.el,"code-block-header"),this._languageLabel=We.a.createElementWith("<span>text</span>"),We.a.append(this.el,this._languageLabel),this._buttonOpenModalEditor=We.a.createElementWith('<button type="button">Editor</button>'),We.a.append(this.el,this._buttonOpenModalEditor),this._eventManager.emit("removeEditor",(function(){Ue()(e._buttonOpenModalEditor,"click"),e._buttonOpenModalEditor=null}))},i._initDOMEvent=function(){var e=this
He()(this._buttonOpenModalEditor,"click",(function(){return e._openPopupCodeBlockEditor()}))},i._openPopupCodeBlockEditor=function(){this._eventManager.emit("openPopupCodeBlockEditor",this.getAttachedElement())},i._updateLanguage=function(){var e=this.getAttachedElement(),t=e?e.getAttribute("data-language"):null
this._languageLabel.textContent=t||"text"},i.syncLayout=function(){var e=this.getAttachedElement(),t=We.a.getOffset(e,".te-editor"),n=t.left,r=t.top,i=We.a.getOuterWidth(e)
h()(this.el,{left:n+i-250-window.scrollX+"px",top:r+"px",width:"250px",height:"30px"})},i.onShow=function(){var t=this
e.prototype.onShow.call(this),this._onAttachedElementChange=function(){return t._updateLanguage()},this._eventManager.listen("changeLanguage",this._onAttachedElementChange),this._updateLanguage()},i.onHide=function(){this._eventManager.removeEventHandler("changeLanguage",this._onAttachedElementChange),e.prototype.onHide.call(this)},r}(function(){function e(e){var t=e.eventManager,n=e.container,r=e.attachedSelector
this._eventManager=t,this._attachedSelector="[contenteditable=true] "+r,this._container=n,this._attachedElement=null,this.active=!1,this._createElement(),this._initEvent()}var t=e.prototype
return t._createElement=function(){this.el=We.a.createElementWith('<div class="te-ww-block-overlay"></div>'),h()(this.el,{position:"absolute",display:"none",zIndex:1}),We.a.append(this._container,this.el)},t._initEvent=function(){var e=this
this._eventManager.listen("change",this._onChange.bind(this)),this._eventManager.listen("mouseover",this._onMouseOver.bind(this)),this._eventManager.listen("focus",(function(){e.setVisibility(!1)})),this._eventManager.listen("mousedown",(function(){e.setVisibility(!1)}))},t._onChange=function(){this._attachedElement&&We.a.isContain(document.body,this._attachedElement)?this.syncLayout():this.setVisibility(!1)},t._onMouseOver=function(e){var t=e.data.target,n=We.a.closest(t,this._attachedSelector)
n?(this._attachedElement=n,this.setVisibility(!0)):We.a.closest(t,this.el)?this.setVisibility(!0):this.active||this.setVisibility(!1)},t.syncLayout=function(){var e=We.a.getOffset(this._attachedElement),t=We.a.getOuterWidth(this._attachedElement),n=We.a.getOuterHeight(this._attachedElement)
We.a.setOffset(this.el,e),h()(this.el,{width:t+"px"}),h()(this.el,{height:n+"px"})},t.getAttachedElement=function(){return this._attachedElement||null},t.getVisibility=function(){return"block"===this.el.style.display},t.setVisibility=function(e){e&&this._attachedElement?this.getVisibility()||(h()(this.el,{display:"block"}),this.syncLayout(),this.onShow()):e||this.getVisibility()&&(h()(this.el,{display:"none"}),this.onHide())},t.onShow=function(){},t.onHide=function(){this.active=!1,this._attachedElement=null},e}()),Lt=z.getSharedInstance(),Mt=/<([a-z]+|h\d)>(<br>|<br \/>)<\/\1>/gi,At=/(?:<br>|<br \/>)<\/(.+?)>/gi,Ot=/\b(H[\d]|LI|P|BLOCKQUOTE|TD|PRE)\b/,Bt=/<span([^>]*)>[\u0020]/g,Dt=/[\u0020]<\/span>/g,It=/^(TABLE|H[1-6])$/,Rt="undefined"!=typeof MutationObserver,Pt=function(){function e(e,t,n){var r=this
void 0===n&&(n={}),this.componentManager=new ie(this),this.eventManager=t,this.editorContainerEl=e,this._height=0,this._silentChange=!1,this._keyEventHandlers={},this._managers={},this._linkAttribute=n.linkAttribute||{},this._sanitizer=n.sanitizer,this._initEvent(),this._initDefaultKeyEventHandler(),this.debouncedPostProcessForChange=Re()((function(){return r.postProcessForChange()}),0)}var t=e.prototype
return t.init=function(){var e=document.createElement("div")
this.editorContainerEl.appendChild(e),this.editor=new _t(e,{blockTag:"DIV",leafNodeNames:{HR:!1},allowedBlocks:this._sanitizer?[]:["details","summary"]}),this.editor.blockCommandShortcuts(),this._clipboardManager=new Ge(this),this._initSquireEvent(),this._clipboardManager.init(),p()(this.getBody(),"tui-editor-contents"),h()(this.editorContainerEl,"position","relative"),this._togglePlaceholder(),this.codeBlockGadget=new kt({eventManager:this.eventManager,container:this.editorContainerEl,wysiwygEditor:this})},t._initEvent=function(){var e=this
this.eventManager.listen("wysiwygKeyEvent",(function(t){return e._runKeyEventHandlers(t.data,t.keyMap)})),this.eventManager.listen("wysiwygRangeChangeAfter",(function(){return e.scrollIntoCursor()})),this.eventManager.listen("contentChangedFromWysiwyg",(function(){e._togglePlaceholder()}))},t.addKeyEventHandler=function(e,t){var n=this
t||(t=e,e="DEFAULT"),Oe()(e)||(e=[e]),e.forEach((function(e){n._keyEventHandlers[e]||(n._keyEventHandlers[e]=[]),n._keyEventHandlers[e].push(t)}))},t.removeKeyEventHandler=function(e,t){t||(t=e,e="DEFAULT")
var n=this._keyEventHandlers[e]
n&&(this._keyEventHandlers[e]=n.filter((function(e){return e!==t})))},t._runKeyEventHandlers=function(e,t){var n,r,i=this.getRange();(n=this._keyEventHandlers.DEFAULT)&&ke()(n,(function(n){return r=n(e,i,t)})),(n=this._keyEventHandlers[t])&&!1!==r&&ke()(n,(function(n){return n(e,i,t)}))},t._initSquireEvent=function(){var e=this,t=this.getEditor(),n=!1
t.addEventListener("copy",(function(t){e.eventManager.emit("copy",{source:"wysiwyg",data:t}),Re()((function(){e.isEditorValid()&&e.eventManager.emit("copyAfter",{source:"wysiwyg",data:t})}))()})),t.addEventListener(De.a.msie?"beforecut":"cut",(function(t){e.eventManager.emit("cut",{source:"wysiwyg",data:t}),Re()((function(){e.isEditorValid()&&e.eventManager.emit("cutAfter",{source:"wysiwyg",data:t})}))()})),t.addEventListener(De.a.msie?"beforepaste":"paste",(function(t){e.eventManager.emit("paste",{source:"wysiwyg",data:t})})),t.addEventListener("dragover",(function(e){return e.preventDefault(),!1})),t.addEventListener("drop",(function(t){return t.preventDefault(),e.eventManager.emit("drop",{source:"wysiwyg",data:t}),!1})),t.addEventListener("input",Re()((function(){if(e.isEditorValid()){if(e._silentChange)e._silentChange=!1
else{var t={source:"wysiwyg"}
e.eventManager.emit("changeFromWysiwyg",t),e.eventManager.emit("change",t),e.eventManager.emit("contentChangedFromWysiwyg",e)}e.getEditor().preserveLastLine()}}),0)),t.addEventListener("keydown",(function(t){e.getEditor().getSelection().collapsed||(n=!0),e.eventManager.emit("keydown",{source:"wysiwyg",data:t}),e._onKeyDown(t)})),De.a.firefox&&(t.addEventListener("keypress",(function(t){var r=t.keyCode
13!==r&&9!==r||(e.getEditor().getSelection().collapsed||(n=!0),e.eventManager.emit("keydown",{source:"wysiwyg",data:t}),e._onKeyDown(t))})),t.addEventListener("keyup",(function(){var t=e.getRange()
if(We.a.isTextNode(t.commonAncestorContainer)&&We.a.isTextNode(t.commonAncestorContainer.previousSibling)){var n=t.commonAncestorContainer.previousSibling.length,r=t.commonAncestorContainer
t.commonAncestorContainer.previousSibling.appendData(t.commonAncestorContainer.data),t.setStart(t.commonAncestorContainer.previousSibling,n+t.startOffset),t.collapse(!0),We.a.remove(r),e.setRange(t),t.detach()}}))),t.addEventListener("keyup",(function(t){n&&(e.debouncedPostProcessForChange(),n=!1),e.eventManager.emit("keyup",{source:"wysiwyg",data:t})})),He()(this.editorContainerEl,"scroll",(function(t){e.eventManager.emit("scroll",{source:"wysiwyg",data:t})})),t.addEventListener("click",(function(t){e.eventManager.emit("click",{source:"wysiwyg",data:t})})),t.addEventListener("mousedown",(function(t){e.eventManager.emit("mousedown",{source:"wysiwyg",data:t})})),t.addEventListener("mouseover",(function(t){e.eventManager.emit("mouseover",{source:"wysiwyg",data:t})})),t.addEventListener("mouseout",(function(t){e.eventManager.emit("mouseout",{source:"wysiwyg",data:t})})),t.addEventListener("mouseup",(function(t){e.eventManager.emit("mouseup",{source:"wysiwyg",data:t})})),t.addEventListener("contextmenu",(function(t){e.eventManager.emit("contextmenu",{source:"wysiwyg",data:t})})),t.addEventListener("focus",(function(){e.eventManager.emit("focus",{source:"wysiwyg"})})),t.addEventListener("blur",(function(){e.fixIMERange(),e.eventManager.emit("blur",{source:"wysiwyg"})})),t.addEventListener("pathChange",(function(t){var n={strong:/(^B>|>B$|>B>|^B$|STRONG)/.test(t.path),emph:/(>I|>EM|^I$|^EM$)/.test(t.path),strike:/(^S>|>S$|>S>|^S$|DEL)/.test(t.path),code:/CODE/.test(t.path),codeBlock:/PRE/.test(t.path),blockQuote:/BLOCKQUOTE/.test(t.path),table:/TABLE/.test(t.path),heading:/H[1-6]/.test(t.path),list:/UL>LI(?!.task-list-item)/.test(t.path),orderedList:/OL>LI(?!.task-list-item)/.test(t.path),taskList:/[UL|OL]>LI.task-list-item/.test(t.path),source:"wysiwyg"}
e.eventManager.emit("stateChange",n)})),t.addEventListener("willPaste",(function(t){t.fragment&&e.eventManager.emit("willPaste",{source:"wysiwyg",data:t})}))},t._togglePlaceholder=function(){var e=this.getEditor()
e.modifyDocument((function(){var t=e.getRoot()
t.textContent||t.childNodes.length>1?t.classList.remove("tui-editor-contents-placeholder"):t.classList.add("tui-editor-contents-placeholder")}))},t._onKeyDown=function(e){var t=Lt.convert(e)
e.keyCode&&(this.eventManager.emit("keyMap",{source:"wysiwyg",keyMap:t,data:e}),e.defaultPrevented||this.eventManager.emit("wysiwygKeyEvent",{keyMap:t,data:e}))},t._initDefaultKeyEventHandler=function(){var e=this
this.addKeyEventHandler("ENTER",(function(t,n){e._isInOrphanText(n)&&e.defer((function(){e._wrapDefaultBlockToOrphanTexts(),e.breakToNewDefaultBlock(n,"before")})),e.defer((function(){return e.scrollIntoCursor()}))})),this.addKeyEventHandler("TAB",(function(t){var n=e.getEditor(),r=n.getSelection(),i=r.collapsed&&e._isCursorNotInRestrictedAreaOfTabAction(n),o=!r.collapsed&&We.a.isTextNode(r.commonAncestorContainer)
return t.preventDefault(),!i&&!o||(n.insertPlainText("    "),!1)})),this.addKeyEventHandler("BACK_SPACE",(function(t,n,r){return e._handleRemoveKeyEvent(t,n,r)})),this.addKeyEventHandler("DELETE",(function(t,n,r){return e._handleRemoveKeyEvent(t,n,r)}))},t._handleRemoveKeyEvent=function(e,t,n){var r=this.getEditor()
if(this._isStartHeadingOrTableAndContainsThem(t)){var i="BACK_SPACE"===n?"backspace":"delete"
return r.removeAllFormatting(),r._keyHandlers[i](r,e,r.getSelection()),r.removeLastUndoStack(),!1}return!0},t._isStartHeadingOrTableAndContainsThem=function(e){var t=e.startContainer,n=e.startOffset,r=e.commonAncestorContainer,i=e.collapsed,o=this.getEditor().getRoot(),a=!1
return i||r!==o||(t===o?a=It.test(We.a.getChildNodeByOffset(t,n).nodeName):0===n&&(a=It.test(We.a.getParentUntil(t,o).nodeName))),a},t._wrapDefaultBlockToOrphanTexts=function(){var e=Se()(this.getBody().childNodes).filter((function(e){return We.a.isTextNode(e)}))
We.a.getAllTextNode(this.getBody()),e.forEach((function(e){e.nextSibling&&"BR"===e.nextSibling.tagName&&We.a.remove(e.nextSibling),We.a.wrap(e,document.createElement("div"))}))},t._isInOrphanText=function(e){return e.startContainer.nodeType===Node.TEXT_NODE&&e.startContainer.parentNode===this.getBody()},t._wrapDefaultBlockTo=function(e){this.saveSelection(e),this._joinSplitedTextNodes(),this.restoreSavedSelection()
var t=(e=this.getRange()).startContainer,n=e.startOffset,r=this.getEditor().createDefaultBlock([e.startContainer]),i=We.a.getChildNodeByOffset(e.startContainer,e.startOffset)
i?e.setStartBefore(i):e.selectNodeContents(e.startContainer),e.collapse(!0),e.insertNode(r),e.setStart(t,n),e.collapse(!0),this.setRange(e)},t._joinSplitedTextNodes=function(){var e,t,n=[]
Se()(this.getBody().childNodes).filter((function(e){return We.a.isTextNode(e)})).forEach((function(r){e===r.previousSibling?(t.nodeValue+=r.nodeValue,n.push(r)):t=r,e=r})),We.a.remove(n)},t.saveSelection=function(e){e||(e=this.getRange()),this.getEditor()._saveRangeToBookmark(e)},t.setSelectionByContainerAndOffset=function(e,t,n,r){var i=this.getEditor(),o=i.getSelection()
return o.setStart(e,t),o.setEnd(n,r),i.setSelection(o),o},t.restoreSavedSelection=function(){this.setRange(this.getEditor()._getRangeAndRemoveBookmark())},t.reset=function(){this.setValue("")},t.changeBlockFormatTo=function(e){this.getEditor().changeBlockFormatTo(e),this.eventManager.emit("wysiwygRangeChangeAfter",this)},t.makeEmptyBlockCurrentSelection=function(){var e=this
this.getEditor().modifyBlocks((function(t){return t.textContent||(t=e.getEditor().createDefaultBlock()),t}))},t.focus=function(){var e=this.scrollTop()
this.editor.focus(),e!==this.scrollTop()&&this.scrollTop(e)},t.blur=function(){this.editor.blur()},t.remove=function(){Ue()(this.editorContainerEl,"scroll"),this.getEditor().destroy(),this.editor=null,this.body=null,this.eventManager=null},t.setHeight=function(e){this._height=e,h()(this.editorContainerEl,{overflow:"auto",height:"100%"}),h()(this.editorContainerEl.parentNode,{height:l()(e)?e+"px":e})
var t=this.editorContainerEl.style,n=this.getBody().style,r=parseInt(t.paddingTop,10)-parseInt(t.paddingBottom,10),i=parseInt(n.marginTop,10)-parseInt(n.marginBottom,10)
h()(this.getBody(),{minHeight:e-i-r+"px"})},t.setMinHeight=function(e){var t=this.getBody()
h()(t,"minHeight",e+"px")},t.setPlaceholder=function(e){e&&this.getEditor().getRoot().setAttribute("data-placeholder",e)},t.getLinkAttribute=function(){return this._linkAttribute},t.setValue=function(e,t){void 0===t&&(t=!0),e=this.eventManager.emitReduce("wysiwygSetValueBefore",e),this.editor.setHTML(e),this.eventManager.emit("wysiwygSetValueAfter",this),this.eventManager.emit("contentChangedFromWysiwyg",this),t&&this.moveCursorToEnd(),this.getEditor().preserveLastLine(),this.getEditor().removeLastUndoStack(),this.getEditor().saveUndoState()},t.insertText=function(e){this.editor.insertPlainText(e)},t.getValue=function(){this._prepareGetHTML()
var e=this.editor.getHTML()
return e=(e=(e=(e=(e=(e=e.replace(Mt,(function(e,t){return"li"===t?e:"td"===t||"th"===t?"<"+t+"></"+t+">":"<br />"}))).replace(Bt,"<span$1>&nbsp;")).replace(Dt,"&nbsp;</span>")).replace(At,"</$1>")).replace(/<div[^>]*>/g,"")).replace(/<\/div>/g,"<br />"),this.eventManager.emitReduce("wysiwygProcessHTMLText",e)},t._prepareGetHTML=function(){var e=this
this.getEditor().modifyDocument((function(){e._joinSplitedTextNodes(),e.eventManager.emit("wysiwygGetValueBefore",e)}))},t.postProcessForChange=function(){var e=this
this.isEditorValid()&&this.getEditor().modifyDocument((function(){e.eventManager.emit("wysiwygRangeChangeAfter",e)}))},t.readySilentChange=function(){Rt&&!this.getEditor().isIgnoreChange()&&(this._silentChange=!0)},t.getEditor=function(){return this.editor},t.replaceSelection=function(e,t){this.getEditor().replaceSelection(e,t)},t.replaceRelativeOffset=function(e,t,n){this.getEditor().replaceRelativeOffset(e,t,n)},t.addWidget=function(e,t,n,r){var i=this.getEditor().getSelectionPosition(e,n,r),o=We.a.getOffset(this.editorContainerEl)
this.editorContainerEl.appendChild(t),h()(t,{position:"absolute",top:i.top-o.top+this.scrollTop()+"px",left:i.left-o.left+"px"})},t.getBody=function(){return this.getEditor().getBody()},t.hasFormatWithRx=function(e){return this.getEditor().getPath().match(e)},t.breakToNewDefaultBlock=function(e,t){var n=this.editor.createDefaultBlock(),r=We.a.getChildNodeByOffset(e.startContainer,e.startOffset)||We.a.getChildNodeByOffset(e.startContainer,e.startOffset-1),i=We.a.getParentUntil(r,this.getBody())
"before"===t?We.a.insertBefore(n,i):We.a.insertAfter(n,i),e.setStart(n,0),e.collapse(!0),this.setRange(e)},t.replaceContentText=function(e,t,n){var r=e.innerHTML
e.innerHTML=r.replace(t,n)},t.unwrapBlockTag=function(e){e||(e=function(e){return Ot.test(e)}),this.getEditor().changeBlockFormat(e),this.eventManager.emit("wysiwygRangeChangeAfter",this)},t.scrollIntoCursor=function(){var e=this.scrollTop(),t=this.getEditor().getCursorPosition(),n=t.top,r=t.height,i=this.editorContainerEl.getBoundingClientRect(),o=i.top,a=n-o,s=n+r-(o+i.height)
a<0?this.scrollTop(e+a):s>0&&this.scrollTop(Math.ceil(e+s))},t.moveCursorToEnd=function(){this.getEditor().moveCursorToEnd(),this.scrollIntoCursor(),this._correctRangeAfterMoveCursor("end")},t.moveCursorToStart=function(){this.getEditor().moveCursorToStart(),this.scrollTop(0)},t.scrollTop=function(e){return Me()(e)||(this.editorContainerEl.scrollTop=e),this.editorContainerEl.scrollTop},t._correctRangeAfterMoveCursor=function(e){var t=this.getRange(),n=this.getBody()
if("start"===e)for(;n.firstChild;)n=n.firstChild
else for(;n.lastChild;)n=n.lastChild
"BR"===n.tagName?t.setStartBefore(n):t.setStartAfter(n),t.collapse(!0),this.setRange(t)},t.getRange=function(){return this.getEditor().getSelection().cloneRange()},t.getIMERange=function(){var e,t=getSelection()
return t&&t.rangeCount&&(e=t.getRangeAt(0).cloneRange()),e},t.fixIMERange=function(){var e=this.getIMERange()
e&&We.a.getParentUntil(e.commonAncestorContainer,this.editorContainerEl).parentNode&&this.setRange(e)},t.setRange=function(e){this.getEditor().setSelection(e)},t.isInTable=function(e){var t=e.collapsed?e.startContainer:e.commonAncestorContainer
return!!We.a.closest(t,"[contenteditable=true] table")},t.getTextObject=function(e){return new Nt(this,e)},t.defer=function(e,t){var n=this
setTimeout((function(){n.isEditorValid()&&e(n)}),t||0)},t.isEditorValid=function(){return this.getEditor()&&We.a.isContain(document.body,this.editorContainerEl)},t._isCursorNotInRestrictedAreaOfTabAction=function(e){return!e.hasFormat("li")&&!e.hasFormat("blockquote")&&!e.hasFormat("table")},t.getSanitizer=function(){return this._sanitizer},e.factory=function(t,n,r){var i=new e(t,n,r)
return i.init(),i.componentManager.addManager(Ze),i.componentManager.addManager(et),i.componentManager.addManager(at),i.componentManager.addManager(ot),i.componentManager.addManager(st),i.componentManager.addManager(lt),i.componentManager.addManager(ut),i.componentManager.addManager(vt),i},e}(),Ht=['<div class="tui-editor">','<div class="te-md-container">','<div class="te-editor"></div>','<div class="te-md-splitter"></div>','<div class="te-preview"></div>',"</div>",'<div class="te-ww-container">','<div class="te-editor"></div>',"</div>","</div>"].join(""),Ft=function(){function e(e,t){this.el=e.el,this.height=e.height,this.type=e.initialEditType,this.eventManager=t,this.init(),this._initEvent()}var t=e.prototype
return t.init=function(){this._renderLayout(),this._initMarkdownAndPreviewSection(),this._initWysiwygSection()},t._initEvent=function(){this.eventManager.listen("hide",this.hide.bind(this)),this.eventManager.listen("show",this.show.bind(this))},t._renderLayout=function(){h()(this.el,{boxSizing:"border-box"}),this.containerEl=We.a.createElementWith(Ht,this.el)},t.switchToWYSIWYG=function(){m()(this.containerEl,"te-md-mode"),p()(this.containerEl,"te-ww-mode")},t.switchToMarkdown=function(){m()(this.containerEl,"te-ww-mode"),p()(this.containerEl,"te-md-mode")},t._initMarkdownAndPreviewSection=function(){this.mdEditorContainerEl=this.containerEl.querySelector(".te-md-container .te-editor"),this.previewEl=this.containerEl.querySelector(".te-md-container .te-preview")},t._initWysiwygSection=function(){this.wwEditorContainerEl=this.containerEl.querySelector(".te-ww-container .te-editor")},t._verticalSplitStyle=function(){var e=this.containerEl.querySelector(".te-md-container")
m()(e,"te-preview-style-tab"),p()(e,"te-preview-style-vertical")},t._tabStyle=function(){var e=this.containerEl.querySelector(".te-md-container")
m()(e,"te-preview-style-vertical"),p()(e,"te-preview-style-tab")},t.changePreviewStyle=function(e){"tab"===e?this._tabStyle():"vertical"===e&&this._verticalSplitStyle()},t.hide=function(){p()(this.el.querySelector(".tui-editor"),"te-hide")},t.show=function(){m()(this.el.querySelector(".tui-editor"),"te-hide")},t.remove=function(){We.a.remove(this.el.querySelector(".tui-editor"))},t.getEditorEl=function(){return this.containerEl},t.getPreviewEl=function(){return this.previewEl},t.getMdEditorContainerEl=function(){return this.mdEditorContainerEl},t.getWwEditorContainerEl=function(){return this.wwEditorContainerEl},e}(),Ut=n(35),Wt=n(1),qt=n(14),jt=n.n(qt),zt=/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(\/([^\s]*))?$/g,Vt=function(){function e(e){this.eventManager=e,this._initEvent(),this._initDefaultImageImporter()}e.decodeURIGraceful=function(e){var t,n=e.split(" "),r=[]
return ke()(n,(function(e){try{t=(t=decodeURIComponent(e)).replace(/ /g,"%20")}catch(n){t=e}return r.push(t)})),r.join(" ")},e.encodeMarkdownCharacters=function(e){return e.replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\[/g,"%5B").replace(/\]/g,"%5D").replace(/</g,"%3C").replace(/>/g,"%3E")},e.escapeMarkdownCharacters=function(e){return e.replace(/\(/g,"\\(").replace(/\)/g,"\\)").replace(/\[/g,"\\[").replace(/\]/g,"\\]").replace(/</g,"\\<").replace(/>/g,"\\>")}
var t=e.prototype
return t._initEvent=function(){var e=this
this.eventManager.listen("drop",(function(t){var n=t.data.dataTransfer&&t.data.dataTransfer.files
e._processBlobItems(n,t.data)})),this.eventManager.listen("willPaste",(function(t){var n=t.data.fragment.querySelectorAll("*")
if(1===n.length&&"IMG"===n[0].tagName&&/^data:image/.test(n[0].src)){t.data.preventDefault()
var r=function(e){for(var t=atob(e.split(",")[1]),n=new ArrayBuffer(t.length),r=new Uint8Array(n),i=0;i<t.length;i+=1)r[i]=t.charCodeAt(i)
var o=e.split(",")[0]
return new Blob([n],{type:o.split(":")[1].split(";")[0]})}(n[0].src)
e._emitAddImageBlobHook(r,"paste")}})),this.eventManager.listen("paste",(function(t){e._processClipboard(t.data)})),this.eventManager.listen("pasteBefore",(function(t){e._decodeURL(t)}))},t._initDefaultImageImporter=function(){this.eventManager.listen("addImageBlobHook",(function(e,t){var n=new FileReader
n.onload=function(e){t(e.target.result)},n.readAsDataURL(e)}))},t._emitAddImageBlobHook=function(e,t){var n=this
this.eventManager.emit("addImageBlobHook",e,(function(t,r){n.eventManager.emit("command","AddImage",{imageUrl:t,altText:r||e.name||"image"})}),t)},t._decodeURL=function(t){var n=e.decodeURIGraceful,r=e.encodeMarkdownCharacters
if("markdown"===t.source&&t.data.text){var i=t.data.text,o=i[0]
1===i.length&&o.match(zt)&&(o=r(o=n(o)),t.data.update(null,null,[o]))}else if("wysiwyg"===t.source){var a=t.clipboardContainer,s=a.childNodes[0],l=s.innerText
1===a.childNodes.length&&"A"===s.tagName&&l.match(zt)&&(s.innerText=n(l),s.href=r(s.href))}},t._processClipboard=function(e){var t=e.clipboardData||window.clipboardData,n=t&&t.items,r=t.types
n&&r&&1===r.length&&-1!==jt()("Files",[].slice.call(r))&&this._processBlobItems(n,e)},t._processBlobItems=function(e,t){var n=this
e&&ke()(e,(function(e){if(-1!==e.type.indexOf("image")){t.preventDefault(),t.stopPropagation(),t.codemirrorIgnore=!0
var r=e.name?e:e.getAsFile()
return n._emitAddImageBlobHook(r,t.type),!1}return!0}))},e}(),Kt=n(36),Gt=n(46),$t=n(23),Yt=new(function(){function e(){this._code="en-US",this._langs=new $t.a}var t=e.prototype
return t.setCode=function(e){this._code=e},t.setLanguage=function(e,t){var n=this;(e=[].concat(e)).forEach((function(e){if(n._langs.has(e)){var r=n._langs.get(e)
n._langs.set(e,u()(r,t))}else n._langs.set(e,t)}))},t.get=function(e,t){t||(t=this._code)
var n=this._langs.get(t)
n||(n=this._langs.get("en-US"))
var r=n[e]
if(!r)throw new Error('There is no text key "'+e+'" in '+t)
return r},e}()),Xt=n(57),Zt=n(9),Qt=n.n(Zt),Jt=n(54),en=n.n(Jt),tn=n(58),nn=n.n(tn)
function rn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var on=["click","mousedown","mousemove","mouseup","mouseover","mouseout","scroll"],an=-1,sn=function(){function e(e){void 0===e&&(e={}),rn(this,"tagName",void 0),rn(this,"className",void 0),rn(this,"el",void 0),rn(this,"_id",void 0),e=u()({tagName:"div"},e),this.tagName=e.tagName,this.className=e.className,this._id=an+=1,this.customEventManager=new nn.a,this._setRootElement(e.rootElement)}var t=e.prototype
return t.on=function(e,t){var n=this
en()(e)?i()(e,(function(e,t){n._addEvent(t,e)})):this._addEvent(e,t)},t._bindDomEvent=function(e,t,n){t?We.a.findAll(this.el,t).forEach((function(t){He()(t,e,n)})):He()(this.el,e,n)},t._addEvent=function(e,t){var n=this._parseEventType(e),r=n.event,i=n.selector
jt()(r,on)>-1?this._bindDomEvent(r,i,t):this.customEventManager.on(r,t)},t._unbindDomEvent=function(e,t,n){t?We.a.findAll(this.el,t).forEach((function(t){Ue()(t,e,n)})):Ue()(this.el,e,n)},t.off=function(e,t){var n=this._parseEventType(e),r=n.event,i=n.selector
jt()(r,on)>-1?this._unbindDomEvent(r,i,t):this.customEventManager.off(r,t)},t._parseEventType=function(e){var t=e.split(" ")
return{event:t.shift(),selector:t.join(" ")}},t._setRootElement=function(e){if(!e){var t=this.tagName;(e=document.createElement(t)).className=this.className||"uic"+this._id}this.el=e},t.trigger=function(e,t){this.customEventManager.fire(e,t)},t.remove=function(){this.el&&We.a.remove(this.el)},t.destroy=function(){var e=this
this.remove(),i()(this,(function(t,n){e[n]=null}))},e}()
function ln(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var cn=function(e){var t,n
function r(t){var n
return void 0===t&&(t={name:r.name}),(n=e.call(this,u()({className:r.className},t))||this)._name=t.name,n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.getName=function(){return this._name},r}(sn)
ln(cn,"name","item"),ln(cn,"className","tui-toolbar-item")
var un=cn,dn=new(function(){function e(){this.el=We.a.createElementWith('<div class="tui-tooltip"><div class="arrow"></div><span class="text"></span></span></div>'),document.body.appendChild(this.el),this.hide()}var t=e.prototype
return t.show=function(e,t){var n=e.getBoundingClientRect(),r=n.left+window.pageXOffset,i=n.top+window.pageYOffset
h()(this.el,{top:i+e.clientHeight+7+"px",left:r+3+"px"}),this.el.querySelector(".text").innerHTML=t,h()(this.el,{display:"block"})},t.hide=function(){h()(this.el,{display:"none"})},t.remove=function(){We.a.remove(this.el)},e}())
function hn(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function fn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var pn=function(e){var t,n
function r(t){var n
return void 0===t&&(t={tagName:"button",name:r.name}),(n=e.call(this,{name:t.name,tagName:"button",className:t.className+" "+r.className,rootElement:t.el})||this)._setOptions(t),n._render(),n.on("click",n._onClick.bind(hn(n))),t.tooltip&&(n.on("mouseover",n._onOver.bind(hn(n))),n.on("mouseout",n._onOut.bind(hn(n)))),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n
var i=r.prototype
return i.setTooltip=function(e){this._tooltip=e},i._setOptions=function(e){this._command=e.command,this._event=e.event,this._text=e.text,this._tooltip=e.tooltip,this._style=e.style,this._state=e.state},i._render=function(){var e=document.createTextNode(this._text||"")
this.el.appendChild(e),this.el.setAttribute("type","button"),this._style&&this.el.setAttribute("style",this._style)},i._onClick=function(){this.isEnabled()&&(this._command?this.trigger("command",this._command):this._event&&this.trigger("event",this._event),this.trigger("clicked"))},i._onOver=function(){this.isEnabled()&&dn.show(this.el,this._tooltip)},i._onOut=function(){dn.hide()},i.enable=function(){this.el.disabled=!1},i.disable=function(){this.el.disabled=!0},i.isEnabled=function(){return!this.el.disabled},r}(un)
fn(pn,"name","button"),fn(pn,"className","tui-toolbar-icons")
var gn=pn
function mn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var vn=function(e){var t,n
function r(){return e.call(this,{name:r.name,tagName:"div",className:r.className})||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r}(un)
mn(vn,"name","divider"),mn(vn,"className","tui-toolbar-divider")
var yn=vn,bn=function(){function e(){}return e.create=function(e,t){var n
switch(e){case"heading":n=new gn({name:"heading",className:"tui-heading",event:"openHeadingSelect",tooltip:Yt.get("Headings"),state:"heading"})
break
case"bold":n=new gn({name:"bold",className:"tui-bold",command:"Bold",tooltip:Yt.get("Bold"),state:"strong"})
break
case"italic":n=new gn({name:"italic",className:"tui-italic",command:"Italic",tooltip:Yt.get("Italic"),state:"emph"})
break
case"strike":n=new gn({name:"strike",className:"tui-strike",command:"Strike",tooltip:Yt.get("Strike"),state:"strike"})
break
case"hr":n=new gn({name:"hr",className:"tui-hrline",command:"HR",tooltip:Yt.get("Line"),state:"thematicBreak"})
break
case"quote":n=new gn({name:"quote",className:"tui-quote",command:"Blockquote",tooltip:Yt.get("Blockquote"),state:"blockQuote"})
break
case"ul":n=new gn({name:"ul",className:"tui-ul",command:"UL",tooltip:Yt.get("Unordered list"),state:"list"})
break
case"ol":n=new gn({name:"ol",className:"tui-ol",command:"OL",tooltip:Yt.get("Ordered list"),state:"orderedList"})
break
case"task":n=new gn({name:"task",className:"tui-task",command:"Task",tooltip:Yt.get("Task"),state:"taskList"})
break
case"table":n=new gn({name:"table",className:"tui-table",event:"openPopupAddTable",tooltip:Yt.get("Insert table"),state:"table"})
break
case"image":n=new gn({name:"image",className:"tui-image",event:"openPopupAddImage",tooltip:Yt.get("Insert image"),state:""})
break
case"link":n=new gn({name:"link",className:"tui-link",event:"openPopupAddLink",tooltip:Yt.get("Insert link")})
break
case"code":n=new gn({name:"code",className:"tui-code",command:"Code",tooltip:Yt.get("Code"),state:"code"})
break
case"codeblock":n=new gn({name:"codeblock",className:"tui-codeblock",command:"CodeBlock",tooltip:Yt.get("Insert CodeBlock"),state:"codeBlock"})
break
case"indent":n=new gn({name:"indent",className:"tui-indent",command:"Indent",tooltip:Yt.get("Indent")})
break
case"outdent":n=new gn({name:"outdent",className:"tui-outdent",command:"Outdent",tooltip:Yt.get("Outdent")})
break
case"divider":n=new yn
break
case"button":n=new gn(t)
break
case"item":default:n=new un(t)}return n},e}()
function Cn(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function wn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _n=function(e){var t,n
function r(t,n){var r
return void 0===n&&(n=[]),wn(Cn(r=e.call(this,{tagName:"div",className:"tui-editor-defaultUI-toolbar"})||this),"_items",[]),wn(Cn(r),"_eventManager",void 0),r._eventManager=t,r.setItems(n),r._initEvent(t),r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n
var i=r.prototype
return i._initEvent=function(e){var t=this
e.listen("stateChange",(function(e){t._items.forEach((function(t){t._state&&We.a.toggleClass(t.el,"active",!!e[t._state])}))})),e.listen("changePreviewTabPreview",(function(){return t.disableAllButton()})),e.listen("changePreviewTabWrite",(function(){return t.enableAllButton()})),e.listen("changeMode",(function(){return t.enableAllButton()}))},i.disableAllButton=function(){this._items.forEach((function(e){e instanceof gn&&e.disable()}))},i.enableAllButton=function(){this._items.forEach((function(e){e instanceof gn&&e.enable()}))},i.getItems=function(){return this._items.slice(0)},i.getItem=function(e){return this._items[e]},i.setItems=function(e){this.removeAllItems(),e.forEach(this.addItem.bind(this))},i.addItem=function(e){this.insertItem(this._items.length,e)},i.insertItem=function(e,t){var n=this
Qt()(t)?t=bn.create(t):Qt()(t.type)&&(t=bn.create(t.type,t.options))
var r=this.el.children
e>=0&&e<r.length?(We.a.insertBefore(t.el,r[e]),this._items.splice(e,0,t)):(this.el.appendChild(t.el),this._items.push(t)),t.onCommandHandler=function(e){return n._eventManager.emit("command",e)},t.onEventHandler=function(e){return n._eventManager.emit(e)},t.on("command",t.onCommandHandler),t.on("event",t.onEventHandler)},i.indexOfItem=function(e){var t
if(e instanceof un)t=this._items.indexOf(e)
else if(Qt()(e)){var n=e
t=this._items.map((function(e){return e.getName()})).indexOf(n)}return t},i.removeItem=function(e,t){var n,r
return void 0===t&&(t=!0),(n=e instanceof un?this.indexOfItem(e):e)>=0&&(r=this._items.splice(n,1)[0]),r&&(t?r.destroy():(r.off("command",r.onCommandHandler),r.off("event",r.onEventHandler),We.a.remove(r.el))),r},i.removeAllItems=function(){for(;this._items&&this._items.length>0;)this.removeItem(0)},i.destroy=function(){this.removeAllItems(),e.prototype.destroy.call(this)},r}(sn),Tn=function(e){var t,n
function r(t){var n
return t=u()({header:!0,target:document.body,textContent:""},t),(n=e.call(this,{tagName:"div",className:t.modal?"tui-popup-modal-background":"tui-popup-wrapper",rootElement:t.el})||this)._clickEventMap={},n._onClickCloseButton=n.hide.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(n)),n._initInstance(t),n._initDOM(t),n._initDOMEvent(t),n._initEditorEvent(t),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n
var i=r.prototype
return i._initInstance=function(e){this._target=e.target,e.el&&(this.el=e.el,this._isExternalHtmlUse=!0),e.content?this.content=e.content:this.content=e.textContent,this.options=e},i._initDOM=function(){this._initLayout(),this._isExternalHtmlUse||(a()(this.options.title)&&this.setTitle(this.options.title),this.setContent(this.content))
var e=this.options.headerButtons
if(e){We.a.findAll(this.el,".tui-popup-close-button").forEach((function(e){We.a.remove(e)}))
var t=this.el.querySelector(".tui-popup-header-buttons")
We.a.empty(t),t.innerHTML=e}this.options.css&&h()(this.el,this.options.css)},i._initDOMEvent=function(){var e=this,t=this.options,n=t.openerCssQuery,r=t.closerCssQuery,i=document.body
n&&We.a.findAll(i,n).forEach((function(t){var n="click."+e._id
e._clickEventMap[n]=e.show.bind(e),He()(t,"click",e._clickEventMap[n])})),r&&We.a.findAll(i,r).forEach((function(t){var n="click."+e._id
e._clickEventMap[n]=e.hide.bind(e),He()(t,"click",e._clickEventMap[n])})),this.on("click .tui-popup-close-button",this._onClickCloseButton)},i._initEditorEvent=function(){},i._initLayout=function(){var e=this.options
if(this._isExternalHtmlUse)this.hide(),this._target.appendChild(this.el)
else{var t=e.modal?'<div class="tui-popup-wrapper">\n        <div class="tui-popup-header">\n            <span class="tui-popup-title"></span>\n            <div class="tui-popup-header-buttons">\n                <button type="button" class="tui-popup-close-button"></button>\n            </div>\n        </div>\n        <div class="tui-popup-body"></div>\n    </div>':'<div class="tui-popup-header">\n        <span class="tui-popup-title"></span>\n        <div class="tui-popup-header-buttons">\n            <button type="button" class="tui-popup-close-button"></button>\n        </div>\n    </div>\n    <div class="tui-popup-body"></div>'
this.el.innerHTML=t,e.className&&p.a.apply(void 0,[this.el].concat(e.className.split(/\s+/g))),this.hide(),this._target.appendChild(this.el),this.body=this.el.querySelector(".tui-popup-body"),e.header||We.a.remove(this.el.querySelector(".tui-popup-header"))}},i.setContent=function(e){We.a.empty(this.body),Qt()(e)?this.body.innerHTML=e:this.body.appendChild(e)},i.setTitle=function(e){var t=this.el.querySelector(".tui-popup-title")
We.a.empty(t),t.innerHTML=e},i.getTitleElement=function(){return this.el.querySelector(".tui-popup-title")},i.hide=function(){h()(this.el,{display:"none"}),this._isShow=!1,this.trigger("hidden",this)},i.show=function(){h()(this.el,{display:"block"}),this._isShow=!0,this.trigger("shown",this)},i.isShow=function(){return this._isShow},i.remove=function(){var e=this,t=this.options,n=t.openerCssQuery,r=t.closerCssQuery,i=document.body
this.trigger("remove",this),this.off("click .tui-popup-close-button",this._onClickCloseButton),n&&We.a.findAll(i,n).forEach((function(t){Ue()(t,"click",e._clickEventMap["click."+e._id]),delete e._clickEventMap["click."+e._id]})),r&&We.a.findAll(i,r).forEach((function(t){Ue()(t,"click",e._clickEventMap["click."+e._id]),delete e._clickEventMap["click."+e._id]})),We.a.remove(this.el),this.el=null},i.setFitToWindow=function(e){We.a.toggleClass(this.el,"fit-window",e)},i.isFitToWindow=function(){return Je()(this.el,"fit-window")},i.toggleFitToWindow=function(){var e=!this.isFitToWindow()
return this.setFitToWindow(e),e},r}(sn),En=function(e){var t,n
function r(t){return t=u()({header:!1,className:"te-dropdown-toolbar"},t),e.call(this,t)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n
var i=r.prototype
return i.getToolbar=function(){return this._toolbar},i.getItems=function(){return this.getToolbar().getItems()},i.getItem=function(e){return this.getToolbar().getItem(e)},i.setItems=function(e){this.getToolbar().setItems(e)},i.addItem=function(e){this.getToolbar().addItem(e)},i.insertItem=function(e,t){this.getToolbar().insertItem(e,t)},i.indexOfItem=function(e){return this.getToolbar().indexOfItem(e)},i.removeItem=function(e,t){return this.getToolbar().removeItem(e,t)},i.removeAllItems=function(){this.getToolbar().removeAllItems()},i._initInstance=function(t){e.prototype._initInstance.call(this,t)
var n=t.button,r=t.eventManager
this._button=n,this._eventManager=r,this._toolbar=new _n(r)},i._initDOM=function(){e.prototype._initDOM.call(this),this.setContent(this._toolbar.el)},i._initEditorEvent=function(){var t=this
e.prototype._initEditorEvent.call(this),this._eventManager.listen("focus",(function(){return t.hide()})),this._eventManager.listen("closeAllPopup",(function(){return t.hide()})),this._eventManager.listen(r.OPEN_EVENT,(function(){var e=t.isShow()
t._eventManager.emit("closeAllPopup"),e||t.show(),h()(t.el,{left:"-1000px"})
var n=t._button,r=We.a.getOuterHeight(n,!0),i=(r-We.a.getOuterHeight(n))/2,o=n.offsetTop+r-i,a=n.offsetLeft+We.a.getOuterWidth(n,!0)-We.a.getOuterWidth(t.el,!0)
h()(t.el,{top:o+"px",left:a+"px"})}))},r}(Tn)
!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(En,"OPEN_EVENT","openDropdownToolbar")
var xn=En
function Sn(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function Nn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var kn=function(e){var t,n
function r(t,n){var r
return Nn(Sn(r=e.call(this,t,n)||this),"_moreButton",void 0),Nn(Sn(r),"_popupDropdownToolbar",void 0),Nn(Sn(r),"_observer",void 0),r._init(t),r._bindWidthChangedEvent(),r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n
var i=r.prototype
return i.insertItem=function(t,n){e.prototype.insertItem.call(this,t,n),this._arrangeMoreButton()},i._init=function(e){var t=bn.create("button",{name:"more",className:"tui-more",tooltip:Yt.get("More"),event:xn.OPEN_EVENT})
this._moreButton=t,this._popupDropdownToolbar=new xn({eventManager:e,target:this.el,button:t.el}),this.addItem(t)},i._bindWidthChangedEvent=function(){var e=this
this._observer=new Xt.a((function(){e._popupDropdownToolbar.hide(),e._balanceButtons()})),this._observer.observe(this.el)},i._balanceButtons=function(){var t=this
this._popupDropdownToolbar.getItems().forEach((function(n){t._popupDropdownToolbar.removeItem(n,!1)
var r=t.getItems().length
e.prototype.insertItem.call(t,r,n)})),this.removeItem(this._moreButton,!1),e.prototype.insertItem.call(this,0,this._moreButton),this.getItems().filter((function(e){return e.el.offsetTop>t.el.clientHeight})).forEach((function(e){t.removeItem(e,!1),t._popupDropdownToolbar.addItem(e)})),this._arrangeMoreButton()},i._arrangeMoreButton=function(){if(this._popupDropdownToolbar){this.removeItem(this._moreButton,!1)
var t=this._popupDropdownToolbar.getItems().length>0,n=this.getItems().length
t&&e.prototype.insertItem.call(this,n,this._moreButton)}},i.destroy=function(){this._observer&&(this._observer.disconnect(),this._observer=null)},r}(_n),Ln=function(e){var t,n
function r(t){var n
return void 0===t&&(t={}),(n=e.call(this,{tagName:"div",className:"te-tab"})||this).sections=t.sections,n._activeButton=null,n._render(t),n._initEvent(t),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n
var i=r.prototype
return i._initEvent=function(e){var t=e.onItemClick
t&&this.on("itemClick",t),this.on("click button",this._onTabButton.bind(this))},i._render=function(e){for(var t=e.items,n=e.initName,r=[],i=0,o=t.length;i<o;i+=1)r.push('<button type="button" data-index="'+i+'">'+t[i]+"</button>")
this.el.innerHTML=r.join(""),this.activate(n)},i._findButtonContained=function(e,t,n){return We.a.findAll(e,t).filter((function(e){return new RegExp(n).test(e.textContent)}))},i.activate=function(e){var t=this._findButtonContained(this.el,"button",e)[0]
this._activateTabByButton(t)},i._onTabButton=function(e){var t=e.target
this._activateTabByButton(t),this.trigger("itemClick",t.textContent)},i._activateTabByButton=function(e){this._isActivatedButton(e)||this._updateClassByButton(e)},i._updateClassByButton=function(e){if(this._activeButton){var t=this._activeButton.getAttribute("data-index")
m()(this._activeButton,"te-tab-active"),this.sections&&m()(this.sections[t],"te-tab-active")}p()(e,"te-tab-active"),this._activeButton=e
var n=e.getAttribute("data-index")
this.sections&&p()(this.sections[n],"te-tab-active")},i._isActivatedButton=function(e){return this._activeButton&&this._activeButton.textContent===e.textContent},r}(sn)
function Mn(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function An(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var On=function(e){var t,n
function r(t,n,r){var i
return An(Mn(i=e.call(this,{tagName:"div",className:"te-mode-switch"})||this),"_buttons",{}),An(Mn(i),"_type",void 0),An(Mn(i),"_rootElement",void 0),i._eventManager=r,i._render(t),i._switchType(a()(n)?n:"markdown"),i._initEvent(),i}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n
var i=r.prototype
return i.isShown=function(){return"block"===this._rootElement.style.display},i.show=function(){h()(this._rootElement,{display:"block"})},i.hide=function(){h()(this._rootElement,{display:"none"})},i._render=function(e){this._buttons.markdown=We.a.createElementWith('<button class="te-switch-button markdown">'+Yt.get("Markdown")+"</button>"),this._buttons.wysiwyg=We.a.createElementWith('<button class="te-switch-button wysiwyg">'+Yt.get("WYSIWYG")+"</button>"),this.el.appendChild(this._buttons.markdown),this.el.appendChild(this._buttons.wysiwyg),e&&(e.appendChild(this.el),this._rootElement=e),this.on("click .markdown",this._changeMarkdown.bind(this)),this.on("click .wysiwyg",this._changeWysiwyg.bind(this)),this.show()},i._changeMarkdown=function(){this._switchType("markdown")},i._changeWysiwyg=function(){this._switchType("wysiwyg")},i._setActiveButton=function(e){m()(this._buttons.markdown,"active"),m()(this._buttons.wysiwyg,"active"),p()(this._buttons[""+e],"active")},i._switchType=function(e){this._type!==e&&(this._type=e,this._setActiveButton(e),this.trigger("modeSwitched",this._type))},i._initEvent=function(){var e=this
this._eventManager.listen("changeMode",(function(t){e._type!==t&&(e._type=t,e._setActiveButton(t))}))},r}(sn)
An(On,"TYPE",{MARKDOWN:"markdown",WYSIWYG:"wysiwyg"})
var Bn=On,Dn=/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(\/([^\s]*))?$/,In=function(e){var t,n
function r(t){var n='\n            <label for="url">'+Yt.get("URL")+'</label>\n            <input type="text" class="te-url-input" />\n            <label for="linkText">'+Yt.get("Link text")+'</label>\n            <input type="text" class="te-link-text-input" />\n            <div class="te-button-section">\n                <button type="button" class="te-ok-button">'+Yt.get("OK")+'</button>\n                <button type="button" class="te-close-button">'+Yt.get("Cancel")+"</button>\n            </div>\n        "
return t=u()({header:!0,title:Yt.get("Insert link"),className:"te-popup-add-link tui-editor-popup",content:n},t),e.call(this,t)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n
var i=r.prototype
return i._initInstance=function(t){e.prototype._initInstance.call(this,t),this._editor=t.editor,this._eventManager=t.editor.eventManager},i._initDOM=function(){e.prototype._initDOM.call(this)
var t=this.el
this._inputText=t.querySelector(".te-link-text-input"),this._inputURL=t.querySelector(".te-url-input")},i._initDOMEvent=function(){var t=this
e.prototype._initDOMEvent.call(this),this.on("click .te-close-button",(function(){return t.hide()})),this.on("click .te-ok-button",(function(){return t._addLink()})),this.on("shown",(function(){var e=t._inputText,n=t._inputURL,r=t._editor.getSelectedText().trim()
e.value=r,Dn.exec(r)&&(n.value=r),n.focus()})),this.on("hidden",(function(){t._resetInputs()}))},i._initEditorEvent=function(){var t=this
e.prototype._initEditorEvent.call(this)
var n=this._eventManager
n.listen("focus",(function(){return t.hide()})),n.listen("closeAllPopup",(function(){return t.hide()})),n.listen("openPopupAddLink",(function(){n.emit("closeAllPopup"),t.show()}))},i._addLink=function(){var e=this._getValue(),t=e.url,n=e.linkText
this._clearValidationStyle(),n.length<1?p()(this._inputText,"wrong"):t.length<1?p()(this._inputURL,"wrong"):(this._eventManager.emit("command","AddLink",{linkText:n,url:t}),this.hide())},i._getValue=function(){return{url:this._inputURL.value,linkText:this._inputText.value}},i._clearValidationStyle=function(){m()(this._inputURL,"wrong"),m()(this._inputText,"wrong")},i._resetInputs=function(){this._inputText.value="",this._inputURL.value="",this._clearValidationStyle()},r}(Tn),Rn=function(e){var t,n
function r(t){var n='\n            <div class="te-tab-section"></div>\n            <div class="te-url-type">\n                <label for="">'+Yt.get("Image URL")+'</label>\n                <input type="text" class="te-image-url-input" />\n            </div>\n            <div class="te-file-type">\n                <label for="">'+Yt.get("Select image file")+'</label>\n                <input type="file" class="te-image-file-input" accept="image/*" />\n            </div>\n            <label for="url">'+Yt.get("Description")+'</label>\n            <input type="text" class="te-alt-text-input" />\n            <div class="te-button-section">\n                <button type="button" class="te-ok-button">'+Yt.get("OK")+'</button>\n                <button type="button" class="te-close-button">'+Yt.get("Cancel")+"</button>\n            </div>\n        "
return t=u()({header:!0,title:Yt.get("Insert image"),className:"te-popup-add-image tui-editor-popup",content:n},t),e.call(this,t)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n
var i=r.prototype
return i._initInstance=function(t){e.prototype._initInstance.call(this,t),this.eventManager=t.eventManager},i._initDOM=function(){e.prototype._initDOM.call(this)
var t=this.el
this._imageUrlInput=t.querySelector(".te-image-url-input"),this._imageFileInput=t.querySelector(".te-image-file-input"),this._altTextInput=t.querySelector(".te-alt-text-input")
var n=t.querySelector(".te-file-type"),r=t.querySelector(".te-url-type"),i=this.body.querySelector(".te-tab-section")
this.tab=new Ln({initName:Yt.get("File"),items:[Yt.get("File"),Yt.get("URL")],sections:[n,r]}),i.appendChild(this.tab.el)},i._initDOMEvent=function(){var t=this
e.prototype._initDOMEvent.call(this),this.on("shown",(function(){return t._imageUrlInput.focus()})),this.on("hidden",(function(){return t._resetInputs()})),this.on("change .te-image-file-input",(function(){var e=t._imageFileInput.value.split("\\").pop()
t._altTextInput.value=e})),this.on("click .te-close-button",(function(){return t.hide()})),this.on("click .te-ok-button",(function(){var e=t._imageUrlInput.value,n=t._altTextInput.value
if(e)t._applyImage(e,n)
else{var r=t._imageFileInput.files
if(r.length){var i=r.item(0)
t.eventManager.emit("addImageBlobHook",i,(function(e,r){return t._applyImage(e,r||n)}),"ui")}}t.hide()})),this.tab.on("itemClick",(function(){return t._resetInputs()}))},i._initEditorEvent=function(){var t=this
e.prototype._initEditorEvent.call(this),this.eventManager.listen("focus",(function(){return t.hide()})),this.eventManager.listen("closeAllPopup",(function(){return t.hide()})),this.eventManager.listen("openPopupAddImage",(function(){t.eventManager.emit("closeAllPopup"),t.show()}))},i._applyImage=function(e,t){this.eventManager.emit("command","AddImage",{imageUrl:e,altText:t||"image"}),this.hide()},i._resetInputs=function(){We.a.findAll(this.el,"input").forEach((function(e){e.value=""}))},i.remove=function(){this.tab.remove(),e.prototype.remove.call(this)},r}(Tn),Pn=function(e){var t,n
function r(t){var n='\n      <button type="button" class="te-table-add-row">'+Yt.get("Add row")+'</button>\n      <button type="button" class="te-table-add-col">'+Yt.get("Add col")+'</button>\n      <button type="button" class="te-table-remove-row">'+Yt.get("Remove row")+'</button>\n      <button type="button" class="te-table-remove-col">'+Yt.get("Remove col")+'</button>\n      <hr/>\n      <button type="button" class="te-table-col-align-left">'+Yt.get("Align left")+'</button>\n      <button type="button" class="te-table-col-align-center">'+Yt.get("Align center")+'</button>\n      <button type="button" class="te-table-col-align-right">'+Yt.get("Align right")+'</button>\n      <hr/>\n      <button type="button" class="te-table-remove">'+Yt.get("Remove table")+"</button>\n    "
return t=u()({header:!1,className:"te-popup-table-utils",content:n},t),e.call(this,t)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n
var i=r.prototype
return i._initInstance=function(t){e.prototype._initInstance.call(this,t),this.eventManager=t.eventManager},i._initDOMEvent=function(){var t=this
e.prototype._initDOMEvent.call(this),this.on("click .te-table-add-row",(function(){return t.eventManager.emit("command","AddRow")})),this.on("click .te-table-add-col",(function(){return t.eventManager.emit("command","AddCol")})),this.on("click .te-table-col-align-left",(function(){return t.eventManager.emit("command","AlignCol","left")})),this.on("click .te-table-col-align-center",(function(){return t.eventManager.emit("command","AlignCol","center")})),this.on("click .te-table-col-align-right",(function(){return t.eventManager.emit("command","AlignCol","right")})),this.on("click .te-table-remove-col",(function(){return t.eventManager.emit("command","RemoveCol")})),this.on("click .te-table-remove",(function(){return t.eventManager.emit("command","RemoveTable")})),this._bindClickEventOnRemoveRowMenu()},i._initEditorEvent=function(){var t=this
e.prototype._initEditorEvent.call(this),this.eventManager.listen("focus",(function(){return t.hide()})),this.eventManager.listen("mousedown",(function(){return t.hide()})),this.eventManager.listen("closeAllPopup",(function(){return t.hide()})),this.eventManager.listen("openPopupTableUtils",(function(e){var n=t.el.parentNode.getBoundingClientRect(),r=n.left,i=n.top
t._disableRemoveRowMenu(e.target),h()(t.el,{position:"absolute",top:e.clientY-i+5+"px",left:e.clientX-r+10+"px"}),t.eventManager.emit("closeAllPopup"),t.show()}))},i._bindClickEventOnRemoveRowMenu=function(){var e=this
this.on("click .te-table-remove-row",(function(t){var n=t.target
Je()(n,"te-context-menu-disabled")?t.preventDefault():e.eventManager.emit("command","RemoveRow")}))},i._disableRemoveRowMenu=function(e){var t=this.el.querySelector(".te-table-remove-row")
We.a.toggleClass(t,"te-context-menu-disabled","TH"===e.nodeName)},r}(Tn),Hn=function(e){var t,n
function r(t){return t=u()({header:!1,className:"te-popup-add-table",content:'\n    <div class="te-table-selection">\n        <div class="te-table-header"></div>\n        <div class="te-table-body"></div>\n        <div class="te-selection-area"></div>\n    </div>\n    <p class="te-description"></p>\n'},t),e.call(this,t)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n
var i=r.prototype
return i._initInstance=function(t){e.prototype._initInstance.call(this,t),this._selectedBound={},this._tableBound={},this._eventManager=t.eventManager,this._button=t.button,this._eventHandlers={onMousedown:this._selectTableRange.bind(this),onClick:this._fireCommandEvent.bind(this)}},i._initDOM=function(){e.prototype._initDOM.call(this),this._cacheElements(),this._setTableSizeByBound(5,7)},i._initDOMEvent=function(t){e.prototype._initDOMEvent.call(this,t),this.on("mousemove .te-table-selection",this._eventHandlers.onMousedown),this.on("click .te-table-selection",this._eventHandlers.onClick)},i._selectTableRange=function(e){var t=e.pageX-this._selectionOffset.left,n=e.pageY-this._selectionOffset.top,r=this._getSelectionBoundByOffset(t,n)
this._resizeTableBySelectionIfNeed(r.col,r.row),this._setSelectionAreaByBound(r.col,r.row),this._setDisplayText(r.col,r.row),this._setSelectedBound(r.col,r.row)},i._fireCommandEvent=function(){var e=this._getSelectedTableSize()
this._eventManager.emit("command","Table",e.col,e.row)},i._initEditorEvent=function(){var t=this
e.prototype._initEditorEvent.call(this),this._eventManager.listen("focus",(function(){return t.hide()})),this._eventManager.listen("closeAllPopup",(function(){return t.hide()})),this._eventManager.listen("openPopupAddTable",(function(){var e=t._button,n=e.offsetTop,r=e.offsetLeft
h()(t.el,{top:n+We.a.getOuterHeight(e)+"px",left:r+"px"}),t._eventManager.emit("closeAllPopup"),t.show()
var i=t.el.querySelector(".te-table-selection").getBoundingClientRect(),o=i.left,a=i.top
t._selectionOffset={left:o+window.pageXOffset,top:a+window.pageYOffset}}))},i._cacheElements=function(){this.header=this.el.querySelector(".te-table-header"),this.body=this.el.querySelector(".te-table-body"),this.selection=this.el.querySelector(".te-selection-area"),this.desc=this.el.querySelector(".te-description")},i._resizeTableBySelectionIfNeed=function(e,t){var n=this._getResizedTableBound(e,t)
n&&this._setTableSizeByBound(n.col,n.row)},i._getResizedTableBound=function(e,t){var n,r,i
return e>=5&&e<9?n=e+1:e<5&&(n=5),t>=7&&t<14?r=t+1:t<7&&(r=7),this._isNeedResizeTable(n,r)&&(i={row:r||this._tableBound.row,col:n||this._tableBound.col}),i},i._isNeedResizeTable=function(e,t){return e&&e!==this._tableBound.col||t&&t!==this._tableBound.row},i._getBoundByOffset=function(e,t){return{row:parseInt(t/17,10),col:parseInt(e/25,10)}},i._getOffsetByBound=function(e,t){return{x:25*e+25,y:17*t+17}},i._setTableSizeByBound=function(e,t){var n=this._getOffsetByBound(e,t-1)
this._setTableSize(n.x,n.y),this._tableBound.row=t,this._tableBound.col=e},i._getSelectionBoundByOffset=function(e,t){var n=this._getBoundByOffset(e,t)
return n.row<1?n.row=1:n.row>this._tableBound.row&&(n.row=this._tableBound.row),n.col<1?n.col=1:n.col>this._tableBound.col&&(n.col=this._tableBound.col),n},i._setSelectionAreaByBound=function(e,t){var n=this._getOffsetByBound(e,t)
this._setSelectionArea(n.x,n.y)},i._setSelectedBound=function(e,t){this._selectedBound.col=e,this._selectedBound.row=t},i._getSelectedTableSize=function(){return{row:this._selectedBound.row+1,col:this._selectedBound.col+1}},i._setDisplayText=function(e,t){this.desc.innerHTML=e+1+" x "+(t+1)},i._setTableSize=function(e,t){e+=1,t+=1,h()(this.header,{height:"17px",width:e+"px"}),h()(this.body,{height:t+"px",width:e+"px"}),h()(this.el,{width:e+30+"px"})},i._setSelectionArea=function(e,t){e+=1,t+=1,h()(this.selection,{height:t+"px",width:e+"px"})},i.remove=function(){this.off("mousemove .te-table-selection",this._eventHandlers.onMousedown),this.off("click .te-table-selection",this._eventHandlers.onClick),e.prototype.remove.call(this)},r}(Tn)
Hn.CELL_WIDTH=25,Hn.CELL_HEIGHT=17,Hn.MIN_ROW_SELECTION_INDEX=1,Hn.MIN_COL_SELECTION_INDEX=1
var Fn=Hn,Un=function(e){var t,n
function r(t){var n='\n      <ul>\n        <li data-value="1" data-type="Heading"><h1>'+Yt.get("Heading")+' 1</h1></li>\n        <li data-value="2" data-type="Heading"><h2>'+Yt.get("Heading")+' 2</h2></li>\n        <li data-value="3" data-type="Heading"><h3>'+Yt.get("Heading")+' 3</h3></li>\n        <li data-value="4" data-type="Heading"><h4>'+Yt.get("Heading")+' 4</h4></li>\n        <li data-value="5" data-type="Heading"><h5>'+Yt.get("Heading")+' 5</h5></li>\n        <li data-value="6" data-type="Heading"><h6>'+Yt.get("Heading")+' 6</h6></li>\n        <li data-type="Paragraph"><div>'+Yt.get("Paragraph")+"</div></li>\n      </ul>\n    "
return t=u()({header:!1,className:"te-heading-add",content:n},t),e.call(this,t)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n
var i=r.prototype
return i._initInstance=function(t){e.prototype._initInstance.call(this,t),this._eventManager=t.eventManager,this._button=t.button},i._initDOMEvent=function(){var t=this
e.prototype._initDOMEvent.call(this),this.on("click li",(function(e){var n=We.a.closest(e.target,"li")
t._eventManager.emit("command",n.getAttribute("data-type"),n.getAttribute("data-value"))}))},i._initEditorEvent=function(){var t=this
e.prototype._initEditorEvent.call(this),this._eventManager.listen("focus",this.hide.bind(this)),this._eventManager.listen("closeAllPopup",this.hide.bind(this)),this._eventManager.listen("openHeadingSelect",(function(){var e=t._button,n=e.offsetTop,r=e.offsetLeft
h()(t.el,{top:n+We.a.getOuterHeight(e)+"px",left:r+"px"}),t._eventManager.emit("closeAllPopup"),t.show()}))},r}(Tn)
function Wn(e){return e.map((function(e){return'<button type="button" class="te-popup-code-block-lang-'+e+'" data-lang="'+e+'">'+e+"</button>"})).join("")}var qn=function(e){var t,n
function r(t){var n=t.languages
return t=u()({header:!1,className:"te-popup-code-block-languages",content:Wn(n)},t),e.call(this,t)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n
var i=r.prototype
return i._initInstance=function(t){var n=this
e.prototype._initInstance.call(this,t),this.eventManager=t.eventManager,this._onSelectedLanguage=null,this._onDismissed=null,this._currentButton=null,this._buttons=null,this._languages=t.languages,this._btnMousedownHandler=function(e){var t=e.target.getAttribute("data-lang")
n._onSelectedLanguage&&n._onSelectedLanguage(t),n.hide()}},i._initDOM=function(t){e.prototype._initDOM.call(this,t),h()(this.el,"zIndex",1e4),this._buttons=We.a.findAll(this.el,"button"),this._activateButtonByIndex(0)},i._initDOMEvent=function(){e.prototype._initDOMEvent.call(this),this._addBtnMouseDownHandler()},i._initEditorEvent=function(){var t=this
e.prototype._initEditorEvent.call(this),this.eventManager.listen("openPopupCodeBlockLanguages",(function(e){return t.show(e.callback),h()(t.el,{top:e.offset.top+"px"}),h()(t.el,{left:e.offset.left+"px"}),t.setCurrentLanguage(e.language),t})),this.eventManager.listen("focus",(function(){return t.hide()})),this.eventManager.listen("mousedown",(function(){return t.hide()})),this.eventManager.listen("closeAllPopup",(function(){return t.hide()})),this.eventManager.listen("closePopupCodeBlockLanguages",(function(){return t.hide()})),this.eventManager.listen("scroll",(function(){return t.hide()})),this.eventManager.listen("setCodeBlockLanguages",(function(e){return t._changeLanguageButtons(e)}))},i._activateButtonByIndex=function(e){this._currentButton&&m()(this._currentButton,"active"),this._buttons.length&&(this._currentButton=this._buttons[e],p()(this._currentButton,"active"),this._currentButton.scrollIntoView())},i.prev=function(){var e=jt()(this._currentButton,this._buttons)-1
e<0&&(e=this._buttons.length-1),this._activateButtonByIndex(e)},i.next=function(){var e=jt()(this._currentButton,this._buttons)+1
e>=this._buttons.length&&(e=0),this._activateButtonByIndex(e)},i.getCurrentLanguage=function(){return this._currentButton.getAttribute("data-lang")},i.setCurrentLanguage=function(e){var t=this._buttons.filter((function(t){return je()(t,".te-popup-code-block-lang-"+e)}))
if(t.length>0){var n=jt()(t[0],this._buttons)
this._activateButtonByIndex(n)}},i.show=function(t){this._onSelectedLanguage=t.selected,this._onDismissed=t.dismissed,e.prototype.show.call(this)},i.hide=function(){this._onDismissed&&this._onDismissed(),this._onSelectedLanguage=null,this._onDismissed=null,e.prototype.hide.call(this)},i._addBtnMouseDownHandler=function(){var e=this
this._languages.forEach((function(t){e.off("mousedown .te-popup-code-block-lang-"+t,e._btnMousedownHandler),e.on("mousedown .te-popup-code-block-lang-"+t,e._btnMousedownHandler)}))},i._changeLanguageButtons=function(e){this._languages=e,e&&e.length&&(this.content=Wn(e),this.setContent(this.content),this._addBtnMouseDownHandler(),this._buttons=We.a.findAll(this.el,"button"),this._activateButtonByIndex(0))},r}(Tn),jn={left:"tui-split-content-left",right:"tui-split-content-right"},zn=function(){function e(e,t,n,r){void 0===r&&(r={}),r=u()({showScrollSyncButton:!1,scrollSync:!0,splitView:!0},r),this._baseElement=e,this._eventManager=r.eventManager,this._contentElements=[],this._initDom(t,n,r),this._initDomEvent()}var t=e.prototype
return t._initDom=function(e,t,n){var r=document.createElement("div")
r.className="tui-split-scroll",this._el=r
var i=document.createElement("div")
i.className="tui-split-scroll-wrapper",this._scrollWrapper=i,this._setScrollSync(n.scrollSync),this.setSplitView(n.splitView)
var o=document.createElement("div")
o.className="tui-split-scroll-content",this._contentWrapper=o
var a=document.createElement("div")
a.className="tui-splitter",this._baseElement.appendChild(r),r.appendChild(i),i.appendChild(o),i.appendChild(a),this._setLeft(e),this._setRight(t)},t._initDomEvent=function(){this._contentWrapper.addEventListener("scroll",this.sync.bind(this))},t._requireScrollIntoView=function(e){var t,n=e.getBoundingClientRect(),r=n.top,i=n.bottom
if(this.isScrollSynced())t=this._contentWrapper
else if(We.a.parents(e,this._contentElements.left).length)t=this._contentElements.left
else{if(!We.a.parents(e,this._contentElements.right).length)return
t=this._contentElements.right}var o=t.getBoundingClientRect(),a=o.top,s=o.bottom
r<a?t.scrollTop=t.scrollTop+r-a:i>s&&(t.scrollTop=t.scrollTop+i-s),this.sync()},t._setContentElement=function(e,t){var n=this,r=this._contentElements[t]
r&&(this._eventManager.removeEventHandler("requireScrollIntoView"),this._contentWrapper.removeChild(r)),p()(e,jn[t]),this._contentWrapper.appendChild(e),this._eventManager.listen("requireScrollIntoView",(function(e){return n._requireScrollIntoView(e)})),this._eventManager.listen("requireScrollSync",(function(){return n.sync()})),this._contentElements[t]=e,this.sync()},t._setLeft=function(e){this._setContentElement(e,"left")},t._setRight=function(e){this._setContentElement(e,"right")},t._setScrollSync=function(e){We.a.toggleClass(this._el,"scroll-sync",e)},t.toggleScrollSync=function(){We.a.toggleClass(this._el,"scroll-sync")},t.setSplitView=function(e){e?m()(this._el,"single-content"):p()(this._el,"single-content")},t.toggleSplitView=function(){We.a.toggleClass(this._el,"single-content")},t.isScrollSynced=function(){return Je()(this._el,"scroll-sync")},t.isSplitView=function(){return!Je()(this._el,"single-content")},t.sync=function(){if(this._contentElements.left&&this._contentElements.right){var e=this._contentWrapper.clientHeight,t=this._contentWrapper.scrollTop,n=this._contentElements.left,r=this._contentElements.right,i=n.offsetHeight-e>0?n:r,o=i===n?r:n,a=i.offsetHeight,s=Math.max(a-e,0),l=a-Math.max(o.offsetHeight,e)
h()(i,{top:0}),h()(o,{top:t/s*l+"px"})}},t.scrollTop=function(e){this._contentWrapper.scrollTop=e},e}(),Vn=function(e){var t,n
function r(t,n){var r
return(r=e.call(this,t,{singleCursorHeightPerLine:!1,theme:"none"})||this)._language="",r._eventManager=n,r._initEvent(),r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n
var i=r.prototype
return i._initEvent=function(){var e=this
this.on("cursorActivity",this._onRequireScrollIntoView.bind(this)),this.on("beforeChange",(function(t,n){"paste"===n.origin&&e._eventManager.emit("pasteBefore",{source:"codeblock",data:n})}))},i._onRequireScrollIntoView=function(){var e=this,t=this.getCursor(),n=this.getWrapperElement()
setTimeout((function(){var r=n.querySelector("pre:nth-child("+(t.line+1)+")")
r&&e._eventManager.emit("requireScrollIntoView",r)}),0)},i.load=function(e){var t=e.cloneNode(!0)
this.setLanguage(t.getAttribute("data-language")||""),this.setEditorCodeText(t.textContent)},i.save=function(e){e.innerHTML="",e.textContent=this.getEditorCodeText(),e.setAttribute("data-language",this._language),this._eventManager.emit("changeLanguage")},i.clear=function(){this.setLanguage(""),this.setEditorCodeText("")},i.getLanguage=function(){return this._language},i.setLanguage=function(e){void 0===e&&(e=""),this._language=e},i.getEditorCodeText=function(){return this.getValue()},i.setEditorCodeText=function(e){void 0===e&&(e=""),this.setValue(e)},i.refresh=function(){this.cm.refresh()},r}(q),Kn=function(e){var t,n
function r(t,n,r,i){var o
return(o=e.call(this,t,n,r,!0)||this)._codeBlockEditor=i,o._initEvent(),o.lazyRunner.registerLazyRunFunction("refresh",o.refresh,o.delayCodeBlockTime,function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(o)),o}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n
var i=r.prototype
return i._initEvent=function(){var e=this
this._codeBlockEditor.on("update",(function(){return e.lazyRunner.run("refresh")}))},i.refresh=function(){var t=this._codeBlockEditor.getLanguage(),n=this._codeBlockEditor.getEditorCodeText()
e.prototype.refresh.call(this,"```"+t+"\n"+n+"\n```"),this.eventManager.emit("requireScrollSync")},i.clear=function(){e.prototype.render.call(this,"")},r}(n(38).a),Gn=function(){function e(e,t){this._eventManager=e,this._languages=t,this._initDOM(),this._initDOMEvent(),this._initEvent()}var t=e.prototype
return t._initDOM=function(){this._inputLanguage=We.a.createElementWith('<input type="text" maxlength="20" placeholder="'+Yt.get("Choose language")+'" />'),this._wrapper=We.a.createElementWith('<span class="te-input-language"></span>'),this._wrapper.appendChild(this._inputLanguage),this._hide()},t._initDOMEvent=function(){var e=this
this._inputLanguage.addEventListener("keydown",(function(t){return e._onKeyEvent(t)})),this._inputLanguage.addEventListener("focus",(function(){return e._showPopupCodeBlockLanguages()})),this._inputLanguage.addEventListener("focusout",(function(){return e._onFocusOut()})),this._wrapper.addEventListener("mousedown",(function(t){t.target===e._wrapper&&(t.preventDefault(),e._toggleFocus())}))},t._initEvent=function(){var e=this
this._eventManager.listen("setCodeBlockLanguages",(function(t){e._languages=t,t&&t.length?e._show():e._hide()}))},t._showPopupCodeBlockLanguages=function(){var e=this,t=this._inputLanguage.getBoundingClientRect()
p()(this._wrapper,"active"),this.active=!0,this._popupCodeBlockLanguages=this._eventManager.emitReduce("openPopupCodeBlockLanguages",{language:this._prevStoredLanguage,offset:{left:t.left,top:t.bottom},callback:{selected:function(t){return e._onLanguageSelectedFromList(t)},dismissed:function(){e._popupCodeBlockLanguages=null}}})},t._toggleFocus=function(){var e=this._inputLanguage
Je()(this._wrapper,"active")?e.blur():e.focus()},t._onFocusOut=function(){m()(this._wrapper,"active"),this._inputLanguage.value=this._prevStoredLanguage,this._hidePopupCodeBlockLanguages()},t._onKeyEvent=function(e){if(this._popupCodeBlockLanguages)switch(e.which){case z.keyCode("UP"):this._popupCodeBlockLanguages.prev(),e.preventDefault()
break
case z.keyCode("DOWN"):this._popupCodeBlockLanguages.next(),e.preventDefault()
break
case z.keyCode("ENTER"):case z.keyCode("TAB"):var t=this._popupCodeBlockLanguages.getCurrentLanguage()
this._inputLanguage.value=t,this._storeInputLanguage(),e.preventDefault()
break
default:this._popupCodeBlockLanguages.hide()}else e.which!==z.keyCode("ENTER")&&e.which!==z.keyCode("TAB")||(this._storeInputLanguage(),e.preventDefault())},t._onLanguageSelectedFromList=function(e){this._inputLanguage.value=e,this._storeInputLanguage()},t.setOnLanguageSelected=function(e){this._onLanguageSelected=e},t._hidePopupCodeBlockLanguages=function(){this._eventManager.emit("closePopupCodeBlockLanguages")},t.setLanguage=function(e){this._prevStoredLanguage=e,this._inputLanguage.value=e},t._storeInputLanguage=function(){var e=this._inputLanguage.value
this.setLanguage(e),this._onLanguageSelected&&this._onLanguageSelected(e),this._hidePopupCodeBlockLanguages()},t.getElement=function(){return this._wrapper},t._show=function(){h()(this._wrapper,{display:"inline-block"})},t._hide=function(){h()(this._wrapper,{display:"none"})},e}(),$n=function(e){var t,n
function r(t){var n='\n            <div class="popup-editor-body"></div>\n            <div class="te-button-section">\n                <button type="button" class="te-ok-button">'+Yt.get("OK")+'</button>\n                <button type="button" class="te-close-button">'+Yt.get("Cancel")+"</button>\n            </div>\n        "
return t=u()({header:!0,title:"CodeBlock Editor",content:n,className:"tui-popup-code-block-editor",headerButtons:'\n    <button type="button" class="popup-editor-toggle-scroll"></button>\n    <button type="button" class="popup-editor-toggle-preview"></button>\n    <button type="button" class="popup-editor-toggle-fit"></button>\n    <button type="button" class="tui-popup-close-button"></button>\n',modal:!0},t),e.call(this,t)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n
var i=r.prototype
return i._initInstance=function(t){e.prototype._initInstance.call(this,t),this.eventManager=t.eventManager,this.convertor=t.convertor,this.languages=t.languages},i._initDOM=function(t){e.prototype._initDOM.call(this,t)
var n=this.el,r=this.eventManager
this._body=n.querySelector(".popup-editor-body"),this._toggleFitButton=n.querySelector(".popup-editor-toggle-fit"),this._togglePreviewButton=n.querySelector(".popup-editor-toggle-preview"),this._toggleScrollButton=n.querySelector(".popup-editor-toggle-scroll"),this._okButton=n.querySelector(".te-ok-button"),this._closeButton=n.querySelector(".te-close-button"),this._codeMirrorWrapper=this._createCodeBlockEditor(),this._previewWrapper=this._createPreview(),this._scrollSyncSplit=new zn(this._body,this._codeMirrorWrapper,this._previewWrapper,{eventManager:r}),this._updateFitWindowButton(),this._updatePreviewButton(),this._updateScrollButton(),this._codeBlockLanguagesCombo=this._createCodeBlockLanguagesCombo()},i._initDOMEvent=function(){var t=this
e.prototype._initDOMEvent.call(this),this.on("scroll",(function(e){return e.preventDefault()})),this.on("click .popup-editor-toggle-fit",(function(){return t._toggleFitToWindow()})),this.on("click .popup-editor-toggle-preview",(function(){return t._togglePreview()})),this.on("click .popup-editor-toggle-scroll",(function(){return t._toggleScroll()})),this.on("click .te-ok-button",(function(){return t._save()})),this.on("click .te-close-button",(function(){return t.hide()})),this.on("click .popup-editor-close",(function(){return t.hide()})),this.on("click .popup-editor-editor-wrapper",(function(e){e.target===t._codeMirrorWrapper&&t._focusEditor(!0)}))},i._initEditorEvent=function(){var t=this
e.prototype._initEditorEvent.call(this),this.eventManager.listen("openPopupCodeBlockEditor",(function(e){return t.eventManager.emit("closeAllPopup"),t.show(e),t})),this.eventManager.listen("closeAllPopup",this.hide.bind(this)),this.eventManager.listen("closePopupCodeBlockEditor",this.hide.bind(this))},i._createCodeBlockEditor=function(){var e=document.createElement("div")
return e.className="popup-editor-editor-wrapper",this._codeBlockEditor=new Vn(e,this.eventManager),e},i._createPreview=function(){var e=document.createElement("div")
return this._codeBlockPreview=new Kn(e,this.eventManager,this.convertor,this._codeBlockEditor),e},i._createCodeBlockLanguagesCombo=function(){var e=this,t=this.getTitleElement(),n=new Gn(this.eventManager,this.languages)
return n.setOnLanguageSelected((function(t){e._codeBlockEditor.setLanguage(t),e._codeBlockEditor.refresh(),e._focusEditor()})),t.innerHTML="CodeBlock Editor",t.appendChild(n.getElement()),n},i._updateFitWindowButton=function(){We.a.toggleClass(this._toggleFitButton,"active",this.isFitToWindow())},i._updatePreviewButton=function(){We.a.toggleClass(this._togglePreviewButton,"active",this._scrollSyncSplit.isSplitView())},i._updateScrollButton=function(){this._scrollSyncSplit.isSplitView()?h()(this._toggleScrollButton,{display:"inline-block"}):h()(this._toggleScrollButton,{display:"none"}),We.a.toggleClass(this._toggleScrollButton,"active",this._scrollSyncSplit.isScrollSynced())},i._focusEditor=function(e){this._codeBlockEditor.focus(),e?this._codeBlockEditor.moveCursorToEnd():this._codeBlockEditor.moveCursorToStart()},i._togglePreview=function(){this._scrollSyncSplit.toggleSplitView(),this._updatePreviewButton(),this._updateScrollButton(),this._codeBlockEditor.refresh()},i._toggleFitToWindow=function(){this.toggleFitToWindow(),this._updateFitWindowButton(),this._codeBlockEditor.refresh()},i._toggleScroll=function(){this._scrollSyncSplit.toggleScrollSync(),this._updateScrollButton()},i._save=function(){this._codeBlockEditor.save(this._codeBlockElement),this.hide()},i._load=function(e){this._codeBlockElement=e,this._codeBlockEditor.load(e),this._codeBlockLanguagesCombo.setLanguage(this._codeBlockEditor.getLanguage()),this._focusEditor(),this._codeBlockPreview.refresh()},i.show=function(t){if(e.prototype.show.call(this),!t)throw new Error("should be called with codeBlockElement")
this._load(t)},i.hide=function(){this.setFitToWindow(!1),this._codeBlockEditor&&this._codeBlockEditor.clear(),this._codeBlockPreview&&this._codeBlockPreview.clear(),this._codeBlockElement=null,e.prototype.hide.call(this)},r}(Tn)
function Yn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Xn=['<div class="tui-editor-defaultUI">','<div class="te-toolbar-section"><div class="te-markdown-tab-section"></div></div>','<div class="te-editor-section"></div>','<div class="te-mode-switch-section"></div>',"</div>"].join(""),Zn=function(){function e(e){Yn(this,"name","default"),Yn(this,"el",void 0),Yn(this,"_toolbar",void 0),Yn(this,"_container",void 0),Yn(this,"_editorSection",void 0),Yn(this,"_initialEditType",void 0),Yn(this,"_editor",void 0),Yn(this,"_markdownTabSection",void 0),Yn(this,"_markdownTab",void 0),Yn(this,"_modeSwitch",void 0),Yn(this,"_popups",[]),this._editor=e,this._initialEditType=e.options.initialEditType,this._init(e.options),this._initEvent()}var t=e.prototype
return t._init=function(e){var t=e.el,n=e.toolbarItems,r=e.hideModeSwitch
this.el=We.a.createElementWith(Xn,t),this._container=t,this._editorSection=this.el.querySelector(".te-editor-section"),this._editorSection.appendChild(this._editor.layout.getEditorEl()),this._initToolbar(this._editor.eventManager,n),this._initModeSwitch(this._editor.eventManager,r),this._initPopupAddLink(),this._initPopupAddImage(),this._initPopupAddTable(),this._initPopupAddHeading(),this._initPopupTableUtils(),this._initPopupCodeBlockLanguages(),this._initPopupCodeBlockEditor(),this._initMarkdownTab()},t._initEvent=function(){this._editor.eventManager.listen("hide",this.hide.bind(this)),this._editor.eventManager.listen("show",this.show.bind(this)),this._editor.eventManager.listen("changeMode",this._markdownTabControl.bind(this)),this._editor.eventManager.listen("changePreviewStyle",this._markdownTabControl.bind(this))},t._initToolbar=function(e,t){var n=new kn(e,t)
this._toolbar=n,this.el.querySelector(".te-toolbar-section").appendChild(n.el)},t._initModeSwitch=function(e,t){var n=this,r=this.el.querySelector(".te-mode-switch-section"),i="markdown"===this._initialEditType?Bn.TYPE.MARKDOWN:Bn.TYPE.WYSIWYG,o=new Bn(r,i,e)
this._modeSwitch=o,t&&o.hide(),o.on("modeSwitched",(function(e){return n._editor.changeMode(e)}))},t._initMarkdownTab=function(){var e=this._editor
this._markdownTab=new Ln({initName:Yt.get("Write"),items:[Yt.get("Write"),Yt.get("Preview")],sections:[e.layout.getMdEditorContainerEl(),e.layout.getPreviewEl()]}),this._markdownTabSection=this.el.querySelector(".te-markdown-tab-section"),this._markdownTabSection.appendChild(this._markdownTab.el),this._markdownTab.on("itemClick",(function(t){t===Yt.get("Preview")?(e.eventManager.emit("previewNeedsRefresh"),e.eventManager.emit("changePreviewTabPreview"),e.eventManager.emit("closeAllPopup")):(e.getCodeMirror().focus(),e.eventManager.emit("changePreviewTabWrite"))}))},t._markdownTabControl=function(){this._editor.isMarkdownMode()&&"tab"===this._editor.getCurrentPreviewStyle()?(h()(this._markdownTabSection,{display:"block"}),this._markdownTab.activate(Yt.get("Write"))):h()(this._markdownTabSection,{display:"none"})},t._initPopupAddLink=function(){this._popups.push(new In({target:this.el,editor:this._editor}))},t._initPopupAddImage=function(){this._popups.push(new Rn({target:this.el,eventManager:this._editor.eventManager}))},t._initPopupAddTable=function(){this._popups.push(new Fn({target:this._toolbar.el,eventManager:this._editor.eventManager,button:this.el.querySelector("button.tui-table"),css:{position:"absolute"}}))},t._initPopupAddHeading=function(){this._popups.push(new Un({target:this._toolbar.el,eventManager:this._editor.eventManager,button:this.el.querySelector("button.tui-heading"),css:{position:"absolute"}}))},t._initPopupTableUtils=function(){var e=this
this._editor.eventManager.listen("contextmenu",(function(t){We.a.parents(t.data.target,"[contenteditable=true] table").length>0&&(t.data.preventDefault(),e._editor.eventManager.emit("openPopupTableUtils",t.data))})),this._popups.push(new Pn({target:this.el,eventManager:this._editor.eventManager}))},t._initPopupCodeBlockLanguages=function(){var e=this._editor
this._popups.push(new qn({target:this.el,eventManager:e.eventManager,languages:e.codeBlockLanguages}))},t._initPopupCodeBlockEditor=function(){this._popups.push(new $n({target:this.el,eventManager:this._editor.eventManager,convertor:this._editor.convertor,languages:this._editor.codeBlockLanguages}))},t.getToolbar=function(){return this._toolbar},t.setToolbar=function(e){this._toolbar.destroy(),this._toolbar=e},t.getModeSwitch=function(){return this._modeSwitch},t.getEditorSectionHeight=function(){var e=this._editorSection.getBoundingClientRect()
return e.bottom-e.top},t.getEditorHeight=function(){var e=this._container.getBoundingClientRect()
return e.bottom-e.top},t.getPopupTableUtils=function(){var e
return this._popups.forEach((function(t){t instanceof Pn&&(e=t)})),e},t.hide=function(){p()(this.el,"te-hide")},t.show=function(){m()(this.el,"te-hide")},t.remove=function(){We.a.remove(this.el),this._markdownTab.remove(),this._modeSwitch.remove(),this._toolbar.destroy(),this._popups.forEach((function(e){return e.remove()})),this._popups=[],dn.hide()},t.createPopup=function(e){return new Tn(e)},e}(),Qn=n(29),Jn=n(31),er=n.n(Jn)
function tr(e,t,n){var r,i=t.match(/^(\s*)((?:.|\n)*\S)(\s*)$/m),o=i[1],a=i[2],s=i[3]
if(function(e){var t=We.a.isElemNode,n=We.a.isTextNode,r=n(e.previousSibling)&&t(e.firstChild),i=n(e.nextSibling)&&t(e.lastChild)
return!r&&!i}(e))r=""+n+a+n
else{var l=e.nodeName.toLowerCase()
r="<"+l+">"+a+"</"+l+">"}return""+o+r+s}var nr=er.a.Renderer.factory(er.a.gfmRenderer,{"EM, I":function(e,t){return this.isEmptyText(t)?"":tr(e,t,"*")},"STRONG, B":function(e,t){return this.isEmptyText(t)?"":tr(e,t,"**")},"DEL, S":function(e,t){return this.isEmptyText(t)?"":tr(e,t,"~~")}}),rr=n(37),ir=function(e,t){var n=t.length
return e.substr(n,e.length-2*n)},or=function(e,t){return""+t+e+t},ar=function(e,t,n,r,i){var o=function(e,t){var n,r=e.start,i=e.end
return r.ch>=t&&(n={from:{line:r.line,ch:r.ch-t},to:{line:i.line,ch:i.ch+t}}),n}(t,n),a=!1
if(o){var s=o.from,l=o.to,c=e.getRange(s,l)
r(c)&&(e.setSelection(s,l),e.replaceSelection(i(c),"around"),a=!0)}return a},sr=function(e,t,n,r){var i=!1
return n(t)&&(e.replaceSelection(r(t),"around"),i=!0),i},lr=function(e,t,n,r,i){var o=e.getCursor(),a=o.line,s=o.ch,l=e.getSelection(),c=n.length,u=function(e){return r.test(e)}
if(!ar(e,t,c,u,(function(e){return ir(e,n)}))&&!sr(e,l,u,(function(e){return ir(e,n)}))){var d=l.replace(i,"$1")
e.replaceSelection(or(d,n),"around")}var h=e.getSelection(),f=s
l||(u(h)?f+=c:f-=c,e.setCursor(a,f))},cr=/^(\*{2}|_{2}).*\1$/,ur=/[*_]{2,}([^*_]*)[*_]{2,}/g,dr=Wt.a.command("markdown",{name:"Bold",keyMap:["CTRL+B","META+B"],exec:function(e){var t=e.getEditor(),n=t.getDoc(),r=e.getRange()
lr(n,r,"**",cr,ur),t.focus()}}),hr=/^(\*{3}|_{3}).*\1$/,fr=/^(\*{2}|_{2}).*\1$/,pr=/^(\*|_).*\1$/,gr=/([^*_])[*_]([^*_]+)[*_]([^*_])/g,mr=function(e){return hr.test(e)},vr=function(e){return fr.test(e)},yr=function(e){return pr.test(e)},br="*".length,Cr="**".length,wr="***".length,_r=function(e){return e?e.replace(gr,"$1$2$3"):""},Tr=Wt.a.command("markdown",{name:"Italic",keyMap:["CTRL+I","META+I"],exec:function(e){var t=e.getEditor(),n=t.getDoc(),r=n.getCursor(),i=r.line,o=r.ch,a=e.getRange(),s=n.getSelection()
if(s)(function(e,t,n){var r=ar.bind(this,e,n)
return r(wr,mr,(function(e){return ir(e,"*")}))||r(Cr,vr,(function(e){return or(_r(e),"*")}))||r(br,yr,(function(e){return ir(e,"*")}))||sr(e,t,mr,(function(e){return ir(e,"*")}))||sr(e,t,vr,(function(e){return or(_r(e),"*")}))||sr(e,t,yr,(function(e){return ir(e,"*")}))})(n,s,a)||n.replaceSelection(or(_r(s),"*"),"around")
else{!function(e,t){ar(e,t,wr,mr,(function(e){return ir(e,"*")}))||ar(e,t,Cr,vr,(function(e){return or(e,"*")}))||ar(e,t,br,yr,(function(){return""}))||e.replaceSelection("**","around")}(n,a)
var l=n.getSelection(),c=o
mr(l)||yr(l)&&!vr(l)?c+=br:c-=br,n.setCursor(i,c)}t.focus()}}),Er=/^~~.*~~$/,xr=/~~([^~]*)~~/g,Sr=Wt.a.command("markdown",{name:"Strike",keyMap:["CTRL+S","META+S"],exec:function(e){var t=e.getEditor(),n=t.getDoc(),r=e.getRange()
lr(n,r,"~~",Er,xr),t.focus()}}),Nr=/^> ?/,kr=Wt.a.command("markdown",{name:"Blockquote",keyMap:["ALT+Q","ALT+Q"],exec:function(e){var t,n=e.getEditor(),r=n.getDoc(),i=e.getCurrentRange(),o={line:i.from.line,ch:0},a={line:i.to.line,ch:r.getLineHandle(i.to.line).text.length},s=r.getRange(o,a).split("\n"),l=this._haveBlockquote(s)
if(t=l?this._removeBlockquote(s):this._addBlockquote(s),r.replaceRange(t.join("\n"),o,a),l){var c=s.length
this._isBlockquoteWithSpace(s[c-1])?i.to.ch-=2:i.to.ch-=1}else i.to.ch+=2
r.setCursor(i.to),n.focus()},_haveBlockquote:function(e){for(var t=0;t<e.length;t+=1)if(!Nr.test(e[t]))return!1
return!0},_addBlockquote:function(e){return e.map((function(e){return"> "+e}))},_removeBlockquote:function(e){return e.map((function(e){return e.replace(Nr,"")}))},_isBlockquoteWithSpace:function(e){return/^> /.test(e)}}),Lr=/^#+\s/g,Mr=Wt.a.command("markdown",{name:"Heading",exec:function(e,t){var n=e.getEditor(),r=n.getDoc(),i=e.getCurrentRange(),o={line:i.from.line,ch:0},a={line:i.to.line,ch:r.getLineHandle(i.to.line).text.length},s=r.getLine(a.line).length,l=r.getRange(o,a).split("\n")
Se()(l).forEach((function(e,n){l[n]=function(e,t){var n=e.match(Lr),r=""
do{r+="#",t-=1}while(t>0)
if(n){var i=e.split(n[0])
e=i[1]}return r+" "+e}(e,t)})),r.replaceRange(l.join("\n"),o,a),i.to.ch+=r.getLine(a.line).length-s,r.setSelection(o,i.to),n.focus()}}),Ar=Wt.a.command("markdown",{name:"Paragraph",exec:function(e){var t=e.getEditor(),n=t.getDoc(),r=e.getCurrentRange(),i={line:r.from.line,ch:0},o={line:r.to.line,ch:n.getLineHandle(r.to.line).text.length},a=n.getLine(o.line).length,s=n.getRange(i,o).split("\n")
Se()(s).forEach((function(e,t){s[t]=e.replace(/^(#{1,6}| *((?:\*|-|\d\.)(?: \[[ xX]])?)) /,"")})),n.replaceRange(s.join("\n"),i,o),r.to.ch+=n.getLine(o.line).length-a,n.setSelection(i,o),t.focus()}}),Or=Wt.a.command("markdown",{name:"HR",keyMap:["CTRL+L","META+L"],exec:function(e){var t=e.getEditor(),n=t.getDoc(),r="",i=e.getCurrentRange(),o={line:i.from.line,ch:i.from.ch},a={line:i.to.line,ch:i.to.ch}
i.collapsed&&(r=n.getLine(o.line),o.ch=0,a.ch=n.getLineHandle(i.to.line).text.length),n.getLine(o.line).length?r+="\n\n* * *\n\n":r+="\n* * *\n",n.replaceRange(r,o,a),t.focus()}}),Br=Vt.decodeURIGraceful,Dr=Vt.encodeMarkdownCharacters,Ir=Vt.escapeMarkdownCharacters,Rr=Wt.a.command("markdown",{name:"AddLink",exec:function(e,t){var n=e.getEditor(),r=n.getDoc(),i=e.getCurrentRange(),o={line:i.from.line,ch:i.from.ch},a={line:i.to.line,ch:i.to.ch},s=t.linkText,l=t.url
s=Br(s)
var c="["+(s=Ir(s))+"]("+(l=Dr(l))+")"
r.replaceRange(c,o,a),n.focus()}}),Pr=Vt.decodeURIGraceful,Hr=Vt.encodeMarkdownCharacters,Fr=Vt.escapeMarkdownCharacters,Ur=Wt.a.command("markdown",{name:"AddImage",exec:function(e,t){var n=e.getEditor(),r=n.getDoc(),i=e.getCurrentRange(),o={line:i.from.line,ch:i.from.ch},a={line:i.to.line,ch:i.to.ch},s=t.altText,l=t.imageUrl
s=Pr(s)
var c="!["+(s=Fr(s))+"]("+(l=Hr(l))+")"
r.replaceRange(c,o,a,"+addImage"),n.focus()}}),Wr=Wt.a.command("markdown",{name:"UL",keyMap:["CTRL+U","META+U"],exec:function(e){var t=e.getCurrentRange()
e.componentManager.getManager("list").changeSyntax(t,"ul")}}),qr=Wt.a.command("markdown",{name:"OL",keyMap:["CTRL+O","META+O"],exec:function(e){var t=e.getCurrentRange()
e.componentManager.getManager("list").changeSyntax(t,"ol")}}),jr=Wt.a.command("markdown",{name:"Indent",exec:function(e){e.getEditor().execCommand("indentOrderedList")}}),zr=Wt.a.command("markdown",{name:"Outdent",exec:function(e){e.getEditor().execCommand("indentLessOrderedList")}}),Vr=Wt.a.command("markdown",{name:"Table",exec:function(e,t,n,r){var i=e.getEditor(),o=i.getDoc(),a="\n"
i.getCursor().ch>0&&(a+="\n"),a+=function(e,t){for(var n="|",r="|",i=0;e;)t?(n+=" "+t[i]+" |",i+=1):n+="  |",r+=" --- |",e-=1
return n+"\n"+r+"\n"}(t,r),a+=function(e,t,n){for(var r="",i=e,o=0;o<t;o+=1){r+="|"
for(var a=0;a<e;a+=1)n?(r+=" "+n[i]+" |",i+=1):r+="  |"
r+="\n"}return r.replace(/\n$/g,"")}(t,n-1,r),o.replaceSelection(a),r||i.setCursor(i.getCursor().line-n,2),e.focus()}}),Kr=Wt.a.command("markdown",{name:"Task",keyMap:["ALT+T","ALT+T"],exec:function(e){var t=e.getCurrentRange()
e.componentManager.getManager("list").changeSyntax(t,"task")}}),Gr=/^`([^`]+)`$/,$r=/`([^`]+)`/g,Yr=Wt.a.command("markdown",{name:"Code",keyMap:["SHIFT+CTRL+C","SHIFT+META+C"],exec:function(e){var t,n=e.getEditor(),r=n.getDoc(),i=r.getSelection(),o=n.getCursor(),a=this.hasStrikeSyntax(i)
a?(t=this.remove(i),t=this._removeCodeSyntax(t)):(t=this._removeCodeSyntax(i),t=this.append(t)),r.replaceSelection(t,"around"),i||a||this.setCursorToCenter(r,o,a),n.focus()},setCursorToCenter:function(e,t,n){var r=n?-1:1
e.setCursor(t.line,t.ch+r)},hasStrikeSyntax:function(e){return Gr.test(e)},append:function(e){return"`"+e+"`"},remove:function(e){return e.substr(1,e.length-2)},_removeCodeSyntax:function(e){return e?e.replace($r,"$1"):""}}),Xr=Wt.a.command("markdown",{name:"CodeBlock",keyMap:["SHIFT+CTRL+P","SHIFT+META+P"],exec:function(e){var t=e.getEditor(),n=t.getDoc(),r=e.getCurrentRange(),i=["```",n.getSelection(),"```"],o=1
0!==r.from.ch&&(i.unshift(""),o+=1),r.to.ch!==n.getLine(r.to.line).length&&i.push(""),n.replaceSelection(i.join("\n")),t.setCursor(r.from.line+o,0),t.focus()}})
function Zr(e){e.hasFormat("b")||e.hasFormat("strong")?e.changeFormat(null,{tag:"b"}):e.hasFormat("PRE")||(e.hasFormat("code")&&e.changeFormat(null,{tag:"code"}),e.bold())}var Qr=Wt.a.command("wysiwyg",{name:"Bold",keyMap:["CTRL+B","META+B"],exec:function(e){var t=e.getEditor(),n=e.componentManager.getManager("tableSelection")
if(e.focus(),t.hasFormat("table")&&n.getSelectedCells().length){n.styleToSelectedCells(Zr)
var r=t.getSelection()
r.collapse(!0),t.setSelection(r)}else Zr(t),We.a.optimizeRange(t.getSelection(),"B")}})
function Jr(e){e.hasFormat("i")||e.hasFormat("em")?e.changeFormat(null,{tag:"i"}):e.hasFormat("PRE")||(e.hasFormat("code")&&e.changeFormat(null,{tag:"code"}),e.italic())}var ei=Wt.a.command("wysiwyg",{name:"Italic",keyMap:["CTRL+I","META+I"],exec:function(e){var t=e.getEditor(),n=e.componentManager.getManager("tableSelection")
if(e.focus(),t.hasFormat("table")&&n.getSelectedCells().length){n.styleToSelectedCells(Jr)
var r=t.getSelection()
r.collapse(!0),t.setSelection(r)}else Jr(t),We.a.optimizeRange(t.getSelection(),"I")}})
function ti(e){e.hasFormat("S")?e.changeFormat(null,{tag:"S"}):e.hasFormat("PRE")||(e.hasFormat("code")&&e.changeFormat(null,{tag:"code"}),e.strikethrough())}var ni=Wt.a.command("wysiwyg",{name:"Strike",keyMap:["CTRL+S","META+S"],exec:function(e){var t=e.getEditor(),n=e.componentManager.getManager("tableSelection")
if(e.focus(),t.hasFormat("table")&&n.getSelectedCells().length){n.styleToSelectedCells(ti)
var r=t.getSelection()
r.collapse(!0),t.setSelection(r)}else ti(t),We.a.optimizeRange(t.getSelection(),"S")}}),ri=Wt.a.command("wysiwyg",{name:"Blockquote",keyMap:["ALT+Q","ALT+Q"],exec:function(e){var t=e.getEditor()
e.focus(),t.hasFormat("TABLE")||t.hasFormat("PRE")||(t.hasFormat("BLOCKQUOTE")?t.decreaseQuoteLevel():t.increaseQuoteLevel())}}),ii=Vt.decodeURIGraceful,oi=Vt.encodeMarkdownCharacters,ai=Wt.a.command("wysiwyg",{name:"AddImage",exec:function(e,t){var n=e.getEditor(),r=t.altText,i=t.imageUrl
r=ii(r),i=oi(i),e.focus(),n.hasFormat("PRE")||n.insertImage(i,{alt:r})}}),si=Vt.decodeURIGraceful,li=Vt.encodeMarkdownCharacters,ci=Wt.a.command("wysiwyg",{name:"AddLink",exec:function(e,t){var n=e.getEditor(),r=e.getLinkAttribute(),i=t.url,o=t.linkText
if(o=si(o),i=li(i),e.focus(),!n.hasFormat("PRE"))if(n.removeAllFormatting(),n.getSelectedText())n.makeLink(i,r)
else{var a=n.createElement("A",u()({href:i},r))
a.textContent=o,n.insertElement(a)}}}),ui=Wt.a.command("wysiwyg",{name:"HR",keyMap:["CTRL+L","META+L"],exec:function(e){var t=e.getEditor(),n=t.getSelection()
if(n.collapsed&&!t.hasFormat("TABLE")&&!t.hasFormat("PRE")){var r=document.createElement("hr"),i=We.a.getChildNodeByOffset(n.startContainer,n.startOffset),o=We.a.getTopNextNodeUnder(i,e.getBody())
if(o&&!We.a.isTextNode(o))for(;o&&"false"===o.getAttribute("contenteditable");)o=o.nextSibling
o||(o=We.a.createEmptyLine(),We.a.append(e.getBody(),o)),t.modifyBlocks((function(e){return e.appendChild(r),e}))
var a=r.previousSibling
a&&We.a.isTextNode(a)&&0===We.a.getTextLength(a)&&r.parentNode.removeChild(a),r.parentNode.replaceChild(We.a.createHorizontalRule(),r),n.selectNodeContents(o),n.collapse(!0),t.setSelection(n),t.saveUndoState(n)}e.focus()}}),di=Wt.a.command("wysiwyg",{name:"Heading",exec:function(e,t){var n=e.getEditor()
e.focus(),n.hasFormat("TABLE")||n.hasFormat("PRE")||n.modifyBlocks((function(e){var n=We.a.children(e,"h1, h2, h3, h4, h5, h6, div")
return Se()(n).forEach((function(e){var n="h"+t
if("DIV"===We.a.getNodeName(e))We.a.wrap(e,n)
else{var r=document.createElement(n)
We.a.insertBefore(r,e),r.innerHTML=e.innerHTML,We.a.remove(e)}})),e}))}})
function hi(e,t){Se()(t).forEach((function(t){e.appendChild(t.cloneNode(!0))}))}var fi=Wt.a.command("wysiwyg",{name:"Paragraph",exec:function(e){var t=e.getEditor()
e.focus(),t.hasFormat("TABLE")||t.hasFormat("PRE")||t.modifyBlocks((function(e){var t=document.createDocumentFragment()
return Se()(e.childNodes).forEach((function(e){e.nodeName.match(/h\d/i)?hi(t,e.children):e.nodeName.match(/ul|ol/i)?We.a.findAll(e,"li").forEach((function(e){hi(t,e.children)})):t.appendChild(e)})),t}))}}),pi=Wt.a.command("wysiwyg",{name:"UL",keyMap:["CTRL+U","META+U"],exec:function(e){var t=e.getEditor(),n=t.getSelection(),r=e.componentManager.getManager("list"),i=n.startContainer,o=n.endContainer,a=n.startOffset,s=n.endOffset,l=[]
if(e.focus(),t.saveUndoState(n),r.isAvailableMakeListInTable())l=r.createListInTable(n,"UL")
else for(var c=r.getLinesOfSelection(i,o),u=0;u<c.length;u+=1){var d=this._changeFormatToUnorderedListIfNeed(e,c[u])
d&&l.push(d)}l.length&&r.adjustRange(i,o,a,s,l)},_changeFormatToUnorderedListIfNeed:function(e,t){var n,r=e.getEditor(),i=r.getSelection(),o=e.componentManager.getManager("task")
return r.hasFormat("PRE")||(i.setStart(t,0),i.collapse(!0),r.setSelection(i),r.hasFormat("LI")?(e.saveSelection(i),o.unformatTask(i.startContainer),r.replaceParent(i.startContainer,"ol","ul"),e.restoreSavedSelection()):(e.unwrapBlockTag(),r.makeUnorderedList()),n=r.getSelection().startContainer),n}}),gi=Wt.a.command("wysiwyg",{name:"OL",keyMap:["CTRL+O","META+O"],exec:function(e){var t=e.getEditor(),n=t.getSelection(),r=e.componentManager.getManager("list"),i=n.startContainer,o=n.startOffset,a=n.endContainer,s=n.endOffset,l=[]
if(e.focus(),t.saveUndoState(n),r.isAvailableMakeListInTable())l=r.createListInTable(n,"OL")
else for(var c=r.getLinesOfSelection(i,a),u=0;u<c.length;u+=1){var d=this._changeFormatToOrderedListIfNeed(e,c[u])
d&&l.push(d)}l.length&&r.adjustRange(i,a,o,s,l)},_changeFormatToOrderedListIfNeed:function(e,t){var n,r=e.getEditor(),i=r.getSelection(),o=e.componentManager.getManager("task")
return r.hasFormat("PRE")||(i.setStart(t,0),i.collapse(!0),r.setSelection(i),r.hasFormat("LI")?(e.saveSelection(i),o.unformatTask(i.startContainer),r.replaceParent(i.startContainer,"ul","ol"),e.restoreSavedSelection()):(e.unwrapBlockTag(),r.makeOrderedList()),n=r.getSelection().startContainer),n}}),mi=Wt.a.command("wysiwyg",{name:"Table",exec:function(e,t,n,r){var i,o=e.getEditor(),a=e.componentManager.getManager("table").getTableIDClassName()
!o.getSelection().collapsed||o.hasFormat("TABLE")||o.hasFormat("PRE")?e.focus():(i='<table class="'+a+'">',i+=function(e,t){for(var n="<thead><tr>",r=0;e;)n+="<th>",t&&(n+=t[r],r+=1),n+="</th>",e-=1
return n+"</tr></thead>"}(t,r),i+=function(e,t,n){for(var r="<tbody>",i=e,o=0;o<t;o+=1){r+="<tr>"
for(var a=0;a<e;a+=1)r+="<td>",n&&(r+=n[i],i+=1),r+="</td>"
r+="</tr>"}return r+"</tbody>"}(t,n-1,r),i+="</table>",o.insertHTML(i),e.focus(),r||function(e,t){var n=e.getSelection()
n.selectNodeContents(t.querySelector("th")),n.collapse(!0),e.setSelection(n)}(o,e.getBody().querySelector("."+a)))}})
function vi(e){var t=e.cloneNode(!0),n=De.a.msie?"":"<br />"
return We.a.findAll(t,"td").forEach((function(e){e.innerHTML=n})),t}function yi(e,t){var n=e.getSelection()
n.selectNodeContents(t.querySelector("td")),n.collapse(!0),e.setSelection(n)}var bi=Wt.a.command("wysiwyg",{name:"AddRow",exec:function(e){var t,n,r=e.getEditor(),i=r.getSelection().cloneRange(),o=function(e){var t=e.componentManager.getManager("tableSelection"),n=t.getSelectedCells(),r=1
if(n.length>1){var i=n[0],o=n[n.length-1],a=t.getSelectionRangeFromTable(i,o)
r=a.to.row-a.from.row+1}return r}(e)
if(e.focus(),r.hasFormat("TD")){r.saveUndoState(i),t=We.a.closest(i.startContainer,"tr")
for(var a=0;a<o;a+=1)n=vi(t),We.a.insertAfter(n,t)
yi(r,n)}else if(r.hasFormat("TH")){r.saveUndoState(i),t=We.a.closest(i.startContainer,"tr")
var s=We.a.parents(t,"thead")[0].nextSibling
je()(s,"tbody")&&(t=We.a.children(s,"tr")[0])
for(var l=0;l<o;l+=1)n=vi(t),We.a.insertBefore(n,t)
yi(r,n)}}}),Ci=Wt.a.command("wysiwyg",{name:"AddCol",exec:function(e){var t,n=e.getEditor(),r=n.getSelection().cloneRange(),i=function(e){var t=e.componentManager.getManager("tableSelection").getSelectedCells(),n=1
if(t.length>0){var r=t[0].parentNode.querySelectorAll("td, th").length
n=Math.min(r,t.length)}return n}(e)
e.focus(),n.hasFormat("TR")&&(n.saveUndoState(r),function(e,t){void 0===t&&(t=1)
var n=We.a.parents(e,"table")[0]
if(n){var r,i=jt()(e,Se()(e.parentNode.childNodes))
We.a.findAll(n,"tr").forEach((function(e){for(var n="TBODY"===We.a.getNodeName(e.parentNode),o=De.a.msie,a=e.children[i],s=0;s<t;s+=1)r=n?document.createElement("td"):document.createElement("th"),o||r.appendChild(document.createElement("br")),We.a.insertAfter(r,a)}))}}(t=function(e){var t=e.startContainer
return"TD"!==We.a.getNodeName(t)&&"TH"!==We.a.getNodeName(t)&&(t=We.a.parentsUntil(t,"tr")),t}(r),i),function(e,t){var n=e.getSelection()
n.selectNodeContents(t.nextSibling),n.collapse(!0),e.setSelection(n)}(n,t))}})
function wi(e,t,n){var r=n.querySelectorAll("tbody tr").length,i=We.a.parents(e,"thead").length,o=t.from.row,a=t.to.row
return i&&(o+=1),(1===o||i)&&a===r&&(a-=1),We.a.findAll(n,"tr").slice(o,a+1)}var _i=Wt.a.command("wysiwyg",{name:"RemoveRow",exec:function(e){var t=e.getEditor(),n=t.getSelection().cloneRange(),r=We.a.parents(n.startContainer,"table")[0],i=e.componentManager.getManager("tableSelection"),o=e.componentManager.getManager("table"),a=function(e,t,n){var r,i,o=t.getSelectedCells()
if(o.length)r=t.getSelectionRangeFromTable(o[0],o[o.length-1]),i=wi(o[0],r,n)
else{var a=We.a.closest(e.startContainer,"td,th")
i=wi(a,r=t.getSelectionRangeFromTable(a,a),n)}return i}(n,i,r),s=r.querySelectorAll("tbody tr").length
if(e.focus(),(t.hasFormat("TD")||t.hasFormat("TABLE"))&&s>1){t.saveUndoState(n)
var l=a[0],c=a[a.length-1],u=c&&c.nextSibling?c.nextSibling:l&&l.previousSibling
u&&function(e,t,n,r){var i=n.querySelector("td")
t.setStart(i,0),t.collapse(!0),r.setLastCellNode(i),e.setSelection(t)}(t,n,u,o),a.forEach((function(e){return We.a.remove(e)}))}i.removeClassAttrbuteFromAllCellsIfNeed()}})
function Ti(e){var t=We.a.parents(e,"table")[0]
if(t){var n=jt()(e,Se()(e.parentNode.childNodes))
We.a.findAll(t,"tr").forEach((function(e){var t=e.children[n]
We.a.remove(t)}))}}var Ei=Wt.a.command("wysiwyg",{name:"RemoveCol",exec:function(e){var t=e.getEditor(),n=t.getSelection().cloneRange(),r=We.a.parents(n.startContainer,"table")[0],i=e.componentManager.getManager("table"),o=e.componentManager.getManager("tableSelection"),a=We.a.closest(n.startContainer,"table").querySelectorAll("thead tr th").length>1
if(e.focus(),n.collapse(!0),t.setSelection(n),t.hasFormat("TR",null,n)&&a){var s=r.querySelectorAll("tbody tr"),l=s.length?s[0].querySelectorAll("td").length:0,c=o.getSelectedCells()
if(c.length<l){var u
if(t.saveUndoState(n),c.length>1){var d=c[c.length-1],h=c[0]
u=d.nextSibling?d.nextSibling:h.previousSibling,function(e){for(var t=e.length,n=0;n<t;n+=1)e[n]&&Ti(e[n])}(c)}else{var f=function(e){var t=e.startContainer
return"TD"!==We.a.getNodeName(t)&&"TH"===!We.a.getNodeName(t)&&(t=We.a.parentsUntil(t,"tr")),t}(n)
u=f.nextSibling?f.nextSibling:f.previousSibling,Ti(f)}!function(e,t,n){var r=t
if(t&&We.a.isContain(document.body,t)){var i=e.getSelection()
i.selectNodeContents(t),i.collapse(!0),e.setSelection(i),n.setLastCellNode(r)}}(t,u,i)}}}}),xi=Wt.a.command("wysiwyg",{name:"AlignCol",exec:function(e,t){var n=e.getEditor(),r=n.getSelection().cloneRange(),i=e.componentManager.getManager("tableSelection"),o=function(e,t){var n,r,i=t.getSelectedCells()
if(i.length)n=t.getSelectionRangeFromTable(i[0],i[i.length-1])
else{var o=e.startContainer
r=We.a.isTextNode(o)?We.a.parent(o,"td,th"):o,n=t.getSelectionRangeFromTable(r,r)}return n}(r,i)
if(e.focus(),n.hasFormat("TR")){n.saveUndoState(r)
var a=We.a.parents(r.startContainer,"table")[0]
!function(e,t,n){var r=n.isDivided||!1,i=n.startColumnIndex,o=n.endColumnIndex,a=We.a.findAll(e,"tr"),s=a.length?a[0].querySelectorAll("td,th").length:0
a.forEach((function(e){Se()(We.a.children(e,"td,th")).forEach((function(e,n){(r&&(i<=n&&n<=s||n<=o)||i<=n&&n<=o)&&e.setAttribute("align",t)}))}))}(a,t,function(e,t){var n,r,i,o=e.querySelectorAll("tr"),a=o.length?o[0].querySelectorAll("td,th").length:0,s=t.from,l=t.to
return s.row===l.row?(n=s.cell,r=l.cell):s.row<l.row&&(s.cell<=l.cell?(n=0,r=a-1):(n=s.cell,r=l.cell,i=!0)),{startColumnIndex:n,endColumnIndex:r,isDivided:i}}(a,o))}i.removeClassAttrbuteFromAllCellsIfNeed()}}),Si=Wt.a.command("wysiwyg",{name:"RemoveTable",exec:function(e){var t=e.getEditor(),n=t.getSelection().cloneRange()
t.hasFormat("TABLE")&&(t.saveUndoState(n),We.a.remove(We.a.closest(n.startContainer,"table"))),e.focus()}}),Ni=Wt.a.command("wysiwyg",{name:"Indent",exec:function(e){var t,n,r,i=e.componentManager.getManager("list"),o=e.getEditor().getSelection(),a=We.a.closest(o.startContainer,"li"),s=a&&a.previousSibling
if(s){var l=a.querySelector("li")
e.getEditor().saveUndoState(),n=a.className,t=s.className,a.className="",s.className="",l&&(r=l.className,Se()(l.children).filter((function(e){return je()(e,"div")})).length||(l.className="")),e.getEditor().increaseListLevel(),i.mergeList(a),a.className=n,s.className=t,l&&(l.className=r)}}})
function ki(e){var t=e.getEditor().getSelection()
return We.a.closest(t.startContainer,"li")}var Li=Wt.a.command("wysiwyg",{name:"Outdent",exec:function(e){var t,n,r=ki(e)
if(r&&(t=r,"OL"!==(n=We.a.getNodeName(t.nextSibling))&&"UL"!==n)){e.getEditor().saveUndoState()
var i=r.className
e.getEditor().decreaseListLevel(),(r=ki(e))&&i&&(r.className=i)}}}),Mi=Wt.a.command("wysiwyg",{name:"Task",keyMap:["ALT+T","ALT+T"],exec:function(e){var t=e.getEditor(),n=t.getSelection(),r=e.componentManager.getManager("list"),i=n.startContainer,o=n.endContainer,a=n.startOffset,s=n.endOffset,l=[]
if(e.focus(),t.saveUndoState(n),r.isAvailableMakeListInTable())l=r.createListInTable(n,"TASK")
else for(var c=r.getLinesOfSelection(i,o),u=0;u<c.length;u+=1){var d=this._changeFormatToTaskIfNeed(e,c[u])
d&&l.push(d)}l.length&&r.adjustRange(i,o,a,s,l)},_changeFormatToTaskIfNeed:function(e,t){var n,r=e.getEditor(),i=r.getSelection(),o=e.componentManager.getManager("task")
return r.hasFormat("PRE")||(i.setStart(t,0),i.collapse(!0),r.setSelection(i),r.hasFormat("li")||(r.makeUnorderedList(),t=r.getSelection().startContainer),Je()(t,"task-list-item")?o.unformatTask(t):o.formatTask(t),n=r.getSelection().startContainer),n}})
function Ai(e,t){if(!t.hasFormat("PRE")&&t.hasFormat("code"))t.changeFormat(null,{tag:"code"}),function(e){"CODE"===We.a.getNodeName(e.startContainer.nextSibling)&&0===We.a.getTextLength(e.startContainer.nextSibling)&&We.a.remove(e.startContainer.nextSibling)}(e.getSelection().cloneRange())
else if(!t.hasFormat("a")&&!t.hasFormat("PRE")){t.hasFormat("b")?t.removeBold():t.hasFormat("i")&&t.removeItalic(),t.changeFormat({tag:"code"})
var n=t.getSelection().cloneRange()
n.setStart(n.endContainer,n.endOffset),n.collapse(!0),t.setSelection(n)}}var Oi=Wt.a.command("wysiwyg",{name:"Code",keyMap:["SHIFT+CTRL+C","SHIFT+META+C"],exec:function(e){var t=e.getEditor(),n=e.componentManager.getManager("tableSelection"),r=Ai.bind(null,e.getEditor())
if(e.focus(),t.hasFormat("table")&&n.getSelectedCells().length){n.styleToSelectedCells(r)
var i=t.getSelection()
i.collapse(!0),t.setSelection(i)}else r(t)}}),Bi=Wt.a.command("wysiwyg",{name:"CodeBlock",keyMap:["SHIFT+CTRL+P","SHIFT+META+P"],exec:function(e,t){var n=e.getEditor(),r=n.getSelection().cloneRange()
if(!n.hasFormat("PRE")&&!n.hasFormat("TABLE")){var i='data-te-codeblock class = "te-content-codeblock-temp"'
t&&(i+=' data-language="'+t+'"')
var o=function(e,t){var n,r=t.componentManager.getManager("codeblock")
if(e.collapsed)n="<br>"
else{var i=e.extractContents(),o=Se()(i.childNodes),a=document.createElement("div")
a.appendChild(r.prepareToPasteOnCodeblock(o)),n=a.innerHTML}return n}(r,e)
n.insertHTML("<pre "+i+">"+o+"</pre>"),function(e,t){var n=t.getEditor().getSelection().cloneRange()
m()(e,"te-content-codeblock-temp"),n.setStartBefore(e.firstChild),n.collapse(!0),t.getEditor().setSelection(n)}(e.getBody().querySelector(".te-content-codeblock-temp"),e)}e.focus()}}),Di=null,Ii=null
function Ri(e,t){var n=t.syncScrollTop,r=t.releaseEventBlock
clearTimeout(Ii),n(e),Ii=setTimeout((function(){r()}),15)}function Pi(e,t,n){var r=t-e,i=Date.now()
!function o(){var a,s=(Date.now()-i)/200
Di&&clearTimeout(Di),s<1?(a=e+r*Math.cos((1-s)*Math.PI/2),Ri(Math.ceil(a),n),Di=setTimeout(o,1)):(Ri(t,n),Di=null)}()}var Hi=n(17),Fi=n(24),Ui=!1,Wi=null
function qi(e,t){var n=Object(Fi.a)(t),r=n||e.offsetHeight
return n||Object(Fi.d)(t,r),r}function ji(e,t,n){var r=t._previewContent,i=t.el,o=e.cm,a=e.toastMark,s=o.getScrollInfo(),l=s.left,c=s.top,u=s.height-c<=s.clientHeight,d=i.scrollTop,h=u?i.scrollHeight:0
if(c&&!u){var f=(n?o.coordsChar({left:l,top:c},"local"):o.getCursor("from")).line,p=a.findFirstNodeAtLine(f+1)
if(!p||Object(ae.g)(p))return
var g=Object(Hi.f)(p),m=g.node,v=g.mdNode,y=Object(ae.f)(v),b=qi(i,0)
if(h=Object(Hi.g)(m,r)||m.offsetTop,n){if(Object(Hi.h)(v)){var C=qi(m,v.id),w=o.heightAtLine(y-1,"local"),_=Object(Hi.c)(v,o)
h+=Object(Hi.b)(c,w,_,C)
var T={latestScrollTop:Wi,scrollTop:c,targetScrollTop:h,sourceScrollTop:d}
if(h=Object(Hi.d)(T),Wi=c,h===d)return}}else{var E=function(e,t,n,r,i){var o=Object(ae.f)(n),a=e.lineInfo(t).handle.height,s=qi(i,0),l=r.getBoundingClientRect().top-i.getBoundingClientRect().top,c=.5*-s
if(Object(ae.j)(n)){var u=(t-o+1)*a
c=u,l+=u}return{top:l,additionalScrollTop:c}}(o,f,v,m,i),x=E.top,S=E.additionalScrollTop
if(x>0&&x<b)return
h+=S,Wi=null}}Ui=!0,Pi(d,h,{syncScrollTop:function(e){return i.scrollTop=e},releaseEventBlock:function(){return Ui=!1}})}var zi=!1,Vi=null
var Ki=!0
function Gi(){return Ki}function $i(e,t,n){"vertical"===e.mdPreviewStyle&&"markdown"===e.currentMode?(h()(t.el,{display:"inline-block"}),h()(n,{display:"inline-block"})):(h()(t.el,{display:"none"}),h()(n,{display:"none"}))}var Yi=!0
function Xi(e){var t=e.mdEditor,n=e.preview;(function(e){if(!e.isViewer()&&"default"===e.getUI().name){var t=e.i18n,n={ACTIVE:t.get("Auto scroll enabled"),INACTIVE:t.get("Auto scroll disabled")},r=e.getUI().getToolbar(),i=document.createElement("button")
i.className="tui-scrollsync active",r.addItem("divider"),r.addItem({type:"button",options:{command:"scrollSyncToggle",tooltip:n.ACTIVE,el:i}})
var o=r.getItems(),a=o[o.length-2].el,s=o[o.length-1]
$i(e,s,a),function(e,t,n){e.on("changeMode",(function(){return $i(e,t,n)})),e.on("changePreviewStyle",(function(){return $i(e,t,n)}))}(e,s,a),function(e,t,n){e.addCommand("markdown",{name:"scrollSyncToggle",exec:function(){Ki=!Ki,t._onOut(),Ki?(t.el.className="tui-scrollsync active",t.setTooltip(n.ACTIVE)):(t.el.className="tui-scrollsync",t.setTooltip(n.INACTIVE)),t._onOver()}})}(e,s,n)}})(e),function(e,t){e.eventManager.listen("scroll",(function(n){var r=n.source,i=n.data
Gi()&&Yi&&t.isVisible()&&("markdown"!==r||zi?"preview"!==r||Ui||function(e,t,n){var r=e.toastMark,i=e.cm,o=t.el,a=o.scrollTop,s=o.clientHeight,l=o.scrollHeight,c=t._previewContent,u=l-a<=s,d=i.getScrollInfo(),h=d.left,f=d.top,p=d.height,g=u?p:0
if(a&&n&&!u){if(!(n=function(e,t){for(;!e.getAttribute("data-nodeid")&&e.parentElement!==t;)e=e.parentElement
return e}(n,c)).getAttribute("data-nodeid"))return
var m=i.coordsChar({left:h,top:f},"local").line,v=Number(n.getAttribute("data-nodeid")),y=Object(Hi.f)(r.findNodeById(v)),b=y.mdNode,C=y.node,w=Object(ae.f)(b)
if(g=i.heightAtLine(w-1,"local"),Object(ae.i)(b)&&(g+=Object(Hi.e)(i,w,m)),Object(Hi.h)(b)){var _=Object(Hi.c)(b,i),T=function(e,t,n){var r=Object(Fi.a)(t),i=Object(Fi.b)(t),o=r||e.offsetHeight,a=i||Object(Hi.g)(e,n)||e.offsetTop
return r||Object(Fi.d)(t,o),i||Object(Fi.e)(t,a),{offsetHeight:o,offsetTop:a}}(C,v,c),E=T.offsetHeight,x=T.offsetTop
g+=Object(Hi.b)(a,x,E,_)
var S={latestScrollTop:Vi,scrollTop:a,targetScrollTop:g,sourceScrollTop:f}
if(g=Object(Hi.d)(S),Vi=a,g===f)return}}zi=!0,Pi(f,g,{syncScrollTop:function(e){return i.scrollTo(0,e)},releaseEventBlock:function(){return zi=!1}})}(e,t,i):ji(e,t,!0))}))}(t,n),function(e,t){e.eventManager.listen("previewRenderAfter",(function(){setTimeout((function(){Gi()&&ji(e,t),Yi=!0}),200)}))}(t,n),t.cm.on("change",(function(){return Yi=!1}))}function Zi(){return(Zi=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Qi=[],Ji=function(){function e(e){var t=this
this.initialHtml=e.el.innerHTML,e.el.innerHTML="",this.options=u()({previewStyle:"tab",previewHighlight:!0,initialEditType:"markdown",height:"300px",minHeight:"200px",language:"en-US",useDefaultHTMLSanitizer:!0,useCommandShortcut:!0,usageStatistics:!0,toolbarItems:["heading","bold","italic","strike","divider","hr","quote","divider","ul","ol","task","indent","outdent","divider","table","image","link","divider","code","codeblock"],hideModeSwitch:!1,linkAttribute:null,extendedAutolinks:!1,customConvertor:null,customHTMLRenderer:null,referenceDefinition:!1,customHTMLSanitizer:null},e),this.codeBlockLanguages=[],this.eventManager=new Ut.a,this.importManager=new Vt(this.eventManager),this.commandManager=new Wt.a(this,{useCommandShortcut:this.options.useCommandShortcut})
var n=Object(b.c)(this.options.linkAttribute),r=this.options,o=r.customHTMLRenderer,a=r.customHTMLSanitizer,s=r.extendedAutolinks,l=r.referenceDefinition,c=r.useDefaultHTMLSanitizer,d={linkAttribute:n,customHTMLRenderer:o,extendedAutolinks:s,referenceDefinition:l}
this.options.customConvertor?this.convertor=new this.options.customConvertor(this.eventManager,d):this.convertor=new Kt.a(this.eventManager,d)
var h=a||(c?ze.a:null)
h&&this.convertor.initHtmlSanitizer(h),this.options.hooks&&i()(this.options.hooks,(function(e,n){return t.addHook(n,e)})),this.options.events&&i()(this.options.events,(function(e,n){return t.on(n,e)})),this.layout=new Ft(e,this.eventManager),this.i18n=Yt,this.i18n.setCode(this.options.language),this.setUI(this.options.UI||new Zn(this)),this.toastMark=new v.ToastMark("",{disallowedHtmlBlockTags:["br"],extendedAutolinks:s,referenceDefinition:l,disallowDeepHeading:!0}),this.mdEditor=Te.factory(this.layout.getMdEditorContainerEl(),this.eventManager,this.toastMark,this.options),this.preview=new Ee.a(this.layout.getPreviewEl(),this.eventManager,this.convertor,Zi({},d,{isViewer:!1,highlight:this.options.previewHighlight})),this.wwEditor=Pt.factory(this.layout.getWwEditorContainerEl(),this.eventManager,{sanitizer:h,linkAttribute:n}),this.toMarkOptions={gfm:!0,renderer:nr},this.options.plugins&&Object(rr.a)(this.options.plugins,this),this.changePreviewStyle(this.options.previewStyle),this.changeMode(this.options.initialEditType,!0),this.minHeight(this.options.minHeight),this.height(this.options.height),this.setMarkdown(this.options.initialValue,!1),this.options.placeholder&&this.setPlaceholder(this.options.placeholder),this.options.initialValue||this.setHtml(this.initialHtml,!1),this.eventManager.emit("load",this),Qi.push(this),this._addDefaultCommands(),this.options.usageStatistics&&Object(b.d)(),Xi(this)}var t=e.prototype
return t.changePreviewStyle=function(e){this.layout.changePreviewStyle(e),this.mdPreviewStyle=e,this.eventManager.emit("changePreviewStyle",e),this.eventManager.emit("previewNeedsRefresh",this.getMarkdown())},t.exec=function(){var e;(e=this.commandManager).exec.apply(e,arguments)},t._addDefaultCommands=function(){this.addCommand(dr),this.addCommand(Tr),this.addCommand(kr),this.addCommand(Mr),this.addCommand(Ar),this.addCommand(Or),this.addCommand(Rr),this.addCommand(Ur),this.addCommand(Wr),this.addCommand(qr),this.addCommand(jr),this.addCommand(zr),this.addCommand(Vr),this.addCommand(Kr),this.addCommand(Yr),this.addCommand(Xr),this.addCommand(Sr),this.addCommand(Qr),this.addCommand(ei),this.addCommand(ri),this.addCommand(pi),this.addCommand(gi),this.addCommand(ai),this.addCommand(ci),this.addCommand(ui),this.addCommand(di),this.addCommand(fi),this.addCommand(Ni),this.addCommand(Li),this.addCommand(Mi),this.addCommand(mi),this.addCommand(bi),this.addCommand(Ci),this.addCommand(_i),this.addCommand(Ei),this.addCommand(xi),this.addCommand(Si),this.addCommand(Oi),this.addCommand(Bi),this.addCommand(ni)},t.addCommand=function(e,t){t?this.commandManager.addCommand(Wt.a.command(e,t)):this.commandManager.addCommand(e)},t.afterAddedCommand=function(){this.eventManager.emit("afterAddedCommand",this)},t.on=function(e,t){this.eventManager.listen(e,t)},t.off=function(e){this.eventManager.removeEventHandler(e)},t.addHook=function(e,t){this.eventManager.removeEventHandler(e),this.eventManager.listen(e,t)},t.removeHook=function(e){this.eventManager.removeEventHandler(e)},t.getCodeMirror=function(){return this.mdEditor.getEditor()},t.getSquire=function(){return this.wwEditor.getEditor()},t.focus=function(){this.getCurrentModeEditor().focus()},t.blur=function(){this.getCurrentModeEditor().blur()},t.moveCursorToEnd=function(){this.getCurrentModeEditor().moveCursorToEnd()},t.moveCursorToStart=function(){this.getCurrentModeEditor().moveCursorToStart()},t.setMarkdown=function(e,t){void 0===t&&(t=!0),e=e||"",this.isMarkdownMode()?this.mdEditor.setValue(e,t):this.wwEditor.setValue(this.convertor.toHTML(e),t),this.eventManager.emit("setMarkdownAfter",e)},t.setHtml=function(e,t){if(void 0===t&&(t=!0),e=e||"",this.wwEditor.setValue(e,t),this.isMarkdownMode()){var n=this.convertor.toMarkdown(this.wwEditor.getValue(),this.toMarkOptions)
this.mdEditor.setValue(n,t),this.eventManager.emit("setMarkdownAfter",n)}},t.getMarkdown=function(){return this.isMarkdownMode()?this.mdEditor.getValue():this.convertor.toMarkdown(this.wwEditor.getValue(),this.toMarkOptions)},t.getHtml=function(){return this.isWysiwygMode()&&this.mdEditor.setValue(this.convertor.toMarkdown(this.wwEditor.getValue(),this.toMarkOptions)),this.convertor.toHTML(this.mdEditor.getValue())},t.insertText=function(e){this.isMarkdownMode()?this.mdEditor.replaceSelection(e):this.wwEditor.insertText(e)},t.addWidget=function(e,t,n,r){this.getCurrentModeEditor().addWidget(e,t,n,r)},t.height=function(e){if(a()(e)){var t=this.options.el
"auto"===e?(p()(t,"auto-height"),this.minHeight(this.minHeight())):(m()(t,"auto-height"),this.minHeight(e)),l()(e)&&(e+="px"),h()(this.options.el,{height:e}),this._height=e}return this._height},t.minHeight=function(e){if(a()(e)){var t=this._ui.getEditorHeight()-this._ui.getEditorSectionHeight()
this._minHeight=e,e=parseInt(e,10),e=Math.max(e-t,0),this.wwEditor.setMinHeight(e),this.mdEditor.setMinHeight(e),this.preview.setMinHeight(e)}return this._minHeight},t.getCurrentModeEditor=function(){return this.isMarkdownMode()?this.mdEditor:this.wwEditor},t.isMarkdownMode=function(){return"markdown"===this.currentMode},t.isWysiwygMode=function(){return"wysiwyg"===this.currentMode},t.isViewer=function(){return!1},t.getCurrentPreviewStyle=function(){return this.mdPreviewStyle},t.changeMode=function(e,t){this.currentMode!==e&&(this.eventManager.emit("changeModeBefore",this.currentMode),this.currentMode=e,this.isWysiwygMode()?(this.layout.switchToWYSIWYG(),this.wwEditor.setValue(this.convertor.toHTML(this.mdEditor.getValue()),!t),this.eventManager.emit("changeModeToWysiwyg")):(this.layout.switchToMarkdown(),this.mdEditor.resetState(),this.mdEditor.setValue(this.convertor.toMarkdown(this.wwEditor.getValue(),this.toMarkOptions),!t),this.getCodeMirror().refresh(),this.eventManager.emit("changeModeToMarkdown")),this.eventManager.emit("changeMode",e),t||this.focus())},t.remove=function(){var e=this,t=Qi.length-1
for(this.wwEditor.remove(),this.mdEditor.remove(),this.layout.remove(),this.preview.remove(),this.getUI()&&this.getUI().remove(),this.eventManager.emit("removeEditor"),this.eventManager.events.forEach((function(t,n){e.off(n)})),this.eventManager=null;t>=0;t-=1)Qi[t]===this&&Qi.splice(t,1)},t.hide=function(){this.eventManager.emit("hide",this)},t.show=function(){this.eventManager.emit("show",this),this.getCodeMirror().refresh()},t.scrollTop=function(e){return this.getCurrentModeEditor().scrollTop(e)},t.setUI=function(e){this._ui=e},t.getUI=function(){return this._ui},t.reset=function(){this.wwEditor.reset(),this.mdEditor.reset()},t.getRange=function(){return this.getCurrentModeEditor().getRange()},t.getTextObject=function(e){return this.getCurrentModeEditor().getTextObject(e)},t.getSelectedText=function(){var e=this.getRange()
return this.getTextObject(e).getTextContent()||""},t.setPlaceholder=function(e){this.mdEditor.setPlaceholder(e),this.wwEditor.setPlaceholder(e)},t.setCodeBlockLanguages=function(e){var t=this
void 0===e&&(e=[]),e.forEach((function(e){t.codeBlockLanguages.indexOf(e)<0&&t.codeBlockLanguages.push(e)})),this.eventManager.emit("setCodeBlockLanguages",this.codeBlockLanguages)},e.getInstances=function(){return Qi},e.factory=function(t){return t.viewer?new Gt.a(t):new e(t)},e.setLanguage=function(e,t){Yt.setLanguage(e,t)},e}()
Ji._createMarkdownToHTML=function(e){var t=e.extendedAutolinks,n=e.customHTMLRenderer,r=e.referenceDefinition,i=new v.Parser({disallowedHtmlBlockTags:["br"],extendedAutolinks:t,referenceDefinition:r,disallowDeepHeading:!0}),o=Object(v.createRenderHTML)({gfm:!0,convertors:Object(y.a)(null,n)})
return function(e){return o(i.parse(e))}},Ji.isViewer=!1,Ji.codeBlockManager=Qn.a,Ji.WwCodeBlockManager=vt,Ji.WwTableManager=ot,Ji.WwTableSelectionManager=at,Ji.CommandManager=Wt.a
var eo=Ji
n(50),n(51),n(41),n(52),eo.setLanguage(["en","en-US"],{Markdown:"Markdown",WYSIWYG:"WYSIWYG",Write:"Write",Preview:"Preview",Headings:"Headings",Paragraph:"Paragraph",Bold:"Bold",Italic:"Italic",Strike:"Strike",Code:"Inline code",Line:"Line",Blockquote:"Blockquote","Unordered list":"Unordered list","Ordered list":"Ordered list",Task:"Task",Indent:"Indent",Outdent:"Outdent","Insert link":"Insert link","Insert CodeBlock":"Insert codeBlock","Insert table":"Insert table","Insert image":"Insert image",Heading:"Heading","Image URL":"Image URL","Select image file":"Select image file",Description:"Description",OK:"OK",More:"More",Cancel:"Cancel",File:"File",URL:"URL","Link text":"Link text","Add row":"Add row","Add col":"Add col","Remove row":"Remove row","Remove col":"Remove col","Align left":"Align left","Align center":"Align center","Align right":"Align right","Remove table":"Remove table","Would you like to paste as table?":"Would you like to paste as table?","Text color":"Text color","Auto scroll enabled":"Auto scroll enabled","Auto scroll disabled":"Auto scroll disabled","Choose language":"Choose language"}),t.default=eo}]).default},"object"===s(t)&&"object"===s(e)?e.exports=a(n(26)):(i=[n(26)],void 0===(o="function"==typeof(r=a)?r.apply(t,i):r)||(e.exports=o))}).call(this,n(25)(e))}}])

var a={};(function(a,b){function c(a){return String(a===null||a===undefined?"":a)}function d(a){return a=c(a),j.test(a)?a.replace(e,"&amp;").replace(f,"&lt;").replace(g,"&gt;").replace(h,"&#39;").replace(i,"&quot;"):a}a.Template=function(a,c,d,e){this.r=a||this.r,this.c=d,this.options=e,this.text=c||"",this.buf=b?[]:""},a.Template.prototype={r:function(a,b,c){return""},v:d,t:c,render:function(a,b,c){return this.ri([a],b||{},c)},ri:function(a,b,c){return this.r(a,b,c)},rp:function(a,b,c,d){var e=c[a];return e?(this.c&&typeof e=="string"&&(e=this.c.compile(e,this.options)),e.ri(b,c,d)):""},rs:function(a,b,c){var d=a[a.length-1];if(!k(d)){c(a,b,this);return}for(var e=0;e<d.length;e++)a.push(d[e]),c(a,b,this),a.pop()},s:function(a,b,c,d,e,f,g){var h;return k(a)&&a.length===0?!1:(typeof a=="function"&&(a=this.ls(a,b,c,d,e,f,g)),h=a===""||!!a,!d&&h&&b&&b.push(typeof a=="object"?a:b[b.length-1]),h)},d:function(a,b,c,d){var e=a.split("."),f=this.f(e[0],b,c,d),g=null;if(a==="."&&k(b[b.length-2]))return b[b.length-1];for(var h=1;h<e.length;h++)f&&typeof f=="object"&&e[h]in f?(g=f,f=f[e[h]]):f="";return d&&!f?!1:(!d&&typeof f=="function"&&(b.push(g),f=this.lv(f,b,c),b.pop()),f)},f:function(a,b,c,d){var e=!1,f=null,g=!1;for(var h=b.length-1;h>=0;h--){f=b[h];if(f&&typeof f=="object"&&a in f){e=f[a],g=!0;break}}return g?(!d&&typeof e=="function"&&(e=this.lv(e,b,c)),e):d?!1:""},ho:function(a,b,c,d,e){var f=this.c,g=this.options;g.delimiters=e;var d=a.call(b,d);return d=d==null?String(d):d.toString(),this.b(f.compile(d,g).render(b,c)),!1},b:b?function(a){this.buf.push(a)}:function(a){this.buf+=a},fl:b?function(){var a=this.buf.join("");return this.buf=[],a}:function(){var a=this.buf;return this.buf="",a},ls:function(a,b,c,d,e,f,g){var h=b[b.length-1],i=null;if(!d&&this.c&&a.length>0)return this.ho(a,h,c,this.text.substring(e,f),g);i=a.call(h);if(typeof i=="function"){if(d)return!0;if(this.c)return this.ho(i,h,c,this.text.substring(e,f),g)}return i},lv:function(a,b,d){var e=b[b.length-1],f=a.call(e);if(typeof f=="function"){f=c(f.call(e));if(this.c&&~f.indexOf("{{"))return this.c.compile(f,this.options).render(e,d)}return c(f)}};var e=/&/g,f=/</g,g=/>/g,h=/\'/g,i=/\"/g,j=/[&<>\"\']/,k=Array.isArray||function(a){return Object.prototype.toString.call(a)==="[object Array]"}})(typeof exports!="undefined"?exports:a),function(a){function b(a){a.n.substr(a.n.length-1)==="}"&&(a.n=a.n.substring(0,a.n.length-1))}function c(a){return a.trim?a.trim():a.replace(/^\s*|\s*$/g,"")}function d(a,b,c){if(b.charAt(c)!=a.charAt(0))return!1;for(var d=1,e=a.length;d<e;d++)if(b.charAt(c+d)!=a.charAt(d))return!1;return!0}function e(a,b,c,d){var h=[],i=null,j=null;while(a.length>0){j=a.shift();if(j.tag=="#"||j.tag=="^"||f(j,d))c.push(j),j.nodes=e(a,j.tag,c,d),h.push(j);else{if(j.tag=="/"){if(c.length===0)throw new Error("Closing tag without opener: /"+j.n);i=c.pop();if(j.n!=i.n&&!g(j.n,i.n,d))throw new Error("Nesting error: "+i.n+" vs. "+j.n);return i.end=j.i,h}h.push(j)}}if(c.length>0)throw new Error("missing closing tag: "+c.pop().n);return h}function f(a,b){for(var c=0,d=b.length;c<d;c++)if(b[c].o==a.n)return a.tag="#",!0}function g(a,b,c){for(var d=0,e=c.length;d<e;d++)if(c[d].c==a&&c[d].o==b)return!0}function h(a){return a.replace(u,"\\\\").replace(r,'\\"').replace(s,"\\n").replace(t,"\\r")}function i(a){return~a.indexOf(".")?"d":"f"}function j(a){var b="";for(var c=0,d=a.length;c<d;c++){var e=a[c].tag;e=="#"?b+=k(a[c].nodes,a[c].n,i(a[c].n),a[c].i,a[c].end,a[c].otag+" "+a[c].ctag):e=="^"?b+=l(a[c].nodes,a[c].n,i(a[c].n)):e=="<"||e==">"?b+=m(a[c]):e=="{"||e=="&"?b+=n(a[c].n,i(a[c].n)):e=="\n"?b+=p('"\\n"'+(a.length-1==c?"":" + i")):e=="_v"?b+=o(a[c].n,i(a[c].n)):e===undefined&&(b+=p('"'+h(a[c])+'"'))}return b}function k(a,b,c,d,e,f){return"if(_.s(_."+c+'("'+h(b)+'",c,p,1),'+"c,p,0,"+d+","+e+',"'+f+'")){'+"_.rs(c,p,"+"function(c,p,_){"+j(a)+"});c.pop();}"}function l(a,b,c){return"if(!_.s(_."+c+'("'+h(b)+'",c,p,1),c,p,1,0,0,"")){'+j(a)+"};"}function m(a){return'_.b(_.rp("'+h(a.n)+'",c,p,"'+(a.indent||"")+'"));'}function n(a,b){return"_.b(_.t(_."+b+'("'+h(a)+'",c,p,0)));'}function o(a,b){return"_.b(_.v(_."+b+'("'+h(a)+'",c,p,0)));'}function p(a){return"_.b("+a+");"}var q=/\S/,r=/\"/g,s=/\n/g,t=/\r/g,u=/\\/g,v={"#":1,"^":2,"/":3,"!":4,">":5,"<":6,"=":7,_v:8,"{":9,"&":10};a.scan=function(a,e){function f(){r.length>0&&(s.push(new String(r)),r="")}function g(){var a=!0;for(var b=w;b<s.length;b++){a=s[b].tag&&v[s[b].tag]<v._v||!s[b].tag&&s[b].match(q)===null;if(!a)return!1}return a}function h(a,b){f();if(a&&g())for(var c=w,d;c<s.length;c++)s[c].tag||((d=s[c+1])&&d.tag==">"&&(d.indent=s[c].toString()),s.splice(c,1));else b||s.push({tag:"\n"});t=!1,w=s.length}function i(a,b){var d="="+y,e=a.indexOf(d,b),f=c(a.substring(a.indexOf("=",b)+1,e)).split(" ");return x=f[0],y=f[1],e+d.length-1}var j=a.length,k=0,l=1,m=2,n=k,o=null,p=null,r="",s=[],t=!1,u=0,w=0,x="{{",y="}}";e&&(e=e.split(" "),x=e[0],y=e[1]);for(u=0;u<j;u++)n==k?d(x,a,u)?(--u,f(),n=l):a.charAt(u)=="\n"?h(t):r+=a.charAt(u):n==l?(u+=x.length-1,p=v[a.charAt(u+1)],o=p?a.charAt(u+1):"_v",o=="="?(u=i(a,u),n=k):(p&&u++,n=m),t=u):d(y,a,u)?(s.push({tag:o,n:c(r),otag:x,ctag:y,i:o=="/"?t-y.length:u+x.length}),r="",u+=y.length-1,n=k,o=="{"&&(y=="}}"?u++:b(s[s.length-1]))):r+=a.charAt(u);return h(t,!0),s},a.generate=function(b,c,d){var e='var _=this;_.b(i=i||"");'+j(b)+"return _.fl();";return d.asString?"function(c,p,i){"+e+";}":new a.Template(new Function("c","p","i",e),c,a,d)},a.parse=function(a,b,c){return c=c||{},e(a,"",[],c.sectionTags||[])},a.cache={},a.compile=function(a,b){b=b||{};var c=a+"||"+!!b.asString,d=this.cache[c];return d?d:(d=this.generate(this.parse(this.scan(a,b.delimiters),a,b),a,b),this.cache[c]=d)}}(typeof exports!="undefined"?exports:a),typeof define=="function"&&define.amd&&define(a)
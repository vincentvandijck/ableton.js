const v={},ne=(e,n)=>e===n,I={equals:ne};let se=Z;const E={},N=1,$=2,W={owned:null,cleanups:null,context:null,owner:null};var d=null;let L=null,c=null,B=null,p=null,A=null,F=0;function D(e,n){const t=c,s=d,i=e.length===0?W:{owned:null,cleanups:null,context:null,owner:n||s};d=i,c=null;try{return H(()=>e(()=>V(i)),!0)}finally{c=t,d=s}}function ie(e,n){n=n?Object.assign({},I,n):I;const t={value:e,observers:null,observerSlots:null,pending:E,comparator:n.equals||void 0},s=i=>(typeof i=="function"&&(i=i(t.pending!==E?t.pending:t.value)),R(t,i));return[X.bind(t),s]}function U(e,n,t){const s=J(e,n,!1,N);M(s)}function le(e,n,t){t=t?Object.assign({},I,t):I;const s=J(e,n,!0,0);return s.pending=E,s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,M(s),X.bind(s)}function oe(e){if(B)return e();let n;const t=B=[];try{n=e()}finally{B=null}return H(()=>{for(let s=0;s<t.length;s+=1){const i=t[s];if(i.pending!==E){const o=i.pending;i.pending=E,R(i,o)}}},!1),n}function G(e){let n,t=c;return c=null,n=e(),c=t,n}function fe(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function X(){const e=L;if(this.sources&&(this.state||e)){const n=p;p=null,this.state===N||e?M(this):j(this),p=n}if(c){const n=this.observers?this.observers.length:0;c.sources?(c.sources.push(this),c.sourceSlots.push(n)):(c.sources=[this],c.sourceSlots=[n]),this.observers?(this.observers.push(c),this.observerSlots.push(c.sources.length-1)):(this.observers=[c],this.observerSlots=[c.sources.length-1])}return this.value}function R(e,n,t){if(e.comparator&&e.comparator(e.value,n))return n;if(B)return e.pending===E&&B.push(e),e.pending=n,n;let s=!1;return e.value=n,e.observers&&e.observers.length&&H(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i];s&&L.disposed.has(o),(s&&!o.tState||!s&&!o.state)&&(o.pure?p.push(o):A.push(o),o.observers&&z(o)),s||(o.state=N)}if(p.length>1e6)throw p=[],new Error},!1),n}function M(e){if(!e.fn)return;V(e);const n=d,t=c,s=F;c=d=e,re(e,e.value,s),c=t,d=n}function re(e,n,t){let s;try{s=e.fn(n)}catch(i){ee(i)}(!e.updatedAt||e.updatedAt<=t)&&(e.observers&&e.observers.length?R(e,s):e.value=s,e.updatedAt=t)}function J(e,n,t,s=N,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:d,context:null,pure:t};return d===null||d!==W&&(d.owned?d.owned.push(o):d.owned=[o]),o}function Y(e){const n=L;if(e.state===0||n)return;if(e.state===$||n)return j(e);if(e.suspense&&G(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<F);)(e.state||n)&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===N||n)M(e);else if(e.state===$||n){const i=p;p=null,j(e,t[0]),p=i}}function H(e,n){if(p)return e();let t=!1;n||(p=[]),A?t=!0:A=[],F++;try{return e()}catch(s){ee(s)}finally{ue(t)}}function ue(e){p&&(Z(p),p=null),!e&&(A.length?oe(()=>{se(A),A=null}):A=null)}function Z(e){for(let n=0;n<e.length;n++)Y(e[n])}function j(e,n){const t=L;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===N||t?i!==n&&Y(i):(i.state===$||t)&&j(i,n))}}function z(e){const n=L;for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];(!s.state||n)&&(s.state=$,s.pure?p.push(s):A.push(s),s.observers&&z(s))}}function V(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const o=i.pop(),f=t.observerSlots.pop();s<i.length&&(o.sourceSlots[f]=s,i[s]=o,t.observerSlots[s]=f)}}if(e.owned){for(n=0;n<e.owned.length;n++)V(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function ee(e){throw e}const ce=Symbol("fallback");function _(e){for(let n=0;n<e.length;n++)e[n]()}function ae(e,n,t={}){let s=[],i=[],o=[],f=0,l=n.length>1?[]:null;return fe(()=>_(o)),()=>{let a=e()||[],u,r;return G(()=>{let h=a.length,w,S,T,O,P,b,y,x,m;if(h===0)f!==0&&(_(o),o=[],s=[],i=[],f=0,l&&(l=[])),t.fallback&&(s=[ce],i[0]=D(te=>(o[0]=te,t.fallback())),f=1);else if(f===0){for(i=new Array(h),r=0;r<h;r++)s[r]=a[r],i[r]=D(g);f=h}else{for(T=new Array(h),O=new Array(h),l&&(P=new Array(h)),b=0,y=Math.min(f,h);b<y&&s[b]===a[b];b++);for(y=f-1,x=h-1;y>=b&&x>=b&&s[y]===a[x];y--,x--)T[x]=i[y],O[x]=o[y],l&&(P[x]=l[y]);for(w=new Map,S=new Array(x+1),r=x;r>=b;r--)m=a[r],u=w.get(m),S[r]=u===void 0?-1:u,w.set(m,r);for(u=b;u<=y;u++)m=s[u],r=w.get(m),r!==void 0&&r!==-1?(T[r]=i[u],O[r]=o[u],l&&(P[r]=l[u]),r=S[r],w.set(m,r)):o[u]();for(r=b;r<h;r++)r in T?(i[r]=T[r],o[r]=O[r],l&&(l[r]=P[r],l[r](r))):i[r]=D(g);i=i.slice(0,f=h),s=a.slice(0)}return i});function g(h){if(o[r]=h,l){const[w,S]=ie(r);return l[r]=S,n(a[r],w)}return n(a[r])}}}function ge(e,n){return G(()=>e(n))}function we(e){const n="fallback"in e&&{fallback:()=>e.fallback};return le(ae(()=>e.each,e.children,n||void 0))}function he(e,n,t){let s=t.length,i=n.length,o=s,f=0,l=0,a=n[i-1].nextSibling,u=null;for(;f<i||l<o;){if(n[f]===t[l]){f++,l++;continue}for(;n[i-1]===t[o-1];)i--,o--;if(i===f){const r=o<s?l?t[l-1].nextSibling:t[o-l]:a;for(;l<o;)e.insertBefore(t[l++],r)}else if(o===l)for(;f<i;)(!u||!u.has(n[f]))&&n[f].remove(),f++;else if(n[f]===t[o-1]&&t[l]===n[i-1]){const r=n[--i].nextSibling;e.insertBefore(t[l++],n[f++].nextSibling),e.insertBefore(t[--o],r),n[i]=t[o]}else{if(!u){u=new Map;let g=l;for(;g<o;)u.set(t[g],g++)}const r=u.get(n[f]);if(r!=null)if(l<r&&r<o){let g=f,h=1,w;for(;++g<i&&g<o&&!((w=u.get(n[g]))==null||w!==r+h);)h++;if(h>r-l){const S=n[f];for(;l<r;)e.insertBefore(t[l++],S)}else e.replaceChild(t[l++],n[f++])}else f++;else n[f++].remove()}}}const K="_$DX_DELEGATE";function be(e,n,t){let s;return D(i=>{s=i,n===document?e():de(n,e(),n.firstChild?null:void 0,t)}),()=>{s(),n.textContent=""}}function ye(e,n,t){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return t&&(i=i.firstChild),i}function xe(e,n=window.document){const t=n[K]||(n[K]=new Set);for(let s=0,i=e.length;s<i;s++){const o=e[s];t.has(o)||(t.add(o),n.addEventListener(o,pe))}}function de(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return q(e,n,s,t);U(i=>q(e,n(),i,t),s)}function pe(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}});t!==null;){const s=t[n];if(s&&!t.disabled){const i=t[`${n}Data`];if(i!==void 0?s(i,e):s(e),e.cancelBubble)return}t=t.host&&t.host!==t&&t.host instanceof Node?t.host:t.parentNode}}function q(e,n,t,s,i){for(v.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const o=typeof n,f=s!==void 0;if(e=f&&t[0]&&t[0].parentNode||e,o==="string"||o==="number"){if(v.context)return t;if(o==="number"&&(n=n.toString()),f){let l=t[0];l&&l.nodeType===3?l.data=n:l=document.createTextNode(n),t=C(e,t,s,l)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||o==="boolean"){if(v.context)return t;t=C(e,t,s)}else{if(o==="function")return U(()=>{let l=n();for(;typeof l=="function";)l=l();t=q(e,l,t,s)}),()=>t;if(Array.isArray(n)){const l=[];if(k(l,n,i))return U(()=>t=q(e,l,t,s,!0)),()=>t;if(v.context){for(let a=0;a<l.length;a++)if(l[a].parentNode)return t=l}if(l.length===0){if(t=C(e,t,s),f)return t}else Array.isArray(t)?t.length===0?Q(e,l,s):he(e,t,l):(t&&C(e),Q(e,l));t=l}else if(n instanceof Node){if(v.context&&n.parentNode)return t=f?[n]:n;if(Array.isArray(t)){if(f)return t=C(e,t,s,n);C(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function k(e,n,t){let s=!1;for(let i=0,o=n.length;i<o;i++){let f=n[i],l;if(f instanceof Node)e.push(f);else if(!(f==null||f===!0||f===!1))if(Array.isArray(f))s=k(e,f)||s;else if((l=typeof f)=="string")e.push(document.createTextNode(f));else if(l==="function")if(t){for(;typeof f=="function";)f=f();s=k(e,Array.isArray(f)?f:[f])||s}else e.push(f),s=!0;else e.push(document.createTextNode(f.toString()))}return s}function Q(e,n,t){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function C(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let o=!1;for(let f=n.length-1;f>=0;f--){const l=n[f];if(i!==l){const a=l.parentNode===e;!o&&!f?a?e.replaceChild(i,l):e.insertBefore(i,t):a&&l.remove()}else o=!0}}else e.insertBefore(i,t);return[i]}export{we as F,ge as a,U as b,ie as c,xe as d,le as e,de as i,be as r,ye as t};

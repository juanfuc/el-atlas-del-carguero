function v(){}function W(t,e){for(const n in e)t[n]=e[n];return t}function q(t){return t()}function M(){return Object.create(null)}function g(t){t.forEach(q)}function D(t){return typeof t=="function"}function ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let $;function at(t,e){return $||($=document.createElement("a")),$.href=e,t===$.href}function G(t){return Object.keys(t).length===0}function J(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function _t(t,e,n){t.$$.on_destroy.push(J(e,n))}function dt(t,e,n,i){if(t){const r=T(t,e,n,i);return t[0](r)}}function T(t,e,n,i){return t[1]&&i?W(n.ctx.slice(),t[1](i(e))):n.ctx}function ht(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(e.dirty.length,r.length);for(let o=0;o<c;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function mt(t,e,n,i,r,l){if(r){const c=T(e,n,i,l);t.p(c,r)}}function pt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function yt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}let w=!1;function K(){w=!0}function Q(){w=!1}function R(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&s.push(a)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:R(1,r,x=>e[n[x]].claim_order,u))-1;i[s]=n[a]+1;const f=a+1;n[f]=s,r=Math.max(f,r)}const l=[],c=[];let o=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(l.push(e[s-1]);o>=s;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);l.reverse(),c.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<c.length;s++){for(;u<l.length&&c[s].claim_order>=l[u].claim_order;)u++;const a=u<l.length?l[u]:null;t.insertBefore(c[s],a)}}function V(t,e){if(w){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function gt(t,e,n){w&&!n?V(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function X(t){t.parentNode&&t.parentNode.removeChild(t)}function xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function Z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function $t(){return j(" ")}function bt(){return j("")}function vt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function B(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:B(t,i,e[i])}function Et(t,e){for(const n in e)B(t,n,e[n])}function tt(t){return Array.from(t.childNodes)}function et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,e,n,i,r=!1){et(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function I(t,e,n,i){return L(t,r=>r.nodeName===e,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];n[o.name]||l.push(o.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(e))}function kt(t,e,n){return I(t,e,n,Y)}function Nt(t,e,n){return I(t,e,n,Z)}function nt(t,e){return L(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>j(e),!0)}function St(t){return nt(t," ")}function At(t,e){e=""+e,t.data!==e&&(t.data=e)}function jt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Ct(t,e,n){for(let i=0;i<t.options.length;i+=1){const r=t.options[i];if(r.__value===e){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Ot(t){const e=t.querySelector(":checked");return e&&e.__value}function it(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Mt(t,e){return new t(e)}let y;function p(t){y=t}function E(){if(!y)throw new Error("Function called outside component initialization");return y}function Pt(t){E().$$.on_mount.push(t)}function qt(t){E().$$.after_update.push(t)}function Dt(t){E().$$.on_destroy.push(t)}function Tt(){const t=E();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=it(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}const h=[],P=[];let m=[];const N=[],z=Promise.resolve();let S=!1;function F(){S||(S=!0,z.then(H))}function Bt(){return F(),z}function A(t){m.push(t)}function Lt(t){N.push(t)}const k=new Set;let d=0;function H(){if(d!==0)return;const t=y;do{try{for(;d<h.length;){const e=h[d];d++,p(e),rt(e.$$)}}catch(e){throw h.length=0,d=0,e}for(p(null),h.length=0,d=0;P.length;)P.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];k.has(n)||(k.add(n),n())}m.length=0}while(h.length);for(;N.length;)N.pop()();S=!1,k.clear(),p(t)}function rt(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}function ct(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const b=new Set;let _;function It(){_={r:0,c:[],p:_}}function zt(){_.r||g(_.c),_=_.p}function st(t,e){t&&t.i&&(b.delete(t),t.i(e))}function Ft(t,e,n,i){if(t&&t.o){if(b.has(t))return;b.add(t),_.c.push(()=>{b.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Ht(t,e){const n={},i={},r={$$scope:1};let l=t.length;for(;l--;){const c=t[l],o=e[l];if(o){for(const s in c)s in o||(i[s]=1);for(const s in o)r[s]||(n[s]=o[s],r[s]=1);t[l]=o}else for(const s in c)r[s]=1}for(const c in i)c in n||(n[c]=void 0);return n}function Wt(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Gt(t){t&&t.c()}function Jt(t,e){t&&t.l(e)}function ot(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||A(()=>{const c=t.$$.on_mount.map(q).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...c):g(c),t.$$.on_mount=[]}),l.forEach(A)}function ut(t,e){const n=t.$$;n.fragment!==null&&(ct(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(h.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Kt(t,e,n,i,r,l,c,o=[-1]){const s=y;p(t);const u=t.$$={fragment:null,ctx:[],props:l,update:v,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:M(),dirty:o,skip_bound:!1,root:e.target||s.$$.root};c&&c(u.root);let a=!1;if(u.ctx=n?n(t,e.props||{},(f,x,...C)=>{const O=C.length?C[0]:x;return u.ctx&&r(u.ctx[f],u.ctx[f]=O)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](O),a&&lt(t,f)),x}):[],u.update(),a=!0,g(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){K();const f=tt(e.target);u.fragment&&u.fragment.l(f),f.forEach(X)}else u.fragment&&u.fragment.c();e.intro&&st(t.$$.fragment),ot(t,e.target,e.anchor,e.customElement),Q(),H()}p(s)}class Qt{$destroy(){ut(this,1),this.$destroy=v}$on(e,n){if(!D(n))return v;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!G(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Lt as $,qt as A,jt as B,It as C,P as D,Mt as E,Gt as F,Jt as G,ot as H,ut as I,Bt as J,Dt as K,W as L,yt as M,wt as N,Ht as O,Z as P,Nt as Q,Et as R,Qt as S,Tt as T,vt as U,xt as V,Ot as W,A as X,Ct as Y,g as Z,Wt as _,$t as a,tt as b,kt as c,nt as d,Y as e,X as f,St as g,gt as h,Kt as i,V as j,At as k,_t as l,dt as m,v as n,pt as o,ht as p,st as q,Ft as r,ft as s,j as t,mt as u,Pt as v,at as w,B as x,bt as y,zt as z};

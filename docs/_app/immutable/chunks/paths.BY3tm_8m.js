import{n as l,f as x,r as q,s as z,h as k}from"./scheduler.CrsDffe0.js";const u=[];function v(e,o){return{subscribe:A(e,o).subscribe}}function A(e,o=l){let r;const n=new Set;function a(t){if(z(e,t)&&(e=t,r)){const i=!u.length;for(const s of n)s[1](),u.push(s,e);if(i){for(let s=0;s<u.length;s+=2)u[s][0](u[s+1]);u.length=0}}}function b(t){a(t(e))}function f(t,i=l){const s=[t,i];return n.add(s),n.size===1&&(r=o(a,b)||l),t(e),()=>{n.delete(s),n.size===0&&r&&(r(),r=null)}}return{set:a,update:b,subscribe:f}}function E(e,o,r){const n=!Array.isArray(e),a=n?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=o.length<2;return v(r,(f,t)=>{let i=!1;const s=[];let _=0,d=l;const g=()=>{if(_)return;d();const c=o(n?s[0]:s,f,t);b?f(c):d=k(c)?c:l},m=a.map((c,p)=>x(c,w=>{s[p]=w,_&=~(1<<p),i&&g()},()=>{_|=1<<p}));return i=!0,g(),function(){q(m),d(),i=!1}})}var h;const T=((h=globalThis.__sveltekit_s4ycx)==null?void 0:h.base)??"/momazos_serie_mini";var y;const S=((y=globalThis.__sveltekit_s4ycx)==null?void 0:y.assets)??T;export{S as a,T as b,E as d,v as r,A as w};

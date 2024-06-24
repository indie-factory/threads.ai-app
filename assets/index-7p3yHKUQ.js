const __vite__fileDeps=["assets/DefaultLayout-Ck4JQc1E.js","assets/plugin-vueexport-helper-DlAUqK2U.js","assets/@vue-C6yEmL9w.js","assets/vue-router-Dv2l7yOR.js","assets/vuetify-DRcdfVg7.js","assets/vuetify-CAkdrstd.css","assets/axios-B6xwUs71.js","assets/DefaultLayout-B56c7ih4.css","assets/@mdi-CqvS9aGL.css","assets/Dashboard-C88iHsrR.js","assets/Publish-BtH2XJ27.js","assets/Login-cjspZVUZ.js","assets/Login-CZND-kFm.css","assets/OAuth2-BLWVGqFT.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
/* empty css             */import{c as b,V as L,a as E}from"./vuetify-DRcdfVg7.js";import{c as R,a as O}from"./vue-router-Dv2l7yOR.js";import{a as I}from"./axios-B6xwUs71.js";import{d as w,N as S,O as T,P as d,q as f,Q as U,R as q}from"./@vue-C6yEmL9w.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const C=b({theme:{defaultTheme:"dark"}}),V="modulepreload",k=function(e){return"/"+e},h={},u=function(o,n,c){let t=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),s=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));t=Promise.all(n.map(i=>{if(i=k(i),i in h)return;h[i]=!0;const l=i.endsWith(".css"),y=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${y}`))return;const a=document.createElement("link");if(a.rel=l?"stylesheet":V,l||(a.as="script",a.crossOrigin=""),a.href=i,s&&a.setAttribute("nonce",s),document.head.appendChild(a),l)return new Promise((P,A)=>{a.addEventListener("load",P),a.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${i}`)))})}))}return t.then(()=>o()).catch(r=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r})},m="token",X=e=>{localStorage.setItem(m,e)},$=()=>{localStorage.removeItem(m)},D=()=>localStorage.getItem(m),N=()=>localStorage.getItem(m)!=null;var j={API_URL:"https://api-threads-ai.indie-factory.com",APP_URL:"https://app-threads-ai.indie-factory.com"};const _=()=>{const e=encodeURIComponent(`${j.APP_URL}/#/oauth2/redirect`);window.open(`https://b30bb706f3bff509f7ae86ae96c32076.serveo.net/login/threads?redirect_uri=${e}`,"_self")};var B={API_URL:"https://api-threads-ai.indie-factory.com",APP_URL:"https://app-threads-ai.indie-factory.com"};const x=1e6,p=I.create({withCredentials:!0,baseURL:`${B.API_URL}/api`,timeout:x,headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*"}});p.interceptors.request.use(e=>{const o=D();return e.headers.Authorization="Bearer "+o,e},e=>(console.error(e),Promise.reject(e)));p.interceptors.response.use(e=>{const o=e.data;return!o.success&&o.error&&console.error(o),o.result},e=>{var o;return((o=e.response)==null?void 0:o.status)===401&&($(),_()),console.error(e),Promise.reject(e)});const F=()=>p.get("/members"),H=e=>{localStorage.setItem("member",JSON.stringify(e))},Y=()=>{const e=localStorage.getItem("member");return e?JSON.parse(e):null},g=R({history:O("/"),routes:[{path:"/",component:()=>u(()=>import("./DefaultLayout-Ck4JQc1E.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8])),meta:{requiresAuth:!0},children:[{name:"Dashboards",path:"/dashboards",component:()=>u(()=>import("./Dashboard-C88iHsrR.js"),__vite__mapDeps([9,6,4,2,5,3,8]))},{name:"Publish",path:"/publish",component:()=>u(()=>import("./Publish-BtH2XJ27.js"),__vite__mapDeps([10,1,4,2,5]))}]},{name:"Login",path:"/login",component:()=>u(()=>import("./Login-cjspZVUZ.js"),__vite__mapDeps([11,1,4,2,5,12]))},{name:"OAuth2",path:"/oauth2/redirect",component:()=>u(()=>import("./OAuth2-BLWVGqFT.js"),__vite__mapDeps([13,3,2,4,5,6,8]))}]});g.beforeEach((e,o,n)=>{e.matched.some(t=>t.meta.requiresAuth)?N()?F().then(t=>{H(t),n()}):_():n()});function J(e){e.use(C).use(g)}const M=w({__name:"App",setup(e){return(o,n)=>{const c=U("router-view");return S(),T(E,null,{default:d(()=>[f(L,null,{default:d(()=>[f(c)]),_:1})]),_:1})}}}),v=q(M);J(v);v.mount("#app");export{D as a,Y as g,p as i,_ as l,$ as r,X as s};

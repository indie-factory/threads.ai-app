const __vite__fileDeps=["assets/DefaultLayout-CXoRSQrv.js","assets/plugin-vueexport-helper-DlAUqK2U.js","assets/@vue-C6yEmL9w.js","assets/vuetify-DRcdfVg7.js","assets/vuetify-CAkdrstd.css","assets/vue-router-Dv2l7yOR.js","assets/axios-B6xwUs71.js","assets/DefaultLayout-B56c7ih4.css","assets/@mdi-CqvS9aGL.css","assets/Dashboard-triwZTtE.js","assets/Publish-BtH2XJ27.js","assets/Login-zc-0pTqb.js","assets/Login-BLg4I-dq.css","assets/OAuth2-BwzXMfpV.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
/* empty css             */import{c as b,V as E,a as R}from"./vuetify-DRcdfVg7.js";import{c as I,a as O}from"./vue-router-Dv2l7yOR.js";import{a as w}from"./axios-B6xwUs71.js";import{d as S,N as T,O as U,P as d,q as f,Q as q,R as C}from"./@vue-C6yEmL9w.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const V=b({theme:{defaultTheme:"dark"}}),k="modulepreload",$=function(e){return"/"+e},h={},u=function(o,s,c){let t=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),n=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));t=Promise.all(s.map(i=>{if(i=$(i),i in h)return;h[i]=!0;const l=i.endsWith(".css"),v=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${v}`))return;const a=document.createElement("link");if(a.rel=l?"stylesheet":k,l||(a.as="script",a.crossOrigin=""),a.href=i,n&&a.setAttribute("nonce",n),document.head.appendChild(a),l)return new Promise((A,L)=>{a.addEventListener("load",A),a.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${i}`)))})}))}return t.then(()=>o()).catch(r=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=r,window.dispatchEvent(n),!n.defaultPrevented)throw r})},m="token",X=e=>{localStorage.setItem(m,e)},D=()=>{localStorage.removeItem(m)},N=()=>localStorage.getItem(m),j=()=>localStorage.getItem(m)!=null;var _={API_URL:"https://api-threads-ai.indie-factory.com",APP_URL:"https://app-threads-ai.indie-factory.com"};const g=()=>{const e=encodeURIComponent(`${_.APP_URL}/#/oauth2/redirect`);window.open(`${_.API_URL}/login/threads?redirect_uri=${e}`,"_self")};var B={API_URL:"https://api-threads-ai.indie-factory.com",APP_URL:"https://app-threads-ai.indie-factory.com"};const x=1e6,p=w.create({withCredentials:!0,baseURL:`${B.API_URL}/api`,timeout:x,headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*"}});p.interceptors.request.use(e=>{const o=N();return e.headers.Authorization="Bearer "+o,e},e=>(console.error(e),Promise.reject(e)));p.interceptors.response.use(e=>{const o=e.data;return!o.success&&o.error&&console.error(o),o.result},e=>{var o;return((o=e.response)==null?void 0:o.status)===401&&(D(),g()),console.error(e),Promise.reject(e)});const F=()=>p.get("/members"),H=e=>{localStorage.setItem("member",JSON.stringify(e))},Y=()=>{const e=localStorage.getItem("member");return e?JSON.parse(e):null},P=I({history:O("/"),routes:[{path:"/",component:()=>u(()=>import("./DefaultLayout-CXoRSQrv.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8])),meta:{requiresAuth:!0},children:[{name:"Dashboards",path:"/dashboards",component:()=>u(()=>import("./Dashboard-triwZTtE.js"),__vite__mapDeps([9,6,3,2,4,5,8]))},{name:"Publish",path:"/publish",component:()=>u(()=>import("./Publish-BtH2XJ27.js"),__vite__mapDeps([10,1,3,2,4]))}]},{name:"Login",path:"/login",component:()=>u(()=>import("./Login-zc-0pTqb.js"),__vite__mapDeps([11,1,3,2,4,12]))},{name:"OAuth2",path:"/oauth2/redirect",component:()=>u(()=>import("./OAuth2-BwzXMfpV.js"),__vite__mapDeps([13,5,2,3,4,6,8]))}]});P.beforeEach((e,o,s)=>{e.matched.some(t=>t.meta.requiresAuth)?j()?F().then(t=>{H(t),s()}):g():s()});function J(e){e.use(V).use(P)}const M=S({__name:"App",setup(e){return(o,s)=>{const c=q("router-view");return T(),U(R,null,{default:d(()=>[f(E,null,{default:d(()=>[f(c)]),_:1})]),_:1})}}}),y=C(M);J(y);y.mount("#app");export{N as a,Y as g,g as l,X as s};

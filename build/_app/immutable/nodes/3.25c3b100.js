import{s as D}from"../chunks/scheduler.5c9156f0.js";import{S as N,i as O,g as x,m as P,s as u,r as H,h as y,j as q,n as V,f as C,c as _,u as T,x as A,k as j,a as B,z as f,v as w,o as F,d as z,t as b,w as k}from"../chunks/index.37c1e782.js";import{I as G,T as J}from"../chunks/trash-removed.93bdcb04.js";import{I as K}from"../chunks/image.831fd9ac.js";function L(r){let e,n,s=r[0].currentInterceptor[0].name+"",c,h,o,d,m,$,i,v,l,E="Hier kan de map komen.",p;return o=new G({props:{data:r[0].currentInterceptorHygraph[0].riverInfoText}}),m=new J({props:{data:r[0].currentInterceptor[0],text:r[0].dataHygraph}}),i=new K({props:{data:r[0].currentInterceptorHygraph[0].riverImage}}),{c(){e=x("section"),n=x("h2"),c=P(s),h=u(),H(o.$$.fragment),d=u(),H(m.$$.fragment),$=u(),H(i.$$.fragment),v=u(),l=x("div"),l.textContent=E,this.h()},l(t){e=y(t,"SECTION",{class:!0});var a=q(e);n=y(a,"H2",{class:!0});var g=q(n);c=V(g,s),g.forEach(C),h=_(a),T(o.$$.fragment,a),d=_(a),T(m.$$.fragment,a),$=_(a),T(i.$$.fragment,a),v=_(a),l=y(a,"DIV",{class:!0,"data-svelte-h":!0}),A(l)!=="svelte-1apxaga"&&(l.textContent=E),a.forEach(C),this.h()},h(){j(n,"class","svelte-18zbfj4"),j(l,"class","map svelte-18zbfj4"),j(e,"class","svelte-18zbfj4")},m(t,a){B(t,e,a),f(e,n),f(n,c),f(e,h),w(o,e,null),f(e,d),w(m,e,null),f(e,$),w(i,e,null),f(e,v),f(e,l),p=!0},p(t,[a]){(!p||a&1)&&s!==(s=t[0].currentInterceptor[0].name+"")&&F(c,s);const g={};a&1&&(g.data=t[0].currentInterceptorHygraph[0].riverInfoText),o.$set(g);const I={};a&1&&(I.data=t[0].currentInterceptor[0]),a&1&&(I.text=t[0].dataHygraph),m.$set(I);const S={};a&1&&(S.data=t[0].currentInterceptorHygraph[0].riverImage),i.$set(S)},i(t){p||(z(o.$$.fragment,t),z(m.$$.fragment,t),z(i.$$.fragment,t),p=!0)},o(t){b(o.$$.fragment,t),b(m.$$.fragment,t),b(i.$$.fragment,t),p=!1},d(t){t&&C(e),k(o),k(m),k(i)}}}function M(r,e,n){let{data:s}=e;return r.$$set=c=>{"data"in c&&n(0,s=c.data)},[s]}class X extends N{constructor(e){super(),O(this,e,M,L,D,{data:0})}}export{X as component};

import{S as s,i as t,s as a,e,t as o,j as r,c,a as l,b as i,d as n,l as d,o as p,f as h,g as u,h as f,k as m,n as v}from"../../chunks/vendor-9fb48351.js";function b(s){let t,a,m,v,b,g,E,j,w=s[0].title+"",x=s[0].body+"";return{c(){t=e("div"),a=e("a"),m=e("h2"),v=o(w),b=r(),g=e("div"),E=o(x),this.h()},l(s){t=c(s,"DIV",{class:!0});var e=l(t);a=c(e,"A",{href:!0});var o=l(a);m=c(o,"H2",{class:!0});var r=l(m);v=i(r,w),r.forEach(n),b=d(o),g=c(o,"DIV",{class:!0});var p=l(g);E=i(p,x),p.forEach(n),o.forEach(n),e.forEach(n),this.h()},h(){p(m,"class","post-title"),p(g,"class","post-subtitle"),p(a,"href",j="blogs/"+s[0].id),p(t,"class","post-preview")},m(s,e){h(s,t,e),u(t,a),u(a,m),u(m,v),u(a,b),u(a,g),u(g,E)},p(s,t){1&t&&w!==(w=s[0].title+"")&&f(v,w),1&t&&x!==(x=s[0].body+"")&&f(E,x),1&t&&j!==(j="blogs/"+s[0].id)&&p(a,"href",j)},d(s){s&&n(t)}}}function g(s){let t,a=s[0]&&b(s);return{c(){a&&a.c(),t=m()},l(s){a&&a.l(s),t=m()},m(s,e){a&&a.m(s,e),h(s,t,e)},p(s,[e]){s[0]?a?a.p(s,e):(a=b(s),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},i:v,o:v,d(s){a&&a.d(s),s&&n(t)}}}async function E({page:s,fetch:t,session:a,context:e}){const o=`https://jsonplaceholder.typicode.com/posts/${s.params.id}`,r=await t(o);return r.ok?{props:{article:await r.json()}}:{status:r.status,error:new Error(`Could not load ${o}`)}}function j(s,t,a){let{article:e}=t;return console.log("details article",e),s.$$set=s=>{"article"in s&&a(0,e=s.article)},[e]}export default class extends s{constructor(s){super(),t(this,s,j,g,a,{article:0})}}export{E as load};

import{c as e}from"./mobile.aa605b14.js";import{s,x as l,r as o,o as n,c as a,f as r,F as t,h as d,t as c,q as i}from"./vendor.27122b45.js";import"./index.bda1353b.js";const{createDemo:u}=e("pullrefresh");var f=u({props:{},setup:()=>({refresh:e=>{console.log("上拉加载"),setTimeout((()=>{e()}),1e3)},downRefresh:e=>{console.log("下拉刷新"),setTimeout((()=>{e()}),1e3)}})});const h=i("data-v-214b083c");s("data-v-214b083c");const p={class:"demo full"},v=r("h2",null,"纵向",-1),m={class:"vertical"},R={class:"content",id:"pull"},w={class:"main"},b=r("h2",null,"横向",-1),_={class:"horizontal"},D={class:"contentH",id:"pullH"},H={class:"mainH"};l();const j=h(((e,s,l,i,u,f)=>{const j=o("nut-pullrefresh"),x=o("nut-cell");return n(),a("div",p,[v,r(x,null,{default:h((()=>[r("div",m,[r(j,{onRefresh:e.refresh,onDownRefresh:e.downRefresh,useWindow:!1,containerId:"pull"},{default:h((()=>[r("div",R,[r("div",w,[(n(),a(t,null,d([1,2,3,4,5,6,7,8,9],(e=>r("div",{class:"pull-data",key:e},"我是测试数据 "+c(e),1))),64))])])])),_:1},8,["onRefresh","onDownRefresh"])])])),_:1}),b,r(x,null,{default:h((()=>[r("div",_,[r(j,{onRefresh:e.refresh,onDownRefresh:e.downRefresh,useWindow:!1,containerId:"pullH",direction:"horizontal"},{default:h((()=>[r("div",D,[r("div",H,[(n(),a(t,null,d([1,2,3,4,5,6,7,8,9],(e=>r("div",{class:"pull-data",key:e},"我是测试数据 "+c(e),1))),64))])])])),_:1},8,["onRefresh","onDownRefresh"])])])),_:1})])}));f.render=j,f.__scopeId="data-v-214b083c";export default f;

import{c as s}from"./mobile.c0965f24.js";import{a as t,s as e,x as a,r as o,o as l,c as n,f as c,q as d,j as r}from"./vendor.27122b45.js";import"./index.bda1353b.js";const{createDemo:u}=s("overlay");var h=u({props:{},setup:()=>({state:t({show:!1,show2:!1})})});const p=d("data-v-61ce3514");e("data-v-61ce3514");const w={class:"demo"},i=c("h2",null,"基础用法",-1),f=r("显示遮罩层"),v=c("h2",null,"嵌套内容",-1),m=r("嵌套内容"),_=c("div",{class:"wrapper"},[c("div",{class:"content"},"这里是正文")],-1);a();const b=p(((s,t,e,a,d,r)=>{const u=o("nut-button"),h=o("nut-overlay"),b=o("nut-cell");return l(),n("div",w,[i,c(b,null,{default:p((()=>[c(u,{type:"primary",onClick:t[1]||(t[1]=t=>s.state.show=!0)},{default:p((()=>[f])),_:1}),c(h,{show:s.state.show,"onUpdate:show":t[2]||(t[2]=t=>s.state.show=t),"z-index":2e3},null,8,["show"])])),_:1}),v,c(b,null,{default:p((()=>[c(u,{type:"success",onClick:t[3]||(t[3]=t=>s.state.show2=!0)},{default:p((()=>[m])),_:1}),c(h,{show:s.state.show2,"onUpdate:show":t[4]||(t[4]=t=>s.state.show2=t),"z-index":2e3},{default:p((()=>[_])),_:1},8,["show"])])),_:1})])}));h.render=b,h.__scopeId="data-v-61ce3514";export default h;

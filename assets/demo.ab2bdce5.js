import{c as s}from"./mobile.aa605b14.js";import{a as t,s as a,x as e,r as o,o as l,c as n,f as d,q as c,j as r}from"./vendor.27122b45.js";import"./index.bda1353b.js";const{createDemo:u}=s("overlay");var h=u({props:{},setup:()=>({state:t({show:!1,show2:!1})})});const p=c("data-v-61ce3514");a("data-v-61ce3514");const w={class:"demo"},i=d("h2",null,"基础用法",-1),v=r("显示遮罩层"),f=d("h2",null,"嵌套内容",-1),m=r("嵌套内容"),_=d("div",{class:"wrapper"},[d("div",{class:"content"},"这里是正文")],-1);e();const b=p(((s,t,a,e,c,r)=>{const u=o("nut-button"),h=o("nut-overlay"),b=o("nut-cell");return l(),n("div",w,[i,d(b,null,{default:p((()=>[d(u,{type:"primary",onClick:t[1]||(t[1]=t=>s.state.show=!0)},{default:p((()=>[v])),_:1}),d(h,{show:s.state.show,"onUpdate:show":t[2]||(t[2]=t=>s.state.show=t),"z-index":2e3},null,8,["show"])])),_:1}),f,d(b,null,{default:p((()=>[d(u,{type:"success",onClick:t[3]||(t[3]=t=>s.state.show2=!0)},{default:p((()=>[m])),_:1}),d(h,{show:s.state.show2,"onUpdate:show":t[4]||(t[4]=t=>s.state.show2=t),"z-index":2e3},{default:p((()=>[_])),_:1},8,["show"])])),_:1})])}));h.render=b,h.__scopeId="data-v-61ce3514";export default h;

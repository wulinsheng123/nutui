import{c as a}from"./mobile.ce5f6750.js";import{a as e,s as l,x as t,r as o,o as n,c as s,f as r,q as c}from"./vendor.80bf15c7.js";import"./index.77feaf28.js";const{createDemo:u}=a("textarea");var v=u({setup(){const a=e({val0:"",val1:"初始数据"});setTimeout((function(){a.val1="异步测试数据，2秒"}),2e3);return{state:a,change:a=>{console.log("change: ",a)}}}});const d=c("data-v-83843c7e");l("data-v-83843c7e");const h={class:"demo-nopading"},i=r("h2",null,"基础用法",-1),p=r("h2",null,"显示字数统计",-1),g=r("h2",null,"只读",-1);t();const m=d(((a,e,l,t,c,u)=>{const v=o("nut-textarea");return n(),s("div",h,[i,r(v,{value:a.state.val0,"onUpdate:value":e[1]||(e[1]=e=>a.state.val0=e),onChange:a.change,rows:"10",placeholder:"高度可拉伸",autosize:!0,label:"留言："},null,8,["value","onChange"]),p,r(v,{value:a.state.val1,"onUpdate:value":e[2]||(e[2]=e=>a.state.val1=e),onChange:a.change,rows:"5","limit-show":!0,"max-length":"20",placeholder:"设置输入五行",label:"留言："},null,8,["value","onChange"]),g,r(v,{readonly:"true",rows:"5",placeholder:"只读",label:"留言："})])}));v.render=m,v.__scopeId="data-v-83843c7e";export default v;

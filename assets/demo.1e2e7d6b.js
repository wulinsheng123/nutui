var e=Object.assign;import{c as l}from"./mobile.8f50d466.js";import{T as a}from"./index.6999809a.js";import{a as n,z as o,s as u,x as d,r as t,o as s,c,f as m,t as v,q as g}from"./vendor.235e43af.js";import"./index.caafce4f.js";const{createDemo:h}=l("range");var r=h({props:{},setup(){const l=n({value1:40,value2:[20,80],value3:0,value4:20,value5:30,value6:40,value7:50,value8:40,value9:60,value10:50});return e(e({},o(l)),{onChange:e=>a.text("当前值："+e)})}});const V=g("data-v-6e573d51");u("data-v-6e573d51");const C={class:"demo"},i=m("h2",null,"基础用法",-1),p=m("h2",null,"双滑块",-1),f=m("h2",null,"指定范围",-1),_=m("h2",null,"设置步长",-1),b=m("h2",null,"隐藏范围",-1),U=m("h2",null,"隐藏标签",-1),x=m("h2",null,"禁用",-1),j=m("h2",null,"自定义样式",-1),q=m("h2",null,"自定义按钮",-1),z={class:"custom-button"};d();const D=V(((e,l,a,n,o,u)=>{const d=t("nut-range"),g=t("nut-cell");return s(),c("div",C,[i,m(g,{class:"cell"},{default:V((()=>[m(d,{modelValue:e.value1,"onUpdate:modelValue":l[1]||(l[1]=l=>e.value1=l),onChange:e.onChange},null,8,["modelValue","onChange"])])),_:1}),p,m(g,{class:"cell"},{default:V((()=>[m(d,{range:"",modelValue:e.value2,"onUpdate:modelValue":l[2]||(l[2]=l=>e.value2=l),onChange:e.onChange},null,8,["modelValue","onChange"])])),_:1}),f,m(g,{class:"cell"},{default:V((()=>[m(d,{modelValue:e.value3,"onUpdate:modelValue":l[3]||(l[3]=l=>e.value3=l),max:10,min:-10,onChange:e.onChange},null,8,["modelValue","onChange"])])),_:1}),_,m(g,{class:"cell"},{default:V((()=>[m(d,{modelValue:e.value4,"onUpdate:modelValue":l[4]||(l[4]=l=>e.value4=l),step:5,onChange:e.onChange},null,8,["modelValue","onChange"])])),_:1}),b,m(g,{class:"cell"},{default:V((()=>[m(d,{"hidden-range":"",modelValue:e.value5,"onUpdate:modelValue":l[5]||(l[5]=l=>e.value5=l),onChange:e.onChange},null,8,["modelValue","onChange"])])),_:1}),U,m(g,{class:"cell"},{default:V((()=>[m(d,{"hidden-tag":"",modelValue:e.value6,"onUpdate:modelValue":l[6]||(l[6]=l=>e.value6=l),onChange:e.onChange},null,8,["modelValue","onChange"])])),_:1}),x,m(g,{class:"cell"},{default:V((()=>[m(d,{disabled:"",modelValue:e.value7,"onUpdate:modelValue":l[7]||(l[7]=l=>e.value7=l)},null,8,["modelValue"])])),_:1}),j,m(g,{class:"cell"},{default:V((()=>[m(d,{modelValue:e.value8,"onUpdate:modelValue":l[8]||(l[8]=l=>e.value8=l),onChange:e.onChange,"inactive-color":"rgba(163,184,255,1)","button-color":"rgba(52,96,250,1)","active-color":"linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"},null,8,["modelValue","onChange"])])),_:1}),q,m(g,{class:"cell"},{default:V((()=>[m(d,{modelValue:e.value9,"onUpdate:modelValue":l[9]||(l[9]=l=>e.value9=l),onChange:e.onChange},{button:V((()=>[m("div",z,v(e.value10),1)])),_:1},8,["modelValue","onChange"])])),_:1})])}));r.render=D,r.__scopeId="data-v-6e573d51";export default r;

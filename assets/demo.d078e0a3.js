import{c as e}from"./mobile.8f50d466.js";import{k as t,r as i,o as l,c as a,f as n}from"./vendor.235e43af.js";import"./index.caafce4f.js";const{createDemo:s}=e("datepicker");var o=s({props:{},setup(){const e=t(!1),i=t(!1),l=t(!1),a=t(!1),n=t(!1),s=t(!1),o=[e,i,l,a,n,s],m=t(new Date(2020,0,1));m.value;const c=t("2020-1-1"),d=t("2020-1-1"),u=t("2020年-1月-1日-0时-0分"),r=t("0时-0分-上午"),D=t("0时-0分-0秒"),p=t("0时-0分-0秒"),h=[c,d,u,r,D,p];return{show:e,show2:i,show3:l,show4:a,show5:n,show6:s,desc1:c,desc2:d,desc3:u,desc4:r,desc5:D,desc6:p,currentDate:m,minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),open:e=>{o[e].value=!0},confirm:(e,t)=>{console.log(t),h[e].value=t.join("-")}}}});const m={class:"demo"},c=n("h2",null,"每列不显示中文",-1),d=n("h2",null,"限制开始结束时间",-1),u=n("h2",null,"限制开始结束时间（有默认值）",-1),r=n("h2",null,"12小时制",-1),D=n("h2",null,"限制开始结束小时",-1),p=n("h2",null,"分钟数递增步长设置",-1);o.render=function(e,t,s,o,h,v){const w=i("nut-cell"),f=i("nut-datepicker");return l(),a("div",m,[c,n(w,{title:"日期选择",desc:e.desc1,onClick:t[1]||(t[1]=t=>e.open(0))},null,8,["desc"]),d,n(w,{title:"日期选择",desc:e.desc2,onClick:t[2]||(t[2]=t=>e.open(1))},null,8,["desc"]),u,n(w,{title:"日期时间选择",desc:e.desc3,onClick:t[3]||(t[3]=t=>e.open(2))},null,8,["desc"]),r,n(w,{title:"日期选择",desc:e.desc4,onClick:t[4]||(t[4]=t=>e.open(3))},null,8,["desc"]),D,n(w,{title:"时间选择",desc:e.desc5,onClick:t[5]||(t[5]=t=>e.open(4))},null,8,["desc"]),p,n(w,{title:"时间选择",desc:e.desc6,onClick:t[6]||(t[6]=t=>e.open(5))},null,8,["desc"]),n(f,{modelValue:e.currentDate,"onUpdate:modelValue":t[7]||(t[7]=t=>e.currentDate=t),title:"日期选择",onConfirm:t[8]||(t[8]=t=>{e.confirm(0,t)}),"is-visible":e.show,"onUpdate:is-visible":t[9]||(t[9]=t=>e.show=t),"is-show-chinese":!1},null,8,["modelValue","is-visible"]),n(f,{modelValue:e.currentDate,"onUpdate:modelValue":t[10]||(t[10]=t=>e.currentDate=t),title:"日期选择",minDate:e.minDate,maxDate:e.maxDate,onConfirm:t[11]||(t[11]=t=>{e.confirm(1,t)}),"is-visible":e.show2,"onUpdate:is-visible":t[12]||(t[12]=t=>e.show2=t),"is-show-chinese":!1},null,8,["modelValue","minDate","maxDate","is-visible"]),n(f,{modelValue:e.currentDate,"onUpdate:modelValue":t[13]||(t[13]=t=>e.currentDate=t),title:"日期时间选择",type:"datetime",minDate:e.minDate,maxDate:e.maxDate,onConfirm:t[14]||(t[14]=t=>{e.confirm(2,t)}),"is-visible":e.show3,"onUpdate:is-visible":t[15]||(t[15]=t=>e.show3=t)},null,8,["modelValue","minDate","maxDate","is-visible"]),n(f,{modelValue:e.currentDate,"onUpdate:modelValue":t[16]||(t[16]=t=>e.currentDate=t),title:"时间选择",type:"time",minDate:e.minDate,maxDate:e.maxDate,"is-use12-hours":!0,onConfirm:t[17]||(t[17]=t=>{e.confirm(3,t)}),"is-visible":e.show4,"onUpdate:is-visible":t[18]||(t[18]=t=>e.show4=t)},null,8,["modelValue","minDate","maxDate","is-visible"]),n(f,{modelValue:e.currentDate,"onUpdate:modelValue":t[19]||(t[19]=t=>e.currentDate=t),title:"时间选择",type:"time",minDate:e.minDate,maxDate:e.maxDate,onConfirm:t[20]||(t[20]=t=>{e.confirm(4,t)}),"is-visible":e.show5,"onUpdate:is-visible":t[21]||(t[21]=t=>e.show5=t)},null,8,["modelValue","minDate","maxDate","is-visible"]),n(f,{modelValue:e.currentDate,"onUpdate:modelValue":t[22]||(t[22]=t=>e.currentDate=t),title:"时间选择",type:"time",minDate:e.minDate,"minute-step":5,maxDate:e.maxDate,onConfirm:t[23]||(t[23]=t=>{e.confirm(5,t)}),"is-visible":e.show6,"onUpdate:is-visible":t[24]||(t[24]=t=>e.show6=t)},null,8,["modelValue","minDate","maxDate","is-visible"])])};export default o;

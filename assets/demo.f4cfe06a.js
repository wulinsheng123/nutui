import{c as l}from"./mobile.c3875bc0.js";import{r as e,o,c as r,f as u}from"./vendor.91b30fe3.js";import"./index.00b2b72d.js";const{createDemo:n}=l("uploader");var t=n({setup:()=>({onOversize:l=>{console.log("oversize 触发 文件大小不能超过 50kb",l)},onDelete:(l,e)=>{console.log("on-delete 事件触发",l,e)},uploadUrl:"https://my-json-server.typicode.com/linrufeng/demo/posts",formData:{custom:"test"}})});const a={class:"demo bg-w"},s=u("h2",null,"基础用法",-1),d=u("h2",null,"上传状态",-1),m=u("h2",null,"限制上传数量5个",-1),i=u("h2",null,"限制上传大小（每个文件最大不超过 50kb）",-1),p=u("h2",null,"自定义数据 FormData 、 headers ",-1),c=u("h2",null,"禁用状态",-1);t.render=function(l,n,t,f,h,b){const v=e("nut-uploader");return o(),r("div",a,[s,u(v,{url:l.uploadUrl},null,8,["url"]),d,u(v,{url:l.uploadUrl,multiple:"",onOnDelete:l.onDelete},null,8,["url","onOnDelete"]),m,u(v,{url:l.uploadUrl,multiple:"","max-count":"5"},null,8,["url"]),i,u(v,{url:l.uploadUrl,multiple:"","max-size":51200,onOversize:l.onOversize},null,8,["url","onOversize"]),p,u(v,{url:l.uploadUrl,"form-data":l.formData,headers:l.formData,"with-Credentials":!0},null,8,["url","form-data","headers"]),c,u(v,{disabled:""})])};export default t;

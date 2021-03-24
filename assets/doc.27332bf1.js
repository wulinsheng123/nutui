var e=Object.defineProperty,s=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,c=(s,t,a)=>t in s?e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,o=(e,o)=>{for(var r in o||(o={}))s.call(o,r)&&c(e,r,o[r]);if(t)for(var r of t(o))a.call(o,r)&&c(e,r,o[r]);return e};import{n as r,h as d,d as i,_ as n,i as l}from"./index.77feaf28.js";import{d as m,r as u,c as p,o as h,a as v,b as _,w as f,e as g,v as b,f as A,g as k,F as E,h as j,i as D,j as L,t as w,k as I,l as O,m as P,T as V,n as x,p as y,u as T,q as R,s as U,x as N,y as C,z as S,A as B,B as F,C as H,D as Y,E as W}from"./vendor.80bf15c7.js";var X=m({name:"app"});X.render=function(e,s,t,a,c,o){const r=u("router-view");return h(),p(r)};const G=m({name:"search",setup(){const e=v({nav:r,navList:[],searchIndex:0,searchList:[],searchVal:"",searchCName:""});_((()=>{r.forEach((s=>{s.packages.forEach((s=>{e.navList.push(s)}))}))})),f((()=>e.searchVal),(s=>{s?e.searchList=e.navList.filter((e=>{if(!1===e.show)return!1;return new RegExp(s,"gi").test(e.name+" "+e.cName+e.desc)})):(e.searchCName="",e.searchIndex=0,e.searchList=[])}));return{data:e,onfocus:e=>{},choseList:s=>{let t=e.searchIndex;40==s.keyCode&&t++,38==s.keyCode&&t--,t<0&&(t=0);const a=e.searchList;if(a.length>0){const c=a[t]&&a[t].name;c&&(e.searchCurName=c,e.searchIndex=t,13==s.keyCode&&(e.$router.push({path:"/"+a[t].name}),e.searchCurName="",e.searchIndex=0,e.searchVal=""))}},onblur:s=>{setTimeout((()=>{e.searchList=[],e.searchVal=""}),200)},checklist:()=>{e.searchVal="",e.searchCurName="",e.searchIndex=0}}}}),J={class:"search-box"},M={class:"search-list"};G.render=function(e,s,t,a,c,o){const r=u("router-link");return h(),p("div",J,[g(A("input",{type:"text",class:"search-input",placeholder:"在 NutUI 中搜索","onUpdate:modelValue":s[1]||(s[1]=s=>e.data.searchVal=s),onFocus:s[2]||(s[2]=(...s)=>e.onfocus&&e.onfocus(...s)),onBlur:s[3]||(s[3]=(...s)=>e.onblur&&e.onblur(...s)),onKeyup:s[4]||(s[4]=(...s)=>e.choseList&&e.choseList(...s))},null,544),[[b,e.data.searchVal]]),g(A("ul",M,[(h(!0),p(E,null,j(e.data.searchList,((s,t)=>(h(),p("li",{class:e.data.searchCurName==s.name?"cur":"",onClick:t=>e.checklist(s),key:t},[A(r,{to:s.name.toLowerCase()},{default:D((()=>[L(w(s.name)+" ",1),A("span",null,w(s.cName),1)])),_:2},1032,["to"])],10,["onClick"])))),128))],512),[[k,e.data.searchList.length>0]])])};const Q=I("/"),q=I("red");var z=m({name:"doc-header",components:{Search:G},setup(){const e=v({theme:"black",versonList:[{name:"1.x"},{name:"2.x"},{name:"3.x"}],verson:"3.x",navIndex:0,activeIndex:0,isShowSelect:!1}),s=O((()=>function(e){return Q.value==e.toLowerCase()})),t=O((()=>function(){return`doc-header-${q.value}`}));return{header:d,data:e,isActive:s,checkTheme:(s,t)=>{e.isShowSelect=!1,e.activeIndex=t,e.verson=s,0===t?window.location.href="//nutui.jd.com/1x/":1===t&&(window.location.href="https://nutui.jd.com/#/index")},themeName:t,handleFocus:()=>{console.log(1)},handleFocusOut:()=>{e.isShowSelect=!1}}}});const K=A("div",{class:"header-logo"},[A("a",{class:"logo-link",href:"#"}),A("span",{class:"logo-border"})],-1),Z={class:"header-nav"},$={class:"nav-box"},ee={class:"nav-list"},se={class:"nav-item"},te={href:"demo.html#/"},ae={class:"nav-item"},ce={class:"header-select-hd"},oe=A("i",{class:""},null,-1),re={class:"header-select-bd"},de=A("li",{class:"nav-item"},[A("a",{class:"user-link",target:"_blank",href:"https://github.com/jdf2e/nutui"})],-1);z.render=function(e,s,t,a,c,o){const r=u("Search"),d=u("router-link");return h(),p("div",{class:["doc-header",e.themeName()]},[K,A("div",Z,[A(r),A("div",$,[A("ul",ee,[A("li",se,[A(d,{to:e.header[0].path},{default:D((()=>[L(w(e.header[0].cName),1)])),_:1},8,["to"])]),A("li",{class:["nav-item",{active:e.isActive(e.header[1].path)}]},[A(d,{to:e.header[1].path},{default:D((()=>[L(w(e.header[1].cName),1)])),_:1},8,["to"])],2),A("li",{class:["nav-item",{active:e.isActive(e.header[2].name)}]},[A("a",te,w(e.header[2].cName),1)],2),A("li",{class:["nav-item",{active:e.isActive(e.header[3].name)}]},[A(d,{to:e.header[3].name},{default:D((()=>[L(w(e.header[3].cName),1)])),_:1},8,["to"])],2),A("li",ae,[A("div",{onFocus:s[1]||(s[1]=(...s)=>e.handleFocus&&e.handleFocus(...s)),onFocusout:s[2]||(s[2]=(...s)=>e.handleFocusOut&&e.handleFocusOut(...s)),tabindex:"0",class:["header-select-box",[1==e.data.isShowSelect?"select-up":"select-down"]],onClick:s[3]||(s[3]=P((s=>e.data.isShowSelect=!e.data.isShowSelect),["stop"]))},[A("div",ce,[L(w(e.data.verson),1),oe]),A(V,{name:"fade"},{default:D((()=>[g(A("div",re,[(h(!0),p(E,null,j(e.data.versonList,((s,t)=>(h(),p("div",{class:["header-select-item",{active:e.data.activeIndex===t}],key:t,onClick:P((a=>e.checkTheme(s.name,t)),["stop"])},w(s.name),11,["onClick"])))),128))],512),[[k,e.data.isShowSelect]])])),_:1})],34)]),de])])])],2)};var ie=m({name:"doc-nav",setup(){const e=O((()=>function(e){return Q.value==e.toLowerCase()}));return _((()=>{console.log("123"+r)})),{isActive:e,nav:v(r),docs:v(i),currentRoute:Q}}});const ne={class:"doc-nav"},le={key:0};ie.render=function(e,s,t,a,c,o){const r=u("router-link");return h(),p("div",ne,[A("ol",null,[A("li",null,w(e.docs.name),1),A("ul",null,[(h(!0),p(E,null,j(e.docs.packages,(s=>g((h(),p("li",{class:{active:e.isActive(s.name)},key:s},[s.isLink?(h(),p("a",{key:1,href:s.name,target:"_blank"},w(s.cName),9,["href"])):(h(),p(r,{key:0,to:s.name.toLowerCase()},{default:D((()=>[L(w(s.cName),1)])),_:2},1032,["to"]))],2)),[[k,s.show]]))),128))])]),(h(!0),p(E,null,j(e.nav,(e=>(h(),p("ol",{key:e},[A("li",null,w(e.name),1),A("ul",null,[(h(!0),p(E,null,j(e.packages,(e=>(h(),p(E,{key:e},[e.show?(h(),p("li",le,[A(r,{to:e.name.toLowerCase()},{default:D((()=>[L(w(e.name)+"  ",1),A("b",null,w(e.cName),1)])),_:2},1032,["to"])])):x("",!0)],64)))),128))])])))),128))])};var me=m({name:"doc-footer",setup(){const e=v({theme:"red",themeList:[{name:"热情红",color:"red"},{name:"暗黑风",color:"black"},{name:"纯净白",color:"white"}],activeIndex:0,isShowSelect:!1});return{data:e,clickOut:()=>{document.addEventListener("click",(e=>{console.log("e.target",e.target)}),!1)},checkTheme:(s,t)=>{e.isShowSelect=!1,e.activeIndex=t,e.theme=s,q.value=s,console.log("themeColor1",q)}}}});const ue={class:"doc-footer-content"},pe=A("div",{class:"doc-footer-list"},[A("img",{class:"doc-footer-logo",src:"data:image/png;base64,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"})],-1),he=A("div",{class:"doc-footer-list"},[A("h4",{class:"doc-footer-title"},"相关资源"),A("div",{class:"doc-footer-item"},[A("a",{class:"sub-link",target:"_blank",href:"hhttps://cn.vuejs.org/index.html"},"Vue")]),A("div",{class:"doc-footer-item"},[A("a",{class:"sub-link",target:"_blank",href:"https://vitejs.dev"},"Vite")]),A("div",{class:"doc-footer-item"},[A("a",{class:"sub-link",target:"_blank",href:"https://taro.jd.com"},"Taro")]),A("div",{class:"doc-footer-item"},[A("a",{class:"sub-link",target:"_blank",href:"https://ling.jd.com/jdw"},"羚珑")])],-1),ve=A("div",{class:"doc-footer-list"},[A("h4",{class:"doc-footer-title"},"社区"),A("div",{class:"doc-footer-item"},[A("a",{class:"sub-link",target:"_blank",href:"https://github.com/jdf2e/nutui"},"GitHub")]),A("div",{class:"doc-footer-item"},[A("a",{class:"sub-link",target:"_blank",href:"https://www.zhihu.com/column/c_1263837684834889728"},"NutUI 知乎专栏")]),A("div",{class:"doc-footer-item vx-item"},[L(" 微信 "),A("i",{class:"icon-vx"}),A("div",{class:"vx-box"},[A("p",{class:"vx-desc"},"微信交流群"),A("p",{class:"vx-desc"},"扫码添加好友"),A("img",{class:"img-code",src:"/nutui/assets/vx-code.89d526cc.png"}),A("p",{class:"vx-desc"},[L("回复"),A("span",{class:"vx-red"},"NutUI"),L("即刻进群")])])])],-1),_e=A("div",{class:"doc-footer-list"},[A("h4",{class:"doc-footer-title"},"关于我们"),A("div",{class:"doc-footer-item"},[A("a",{class:"sub-link",href:"#/joinus"},"加入我们")]),A("div",{class:"doc-footer-item"},[A("a",{class:"sub-link",href:"mailto:nutui@jd.com"},"联系我们")]),A("div",{class:"doc-footer-item"},[A("a",{class:"sub-link",target:"_blank",href:"https://github.com/jdf2e/nutui/issues"},"意见反馈")]),A("div",{class:"doc-footer-item"},[A("a",{class:"sub-link",target:"_blank",href:"http://fe.jd.com"},"京东前端")])],-1),fe=A("div",{class:"doc-footer-select-hd"},[A("i",{class:"icon-color"}),L("主题换肤")],-1),ge={class:"doc-footer-select-bd"},be=A("p",{class:"doc-footer-desc"},"2021 京东零售 - 基础业务体验部.All Rights Reserved.",-1);me.render=function(e,s,t,a,c,o){return h(),p("div",{class:["doc-footer",`doc-footer-${e.data.theme}`]},[A("div",ue,[pe,he,ve,_e,A("div",{class:"doc-footer-list",onClick:s[1]||(s[1]=P((s=>e.data.isShowSelect=!e.data.isShowSelect),["stop"]))},[fe,g(A("div",ge,[(h(!0),p(E,null,j(e.data.themeList,((s,t)=>(h(),p("div",{class:["doc-footer-select-item",{active:e.data.activeIndex===t}],key:t,onClick:P((a=>e.checkTheme(s.color,t)),["stop"])},[A("i",{class:`circle-${s.color}`},null,2),L(w(s.name),1)],10,["onClick"])))),128))],512),[[k,e.data.isShowSelect]])])]),be],2)};var Ae=m({name:"doc-demo-preview",props:{url:String}});const ke={class:"doc-demo-preview"};Ae.render=function(e,s,t,a,c,o){return h(),p("div",ke,[A("iframe",{src:e.url,frameborder:"0"},null,8,["src"])])};var Ee=m({name:"doc",components:{[z.name]:z,[ie.name]:ie,[me.name]:me,[Ae.name]:Ae},setup(){const e=v({demoUrl:"demo.html"}),s=s=>{const{origin:t,pathname:a}=window.location;Q.value=s.name,e.demoUrl=`${t}${a.replace("index.html","")}demo.html#${s.path}`};return _((()=>{const e=T();s(e)})),y((e=>{s(e)})),e}});const je=R("data-v-54d73b6d");U("data-v-54d73b6d");const De={class:"doc-content"},Le={class:"doc-content-document"};N();const we=je(((e,s,t,a,c,o)=>{const r=u("doc-header"),d=u("doc-nav"),i=u("router-view"),n=u("doc-footer"),l=u("doc-demo-preview");return h(),p(E,null,[A(r),A(d),A("div",De,[A("div",Le,[A(i)]),A(n),A(l,{url:e.demoUrl},null,8,["url"])])],64)}));Ee.render=we,Ee.__scopeId="data-v-54d73b6d";const Ie={baseUrl:"",isPrd:!0};Ie.isPrd=!0,Ie.baseUrl="http://nutui-server.jd.com";class Oe{checkStatus(e){const s={state:0,value:{},message:""};return!e||200!==e.status&&304!==e.status&&400!==e.status||(s.value=e.data),s}request(e,s,t){return a=this,c=null,o=function*(){const a=Object.assign({"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},t.header);try{const c={method:s,url:Ie.baseUrl+e,data:t,params:t,timeout:3e4,crossDomain:!0,headers:a},o=yield C(c);return this.checkStatus(o)}catch(c){return console.error(c),null}},new Promise(((e,s)=>{var t=e=>{try{d(o.next(e))}catch(t){s(t)}},r=e=>{try{d(o.throw(e))}catch(t){s(t)}},d=s=>s.done?e(s.value):Promise.resolve(s.value).then(t,r);d((o=o.apply(a,c)).next())}));var a,c,o}}class Pe{constructor(){this.httpClient=new Oe}getArticle(){return this.httpClient.request("/article/list?pageIndex=1&pageSize=100","get",{})}saveUserInfo(e){return this.httpClient.request("/visit/saveVisitInfo","post",e)}}var Ve=m({name:"doc",components:{[z.name]:z,[me.name]:me},setup(){const e=v({articleList:[],communityArticleList:[],tabData:[{title:"全部文章"}],activeIndex:0}),s=e=>{Q.value=e.name};_((()=>{const t=T();s(t);(new Pe).getArticle().then((s=>{0==(null==s?void 0:s.state)&&s.value.data.arrays.forEach((s=>{1==s.type?e.articleList.push(s):e.communityArticleList.push(s)}))}))})),y((e=>{s(e)}));return o(o({},S(e)),{clickTab:s=>{e.activeIndex=s},toLink:e=>{window.open("//jelly.jd.com/article/"+e)}})}}),xe="/nutui/assets/img-article.0250d52f.jpg";const ye=R("data-v-5fe3cb35");U("data-v-5fe3cb35");const Te=A("div",{class:"resource-main"},[A("div",{class:"resource-main-content"},[A("h3",{class:"sub-title"},"资源"),A("p",{class:"sub-desc"},"这里汇总了 NutUI 相关的所有的资源")])],-1),Re={class:"resource-content"},Ue={key:0,class:"resource-block"},Ne=A("h4",{class:"sub-title"},"设计资源",-1),Ce=A("p",{class:"sub-desc"},[L("这里提供 NUTUI 相关设计资源和设计工具的下载，更多设计资源正在整理和完善中。你可以在这个"),A("span",{class:"sub-red"},"地址"),L("中反馈对新版本 Sketch Symbols 组件的意见。")],-1),Se=A("div",{class:"no-data"},[A("img",{class:"nodata-img-joy",src:"/nutui/assets/img-joy.6d8227fe.png"}),A("p",{class:"nodata-desc"},"敬请期待")],-1),Be={key:1,class:"resource-block"},Fe=A("h4",{class:"sub-title"},"设计资源",-1),He=A("p",{class:"sub-desc"},"想要了解 NutUI 设计体系背后的故事？如何才能更好的应用？你可以查阅下述我们为你精挑细选的文章。也欢迎关注 NutUI 官方专栏，这里常有关于 NutUI 设计体系下相关话题内容的最新分享和讨论。",-1),Ye={class:"tab-box"},We={class:"tab-hd"},Xe={class:"tab-bd"},Ge={class:"design-title"},Je={class:"tab-bd"},Me=A("div",{class:"design-item"},[A("img",{class:"img-design",src:xe}),A("p",{class:"design-title"},"NutUI 落地实践-让组件库服务慧采协同采购业务")],-1),Qe=A("div",{class:"design-item"},[A("img",{class:"img-design",src:xe}),A("p",{class:"design-title"},"NutUI 落地实践-让组件库服务慧采协同采购业务")],-1),qe={class:"resource-block"},ze=A("h4",{class:"sub-title"},"社区文章",-1),Ke=A("p",{class:"sub-desc"},null,-1),Ze={class:"article-box"};N();const $e=ye(((e,s,t,a,c,o)=>{const r=u("doc-header"),d=u("doc-footer");return h(),p(E,null,[A(r),Te,A("div",Re,[0===e.articleList.length?(h(),p("div",Ue,[Ne,Ce,Se])):(h(),p("div",Be,[Fe,He,A("div",Ye,[A("div",We,[(h(!0),p(E,null,j(e.tabData,((s,t)=>(h(),p("div",{class:["tab-hd-item",{active:e.activeIndex===t}],key:t,onClick:s=>e.clickTab(t)},w(s.title),11,["onClick"])))),128))]),g(A("div",Xe,[(h(!0),p(E,null,j(e.articleList,(s=>(h(),p("div",{class:"design-item",key:s.id,onClick:t=>e.toLink(s.id)},[A("img",{class:"img-design",src:s.cover_image},null,8,["src"]),A("p",Ge,w(s.title),1)],8,["onClick"])))),128))],512),[[k,0===e.activeIndex]]),g(A("div",Je,[Me,Qe],512),[[k,1===e.activeIndex]])])])),A("div",qe,[ze,Ke,A("ul",Ze,[(h(!0),p(E,null,j(e.communityArticleList,(s=>(h(),p("li",{class:"article-item",key:s.id,onClick:t=>e.toLink(s.id)},[A("a",{class:"article-link",href:s.link},w(s.title)+" - "+w(s.user_name),9,["href"])],8,["onClick"])))),128))])])]),A(d)],64)}));Ve.render=$e,Ve.__scopeId="data-v-5fe3cb35";var es=m({name:"main",components:{[z.name]:z,[me.name]:me},setup(){const e=v({articleList:[]});_((()=>{(new Pe).getArticle().then((s=>{0==(null==s?void 0:s.state)&&(e.articleList=s.value.data.arrays.map((e=>{if(1==e.type)return e})).filter((e=>e)))}))}));const s=O((()=>function(){return`doc-content-${q.value}`}));return o(o({toIntro:function(){Es.push({path:"/intro"})}},S(e)),{themeName:s,toLink:e=>{window.open("//jelly.jd.com/article/"+e)}})}});const ss=R("data-v-01d4802e");U("data-v-01d4802e");const ts={class:"doc-content-index"},as={class:"content-left"},cs=A("div",{class:"content-title"}," NutUI 3.0 ",-1),os=A("div",{class:"content-smile"},null,-1),rs=A("div",{class:"content-subTitle"},"一套京东风格的轻量级移动端 Vue 组件库",-1),ds={class:"content-button"},is=A("div",{class:"leftButtonText"},"开始使用",-1),ns=B('<div class="rightButton" data-v-01d4802e><div class="rightButtonText" data-v-01d4802e>扫码体验</div><div class="qrcodepart" data-v-01d4802e><div class="qrcode-text" data-v-01d4802e> 请使用手机扫码体验 </div><div class="qrcode" data-v-01d4802e></div></div></div>',1),ls=A("iframe",{style:{"margin-left":"20px"},src:"https://ghbtns.com/github-btn.html?user=jdf2e&repo=nutui&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"170",height:"30",title:"GitHub"},null,-1),ms=A("div",{class:"content-right"},null,-1),us=A("div",{class:"doc-content-features"},[A("div",{class:"doc-content-hd"},[A("h4",{class:"doc-content-title"},"平台特色")]),A("ul",{class:"features-list"},[A("li",{class:"features-item"},[A("img",{src:"/nutui/assets/img-home-features1.2ef25c62.png"}),A("p",{class:"features-title"},"京东风格"),A("p",{class:"features-desc"},"遵循京东 App 9.0 设计规范")]),A("li",{class:"features-item"},[A("img",{src:"/nutui/assets/img-home-features2.37cc104b.png"}),A("p",{class:"features-title"},"组件丰富"),A("p",{class:"features-desc a-l"},"提供 70+ 组件，丰富的 demo 快速体验交互细节，覆盖各类场景满足各种功能的需求")]),A("li",{class:"features-item"},[A("img",{src:"/nutui/assets/img-home-features3.7207ff14.png"}),A("p",{class:"features-title"},"前沿技术"),A("p",{class:"features-desc"},"vue3 vite2.x typescript")]),A("li",{class:"features-item"},[A("img",{src:"/nutui/assets/img-home-features4.e29dd764.png"}),A("p",{class:"features-title"},"贴心通道"),A("p",{class:"features-desc"},[L("社区维护 高效服务"),A("br"),L("技术支持 经验沉淀")])])])],-1),ps={key:0,class:"doc-content-more"},hs=A("div",{class:"doc-content-hd"},[A("h4",{class:"doc-content-title"},"更多内容"),A("a",{class:"sub-more",href:"#/resource"},"More")],-1),vs={class:"more-list"},_s={class:"more-title"};N();const fs=ss(((e,s,t,a,c,o)=>{const r=u("doc-header"),d=u("doc-footer");return h(),p(E,null,[A(r),A("div",{class:["doc-content",e.themeName()]},[A("div",ts,[A("div",as,[cs,os,rs,A("div",ds,[A("div",{class:"leftButton",onClick:s[1]||(s[1]=(...s)=>e.toIntro&&e.toIntro(...s))},[is]),ns,ls])]),ms]),us,e.articleList.length>0?(h(),p("div",ps,[hs,A("ul",vs,[(h(!0),p(E,null,j(e.articleList.slice(0,4),(s=>(h(),p("li",{class:"more-item",key:s.id,onClick:t=>e.toLink(s.id)},[A("img",{src:s.cover_image},null,8,["src"]),A("p",_s,w(s.title),1)],8,["onClick"])))),128))])])):x("",!0)],2),A(d)],64)}));es.render=fs,es.__scopeId="data-v-01d4802e";const gs=[],bs={"/src/packages/actionsheet/doc.md":()=>n((()=>__import__("./doc.a8ab3679.js")),["/nutui/assets/doc.a8ab3679.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/address/doc.md":()=>n((()=>__import__("./doc.7a01f57f.js")),["/nutui/assets/doc.7a01f57f.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/avatar/doc.md":()=>n((()=>__import__("./doc.79f144eb.js")),["/nutui/assets/doc.79f144eb.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/backtop/doc.md":()=>n((()=>__import__("./doc.7040ffa0.js")),["/nutui/assets/doc.7040ffa0.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/button/doc.md":()=>n((()=>__import__("./doc.ceafb270.js")),["/nutui/assets/doc.ceafb270.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/calendar/doc.md":()=>n((()=>__import__("./doc.5c6649ad.js")),["/nutui/assets/doc.5c6649ad.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/cell/doc.md":()=>n((()=>__import__("./doc.c4d0cd35.js")),["/nutui/assets/doc.c4d0cd35.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/checkbox/doc.md":()=>n((()=>__import__("./doc.32eb1172.js")),["/nutui/assets/doc.32eb1172.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/checkboxgroup/doc.md":()=>n((()=>__import__("./doc.df82742b.js")),["/nutui/assets/doc.df82742b.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/collapse/doc.md":()=>n((()=>__import__("./doc.f213168f.js")),["/nutui/assets/doc.f213168f.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/collapseitem/doc.md":()=>n((()=>__import__("./doc.1e0b7e07.js")),["/nutui/assets/doc.1e0b7e07.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/datepicker/doc.md":()=>n((()=>__import__("./doc.7a4044af.js")),["/nutui/assets/doc.7a4044af.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/dialog/doc.md":()=>n((()=>__import__("./doc.185889a4.js")),["/nutui/assets/doc.185889a4.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/drag/doc.md":()=>n((()=>__import__("./doc.7027b2b7.js")),["/nutui/assets/doc.7027b2b7.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/icon/doc.md":()=>n((()=>__import__("./doc.f932b5da.js")),["/nutui/assets/doc.f932b5da.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/infiniteloading/doc.md":()=>n((()=>__import__("./doc.db932b51.js")),["/nutui/assets/doc.db932b51.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/input/doc.md":()=>n((()=>__import__("./doc.b474a20c.js")),["/nutui/assets/doc.b474a20c.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/inputnumber/doc.md":()=>n((()=>__import__("./doc.550dbdc6.js")),["/nutui/assets/doc.550dbdc6.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/layout/doc.md":()=>n((()=>__import__("./doc.60ac0131.js")),["/nutui/assets/doc.60ac0131.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/menu/doc.md":()=>n((()=>__import__("./doc.e21094c1.js")),["/nutui/assets/doc.e21094c1.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/navbar/doc.md":()=>n((()=>__import__("./doc.6dbfc98b.js")),["/nutui/assets/doc.6dbfc98b.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/notify/doc.md":()=>n((()=>__import__("./doc.6eebaafa.js")),["/nutui/assets/doc.6eebaafa.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/overlay/doc.md":()=>n((()=>__import__("./doc.c147f305.js")),["/nutui/assets/doc.c147f305.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/picker/doc.md":()=>n((()=>__import__("./doc.d809ec2d.js")),["/nutui/assets/doc.d809ec2d.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/popup/doc.md":()=>n((()=>__import__("./doc.bd8f01a6.js")),["/nutui/assets/doc.bd8f01a6.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/price/doc.md":()=>n((()=>__import__("./doc.a2fd9492.js")),["/nutui/assets/doc.a2fd9492.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/pullrefresh/doc.md":()=>n((()=>__import__("./doc.4dc9b352.js")),["/nutui/assets/doc.4dc9b352.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/radio/doc.md":()=>n((()=>__import__("./doc.84a6d111.js")),["/nutui/assets/doc.84a6d111.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/radiogroup/doc.md":()=>n((()=>__import__("./doc.4698e208.js")),["/nutui/assets/doc.4698e208.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/range/doc.md":()=>n((()=>__import__("./doc.104e6f86.js")),["/nutui/assets/doc.104e6f86.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/rate/doc.md":()=>n((()=>__import__("./doc.850a02a9.js")),["/nutui/assets/doc.850a02a9.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/shortpassword/doc.md":()=>n((()=>__import__("./doc.cbb57169.js")),["/nutui/assets/doc.cbb57169.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/swiper/doc.md":()=>n((()=>__import__("./doc.1b71b8b0.js")),["/nutui/assets/doc.1b71b8b0.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/swiperitem/doc.md":()=>n((()=>__import__("./doc.31e2fac6.js")),["/nutui/assets/doc.31e2fac6.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/switch/doc.md":()=>n((()=>__import__("./doc.e21ab663.js")),["/nutui/assets/doc.e21ab663.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/tab/doc.md":()=>n((()=>__import__("./doc.d0e038c9.js")),["/nutui/assets/doc.d0e038c9.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/tabbar/doc.md":()=>n((()=>__import__("./doc.8f4e973b.js")),["/nutui/assets/doc.8f4e973b.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/temp/doc.md":()=>n((()=>__import__("./doc.0a9abe6c.js")),["/nutui/assets/doc.0a9abe6c.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/textarea/doc.md":()=>n((()=>__import__("./doc.04171749.js")),["/nutui/assets/doc.04171749.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/toast/doc.md":()=>n((()=>__import__("./doc.990fe433.js")),["/nutui/assets/doc.990fe433.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/packages/uploader/doc.md":()=>n((()=>__import__("./doc.6887f9aa.js")),["/nutui/assets/doc.6887f9aa.js","/nutui/assets/vendor.80bf15c7.js"])};for(const Is in bs){let e=/packages\/(.*)\/doc.md/.exec(Is)[1];gs.push({path:"/"+e,component:bs[Is],name:e})}const As={"/src/docs/international.md":()=>n((()=>__import__("./international.f1260988.js")),["/nutui/assets/international.f1260988.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/docs/intro.md":()=>n((()=>__import__("./intro.3ff44329.js")),["/nutui/assets/intro.3ff44329.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/docs/joinus.md":()=>n((()=>__import__("./joinus.8bfbd768.js")),["/nutui/assets/joinus.8bfbd768.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/docs/start.md":()=>n((()=>__import__("./start.bf43ad1f.js")),["/nutui/assets/start.bf43ad1f.js","/nutui/assets/vendor.80bf15c7.js"]),"/src/docs/theme.md":()=>n((()=>__import__("./theme.43e54b78.js")),["/nutui/assets/theme.43e54b78.js","/nutui/assets/vendor.80bf15c7.js"])};for(const Is in As){let e=/docs\/(.*).md/.exec(Is)[1];gs.push({path:"/"+e,component:As[Is],name:e})}const ks=[{path:"/",name:"/",component:es},{path:"/index",name:"index",component:Ee,children:gs},{path:"/resource",name:"resource",component:Ve}];ks.push({name:"notFound",path:"/:path(.*)+",redirect:{name:"/"}});const Es=F({history:H(),routes:ks,scrollBehavior(e){if(e.hash){const s=e.hash.split("#")[1],t=document.getElementById(s);setTimeout((()=>{t&&t.scrollIntoView(!0)}))}}});Es.afterEach(((e,s)=>{window.scrollTo(0,0);try{setTimeout((()=>{(new Image).src=`${Ie.baseUrl}/openapi/point?p=${encodeURIComponent(JSON.stringify(location))}`}),500)}catch(t){}}));const js={setup:()=>({onlineFun:function(){alert("hello")}})},Ds=R("data-v-c6543ac2");U("data-v-c6543ac2");const Ls=A("p",{class:"online-part"},[A("a",{href:"//gitpod.io/#https://github.com/jdf2e/nutui.git",target:"_blank",class:"online-btn"},"在线运行")],-1);N();const ws=Ds(((e,s,t,a,c,o)=>(h(),p("div",null,[Y(e.$slots,"highlight"),Y(e.$slots,"default"),Ls]))));js.render=ws,js.__scopeId="data-v-c6543ac2",l&&location.replace("demo.html"+location.hash),W(X).component("demo-block",js).use(Es).mount("#doc");

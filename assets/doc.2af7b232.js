import{c as t,o as a,A as e}from"./vendor.27122b45.js";const n={class:"markdown-body"},o=e('<h1>Avatar 头像</h1><h3>介绍</h3><p>用来代表用户或事物，支持图片、图标或字符展示。</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\nimport { Avatar } from &#39;@nutui/nutui&#39;;\n\nconst app = createApp();\napp.use(Avatar);\n\n</code></pre><h2>代码示例</h2><h3>基本用法</h3><p>内置 smal / normal / large 三种尺寸规格</p><pre><code class="language-html">  &lt;nut-avatar\n    size=&quot;80&quot;\n    bg-image=&quot;https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png&quot;\n  &gt;&lt;/nut-avatar&gt;\n  &lt;nut-avatar\n    size=&quot;large&quot;\n    bg-image=&quot;https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png&quot;\n  &gt;&lt;/nut-avatar&gt;\n  &lt;nut-avatar\n    size=&quot;normal&quot;\n    bg-image=&quot;https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png&quot;\n  &gt;&lt;/nut-avatar&gt;\n  &lt;nut-avatar\n    size=&quot;small&quot;\n    bg-image=&quot;https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png&quot;\n  &gt;&lt;/nut-avatar&gt;  \n</code></pre><h3>修改形状类型</h3><pre><code class="language-html">  &lt;nut-avatar  shape=&quot;square&quot;&gt;&lt;/nut-avatar&gt;\n  &lt;nut-avatar  shape=&quot;round&quot;&gt;&lt;/nut-avatar&gt;\n</code></pre><h3>修改背景色</h3><pre><code class="language-html">&lt;nut-avatar bg-color=&quot;#f0250f&quot;&gt;&lt;/nut-avatar&gt;\n</code></pre><h3>修改背景icon</h3><pre><code class="language-html">  &lt;nut-avatar\n    bg-icon=&quot;https://img30.360buyimg.com/uba/jfs/t1/84318/29/2102/10483/5d0704c1Eb767fa74/fc456b03fdd6cbab.png&quot;\n  &gt;&lt;/nut-avatar&gt;\n</code></pre><h3>设置头像的文本内容</h3><pre><code class="language-html">&lt;nut-avatar bg-icon&gt;N&lt;/nut-avatar&gt;\n</code></pre><h3>点击头像，触发事件</h3><pre><code class="language-html">&lt;nut-avatar @active-avatar=&quot;activeAvatar&quot;&gt;&lt;/nut-avatar&gt;\n</code></pre><h3>Prop</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>bg-color</td><td>设置头像背景色</td><td>String</td><td>#eee</td></tr><tr><td>size</td><td>设置头像的大小，提供三种：large/normal/small，支持直接输入数字</td><td>String</td><td>normal</td></tr><tr><td>shape</td><td>设置头像的形状，默认是圆形，可以设置为square方形</td><td>String</td><td>round</td></tr><tr><td>bg-image</td><td>设置头像的背景图片</td><td>String</td><td>‘’</td></tr><tr><td>bg-icon</td><td>设置头像的icon图标, 优先级低于bg-image,类似Icon组件的name属性，支持名称和链接</td><td>String</td><td>‘’</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>回调参数</th></tr></thead><tbody><tr><td>active-avatar</td><td>点击头像触发事件</td><td>Function</td><td>event</td></tr></tbody></table>',23),r={expose:[],setup:e=>(e,r)=>(a(),t("div",n,[o]))};export default r;

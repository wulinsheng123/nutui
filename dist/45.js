/*! NutUI v1.1.1 Fri Mar 30 2018 10:22:08 GMT+0800 (中国标准时间) */
webpackJsonpnutui([45],{1018:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",[o("h1",[e._v("Uploader")]),e._v(" "),o("p",[e._v("文件异步上传组件，支持预览本地图片。")]),e._v(" "),o("div",{attrs:{id:"previewBox"},domProps:{innerHTML:e._s(e.preview)}}),e._v(" "),o("div",{attrs:{id:"progressBox"}},[e._v(e._s(e.progress))]),e._v(" "),o("nut-uploader",{attrs:{url:"",preview:!0},on:{start:e.uploadStart,progress:e.uploadProgress,success:e.uploadSuccess,failure:e.uploadFailure,preview:e.uploadPreview}})],1)},staticRenderFns:[]}},1101:function(e,r,o){var t=o(929);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);o(3)("017eab3d",t,!0)},744:function(e,r,o){function t(e){o(1101)}var s=o(1)(o(825),o(1018),t,null,null);e.exports=s.exports},825:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={data:function(){return{demo:'<nut-uploader url="" :preview="true" @start="uploadStart" @progress="uploadProgress"\n @success="uploadSuccess" @failure="uploadFailure" @preview="uploadPreview"></nut-uploader>',preview:"",progress:""}},methods:{uploadStart:function(){console.log("start")},uploadProgress:function(e,r,o){this.progress="上传进度："+r/o*100+"%"},uploadPreview:function(e){this.preview='本地预览图：<img src="'+e+'" alt=""/>'},uploadSuccess:function(e,r){alert("上传成功！")},uploadFailure:function(e,r){alert("上传失败！")}}}},929:function(e,r,o){r=e.exports=o(2)(),r.push([e.i,"#previewBox{width:100%}#previewBox img{max-width:60%}",""])}});
//# sourceMappingURL=45.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-chat-Groupim"],{"26b1":function(t,e,i){"use strict";i.r(e);var a=i("3284"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},3284:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("8e6e"),i("ac6a"),i("456d"),i("a481");var n=a(i("bd86")),o=a(i("8053")),s=a(i("5e4e")),c=i("2f62");function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){(0,n.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var d=1,b=3,u=4,h={computed:l({},(0,c.mapState)(["SocketState"])),components:{emotion:o.default},data:function(){return{textMsg:"",isHistoryLoading:!1,scrollAnimation:!1,scrollTop:0,scrollToView:"",msgList:[],msgImgList:[],myuid:0,dstid:0,toName:"",isVoice:!1,voiceTis:"按住 说话",recordTis:"手指上滑 取消发送",recording:!1,willStop:!1,initPoint:{identifier:0,Y:0},recordTimer:null,recordLength:0,AUDIO:uni.createInnerAudioContext(),playMsgid:null,VoiceTimer:null,popupLayerClass:"",hideMore:!0,hideEmoji:!0,emojiList:[{}],emojiPath:"",windowsState:"",redenvelopeData:{rid:null,from:null,face:null,blessing:null,money:null}}},onLoad:function(t){var e=this;this.myuid=uni.getStorageSync("UID"),this.dstid=t.id,this.toName=t.name,uni.setNavigationBarTitle({title:this.toName+""}),this.getMsgList(),this.AUDIO.onEnded((function(t){e.playMsgid=null})),this.emojiList=s.default.imgArr[1].emojiList},onShow:function(){},watch:{"SocketState.groupChat":function(t){for(var e=this.$store.state.SocketState.groupChat,i=0;i<t.length;i++)t[i].dstid==this.dstid&&(this.screenMsg(t[i]),e.splice(i,1),this.$store.state.SocketState.groupChat=e)}},methods:{isScrollBottom:function(){var t=this;setTimeout((function(){uni.createSelectorQuery().select(".chatBox").boundingClientRect((function(e){t.isIos?scrennH<e.height&&(t.scrollTop=e.height-scrennH):androidH<e.height&&(t.scrollTop=e.height-androidH+androidOff)})).exec()}),100)},yuyintonghua:function(){this.showtext()},weizhi:function(){this.showtext()},yuyinshuru:function(){this.showtext()},meShouchang:function(){this.showtext()},userinfo:function(){this.showtext()},showtext:function(){uni.showToast({title:"敬请期待",icon:"none"})},screenMsg:function(t){if("system"==t.type)switch(t.media){case d:this.addSystemTextMsg(t);break;case"redEnvelope":this.addSystemRedEnvelopeMsg(t);break}else if("user"==t.type){switch(t.media){case d:this.addTextMsg(t);break;case b:this.addVoiceMsg(t);break;case u:this.addImgMsg(t);break;case"redEnvelope":this.addRedEnvelopeMsg(t);break}t.userid!=this.myuid&&uni.vibrateLong()}this.$nextTick((function(){this.scrollToView="msg"+t.id}))},loadHistory:function(t){},getMsgList:function(){},setPicSize:function(t){var e=uni.upx2px(350),i=uni.upx2px(350);if(t.w>e||t.h>i){var a=t.w/t.h;t.w=a>1?e:i*a,t.h=a>1?e/a:i}return t},showMore:function(){this.isVoice=!1,this.hideEmoji=!0,this.hideMore?(this.hideMore=!1,this.openDrawer()):this.hideDrawer()},openDrawer:function(){this.popupLayerClass="showLayer"},hideDrawer:function(){var t=this;this.popupLayerClass="",setTimeout((function(){t.hideMore=!0,t.hideEmoji=!0}),150)},chooseImage:function(){this.getImage("album")},camera:function(){this.getImage("camera")},handRedEnvelopes:function(){this.showtext()},getImage:function(t){var e=this;this.hideDrawer(),uni.chooseImage({sourceType:[t],sizeType:["original","compressed"],success:function(t){for(var i=function(i){uni.getImageInfo({src:t.tempFilePaths[i],success:function(a){var n={url:t.tempFilePaths[i],w:a.width,h:a.height};e.sendMsg(n,"img")}})},a=0;a<t.tempFilePaths.length;a++)i(a)}})},chooseEmoji:function(){this.hideMore=!0,this.hideEmoji?(this.hideEmoji=!1,this.openDrawer()):this.hideDrawer()},addEmoji:function(t){if("[删除]"===t.emojiItem.alt){var e,i=this.textMsg.length-1,a=this.textMsg.lastIndexOf("["),n=this.textMsg.lastIndexOf("]"),o=n-a;return e=-1!=n&&n===i&&o>=2&&o<=4?this.textMsg.slice(0,a):this.textMsg.slice(0,i),void(this.textMsg=e)}this.emojiList=s.default.imgArr[t.groupIndex].emojiList,this.emojiPath=s.default.imgArr[t.groupIndex].emojiPath,!1===t.minEmoji?this.sendBigEmoji(t.emojiItem.url):this.textMsg+=t.emojiItem.alt},sendBigEmoji:function(t){if(this.hideDrawer(),t){var e='<img style="width:48px;height:48px;" src="'+this.emojiPath+t+'">',i='<div style="align-items: center;word-wrap:break-word;">'+e+"</div>",a={text:i};this.sendMsg(a,"text"),this.textMsg=""}},textareaFocus:function(){"showLayer"==this.popupLayerClass&&0==this.hideMore&&this.hideDrawer()},sendText:function(){if(this.hideDrawer(),this.textMsg){var t=this.replaceEmoji(this.textMsg);this.sendMsg(t,d),this.textMsg=""}},replaceEmoji:function(t){var e=this,i=t.replace(/\[([^(\]|\[)]*)\]/g,(function(t,i){for(var a=0;a<e.emojiList.length;a++)for(var n=e.emojiList[a],o=0;o<n.length;o++){var s=n[o];if(s.alt==t){var c=e.emojiPath,r='<img style="width:24px;height:24px;" src="'+c+s.url+'">';return r}}}));return'<div style="align-items: center;word-wrap:break-word;">'+i+"</div>"},sendMsg:function(t,e){var i,a=new Date,o=(i={userid:this.myuid,dstid:parseInt(this.dstid),cmd:11,type:"user",media:e,content:t,time:a.getHours()+":"+a.getMinutes()},(0,n.default)(i,"type","user"),(0,n.default)(i,"username","大黑哥"),(0,n.default)(i,"face","/static/img/face.jpg"),i);this.$store.commit("webSocketSend",o)},addTextMsg:function(t){this.msgList.push(t)},addVoiceMsg:function(t){this.msgList.push(t)},addImgMsg:function(t){t.msg.content=this.setPicSize(t.msg.content),this.msgImgList.push(t.msg.content.url),this.msgList.push(t)},addRedEnvelopeMsg:function(t){this.msgList.push(t)},addSystemTextMsg:function(t){this.msgList.push(t)},addSystemRedEnvelopeMsg:function(t){this.msgList.push(t)},openRedEnvelope:function(t,e){var i=this,a=t.content.rid;uni.showLoading({title:"加载中..."}),setTimeout((function(){0==a?i.redenvelopeData={rid:0,from:"大黑哥",face:"/static/img/im/face/face.jpg",blessing:"恭喜发财，大吉大利",money:"已领完"}:(i.redenvelopeData={rid:1,from:"售后客服008",face:"/static/img/im/face/face_2.jpg",blessing:"恭喜发财",money:"0.01"},t.content.isReceived||(i.sendSystemMsg({text:"你领取了"+(t.userinfo.uid==i.myuid?"自己":t.userinfo.username)+"的红包"},"redEnvelope"),i.msgList[e].msg.content.isReceived=!0)),uni.hideLoading(),i.windowsState="show"}),200)},closeRedEnvelope:function(){var t=this;this.windowsState="hide",setTimeout((function(){t.windowsState=""}),200)},sendSystemMsg:function(t,e){var i=this.msgList[this.msgList.length-1].msg.id;i++;var a={type:"system",msg:{id:i,type:e,content:t}};this.screenMsg(a)},toDetails:function(t){uni.navigateTo({url:"HM-details/HM-details?rid="+t})},showPic:function(t){uni.previewImage({indicator:"none",current:t.content.url,urls:this.msgImgList})},playVoice:function(t){this.playMsgid=t.id,this.AUDIO.src=t.content.url,this.$nextTick((function(){this.AUDIO.play()}))},voiceBegin:function(t){t.touches.length>1||(this.initPoint.Y=t.touches[0].clientY,this.initPoint.identifier=t.touches[0].identifier,this.RECORDER.start({format:"mp3"}))},recordBegin:function(t){var e=this;this.recording=!0,this.voiceTis="松开 结束",this.recordLength=0,this.recordTimer=setInterval((function(){e.recordLength++}),1e3)},voiceCancel:function(){this.recording=!1,this.voiceTis="按住 说话",this.recordTis="手指上滑 取消发送",this.willStop=!0,this.RECORDER.stop()},voiceIng:function(t){if(this.recording){var e=t.touches[0];this.initPoint.Y-e.clientY>=uni.upx2px(100)?(this.willStop=!0,this.recordTis="松开手指 取消发送"):(this.willStop=!1,this.recordTis="手指上滑 取消发送")}},voiceEnd:function(t){this.recording&&(this.recording=!1,this.voiceTis="按住 说话",this.recordTis="手指上滑 取消发送",this.RECORDER.stop())},recordEnd:function(t){if(clearInterval(this.recordTimer),!this.willStop){var e={length:0,url:t.tempFilePath},i=parseInt(this.recordLength/60),a=this.recordLength%60;i=i<10?"0"+i:i,a=a<10?"0"+a:a,e.length=i+":"+a,this.sendMsg(e,"voice")}this.willStop=!1},switchVoice:function(){this.hideDrawer(),this.isVoice=!this.isVoice},discard:function(){}}};e.default=h},"39c9":function(t,e,i){"use strict";i.r(e);var a=i("a0dd"),n=i("26b1");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("7ebd");var s,c=i("f0c5"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"8508aa1c",null,!1,a["a"],s);e["default"]=r.exports},"7ebd":function(t,e,i){"use strict";var a=i("ee2d"),n=i.n(a);n.a},a0dd:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"content",on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.hideDrawer.apply(void 0,arguments)}}},[a("v-uni-scroll-view",{staticClass:"msg-list",attrs:{"scroll-y":"true","scroll-with-animation":t.scrollAnimation,"scroll-top":t.scrollTop,"scroll-into-view":t.scrollToView,"upper-threshold":"50"},on:{scrolltoupper:function(e){arguments[0]=e=t.$handleEvent(e),t.loadHistory.apply(void 0,arguments)}}},t._l(t.msgList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"row",attrs:{id:"msg"+e.userid}},["user"==e.type?[e.userid==t.myuid?a("v-uni-view",{staticClass:"my"},[a("v-uni-view",{staticClass:"left"},[1==e.media?a("v-uni-view",{staticClass:"bubble"},[a("v-uni-rich-text",{attrs:{nodes:e.content}})],1):t._e()],1),a("v-uni-view",{staticClass:"right"},[a("v-uni-image",{attrs:{src:e.face}})],1)],1):t._e(),e.userid!=t.myuid?a("v-uni-view",{staticClass:"other"},[a("v-uni-view",{staticClass:"left"},[a("v-uni-image",{attrs:{src:e.face}})],1),a("v-uni-view",{staticClass:"right"},[a("v-uni-view",{staticClass:"username"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(e.username))]),a("v-uni-view",{staticClass:"time"},[t._v(t._s(e.time))])],1),1==e.media?a("v-uni-view",{staticClass:"bubble"},[a("v-uni-rich-text",{attrs:{nodes:e.content}})],1):t._e()],1)],1):t._e()]:t._e()],2)})),1)],1),a("v-uni-view",{staticClass:"popup-layer",class:t.popupLayerClass,on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.discard.apply(void 0,arguments)}}},[a("emotion",{class:{hidden:t.hideEmoji},on:{addEmoji:function(e){arguments[0]=e=t.$handleEvent(e),t.addEmoji.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"more-layer",class:{hidden:t.hideMore}},[a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImage.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"icon tupian2"})],1),a("v-uni-view",{staticClass:"box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.camera.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"icon paizhao"})],1),a("v-uni-view",{staticClass:"box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handRedEnvelopes.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"icon hongbao"})],1),a("v-uni-view",{staticClass:"box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.yuyintonghua.apply(void 0,arguments)}}},[a("v-uni-image",{staticStyle:{"font-size":"16px",width:"32px",height:"32px"},attrs:{src:i("d381")}})],1),a("v-uni-view",{staticClass:"box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.weizhi.apply(void 0,arguments)}}},[a("v-uni-image",{staticStyle:{"font-size":"16px",width:"32px",height:"32px"},attrs:{src:i("3d2f")}})],1),a("v-uni-view",{staticClass:"box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.yuyinshuru.apply(void 0,arguments)}}},[a("v-uni-image",{staticStyle:{"font-size":"16px",width:"32px",height:"32px"},attrs:{src:i("0df0")}})],1),a("v-uni-view",{staticClass:"box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.meShouchang.apply(void 0,arguments)}}},[a("v-uni-image",{staticStyle:{"font-size":"16px",width:"32px",height:"32px"},attrs:{src:i("f42f")}})],1),a("v-uni-view",{staticClass:"box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.userinfo.apply(void 0,arguments)}}},[a("v-uni-image",{staticStyle:{"font-size":"16px",width:"32px",height:"32px"},attrs:{src:i("e9f2")}})],1)],1)],1)],1),a("v-uni-view",{staticClass:"input-box",class:t.popupLayerClass,on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.discard.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showMore.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"icon add"})],1),a("v-uni-view",{staticClass:"textbox"},[a("v-uni-view",{staticClass:"voice-mode",class:[t.isVoice?"":"hidden",t.recording?"recording":""],on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.voiceBegin.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.voiceIng.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.voiceEnd.apply(void 0,arguments)},touchcancel:function(e){arguments[0]=e=t.$handleEvent(e),t.voiceCancel.apply(void 0,arguments)}}},[t._v(t._s(t.voiceTis))]),a("v-uni-view",{staticClass:"text-mode",class:t.isVoice?"hidden":""},[a("v-uni-view",{staticClass:"box"},[a("v-uni-textarea",{attrs:{"auto-height":"true"},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.textareaFocus.apply(void 0,arguments)}},model:{value:t.textMsg,callback:function(e){t.textMsg=e},expression:"textMsg"}})],1),a("v-uni-view",{staticClass:"em",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseEmoji.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"icon biaoqing"})],1)],1)],1),a("v-uni-view",{staticClass:"send",class:t.isVoice?"hidden":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendText.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"btn"},[t._v("发送")])],1)],1),a("v-uni-view",{staticClass:"record",class:t.recording?"":"hidden"},[a("v-uni-view",{staticClass:"ing",class:t.willStop?"hidden":""},[a("v-uni-view",{staticClass:"icon luyin2"})],1),a("v-uni-view",{staticClass:"cancel",class:t.willStop?"":"hidden"},[a("v-uni-view",{staticClass:"icon chehui"})],1),a("v-uni-view",{staticClass:"tis",class:t.willStop?"change":""},[t._v(t._s(t.recordTis))])],1),a("v-uni-view",{staticClass:"windows",class:t.windowsState},[a("v-uni-view",{staticClass:"mask",on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.discard.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeRedEnvelope.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"layer",on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.discard.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"open-redenvelope"},[a("v-uni-view",{staticClass:"top"},[a("v-uni-view",{staticClass:"close-btn"},[a("v-uni-view",{staticClass:"icon close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeRedEnvelope.apply(void 0,arguments)}}})],1),a("v-uni-image",{attrs:{src:"/static/img/im/face/face_1.jpg"}})],1),a("v-uni-view",{staticClass:"from"},[t._v("来自"+t._s(t.redenvelopeData.from))]),a("v-uni-view",{staticClass:"blessing"},[t._v(t._s(t.redenvelopeData.blessing))]),a("v-uni-view",{staticClass:"money"},[t._v(t._s(t.redenvelopeData.money))]),a("v-uni-view",{staticClass:"showDetails",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toDetails(t.redenvelopeData.rid)}}},[t._v("查看领取详情"),a("v-uni-view",{staticClass:"icon to"})],1)],1)],1)],1)],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},bd81:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'uni-page-body[data-v-8508aa1c]{background-color:#e5e5e5}@font-face{font-family:HMfont-home;src:url("data:application/x-font-woff2;charset=utf-8;base64,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") format("woff2")}.icon[data-v-8508aa1c]{font-family:HMfont-home!important;font-size:%?56?%;font-style:normal;color:#333}.icon.biaoqing[data-v-8508aa1c]:before{content:"\\e797"}.icon.jianpan[data-v-8508aa1c]:before{content:"\\e7b2"}.icon.yuyin[data-v-8508aa1c]:before{content:"\\e805"}.icon.tupian[data-v-8508aa1c]:before{content:"\\e639"}.icon.chehui[data-v-8508aa1c]:before{content:"\\e904"}.icon.luyin[data-v-8508aa1c]:before{content:"\\e905"}.icon.luyin2[data-v-8508aa1c]:before{content:"\\e677"}.icon.other-voice[data-v-8508aa1c]:before{content:"\\e667"}.icon.my-voice[data-v-8508aa1c]:before{content:"\\e906"}.icon.hongbao[data-v-8508aa1c]:before{content:"\\e626"}.icon.tupian2[data-v-8508aa1c]:before{content:"\\e674"}.icon.paizhao[data-v-8508aa1c]:before{content:"\\e63e"}.icon.add[data-v-8508aa1c]:before{content:"\\e655"}.icon.close[data-v-8508aa1c]:before{content:"\\e607"}.icon.to[data-v-8508aa1c]:before{content:"\\e675"}.hidden[data-v-8508aa1c]{display:none!important}.popup-layer[data-v-8508aa1c]{-webkit-transition:all .15s linear;transition:all .15s linear;width:100%;height:64vw;padding-bottom:%?30?%;background-color:#f3f3f3;border-top:solid %?1?% #ddd;position:fixed;z-index:20;top:100%}.popup-layer.showLayer[data-v-8508aa1c]{-webkit-transform:translate3d(0,-64vw,0);transform:translate3d(0,-64vw,0)}.popup-layer .more-layer[data-v-8508aa1c]{width:100%;height:64vw}.popup-layer .more-layer .list[data-v-8508aa1c]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.popup-layer .more-layer .list .box[data-v-8508aa1c]{width:18vw;height:18vw;border-radius:%?20?%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:5vw 3vw 5vw 4vw}.popup-layer .more-layer .list .box .icon[data-v-8508aa1c]{font-size:%?70?%}.input-box[data-v-8508aa1c]{width:100%;min-height:%?100?%;padding:0 1%;background-color:#f2f2f2;display:-webkit-box;display:-webkit-flex;display:flex;position:fixed;z-index:20;bottom:%?-2?%;-webkit-transition:all .15s linear;transition:all .15s linear;border-bottom:solid %?1?% #ddd}.input-box.showLayer[data-v-8508aa1c]{-webkit-transform:translate3d(0,-64vw,0);transform:translate3d(0,-64vw,0)}.input-box .voice[data-v-8508aa1c], .input-box .more[data-v-8508aa1c]{-webkit-flex-shrink:0;flex-shrink:0;width:%?90?%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.input-box .send[data-v-8508aa1c]{\nmargin-left:%?20?%;\n-webkit-flex-shrink:0;flex-shrink:0;width:%?100?%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.input-box .send .btn[data-v-8508aa1c]{width:%?90?%;height:%?56?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:-webkit-linear-gradient(left,#f09b37,#eb632c);background:linear-gradient(90deg,#f09b37,#eb632c);color:#fff;border-radius:%?6?%;font-size:%?24?%}.input-box .textbox[data-v-8508aa1c]{width:100%;min-height:%?70?%;margin-top:%?15?%}.input-box .textbox .voice-mode[data-v-8508aa1c]{width:calc(100% - %?2?%);height:%?68?%;border-radius:%?70?%;border:solid %?1?% #cdcdcd;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;background-color:#fff;color:#555}.input-box .textbox .voice-mode.recording[data-v-8508aa1c]{background-color:#e5e5e5}.input-box .textbox .text-mode[data-v-8508aa1c]{width:100%;min-height:%?70?%;display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;border-radius:%?40?%}.input-box .textbox .text-mode .box[data-v-8508aa1c]{width:100%;padding-left:%?30?%;min-height:%?70?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.input-box .textbox .text-mode .box uni-textarea[data-v-8508aa1c]{width:100%}.input-box .textbox .text-mode .em[data-v-8508aa1c]{-webkit-flex-shrink:0;flex-shrink:0;width:%?80?%;padding-left:%?10?%;height:%?70?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.record[data-v-8508aa1c]{width:40vw;height:40vw;position:fixed;top:55%;left:30%;background-color:rgba(0,0,0,.6);border-radius:%?20?%}.record .ing[data-v-8508aa1c]{width:100%;height:30vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}@-webkit-keyframes volatility-data-v-8508aa1c{0%{background-position:0 130%}20%{background-position:0 150%}30%{background-position:0 155%}40%{background-position:0 150%}50%{background-position:0 145%}70%{background-position:0 150%}80%{background-position:0 155%}90%{background-position:0 140%}100%{background-position:0 135%}}@keyframes volatility-data-v-8508aa1c{0%{background-position:0 130%}20%{background-position:0 150%}30%{background-position:0 155%}40%{background-position:0 150%}50%{background-position:0 145%}70%{background-position:0 150%}80%{background-position:0 155%}90%{background-position:0 140%}100%{background-position:0 135%}}.record .ing .icon[data-v-8508aa1c]{background-image:-webkit-linear-gradient(top,#f09b37,#fff 50%);background-image:linear-gradient(180deg,#f09b37,#fff 50%);background-size:100% 200%;-webkit-animation:volatility-data-v-8508aa1c 1.5s ease-in-out -1.5s infinite alternate;animation:volatility-data-v-8508aa1c 1.5s ease-in-out -1.5s infinite alternate;-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:%?150?%;color:#f09b37}.record .cancel[data-v-8508aa1c]{width:100%;height:30vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.record .cancel .icon[data-v-8508aa1c]{color:#fff;font-size:%?150?%}.record .tis[data-v-8508aa1c]{width:100%;height:10vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;color:#fff}.record .tis.change[data-v-8508aa1c]{color:#f09b37}.content[data-v-8508aa1c]{width:100%}.content .msg-list[data-v-8508aa1c]{width:96%;padding:0 2%;position:absolute;top:0;bottom:%?100?%}.content .msg-list .loading[data-v-8508aa1c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}@-webkit-keyframes stretchdelay-data-v-8508aa1c{0%, 40%, 100%{-webkit-transform:scaleY(.6);transform:scaleY(.6)}20%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes stretchdelay-data-v-8508aa1c{0%, 40%, 100%{-webkit-transform:scaleY(.6);transform:scaleY(.6)}20%{-webkit-transform:scaleY(1);transform:scaleY(1)}}.content .msg-list .loading .spinner[data-v-8508aa1c]{margin:%?20?% 0;width:%?60?%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.content .msg-list .loading .spinner uni-view[data-v-8508aa1c]{background-color:#f06c7a;height:%?50?%;width:%?6?%;border-radius:%?6?%;-webkit-animation:stretchdelay-data-v-8508aa1c 1.2s infinite ease-in-out;animation:stretchdelay-data-v-8508aa1c 1.2s infinite ease-in-out}.content .msg-list .loading .spinner .rect2[data-v-8508aa1c]{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.content .msg-list .loading .spinner .rect3[data-v-8508aa1c]{-webkit-animation-delay:-1s;animation-delay:-1s}.content .msg-list .loading .spinner .rect4[data-v-8508aa1c]{-webkit-animation-delay:-.9s;animation-delay:-.9s}.content .msg-list .loading .spinner .rect5[data-v-8508aa1c]{-webkit-animation-delay:-.8s;animation-delay:-.8s}.content .msg-list .row[data-v-8508aa1c]{padding:%?20?% 0}.content .msg-list .row .system[data-v-8508aa1c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.content .msg-list .row .system uni-view[data-v-8508aa1c]{padding:0 %?30?%;height:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#c9c9c9;color:#fff;font-size:%?24?%;border-radius:%?40?%}.content .msg-list .row .system .red-envelope uni-image[data-v-8508aa1c]{margin-right:%?5?%;width:%?30?%;height:%?30?%}.content .msg-list .row[data-v-8508aa1c]:first-child{margin-top:%?20?%}.content .msg-list .row .my .left[data-v-8508aa1c], .content .msg-list .row .other .right[data-v-8508aa1c]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex}.content .msg-list .row .my .left .bubble[data-v-8508aa1c], .content .msg-list .row .other .right .bubble[data-v-8508aa1c]{max-width:70%;min-height:%?50?%;border-radius:%?10?%;padding:%?15?% %?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;word-break:break-word}.content .msg-list .row .my .left .bubble.img[data-v-8508aa1c], .content .msg-list .row .other .right .bubble.img[data-v-8508aa1c]{background-color:initial;padding:0;overflow:hidden}.content .msg-list .row .my .left .bubble.img uni-image[data-v-8508aa1c], .content .msg-list .row .other .right .bubble.img uni-image[data-v-8508aa1c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;max-width:%?350?%;max-height:%?350?%}.content .msg-list .row .my .left .bubble.red-envelope[data-v-8508aa1c], .content .msg-list .row .other .right .bubble.red-envelope[data-v-8508aa1c]{background-color:initial;padding:0;overflow:hidden;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.content .msg-list .row .my .left .bubble.red-envelope uni-image[data-v-8508aa1c], .content .msg-list .row .other .right .bubble.red-envelope uni-image[data-v-8508aa1c]{width:%?250?%;height:%?313?%}.content .msg-list .row .my .left .bubble.red-envelope .tis[data-v-8508aa1c], .content .msg-list .row .other .right .bubble.red-envelope .tis[data-v-8508aa1c]{position:absolute;top:6%;font-size:%?26?%;color:#9c1712}.content .msg-list .row .my .left .bubble.red-envelope .blessing[data-v-8508aa1c], .content .msg-list .row .other .right .bubble.red-envelope .blessing[data-v-8508aa1c]{position:absolute;bottom:14%;color:#e9b874;width:80%;text-align:center;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.content .msg-list .row .my .left .bubble.voice .icon[data-v-8508aa1c], .content .msg-list .row .other .right .bubble.voice .icon[data-v-8508aa1c]{font-size:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.content .msg-list .row .my .left .bubble.voice .icon[data-v-8508aa1c]:after, .content .msg-list .row .other .right .bubble.voice .icon[data-v-8508aa1c]:after{content:" ";width:%?53?%;height:%?53?%;border-radius:100%;position:absolute;box-sizing:border-box}.content .msg-list .row .my .left .bubble.voice .length[data-v-8508aa1c], .content .msg-list .row .other .right .bubble.voice .length[data-v-8508aa1c]{font-size:%?28?%}.content .msg-list .row .my .right[data-v-8508aa1c], .content .msg-list .row .other .left[data-v-8508aa1c]{-webkit-flex-shrink:0;flex-shrink:0;width:%?80?%;height:%?80?%}.content .msg-list .row .my .right uni-image[data-v-8508aa1c], .content .msg-list .row .other .left uni-image[data-v-8508aa1c]{width:%?80?%;height:%?80?%;border-radius:%?10?%}.content .msg-list .row .my[data-v-8508aa1c]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.content .msg-list .row .my .left[data-v-8508aa1c]{min-height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.content .msg-list .row .my .left .bubble[data-v-8508aa1c]{background-color:#f06c7a;color:#fff}.content .msg-list .row .my .left .bubble.voice .icon[data-v-8508aa1c]{color:#fff}.content .msg-list .row .my .left .bubble.voice .length[data-v-8508aa1c]{margin-right:%?20?%}@-webkit-keyframes my-play-data-v-8508aa1c{0%{-webkit-transform:translateX(80%);transform:translateX(80%)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes my-play-data-v-8508aa1c{0%{-webkit-transform:translateX(80%);transform:translateX(80%)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}.content .msg-list .row .my .left .bubble.play .icon[data-v-8508aa1c]:after{border-left:solid %?10?% rgba(240,108,122,.5);-webkit-animation:my-play-data-v-8508aa1c 1s linear infinite;animation:my-play-data-v-8508aa1c 1s linear infinite}.content .msg-list .row .my .right[data-v-8508aa1c]{margin-left:%?15?%}.content .msg-list .row .other[data-v-8508aa1c]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex}.content .msg-list .row .other .left[data-v-8508aa1c]{margin-right:%?15?%}.content .msg-list .row .other .right[data-v-8508aa1c]{-webkit-flex-wrap:wrap;flex-wrap:wrap}.content .msg-list .row .other .right .username[data-v-8508aa1c]{width:100%;height:%?45?%;font-size:%?24?%;color:#999;display:-webkit-box;display:-webkit-flex;display:flex}.content .msg-list .row .other .right .username .name[data-v-8508aa1c]{margin-right:%?50?%}.content .msg-list .row .other .right .bubble[data-v-8508aa1c]{background-color:#fff;color:#333}.content .msg-list .row .other .right .bubble.voice .icon[data-v-8508aa1c]{color:#333}.content .msg-list .row .other .right .bubble.voice .length[data-v-8508aa1c]{margin-left:%?20?%}@-webkit-keyframes other-play-data-v-8508aa1c{0%{-webkit-transform:translateX(-80%);transform:translateX(-80%)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes other-play-data-v-8508aa1c{0%{-webkit-transform:translateX(-80%);transform:translateX(-80%)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}.content .msg-list .row .other .right .bubble.play .icon[data-v-8508aa1c]:after{border-right:solid %?10?% hsla(0,0%,100%,.8);-webkit-animation:other-play-data-v-8508aa1c 1s linear infinite;animation:other-play-data-v-8508aa1c 1s linear infinite}.windows .mask[data-v-8508aa1c]{position:fixed;top:100%;width:100%;height:100%;z-index:1000;background-color:rgba(0,0,0,.6);opacity:0;-webkit-transition:opacity .2s ease-out;transition:opacity .2s ease-out}.windows .layer[data-v-8508aa1c]{position:fixed;width:80%;height:70%;left:10%;z-index:1001;border-radius:%?20?%;overflow:hidden;top:100%;-webkit-transform:scale3d(.5,.5,1);transform:scale3d(.5,.5,1);-webkit-transition:all .2s ease-out;transition:all .2s ease-out}.windows.show[data-v-8508aa1c]{display:block}.windows.show .mask[data-v-8508aa1c]{top:0;opacity:1}.windows.show .layer[data-v-8508aa1c]{-webkit-transform:translate3d(0,-85vh,0) scaleX(1);transform:translate3d(0,-85vh,0) scaleX(1)}.windows.hide[data-v-8508aa1c]{display:block}.windows.hide .mask[data-v-8508aa1c]{top:0;opacity:0}.open-redenvelope[data-v-8508aa1c]{width:100%;height:70vh;background-color:#cf3c35;position:relative}.open-redenvelope .top[data-v-8508aa1c]{width:100%;background-color:#fe5454;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;border-radius:0 0 100% 100%;box-shadow:inset 0 %?-20?% 0 #9c1712;margin-bottom:%?65?%}.open-redenvelope .top .close-btn[data-v-8508aa1c]{width:100%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;margin-bottom:%?30?%}.open-redenvelope .top .close-btn .icon[data-v-8508aa1c]{color:#9c1712;margin-top:%?10?%;margin-right:%?10?%}.open-redenvelope .top uni-image[data-v-8508aa1c]{width:%?130?%;height:%?130?%;border:solid %?12?% #cf3c35;border-radius:100%;margin-bottom:%?-65?%}.open-redenvelope .from[data-v-8508aa1c], .open-redenvelope .blessing[data-v-8508aa1c], .open-redenvelope .money[data-v-8508aa1c], .open-redenvelope .showDetails[data-v-8508aa1c]{width:90%;padding:%?5?% 5%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?32?%;color:#fff}.open-redenvelope .money[data-v-8508aa1c]{font-size:%?100?%;color:#f8d757;display:-webkit-box;display:-webkit-flex;display:flex;padding-top:%?20?%}.open-redenvelope .showDetails[data-v-8508aa1c]{position:absolute;bottom:%?20?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;color:#f8d757}.open-redenvelope .showDetails .icon[data-v-8508aa1c]{font-size:%?26?%;color:#f8d757}body.?%PAGE?%[data-v-8508aa1c]{background-color:#e5e5e5}',""]),t.exports=e},ee2d:function(t,e,i){var a=i("bd81");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("7d98151a",a,!0,{sourceMap:!1,shadowMode:!1})}}]);
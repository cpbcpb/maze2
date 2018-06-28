if (self.CavalryLogger) { CavalryLogger.start_js(["nUGAI"]); }

__d("UserContentWrapperUtils",["csx","cx"],(function(a,b,c,d,e,f,g,h){"use strict";a={getAllStrings:function(){return["userContentWrapper","fbUserContent","fbUserPost","fbUserStory","fbUserFeedStory","fbUserFeedStoryWrapper","fbFeedStory","fbFeedStoryWrapper"]},getCXLagging:function(){return"fbUserPost"},getCSXLagging:function(){return"fbUserPost"}};e.exports=a}),null);
__d("TextDelightPositioner",["cx","invariant","DOM","Style","ge"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=Object.freeze({ASPECT_FIT:0,ASPECT_FILL_WIDTH:1,ASPECT_FILL_HEIGHT:2,ASPECT_FILL:3,FIXED:4});a={makeAnimationContainer:function(a,c){__p&&__p();c=b("DOM").create("div",{className:"_2alo"},c);var d=b("DOM").create("div",{className:"_1yib"},c);if(!a.containerType||a.containerType=="contentFrame"){a=b("ge")("globalContainer");if(a){var e=getComputedStyle(a);b("Style").set(d,"top",a.offsetTop+"px");b("Style").set(d,"left",a.offsetLeft+"px");b("Style").set(d,"right",window.innerWidth-parseInt(e.getPropertyValue("width"),10)-a.offsetLeft+"px")}}return{wrapper:d,positioner:c}},positionAnimationContainer:function(a,c,d){__p&&__p();var e=a.wrapper;a=a.positioner;a||h(0);var f=parseInt(e.offsetWidth,10);e=parseInt(e.offsetHeight,10);var g=c.getRenderer().getIntrinsicSize(),j=g[0];g=g[1];var k=d.anchorX,l=d.anchorY;d=d.scaling;d==i.ASPECT_FIT?d=j/g<=f/e?i.ASPECT_FILL_HEIGHT:i.ASPECT_FILL_WIDTH:d==i.ASPECT_FILL&&(d=j/g<=f/e?i.ASPECT_FILL_WIDTH:i.ASPECT_FILL_HEIGHT);var m=0,n=0,o=0,p=0;switch(d){case i.ASPECT_FILL_WIDTH:d=g*f/j;m=(e-d)*(1-l);n=0;o=0;p=(e-d)*l;c.getRenderer().setHeight(d);break;case i.ASPECT_FILL_HEIGHT:l=j*e/g;m=0;n=(f-l)*k;o=(f-l)*(1-k);p=0;c.getRenderer().setWidth(l);break;default:throw new Error("Unknown scaling enum.")}b("Style").set(a,"bottom",m+"px");b("Style").set(a,"left",n+"px");b("Style").set(a,"right",o+"px");b("Style").set(a,"top",p+"px")}};e.exports=a}),null);
__d("TextDelightAnimation",["CSS","TextDelightPositioner"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c){this.$4=!1,this.$6=!0,this.$1=c,this.$5=a,this.$2=b("TextDelightPositioner").makeAnimationContainer(a,c.getElement())}a.prototype.onComplete=function(a){this.$1.onRepeatEnd(function(b){!b&&a&&a()})};a.prototype.show=function(){this.$4&&b("CSS").show(this.$2.wrapper),this.$7()};a.prototype.hide=function(){this.$4||(b("CSS").hide(this.$2.wrapper),this.$4=!0)};a.prototype.getRenderer=function(){return this.$1};a.prototype.getElement=function(){return this.$2.wrapper};a.prototype.needsReposition=function(){this.$6=!0,this.$4||this.$7()};a.prototype.$7=function(){this.$6&&(b("TextDelightPositioner").positionAnimationContainer(this.$2,this,this.$5),this.$6=!1)};e.exports=a}),null);
__d("DelightsTextTriggerTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:DelightsTextTriggerLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:DelightsTextTriggerLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:DelightsTextTriggerLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setAppID=function(a){this.$1.appid=a;return this};a.prototype.setAppversion=function(a){this.$1.appversion=a;return this};a.prototype.setCampaignID=function(a){this.$1.campaign_id=a;return this};a.prototype.setCommentAnimationEnabled=function(a){this.$1.comment_animation_enabled=a;return this};a.prototype.setCommentAnimationName=function(a){this.$1.comment_animation_name=a;return this};a.prototype.setCommentAnimationURL=function(a){this.$1.comment_animation_url=a;return this};a.prototype.setCommentAudioURL=function(a){this.$1.comment_audio_url=a;return this};a.prototype.setCommentEnabled=function(a){this.$1.comment_enabled=a;return this};a.prototype.setCommentHighlightEnabled=function(a){this.$1.comment_highlight_enabled=a;return this};a.prototype.setCommentTappingEnabled=function(a){this.$1.comment_tapping_enabled=a;return this};a.prototype.setCountry=function(a){this.$1.country=a;return this};a.prototype.setDeviceid=function(a){this.$1.deviceid=a;return this};a.prototype.setDidDownload=function(a){this.$1.did_download=a;return this};a.prototype.setDownloadSuccess=function(a){this.$1.download_success=a;return this};a.prototype.setDownloadURL=function(a){this.$1.download_url=a;return this};a.prototype.setDurationMs=function(a){this.$1.duration_ms=a;return this};a.prototype.setEntToken=function(a){this.$1.ent_token=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setExceptionCode=function(a){this.$1.exception_code=a;return this};a.prototype.setExceptionMessage=function(a){this.$1.exception_message=a;return this};a.prototype.setExceptionTrace=function(a){this.$1.exception_trace=a;return this};a.prototype.setHighlightColor=function(a){this.$1.highlight_color=a;return this};a.prototype.setHighlightWeight=function(a){this.$1.highlight_weight=a;return this};a.prototype.setIsemployee=function(a){this.$1.isemployee=a;return this};a.prototype.setKeyword=function(a){this.$1.keyword=a;return this};a.prototype.setName=function(a){this.$1.name=a;return this};a.prototype.setPostAnimationEnabled=function(a){this.$1.post_animation_enabled=a;return this};a.prototype.setPostAnimationName=function(a){this.$1.post_animation_name=a;return this};a.prototype.setPostAnimationURL=function(a){this.$1.post_animation_url=a;return this};a.prototype.setPostAudioURL=function(a){this.$1.post_audio_url=a;return this};a.prototype.setPostEnabled=function(a){this.$1.post_enabled=a;return this};a.prototype.setPostHighlightEnabled=function(a){this.$1.post_highlight_enabled=a;return this};a.prototype.setPostTappingEnabled=function(a){this.$1.post_tapping_enabled=a;return this};a.prototype.setReactionKey=function(a){this.$1.reaction_key=a;return this};a.prototype.setSessionid=function(a){this.$1.sessionid=a;return this};a.prototype.setTimeAlive=function(a){this.$1.time_alive=a;return this};c={appid:!0,appversion:!0,campaign_id:!0,comment_animation_enabled:!0,comment_animation_name:!0,comment_animation_url:!0,comment_audio_url:!0,comment_enabled:!0,comment_highlight_enabled:!0,comment_tapping_enabled:!0,country:!0,deviceid:!0,did_download:!0,download_success:!0,download_url:!0,duration_ms:!0,ent_token:!0,event:!0,exception_code:!0,exception_message:!0,exception_trace:!0,highlight_color:!0,highlight_weight:!0,isemployee:!0,keyword:!0,name:!0,post_animation_enabled:!0,post_animation_name:!0,post_animation_url:!0,post_audio_url:!0,post_enabled:!0,post_highlight_enabled:!0,post_tapping_enabled:!0,reaction_key:!0,sessionid:!0,time_alive:!0};e.exports=a}),null);
__d("TextDelightLoader",["Promise","Keyframes","TextDelightAnimation","TextDelightConfig","memoizeByReference"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("TextDelightConfig").animations,h=b("TextDelightConfig").campaigns;a="A-Za-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2183\u2184\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005\u3006\u3031-\u3035\u303b\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6e5\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";var i="(^|$|[^"+a+"])",j=b("memoizeByReference")(function(a){return new RegExp(i+"("+a.keywords.join("|").replace(/\\x{([A-Za-z0-9]+)}/g,function(a,b){return String.fromCharCode(parseInt(b,16))})+")"+i,"i")});function k(a){return Object.keys(h).map(function(a){return h[a]}).filter(function(b){return j(b).test(a)})}function l(a,b){a=h[a]&&h[a].surfaces[b];return a?g[a]:null}var m=b("memoizeByReference")(n);function n(a){return b("Keyframes").requestRenderer(a.uri,{projectName:"text_delights",assetID:a.id}).then(function(c){return new(b("TextDelightAnimation"))(a,c)})}c={load:function(a,c){var d=l(a,c);return d?m(d):b("Promise").reject("No animation for "+a+" surface "+c)},getCampaignRegex:j,findAndLoadKeywords:function(a,b){return k(a).map(function(a){return a.surfaces[b]}).filter(Boolean).map(function(a){return g[a]}).map(m)},getCampaigns:function(){return Object.keys(h).map(function(a){return h[a]})},clearCache:function(){m=b("memoizeByReference")(n)}};e.exports=c}),null);
__d("TextDelightController",["Arbiter","DelightsTextTriggerTypedLogger","DOM","Event","Parent","TextDelightConfig","TextDelightLoader","TextDelightSurface","UserContentWrapperUtils","$","ge","promiseDone","throttle"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("TextDelightConfig").options,h=1e3;a=250;var i=0,j=new Set();b("Arbiter").subscribe("pre_page_transition",function(){j.forEach(function(a){a.getRenderer().pause(),b("DOM").remove(a.getElement())}),j.clear()});b("Event").listen(window,"resize",b("throttle")(function(){j.forEach(function(a){return a.needsReposition()})},a));function k(a,b){__p&&__p();for(var a=a,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;e=b(e);if(e)return e}return null}function l(a,c){a=c.text;b("TextDelightLoader").findAndLoadKeywords(a,b("TextDelightSurface").COMMENT)}function m(a,c){a=c.text;b("TextDelightLoader").findAndLoadKeywords(a,b("TextDelightSurface").POST)}function n(){g.enabledPreloadSurfaces.post&&b("Arbiter").subscribe("potential_delight_in_post",b("throttle")(m,h)),g.enabledPreloadSurfaces.comment&&b("Arbiter").subscribe("potential_delight_in_comment",b("throttle")(l,h))}var o={init:function(){n()},playAnimation:function(a,c){i++,b("promiseDone")(b("TextDelightLoader").load(a,c),function(a){j.has(a)||(b("DOM").appendContent(document.body,a.getElement()),j.add(a)),a.getRenderer().onRepeatEnd(function(){a.hide()}).seekToProgress(0).play(),a.show(),i--})},attachClickListener:function(a,c,d,e){__p&&__p();var f=k([].concat(b("UserContentWrapperUtils").getAllStrings(),["photoUfiContainer","uiContextualLayerParent"]),function(c){return b("Parent").byClass(a,c)}),g;f&&(g=b("Event").listen(f,"mousemove",function(a){b("TextDelightLoader").load(c,d),g&&(g.remove(),g=null)}));var h=b("Event").listen(a,"click",function(){o.playAnimation(c,d),new(b("DelightsTextTriggerTypedLogger"))().setEvent(d===b("TextDelightSurface").POST?"delights_text_trigger_post_tapped":"delights_text_trigger_comment_tapped").setCampaignID(c).log(),e&&e()}),i=!1;return{remove:function(){if(i)return;i=!0;h.remove();g&&g.remove()}}},waitForElementToAttachListeners:function(a,c){if(b("ge")(a))o.attachClickListener(b("$")(a),c,b("TextDelightSurface").POST);else var d=b("Arbiter").subscribe("LitestandComposer/attachedToDOM",function(e,f){b("DOM").contains(b("$")(f),b("$")(a))&&(o.attachClickListener(b("$")(a),c,b("TextDelightSurface").POST),d.unsubscribe())}),e=b("Arbiter").subscribe("ConversationNubUtils/recheckTabVisibility",function(d,f){d=f&&f.tab&&f.tab.getRootDOM();d&&b("DOM").contains(d,b("$")(a))&&(o.attachClickListener(b("$")(a),c,b("TextDelightSurface").POST),e.unsubscribe())})},animationPlaying:function(){if(i>0)return!0;var a=0;j.forEach(function(b){b.getRenderer().isPlaying()&&a++});return a>0?!0:!1}};e.exports=o}),null);
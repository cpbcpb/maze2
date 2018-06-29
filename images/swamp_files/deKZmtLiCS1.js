if (self.CavalryLogger) { CavalryLogger.start_js(["rGr1J"]); }

__d("ChatSidebarSections",[],(function(a,b,c,d,e,f){e.exports={ADMINED_PAGES:"admined_pages",MORE_ONLINE_FRIENDS:"more_online_friends",MORE_ONLINE_COWORKERS:"more_online_coworkers",OFFLINE_USERS:"offline_users",ORDERED_LIST:"ordered_list",ORDERED_COWORKERS:"ordered_coworkers",TYPEAHEAD:"typeahead",NOW_PINNED_LIST:"now_pinned_list",NEARBY:"nearby",WORKPLACE_BOTS:"workplace_bots",WORKPLACE_OTHERS:"workplace_others",PYMM:"pymm",GROUPS:"groups"}}),null);
__d("SRXUIBadge.react",["cx","invariant","React","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.isInt=function(a){"use strict";return parseInt(a,10)===a};a.prototype.render=function(){"use strict";var a=this.props.count,c=this.props.maxcount;c==null&&(c=20);this.isInt(a)||h(0);this.isInt(c)||h(0);var d="_5ugh _5ugf _51lp"+(a>c?" _51lr":"")+(a===0?" hidden_elem":"");return b("React").createElement("span",{className:b("joinClasses")(this.props.className,d)},a>c?c:a)};function a(){"use strict";i.apply(this,arguments)}e.exports=a}),null);
__d("SRLayout.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){function a(a){return b("React").createElement("div",{className:b("joinClasses")(a.className,"_5aj7")},a.children)}e.exports=a}),null);
__d("SRLayoutColumn.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){function a(a){return b("React").createElement("div",{className:b("joinClasses")(a.className,"_4bl7")},a.children)}e.exports=a}),null);
__d("SRLayoutFillColumn.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){function a(a){return b("React").createElement("div",{className:b("joinClasses")(a.className,"_4bl9")},a.children)}e.exports=a}),null);
__d("SRLink.react",["React"],(function(a,b,c,d,e,f){"use strict";var g;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){return b("React").createElement("a",this.props,this.props.children)};function a(){g.apply(this,arguments)}e.exports=a}),null);
__d("SplitImage.react",["cx","Image.react","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";var a=this.props.size,c=this.props.srcs,d=this.props.border,e=this.props.className;if(c.length===0)return null;var f=null;c.length===1?f=this.$1(c[0],a):c.length===2?f=this.$2(c,a,d):f=this.$3(c,a,d);return b("React").createElement("div",{className:b("joinClasses")(e,"_55lt"),style:{width:a,height:a}},f)};a.prototype.$1=function(a,c){"use strict";return b("React").createElement(b("Image.react"),{src:a,width:c,height:c,alt:""})};a.prototype.$2=function(a,c,d){"use strict";var e=Math.floor(c/2),f=-Math.floor(e/2);d="_55lu"+(d?" _57xo":"");return b("React").createElement("div",null,b("React").createElement("div",{className:"_55lu",style:{width:e}},b("React").createElement(b("Image.react"),{src:a[0],width:c,height:c,style:{marginLeft:f},alt:""})),b("React").createElement("div",{className:d,style:{width:e}},b("React").createElement(b("Image.react"),{src:a[1],width:c,height:c,style:{marginLeft:f},alt:""})))};a.prototype.$3=function(a,c,d){"use strict";var e=Math.floor(c/3*2),f=-Math.floor((c-e)/2),g=Math.floor(c/2),h=c-e,i=-Math.floor((g-h)/2),j="_55lu"+(d?" _57pl":"");d="_55lu"+(d?" _57pm":"");return b("React").createElement("div",null,b("React").createElement("div",{className:j,style:{width:e}},b("React").createElement(b("Image.react"),{src:a[0],width:c,height:c,style:{marginLeft:f},alt:""})),b("React").createElement("div",{className:d,style:{width:h,height:g}},b("React").createElement(b("Image.react"),{src:a[1],width:g,height:g,style:{marginLeft:i},alt:""})),b("React").createElement("div",{className:"_55lu",style:{width:h,height:g}},b("React").createElement(b("Image.react"),{src:a[2],width:g,height:g,style:{marginLeft:i},alt:""})))};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("ChatSidebarAdminedPage.react",["cx","Bootloader","React","SplitImage.react","SRLayout.react","SRLayoutColumn.react","SRLayoutFillColumn.react","SRLink.react","SRXUIBadge.react","gkx"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.$2=function(){var a=String(this.props.page.id);(b("gkx")("AT4T9LO8V3BIOVcGOYPKxxsCiNDzy0HHXFfwezwsUTXaZjtufQoUfjAr_b0uxP3zESohJEtycMUpu9xvYr512cum")||b("gkx")("AT4Aq9ewKIFTl67cxoDAodIE6NOyKQZWxOTK7vUN4WSVpVwOKKYWwQCOkB7MMU0feig4qnlFrIZeyqu4hV61bOjlQn8Q2DP89kXsLrKS2wNNWQ"))&&b("Bootloader").loadModules(["ChatSidebarHoverCardV2"],function(b){b.show(a,this.$1)}.bind(this),"ChatSidebarAdminedPage.react");this.props.onMouseEnter&&this.props.onMouseEnter(a)}.bind(this),c}a.prototype.render=function(){var a=9,c=this.props.page,d=c.imgSrc,e=[];d!=null&&(e=[d]);return b("React").createElement("li",{className:"_12um _42fz","data-id":c.id,ref:function(a){this.$1=a}.bind(this),onMouseOver:this.$2},b("React").createElement("div",{className:"_55ln"},b("React").createElement("div",{className:"_55lp"},b("React").createElement(b("SRLayout.react"),null,b("React").createElement(b("SRLayoutColumn.react"),null,b("React").createElement(b("SRLink.react"),{href:c.uri},b("React").createElement("div",{className:"_55lq"},b("React").createElement(b("SplitImage.react"),{size:c.imgSize,srcs:e})))),b("React").createElement(b("SRLayoutFillColumn.react"),null,b("React").createElement(b("SRLink.react"),{className:"_224p",href:c.uri},b("React").createElement("div",{className:"_55lr"},c.name))),b("React").createElement(b("SRLayoutColumn.react"),{className:"_3p8_"},b("React").createElement("div",{className:"_5bon"},b("React").createElement(b("SRXUIBadge.react"),{className:"_4fsv",count:c.badgingCount,maxcount:a})))))))};e.exports=a}),null);
__d("ChatSidebarHeader.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";return b("React").createElement("div",{onClick:this.props.onClick,className:b("joinClasses")(this.props.className,"_55ob")},b("React").createElement("div",{className:"_55oc"},this.props.children))};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("ChatSidebarPageListContainer.react",["cx","ChatSidebarAdminedPage.react","React"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return b("React").createElement("ul",{className:"_4kqp"},a.adminedPages.map(function(c){return b("React").createElement(b("ChatSidebarAdminedPage.react"),{key:c.id,page:c,onMouseEnter:a.onMouseEnter})}))}e.exports=a}),null);
__d("ChatSidebarPageListContainerWrapper.react",["cx","fbt","Arbiter","ChatOptions","ChatSidebarHeader.react","ChatSidebarPageListContainer.react","ChatSidebarSections","React","SRLink.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=i.constructor).call.apply(a,[this].concat(d)),this.state={hideAdminedPages:this.props.hideAdminedPagesInitial},b}a.prototype.componentDidMount=function(){b("Arbiter").subscribe("chat/option-changed",function(a,c){a=c.name;a==="hide_admined_pages"&&this.setState({hideAdminedPages:b("ChatOptions").getSetting("hide_admined_pages")})}.bind(this))};a.prototype.render=function(){var a=3;if(this.props.adminedPages.length===0||this.state.hideAdminedPages)return null;var c=null;this.props.adminedPages.length>=a&&(c=b("React").createElement(b("SRLink.react"),{className:"_2l56",target:"_blank",href:this.props.yourPagesURI},h._("SEE ALL")));return b("React").createElement(b("React").Fragment,null,b("React").createElement(b("ChatSidebarHeader.react"),{className:"_4kqp",key:b("ChatSidebarSections").ADMINED_PAGES},b("React").createElement("div",{className:"_ohe lfloat"},h._("YOUR PAGES")),b("React").createElement("div",{className:"_ohf rfloat"},c)),b("React").createElement(b("ChatSidebarPageListContainer.react"),{adminedPages:this.props.adminedPages,key:"pages_section"}))};e.exports=a}),null);
__d("ScriptPathState",["Arbiter"],(function(a,b,c,d,e,f){__p&&__p();var g,h,i,j,k=100,l={setIsUIPageletRequest:function(a){i=a},setUserURISampleRate:function(a){j=a},reset:function(){g=null,h=!1,i=!1},_shouldUpdateScriptPath:function(){return h&&!i},_shouldSendURI:function(){return Math.random()<j},getParams:function(){var a={};l._shouldUpdateScriptPath()?l._shouldSendURI()&&g!==null&&(a.user_uri=g.substring(0,k)):a.no_script_path=1;return a}};b("Arbiter").subscribe("pre_page_transition",function(a,b){h=!0,g=b.to.getUnqualifiedURI().toString()});e.exports=a.ScriptPathState=l}),null);
__d("goOrReplace",[],(function(a,b,c,d,e,f){function a(a,b,c){c?a.replace(b):a.href==b?a.reload():a.href=b}e.exports=a}),null);
__d("AjaxPipeRequest",["invariant","Arbiter","AsyncRequest","AsyncRequestConfig","BigPipe","ContextualComponent","CSS","DOM","Env","PageEvents","PageletGK","PageletSet","PageNavigationStageLogger","ScriptPathState","URI","containsNode","ge","goOrReplace","performance","performanceAbsoluteNow"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("PageletGK").destroyDomAfterEventHandler,i,j=0;function k(a,c){__p&&__p();var d=b("ge")(a);if(!d)return;c||(d.style.minHeight="100px");c=b("PageletSet").getPageletIDs();for(var e=0;e<c.length;e++){var f=c[e];if(b("PageletSet").hasPagelet(f)){var g=b("PageletSet").getPagelet(f);b("containsNode")(d,g.getRoot())&&b("PageletSet").removePagelet(f)}}b("Arbiter").inform(b("PageEvents").AJAXPIPE_ONBEFORECLEARCANVAS,{canvasID:a});function i(a){var c=b("ContextualComponent").forNode(a);c&&c.unmount();b("DOM").empty(a)}h?(b("Arbiter").inform("pagelet/destroy",{id:null,root:d}),i(d)):(i(d),b("Arbiter").inform("pagelet/destroy",{id:null,root:d}))}function l(a,c){a=b("ge")(a);a&&!c&&(a.style.minHeight="100px")}function c(a,c,d){"use strict";__p&&__p();this._allowIrrelevantRequests=!1;this._canvas_id=a;this._uri=c;this._query_data=d;a=new(b("AsyncRequest"))();a.disableInteractionServerTracing();a.setReplaceTransportMarkers(!1);this._request=a;this._allow_cross_page_transition=!0;this._arbiter=new(b("Arbiter"))();this._requestID=j++}c.prototype.getArbiter=function(){"use strict";return this._arbiter};c.prototype.setData=function(a){"use strict";this._query_data=a;return this};c.prototype.getData=function(){"use strict";return this._query_data};c.prototype.setAllowCrossPageTransition=function(a){"use strict";this._allow_cross_page_transition=a;return this};c.prototype.setAppend=function(a){"use strict";this._append=a;return this};c.prototype._getAsyncRequestType=function(){"use strict";return b("AsyncRequestConfig").useFetchStreamAjaxPipeTransport?"useFetchWithIframeFallback":"useIframeTransport"};c.prototype.send=function(){"use strict";__p&&__p();this._arbiter.inform(b("PageEvents").AJAXPIPE_SEND,{rid:this._requestID,quickling:!!this._isQuickling,ts:b("performanceAbsoluteNow")()},b("Arbiter").BEHAVIOR_PERSISTENT);var a={ajaxpipe:1,ajaxpipe_token:b("Env").ajaxpipe_token};Object.assign(a,b("ScriptPathState").getParams());b("ScriptPathState").reset();var c=this._request;if(c==null)return this;c.setOption(this._getAsyncRequestType(),!0).setURI(this._uri).setData(Object.assign(a,this._query_data)).setPreBootloadHandler(this._preBootloadHandler.bind(this)).setInitialHandler(this._onInitialResponse.bind(this)).setHandler(this._onResponse.bind(this)).setMethod("GET").setReadOnly(!0).setAllowCrossPageTransition(this._allow_cross_page_transition).setAllowIrrelevantRequests(this._allowIrrelevantRequests);this._automatic?this._relevantRequest=i:i=this._request;if(this._isQuickling){a=b("performance").clearResourceTimings||b("performance").webkitClearResourceTimings;a&&a.call(b("performance"))}c.send();return this};c.prototype._preBootloadFirstResponse=function(a){"use strict";return!1};c.prototype._fireDomContentCallback=function(){"use strict";var a=this._request;a&&a.cavalry&&a.cavalry.setTimeStamp("t_domcontent");this._arbiter.inform(b("PageEvents").AJAXPIPE_DOMREADY,!0,b("Arbiter").BEHAVIOR_STATE)};c.prototype._fireOnloadCallback=function(){"use strict";window.console&&console.timeStamp&&console.timeStamp('perf_trace {"name": "e2e", "parent": "PageEvents.AJAXPIPE_ONLOAD"}');var a=this._request;a!=null&&a.cavalry&&(a.cavalry.setTimeStamp("t_hooks"),a.cavalry.setTimeStamp("t_layout"),a.cavalry.setTimeStamp("t_onload"));this._arbiter.inform(b("PageEvents").AJAXPIPE_ONLOAD,{lid:this.pipe.lid,rid:this._requestID,ts:b("performanceAbsoluteNow")()},b("Arbiter").BEHAVIOR_STATE)};c.prototype._isRelevant=function(a){"use strict";return this._request===i||this._automatic&&this._relevantRequest===i||this._jsNonBlock||i!=null&&i.getAllowIrrelevantRequests()};c.prototype._preBootloadHandler=function(a){"use strict";var c=this._request,d=a.getPayload();if(!d||d.redirect||!this._isRelevant(a))return!1;var e=!1;a.is_first&&(!this._append&&!this._displayCallback&&k(this._canvas_id,this._constHeight),e=this._preBootloadFirstResponse(a),c!=null||g(0),this.pipe=new(b("BigPipe"))({config:d.bigPipeConfig,arbiter:this._arbiter,rootNodeID:this._canvas_id,lid:c.lid,rid:this._requestID,isAjax:!0,domContentCallback:this._fireDomContentCallback.bind(this),onloadCallback:this._fireOnloadCallback.bind(this),domContentEvt:b("PageEvents").AJAXPIPE_DOMREADY,onloadEvt:b("PageEvents").AJAXPIPE_ONLOAD,jsNonBlock:this._jsNonBlock,automatic:this._automatic,displayCallback:this._displayCallback,allowIrrelevantRequests:this._allowIrrelevantRequests}),this.pipe.setPageID(c.lid));return e};c.prototype._redirect=function(c){"use strict";__p&&__p();if(c.redirect){if(c.force||!this.isPageActive(c.redirect)){var d=["ajaxpipe","ajaxpipe_token"].concat(this.getSanitizedParameters());b("PageNavigationStageLogger").setCookieForNavigation(c.redirect);b("PageNavigationStageLogger").setNote("ajaxpipe_redirect");b("PageNavigationStageLogger").updateCookie();b("goOrReplace")(window.location,new(b("URI"))(c.redirect).removeQueryData(d),!0)}else{d=a.PageTransitions;d.go(c.redirect,!0)}return!0}else return!1};c.prototype.isPageActive=function(a){"use strict";return!0};c.prototype.getSanitizedParameters=function(){"use strict";return[]};c.prototype._versionCheck=function(a){"use strict";return!0};c.prototype._onInitialResponse=function(a){"use strict";var b=a.getPayload();if(!this._isRelevant(a))return!1;if(!b)return!0;return this._redirect(b)||!this._versionCheck(b)?!1:!0};c.prototype._processFirstResponse=function(a){"use strict";this._arbiter.inform(b("PageEvents").AJAXPIPE_FIRST_RESPONSE,{lid:this.pipe.lid,quickling:!!this._isQuickling});a=a.getPayload();var c=b("ge")(this._canvas_id);a=a.canvas_class;c!=null&&a!=null&&b("CSS").setClass(c,a)};c.prototype.setFirstResponseCallback=function(a){"use strict";this._firstResponseCallback=a;return this};c.prototype.setFirstResponseHandler=function(a){"use strict";this._processFirstResponse=a;return this};c.prototype._onResponse=function(a){"use strict";__p&&__p();var c=a.payload;if(!this._isRelevant(a))return b("AsyncRequest").suppressOnloadToken;a.is_first&&(this._processFirstResponse(a),this._firstResponseCallback&&this._firstResponseCallback(),c.provides=c.provides||[],c.provides.push("uipage_onload"));if(c){if("content"in c.content){this._append&&(c.append=this._canvas_id);var d=c.content.content;delete c.content.content;c.content[this._canvas_id]=d}this.pipe.onPageletArrive(c)}a.is_last&&l(this._canvas_id,this._constHeight);return b("AsyncRequest").suppressOnloadToken};c.prototype.setNectarModuleDataSafe=function(a){"use strict";this._request!=null&&this._request.setNectarModuleDataSafe(a);return this};c.prototype.setFinallyHandler=function(a){"use strict";this._request!=null&&this._request.setFinallyHandler(a);return this};c.prototype.setErrorHandler=function(a){"use strict";this._request!=null&&this._request.setErrorHandler(a);return this};c.prototype.setTransportErrorHandler=function(a){"use strict";this._request!=null&&this._request.setTransportErrorHandler(a);return this};c.prototype.setResetHandler=function(a){"use strict";this._resetHandler=a;return this};c.prototype.abort=function(){"use strict";this._request!=null&&this._request.abort();this._reset();return this};c.prototype.abandon=function(){"use strict";this._request!=null&&this._request.abandon();this._reset();return this};c.prototype._reset=function(){"use strict";i==this._request&&(i=null),this._request=null,this._resetHandler&&this._resetHandler()};c.prototype.setJSNonBlock=function(a){"use strict";this._jsNonBlock=a;return this};c.prototype.setAutomatic=function(a){"use strict";this._automatic=a;return this};c.prototype.setDisplayCallback=function(a){"use strict";this._displayCallback=a;return this};c.prototype.setConstHeight=function(a){"use strict";this._constHeight=a;return this};c.prototype.setAllowIrrelevantRequests=function(a){"use strict";this._allowIrrelevantRequests=a;return this};c.prototype.getAsyncRequest=function(){"use strict";return this._request};c.getCurrentRequest=function(){"use strict";return i};c.setCurrentRequest=function(a){"use strict";i=a};c.clearCanvas=k;e.exports=c}),null);
__d("UIPageletContentCache",[],(function(a,b,c,d,e,f){a={cache:{},getContent:function(a){return a in this.cache?this.cache[a]:null},setContent:function(a,b){this.cache[a]=b}};e.exports=a}),null);
__d("UIPagelet",["ActorURI","AjaxPipeRequest","AsyncRequest","DOM","HTML","ScriptPathState","UIPageletContentCache","URI","emptyFunction","ge","isElementNode"],(function(a,b,c,d,e,f){__p&&__p();function g(a,c,d){"use strict";__p&&__p();var e=a&&b("isElementNode")(a)?a.id:a;this._id=e||null;this._element=b("ge")(a||b("DOM").create("div"));this._src=c||null;this._context_data=d||{};this._data={};this._handler=b("emptyFunction");this._request=null;this._use_ajaxpipe=!1;this._use_post_request=!1;this._is_bundle=!0;this._allow_cross_page_transition=!1;this._append=!1;this._cache_content=!1;this._content_cache_key=""}g.prototype.getElement=function(){"use strict";return this._element};g.prototype.setHandler=function(a){"use strict";this._handler=a;return this};g.prototype.go=function(a,b){"use strict";arguments.length>=2||typeof a==="string"?(this._src=a,this._data=b||{}):arguments.length==1&&(this._data=a);this.refresh();return this};g.prototype.setAllowCrossPageTransition=function(a){"use strict";this._allow_cross_page_transition=a;return this};g.prototype.setBundleOption=function(a){"use strict";this._is_bundle=a;return this};g.prototype.setErrorHandler=function(a){"use strict";this._errorHandler=a;return this};g.prototype.setTransportErrorHandler=function(a){"use strict";this.transportErrorHandler=a;return this};g.prototype.refresh=function(){"use strict";__p&&__p();if(this._use_ajaxpipe)b("ScriptPathState").setIsUIPageletRequest(!0),this._request=new(b("AjaxPipeRequest"))(this._id,this._src),this._request.setAppend(this._append).setConstHeight(this._constHeight).setJSNonBlock(this._jsNonblock).setAutomatic(this._automatic).setDisplayCallback(this._displayCallback).setFinallyHandler(this._finallyHandler),this._errorHandler&&this._request.setErrorHandler(this._errorHandler),this.transportErrorHandler&&this._request.setTransportErrorHandler(this.transportErrorHandler),this._allowIrrelevantRequests!=null&&this._request.setAllowIrrelevantRequests(this._allowIrrelevantRequests);else{if(this._cache_content){var a=b("UIPageletContentCache").getContent(this._content_cache_key);if(a!==null){this.handleContent(a);return this}}var c=function(a){this._request=null;a=b("HTML")(a.getPayload());this.handleContent(a);this._cache_content&&b("UIPageletContentCache").setContent(this._content_cache_key,a)}.bind(this),d=this._displayCallback,e=this._finallyHandler;this._request=new(b("AsyncRequest"))(this._src).setMethod("GET").setReadOnly(!0).setOption("bundle",this._is_bundle).setHandler(function(a){d?d(c.bind(null,a)):c(a),e&&e(a)});this._errorHandler&&this._request.setErrorHandler(this._errorHandler);this.transportErrorHandler&&this._request.setTransportErrorHandler(this.transportErrorHandler);this._use_post_request&&this._request.setMethod("POST")}a=babelHelpers["extends"]({},this._context_data,this._data);this._actorID&&(a[b("ActorURI").PARAMETER_ACTOR]=this._actorID);this._request.setAllowCrossPageTransition(this._allow_cross_page_transition).setData({data:JSON.stringify(a)}).send();return this};g.prototype.handleContent=function(a){"use strict";this._append?b("DOM").appendContent(this._element,a):b("DOM").setContent(this._element,a),this._handler()};g.prototype.cancel=function(){"use strict";this._request&&this._request.abort()};g.prototype.abandon=function(){"use strict";this._request&&this._request.abandon()};g.prototype.setUseAjaxPipe=function(a){"use strict";this._use_ajaxpipe=!!a;return this};g.prototype.setUsePostRequest=function(a){"use strict";this._use_post_request=!!a;return this};g.prototype.setAppend=function(a){"use strict";this._append=!!a;return this};g.prototype.setJSNonBlock=function(a){"use strict";this._jsNonblock=!!a;return this};g.prototype.setAutomatic=function(a){"use strict";this._automatic=!!a;return this};g.prototype.setDisplayCallback=function(a){"use strict";this._displayCallback=a;return this};g.prototype.setConstHeight=function(a){"use strict";this._constHeight=!!a;return this};g.prototype.setFinallyHandler=function(a){"use strict";this._finallyHandler=a;return this};g.prototype.setAllowIrrelevantRequests=function(a){"use strict";this._allowIrrelevantRequests=a;return this};g.prototype.setActorID=function(a){"use strict";this._actorID=a;return this};g.prototype.setCacheContent=function(a){"use strict";this._cache_content=a;return this};g.prototype.setContentCacheKey=function(a){"use strict";this._content_cache_key=a;return this};g.appendToInline=function(a,c){"use strict";a=b("ge")(a);c=b("ge")(c);if(a&&c){while(c.firstChild)b("DOM").appendContent(a,c.firstChild);b("DOM").remove(c)}};g.loadFromEndpoint=function(a,c,d,e){"use strict";__p&&__p();e=e||{};var f="/ajax/pagelet/generic.php/"+a;e.intern&&(f="/intern"+f);e.query&&(f=f+"?"+e.query);f=new(b("URI"))(f.replace(/\/+/g,"/"));e.subdomain&&f.setSubdomain(e.subdomain);var h=!1,i="";e.contentCacheKey&&(h=!0,i=a+","+String(e.contentCacheKey));a=new g(c,f,d).setUseAjaxPipe(e.usePipe).setBundleOption(e.bundle!==!1).setAppend(e.append).setJSNonBlock(e.jsNonblock).setAutomatic(e.automatic).setDisplayCallback(e.displayCallback).setConstHeight(e.constHeight).setAllowCrossPageTransition(e.crossPage).setFinallyHandler(e.finallyHandler||b("emptyFunction")).setErrorHandler(e.errorHandler).setTransportErrorHandler(e.transportErrorHandler).setAllowIrrelevantRequests(e.allowIrrelevantRequests).setActorID(e.actorID).setCacheContent(h).setContentCacheKey(i).setUsePostRequest(e.usePostRequest);e.handler&&a.setHandler(e.handler);a.go();return a};g.loadFromEndpointBatched=function(a,c,d){"use strict";__p&&__p();var e=a.slice(0,d),f=a.slice(d);if(f.length>0){a=e[e.length-1];var h=b("emptyFunction");a.options&&a.options.finallyHandler&&(h=a.options.finallyHandler);a.options=babelHelpers["extends"]({},a.options,{finallyHandler:function(){h(),window.setTimeout(function(){g.loadFromEndpointBatched(f,c,d)},1)}})}e.forEach(function(a){g.loadFromEndpoint(a.controller,a.target_element,a.data,babelHelpers["extends"]({},a.options,c,{bundle:!0}))})};e.exports=g}),null);
__d("XPageAdminHomePagePanelSaveSettingsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/homepage_panel/save_settings/",{selected_id:{type:"FBID"},collapse_state:{type:"Int"},refresh_panel:{type:"Bool",defaultValue:!1},click_target:{type:"String"}})}),null);
__d("PageHomepagePanelPagelet",["AsyncRequest","DOM","UIPagelet","URI","XPageAdminHomePagePanelSaveSettingsController","$"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="homepage_panel_pagelet_content";a={init:function(a){var c=b("XPageAdminHomePagePanelSaveSettingsController").getURIBuilder().setBool("refresh_panel",!0).getURI();c.addQueryData(b("URI").getRequestURI().getQueryData());new(b("AsyncRequest"))().setURI(c).setStatusElement(a).setErrorHandler(function(a){b("DOM").setContent(b("$")(g),"")}).send()},initWithAjax:function(){b("UIPagelet").loadFromEndpoint("PageHomepagePanelPagelet",g,{content_only:!0},{usePipe:!0,allowIrrelevantRequests:!0,displayCallback:function(a){return a()}})}};e.exports=a}),null);
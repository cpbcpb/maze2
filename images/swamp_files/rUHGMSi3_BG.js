if (self.CavalryLogger) { CavalryLogger.start_js(["13KL5"]); }

__d("MercurySearchSnippetResults",["MercuryAPIArgsSource","MercuryPayloadSource","MercuryServerDispatcher","MercuryServerPayloadPreprocessor","MercurySingletonMixin","MercuryThreadIDMap","MercuryThreadlistConstants","MessengerEnvironment","MessengerServerPayloadTransformer.bs","RangedCallbackManager"],(function(a,b,c,d,e,f){__p&&__p();var g=b("MessengerEnvironment").messengerui?b("MercuryAPIArgsSource").MESSENGER:b("MercuryAPIArgsSource").WEBMESSENGER,h={},i={},j=null,k=b("MercuryThreadlistConstants").WEBMESSENGER_SEARCH_SNIPPET_COUNT,l=b("MercuryThreadlistConstants").WEBMESSENGER_SEARCH_SNIPPET_LIMIT,m=b("MercuryThreadlistConstants").WEBMESSENGER_SEARCH_SNIPPET_MORE;function a(a){"use strict";this.$1=a,this.$2=b("MercuryServerPayloadPreprocessor").getForFBID(a),b("MercuryServerDispatcher").registerEndpoints({"/ajax/mercury/search_snippets.php":{request_user_id:a,mode:b("MercuryServerDispatcher").IMMEDIATE,handler:function(a){this.handleUpdate(a)}.bind(this)}}),this.$3=b("MercuryThreadIDMap").getForFBID(a)}a.prototype.getFBID=function(){"use strict";return this.$1};a.prototype.getThreadIDMap=function(){"use strict";return this.$3};a.prototype.getAllThreadSearchResults=function(a,b){"use strict";a&&n(this.$1,a,l,0,b)};a.prototype.getAllLocalThreadSearchResults=function(a,b){"use strict";if(a){var c=h[a];if(c){c=c.getCurrentArraySize();n(this.$1,a,0,c,b)}}};a.prototype.getAllThreadSearchMoreResults=function(a,b){"use strict";if(a){var c=h[a];if(c){c=c.getCurrentArraySize();n(this.$1,a,m,c,b)}}};a.prototype.getSingleThreadSearchResults=function(a,b,c){"use strict";if(!a||!b)return;o.call(this,a,b,k,0,c)};a.prototype.getSingleThreadSearchMoreResults=function(a,b,c){"use strict";__p&&__p();if(!a||!b)return;if(!i[b])return;var d=i[b][a];if(d){var e=d.num_total_snippets;d=d.snippets_cbm.getCurrentArraySize();e=e-d;if(e>0){e=e>m?m:e;o.call(this,a,b,e,d,c)}}};a.prototype.countSnippetsMatchingQueryInThread=function(a,b){"use strict";b=i[b][a];if(b)return b.num_total_snippets};a.prototype.findIndexOfSnippet=function(a,b,c,d){"use strict";d=t(a,b);a=d.getAllResources();for(var b=0;b<a.length;b++)if(c===a[b].message_id)return b};a.prototype.findSnippetAtIndex=function(a,b,c,d){"use strict";q(a,b,c),r.call(this,a,b,c,d)};a.prototype.handleUpdate=function(a){"use strict";__p&&__p();if(a.graphql_payload){var c=(a.graphql_payload.message_threads||[]).map(function(c){return b("MessengerServerPayloadTransformer.bs").transformThread(this.$1,c,a.is_page)}.bind(this));this.$2.handleUpdate({threads:c,payload_source:b("MercuryPayloadSource").SERVER_SEARCH})}else a.mercury_payload&&this.$2.handleUpdate(a.mercury_payload);var d=a.search_snippets||{};Object.keys(d).filter(function(a){return!!d[a]}).forEach(function(a){Object.keys(d[a]).forEach(function(b){if(!d[a][b].snippets)return;d[a][b].snippets.forEach(function(a){a.matched_keywords=p(a.matched_keywords)})})});c=a.offset;var e=[];for(var f in d){var g=d[f];for(var h in g){var j=g[h],k=a.other_user_fbid||a.thread_fbid,l=this.$3.getClientIDFromServerIDNow(h),m=j.snippets,n=t(f,l),o=n.getCurrentArraySize();if(!k){e.push(l);if(o)continue}else if(c!=o)continue;l=i[l][f];l.num_total_snippets=j.num_total_snippets;j=m?m.length:0;j>0&&n.addResourcesWithoutSorting(m,o);(!k||a.limit>j)&&(n.getCurrentArraySize()==l.num_total_snippets&&n.setReachedEndOfArray())}if(!k){m=s(f);o=m.getCurrentArraySize();c==o&&(m.addResourcesWithoutSorting(e,o),a.limit>e.length&&m.setReachedEndOfArray())}}};function n(a,b,c,d,e){__p&&__p();if(j&&!j.thread_id){var f=s(j.query);f.unsubscribe(j.subscriber_id);j=null}var f=s(b),g=d+c;g=f.executeOrEnqueue(0,g,function(a){var c={};for(var d=0;d<a.length;d++){var g=a[d],h=i[g][b];c[g]={num_total_snippets:h.num_total_snippets,snippets:h.snippets_cbm.getAllResources()}}g=f.hasReachedEndOfArray();e(c,g)});var h=f.getUnavailableResources(g);if(h.length){j={query:b,thread_id:null,subscriber_id:g};h={query:b,offset:d,limit:c+1,snippetLimit:k};h.identifier="thread_fbid";u(h,a)}}function o(a,b,c,d,e){__p&&__p();if(j&&j.thread_id){var f=t(j.query,j.thread_id);f.unsubscribe(j.subscriber_id);j=null}var f=t(a,b),g=d+c;g=f.executeOrEnqueue(0,g,function(){var d=f.getAllResources(),c=i[b][a].num_total_snippets;e(d,c)});var h=f.getUnavailableResources(g);if(h.length){j={query:a,thread_id:b,subscriber_id:g};h=this.getThreadIDMap().getServerIDFromClientIDNow(b);g={query:a,snippetOffset:d,snippetLimit:c,thread_fbid:h,identifier:"thread_fbid"};u(g,this.getFBID())}}function p(a){if(a instanceof Array){var b={};for(var c=0;c<a.length;c++)b[c.toString()]=a[c];return b}else return a}function q(a,b,c){}function r(a,b,c,d){__p&&__p();var e=i[b][a],f=e.snippets_cbm.getAllResources();e=e.num_total_snippets;var g=f.length;if(c<g){d(f[c].message_id);return}f=e-g;e=f>m?m:f;o.call(this,a,b,e,g,function(e,f){r.call(this,a,b,c,d)})}function s(a){h[a]||(h[a]=new(b("RangedCallbackManager"))());return h[a]}function t(a,c){i[c]||(i[c]={});var d=i[c][a];d||(d={num_total_snippets:-1,snippets_cbm:new(b("RangedCallbackManager"))()},i[c][a]=d);return d.snippets_cbm}function u(a,c){a.client=g,b("MercuryServerDispatcher").trySend("/ajax/mercury/search_snippets.php",a,null,c)}Object.assign(a,b("MercurySingletonMixin"));e.exports=a}),null);
__d("P2PPaymentRequest",["immutable","P2PPaymentRequestStatus"],(function(a,b,c,d,e,f){"use strict";var g;c=Math.round(Date.now()/1e3);g=babelHelpers.inherits(a,b("immutable").Record({amount:"",amountWithSymbol:"",creationTime:c,currency:"",currentStatus:b("P2PPaymentRequestStatus").INITED,groupThreadFBID:"",id:"",individualRequests:[],memoText:"",requestee:{},requester:{},statusDescription:"",transfer:{},transferID:"",updatedTime:c}));g&&g.prototype;function a(){g.apply(this,arguments)}e.exports=a}),null);
__d("P2PPaymentRequestsStore",["Arbiter","ChannelConstants","CurrentUser","EventEmitter","immutable","ImmutableObject","P2PActionConstants","P2PActions","P2PAPI","P2PChannelType","P2PDispatcher","P2PPaymentRequest","P2PPaymentRequestStatus"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("immutable").List,i=null,j=!1,k=null,l=!1,m=null,n=h(),o=!1,p=!1;c=babelHelpers.inherits(a,b("EventEmitter"));g=c&&c.prototype;function a(){g.constructor.call(this),b("Arbiter").subscribe(b("ChannelConstants").getArbiterType(b("P2PChannelType").PAYMENT_REQUEST_STATUS_CHANGED),this.handleChannelPaymentRequestStatusChanged.bind(this)),b("P2PDispatcher").register(this.onEventDispatched.bind(this))}a.prototype.onEventDispatched=function(a){__p&&__p();var c=a.data;a=a.type;switch(a){case b("P2PActionConstants").PAYMENT_REQUEST_INITIATED:o=!0;m=null;this.emit("change");break;case b("P2PActionConstants").PAYMENT_REQUEST_INITIATED_COMPLETE:o=!1;this.emit("change");break;case b("P2PActionConstants").PAYMENT_REQUEST_CREATED:this.handlePaymentRequestCreated(c);this.emit("change");break;case b("P2PActionConstants").PAYMENT_REQUEST_CREATED_ERROR:m=new(b("ImmutableObject"))(c.error);this.emit("change");break;case b("P2PActionConstants").PAYMENT_REQUEST_UPDATED:this.handlePaymentRequestUpdated(c);this.emit("change");break;case b("P2PActionConstants").PAYMENT_REQUEST_DECLINE_INITIATED:l=!0;k=null;this.emit("change");break;case b("P2PActionConstants").PAYMENT_REQUEST_DECLINED:l=!1;k=null;this.handlePaymentRequestDeclined(c);this.emit("change");break;case b("P2PActionConstants").PAYMENT_REQUEST_DECLINE_ERROR:l=!1;k=new(b("ImmutableObject"))(c.error);this.emit("change");break;case b("P2PActionConstants").PAYMENT_REQUEST_CANCEL_INITIATED:j=!0;i=null;this.emit("change");break;case b("P2PActionConstants").PAYMENT_REQUEST_CANCELED:j=!1;i=null;this.handlePaymentRequestCanceled(c);this.emit("change");break;case b("P2PActionConstants").PAYMENT_REQUEST_CANCEL_ERROR:j=!1;i=new(b("ImmutableObject"))(c.error);this.emit("change");break;case b("P2PActionConstants").DIALOG_CLOSED:k=null;this.emit("change");break;case b("P2PActionConstants").PAYMENT_REQUESTS_FETCHED:this.handlePaymentRequestsFetched(c);this.emit("change");break}};a.prototype.handlePaymentRequestCreated=function(a){var c=n.toArray();c.push(new(b("P2PPaymentRequest"))(a));c.sort(function(a,b){return a.creationTime-b.creationTime});n=h(c)};a.prototype.handlePaymentRequestUpdated=function(a){a.groupRequestID&&this.updateIndividualRequest(a),delete a.groupRequestID,this.updateRequest(a.id,a)};a.prototype.handlePaymentRequestDeclined=function(a){this.updateRequest(a,{currentStatus:b("P2PPaymentRequestStatus").DECLINED})};a.prototype.handlePaymentRequestCanceled=function(a){this.updateRequest(a,{currentStatus:b("P2PPaymentRequestStatus").CANCELED})};a.prototype.handleChannelPaymentRequestStatusChanged=function(a,c){a=c.obj;b("P2PActions").paymentRequestUpdated({id:a.id,currentStatus:a.current_status,groupRequestID:a.group_request_id,transfer:a.transfer})};a.prototype.handlePaymentRequestsFetched=function(a){this.$P2PPaymentRequestsStore1(a)};a.prototype.$P2PPaymentRequestsStore1=function(a){a=a.sort(function(a,b){return a.creationTime-b.creationTime});a.forEach(function(a,c){this.getPaymentRequestByID(a.id)||(n=n.push(new(b("P2PPaymentRequest"))(a)))}.bind(this));a=n.toArray();a.sort(function(a,b){return a.creationTime-b.creationTime});n=h(a)};a.prototype.isPaymentRequestInitiated=function(){return o};a.prototype.isPaymentRequestDeclining=function(){return l};a.prototype.isPaymentRequestCanceling=function(){return j};a.prototype.getPaymentRequestByID=function(a){return n.find(function(b){return a===b.id})};a.prototype.getPaymentRequestError=function(){return m};a.prototype.getPaymentRequestDeclineError=function(){return k};a.prototype.getPaymentRequestCancelError=function(){return i};a.prototype.getPendingPaymentRequest=function(){p||(p=!0,b("P2PAPI").getPendingPaymentRequests());return n.filter(function(a){return a.requestee.id===b("CurrentUser").getID()&&a.currentStatus===b("P2PPaymentRequestStatus").INITED}).last()};a.prototype.updateRequest=function(a,b){n.forEach(function(c,d){a===c.id&&(n=n.set(d,c.merge(c,b)))})};a.prototype.updateIndividualRequest=function(a){var b=a.id,c=a.groupRequestID,d=n.findIndex(function(a){return c===a.id}),e=n.get(d),f=e.individualRequests.findIndex(function(a){return b===a.id}),g=e.individualRequests.slice(0),h=g[f];h=babelHelpers["extends"]({},h,a);g[f]=h;e=e.set("individualRequests",g);n=n.set(d,e)};a.prototype.getPaymentRequests=function(){return n};e.exports=new a()}),null);
__d("P2PSimpleDialog.react",["fbt","FBPaymentsErrorNotice_DEPRECATED.react","P2PButton.react","P2PDialog.react","P2PDialogBody.react","P2PDialogFooter.react","P2PDialogTitle.react","P2PLoadingMask.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);h=d&&d.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=h.constructor).call.apply(a,[this].concat(d)),this.handleToggle=function(a){a||this.props.onCancel()}.bind(this),b}a.prototype.render=function(){var a;this.props.error&&(a=b("React").createElement(b("FBPaymentsErrorNotice_DEPRECATED.react"),{error:this.props.error}));return b("React").createElement(b("P2PDialog.react"),{behaviors:this.props.behaviors,layerHideOnBlur:!1,onToggle:this.handleToggle,repositionOnUpdate:!0,shown:!0,width:this.props.width},b("React").createElement(b("P2PDialogTitle.react"),null,this.props.title),b("React").createElement(b("P2PDialogBody.react"),null,a,this.props.bodyText,b("React").createElement(b("P2PLoadingMask.react"),{visible:this.props.loading})),b("React").createElement(b("P2PDialogFooter.react"),null,b("React").createElement(b("P2PButton.react"),{disabled:this.props.loading,label:this.props.cancelButtonText,onClick:this.props.onCancel,size:"medium"}),b("React").createElement(b("P2PButton.react"),{disabled:this.props.loading,label:this.props.confirmButtonText,onClick:this.props.onConfirm,size:"medium",use:"confirm"})))};a.propTypes={bodyText:c.string.isRequired,cancelButtonText:c.string,confirmButtonText:c.string,error:c.object,loading:c.bool,onCancel:c.func.isRequired,onConfirm:c.func.isRequired,title:c.string.isRequired,width:c.number};a.defaultProps={cancelButtonText:g._("Cancel"),confirmButtonText:g._("Confirm"),width:300};e.exports=a}),null);
__d("P2PPaymentRequestCancelDialogContainer.react",["fbt","P2PActions","P2PAPI","P2PLogger","P2PPaymentLoggerEvent","P2PPaymentLoggerEventFlow","P2PPaymentRequest","P2PPaymentRequestsStore","P2PSimpleDialog.react","React","StoreAndPropBasedStateMixin"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"P2PPaymentRequestCancelDialogContainer",mixins:[b("StoreAndPropBasedStateMixin")(b("P2PPaymentRequestsStore"))],propTypes:{paymentRequest:a.instanceOf(b("P2PPaymentRequest")).isRequired},statics:{calculateState:function(a){return{error:b("P2PPaymentRequestsStore").getPaymentRequestCancelError(),loading:b("P2PPaymentRequestsStore").isPaymentRequestCanceling()}}},log:function(a,c){b("P2PLogger").log(a,{www_event_flow:b("P2PPaymentLoggerEventFlow").UI_FLOW_P2P_REQUEST,request_id:this.props.paymentRequest.id})},componentDidMount:function(){this.log(b("P2PPaymentLoggerEvent").UI_ACTN_INITIATE_CANCEL_REQUEST)},handleCancel:function(){b("P2PActions").hideDialog()},handleConfirm:function(){b("P2PAPI").cancelPaymentRequest({error:function(){this.log(b("P2PPaymentLoggerEvent").UI_ACTN_CANCEL_REQUEST_FAIL)}.bind(this),paymentRequestID:this.props.paymentRequest.id,success:function(){this.log(b("P2PPaymentLoggerEvent").UI_ACTN_CANCEL_REQUEST_SUCCESS)}.bind(this)}),this.log(b("P2PPaymentLoggerEvent").UI_ACTN_CONFIRM_CANCEL_REQUEST)},renderBodyText:function(){var a=this.props.paymentRequest.requestee.name;return g._("{Name of requestee} will be notified that the request was canceled.",[g._param("Name of requestee",a)])},render:function(){return b("React").createElement(b("P2PSimpleDialog.react"),{bodyText:this.renderBodyText(),error:this.state.error,loading:this.state.loading,cancelButtonText:g._("Back"),confirmButtonText:g._("Cancel"),onCancel:this.handleCancel,onConfirm:this.handleConfirm,title:g._("Cancel Request?")})}});e.exports=c}),null);
__d("P2PPaymentRequestDeclineDialogContainer.react",["fbt","P2PActions","P2PAPI","P2PLogger","P2PPaymentLoggerEvent","P2PPaymentLoggerEventFlow","P2PPaymentRequest","P2PPaymentRequestsStore","P2PSimpleDialog.react","React","StoreAndPropBasedStateMixin"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"P2PPaymentRequestDeclineDialogContainer",mixins:[b("StoreAndPropBasedStateMixin")(b("P2PPaymentRequestsStore"))],propTypes:{paymentRequest:a.instanceOf(b("P2PPaymentRequest")).isRequired},statics:{calculateState:function(a){return{error:b("P2PPaymentRequestsStore").getPaymentRequestDeclineError(),loading:b("P2PPaymentRequestsStore").isPaymentRequestDeclining()}}},log:function(a,c){b("P2PLogger").log(a,{www_event_flow:b("P2PPaymentLoggerEventFlow").UI_FLOW_P2P_REQUEST,request_id:this.props.paymentRequest.id})},componentDidMount:function(){this.log(b("P2PPaymentLoggerEvent").UI_ACTN_INITIATE_DECLINE_REQUEST)},handleCancel:function(){b("P2PActions").hideDialog()},handleConfirm:function(){b("P2PAPI").declinePaymentRequest({error:function(){this.log(b("P2PPaymentLoggerEvent").UI_ACTN_DECLINE_REQUEST_FAIL)}.bind(this),paymentRequestID:this.props.paymentRequest.id,success:function(){this.log(b("P2PPaymentLoggerEvent").UI_ACTN_DECLINE_REQUEST_SUCCESS)}.bind(this)}),this.log(b("P2PPaymentLoggerEvent").UI_ACTN_CONFIRM_DECLINE_REQUEST)},renderBodyText:function(){var a=this.props.paymentRequest.requester.name;return g._("{Name of requester} will be notified that the request was declined.",[g._param("Name of requester",a)])},render:function(){return b("React").createElement(b("P2PSimpleDialog.react"),{bodyText:this.renderBodyText(),error:this.state.error,loading:this.state.loading,cancelButtonText:g._("Back"),confirmButtonText:g._("Decline"),onCancel:this.handleCancel,onConfirm:this.handleConfirm,title:g._("Decline Request?")})}});e.exports=c}),null);
__d("P2PPaymentRequestActionHelper",["fbt","MercuryIDs","P2PActions","P2PPaymentRequest","P2PPaymentRequestCancelDialogContainer.react","P2PPaymentRequestDeclineDialogContainer.react","P2PPaymentRequestStatus","P2PTransferParam","P2PTransferStatus"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=function(a){switch(a){case b("P2PTransferStatus").CANCELED_DECLINED:return b("P2PPaymentRequestStatus").DECLINED;case b("P2PTransferStatus").CANCELED_EXPIRED:return b("P2PPaymentRequestStatus").EXPIRED;case b("P2PTransferStatus").CANCELED_RECIPIENT_RISK:case b("P2PTransferStatus").CANCELED_SAME_CARD:case b("P2PTransferStatus").CANCELED_SENDER_RISK:case b("P2PTransferStatus").CANCELED_SYSTEM_FAIL:return b("P2PPaymentRequestStatus").CANCELED;case b("P2PTransferStatus").COMPLETED:return b("P2PPaymentRequestStatus").TRANSFER_COMPLETED;case b("P2PTransferStatus").INTERMEDIATE_PROCESSING:case b("P2PTransferStatus").PENDING_PUSH_FAIL:case b("P2PTransferStatus").PENDING_SENDER_INITED:case b("P2PTransferStatus").PENDING_RECIPIENT_NUX:case b("P2PTransferStatus").PENDING_SENDER_VERIFICATION:case b("P2PTransferStatus").PENDING_SENDER_MANUAL_REVIEW:case b("P2PTransferStatus").PENDING_RECIPIENT_PROCESSING:case b("P2PTransferStatus").PENDING_RECIPIENT_VERIFICATION:case b("P2PTransferStatus").PENDING_RECIPIENT_MANUAL_REVIEW:case b("P2PTransferStatus").PENDING_SENDER_VERIFICATION_PROCESSING:case b("P2PTransferStatus").PENDING_RECIPIENT_VERIFICATION_PROCESSING:default:return b("P2PPaymentRequestStatus").TRANSFER_INITED}};a={initDeclinePaymentRequestFlow:function(a){b("P2PActions").showDialog(b("P2PPaymentRequestDeclineDialogContainer.react"),{paymentRequest:a})},initPayForPaymentRequestFlow:function(a,c){var d=[],e=a.groupThreadFBID,f;e?(d.push(a.requester.id),f=b("MercuryIDs").getThreadIDFromThreadFBID(e)):f=b("MercuryIDs").getThreadIDFromUserID(a.requester.id);b("P2PActions").chatSendViewOpened({amount:a.amount,memoText:a.memoText,paymentRequestID:a.id,threadID:f,useModal:!0,referrer:c,groupSendRecipientUserIDs:d,groupThreadFBID:e})},initCancelPaymentRequestFlow:function(a){b("P2PActions").showDialog(b("P2PPaymentRequestCancelDialogContainer.react"),{paymentRequest:a})},getPaymentRequest:function(a){return new(b("P2PPaymentRequest"))({amount:a.amount,amountWithSymbol:a.amountWithSymbol,creationTime:a.creationTime,currency:a.currency,currentStatus:h(a[b("P2PTransferParam").STATUS]),groupThreadFBID:a.groupThreadFBID,individualRequests:[],memoText:a.memoText,requestee:a.sender,requester:a.receiver,statusDescription:a.statusDescription,trnasfer:a,transferID:a[b("P2PTransferParam").TRANSFER_ID],updatedTime:a.updatedTime})},getStatusText:function(a){__p&&__p();a=a.currentStatus;var c=g._("Canceled"),d=g._("Paid"),e=g._("Declined"),f=g._("Pending"),h;switch(a){case b("P2PPaymentRequestStatus").DECLINED:h=e;break;case b("P2PPaymentRequestStatus").CANCELED:case b("P2PPaymentRequestStatus").TRANSFER_FAILED:h=c;break;case b("P2PPaymentRequestStatus").TRANSFER_COMPLETED:h=d;break;default:h=f;break}return h}};e.exports=a}),null);
__d("P2PAcceptMoneyDialog.react",["cx","BootloadedComponent.react","Bootloader","JSResource","MessengerEnvironment","P2PDialog.react","P2PLoadingMask.react","React","Run"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;var i=b("MessengerEnvironment").messengerui;d=babelHelpers.inherits(a,b("React").Component);h=d&&d.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.$1=function(){return b("React").createElement(b("P2PDialog.react"),{className:"_309"+(i?" _5ktw":""),layerHideOnBlur:!1,repositionOnUpdate:!0,shown:!0,width:i?400:350},b("React").createElement("div",{className:"_3w2b"},b("React").createElement(b("P2PLoadingMask.react"),{visible:!0})))},c}a.preload=function(){b("Run").onAfterLoad(function(){b("Bootloader").loadModules(["P2PAcceptMoneyDialogImpl.react"],function(){},"P2PAcceptMoneyDialog.react")})};a.prototype.render=function(){return b("React").createElement(b("BootloadedComponent.react"),babelHelpers["extends"]({bootloadLoader:b("JSResource")("P2PAcceptMoneyDialogImpl.react").__setRef("P2PAcceptMoneyDialog.react"),bootloadPlaceholder:this.$1()},this.props))};a.propTypes={creditCards:c.array.isRequired,useRedesignForm:c.bool,onClose:c.func,transfer:c.object};e.exports=a}),null);
__d("P2PVerificationFlowHelper",["AsyncDialog","AsyncRequest","P2PAPI","P2PTransferParam","emptyFunction"],(function(a,b,c,d,e,f){__p&&__p();var g=null,h=null,i=null;a={startVerificationFlow:function(a,c,d){g=a,h=c,i=d||b("emptyFunction"),b("AsyncDialog").send(new(b("AsyncRequest"))("/p2p/verify/dialog/?id="+a))},setupFlowExitHandler:function(a,c,d,e){__p&&__p();var f=function(b){i(b),g=null,h=null,i=null,a.destroy(),c.destroy()};if(d)a.subscribe("hide",function(){f(e)});else{var j=!1,k=!1;a.subscribe("confirm",function(){j=!0});a.subscribe("hide",function(){j?(a.destroy(),c.destroy()):h?c.show():f(!1)});c.subscribe("confirm",function(){k=!0;var a={};a[b("P2PTransferParam").TRANSFER_ID]=g;b("P2PAPI").cancelTransaction({formData:a});f(!1)});c.subscribe("hide",function(){k||a.show()})}}};e.exports=a}),null);
__d("MessengerPaymentProductType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({P2P:"p2p",PAGES_COMMERCE:"pages_commerce",NMOR_PAGES_COMMERCE:"nmor_pages_commerce",MESSENGER_COMMERCE:"messenger_commerce"})}),null);
__d("P2PCreditCardStore",["Arbiter","ChannelConstants","CreditCardFormParam","EventEmitter","ImmutableObject","MessengerPaymentProductType","P2PActionConstants","P2PActions","P2PAPI","P2PChannelType","P2PCreditCard","P2PDispatcher"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h,i,j,k,l,m,n=null,o=!1,p=!1;function q(a,c){a&&(m[a]=new(b("ImmutableObject"))(c))}function r(a,b){n=b,a&&(m[a]={error:b})}c=babelHelpers.inherits(a,b("EventEmitter"));g=c&&c.prototype;function a(){g.constructor.call(this),j=!1,k=!1,h=[],l=!0,m={},i=b("P2PDispatcher").register(this.onEventDispatched.bind(this)),b("Arbiter").subscribe(b("ChannelConstants").getArbiterType(b("P2PChannelType").CREDIT_CARD_CHANGED),this.handleChannelCreditCardChanged.bind(this)),b("Arbiter").subscribe(b("ChannelConstants").getArbiterType(b("P2PChannelType").CREDIT_CARD_DELETED),this.handleChannelCreditCardDeleted.bind(this))}a.prototype.onEventDispatched=function(a){__p&&__p();var c=a.data;a=a.type;switch(a){case b("P2PActionConstants").CREDIT_CARD_SAVING:this.handleCreditCardSaving();this.emit("change");break;case b("P2PActionConstants").CREDIT_CARDS_UPDATED:this.handleCreditCardsUpdated(c);this.emit("change");break;case b("P2PActionConstants").CREDIT_CARDS_UPDATED_ERROR:this.handleCreditCardsUpdatedError();this.emit("change");break;case b("P2PActionConstants").CHANNEL_EVENTS_ALLOWED:this.handleChannelEventsAllowed();break;case b("P2PActionConstants").CHANNEL_EVENTS_IGNORED:this.handleChannelEventsIgnored();break;case b("P2PActionConstants").CREDIT_CARD_ADDED:this.handleCreditCardAdded(c);this.emit("change");break;case b("P2PActionConstants").CREDIT_CARD_ADDED_ERROR:this.handleCreditCardAddedError(c);this.emit("change");break;case b("P2PActionConstants").CREDIT_CARD_ADDED_ERROR_CLEARED:this.handleCreditCardAddedErrorCleared();this.emit("change");break;case b("P2PActionConstants").CREDIT_CARD_DELETED:this.handleCreditCardDeleted(c);this.emit("change");break;case b("P2PActionConstants").CREDIT_CARD_DELETED_ERROR:this.handleCreditCardDeletedError(c);this.emit("change");break;case b("P2PActionConstants").CREDIT_CARD_UPDATED:this.handleCreditCardUpdated(c);this.emit("change");break;case b("P2PActionConstants").CREDIT_CARD_UPDATED_ERROR:this.handleCreditCardUpdatedError(c);this.emit("change");break;case b("P2PActionConstants").PRESET_CREDIT_CARD_UPDATED:this.handlePresetCreditCardUpdated(c);this.emit("change");break;case b("P2PActionConstants").PRESET_CREDIT_CARD_UPDATED_ERROR:this.handlePresetCreditCardUpdatedError(c);this.emit("change");break;case b("P2PActionConstants").CREDIT_CARD_VERIFIED:this.handleCreditCardVerified(c);this.emit("change");break;case b("P2PActionConstants").CREDIT_CARD_VERIFIED_ERROR:this.handleCreditCardVerifiedError(c);this.emit("change");break;case b("P2PActionConstants").BIN_NUMBER_VALIDATED:this.handleBINNumberValidated(c);this.emit("change");break;case b("P2PActionConstants").BIN_NUMBER_VALIDATED_ERROR:this.handleBINNumberValidatedError(c);this.emit("change");break}};a.prototype.handleCreditCardSaving=function(){o=!0,n=null};a.prototype.getAsyncRequestState=function(){return m};a.prototype.isCreditCardsFetchComplete=function(){return j};a.prototype.handleCreditCardsUpdated=function(a){j=!0,p=!1,h=a.map(function(a){return new(b("P2PCreditCard"))(a)})};a.prototype.handleCreditCardsUpdatedError=function(){j=!0,p=!0};a.prototype.handleCreditCardAdded=function(a){o=!1,q(a.requestID,a),this.getCreditCardByCredentialID(a[b("CreditCardFormParam").CREDENTIAL_ID])||h.push(new(b("P2PCreditCard"))(a))};a.prototype.handleChannelEventsIgnored=function(){l=!1};a.prototype.handleChannelEventsAllowed=function(){l=!0};a.prototype.handleChannelCreditCardChanged=function(a,c){l&&!this.getCreditCardByCredentialID(c[b("CreditCardFormParam").CREDENTIAL_ID])&&b("P2PAPI").getAllCreditCards()};a.prototype.handleCreditCardAddedError=function(a){o=!1,r(a.requestID,a.errors)};a.prototype.handleCreditCardAddedErrorCleared=function(){n=null};a.prototype.handleCreditCardDeleted=function(a){var c=a[b("CreditCardFormParam").CREDENTIAL_ID];q(a.requestID,a);h=h.filter(function(a){return a.getCredentialId()!==c})};a.prototype.handleChannelCreditCardDeleted=function(a,c){c=c.obj,b("P2PActions").deleteCreditCard(c)};a.prototype.handleCreditCardDeletedError=function(a){r(a.requestID,a.error)};a.prototype.handleCreditCardUpdated=function(a){q(a.requestID,a);var c=this.getCreditCardByCredentialID(a[b("CreditCardFormParam").CREDENTIAL_ID]);c&&(c.setExp(a[b("CreditCardFormParam").CARD_EXPIRATION]),c.setZipCode(a[b("CreditCardFormParam").ZIP]))};a.prototype.handleCreditCardUpdatedError=function(a){r(a.requestID,a.errors)};a.prototype.handlePresetCreditCardUpdated=function(a){var c=a[b("CreditCardFormParam").CREDENTIAL_ID];q(a.requestID,a);a=h.filter(function(a){return a.getIsPreset()})[0];a&&a.setIsPreset(!1);a=this.getCreditCardByCredentialID(c);a&&a.setIsPreset(!0)};a.prototype.handlePresetCreditCardUpdatedError=function(a){r(a.requestID,a.error)};a.prototype.handleCreditCardVerified=function(a){q(a.requestID,a);a=this.getCreditCardByCredentialID(a[b("CreditCardFormParam").CREDENTIAL_ID]);a&&a.setIsVerified(!0)};a.prototype.handleCreditCardVerifiedError=function(a){r(a.requestID,a.error)};a.prototype.handleBINNumberValidated=function(a){q(a.requestID,a)};a.prototype.handleBINNumberValidatedError=function(a){r(a.requestID,a.error)};a.prototype.getAll=function(a){a=a===undefined?b("MessengerPaymentProductType").P2P:a;k||(k=!0,b("P2PAPI").getAllCreditCards());return h.filter(function(c){return a===b("MessengerPaymentProductType").P2P?c.getIsPersonalTransferEligible():c})};a.prototype.getCreditCardByCredentialID=function(a){return h.filter(function(b){return b.getCredentialId()===a})[0]};a.prototype.getDispatchToken=function(){return i};a.prototype.getSaveErrors=function(){return n};a.prototype.isSaving=function(){return o};a.prototype.failedCreditCardFetch=function(){return p};e.exports=new a()}),null);
__d("XWorkplaceDesktopDownloadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/work/desktop/download/{?file}/",{file:{type:"String"},ref:{type:"String"}})}),null);
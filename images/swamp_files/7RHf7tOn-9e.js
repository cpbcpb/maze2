if (self.CavalryLogger) { CavalryLogger.start_js(["9N3tD"]); }

__d("SwapButtonDEPRECATED",["Arbiter","CSS","Event","Focus"],(function(a,b,c,d,e,f){function a(a,c,d){this._swapperButton=a,this._swappeeButton=c,b("Event").listen(a,"click",this.swap.bind(this)),d&&b("Event").listen(c,"click",this.unswap.bind(this)),b("Arbiter").subscribe("SwapButtonDEPRECATED/focusOnJoinButton",this.setFocusOnSwapper.bind(this),b("Arbiter").SUBSCRIBE_ALL)}Object.assign(a.prototype,{_swapperButton:null,_swappeeButton:null,swap:function(a){b("CSS").hide(this._swapperButton),b("CSS").show(this._swappeeButton),a!==!1&&b("Focus").setWithoutOutline(this._swappeeButton)},unswap:function(a){b("CSS").show(this._swapperButton),b("CSS").hide(this._swappeeButton),a!==!1&&b("Focus").setWithoutOutline(this._swapperButton)},toggle:function(){b("CSS").toggle(this._swapperButton),b("CSS").toggle(this._swappeeButton)},setFocusOnSwapper:function(){this._swapperButton.focus()}});e.exports=a}),null);
__d("XFollowPrivacyNuxLogViewAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/follow/follow_privacy/nux/log/view/",{})}),null);
__d("XPubcontentChainedSuggestionsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pubcontent/chained_suggestions/",{pageid:{type:"String"},profileid:{type:"Int"},eh:{type:"Bool",defaultValue:!1},friendid:{type:"Int"}})}),null);
__d("SubscribeButton",["Arbiter","AsyncRequest","Button","CSS","Event","TooltipData","XFollowPrivacyNuxLogViewAsyncController","XPubcontentChainedSuggestionsController"],(function(a,b,c,d,e,f){__p&&__p();var g={SUBSCRIBED:"FollowingUser",UNSUBSCRIBED:"UnfollowingUser",_enable:function(a){b("Button").setEnabled(a,!0),b("TooltipData").remove(a)},_disable:function(a,c){b("Button").setEnabled(a,!1),c&&b("TooltipData").set(a,c)},init:function(a,c,d,e,f,h,i,j,k,l,m,n,o){__p&&__p();var p=!m&&!o,q=!(k===undefined||k===null);q&&!i&&!j&&g._disable(c,k);b("Event").listen(c,"click",function(){b("Arbiter").inform(g.SUBSCRIBED,{profile_id:e,contextID:n,suppress:!0});if(l){l.show();var a=b("XFollowPrivacyNuxLogViewAsyncController").getURIBuilder().getURI();new(b("AsyncRequest"))(a).send()}});b("Arbiter").subscribe(g.SUBSCRIBED,function(k,l){__p&&__p();if(e==l.profile_id){f||d.suppressNextMouseEnter&&d.suppressNextMouseEnter();q&&(typeof l.connected!=="undefined"&&(i=l.connected),(i||j)&&g._enable(c));l.focusOnClick!==undefined&&(p=l.focusOnClick);a.swap(p);if(h===!0&&l.chaining!==!1){k=b("XPubcontentChainedSuggestionsController").getURIBuilder().setInt("profileid",e).getURI();new(b("AsyncRequest"))().setURI(k).send()}}});b("Arbiter").subscribe(g.UNSUBSCRIBED,function(f,h){e==h.profile_id&&(a.unswap(p),d.hideFlyout&&d.hideFlyout(),q&&(typeof h.connected!=="undefined"&&(i=h.connected),!i&&!j&&g._disable(c,k)),b("Arbiter").inform("SubMenu/Reset"))})},initSubscribe:function(a,c){b("Event").listen(a,"click",function(){setTimeout(b("Arbiter").inform.bind(b("Arbiter"),g.SUBSCRIBED,{profile_id:c}),0)})},initUnsubscribe:function(a,c,d){b("Event").listen(a,"click",function(){setTimeout(b("Arbiter").inform.bind(b("Arbiter"),g.UNSUBSCRIBED,{profile_id:c,contextID:d}),0)})},initSubscribeMenuItem:function(a,c,d){b("CSS").hide(c),this._initMenuItem(a,c,d)},initUnsubscribeMenuItem:function(a,c,d){b("CSS").hide(a),this._initMenuItem(a,c,d)},_initMenuItem:function(a,c,d){this.initSubscribe(a,d),this.initUnsubscribe(c,d),b("Arbiter").subscribe(g.SUBSCRIBED,function(d,e){b("CSS").hide(a),b("CSS").show(c)}),b("Arbiter").subscribe(g.UNSUBSCRIBED,function(d,e){b("CSS").hide(c),b("CSS").show(a)})}};e.exports=g}),null);
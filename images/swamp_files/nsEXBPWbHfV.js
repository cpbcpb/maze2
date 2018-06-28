if (self.CavalryLogger) { CavalryLogger.start_js(["3DEoR"]); }

__d("AppUseTrackerLogger",["AsyncRequest","PageTransitions","Run","isInIframe","pageID"],(function(a,b,c,d,e,f){__p&&__p();function g(){g.instance||(g.instance=this);return g.instance}Object.assign(g,{setup:function(a,b,c,d,e,f){new g().init(a,b,c,d,e,f)}});Object.assign(g.prototype,{instance:null,endpoint:"/ajax/apps/usage_update.php",heartbeat_endpoint:"/ajax/apps/heartbeat.php",INITIAL_PING:0,ONGOING_PING:1,DISCOVERY_PING:2,ENDING_PING:3,_application_id:0,_is_game:0,_createRequest:function(a){return new(b("AsyncRequest"))().setURI(this.endpoint).setMethod("POST").setData({app:this._application_id,is_game:this._is_game,type:a,condition:this._signal_on_page_transition})},_createHeartbeatRequest:function(){return new(b("AsyncRequest"))().setURI(this.heartbeat_endpoint).setMethod("POST").setData({app:this._application_id,page_id:b("pageID")})},init:function(a,c,d,e,f,g){__p&&__p();if(b("isInIframe")())return;this.cleanup();b("PageTransitions").registerHandler(this.catchPageTransition.bind(this));this._application_id=a;this._is_game=c;if(g){a=function(){return this._createHeartbeatRequest().send()}.bind(this);a();this._timers.push(setInterval(a,g))}this._timers.push(setTimeout(function(){this._createRequest(this.INITIAL_PING).send();var a=this._createRequest(this.ONGOING_PING);this._timers.push(setInterval(a.send.bind(a),e))}.bind(this),d));f&&this._timers.push(setTimeout(function(){this._createRequest(this.DISCOVERY_PING).send()}.bind(this),f));b("Run").onBeforeUnload(this.onBeforeUnload.bind(this))},catchPageTransition:function(a){this._createRequest(this.ENDING_PING).send(),this.cleanup()},onBeforeUnload:function(){this._createRequest(this.ENDING_PING).send(),this.cleanup()},cleanup:function(){if(this._timers)for(var a=0;a<this._timers.length;a++)clearInterval(this._timers[a]);this._timers=[]}});e.exports=g}),null);
__d("NotificationTracking",["invariant"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h={};a={getEncodedTrackingData:function(a,b){return this._getTrackingInfo(a,b).encoded},getTrackingString:function(a,b){return this._getTrackingInfo(a,b).raw},_getTrackingInfo:function(a,b){var c=""+a.alert_id,d=h[c];if(d&&d.row===b)return d;d=this._getEncodedTrackingDataWithRow(a,b);h[c]={row:b,encoded:d,raw:JSON.stringify(d)};return h[c]},_getTrackingAsObject:function(a){var b=null,c=null;if(a.tracking)try{b=JSON.parse(a.tracking)}catch(a){c=a}(b===null||c!==null||typeof b!=="object")&&g(0);return b},_getEncodedTrackingDataWithRow:function(a,b){a=this._getTrackingAsObject(a);return b!="undefined"&&typeof b==="number"?babelHelpers["extends"]({},a,{row:b}):a}};e.exports=a}),null);
__d("InternalNotificationOptionHandler",["invariant","AsyncDialog","URI"],(function(a,b,c,d,e,f,g){__p&&__p();function a(a,c,d){__p&&__p();var e;e=(e=c)!=null?(e=e.client_info)!=null?e.action_type:e:e;if(e==="REPORT_BUG"){d=new(b("URI"))("/ajax/bugs/employee_report").setQueryData({client_notifs:JSON.stringify(d()),notif_alert_id:a});b("AsyncDialog").bootstrap(d.toString(),null,"dialog");return!0}else if(e==="OPEN_IN_INSPECTOR"){d=(a=c)!=null?(a=a.option_display)!=null?(a=a.subtext)!=null?a.text:a:a:a;d!=null||g(0);window.open(d,"_blank");return!0}return!1}e.exports={tryHandle:a}}),null);
__d("NotificationAttachment.react",["cx","Image.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;h=babelHelpers.inherits(a,b("React").PureComponent);h&&h.prototype;a.prototype.render=function(){var a=this.props.image;return!a?b("React").createElement("span",null):b("React").createElement(b("Image.react"),{src:a.uri,className:"_42td","aria-hidden":!0})};function a(){h.apply(this,arguments)}e.exports=a}),null);
__d("FanFBPageActionOrigin",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADS:"ads",COLLECTIONS_FEED_MEGAPHONE:"collections_feed_megaphone",PAGE_SUGGESTIONS_ON_LIKING:"page_suggestions_on_liking",PAGE_SUGGESTIONS_ON_LIKING_REFRESH:"page_suggestions_on_liking_refresh",MOBILE_PAGE_SUGGESTIONS_ON_LIKING:"mobile_page_suggestions_on_liking",PAGE_SUGGESTION:"page_suggestion",TIMELINE_COLLECTION:"timeline_collection",TIMELINE_LHC:"timeline_lhc",PROFILE_EDIT:"profile_edit",PROFILE_VIEW:"profile_view",M_SPYML:"mobile_spyml",REGISTRATION:"registration",EXTERNAL_CONNECT:"external_connect",MOBILE_ADS:"mobile_ads",EVENTS:"events",PROFILE_QUESTIONS:"profile_questions",CONTEXTUAL_PYML:"contextual_pyml",TOPIC_PYML:"topic_pyml",JEWEL_NOTIFICATION:"JEWEL_NOTIFICATION",LOCATIONS_AGGREGATION:"locations_aggregation",FEED_SHARE_LINK:"feed_share_link",API:"api",SMS:"sms",FAVORITES:"favorites",PAGE_BROWSER:"page_browser",MOBILE_PAGE_BROWSER:"mobile_page_browser",PAGE_BROWSER_CHAINING:"page_browser_chaining",PAGE_BROWSER_INVITE:"page_browser_invite",MOBILE_PAGE_BROWSER_INVITE:"mobile_page_browser_invite",REMINDER_BOX_INVITE:"reminder_box_invite",REMINDER_BOX_RECOMMENDATION:"reminder_box_recommendation",PAGE_CREATION:"page_creation",POST_CHECKIN:"post_checkin",COUPON_GET_OFFER_DIALOG:"from_get_offer_dialog",COUPON_EMAIL:"from_coupon_email",HOVERCARD:"hovercard",SEARCH:"search",WEB_SEARCH:"web_search",KEYWORD_SEARCH:"keyword_search",QR_CODE:"qr_",PAGE_ENTITY_LOCKUP:"page_entity_lockup",PAGE_NAX:"page_nax",PAGE_PROFILE:"page_profile",PAGE_TIMELINE:"page_timeline",PARENT_PAGE_TIMELINE:"parent_page_timeline",PAGE_INVITE_ESCAPE_HATCH:"page_invite_escape_hatch",PAGE_TIMELINE_LIKED_PAGES:"page_timeline_liked_pages",PAGE_FINCH_LIKED_PAGES:"page_finch_liked_pages",PAGE_FINCH_RELATED_PAGES:"page_finch_related_pages",PENDING_PAGE_INVITE_NETEGO:"pending_page_invite_netego",LIKE_STORY:"like_story",STORY_WITH_PAGE:"story_with_page",LIKED_MENU:"liked_menu",FAN_CONTEXT_STORY:"fan_context_story",SOCIAL_GRAPH:"social_graph",VERTEX_PAGE:"vertex_page",SPONSORED_STORY:"sponsored_story",NEWSSTAND_SUGGESTION:"newsstand_suggestion",APP_CENTER:"app_center",SHARE_STORY:"share_story",SHARE_PAGE_STORY:"share_page_story",PAGE_INVITE:"page_invite",DISCOVER_FEED:"discover_feed",SAVED_DASHBOARD:"saved_dashboard",PERMALINK:"page_permalink",GUIDED_CLEANUP:"guided_cleanup",SOCIAL_WIFI:"social_wifi",COUNTRY_PAGE_LIKE:"country_page_like",EMBED:"embed",GAMETIME:"gametime",UNKNOWN:"unknown",UNIT_TEST:"unit_test",PAGE_POST_LIKE_STORY:"page_post_like_story",MBASIC_POST_LIKE_CHAINING:"mbasic_feed_post_like_chaining",MBASIC_SHARE_LIKE_CHAINING:"mbasic_feed_share_like_chaining",MTOUCH_POST_LIKE_CHAINING:"mtouch_feed_post_like_chaining",COMMERCE_CHECKOUT_CONF:"commerce_checkout_conf",FEED_AWESOMIZER_PYML:"feed_awesomizer_pyml",PAGE_CONNECTION_QUESTIONS:"page_connection_questions",AWESOMIZER_DISCOVERY:"awesomizer_discovery",PAGES_LIKED_FEED:"pages_liked_feed",BANHAMMER:"banhammer",OG_MUSIC:"og_music",SOUNDCLOUD_SHARE:"soundcloud_share",TWITTER_SHARE:"twitter_share",INTERNETORG_NEW_USERS:"internetorg_new_users",SHARE_DETECTED_TOPIC:"share_detected_topic",FEED_STORY:"feed_story",FEED_CONNECTIONS_PYML:"feed_connections_pyml",TIMELINE_LIKE_CHAINING:"timeline_like_chaining",PAGES_FEED:"pages_feed",MARKETPLACE:"marketplace",LOCAL_SERP:"local_serp",POLITICIANS_FEED:"politicians_feed",FEED_STORY_SEARCH:"feed_story_search",INSTANT_ARTICLES:"instant_articles",LOCAL_NEWS:"local_news",ELECTION_RESULT_MODULE:"election_result_module",ELECTION_HUB:"election_hub",FEED_PAGE_ATTACHMENT:"feed_page_attachment",RECOMMENDATIONS_COMPARISON_CARDS:"recommendations_comparison_cards",TEST_USER_TOOL:"test_user_tool",GAMES_STREAMER_HUB:"games_streamer_hub",GAMERS_STREAMER_SEARCH_UNIT:"games_streamer_search_unit",PAGE_INVITE_NOTIF_INLINE_ACCEPT:"page_invite_notif_inline_accept",FEED_ALL_CATEGORY_PYML:"feed_all_category_pyml",RHC_ALL_CATEGORY_PYML:"rhc_all_category_pyml",SIDE_FEED_ALL_CATEGORY_PYML:"side_feed_all_category_pyml",OTHER_ALL_CATEGORY_PYML:"other_all_category_pyml",FEED_CHAINING_RELATED_PAGES:"feed_chaining_related_pages",FEED_ENGAGEMENT_PYML:"feed_engagement_pyml",PAGE_SUBSCRIPTIONS:"page_subscriptions",FEED_CHAINING:"feed_chaining",EVENT_BASED_PYML:"event_based_pyml",COMMENT_CHAINING:"comment_chaining",OUTBOUND_CLICK_CHAINING:"outbound_click_chaining",SHARE_CHAINING:"share_chaining",POLITICIAN_PYML:"politician_pyml",POLITICIAN_CHAINING_PYML:"politician_page_chaining_pyml",POLITICIAN_CHAINING_PIVOT:"politician_page_chaining_pivot",CONTENT_BASED_POLITICIAN_CHAINING_PIVOT:"content_based_politician_page_chaining_pivot",MODAL_PAGE_INVITE_TIMELINE_CARD:"modal_page_invite_timeline_card",MODAL_PAGE_INVITE_DASHBOARD:"modal_page_invite_dashboard",TEEN_PYML:"teen_pyml",FEED_PYML:"feed_pyml",NETWORK_EGO:"network_ego",ALL_CATEGORY_PYML:"all_category_pyml",CONTENT_BASED_PYML:"content_based_pyml",ENGAGEMENT_PYML:"engagement_pyml",GAMES_PYML:"games_pyml",LINKS_PYML:"links_pyml",MUSIC_PYML:"music_pyml",VIDEOS_PYML:"videos_pyml",PAGE_PYML:"page_pyml",MOBILE_APP:"mobile",MOBILE_SITE:"wap",SILENT_LINK:"silent_link",NONE:"none",PAGE_MIGRATION:"page_migration",PARENT_CHILD_MIGRATION:"parent_child_migration",FIX_INCONSISTENT_LIKE:"fix_inconsistent_like",GLOBAL_PAGES_MIGRATION:"global_brand_v2_migration",GLOBAL_PAGES_CHILD_SWITCH:"global_brand_v2_child_switch",REACTIVATED_USER_PAGELIKE_ADDER:"pagelike_adder_for_reactivated_users",DEACTIVATED_USER_PAGELIKE_REMOVER:"pagelike_deleter_for_deactivated_users",YOUTUBE_SHARE_TOP:"youtube_share_top",YOUTUBE_SHARE_TAIL:"youtube_share_tail",NORMAL_UNFAN:"normal_unfan",SI_SYSTEM:"si_system",UNDERAGE_FAN_REMOVAL:"underage_fan_removal",DEACTIVATED_FAN_REMOVAL:"deactivated_fan_removal",REACTIVATED_FAN_ADD:"reactivated_fan_add",LAUNCH_POINT_FRIEND_INVITES:"launch_point_friend_invites",LAUNCH_POINT_LIKED_PAGES:"launch_point_liked_pages",LAUNCH_POINT_HOME_PYML:"launch_point_home_pyml",LAUNCH_POINT_DISCOVER_PYML:"launch_point_discover_pyml",CITY_HUB_SOCIAL_MODULE:"city_hub_social_module",CITY_HUB_LOCAL_MODULE:"city_hub_local_module",CITY_HUB_CATEGORY_MODULE:"city_hub_category_module",CITY_HUB_PYML_MODULE:"city_hub_pyml_module",USER_FUNDRAISER_PAGE:"user_fundraiser_page",CAST_SHOW_PAGE_TAB:"cast_show_page_tab",DITTO_PYML:"ditto_pyml",DITTO_PYMF:"ditto_pymf",DITTO_INTEREST_PICKER:"ditto_interest_picker",PAGE_SUGGESTION_MEGAPHONE:"page_suggestion_megaphone",NEEDY_PAGE_SUGGESTION_MEGAPHONE:"needy_page_suggestion_megaphone",NUX_SUGGESTION:"wizard_suggestion",MOBILE_PLATFORM_NATIVE_LIKE_BUTTON:"mobile_platform_native_like_button",END_OF_FEED:"end_of_feed",PAGE_BROWSER_TILED:"page_browser_tiled",NEARBY_DASH:"nearby_dash",COUPON:"from_coupon",VIDEO_FLYOUT:"video_flyout",PHOTO_SNOWLIFT:"photo_snowlift",FINCH_PAGE_LIKE_TOAST:"finch_page_like_toast",PAGE_INVITE_ESCAPE_HATCH_FINCH:"page_invite_escape_hatch_finch",TICKER:"ticker",LIKE_PLACE:"like_place",EXTERNAL_PAGE_LIKE:"external_page_like",UNCONNECTED_STORY:"unconnected_story",PYML_STORY:"pyml_story",SUBSCRIBE_STORY:"subscribe_story",PROFILE_CONNECT:"profile_connect",GIFTS_COMMERCE_DETAILS_PAGE:"gifts_commerce_details_page",CONTACT_CARD:"contact_card",EMAIL:"email",GLOBAL_PAGES_UNLINKED_CHILD_FAN_RESTORATION:"global_brand_v2_unlinked_child_fan_restoration",DEACTIVATED_FANS_REMOVER:"deactivated_fan_assoc_deleter",REPORT_AFRO:"report_afro",SI_SYSTEM_MAP:"spam_account_removal",WELCOME_DASH:"welcome_dash",ORGANIC_PAGEPOST_FOLLOWING_BUTTON:"organic_pagepost_following_button",RETAIL_NEW_USERS:"retail_new_users",AUDIENCE_ALERT:"audience_alert",COUNTER_HATE_SPEECH_HUB:"counter_hate_speech_hub",MOBILE_SPONSORED_PAGE_YOU_MAY_LIKE:"mobile_sponsored_page_you_may_like",RECOMMENDED_PAGES:"recommended_pages",TIMELINE:"timeline",NEARBY_SEARCH:"nearby_search",SOURCE_RECOMMENDATION:"source_recommendation",INVITATIONS:"invitations",OTHERS:"others",MOBILE:"mobile",MEDLEY:"medley",MOBILE_PAGE_SUGGESTION_MEGAPHONE:"mobile_page_suggestion_megaphone",LIVE_VIDEO:"live_video",LIVE_VIDEO_SIDE_PANE:"live_video_side_pane",PSYM:"PSYM",FEED_CHAINING_CONTEXTUAL_RECOMMENDATIONS:"feed_chaining_contextual_recommendations",LED_FEED_UNIT:"led_feed_unit",PAGE_LIKED_BY_TEENS:"page_liked_by_teens",LIKE_AS_PAGE:"like_as_page"})}),null);
__d("XPagesRemoveInviteAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/remove_page_inline_invite/",{page_id:{type:"Int"}})}),null);
__d("PageFanningInviteInlineNotif.react",["ActorURI","AsyncRequest","XPagesRemoveInviteAsyncController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={setFanStatus:function(a,c,d,e,f){__p&&__p();d=d||function(a){if(!g)return};var g={page_id:a,reload:c};a=b("XPagesRemoveInviteAsyncController").getURIBuilder().getURI();f!==null&&f.actor_id!==null&&(a=b("ActorURI").create(a,f.actor_id));c=new(b("AsyncRequest"))().setURI(a).setData(g).setHandler(d);e&&c.setErrorHandler(e);c.send();return!1}};e.exports=a}),null);
__d("XPagesPageInviteInlineActionAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/page_invite_notif_inline_actions/",{page_id:{type:"Int"}})}),null);
__d("PageNotifInlineLikeButton.react",["fbt","AsyncRequest","FanFBPageActionOrigin","FDSButton.react","PageFanning","PageFanningInviteInlineNotif.react","React","ReactDOM","XPagesPageInviteInlineActionAsyncController"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=babelHelpers.inherits(a,b("React").PureComponent);h=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.state={liked:!1,rendered:!1,declined:!1},this.$1=function(a){a.preventDefault(),this.state.liked||(this.setState({liked:!0}),b("PageFanning").setFanStatus(b("ReactDOM").findDOMNode(this),this.props.pageID,!0,!1,this.$2,this.$3,{fan_origin:b("FanFBPageActionOrigin").PAGE_INVITE_NOTIF_INLINE_ACCEPT}))}.bind(this),this.$4=function(a){a.preventDefault(),this.state.liked||(this.setState({declined:!0}),b("PageFanningInviteInlineNotif.react").setFanStatus(this.props.pageID,!1,this.$5,this.$6,{fan_origin:this.props.origin,fan_source:this.props.origin}))}.bind(this),this.$2=function(){this.setState({liked:!0})}.bind(this),this.$3=function(){this.setState({liked:!1})}.bind(this),this.$5=function(){this.setState({declined:!0})}.bind(this),this.$6=function(){this.setState({declined:!1})}.bind(this),c}a.prototype.$7=function(){var a=b("XPagesPageInviteInlineActionAsyncController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(a).setMethod("POST").setData({page_id:this.props.pageID}).setHandler(function(a){this.setState({rendered:a.payload.see_inline_actions})}.bind(this)).setErrorHandler(function(a){this.setState({rendered:!1})}.bind(this)).send()};a.prototype.render=function(){this.$7();if(!this.state.rendered)return null;if(this.state.declined)return null;var a=this.state.liked?g._("Liked"):g._("Like Page"),c=this.state.declined?g._("Declined"):g._("Decline");return b("React").createElement("div",null,b("React").createElement(b("FDSButton.react"),{isDisabled:this.state.liked,label:a,onClick:this.$1,size:"small",use:"flat"})," ",b("React").createElement(b("FDSButton.react"),{isDisabled:this.state.liked,label:c,onClick:this.$4,size:"small",use:"flat"}))};e.exports=a}),null);
__d("NotificationFooter.react",["cx","BizSiteIdentifier.brands","Image.react","ImageBlock.react","PageNotifInlineLikeButton.react","React","Timestamp.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i="page_invite_notif_inline_button",j="page_invite",k="page_creation_announcement",l=b("BizSiteIdentifier.brands").isBizSite();h=babelHelpers.inherits(a,b("React").PureComponent);h&&h.prototype;a.prototype.render=function(){__p&&__p();var a=this.props,c=a.icon,d=a.metadata,e=a.shortenTimestamp,f=a.timestamp,g=a.notif_type,h=a.pageID;a=a.sub_type;var m="_33f"+(l?" _2g48":"");c=c?b("React").createElement(b("Image.react"),{className:"_10cu",src:c.uri}):null;e=b("React").createElement(b("Timestamp.react"),babelHelpers["extends"]({className:"_33g",shorten:e},f));f=g===j&&a!==k?b("React").createElement(b("PageNotifInlineLikeButton.react"),{pageID:h,origin:i}):b("React").createElement("span",null);if(d)if(c)return b("React").createElement(b("ImageBlock.react"),{className:m},c,b("React").createElement(b("React").Fragment,null,d," \xb7 ",e));else return b("React").createElement("div",{className:m},d," \xb7 ",e);else if(c)return b("React").createElement(b("ImageBlock.react"),{className:m},c,e,f);else return b("React").createElement("div",{className:m},e,f)};function a(){h.apply(this,arguments)}e.exports=a}),null);
__d("NotificationListItemChevron.react",["cx","AbstractPopoverButton.react","Banzai","BanzaiLogger","NotificationTokens","NotifTestIDs","PopoverMenu.react","QE2Logger","React","ReactXUIMenu","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("ReactXUIMenu").Item;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.$1=function(){this.props.onHide&&this.props.onHide(),this.$2("close")}.bind(this),this.$3=function(){this.props.onShow&&this.props.onShow();this.props.logMenuExposure&&b("QE2Logger").logExposureForUser("pages_growth_optout_button");this.$2("open");var a={notif_type:this.props.notif_type};b("Banzai").post("notif_chevron_on_click",a)}.bind(this),c}a.prototype.$2=function(a){a={event:a,notif_type:this.props.notif_type,notif_id:parseInt(b("NotificationTokens").untokenizeIDs([this.props.alert_id])[0],10)};b("BanzaiLogger").log("NotifJewelMenuLoggerConfig",a)};a.prototype.$4=function(){__p&&__p();var a=this.props.notificationOptions;a=a&&a.map(function(a){var c,d;d=(d=a)!=null?(d=d.option_display)!=null?(d=d.text)!=null?d.text:d:d:d;if(d==null)return null;var e=a.server_action||"";c=((c=a)!=null?(c=c.client_info)!=null?c.action_type:c:c)||"";return b("React").createElement(i,{onclick:function(){return this.props.onMenuOptionClick(a)}.bind(this),key:c+":"+e},b("React").createElement("div",{className:"_18qh"},d))}.bind(this)).filter(function(a){return a!=null});return a==null||a.length===0?null:b("React").createElement(b("ReactXUIMenu"),null,a)};a.prototype.render=function(){var a=this.$4();if(!a)return null;var c={button:b("React").createElement("a",{href:"#","aria-label":"Notification options",className:"_1_0d"})};a=b("React").createElement(b("PopoverMenu.react"),{"data-testid":b("NotifTestIDs").CHEVRON,alignh:"right",menu:a,className:b("joinClasses")(this.props.className,"_1_0c"),disableArrowKeyActivation:!0,onShow:this.$3,onHide:this.$1},b("React").createElement(b("AbstractPopoverButton.react"),{config:c,haschevron:!1,image:null,label:null}));return a};e.exports=a}),null);
__d("FlexibleBlock.react",["cx","invariant","LeftRight.react","React","keyMirror"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i,j=b("keyMirror")({left:!0,right:!0});function k(a){a.flex&&a.flex in l.FLEX||h(0),a.children&&a.children.length===2||h(0)}i=babelHelpers.inherits(l,b("React").Component);i&&i.prototype;l.prototype.render=function(){"use strict";k(this.props);var a,c=this.props,d=c.flex;c=babelHelpers.objectWithoutProperties(c,["flex"]);var e=this.props.children[0],f=this.props.children[1];d=d==j.left;d?(e=e,a=b("LeftRight.react").DIRECTION.right):(e=f,a=b("LeftRight.react").DIRECTION.left);f=b("React").createElement("div",{className:"_42ef"},e);return b("React").createElement(b("LeftRight.react"),babelHelpers["extends"]({},c,{direction:a}),d?f:this.props.children[0],d?this.props.children[1]:f)};function l(){"use strict";i.apply(this,arguments)}l.FLEX=j;e.exports=l}),null);
__d("NotificationThumbnail.react",["React","RoundImage.react"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("React").createElement(b("RoundImage.react"),a)}e.exports=a}),null);
__d("NotificationListItemContents.react",["cx","ix","BizSiteIdentifier.brands","FlexibleBlock.react","ImageBlock.react","NotificationAttachment.react","NotificationFooter.react","NotificationInterpolator","NotificationThumbnail.react","React","TextWithEntities.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j="page_invite";b("BizSiteIdentifier.brands").isBizSite();var k=h("97000");i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.$1=function(){var a=this.props.notification.title;return!a?null:b("React").createElement(b("TextWithEntities.react"),babelHelpers["extends"]({interpolator:b("NotificationInterpolator")},a,{renderEmoji:!0,renderEmoticons:!0}))};a.prototype.$2=function(){if(this.props.notification.notif_type===j){var a=this.props.notification.tracking;a=JSON.parse(a);return a.context_id}return null};a.prototype.$3=function(){if(this.props.notification.notif_type===j){var a=this.props.notification.tracking;a=JSON.parse(a);return a.subtype}return null};a.prototype.render=function(){var a=this.$1(),c=this.$2(),d=this.$3(),e=this.props,f=e.hideIcon,g=e.isNotifsPage,h=e.noPhotoPreviews,i=e.shortenTimestamp;e=e.notification;var j=e.icon,l=e.previewImage,m=e.thumbnail,n=e.timestamp;e=e.notif_type;f=b("React").createElement(b("NotificationFooter.react"),{icon:f?null:j,shortenTimestamp:i,timestamp:n,notif_type:e,pageID:c,sub_type:d});return b("React").createElement(b("ImageBlock.react"),null,b("React").createElement(b("NotificationThumbnail.react"),{alt:"",className:(g?"":"_62bh")+(g?" _62bi":""),src:m&&m.uri||k}),b("React").createElement(b("FlexibleBlock.react"),{flex:b("FlexibleBlock.react").FLEX.left},b("React").createElement("div",{className:"_4l_v"},a,f),h?null:b("React").createElement(b("NotificationAttachment.react"),{image:l})))};function a(){i.apply(this,arguments)}e.exports=a}),null);
__d("NotificationListItemOptionConfirmation.react",["cx","fbt","List.react","NotificationInterpolator","React","TextWithEntities.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();function a(a){__p&&__p();var c=a.notificationOptions,d=a.undoText,e=a.undoToken;return b("React").createElement(b("React").Fragment,null,d!=null||e!=null?b("React").createElement("div",{className:"_4ai"},d!=null?b("React").createElement(b("TextWithEntities.react"),{interpolator:b("NotificationInterpolator"),ranges:d.ranges,aggregatedranges:d.aggregated_ranges,text:d.text}):null,e!=null?b("React").createElement("a",{href:"#",onClick:function(){return a.onUndoClick()},className:"mls"},h._("Undo")):null):null,b("React").createElement(b("List.react"),{border:"none",className:"_1v4c",spacing:"small"},c?c.map(function(c){var d,e;e=(e=c)!=null?(e=e.option_display)!=null?(e=e.text)!=null?e.text:e:e:e;if(e==null)return null;var f=c.server_action||"";d=((d=c)!=null?(d=d.client_info)!=null?d.action_type:d:d)||"";return b("React").createElement("li",{key:d+":"+f},b("React").createElement("a",{className:"mls",href:"#",onClick:function(){return a.onMenuOptionClick(c)}},e))}):null))}e.exports=a}),null);
__d("ReadToggle.react",["cx","Event","Keys","React","emptyFunction","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);h=d&&d.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.$2=function(event){b("Event").getKeyCode(event)===b("Keys").RETURN&&this.props.onClick()}.bind(this),c}a.prototype.render=function(){if(this.props.isRead)return b("React").createElement("div",{"aria-label":this.props.readLabel,className:this.$1(),"data-hover":"tooltip","data-tooltip-alignh":"center","data-tooltip-content":this.props.readLabel,onClick:this.props.onClick,onKeyDown:this.$2,role:"button",tabIndex:0});else return b("React").createElement("div",{"aria-label":this.props.unreadLabel,className:this.$1(),"data-hover":"tooltip","data-tooltip-alignh":"center","data-tooltip-content":this.props.unreadLabel,onClick:this.props.onClick,onKeyDown:this.$2,role:"button",tabIndex:"0"})};a.prototype.$1=function(){return b("joinClasses")(this.props.className,(this.props.isRead?"":"_5c9q")+(this.props.isRead?" _5c9_":""))};a.propTypes={isRead:c.bool.isRequired,onClick:c.func.isRequired,readLabel:c.node.isRequired,unreadLabel:c.node.isRequired};a.defaultProps={onClick:b("emptyFunction")};e.exports=a}),null);
__d("NotificationListItemReadToggle.react",["fbt","React","ReadToggle.react"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var c=a.className,d=a.isRead,e=a.canMarkUnread;a=a.onToggleClick;return b("React").createElement(b("ReadToggle.react"),{className:c,isRead:d,onClick:a,readLabel:e?g._("Mark as Unread"):g._("Read"),unreadLabel:g._("Mark as Read")})}e.exports=a}),null);
__d("NotificationListItemBase.react",["csx","cx","AsyncResponse","BizSiteIdentifier.brands","Bootloader","InternalNotificationOptionHandler","LogicalGridCell.react","LogicalGridRow.react","NotificationConstants","NotificationListConfig","NotificationListItemChevron.react","NotificationListItemContents.react","NotificationListItemOptionConfirmation.react","NotificationListItemReadToggle.react","NotificationTracking","NotificationUpdates","NotificationUserActions","NotifTestIDs","Parent","React","ReactDOM","Style","SubscriptionsHandler","TrackingNodes","compactArray","createObjectFrom","promiseDone"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;b("BizSiteIdentifier.brands").isBizSite();-1;function j(a){__p&&__p();if(a.length===0)return;a=a[0];var c=a.description,d=a.is_silent,e=a.is_transient;a=a.message;var f=new(b("AsyncResponse"))();f.errorSummary=c;f.errorDescription=a;f.silentError=d;f.transientError=e;b("AsyncResponse").defaultErrorHandler(f)}c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.prefetched=!1,this.isLiveVideo=null,this.$1=!1,this.$3=new(b("SubscriptionsHandler"))(),this.state={actionsTaken:[],hasError:!1,sendingFeedback:!1},this.$5=function(){b("NotificationUserActions").setNextIsFromReadButton(!0),this.props.isRead?this.props.canMarkUnread&&(this.props.onMarkItemUnread&&this.props.onMarkItemUnread()):this.props.onMarkItemRead&&this.props.onMarkItemRead()}.bind(this),this.$8=function(a){__p&&__p();var c,d=(c=a)!=null?(c=c.client_info)!=null?c.action_type:c:c;if(d==null)return;if(b("InternalNotificationOptionHandler").tryHandle(this.$4(),a,this.props.getDebugData))return;var e=a.server_action;if(e==null)return;this.setState({sendingFeedback:!0});b("promiseDone")(b("NotificationUserActions").sendNotifOption(e),function(c){__p&&__p();if(this.$1)return;this.setState(function(f){var g;g=(g=c)!=null?(g=g.notif_option_action)!=null?(g=g.notification)!=null?(g=g.notif_option_sets)!=null?(g=g.edges)!=null?(g=g[0])!=null?(g=g.node)!=null?(g=g.notif_options)!=null?g.edges:g:g:g:g:g:g:g:g;f=babelHelpers["extends"]({},f,{actionsTaken:f.actionsTaken.concat([{actionToken:e,type:d,nextNotificationOptions:g&&b("compactArray")(g.map(function(a){a=a.node;return a})),undoText:(f=a)!=null?(f=f.option_display)!=null?f.undo_text:f:f,undoToken:(g=a)!=null?(g=g.client_info)!=null?g.undo_server_action:g:g}]),sendingFeedback:!1});b("NotificationUpdates").handleUpdate(b("NotificationConstants").PayloadSourceType.USER_ACTION,{hiddenState:b("createObjectFrom")([this.$4()],this.$11(f))});return f}.bind(this))}.bind(this),this.$13)}.bind(this),this.$14=function(){__p&&__p();var a=this.$4();this.setState({sendingFeedback:!0});var c=this.state.actionsTaken[this.state.actionsTaken.length-1];c&&c.undoToken!=null&&b("promiseDone")(b("NotificationUserActions").sendNotifOption(c.undoToken),function(c){if(this.$1)return;this.setState(function(c){c=babelHelpers["extends"]({},c,{actionsTaken:c.actionsTaken.slice(0,this.state.actionsTaken.length-1),sendingFeedback:!1});b("NotificationUpdates").handleUpdate(b("NotificationConstants").PayloadSourceType.USER_ACTION,{hiddenState:b("createObjectFrom")([a],this.$11(c))});return c}.bind(this))}.bind(this),this.$13)}.bind(this),this.$13=function(a){a=a.errors;if(this.$1)return;j(a);this.setState({sendingFeedback:!1})}.bind(this),c}a.prototype.$4=function(){"use strict";return this.props.notification.alert_id};a.prototype.$6=function(){"use strict";var a=this.props,c=a.canMarkUnread;a=a.isRead;return b("React").createElement(b("NotificationListItemReadToggle.react"),{className:"_55m9 _55ma",canMarkUnread:c,isRead:!!a,onToggleClick:this.$5})};a.prototype.$7=function(){__p&&__p();var a=this.props,c=a.onChevronHide,d=a.onChevronShow;a=a.notification;var e=a.alert_id,f=a.notif_option_sets,g=a.notif_type;a=a.renderer_data;var h=!1;a&&(a.__typename==="FallbackNotificationRendererData"||a.__typename==="LiveVideoNotificationRendererData")&&a.should_log_menu_exposure!=null&&(h=a.should_log_menu_exposure);f=(a=f)!=null?(a=a.edges)!=null?(a=a[0])!=null?(a=a.node)!=null?(a=a.notif_options)!=null?a.edges:a:a:a:a:a;return b("React").createElement(b("NotificationListItemChevron.react"),{alert_id:e,className:"_55m9",notif_type:g,notificationOptions:f&&b("compactArray")(f.map(function(a){a=a.node;return a})),onHide:c,onMenuOptionClick:this.$8,onShow:d,logMenuExposure:h})};a.prototype.shouldComponentUpdate=function(a,b){"use strict";b=this.props.visible!==a.visible||this.props.isRead!==a.isRead||this.props.isSelected!==a.isSelected||this.props.notification.timestamp!==a.notification.timestamp||this.state.actionsTaken.length!==b.actionsTaken.length||this.state.sendingFeedback!==b.sendingFeedback||this.state.hasError!==b.hasError;return b||!!this.props.hasCustomForeground&&this.props.paused!==a.paused};a.prototype.UNSAFE_componentWillUpdate=function(a){"use strict";if(!this.$2||!a.isSelected||this.props.isSelected)return;a=b("ReactDOM").findDOMNode(this.$2);a&&a.scrollIntoViewIfNeeded&&a.scrollIntoViewIfNeeded(!1)};a.prototype.UNSAFE_componentWillReceiveProps=function(a){"use strict";this.props.paused&&!a.paused&&!this.props.visible&&this.state.actionsTaken.length>0&&this.setState({actionsTaken:[]})};a.prototype.componentDidMount=function(){"use strict";if(this.$9()){var a=b("Bootloader").loadModules(["VideoPlayerMetaData"],function(a){b("promiseDone")(a.genVideoData(this.$10()),null,function(a){this.setState({hasError:!0})}.bind(this))}.bind(this),"NotificationListItemBase.react");this.$3.addSubscriptions(a)}};a.prototype.componentDidUpdate=function(){"use strict";if(this.props.enableHubView&&this.props.isSelected&&this.$2){var a=b("ReactDOM").findDOMNode(this.$2);a&&typeof a.focus==="function"&&a.focus()}};a.prototype.componentWillUnmount=function(){"use strict";this.$3&&this.$3.release(),delete this.$3};a.prototype.$11=function(a){a===void 0&&(a=this.state);return a.actionsTaken.some(function(a){return a.type==="HIDE"})};a.prototype.$12=function(){"use strict";var a=b("ReactDOM").findDOMNode(this);if(!a)return!1;a=b("Parent").bySelector(a,".__tw");a=a?a.parentNode:null;return a?b("Style").get(a,"display")!=="none":!1};a.prototype.$15=function(a){"use strict";if(this.state.actionsTaken.length>=2)return null;var b={};this.state.actionsTaken.forEach(function(a){b[a.actionToken]=!0});return a.filter(function(a){a=a.server_action;return a==null||b[a]!==!0})};a.prototype.$10=function(){"use strict";var a=b("NotificationTracking").getEncodedTrackingData(this.props.notification,this.props.row);return a.content_id||null};a.prototype.$9=function(){"use strict";if(this.isLiveVideo===null){var a=b("NotificationTracking").getTrackingString(this.props.notification,this.props.row);this.isLiveVideo=a.indexOf("live_video")!==-1}return!!this.isLiveVideo};a.prototype.render=function(){"use strict";__p&&__p();if(this.state.hasError)return null;if(!this.props.visible&&!this.$11())return b("React").createElement("li",{className:"_4_62"});var a="_33c"+(b("NotificationListConfig").isWork?" _1rqj":"")+(this.props.isRead?"":" jewelItemNew")+(this.state.sendingFeedback?" _4m8s":"")+(this.props.hasCustomForeground?" _3u5n":"")+(this.props.isSelected?" _u-o":""),c=b("NotificationTracking").getTrackingString(this.props.notification,this.props.row),d=this.props.rowIndex;if(this.state.actionsTaken.length>0){var e=this.state.actionsTaken[this.state.actionsTaken.length-1];return b("React").createElement("li",{className:a,"data-gt":c,"data-testid":b("NotifTestIDs").NOTIF_LIST_ITEM},b("React").createElement(b("LogicalGridRow.react"),{className:"_dre",rowIndex:d,component:b("React").createElement("div",null)},b("React").createElement(b("LogicalGridCell.react"),{columnIndex:0,component:b("React").createElement("div",null)},b("React").createElement(b("NotificationListItemOptionConfirmation.react"),{notificationOptions:e.nextNotificationOptions?this.$15(e.nextNotificationOptions):null,onUndoClick:this.$14,onMenuOptionClick:this.$8,undoText:e.undoText,undoToken:e.undoToken}))))}e=b("React").createElement(b("NotificationListItemContents.react"),this.props);e=this.props.renderLink(e);return b("React").createElement("li",{className:a,"data-ft":b("TrackingNodes").getTrackingInfo(b("TrackingNodes").types.NOTIFICATION_ITEM,this.props.row),"data-gt":c,"data-alert-id":this.$4(),"data-testid":b("NotifTestIDs").NOTIF_LIST_ITEM},b("React").createElement(b("LogicalGridRow.react"),{className:"_dre anchorContainer",rowIndex:d,component:b("React").createElement("div",null)},b("React").createElement(b("LogicalGridCell.react"),{columnIndex:0,component:b("React").createElement("div",null)},e),b("React").createElement("ul",{className:"_55mc"},b("React").createElement(b("LogicalGridCell.react"),{columnIndex:1,component:b("React").createElement("li",{className:"_h_c"})},this.$6()),b("React").createElement(b("LogicalGridCell.react"),{columnIndex:2,component:b("React").createElement("li",{className:"_h_d"}),disableFocusRecovery:!0},this.$7()))))};e.exports=a}),null);
__d("GiftCredits",["AsyncRequest","Dialog","URI"],(function(a,b,c,d,e,f){__p&&__p();var g={dialog:null,callback:null,purchaseLock:!1,purchaseLockExpiryThreshold:5e3,purchaseLockTimeoutId:null,getPurchaseCreditPrompt:function(a,b,c,d){g.main(a,null,null,null,c,null,null,null,"BuyCredits",{},d)},redeemGiftcard:function(a,c,d){var e=new(b("URI"))(document.location).setPath("/giftcards").toString();g.main(a,null,null,e,null,null,null,null,c,{},d)},getPrompt:function(a,b,c,d,e,f,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){g.main(a,b,c,d,e,f,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y)},main:function(a,c,d,e,f,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){if(g.isPurchaseLocked())return!1;g.setPurchaseLock(!0);h={_path:"pay",method:"pay",display:"async",app_id:a,receiver:c,api_key:i,credits_purchase:p,action:k,next:e,dev_purchase_params:JSON.stringify(l),additional_params:JSON.stringify(m),order_info:JSON.stringify(d),product:n,package_id:o,request_id:q,sdk:r,quantity:s,quantity_min:t,quantity_max:u,test_currency:v,pricepoint_id:w,user:x,user_hash:y,ingame_gift_data:z};j=new(b("AsyncRequest"))().setURI("/fbml/ajax/dialog/").setData(h).setMethod("GET").setReadOnly(!0).setStatusElement("commerce_get_more_loading");g.callback=f;g.dialog=new(b("Dialog"))().setAsync(j).setModal(!0).setCloseHandler(function(a){g.setPurchaseLock(!1),f(a)}).show()},isPurchaseLocked:function(){return g.purchaseLock},setPurchaseLock:function(a){g.purchaseLock=a;a?g.purchaseLockTimeoutId=setTimeout(function(){g.setPurchaseLock(!1)},g.purchaseLockExpiryThreshold):clearTimeout(g.purchaseLockTimeoutId);return!0}};e.exports=g}),null);
__d("legacy:giftcredits",["GiftCredits"],(function(a,b,c,d,e,f){a.GiftCredits=b("GiftCredits")}),3);
__d("TimePlayingEnum",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({FIVE_SECONDS:"five_seconds",TEN_SECONDS:"ten_seconds",THIRTY_SECONDS:"thirty_seconds",ONE_MINUTE:"one_minute",TWO_MINUTES:"two_minutes",FIVE_MINUTES:"five_minutes"})}),null);
__d("CanvasActivityLogger",["Banzai","Event","ScriptPath","TimePlayingEnum","Visibility","clickRefAction","getActiveElement","setIntervalAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g=1e3,h=!1,i=!1,j=!1,k=!1,l=null,m=null,n=null,o=0,p=0,q=0,r={5:b("TimePlayingEnum").FIVE_SECONDS,10:b("TimePlayingEnum").TEN_SECONDS,30:b("TimePlayingEnum").THIRTY_SECONDS,60:b("TimePlayingEnum").ONE_MINUTE,120:b("TimePlayingEnum").TWO_MINUTES,300:b("TimePlayingEnum").FIVE_MINUTES},s={CANVAS_ACTIVE:"active",CANVAS_INACTIVE:"inactive"},t=s.CANVAS_INACTIVE;function u(){return k&&j&&(h||i)}function v(){__p&&__p();if(t==s.CANVAS_ACTIVE&&!u()){t=s.CANVAS_INACTIVE;var a=Date.now()-m;b("ScriptPath").closeOverlayView("canvas",m?{ms_since_open:a}:null);p+=a;for(var c in r)if(Object.prototype.hasOwnProperty.call(r,c)&&p>c*g){var d=r[c];b("Banzai").post("canvas_playing_game",{played:d,app_id:q});delete r[c]}if(Date.now()-n>60*g){d=a+o;b("Banzai").post("canvas_time_spent",[d,q]);n=Date.now();o=0}else o=m?a+o:o}else t==s.CANVAS_INACTIVE&&u()&&(t=s.CANVAS_ACTIVE,m=Date.now(),n||(n=Date.now()),b("ScriptPath").openOverlayView("canvas"))}b("Banzai").subscribe(b("Banzai").SHUTDOWN,function(){u()&&b("ScriptPath").closeOverlayView("canvas",m?{ms_since_open:Date.now()-m}:null)});function w(a){__p&&__p();b("clickRefAction")("canvas",l,a,"FORCE").set_namespace("canvas");switch(a.type){case"beforeunload":k=!1;h=!1;i=!1;break;case"visible":k=!0;break;case"hidden":k=!1;break;case"mouseover":i=!0;break;case"mouseout":i=!1;break;case"focus":case"blur":h=b("getActiveElement")()==document.getElementById("iframe_canvas");break;default:break}v()}function x(a){var b=document.createEvent("FocusEvent");b.initEvent(a,!0,!0);return b}a={trackState:function(a,c){q=c,k=!b("Visibility").isHidden(),j=document.hasFocus(),h=b("getActiveElement")()==document.getElementById("iframe_canvas"),i=a.querySelector(":hover")!==null,v(),b("Event").listen(a,"mouseover",w),b("Event").listen(a,"mouseout",w),b("Event").listen(window,"blur",w),b("Event").listen(window,"focus",w),b("Event").listen(window,"beforeunload",w),b("Visibility").addListener("hidden",function(){return w(x("hidden"))}),b("Visibility").addListener("visible",function(){return w(x("visible"))}),b("setIntervalAcrossTransitions")(function(){j=document.hasFocus(),v()},g)}};e.exports=a}),null);
__d("CanvasResizer",["CSS","DOMEventListener","Vector","createArrayFromMixed"],(function(a,b,c,d,e,f){__p&&__p();var g;function h(){__p&&__p();var a,c=document.documentElement;window.innerHeight?a=window.innerHeight:c&&c.clientHeight?a=c.clientHeight:a=document.body.clientHeight;for(var c=0;c<g.length;c++){var d=g[c];if(!b("CSS").hasClass(d,"noresize")){var e=b("Vector").getElementPosition(d,"document").y;e=a-e;d.style.height=e/(g.length-c)+"px"}}}b("DOMEventListener").add(window,"resize",h);a={smartSizingFrameAdded:function(){g=[];var a=b("createArrayFromMixed")(document.getElementsByTagName("iframe"));a.forEach(function(a){b("CSS").hasClass(a,"smart_sizing_iframe")&&!b("CSS").hasClass(a,"noresize")&&(b("CSS").removeClass(a,"canvas_iframe_util"),g.push(a))});h()}};e.exports=a}),null);
if (self.CavalryLogger) { CavalryLogger.start_js(["SYOn3"]); }

__d("MessengerThreadUtils.bs",["FBID.bs","bs_caml_obj","MercuryIDs","MessagingTag","ImmutableObject","MessengerJoinableModeType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,c){return c.filter(function(c){return b("bs_caml_obj").caml_notequal(c,a)}).length<=1}function h(a,c,d,e){var f=b("MercuryIDs").tokenize(c),h=f.type;f=f.value;var i=h==="user";return new(b("ImmutableObject"))({thread_id:c,participants:Array.from(d),admin_ids:[],name:"",snippet:"",snippet_sender:null,unread_count:e==null?0:e,message_count:0,image_src:null,timestamp:0,other_user_fbid:i?b("FBID.bs").ofStringExn(f):null,is_canonical_user:h==="user",is_canonical:g(a,d),is_subscribed:!0,folder:b("MessagingTag").INBOX,is_archived:!1,is_page_follow_up:!1,admin_model_status:null,approval_mode:0,approval_queue_ids:[],associated_object:null,can_reply:undefined,cannot_reply_reason:null,comm_item_owners:null,comm_source_id:null,comm_status:null,custom_like_icon:null,custom_nickname:null,customization_enabled:!1,description:null,ephemeral_ttl_mode:0,footer_color:null,game_id:null,group_approval_queue:null,groups_sync_fb_url:null,groups_sync_status:null,has_email_participant:!1,has_montage:!1,header_color:null,is_canonical_neo_user:!1,is_pin_protected:!1,is_pinned:!1,is_thread_queue_enabled:!1,joinable_mode:{mode:0,link:""},last_message_timestamp:0,last_message_type:null,last_read_timestamp:0,lightweight_event:null,lightweight_events:{},marketplace_thread_data:null,mentions_mute_mode:0,mute_until:null,object_association_type:null,page_comm_item_id:null,page_thread_info:null,participant_add_mode:null,participants_event_status:null,reactions_mute_mode:0,read_only:!1,recipients_loadable:!1,rtc_call_data:null,server_timestamp:0,snippet_attachments:[],solid_color:null,subtitle:null,theme_id:null,thread_fbid:null,thread_type:null,gradient_colors:[],joinable_link:null})}function a(a,c,d,e){a=h(a,c,d,null);return b("ImmutableObject").set(a,{associated_object:e,name:e.name,joinable_mode:{mode:b("MessengerJoinableModeType").JOINABLE,link:""}})}f.isCanonicalFromInitialParticipants=g;f.createNewLocalThread=h;f.createNewLocalGroupGeneralThread=a}),null);
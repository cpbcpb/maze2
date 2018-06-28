if (self.CavalryLogger) { CavalryLogger.start_js(["fHANF"]); }

__d("Keyframes",["Promise","Bootloader","NavigationMetrics","XHRRequest","emptyFunction","once","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="::",h="tti";b("NavigationMetrics").addRetroactiveListener(b("NavigationMetrics").Events.EVENT_OCCURRED,function(a,b){var event=b.event;h=event});function i(){return new(b("Promise"))(function(a){b("Bootloader").loadModules(["KeyframesRenderer"],function(b){return a(b)},"Keyframes")})}function j(){return new(b("Promise"))(function(a){b("Bootloader").loadModules(["FBKeyframesLoggedSession"],function(b){return a(b)},"Keyframes")})}function k(){return new(b("Promise"))(function(a){b("Bootloader").loadModules(["KeyframesAssetDecoder"],function(b){return a(b)},"Keyframes")})}function l(){return b("Promise").all([j(),k(),i()]).then(b("emptyFunction"))}function m(a){return!a||typeof a!=="string"?b("Promise").reject("Request: invalid uri "+a):new(b("Promise"))(function(c,d){new(b("XHRRequest"))(a).setMethod("GET").setResponseType("arraybuffer").setErrorHandler(function(a){return d(a)}).setAbortHandler(function(a){return d(a)}).setResponseHandler(function(a){return c(a)}).send()})}function n(a){this.$3=function(){var a=n.timestamp();b("promiseDone")(this.$1,function(b){return b.error(a)})}.bind(this),this.$1=j().then(function(b){return new b(a)}),this.$2=this.$1.then(function(a){return a.getPerformanceLogIfEnabled()})}n.timestamp=function(){return{value:Date.now(),phase:h}};n.prototype.scheduleDecode=function(a,c){__p&&__p();var d=a.then(function(){return n.timestamp()}),e=a.then(function(){return c}).then(function(){return n.timestamp()});a=b("Promise").all([this.$1,d]).then(function(a){var c=a[0];a=a[1];c=c.startDecode(a);return b("Promise").all([c,e])});b("promiseDone")(a,function(a){var b=a[0];a=a[1];return b(a)},this.$3)};n.prototype.markAsPackage=function(){b("promiseDone")(this.$1,function(a){return a.markAsPackage()})};n.prototype.maybeGetPerformanceLog=function(){return this.$2};function o(a,c){__p&&__p();this.$2=!1;a=b("Promise").all([m(a),k()]);this.$1=a.then(function(a){var c=a[0];a=a[1];return a.getDocumentByteSlicesFromPackage(c).then(function(a){return a.map(function(a,c){return b("once")(function(b){return new p(a,b)})})})});c=new n({projectName:c.projectName,assetName:c.packageName});c.markAsPackage();c.scheduleDecode(a,this.$1);b("promiseDone")(this.$1,function(){return this.$2=!0}.bind(this),function(){return this.$2=!0}.bind(this))}o.getSliceSession=function(a,b){return new n({projectName:a.projectName,assetName:a.packageName+g+b})};o.prototype.isDone=function(){return this.$2};o.prototype.getAllAssets=function(a){return this.$1.then(function(c){return b("Promise").all(c.map(function(b,c){return b(o.getSliceSession(a,c)).getAsset()}))})};o.prototype.getRendererAtIndex=function(a,c){return this.$1.then(function(d){var e=o.getSliceSession(c,a);return d[a]?d[a](e).getRenderer(e):b("Promise").reject("Out of bounds index in package: "+a)})};function p(a,c){__p&&__p();this.$1=!1;a=b("Promise").all([typeof a==="string"?m(a):a,k()]);this.$2=a.then(function(a){var b=a[0];a=a[1];return a.fromDocumentBytes(b)});c.scheduleDecode(a,this.$2);b("promiseDone")(this.$2,function(){return this.$1=!0}.bind(this),function(){return this.$1=!0}.bind(this))}p.prototype.isDone=function(){return this.$1};p.prototype.getAsset=function(){return this.$2};p.prototype.getRenderer=function(c){var a=i();return b("Promise").all([this.$2,a,c.maybeGetPerformanceLog()]).then(function(a){var b=a[0],c=a[1];a=a[2];return new c(b,a)})};var q={},r={};a={requestRenderer:function(a,b){b=new n(b);q[a]||(q[a]=new p(a,b));return q[a].getRenderer(b)},preload:function(a,c){if(!q[a]){c=new n(c);q[a]=new p(a,c)}c=l();a=q[a].getAsset();return b("Promise").all([c,a]).then(b("emptyFunction"))},requestRendererFromBytes:function(a,b){b=new n(b);return new p(a,b).getRenderer(b)},requestRendererFromPackage:function(a,b,c){r[a]||(r[a]=new o(a,c));return r[a].getRendererAtIndex(b,c)},preloadPackage:function(a,c){r[a]||(r[a]=new o(a,c));var d=l();a=r[a].getAllAssets(c);return b("Promise").all([d,a]).then(b("emptyFunction"))},hasLoaded:function(a){return!!(q[a]&&q[a].isDone()||r[a]&&r[a].isDone())},clearCache:function(){q={},r={}}};e.exports=a}),null);
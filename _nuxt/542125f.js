(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{263:function(t,e,n){"use strict";n.r(e);n(272);var r={components:{},props:{badge:{default:null,type:Number}}},o=(n(284),n(18)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button",on:{click:function(e){return e.preventDefault(),t.$emit("click")}}},[n("div",{staticClass:"button__content"},[t._t("default")],2),t._v(" "),t.badge?n("span",{staticClass:"button__badge"},[t._v(t._s(t.badge))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},264:function(t,e,n){var content=n(281);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("0003e882",content,!0,{sourceMap:!1})},265:function(t,e,n){var content=n(285);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("52788b82",content,!0,{sourceMap:!1})},266:function(t,e,n){var content=n(287);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("de62f4a4",content,!0,{sourceMap:!1})},267:function(t,e,n){var content=n(289);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("2e65c9de",content,!0,{sourceMap:!1})},268:function(t,e,n){var content=n(291);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("904e1100",content,!0,{sourceMap:!1})},269:function(t,e,n){var content=n(293);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("bf9380c0",content,!0,{sourceMap:!1})},270:function(t,e,n){var content=n(295);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("66dbdb1a",content,!0,{sourceMap:!1})},272:function(t,e,n){"use strict";var r=n(13),o=n(7),c=n(96),l=n(24),d=n(16),f=n(31),m=n(181),_=n(69),h=n(8),y=n(97),v=n(70).f,x=n(30).f,k=n(19).f,S=n(282).trim,w=o.Number,E=w.prototype,C="Number"==f(y(E)),O=function(t){var e,n,r,o,c,l,d,code,f=_(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=S(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(c("Number",!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var j,N=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof N&&(C?h((function(){E.valueOf.call(n)})):"Number"!=f(n))?m(new w(O(e)),n,N):O(e)},D=r?v(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;D.length>I;I++)d(w,j=D[I])&&!d(N,j)&&k(N,j,x(w,j));N.prototype=E,E.constructor=N,l(o,"Number",N)}},273:function(t,e,n){"use strict";n.r(e);var r={},o=(n(280),n(18)),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"card"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},274:function(t,e,n){"use strict";n.r(e);n(272);var r=n(263),o=n(275),c=n(276),l={components:{sButton:r.default,ExtendedDayStats:o.default,expand:c.default},props:{day:{required:!0,type:Object},max:{required:!0,type:Number}},data:function(){return{statsExpanded:!1}},computed:{date:function(){return new Date(this.day.date)},barStyle:function(){return"width: ".concat(100*this.day.data.length/this.max,"%")}},methods:{toggleExpandedStats:function(){this.statsExpanded=!this.statsExpanded}}},d=(n(292),n(18)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"day-stats"},[n("div",{staticClass:"day-stats__main"},[n("span",{staticClass:"day-stats__date"},[t._v(t._s(t.day.date))]),t._v(" "),n("i",{staticClass:"day-stats__bar",style:t.barStyle}),t._v(" "),n("s-button",{staticClass:"day-stats__expand",attrs:{badge:t.statsExpanded?null:t.day.data.length},on:{click:t.toggleExpandedStats}},[n("expand",{attrs:{expanded:t.statsExpanded}})],1)],1),t._v(" "),t.statsExpanded?n("extended-day-stats",{attrs:{smokes:t.day.data}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Expand:n(276).default,SButton:n(263).default,ExtendedDayStats:n(275).default})},275:function(t,e,n){"use strict";n.r(e);var r={components:{ExtendedDayStatsEntry:n(277).default},props:{smokes:{required:!0,type:Array}}},o=(n(290),n(18)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"extended-day-stats"},this._l(this.smokes,(function(t){return e("extended-day-stats-entry",{key:t.toISOString(),attrs:{smoke:t}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ExtendedDayStatsEntry:n(277).default})},276:function(t,e,n){"use strict";n.r(e);var r={props:{expanded:Boolean},computed:{top:function(){return this.expanded?8:4},bottom:function(){return this.expanded?4:8}}},o=n(18),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"expand-icon",attrs:{viewBox:"0 0 12 12",width:"100%",height:"100%"}},[e("g",[e("line",{staticClass:"expand-icon__left",attrs:{x1:"2",y1:this.top,x2:"6.5",y2:this.bottom,stroke:"black","stroke-width":"2","stroke-linecap":"round"}}),this._v(" "),e("line",{staticClass:"expand-icon__right",attrs:{x1:"6.5",y1:this.bottom,x2:"10",y2:this.top,stroke:"black","stroke-width":"2","stroke-linecap":"round"}})])])}),[],!1,null,null,null);e.default=component.exports},277:function(t,e,n){"use strict";n.r(e);var r=n(278),o=n(279),c={components:{SmokeActionsPopup:r.default,iActions:o.default},props:{smoke:{required:!0,type:Date}},data:function(){return{popup:!1}}},l=(n(288),n(18)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"extended-day-stats-entry"},[n("span",{staticClass:"extended-day-stats-entry__timestamp"},[t._v("\n    "+t._s(t.smoke.toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"}))+"\n  ")]),t._v(" "),n("s-button",{staticClass:"extended-day-stats-entry__actions-button button_color_dark-gray",on:{click:function(e){t.popup=!t.popup}}},[n("i-actions")],1),t._v(" "),n("smoke-actions-popup",{attrs:{smoke:t.smoke},model:{value:t.popup,callback:function(e){t.popup=e},expression:"popup"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IActions:n(279).default,SButton:n(263).default,SmokeActionsPopup:n(278).default})},278:function(t,e,n){"use strict";n.r(e);n(15);var r=n(3),o={components:{sButton:n(263).default},props:{value:Boolean,smoke:{required:!0,type:Date}},computed:{dialog:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{removeSmoke:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$store.dispatch("userData/removeSmoke",t);case 2:r=n.sent,e.$vs.notification(r.notification),e.dialog=!1;case 5:case"end":return n.stop()}}),n)})))()},closePopup:function(){this.dialog=!1}}},c=(n(286),n(18)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vs-dialog",{scopedSlots:t._u([{key:"header",fn:function(){return[n("strong",[t._v(t._s(t.smoke.toLocaleDateString("ru-RU")))])]},proxy:!0},{key:"footer",fn:function(){return[n("div",{staticClass:"smoke-actions-popup__actions"},[n("s-button",{on:{click:t.closePopup}},[t._v("\n        Отменить\n      ")]),t._v(" "),n("s-button",{staticClass:"button_alert",on:{click:function(e){return t.removeSmoke(t.smoke)}}},[t._v("\n        Удалить\n      ")])],1)]},proxy:!0}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("span",[t._v("\n    Вы уверены, что хотите удалить курение, совершённое в\n    "+t._s(t.smoke.toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"}))+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SButton:n(263).default})},279:function(t,e,n){"use strict";n.r(e);var r=n(18),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 12 12",width:"100%",height:"100%"}},[e("g",[e("circle",{attrs:{cx:"2",cy:"6",r:"1",fill:"black"}}),this._v(" "),e("circle",{attrs:{cx:"6",cy:"6",r:"1",fill:"black"}}),this._v(" "),e("circle",{attrs:{cx:"10",cy:"6",r:"1",fill:"black"}})])])}),[],!1,null,null,null);e.default=component.exports},280:function(t,e,n){"use strict";var r=n(264);n.n(r).a},281:function(t,e,n){(e=n(50)(!1)).push([t.i,".card{display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:1rem;width:100%;min-height:1rem;border-radius:.6rem;background-color:#fff;box-shadow:0 5px 25px 0 rgba(0,0,0,.1)}",""]),t.exports=e},282:function(t,e,n){var r=n(21),o="["+n(283)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(l,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},283:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},284:function(t,e,n){"use strict";var r=n(265);n.n(r).a},285:function(t,e,n){(e=n(50)(!1)).push([t.i,".button{-webkit-appearance:none;-moz-appearance:none;appearance:none;position:relative;display:block;padding:.6rem;border:none;border-radius:.6rem;background:#eee}.button_alert{background:#ba1f33;color:#fff}.button_color_dark-gray{background:#fff}.button_type_default{padding:.3rem}.button__content{width:100%;height:100%}.button__badge{position:absolute;top:-.3rem;padding:.1rem .2rem;width:1.6rem;color:#fff;font-weight:700;background:#2d2e2e;border-radius:.6rem}.button_border{border:2 solid #add8e6}",""]),t.exports=e},286:function(t,e,n){"use strict";var r=n(266);n.n(r).a},287:function(t,e,n){(e=n(50)(!1)).push([t.i,".smoke-actions-popup__actions{display:flex;justify-content:space-between}",""]),t.exports=e},288:function(t,e,n){"use strict";var r=n(267);n.n(r).a},289:function(t,e,n){(e=n(50)(!1)).push([t.i,".extended-day-stats-entry{display:flex;justify-content:space-between;align-items:center;padding:.2rem 0}.extended-day-stats-entry__actions-button{width:2rem;height:2rem}",""]),t.exports=e},290:function(t,e,n){"use strict";var r=n(268);n.n(r).a},291:function(t,e,n){(e=n(50)(!1)).push([t.i,".extended-day-stats{margin-top:.3rem;padding:.6rem;border-radius:.6rem;background:#eee}",""]),t.exports=e},292:function(t,e,n){"use strict";var r=n(269);n.n(r).a},293:function(t,e,n){(e=n(50)(!1)).push([t.i,".day-stats{width:100%}.day-stats__main{display:grid;grid-template-columns:1fr 2.3rem;grid-template-rows:1rem 1rem;grid-gap:.3rem;width:100%;min-height:2rem}.day-stats__bar,.day-stats__svg{grid-column:1/2;grid-row:2/3}.day-stats__bar{display:block;height:100%;background-color:#2d2e2e;border-radius:.6em}.day-stats__date{align-self:center}.day-stats__expand{grid-column:2/3;grid-row:1/3}",""]),t.exports=e},294:function(t,e,n){"use strict";var r=n(270);n.n(r).a},295:function(t,e,n){(e=n(50)(!1)).push([t.i,".dashboard{display:flex;flex-direction:column;align-items:center;margin:.6rem}.dashboard__actions{margin-bottom:.6rem}.dashboard__last-smoke{display:flex;flex-direction:column;align-items:center}.dashboard__last-smoke-text{display:block;font-size:1.5rem;font-weight:400}.dashboard__last-smoke-time{display:block;font-size:2rem;font-weight:700}.dashboard__last-smoke-date{display:block;font-size:1rem;font-weight:400;color:#666}.dashboard__day-stats:not(:last-of-type){margin-bottom:.7rem}",""]),t.exports=e},300:function(t,e,n){"use strict";n.r(e);n(27),n(52),n(38),n(71),n(72),n(58),n(39),n(15);var r=n(3),o=n(36),c=n(48),l=n(273),d=n(274);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={components:{sCard:l.default,dayStats:d.default},data:function(){return{doSmokeLoading:!1}},computed:m(m({},Object(c.b)({lastSmoke:function(t){return t.userData.lastSmoke},smokes:function(t){return t.userData.smokesV2},dailyMax:function(t){return t.userData.dailyMax}})),{},{lastSmokeTime:function(){return this.lastSmoke.toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"})},lastSmokeDate:function(){return this.lastSmoke.toLocaleDateString("ru-RU")}}),methods:{smoke:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Date,t.doSmokeLoading=!0,e.next=4,t.$store.dispatch("userData/doSmokeV2",n);case 4:r=e.sent,t.$vs.notification(r.notification),t.doSmokeLoading=!1;case 7:case"end":return e.stop()}}),e)})))()}}},h=(n(294),n(18)),component=Object(h.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard"},[n("s-card",{staticClass:"dashboard__actions"},[t.lastSmoke?n("div",{staticClass:"dashboard__last-smoke"},[n("span",{staticClass:"dashboard__last-smoke-text"},[t._v("Последнее курение")]),t._v(" "),n("strong",{staticClass:"dashboard__last-smoke-time"},[t._v(t._s(t.lastSmokeTime))]),t._v(" "),n("span",{staticClass:"dashboard__last-smoke-date"},[t._v(t._s(t.lastSmokeDate))])]):t._e(),t._v(" "),n("vs-button",{attrs:{loading:t.doSmokeLoading,size:"xl",success:""},on:{click:function(e){return e.preventDefault(),t.smoke(e)}}},[t._v("\n      Совершить курение\n    ")])],1),t._v(" "),t.smokes?n("s-card",t._l(t.smokes,(function(e){return n("day-stats",{key:e.date,staticClass:"dashboard__day-stats",attrs:{day:e,max:t.dailyMax}})})),1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SCard:n(273).default,DayStats:n(274).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(t,e,n){"use strict";n.r(e);n(15);var r=n(3),o={components:{LoginPopup:n(120).default},data:function(){return{isLoginPopupActive:!1,loggingOut:!1}},methods:{logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loggingOut=!0,e.next=3,t.$fireAuth.signOut();case 3:t.loggingOut=!1;case 4:case"end":return e.stop()}}),e)})))()}}},l=n(18),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.$store.state.auth.user?t._e():n("vs-button",{on:{click:function(e){e.preventDefault(),t.isLoginPopupActive=!t.isLoginPopupActive}}},[t._v("\n    Войти\n  ")]),t._v(" "),t.$store.state.auth.user?n("vs-button",{attrs:{loading:t.loggingOut},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("\n    Выйти\n  ")]):t._e(),t._v(" "),n("LoginPopup",{model:{value:t.isLoginPopupActive,callback:function(e){t.isLoginPopupActive=e},expression:"isLoginPopupActive"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoginPopup:n(120).default})},120:function(t,e,n){"use strict";n.r(e);n(15);var r=n(3),o={components:{sInput:n(121).default},props:{value:Boolean},data:function(){return{email:"",password:"",toggleSignUp:!1,loading:!1}},computed:{dialog:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},watch:{dialog:function(t){t||(this.email="",this.password="",this.toggleSignUp=!1)}},methods:{onLoginButtonClick:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$fireAuth.signInWithEmailAndPassword(t.email,t.password);case 4:t.dialog=!1,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t.$store.dispatch("notifications/showNotification",{title:"Неприятность...",text:"Произошла ошибка при входе :("});case 10:t.loading=!1;case 11:case"end":return e.stop()}}),e,null,[[1,7]])})))()},onSignUpButtonClick:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$fireAuth.createUserWithEmailAndPassword(t.email,t.password);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),t.$store.dispatch("notifications/showNotification",{title:"Неприятность...",text:"Произошла ошибка при регистрации :("});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}}},l=(n(228),n(18)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vs-dialog",{scopedSlots:t._u([{key:"header",fn:function(){return[t.toggleSignUp?t._e():n("strong",[t._v("Вход")]),t._v(" "),t.toggleSignUp?n("strong",[t._v("Регистрация")]):t._e()]},proxy:!0},{key:"footer",fn:function(){return[n("div",{staticClass:"footer-dialog"},[t.toggleSignUp?t._e():n("div",{staticClass:"new"},[t._v("\n        Впервые здесь?\n        "),n("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.toggleSignUp=!0}}},[t._v("Регистрация")])]),t._v(" "),t.toggleSignUp?n("div",{staticClass:"new"},[t._v("\n        Уже зарегистрированы?\n        "),n("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.toggleSignUp=!1}}},[t._v("Вход")])]):t._e()])]},proxy:!0}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("form",{staticClass:"form"},[n("s-input",{staticClass:"form__input",attrs:{type:"email",placeholder:"E-mail"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("s-input",{staticClass:"form__input",attrs:{type:"password",placeholder:"Пароль"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),t.toggleSignUp?t._e():n("vs-button",{staticClass:"form__submit",attrs:{block:"",loading:t.loading},on:{click:function(e){return e.preventDefault(),t.onLoginButtonClick(e)}}},[t._v("\n      Войти\n    ")]),t._v(" "),t.toggleSignUp?n("vs-button",{staticClass:"form__submit",attrs:{block:"",loading:t.loading},on:{click:function(e){return e.preventDefault(),t.onSignUpButtonClick(e)}}},[t._v("\n      Зарегистрироваться\n    ")]):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SInput:n(121).default})},121:function(t,e,n){"use strict";n.r(e);var r={props:{placeholder:{required:!0,type:String},type:{required:!0,type:String},value:{required:!0,type:String}},computed:{inputValue:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},o=(n(226),n(18)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"input"},["checkbox"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"input__field",attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.inputValue)?t._i(t.inputValue,null)>-1:t.inputValue},on:{change:function(e){var n=t.inputValue,r=e.target,o=!!r.checked;if(Array.isArray(n)){var l=t._i(n,null);r.checked?l<0&&(t.inputValue=n.concat([null])):l>-1&&(t.inputValue=n.slice(0,l).concat(n.slice(l+1)))}else t.inputValue=o}}}):"radio"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"input__field",attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.inputValue,null)},on:{change:function(e){t.inputValue=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"input__field",attrs:{placeholder:t.placeholder,type:t.type},domProps:{value:t.inputValue},on:{input:function(e){e.target.composing||(t.inputValue=e.target.value)}}}),t._v(" "),n("span",{staticClass:"input__label"},[t._v(t._s(t.placeholder))])])}),[],!1,null,null,null);e.default=component.exports},126:function(t,e,n){"use strict";var r=n(1),o=n(177),l=n.n(o);r.default.use(l.a)},179:function(t,e,n){"use strict";n(27),n(52),n(38),n(71),n(72),n(58),n(39);var r=n(36),o=n(48);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={components:{Auth:n(119).default},middleware:["authRedirect"],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({user:function(t){return t.auth.user}})),watch:{user:function(t){t?this.$vs.notification({title:"Успех!",text:"Вы вошли как ".concat(t.email)}):this.$vs.notification({title:"До встречи!",text:"Вы вышли из аккаунта"})}}},f=(n(230),n(18)),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vs-navbar",{attrs:{fixed:"",shadow:""},scopedSlots:t._u([{key:"left",fn:function(){return[n("strong",[t._v("smokr")])]},proxy:!0},{key:"right",fn:function(){return[n("Auth")]},proxy:!0}])}),t._v(" "),n("div",{staticClass:"layout-container"},[n("Nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Auth:n(119).default})},184:function(t,e,n){n(185),t.exports=n(186)},206:function(t,e,n){"use strict";function r(t){var e=t.store,n=t.route,r=t.redirect,path=n.path;return"/"===path||e.state.auth.user?"/"===path&&e.state.auth.user?r("/dashboard"):void 0:r("/")}n.r(e),n.d(e,"default",(function(){return r}))},226:function(t,e,n){"use strict";var r=n(91);n.n(r).a},227:function(t,e,n){(e=n(50)(!1)).push([t.i,":root{--s-input-font-family:inherit;--s-input-font-size:1rem;--s-input-border-radius:.6rem;--s-input-padding-vertical:.5rem;--s-input-padding-horizontal:.6rem;--s-input-background-color:#f3f7f7;--s-input-placeholder-slide-y:calc(-100% + var(--s-input-padding-vertical)*-1);--s-input-placeholder-slide-x:calc(var(--s-input-padding-horizontal)/-2);--s-input-placeholder-scale:.8}.input{display:block;position:relative}.input__field{padding:.5rem .6rem;padding:var(--s-input-padding-vertical) var(--s-input-padding-horizontal);width:100%;font-family:inherit;font-family:var(--s-input-font-family);font-size:1rem;font-size:var(--s-input-font-size);border:none;border-radius:.6rem;border-radius:var(--s-input-border-radius);background-color:#f3f7f7;background-color:var(--s-input-background-color)}.input__field:focus{outline:none}.input__field::-moz-placeholder{opacity:0}.input__field:-ms-input-placeholder{opacity:0}.input__field::placeholder{opacity:0}.input__label{display:block;position:absolute;top:.5rem;top:var(--s-input-padding-vertical);left:.6rem;left:var(--s-input-padding-horizontal);cursor:text;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit;font-family:var(--s-input-font-family);font-size:1rem;font-size:var(--s-input-font-size);opacity:.4;transition:all .25s ease-in-out}.input__field:not(:-moz-placeholder-shown)+.input__label{opacity:1;transform-origin:0 0;transform:translate(-.3rem,calc(-100% + -.5rem)) scale(.8);transform:translate(var(--s-input-placeholder-slide-x),var(--s-input-placeholder-slide-y)) scale(var(--s-input-placeholder-scale))}.input__field:not(:-ms-input-placeholder)+.input__label{opacity:1;transform-origin:0 0;transform:translate(-.3rem,calc(-100% + -.5rem)) scale(.8);transform:translate(var(--s-input-placeholder-slide-x),var(--s-input-placeholder-slide-y)) scale(var(--s-input-placeholder-scale))}.input__field:focus+.input__label,.input__field:not(:placeholder-shown)+.input__label{opacity:1;transform-origin:0 0;transform:translate(-.3rem,calc(-100% + -.5rem)) scale(.8);transform:translate(var(--s-input-placeholder-slide-x),var(--s-input-placeholder-slide-y)) scale(var(--s-input-placeholder-scale))}",""]),t.exports=e},228:function(t,e,n){"use strict";var r=n(92);n.n(r).a},229:function(t,e,n){(e=n(50)(!1)).push([t.i,".form{display:flex;flex-direction:column}.form__input{margin-bottom:1.5em}.form__input:last-of-type{margin-bottom:2em}.form__submit{margin:0}",""]),t.exports=e},230:function(t,e,n){"use strict";var r=n(93);n.n(r).a},231:function(t,e,n){(e=n(50)(!1)).push([t.i,'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}body{background-color:#eee}.layout-container{margin-top:calc(44px + .6rem)}.vs-input{font-size:16px}',""]),t.exports=e},232:function(t,e,n){"use strict";n.r(e);n(15);var r=n(3),o={onAuthStateChanged:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,l,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=t.commit,l=t.dispatch,!(c=e.authUser)){r.next=10;break}return r.next=5,o("SET_USER",c);case 5:return r.next=7,l("userData/getSmokesV2",!1,{root:!0});case 7:n.$router.push("/dashboard"),r.next=15;break;case 10:return r.next=12,o("CLEAN_USER");case 12:return r.next=14,o("userData/CLEAR_USER_DATA_V2",!1,{root:!0});case 14:n.$router.push("/");case 15:case"end":return r.stop()}}),r)})))()}};e.default={state:function(){return{user:null}},mutations:{SET_USER:function(t,e){var n=e.uid,r=e.email;t.user={uid:n,email:r}},CLEAN_USER:function(t){t.user=null}},actions:o}},233:function(t,e,n){"use strict";n.r(e);n(234),n(55),n(161),n(15);var r=n(3),o=n(180),l=n(124),c=n.n(l);function f(t){return t.reduce((function(t,e){var n=e.toLocaleDateString("ru-RU"),r=t.findIndex((function(t){return t.date===n}));return-1!==r?t[r].data.push(e):t.push({date:n,data:[e]}),t}),[])}var d={SET_SMOKES_V2:function(t,e){t.smokesV2=e,t.lastSmoke=e?e[0].data[0]:null,t.dailyMax=Math.max.apply(Math,Object(o.a)(e.map((function(t){return t.data.length}))))},CLEAR_USER_DATA_V2:function(t){t.smokesV2=null,t.lastSmoke=null,t.dailyMax=null}},m={getSmokesV2:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,l,c,d,m;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,o=t.rootState,n.prev=1,n.next=4,e.$fireStore.collection("users").doc(o.auth.user.uid).get();case 4:return l=n.sent,n.next=7,l.data();case 7:c=n.sent,d=c.smokes.map((function(t){return t.toDate()})).sort((function(a,b){return a<b?1:-1})),m=f(d),r("SET_SMOKES_V2",m),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(1),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[1,13]])})))()},doSmokeV2:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,l,f,d;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.dispatch,l=t.rootState,f={},r.prev=2,r.next=5,n.$fireStore.collection("users").doc(l.auth.user.uid);case 5:return d=r.sent,r.next=8,d.set({smokes:c.a.firestore.FieldValue.arrayUnion(e)},{merge:!0});case 8:o("getSmokesV2"),f={title:"Свершилось курение!",text:"Здоровью нанесён непоправимый урон :("},r.next=16;break;case 12:r.prev=12,r.t0=r.catch(2),f={title:"Произошла ошибка!",text:"Нам очень жаль"},console.log(r.t0);case 16:return r.abrupt("return",{notification:f});case 17:case"end":return r.stop()}}),r,null,[[2,12]])})))()},removeSmoke:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,l,f,d;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.dispatch,l=t.rootState,f={},r.prev=2,r.next=5,n.$fireStore.collection("users").doc(l.auth.user.uid);case 5:return d=r.sent,r.next=8,d.update({smokes:c.a.firestore.FieldValue.arrayRemove(e)});case 8:o("getSmokesV2"),f={title:"Курение удалено",text:"Произносим прощальные слова..."},r.next=16;break;case 12:r.prev=12,r.t0=r.catch(2),f={title:"Произошла ошибка",text:"Скорее всего, курение осталось на своём месте..."},console.log(r.t0);case 16:return r.abrupt("return",{notification:f});case 17:case"end":return r.stop()}}),r,null,[[2,12]])})))()}};e.default={state:function(){return{smokesV2:null,lastSmoke:null,dailyMax:null}},mutations:d,actions:m}},91:function(t,e,n){var content=n(227);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("cea83750",content,!0,{sourceMap:!1})},92:function(t,e,n){var content=n(229);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("82098bc0",content,!0,{sourceMap:!1})},93:function(t,e,n){var content=n(231);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("56b15182",content,!0,{sourceMap:!1})}},[[184,4,1,5]]]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(t,e,n){"use strict";n.r(e);n(13);var r=n(2),o={components:{LoginPopup:n(111).default},data:function(){return{isLoginPopupActive:!1,loggingOut:!1}},methods:{logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loggingOut=!0,e.next=3,t.$fireAuth.signOut();case 3:t.loggingOut=!1;case 4:case"end":return e.stop()}}),e)})))()}}},l=n(16),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.$store.state.auth.user?t._e():n("vs-button",{on:{click:function(e){e.preventDefault(),t.isLoginPopupActive=!t.isLoginPopupActive}}},[t._v("\n    Войти\n  ")]),t._v(" "),t.$store.state.auth.user?n("vs-button",{attrs:{loading:t.loggingOut},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("\n    Выйти\n  ")]):t._e(),t._v(" "),n("LoginPopup",{model:{value:t.isLoginPopupActive,callback:function(e){t.isLoginPopupActive=e},expression:"isLoginPopupActive"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoginPopup:n(111).default})},111:function(t,e,n){"use strict";n.r(e);n(23),n(47),n(36),n(77),n(78),n(57),n(40),n(13);var r=n(2),o=n(31),l=n(112),c=n(42);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={components:{sInput:l.default},props:{value:Boolean},data:function(){return{email:"",password:"",toggleSignUp:!1,loading:!1}},computed:d(d({},Object(c.b)({user:function(t){return t.auth.user}})),{},{dialog:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}),methods:{onLoginButtonClick:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,e.next=4,t.$fireAuth.signInWithEmailAndPassword(t.email,t.password);case 4:t.loading=!1,t.dialog=!1,console.log(t.$store.state.auth.user),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},onSignUpButtonClick:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$fireAuth.createUserWithEmailAndPassword(t.email,t.password);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}},watch:{user:function(t){t?this.$vs.notification({title:"Успех!",text:"Вы вошли как ".concat(t.email)}):null===t&&this.$vs.notification({title:"До встречи!",text:"Вы вышли из аккаунта"})},dialog:function(t){t||(this.email="",this.password="",this.toggleSignUp=!1)}}},v=(n(220),n(16)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vs-dialog",{scopedSlots:t._u([{key:"header",fn:function(){return[t.toggleSignUp?t._e():n("strong",[t._v("Вход")]),t._v(" "),t.toggleSignUp?n("strong",[t._v("Регистрация")]):t._e()]},proxy:!0},{key:"footer",fn:function(){return[n("div",{staticClass:"footer-dialog"},[t.toggleSignUp?t._e():n("div",{staticClass:"new"},[t._v("\n        Впервые здесь?\n        "),n("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.toggleSignUp=!0}}},[t._v("Регистрация")])]),t._v(" "),t.toggleSignUp?n("div",{staticClass:"new"},[t._v("\n        Уже зарегистрированы?\n        "),n("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.toggleSignUp=!1}}},[t._v("Вход")])]):t._e()])]},proxy:!0}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("form",{staticClass:"form"},[n("s-input",{staticClass:"form__input",attrs:{type:"email",placeholder:"E-mail"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("s-input",{staticClass:"form__input",attrs:{type:"password",placeholder:"Пароль"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),t.toggleSignUp?t._e():n("vs-button",{staticClass:"form__submit",attrs:{block:"",loading:t.loading},on:{click:function(e){return e.preventDefault(),t.onLoginButtonClick(e)}}},[t._v("\n      Войти\n    ")]),t._v(" "),t.toggleSignUp?n("vs-button",{staticClass:"form__submit",attrs:{block:"",loading:t.loading},on:{click:function(e){return e.preventDefault(),t.onSignUpButtonClick(e)}}},[t._v("\n      Зарегистрироваться\n    ")]):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SInput:n(112).default})},112:function(t,e,n){"use strict";n.r(e);var r={props:{placeholder:String,type:String,value:String},computed:{inputValue:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},o=(n(218),n(16)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"input"},["checkbox"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"input__field",attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.inputValue)?t._i(t.inputValue,null)>-1:t.inputValue},on:{change:function(e){var n=t.inputValue,r=e.target,o=!!r.checked;if(Array.isArray(n)){var l=t._i(n,null);r.checked?l<0&&(t.inputValue=n.concat([null])):l>-1&&(t.inputValue=n.slice(0,l).concat(n.slice(l+1)))}else t.inputValue=o}}}):"radio"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"input__field",attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.inputValue,null)},on:{change:function(e){t.inputValue=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"input__field",attrs:{placeholder:t.placeholder,type:t.type},domProps:{value:t.inputValue},on:{input:function(e){e.target.composing||(t.inputValue=e.target.value)}}}),t._v(" "),n("span",{staticClass:"input__label"},[t._v(t._s(t.placeholder))])])}),[],!1,null,null,null);e.default=component.exports},116:function(t,e,n){"use strict";var r=n(0),o=n(168),l=n.n(o);r.default.use(l.a)},170:function(t,e,n){"use strict";var r={components:{Auth:n(110).default},middleware:["authRedirect"]},o=(n(222),n(16)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vs-navbar",{attrs:{fixed:"",shadow:""},scopedSlots:t._u([{key:"left",fn:function(){return[n("strong",[t._v("smokr")])]},proxy:!0},{key:"right",fn:function(){return[n("Auth")]},proxy:!0}])}),t._v(" "),n("div",{staticClass:"layout-container"},[n("Nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Auth:n(110).default})},174:function(t,e,n){n(175),t.exports=n(176)},196:function(t,e,n){"use strict";n.r(e),e.default=function(t){var e=t.store,n=t.route,r=t.redirect,path=n.fullPath;return"/"===path||e.state.auth.user?"/"===path&&e.state.auth.user?r("/dashboard"):void 0:r("/")}},218:function(t,e,n){"use strict";var r=n(81);n.n(r).a},219:function(t,e,n){(e=n(44)(!1)).push([t.i,":root{--s-input-font-family:inherit;--s-input-font-size:1rem;--s-input-border-radius:.6rem;--s-input-padding-vertical:.5rem;--s-input-padding-horizontal:.6rem;--s-input-background-color:#f3f7f7;--s-input-placeholder-slide-y:calc(-100% + var(--s-input-padding-vertical)*-1);--s-input-placeholder-slide-x:calc(var(--s-input-padding-horizontal)/-2);--s-input-placeholder-scale:.8}.input{display:block;position:relative}.input__field{padding:.5rem .6rem;padding:var(--s-input-padding-vertical) var(--s-input-padding-horizontal);width:100%;font-family:inherit;font-family:var(--s-input-font-family);font-size:1rem;font-size:var(--s-input-font-size);border:none;border-radius:.6rem;border-radius:var(--s-input-border-radius);background-color:#f3f7f7;background-color:var(--s-input-background-color)}.input__field:focus{outline:none}.input__field::-moz-placeholder{opacity:0}.input__field:-ms-input-placeholder{opacity:0}.input__field::placeholder{opacity:0}.input__label{display:block;position:absolute;top:.5rem;top:var(--s-input-padding-vertical);left:.6rem;left:var(--s-input-padding-horizontal);cursor:text;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit;font-family:var(--s-input-font-family);font-size:1rem;font-size:var(--s-input-font-size);opacity:.4;transition:all .25s ease-in-out}.input__field:not(:-moz-placeholder-shown)+.input__label{opacity:1;transform-origin:0 0;transform:translate(-.3rem,calc(-100% + -.5rem)) scale(.8);transform:translate(var(--s-input-placeholder-slide-x),var(--s-input-placeholder-slide-y)) scale(var(--s-input-placeholder-scale))}.input__field:not(:-ms-input-placeholder)+.input__label{opacity:1;transform-origin:0 0;transform:translate(-.3rem,calc(-100% + -.5rem)) scale(.8);transform:translate(var(--s-input-placeholder-slide-x),var(--s-input-placeholder-slide-y)) scale(var(--s-input-placeholder-scale))}.input__field:focus+.input__label,.input__field:not(:placeholder-shown)+.input__label{opacity:1;transform-origin:0 0;transform:translate(-.3rem,calc(-100% + -.5rem)) scale(.8);transform:translate(var(--s-input-placeholder-slide-x),var(--s-input-placeholder-slide-y)) scale(var(--s-input-placeholder-scale))}",""]),t.exports=e},220:function(t,e,n){"use strict";var r=n(82);n.n(r).a},221:function(t,e,n){(e=n(44)(!1)).push([t.i,".form{display:flex;flex-direction:column}.form__input{margin-bottom:1.5em}.form__input:last-of-type{margin-bottom:2em}.form__submit{margin:0}",""]),t.exports=e},222:function(t,e,n){"use strict";var r=n(83);n.n(r).a},223:function(t,e,n){(e=n(44)(!1)).push([t.i,'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}body{background-color:#eee}.layout-container{margin-top:50px}.vs-input{font-size:16px}',""]),t.exports=e},224:function(t,e,n){"use strict";n.r(e);n(13);var r=n(2),o={onAuthStateChanged:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=t.commit,!(l=e.authUser)){r.next=8;break}return r.next=5,o("SET_USER",l);case 5:n.$router.push("/dashboard"),r.next=11;break;case 8:return r.next=10,o("CLEAN_USER");case 10:n.$router.push("/");case 11:case"end":return r.stop()}}),r)})))()}};e.default={state:function(){return{user:null}},mutations:{SET_USER:function(t,e){var n=e.uid,r=e.email;t.user={uid:n,email:r}},CLEAN_USER:function(t){t.user=null}},actions:o}},81:function(t,e,n){var content=n(219);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("cea83750",content,!0,{sourceMap:!1})},82:function(t,e,n){var content=n(221);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("82098bc0",content,!0,{sourceMap:!1})},83:function(t,e,n){var content=n(223);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("56b15182",content,!0,{sourceMap:!1})}},[[174,4,1,5]]]);
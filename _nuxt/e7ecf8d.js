(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(t,e,n){"use strict";n.r(e);n(13);var o=n(2),r={components:{LoginPopup:n(109).default},data:function(){return{isLoginPopupActive:!1,loggingOut:!1}},methods:{logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loggingOut=!0,e.next=3,t.$fireAuth.signOut();case 3:t.loggingOut=!1;case 4:case"end":return e.stop()}}),e)})))()}}},c=n(20),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.$store.state.auth.user?t._e():n("vs-button",{on:{click:function(e){e.preventDefault(),t.isLoginPopupActive=!t.isLoginPopupActive}}},[t._v("\n    Войти\n  ")]),t._v(" "),t.$store.state.auth.user?n("vs-button",{attrs:{loading:t.loggingOut},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("\n    Выйти\n  ")]):t._e(),t._v(" "),n("LoginPopup",{model:{value:t.isLoginPopupActive,callback:function(e){t.isLoginPopupActive=e},expression:"isLoginPopupActive"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoginPopup:n(109).default})},109:function(t,e,n){"use strict";n.r(e);n(25),n(41),n(31),n(77),n(78),n(57),n(34),n(13);var o=n(2),r=n(29),c=n(35);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={props:{value:Boolean},data:function(){return{email:"test@test.org",password:"testtest",toggleSignUp:!1,loading:!1}},computed:f(f({},Object(c.b)({user:function(t){return t.auth.user}})),{},{dialog:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}),methods:{onLoginButtonClick:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,e.next=4,t.$fireAuth.signInWithEmailAndPassword(t.email,t.password);case 4:t.loading=!1,t.dialog=!1,console.log(t.$store.state.auth.user),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},onSignUpButtonClick:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$fireAuth.createUserWithEmailAndPassword(t.email,t.password);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}},watch:{user:function(t){t?this.$vs.notification({title:"Успех!",text:"Вы вошли как ".concat(t.email)}):null===t&&this.$vs.notification({title:"До встречи!",text:"Вы вышли из аккаунта"})}}},d=(n(213),n(20)),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vs-dialog",{scopedSlots:t._u([{key:"header",fn:function(){return[t.toggleSignUp?t._e():n("strong",[t._v("Вход")]),t._v(" "),t.toggleSignUp?n("strong",[t._v("Регистрация")]):t._e()]},proxy:!0},{key:"footer",fn:function(){return[n("div",{staticClass:"footer-dialog"},[t.toggleSignUp?t._e():n("div",{staticClass:"new"},[t._v("\n        Впервые здесь?\n        "),n("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.toggleSignUp=!0}}},[t._v("Регистрация")])]),t._v(" "),t.toggleSignUp?n("div",{staticClass:"new"},[t._v("\n        Уже зарегистрированы?\n        "),n("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.toggleSignUp=!1}}},[t._v("Вход")])]):t._e()])]},proxy:!0}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("form",{staticClass:"form"},[n("vs-input",{attrs:{"label-placeholder":"E-mail",type:"email",block:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("vs-input",{attrs:{"label-placeholder":"Пароль",type:"password",block:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),t.toggleSignUp?t._e():n("vs-button",{attrs:{block:"",loading:t.loading},on:{click:function(e){return e.preventDefault(),t.onLoginButtonClick(e)}}},[t._v("\n      Войти\n    ")]),t._v(" "),t.toggleSignUp?n("vs-button",{attrs:{block:"",loading:t.loading},on:{click:function(e){return e.preventDefault(),t.onSignUpButtonClick(e)}}},[t._v("\n      Зарегистрироваться\n    ")]):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports},113:function(t,e,n){"use strict";var o=n(0),r=n(164),c=n.n(r);o.default.use(c.a)},166:function(t,e,n){"use strict";var o={components:{Auth:n(108).default}},r=(n(215),n(20)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vs-navbar",{attrs:{fixed:"",shadow:""},scopedSlots:t._u([{key:"left",fn:function(){return[n("strong",[t._v("smokr")])]},proxy:!0},{key:"right",fn:function(){return[n("Auth")]},proxy:!0}])}),t._v(" "),n("div",{staticClass:"layout-container"},[n("Nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Auth:n(108).default})},170:function(t,e,n){n(171),t.exports=n(172)},213:function(t,e,n){"use strict";var o=n(81);n.n(o).a},214:function(t,e,n){(e=n(49)(!1)).push([t.i,".form{display:flex;flex-direction:column;justify-content:space-between;height:20vh}",""]),t.exports=e},215:function(t,e,n){"use strict";var o=n(82);n.n(o).a},216:function(t,e,n){(e=n(49)(!1)).push([t.i,'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}body{background-color:#eee}.layout-container{margin-top:50px}',""]),t.exports=e},217:function(t,e,n){"use strict";n.r(e);n(13);var o=n(2),r={onAuthStateChanged:function(t,e){return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=t.commit,!(r=e.authUser)){n.next=7;break}return n.next=5,o("SET_USER",r);case 5:n.next=9;break;case 7:return n.next=9,o("CLEAN_USER");case 9:case"end":return n.stop()}}),n)})))()}};e.default={state:function(){return{user:null}},mutations:{SET_USER:function(t,e){var n=e.uid,o=e.email;t.user={uid:n,email:o}},CLEAN_USER:function(t){t.user=null}},actions:r}},81:function(t,e,n){var content=n(214);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("82098bc0",content,!0,{sourceMap:!1})},82:function(t,e,n){var content=n(216);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("56b15182",content,!0,{sourceMap:!1})}},[[170,4,1,5]]]);
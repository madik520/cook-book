!function(e){function t(t){for(var r,o,l=t[0],i=t[1],s=t[2],p=0,m=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(u&&u(t);m.length;)m.shift()();return c.push.apply(c,s||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],r=!0,l=1;l<a.length;l++){var i=a[l];0!==n[i]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={0:0},c=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=i;c.push([461,1]),a()}({458:function(e,t,a){var r=a(459),n=a(460);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var c={insert:"head",singleton:!1};r(n,c);e.exports=n.locals||{}},460:function(e,t,a){},461:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(105),o=a.n(c),l=a(12),i=a(7),s=a(234),u=a(232),p=a(29),m=a.n(p);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){m()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E={authError:null,registration:null},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,a=t.type;t.payload;switch(a){case"ERROR_REGISTR":return{registration:!1};case"SUCCESS_REGISTR":return f(f({},e),{},{registration:!0});case"LOGIN_ERROR":return{authError:"Не верный логин или пароль!"};case"LOGIN_SUCCESS":return f(f({},e),{},{authError:null});case"SIGNOUT_SUCCESS":default:return e}},v=a(58),y=a(35);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){m()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g={recept:[],title:null,deleteItem:null},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case"RENDER_ITEMS_SUCCESS":case"RENDER_ITEMS_ERROR":return{recept:r};case"ADD_TITLE":return h(h({},e),{},{title:r});case"ADD_TITLE_ERROR":return{title:r};case"DELETE_TITLE":return h(h({},e),{},{deleteItem:r});default:return e}};function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(Object(a),!0).forEach((function(t){m()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var k={submit:null,isOpen:!1},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case"OPEN_BOARD":case"CLOSE_BOARD":return w(w({},e),{},{isOpen:r});case"SUBMIT_BOARD":case"ERROR_SUBMIT_BOARD":return w(w({},e),{},{submit:r});default:return e}};function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){m()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var S={activeBoard:{id:null,receptData:[]},deleteRecept:null},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case"ACTIVE_BOARD_DATA":return C(C({},e),{},{activeBoard:{id:r.id,receptData:r.receptCard}});case"ACTIVE_BOARD_DATA_ERROR":return{activeBoard:r};case"DELETE_BOARD_RECEPT_SUCCESS":case"DELETE_BOARD_RECEPT_ERROR":return C(C({},e),{},{deleteRecept:r});default:return e}};function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach((function(t){m()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var B={isOpenReceptModal:!1,submitReceptToModal:{id:null,title:null,color:null,ingridient:null,cook:null}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case"SUBMIT_RECEPT_TO_MODAL":return P(P({},e),{},{submitReceptToModal:r});case"OPEN_MODAL":case"CLOSE_MODAL":return P(P({},e),{},{isOpenReceptModal:r});default:return e}},A={isOpenNavBar:!1,isOpenReceptBar:!1},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case"OPEN_NAVBAR_MENU":case"CLOSE_NAVBAR_MENU":return{isOpenNavBar:r};case"OPEN_RECEPT_MENU":case"CLOSE_RECEPT_MENU":return{isOpenReceptBar:r};default:return e}},M=Object(i.combineReducers)({form:u.a,firestore:v.firestoreReducer,firebase:y.firebaseReducer,auth:b,receptReducer:N,createBoard:T,activeBoardData:_,modalReducer:x,sideBarsObserver:I}),L=a(236),U=a(33),F=a.n(U);a(446),a(448);F.a.initializeApp({apiKey:"AIzaSyAXmUNOeyviohl9-oQeLlw2fyPMMoiP3s0",authDomain:"recept-book.firebaseapp.com",databaseURL:"https://recept-book.firebaseio.com",projectId:"recept-book",storageBucket:"recept-book.appspot.com",messagingSenderId:"361984470423",appId:"1:361984470423:web:c2fdd7944a79762d7328d2",measurementId:"G-8VK0L02SSM"});var V=F.a.auth(),G=F.a.firestore(),z=Object(i.applyMiddleware)(L.a.withExtraArgument(y.getFirebase,v.getFirestore)),W=Object(i.createStore)(M,Object(s.composeWithDevTools)(z)),Z={firebase:F.a,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:W.dispatch,createFirestoreInstance:v.createFirestoreInstance},H=W,J=a(78),K=a.n(J),Q=a(16),X=a(10),$=a(1),q=a.n($),Y=function(e){var t=e.title,a=e.className;return n.a.createElement("h1",{className:a},t)};Y.propTypes={title:q.a.string,className:q.a.string},Y.defaultProps={title:"",className:""};var ee=Y,te=function(e){var t=e.type,a=e.to,r=e.className,c=e.text,o=e.onClick,l=e.style;return n.a.createElement(Q.b,{to:a},n.a.createElement("button",{className:r,style:l,onClick:o,type:t},c))};te.propTypes={type:q.a.string,to:q.a.string,className:q.a.string,text:q.a.string,onClick:q.a.func},te.defaultProps={type:"submit",to:"",className:"",text:"",onClick:function(){}};var ae=te,re=function(){return n.a.createElement("div",{className:"preview"},n.a.createElement("div",{className:"icon-preview"}),n.a.createElement("span",null,n.a.createElement(Q.b,{to:"/login"},"Войдите")," или ",n.a.createElement(Q.b,{to:"/registration"},"зарегистрируйтесь")))},ne=function(e){var t=e.children;return n.a.createElement("div",{className:"home-container"},n.a.createElement("div",{className:"dashboard"},n.a.createElement("div",{className:"dashboard-header"},n.a.createElement(ee,{className:"greeting",title:'Добро пожаловать в приложение "Книга рецептов" !'})),n.a.createElement("div",{className:"dashboard-main"},t||n.a.createElement(re,null),n.a.createElement("div",{className:"btn-group"},n.a.createElement(ae,{to:"/login",className:"btn",type:"submit",text:"Вход"}),n.a.createElement(ae,{to:"/registration",className:"btn",type:"submit",text:"Регистрация"}))),n.a.createElement("div",{className:"dashboard-footer"},n.a.createElement("span",null,"Design and programming by © Madik, 2020 "))))},ce=a(4),oe=a.n(ce),le=a(230),ie=a(231),se=function(e){var t=e.className;return n.a.createElement("div",{className:t},n.a.createElement("svg",{width:"64px",height:"64px",viewBox:"0 0 128 128",space:"preserve"},n.a.createElement("script",{type:"text/ecmascript",href:"//faviconer.net/jscripts/smil.user.js"}),n.a.createElement("g",null,n.a.createElement("path",{d:"M78.75 16.18V1.56a64.1 64.1 0 0 1 47.7 47.7H111.8a49.98 49.98 0 0 0-33.07-33.08zM16.43 49.25H1.8a64.1 64.1 0 0 1 47.7-47.7V16.2a49.98 49.98 0 0 0-33.07 33.07zm33.07 62.32v14.62A64.1 64.1 0 0 1 1.8 78.5h14.63a49.98 49.98 0 0 0 33.07 33.07zm62.32-33.07h14.62a64.1 64.1 0 0 1-47.7 47.7v-14.63a49.98 49.98 0 0 0 33.08-33.07z",fill:"#ff3c6a",fillOpacity:"1"}),n.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 64 64",to:"-90 64 64",dur:"400ms",repeatCount:"indefinite"}))))};se.propTypes={className:q.a.string},se.defaultProps={className:""};var ue=se,pe=a(9),me=a.n(pe),de=a(18),fe=a.n(de),Ee=function(){return function(){var e=fe()(me.a.mark((function e(t){return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.signOut();case 2:t({type:"SIGNOUT_SUCCESS"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},be=function(e){var t=e.input,a=e.label,r=e.type,c=e.icon,o=e.meta,l=o.touched,i=o.error;return n.a.createElement("div",null,n.a.createElement("label",null,n.a.createElement("div",{className:"input-icon"},n.a.createElement("i",{className:c})),n.a.createElement("input",oe()({},t,{placeholder:a,type:r}))),l&&i&&n.a.createElement("span",null,i))},ve=Object(ie.a)({form:"login",validate:function(e){var t={};return e.login||(t.login="Введите логин *"),e.password||(t.password="Введите пароль *"),t}})((function(e){var t=e.handleSubmit,a=e.submitting;return n.a.createElement("form",{className:"login-form",onSubmit:t},n.a.createElement(le.a,{icon:"far fa-user",type:"text",name:"login",label:"Логин",component:be}),n.a.createElement(le.a,{icon:"fas fa-key",type:"password",name:"password",label:"Пароль",component:be}),a?n.a.createElement(ue,null):n.a.createElement("button",{type:"submit",disabled:a},"Войти"))})),ye=Object(l.b)((function(e){return{auth:e.auth}}),{signIn:function(e,t,a){return function(){var r=fe()(me.a.mark((function r(n){return me.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,V.signInWithEmailAndPassword(t,a);case 3:return e.history.replace("/cook-book/home"),r.abrupt("return",n({type:"LOGIN_SUCCESS"}));case 7:r.prev=7,r.t0=r.catch(0),e.history.replace("/login"),n({type:"LOGIN_ERROR",err:r.t0});case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return n.a.createElement(ne,null,n.a.createElement(ve,{onSubmit:function(t){return e.signIn(e,t.login,t.password)}}),e.auth.authError?n.a.createElement("span",{className:"login-error"},e.auth.authError):null)})),Oe=function(e){var t=e.input,a=e.label,r=e.type,c=e.meta,o=c.touched,l=c.error;return n.a.createElement("label",null,n.a.createElement("input",oe()({},t,{placeholder:a,type:r})),o&&l&&n.a.createElement("span",null,l))},he=Object(ie.a)({form:"Registration",validate:function(e){var t={};return e.FirstName?e.FirstName.length>15&&(t.FirstName="Слишком длинное имя"):t.FirstName="Поле для обязательного заполнения *",e.NewPassword?e.NewPassword.length<=4?t.NewPassword="Слишком короткий пароль *":e.NewPassword.length>=20&&(t.NewPassword="Сликом длинный пароль *"):t.NewPassword="Поле для обязательного заполнения *",e.NewEmail?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.NewEmail)||(t.NewEmail="Не правильный email *"):t.NewEmail="Поле для обязательного заполнения *",t}})((function(e){var t=e.handleSubmit,a=e.submitting;return n.a.createElement("form",{onSubmit:t,className:"register-form"},n.a.createElement(le.a,{type:"email",component:Oe,name:"NewEmail",label:"Email *"}),n.a.createElement(le.a,{type:"text",component:Oe,name:"NewPassword",label:"Password *"}),n.a.createElement(le.a,{type:"text",component:Oe,name:"FirstName",label:"Имя *"}),n.a.createElement(le.a,{type:"text",component:Oe,name:"LastName",label:"Фамилия"}),n.a.createElement("div",{className:"btn-submit-registration"},a?n.a.createElement(ue,null):n.a.createElement("button",{type:"submit",disabled:a},"Зарегистрироваться")))})),ge=Object(l.b)((function(e){return{auth:e.auth}}),{signUp:function(e,t,a,r,n){return function(){var c=fe()(me.a.mark((function c(o){var l;return me.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,V.createUserWithEmailAndPassword(r,n);case 3:return l=c.sent,c.next=6,G.collection("users").doc(l.user.uid).set({userData:{firstName:t,lastName:a,Email:r,Password:n}});case 6:return c.next=8,V.currentUser.updateProfile({displayName:t});case 8:return c.next=10,e.history.replace("/login");case 10:o({type:"SUCCESS_REGISTR"}),c.next=17;break;case 13:c.prev=13,c.t0=c.catch(0),o({type:"ERROR_REGISTR"}),e.history.replace("/registration");case 17:case"end":return c.stop()}}),c,null,[[0,13]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=function(){var t=fe()(me.a.mark((function t(a){return me.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.signUp(e,a.FirstName,a.LastName,a.NewEmail,a.NewPassword);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return n.a.createElement(ne,null,n.a.createElement(he,{onSubmit:t}),!1===e.auth.registration?n.a.createElement("span",{className:"registration-error"},"Данный аккаунт уже существует"):null)})),Ne=function(e){var t=e.classNavbar,a=e.classNavbarList,r=e.classNavbarItem,c=function(e){if(e.target)return window.scrollTo({top:top,behavior:"smooth"})};return n.a.createElement("nav",{className:t},n.a.createElement("ul",{className:a},n.a.createElement("li",null,n.a.createElement(Q.c,{className:r,onClick:c,to:"/cook-book/home"},"Главная")),n.a.createElement("li",null,n.a.createElement(Q.c,{className:r,onClick:c,to:"/cook-book/recept"},"Мои рецепты")),n.a.createElement("li",null,n.a.createElement(Q.c,{className:r,onClick:c,to:"/cook-book/project"},"О проекте"))))};Ne.propTypes={classNavbar:q.a.string,classNavbarList:q.a.string,classNavbarItem:q.a.string},Ne.defaultProps={classNavbar:"",classNavbarList:"",classNavbarItem:""};var Re=Ne,we=function(e){var t=e.onClick;return n.a.createElement("svg",{className:"ham ham6",viewBox:"0 0 100 100",width:"80",onClick:t},n.a.createElement("path",{className:"line top",d:"m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"}),n.a.createElement("path",{className:"line middle",d:"m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"}),n.a.createElement("path",{className:"line bottom",d:"m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"}))};we.propTypes={onClick:q.a.func},we.defaultProps={onClick:function(){}};var ke=we,Te=Object(l.b)(null,{signOut:Ee,openNavbarMenu:function(){return function(e){return e({type:"OPEN_NAVBAR_MENU",payload:!0})}}})((function(e){var t=e.signOut,a=e.openNavbarMenu;return n.a.createElement("header",{className:"cook-book-header"},n.a.createElement("div",{className:"header-flex"},n.a.createElement(Re,{classNavbar:"navbar",classNavbarList:"navbar-list",classNavbarItem:"navbar-item"}),n.a.createElement("div",{className:"sign-out-block"},n.a.createElement("span",null,"Здравствуйте ",V.currentUser.displayName),n.a.createElement("button",{onClick:function(){return t()},className:"btn-signout"},"Выйти ",n.a.createElement("i",{className:"fas fa-sign-out-alt"})))),n.a.createElement("div",{className:"header-flex-mobile"},n.a.createElement(ke,{onClick:function(){return a()}})))})),je=a.p+"cook-book.png",Ce=a(43),Se=Object(ie.a)({form:"createTitle",validate:function(e){var t={};return e.title?e.title.length<=3&&(t.title="Слишком короткое название"):t.title="Поле пустое",t}})((function(e){var t=e.handleSubmit,a=e.submitting;return n.a.createElement("form",{className:"add-title-form",onSubmit:t},n.a.createElement(le.a,{placeholder:"Добавьте раздел",type:"text",name:"title",component:"input"}),n.a.createElement("button",{type:"submit",disabled:a},n.a.createElement("i",{className:"fas fa-plus"})))})),_e=Object(l.b)((function(e){return{form:e.form}}),{addTitle:function(e){return function(){var t=fe()(me.a.mark((function t(a,r){var n,c;return me.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r().firebase.auth.uid,c=G.collection("users").doc(n).collection("recept").doc(),t.prev=2,t.next=5,c.set({id:(new Date).getTime(),title:e,receptCard:[]},{merge:!0});case 5:return t.abrupt("return",a({type:"ADD_TITLE",payload:e}));case 8:t.prev=8,t.t0=t.catch(2),a({type:"ADD_TITLE_ERROR",payload:t.t0});case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e,a){return t.apply(this,arguments)}}()},reset:Ce.a})((function(e){return n.a.createElement("div",{className:"search-bar"},n.a.createElement(Se,{onSubmit:function(){e.addTitle(e.form.createTitle.values.title),e.reset("createTitle")}}))})),De=function(e){return e.length>=30?"".concat(e.slice(0,30),"..."):e},Pe=function(e){var t=e.items,a=e.deleteTitle,r=e.selectBoard,c=e.className,o=e.closeReceptMenu,l=Object(X.g)();return n.a.createElement("aside",{className:c},n.a.createElement("div",{className:"sidebar-icon"},n.a.createElement("button",{onClick:function(){return o()},className:"close-recept-btn"},n.a.createElement("i",{className:"fas fa-long-arrow-alt-left"})),n.a.createElement("img",{src:je,alt:"icon"}),n.a.createElement("span",null,"Книга репецтов")),n.a.createElement(_e,null),n.a.createElement("ul",{className:"sidebar-list"},0!==t.length?t.map((function(e,t){var c=e.docId,o=e.data,i=o.id,s=o.title;return n.a.createElement("li",{onClick:function(){return r(c)},className:"sidebar-item",key:i},n.a.createElement("div",{className:"item-component"},n.a.createElement("i",{onClick:function(){return function(e){return a(e),history.replaceState(null,null,"/cook-book/recept")}(c)},className:"fas fa-times"}),n.a.createElement(Q.b,{to:"".concat(l.url,"/").concat(t+1)},n.a.createElement("span",null,De(s)))))})):n.a.createElement("span",{className:"empty-list"},"Нет записей")))};Pe.propTypes={items:q.a.array,deleteTitle:q.a.func,selectBoard:q.a.func,className:q.a.string},Pe.defaultProps={items:[],deleteTitle:function(){},selectBoard:function(){},className:"sidebar"};var Be=Object(l.b)((function(e){return{receptReducer:e.receptReducer}}),{selectBoard:function(e){return function(t,a){var r=a().firebase.auth.uid,n=G.collection("users").doc(r);try{n.collection("recept").doc("".concat(e)).onSnapshot((function(e){return t({type:"ACTIVE_BOARD_DATA",payload:{id:e.id,receptCard:e.data()}})}))}catch(e){return t({type:"ACTIVE_BOARD_DATA_ERROR",payload:e})}}},closeReceptMenu:function(){return function(e){return e({type:"CLOSE_RECEPT_MENU",payload:!1})}}})(Pe),xe=function(e){var t=e.text,a=e.active,r=e.btnText1,c=e.btnText2,o=e.click1,l=e.click2;return a?n.a.createElement("div",{className:"modal-block"},n.a.createElement("div",{className:"modal"},n.a.createElement("span",null,t),n.a.createElement("div",{className:"modal-btn-group"},n.a.createElement("button",{onClick:o},r),n.a.createElement("button",{onClick:l},c)))):null};xe.propTypes={text:q.a.string,active:q.a.bool,btnText1:q.a.string,btnText2:q.a.string,click1:q.a.func,click2:q.a.func},xe.defaultProps={text:"",active:!1,btnText1:"",btnText2:"",click1:function(){},click2:function(){}};var Ae=xe,Ie=[{id:1,color:"#ff0000"},{id:2,color:"#00c010"},{id:3,color:"#01dfcc"},{id:4,color:"#1404ff"},{id:5,color:"#ff3c6a"},{id:6,color:"#a304ff"}],Me=function(e){var t=e.color,a=e.onClick;return n.a.createElement("div",{onClick:a,style:{backgroundColor:"".concat(t)}})},Le=function(e){var t=e.onClick;return n.a.createElement("li",{onClick:t,className:"example-board"},n.a.createElement("i",{className:"fas fa-plus"}))},Ue=Object(ie.a)({form:"createRecept"})((function(e){var t=e.handleSubmit,a=e.submitting,c=e.onClick,o=e.setCurrColor,l=e.currColor,i=Object(r.useState)(!1),s=K()(i,2),u=s[0],p=s[1],m=function(){return p(!u)};return n.a.createElement("li",{className:"recept-form"},n.a.createElement("div",{className:"recept-header"},n.a.createElement("div",{className:"recept-change-color"},n.a.createElement("div",{className:"current-color"},"Цвет заметки: ",n.a.createElement("div",{onClick:m,style:{backgroundColor:"".concat(l)}})),u?n.a.createElement("div",{className:"select-color"},Ie.map((function(e){var t=e.id,a=e.color;return n.a.createElement(Me,{onClick:function(){return function(e){o(e),m()}(a)},key:t,color:a})}))):null),n.a.createElement("i",{onClick:c,className:"fas fa-times"})),n.a.createElement("form",{onSubmit:t},n.a.createElement("label",null,"Заголовок:",n.a.createElement(le.a,{placeholder:"Пример: Салат цезарь",type:"text",name:"receptTitle",component:"input"})),n.a.createElement("label",null,"Ингридиенты:",n.a.createElement(le.a,{type:"text",name:"receptIngredient",component:"textarea"})),n.a.createElement("label",null,"Рецепт приготовления:",n.a.createElement(le.a,{type:"text",name:"receptCook",component:"textarea"})),a?n.a.createElement(ue,null):n.a.createElement("button",{type:"submit",disabled:a},"Добавить раздел")))})),Fe=function(e){var t=e.openBoard,a=e.createBoard,c=e.closeBoard,o=e.submitBoardToDB,l=e.boardData,i=e.deleteReceptFromDB,s=e.modalReducer,u=e.openReceptModal,p=e.closeReceptModal,m=Object(r.useState)("#ff3c6a"),d=K()(m,2),f=d[0],E=d[1],b=s.submitReceptToModal,v=b.id,y=b.title,O=b.color,h=b.ingridient,g=b.cook;return n.a.createElement("div",{className:"main-content"},n.a.createElement("ul",{className:"recept-list"},l.map((function(e){var t=e.id,a=e.title,r=e.color,c=e.cook,o=e.ingridient;return n.a.createElement("li",{id:t,style:{backgroundColor:"".concat(r)},className:"recept-item",key:t},n.a.createElement("div",{className:"item-header"},n.a.createElement("span",{onClick:function(){return function(e){return document.getElementById(e).classList.add("recept-item-active")}(t)}},"undefined"===a?"Без названия":De(a)),n.a.createElement("i",{onClick:function(){return u(t,a,r,c,o)},className:"fas fa-times"})),n.a.createElement("div",{className:"item-main"},n.a.createElement("p",null,n.a.createElement("span",null,"Ингридиенты:")," ",n.a.createElement("br",null),"undefined"===o?"Пусто":o),n.a.createElement("p",null,n.a.createElement("span",null,"Приготовление: ")," ",n.a.createElement("br",null)," ","undefined"===c?"Пусто":c)),n.a.createElement("div",{className:"item-footer"},n.a.createElement("button",{onClick:function(){return function(e){document.getElementById(e).classList.remove("recept-item-active")}(t)}},"Закрыть")))})),a.isOpen?n.a.createElement(Ue,{currColor:f,setCurrColor:E,onClick:function(){return c()},onSubmit:function(e){o("".concat(e.receptTitle),"".concat(f),"".concat(e.receptIngredient),"".concat(e.receptCook)),c()}}):n.a.createElement(Le,{onClick:function(){return t()}})),n.a.createElement(Ae,{click1:function(){return i(v,y,O,h,g),void p()},click2:function(){return p()},active:s.isOpenReceptModal,text:"Вы действительно хотите удалить рецепт?",btnText1:"Удалить",btnText2:"Отмена"}))};Fe.propTypes={openBoard:q.a.func,closeBoard:q.a.func,createBoard:q.a.object,submitBoardToDB:q.a.func,boardData:q.a.array},Fe.defaultProps={openBoard:function(){},closeBoard:function(){},createBoard:{},submitBoardToDB:function(){},boardData:[]};var Ve=Object(l.b)((function(e){return{createBoard:e.createBoard,modalReducer:e.modalReducer}}),{openBoard:function(){return function(e){return e({type:"OPEN_BOARD",payload:!0})}},closeBoard:function(){return function(e){return e({type:"CLOSE_BOARD",payload:!1})}},submitBoardToDB:function(e,t,a,r){return function(){var n=fe()(me.a.mark((function n(c,o){var l,i,s;return me.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l=o().firebase.auth.uid,i=o().activeBoardData.activeBoard.id,s=G.collection("users").doc(l),n.prev=3,n.next=6,s.collection("recept").doc("".concat(i)).update({receptCard:F.a.firestore.FieldValue.arrayUnion({id:(new Date).getTime(),title:"".concat(e),color:t,ingridient:a,cook:r})});case 6:s.collection("recept").doc("".concat(i)).onSnapshot((function(e){return c({type:"SUBMIT_BOARD",payload:e.data()})})),n.next=12;break;case 9:return n.prev=9,n.t0=n.catch(3),n.abrupt("return",c({type:"ERROR_SUBMIT_BOARD",payload:n.t0}));case 12:case"end":return n.stop()}}),n,null,[[3,9]])})));return function(e,t){return n.apply(this,arguments)}}()},deleteReceptFromDB:function(e,t,a,r,n){return function(){var c=fe()(me.a.mark((function c(o,l){var i,s,u;return me.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return i=l().firebase.auth.uid,s=l().activeBoardData.activeBoard.id,u=G.collection("users").doc(i),c.prev=3,c.next=6,u.collection("recept").doc("".concat(s)).update({receptCard:F.a.firestore.FieldValue.arrayRemove({id:e,title:"".concat(t),color:"".concat(a),ingridient:"".concat(r),cook:"".concat(n)})});case 6:return c.abrupt("return",o({type:"DELETE_BOARD_RECEPT_SUCCESS",payload:e}));case 9:return c.prev=9,c.t0=c.catch(3),c.abrupt("return",o({type:"DELETE_BOARD_RECEPT_ERROR",payload:c.t0}));case 12:case"end":return c.stop()}}),c,null,[[3,9]])})));return function(e,t){return c.apply(this,arguments)}}()},openReceptModal:function(e,t,a,r,n){return function(c){return c({type:"SUBMIT_RECEPT_TO_MODAL",payload:{id:e,title:t,color:a,cook:r,ingridient:n}}),c({type:"OPEN_MODAL",payload:!0})}},closeReceptModal:function(){return function(e){return e({type:"CLOSE_MODAL",payload:!1})}}})(Fe),Ge=function(){return n.a.createElement("h1",{style:{paddingTop:"200px"}},"this is a main page :)")},ze=function(){return n.a.createElement("section",{className:"project-block"},n.a.createElement("article",{className:"project"},n.a.createElement("span",{className:"project-title"},'Версия проекта "Книга рецептов": v1.0'),n.a.createElement("p",null,"Проект предоставляет собой возможность, хранить все Ваши любимые рецепты в интернете, тем самым Вы сможете отказаться от рукописной книги. Преймущества здесь вполне очевидны, Вы можете искать в интернете любой рецепт и просто копировать его в это приложение. Все Ваши рецепты будут всегда под рукой. Для этого Вам нужно лишь телефон или компьютер, а так же подключение к интернету."),n.a.createElement("span",{className:"project-description"},"Описание проекта:"),n.a.createElement("ul",{className:"project-description-list"},n.a.createElement("li",null,n.a.createElement("span",null,"Главная "),' - Новостная страница, здесь будут публиковаться различные новости связанные с проектом, а так же планируется ввести рубрику "Топ лучших рецептов недели".'),n.a.createElement("li",null,n.a.createElement("span",null,"Мои рецепты - "),"Основная страница этого приложения. Здесь добавляються и удаляються рецепты.",n.a.createElement("br",null),n.a.createElement("span",null,"Добавление раздела: "),' В боковом меню, есть поле  "Добавить раздел". Набираем название раздела, например "Грузинская кухня" и нажимаем Enter, либо на плюсик справа, после чего в боковом меню создаётся раздел в виде ячейки. ',n.a.createElement("br",null),'"Раздел" - в нём будут храниться коллекции ваших рецептов. Что бы перейти в раздел, на него нужно кликнуть, после чего Вы переходите в соответствующий раздел, там отобразяться ячейки с Вашими рецептами.',n.a.createElement("br",null),n.a.createElement("span",null,"Добавление рецепта: "),' После того как Вы перейшли в раздел, в нём отобразиться квадрат с плюсиком внутри, нажимаете на него и открывается форма для заполнения. В неё вносятся: название рецепта, ингридиенты, приготовление, а так же можно изменить цвет фона самого рецепта. После заполненых данных, нажимаете кнопку "Добавить" и у Вас добавляется рядом ячейка с Вашим рецептом. Ячейка содержит лишь название рецепта и крестик для удаление, что бы просмотреть рецепт, просто кликните на него и он раскроется.',n.a.createElement("br",null),n.a.createElement("span",null,"Удаление раздела и рецепта: ")," Для того, что бы удалить рецепт, нажмите крестик наротив названия, Вам высветиться модальное окно с вопросом о том, действительно ли Вы хотите его удалить. ",n.a.createElement("br",null),n.a.createElement("span",null,"ВНИМАНИЕ!!!")," При удалении раздела, Вам не будет предложен выбор, удалить или нет, после нажатия на крестик раздел будет удалён вместе со всеми рецептами, просьба быть внимательным."),n.a.createElement("li",null,n.a.createElement("span",null,"Другие сведенья: ")," Проект являеться полностью бесплатным и его использование никак не ограничивается, но Вы всегда можете материально поддержать разработчика, да бы мотивировать его на создание различных возможностей приложения. Всем приятного использования :)"))))},We=a.p+"recipe.png",Ze=function(e){var t=e.deleteTitle,a=e.getItem,c=e.receptReducer,o=e.activeBoardData,l=e.signOut,i=e.openReceptMenu,s=e.closeNavbarMenu,u=e.sideBarsObserver,p=c.recept?c.recept:[],m=o.activeBoard.receptData?o.activeBoard.receptData.receptCard:[],d=Object(X.g)(),f=null!==V.currentUser?V.currentUser.displayName:"";return Object(r.useEffect)((function(){a()}),[]),n.a.createElement("div",{className:"cook-book-container"},n.a.createElement(Te,null),n.a.createElement(X.d,null,n.a.createElement(X.b,{path:"".concat(d.url,"/home"),component:Ge}),n.a.createElement(X.b,{path:"".concat(d.url,"/recept")},n.a.createElement("button",{onClick:function(){return i()},className:"header-recept-btn"},"Рецепты"),n.a.createElement(Be,{deleteTitle:t,items:p}),u.isOpenReceptBar?n.a.createElement(Be,{className:"mobile-sidebar",deleteTitle:t,items:p}):null,n.a.createElement(X.b,{path:"".concat(d.url,"/recept/:id")},n.a.createElement(Ve,{boardData:m}))),n.a.createElement(X.b,{path:"".concat(d.url,"/project"),component:ze})),u.isOpenNavBar?n.a.createElement("div",{className:"mobile-navbar-block"},n.a.createElement("div",{className:"mobile-navbar-container"},n.a.createElement("button",{onClick:function(){return s()},className:"btn-close-navbar"},n.a.createElement("i",{className:"fas fa-long-arrow-alt-left"})),n.a.createElement("div",{className:"mobile-header-navbar"},n.a.createElement("img",{src:We,alt:"icon"}),n.a.createElement("span",null,"Здравствуйте ",f)),n.a.createElement(Re,{classNavbar:"mobile-navbar",classNavbarList:"mobile-navbar-list",classNavbarItem:"mobile-navbar-item"}),n.a.createElement("button",{onClick:function(){return l()},className:"btn-signout"},"Выйти ",n.a.createElement("i",{className:"fas fa-sign-out-alt"})))):null,n.a.createElement("footer",null,n.a.createElement("span",null,"Design and programming by © Madik, 2020. Support email ",n.a.createElement("span",null,"cookbooksup@gmail.com"))))};Ze.propTypes={deleteTitle:q.a.func,getItem:q.a.func,receptReducer:q.a.object,activeBoardData:q.a.object},Ze.defaultProps={deleteTitle:function(){},getItem:function(){},receptReducer:{},activeBoardData:{}};var He=Object(i.compose)(Object(l.b)((function(e){return{firebase:e.firebase,createBoard:e.createBoard,receptReducer:e.receptReducer,activeBoardData:e.activeBoardData,sideBarsObserver:e.sideBarsObserver}}),{deleteTitle:function(e){return function(){var t=fe()(me.a.mark((function t(a,r){var n,c;return me.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r().firebase.auth.uid,c=G.collection("users").doc(n).collection("recept"),t.next=4,c.doc("".concat(e)).delete();case 4:return t.abrupt("return",a({type:"DELETE_TITLE",payload:e}));case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},getItem:function(){return function(){var e=fe()(me.a.mark((function e(t,a){var r,n;return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a().firebase.auth.uid,n=G.collection("users").doc(r).collection("recept"),e.prev=2,e.next=5,n.onSnapshot((function(e){var a=[];return e.forEach((function(e){return a.push({docId:e.id,data:e.data()})})),t({type:"RENDER_ITEMS_SUCCESS",payload:a})}));case 5:e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(2),e.abrupt("return",t({type:"RENDER_ITEMS_ERROR",payload:e.t0}));case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t,a){return e.apply(this,arguments)}}()},signOut:Ee,closeNavbarMenu:function(){return function(e){return e({type:"CLOSE_NAVBAR_MENU",payload:!1})}},openReceptMenu:function(){return function(e){return e({type:"OPEN_RECEPT_MENU",payload:!0})}}}),Object(y.firestoreConnect)((function(e){return[{collection:"users"},{collection:"users",doc:e.firestore._.authUid,subcollections:[{collection:"recept"}],storeAs:"recept"}]})))(Ze),Je=function(){var e=Object(r.useState)(!1),t=K()(e,2),a=t[0],c=t[1];return Object(r.useEffect)((function(){V.onAuthStateChanged((function(e){c(e)}))})),!1!==a?n.a.createElement("div",{className:"app-container"},n.a.createElement(Q.a,null,n.a.createElement(X.d,null,n.a.createElement(X.b,{exact:!0,path:"/",component:ne}),n.a.createElement(X.b,{path:"/login",component:ye}),n.a.createElement(X.b,{path:"/registration",component:ge}),V.currentUser?n.a.createElement(X.b,{path:"/cook-book",component:He}):n.a.createElement(X.a,{to:"/login"}),n.a.createElement(X.b,{path:"*"},n.a.createElement("h1",null,"Not Found"))))):n.a.createElement(ue,{className:"login-preload"})},Ke=document.getElementById("root");o.a.render(n.a.createElement(l.a,{store:H},n.a.createElement(y.ReactReduxFirebaseProvider,Z,n.a.createElement(Je,null))),Ke);a(458)}});
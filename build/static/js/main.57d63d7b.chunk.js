(this.webpackJsonpmemegeneratorv2=this.webpackJsonpmemegeneratorv2||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c,a,r=n(3),i=n(20),s=n(14),l=n.n(s),o=n(9),j=n(7),u=n(10),m=n.n(u),d=n(13),b=Object(o.b)("allMemes/loadAllMemes",Object(d.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.imgflip.com/get_memes");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.data);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))),f=Object(o.c)({name:"allMemes",initialState:{isLoading:!0,hasError:!1,fulfilled:!1,pending:!1,allMemes:{}},extraReducers:(c={},Object(j.a)(c,b.pending,(function(e){e.pending=!0})),Object(j.a)(c,b.fulfilled,(function(e,t){e.fulfilled=!0,e.isLoading=!1,e.allMemes=t.payload})),Object(j.a)(c,b.rejected,(function(e){e.hasError=!0})),c)}).reducer,h=function(e){return e.loadMemesSlice.allMemes.memes},O=function(e){return e.loadMemesSlice.isLoading},x=function(e){return e.loadMemesSlice.fulfilled},p=function(e){return e.loadMemesSlice.hasError},g=n(21),v=Object(o.b)("formSlice/postForm",function(){var e=Object(d.a)(m.a.mark((function e(t){var n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.imgflip.com/caption_image".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()),M=Object(o.c)({name:"formSlice",initialState:{isLoading:!1,isFailed:!1,isFulfilled:!1,fetchedmeme:{}},extraReducers:(a={},Object(j.a)(a,v.pending,(function(e){e.isLoading=!0})),Object(j.a)(a,v.fulfilled,(function(e,t){e.fetchedmeme=t.payload,e.isFulfilled=!0,e.isLoading=!1})),Object(j.a)(a,v.rejected,(function(e){e.isFailed=!0})),Object(j.a)(a,g.REHYDRATE,(function(){console.log("rehydrated")})),a)}).reducer,w=function(e){return e.fetchedMemeSlice.fetchedmeme},S=function(e){return e.fetchedMemeSlice.isLoading},N=function(e){return e.fetchedMemeSlice.isFulfilled},k=n(5),y=n(11),L=n(22),C={key:"root",storage:n.n(L).a,whitelist:["fetchedMemeSlice","loadMemesSlice"]},E=Object(k.b)({loadMemesSlice:f,fetchedMemeSlice:M}),_=Object(y.g)(C,E),A=Object(o.a)({reducer:_,middleware:function(e){return e({serializableCheck:{ignoredActions:[y.a,y.b,y.d,y.f,y.e,y.c]}})}}),F=Object(y.h)(A),z=A,R=n(12),q=n(2),D=n(0),H=n(1),U=function(){return Object(H.jsxs)("header",{className:"header-main",children:[Object(H.jsx)("p",{children:"MemeGeneratorV2"}),Object(H.jsx)(R.b,{className:"link",to:"/",children:"ALL MEMES"})]})},V=n(8),B=n(18),J=function(e){var t=e.id,n=Object(q.f)(),c=Object(r.b)(),a=Object(D.useState)({template_id:t,username:"ahmetulutas",password:"ahmet321"}),i=Object(V.a)(a,2),s=i[0],l=i[1],o=function(e){var t=e.target,n=t.name,c=t.value;l((function(e){return Object(B.a)(Object(B.a)({},e),{},Object(j.a)({},n,c.toUpperCase()))}))},u=function(){var e=Object(d.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.preventDefault();case 2:return e.next=4,c(v(T(s)));case 4:return e.next=6,n("/".concat(t,"/fetch"));case 6:return e.next=8,F.persist();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(H.jsxs)("form",{className:"form-main",onSubmit:u,children:[Object(H.jsx)("textarea",{spellCheck:"false",required:!0,name:"text0",type:"text",placeholder:"type something...",onChange:o}),Object(H.jsx)("textarea",{spellCheck:"false",name:"text1",type:"text",placeholder:"type something...",onChange:o}),Object(H.jsx)("button",{type:"submit",children:"MakeMeme"})]})},T=function(e){return"?"+Object.entries(e).map((function(e){var t=Object(V.a)(e,2),n=t[0],c=t[1];return"".concat(n,"=").concat(c)})).join("&")},G=function(){var e=Object(D.useState)(null),t=Object(V.a)(e,2),n=t[0],c=t[1],a=Object(r.c)(h),i=Object(q.g)().id;return Object(D.useEffect)((function(){a&&c(a.find((function(e){return e.id===i})))}),[i,a]),Object(H.jsx)("main",{className:"meme-component-main",children:n&&Object(H.jsxs)("div",{className:"meme-div",children:[Object(H.jsx)("img",{alt:n.name,src:n.url}),Object(H.jsx)(J,{id:i,textAmount:n.box_count})]})})},I=function(){return Object(H.jsx)("div",{className:"svg-div",children:Object(H.jsx)("svg",{id:"svg","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"pen-to-square",className:"svg-inline--fa fa-pen-to-square",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(H.jsx)("path",{fill:"orange",d:"M383.1 448H63.1V128h156.1l64-64H63.1C28.65 64 0 92.65 0 128v320c0 35.35 28.65 64 63.1 64h319.1c35.34 0 63.1-28.65 63.1-64l-.0039-220.1l-63.1 63.99V448zM497.9 42.19l-28.13-28.14c-18.75-18.75-49.14-18.75-67.88 0l-38.62 38.63l96.01 96.01l38.62-38.63C516.7 91.33 516.7 60.94 497.9 42.19zM147.3 274.4l-19.04 95.22c-1.678 8.396 5.725 15.8 14.12 14.12l95.23-19.04c4.646-.9297 8.912-3.213 12.26-6.562l186.8-186.8l-96.01-96.01L153.8 262.2C150.5 265.5 148.2 269.8 147.3 274.4z"})})})},Y=function(e){var t=e.id,n=e.url,c=e.name;return Object(H.jsxs)("main",{className:"each-meme",children:[Object(H.jsxs)("div",{className:"meme-info",children:[Object(H.jsx)("p",{children:c}),Object(H.jsx)("img",{alt:c,src:n},t)]}),Object(H.jsx)(I,{})]})},K=function(){return Object(H.jsx)("h1",{children:"Upps.. Something went wrong..."})},P=function(){var e=Object(r.b)(),t=Object(r.c)(h),n=Object(r.c)(O),c=Object(r.c)(x),a=Object(r.c)(p);return Object(D.useEffect)((function(){e(b())}),[e]),n?Object(H.jsx)("main",{className:"all-memes-main-content",children:Object(H.jsx)("h1",{children:"Loading..."})}):c&&t?Object(H.jsx)("main",{className:"all-memes-main-content",children:t.filter((function(e){return e.box_count<4})).map(Q)}):a?Object(H.jsx)("main",{className:"all-memes-main-content",children:Object(H.jsx)(K,{})}):void 0},Q=function(e){return Object(H.jsx)(R.b,{style:{textDecoration:"none"},to:"/".concat(e.id),children:Object(H.jsx)(Y,{id:e.id,name:e.name,alt:e.name,url:e.url},e.id)})},W=function(){var e=Object(r.c)(w),t=Object(r.c)(S),n=Object(r.c)(N);return t?Object(H.jsx)("main",{className:"fetchedmeme-main",children:Object(H.jsx)("h1",{children:"Loading..."})}):n&&e?Object(H.jsxs)("main",{className:"fetchedmeme-main",children:[Object(H.jsx)("p",{children:"Click on the Meme."}),Object(H.jsx)("p",{children:"Then, right click to save it."}),Object(H.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.data.url,download:e.data.url,children:Object(H.jsx)("img",{target:"_blank",download:e.data.url,alt:"fetchedmeme",src:e.data.url})})]}):Object(H.jsx)("main",{className:"fetchedmeme-main",children:Object(H.jsx)(K,{})})},X=function(){return Object(H.jsxs)("footer",{className:"footer-main",children:[Object(H.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/ahmettulutas",children:" check my github"}),Object(H.jsx)("p",{children:"AhmetUluta\u015f"})]})};function Z(){return Object(H.jsx)(R.a,{children:Object(H.jsxs)("main",{className:"main-app-layout",children:[Object(H.jsx)(U,{}),Object(H.jsx)("section",{className:"routes-section",children:Object(H.jsxs)(q.c,{children:[Object(H.jsx)(q.a,{path:"/",exact:!0,element:Object(H.jsx)(P,{})}),Object(H.jsx)(q.a,{path:"/:id",element:Object(H.jsx)(G,{})}),Object(H.jsx)(q.a,{path:"/:id/:fetchedmeme",element:Object(H.jsx)(W,{})})]})}),Object(H.jsx)(X,{})]})})}n(37);var $=document.getElementById("root");l.a.render(Object(H.jsx)(r.a,{store:z,children:Object(H.jsx)(i.a,{loading:null,persistor:F,children:Object(H.jsx)(Z,{})})}),$)}},[[38,1,2]]]);
//# sourceMappingURL=main.57d63d7b.chunk.js.map
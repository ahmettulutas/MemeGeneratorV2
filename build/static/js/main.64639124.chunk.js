(this.webpackJsonpmemegeneratoradvanced=this.webpackJsonpmemegeneratoradvanced||[]).push([[0],{35:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n,a,r=c(3),s=c(0),i=c(14),l=c.n(i),o=c(10),j=c(6),m=c(11),u=c.n(m),d=c(13),b=c(8),f=Object(o.b)("allMemes/loadAllMemes",Object(d.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.imgflip.com/get_memes");case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,e.abrupt("return",c.data);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))),h=Object(o.c)({name:"allMemes",initialState:{isLoading:!0,hasError:!1,fulfilled:!1,pending:!1,allMemes:{}},extraReducers:(n={},Object(j.a)(n,f.pending,(function(e,t){e.pending=!0})),Object(j.a)(n,f.fulfilled,(function(e,t){e.fulfilled=!0,e.isLoading=!1,e.allMemes=t.payload})),Object(j.a)(n,f.rejected,(function(e,t){e.hasError=!0})),Object(j.a)(n,b.f,(function(e,t){console.log("REHYDRATE")})),n)}).reducer,O=function(e){return e.loadMemesSlice.allMemes.memes},p=function(e){return e.loadMemesSlice.isLoading},x=function(e){return e.loadMemesSlice.fulfilled},g=function(e){return e.loadMemesSlice.hasError},v=Object(o.b)("formSlice/postForm",function(){var e=Object(d.a)(u.a.mark((function e(t){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.imgflip.com/caption_image".concat(t));case 3:return c=e.sent,e.next=6,c.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()),M=Object(o.c)({name:"formSlice",initialState:{isLoading:!1,isFailed:!1,isFulfilled:!1,fetchedmeme:{}},extraReducers:(a={},Object(j.a)(a,v.pending,(function(e){e.isLoading=!0})),Object(j.a)(a,v.fulfilled,(function(e,t){e.fetchedmeme=t.payload,e.isFulfilled=!0,e.isLoading=!1})),Object(j.a)(a,v.rejected,(function(e){e.isFailed=!0})),Object(j.a)(a,b.f,(function(e,t){return e})),a)}).reducer,w=function(e){return e.fetchedMemeSlice.fetchedmeme},S=function(e){return e.fetchedMemeSlice.isLoading},N=function(e){return e.fetchedMemeSlice.isFulfilled},k=c(5),y=c(20),L={key:"root",storage:c.n(y).a,whitelist:["loadMemesSlice"]},C=Object(k.b)({loadMemesSlice:h,fetchedMemeSlice:M}),E=Object(b.g)(L,C),_=Object(o.a)({reducer:E,middleware:function(e){return e({serializableCheck:{ignoredActions:[b.a,b.b,b.d,b.e,b.f,b.c]}})}}),A=Object(b.h)(_),F=_,z=(c(35),c(12)),R=c(1),U=function(){return Object(R.jsxs)("header",{className:"header-main",children:[Object(R.jsx)("p",{children:"MemeGeneratorV2"}),Object(R.jsx)(z.b,{className:"link",to:"/",children:"ALL MEMES"})]})},q=c(9),D=c(2),H=c(18),V=function(e){var t=e.id,c=Object(D.f)(),n=Object(r.b)(),a=Object(s.useState)({template_id:t,username:"ahmetulutas",password:"ahmet321"}),i=Object(q.a)(a,2),l=i[0],o=i[1],m=function(e){var t=e.target,c=t.name,n=t.value;o((function(e){return Object(H.a)(Object(H.a)({},e),{},Object(j.a)({},c,n.toUpperCase()))}))},b=function(){var e=Object(d.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),n(v(B(l))),c("/memes/".concat(t,"/").concat(l.template_id+"fetch"));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(R.jsxs)("form",{className:"form-main",onSubmit:b,children:[Object(R.jsx)("textarea",{spellCheck:"false",required:!0,name:"text0",type:"text",placeholder:"type something...",onChange:m}),Object(R.jsx)("textarea",{spellCheck:"false",name:"text1",type:"text",placeholder:"type something...",onChange:m}),Object(R.jsx)("button",{type:"submit",children:"MakeMeme"})]})},B=function(e){return"?"+Object.entries(e).map((function(e){var t=Object(q.a)(e,2),c=t[0],n=t[1];return"".concat(c,"=").concat(n)})).join("&")},J=function(){var e=Object(s.useState)(null),t=Object(q.a)(e,2),c=t[0],n=t[1],a=Object(r.c)(O),i=Object(D.g)().id;return Object(s.useEffect)((function(){a&&n(a.find((function(e){return e.id===i})))}),[i,a]),Object(R.jsx)("main",{className:"meme-component-main",children:c&&Object(R.jsxs)("div",{className:"meme-div",children:[Object(R.jsx)("img",{alt:c.name,src:c.url}),Object(R.jsx)(V,{id:i,textAmount:c.box_count})]})})},G=function(){return Object(R.jsx)("div",{className:"svg-div",children:Object(R.jsx)("svg",{id:"svg","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"pen-to-square",className:"svg-inline--fa fa-pen-to-square",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(R.jsx)("path",{fill:"orange",d:"M383.1 448H63.1V128h156.1l64-64H63.1C28.65 64 0 92.65 0 128v320c0 35.35 28.65 64 63.1 64h319.1c35.34 0 63.1-28.65 63.1-64l-.0039-220.1l-63.1 63.99V448zM497.9 42.19l-28.13-28.14c-18.75-18.75-49.14-18.75-67.88 0l-38.62 38.63l96.01 96.01l38.62-38.63C516.7 91.33 516.7 60.94 497.9 42.19zM147.3 274.4l-19.04 95.22c-1.678 8.396 5.725 15.8 14.12 14.12l95.23-19.04c4.646-.9297 8.912-3.213 12.26-6.562l186.8-186.8l-96.01-96.01L153.8 262.2C150.5 265.5 148.2 269.8 147.3 274.4z"})})})},I=function(e){var t=e.id,c=e.url,n=(e.alt,e.name);return Object(R.jsxs)("main",{className:"each-meme",children:[Object(R.jsxs)("div",{className:"meme-info",children:[Object(R.jsx)("p",{children:n}),Object(R.jsx)("img",{alt:n,src:c},t)]}),Object(R.jsx)(G,{})]})},T=function(){return Object(R.jsx)("h1",{children:"Upps.. Something went wrong..."})},Y=function(){var e=Object(r.b)(),t=Object(r.c)(O),c=Object(r.c)(p),n=Object(r.c)(x),a=Object(r.c)(g);return Object(s.useEffect)((function(){e(f())}),[e]),c?Object(R.jsx)("main",{className:"all-memes-main-content",children:Object(R.jsx)("h1",{children:"Loading..."})}):n&&t?Object(R.jsx)("main",{className:"all-memes-main-content",children:t.filter((function(e){return e.box_count<4})).map(K)}):a?Object(R.jsx)("main",{className:"all-memes-main-content",children:Object(R.jsx)(T,{})}):void 0},K=function(e){return Object(R.jsx)(z.b,{style:{textDecoration:"none"},to:"/memes/".concat(e.id),children:Object(R.jsx)(I,{id:e.id,name:e.name,alt:e.name,url:e.url},e.id)})},P=function(){var e=Object(r.c)(w),t=Object(r.c)(S),c=Object(r.c)(N);return t?Object(R.jsxs)("main",{className:"fetchedmeme-main",children:[Object(R.jsx)("lottie-player",{src:"https://assets4.lottiefiles.com/packages/lf20_szlepvdh.json",background:"transparent",speed:"1",style:{width:"300px",height:"300px;"},loop:!0,autoplay:!0}),";"]}):c&&e?Object(R.jsxs)("main",{className:"fetchedmeme-main",children:[Object(R.jsx)("p",{children:"Click on the Meme to download it"}),Object(R.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.data.url,download:e.data.url,children:Object(R.jsx)("img",{download:e.data.url,alt:"fetchedmeme",src:e.data.url})})]}):Object(R.jsxs)("main",{className:"fetchedmeme-main",children:[Object(R.jsx)("p",{children:"Uppss... Something went wrong..."}),Object(R.jsx)(T,{})]})},Q=function(){return Object(R.jsxs)("footer",{className:"footer-main",children:[Object(R.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/ahmettulutas",children:" check my github"}),Object(R.jsx)("p",{children:"AhmetUluta\u015f"})]})};function W(){return Object(R.jsx)("main",{className:"main-app-layout",children:Object(R.jsxs)(z.a,{children:[Object(R.jsx)(U,{}),Object(R.jsx)("div",{className:"routes-section",children:Object(R.jsxs)(D.c,{children:[Object(R.jsx)(D.a,{path:"/",exact:!0,element:Object(R.jsx)(Y,{})}),Object(R.jsx)(D.a,{path:"/memes/:id",element:Object(R.jsx)(J,{})}),Object(R.jsx)(D.a,{path:"/memes/:id/:fetchedmeme",element:Object(R.jsx)(P,{})})]})}),Object(R.jsx)(Q,{})]})})}var X=c(21),Z=document.getElementById("root");l.a.render(Object(R.jsx)(s.StrictMode,{children:Object(R.jsx)(r.a,{store:F,children:Object(R.jsx)(X.a,{loading:null,persistor:A,children:Object(R.jsx)(W,{})})})}),Z)}},[[37,1,2]]]);
//# sourceMappingURL=main.64639124.chunk.js.map
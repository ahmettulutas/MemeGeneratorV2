(this.webpackJsonpmemegeneratoradvanced=this.webpackJsonpmemegeneratoradvanced||[]).push([[0],{36:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c,a,r=n(3),s=n(14),i=n.n(s),l=n(10),o=n(6),j=n(11),u=n.n(j),d=n(13),m=n(9),b=Object(l.b)("allMemes/loadAllMemes",Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.imgflip.com/get_memes");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.data);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))),f=Object(l.c)({name:"allMemes",initialState:{isLoading:!0,hasError:!1,fulfilled:!1,pending:!1,allMemes:{}},extraReducers:(c={},Object(o.a)(c,b.pending,(function(e,t){e.pending=!0})),Object(o.a)(c,b.fulfilled,(function(e,t){e.fulfilled=!0,e.isLoading=!1,e.allMemes=t.payload})),Object(o.a)(c,b.rejected,(function(e,t){e.hasError=!0})),Object(o.a)(c,m.f,(function(e,t){console.log("REHYDRATE")})),c)}).reducer,h=function(e){return e.loadMemesSlice.allMemes.memes},O=function(e){return e.loadMemesSlice.isLoading},p=function(e){return e.loadMemesSlice.fulfilled},x=function(e){return e.loadMemesSlice.hasError},g=n(20),v=Object(l.b)("formSlice/postForm",function(){var e=Object(d.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.imgflip.com/caption_image".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()),M=Object(l.c)({name:"formSlice",initialState:{isLoading:!1,isFailed:!1,isFulfilled:!1,fetchedmeme:{},rehydrate:!1},extraReducers:(a={},Object(o.a)(a,v.pending,(function(e){e.isLoading=!0})),Object(o.a)(a,v.fulfilled,(function(e,t){e.fetchedmeme=t.payload,e.isFulfilled=!0,e.isLoading=!1})),Object(o.a)(a,v.rejected,(function(e){e.isFailed=!0})),Object(o.a)(a,g.REHYDRATE,(function(e,t){console.log("rehydrated")})),a)}).reducer,w=function(e){return e.fetchedMemeSlice.fetchedmeme},S=function(e){return e.fetchedMemeSlice.isLoading},y=function(e){return e.fetchedMemeSlice.isFulfilled},k=n(5),N=n(21),E={key:"root",storage:n.n(N).a,whitelist:["fetchedMemeSlice","loadMemesSlice"]},L=Object(k.b)({loadMemesSlice:f,fetchedMemeSlice:M}),C=Object(m.g)(E,L),_=Object(l.a)({reducer:C,middleware:function(e){return e({serializableCheck:{ignoredActions:[m.a,m.b,m.d,m.f,m.e,m.c]}})}}),A=Object(m.h)(_),F=_,R=(n(36),n(0)),z=n(12),D=n(1),H=function(){return Object(D.jsxs)("header",{className:"header-main",children:[Object(D.jsx)("p",{children:"MemeGeneratorV2"}),Object(D.jsx)(z.b,{className:"link",to:"/",children:"ALL MEMES"})]})},q=n(8),U=n(2),V=n(18),B=function(e){var t=e.id,n=Object(U.f)(),c=Object(r.b)(),a=Object(R.useState)({template_id:t,username:"ahmetulutas",password:"ahmet321"}),s=Object(q.a)(a,2),i=s[0],l=s[1],j=function(e){var t=e.target,n=t.name,c=t.value;l((function(e){return Object(V.a)(Object(V.a)({},e),{},Object(o.a)({},n,c.toUpperCase()))}))},m=function(){var e=Object(d.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.preventDefault();case 2:return e.next=4,c(v(J(i)));case 4:return e.next=6,n("/".concat(t,"/fetch"));case 6:return e.next=8,A.persist();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(D.jsxs)("form",{className:"form-main",onSubmit:m,children:[Object(D.jsx)("textarea",{spellCheck:"false",required:!0,name:"text0",type:"text",placeholder:"type something...",onChange:j}),Object(D.jsx)("textarea",{spellCheck:"false",name:"text1",type:"text",placeholder:"type something...",onChange:j}),Object(D.jsx)("button",{type:"submit",children:"MakeMeme"})]})},J=function(e){return"?"+Object.entries(e).map((function(e){var t=Object(q.a)(e,2),n=t[0],c=t[1];return"".concat(n,"=").concat(c)})).join("&")},T=function(){var e=Object(R.useState)(null),t=Object(q.a)(e,2),n=t[0],c=t[1],a=Object(r.c)(h),s=Object(U.g)().id;return Object(R.useEffect)((function(){a&&c(a.find((function(e){return e.id===s})))}),[s,a]),Object(D.jsx)("main",{className:"meme-component-main",children:n&&Object(D.jsxs)("div",{className:"meme-div",children:[Object(D.jsx)("img",{alt:n.name,src:n.url}),Object(D.jsx)(B,{id:s,textAmount:n.box_count})]})})},Y=function(){return Object(D.jsx)("div",{className:"svg-div",children:Object(D.jsx)("svg",{id:"svg","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"pen-to-square",className:"svg-inline--fa fa-pen-to-square",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(D.jsx)("path",{fill:"orange",d:"M383.1 448H63.1V128h156.1l64-64H63.1C28.65 64 0 92.65 0 128v320c0 35.35 28.65 64 63.1 64h319.1c35.34 0 63.1-28.65 63.1-64l-.0039-220.1l-63.1 63.99V448zM497.9 42.19l-28.13-28.14c-18.75-18.75-49.14-18.75-67.88 0l-38.62 38.63l96.01 96.01l38.62-38.63C516.7 91.33 516.7 60.94 497.9 42.19zM147.3 274.4l-19.04 95.22c-1.678 8.396 5.725 15.8 14.12 14.12l95.23-19.04c4.646-.9297 8.912-3.213 12.26-6.562l186.8-186.8l-96.01-96.01L153.8 262.2C150.5 265.5 148.2 269.8 147.3 274.4z"})})})},G=function(e){var t=e.id,n=e.url,c=(e.alt,e.name);return Object(D.jsxs)("main",{className:"each-meme",children:[Object(D.jsxs)("div",{className:"meme-info",children:[Object(D.jsx)("p",{children:c}),Object(D.jsx)("img",{alt:c,src:n},t)]}),Object(D.jsx)(Y,{})]})},I=function(){return Object(D.jsx)("h1",{children:"Upps.. Something went wrong..."})},K=function(){var e=Object(r.b)(),t=Object(r.c)(h),n=Object(r.c)(O),c=Object(r.c)(p),a=Object(r.c)(x);return Object(R.useEffect)((function(){t.length<1&&e(b()),console.log(A.getState())}),[e]),n?Object(D.jsx)("main",{className:"all-memes-main-content",children:Object(D.jsx)("h1",{children:"Loading..."})}):c&&t?Object(D.jsx)("main",{className:"all-memes-main-content",children:t.filter((function(e){return e.box_count<4})).map(P)}):a?Object(D.jsx)("main",{className:"all-memes-main-content",children:Object(D.jsx)(I,{})}):void 0},P=function(e){return Object(D.jsx)(z.b,{style:{textDecoration:"none"},to:"/".concat(e.id),children:Object(D.jsx)(G,{id:e.id,name:e.name,alt:e.name,url:e.url},e.id)})},Q=function(){var e=Object(r.c)(w),t=Object(r.c)(S),n=Object(r.c)(y);return t?Object(D.jsxs)("main",{className:"fetchedmeme-main",children:[Object(D.jsx)("lottie-player",{src:"https://assets4.lottiefiles.com/packages/lf20_szlepvdh.json",background:"transparent",speed:"1",style:{width:"300px",height:"300px;"},loop:!0,autoplay:!0}),";"]}):n&&e?Object(D.jsxs)("main",{className:"fetchedmeme-main",children:[Object(D.jsx)("p",{children:"Click on the Meme to download it"}),Object(D.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.data.url,download:e.data.url,children:Object(D.jsx)("img",{download:e.data.url,alt:"fetchedmeme",src:e.data.url})})]}):Object(D.jsx)("main",{className:"fetchedmeme-main",children:Object(D.jsx)(I,{})})},W=function(){return Object(D.jsxs)("footer",{className:"footer-main",children:[Object(D.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/ahmettulutas",children:" check my github"}),Object(D.jsx)("p",{children:"AhmetUluta\u015f"})]})};function X(){return Object(D.jsxs)(z.a,{children:[Object(D.jsx)(H,{}),Object(D.jsx)("div",{className:"routes-section",children:Object(D.jsxs)(U.c,{children:[Object(D.jsx)(U.a,{path:"/",exact:!0,element:Object(D.jsx)(K,{})}),Object(D.jsx)(U.a,{path:"/:id",element:Object(D.jsx)(T,{})}),Object(D.jsx)(U.a,{path:"/:id/:fetchedmeme",element:Object(D.jsx)(Q,{})})]})}),Object(D.jsx)(W,{})]})}var Z=n(22),$=document.getElementById("root");i.a.render(Object(D.jsx)(r.a,{store:F,children:Object(D.jsx)(Z.a,{loading:null,persistor:A,children:Object(D.jsx)(X,{})})}),$)}},[[38,1,2]]]);
//# sourceMappingURL=main.65847ac6.chunk.js.map
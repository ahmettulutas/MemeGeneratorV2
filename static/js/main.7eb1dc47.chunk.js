(this.webpackJsonpmemegeneratoradvanced=this.webpackJsonpmemegeneratoradvanced||[]).push([[0],{35:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c,a,r=n(6),i=n(0),s=n(14),l=n.n(s),o=n(9),j=n(7),u=n(10),m=n.n(u),d=n(13),b=Object(o.b)("allMemes/loadAllMemes",Object(d.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.imgflip.com/get_memes");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.data);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))),f=Object(o.c)({name:"allMemes",initialState:{isLoading:!0,hasError:!1,fulfilled:!1,pending:!1,allMemes:{}},extraReducers:(c={},Object(j.a)(c,b.pending,(function(e,t){e.pending=!0})),Object(j.a)(c,b.fulfilled,(function(e,t){e.fulfilled=!0,e.isLoading=!1,e.allMemes=t.payload})),Object(j.a)(c,b.rejected,(function(e,t){e.hasError=!0})),c)}).reducer,h=function(e){return e.loadMemesSlice.allMemes.memes},O=function(e){return e.loadMemesSlice.isLoading},x=function(e){return e.loadMemesSlice.fulfilled},p=Object(o.b)("formSlice/postForm",function(){var e=Object(d.a)(m.a.mark((function e(t,n){var c,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.imgflip.com/caption_image".concat(t));case 3:return c=e.sent,e.next=6,c.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}()),g=Object(o.c)({name:"formSlice",initialState:{isLoading:!1,isFailed:!1,isFulfilled:!1,fetchedmeme:{}},extraReducers:(a={},Object(j.a)(a,p.pending,(function(e,t){e.isLoading=!0})),Object(j.a)(a,p.fulfilled,(function(e,t){e.fetchedmeme=t.payload,e.isFulfilled=!0})),Object(j.a)(a,p.rejected,(function(e,t){e.isFailed=!0})),a)}).reducer,v=function(e){return e.filteredMemeSlice.fetchedmeme},M=n(4),w=n(11),y=n(20),S={key:"root",storage:n.n(y).a},k=Object(M.b)({loadMemesSlice:f,filteredMemeSlice:g}),N=Object(w.g)(S,k),L=Object(o.a)({reducer:N,middleware:function(e){return e({serializableCheck:{ignoredActions:[w.a,w.f,w.b,w.c,w.d,w.e]}})}}),C=Object(w.h)(L),E=L,_=(n(35),n(12)),F=n(1),A=function(){return Object(F.jsxs)("header",{className:"header-main",children:[Object(F.jsx)("p",{children:"MemeGeneratorV2"}),Object(F.jsx)(_.b,{className:"link",to:"/",children:"ALL MEMES"})]})},q=n(8),z=n(2),V=n(18),B=function(e){var t=e.id,n=(e.textAmount,Object(z.g)()),c=Object(r.b)(),a=Object(i.useState)({template_id:t,username:"ahmetulutas",password:"ahmet321"}),s=Object(q.a)(a,2),l=s[0],o=s[1],u=function(e){var t=e.target,n=t.name,c=t.value;o((function(e){return Object(V.a)(Object(V.a)({},e),{},Object(j.a)({},n,c.toUpperCase()))}))},b=function(){var e=Object(d.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.preventDefault();case 2:return e.next=4,c(p(D(l)));case 4:return e.next=6,n("/memes/".concat(t,"/").concat(l.template_id+"fetch"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(F.jsxs)("form",{className:"form-main",onSubmit:b,children:[Object(F.jsx)("textarea",{required:!0,name:"text0",type:"text",placeholder:"type something...",onChange:u}),Object(F.jsx)("textarea",{required:!0,name:"text1",type:"text",placeholder:"type something...",onChange:u}),Object(F.jsx)("button",{type:"submit",children:"MakeMeme"})]})},D=function(e){return"?"+Object.entries(e).map((function(e){var t=Object(q.a)(e,2),n=t[0],c=t[1];return"".concat(n,"=").concat(c)})).join("&")},H=function(){var e=Object(i.useState)(null),t=Object(q.a)(e,2),n=t[0],c=t[1],a=Object(r.c)(h),s=Object(z.h)().id;return Object(i.useEffect)((function(){a&&c(a.find((function(e){return e.id===s})))}),[a,s]),Object(F.jsx)("main",{className:"meme-component-main",children:n&&Object(F.jsxs)("div",{children:[Object(F.jsx)("img",{style:{width:"300px",height:"auto"},alt:n.name,src:n.url}),Object(F.jsx)(B,{id:s,textAmount:n.box_count})]})})},J=function(){return Object(F.jsx)("div",{className:"svg-div",children:Object(F.jsx)("svg",{id:"svg","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"pen-to-square",className:"svg-inline--fa fa-pen-to-square",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(F.jsx)("path",{fill:"white",d:"M383.1 448H63.1V128h156.1l64-64H63.1C28.65 64 0 92.65 0 128v320c0 35.35 28.65 64 63.1 64h319.1c35.34 0 63.1-28.65 63.1-64l-.0039-220.1l-63.1 63.99V448zM497.9 42.19l-28.13-28.14c-18.75-18.75-49.14-18.75-67.88 0l-38.62 38.63l96.01 96.01l38.62-38.63C516.7 91.33 516.7 60.94 497.9 42.19zM147.3 274.4l-19.04 95.22c-1.678 8.396 5.725 15.8 14.12 14.12l95.23-19.04c4.646-.9297 8.912-3.213 12.26-6.562l186.8-186.8l-96.01-96.01L153.8 262.2C150.5 265.5 148.2 269.8 147.3 274.4z"})})})},R=function(e){var t=e.id,n=e.url,c=(e.alt,e.name);return Object(F.jsxs)("main",{className:"each-meme",children:[Object(F.jsxs)("div",{className:"meme-info",children:[Object(F.jsx)("p",{children:c}),Object(F.jsx)("img",{alt:c,src:n},t)]}),Object(F.jsx)(J,{})]})},G=function(){var e=Object(r.b)(),t=Object(r.c)(h),n=Object(r.c)(O),c=Object(r.c)(x);return Object(i.useEffect)((function(){e(b())}),[e]),n?Object(F.jsx)("h1",{children:"Loading..."}):c&&t?Object(F.jsx)("main",{style:{color:"white"},className:"all-memes-main-content",children:t.filter((function(e){return e.box_count<4})).map(I)}):void 0},I=function(e){return Object(F.jsx)(_.b,{style:{textDecoration:"none"},to:"/memes/".concat(e.id),children:Object(F.jsx)(R,{id:e.id,name:e.name,alt:e.name,url:e.url},e.id)})},U=function(){var e=Object(r.c)(v);return e.success?Object(F.jsxs)("main",{className:"fetchedmeme-main",children:[Object(F.jsx)("p",{children:"Click on the Meme to download it"}),Object(F.jsx)("a",{href:e.data.url,download:e.data.url,children:Object(F.jsx)("img",{alt:"fetchedmeme",src:e.data.url})})]}):Object(F.jsx)("main",{children:Object(F.jsx)("h1",{children:"Failed to makeMeme"})})},K=function(){return Object(F.jsx)("footer",{className:"footer-main",children:Object(F.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/ahmettulutas",children:" check my github"})})};function P(){return Object(F.jsx)("main",{className:"main-app-layout",children:Object(F.jsxs)(_.a,{children:[Object(F.jsx)(A,{}),Object(F.jsx)("section",{className:"routes-section",children:Object(F.jsxs)(z.d,{children:[Object(F.jsx)(z.b,{path:"/",element:Object(F.jsx)(G,{})}),Object(F.jsx)(z.b,{path:"/memes/:id",element:Object(F.jsx)(H,{})}),Object(F.jsx)(z.b,{path:"/memes/:id/:fetchedmeme",element:Object(F.jsx)(U,{})}),Object(F.jsx)(z.b,{path:"*",element:Object(F.jsx)(z.a,{to:"/"})})]})}),Object(F.jsx)(K,{})]})})}var Q=n(21),T=document.getElementById("root");l.a.render(Object(F.jsx)(i.StrictMode,{children:Object(F.jsx)(r.a,{store:E,children:Object(F.jsx)(Q.a,{loading:null,persistor:C,children:Object(F.jsx)(P,{})})})}),T)}},[[37,1,2]]]);
//# sourceMappingURL=main.7eb1dc47.chunk.js.map
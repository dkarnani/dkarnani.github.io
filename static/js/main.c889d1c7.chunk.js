(this["webpackJsonpauth0-react-sample"]=this["webpackJsonpauth0-react-sample"]||[]).push([[0],{143:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),i=(a(99),a(10)),o=a(151),s=a(12),u=a(80),m=a.n(u),d=function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("img",{src:m.a,alt:"Loading"}))},p=a(11),f=a.n(p),E=a(21),h=a(19),b=a(17),g=a(26),v=a(150),N=a(152),O=a(153),j=a(154),y=a(155),w=a(156),k=a(157),x=a(82),A=a(165),L=a(166),S=a(167),C=a(158),I=function(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),a=(t[0],t[1],Object(s.b)()),c=a.user,l=a.isLoading,i=(a.getAccessTokenSilently,a.isAuthenticated),u=a.loginWithRedirect,m=a.logout;if(l)return r.a.createElement(d,null);var p=function(){var e=Object(E.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,u();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"nav-container"},r.a.createElement(v.a,{color:"light",light:!0,expand:"md"},r.a.createElement(o.a,null,r.a.createElement(N.a,{className:"logo"}),r.a.createElement(O.a,null),r.a.createElement(j.a,{navbar:!0},r.a.createElement(y.a,{className:"mr-auto",navbar:!0},r.a.createElement(w.a,null,r.a.createElement(k.a,{tag:b.b,to:"/",exact:!0,activeClassName:"router-link-exact-active"},"Home")),i&&r.a.createElement(w.a,null,r.a.createElement(k.a,{tag:b.b,to:"/tester",exact:!0,activeClassName:"router-link-exact-active"},"Tester")),i&&r.a.createElement(w.a,null,r.a.createElement(k.a,{tag:b.b,to:"/leaderboard",exact:!0,activeClassName:"router-link-exact-active"},"Leaderboard"))),r.a.createElement(y.a,{className:"d-none d-md-block",navbar:!0},!i&&r.a.createElement(w.a,null,r.a.createElement(x.a,{id:"qsLoginBtn",color:"primary",className:"btn-margin",onClick:p},"Log in")),i&&r.a.createElement(A.a,{nav:!0,inNavbar:!0},r.a.createElement(L.a,{nav:!0,caret:!0,id:"profileDropDown"},r.a.createElement("img",{src:c.picture,alt:"Profile",className:"nav-user-profile rounded-circle",width:"50"})),r.a.createElement(S.a,null,r.a.createElement(C.a,{header:!0},c.name),r.a.createElement(C.a,{tag:b.b,to:"/profile",className:"dropdown-profile",activeClassName:"router-link-exact-active"},r.a.createElement(g.a,{icon:"user",className:"mr-3"})," Profile"),r.a.createElement(C.a,{id:"qsLogoutBtn",onClick:function(){return m({returnTo:"https://dkarnani.github.io/"})}},r.a.createElement(g.a,{icon:"power-off",className:"mr-3"})," Log out")))),!i&&r.a.createElement(y.a,{className:"d-md-none",navbar:!0},r.a.createElement(w.a,null,r.a.createElement(x.a,{id:"qsLoginBtn",color:"primary",block:!0,onClick:p},"Log in"))),i&&r.a.createElement(y.a,{className:"d-md-none justify-content-between",navbar:!0,style:{minHeight:170}},r.a.createElement(w.a,null,r.a.createElement("span",{className:"user-info"},r.a.createElement("img",{src:c.picture,alt:"Profile",className:"nav-user-profile d-inline-block rounded-circle mr-3",width:"50"}),r.a.createElement("h6",{className:"d-inline-block"},c.name))),r.a.createElement(w.a,null,r.a.createElement(g.a,{icon:"user",className:"mr-3"}),r.a.createElement(b.b,{to:"/profile",activeClassName:"router-link-exact-active"},"Profile")),r.a.createElement(w.a,null,r.a.createElement(g.a,{icon:"power-off",className:"mr-3"}),r.a.createElement(b.b,{to:"#",id:"qsLogoutBtn",onClick:function(){return m({returnTo:"https://dkarnani.github.io/"})}},"Log out")))))))},B=function(){return r.a.createElement("footer",{className:"bg-light p-3 text-center"},r.a.createElement("div",{className:"logo"}),r.a.createElement("p",null,"Designed by Divij Karnani"))},P=a(84),R=a.n(P),M=function(){return r.a.createElement("div",{className:"text-center hero my-5"},r.a.createElement("img",{className:"mb-3 app-logo",src:R.a,alt:"React logo",width:"120"}),r.a.createElement("h1",{className:"mb-4"},"React.js Sample Project"),r.a.createElement("p",{className:"lead"},"This is a sample application that demonstrates an authentication flow for an SPA, using ",r.a.createElement("a",{href:"https://reactjs.org"},"React.js")))},D=a(37),T=a(38),U=a(42),F=a(41),_=a(159),J=a(160),z=[{title:"Configure other identity providers",link:"https://auth0.com/docs/connections",description:"Auth0 supports social providers as Facebook, Twitter, Instagram and 100+, Enterprise providers as Microsoft Office 365, Google Apps, Azure, and more. You can also use any OAuth2 Authorization Server."},{title:"Enable Multifactor Authentication",link:"https://auth0.com/docs/multifactor-authentication",description:"Add an extra layer of security by enabling Multi-factor Authentication, requiring your users to provide more than one piece of identifying information. Push notifications, authenticator apps, SMS, and DUO Security are supported."},{title:"Anomaly Detection",link:"https://auth0.com/docs/anomaly-detection",description:"Auth0 can detect anomalies and stop malicious attempts to access your application. Anomaly detection can alert you and your users of suspicious activity, as well as block further login attempts."},{title:"Learn About Rules",link:"https://auth0.com/docs/rules",description:"Rules are JavaScript functions that execute when a user authenticates to your application. They run once the authentication process is complete, and you can use them to customize and extend Auth0's capabilities."}],q=function(e){Object(U.a)(a,e);var t=Object(F.a)(a);function a(){return Object(D.a)(this,a),t.apply(this,arguments)}return Object(T.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"next-steps my-5"},r.a.createElement("h2",{className:"my-5 text-center"},"What can I do next?"),r.a.createElement(_.a,{className:"d-flex justify-content-between"},z.map((function(e,t){return r.a.createElement(J.a,{key:t,md:5,className:"mb-4"},r.a.createElement("h6",{className:"mb-3"},r.a.createElement("a",{href:e.link},r.a.createElement(g.a,{icon:"link",className:"mr-2"}),e.title)),r.a.createElement("p",null,e.description))}))))}}]),a}(n.Component),W=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(M,null),r.a.createElement("hr",null),r.a.createElement(q,null))},H=a(164),G=a(91),Y=a(92);H.a.registerLanguage("json",G.a);var K,V=function(e){var t=e.children;return r.a.createElement(H.a,{language:"json",style:Y.a},t)},$=Object(s.c)((function(){var e=Object(s.b)().user;return r.a.createElement(o.a,{className:"mb-5"},r.a.createElement(_.a,{className:"align-items-center profile-header mb-5 text-center text-md-left"},r.a.createElement(J.a,{md:2},r.a.createElement("img",{src:e.picture,alt:"Profile",className:"rounded-circle img-fluid profile-picture mb-3 mb-md-0"})),r.a.createElement(J.a,{md:!0},r.a.createElement("h2",null,e.name),r.a.createElement("p",{className:"lead text-muted"},e.email))),r.a.createElement(_.a,null,r.a.createElement(V,null,JSON.stringify(e,null,2))))}),{onRedirecting:function(){return r.a.createElement(d,null)}}),Q=a(16),X=a(40),Z=a(32),ee=(a(79),a(161)),te=a(162),ae=a(163),ne=a(31),re=(K={API_URL:"https://www.node-express.com/uploader"},Object(ne.a)(K,"API_URL","https://www.node-express.com/leaderboard"),Object(ne.a)(K,"DOMAIN","aerovate.auth0.com"),Object(ne.a)(K,"clientID","E3vnWzy4O0gcrM1seDpU7r2glcHE44G4"),K),ce=Object(s.c)((function(){var e=Object(n.useState)({showResult:!1,apiMessage:null,error:null,file:null,values:null,score:null}),t=Object(h.a)(e,2),a=t[0],c=t[1],l=Object(s.b)(),i=(l.getAccessTokenSilently,l.getIdTokenClaims),o=function(){var e=Object(E.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(a.file),Object(Z.b)("File submitted!");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(E.a)(f.a.mark((function e(t){var n,r,l,o,s,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i();case 3:return n=e.sent,r=n.__raw,l=re.API_URL,(o=new FormData).append("file",t),s={headers:{Authorization:"Bearer ".concat(r),"content-type":"multipart/form-data"}},e.next=11,Object(X.post)(l,o,s);case 11:u=e.sent,c(Object(Q.a)(Object(Q.a)({},a),{},{values:u.data.data,score:u.data.score})),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),c(Object(Q.a)(Object(Q.a)({},a),{},{error:e.t0}));case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,null),r.a.createElement("div",{className:"mb-5"},r.a.createElement("h1",{className:"primary"},"File Upload"),r.a.createElement("hr",null),r.a.createElement(ee.a,{inline:!0},r.a.createElement(te.a,null,r.a.createElement(ae.a,{type:"file",onChange:function(e){return function(e){c(Object(Q.a)(Object(Q.a)({},a),{},{file:e.target.files[0]})),Object(Z.b)("File Uploaded!")}(e)},id:"custom-file-translate-scss",label:"Select a file",lang:"en","data-browse":"Button text"}),r.a.createElement(x.a,{onClick:function(e){return o(e)},className:"mdl-button mdl-js-button",variant:"outline-primary"},"Upload"))),a.error&&r.a.createElement("div",{className:"mt-5"},r.a.createElement("h4",{className:"muted"},"Error"),r.a.createElement(V,{language:"json"},JSON.stringify(a.error,null,2))),a.score&&r.a.createElement("div",{className:"mt-5"},r.a.createElement("h4",{className:"muted"},"Your Score"),r.a.createElement(V,{language:"json"},JSON.stringify(a.score,null,2))),a.values&&r.a.createElement("div",{className:"mt-5"},r.a.createElement("h4",{className:"muted"},"Values"),r.a.createElement(V,{language:"json"},JSON.stringify(a.values,null,2)))))}),{onRedirecting:function(){return r.a.createElement(d,null)}}),le=a(13),ie=(Object(le.a)(),a(93)),oe=Object(n.createContext)(),se=(n.Component,a(143),a(27)),ue=a(35);var me=function(){se.b.add(ue.a),se.b.add(ue.c),se.b.add(ue.b)},de=(a(144),Object(s.c)((function(){var e=Object(n.useState)({users:[],paginate:20}),t=Object(h.a)(e,2),a=t[0],c=t[1],l=Object(s.b)(),i=(l.getAccessTokenSilently,l.getIdTokenClaims);Object(n.useEffect)((function(){o()}));var o=function(){var e=Object(E.a)(f.a.mark((function e(){var t,n,r,l,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i();case 3:return t=e.sent,n=t.__raw,r=re.API_URL,l={headers:{Authorization:"Bearer ".concat(n)}},e.next=9,Object(X.get)(r,l);case 9:o=e.sent,c(Object(Q.a)(Object(Q.a)({},a),{},{users:o.data})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),c(Object(Q.a)(Object(Q.a)({},a),{},{error:e.t0}));case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,null),r.a.createElement("div",{className:"mb-5"},r.a.createElement("h1",{className:"primary"},"Leaderboard"),r.a.createElement("hr",null),a.users&&r.a.createElement("div",{className:"mt-5"},r.a.createElement("h4",{className:"muted"},"Leaderboard"),"herro world")))}),{onRedirecting:function(){return r.a.createElement(d,null)}}));me();var pe=function(){var e=Object(s.b)(),t=e.user,a=e.isLoading;return console.log("displaying auth"),console.log(t),a?r.a.createElement(d,null):r.a.createElement("div",{id:"app",className:"d-flex flex-column h-100"},r.a.createElement(I,null),r.a.createElement(o.a,{className:"flex-grow-1 mt-5"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:W}),r.a.createElement(i.a,{path:"/profile",component:$}),r.a.createElement(i.a,{path:"/tester",component:ce}),r.a.createElement(i.a,{path:"/leaderboard",component:de}))),r.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var fe=function(e){var t=e.children,a=Object(i.f)();return r.a.createElement(s.a,{domain:re.DOMAIN,clientId:re.clientID,redirectUri:window.location.origin,onRedirectCallback:function(e){a.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)}},t)};var Ee=function(){if("undefined"!=typeof navigator){var e=navigator.userAgent;return{info:e,Android:function(){return e.match(/Android/i)},BlackBerry:function(){return e.match(/BlackBerry/i)},IEMobile:function(){return e.match(/IEMobile/i)},iOS:function(){return e.match(/iPhone|iPad|iPod/i)},OperaMini:function(){return e.match(/Opera Mini/i)},any:function(){return Ee.Android()||Ee.BlackBerry()||Ee.iOS()||Ee.OperaMini()||Ee.IEMobile()}}}}();l.a.render(r.a.createElement(b.a,null,r.a.createElement(fe,null,r.a.createElement(pe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},80:function(e,t,a){e.exports=a.p+"static/media/loading.c5590569.svg"},84:function(e,t,a){e.exports=a.p+"static/media/NewLogo.c521dd9f.png"},94:function(e,t,a){e.exports=a(146)},99:function(e,t,a){}},[[94,208,209]]]);
//# sourceMappingURL=main.c889d1c7.chunk.js.map
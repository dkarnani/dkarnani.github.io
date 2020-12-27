(this["webpackJsonpauth0-react-sample"]=this["webpackJsonpauth0-react-sample"]||[]).push([[0],{380:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=380},388:function(e,t,a){e.exports=a.p+"static/media/loading.c5590569.svg"},389:function(e,t,a){e.exports=a.p+"static/media/logo.60b4dede.png"},411:function(e,t,a){e.exports=a(516)},416:function(e,t,a){},458:function(e,t,a){},460:function(e,t,a){},516:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),o=(a(416),a(35)),i=a(539),s=a(57),u=a(388),m=a.n(u),d=function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("img",{src:m.a,alt:"Loading"}))},p=a(79),f=a.n(p),g=a(110),b=a(132),E=a(77),h=a(113),v=a(389),y=a.n(v),O=a(538),j=a(540),w=a(541),N=a(542),x=a(543),k=a(544),C=a(545),S=a(390),D=a(563),A=a(564),P=a(565),L=a(546),B=function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),a=t[0],l=t[1],c=Object(s.b)(),o=c.user,u=c.isLoading,m=c.isAuthenticated,p=c.loginWithRedirect,v=c.logout;if(u)return r.a.createElement(d,null);var B=function(){var e=Object(g.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,p();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"nav-container"},r.a.createElement(O.a,{color:"light",light:!0,expand:"md"},r.a.createElement(i.a,null,r.a.createElement(j.a,{href:"/",style:{fontSize:25}},r.a.createElement("img",{src:y.a,width:120})),r.a.createElement(w.a,{onClick:function(){return l(!a)}}),r.a.createElement(N.a,{isOpen:a,navbar:!0},r.a.createElement(x.a,{className:"mr-auto",navbar:!0},r.a.createElement(k.a,null,r.a.createElement(C.a,{tag:E.b,to:"/",exact:!0,activeClassName:"router-link-exact-active",onClick:function(){return l(!1)}},"Home")),m&&r.a.createElement(k.a,null,r.a.createElement(C.a,{tag:E.b,to:"/tester",exact:!0,activeClassName:"router-link-exact-active",onClick:function(){return l(!1)}},"Tester")),m&&r.a.createElement(k.a,null,r.a.createElement(C.a,{tag:E.b,to:"/leaderboard",exact:!0,activeClassName:"router-link-exact-active",onClick:function(){return l(!1)}},"Leaderboard"))),r.a.createElement(x.a,{className:"d-none d-md-block",navbar:!0},!m&&r.a.createElement(k.a,null,r.a.createElement(S.a,{id:"qsLoginBtn",color:"primary",className:"btn-margin",onClick:B},"Log in")),m&&r.a.createElement(D.a,{nav:!0,inNavbar:!0},r.a.createElement(A.a,{nav:!0,caret:!0,id:"profileDropDown"},r.a.createElement("img",{src:o.picture,alt:"Profile",className:"nav-user-profile rounded-circle",width:"50"})),r.a.createElement(P.a,null,r.a.createElement(L.a,{header:!0},o.name),r.a.createElement(L.a,{tag:E.b,to:"/profile",className:"dropdown-profile",activeClassName:"router-link-exact-active"},r.a.createElement(h.a,{icon:"user",className:"mr-3"})," Profile"),r.a.createElement(L.a,{id:"qsLogoutBtn",onClick:function(){return v({returnTo:"https://dkarnani.github.io/"})}},r.a.createElement(h.a,{icon:"power-off",className:"mr-3"})," Log out")))),!m&&r.a.createElement(x.a,{className:"d-md-none",navbar:!0},r.a.createElement(k.a,null,r.a.createElement(S.a,{id:"qsLoginBtn",color:"primary",block:!0,onClick:B},"Log in"))),m&&r.a.createElement(x.a,{className:"d-md-none justify-content-between",navbar:!0,style:{minHeight:170}},r.a.createElement(k.a,null,r.a.createElement("span",{className:"user-info"},r.a.createElement("img",{src:o.picture,alt:"Profile",className:"nav-user-profile d-inline-block rounded-circle mr-3",width:"50"}),r.a.createElement("h6",{className:"d-inline-block"},o.name))),r.a.createElement(k.a,null,r.a.createElement(h.a,{icon:"user",className:"mr-3"}),r.a.createElement(E.b,{to:"/profile",activeClassName:"router-link-exact-active"},"Profile")),r.a.createElement(k.a,null,r.a.createElement(h.a,{icon:"power-off",className:"mr-3"}),r.a.createElement(E.b,{to:"#",id:"qsLogoutBtn",onClick:function(){return v({returnTo:"https://dkarnani.github.io/"})}},"Log out")))))))},I=function(){return r.a.createElement("footer",{className:"bg-light text-center"},r.a.createElement("p",null,"Designed by Divij Karnani"))},R=function(){return r.a.createElement("div",{className:"text-center hero"},r.a.createElement("h1",{className:"mb-4"},"Aerovate Tester"),r.a.createElement("h4",null,r.a.createElement("a",null,"This website allows you to test your designed airplanes")))},_=a(392),H=a(393),T=a(402),F=a(400),J=a(547),M=a(548),U=[{title:"Step 1",description:"Download the software. You can use it to model your plane design."},{title:"Step 2",description:"Export it as a '.json' file. It is now ready to submit!"},{title:"Step 3",description:"Upload your file in the 'Tester' tab. You will then recieve your scores."},{title:"Step 4",description:"You can view your place on the Leaderboard from the 'Leaderboard' tab."}],z=a(561),W=a(394),Y=a(395);z.a.registerLanguage("json",W.a);var q=function(e){var t=e.children;return r.a.createElement(z.a,{lineProps:{style:{paddingBottom:8}},language:"json",wrapLines:!0,style:Y.a},t)},V=function(e){Object(T.a)(a,e);var t=Object(F.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(H.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"next-steps my-5"},r.a.createElement("h2",{className:"my-5 text-center"},"How do I start?"),r.a.createElement(J.a,{className:"d-flex justify-content-between"},U.map((function(e,t){return r.a.createElement(M.a,{key:t,md:5,className:"mb-4"},r.a.createElement("h5",{className:"mb-3"},r.a.createElement("center",null,r.a.createElement("a",null,r.a.createElement(h.a,{icon:"angle-double-right",className:"mr-2"}),e.title))),r.a.createElement("p",null,e.description))}))))}}]),a}(n.Component),G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null),r.a.createElement("hr",null),r.a.createElement(V,null))},K=Object(s.c)((function(){var e=Object(s.b)().user;return r.a.createElement(i.a,{className:"mb-5"},r.a.createElement(J.a,{className:"align-items-center profile-header mb-5 text-center text-md-left"},r.a.createElement(M.a,{md:2},r.a.createElement("img",{src:e.picture,alt:"Profile",className:"rounded-circle img-fluid profile-picture mb-3 mb-md-0"})),r.a.createElement(M.a,{md:!0},r.a.createElement("h2",null,e.name),r.a.createElement("p",{className:"lead text-muted"},e.email))),r.a.createElement(J.a,null,r.a.createElement(q,null,JSON.stringify(e,null,2))))}),{onRedirecting:function(){return r.a.createElement(d,null)}}),$=a(199),Q=a(28),X=a(200),Z=a(101),ee=(a(350),{API_URL:"https://www.node-express.com/uploader",API_LEADERBOARD:"https://www.node-express.com/leaderboard",DOMAIN:"aerovate.auth0.com",clientID:"E3vnWzy4O0gcrM1seDpU7r2glcHE44G4"}),te=(a(458),a(459),a(396)),ae=a.n(te),ne=Object(s.c)((function(){var e=Object(n.useState)({showResult:!1,apiMessage:null,error:null,file:null,values:null,score:null}),t=Object(b.a)(e,2),a=t[0],l=t[1],c=Object(s.b)().getIdTokenClaims,o=function(){var e=Object(g.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i(a.file),Object(Z.b)("File submitted!",{type:"success",position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(g.a)(f.a.mark((function e(t){var n,r,o,i,s,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c();case 3:return n=e.sent,r=n.__raw,o=ee.API_URL,(i=new FormData).append("file",t),s={headers:{Authorization:"Bearer ".concat(r),"content-type":"multipart/form-data"}},e.next=11,Object(X.post)(o,i,s);case 11:(u=e.sent).data.error&&Object(Z.b)("Error returned from the server. Are you sure you formatted correctly?",{type:"warning",position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),l(Object(Q.a)(Object(Q.a)({},a),{},{error:u.data.error,values:u.data.data,score:u.data.score})),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),l(Object(Q.a)(Object(Q.a)({},a),{},{error:e.t0}));case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,null),r.a.createElement("div",{className:"mb-5"},r.a.createElement("h1",{className:"primary"},"Aircraft Tester"),r.a.createElement("hr",null),r.a.createElement(ae.a,Object($.a)({onChangeStatus:function(e,t){e.meta;var n=e.file;"application/json"!=n.type?Object(Z.b)("Please upload a valid json file",{type:"error",position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):n.type>1e4?Object(Z.b)("Your file is too large",{type:"error",position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):l(Object(Q.a)(Object(Q.a)({},a),{},{file:n}))},onSubmit:o,styles:{dropzone:{height:50,maxHeight:50,maxWidth:300}},maxFiles:1,submitButtonContent:"test!",accept:"application/json",inputContent:function(e,t){return t.reject?"Json airplane file only!":"Drop your file"}},"styles",{dropzoneReject:{borderColor:"red",backgroundColor:"#DAA"}})),a.error&&r.a.createElement("div",{className:"mt-5"},r.a.createElement("h4",{className:"muted"},"Error"),r.a.createElement(q,null,JSON.stringify(a.error,null,2))),!a.error&&a.score&&r.a.createElement("div",{className:"mt-5"},r.a.createElement("h4",{className:"muted"},"Your Score"),r.a.createElement(q,{language:"json"},JSON.stringify(a.score,null,2))),!a.error&&a.values&&r.a.createElement("div",{className:"mt-5"},r.a.createElement("h4",{className:"muted"},"Values"),r.a.createElement(q,{language:"json"},JSON.stringify(a.values,null,2)))))}),{onRedirecting:function(){return r.a.createElement(d,null)}}),re=(a(460),a(114)),le=a(153);var ce=function(){re.b.add(le.a),re.b.add(le.c),re.b.add(le.b)},oe=a(401),ie=a(252),se=a.n(ie),ue=a(100),me=a(566),de=a(559),pe=a(560),fe=function(e){var t=e.value,a=e.id;return t?"UP"===t?r.a.createElement(de.a,{"data-testid":"Delta__up-pos".concat(a),style:{color:"forestgreen"}}):r.a.createElement(pe.a,{"data-testid":"Delta__down-pos".concat(a),style:{color:"red"}}):null};fe.defaultProps={value:null};var ge=function(e){var t=e.showDeltas,a=e.showPositions,n=e.column;return r.a.createElement(ue.a,{variant:"body1",style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}},t&&r.a.createElement(fe,{value:n.delta,id:n.position}),a&&n.position)},be=function(e,t){return[(a=t.showPositions,n=t.showDeltas,a||n?{title:"Position",field:"position",cellStyle:{width:"10px",textAlign:"center"},render:function(e){var t={showPositions:a,showDeltas:n,column:e};return r.a.createElement(ge,t)}}:null),{title:"Name",field:"name",render:function(e){return r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement(me.a,{alt:e.name,src:e.image}),r.a.createElement(ue.a,{variant:"body2",style:{paddingLeft:"5px"}},e.name))}}].concat(Object(oe.a)(e.map((function(e){return Object(Q.a)(Object(Q.a)({},e),{},{cellStyle:Object(Q.a)(Object(Q.a)({},e.cellStyle),{},{textAlign:"end"}),headerStyle:Object(Q.a)(Object(Q.a)({},e.headerStyle),{},{textAlign:"end"})})}))),[{title:t.valueName,field:"value",cellStyle:Object(Q.a)({textAlign:"right"},t.valueCellStyle),headerStyle:Object(Q.a)({textAlign:"right"},t.valueHeaderStyle)}]).filter(Boolean).map((function(e){return Object(Q.a)(Object(Q.a)({},e),{},{cellStyle:Object(Q.a)(Object(Q.a)({},e.cellStyle),{},{padding:"5px 15px"})})}));var a,n},Ee=function(e){return e.concat().sort((function(e,t){return e.value>t.value?-1:e.value<t.value?1:0})).map((function(e,t){return Object(Q.a)(Object(Q.a)({},e),{},{position:t+1})}))},he=function e(t){var a=t.title,n=t.data,l=t.columns,c=t.config,o=t.onRowClick,i=t.noDataMessage,s=Object(Q.a)(Object(Q.a)({},e.defaultProps.config),c);return r.a.createElement(se.a,{data:Ee(n),columns:be(l,s),title:a,onRowClick:o,options:{showTitle:!!a,showFirstLastPageButtons:!1,showSelectAllCheckbox:!1,search:!1,headerStyle:{padding:"5px 15px",position:"sticky",top:0},maxBodyHeight:s.maxBodyHeight,sorting:s.columnSorting,draggable:!1,paging:!1,toolbar:!!a},localization:{body:{emptyDataSourceMessage:i}}})};he.defaultProps={noDataMessage:"No data to display",title:null,data:[],columns:[],config:{valueName:"Value",maxBodyHeight:"100%",columnSorting:!1,showPositions:!0,showDeltas:!1},onRowClick:function(){}};var ve=he,ye=Object(s.c)((function(){var e=Object(n.useState)({users:"",paginate:20}),t=Object(b.a)(e,2),a=t[0],l=t[1],c=Object(s.b)(),o=(c.getAccessTokenSilently,c.getIdTokenClaims);Object(n.useEffect)((function(){i()}),[]);var i=function(){var e=Object(g.a)(f.a.mark((function e(){var t,n,r,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o();case 3:return t=e.sent,n=t.__raw,r=ee.API_LEADERBOARD,c={headers:{Authorization:"Bearer ".concat(n)}},e.next=9,Object(X.get)(r,c);case 9:i=e.sent,console.log(JSON.stringify(i.data,null,2)),l(Object(Q.a)(Object(Q.a)({},a),{},{users:i.data})),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),l(Object(Q.a)(Object(Q.a)({},a),{},{error:e.t0}));case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,null),r.a.createElement("div",{className:"mb-5"},r.a.createElement("h1",{className:"primary"},"Leaderboard"),r.a.createElement("hr",null),a.users&&r.a.createElement("div",{className:"mt-5"},r.a.createElement(ve,{data:a.users}))))}),{onRedirecting:function(){return r.a.createElement(d,null)}});ce();var Oe=function(){var e=Object(s.b)(),t=e.user,a=e.isLoading;return console.log("displaying auth"),console.log(t),a?r.a.createElement(d,null):r.a.createElement("div",{id:"app",className:"d-flex flex-column h-100"},r.a.createElement(B,null),r.a.createElement(i.a,{className:"flex-grow-1 mt-5"},r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",exact:!0,component:G}),r.a.createElement(o.a,{path:"/profile",component:K}),r.a.createElement(o.a,{path:"/tester",component:ne}),r.a.createElement(o.a,{path:"/leaderboard",component:ye}))),r.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var je=function(e){var t=e.children,a=Object(o.f)();return r.a.createElement(s.a,{domain:ee.DOMAIN,clientId:ee.clientID,redirectUri:window.location.origin,onRedirectCallback:function(e){a.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)}},t)};c.a.render(r.a.createElement(E.a,null,r.a.createElement(je,null,r.a.createElement(Oe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[411,208,209]]]);
//# sourceMappingURL=main.77b59eaa.chunk.js.map
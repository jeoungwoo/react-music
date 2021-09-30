(this.webpackJsonpreact_music=this.webpackJsonpreact_music||[]).push([[0],{71:function(t,n,e){"use strict";e.r(n);var c=e(3),i=e(37),r=e.n(i),o=e(25),a=e(28),s=e(12),u=e(10),l=e(16),d=e(0),b=e.n(d),m=e(4),j=e(17),p=e(30),f=e(14),x=e(26),O=e(50);e(67);O.a.initializeApp({apiKey:"AIzaSyCjN0NTOTzHFIc29S_h-gaIwo-TzM0UgJs",authDomain:"sparta-react-a8c23.firebaseapp.com",projectId:"sparta-react-a8c23",storageBucket:"sparta-react-a8c23.appspot.com",messagingSenderId:"1089668661209",appId:"1:1089668661209:web:1e0adaf696571b40bca3c8",measurementId:"G-5LEHQSWJ4C"});var h=O.a.firestore().collection("musics"),g={music_list:[],lastValue:0},v=function(t){return function(n){var e,c=[],i=parseInt(t);h.orderBy("date","desc").startAfter(i).limit(10).get().then((function(t){t.forEach((function(n){t.exists&&(c=[].concat(Object(x.a)(c),[Object(f.a)({id:n.id},n.data())]),e=n.data().data)}))})).then((function(t){return n(function(t,n){return{type:"musics/LOAD_MORE",musics:t,lastValue:n}}(c,e))}))}};var y,w,z,E,S,C,_,k,D,I,V,F,T,A,L,R,M,B,J,G,N,H,P,Y,K,Q,U,W,q,X,Z,$,tt,nt,et=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"musics/LOAD":return Object(f.a)(Object(f.a)({},t),{},{music_list:n.musics,lastValue:n.lastValue});case"musics/LOAD_MORE":return Object(f.a)(Object(f.a)({},t),{},{music_list:[].concat(Object(x.a)(t.music_list),Object(x.a)(n.musics)),lastValue:n.lastValue});case"music/ADD":var e=[].concat(Object(x.a)(t.music_list),[n.music]);return Object(f.a)(Object(f.a)({},t),{},{word_list:e});case"music/COMPLETE":var c=t.music_list.map((function(t){return t.id===n.id?Object(f.a)(Object(f.a)({},t),{},{completed:!t.completed}):t}));return Object(f.a)(Object(f.a)({},t),{},{music_list:c});case"music/MODIFY":var i=t.music_list.map((function(t){return t.id===n.music.id?Object(f.a)(Object(f.a)({},t),n.music):t}));return Object(f.a)(Object(f.a)({},t),{},{music_list:i});case"music/DELETE":var r=t.music_list.filter((function(t){return t.id!==n.id}));return Object(f.a)(Object(f.a)({},t),{},{music_list:r});default:return t}},ct=e(6),it=Object(c.forwardRef)((function(t,n){var e=t.music_obj,c=e.music,i=e.singer,r=e.url,s=e.comment,u=e.completed,l=e.id,d=Object(o.b)(),b=function(t){d(function(t){return function(n){h.doc(t.id).update({completed:!t.completed}),n({type:"music/COMPLETE",id:t.id})}}(t))},m=function(t){prompt("\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694")===t?d(function(t){return function(n){h.doc(t).delete(),n(function(t){return{type:"music/DELETE",id:t}}(t))}}(t)):alert("\ube44\ubc00\ubc88\ud638\uac00 \ud2c0\ub824 \uc0ad\uc81c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")};return Object(ct.jsxs)(rt,{completed:"".concat(u),ref:n,children:[Object(ct.jsxs)(bt,{children:[Object(ct.jsx)("button",{onClick:function(){return b(e)},children:u?Object(ct.jsx)(pt,{}):Object(ct.jsx)(jt,{})}),Object(ct.jsx)(a.b,{to:{pathname:"/music/".concat(l,"/edit"),state:e},children:Object(ct.jsx)(ft,{completed:"".concat(u)})}),Object(ct.jsx)("button",{onClick:function(){return m(l)},children:Object(ct.jsx)(xt,{completed:"".concat(u)})})]}),Object(ct.jsxs)(at,{completed:"".concat(u),children:[Object(ct.jsx)(st,{children:c}),Object(ct.jsx)(ut,{children:i})]}),Object(ct.jsx)(lt,{completed:"".concat(u),children:r}),Object(ct.jsx)(dt,{completed:"".concat(u),children:s})]})})),rt=u.d.article(y||(y=Object(s.a)(["\n    ","\n"])),(function(t){var n=t.completed,e=t.theme,c=e.colors,i=e.device;return Object(u.c)(w||(w=Object(s.a)(["\n            position: relative;\n            width: 100%;\n            padding: 20px;\n            border: 2px solid ",";\n            border-radius: 10px;\n            background-color : ",";\n            transition: box-shadow 300ms ease-in-out;\n\n            "," {\n                width: calc((100% - 20px) / 2);\n            }\n\n            "," {\n                width: calc((100% - (20px * 2)) / 3);\n            }\n\n            &:hover {\n                box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;\n            }\n        "])),c.mainColor,"false"===n?"rgba(255, 255, 255, 0.4)":c.mainColor,i.tablet,i.desktop)})),ot=Object(u.c)(z||(z=Object(s.a)(["\n    color: ","; \n"])),(function(t){var n=t.completed,e=t.theme;return"false"===n?e.colors.black:e.colors.white})),at=u.d.div(E||(E=Object(s.a)(["\n    // \uc704\uc5d0\uc11c \uc815\uc758\ud55c CardFontColor \uc7ac\uc0ac\uc6a9\n    ","\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 10px;\n    margin-bottom: 10px;\n"])),ot),st=u.d.h4(S||(S=Object(s.a)(["\n    margin-right: 5px;\n    font-size: ",";\n"])),(function(t){return t.theme.fontSize.sm})),ut=u.d.span(C||(C=Object(s.a)(["\n    font-size: ",";\n"])),(function(t){return t.theme.fontSize.sm})),lt=u.d.p(_||(_=Object(s.a)(["\n  ",";\n  margin-bottom: 10px;\n  font-size: ",";\n"])),ot,(function(t){return t.theme.fontSizes.md})),dt=u.d.p(k||(k=Object(s.a)(["\n  ",";\n  margin-bottom: 10px;\n  font-size: ",";\n"])),ot,(function(t){return t.theme.fontSizes.md})),bt=u.d.div(D||(D=Object(s.a)(["\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  display: flex;\n  align-items: center;\n\n  & > button {\n    padding: 3px;\n  }\n"]))),mt=Object(u.c)(I||(I=Object(s.a)(["\n  color: ",";\n  font-size: ",";\n"])),(function(t){return"false"===t.completed?t.theme.colors.mainColor:t.theme.colors.white}),(function(t){return t.theme.fontSizes.xl})),jt=Object(u.d)(p.d)(V||(V=Object(s.a)(["\n  color: ",";\n  font-size: ",";\n"])),(function(t){return t.theme.colors.mainColor}),(function(t){return t.theme.fontSizes.xl})),pt=Object(u.d)(p.c)(F||(F=Object(s.a)(["\n  color: ",";\n  font-size: ",";\n"])),(function(t){return t.theme.colors.white}),(function(t){return t.theme.fontSizes.xl})),ft=Object(u.d)(p.a)(T||(T=Object(s.a)(["\n  ",";\n"])),mt),xt=Object(u.d)(p.e)(A||(A=Object(s.a)(["\n  ",";\n"])),mt),Ot=it,ht=Object(u.c)(L||(L=Object(s.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: ",";\n    background-color: ",";\n"])),(function(t){return t.theme.colors.white}),(function(t){return t.theme.colors.mainColor})),gt=Object(u.c)(R||(R=Object(s.a)(["\n    ",";\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n"])),ht),vt=Object(u.c)(M||(M=Object(s.a)(["\n    ",";\n    width: 200px;\n    height: 40px;\n    font-size: ",";\n"])),ht,(function(t){return t.theme.fontSizes.md})),yt=u.d.div(B||(B=Object(s.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  gap: 20px;\n  width: 100%;\n  padding: 50px 0;\n"]))),wt=Object(u.d)(p.b)(J||(J=Object(s.a)(["\n  font-size: 28px;\n"]))),zt=Object(u.d)(a.b)(G||(G=Object(s.a)(["\n  ",";\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,\n    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n\n  "," {\n    bottom: 20px;\n    right: 20px;\n  }\n\n  "," {\n    transition: transform 300ms ease-in-out;\n  }\n\n  &:hover {\n    "," {\n      transform: rotate(90deg);\n    }\n  }\n"])),gt,(function(t){return t.theme.device.tablet}),wt,wt),Et=function(){var t=Object(o.c)((function(t){return t.musics.music_list})),n=Object(o.c)((function(t){return t.musics.lastValue})),e=Object(o.b)(),i=Object(c.useState)(null),r=Object(j.a)(i,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){var t=new IntersectionObserver(function(){var t=Object(m.a)(b.a.mark((function t(c,i){var r,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=Object(j.a)(c,1),(o=r[0]).isIntersecting){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,e(v(n));case 7:i.unobserve(o.target);case 8:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),{threshold:"1"});return a&&t.observe(a),function(){return t&&t.disconnect()}}),[e,n,a]),Object(ct.jsxs)("div",{children:[Object(ct.jsx)(yt,{children:t.map((function(n,e){var c=e===t.length-1;return Object(ct.jsx)(Ot,{music_obj:n,ref:c?s:null},n.id)}))}),Object(ct.jsx)(zt,{to:"/music/add",children:Object(ct.jsx)(wt,{})})]})},St=Object(c.forwardRef)((function(t,n){var e=t.title,i=t.idText,r=t.currentValue,o=Object(c.useState)(r||""),a=Object(j.a)(o,2),s=a[0],u=a[1];return Object(ct.jsxs)(Ct,{children:[Object(ct.jsx)(_t,{htmlFor:i,children:e}),Object(ct.jsx)(kt,{type:"text",id:i,ref:n,onChange:function(t){return u(t.target.value)},value:s})]})})),Ct=u.d.div(N||(N=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n"]))),_t=u.d.label(H||(H=Object(s.a)(["\n  font-size: ",";\n  font-weight: 600;\n  margin-bottom: 5px;\n"])),(function(t){return t.theme.fontSizes.sm})),kt=u.d.input(P||(P=Object(s.a)(["\n  height: 28px;\n  padding: 5px 0;\n  border-bottom: 2px solid ",";\n  font-size: ",";\n  font-weight: 500;\n  transition: border-color 300ms ease-in-out;\n\n  &:focus {\n    border-color: ",";\n  }\n"])),(function(t){return t.theme.colors.mint}),(function(t){return t.theme.fontSizes.md}),(function(t){return t.theme.colors.mainColor})),Dt=St,It=u.d.div(Y||(Y=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 400px;\n  margin: 50px auto;\n\n  "," {\n    margin: 80px auto;\n  }\n"])),(function(t){return t.theme.device.tablet})),Vt=u.d.h2(K||(K=Object(s.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  color: ",";\n"])),(function(t){return t.theme.colors.mainColor})),Ft=u.d.form(Q||(Q=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Tt=u.d.button(U||(U=Object(s.a)(["\n  ",";\n  align-self: center;\n"])),vt),At=function(t){var n=t.location.state,e=Object(o.b)(),i=Object(c.useRef)(null),r=Object(c.useRef)(null),a=Object(c.useRef)(null),s=Object(c.useRef)(null),u=function(){var t=i.current.value.trim(),n=r.current.value.trim(),e=a.current.value.trim(),c=s.current.value.trim();return t&&n&&e&&c?{music:t,singer:n,url:e,comment:c}:(alert("\uc544\uc9c1 \uc785\ub825\ud558\uc9c0 \uc54a\uc740 \ud56d\ubaa9\uc774 \uc788\uc2b5\ub2c8\ub2e4!"),!1)};return Object(ct.jsxs)(It,{children:[Object(ct.jsx)(Vt,{children:n?"music \uc218\uc815":"music \ucd94\uac00\ud558\uae30"}),Object(ct.jsxs)(Ft,{onsubmit:n?function(c){c.preventDefault();var i,r,o=u();o&&(e((i=o,r=n.id,function(t){h.doc(r).update(i),t(function(t){return{type:"music/MODIFY",music:t}}(Object(f.a)(Object(f.a)({},i),{},{id:r})))})),t.history.push("/"))}:function(c){c.preventDefault();var i=u();if(i){var r,o=Object(f.a)(Object(f.a)({},i),{},{date:Date.now(),complated:!1});e((r=o,n.id,function(t){var n;h.add(r).then((function(t){n=Object(f.a)(Object(f.a)({},r),{},{id:t.id})})).then((function(e){return t(function(t){return{type:"music/ADD",music:t}}(n))}))})),t.history.push("/")}},children:[Object(ct.jsx)(Dt,{title:"music",idText:"input-music",ref:i,currentValue:n&&n.music}),Object(ct.jsx)(Dt,{title:"singer",idText:"input-singer",ref:r,currentValue:n&&n.singer}),Object(ct.jsx)(Dt,{title:"url",idText:"input-url",ref:a,currentValue:n&&n.url}),Object(ct.jsx)(Dt,{title:"comment",idText:"input-comment",ref:s,currentValue:n&&n.comment}),Object(ct.jsx)(Tt,{type:"submit",children:n?"\uc218\uc815":"\uc800\uc7a5\ud558\uae30"})]})]})},Lt=e.p+"static/media/title.be77da3c.svg",Rt=u.d.div(W||(W=Object(s.a)(["\n    ","\n"])),(function(t){var n=t.theme,e=n.colors,c=n.device;return Object(u.c)(q||(q=Object(s.a)(["\n            position: fixed;\n            top: 0;\n            left: 0;\n            z-index: 10;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            width: 100%;\n            height: 50px;\n            background-color: ",";\n            border-bottom: 2px solid ",";\n\n            "," {\n                height: 60px;\n            }\n        "])),e.white,e.yellowGreen,c.tablet)})),Mt=u.d.h1(X||(X=Object(s.a)(["\n","\n"])),(function(t){var n=t.theme,e=n.colors,c=n.device,i=n.fontSizes;return Object(u.c)(Z||(Z=Object(s.a)(["\n    color: ",";\n    font-size: ",";\n    font-weight: 600;\n\n    "," {\n        font-size: ",";\n    }\n    "])),e.mainColor,i.lg,c.tablet,i.xl)})),Bt=u.d.img($||($=Object(s.a)(["\nmargin-top: 2px;\nheight: 28px;\n\n"," {\n    height: 30px;\n}\n"])),(function(t){return t.theme.device.tablet})),Jt=function(t){return Object(ct.jsx)(Rt,{children:Object(ct.jsx)(a.b,{to:"/",children:Object(ct.jsx)(Mt,{children:Object(ct.jsx)(Bt,{src:Lt,alt:"\ub098\ub9cc\uc758 \ud50c\ub808\uc774\ub9ac\uc2a4\ud2b8"})})})})},Gt=e(57),Nt=e.p+"static/media/dot-grid.c18d167e.png",Ht=Object(u.b)(tt||(tt=Object(s.a)(["\n    //reset.css \ub97c \ub9ac\uc561\ud2b8\uc5d0\uc11c \uc27d\uac8c \uc0ac\uc6a9\n    ","\n\n    //font \uac00\uc838\uc624\uae30\n    @font-face {\n        font-family: 'Stylish', sans-serif;\n        src: url('https://fonts.googleapis.com/css2?family=Stylish&display=swap');\n        font-weight: normal;\n        font-style: normal;\n    }\n\n    * {\n        box-sizing: border-box;\n    }\n\n    body {\n        min-height: 100vh - 60px;\n        background-image: url(",");\n        font-family: 'Stylish', sans-serif;\n    }\n\n    a {\n        text-decoration: none;\n        color: black;\n    }\n\n    button {\n        cursor: pointer;\n    }\n\n    input,\n    textarea,\n    button {\n        border: none;\n        background-clolr: transparent;\n        font-family: 'Stylish', sans-serif;\n        outline: none;\n    }\n"])),Gt.a,Nt),Pt={device:{tablet:"@media screen and (min-width: 768px)",desktop:"@media screen and (min-width: 1024px)"},colors:{mainColor:"#87CEEB",yellowGreen:"#87CEFA",mint:"#DBE8D8",blue:"#0984e3",white:"#FFFFFF",black:"000000"},fontSizes:{xs:"12px",sm:"14px",md:"16px",lg:"20px",xl:"24px"}};var Yt=u.d.div(nt||(nt=Object(s.a)(["\n  margin-top: 40px;\n  padding: 0 30px;\n\n  // theme.js\uc5d0\uc11c \uc9c0\uc815\ud55c \ubb38\uc790\uc5f4\uc744 \uc774\uc6a9 - @media screen and (min-width: 768px) {} \uc640 \uac19\uc740 \ub73b\uc774 \ub429\ub2c8\ub2e4.\n  // \uc9e7\uac8c \uc4f0\uace0 \uc720\uc9c0\ubcf4\uc218\uc131\uc744 \ub192\uc774\uae30 \uc704\ud574 theme\uc73c\ub85c \ub4f1\ub85d\ud588\uc2b5\ub2c8\ub2e4.\n  "," {\n    margin-top: 60px;\n    padding: 0 50px;\n  }\n\n  "," {\n    max-width: 1400px;\n    margin: 60px auto 0 auto;\n  }\n"])),(function(t){return t.theme.device.tablet}),(function(t){return t.theme.device.desktop})),Kt=function(){var t=Object(o.b)();return Object(c.useEffect)((function(){t((function(t){var n,e=[];h.orderBy("date","desc").limit(10).get().then((function(t){t.forEach((function(t){e=[].concat(Object(x.a)(e),[Object(f.a)({id:t.id},t.data())]),n=t.data().date}))})).then((function(c){return t(function(t,n){return{type:"musics/LOAD",musics:t,lastValue:n}}(e,n))}))}))}),[t]),Object(ct.jsx)(u.a,{theme:Pt,children:Object(ct.jsxs)("div",{className:"App",children:[Object(ct.jsx)(Ht,{}),Object(ct.jsx)(Jt,{}),Object(ct.jsx)(Yt,{children:Object(ct.jsxs)(l.c,{children:[Object(ct.jsx)(l.a,{path:"/",exact:!0,component:Et}),Object(ct.jsx)(l.a,{path:"/music/add",component:At}),Object(ct.jsx)(l.a,{path:"/music/:id/edit",component:At})]})})]})})},Qt=e(43),Ut=e(19),Wt=e(58),qt=(Object(Ut.a)(),[Wt.a]),Xt=Qt.a.apply(void 0,qt),Zt=Object(Qt.b)({musics:et}),$t=Object(Qt.c)(Zt,Xt);r.a.render(Object(ct.jsx)(o.a,{store:$t,children:Object(ct.jsx)(a.a,{children:Object(ct.jsx)(Kt,{})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.9dfeb1ee.chunk.js.map
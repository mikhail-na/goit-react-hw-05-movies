"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[128],{128:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,a,i,o,c,s,u,l,f,p,d=t(439),x=t(791),h=t(689),g=t(87),v=t(933),m=t(168),Z=t(686),w=Z.Z.div(r||(r=(0,m.Z)(["\ndisplay: flex;\nmargin: 24px;\ngap: 24px;\n\n color:#ffffff;\n"]))),j=Z.Z.div(a||(a=(0,m.Z)([""]))),y=Z.Z.h2(i||(i=(0,m.Z)(["\nfont-weight: 700;\nfont-size: 30px;\ncolor: yellow;\n"]))),k=Z.Z.ul(o||(o=(0,m.Z)(["\ndisplay: inline-flex;\ngap: 12px;\nlist-style: none;\nmargin: 0;\npadding: 0;\nlist-style-type: none;\ncolor:#ffffff;\n"]))),b=Z.Z.li(c||(c=(0,m.Z)([""]))),_=Z.Z.div(s||(s=(0,m.Z)([""]))),U=Z.Z.ul(u||(u=(0,m.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 12px;\nlist-style: none;\nmargin: 0;\n padding: 0;\nlist-style-type: none;\n\n"]))),S=Z.Z.li(l||(l=(0,m.Z)([""]))),z=(0,Z.Z)(g.rU)(f||(f=(0,m.Z)(["\ntext-decoration: none;\nfont-weight: 600;\nfont-size: 18px;\ncolor: #ffffff;\n\n&:hover {\n  color: yellow;\n}\n"]))),C=Z.Z.button(p||(p=(0,m.Z)(["\n// display: block;\nmargin-top:20px;\nmargin-left:20px;\npadding: 8px 16px;\nfont: inherit;\ncursor: pointer;\nborder-radius: 8px;\nborder: 3px solid #191d1e;\ncolor: #191d1e;\nfont-weight: 600;\nfont-size: 20px;\nbackground-color: rgb(26, 26, 43);\ncolor:#ffffff;\n  \n"]))),R=t(184),T=function(){var n,e,t=(0,x.useState)(null),r=(0,d.Z)(t,2),a=r[0],i=r[1],o=(0,h.UO)().movieId,c=(0,h.TH)(),s=(0,x.useRef)(null!==(n=null===(e=c.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");if(console.log(c),(0,x.useEffect)((function(){(0,v.TP)(o).then((function(n){i(n)})).catch((function(n){console.log(n)}))}),[o]),a){var u=a||{},l=u.original_title,f=u.release_date,p=u.popularity,m=u.overview,Z=u.genres,T=u.poster_path;return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(g.rU,{to:s.current,children:(0,R.jsx)(C,{type:"button",children:"Go back"})}),a&&(0,R.jsxs)(w,{children:[(0,R.jsx)("img",{width:"300px",src:T?"https://image.tmdb.org/t/p/w500".concat(T):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:l}),(0,R.jsxs)(j,{children:[(0,R.jsxs)(y,{children:[l," (",f.slice(0,4),")"]}),(0,R.jsxs)("p",{children:["User score: ",p]}),(0,R.jsx)(y,{children:"Overview"}),(0,R.jsx)("p",{children:m}),(0,R.jsx)(y,{children:"Genres"}),(0,R.jsx)(k,{children:Z.map((function(n){var e=n.id,t=n.name;return(0,R.jsx)(b,{children:t},e)}))})]})]}),(0,R.jsx)("hr",{}),(0,R.jsxs)(_,{children:[(0,R.jsx)(y,{children:"Additional information"}),(0,R.jsxs)(U,{children:[(0,R.jsx)(S,{children:(0,R.jsx)(z,{to:"cast",children:"Cast"})}),(0,R.jsx)(S,{children:(0,R.jsx)(z,{to:"reviews",children:"Reviews"})})]}),(0,R.jsx)("hr",{}),(0,R.jsx)(x.Suspense,{fallback:(0,R.jsx)("div",{style:{display:"flex",justifyContent:"center",padding:"100px",fontSize:"30px",fontWeight:700,color:"#fff"},children:"Loading..."}),children:(0,R.jsx)(h.j3,{})})]})]})}}},933:function(n,e,t){t.d(e,{Df:function(){return s},M1:function(){return f},TP:function(){return l},tx:function(){return p},v_:function(){return u}});var r=t(861),a=t(687),i=t.n(a),o=t(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="decf0d9b807b1f4d767e254a6a4af171",s=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/week?api_key=".concat(c));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(c,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US'"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=128.d13da0ca.chunk.js.map
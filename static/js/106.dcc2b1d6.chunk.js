"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[106],{17:function(n,e,t){t.d(e,{Z:function(){return d}});var r,a,u=t(689),c=t(87),o=t(168),i=t(686),s=i.Z.ul(r||(r=(0,o.Z)(["\n  list-style: none;\n  padding: 0px 20px;\n \n"]))),p=i.Z.li(a||(a=(0,o.Z)(["\n  font-weight: 700;\n  font-size: 18px;\n\n  width:400px;\n\n  background-color:  rgb(62, 62, 239);\n  border-radius: 14px;\n\n  :not(:last-child) {\n    margin-bottom: 6px;\n  }\n\n  a:hover,\n  a:focus {\n  border-radius: 14px;\n\n    background-color: #ffc700;\n   \n  }\n\n  a {\n    display: block;\n  color:#ffffff;\n\n    text-decoration: none;\n\n    padding: 10px;\n  }\n"]))),f=t(184),d=function(n){var e=n.movies,t=(0,u.TH)();return(0,f.jsx)(s,{children:e.map((function(n){var e=n.id,r=n.original_title;return(0,f.jsx)(p,{children:(0,f.jsx)(c.rU,{to:"/movies/".concat(e),state:{from:t},children:r})},e)}))})}},106:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r,a,u,c=t(439),o=t(791),i=t(87),s=t(933),p=t(168),f=t(686),d=f.Z.form(r||(r=(0,p.Z)([""]))),l=f.Z.input(a||(a=(0,p.Z)(["\nmargin:20px;\npadding: 10px;\nwidth: 360px;\nborder: 2px solid yellow;\nborder-radius: 14px;\n"]))),v=f.Z.button(u||(u=(0,p.Z)(["\noutline:none;\nborder:none;\nborder-radius: 8px;\npadding: 10px 20px;\n"]))),x=t(184),h=function(n){var e=n.setSearchQuery,t=(0,o.useState)(""),r=(0,c.Z)(t,2),a=r[0],u=r[1];return(0,x.jsxs)(d,{onSubmit:function(n){n.preventDefault(),e({query:a}),u("")},children:[(0,x.jsx)(l,{type:"text",placeholder:"Please enter movie name..",autoFocus:!0,value:a,onChange:function(n){var e=n.target.value;u(e)}}),(0,x.jsx)(v,{type:"submit",children:"Search"})]})},g=t(17),m=function(){var n,e=(0,i.lr)(),t=(0,c.Z)(e,2),r=t[0],a=t[1],u=(0,o.useState)([]),p=(0,c.Z)(u,2),f=p[0],d=p[1],l=null!==(n=r.get("query"))&&void 0!==n?n:"";return(0,o.useEffect)((function(){""!==l&&((0,s.v_)(l).then((function(n){d(n)})).catch((function(n){return console.error(n)})),(0,s.v_)())}),[l,r]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h,{setSearchQuery:a}),(0,x.jsx)(g.Z,{movies:f})]})}},933:function(n,e,t){t.d(e,{Df:function(){return i},M1:function(){return f},TP:function(){return p},tx:function(){return d},v_:function(){return s}});var r=t(861),a=t(687),u=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="decf0d9b807b1f4d767e254a6a4af171",i=function(){var n=(0,r.Z)(u().mark((function n(){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/week?api_key=".concat(o));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(o,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US'"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=106.dcc2b1d6.chunk.js.map
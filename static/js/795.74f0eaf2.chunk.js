"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[795],{17:function(n,t,e){e.d(t,{Z:function(){return d}});var r,a,u=e(689),c=e(87),o=e(168),i=e(686),s=i.Z.ul(r||(r=(0,o.Z)(["\n  list-style: none;\n  padding: 0px 20px;\n \n"]))),f=i.Z.li(a||(a=(0,o.Z)(["\n  font-weight: 700;\n  font-size: 18px;\n\n  width:400px;\n\n  background-color:  rgb(62, 62, 239);\n  border-radius: 14px;\n\n  :not(:last-child) {\n    margin-bottom: 6px;\n  }\n\n  a:hover,\n  a:focus {\n  border-radius: 14px;\n\n    background-color: #ffc700;\n   \n  }\n\n  a {\n    display: block;\n  color:#ffffff;\n\n    text-decoration: none;\n\n    padding: 10px;\n  }\n"]))),p=e(184),d=function(n){var t=n.movies,e=(0,u.TH)();return(0,p.jsx)(s,{children:t.map((function(n){var t=n.id,r=n.original_title;return(0,p.jsx)(f,{children:(0,p.jsx)(c.rU,{to:"/movies/".concat(t),state:{from:e},children:r})},t)}))})}},795:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r,a=e(439),u=e(791),c=e(933),o=e(168),i=e(686).Z.h2(r||(r=(0,o.Z)(["\ndisplay:block;\npadding-left: 20px;\n\ncolor:#ffffff;\n"]))),s=e(17),f=e(184),p=function(){var n=(0,u.useState)([]),t=(0,a.Z)(n,2),e=t[0],r=t[1];return(0,u.useEffect)((function(){(0,c.Df)("").then(r)}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{children:"Trending today"}),(0,f.jsx)(s.Z,{movies:e})]})}},933:function(n,t,e){e.d(t,{Df:function(){return i},M1:function(){return p},TP:function(){return f},tx:function(){return d},v_:function(){return s}});var r=e(861),a=e(687),u=e.n(a),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="decf0d9b807b1f4d767e254a6a4af171",i=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/week?api_key=".concat(o));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(o,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US'"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=795.74f0eaf2.chunk.js.map
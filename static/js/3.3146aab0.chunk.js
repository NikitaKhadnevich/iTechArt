(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[3],{527:function(t,e,n){"use strict";var i=n(23),a=n(2),c=n(0),o=(n(10),n(6)),r=n(41),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(t);return"".concat(n/e).concat(String(t).replace(String(n),"")||"px")}var x=c.forwardRef((function(t,e){var n=t.alignContent,r=void 0===n?"stretch":n,s=t.alignItems,l=void 0===s?"stretch":s,d=t.classes,x=t.className,g=t.component,f=void 0===g?"div":g,u=t.container,p=void 0!==u&&u,j=t.direction,h=void 0===j?"row":j,m=t.item,b=void 0!==m&&m,v=t.justify,O=t.justifyContent,w=void 0===O?"flex-start":O,y=t.lg,C=void 0!==y&&y,S=t.md,W=void 0!==S&&S,k=t.sm,z=void 0!==k&&k,I=t.spacing,M=void 0===I?0:I,N=t.wrap,E=void 0===N?"wrap":N,B=t.xl,D=void 0!==B&&B,G=t.xs,T=void 0!==G&&G,F=t.zeroMinWidth,H=void 0!==F&&F,J=Object(i.a)(t,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),R=Object(o.a)(d.root,x,p&&[d.container,0!==M&&d["spacing-xs-".concat(String(M))]],b&&d.item,H&&d.zeroMinWidth,"row"!==h&&d["direction-xs-".concat(String(h))],"wrap"!==E&&d["wrap-xs-".concat(String(E))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==r&&d["align-content-xs-".concat(String(r))],"flex-start"!==(v||w)&&d["justify-content-xs-".concat(String(v||w))],!1!==T&&d["grid-xs-".concat(String(T))],!1!==z&&d["grid-sm-".concat(String(z))],!1!==W&&d["grid-md-".concat(String(W))],!1!==C&&d["grid-lg-".concat(String(C))],!1!==D&&d["grid-xl-".concat(String(D))]);return c.createElement(f,Object(a.a)({className:R,ref:e},J))})),g=Object(r.a)((function(t){return Object(a.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(t,e){var n={};return s.forEach((function(i){var a=t.spacing(i);0!==a&&(n["spacing-".concat(e,"-").concat(i)]={margin:"-".concat(d(a,2)),width:"calc(100% + ".concat(d(a),")"),"& > $item":{padding:d(a,2)}})})),n}(t,"xs"),t.breakpoints.keys.reduce((function(e,n){return function(t,e,n){var i={};l.forEach((function(t){var e="grid-".concat(n,"-").concat(t);if(!0!==t)if("auto"!==t){var a="".concat(Math.round(t/12*1e8)/1e6,"%");i[e]={flexBasis:a,flexGrow:0,maxWidth:a}}else i[e]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else i[e]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(a.a)(t,i):t[e.breakpoints.up(n)]=i}(e,t,n),e}),{}))}),{name:"MuiGrid"})(x);e.a=g},530:function(t,e,n){"use strict";n.r(e);var i=n(12),a=n(11),c=n(0),o=n(18),r=n(527),s=n(424),l=n(518),d=n(501),x=n(249),g=n(496),f=n(482),u=n(200),p=n(8),j=Object(g.a)(r.a,p.a)({marginTop:"15px","& h5":{textAlign:"center"}}),h=Object(g.a)(f.a,p.a)({minHeight:"100vh",background:p.a.palette.primary.main}),m=Object(g.a)(u.a,p.a)({display:"flex",flexDirection:"column",height:"100%",width:"100%",margin:"0",alignSelf:"center",gridTemplateColumns:"auto auto auto",justifyContent:"start",borderRadius:"7px",border:"1px solid ".concat(p.a.palette.primary.dark)}),b=Object(g.a)(s.a,p.a)({display:"flex",justifyContent:"center",width:"fitContent",margin:"0",color:p.a.palette.secondary.light,msJustifySelf:"start"}),v=Object(g.a)(s.a,p.a)({maxHeight:"fitContent",color:p.a.palette.secondary.dark,fontWeight:"600",width:"fitContent",textAlign:"justify"}),O=(Object(g.a)(s.a,p.a)({color:p.a.palette.secondary.light}),Object(g.a)(f.a,p.a)({paddingTop:"15px",position:"relative",minHeight:"100vh"})),w=n(1);e.default=function(){var t=Object(o.d)(x.i),e=Object(a.a)(t,1)[0],n=Object(c.useState)(),g=Object(a.a)(n,2),f=g[0],u=g[1],p=Object(c.useState)([]),y=Object(a.a)(p,2),C=y[0],S=y[1],W=x.a.noNotes,k=x.c.lostNote,z=x.c.fetchLoading,I=Object(x.h)(x.b,"".concat(x.f,"/").concat(e.id)),M=I.data,N=I.isLoading,E=I.isFetching;Object(c.useEffect)((function(){M&&u(M.sharedNotes)}),[M]);var B=Object(x.g)(x.d,f);return Object(c.useEffect)((function(){var t=[];null===B||void 0===B||B.map((function(e){return t.push(e.data)})),t.map((function(t,e){t&&C.length===e&&S((function(e){return[].concat(Object(i.a)(e),[t])}))}))}),[B]),Object(w.jsx)(w.Fragment,{children:N||E?z:Object(w.jsx)(h,{children:Object(w.jsx)(j,{container:!0,spacing:2,children:C.length?C.map((function(t){return Object(w.jsx)(r.a,{item:!0,xs:12,children:Object(w.jsx)(l.a,{sx:{width:"100%",padding:"0px"},children:Object(w.jsxs)(m,{children:[Object(w.jsx)(d.a,{children:Object(w.jsx)(b,{variant:"body2",id:null===t||void 0===t?void 0:t.title,children:null!==t&&void 0!==t&&t.title?t.title:k})}),Object(w.jsx)(d.a,{sx:{paddingTop:"0",paddingBottom:"0"},children:Object(w.jsx)(v,{variant:"body2",children:null===t||void 0===t?void 0:t.description})})]},"".concat(t.id,"_sharebox"))},"".concat(t.id,"_sharelist"))},"".concat(t.id,"_gridWrap"))})):Object(w.jsx)(r.a,{item:!0,xs:12,children:Object(w.jsx)(O,{children:Object(w.jsx)(s.a,{component:"h5",variant:"h5",align:"center",children:W})})})})},"mainSharedReceiver")})}}}]);
//# sourceMappingURL=3.3146aab0.chunk.js.map
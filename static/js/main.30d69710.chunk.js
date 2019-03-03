(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(22)},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(10),r=a.n(c),o=(a(19),a(2)),i=a(3),s=a(5),m=a(4),u=a(6),d=function(e){return l.a.createElement("div",{className:"label_area"},l.a.createElement("div",null,l.a.createElement("div",{className:"title"},"Threshold: ",e.threshold),l.a.createElement("div",{className:"subtitle"},"i.e. accept everyone with credit scores above ",e.threshold)))},p=a(1),h=function(e){var t=e.people,a=e.threshold,n=10,c=10,r=Object(p.a)().domain([600,850]).range([c,580-2*c-n]),o=Object.values(t),i=r(850)-r(600);return l.a.createElement("div",{className:"people_area"},l.a.createElement("div",{style:{width:580}},l.a.createElement("svg",{width:"100%",height:"170px"},o.map(function(e){return function(e,t){var a=e.payback?"black":"red",n=t(e.score);return l.a.createElement("g",{fill:a},l.a.createElement("circle",{cx:n,cy:80,r:10}),l.a.createElement("line",{x1:n,y1:80,x2:n,y2:120,stroke:a,"stroke-width":4}),l.a.createElement("line",{x1:n,y1:120,x2:n-10,y2:140,stroke:a,"stroke-width":4}),l.a.createElement("line",{x1:n,y1:120,x2:n+10,y2:140,stroke:a,"stroke-width":4}),l.a.createElement("line",{x1:n-10,y1:100,x2:n+10,y2:100,stroke:a,"stroke-width":4}),l.a.createElement("text",{x:t(e.score),y:50,"text-anchor":"middle"},e.score))}(e,r)}),l.a.createElement("rect",{x:r(a),y:20,width:r(850)-r(a),height:140,fill:"white","fill-opacity":"0.2"}),l.a.createElement("rect",{x:r(600)-c,y:20,width:r(a)-r(600)+c,height:140,fill:"black","fill-opacity":"0.4"}),l.a.createElement("line",{x1:r(a),x2:r(a),y1:20,y2:160,stroke:"black","stroke-width":5,"stroke-dasharray":"4"}))),l.a.createElement("div",{style:{width:580,padding:0,margin:0}},l.a.createElement("input",{type:"range",min:600,max:850,value:a,style:{width:i,margin:c,float:"left"},onChange:e.changeThreshold})),l.a.createElement("div",null))},E=a(8),y=a(7),f=a(11),v=a(12),b=(a(20),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.renderAxis()}},{key:"componentDidUpdate",value:function(){this.renderAxis()}},{key:"renderAxis",value:function(){var e="axis".concat(this.props.orient),t=v[e]().scale(this.props.scale).tickSize(-this.props.tickSize).tickPadding([12]).ticks([4]);Object(y.a)(this.axisElement).call(t)}},{key:"render",value:function(){var e=this;return l.a.createElement("g",{className:"Axis Axis-".concat(this.props.orient),ref:function(t){e.axisElement=t},transform:this.props.translate})}}]),t}(n.Component)),k=function(e){var t=e.scales,a=e.margins,n=e.svgDimensions,c=n.height,r=n.width,o={orient:"Bottom",scale:t.xScale,translate:"translate(0, ".concat(c-a.bottom,")"),tickSize:c-a.top-a.bottom},i={orient:"Left",scale:t.yScale,translate:"translate(".concat(a.left,", 0)"),tickSize:r-a.left-a.right};return l.a.createElement("g",null,l.a.createElement(b,o),l.a.createElement(b,i))},g=function(e){var t=e.reduce(function(e,t){return e+t});return[0].concat(function(e){var t=[];return e.reduce(function(e,a,n){return t[n]=e+a,t[n]},0),t}(e)).map(function(e){return(t-e)/t})},x=function(e,t,a,n){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return e.map(function(e,a){return[e,t[a]]}).map(function(e){var t=Object(E.a)(e,2),r=t[0],o=t[1];return l.a.createElement("circle",{cx:a(r),cy:n(o),r:c.r||4})})},w=function(e){var t,a=Object(E.a)(e.size,2),n=a[0],c=a[1],r=e.index||0,o=(t=e.players,g(t.map(function(e){return!e}))),i=function(e){return g(e)}(e.players),s={top:20,right:20,bottom:30,left:60},m=Object(p.a)().domain([0,1]).range([s.left,n-s.left-s.right]),u=Object(p.a)().domain([0,1]).range([c-s.top-s.bottom,s.top]);return l.a.createElement("div",null,l.a.createElement("div",{className:"title"},"ROC curve"),l.a.createElement("svg",{width:n,height:c},l.a.createElement("rect",{x:s.left,width:n-2*s.left-s.right,y:s.top,height:c-2*s.top-s.bottom,fill:"#9DF","fill-opacity":"0.3"}),l.a.createElement(k,{scales:{xScale:m,yScale:u},margins:s,svgDimensions:{width:n-s.left,height:c-s.top}}),l.a.createElement("g",{className:"line"},function(e,t,a,n){var c=e.map(function(e,a){return[e,t[a]]}),r=Object(f.a)().x(function(e){return a(e[0])}).y(function(e){return n(e[1])})(c);return l.a.createElement("path",{d:r})}(o,i,m,u)),l.a.createElement("g",{className:"scatter"},x(o,i,m,u),x([o[r]],[i[r]],m,u,{r:16})),l.a.createElement("g",null,l.a.createElement("text",{transform:"rotate(-90)",y:"5",dy:"0.71em",x:"-150",textAnchor:"middle"},"TPR")),l.a.createElement("g",null,l.a.createElement("text",{y:c-25,dy:"0.71em",x:n/2,textAnchor:"middle"},"FPR"))))},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return Number(e).toFixed(t)},j=function(e){var t=e.payback,a=e.noPayback;return l.a.createElement("div",{className:"table_area"},l.a.createElement("div",null,l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"Accepted"),l.a.createElement("th",null,"Total"),l.a.createElement("th",null,"Positive rate"),l.a.createElement("th",null)),l.a.createElement("tr",null,l.a.createElement("td",{className:"actual_payment_class"},"Pay back"),l.a.createElement("td",null,t.accepted),l.a.createElement("td",null,t.total),l.a.createElement("td",null,t.accepted,"/",t.total),l.a.createElement("td",null,"(TPR)")),l.a.createElement("tr",null,l.a.createElement("td",{className:"actual_payment_class"},"Default"),l.a.createElement("td",null,a.accepted),l.a.createElement("td",null,a.total),l.a.createElement("td",null,a.accepted,"/",a.total),l.a.createElement("td",null,"(FPR)")),l.a.createElement("tr",null,l.a.createElement("td",{className:"actual_payment_class"},"Total"),l.a.createElement("td",null,t.accepted+a.accepted),l.a.createElement("td",null,t.total+a.total))))),l.a.createElement("div",null,l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Measurement"),l.a.createElement("th",null,"Fraction"),l.a.createElement("th",null,"Value")),l.a.createElement("tr",null,l.a.createElement("td",{className:"actual_payment_class"},"True positive rate"),l.a.createElement("td",null,t.accepted,"/",t.total),l.a.createElement("td",null,O(t.accepted/t.total))),l.a.createElement("tr",null,l.a.createElement("td",{className:"actual_payment_class"},"False positive rate"),l.a.createElement("td",null,a.accepted,"/",a.total),l.a.createElement("td",null,O(a.accepted/a.total))),l.a.createElement("tr",null,l.a.createElement("td",{className:"actual_payment_class"},"Precision"),l.a.createElement("td",null,t.accepted,"/",t.accepted+a.accepted),l.a.createElement("td",null,O(t.accepted/(t.accepted+a.accepted)))),l.a.createElement("tr",null,l.a.createElement("td",{className:"actual_payment_class"},"Recall"),l.a.createElement("td",null,t.accepted,"/",t.total),l.a.createElement("td",null,O(t.accepted/t.total)))))),l.a.createElement("div",{className:"model_choice"},l.a.createElement("h5",null,"Model choice"),l.a.createElement("input",{type:"radio",name:"gender",value:"male"})," Perfect Model",l.a.createElement("br",null),l.a.createElement("input",{type:"radio",name:"gender",value:"female"})," Model 1",l.a.createElement("br",null),l.a.createElement("input",{type:"radio",name:"gender",value:"other"})," Model 2"))},N=(a(21),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={threshold:750,people:{andy:{payback:!1,score:600},heather:{payback:!1,score:620},bobby:{payback:!0,score:650},charles:{payback:!1,score:680},inga:{payback:!0,score:710},del:{payback:!1,score:740},elenor:{payback:!0,score:780},frankie:{payback:!0,score:810},martha:{payback:!0,score:840}}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"getTally",value:function(){var e=this,t={accepted:0,total:0},a={accepted:0,total:0};return Object.values(this.state.people).forEach(function(n){var l=n.payback?t:a;n.score>=e.state.threshold&&(l.accepted+=1),l.total+=1}),{payback:t,noPayback:a,numRejected:t.total-t.accepted+a.total-a.accepted}}},{key:"getPlayerOrder",value:function(){return Object.values(this.state.people).sort(function(e,t){return e.score-t.score}).map(function(e){return e.payback})}},{key:"render",value:function(){var e=this,t=this.getTally(),a=t.payback,n=t.noPayback,c=t.numRejected,r=this.state.threshold;return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"grid-container"},l.a.createElement(h,{threshold:r,changeThreshold:function(t){return e.setState({threshold:t.target.value})},people:this.state.people}),l.a.createElement(d,{threshold:r}),l.a.createElement("div",{className:"plot_area"},l.a.createElement(w,{size:[650,520],players:this.getPlayerOrder(),index:c})),l.a.createElement(j,{payback:a,noPayback:n})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.30d69710.chunk.js.map
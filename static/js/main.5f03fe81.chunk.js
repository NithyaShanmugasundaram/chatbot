(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),o=(n(14),n(1)),l=n(2),s=n(4),u=n(3),b=n(5),h=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"flex items-center arial justify-center pa4 bg-light-blue navy"},r.a.createElement("strong",null,"CHAT BOT!!"))}}]),t}(a.Component),p=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("ul",{style:{listStyleType:"none"}},this.props.chats.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("li",null,r.a.createElement("div",{className:"ba black #000000 bg-light-blue br2 shadow-3 ma2"},e.productId),r.a.createElement("div",{className:"  bg-grey  shadow-2 ma2"},e.price)))})))}}]),t}(a.Component),m=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.onSubmit,className:"bg-light-blue mw8 center pa5 br2-ns ba b--black-10"},r.a.createElement("input",{className:"f6 f5-l  bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns",onChange:this.props.onChange,placeholder:"Type your message and hit ENTER",value:this.props.input,type:"text"}),r.a.createElement("input",{className:"f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns",type:"submit"}))}}]),t}(a.Component),d=[{productId:"What is the price of Samsung?",price:"HKD 400"},{productId:" what about HTC?",price:"HKD 500"}],f=(n(15),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],input:""},n.handleSubmit=function(){console.log(n.state)},n.handleChange=function(e){n.setState({input:e.target.value})},n}return Object(b.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({data:d})}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(h,null),r.a.createElement(p,{chats:this.state.data}),r.a.createElement(m,{chat:this.state.input,onSubmit:this.handleSubmit,onChange:this.handleChange,value:this.state.input}))}}]),t}(a.Component));n(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.5f03fe81.chunk.js.map
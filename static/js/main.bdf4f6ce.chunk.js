(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),l=(n(97),n(6)),s=n(11),i=n(12),u=n(13),m=n(24),p=n(28),d=(n(98),n(99),n(149)),f=n(66),h=n.n(f),v=n(67),E=n.n(v),b=n(83),g=n(152),k=n(82),y=n(146),w=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).theme=Object(k.a)({overrides:{MuiMenu:{list:{backgroundColor:"#efefef",width:"calc(17.8em)",color:"#454545"}}}}),e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y.a,{theme:this.theme},r.a.createElement(b.a,{id:"nav-menu",open:Boolean(this.props.anchorEl),anchorEl:this.props.anchorEl,onClose:this.props.closeMenu,keepMounted:!0},r.a.createElement(g.a,{component:m.b,to:"/projects",onClick:this.props.closeMenu},"Projects"),r.a.createElement(g.a,{component:m.b,to:"/whoami",onClick:this.props.closeMenu},"Who Am I?"))))}}]),n}(r.a.Component),C=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).closeMenu=function(){a.setState({navMenu:r.a.createElement("div",null)})},a.openMenu=function(e){a.setState({navMenu:r.a.createElement(w,{anchorEl:e.currentTarget,closeMenu:a.closeMenu})})},a.state={navMenu:r.a.createElement("div",null),redirectToHome:!1},a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("section",{className:"header__menu"},r.a.createElement(d.a,{onClick:this.openMenu},r.a.createElement(h.a,{fontSize:"large"})),this.state.navMenu),r.a.createElement(m.b,{className:"header__tittle",to:"/"},r.a.createElement("div",{className:"icon-name"},r.a.createElement(E.a,{fontSize:"large"}),r.a.createElement("h1",null,"Harman Kharoud"))))}}]),n}(r.a.Component),j=(n(106),n(68)),O=n.n(j),N=n(69),M=n.n(N),I=n(70),x=n.n(I),_=n(71),T=n.n(_),P=n(72),S=n.n(P),U=n(73),L=n.n(U),A=n(74),D=n.n(A),B=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onMouseEnter=function(e){e.currentTarget.classList.add("shake")},e.onMouseLeave=function(e){e.currentTarget.classList.remove("shake")},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement("section",{className:"home__background"},r.a.createElement("img",{className:"cpu",src:O.a,alt:"background"}),r.a.createElement("span",null,"Discovering"),r.a.createElement("span",null,"new"),r.a.createElement("span",null,"neural"),r.a.createElement("span",null,"pathways"),r.a.createElement("img",{onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,className:"gates xor",src:M.a,alt:"xor"}),r.a.createElement("img",{onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,className:"gates nand",src:x.a,alt:"nand"}),r.a.createElement("img",{onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,className:"gates or",src:T.a,alt:"or"}),r.a.createElement("img",{onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,className:"gates and",src:S.a,alt:"and"}),r.a.createElement("img",{onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,className:"gates nor",src:L.a,alt:"nor"}),r.a.createElement("img",{onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,className:"gates not",src:D.a,alt:"not"})))}}]),n}(r.a.Component),z=(n(107),n(75)),F=n.n(z),R=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("section",{className:"projects"},r.a.createElement("h1",null,"Currently Learning"),r.a.createElement("div",{className:"projects__folders-list"},r.a.createElement(m.b,{className:"central-processing-unit projects-folders",to:"/projects/centralProcessingUnit"},r.a.createElement("img",{className:"folder",src:F.a,alt:"folder"}),r.a.createElement("span",null,"Central Processing Unit"))))}}]),n}(r.a.Component),W=n(79),H=n.n(W),V=n(77),K=n.n(V),Y=n(78),q=n.n(Y),J=n(81),X=n.n(J),G=n(80),Z=n.n(G),$=n(84),Q=n(76),ee=n.n(Q),te=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).interval=void 0,a.renderClock=function(){return Object($.a)(Array(22)).map((function(e,t){return r.a.createElement("div",{className:"seconds",key:t})}))},a.tick=function(e){a.state.clockIncerementTics.x>1140?clearInterval(a.interval):(a.setState({clockIncerementTics:{x:e?a.state.clockIncerementTics.x+52:a.state.clockIncerementTics.x-52,y:0}}),a.props.currentTime(a.state.clockIncerementTics.x))},a.runCPU=function(){a.state.clockIncerementTics.x<=1050&&(a.interval=setInterval((function(){return a.tick(!0)}),100))},a.pauseCPU=function(){clearInterval(a.interval)},a.handleDrag=function(e,t){a.setState({clockIncerementTics:{x:a.state.clockIncerementTics.x+t.deltaX,y:a.state.clockIncerementTics.y+t.deltaY}}),a.props.currentTime(a.state.clockIncerementTics.x),clearInterval(a.interval)},a.regiesterCallBack=function(e,t,n){if(t)a.pauseCPU();else if(e)a.setState({clockIncerementTics:{x:0,y:0}});else if(n){var r=1===n;a.tick(r)}else a.runCPU()},a.renderClockTics=function(){return r.a.createElement("div",{className:"clock__tics"})},a.componentDidMount=function(){a.props.runCPU(a.regiesterCallBack)},a.state={clockIncerementTics:{x:0,y:0}},a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"clock"},r.a.createElement(ee.a,{axis:"x",bounds:{top:0,left:0,right:1144,bottom:0},grid:[52,52],position:this.state.clockIncerementTics,onDrag:this.handleDrag},this.renderClockTics()),r.a.createElement("div",{className:"clock__pulses"},this.renderClock()),r.a.createElement("div",{className:"clock__analog"},r.a.createElement("h3",null,this.state.clockIncerementTics.x/52," seconds")))}}]),n}(r.a.Component),ne=n(153),ae=n(154),re=n(151),ce=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleRadioChange=function(t){var n=t.target.value;e.props.selectedInput(n)},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"select-cpu-processing"},r.a.createElement(ne.a,{className:"select-input","aria-label":"quiz",name:"quiz",onChange:this.handleRadioChange,defaultValue:"numbers"},r.a.createElement(ae.a,{value:"numbers",control:r.a.createElement(re.a,null),label:"Add Numbers!"}),r.a.createElement(ae.a,{value:"texts",control:r.a.createElement(re.a,null),label:"Print text!!"})))}}]),n}(r.a.Component),oe=n(150),le=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).setState({inputProperties:{maxLength:1}}),a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"numbers"},r.a.createElement(oe.a,{variant:"outlined",className:"num-1",placeholder:"#",color:"secondary",error:!1,label:"Integers only"}),r.a.createElement("span",null,"+"),r.a.createElement(oe.a,{variant:"outlined",className:"num-2",placeholder:"#",color:"secondary",error:!1,label:"Integers Only"}))}}]),n}(r.a.Component),se=(n(108),n(29)),ie=n.n(se),ue=n(44),me={city:"",region:"",country_name:"",ip:""},pe=function(){var e=Object(ue.a)(ie.a.mark((function e(){var t,n;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===me.city){e.next=2;break}return e.abrupt("return",me);case 2:return e.next=4,fetch("https://ipapi.co/json");case 4:return t=e.sent,e.next=7,t.json();case 7:return n=e.sent,me.city=n.city,me.region=n.region,me.country_name=n.country_name,me.ip=n.ip,e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){function e(){Object(l.a)(this,e),this.as0="AC8b",this.to0="a954",this.as1="4fc0",this.to1="dd41",this.to7="8cfa",this.to4="e80f",this.as6="fb59",this.as4="ee4e",this.as3="8558",this.to5="c0fc",this.as7="e16ccd",this.to6="15f0",this.as5="920e",this.as2="f9c8",this.to2="60ae",this.to3="70cf"}return Object(s.a)(e,[{key:"timeOpened",value:function(){return new Date}},{key:"timezone",value:function(){return Intl.DateTimeFormat().resolvedOptions().timeZone}},{key:"pageon",value:function(){return window.location.pathname}},{key:"referrer",value:function(){return document.referrer}},{key:"previousSites",value:function(){return window.history.length}},{key:"browserName",value:function(){return navigator.appName}},{key:"browserEngine",value:function(){return navigator.product}},{key:"browserVersion1a",value:function(){return navigator.appVersion}},{key:"browserVersion1b",value:function(){return navigator.userAgent}},{key:"browserLanguage",value:function(){return navigator.language}},{key:"browserOnline",value:function(){return navigator.onLine}},{key:"browserPlatform",value:function(){return navigator.platform}},{key:"javaEnabled",value:function(){return navigator.javaEnabled()}},{key:"dataCookiesEnabled",value:function(){return navigator.cookieEnabled}},{key:"dataCookies",value:function(){return document.cookie}},{key:"dataStorage",value:function(){return localStorage}},{key:"sizeScreenW",value:function(){return window.screen.width}},{key:"sizeScreenH",value:function(){return window.screen.height}},{key:"sizeInW",value:function(){return window.innerWidth}},{key:"sizeInH",value:function(){return window.innerHeight}},{key:"sizeAvailW",value:function(){return window.screen.availWidth}},{key:"sizeAvailH",value:function(){return window.screen.availHeight}},{key:"scrColorDepth",value:function(){return window.screen.colorDepth}},{key:"scrPixelDepth",value:function(){return window.screen.pixelDepth}},{key:"getCurrentLocation",value:function(){return pe()}}]),e}(),fe=function(){var e=Object(ue.a)(ie.a.mark((function e(t){var n,a;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",e.next=3,t.getCurrentLocation();case 3:return a=e.sent,n+="User from ".concat(a.city,", ").concat(a.region," ").concat(a.country_name," ip (").concat(a.ip,"), viewed the following page ").concat(window.location.hash," at ").concat(t.timeOpened()," in ").concat(t.timezone(),"."),n+="User is using ".concat(t.browserPlatform()," device."),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),he=function e(){Object(l.a)(this,e),this.sendText=Object(ue.a)(ie.a.mark((function e(){var t;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new de,fe(t).then((function(e){var n={To:"+13062099269",Body:e,From:"+13605268716"},a=Object.keys(n).map((function(e){var t=n[e];return encodeURIComponent(e)+"="+encodeURIComponent(t)})).join("&"),r=t.as0+t.as1+t.as2+t.as3+t.as4+t.as5+t.as6+t.as7,c=btoa(r+":"+t.to0+t.to1+t.to2+t.to3+t.to4+t.to5+t.to6+t.to7);fetch("https://api.twilio.com/2010-04-01/Accounts/".concat(r,"/Messages.json"),{method:"POST",body:a,headers:{Authorization:"Basic "+c,"Content-Type":"application/x-www-form-urlencoded"}})}));case 2:case"end":return e.stop()}}),e)})))},ve=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).callBack=function(e,t,n){},a.runCPU=function(){a.setState({runningCPU:!0}),a.state.runningCPU||a.callBack(!1)},a.pauseCPU=function(){a.setState({runningCPU:!1}),a.callBack(!1,!0)},a.reSetCPU=function(){a.callBack(!0),a.setState({currentTime:0,runningCPU:!1})},a.goBack=function(){0!==a.state.currentTime?a.callBack(!1,!1,2):a.callBack(!0)},a.goForward=function(){a.callBack(!1,!1,1)},a.updateCurrentTime=function(e){a.setState({currentTime:e})},a.cpuOutput=function(){return 0},a.updateSelectedCPUInput=function(e){a.setState({selectedInputStyle:e})},a.renderPlayButton=function(){return a.state.currentTime>1091?r.a.createElement(K.a,{className:"play-button",onClick:a.reSetCPU}):a.state.runningCPU?r.a.createElement(q.a,{className:"play-button",onClick:a.pauseCPU}):r.a.createElement(H.a,{className:"play-button",onClick:a.runCPU})},a.loadTextInput=function(){return r.a.createElement("div",{className:"characters"},"Coming soon...")},a.renderInputTypes=function(){return"numbers"===a.state.selectedInputStyle?r.a.createElement(le,null):a.loadTextInput()},a.state={currentTime:0,runningCPU:!1,selectedInputStyle:"numbers"},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){(new he).sendText()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"cpu"},r.a.createElement("section",{className:"cpu__heading"},r.a.createElement("h2",null,"How CPU works?")),r.a.createElement("section",{className:"cpu__main-content"},r.a.createElement("span",null,"To demonstrate how CPU works, we need couple of things,",r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",null,r.a.createElement("b",null,"Input (Keyboard, Mic, Camera, Sensors, Gyroscropes, and more)")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",null,"In our case it would from Keyboard")))),r.a.createElement("li",null,r.a.createElement("span",null,r.a.createElement("b",null,"Process (ALU and Control Unit)")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",null,"We will create ALU and Control Unit. ",r.a.createElement("br",null),"We also need some sort of memory device. Store data and fetch data. ",r.a.createElement("br",null),"For that we'll create a RAM as in a simple grid of bunch of addressess.")))),r.a.createElement("li",null,r.a.createElement("span",null,r.a.createElement("b",null,"Output (Monitors, Speakers, and more)")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",null,"In our case, it would be a monitor.")))))),r.a.createElement("h2",null,"Input"),r.a.createElement(ce,{selectedInput:this.updateSelectedCPUInput}),this.renderInputTypes(),r.a.createElement("p",null,"Every CPU has a clock, lets make a clock first."),r.a.createElement("div",{className:"start"},this.renderPlayButton(),r.a.createElement(Z.a,{className:"play-button",onClick:this.goBack}),r.a.createElement(X.a,{className:"play-button",onClick:this.goForward}),r.a.createElement("div",{className:"start__seconds"},r.a.createElement("h2",null,"(",this.state.currentTime/52," seconds)"))),r.a.createElement(te,{runCPU:function(t){return e.callBack=t},currentTime:this.updateCurrentTime}),r.a.createElement("div",{className:"output-from-cpu"},r.a.createElement("span",null,this.cpuOutput()))),r.a.createElement("section",null,"Work in progress..."),r.a.createElement("section",{className:"cpu__sources"},"Sources:\xa0"),r.a.createElement("section",{className:"cpu__sources"},"Inspiration:\xa0 http://www.buthowdoitknow.com/but_how_do_it_know_cpu_model_x.html"))}}]),n}(r.a.Component),Ee=(n(110),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){(new he).sendText()}},{key:"render",value:function(){return r.a.createElement("div",{className:"whoami"},r.a.createElement("h1",{className:"tittle"},"About me!"),r.a.createElement("div",{className:"main-content"},r.a.createElement("span",null,r.a.createElement("p",null,"Hi! My name is Harman Kharoud. I'm a Software developer, living in Vancouver, Bristish Columbia. I went to Vancouver Film School and studied Software Development in 2014-2015. I enjoy learning new stuff everyday. I'm also really passionate about Physics and Astronomy. I have more Physics books than Software Development."),r.a.createElement("p",null,"I've worked on Front-End Web Development for 4 years. Over the 4 year of time period of Software Development, I've also self taught some hardware development. I've built multiple project using \xa0",r.a.createElement("a",{href:"https://www.arduino.cc/",target:"_blank",rel:"noopener noreferrer"},"Arduino"),",\xa0",r.a.createElement("a",{href:"https://randomnerdtutorials.com/security-access-using-mfrc522-rfid-reader-with-arduino/",target:"_blank",rel:"noopener noreferrer"},"MFRC522"),",\xa0",r.a.createElement("a",{href:"https://www.sparkfun.com/datasheets/Components/nRF24L01_prelim_prod_spec_1_2.pdf",target:"_blank",rel:"noopener noreferrer"},"nRF24L01"),",\xa0",r.a.createElement("a",{href:"https://github.com/esp8266/Arduino",target:"_blank",rel:"noopener noreferrer"},"ESP8266"),",\xa0",r.a.createElement("a",{href:"https://www.espressif.com/en/products/hardware/esp32/overview",target:"_blank",rel:"noopener noreferrer"},"ESP32")," wifi modules."),r.a.createElement("p",null,"More coming soon..."))))}}]),n}(r.a.Component)),be=(n(111),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).getCurrentYear=function(){return(new Date).getFullYear()},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("section",{className:"footer__website-name"},r.a.createElement("span",null,"\xa9 ",this.getCurrentYear()," Harman Kharoud")))}}]),n}(r.a.Component)),ge=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){(new he).sendText()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m.a,null,r.a.createElement(C,null),r.a.createElement("div",{className:"main-body"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:B}),r.a.createElement(p.a,{exact:!0,path:"/projects",component:R}),r.a.createElement(p.a,{exact:!0,path:"/whoami",component:Ee}),r.a.createElement(p.a,{exact:!0,path:"/projects/centralProcessingUnit",component:ve}))),r.a.createElement(be,null)))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,t,n){e.exports=n.p+"static/media/CPU.ddab6fdf.png"},69:function(e,t,n){e.exports=n.p+"static/media/XOR.2c3ef8e2.svg"},70:function(e,t,n){e.exports=n.p+"static/media/NAND.d40a919e.svg"},71:function(e,t,n){e.exports=n.p+"static/media/OR.a8e14e91.svg"},72:function(e,t,n){e.exports=n.p+"static/media/AND.c6f6a44d.svg"},73:function(e,t,n){e.exports=n.p+"static/media/NOR.0d22d57d.svg"},74:function(e,t,n){e.exports=n.p+"static/media/NOT.e990f80f.svg"},75:function(e,t,n){e.exports=n.p+"static/media/FOLDER.7f3139fd.png"},92:function(e,t,n){e.exports=n(112)},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[92,1,2]]]);
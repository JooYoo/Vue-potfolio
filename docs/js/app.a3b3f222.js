(function(t){function e(e){for(var n,r,a=e[0],l=e[1],c=e[2],v=0,u=[];v<a.length;v++)r=a[v],o[r]&&u.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(u.length)u.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,a=1;a<i.length;a++){var l=i[a];0!==o[l]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},o={app:0},s=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var d=l;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("1356"),o=i.n(n);o.a},1356:function(t,e,i){},1787:function(t,e,i){"use strict";var n=i("7852"),o=i.n(n);o.a},"22e4":function(t,e,i){"use strict";var n=i("805b"),o=i.n(n);o.a},"2fc5":function(t,e,i){"use strict";var n=i("47fd"),o=i.n(n);o.a},"453e":function(t,e,i){},"47fd":function(t,e,i){},"4cae":function(t,e,i){"use strict";var n=i("eaf2"),o=i.n(n);o.a},"50d4":function(t,e,i){"use strict";var n=i("e01f"),o=i.n(n);o.a},"56d7":function(t,e,i){"use strict";i.r(e);var n=i("2b0e"),o=i("bb71");i("da64");n["a"].use(o["a"],{iconfont:"md"});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-toolbar",{attrs:{id:"nav-bar",flat:"false"}},[i("router-link",{staticClass:"router-nav",attrs:{to:{name:"Home"}}},[i("v-btn",{attrs:{flat:"",small:"",color:"white"}},[t._v("HOME")])],1),i("router-link",{staticClass:"router-nav",attrs:{to:"/project"}},[i("v-btn",{attrs:{flat:"",small:"",color:"white"}},[t._v("Project")])],1),i("v-spacer"),i("v-btn",{attrs:{icon:""}},[i("v-icon",{attrs:{color:"white"}},[t._v("more_vert")])],1)],1),i("v-content",[i("router-view")],1),i("v-flex",[i("v-footer",{attrs:{id:"footer",height:"auto"}},[i("v-card",{staticClass:"flex",staticStyle:{"background-image":"linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%)"},attrs:{flat:"",tile:""}},[i("v-card-title",[i("strong",{staticClass:"subheading",staticStyle:{color:"white"}},[t._v("\n            ©2018 —\n            "),i("strong",[t._v("ZhuYu")])]),i("v-spacer"),t._l(t.icons,function(e){return i("v-btn",{key:e,staticClass:"mx-3",attrs:{dark:"",icon:""}},[i("a",{attrs:{id:"link-color",href:e.link,target:e.target}},[i("v-icon",{attrs:{href:e.link,size:"24px"}},[t._v(t._s(e.icon))])],1)])})],2)],1)],1)],1)],1)},r=[],a={name:"App",data(){return{bottomNav:3,icons:[{icon:"fab fa-github",link:"https://github.com/JooYoo",target:"_blank"},{icon:"fas fa-envelope",link:"mailto:jooyoo@outlook.com",target:""},{icon:"fab fa-linkedin",link:"#",target:"_blank"}]}},computed:{color(){switch(this.bottomNav){case 0:return"blue-grey";case 1:return"teal";case 2:return"brown";case 3:return"indigo"}}}},l=a,c=(i("034f"),i("2877")),d=i("6544"),v=i.n(d),u=i("7496"),p=i("8336"),h=i("b0af"),g=i("12b2"),m=i("549c"),f=i("0e8f"),b=i("553a"),_=i("132d"),y=i("9910"),x=i("71d9"),C=Object(c["a"])(l,s,r,!1,null,null,null);C.options.__file="App.vue";var k=C.exports;v()(C,{VApp:u["a"],VBtn:p["a"],VCard:h["a"],VCardTitle:g["a"],VContent:m["a"],VFlex:f["a"],VFooter:b["a"],VIcon:_["a"],VSpacer:y["a"],VToolbar:x["a"]});var j=i("8c4f"),V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-jumbotron",{staticStyle:{height:"600px"},attrs:{id:"main-jumbotron"}},[i("v-container",{attrs:{"fill-height":""}},[i("v-layout",{attrs:{"align-center":"","text-xs-center":""}},[i("v-flex",[i("h3",{staticClass:"display-3",attrs:{id:"theTitle"}},[t._v(" J O O   Y O O")]),i("div",{attrs:{id:"subtitle"}},[t._v("\n            Focus on the field between Code and Design. \n            ")]),i("v-divider",{staticClass:"my-4",attrs:{id:"theDivider"}}),i("div",{staticClass:"title mb-3",attrs:{id:"divider-subtitle"}},[t._v("Frontend UX Developer")]),i("vue-particles")],1)],1),i("ul",{directives:[{name:"scroll-spy-active",rawName:"v-scroll-spy-active"},{name:"scroll-spy-link",rawName:"v-scroll-spy-link"}],attrs:{id:"scroll-dots"}},[i("li",{staticClass:"v-timeline-item__dot v-timeline-item__dot--small"},[i("a",{staticClass:"nav-link btn-circle v-timeline-item__inner-dot grey lighten-2",attrs:{href:"#section-1"}})]),i("li",{staticClass:"v-timeline-item__dot v-timeline-item__dot--small",staticStyle:{"margin-top":"30px"}},[i("a",{staticClass:"nav-link btn-circle v-timeline-item__inner-dot grey lighten-2",attrs:{href:"#section-2"}})]),i("li",{staticClass:"v-timeline-item__dot v-timeline-item__dot--small",staticStyle:{"margin-top":"60px"}},[i("a",{staticClass:"btn-circle v-timeline-item__inner-dot grey lighten-2",attrs:{href:"#section-3"}})]),i("li",{staticClass:"v-timeline-item__dot v-timeline-item__dot--small",staticStyle:{"margin-top":"90px"}},[i("a",{staticClass:"btn-circle v-timeline-item__inner-dot grey lighten-2",attrs:{href:"#section-4"}})]),i("li",{staticClass:"v-timeline-item__dot v-timeline-item__dot--small",staticStyle:{"margin-top":"120px"}},[i("a",{staticClass:"btn-circle v-timeline-item__inner-dot grey lighten-2",attrs:{href:"#section-5"}})])])],1)],1),i("v-layout",{directives:[{name:"scroll-spy",rawName:"v-scroll-spy"}],attrs:{wrap:""}},[i("v-layout",{staticClass:"grey lighten-4",attrs:{id:"section-1"}},[i("about")],1),i("v-layout",{attrs:{id:"section-2"}},[i("project")],1),i("v-layout",{staticClass:"grey lighten-4",attrs:{id:"section-3"}},[i("skill")],1),i("v-container",{attrs:{id:"section-4"}},[i("experience")],1),i("v-layout",{staticClass:"grey lighten-4",attrs:{id:"section-5"}},[i("education")],1)],1)],1)},w=[];const A={projects:[{id:1,title:"first-title",description:"first-description",cover:"https://cdn.vuetifyjs.com/images/cards/house.jpg",gitLink:"first-git-link",demoLink:"first-demo-link",images:"first-images",techs:"first-tecks"},{id:2,title:"second-title",description:"second-description",cover:"https://cdn.vuetifyjs.com/images/cards/road.jpg",gitLink:"second-git-link",demoLink:"second-demo-link",images:"second-images",techs:"second-tecks"},{id:3,title:"third-title",description:"third-description",cover:"https://cdn.vuetifyjs.com/images/cards/plane.jpg",gitLink:"third-git-link",demoLink:"third-demo-link",images:"third-images",techs:"third-tecks"},{id:4,title:"fouth-title",description:"third-description",cover:"https://picsum.photos/200/300/?random",gitLink:"third-git-link",demoLink:"third-demo-link",images:"third-images",techs:"third-tecks"},{id:5,title:"fifth-title",description:"third-description",cover:"https://picsum.photos/200/300/?image=161",gitLink:"third-git-link",demoLink:"third-demo-link",images:"third-images",techs:"third-tecks"},{id:6,title:"sixth-title",description:"third-description",cover:"https://picsum.photos/200/300/?image=162",gitLink:"third-git-link",demoLink:"third-demo-link",images:"third-images",techs:"third-tecks"},{id:7,title:"seventh-title",description:"third-description",cover:"https://picsum.photos/200/300/?image=170",gitLink:"third-git-link",demoLink:"third-demo-link",images:"third-images",techs:"third-tecks"},{id:8,title:"eightth-title",description:"third-description",cover:"https://picsum.photos/200/300/?image=176",gitLink:"third-git-link",demoLink:"third-demo-link",images:"third-images",techs:"third-tecks"},{id:9,title:"nineth-title",description:"third-description",cover:"https://picsum.photos/200/300/?image=168",gitLink:"third-git-link",demoLink:"third-demo-link",images:"third-images",techs:"third-tecks"}]};var L=A,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-container",[i("v-layout",[i("v-flex",{attrs:{"align-center":"","text-xs-left":""}},[i("div",{staticClass:"display-2 font-weight-thin",attrs:{id:"experience-title"}},[t._v("Experience")]),i("v-timeline",t._l(t.years,function(e,n){return i("v-timeline-item",{key:n,attrs:{color:e.color,small:""}},[i("span",{class:"headline font-weight-bold "+e.color+"--text",attrs:{slot:"opposite"},domProps:{textContent:t._s(e.year)},slot:"opposite"}),i("div",{staticClass:"py-3"},[i("h2",{class:"headline font-weight-light mb-2 "+e.color+"--text",domProps:{textContent:t._s(e.title)}}),i("div",{class:"subheading font-weight-light mb-1 "+e.color+"--text ",domProps:{textContent:t._s(e.where)}}),i("div",{domProps:{textContent:t._s(e.content)}})])])}))],1)],1)],1)],1)},S=[],D={data:()=>({years:[{color:"cyan",year:"2014",title:"Graphic Designer",where:"Yunnan University of Finance and Economics (CN)",content:"When i was still study for my master degree, \n                  i worked as a Graphic Designer part time for a department ( Postgraduate Education Center ) in my University.\n                  I responsible for VI Design, such as the Student Portfolio, \n                  University Major Brochure by Adobe Illustrator and Adobe Photoshop."},{color:"green",year:"2015",title:"Chinese for English Speaker Tutor",where:"online (CN)",content:"I taught Chinese online to the students, \n                  who come from Australia, America, and Europe.\n                  I have to take care of all the Business process alone. \n                  Include Course Development, Marketing, Conduct Classes, Accounting and Customer Service.\n                  In order to help students study efficiently,\n                  i created Multimedia eBook by iAuthor, Adobe Photoshop and Keynote.\n                  All the Video and Sound footage in the eBook edited by iMove, Adobe After Effects and Garageband.\n                  For better management of the students course schedule, \n                  i created a Website by Wordpress. I also had the chance to learn more about HTML, CSS and Javascript."},{color:"pink",year:"2016",title:"App Development in Ausbildung",where:"artiso solutions GmbH (DE)",content:"I've learned the basic of Programming by .Net technologies. \n                  I have the chance to develop Modern Web App by ASP.NET Core, Angular. \n                  And get comfortable with Frontend UI tools, like CSS, Sass, jQuery, Bootstrap and so on. \n                  I worked in Innovation Team, which focus on Mixed Reality and Augmented Reality App development. \n                  I supported the Team to implement 4 apps for Hololens and Andriod Mobile Phone (ARCore). \n                  At the meantime, I responsible for App development by Unity 3D \n                  and UI/UX design by Adobe Illustrator, Adobe XD and Adobe After Effects."},{color:"amber",year:"2019",title:"Future",where:"Code and Design anywhere",content:"As a Web Application Frontend UX Developer. \n                  I'd love to be the one in the team, who connect Code and Design.\n                  And turn my passion, \n                  creativity and conscientious to better user experience."}]})},I=D,T=(i("1787"),i("a523")),E=i("a722"),O=i("8414"),F=i("1e06"),M=Object(c["a"])(I,P,S,!1,null,null,null);M.options.__file="experience.component.vue";var U=M.exports;v()(M,{VContainer:T["a"],VFlex:f["a"],VLayout:E["a"],VTimeline:O["a"],VTimelineItem:F["a"]});var $=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",[i("v-flex",[i("v-container",[i("div",{staticClass:"display-2 font-weight-thin",attrs:{id:"about-title"}},[t._v("\n                   About\n              ")]),i("p",{staticClass:"body-2 font-weight-regular",attrs:{id:"about-content"}},[t._v("\n                  Hello World. \n                  My name is JooYoo (朱瑜). \n                  I come from China and I'm working in Germany now. \n                  I have the passion to create Apps which have a uniqe user experience and maximize the user productivity. \n                  I enjoy to work with Modern Web App Technologies and UX design tools. \n                  I belive Web App is the best Mobile App solution for the next 10 years.\n                  I'm the one in the team, between code and design.\n              ")])])],1)],1)],1)},B=[],N={name:"about"},H=N,R=(i("2fc5"),Object(c["a"])(H,$,B,!1,null,null,null));R.options.__file="about.component.vue";var W=R.exports;v()(R,{VContainer:T["a"],VFlex:f["a"],VLayout:E["a"]});var Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",{attrs:{"justify-center":""}},[i("v-flex",{attrs:{xs12:"",sm12:""}},[i("v-container",{attrs:{fluid:"","grid-list-xl":""}},[i("div",{staticClass:"display-2 font-weight-thin",attrs:{id:"experience-title"}},[t._v("Project")]),i("v-layout",{attrs:{row:"",wrap:""}},t._l(3,function(e){return i("v-flex",{key:t.projectData.projects[t.getProjectLength.projectLength-e].title,attrs:{xs4:""}},[i("router-link",{staticClass:"router-nav",attrs:{to:"/project-"+t.projectData.projects[t.getProjectLength.projectLength-e].id}},[i("v-card",{staticClass:"rounded-card",attrs:{hover:""}},[i("v-img",{attrs:{src:t.projectData.projects[t.getProjectLength.projectLength-e].cover,height:"200px"}},[i("v-container",{attrs:{"fill-height":"",fluid:"","pa-2":""}},[i("v-layout",{attrs:{"fill-height":""}},[i("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[i("span",{staticClass:"headline white--text",domProps:{textContent:t._s(t.projectData.projects[t.getProjectLength.projectLength-e].title)}})])],1)],1)],1),i("v-card-actions",{staticClass:"text-xs-center"},[i("div",{staticClass:"text-xs-center"},[i("v-chip",{attrs:{small:"",outline:"",color:"primary"}},[t._v("React")]),i("v-chip",{attrs:{small:"",outline:"",color:"secondary"}},[t._v("ionic")]),i("v-chip",{attrs:{small:"",outline:"",color:"red"}},[t._v("Angular")]),i("v-chip",{attrs:{small:"",outline:"",color:"green"}},[t._v("Vuejs")])],1)])],1)],1)],1)})),i("router-link",{attrs:{to:"/project"}},[i("div",{staticClass:"text-xs-center"},[i("v-btn",{attrs:{dark:"",color:"primary",round:"",large:""}},[t._v("more Projects")])],1)])],1)],1)],1)],1)},G=[],J={data:()=>({projectData:L}),computed:{getProjectLength(){return{projectLength:L.projects.length}}}},X=J,q=(i("d0bc"),i("99d9")),z=i("cc20"),Q=i("adda"),K=Object(c["a"])(X,Y,G,!1,null,"485a61d5",null);K.options.__file="project.component.vue";var Z=K.exports;v()(K,{VBtn:p["a"],VCard:h["a"],VCardActions:q["a"],VChip:z["a"],VContainer:T["a"],VFlex:f["a"],VImg:Q["a"],VLayout:E["a"]});var tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",{attrs:{"justify-center":""}},[i("v-flex",{attrs:{xs12:"",sm12:""}},[i("v-container",{attrs:{fluid:"","grid-list-xl":""}},[i("div",{staticClass:"display-2 font-weight-thin",attrs:{id:"experience-title"}},[t._v("Education")]),i("v-card",[i("v-list",{attrs:{subheader:"","three-line":""}},[i("v-subheader",[i("v-list-tile-action",[i("flag",{staticClass:"flag",attrs:{iso:"de"}})],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Ausbildung | 2016 ~ 2019")])],1)],1),i("v-list-tile",[i("v-list-tile-action",[i("v-icon",{attrs:{color:"indigo"}},[t._v("laptop_mac")])],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Anwendungsentwicklung")]),i("v-list-tile-sub-title",[t._v("Robert-Bosch-Schule Ulm")]),i("v-list-tile-sub-title",[t._v("artiso solutions GmbH")])],1)],1)],1),i("v-divider"),i("v-list",{attrs:{subheader:"","three-line":""}},[i("v-subheader",[i("v-list-tile-action",[i("flag",{staticClass:"flag",attrs:{iso:"gb"}})],1),i("v-list-tile-action",[i("flag",{staticClass:"flag-second",attrs:{iso:"cn"}})],1),i("v-list-tile-title",{staticClass:"flag-second-title"},[t._v("Master of Science | 2012 ~ 2014")])],1),i("v-list-tile",[i("v-list-tile-action",[i("v-icon",{attrs:{color:"indigo"}},[t._v("timer")])],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Project Management")]),i("v-list-tile-sub-title",[t._v("University of Greenwich")]),i("v-list-tile-sub-title",[t._v("Yunnan University of Finance and Economics")])],1)],1)],1),i("v-divider"),i("v-list",{attrs:{subheader:"","three-line":""}},[i("v-subheader",[i("v-list-tile-action",[i("flag",{staticClass:"flag",attrs:{iso:"au"}})],1),i("v-list-tile-action",[i("flag",{staticClass:"flag-second",attrs:{iso:"cn"}})],1),i("v-list-tile-title",{staticClass:"flag-second-title"},[t._v("Bachelor of Business Studies | 2008 ~ 2012")])],1),i("v-list-tile",[i("v-list-tile-action",[i("v-icon",{attrs:{color:"indigo"}},[t._v("people")])],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Business Studies")]),i("v-list-tile-sub-title",[t._v("Charles Sturt University")]),i("v-list-tile-sub-title",[t._v("Yunnan University of Finance and Economics")])],1)],1)],1),i("v-divider"),i("v-list",{attrs:{subheader:"","three-line":""}},[i("v-subheader",[i("v-list-tile-action",[i("flag",{staticClass:"flag",attrs:{iso:"cn"}})],1),i("v-list-tile-title",{staticClass:"flag-title"},[t._v("Bachelor of Management Studies | 2008 ~ 2012")])],1),i("v-list-tile",[i("v-list-tile-action",[i("v-icon",{attrs:{color:"indigo"}},[t._v("attach_money")])],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Financial Management")]),i("v-list-tile-sub-title",[t._v("Yunnan University of Finance and Economics")])],1)],1)],1)],1)],1)],1)],1)],1)},et=[],it={data(){return{notifications:!1,sound:!0,widgets:!1}}},nt=it,ot=(i("22e4"),i("ce7e")),st=i("8860"),rt=i("ba95"),at=i("40fe"),lt=i("5d23"),ct=i("e0c7"),dt=Object(c["a"])(nt,tt,et,!1,null,"df91de70",null);dt.options.__file="education.component.vue";var vt=dt.exports;v()(dt,{VCard:h["a"],VContainer:T["a"],VDivider:ot["a"],VFlex:f["a"],VIcon:_["a"],VLayout:E["a"],VList:st["a"],VListTile:rt["a"],VListTileAction:at["a"],VListTileContent:lt["a"],VListTileSubTitle:lt["b"],VListTileTitle:lt["c"],VSubheader:ct["a"]});var ut=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("div",{staticClass:"display-2 font-weight-thin",attrs:{id:"skill-title"}},[t._v("Skills")]),i("v-layout",{attrs:{id:"skill-container"}},[i("v-flex",{attrs:{"d-flex":""}},[i("v-list",{attrs:{subheader:"","three-line":""}},[i("v-subheader",[t._v("Frontend")]),t._l(t.frontend,function(e){return i("v-list-tile",{key:e.id},[i("v-list-tile-action",[i("img",{attrs:{src:e.icon,width:"25px"}})]),i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(e.name))]),i("v-progress-linear",{attrs:{color:e.color},model:{value:e.progress,callback:function(i){t.$set(e,"progress",i)},expression:"item.progress"}})],1)],1)})],2),i("v-list",{attrs:{subheader:"","three-line":""}},[i("v-subheader",[t._v("Design")]),t._l(t.design,function(e){return i("v-list-tile",{key:e.id},[i("v-list-tile-action",[i("img",{attrs:{src:e.icon,width:"25px"}})]),i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(e.name))]),i("v-progress-linear",{attrs:{color:e.progressColor},model:{value:e.progress,callback:function(i){t.$set(e,"progress",i)},expression:"item.progress"}})],1)],1)})],2),i("v-list",{attrs:{subheader:"","three-line":""}},[i("v-subheader",[t._v("Others")]),t._l(t.others,function(e){return i("v-list-tile",{key:e.id},[i("v-list-tile-action",[i("img",{attrs:{src:e.icon,width:"25px"}})]),i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(e.name))]),i("v-progress-linear",{attrs:{color:e.progressColor},model:{value:e.progress,callback:function(i){t.$set(e,"progress",i)},expression:"item.progress"}})],1)],1)})],2)],1)],1)],1)},pt=[],ht={data:()=>({frontend:[{name:"Angular",progress:40,icon:"https://cdn.svgporn.com/logos/angular-icon.svg",color:"blue lighten-4"},{name:"ionic",progress:60,icon:"https://cdn.svgporn.com/logos/ionic.svg",color:"blue lighten-3"},{name:"Vuejs",progress:30,icon:"https://cdn.svgporn.com/logos/vue.svg",color:"blue lighten-2"},{name:"Bootstrap",progress:80,icon:"https://cdn.svgporn.com/logos/bootstrap.svg",color:"blue lighten-1"},{name:"jQuery",progress:30,icon:"https://cdn.svgporn.com/logos/jquery.svg",color:"blue darken-1"},{name:"Vuetify",progress:40,icon:"https://cdn.svgporn.com/logos/vuetifyjs.svg",color:"blue darken-2"}],design:[{name:"Adobe Illustrator",progress:50,icon:"https://image.flaticon.com/icons/svg/552/552222.svg",progressColor:"teal lighten-4"},{name:"Adobe XD",progress:60,icon:"https://image.flaticon.com/icons/svg/552/552224.svg",progressColor:"teal lighten-3"},{name:"Adobe After Effects",progress:30,icon:"https://image.flaticon.com/icons/svg/552/552226.svg",progressColor:"teal lighten-2"},{name:"Garageband",progress:70,icon:"https://image.flaticon.com/icons/svg/552/552460.svg",progressColor:"teal lighten-1"}],others:[{name:"Unity 3D",progress:50,icon:"https://cdn.svgporn.com/logos/unity.svg",progressColor:"blue-grey lighten-4"},{name:"ARCore",progress:60,icon:"https://image.flaticon.com/icons/svg/552/552224.svg",progressColor:"blue-grey lighten-3"},{name:"ASP.NET Core",progress:40,icon:"https://cdn.svgporn.com/logos/dotnet.svg",progressColor:"blue-grey lighten-2"},{name:"Tensorflow",progress:2,icon:"https://cdn.svgporn.com/logos/tensorflow.svg",progressColor:"blue-grey lighten-1"}]})},gt=ht,mt=(i("71c4"),i("8e36")),ft=Object(c["a"])(gt,ut,pt,!1,null,null,null);ft.options.__file="skill.component.vue";var bt=ft.exports;v()(ft,{VContainer:T["a"],VFlex:f["a"],VLayout:E["a"],VList:st["a"],VListTile:rt["a"],VListTileAction:at["a"],VListTileContent:lt["a"],VListTileTitle:lt["c"],VProgressLinear:mt["a"],VSubheader:ct["a"]});var _t={components:{about:W,project:Z,experience:U,education:vt,skill:bt},data:()=>({projectData:L})},yt=_t,xt=(i("89b1"),i("0f8e")),Ct=Object(c["a"])(yt,V,w,!1,null,null,null);Ct.options.__file="HomePage.vue";var kt=Ct.exports;v()(Ct,{VContainer:T["a"],VDivider:ot["a"],VFlex:f["a"],VJumbotron:xt["a"],VLayout:E["a"]});var jt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-container",[i("project-list")],1)],1)},Vt=[],wt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-combobox",{attrs:{items:t.items,label:"Your favorite Tech",chips:"",clearable:"","prepend-icon":"filter_list",solo:"",multiple:""},scopedSlots:t._u([{key:"selection",fn:function(e){return[i("v-chip",{staticClass:"primary",attrs:{selected:e.selected,close:"",color:"white--text"},on:{input:function(i){t.remove(e.item)}}},[i("strong",[t._v(t._s(e.item))]),t._v(" \n          ")])]}}]),model:{value:t.chips,callback:function(e){t.chips=e},expression:"chips"}}),i("v-flex",{attrs:{xl12:"",sm12:""}},[i("v-container",{attrs:{fluid:"","grid-list-xl":""}},[i("v-layout",{attrs:{row:"",wrap:""}},t._l(t.projectData.projects,function(e){return i("v-flex",{key:e.title,attrs:{xs4:""}},[i("router-link",{staticClass:"router-nav",attrs:{to:"/project-"+e.id}},[i("v-card",{staticClass:"rounded-card",attrs:{hover:""}},[i("v-img",{attrs:{src:e.cover,height:"200px"}},[i("v-container",{attrs:{"fill-height":"",fluid:"","pa-2":""}},[i("v-layout",{attrs:{"fill-height":""}},[i("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[i("span",{staticClass:"headline white--text",domProps:{textContent:t._s(e.title)}})])],1)],1)],1),i("v-card-actions",{staticClass:"text-xs-center"},[i("div",{staticClass:"text-xs-center"},[i("v-chip",{attrs:{outline:"",small:"",color:"primary"}},[t._v("React")]),i("v-chip",{attrs:{outline:"",small:"",color:"secondary"}},[t._v("ionic")]),i("v-chip",{attrs:{outline:"",small:"",color:"red"}},[t._v("Angular")]),i("v-chip",{attrs:{outline:"",small:"",color:"green"}},[t._v("Vuejs")])],1)])],1)],1)],1)}))],1)],1)],1)},At=[],Lt={data:()=>({projectData:L,chips:["Angular","React","Vuejs","ionic"],items:["Angular","React","Vuejs","ionic","Unity3D","WPF"]}),methods:{remove(t){this.chips.splice(this.chips.indexOf(t),1),this.chips=[...this.chips]}}},Pt=Lt,St=(i("50d4"),i("2b5d")),Dt=Object(c["a"])(Pt,wt,At,!1,null,null,null);Dt.options.__file="project.list.component.vue";var It=Dt.exports;v()(Dt,{VCard:h["a"],VCardActions:q["a"],VChip:z["a"],VCombobox:St["a"],VContainer:T["a"],VFlex:f["a"],VImg:Q["a"],VLayout:E["a"]});var Tt={name:"ProjectPage",components:{projectList:It}},Et=Tt,Ot=(i("b4c8"),Object(c["a"])(Et,jt,Vt,!1,null,null,null));Ot.options.__file="ProjectPage.vue";var Ft=Ot.exports;v()(Ot,{VContainer:T["a"]});var Mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v("project.content.1 works")]),i("p",[t._v(t._s(t.ProjectData.projects[0].description))])])},Ut=[],$t={data:()=>({ProjectData:L})},Bt=$t,Nt=(i("e3fd"),Object(c["a"])(Bt,Mt,Ut,!1,null,null,null));Nt.options.__file="project.content.1.vue";var Ht=Nt.exports,Rt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h1",[t._v("project.content.8 works")])},Wt=[],Yt={},Gt=Yt,Jt=(i("4cae"),Object(c["a"])(Gt,Rt,Wt,!1,null,null,null));Jt.options.__file="project.content.8.vue";var Xt=Jt.exports;n["a"].use(j["a"]);var qt=new j["a"]({routes:[{path:"/",name:"Home",component:kt},{path:"/project",name:"Project",component:Ft},{path:"/project-1",name:"project-id-1",component:Ht},{path:"/project-8",name:"project-id-8",component:Xt}]}),zt=i("8303"),Qt=i("33bc"),Kt=i("98c9");n["a"].config.productionTip=!1,n["a"].use(zt["a"]),n["a"].use(Qt["a"]),n["a"].use(Kt["a"]),new n["a"]({render:t=>t(k),router:qt}).$mount("#app")},"614a":function(t,e,i){},"71c4":function(t,e,i){"use strict";var n=i("453e"),o=i.n(n);o.a},7852:function(t,e,i){},"805b":function(t,e,i){},"89b1":function(t,e,i){"use strict";var n=i("614a"),o=i.n(n);o.a},"9c53":function(t,e,i){},b4c8:function(t,e,i){"use strict";var n=i("ec88"),o=i.n(n);o.a},d0bc:function(t,e,i){"use strict";var n=i("ecb6"),o=i.n(n);o.a},e01f:function(t,e,i){},e3fd:function(t,e,i){"use strict";var n=i("9c53"),o=i.n(n);o.a},eaf2:function(t,e,i){},ec88:function(t,e,i){},ecb6:function(t,e,i){}});
//# sourceMappingURL=app.a3b3f222.js.map
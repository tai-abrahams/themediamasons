(this["webpackJsonpthemediamasons-client"]=this["webpackJsonpthemediamasons-client"]||[]).push([[0],{41:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t(0),i=t(14),r=t.n(i),s=(t(41),t(10)),l=t(3),c=t.p+"static/media/MM_logo.bb6fbd9e.png",d=function(){return Object(n.jsx)("div",{className:"container-fluid pt-3 pb-3 bg-white border",children:Object(n.jsx)("img",{src:c,className:"w-50",alt:"Media Masons",style:{objectFit:"contain",maxWidth:"400px"}})})},m=function(e){var a=e.btn;return Object(n.jsx)("li",{className:"nav-item active mt-auto mb-auto",children:Object(n.jsx)(s.b,{to:a.path,className:"nav-link text-primary pl-5 pr-5 text-center",children:a.name})})},p=function(){return Object(n.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-nav  navbar-light bg-gradient-light border border-top pt-2 pb-2",children:[Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(n.jsx)("ul",{className:"navbar-nav mr-auto ml-auto",children:[{name:"Home",path:"/"},{name:"Services",path:"/services/"},{name:"Portfolio",path:"themediamasons/portfolio/"},{name:"Contact Us",path:"/themediamasons/contact/"}].map((function(e){return Object(n.jsx)(m,{btn:e},e.name)}))})})]})},b=function(e){var a=e.content,t=a.text,o=a.thumbnail,i=a.column,r=a.portfolioColumn,l=function(e){return e.split("\n").map((function(e){return Object(n.jsx)("p",{children:e})}))};return Object(n.jsx)("div",{className:"container ml-auto mr-auto p-0 pb-5 col-12",style:{backgroundColor:"#240e0e"},children:Object(n.jsxs)("div",{className:"row col-md-9 col-10 text-white ml-auto mr-auto mt-5 mb-5 p-0 pl-auto",children:[t?l(t):null,o?o.map((function(e){var a=e.id,t=e.img,o=e.path,i=e.title;return Object(n.jsxs)("div",{className:"col-10 col-sm-6 col-md-4 mr-auto ml-auto mb-4",children:[Object(n.jsx)(s.b,{to:o,children:Object(n.jsx)("img",{src:t,className:"col-12",alt:"thumbnail"})}),Object(n.jsx)("div",{className:"col-12 text-center",children:i})]},a)})):null,i?i.map((function(e){var a=e.title,t=e.text;return Object(n.jsxs)("div",{className:"col-12 col-lg-6 ml-auto mr-auto p-0 text-left mb-4 pl-3 pr-3",children:[Object(n.jsx)("div",{className:"mb-1",children:Object(n.jsx)("h3",{children:a})}),Object(n.jsx)("div",{className:"",children:l(t)})]},a)})):null,r?r.map((function(e){var a=e.title,t=e.description,o=(e.source,e.img);return Object(n.jsxs)("div",{className:"row col-12 col-md-6 p-0",children:[a&&t?Object(n.jsxs)("div",{className:"col-11 p-0 ",children:[Object(n.jsx)("h3",{className:"col-12 p-0",children:a}),Object(n.jsx)("div",{className:"col-12 p-0 mb-4",children:t})]}):null,o?Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("img",{src:o,alt:"site preview",className:"w-100"})}):null]})})):null]})})},u=t(15),h=t(4),j=t(21),g=t(31),v=t.n(g),O=(t(66),function(e){e.label,e.labelFor;var a=e.id,t=e.name,o=e.value,i=e.type,r=e.onChange,s=e.error,l=e.required,c=e.disable;return Object(n.jsxs)("div",{className:"form-group p-0 mt-0 mb-0",children:[Object(n.jsx)("li",{className:"col-12 m-0 mb-2 p-0",children:Object(n.jsx)("input",{disabled:c,value:o,type:i,className:"col-12 pt-3 pb-3",id:a,name:t,onChange:r,required:l,placeholder:t})}),s&&Object(n.jsx)("div",{className:"invalid-tooltip",children:s})]})}),f=(t(67),function(e){var a=e.success;return Object(n.jsx)("div",{className:"d-flex col-md-12 justify-content-end mt-4",children:Object(n.jsx)("div",{className:"d-flex fade-in justify-content-center col-md-10",children:Object(n.jsx)("div",{className:"d-flex justify-content-center col-md-5 p-0 rounded bg-success",children:a?"Successfully Submitted":null})})})}),y=function(e){e.props,e.content;var a=Object(o.useState)({name:"",city:"",email:"",phone:"",company:"",website:"",message:"",error:{}}),t=Object(j.a)(a,2),i=t[0],r=t[1],s=Object(o.useState)(null),c=Object(j.a)(s,2),d=c[0],m=c[1],p=Object(l.f)(),b=function(e){r(Object(h.a)(Object(h.a)({},i),{},Object(u.a)({},e.target.name,e.target.value)))},g=function(){return!0===d};return Object(n.jsx)("div",{className:"container col-12 pb-5",style:{backgroundColor:"#240e0e"},children:Object(n.jsxs)("form",{className:"row needs-validation mt-5 p-0 col-12 col-md-6 ml-auto mr-auto",onSubmit:function(e,a){return e.preventDefault(),""===i.name?(r(Object(h.a)(Object(h.a)({},i),{},{error:{name:"Missing input"}})),void console.log(i)):""===i.city?(r(Object(h.a)(Object(h.a)({},i),{},{error:{city:"Missing input"}})),void console.log(i)):""===i.email?(r(Object(h.a)(Object(h.a)({},i),{},{error:{email:"Missing input"}})),void console.log(i)):""===i.phone?(r(Object(h.a)(Object(h.a)({},i),{},{error:{phone:"Missing input"}})),void console.log(i)):""===i.company?(r(Object(h.a)(Object(h.a)({},i),{},{error:{company:"Missing input"}})),void console.log(i.error)):""===i.website?(r(Object(h.a)(Object(h.a)({},i),{},{error:{website:"Missing input"}})),void console.log(i)):""===i.company?(r(Object(h.a)(Object(h.a)({},i),{},{error:{email:"Missing input"}})),void console.log(i)):(t={allValues:i},v.a.post(Object({NODE_ENV:"production",PUBLIC_URL:"/themediamasons",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_LOG||"https://www.tai-abrahams.github.io/mediamasons-server/log",t),r(Object(h.a)(Object(h.a)({},i),{},{name:"",city:"",email:"",phone:"",company:"",website:"",message:"",error:""})),m(!0),void setInterval((function(){p.push("/")}),3e3));var t},children:[Object(n.jsxs)("ul",{className:"col-12 col-sm-8 col-md-6 p-0 ml-auto mr-auto mb-0",children:[Object(n.jsx)(O,{name:"name",label:"name",labelFor:"validationTooltip01",id:"validationTooltip01",value:i.name,onChange:b,error:i.error.name,required:!0,disable:g()}),Object(n.jsx)(O,{name:"city",label:"city",labelFor:"validationTooltip02",id:"validationTooltip02",value:i.city,onChange:b,error:i.error.city,required:!0,disable:g()}),Object(n.jsx)(O,{name:"email",label:"email",labelFor:"validationTooltip03",id:"validationTooltip03",value:i.email,onChange:b,error:i.error.email,required:!0,disable:g()})]}),Object(n.jsxs)("ul",{className:"col-12 col-sm-8 col-md-6 p-0 mb-auto mr-auto ml-auto",children:[Object(n.jsx)(O,{name:"phone",label:"phone",labelFor:"validationTooltip04",id:"validationTooltip04",value:i.phone,onChange:b,error:i.error.phone,required:!0,disable:g()}),Object(n.jsx)(O,{name:"company",label:"company",labelFor:"validationTooltip05",id:"validationTooltip05",value:i.company,onChange:b,error:i.error.company,required:!1,disable:g()}),Object(n.jsx)(O,{name:"website",label:"website",labelFor:"validationTooltip06",id:"validationTooltip06",value:i.website,onChange:b,error:i.error.website,required:!1,disable:g()})]}),Object(n.jsx)("div",{className:"col-12 col-sm-8 col-md-12 p-0 m-0 ml-auto mr-auto",children:Object(n.jsx)("textarea",{value:i.message,name:"message",className:"col-sm-12 rounded",style:{height:"200px"},placeholder:"Tell us what you're looking for...",onChange:b,disabled:g()})}),d&&Object(n.jsx)(f,{success:d}),Object(n.jsx)("div",{className:"container col-12 col-sm-8 col-md-12 p-0 mr-auto ml-auto text-right",children:Object(n.jsx)("input",{type:"submit",disabled:g(),className:"btn btn-light bg-light col-12 col-md-3"})})]})})},x=t.p+"static/media/apotek_agency.9e0eb2cc.png",w=t.p+"static/media/making_people_free.4ecbe5b8.png",N=t.p+"static/media/apotek1.f2bbb140.jpg",T=t.p+"static/media/liberty.77f9bbdc.jpg",C=(t(68),t(69),[{name:"Home",path:"/themediamasons/",Component:b,content:{text:"The Media Masons are a graphic design company specialising in many different areas of design and quickly deliver professional-grade productions.\nThe MediaMasons provide artwork for Print Web and Video. Here at The MediaMasons we listen to your needs and deliver to our best understandings, we are a very small organisation allowing us to form a personal relationship with each and every costumer we come in contact with, this enables us to get a better understanding into what you really need from us, giving us the ability to give our suggestions and in turn communicating our vision for the projects we engage in.\n\n    The MediaMasons are a team of designers who are always a phone call away if needed, you will always be given the ability to communicate personally with the specific designer who is dealing with your project.\nWe strive in creating a masterpiece everytime round and produce work to a high standard in order to have every costumer leave pleased with what they've recieved to an extent in which they can and WILL return with any of their future graphic design needs."}},{name:"Services",path:"/services/",Component:b,content:{column:[{title:"Web Design",text:"MediaMasons design professional, search engine friendly, both static and dynamic websites.\nWether you need a complete website fully navigational ready for the web, a flat design layout (either .jpg or png), Email Newletters or just a web banner. We are willing and capable of taking up any project no matter the size. We can incorporate flash into html based sites and we can also design fully functional flash only sites.\n\n        The sites created are hand coded and they follow all web standards and we always try to incorporate CSS and XHTML to increase site performance and productivity.\n        \nWe also encourage collaborations with design agencies who desire our skills."},{title:"Graphic Design",text:"We also specialize in professional, eye-catching print design. Print design is an extremely popular form of business and personal advertisement.\nBrochures, flyers, letterheads and business cards are all products we can produce to please the highest of client needs.\nThe MediaMasons dont just design regular Print, we produce smart, witty, unique, one-of-a-kind projects with a great sense of creativity incorporated.\nIf you are a starting company or a well known company, The MediaMasons will help, with our teams skills and knowledge of design techniques and history of design."}]}},{name:"Portfolio",path:"/portfolio/",Component:b,content:{thumbnail:[{id:1,title:"Apotek Agency",img:x,path:"/themediamasons/portfolio/apotek/"},{id:2,title:"Liberty",img:w,path:"/themediamasons/portfolio/liberty/"}]}},{name:"Contact Us",path:"/contact/",Component:y},{path:"/themediamasons/portfolio/liberty/",Component:b,content:{portfolioColumn:[{title:"Liberty",description:"www.makingpeoplefree.org.uk"},{img:T,source:"www.makingpeoplefree.org.uk"}]}},{path:"/themediamasons/portfolio/apotek/",Component:b,content:{portfolioColumn:[{title:"Apotek",description:"Foremost Healthcare, Social Care and Workplace Trainers, Domiciliary Care Agency, Services and Management.\n                  Apotel agency & learning is the trading name for Reynolds & Archer (UK) Limited, a company formed over ten\n                  years ago to provide training, health and social care services.",source:"www.apotekagency.co.uk"},{img:N,source:""}]}}]),k=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(s.a,{basename:"/themediamasons",forceRefresh:!0,children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(d,{}),Object(n.jsx)(p,{}),Object(n.jsx)("div",{children:Object(n.jsx)(l.c,{children:C.map((function(e){var a=e.path,t=e.content,o=e.Component;return Object(n.jsx)(l.a,{exact:!0,path:a,children:Object(n.jsx)(o,{content:t},a)},a)}))})})]})})})},S=t(35),M=t(11),_=t(34),E="ADD_MESSAGE",D=[],W=Object(M.c)({form:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case E:return Object(h.a)({},a.payload);default:return e}}}),A=[_.a],F=Object(M.e)(W,{},Object(M.d)(M.a.apply(void 0,A),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));r.a.render(Object(n.jsx)(S.a,{store:F,children:Object(n.jsx)(k,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.860a22df.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,3,5,6],{226:function(e,t,n){"use strict";n.r(t);var r={name:"HeaderBar"},l=n(41),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-20 bg-white fixed top-0 w-full flex justify-end items-center shadow-md z-999"},[n("nav",[n("a",{staticClass:"block md:hidden"},[e._v("Menu")]),e._v(" "),n("a",{staticClass:"hidden md:inline-block hover:bg-green-100 px-2 py-1 rounded-md",attrs:{href:"#"}},[e._v("Home")]),e._v(" "),n("a",{staticClass:"hidden md:inline-block hover:bg-green-100 px-2 py-1 rounded-md",attrs:{href:"#services"}},[e._v("Platforms")]),e._v(" "),n("a",{staticClass:"hidden md:inline-block hover:bg-green-100 px-2 py-1 rounded-md",attrs:{href:"#components"}},[e._v("Components")]),e._v(" "),n("a",{staticClass:"hidden md:inline-block hover:bg-green-100 px-2 py-1 rounded-md",attrs:{href:"#projects"}},[e._v("Projects")]),e._v(" "),n("a",{staticClass:"hidden md:inline-block hover:bg-green-100 px-2 py-1 rounded-md",attrs:{href:"#contact"}},[e._v("Contact")])])])}],!1,null,null,null);t.default=component.exports},227:function(e,t,n){"use strict";n.r(t);var r={name:"HomeSection"},l=n(41),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex items-center mx-10"},[n("div",{staticClass:"flex-1"},[n("div",{staticClass:"m-10"},[n("h2",{staticClass:"text-3xl md:text-5xl"},[e._v("Hey! It's")]),e._v(" "),n("h1",{staticClass:"text-6xl sm:text-8xl md:text-10xl font-black animate-pulse"},[e._v("\n        CARLO ADAMOS\n      ")]),e._v(" "),n("h2",{staticClass:"text-3xl md:text-5xl"},[e._v("a Front-end Web Developer.")])])])])}],!1,null,null,null);t.default=component.exports},228:function(e,t,n){"use strict";n.r(t);var r={name:"SectionPage",props:{id:{type:String,default:""}}},l=n(41),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"h-screen flex flex-col items-center justify-center px-10",attrs:{id:e.id}},[e._t("default")],2)}),[],!1,null,"27b1a55b",null);t.default=component.exports},229:function(e,t,n){"use strict";n.r(t);var r={name:"ServicesPage"},l=n(41),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col lg:flex-row w-full text-8xl lg:text-10xl font-black bg-clip-text via-indigo-700 leading-loose"},[n("div",{staticClass:"flex-1 text-center cursor-pointer border-8 border-transparent hover:border-vue-green"},[n("span",{staticClass:"bg-clip-text text-transparent bg-gradient-to-r from-vue-green to-vue-blue"},[e._v("Vue.js")])]),e._v(" "),n("div",{staticClass:"flex-1 text-center cursor-pointer border-8 border-transparent hover:border-lit-blue"},[n("span",{staticClass:"bg-clip-text text-transparent bg-gradient-to-r from-lit-blue to-lit-green hover:bg-clip-content"},[e._v("lit-html")])])])}],!1,null,"5a55987e",null);t.default=component.exports},233:function(e,t,n){"use strict";n.r(t);var r=n(226),l=n(227),c=n(228),o=n(229),d={name:"IndexPage",components:{HeaderBar:r.default,SectionPage:c.default,ServicesPage:o.default,HomeSection:l.default}},v=n(41),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-screen"},[n("header-bar"),e._v(" "),n("section-page",{attrs:{id:"home"}},[n("home-section")],1),e._v(" "),n("section-page",{attrs:{id:"services"}},[n("services-page")],1),e._v(" "),n("section-page",{attrs:{id:"components"}},[n("div",[e._v("Components")]),e._v(" "),n("div",[e._v("textbox")]),e._v(" "),n("div",[e._v("dropdowns")]),e._v(" "),n("div",[e._v("forms")])]),e._v(" "),n("section-page",{attrs:{id:"projects"}},[e._v(" Sample Projects ")]),e._v(" "),n("section-page",{attrs:{id:"contact"}},[n("div",[e._v("Contact me")]),e._v(" "),n("div",[e._v("form")]),e._v(" "),n("div",[e._v("github")]),e._v(" "),n("div",[e._v("linkedin")])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{HeaderBar:n(226).default,HomeSection:n(227).default,SectionPage:n(228).default,ServicesPage:n(229).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,r){"use strict";var n={name:"DefaultLayout",data:function(){return{scroll:0}},methods:{handleScroll:function(){this.scroll=window.scrollY},handleURL:function(){this.$refs.toggle.checked=!1}},watch:{$route:function(){this.handleURL()}},directives:{scroll:{inserted:function(e,t){window.addEventListener("scroll",(function r(n){t.value(n,e)&&window.addEventListener("scroll",r)}))}}}},o=r(33),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("header",{directives:[{name:"scroll",rawName:"v-scroll",value:e.handleScroll,expression:"handleScroll"}],staticClass:"header",class:{"header--fixed":e.scroll>20}},[r("input",{ref:"toggle",attrs:{type:"checkbox",id:"menu-toggler"}}),e._v(" "),r("div",{staticClass:"header__logo"},[e._v("booluw.me")]),e._v(" "),e._m(0),e._v(" "),e._m(1)]),e._v(" "),r("Nuxt"),e._v(" "),e._m(2)],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"header__hamburger",attrs:{for:"menu-toggler"}},[t("div",{staticClass:"line"}),this._v(" "),t("div",{staticClass:"line"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"header__nav"},[r("div",{staticClass:"nav-header"},[r("p",{staticClass:"nav-header__text"},[r("span",[e._v("←")]),e._v(" Menu "),r("span",[e._v("→")])]),e._v(" "),r("label",{staticClass:"header__hamburger",attrs:{for:"menu-toggler"}},[r("div",{staticClass:"line"}),e._v(" "),r("div",{staticClass:"line"})])]),e._v(" "),r("ul",{staticClass:"nav"},[r("li",[r("a",{staticClass:"nav__link",attrs:{href:"#projects"}},[e._v("\n            Projects "),r("span",[e._v("→")])])]),e._v(" "),r("li",[r("a",{staticClass:"nav__link",attrs:{href:"#contact"}},[e._v("\n            Contact "),r("span",[e._v("→")])])]),e._v(" "),r("div",{staticClass:"section"},[r("h3",{staticClass:"heading--sub"},[e._v("technologies i prefer to work with")]),e._v(" "),r("ul",{staticClass:"section__list"},[r("li",[e._v("VUE JS")]),e._v(" "),r("li",[e._v("Nuxt JS")]),e._v(" "),r("li",[e._v("Sass")])])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"footer"},[r("p",{staticClass:"footer__text"},[r("span",[e._v("←")]),e._v("\n      Footer\n      "),r("span",[e._v("→")])]),e._v(" "),r("h2",{staticClass:"footer__heading heading--sub"},[e._v("end of the page. Am glad you came this far")]),e._v(" "),r("div",{staticClass:"placeholder",attrs:{id:"contact"}}),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-2"},[r("p",{staticClass:"paragraph"},[e._v("\n          Would really love to hear from you!\n        ")]),e._v(" "),r("ul",{staticClass:"section__list"},[r("li",[e._v("jaycewap@gmail.com")]),e._v(" "),r("li",[e._v("+234 (0)708 6555 753")]),e._v(" "),r("li",[r("a",{attrs:{href:"//twitter.com/booluw",title:"Booluw on Twitter"}},[e._v("\n            Twitter\n            "),r("span",[e._v("→")])])]),e._v(" "),r("li",[r("a",{attrs:{href:"//gitbub.com/booluw",title:"Booluw on GitHub"}},[e._v("\n            GitHub\n            "),r("span",[e._v("→")])])]),e._v(" "),r("li",[r("a",{attrs:{href:"//messanger.me/booluw",title:"Booluw on Messager"}},[e._v("\n            Messager\n            "),r("span",[e._v("→")])])])])]),e._v(" "),r("div",{staticClass:"col-2"},[r("div",{staticClass:"section"},[r("h3",{staticClass:"heading--sub"},[e._v("technologies i prefer to work with")]),e._v(" "),r("ul",{staticClass:"section__list"},[r("li",[e._v("VUE JS")]),e._v(" "),r("li",[e._v("Nuxt JS")]),e._v(" "),r("li",[e._v("Sass")])])])]),e._v(" "),r("div",{staticClass:"col-2"})])])}],!1,null,null,null);t.a=component.exports},148:function(e,t,r){r(149),e.exports=r(150)},189:function(e,t,r){var content=r(190);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(99).default)("7bed9b52",content,!0,{sourceMap:!1})},190:function(e,t,r){var n=r(98),o=r(191),l=r(192),d=r(193),m=r(194),c=r(195),f=r(196);t=n(!1);var h=o(l),_=o(d),v=o(m),w=o(c),x=o(f);t.push([e.i,"@font-face{font-family:Raleway;src:url("+h+");font-weight:300}@font-face{font-family:Raleway;src:url("+_+");font-weight:400}@font-face{font-family:Raleway;src:url("+v+");font-weight:500}@font-face{font-family:Raleway;src:url("+w+");font-weight:600}@font-face{font-family:Raleway;src:url("+x+");font-weight:700}html{font-size:65.2%;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}body{font-family:Raleway,sans-serif;padding:0;margin:0;font-size:1.6rem;font-weight:400;background-color:#fff;color:#001f33}*,:after,:before{padding:0;margin:0;box-sizing:border-box}.heading--sub{opacity:.6;text-transform:uppercase;font-size:1.6rem}@media (min-width:1000px){.heading--sub,.paragraph{font-size:2rem}.paragraph--w-80{width:80%;margin:0 auto}}.u-placeholder{padding:2rem 0 0}@media (min-width:1000px){.u-ml--desktop-5{margin-left:8rem}.u-placeholder{padding:2rem 0 0}}.btn{display:inline-flex;justify-content:center;align-items:center;padding:1rem 3rem;border:.1rem solid rgba(0,110,179,.8);color:#006eb3;text-decoration:none;font-weight:500;transition:.3s ease-in-out}.btn--justify-between{justify-content:space-between}.btn:hover{color:#fff;background-color:#006eb3}.btn>span{margin:0 0 0 2rem}@media (min-width:1000px){.btn{padding:1.5rem 4rem}}.card{box-sizing:border-box;display:block;text-decoration:none;color:inherit;min-width:80%;max-width:80%;margin:0 1rem}.card:hover .card__img{filter:grayscale(0)}.card__img{width:100%;height:18rem;background-color:#000;filter:grayscale(100%);transition:.3s ease-in-out}.card__header{display:flex;align-items:center;flex-wrap:wrap;margin:1rem 0}.card__tag{font-size:1.3rem;margin:.5rem 0 0;padding:0 .7rem 0 0;color:#000;opacity:.9}.card__tag:not(:first-of-type){padding:0 .7rem;border-left:.1rem solid #000}.card__heading{font-size:2.5rem;font-weight:600;margin:1rem 0}@media (min-width:1000px){.card{min-width:40%;max-width:40%}.card__img{height:23rem}}.jumbotron{height:85vh;padding:8rem 2rem;overflow:hidden}.jumbotron .row{background-color:transparent}.jumbotron__heading--sub{font-weight:500;font-size:1.8rem;color:rgba(0,110,179,.6)}.jumbotron__heading--main{font-size:5rem;margin:0 0 1rem}.jumbotron__btn{margin:2rem 0 0}.jumbotron__img{display:none}@media (min-width:1000px){.jumbotron{padding:8rem;height:90vh}.jumbotron__heading--sub{font-size:3rem}.jumbotron__heading--main{font-size:7rem}.jumbotron .paragraph{width:70%;font-size:2rem}.jumbotron__btn{margin:2rem 0 0}}.footer{background-color:#006eb3;min-height:40vh;padding:2rem 2rem 2rem 5rem;margin:8rem 0 0;position:relative;color:#fff}.footer .row{margin:3rem 0 0}.footer .paragraph{margin:5rem 0 2rem;opacity:.9}.footer .section{margin:5rem 0 0}.footer a{text-decoration:none;color:#fff;display:flex;justify-content:space-between;align-items:center;padding:1rem;border-bottom:.1rem solid hsla(0,0%,100%,.3);transition:.3s ease-in-out}.footer a:hover{border-color:#fff;padding:1rem 0 1rem 1rem}.footer__heading{color:#fff}.footer__text{width:20vh;display:flex;justify-content:space-between;align-items:center;color:#fff;opacity:.8;margin:2rem;position:absolute;top:50%;left:0;transform:translate(-50%) rotate(-90deg)}@media (min-width:1000px){.footer{min-height:50vh;padding:8rem}.footer__heading{width:40%}.footer .section{padding:0;margin:5rem 5rem 0}}.header{display:flex;align-items:center;justify-content:space-between;padding:2rem;position:relative;background-color:transparent}.header--fixed{background-color:#fff;position:fixed;top:0;right:0;left:0;box-shadow:0 3px 3px rgba(0,0,0,.1);z-index:2}.header__logo{font-weight:400;color:#006eb3}.header__hamburger{display:block;flex-basis:10%;cursor:pointer}.header__hamburger .line{padding:.1rem;margin:0 0 .2rem;width:100%;background-color:#006eb3;transition:transform .3s ease-in-out}.header__nav{z-index:3;transform:translateX(-1000rem);position:fixed;top:0;right:0;bottom:0;left:0;background-color:#006eb3;color:#fff;padding:8rem 2rem;transition:transform .5s ease-in-out}.header__nav .header__hamburger .line{background-color:#fff}.header .nav-header{display:flex;justify-content:flex-end;align-items:center}.header .nav-header__text{width:50%;display:flex;justify-content:space-between;align-items:center;position:fixed;top:50%;left:0;transform:translate(-50%) rotate(-90deg);margin:2rem;opacity:.8}.nav{list-style-type:none;margin:8rem 0 0 1rem}.nav__link{display:flex;align-items:center;justify-content:space-between;color:#fff;text-decoration:none;padding:1rem;margin:0 0 1rem 2rem;border-bottom:.1rem solid hsla(0,0%,100%,.3);transition:.3s ease-in-out;font-weight:500}.nav__link:hover{border-color:#fff;padding:1rem 0 1rem 1rem}.nav .section{margin:8rem 0!important;padding:0 2rem}.nav .section__list{font-weight:400}#menu-toggler{display:none}#menu-toggler:checked~.header__hamburger .line,#menu-toggler:checked~.header__nav .nav-header .header__hamburger .line{transform:rotate(45deg) translate(-2px)}#menu-toggler:checked~.header__hamburger .line:last-of-type,#menu-toggler:checked~.header__nav .nav-header .header__hamburger .line:last-of-type{transform:rotate(-45deg) translate(3px,-5px)}#menu-toggler:checked~.header__nav{transform:translateX(0)}@media (min-width:1000px){.header{padding:3rem 8rem}.header__logo{font-size:3rem}.header__hamburger{flex-basis:3%}.header__hamburger .line{padding:.1rem;margin:0 0 .5rem}.header__nav{padding:10rem 10rem 10rem 25rem}.nav-header__text{width:15%!important;margin:0 10rem!important}.nav__link{font-size:2rem;margin:0 0 4rem}.nav .section{padding:0}#menu-toggler:checked~.header__hamburger .line,#menu-toggler:checked~.header__nav .nav-header .header__hamburger .line{transform:rotate(45deg) translate(-1px,2px)}}.row{height:auto}.desktop{display:none}@media (min-width:1000px){.desktop{display:block}.row{display:flex;align-items:stretch;justify-content:flex-start;height:100%}.row--align-center{align-items:center}.row .col-1{width:16.66667%}.row .col-2{width:33.33333%}.row .col-3{width:50%}.row .col-4{width:66.66667%}.row .col-5{width:83.33333%}.row .col-6{width:100%}.row [class^=col-]{box-sizing:border-box}.row [class^=col-]:not(:last-of-type){margin-right:2rem}}.section{display:block;margin:3rem 2rem}.section__list{margin:2rem 0;font-weight:500}.section__list li{margin:1rem 0;list-style-type:none}.section__slider{display:flex;overflow-x:auto;overflow-y:hidden;overflow:auto hidden;margin:2rem 0 0;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.section__slider::-webkit-scrollbar,.section__slider::-webkit-scrollbar-*{height:.5rem}.section__slider>*{scroll-snap-align:center}.section__slider>:not(.card){width:35%}.section__slider>img{filter:grayscale(100%)}.section__slider>img:not(:first-of-type){margin:0 1rem}@media (min-width:1000px){.section{margin:8rem;padding:0 8rem}.section__slider{margin:3rem 0;padding:0 0 2rem}.section__slider>*{width:25%}.section__slider>img:not(:first-of-type){margin:0 3rem}}",""]),e.exports=t},192:function(e,t,r){e.exports=r.p+"fonts/Raleway-Light.b1bdea5.ttf"},193:function(e,t,r){e.exports=r.p+"fonts/Raleway-Regular.580d077.ttf"},194:function(e,t,r){e.exports=r.p+"fonts/Raleway-Medium.430a051.ttf"},195:function(e,t,r){e.exports=r.p+"fonts/Raleway-SemiBold.17ba641.ttf"},196:function(e,t,r){e.exports=r.p+"fonts/Raleway-Bold.575e431.ttf"}},[[148,3,1,4]]]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["confianca"],{"18db":function(e,t,a){},dbb4:function(e,t,a){},fa85:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper",attrs:{id:"confianca"}},[a("div",{staticClass:"static-container"},[a("h1",{staticClass:"title"},[e._v("\n            Galery"),e.viewport.is568?a("br"):e._e(),e._v("("),a("span",{staticClass:"params"},[e._v("'Story'")]),e._v(")\n        ")]),a("div",{staticClass:"std"},[(e.viewport.is568,a("p",{staticClass:"-purple -full"},[e._v("\n                // Mencoba cerita tentang sekitar"),a("br")])),a("p",[e._v("silahkan klik dibawah ini ")]),a("a",{staticClass:"bt",attrs:{href:"https://drive.google.com/drive/folders/117kARz0R4zBrh7YjbuMP8L50SUrJ96dg?usp=sharing",title:"Download PDF",target:"_blank"}},[e._v("\n                dibaca-baca "),a("svg",{staticClass:"nav-ico -blank",attrs:{viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M5,1h10v10 M5.5,10.5l0.8-0.8"}})])]),e._m(0),e._m(1)]),a("nav",{staticClass:"work-nav"},[a("h3",[e._v("// More...")]),a("ul",[a("li",{staticClass:"prev"},[a("router-link",{attrs:{to:"/work/foto",title:"Foto"}},[a("svg",{staticClass:"nav-ico -prev",attrs:{viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M5,1h10v10 M5.5,10.5l0.8-0.8"}})]),e._v("\n                        Foto...\n                    ")])],1),a("li",{staticClass:"next"},[a("router-link",{attrs:{to:"/work/karya",title:"Karya"}},[e._v("\n                        ...Karya\n                        "),a("svg",{staticClass:"nav-ico -next",attrs:{viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M5,1h10v10 M5.5,10.5l0.8-0.8"}})])])],1)])])])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",{staticClass:"subtitle"},[e._v("\n                Karna tidak ada yang bisa diajak cerita,"),a("br"),e._v("\n                jadi saya mencoba bercerita lewat tulisan\n            ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"-gray"},[e._v("\n                Mohon maaf sebelumnya, hanya sekedar bercerita saja, "),a("br"),e._v("\n                tidak ada unsur apapun, mencoba mengeluh pada tulisan\n            ")])}],n=(a("dbb4"),a("18db"),a("cd29")),i={name:"confianca",props:{viewport:Object},data:function(){return{intro:new TimelineMax,scroller:new n["Controller"],qty:0}},methods:{addQty:function(){return 10!==this.qty&&this.qty++},removeQty:function(){return this.qty<=1?this.qty=0:this.qty--}},mounted:function(){this.intro.clear(!0).addLabel("enter",1).from(".title",2,{autoAlpha:0,rotationX:20,transformOrigin:"50% 50% -100px",ease:Power3.easeOut},"enter").from(".std",2,{autoAlpha:0,x:-32,ease:Power3.easeOut},"enter+=1.5");var e=new n["Scene"]({triggerElement:".project-start",offset:this.viewport.h/4,duration:document.body.offsetHeight}).addTo(this.scroller).reverse(!0);e.on("enter",function(e){document.body.classList.add("-confianca-bg")}).on("leave",function(e){"REVERSE"===e.scrollDirection&&document.body.classList.remove("-confianca-bg")});var t=new TimelineMax;t.staggerFrom(".screen",4,{autoAlpha:0,yPercent:25,stagger:.5,ease:Power3.easeOut});new n["Scene"]({triggerElement:".project-start",offset:-this.viewport.h/4,duration:this.viewport.h}).setTween(t).addTo(this.scroller).reverse(!0).setClassToggle(".mobile-screens","active");var a=new TimelineMax;a.to(".scroll-pages img",4,{top:"-100%"}).to(".scroll-pages .mobile",4,{yPercent:20},0);new n["Scene"]({triggerElement:".scroll-pages",duration:this.viewport.h}).setTween(a).addTo(this.scroller).reverse(!0).setClassToggle(".scroll-pages","active");var s=new TimelineMax,r=document.querySelector(".end-screens").offsetHeight;s.staggerFrom(".end-screens .screen",4,{xPercent:-50,ease:Power3.easeOut,stagger:.2});new n["Scene"]({triggerElement:".end-screens",offset:-r,duration:r}).setTween(s).addTo(this.scroller).reverse(!0).setClassToggle(".end-screens","active")},beforeDestroy:function(){this.scroller.destroy()}},o=i,l=a("2877"),c=Object(l["a"])(o,s,r,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=confianca.f0aee4a8.js.map
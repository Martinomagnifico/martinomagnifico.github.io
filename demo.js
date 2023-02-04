!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";const e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=(()=>{const n=e[0],t={};for(const l of e){if((null==l?void 0:l[1])in document){for(const[e,s]of l.entries())t[n[e]]=s;return t}}return!1})(),t={change:n.fullscreenchange,error:n.fullscreenerror};let l={request(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.documentElement,t=arguments.length>1?arguments[1]:void 0;return new Promise((s,o)=>{const c=()=>{l.off("change",c),s()};l.on("change",c);const i=e[n.requestFullscreen](t);i instanceof Promise&&i.then(c).catch(o)})},exit:()=>new Promise((e,t)=>{if(!l.isFullscreen)return void e();const s=()=>{l.off("change",s),e()};l.on("change",s);const o=document[n.exitFullscreen]();o instanceof Promise&&o.then(s).catch(t)}),toggle:(e,n)=>l.isFullscreen?l.exit():l.request(e,n),onchange(e){l.on("change",e)},onerror(e){l.on("error",e)},on(e,n){const l=t[e];l&&document.addEventListener(l,n,!1)},off(e,n){const l=t[e];l&&document.removeEventListener(l,n,!1)},raw:n};Object.defineProperties(l,{isFullscreen:{get:()=>Boolean(document[n.fullscreenElement])},element:{enumerable:!0,get:()=>document[n.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>Boolean(document[n.fullscreenEnabled])}}),n||(l={isEnabled:!1});var s=l;document.querySelectorAll("[data-viewdemo]").forEach(e=>{let n=e.getAttribute("data-viewdemo");n=document.getElementById(n),e.addEventListener("click",e=>{void 0!==s&&(s.enabled||s.isEnabled)&&(e.preventDefault(),s.request(n))})});let o={transition:"slide",embedded:!0,keyboardCondition:"focused",controlsTutorial:!1,overview:!1,width:1024,margin:.07},c=[{name:"appearance",config:{appearance:{csspath:{appearance:"reveal.js-appearance/plugin/appearance/appearance.css",animatecssx:{link:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",compat:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.compat.css"}}},plugins:[Appearance]}},{name:"internation",config:{internation:{switchselector:".langchooser",languages:{fr:{name:"Français",dictionary:"reveal.js-internation/fr.json"},se:{name:"Svenska",dictionary:"reveal.js-internation/se.json"},cn:{name:"中文",dictionary:"reveal.js-internation/cn.json"}}},plugins:[Internation,RevealHighlight]}},{name:"verticator",config:{verticator:{scale:1.1,csspath:{verticator:"reveal.js-verticator/plugin/verticator/verticator.css",tooltip:"reveal.js-verticator/plugin/verticator/tooltip.css"}},plugins:[Verticator,RevealHighlight]}},{name:"fsfx",config:{fsfx:{compatibility:!1,oppositecolor:"#1a1626"},plugins:[FsFx]}},{name:"simplemenu",config:{simplemenu:{barhtml:{header:"<div class='menubar'><ul class='menu'></ul></div>"},csspath:"reveal.js-simplemenu/plugin/simplemenu/simplemenu.css"},plugins:[Simplemenu,RevealHighlight]}},{name:"relativenumber",config:{slideNumber:"c/t",plugins:[RelativeNumber]}},{name:"copycode",config:{copycode:{csspath:"reveal.js-copycode/plugin/copycode/copycode.css"},plugins:[CopyCode,RevealHighlight]}},{name:"fontsfirst",config:{fontsfirst:{modules:{google:{families:["Roboto Slab:300,400:latin"]}},timeout:1500,selfhostcss:"reveal.js-fontsfirst/css/robotoslab.css"},plugins:[FontsFirst]}},{name:"doghouse",config:{plugins:[Doghouse,RevealHighlight]}},{name:"smallcontrol",config:{smallcontrol:{smalltouch:!1,thisdeckonly:!0},plugins:[Smallcontrol,RevealHighlight]}},{name:"tagteam",config:{tagteam:{groups:{bwhsd:{names:["black & white"],tags:["horses",["dogs","small"]]},brownpets:{names:["brown"],tags:["cats","dogs"]}}},simplemenu:{selectby:"data-name",csspath:"reveal.js-simplemenu/plugin/simplemenu/simplemenu.css"},plugins:[Tagteam,Simplemenu,RevealHighlight]}},{name:"counteract",config:{counteract:{counters:[{name:"titlecount",selector:".titlecount"},{name:"mylist",selector:"ol.list li"},{name:"stoplist",selector:"ol.stoplist li",reset:"ol.stoplist"},{name:"figcaption",selector:"figcaption"},{name:"mainnumber",increment:".slides > section.countme",selector:"h4.countme",reset:".slides"},{name:"subnumber",increment:".slides > section section",selector:"h4.countme",reset:".slides > section"}]},plugins:[CounterAct,RevealHighlight]}}];const i=[];c.forEach(e=>{let n={};for(let e in o)n[e]=o[e];for(let t in e.config)n[t]=e.config[t];const t=e.name;document.getElementById(t)&&(i[t]=new Reveal(document.getElementById(t),n),i[t].initialize())});let r=document.querySelector(".menubar .langchooser"),a=document.querySelector(".menubar .dropdown > label");r.addEventListener("click",(function(e){a.click()}),!1);i.tagteam.addEventListener("ready",function(e){let n=e.getRevealElement().querySelector("#exampleParameter");if(n){let e=new URL(window.location),t=new URLSearchParams(e.search),l=t.get("t"),s=t.get("n"),o=t.get("g");n.innerHTML=l||s||o?".../demo.html"+e.search:".../demo.html?t=tagteam"}}(i.tagteam))}));

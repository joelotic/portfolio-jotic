"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[70],{6070:function(e,s,a){a.r(s),a.d(s,{default:function(){return j}});var t=a(5893),c=a(7294),i=a(6333),r=a(907),n=function(e){var s=e.img;return(0,t.jsx)("img",{src:s,alt:"Project Image"})},o=function(e){var s=e.playing,a=(0,c.useRef)(null);return(0,c.useEffect)((function(){null==s&&a.current.pause()}),[s]),(0,t.jsx)("video",{ref:a,src:"img/projects/video.mp4",id:"video",className:"responsive-video",controls:"controls",autoPlay:!1,poster:"img/projects/project-6.jpg"})},l=function(e){var s=e.playing;return(0,c.useEffect)((function(){var e=document.querySelector(".youtube-video");null==s&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}),[s]),(0,t.jsx)("div",{className:"videocontainer",children:(0,t.jsx)("iframe",{className:"youtube-video",src:"https://www.youtube.com/embed/7e90gBu4pas?enablejsapi=1&version=3&playerapiid=ytplayer"})})},m=function(){return(0,t.jsx)("div",{id:"slider",className:"carousel slide portfolio-slider","data-ride":"carousel",children:(0,t.jsxs)(r.Z,{className:"carousel-inner",prevIcon:(0,t.jsx)("a",{className:"carousel-control-prev",href:"#slider","data-slide":"prev",children:(0,t.jsx)("span",{className:"fa fa-chevron-left carousel-controls"})}),nextIcon:(0,t.jsx)("a",{className:"carousel-control-next",href:"#slider","data-slide":"next",children:(0,t.jsx)("span",{className:"fa fa-chevron-right carousel-controls"})}),prevLabel:"",nextLabel:"",indicators:!1,children:[(0,t.jsx)(r.Z.Item,{className:"carousel-item",interval:1e3,children:(0,t.jsx)("img",{src:"img/projects/project-8.jpg",alt:"slide 1"})}),(0,t.jsx)(r.Z.Item,{className:"carousel-item",interval:1e3,children:(0,t.jsx)("img",{src:"img/projects/project-7.jpg",alt:"slide 2"})}),(0,t.jsx)(r.Z.Item,{className:"carousel-item",interval:1e3,children:(0,t.jsx)("img",{src:"img/projects/project-5.jpg",alt:"slide 3"})})]})})},d=[{img:"img/projects/project-1.jpg",name:"Image Format",format:"img",project:"WEBSITE",client:"ENVATO",duration:"3 MONTHS",technologies:["HTML","JAVASCRIPT"],budget:"1550 USD"},{img:"img/projects/project-2.jpg",name:"Youtube Format",format:"youtube",project:"WEBSITE",client:"ENVATO",duration:"3 MONTHS",technologies:["HTML","JAVASCRIPT"],budget:"1550 USD"},{img:"img/projects/project-3.jpg",name:"Slider Format",format:"slider",project:"WEBSITE",client:"ENVATO",duration:"3 MONTHS",technologies:["HTML","JAVASCRIPT"],budget:"1550 USD"},{img:"img/projects/project-4.jpg",name:"Video Format",format:"video",project:"WEBSITE",client:"ENVATO",duration:"3 MONTHS",technologies:["HTML","JAVASCRIPT"],budget:"1550 USD"},{img:"img/projects/project-5.jpg",name:"Image Format",format:"img",project:"WEBSITE",client:"ENVATO",duration:"3 MONTHS",technologies:["HTML","JAVASCRIPT"],budget:"1550 USD"},{img:"img/projects/project-6.jpg",name:"Image Format",format:"img",project:"WEBSITE",client:"ENVATO",duration:"3 MONTHS",technologies:["HTML","JAVASCRIPT"],budget:"1550 USD"},{img:"img/projects/project-7.jpg",name:"Image Format",format:"img",project:"WEBSITE",client:"ENVATO",duration:"3 MONTHS",technologies:["HTML","JAVASCRIPT"],budget:"1550 USD"},{img:"img/projects/project-8.jpg",name:"Image Format",format:"img",project:"WEBSITE",client:"ENVATO",duration:"3 MONTHS",technologies:["HTML","JAVASCRIPT"],budget:"1550 USD"},{img:"img/projects/project-9.jpg",name:"Image Format",format:"img",project:"WEBSITE",client:"ENVATO",duration:"3 MONTHS",technologies:["HTML","JAVASCRIPT"],budget:"1550 USD"}],j=function(){var e=(0,c.useContext)(i.Z).nav,s=(0,c.useState)(null),a=s[0],r=s[1];return(0,t.jsxs)(c.Fragment,{children:[(0,t.jsxs)("section",{id:"work",className:"".concat("work"===e?"active":""),children:[(0,t.jsxs)("div",{className:"portfolio-container ".concat(a?"slide-out overflow-hidden":""),children:[(0,t.jsxs)("div",{className:"container page-title text-center",children:[(0,t.jsxs)("h2",{className:"text-center",children:["my ",(0,t.jsx)("span",{children:"portfolio"})]}),(0,t.jsx)("span",{className:"title-head-subtitle",children:"a few recent design and coding projects. Want to see more? Email me."})]}),(0,t.jsx)("div",{className:"portfolio-section",children:(0,t.jsx)("div",{className:"container cd-container",children:(0,t.jsx)("div",{children:(0,t.jsx)("ul",{className:"row",id:"portfolio-items",children:d.map((function(e,s){return(0,t.jsx)("li",{className:"col-12 col-md-6 col-lg-4",children:(0,t.jsxs)("a",{href:"#","data-type":"project-1",onClick:function(){return r(s+1)},children:[(0,t.jsx)("img",{src:e.img,alt:"Project",className:"img-fluid"}),(0,t.jsx)("div",{children:(0,t.jsx)("span",{children:e.name})})]})},s)}))})})})}),(0,t.jsx)("div",{className:"portfolio-overlay",onClick:function(){return r(null)}})]}),d.map((function(e,s){return(0,t.jsxs)("div",{className:"project-info-container project-1 ".concat(a===s+1?"slide-in":""),children:[(0,t.jsx)("div",{className:"project-info-main-content",children:"img"==e.format?(0,t.jsx)(n,{img:e.img}):"youtube"==e.format?(0,t.jsx)(l,{playing:a}):"slider"==e.format?(0,t.jsx)(m,{}):(0,t.jsx)(o,{playing:a})}),(0,t.jsxs)("div",{className:"projects-info row",children:[(0,t.jsxs)("div",{className:"col-12 col-sm-6 p-none",children:[(0,t.jsx)("h3",{className:"font-weight-600 uppercase",children:e.name}),(0,t.jsxs)("ul",{className:"project-details",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"fa fa-file-text-o"}),(0,t.jsxs)("span",{className:"font-weight-400 project-label",children:[" ","Project"," "]}),":"," ",(0,t.jsx)("span",{className:"font-weight-600 uppercase",children:e.project})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"fa fa-user-o"}),(0,t.jsxs)("span",{className:"font-weight-400 project-label",children:[" ","Client"," "]}),":"," ",(0,t.jsx)("span",{className:"font-weight-600 uppercase",children:e.client})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"fa fa-hourglass-o"}),(0,t.jsxs)("span",{className:"font-weight-400 project-label",children:[" ","Duration"," "]}),":"," ",(0,t.jsx)("span",{className:"font-weight-600 uppercase",children:e.duration})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"fa fa-code"})," ",(0,t.jsxs)("span",{className:"font-weight-400 project-label",children:[" ","Technologies"]})," ",":"," ",(0,t.jsx)("span",{className:"font-weight-600 uppercase",children:e.technologies.map((function(e,s){return(0,t.jsx)(c.Fragment,{children:e},s)}))})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"fa fa-money"})," ",(0,t.jsxs)("span",{className:"font-weight-400 project-label",children:[" ","Budget"]})," ",":"," ",(0,t.jsx)("span",{className:"font-weight-600 uppercase",children:e.budget})]})]}),(0,t.jsx)("a",{href:"#",className:"btn",children:(0,t.jsxs)("span",{children:[(0,t.jsx)("i",{className:"fa fa-external-link"}),"preview"]})})]}),(0,t.jsx)("div",{className:"col-6 p-none text-right",children:(0,t.jsx)("a",{href:"#",className:"btn btn-secondary close-project",onClick:function(){return r(null)},children:(0,t.jsxs)("span",{children:[(0,t.jsx)("i",{className:"fa fa-close"}),"Close"]})})})]})]},s)}))]}),a&&(0,t.jsx)("span",{className:"back-mobile ".concat(a?"is-visible":""),onClick:function(){return r(null)},children:(0,t.jsx)("i",{className:"fa fa-arrow-left"})})]})}}}]);
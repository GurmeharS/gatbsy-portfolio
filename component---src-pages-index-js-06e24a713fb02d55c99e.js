(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0vJV":function(n,e,t){"use strict";t.r(e),t.d(e,"Nothing",(function(){return a})),t.d(e,"toBool",(function(){return i})),t.d(e,"isNothing",(function(){return o})),t.d(e,"isSomething",(function(){return l})),t.d(e,"serialize",(function(){return c})),t.d(e,"deserialize",(function(){return u}));t("DW2E"),t("rE2o"),t("ioFf"),t("a1Th"),t("h7Nl"),t("Btvt");var r,a=((r=function(){return a}).toString=r.toLocaleString=r[Symbol.toPrimitive]=function(){return""},r.valueOf=function(){return!1},new Proxy(Object.freeze(r),{get:function(n,e){return n.hasOwnProperty(e)?n[e]:a}})),i=function(n){return!(!n||!n.valueOf())},o=function(n){return n===a},l=function(n){return!(n===a||null==n)},c=function(n){return JSON.stringify(n,(function(n,e){return e===a?null:e}))},u=function(n){return JSON.parse(n,(function(n,e){return null===e?a:e}))}},"37Ea":function(n,e,t){},NYp9:function(n,e,t){n.exports=t.p+"static/gurmehar_pic-1049a88f9d7ca54a5bdf64258efd25bc.jpg"},QA0p:function(n,e,t){"use strict";t("91GP"),t("f3/d"),e.__esModule=!0,e.default=function(n,e){var t=void 0===e?{}:e,r=t.propTypes,i=t.defaultProps,o=t.allowFallback,l=void 0!==o&&o,c=t.displayName,u=void 0===c?n.name||n.displayName:c,s=function(e,t){return n(e,t)};return Object.assign(a.default.forwardRef||!l?a.default.forwardRef(s):function(n){return s(n,null)},{displayName:u,propTypes:r,defaultProps:i})};var r,a=(r=t("q1tI"))&&r.__esModule?r:{default:r}},RXBc:function(n,e,t){"use strict";t.r(e);var r=t("q1tI"),a=t.n(r),i=t("qhky"),o=t("pc+1"),l=(t("37Ea"),t("vOnD")),c=t("LbRr"),u=(t("Z2Ku"),t("L9s1"),t("wx14")),s=t("zLVn"),d=t("TSYQ"),f=t.n(d),m=(t("f3/d"),t("QA0p"),a.a.createContext({}));m.Consumer,m.Provider;function p(n,e){var t=Object(r.useContext)(m);return n||t[e]||e}var g=a.a.forwardRef((function(n,e){var t=n.bsPrefix,r=n.fluid,i=n.as,o=void 0===i?"div":i,l=n.className,c=Object(s.a)(n,["bsPrefix","fluid","as","className"]),d=p(t,"container"),m="string"==typeof r?"-"+r:"-fluid";return a.a.createElement(o,Object(u.a)({ref:e},c,{className:f()(l,r?""+d+m:d)}))}));g.displayName="Container",g.defaultProps={fluid:!1};var h=g,v=(t("8+KV"),["xl","lg","md","sm","xs"]),b=a.a.forwardRef((function(n,e){var t=n.bsPrefix,r=n.className,i=n.noGutters,o=n.as,l=void 0===o?"div":o,c=Object(s.a)(n,["bsPrefix","className","noGutters","as"]),d=p(t,"row"),m=d+"-cols",g=[];return v.forEach((function(n){var e,t=c[n];delete c[n];var r="xs"!==n?"-"+n:"";null!=(e=null!=t&&"object"==typeof t?t.cols:t)&&g.push(""+m+r+"-"+e)})),a.a.createElement(l,Object(u.a)({ref:e},c,{className:f.a.apply(void 0,[r,d,i&&"no-gutters"].concat(g))}))}));b.displayName="Row",b.defaultProps={noGutters:!1};var x=b,w=["xl","lg","md","sm","xs"],y=a.a.forwardRef((function(n,e){var t=n.bsPrefix,r=n.className,i=n.as,o=void 0===i?"div":i,l=Object(s.a)(n,["bsPrefix","className","as"]),c=p(t,"col"),d=[],m=[];return w.forEach((function(n){var e,t,r,a=l[n];if(delete l[n],null!=a&&"object"==typeof a){var i=a.span;e=void 0===i||i,t=a.offset,r=a.order}else e=a;var o="xs"!==n?"-"+n:"";null!=e&&d.push(!0===e?""+c+o:""+c+o+"-"+e),null!=r&&m.push("order"+o+"-"+r),null!=t&&m.push("offset"+o+"-"+t)})),d.length||d.push(c),a.a.createElement(o,Object(u.a)({},l,{ref:e,className:f.a.apply(void 0,[r].concat(d,m))}))}));y.displayName="Col";var E=y,j=t("i8R+"),O=a.a.createContext({}),N=function(n){var e,t=n.children,r=void 0!==j.window?j.window.innerWidth:768,i=void 0!==j.window?j.window.innerHeight:1024,o=a.a.useState(r),l=o[0],c=o[1],u=a.a.useState(i),s=u[0],d=u[1];return void 0!==j.window&&(e=function(){r=void 0!==j.window?j.window.innerWidth:768,i=void 0!==j.window?j.window.innerHeight:1024,c(r),d(i)}),a.a.useEffect((function(){return j.window.addEventListener("resize",e),function(){return j.window.removeEventListener("resize",e)}}),[]),a.a.createElement(O.Provider,{value:{width:l,height:s}},t)},I=t("z/o8"),M=t("0o7I");function L(){var n=P(["\n/* background-color: #f1f1f1; */\nwidth: 40px;\n/* margin-left: 5px; */\nmargin-top: 3px;\ntext-align: center;\nline-height: 4vh;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nmax-height: 6vh;\n\n\n@media "," {\n  width: auto;\n  text-align: left;\n  line-height: 50px;\n  margin: 0;\n  margin-top: 1vh;\n  margin-left: 1rem;\n}\n"]);return L=function(){return n},n}function z(){var n=P(["\nfont-size: 40px;\ncolor: black;\nz-index: 1;\n@media "," {\n  /* font-size: 20px; */\n}\n"]);return z=function(){return n},n}function S(){var n=P(["\n/* background-color: #f1f1f1; */\nwidth: 40px;\n/* margin: 5px; */\ntext-align: center;\nline-height: 4vh;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nmax-height: 6vh;\n\n@media "," {\n  width: auto;\n  text-align: left;\n  line-height: 30px;\n  height: auto;\n  margin: 0;\n  margin-top: 1vh;\n  margin-left: 1rem;\n}\n"]);return S=function(){return n},n}function k(){var n=P(['\nfont-size: 50px;\ncolor: white;\nfont-family: "BalsamiqSans-BoldItalic";\nz-index: 1;\n@media '," {\n  /* font-size: 25px; */\n}\n"]);return k=function(){return n},n}function C(){var n=P(["\ndisplay: flex;\nflex-wrap: nowrap;\n/* flex-direction: column; */\nwidth: 95vw;\n/* position: fixed; */\n/* top: 0; right: 0; bottom: 0; left: 0; */\nmargin-top: 4vh;\nmargin-bottom: 10vh;\njustify-content: center;\nalign-items: center;\nmin-height: 95vh;\n"]);return C=function(){return n},n}function P(n,e){return e||(e=n.slice(0)),n.raw=e,n}var T=M.c,R=M.b,D=M.a,A=l.a.div(C()),B=l.a.h1(k(),D.mobileXL),G=l.a.div(S(),D.mobileXL),X=l.a.p(z(),D.mobileXL),Y=l.a.div(L(),D.mobileXL),J=function(n){var e=n.nameGrid[0].length;console.log("Row Length",e);var t=function(n){var e=Object(r.useRef)(null),t=Object(r.useState)(!1),a=t[0],i=t[1];return Object(r.useEffect)((function(){var t=new IntersectionObserver((function(n){var e=n[0];console.log(e.isIntersecting),i(e.isIntersecting)}),n),r=null;return e.current&&(t.observe(e.current),r=e.current),function(){r&&t.unobserve(r)}}),[e,n]),[e,a]}({root:null,rootMargin:"0px",threshold:.3}),i=t[0],l=t[1];return i.current&&(l?(console.log("title IN"),I.b.to(".secondaryRows",1.4,{opacity:1,x:0,ease:o.c.easeOut}),I.b.to(".mainRow",1.4,{opacity:1,x:0,ease:o.c.easeOut})):(console.log("title OUT"),I.b.to(".secondaryRows",1.4,{opacity:.3,x:-100,ease:o.c.easeOut}),I.b.to(".mainRow",1.4,{opacity:.3,x:100,ease:o.c.easeOut}))),a.a.createElement("div",{ref:i},a.a.createElement(A,null,a.a.createElement(h,{fluid:!0},n.nameGrid.map((function(n,t){return"G"===n[0]||n[0].includes("gurm")?a.a.createElement(x,{xs:!0,sm:!0,md:!0,lg:!0,xl:e,style:{display:"flex",minWidth:"95vw",justifyContent:"space-between",maxHeight:"95vh"},key:t,className:"mainRow"},n.map((function(n,e){return a.a.createElement(E,{key:e},a.a.createElement(G,null,a.a.createElement(B,null,n)))}))):a.a.createElement(x,{xs:!0,sm:!0,md:!0,lg:!0,xl:e,style:{display:"flex",minWidth:"95vw",justifyContent:"space-between",maxHeight:"95vh"},key:t,className:"secondaryRows"},n.map((function(n,e){return a.a.createElement(E,{key:e},a.a.createElement(Y,null,a.a.createElement(X,null,n)))})))})))))},U=function(){var n,e={width:(n=a.a.useContext(O)).width,height:n.height}.width;return"undefined"!=typeof window&&(console.log(e),e<650&&console.log("Should be mobile")),e<650?a.a.createElement(J,{nameGrid:R}):a.a.createElement(J,{nameGrid:T})},H=function(){return a.a.createElement(N,null,a.a.createElement(U,null))},F=t("NYp9"),V=t.n(F);function W(){var n=tn(["\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    @media "," {\n        flex-direction: column;\n        height: auto;\n    }\n"]);return W=function(){return n},n}function Z(){var n=tn(["\n    background-color: #226666;\n    margin: 20px;\n    min-height: 50vh;\n    width: 70vw;\n    border-radius: 15px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    @media "," {\n        flex-direction: column;\n    }\n"]);return Z=function(){return n},n}function Q(){var n=tn(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 3px solid #FFC0CB;\n    max-width: 50%;\n    /* overflow: hidden; */\n    flex-wrap: wrap;\n    margin: 5vh;\n    /* margin-left: auto; */\n    border-radius: 15px;\n    flex-direction: column;\n    @media "," {\n        max-width: 90%;\n        margin-left: 5vh;\n    }\n"]);return Q=function(){return n},n}function q(){var n=tn(['\n    font-family: "BalsamiqSans-BoldItalic";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 10px;\n    margin-bottom: 1rem;\n    color: white;\n    font-size: 30px;\n    @media '," {\n        font-size: 20px;\n    }\n"]);return q=function(){return n},n}function _(){var n=tn(["\n    margin: 10px;\n    margin-top: 0;\n    font-size: 20px;\n    color: white;\n    @media "," {\n        font-size: 15px;\n    }\n"]);return _=function(){return n},n}function K(){var n=tn(["\n    background: #FFC0CB;\n    border-radius: 15px;\n    padding: 10px;\n    list-style-position: inside;\n    margin-left: auto;\n    margin: 10px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n"]);return K=function(){return n},n}function $(){var n=tn(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    max-width: 50%;\n    margin: 5vh;\n    margin-left: 10vh;\n    /* overflow: hidden; */\n    border-radius: 20px;\n    @media "," {\n        margin-bottom: auto;\n        width: 40vw;\n        height: 40vw;\n        margin-left: 5vh;\n    }\n    \n    @media "," {\n        max-width: 90%;\n    }\n"]);return $=function(){return n},n}function nn(){var n=tn(["\n    width: 15vw;\n    height: 15vw;\n    background: blueviolet;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 25px;\n    transform: rotate(45deg);\n    overflow: hidden;\n    position: relative;\n    border-radius: 15px;\n    border: 3px solid #FFC0CB;\n\n    @media "," {\n        width: 25vw;\n        height: 25vw;\n    }\n\n    @media "," {\n        /* width: 40vw;\n        height: 40vw; */\n    }\n"]);return nn=function(){return n},n}function en(){var n=tn(["\n    max-width: 150%;\n    width: 150%;\n    /* height: 150%; */\n    border-radius: 15px;\n    margin: 0;\n    transform: rotate(-45deg);\n"]);return en=function(){return n},n}function tn(n,e){return e||(e=n.slice(0)),n.raw=e,n}var rn="undefined"!=typeof window?t("EVdn"):null,an=(rn&&rn.$,l.a.img(en())),on=l.a.div(nn(),M.a.laptop,M.a.mobileXL),ln=l.a.div($(),M.a.laptop,M.a.mobileXL),cn=l.a.ul(K()),un=l.a.p(_(),M.a.mobileXL),sn=l.a.div(q(),M.a.mobileXL),dn=l.a.div(Q(),M.a.laptop),fn=l.a.div(Z(),M.a.laptop),mn=l.a.div(W(),M.a.laptop),pn=function(){var n=function(n){var e=Object(r.useRef)(null),t=Object(r.useState)(!1),a=t[0],i=t[1];return Object(r.useEffect)((function(){var t=new IntersectionObserver((function(n){var e=n[0];console.log(e.isIntersecting),i(e.isIntersecting)}),n),r=null;return e.current&&(t.observe(e.current),r=e.current),function(){r&&t.unobserve(r)}}),[e,n]),[e,a]}({root:null,rootMargin:"0px",threshold:.3}),e=n[0],t=n[1];return e.current&&(t?(console.log("About in"),I.b.to(".about",1,{rotation:0,x:0,opacity:1,ease:o.b.easeOut,stagger:{amount:.1}}),I.b.to(".aboutChild",1,{x:0,opacity:1,ease:o.b.easeOut,stagger:{amount:.1}})):(console.log("About out"),I.b.to(".about",1,{rotation:10,x:100,opacity:0,ease:o.b.easeOut}),I.b.to(".aboutChild",1,{x:100,opacity:0,ease:o.b.easeOut}))),a.a.createElement(mn,null,a.a.createElement(fn,{ref:e,className:"about"},a.a.createElement(ln,{className:"aboutChild"},a.a.createElement(on,null,a.a.createElement(an,{src:V.a}))),a.a.createElement(dn,{className:"aboutChild"},a.a.createElement(sn,null,"Who Am I?"),a.a.createElement("center",null,a.a.createElement(un,null,"I'm Gurmehar Sandhu.",a.a.createElement("br",null),"Welcome to my website/portfolio.",a.a.createElement("br",null),"I'm not a fan of long paragraphs, so here are some quick facts about me:")),a.a.createElement(cn,null,a.a.createElement("li",{style:{color:"black"}},"I just finished my 3rd Year of Computer Engineering at the University of Toronto"),a.a.createElement("li",{style:{color:"black"}},"I'm currently doing a PEY Co-op as an ",a.a.createElement("a",{style:{color:"white"},href:"https://landing.google.com/sre/",target:"_blank"},a.a.createElement("u",null,"SRE"))," at IBM Canada."),a.a.createElement("li",{style:{color:"black"}},"I enjoy basketball (and just about any other sport), gaming, and desigining/developing software"),a.a.createElement("li",{style:{color:"black"}},"LeBron James is the GOAT ")),a.a.createElement("center",null,a.a.createElement(un,null,"Sorry, had to slide that last one in there.",a.a.createElement("br",null),"Feel free to reach out and yell at me.")))))},gn=t("nOaX");function hn(){var n=Nn(["\n    float: left;\n    margin: 20px;\n    margin-bottom: 30px;\n    margin-top: 0;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-width: 20%;\n    height: auto;\n    @media "," {\n        min-width: 40%;\n    }\n    @media "," {\n        min-height: 300px;\n        \n    }\n    @media "," {\n        height: 200px;\n    }\n"]);return hn=function(){return n},n}function vn(){var n=Nn(["\n    /* min-height: 100%; */\n    min-width: 60vw;\n    border-radius: 15px;\n    /* margin: 20px;\n    margin-bottom: 30px;\n    margin-top: 0; */\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    background: #D7DAE0;\n    transition: 0.3s;\n    cursor: pointer;\n    height: 350px;\n    backface-visibility: hidden;\n    overflow: hidden;\n    padding: 1rem;\n\n    @media "," {\n        min-height: 350px;\n        height: auto;\n    }\n\n    /* Change this because of flex direction change */\n    @media "," {\n        min-height: 300px;\n    }\n    @media "," {\n        min-height: 300px;\n    }\n"]);return vn=function(){return n},n}function bn(){var n=Nn(["\n    background: #C4C4C4;\n    border-radius: 15px;\n    text-align: left;\n    margin: 1rem;\n    padding: 1rem;\n"]);return bn=function(){return n},n}function xn(){var n=Nn(["\n    text-align: right;\n    .h2 {\n        color: #1059A3;\n    }\n    .h3 {\n        color: #131111;\n    }\n"]);return xn=function(){return n},n}function wn(){var n=Nn(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-direction: row;\n    @media "," {\n        flex-direction: column;\n    }\n"]);return wn=function(){return n},n}function yn(){var n=Nn(["\n    width: 100%;\n    border-radius: 15px;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    background: #D7DAE0;\n    transition: 0.3s;\n    cursor: pointer;\n    height: 350px;\n    backface-visibility: hidden;\n    @media "," {\n        height: 300px;\n    }\n    @media "," {\n        height: 200px;\n    }\n"]);return yn=function(){return n},n}function En(){var n=Nn(["\n    height: 200px;\n    width: 60%;\n    background: #373636;\n    margin: 10px;\n    margin-top: 20px;\n    background-size: cover;\n    background-position: center;\n    border-radius: 5px;\n    @media "," {\n        margin-top: 30px;\n    }\n    @media "," {\n        height: 150px;\n        width: 60%;\n        margin-bottom: 0;\n    }\n    @media "," {\n        height: 100px;\n    }\n"]);return En=function(){return n},n}function jn(){var n=Nn(["\n    height: 40px;\n    width: 40%;\n    margin-bottom: 20px;\n    margin-top: 30px;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n"]);return jn=function(){return n},n}function On(){var n=Nn(["\n    position: absolute;\n    top: 10px;\n    height: 10px;\n    width: 50px;\n    background: #373636;\n    border-radius: 10px;\n    @media "," {\n        height: 7px;\n        width: 30px;\n    }\n"]);return On=function(){return n},n}function Nn(n,e){return e||(e=n.slice(0)),n.raw=e,n}var In=l.a.div(On(),M.a.laptop),Mn=l.a.div(jn()),Ln=l.a.div(En(),M.a.laptop,M.a.tablet,M.a.mobileXL),zn=l.a.div(yn(),M.a.tablet,M.a.mobileXL),Sn=l.a.div(wn(),M.a.tablet),kn=l.a.div(xn()),Cn=l.a.div(bn()),Pn=l.a.div(vn(),M.a.laptop,M.a.tablet,M.a.mobileXL),Tn=l.a.div(hn(),M.a.laptop,M.a.tablet,M.a.mobileXL),Rn=function(n){var e=Object(r.useState)(!1),t=(e[0],e[1],Object(r.useRef)(null)),i=Object(r.useRef)(null),l=Object(r.useRef)(null);gn.a.defaultTransformPerspective=1e3,I.a.set(l.current,{rotationY:-180});var c=new o.f({paused:!0}),u=(new o.f({paused:!0}),new o.f({paused:!0}));return i.current&&l.current&&(c.to(i.current,1,{rotationY:180}).to(l.current,1,{rotationY:0},0).to(t.current,.5,{z:50},0).to(t.current,.5,{z:0},.5),u.to(i.current,1,{rotationY:180}).to(".badgeHolder",1,{scaleY:.5},0).to(".experience",1,{scaleY:1.5},0).to(l.current,1,{rotationY:0},0).to(t.current,.5,{z:50},0).to(t.current,.5,{z:0},.5)),a.a.createElement(Tn,{className:"cardCont",onMouseEnter:function(){console.log("In over"),"undefined"!=typeof window&&window.matchMedia("(max-width: 768px)").matches?u.play():c.play()},onMouseLeave:function(){"undefined"!=typeof window&&window.matchMedia("(max-width: 768px)").matches?u.reverse():c.reverse()},ref:t},a.a.createElement(zn,{className:"front",ref:i},a.a.createElement(In,null),a.a.createElement(Ln,{style:{backgroundImage:"url("+n.badgePic+")"}}),a.a.createElement(Mn,{style:{backgroundImage:"url("+n.logoPic+")"}})),a.a.createElement(Pn,{className:"back",ref:l},a.a.createElement(In,null),a.a.createElement(Mn,{style:{backgroundImage:"url("+n.logoPic+")"}}),a.a.createElement(Sn,null,a.a.createElement(kn,null,a.a.createElement("h2",{style:{fontSize:36,color:"#1059A3"}},"Site Reliability Engineer"),a.a.createElement("br",null),a.a.createElement("h3",{style:{fontSize:18}},"Summer 2019,"),a.a.createElement("h3",{style:{fontSize:18}},"May 2020 - ",a.a.createElement("b",null,"Now"))),a.a.createElement(Cn,null,a.a.createElement("ul",null,a.a.createElement("li",null,"A DevOps role with a focus on the ",a.a.createElement("b",null,"Dev")),a.a.createElement("li",null,"Some of my favourite projects that I've worked on:",a.a.createElement("ul",null,a.a.createElement("li",null,"REST APIs using IBM Cloud and Postgres"),a.a.createElement("li",null,"Slackbot (as a front end for the aforementioned APIs)"))))))))},Dn=t("gbfy"),An=t.n(Dn);function Bn(){var n=Jn(["\n    min-height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    @media "," {\n        /* flex-direction: column; */\n        height: auto;\n    }\n"]);return Bn=function(){return n},n}function Gn(){var n=Jn(["\n    background-color: #226666;\n    margin: 20px;\n    /* min-height: 70vh; */\n    min-width: 70vw;\n    border-radius: 15px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]);return Gn=function(){return n},n}function Xn(){var n=Jn(['\n    font-family: "BalsamiqSans-BoldItalic";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 5%;\n    margin-bottom: 5%;\n    color: white;\n    font-size: 30px;\n    flex-shrink: 2;\n    @media '," {\n        font-size: 20px;\n    }\n"]);return Xn=function(){return n},n}function Yn(){var n=Jn(["\n    min-height: 50vh;\n    min-width: 75%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    @media "," {\n        flex-direction: column;\n    }\n"]);return Yn=function(){return n},n}function Jn(n,e){return e||(e=n.slice(0)),n.raw=e,n}var Un=l.a.div(Yn(),M.a.laptop),Hn=l.a.div(Xn(),M.a.mobileXL),Fn=l.a.div(Gn()),Vn=l.a.div(Bn(),M.a.laptop),Wn=function(){var n=function(n){var e=Object(r.useRef)(null),t=Object(r.useState)(!1),a=t[0],i=t[1];return Object(r.useEffect)((function(){var t=new IntersectionObserver((function(n){var e=n[0];console.log(e.isIntersecting),i(e.isIntersecting)}),n),r=null;return e.current&&(t.observe(e.current),r=e.current),function(){r&&t.unobserve(r)}}),[e,n]),[e,a]}({root:null,rootMargin:"0px",threshold:.3}),e=n[0],t=n[1];return e.current&&(t?(console.log("experience in"),I.b.to(".experience",1,{rotation:0,x:0,opacity:1,ease:o.b.easeOut,stagger:{amount:.1}}),I.b.to(".experienceChild",1,{x:0,opacity:1,ease:o.b.easeOut,stagger:{amount:.1}})):(console.log("experience out"),I.b.to(".experience",1,{rotation:-10,x:-100,opacity:0,ease:o.b.easeOut}),I.b.to(".experienceChild",1,{x:-100,opacity:0,ease:o.b.easeOut}))),a.a.createElement(Vn,null,a.a.createElement(Fn,{className:"experience",ref:e},a.a.createElement(Hn,{className:"experienceChild"},"My Badges"),a.a.createElement(Un,{className:"badgeHolder experienceChild"},a.a.createElement(Rn,{className:"badge",badgePic:V.a,logoPic:An.a,comp:"ibm"}))))};function Zn(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n@media "," {\n  max-width: 305px;\n}\n@media "," {\n  max-width: 350px;\n}\n@media "," {\n  max-width: 635;\n}\n@media "," {\n  max-width: 753px;\n}\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n\n@media "," {\n  justify-content: left;\n}\n/* position: absolute;\ntop: 0; right: 0; bottom: 0; left: 0; */\n"]);return Zn=function(){return n},n}var Qn=l.a.div(Zn(),M.a.mobileS,M.a.mobileM,M.a.mobileXL,M.a.tablet,M.a.mobileXL);e.default=function(){var n=Object(r.useRef)(null),e=new o.e,t=function(n){var e=Object(r.useRef)(null),t=Object(r.useState)(!1),a=t[0],i=t[1];return Object(r.useEffect)((function(){var t=new IntersectionObserver((function(n){var e=n[0];console.log(e.isIntersecting),i(e.isIntersecting)}),n),r=null;return e.current&&(t.observe(e.current),r=e.current),function(){r&&t.unobserve(r)}}),[e,n]),[e,a]}({root:null,rootMargin:"0px",threshold:.3}),l=t[0];t[1];return Object(r.useEffect)((function(){e.to(n,0,{css:{visibility:"visible"}}),e.to(".secondaryRows",.01,{opacity:.3,x:-1e4}),e.to(".mainRow",.01,{opacity:.3,x:1e4})}),[]),a.a.createElement("div",{className:"app",ref:function(e){return n=e}},a.a.createElement(i.a,null,a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("title",null,"GURMEHAR SANDHU")),a.a.createElement("div",{ref:l,style:{width:"100%",overflowX:"hidden"}},a.a.createElement(Qn,null,a.a.createElement(H,null))),a.a.createElement(c.a,null),a.a.createElement("div",{style:{width:"100%",overflowX:"hidden"}},a.a.createElement(N,null,a.a.createElement(pn,null)),a.a.createElement(N,null,a.a.createElement(Wn,null))))}},TSYQ:function(n,e,t){var r;t("LK8F"),function(){"use strict";var t={}.hasOwnProperty;function a(){for(var n=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)n.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&n.push(o)}else if("object"===i)for(var l in r)t.call(r,l)&&r[l]&&n.push(l)}}return n.join(" ")}n.exports?(a.default=a,n.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(n.exports=r)}()},gbfy:function(n,e){n.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI0MDAiPjxjbGlwUGF0aCBpZD0iQSI+PHBhdGggZD0iTTAtMXY4M2g1NS45djIzNkgxLjV2ODJoMTk1di04MmgtNTUuOVY4MkgxOTVWLTF6bTU1NCAxdjgyaDU1Ljl2MjM2aC01NC40djgyaDEzOVYxNzJsODIuNyAyMjggMS42OC4wNCA4MS4yLTIyOHYyMjhoMTQwdi04MmgtNTUuOXYtMjM2aDU0LjR2LTgyaC0xNTZsLTY0LjcgMTgzLTY1LjUtMTgzeiIvPjxwYXRoIGlkPSJCIiBkPSJNMjIyIDB2ODJoNTUuOXYxMzBoMjE1di0yNC45czE4LTE0IDIzLjgtMjcuNGwxMS41LTI1LjlzNS4zNS0xNC41IDUuMzUtMjcuNGwtMi4zLTI1LjlzLTMuNjItMjEuMS05LjkyLTI3LjNsLTIyLjMtMjUuOVM0NzAuNzMtLjEgNDMzLjEzLS4xem0xNDAgODJoODJ2NzZoLTgyeiIvPjx1c2UgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA0MDApIiB4bGluazpocmVmPSIjQiIvPjwvY2xpcFBhdGg+PHBhdGggZD0iTTAgMTMuN2gxMDMwdjUzLjJIMG0wIDUzLjJoOTc1djUzLjJIMHY1My4yaDk3NXY1My4ySDBtMCA1My4yaDEwMzB2NTMuMkgwIiBjbGlwLXBhdGg9InVybCgjQSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmNzBjMSIgc3Ryb2tlLXdpZHRoPSIyNy40Ii8+PC9zdmc+"},"i8R+":function(n,e,t){"use strict";var r=t("0vJV"),a=r.Nothing,i=r.isNothing,o="undefined"!=typeof window?window:a,l="undefined"!=typeof document?document:a;n.exports.window=o,n.exports.document=l,n.exports.exists=function(n){return!i(n)}},wx14:function(n,e,t){"use strict";function r(){return(r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}t.d(e,"a",(function(){return r}))},zLVn:function(n,e,t){"use strict";function r(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}t.d(e,"a",(function(){return r}))}}]);
//# sourceMappingURL=component---src-pages-index-js-06e24a713fb02d55c99e.js.map
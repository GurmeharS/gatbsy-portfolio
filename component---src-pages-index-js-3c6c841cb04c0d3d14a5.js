(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0vJV":function(e,n,t){"use strict";t.r(n),t.d(n,"Nothing",(function(){return r})),t.d(n,"toBool",(function(){return i})),t.d(n,"isNothing",(function(){return l})),t.d(n,"isSomething",(function(){return o})),t.d(n,"serialize",(function(){return c})),t.d(n,"deserialize",(function(){return u}));t("DW2E"),t("rE2o"),t("ioFf"),t("a1Th"),t("h7Nl"),t("Btvt");var a,r=((a=function(){return r}).toString=a.toLocaleString=a[Symbol.toPrimitive]=function(){return""},a.valueOf=function(){return!1},new Proxy(Object.freeze(a),{get:function(e,n){return e.hasOwnProperty(n)?e[n]:r}})),i=function(e){return!(!e||!e.valueOf())},l=function(e){return e===r},o=function(e){return!(e===r||null==e)},c=function(e){return JSON.stringify(e,(function(e,n){return n===r?null:n}))},u=function(e){return JSON.parse(e,(function(e,n){return null===n?r:n}))}},"37Ea":function(e,n,t){},NYp9:function(e,n,t){e.exports=t.p+"static/gurmehar_pic-1049a88f9d7ca54a5bdf64258efd25bc.jpg"},QA0p:function(e,n,t){"use strict";t("91GP"),t("f3/d"),n.__esModule=!0,n.default=function(e,n){var t=void 0===n?{}:n,a=t.propTypes,i=t.defaultProps,l=t.allowFallback,o=void 0!==l&&l,c=t.displayName,u=void 0===c?e.name||e.displayName:c,s=function(n,t){return e(n,t)};return Object.assign(r.default.forwardRef||!o?r.default.forwardRef(s):function(e){return s(e,null)},{displayName:u,propTypes:a,defaultProps:i})};var a,r=(a=t("q1tI"))&&a.__esModule?a:{default:a}},RXBc:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),i=t("qhky"),l=t("pc+1"),o=(t("37Ea"),t("vOnD")),c=t("LbRr"),u=t("wx14"),s=t("zLVn"),m=t("TSYQ"),d=t.n(m),f=(t("f3/d"),t("QA0p"),r.a.createContext({}));f.Consumer,f.Provider;function h(e,n){var t=Object(a.useContext)(f);return e||t[n]||n}var p=r.a.forwardRef((function(e,n){var t=e.bsPrefix,a=e.fluid,i=e.as,l=void 0===i?"div":i,o=e.className,c=Object(s.a)(e,["bsPrefix","fluid","as","className"]),m=h(t,"container"),f="string"==typeof a?"-"+a:"-fluid";return r.a.createElement(l,Object(u.a)({ref:n},c,{className:d()(o,a?""+m+f:m)}))}));p.displayName="Container",p.defaultProps={fluid:!1};var g=p,x=(t("8+KV"),["xl","lg","md","sm","xs"]),y=r.a.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,i=e.noGutters,l=e.as,o=void 0===l?"div":l,c=Object(s.a)(e,["bsPrefix","className","noGutters","as"]),m=h(t,"row"),f=m+"-cols",p=[];return x.forEach((function(e){var n,t=c[e];delete c[e];var a="xs"!==e?"-"+e:"";null!=(n=null!=t&&"object"==typeof t?t.cols:t)&&p.push(""+f+a+"-"+n)})),r.a.createElement(o,Object(u.a)({ref:n},c,{className:d.a.apply(void 0,[a,m,i&&"no-gutters"].concat(p))}))}));y.displayName="Row",y.defaultProps={noGutters:!1};var v=y,w=["xl","lg","md","sm","xs"],b=r.a.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,i=e.as,l=void 0===i?"div":i,o=Object(s.a)(e,["bsPrefix","className","as"]),c=h(t,"col"),m=[],f=[];return w.forEach((function(e){var n,t,a,r=o[e];if(delete o[e],null!=r&&"object"==typeof r){var i=r.span;n=void 0===i||i,t=r.offset,a=r.order}else n=r;var l="xs"!==e?"-"+e:"";null!=n&&m.push(!0===n?""+c+l:""+c+l+"-"+n),null!=a&&f.push("order"+l+"-"+a),null!=t&&f.push("offset"+l+"-"+t)})),m.length||m.push(c),r.a.createElement(l,Object(u.a)({},o,{ref:n,className:d.a.apply(void 0,[a].concat(m,f))}))}));b.displayName="Col";var E=b,j=t("i8R+"),k=r.a.createContext({}),N=function(e){var n,t=e.children,a=void 0!==j.window?j.window.innerWidth:768,i=void 0!==j.window?j.window.innerHeight:1024,l=r.a.useState(a),o=l[0],c=l[1],u=r.a.useState(i),s=u[0],m=u[1];return void 0!==j.window&&(n=function(){a=void 0!==j.window?j.window.innerWidth:768,i=void 0!==j.window?j.window.innerHeight:1024,c(a),m(i)}),r.a.useEffect((function(){return j.window.addEventListener("resize",n),function(){return j.window.removeEventListener("resize",n)}}),[]),r.a.createElement(k.Provider,{value:{width:o,height:s}},t)},O=t("z/o8"),M=t("0o7I");function I(){var e=S(["\nwidth: 40px;\nmargin-top: 3px;\ntext-align: center;\nline-height: 4vh;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nmax-height: 6vh;\n\n@media "," {\n  max-height: auto;\n  width: auto;\n  text-align: left;\n  line-height: 50px;\n  margin: 0;\n  margin-top: 1vh;\n  margin-left: 1rem;\n}\n"]);return I=function(){return e},e}function C(){var e=S(["\nfont-size: 40px;\ncolor: black;\nz-index: 1;\n@media "," {\n  /* font-size: 20px; */\n}\n"]);return C=function(){return e},e}function R(){var e=S(["\nwidth: 40px;\ntext-align: center;\nline-height: 4vh;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nmax-height: 6vh;\n\n@media "," {\n  max-height: auto;\n  width: auto;\n  text-align: left;\n  line-height: 30px;\n  height: auto;\n  margin: 0;\n  margin-top: 1vh;\n  margin-left: 1rem;\n}\n"]);return R=function(){return e},e}function L(){var e=S(['\nfont-size: 50px;\ncolor: white;\nfont-family: "BalsamiqSans-BoldItalic";\nz-index: 1;\n@media '," {\n  /* font-size: 25px; */\n}\n"]);return L=function(){return e},e}function z(){var e=S(["\ndisplay: flex;\nflex-wrap: nowrap;\nwidth: 95vw;\nmargin-top: 4vh;\nmargin-bottom: 10vh;\njustify-content: center;\nalign-items: center;\nmin-height: 95vh;\n"]);return z=function(){return e},e}function S(e,n){return n||(n=e.slice(0)),e.raw=n,e}var P=M.c,T=M.b,H=M.a,D=o.a.div(z()),W=o.a.h1(L(),H.mobileXL),A=o.a.div(R(),H.mobileXL),B=o.a.p(C(),H.mobileXL),X=o.a.div(I(),H.mobileXL),G=function(e){var n=function(e){var n=Object(a.useRef)(null),t=Object(a.useState)(!1),r=t[0],i=t[1];return Object(a.useEffect)((function(){var t=new IntersectionObserver((function(e){var n=e[0];console.log(n.isIntersecting),i(n.isIntersecting)}),e),a=null;return n.current&&(t.observe(n.current),a=n.current),function(){a&&t.unobserve(a)}}),[n,e]),[n,r]}({root:null,rootMargin:"0px",threshold:.3}),t=n[0],i=n[1];return t.current&&(i?(console.log("title IN"),O.b.to(".secondaryRows",1.4,{opacity:1,x:0,ease:l.c.easeOut}),O.b.to(".mainRow",1.4,{opacity:1,x:0,ease:l.c.easeOut})):(console.log("title OUT"),O.b.to(".secondaryRows",1.4,{opacity:.3,x:-100,ease:l.c.easeOut}),O.b.to(".mainRow",1.4,{opacity:.3,x:100,ease:l.c.easeOut}))),r.a.createElement("div",{ref:t},r.a.createElement(D,null,e.cont))},Y=function(){var e,n={width:(e=r.a.useContext(k)).width,height:e.height}.width;if("undefined"!=typeof window){console.log(n),n<650&&console.log("Should be mobile");var t=P[0].length;console.log("Row Length",t);var a=r.a.createElement(g,{fluid:!0},r.a.createElement(v,{xs:!0,sm:!0,md:!0,lg:!0,xl:t,style:{display:"flex",minWidth:"95vw",justifyContent:"space-between",maxHeight:"95vh"},key:0,className:"secondaryRows"},P[0].map((function(e,n){return r.a.createElement(E,{key:n},r.a.createElement(X,null,r.a.createElement(B,null,e)))}))),r.a.createElement(v,{xs:!0,sm:!0,md:!0,lg:!0,xl:t,style:{display:"flex",minWidth:"95vw",justifyContent:"space-between",maxHeight:"95vh"},key:1,className:"secondaryRows"},P[1].map((function(e,n){return r.a.createElement(E,{key:n},r.a.createElement(X,null,r.a.createElement(B,null,e)))}))),r.a.createElement(v,{xs:!0,sm:!0,md:!0,lg:!0,xl:t,style:{display:"flex",minWidth:"95vw",justifyContent:"space-between",maxHeight:"95vh"},key:2,className:"secondaryRows"},P[2].map((function(e,n){return r.a.createElement(E,{key:n},r.a.createElement(X,null,r.a.createElement(B,null,e)))}))),r.a.createElement(v,{xs:!0,sm:!0,md:!0,lg:!0,xl:t,style:{display:"flex",minWidth:"95vw",justifyContent:"space-between",maxHeight:"95vh"},key:3,className:"secondaryRows"},P[3].map((function(e,n){return r.a.createElement(E,{key:n},r.a.createElement(X,null,r.a.createElement(B,null,e)))}))),r.a.createElement(v,{xs:!0,sm:!0,md:!0,lg:!0,xl:t,style:{display:"flex",minWidth:"95vw",justifyContent:"space-between",maxHeight:"95vh"},key:4,className:"secondaryRows"},P[4].map((function(e,n){return r.a.createElement(E,{key:n},r.a.createElement(X,null,r.a.createElement(B,null,e)))}))),r.a.createElement(v,{xs:!0,sm:!0,md:!0,lg:!0,xl:t,style:{display:"flex",minWidth:"95vw",justifyContent:"space-between",maxHeight:"95vh"},key:5,className:"secondaryRows"},P[5].map((function(e,n){return r.a.createElement(E,{key:n},r.a.createElement(X,null,r.a.createElement(B,null,e)))}))),r.a.createElement(v,{xs:!0,sm:!0,md:!0,lg:!0,xl:t,style:{display:"flex",minWidth:"95vw",justifyContent:"space-between",maxHeight:"95vh"},key:6,className:"mainRow"},P[6].map((function(e,n){return r.a.createElement(E,{key:n},r.a.createElement(A,null,r.a.createElement(W,null,e)))}))),r.a.createElement(v,{xs:!0,sm:!0,md:!0,lg:!0,xl:t,style:{display:"flex",minWidth:"95vw",justifyContent:"space-between",maxHeight:"95vh"},key:7,className:"secondaryRows"},P[7].map((function(e,n){return r.a.createElement(E,{key:n},r.a.createElement(X,null,r.a.createElement(B,null,e)))}))),r.a.createElement(v,{xs:!0,sm:!0,md:!0,lg:!0,xl:t,style:{display:"flex",minWidth:"95vw",justifyContent:"space-between",maxHeight:"95vh"},key:8,className:"secondaryRows"},P[8].map((function(e,n){return r.a.createElement(E,{key:n},r.a.createElement(X,null,r.a.createElement(B,null,e)))}))),r.a.createElement(v,{xs:!0,sm:!0,md:!0,lg:!0,xl:t,style:{display:"flex",minWidth:"95vw",justifyContent:"space-between",maxHeight:"95vh"},key:9,className:"secondaryRows"},P[9].map((function(e,n){return r.a.createElement(E,{key:n},r.a.createElement(X,null,r.a.createElement(B,null,e)))}))),r.a.createElement(v,{xs:!0,sm:!0,md:!0,lg:!0,xl:t,style:{display:"flex",minWidth:"95vw",justifyContent:"space-between",maxHeight:"95vh"},key:10,className:"secondaryRows"},P[10].map((function(e,n){return r.a.createElement(E,{key:n},r.a.createElement(X,null,r.a.createElement(B,null,e)))}))),r.a.createElement(v,{xs:!0,sm:!0,md:!0,lg:!0,xl:t,style:{display:"flex",minWidth:"95vw",justifyContent:"space-between",maxHeight:"95vh"},key:11,className:"secondaryRows"},P[11].map((function(e,n){return r.a.createElement(E,{key:n},r.a.createElement(X,null,r.a.createElement(B,null,e)))}))),r.a.createElement(v,{xs:!0,sm:!0,md:!0,lg:!0,xl:t,style:{display:"flex",minWidth:"95vw",justifyContent:"space-between",maxHeight:"95vh"},key:12,className:"secondaryRows"},P[12].map((function(e,n){return r.a.createElement(E,{key:n},r.a.createElement(X,null,r.a.createElement(B,null,e)))}))),r.a.createElement(v,{xs:!0,sm:!0,md:!0,lg:!0,xl:t,style:{display:"flex",minWidth:"95vw",justifyContent:"space-between",maxHeight:"95vh"},key:13,className:"secondaryRows"},P[13].map((function(e,n){return r.a.createElement(E,{key:n},r.a.createElement(X,null,r.a.createElement(B,null,e)))}))),r.a.createElement(v,{xs:!0,sm:!0,md:!0,lg:!0,xl:t,style:{display:"flex",minWidth:"95vw",justifyContent:"space-between",maxHeight:"95vh"},key:14,className:"secondaryRows"},P[14].map((function(e,n){return r.a.createElement(E,{key:n},r.a.createElement(X,null,r.a.createElement(B,null,e)))})))),i=r.a.createElement(g,{fluid:!0},r.a.createElement(v,{xs:!0,sm:!0,md:!0,lg:!0,xl:t,style:{display:"flex",minWidth:"95vw",justifyContent:"space-between",maxHeight:"95vh"},key:0,className:"secondaryRows"},T[0].map((function(e,n){return r.a.createElement(E,{key:n},r.a.createElement(X,null,r.a.createElement(B,null,e)))}))),r.a.createElement(v,{xs:!0,sm:!0,md:!0,lg:!0,xl:t,style:{display:"flex",minWidth:"95vw",justifyContent:"space-between",maxHeight:"95vh"},key:1,className:"secondaryRows"},T[1].map((function(e,n){return r.a.createElement(E,{key:n},r.a.createElement(X,null,r.a.createElement(B,null,e)))}))),r.a.createElement(v,{xs:!0,sm:!0,md:!0,lg:!0,xl:t,style:{display:"flex",minWidth:"95vw",justifyContent:"space-between",maxHeight:"95vh"},key:2,className:"mainRow"},T[2].map((function(e,n){return r.a.createElement(E,{key:n},r.a.createElement(A,null,r.a.createElement(W,null,e)))}))),r.a.createElement(v,{xs:!0,sm:!0,md:!0,lg:!0,xl:t,style:{display:"flex",minWidth:"95vw",justifyContent:"space-between",maxHeight:"95vh"},key:3,className:"secondaryRows"},T[3].map((function(e,n){return r.a.createElement(E,{key:n},r.a.createElement(X,null,r.a.createElement(B,null,e)))}))),r.a.createElement(v,{xs:!0,sm:!0,md:!0,lg:!0,xl:t,style:{display:"flex",minWidth:"95vw",justifyContent:"space-between",maxHeight:"95vh"},key:4,className:"secondaryRows"},T[4].map((function(e,n){return r.a.createElement(E,{key:n},r.a.createElement(X,null,r.a.createElement(B,null,e)))}))),r.a.createElement(v,{xs:!0,sm:!0,md:!0,lg:!0,xl:t,style:{display:"flex",minWidth:"95vw",justifyContent:"space-between",maxHeight:"95vh"},key:5,className:"secondaryRows"},T[5].map((function(e,n){return r.a.createElement(E,{key:n},r.a.createElement(X,null,r.a.createElement(B,null,e)))}))),r.a.createElement(v,{xs:!0,sm:!0,md:!0,lg:!0,xl:t,style:{display:"flex",minWidth:"95vw",justifyContent:"space-between",maxHeight:"95vh"},key:6,className:"secondaryRows"},T[6].map((function(e,n){return r.a.createElement(E,{key:n},r.a.createElement(X,null,r.a.createElement(B,null,e)))}))),r.a.createElement(v,{xs:!0,sm:!0,md:!0,lg:!0,xl:t,style:{display:"flex",minWidth:"95vw",justifyContent:"space-between",maxHeight:"95vh"},key:7,className:"secondaryRows"},T[7].map((function(e,n){return r.a.createElement(E,{key:n},r.a.createElement(X,null,r.a.createElement(B,null,e)))}))),r.a.createElement(v,{xs:!0,sm:!0,md:!0,lg:!0,xl:t,style:{display:"flex",minWidth:"95vw",justifyContent:"space-between",maxHeight:"95vh"},key:8,className:"mainRow"},T[8].map((function(e,n){return r.a.createElement(E,{key:n},r.a.createElement(A,null,r.a.createElement(W,null,e)))}))));return n<650?r.a.createElement(G,{cont:i}):r.a.createElement(G,{cont:a})}return r.a.createElement(G,{nameGrid:P})},J=function(){return r.a.createElement(N,null,r.a.createElement(Y,null))},U=t("NYp9"),F=t.n(U);function V(){var e=te(["\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    @media "," {\n        flex-direction: column;\n        height: auto;\n        overflow-y: visible;\n    }\n"]);return V=function(){return e},e}function Z(){var e=te(["\n    background-color: #226666;\n    margin: 20px;\n    min-height: 50vh;\n    width: 70vw;\n    border-radius: 15px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    @media "," {\n        flex-direction: column;\n        overflow-y: visible;\n    }\n"]);return Z=function(){return e},e}function Q(){var e=te(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 3px solid #FFC0CB;\n    max-width: 50%;\n    /* overflow: hidden; */\n    flex-wrap: wrap;\n    margin: 5vh;\n    /* margin-left: auto; */\n    border-radius: 15px;\n    flex-direction: column;\n    @media "," {\n        max-width: 90%;\n        margin-left: 5vh;\n    }\n"]);return Q=function(){return e},e}function q(){var e=te(['\n    font-family: "BalsamiqSans-BoldItalic";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 10px;\n    margin-bottom: 1rem;\n    color: white;\n    font-size: 30px;\n    text-align: center;\n    @media '," {\n        font-size: 20px;\n    }\n"]);return q=function(){return e},e}function _(){var e=te(["\n    margin: 10px;\n    margin-top: 0;\n    font-size: 20px;\n    color: white;\n    @media "," {\n        font-size: 15px;\n    }\n"]);return _=function(){return e},e}function K(){var e=te(["\n    background: #FFC0CB;\n    border-radius: 15px;\n    padding: 10px;\n    list-style-position: inside;\n    margin-left: auto;\n    margin: 10px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n"]);return K=function(){return e},e}function $(){var e=te(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    max-width: 50%;\n    margin: 5vh;\n    margin-left: 10vh;\n    /* overflow: hidden; */\n    border-radius: 20px;\n    @media "," {\n        margin-bottom: auto;\n        width: 40vw;\n        height: 40vw;\n        margin-left: 5vh;\n    }\n    \n    @media "," {\n        max-width: 90%;\n    }\n"]);return $=function(){return e},e}function ee(){var e=te(["\n    width: 15vw;\n    height: 15vw;\n    background: blueviolet;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 25px;\n    transform: rotate(45deg);\n    overflow: hidden;\n    position: relative;\n    border-radius: 15px;\n    border: 3px solid #FFC0CB;\n\n    @media "," {\n        width: 25vw;\n        height: 25vw;\n    }\n\n    @media "," {\n        /* width: 40vw;\n        height: 40vw; */\n    }\n"]);return ee=function(){return e},e}function ne(){var e=te(["\n    max-width: 150%;\n    width: 150%;\n    /* height: 150%; */\n    border-radius: 15px;\n    margin: 0;\n    transform: rotate(-45deg);\n"]);return ne=function(){return e},e}function te(e,n){return n||(n=e.slice(0)),e.raw=n,e}var ae="undefined"!=typeof window?t("EVdn"):null,re=(ae&&ae.$,o.a.img(ne())),ie=o.a.div(ee(),M.a.laptop,M.a.mobileXL),le=o.a.div($(),M.a.laptop,M.a.mobileXL),oe=o.a.ul(K()),ce=o.a.p(_(),M.a.mobileXL),ue=o.a.div(q(),M.a.mobileXL),se=o.a.div(Q(),M.a.laptop),me=o.a.div(Z(),M.a.laptop),de=o.a.div(V(),M.a.laptop),fe=function(){var e=function(e){var n=Object(a.useRef)(null),t=Object(a.useState)(!1),r=t[0],i=t[1];return Object(a.useEffect)((function(){var t=new IntersectionObserver((function(e){var n=e[0];console.log(n.isIntersecting),i(n.isIntersecting)}),e),a=null;return n.current&&(t.observe(n.current),a=n.current),function(){a&&t.unobserve(a)}}),[n,e]),[n,r]}({root:null,rootMargin:"0px",threshold:.3}),n=e[0],t=e[1];return n.current&&(t?(console.log("About in"),O.b.to(".about",1,{rotation:0,x:0,opacity:1,ease:l.b.easeOut,stagger:{amount:.1}}),O.b.to(".aboutChild",1,{x:0,opacity:1,ease:l.b.easeOut,stagger:{amount:.1}})):(console.log("About out"),O.b.to(".about",1,{rotation:10,x:100,opacity:0,ease:l.b.easeOut}),O.b.to(".aboutChild",1,{x:100,opacity:0,ease:l.b.easeOut}))),r.a.createElement(de,null,r.a.createElement(me,{ref:n,className:"about"},r.a.createElement(le,{className:"aboutChild"},r.a.createElement(ie,null,r.a.createElement(re,{src:F.a}))),r.a.createElement(se,{className:"aboutChild"},r.a.createElement(ue,null,"Who Am I?"),r.a.createElement("center",null,r.a.createElement(ce,null,"I'm Gurmehar Sandhu.",r.a.createElement("br",null),"Welcome to my website/portfolio.",r.a.createElement("br",null),"I'm not a fan of long paragraphs, so here are some quick facts about me:")),r.a.createElement(oe,null,r.a.createElement("li",{style:{color:"black"}},"I just finished my 3rd Year of Computer Engineering at the University of Toronto"),r.a.createElement("li",{style:{color:"black"}},"I'm currently doing a PEY Co-op as an ",r.a.createElement("a",{style:{color:"white"},href:"https://landing.google.com/sre/",target:"_blank"},r.a.createElement("u",null,"SRE"))," at IBM Canada."),r.a.createElement("li",{style:{color:"black"}},"I enjoy basketball (and just about any other sport), gaming, and desigining/developing software"),r.a.createElement("li",{style:{color:"black"}},"LeBron James is the GOAT ")),r.a.createElement("center",null,r.a.createElement(ce,null,"Sorry, had to slide that last one in there.",r.a.createElement("br",null),"Feel free to reach out and yell at me.")))))},he=t("nOaX");function pe(){var e=ke(["\n    float: left;\n    margin: 20px;\n    margin-bottom: 30px;\n    margin-top: 0;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-width: 20%;\n    height: auto;\n    @media "," {\n        min-width: 40%;\n    }\n    @media "," {\n        min-height: 300px;\n        min-height: 70vh;\n        /* align-items: space-around; */\n    }\n    @media "," {\n        min-height: 110vh;\n        height: auto;\n    }\n"]);return pe=function(){return e},e}function ge(){var e=ke(["\n    min-width: 60vw;\n    border-radius: 15px;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    background: #D7DAE0;\n    transition: 0.3s;\n    cursor: pointer;\n    height: 350px;\n    backface-visibility: hidden;\n    overflow: hidden;\n    padding: 1rem;\n\n    @media "," {\n        min-height: 350px;\n        height: auto;\n    }\n\n    /* Change this because of flex direction change */\n    /* @media "," {\n        min-height: 300px;\n    } */\n    @media "," {\n        min-height: 300px;\n        width: 65vw;\n        visibility: visible;\n    }\n"]);return ge=function(){return e},e}function xe(){var e=ke(["\n    background: #C4C4C4;\n    border-radius: 15px;\n    text-align: left;\n    margin: 1rem;\n    padding: 1rem;\n"]);return xe=function(){return e},e}function ye(){var e=ke(["\n    text-align: right;\n    .h2 {\n        color: #1059A3;\n    }\n    .h3 {\n        color: #131111;\n    }\n"]);return ye=function(){return e},e}function ve(){var e=ke(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-direction: row;\n    @media "," {\n        flex-direction: column;\n    }\n"]);return ve=function(){return e},e}function we(){var e=ke(["\n    width: 100%;\n    border-radius: 15px;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    background: #D7DAE0;\n    transition: 0.3s;\n    cursor: pointer;\n    height: 350px;\n    backface-visibility: hidden;\n    @media "," {\n        height: 300px;\n    }\n    @media "," {\n        height: 200px;\n        visibility: hidden;\n    }\n"]);return we=function(){return e},e}function be(){var e=ke(["\n    height: 200px;\n    width: 60%;\n    background: #373636;\n    margin: 10px;\n    margin-top: 20px;\n    background-size: cover;\n    background-position: center;\n    border-radius: 5px;\n    @media "," {\n        margin-top: 30px;\n    }\n    @media "," {\n        height: 150px;\n        width: 60%;\n        margin-bottom: 0;\n    }\n    @media "," {\n        height: 100px;\n    }\n"]);return be=function(){return e},e}function Ee(){var e=ke(["\n    height: 40px;\n    width: 40%;\n    margin-bottom: 20px;\n    margin-top: 30px;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n"]);return Ee=function(){return e},e}function je(){var e=ke(["\n    position: absolute;\n    top: 10px;\n    height: 10px;\n    width: 50px;\n    background: #373636;\n    border-radius: 10px;\n    @media "," {\n        height: 7px;\n        width: 30px;\n    }\n"]);return je=function(){return e},e}function ke(e,n){return n||(n=e.slice(0)),e.raw=n,e}var Ne=o.a.div(je(),M.a.laptop),Oe=o.a.div(Ee()),Me=o.a.div(be(),M.a.laptop,M.a.tablet,M.a.mobileXL),Ie=o.a.div(we(),M.a.tablet,M.a.mobileXL),Ce=o.a.div(ve(),M.a.tablet),Re=o.a.div(ye()),Le=o.a.div(xe()),ze=o.a.div(ge(),M.a.laptop,M.a.tablet,M.a.tablet),Se=o.a.div(pe(),M.a.laptop,M.a.tablet,M.a.mobileXL),Pe=function(e){var n=Object(a.useRef)(null),t=Object(a.useRef)(null),i=Object(a.useRef)(null);he.a.defaultTransformPerspective=1e3,"undefined"!=typeof window&&window.matchMedia("(max-width: 768px)").matches||O.a.set(i.current,{rotationY:-180});var o=new l.f({paused:!0});return t.current&&i.current&&o.to(t.current,1,{rotationY:180}).to(i.current,1,{rotationY:0},0).to(n.current,.5,{z:50},0).to(n.current,.5,{z:0},.5),r.a.createElement(Se,{className:"cardCont",onMouseEnter:function(){console.log("In over"),"undefined"!=typeof window&&window.matchMedia("(max-width: 768px)").matches||o.play()},onMouseLeave:function(){"undefined"!=typeof window&&window.matchMedia("(max-width: 768px)").matches||o.reverse()},ref:n},r.a.createElement(Ie,{className:"front",ref:t},r.a.createElement(Ne,null),r.a.createElement(Me,{style:{backgroundImage:"url("+e.badgePic+")"}}),r.a.createElement(Oe,{style:{backgroundImage:"url("+e.logoPic+")"}})),r.a.createElement(ze,{className:"back",ref:i},r.a.createElement(Ne,null),r.a.createElement(Oe,{style:{backgroundImage:"url("+e.logoPic+")"}}),r.a.createElement(Ce,null,r.a.createElement(Re,null,r.a.createElement("h2",{style:{fontSize:36,color:"#1059A3"}},"Site Reliability Engineer"),r.a.createElement("br",null),r.a.createElement("h3",{style:{fontSize:18}},"Summer 2019,"),r.a.createElement("h3",{style:{fontSize:18}},"May 2020 - ",r.a.createElement("b",null,"Now"))),r.a.createElement(Le,null,r.a.createElement("ul",null,r.a.createElement("li",null,"A DevOps role with a focus on the ",r.a.createElement("b",null,"Dev")),r.a.createElement("li",null,"Some of my favourite projects that I've worked on:",r.a.createElement("ul",null,r.a.createElement("li",null,"REST APIs using IBM Cloud and Postgres"),r.a.createElement("li",null,"Slackbot (as a front end for the aforementioned APIs)"))))))))},Te=t("gbfy"),He=t.n(Te);function De(){var e=Xe(["\n    min-height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    @media "," {\n        /* flex-direction: column; */\n        height: auto;\n    }\n"]);return De=function(){return e},e}function We(){var e=Xe(["\n    background-color: #226666;\n    margin: 20px;\n    /* min-height: 70vh; */\n    min-width: 70vw;\n    border-radius: 15px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    @media "," {\n        min-height: 80vh;\n        height: auto;\n    }\n    @media "," {\n        min-height: 120vh;\n    }\n"]);return We=function(){return e},e}function Ae(){var e=Xe(['\n    font-family: "BalsamiqSans-BoldItalic";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 5%;\n    margin-bottom: 5%;\n    color: white;\n    font-size: 30px;\n    flex-shrink: 2;\n    @media '," {\n        font-size: 20px;\n    }\n"]);return Ae=function(){return e},e}function Be(){var e=Xe(["\n    min-height: 50vh;\n    min-width: 75%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    @media "," {\n        flex-direction: column;\n    }\n"]);return Be=function(){return e},e}function Xe(e,n){return n||(n=e.slice(0)),e.raw=n,e}var Ge=o.a.div(Be(),M.a.laptop),Ye=o.a.div(Ae(),M.a.mobileXL),Je=o.a.div(We(),M.a.tablet,M.a.mobileXL),Ue=o.a.div(De(),M.a.laptop),Fe=function(){var e=function(e){var n=Object(a.useRef)(null),t=Object(a.useState)(!1),r=t[0],i=t[1];return Object(a.useEffect)((function(){var t=new IntersectionObserver((function(e){var n=e[0];console.log(n.isIntersecting),i(n.isIntersecting)}),e),a=null;return n.current&&(t.observe(n.current),a=n.current),function(){a&&t.unobserve(a)}}),[n,e]),[n,r]}({root:null,rootMargin:"0px",threshold:.3}),n=e[0],t=e[1];return n.current&&(t?(console.log("experience in"),O.b.to(".experience",1,{rotation:0,x:0,opacity:1,ease:l.b.easeOut,stagger:{amount:.1}}),O.b.to(".experienceChild",1,{x:0,opacity:1,ease:l.b.easeOut,stagger:{amount:.1}})):(console.log("experience out"),O.b.to(".experience",1,{rotation:-10,x:-100,opacity:0,ease:l.b.easeOut}),O.b.to(".experienceChild",1,{x:-100,opacity:0,ease:l.b.easeOut}))),r.a.createElement(Ue,null,r.a.createElement(Je,{className:"experience",ref:n},r.a.createElement(Ye,{className:"experienceChild"},"My Work Experience"),r.a.createElement(Ge,{className:"badgeHolder experienceChild"},r.a.createElement(Pe,{className:"badge",badgePic:F.a,logoPic:He.a,comp:"ibm"}))))};function Ve(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n@media "," {\n  max-width: 305px;\n}\n@media "," {\n  max-width: 350px;\n}\n@media "," {\n  max-width: 635;\n}\n@media "," {\n  max-width: 753px;\n}\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n\n@media "," {\n  justify-content: left;\n}\n"]);return Ve=function(){return e},e}var Ze=o.a.div(Ve(),M.a.mobileS,M.a.mobileM,M.a.mobileXL,M.a.tablet,M.a.mobileXL);n.default=function(){Object(a.useRef)(null);var e=new l.e,n=function(e){var n=Object(a.useRef)(null),t=Object(a.useState)(!1),r=t[0],i=t[1];return Object(a.useEffect)((function(){var t=new IntersectionObserver((function(e){var n=e[0];console.log(n.isIntersecting),i(n.isIntersecting)}),e),a=null;return n.current&&(t.observe(n.current),a=n.current),function(){a&&t.unobserve(a)}}),[n,e]),[n,r]}({root:null,rootMargin:"0px",threshold:.3}),t=n[0];n[1];return Object(a.useEffect)((function(){e.to(".app",0,{css:{visibility:"visible"}}),e.to(".secondaryRows",.01,{opacity:.3,x:-1e4}),e.to(".mainRow",.01,{opacity:.3,x:1e4})}),[]),r.a.createElement("div",{className:"app",ref:function(e){return e}},r.a.createElement(i.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"GURMEHAR SANDHU")),r.a.createElement("div",{ref:t,style:{width:"100%",overflow:"hidden"}},r.a.createElement(Ze,null,r.a.createElement(J,null))),r.a.createElement(c.a,null),r.a.createElement("div",{style:{width:"100%",overflow:"hidden"}},r.a.createElement(N,null,r.a.createElement(fe,null))),r.a.createElement("div",{style:{width:"100%",overflow:"hidden"}},r.a.createElement(N,null,r.a.createElement(Fe,null))))}},TSYQ:function(e,n,t){var a;t("LK8F"),function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var l=r.apply(null,a);l&&e.push(l)}else if("object"===i)for(var o in a)t.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(e.exports=a)}()},gbfy:function(e,n){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI0MDAiPjxjbGlwUGF0aCBpZD0iQSI+PHBhdGggZD0iTTAtMXY4M2g1NS45djIzNkgxLjV2ODJoMTk1di04MmgtNTUuOVY4MkgxOTVWLTF6bTU1NCAxdjgyaDU1Ljl2MjM2aC01NC40djgyaDEzOVYxNzJsODIuNyAyMjggMS42OC4wNCA4MS4yLTIyOHYyMjhoMTQwdi04MmgtNTUuOXYtMjM2aDU0LjR2LTgyaC0xNTZsLTY0LjcgMTgzLTY1LjUtMTgzeiIvPjxwYXRoIGlkPSJCIiBkPSJNMjIyIDB2ODJoNTUuOXYxMzBoMjE1di0yNC45czE4LTE0IDIzLjgtMjcuNGwxMS41LTI1LjlzNS4zNS0xNC41IDUuMzUtMjcuNGwtMi4zLTI1LjlzLTMuNjItMjEuMS05LjkyLTI3LjNsLTIyLjMtMjUuOVM0NzAuNzMtLjEgNDMzLjEzLS4xem0xNDAgODJoODJ2NzZoLTgyeiIvPjx1c2UgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA0MDApIiB4bGluazpocmVmPSIjQiIvPjwvY2xpcFBhdGg+PHBhdGggZD0iTTAgMTMuN2gxMDMwdjUzLjJIMG0wIDUzLjJoOTc1djUzLjJIMHY1My4yaDk3NXY1My4ySDBtMCA1My4yaDEwMzB2NTMuMkgwIiBjbGlwLXBhdGg9InVybCgjQSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmNzBjMSIgc3Ryb2tlLXdpZHRoPSIyNy40Ii8+PC9zdmc+"},"i8R+":function(e,n,t){"use strict";var a=t("0vJV"),r=a.Nothing,i=a.isNothing,l="undefined"!=typeof window?window:r,o="undefined"!=typeof document?document:r;e.exports.window=l,e.exports.document=o,e.exports.exists=function(e){return!i(e)}},wx14:function(e,n,t){"use strict";function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return a}))},zLVn:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}t.d(n,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-index-js-3c6c841cb04c0d3d14a5.js.map
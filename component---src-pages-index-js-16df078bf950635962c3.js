(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0vJV":function(n,e,t){"use strict";t.r(e),t.d(e,"Nothing",(function(){return r})),t.d(e,"toBool",(function(){return i})),t.d(e,"isNothing",(function(){return o})),t.d(e,"isSomething",(function(){return l})),t.d(e,"serialize",(function(){return c})),t.d(e,"deserialize",(function(){return u}));t("DW2E"),t("rE2o"),t("ioFf"),t("a1Th"),t("h7Nl"),t("Btvt");var a,r=((a=function(){return r}).toString=a.toLocaleString=a[Symbol.toPrimitive]=function(){return""},a.valueOf=function(){return!1},new Proxy(Object.freeze(a),{get:function(n,e){return n.hasOwnProperty(e)?n[e]:r}})),i=function(n){return!(!n||!n.valueOf())},o=function(n){return n===r},l=function(n){return!(n===r||null==n)},c=function(n){return JSON.stringify(n,(function(n,e){return e===r?null:e}))},u=function(n){return JSON.parse(n,(function(n,e){return null===e?r:e}))}},NYp9:function(n,e,t){n.exports=t.p+"static/gurmehar_pic-1049a88f9d7ca54a5bdf64258efd25bc.jpg"},PGGC:function(n,e,t){},QA0p:function(n,e,t){"use strict";t("91GP"),t("f3/d"),e.__esModule=!0,e.default=function(n,e){var t=void 0===e?{}:e,a=t.propTypes,i=t.defaultProps,o=t.allowFallback,l=void 0!==o&&o,c=t.displayName,u=void 0===c?n.name||n.displayName:c,s=function(e,t){return n(e,t)};return Object.assign(r.default.forwardRef||!l?r.default.forwardRef(s):function(n){return s(n,null)},{displayName:u,propTypes:a,defaultProps:i})};var a,r=(a=t("q1tI"))&&a.__esModule?a:{default:a}},RXBc:function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),r=t.n(a),i=t("qhky"),o=t("pc+1"),l=t("z/o8"),c=(t("PGGC"),t("vOnD")),u=(t("Z2Ku"),t("L9s1"),t("wx14")),s=t("zLVn"),d=t("TSYQ"),m=t.n(d),f=(t("f3/d"),t("QA0p"),r.a.createContext({}));f.Consumer,f.Provider;function p(n,e){var t=Object(a.useContext)(f);return n||t[e]||e}var g=r.a.forwardRef((function(n,e){var t=n.bsPrefix,a=n.fluid,i=n.as,o=void 0===i?"div":i,l=n.className,c=Object(s.a)(n,["bsPrefix","fluid","as","className"]),d=p(t,"container"),f="string"==typeof a?"-"+a:"-fluid";return r.a.createElement(o,Object(u.a)({ref:e},c,{className:m()(l,a?""+d+f:d)}))}));g.displayName="Container",g.defaultProps={fluid:!1};var h=g,v=(t("8+KV"),["xl","lg","md","sm","xs"]),b=r.a.forwardRef((function(n,e){var t=n.bsPrefix,a=n.className,i=n.noGutters,o=n.as,l=void 0===o?"div":o,c=Object(s.a)(n,["bsPrefix","className","noGutters","as"]),d=p(t,"row"),f=d+"-cols",g=[];return v.forEach((function(n){var e,t=c[n];delete c[n];var a="xs"!==n?"-"+n:"";null!=(e=null!=t&&"object"==typeof t?t.cols:t)&&g.push(""+f+a+"-"+e)})),r.a.createElement(l,Object(u.a)({ref:e},c,{className:m.a.apply(void 0,[a,d,i&&"no-gutters"].concat(g))}))}));b.displayName="Row",b.defaultProps={noGutters:!1};var x=b,w=["xl","lg","md","sm","xs"],y=r.a.forwardRef((function(n,e){var t=n.bsPrefix,a=n.className,i=n.as,o=void 0===i?"div":i,l=Object(s.a)(n,["bsPrefix","className","as"]),c=p(t,"col"),d=[],f=[];return w.forEach((function(n){var e,t,a,r=l[n];if(delete l[n],null!=r&&"object"==typeof r){var i=r.span;e=void 0===i||i,t=r.offset,a=r.order}else e=r;var o="xs"!==n?"-"+n:"";null!=e&&d.push(!0===e?""+c+o:""+c+o+"-"+e),null!=a&&f.push("order"+o+"-"+a),null!=t&&f.push("offset"+o+"-"+t)})),d.length||d.push(c),r.a.createElement(o,Object(u.a)({},l,{ref:e,className:m.a.apply(void 0,[a].concat(d,f))}))}));y.displayName="Col";var E=y,j=t("i8R+"),M=r.a.createContext({}),O=function(n){var e=n.children,t=void 0!==j.window?j.window.innerWidth:768,a=void 0!==j.window?j.window.innerHeight:1024,i=r.a.useState(t),o=i[0],l=i[1],c=r.a.useState(a),u=c[0],s=c[1],d=function(){t=void 0!==j.window?j.window.innerWidth:768,a=void 0!==j.window?j.window.innerHeight:1024,l(t),s(a)};return r.a.useEffect((function(){return j.window.addEventListener("resize",d),function(){return j.window.removeEventListener("resize",d)}}),[]),r.a.createElement(M.Provider,{value:{width:o,height:u}},e)},N=t("0o7I");function I(){var n=P(["\n/* background-color: #f1f1f1; */\nwidth: 40px;\n/* margin-left: 5px; */\nmargin-top: 3px;\ntext-align: center;\nline-height: 4vh;\n\n@media "," {\n  width: auto;\n  text-align: left;\n  line-height: 50px;\n  margin: 0;\n  margin-top: 1vh;\n}\n"]);return I=function(){return n},n}function L(){var n=P(["\nfont-size: 40px;\ncolor: black;\nz-index: 1;\n@media "," {\n  /* font-size: 20px; */\n}\n"]);return L=function(){return n},n}function z(){var n=P(["\n/* background-color: #f1f1f1; */\nwidth: 40px;\n/* margin: 5px; */\ntext-align: center;\nline-height: 4vh;\n\n@media "," {\n  width: auto;\n  text-align: left;\n  line-height: 30px;\n  height: auto;\n  margin: 0;\n  margin-top: 1vh;\n}\n"]);return z=function(){return n},n}function k(){var n=P(['\nfont-size: 50px;\ncolor: white;\nfont-family: "BalsamiqSans-BoldItalic";\nz-index: 1;\n@media '," {\n  /* font-size: 25px; */\n}\n"]);return k=function(){return n},n}function S(){var n=P(["\ndisplay: flex;\nflex-wrap: nowrap;\n/* flex-direction: column; */\n/* width: 95vw; */\n/* position: fixed; */\n/* top: 0; right: 0; bottom: 0; left: 0; */\nmargin-top: 4vh;\nmargin-bottom: 10vh;\njustify-content: center;\nalign-items: center;\nmin-height: 95vh;\n"]);return S=function(){return n},n}function P(n,e){return e||(e=n.slice(0)),n.raw=e,n}var T=N.c,C=N.b,R=N.a,D=c.a.div(S()),A=c.a.h1(k(),R.mobileXL),B=c.a.div(z(),R.mobileXL),G=c.a.p(L(),R.mobileXL),X=c.a.div(I(),R.mobileXL),Y=function(n){var e=n.nameGrid.length;Object(a.useRef)(null),Object(a.useRef)(null);return r.a.createElement(D,{ref:function(n){return n}},r.a.createElement(h,{fluid:!0},n.nameGrid.map((function(n,t){return"G"===n[0]||n[0].includes("gurm")?r.a.createElement(x,{className:"mainRow",xs:!0,sm:!0,md:!0,lg:!0,xl:e,ref:function(n){return n},key:t},n.map((function(n,e){return r.a.createElement(E,{key:e},r.a.createElement(B,null,r.a.createElement(A,null,n)))}))):r.a.createElement(x,{xs:!0,sm:!0,md:!0,lg:!0,xl:e,className:"secondaryRows",key:t},n.map((function(n,e){return r.a.createElement(E,{key:e},r.a.createElement(X,null,r.a.createElement(G,null,n)))})))}))))},J=function(){var n,e={width:(n=r.a.useContext(M)).width,height:n.height}.width;return console.log(e),e<650&&console.log("Should be mobile"),e<650?r.a.createElement(Y,{nameGrid:C}):r.a.createElement(Y,{nameGrid:T})},U=function(){return r.a.createElement(J,null)},H=t("LbRr"),F=t("EVdn"),V=t.n(F),Z=t("NYp9"),W=t.n(Z);function Q(){var n=rn(["\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    @media "," {\n        flex-direction: column;\n        height: auto;\n    }\n"]);return Q=function(){return n},n}function q(){var n=rn(["\n    background-color: #226666;\n    margin: 20px;\n    min-height: 50vh;\n    width: 70vw;\n    border-radius: 15px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    @media "," {\n        flex-direction: column;\n    }\n"]);return q=function(){return n},n}function _(){var n=rn(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 3px solid #FFC0CB;\n    max-width: 50%;\n    /* overflow: hidden; */\n    flex-wrap: wrap;\n    margin: 5vh;\n    /* margin-left: auto; */\n    border-radius: 15px;\n    flex-direction: column;\n    @media "," {\n        max-width: 90%;\n        margin-left: 5vh;\n    }\n"]);return _=function(){return n},n}function K(){var n=rn(['\n    font-family: "BalsamiqSans-BoldItalic";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 10px;\n    margin-bottom: 0;\n    color: white;\n    font-size: 30px;\n    @media '," {\n        font-size: 20px;\n    }\n"]);return K=function(){return n},n}function $(){var n=rn(["\n    margin: 10px;\n    margin-top: 0;\n    font-size: 20px;\n    color: white;\n    @media "," {\n        font-size: 15px;\n    }\n"]);return $=function(){return n},n}function nn(){var n=rn(["\n    background: #FFC0CB;\n    border-radius: 15px;\n    padding: 10px;\n    list-style-position: inside;\n    margin-left: auto;\n    margin: 10px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n"]);return nn=function(){return n},n}function en(){var n=rn(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    max-width: 50%;\n    margin: 5vh;\n    margin-left: 10vh;\n    /* overflow: hidden; */\n    border-radius: 20px;\n    @media "," {\n        margin-bottom: auto;\n        width: 40vw;\n        height: 40vw;\n        margin-left: 5vh;\n    }\n    \n    @media "," {\n        max-width: 90%;\n    }\n"]);return en=function(){return n},n}function tn(){var n=rn(["\n    width: 15vw;\n    height: 15vw;\n    background: blueviolet;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 25px;\n    transform: rotate(45deg);\n    overflow: hidden;\n    position: relative;\n    border-radius: 15px;\n    border: 3px solid #FFC0CB;\n\n    @media "," {\n        width: 25vw;\n        height: 25vw;\n    }\n\n    @media "," {\n        /* width: 40vw;\n        height: 40vw; */\n    }\n"]);return tn=function(){return n},n}function an(){var n=rn(["\n    max-width: 150%;\n    width: 150%;\n    /* height: 150%; */\n    border-radius: 15px;\n    margin: 0;\n    transform: rotate(-45deg);\n"]);return an=function(){return n},n}function rn(n,e){return e||(e=n.slice(0)),n.raw=e,n}var on=c.a.img(an()),ln=c.a.div(tn(),N.a.laptop,N.a.mobileXL),cn=c.a.div(en(),N.a.laptop,N.a.mobileXL),un=c.a.ul(nn()),sn=c.a.p($(),N.a.mobileXL),dn=c.a.div(K(),N.a.mobileXL),mn=c.a.div(_(),N.a.laptop),fn=c.a.div(q(),N.a.laptop),pn=c.a.div(Q(),N.a.laptop),gn=function(){var n=function(n){var e=Object(a.useRef)(null),t=Object(a.useState)(!1),r=t[0],i=t[1];return Object(a.useEffect)((function(){var t=new IntersectionObserver((function(n){var e=n[0];console.log(e.isIntersecting),i(e.isIntersecting)}),n),a=null;return e.current&&(t.observe(e.current),a=e.current),function(){a&&t.unobserve(a)}}),[e,n]),[e,r]}({root:null,rootMargin:"0px",threshold:.3}),e=n[0],t=n[1];return e.current&&(t?(console.log("About in"),l.b.to(".about",1,{rotation:0,x:0,opacity:1,ease:o.b.easeOut,stagger:{amount:.1}}),l.b.to(V()(".about").children(),1,{x:0,opacity:1,ease:o.b.easeOut,stagger:{amount:.1}})):(console.log("About out"),l.b.to(".about",1,{rotation:10,x:100,opacity:0,ease:o.b.easeOut}),l.b.to(V()(".about").children(),1,{x:100,opacity:0,ease:o.b.easeOut}))),r.a.createElement(pn,null,r.a.createElement(fn,{ref:e,className:"about"},r.a.createElement(cn,null,r.a.createElement(ln,null,r.a.createElement(on,{src:W.a}))),r.a.createElement(mn,null,r.a.createElement(dn,null,"Who Am I?"),r.a.createElement("center",null,r.a.createElement(sn,null,"I'm Gurmehar Sandhu.",r.a.createElement("br",null),"Welcome to my website/portfolio.",r.a.createElement("br",null),"I'm not a fan of long paragraphs, so here are some quick facts about me:")),r.a.createElement(un,null,r.a.createElement("li",{style:{color:"black"}},"I just finished my 3rd Year of Computer Engineering at the University of Toronto"),r.a.createElement("li",{style:{color:"black"}},"I'm currently doing a PEY Co-op as an ",r.a.createElement("a",{style:{color:"white"},href:"https://landing.google.com/sre/",target:"_blank"},r.a.createElement("u",null,"SRE"))," at IBM Canada."),r.a.createElement("li",{style:{color:"black"}},"I enjoy basketball (and just about any other sport), gaming, and desigining/developing software"),r.a.createElement("li",{style:{color:"black"}},"LeBron James is the GOAT ")),r.a.createElement("center",null,r.a.createElement(sn,null,"Sorry, had to slide that last one in there.",r.a.createElement("br",null),"Feel free to reach out and yell at me.")))))},hn=t("nOaX");function vn(){var n=Nn(["\n    float: left;\n    margin: 20px;\n    margin-bottom: 30px;\n    margin-top: 0;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-width: 20%;\n    height: auto;\n    @media "," {\n        min-width: 40%;\n    }\n    @media "," {\n        min-height: 300px;\n        \n    }\n    @media "," {\n        height: 200px;\n    }\n"]);return vn=function(){return n},n}function bn(){var n=Nn(["\n    /* min-height: 100%; */\n    min-width: 60vw;\n    border-radius: 15px;\n    /* margin: 20px;\n    margin-bottom: 30px;\n    margin-top: 0; */\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    background: #D7DAE0;\n    transition: 0.3s;\n    cursor: pointer;\n    height: 350px;\n    backface-visibility: hidden;\n    overflow: hidden;\n    padding: 1rem;\n\n    @media "," {\n        min-height: 350px;\n        height: auto;\n    }\n\n    /* Change this because of flex direction change */\n    @media "," {\n        min-height: 300px;\n    }\n    @media "," {\n        min-height: 300px;\n    }\n"]);return bn=function(){return n},n}function xn(){var n=Nn(["\n    background: #C4C4C4;\n    border-radius: 15px;\n    text-align: left;\n    margin: 1rem;\n    padding: 1rem;\n"]);return xn=function(){return n},n}function wn(){var n=Nn(["\n    text-align: right;\n    .h2 {\n        color: #1059A3;\n    }\n    .h3 {\n        color: #131111;\n    }\n"]);return wn=function(){return n},n}function yn(){var n=Nn(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-direction: row;\n    @media "," {\n        flex-direction: column;\n    }\n"]);return yn=function(){return n},n}function En(){var n=Nn(["\n    width: 100%;\n    border-radius: 15px;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    background: #D7DAE0;\n    transition: 0.3s;\n    cursor: pointer;\n    height: 350px;\n    backface-visibility: hidden;\n    @media "," {\n        height: 300px;\n    }\n    @media "," {\n        height: 200px;\n    }\n"]);return En=function(){return n},n}function jn(){var n=Nn(["\n    height: 200px;\n    width: 60%;\n    background: #373636;\n    margin: 10px;\n    margin-top: 20px;\n    background-size: cover;\n    background-position: center;\n    border-radius: 5px;\n    @media "," {\n        margin-top: 30px;\n    }\n    @media "," {\n        height: 150px;\n        width: 60%;\n        margin-bottom: 0;\n    }\n    @media "," {\n        height: 100px;\n    }\n"]);return jn=function(){return n},n}function Mn(){var n=Nn(["\n    height: 40px;\n    width: 40%;\n    margin-bottom: 20px;\n    margin-top: 30px;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n"]);return Mn=function(){return n},n}function On(){var n=Nn(["\n    position: absolute;\n    top: 10px;\n    height: 10px;\n    width: 50px;\n    background: #373636;\n    border-radius: 10px;\n    @media "," {\n        height: 7px;\n        width: 30px;\n    }\n"]);return On=function(){return n},n}function Nn(n,e){return e||(e=n.slice(0)),n.raw=e,n}var In=c.a.div(On(),N.a.laptop),Ln=c.a.div(Mn()),zn=c.a.div(jn(),N.a.laptop,N.a.tablet,N.a.mobileXL),kn=c.a.div(En(),N.a.tablet,N.a.mobileXL),Sn=c.a.div(yn(),N.a.tablet),Pn=c.a.div(wn()),Tn=c.a.div(xn()),Cn=c.a.div(bn(),N.a.laptop,N.a.tablet,N.a.mobileXL),Rn=c.a.div(vn(),N.a.laptop,N.a.tablet,N.a.mobileXL),Dn=function(n){var e=Object(a.useState)(!1),t=(e[0],e[1],Object(a.useRef)(null)),i=Object(a.useRef)(null);if(hn.a.defaultTransformPerspective=1e3,void 0!==j.window){l.a.set(V()(".back"),{rotationY:-180}),V.a.each(V()(".cardCont"),(function(n,e){var a=new o.f({paused:!0}),r=new o.f({paused:!0});t.current&&i.current&&(a.to(t.current,1,{rotationY:180}).to(i.current,1,{rotationY:0},0).to(e,.5,{z:50},0).to(e,.5,{z:0},.5),e.animation=a,r.to(t.current,1,{rotationY:180}).to(".badgeHolder",1,{scaleY:.5},0).to(".experience",1,{scaleY:1.5},0).to(i.current,1,{rotationY:0},0).to(e,.5,{z:50},0).to(e,.5,{z:0},.5),e.animationMobile=r)})),V()(".cardCont").hover((function(){void 0!==j.window&&j.window.matchMedia("(max-width: 768px)").matches?this.animationMobile.play():this.animation.play()}),(function(){void 0!==j.window&&j.window.matchMedia("(max-width: 768px)").matches?this.animationMobile.reverse():this.animation.reverse()}))}return r.a.createElement(Rn,{className:"cardCont"},r.a.createElement(kn,{className:"front",ref:t},r.a.createElement(In,null),r.a.createElement(zn,{style:{backgroundImage:"url("+n.badgePic+")"}}),r.a.createElement(Ln,{style:{backgroundImage:"url("+n.logoPic+")"}})),r.a.createElement(Cn,{className:"back",ref:i},r.a.createElement(In,null),r.a.createElement(Ln,{style:{backgroundImage:"url("+n.logoPic+")"}}),r.a.createElement(Sn,null,r.a.createElement(Pn,null,r.a.createElement("h2",{style:{fontSize:36,color:"#1059A3"}},"Site Reliability Engineer"),r.a.createElement("break",null),r.a.createElement("h3",{style:{fontSize:18}},"Summer 2019,"),r.a.createElement("h3",{style:{fontSize:18}},"May 2020 - ",r.a.createElement("b",null,"Now"))),r.a.createElement(Tn,null,r.a.createElement("ul",null,r.a.createElement("li",null,"Helping make IBMer lives easier!"),r.a.createElement("li",null,"A DevOps role with a focus on the ",r.a.createElement("b",null,"Dev")),r.a.createElement("li",null,"Some of my favourite projects that I've worked on:",r.a.createElement("ul",null,r.a.createElement("li",null,"REST APIs using IBM Cloud and Postgres"),r.a.createElement("li",null,"Slackbot (as a front end for the aforementioned APIs)"))))))))},An=t("gbfy"),Bn=t.n(An);function Gn(){var n=Un(["\n    min-height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    @media "," {\n        /* flex-direction: column; */\n        height: auto;\n    }\n"]);return Gn=function(){return n},n}function Xn(){var n=Un(["\n    background-color: #226666;\n    margin: 20px;\n    /* min-height: 70vh; */\n    min-width: 70vw;\n    border-radius: 15px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]);return Xn=function(){return n},n}function Yn(){var n=Un(['\n    font-family: "BalsamiqSans-BoldItalic";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 5%;\n    margin-bottom: 5%;\n    color: white;\n    font-size: 30px;\n    flex-shrink: 2;\n    @media '," {\n        font-size: 20px;\n    }\n"]);return Yn=function(){return n},n}function Jn(){var n=Un(["\n    min-height: 50vh;\n    min-width: 75%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    @media "," {\n        flex-direction: column;\n    }\n"]);return Jn=function(){return n},n}function Un(n,e){return e||(e=n.slice(0)),n.raw=e,n}var Hn=c.a.div(Jn(),N.a.laptop),Fn=c.a.div(Yn(),N.a.mobileXL),Vn=c.a.div(Xn()),Zn=c.a.div(Gn(),N.a.laptop),Wn=function(){var n=function(n){var e=Object(a.useRef)(null),t=Object(a.useState)(!1),r=t[0],i=t[1];return Object(a.useEffect)((function(){var t=new IntersectionObserver((function(n){var e=n[0];console.log(e.isIntersecting),i(e.isIntersecting)}),n),a=null;return e.current&&(t.observe(e.current),a=e.current),function(){a&&t.unobserve(a)}}),[e,n]),[e,r]}({root:null,rootMargin:"0px",threshold:.3}),e=n[0],t=n[1];return e.current&&(t?(console.log("experience in"),l.b.to(".experience",1,{rotation:0,x:0,opacity:1,ease:o.b.easeOut,stagger:{amount:.1}}),l.b.to(V()(".experience").children(),1,{x:0,opacity:1,ease:o.b.easeOut,stagger:{amount:.1}})):(console.log("experience out"),l.b.to(".experience",1,{rotation:-10,x:-100,opacity:0,ease:o.b.easeOut}),l.b.to(V()(".experience").children(),1,{x:-100,opacity:0,ease:o.b.easeOut}))),r.a.createElement(Zn,null,r.a.createElement(Vn,{className:"experience",ref:e},r.a.createElement(Fn,null,"My Badges"),r.a.createElement(Hn,{className:"badgeHolder"},r.a.createElement(Dn,{className:"badge",badgePic:W.a,logoPic:Bn.a,comp:"ibm"}))))};function Qn(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n@media "," {\n  max-width: 305px;\n}\n@media "," {\n  max-width: 350px;\n}\n@media "," {\n  max-width: 635;\n}\n@media "," {\n  max-width: 753px;\n}\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n\n@media "," {\n  justify-content: left;\n}\n/* position: absolute;\ntop: 0; right: 0; bottom: 0; left: 0; */\n"]);return Qn=function(){return n},n}var qn=c.a.div(Qn(),N.a.mobileS,N.a.mobileM,N.a.mobileXL,N.a.tablet,N.a.mobileXL);e.default=function(){var n=Object(a.useRef)(null),e=new o.e,t=function(n){var e=Object(a.useRef)(null),t=Object(a.useState)(!1),r=t[0],i=t[1];return Object(a.useEffect)((function(){var t=new IntersectionObserver((function(n){var e=n[0];console.log(e.isIntersecting),i(e.isIntersecting)}),n),a=null;return e.current&&(t.observe(e.current),a=e.current),function(){a&&t.unobserve(a)}}),[e,n]),[e,r]}({root:null,rootMargin:"0px",threshold:.3}),c=t[0],u=t[1];return c.current&&(u?(console.log("title IN"),l.b.to(".secondaryRows",1.4,{opacity:1,x:0,ease:o.c.easeOut}),l.b.to(".mainRow",1.4,{opacity:1,x:0,ease:o.c.easeOut})):(console.log("title OUT"),l.b.to(".secondaryRows",1.4,{opacity:.3,x:-100,ease:o.c.easeOut}),l.b.to(".mainRow",1.4,{opacity:.3,x:100,ease:o.c.easeOut}))),Object(a.useEffect)((function(){e.to(n,0,{css:{visibility:"visible"}}),e.to(".secondaryRows",.01,{opacity:.3,x:-1e4}),e.to(".mainRow",.01,{opacity:.3,x:1e4})}),[]),r.a.createElement("div",{className:"app",ref:function(e){return n=e}},r.a.createElement(i.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"GURMEHAR SANDHU")),r.a.createElement("div",{ref:c,style:{width:"100%",overflowX:"hidden"}},r.a.createElement(qn,null,r.a.createElement(O,null,r.a.createElement(U,null)))),r.a.createElement(H.a,null),r.a.createElement("div",{style:{width:"100%",overflowX:"hidden"}},r.a.createElement(O,null,r.a.createElement(gn,null)),r.a.createElement(O,null,r.a.createElement(Wn,null))))}},TSYQ:function(n,e,t){var a;t("LK8F"),function(){"use strict";var t={}.hasOwnProperty;function r(){for(var n=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var i=typeof a;if("string"===i||"number"===i)n.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&n.push(o)}else if("object"===i)for(var l in a)t.call(a,l)&&a[l]&&n.push(l)}}return n.join(" ")}n.exports?(r.default=r,n.exports=r):void 0===(a=function(){return r}.apply(e,[]))||(n.exports=a)}()},gbfy:function(n,e){n.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI0MDAiPjxjbGlwUGF0aCBpZD0iQSI+PHBhdGggZD0iTTAtMXY4M2g1NS45djIzNkgxLjV2ODJoMTk1di04MmgtNTUuOVY4MkgxOTVWLTF6bTU1NCAxdjgyaDU1Ljl2MjM2aC01NC40djgyaDEzOVYxNzJsODIuNyAyMjggMS42OC4wNCA4MS4yLTIyOHYyMjhoMTQwdi04MmgtNTUuOXYtMjM2aDU0LjR2LTgyaC0xNTZsLTY0LjcgMTgzLTY1LjUtMTgzeiIvPjxwYXRoIGlkPSJCIiBkPSJNMjIyIDB2ODJoNTUuOXYxMzBoMjE1di0yNC45czE4LTE0IDIzLjgtMjcuNGwxMS41LTI1LjlzNS4zNS0xNC41IDUuMzUtMjcuNGwtMi4zLTI1LjlzLTMuNjItMjEuMS05LjkyLTI3LjNsLTIyLjMtMjUuOVM0NzAuNzMtLjEgNDMzLjEzLS4xem0xNDAgODJoODJ2NzZoLTgyeiIvPjx1c2UgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA0MDApIiB4bGluazpocmVmPSIjQiIvPjwvY2xpcFBhdGg+PHBhdGggZD0iTTAgMTMuN2gxMDMwdjUzLjJIMG0wIDUzLjJoOTc1djUzLjJIMHY1My4yaDk3NXY1My4ySDBtMCA1My4yaDEwMzB2NTMuMkgwIiBjbGlwLXBhdGg9InVybCgjQSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmNzBjMSIgc3Ryb2tlLXdpZHRoPSIyNy40Ii8+PC9zdmc+"},"i8R+":function(n,e,t){"use strict";var a=t("0vJV"),r=a.Nothing,i=a.isNothing,o="undefined"!=typeof window?window:r,l="undefined"!=typeof document?document:r;n.exports.window=o,n.exports.document=l,n.exports.exists=function(n){return!i(n)}},wx14:function(n,e,t){"use strict";function a(){return(a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}t.d(e,"a",(function(){return a}))},zLVn:function(n,e,t){"use strict";function a(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}t.d(e,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-index-js-16df078bf950635962c3.js.map
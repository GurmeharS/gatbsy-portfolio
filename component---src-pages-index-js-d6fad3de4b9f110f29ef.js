(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"HY/3":function(n,e,t){"use strict";t.r(e),t.d(e,"ViewportProvider",(function(){return o})),t.d(e,"useViewport",(function(){return l}));var a=t("q1tI"),r=t.n(a),i=r.a.createContext({}),o=function(n){var e=n.children,t=r.a.useState(window.innerWidth),a=t[0],o=t[1],l=r.a.useState(window.innerHeight),c=l[0],u=l[1],s=function(){o(window.innerWidth),u(window.innerHeight)};return r.a.useEffect((function(){return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}}),[]),r.a.createElement(i.Provider,{value:{width:a,height:c}},e)},l=function(){var n=r.a.useContext(i);return{width:n.width,height:n.height}}},NYp9:function(n,e,t){n.exports=t.p+"static/gurmehar_pic-1049a88f9d7ca54a5bdf64258efd25bc.jpg"},PGGC:function(n,e,t){},QA0p:function(n,e,t){"use strict";t("91GP"),t("f3/d"),e.__esModule=!0,e.default=function(n,e){var t=void 0===e?{}:e,a=t.propTypes,i=t.defaultProps,o=t.allowFallback,l=void 0!==o&&o,c=t.displayName,u=void 0===c?n.name||n.displayName:c,s=function(e,t){return n(e,t)};return Object.assign(r.default.forwardRef||!l?r.default.forwardRef(s):function(n){return s(n,null)},{displayName:u,propTypes:a,defaultProps:i})};var a,r=(a=t("q1tI"))&&a.__esModule?a:{default:a}},RXBc:function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),r=t.n(a),i=t("qhky"),o=t("pc+1"),l=t("z/o8"),c=(t("PGGC"),t("vOnD")),u=(t("Z2Ku"),t("L9s1"),t("wx14")),s=t("zLVn"),d=t("TSYQ"),m=t.n(d),f=(t("f3/d"),t("QA0p"),r.a.createContext({}));f.Consumer,f.Provider;function p(n,e){var t=Object(a.useContext)(f);return n||t[e]||e}var g=r.a.forwardRef((function(n,e){var t=n.bsPrefix,a=n.fluid,i=n.as,o=void 0===i?"div":i,l=n.className,c=Object(s.a)(n,["bsPrefix","fluid","as","className"]),d=p(t,"container"),f="string"==typeof a?"-"+a:"-fluid";return r.a.createElement(o,Object(u.a)({ref:e},c,{className:m()(l,a?""+d+f:d)}))}));g.displayName="Container",g.defaultProps={fluid:!1};var h=g,b=(t("8+KV"),["xl","lg","md","sm","xs"]),v=r.a.forwardRef((function(n,e){var t=n.bsPrefix,a=n.className,i=n.noGutters,o=n.as,l=void 0===o?"div":o,c=Object(s.a)(n,["bsPrefix","className","noGutters","as"]),d=p(t,"row"),f=d+"-cols",g=[];return b.forEach((function(n){var e,t=c[n];delete c[n];var a="xs"!==n?"-"+n:"";null!=(e=null!=t&&"object"==typeof t?t.cols:t)&&g.push(""+f+a+"-"+e)})),r.a.createElement(l,Object(u.a)({ref:e},c,{className:m.a.apply(void 0,[a,d,i&&"no-gutters"].concat(g))}))}));v.displayName="Row",v.defaultProps={noGutters:!1};var x=v,w=["xl","lg","md","sm","xs"],y=r.a.forwardRef((function(n,e){var t=n.bsPrefix,a=n.className,i=n.as,o=void 0===i?"div":i,l=Object(s.a)(n,["bsPrefix","className","as"]),c=p(t,"col"),d=[],f=[];return w.forEach((function(n){var e,t,a,r=l[n];if(delete l[n],null!=r&&"object"==typeof r){var i=r.span;e=void 0===i||i,t=r.offset,a=r.order}else e=r;var o="xs"!==n?"-"+n:"";null!=e&&d.push(!0===e?""+c+o:""+c+o+"-"+e),null!=a&&f.push("order"+o+"-"+a),null!=t&&f.push("offset"+o+"-"+t)})),d.length||d.push(c),r.a.createElement(o,Object(u.a)({},l,{ref:e,className:m.a.apply(void 0,[a].concat(d,f))}))}));y.displayName="Col";var E=y,j=t("0o7I");function M(){var n=z(["\n/* background-color: #f1f1f1; */\nwidth: 40px;\n/* margin-left: 5px; */\nmargin-top: 3px;\ntext-align: center;\nline-height: 4vh;\n\n@media "," {\n  width: auto;\n  text-align: left;\n  line-height: 50px;\n  margin: 0;\n  margin-top: 1vh;\n}\n"]);return M=function(){return n},n}function I(){var n=z(["\nfont-size: 40px;\ncolor: black;\nz-index: 1;\n@media "," {\n  /* font-size: 20px; */\n}\n"]);return I=function(){return n},n}function O(){var n=z(["\n/* background-color: #f1f1f1; */\nwidth: 40px;\n/* margin: 5px; */\ntext-align: center;\nline-height: 4vh;\n\n@media "," {\n  width: auto;\n  text-align: left;\n  line-height: 30px;\n  height: auto;\n  margin: 0;\n  margin-top: 1vh;\n}\n"]);return O=function(){return n},n}function N(){var n=z(['\nfont-size: 50px;\ncolor: white;\nfont-family: "BalsamiqSans-BoldItalic";\nz-index: 1;\n@media '," {\n  /* font-size: 25px; */\n}\n"]);return N=function(){return n},n}function L(){var n=z(["\ndisplay: flex;\nflex-wrap: nowrap;\n/* flex-direction: column; */\n/* width: 95vw; */\n/* position: fixed; */\n/* top: 0; right: 0; bottom: 0; left: 0; */\nmargin-top: 4vh;\nmargin-bottom: 10vh;\njustify-content: center;\nalign-items: center;\nmin-height: 95vh;\n"]);return L=function(){return n},n}function z(n,e){return e||(e=n.slice(0)),n.raw=e,n}var k=("undefined"!=typeof window?t("HY/3"):null).useViewport,S=j.c,P=j.b,C=j.a,T=c.a.div(L()),R=c.a.h1(N(),C.mobileXL),D=c.a.div(O(),C.mobileXL),A=c.a.p(I(),C.mobileXL),G=c.a.div(M(),C.mobileXL),B=function(n){var e=n.nameGrid.length;Object(a.useRef)(null),Object(a.useRef)(null);return r.a.createElement(T,{ref:function(n){return n}},r.a.createElement(h,{fluid:!0},n.nameGrid.map((function(n,t){return"G"===n[0]||n[0].includes("gurm")?r.a.createElement(x,{className:"mainRow",xs:!0,sm:!0,md:!0,lg:!0,xl:e,ref:function(n){return n},key:t},n.map((function(n,e){return r.a.createElement(E,{key:e},r.a.createElement(D,null,r.a.createElement(R,null,n)))}))):r.a.createElement(x,{xs:!0,sm:!0,md:!0,lg:!0,xl:e,className:"secondaryRows",key:t},n.map((function(n,e){return r.a.createElement(E,{key:e},r.a.createElement(G,null,r.a.createElement(A,null,n)))})))}))))},Y=function(){var n=k().width;return console.log(n),n<650&&console.log("Should be mobile"),n<650?r.a.createElement(B,{nameGrid:P}):r.a.createElement(B,{nameGrid:S})},X=function(){return r.a.createElement(Y,null)},H=t("LbRr"),U=t("EVdn"),J=t.n(U),V=t("NYp9"),F=t.n(V);function Z(){var n=tn(["\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    @media "," {\n        flex-direction: column;\n        height: auto;\n    }\n"]);return Z=function(){return n},n}function W(){var n=tn(["\n    background-color: #226666;\n    margin: 20px;\n    min-height: 50vh;\n    width: 70vw;\n    border-radius: 15px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    @media "," {\n        flex-direction: column;\n    }\n"]);return W=function(){return n},n}function q(){var n=tn(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 3px solid #FFC0CB;\n    max-width: 50%;\n    /* overflow: hidden; */\n    flex-wrap: wrap;\n    margin: 5vh;\n    /* margin-left: auto; */\n    border-radius: 15px;\n    flex-direction: column;\n    @media "," {\n        max-width: 90%;\n        margin-left: 5vh;\n    }\n"]);return q=function(){return n},n}function Q(){var n=tn(['\n    font-family: "BalsamiqSans-BoldItalic";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 10px;\n    margin-bottom: 0;\n    color: white;\n    font-size: 30px;\n    @media '," {\n        font-size: 20px;\n    }\n"]);return Q=function(){return n},n}function _(){var n=tn(["\n    margin: 10px;\n    margin-top: 0;\n    font-size: 20px;\n    color: white;\n    @media "," {\n        font-size: 15px;\n    }\n"]);return _=function(){return n},n}function K(){var n=tn(["\n    background: #FFC0CB;\n    border-radius: 15px;\n    padding: 10px;\n    list-style-position: inside;\n    margin-left: auto;\n    margin: 10px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n"]);return K=function(){return n},n}function $(){var n=tn(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    max-width: 50%;\n    margin: 5vh;\n    margin-left: 10vh;\n    /* overflow: hidden; */\n    border-radius: 20px;\n    @media "," {\n        margin-bottom: auto;\n        width: 40vw;\n        height: 40vw;\n        margin-left: 5vh;\n    }\n    \n    @media "," {\n        max-width: 90%;\n    }\n"]);return $=function(){return n},n}function nn(){var n=tn(["\n    width: 15vw;\n    height: 15vw;\n    background: blueviolet;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 25px;\n    transform: rotate(45deg);\n    overflow: hidden;\n    position: relative;\n    border-radius: 15px;\n    border: 3px solid #FFC0CB;\n\n    @media "," {\n        width: 25vw;\n        height: 25vw;\n    }\n\n    @media "," {\n        /* width: 40vw;\n        height: 40vw; */\n    }\n"]);return nn=function(){return n},n}function en(){var n=tn(["\n    max-width: 150%;\n    width: 150%;\n    /* height: 150%; */\n    border-radius: 15px;\n    margin: 0;\n    transform: rotate(-45deg);\n"]);return en=function(){return n},n}function tn(n,e){return e||(e=n.slice(0)),n.raw=e,n}var an=c.a.img(en()),rn=c.a.div(nn(),j.a.laptop,j.a.mobileXL),on=c.a.div($(),j.a.laptop,j.a.mobileXL),ln=c.a.ul(K()),cn=c.a.p(_(),j.a.mobileXL),un=c.a.div(Q(),j.a.mobileXL),sn=c.a.div(q(),j.a.laptop),dn=c.a.div(W(),j.a.laptop),mn=c.a.div(Z(),j.a.laptop),fn=function(){var n=function(n){var e=Object(a.useRef)(null),t=Object(a.useState)(!1),r=t[0],i=t[1];return Object(a.useEffect)((function(){var t=new IntersectionObserver((function(n){var e=n[0];console.log(e.isIntersecting),i(e.isIntersecting)}),n),a=null;return e.current&&(t.observe(e.current),a=e.current),function(){a&&t.unobserve(a)}}),[e,n]),[e,r]}({root:null,rootMargin:"0px",threshold:.3}),e=n[0],t=n[1];return e.current&&(t?(console.log("About in"),l.b.to(".about",1,{rotation:0,x:0,opacity:1,ease:o.b.easeOut,stagger:{amount:.1}}),l.b.to(J()(".about").children(),1,{x:0,opacity:1,ease:o.b.easeOut,stagger:{amount:.1}})):(console.log("About out"),l.b.to(".about",1,{rotation:10,x:100,opacity:0,ease:o.b.easeOut}),l.b.to(J()(".about").children(),1,{x:100,opacity:0,ease:o.b.easeOut}))),r.a.createElement(mn,null,r.a.createElement(dn,{ref:e,className:"about"},r.a.createElement(on,null,r.a.createElement(rn,null,r.a.createElement(an,{src:F.a}))),r.a.createElement(sn,null,r.a.createElement(un,null,"Who Am I?"),r.a.createElement("center",null,r.a.createElement(cn,null,"I'm Gurmehar Sandhu.",r.a.createElement("br",null),"Welcome to my website/portfolio.",r.a.createElement("br",null),"I'm not a fan of long paragraphs, so here are some quick facts about me:")),r.a.createElement(ln,null,r.a.createElement("li",{style:{color:"black"}},"I just finished my 3rd Year of Computer Engineering at the University of Toronto"),r.a.createElement("li",{style:{color:"black"}},"I'm currently doing a PEY Co-op as an ",r.a.createElement("a",{style:{color:"white"},href:"https://landing.google.com/sre/",target:"_blank"},r.a.createElement("u",null,"SRE"))," at IBM Canada."),r.a.createElement("li",{style:{color:"black"}},"I enjoy basketball (and just about any other sport), gaming, and desigining/developing software"),r.a.createElement("li",{style:{color:"black"}},"LeBron James is the GOAT ")),r.a.createElement("center",null,r.a.createElement(cn,null,"Sorry, had to slide that last one in there.",r.a.createElement("br",null),"Feel free to reach out and yell at me.")))))},pn=t("nOaX");function gn(){var n=Mn(["\n    float: left;\n    margin: 20px;\n    margin-bottom: 30px;\n    margin-top: 0;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-width: 20%;\n    height: auto;\n    @media "," {\n        min-width: 40%;\n    }\n    @media "," {\n        min-height: 300px;\n        \n    }\n    @media "," {\n        height: 200px;\n    }\n"]);return gn=function(){return n},n}function hn(){var n=Mn(["\n    /* min-height: 100%; */\n    min-width: 60vw;\n    border-radius: 15px;\n    /* margin: 20px;\n    margin-bottom: 30px;\n    margin-top: 0; */\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    background: #D7DAE0;\n    transition: 0.3s;\n    cursor: pointer;\n    height: 350px;\n    backface-visibility: hidden;\n    overflow: hidden;\n    padding: 1rem;\n\n    @media "," {\n        min-height: 350px;\n        height: auto;\n    }\n\n    /* Change this because of flex direction change */\n    @media "," {\n        min-height: 300px;\n    }\n    @media "," {\n        min-height: 300px;\n    }\n"]);return hn=function(){return n},n}function bn(){var n=Mn(["\n    background: #C4C4C4;\n    border-radius: 15px;\n    text-align: left;\n    margin: 1rem;\n    padding: 1rem;\n"]);return bn=function(){return n},n}function vn(){var n=Mn(["\n    text-align: right;\n    .h2 {\n        color: #1059A3;\n    }\n    .h3 {\n        color: #131111;\n    }\n"]);return vn=function(){return n},n}function xn(){var n=Mn(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-direction: row;\n    @media "," {\n        flex-direction: column;\n    }\n"]);return xn=function(){return n},n}function wn(){var n=Mn(["\n    width: 100%;\n    border-radius: 15px;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    background: #D7DAE0;\n    transition: 0.3s;\n    cursor: pointer;\n    height: 350px;\n    backface-visibility: hidden;\n    @media "," {\n        height: 300px;\n    }\n    @media "," {\n        height: 200px;\n    }\n"]);return wn=function(){return n},n}function yn(){var n=Mn(["\n    height: 200px;\n    width: 60%;\n    background: #373636;\n    margin: 10px;\n    margin-top: 20px;\n    background-size: cover;\n    background-position: center;\n    border-radius: 5px;\n    @media "," {\n        margin-top: 30px;\n    }\n    @media "," {\n        height: 150px;\n        width: 60%;\n        margin-bottom: 0;\n    }\n    @media "," {\n        height: 100px;\n    }\n"]);return yn=function(){return n},n}function En(){var n=Mn(["\n    height: 40px;\n    width: 40%;\n    margin-bottom: 20px;\n    margin-top: 30px;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n"]);return En=function(){return n},n}function jn(){var n=Mn(["\n    position: absolute;\n    top: 10px;\n    height: 10px;\n    width: 50px;\n    background: #373636;\n    border-radius: 10px;\n    @media "," {\n        height: 7px;\n        width: 30px;\n    }\n"]);return jn=function(){return n},n}function Mn(n,e){return e||(e=n.slice(0)),n.raw=e,n}var In=c.a.div(jn(),j.a.laptop),On=c.a.div(En()),Nn=c.a.div(yn(),j.a.laptop,j.a.tablet,j.a.mobileXL),Ln=c.a.div(wn(),j.a.tablet,j.a.mobileXL),zn=c.a.div(xn(),j.a.tablet),kn=c.a.div(vn()),Sn=c.a.div(bn()),Pn=c.a.div(hn(),j.a.laptop,j.a.tablet,j.a.mobileXL),Cn=c.a.div(gn(),j.a.laptop,j.a.tablet,j.a.mobileXL),Tn=function(n){var e=Object(a.useState)(!1),t=(e[0],e[1],Object(a.useRef)(null)),i=Object(a.useRef)(null);return pn.a.defaultTransformPerspective=1e3,l.a.set(J()(".back"),{rotationY:-180}),J.a.each(J()(".cardCont"),(function(n,e){var a=new o.f({paused:!0}),r=new o.f({paused:!0});t.current&&i.current&&(a.to(t.current,1,{rotationY:180}).to(i.current,1,{rotationY:0},0).to(e,.5,{z:50},0).to(e,.5,{z:0},.5),e.animation=a,r.to(t.current,1,{rotationY:180}).to(".badgeHolder",1,{scaleY:.5},0).to(".experience",1,{scaleY:1.5},0).to(i.current,1,{rotationY:0},0).to(e,.5,{z:50},0).to(e,.5,{z:0},.5),e.animationMobile=r)})),Object(a.useEffect)((function(){J()(".cardCont").hover((function(){window.matchMedia("(max-width: 768px)").matches?this.animationMobile.play():this.animation.play()}),(function(){window.matchMedia("(max-width: 768px)").matches?this.animationMobile.reverse():this.animation.reverse()}))}),[]),r.a.createElement(Cn,{className:"cardCont"},r.a.createElement(Ln,{className:"front",ref:t},r.a.createElement(In,null),r.a.createElement(Nn,{style:{backgroundImage:"url("+n.badgePic+")"}}),r.a.createElement(On,{style:{backgroundImage:"url("+n.logoPic+")"}})),r.a.createElement(Pn,{className:"back",ref:i},r.a.createElement(In,null),r.a.createElement(On,{style:{backgroundImage:"url("+n.logoPic+")"}}),r.a.createElement(zn,null,r.a.createElement(kn,null,r.a.createElement("h2",{style:{fontSize:36,color:"#1059A3"}},"Site Reliability Engineer"),r.a.createElement("break",null),r.a.createElement("h3",{style:{fontSize:18}},"Summer 2019,"),r.a.createElement("h3",{style:{fontSize:18}},"May 2020 - ",r.a.createElement("b",null,"Now"))),r.a.createElement(Sn,null,r.a.createElement("ul",null,r.a.createElement("li",null,"Helping make IBMer lives easier!"),r.a.createElement("li",null,"A DevOps role with a focus on the ",r.a.createElement("b",null,"Dev")),r.a.createElement("li",null,"Some of my favourite projects that I've worked on:",r.a.createElement("ul",null,r.a.createElement("li",null,"REST APIs using IBM Cloud and Postgres"),r.a.createElement("li",null,"Slackbot (as a front end for the aforementioned APIs)"))))))))},Rn=t("gbfy"),Dn=t.n(Rn);function An(){var n=Xn(["\n    min-height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    @media "," {\n        /* flex-direction: column; */\n        height: auto;\n    }\n"]);return An=function(){return n},n}function Gn(){var n=Xn(["\n    background-color: #226666;\n    margin: 20px;\n    /* min-height: 70vh; */\n    min-width: 70vw;\n    border-radius: 15px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]);return Gn=function(){return n},n}function Bn(){var n=Xn(['\n    font-family: "BalsamiqSans-BoldItalic";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 5%;\n    margin-bottom: 5%;\n    color: white;\n    font-size: 30px;\n    flex-shrink: 2;\n    @media '," {\n        font-size: 20px;\n    }\n"]);return Bn=function(){return n},n}function Yn(){var n=Xn(["\n    min-height: 50vh;\n    min-width: 75%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    @media "," {\n        flex-direction: column;\n    }\n"]);return Yn=function(){return n},n}function Xn(n,e){return e||(e=n.slice(0)),n.raw=e,n}var Hn=c.a.div(Yn(),j.a.laptop),Un=c.a.div(Bn(),j.a.mobileXL),Jn=c.a.div(Gn()),Vn=c.a.div(An(),j.a.laptop),Fn=function(){var n=function(n){var e=Object(a.useRef)(null),t=Object(a.useState)(!1),r=t[0],i=t[1];return Object(a.useEffect)((function(){var t=new IntersectionObserver((function(n){var e=n[0];console.log(e.isIntersecting),i(e.isIntersecting)}),n),a=null;return e.current&&(t.observe(e.current),a=e.current),function(){a&&t.unobserve(a)}}),[e,n]),[e,r]}({root:null,rootMargin:"0px",threshold:.3}),e=n[0],t=n[1];return e.current&&(t?(console.log("experience in"),l.b.to(".experience",1,{rotation:0,x:0,opacity:1,ease:o.b.easeOut,stagger:{amount:.1}}),l.b.to(J()(".experience").children(),1,{x:0,opacity:1,ease:o.b.easeOut,stagger:{amount:.1}})):(console.log("experience out"),l.b.to(".experience",1,{rotation:-10,x:-100,opacity:0,ease:o.b.easeOut}),l.b.to(J()(".experience").children(),1,{x:-100,opacity:0,ease:o.b.easeOut}))),r.a.createElement(Vn,null,r.a.createElement(Jn,{className:"experience",ref:e},r.a.createElement(Un,null,"My Badges"),r.a.createElement(Hn,{className:"badgeHolder"},r.a.createElement(Tn,{className:"badge",badgePic:F.a,logoPic:Dn.a,comp:"ibm"}))))};function Zn(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n@media "," {\n  max-width: 305px;\n}\n@media "," {\n  max-width: 350px;\n}\n@media "," {\n  max-width: 635;\n}\n@media "," {\n  max-width: 753px;\n}\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n\n@media "," {\n  justify-content: left;\n}\n/* position: absolute;\ntop: 0; right: 0; bottom: 0; left: 0; */\n"]);return Zn=function(){return n},n}var Wn=("undefined"!=typeof window?t("HY/3"):null).ViewportProvider,qn=c.a.div(Zn(),j.a.mobileS,j.a.mobileM,j.a.mobileXL,j.a.tablet,j.a.mobileXL);e.default=function(){var n=Object(a.useRef)(null),e=new o.e,t=function(n){var e=Object(a.useRef)(null),t=Object(a.useState)(!1),r=t[0],i=t[1];return Object(a.useEffect)((function(){var t=new IntersectionObserver((function(n){var e=n[0];console.log(e.isIntersecting),i(e.isIntersecting)}),n),a=null;return e.current&&(t.observe(e.current),a=e.current),function(){a&&t.unobserve(a)}}),[e,n]),[e,r]}({root:null,rootMargin:"0px",threshold:.3}),c=t[0],u=t[1];return c.current&&(u?(console.log("title IN"),l.b.to(".secondaryRows",1.4,{opacity:1,x:0,ease:o.c.easeOut}),l.b.to(".mainRow",1.4,{opacity:1,x:0,ease:o.c.easeOut})):(console.log("title OUT"),l.b.to(".secondaryRows",1.4,{opacity:.3,x:-100,ease:o.c.easeOut}),l.b.to(".mainRow",1.4,{opacity:.3,x:100,ease:o.c.easeOut}))),Object(a.useEffect)((function(){e.to(n,0,{css:{visibility:"visible"}}),e.to(".secondaryRows",.01,{opacity:.3,x:-1e4}),e.to(".mainRow",.01,{opacity:.3,x:1e4})}),[]),r.a.createElement("div",{className:"app",ref:function(e){return n=e}},r.a.createElement(i.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"GURMEHAR SANDHU")),r.a.createElement("div",{ref:c,style:{width:"100%",overflowX:"hidden"}},r.a.createElement(qn,null,r.a.createElement(Wn,null,r.a.createElement(X,null)))),r.a.createElement(H.a,null),r.a.createElement("div",{style:{width:"100%",overflowX:"hidden"}},r.a.createElement(Wn,null,r.a.createElement(fn,null)),r.a.createElement(Wn,null,r.a.createElement(Fn,null))))}},TSYQ:function(n,e,t){var a;t("LK8F"),function(){"use strict";var t={}.hasOwnProperty;function r(){for(var n=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var i=typeof a;if("string"===i||"number"===i)n.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&n.push(o)}else if("object"===i)for(var l in a)t.call(a,l)&&a[l]&&n.push(l)}}return n.join(" ")}n.exports?(r.default=r,n.exports=r):void 0===(a=function(){return r}.apply(e,[]))||(n.exports=a)}()},gbfy:function(n,e){n.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI0MDAiPjxjbGlwUGF0aCBpZD0iQSI+PHBhdGggZD0iTTAtMXY4M2g1NS45djIzNkgxLjV2ODJoMTk1di04MmgtNTUuOVY4MkgxOTVWLTF6bTU1NCAxdjgyaDU1Ljl2MjM2aC01NC40djgyaDEzOVYxNzJsODIuNyAyMjggMS42OC4wNCA4MS4yLTIyOHYyMjhoMTQwdi04MmgtNTUuOXYtMjM2aDU0LjR2LTgyaC0xNTZsLTY0LjcgMTgzLTY1LjUtMTgzeiIvPjxwYXRoIGlkPSJCIiBkPSJNMjIyIDB2ODJoNTUuOXYxMzBoMjE1di0yNC45czE4LTE0IDIzLjgtMjcuNGwxMS41LTI1LjlzNS4zNS0xNC41IDUuMzUtMjcuNGwtMi4zLTI1LjlzLTMuNjItMjEuMS05LjkyLTI3LjNsLTIyLjMtMjUuOVM0NzAuNzMtLjEgNDMzLjEzLS4xem0xNDAgODJoODJ2NzZoLTgyeiIvPjx1c2UgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA0MDApIiB4bGluazpocmVmPSIjQiIvPjwvY2xpcFBhdGg+PHBhdGggZD0iTTAgMTMuN2gxMDMwdjUzLjJIMG0wIDUzLjJoOTc1djUzLjJIMHY1My4yaDk3NXY1My4ySDBtMCA1My4yaDEwMzB2NTMuMkgwIiBjbGlwLXBhdGg9InVybCgjQSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmNzBjMSIgc3Ryb2tlLXdpZHRoPSIyNy40Ii8+PC9zdmc+"},wx14:function(n,e,t){"use strict";function a(){return(a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}t.d(e,"a",(function(){return a}))},zLVn:function(n,e,t){"use strict";function a(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}t.d(e,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-index-js-d6fad3de4b9f110f29ef.js.map
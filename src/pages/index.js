import React from "react"
import { useRef, useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { gsap, TweenMax, Power3, TimelineLite } from 'gsap'

import CSSRulePlugin from 'gsap/CSSRulePlugin'

import "../styles/styles.scss"
import styled from "styled-components"
import Title from "../components/title"
import Header from "../components/header"
import About from "../components/about"
import { ViewportProvider } from "../components/viewport"
import * as constants from '../components/constant';
import Experience from "../components/experience"
// const ViewportProvider = typeof window !== `undefined` ? require("../components/viewport") : null

const Page = styled.div`
@media ${constants.device.mobileS} {
  max-width: 305px;
}
@media ${constants.device.mobileM} {
  max-width: 350px;
}
@media ${constants.device.mobileXL} {
  max-width: 635;
}
@media ${constants.device.tablet} {
  max-width: 753px;
}
display: flex;
align-items: center;
justify-content: center;

@media ${constants.device.mobileXL} {
  justify-content: left;
}
/* position: absolute;
top: 0; right: 0; bottom: 0; left: 0; */
`;

// For the title
const useOnScreen = (options) => {
  let ref = useRef(null);
  const [visibile, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      console.log(entry.isIntersecting);
      setVisible(entry.isIntersecting);
    }, options);
    let currRef = null;
    if (ref.current) {
      observer.observe(ref.current);
      currRef = ref.current;
    }

    return () => {
      if (currRef) {
        observer.unobserve(currRef);
      }
    }
  }, [ref, options]);

  return [ref, visibile];
}


const IndexPage = () => {
  let app = useRef(null);
  let tl = new TimelineLite();

  const [ref, visible] = useOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  });

  if (ref.current) {
    if (!visible) {
      console.log("title OUT");
      gsap.to(".secondaryRows", 1.4, { opacity: 0.3, x: -100, ease: Power3.easeOut });
      gsap.to(".mainRow", 1.4, { opacity: 0.3, x: 100, ease: Power3.easeOut });
    } else {
      console.log("title IN");
      gsap.to(".secondaryRows", 1.4, { opacity: 1, x: 0, ease: Power3.easeOut });
      gsap.to(".mainRow", 1.4, { opacity: 1, x: 0, ease: Power3.easeOut });
    }
  }

  useEffect(() => {
    tl.to(app, 0, { css: { visibility: 'visible' } });
    tl.to(".secondaryRows", 0.01, { opacity: 0.3, x: -10000 });
    tl.to(".mainRow", 0.01, { opacity: 0.3, x: 10000 });
  }, []);



  return (
    <div className="app" ref={el => app = el} >
      <Helmet>
        <meta charSet="utf-8" />
        <title>GURMEHAR SANDHU</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <div ref={ref} style={{ width: "100%", overflowX: "hidden" }}>
        <Page>
          {/* <ViewportProvider> */}
          <Title />
          {/* </ViewportProvider> */}
        </Page>
      </div>
      <Header />
      {/* <Page> */}
      <div style={{ width: "100%", overflowX: "hidden" }}>
        <ViewportProvider>
          <About />
        </ViewportProvider>
        {/* </Page> */}
        <ViewportProvider>
          <Experience />
        </ViewportProvider>
      </div>
    </div>
  );
}
export default IndexPage

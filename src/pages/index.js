import React from "react"
import { useRef, useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { gsap, TweenMax, Power3, TimelineLite } from 'gsap'

import "../styles/styles.css"
import styled from "styled-components"
import Header from "../components/header"
import Title from "../components/title"
import About from "../components/about"
import Experience from "../components/experience"
import { ViewportProvider } from "../components/viewport"
import * as constants from '../components/constant';

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

  useEffect(() => {
    tl.to(".app", 0, { css: { visibility: 'visible' } });
    tl.to(".secondaryRows", 0.01, { opacity: 0.3, x: -10000 });
    tl.to(".mainRow", 0.01, { opacity: 0.3, x: 10000 });
  }, []);

  return (
    <div className="app" ref={el => app = el} >
      <Helmet>
        <meta charSet="utf-8" />
        <title>GURMEHAR SANDHU</title>
      </Helmet>
      <div ref={ref} style={{ width: "100%", overflow: "hidden" }}>
        <Page>
          <Title />
        </Page>
      </div>
      <Header />
      <div style={{ width: "100%", overflow: "hidden" }}>
        <ViewportProvider>
          <About />
        </ViewportProvider>
      </div>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <ViewportProvider>
          <Experience />
        </ViewportProvider>
      </div>
    </div>
  );
}
export default IndexPage

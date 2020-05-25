import { Link } from "gatsby"
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { gsap, Power1 } from "gsap"
import * as constants from "./constant"

const size = constants.device;

const Navbar = styled.div`
  display: flex;
  width: 75vw;
  height: 8vh;
  opacity: 1;
  justify-content: space-between;
  align-items: center;
  background-color: #6F6CFF;
  opacity: 1;
  font-size: 30px;
  border-radius: 15px;
  @media ${size.mobileXL} {
    height: 5vh;
    font-size: 15px;
  }
`;

// Wrapper
const StyledHeader = styled.header`
  position: sticky;
  z-index: 10000;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const linkStyle = {
  margin: 'auto',
  color: 'white'
};


//Animate on scroll
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

const InnerHeader = () => (
  <Navbar>
    <Link style={linkStyle} to="/">GS</Link>
    <Link style={linkStyle} to="/about">About</Link>
    <Link style={linkStyle} to="/experience">Experience</Link>
    <Link style={linkStyle} to="/projects">Projects</Link>
  </Navbar>
);

const Header = () => {
  const [ref, visible] = useOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  });

  // Only want to animate the first time:
  const [animated, setAnimated] = useState(false);

  if (ref.current) {
    if (visible && !animated) {
      setAnimated(true);
      console.log("navbar in");
      gsap.to(".navbar", 0.5, {
        scaleX: 1.1,
        ease: Power1.easeOut
      });
      gsap.to(".navbar", 0.5, {
        scaleX: 1,
        ease: Power1.easeOut,
        delay: 0.2
      });
    }
  }
  return (
    <StyledHeader>
      <div ref={ref} className="navbar">
        <InnerHeader />
      </div>
    </StyledHeader>
  );
}

export default Header

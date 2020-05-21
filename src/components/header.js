import { Link } from "gatsby"
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

const Navbar = styled.div`
  display: flex;
  width: 75vw;
  height: 10vh;
  opacity: 1;
  justify-content: center;
  align-items: center;
  background-color: #6F6CFF;
  opacity: 1;
`;

// Wrapper
const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerHeader = () => (
  <Navbar>
    <div className="logo">
      <Link style={{ color: 'white' }} to="/">Logo</Link>
    </div>
    <div className="navigation">
      <Link style={{ color: 'white' }} to="/about">About</Link>
      <Link style={{ color: 'white' }} to="/projects">Projects</Link>
      <Link style={{ color: 'white' }} to="/experience">Experience</Link>
    </div>
  </Navbar>
);

const Header = () => {
  return (
    <StyledHeader>
      <InnerHeader />
    </StyledHeader>
  );
}

export default Header

import { Link } from "gatsby"
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

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


const InnerHeader = () => (
  <Navbar>
    <Link style={linkStyle} to="/">Logo</Link>
    <Link style={linkStyle} to="/about">About</Link>
    <Link style={linkStyle} to="/projects">Projects</Link>
    <Link style={linkStyle} to="/experience">Experience</Link>
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

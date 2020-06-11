import React from "react"
import { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import { Container, Row, Col } from 'react-bootstrap'
import "../styles/styles.scss"
import { useViewport } from "./viewport"
import { gsap, TweenMax, Power3, TimelineLite } from 'gsap'

import * as constants from './constant';

// const useViewport = typeof window !== `undefined` ? require("viewport") : null
const nameGrid = constants.nameGrid;
const mobileGrid = constants.mobileGrid;
const size = constants.device;
const breakpoint = 650; // This width (px) breaks the desktop title


const MainTitle = styled.div`
display: flex;
flex-wrap: nowrap;
/* flex-direction: column; */
/* width: 95vw; */
/* position: fixed; */
/* top: 0; right: 0; bottom: 0; left: 0; */
margin-top: 4vh;
margin-bottom: 10vh;
justify-content: center;
align-items: center;
min-height: 95vh;
`;

const MainLetterText = styled.h1`
font-size: 50px;
color: white;
font-family: "BalsamiqSans-BoldItalic";
z-index: 1;
@media ${size.mobileXL} {
  /* font-size: 25px; */
}
`;

const MainLetterDiv = styled.div`
/* background-color: #f1f1f1; */
width: 40px;
/* margin: 5px; */
text-align: center;
line-height: 4vh;

@media ${size.mobileXL} {
  width: auto;
  text-align: left;
  line-height: 30px;
  height: auto;
  margin: 0;
  margin-top: 1vh;
}
`;

const SecLetterText = styled.p`
font-size: 40px;
color: black;
z-index: 1;
@media ${size.mobileXL} {
  /* font-size: 20px; */
}
`;

const SecLetterDiv = styled.div`
/* background-color: #f1f1f1; */
width: 40px;
/* margin-left: 5px; */
margin-top: 3px;
text-align: center;
line-height: 4vh;

@media ${size.mobileXL} {
  width: auto;
  text-align: left;
  line-height: 50px;
  margin: 0;
  margin-top: 1vh;
}
`;


const DesktopGenerator = (props) => {
  const rowLength = props.nameGrid.length;
  let wholeTitle = useRef(null);
  let mainRow = useRef(null);

  return (
    <MainTitle ref={el => wholeTitle = el}>
      <Container fluid={true} >
        {props.nameGrid.map((row, idx) => {
          if (row[0] === 'G' || row[0].includes('gurm')) {
            return (
              <Row className="mainRow" xs sm md lg xl={rowLength} ref={el => mainRow = el} key={idx}>
                {
                  row.map((col, index) => {
                    return (
                      // <Col xs sm md lg xl={nameLength} >
                      <Col key={index}>
                        <MainLetterDiv>
                          <MainLetterText>{col}</MainLetterText>
                        </MainLetterDiv>
                      </Col>
                    );
                  })
                }
              </Row>
            );
          } else {
            return (
              <Row xs sm md lg xl={rowLength} className='secondaryRows' key={idx} >
                {
                  row.map((col, index) => {
                    return (
                      // <Col xs md lg xl={nameLength} >
                      <Col key={index}>
                        <SecLetterDiv>
                          <SecLetterText>{col}</SecLetterText>
                        </SecLetterDiv>
                      </Col>
                    );
                  })
                }
              </Row>
            );
          }
        })}
      </Container>
    </MainTitle>
  );
}

const TitleComponent = () => {
  const { width } = useViewport();
  console.log(width);
  if (width < breakpoint) {
    console.log("Should be mobile");
  }
  return (width < breakpoint) ? <DesktopGenerator nameGrid={mobileGrid} /> : <DesktopGenerator nameGrid={nameGrid} />;
}

const Title = () => {

  return (
    <TitleComponent />
  )
}


export default Title

import React from "react"
import { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import "../styles/styles.css"
import { Container, Row, Col } from 'react-bootstrap'
import { ViewportProvider } from "../components/viewport"
import { useViewport } from "./viewport"
import { gsap, TweenMax, Power3, TimelineLite } from 'gsap'

import * as constants from './constant';

const nameGrid = constants.nameGrid;
const mobileGrid = constants.mobileGrid;
const size = constants.device;
const breakpoint = 650; // This width (px) breaks the desktop title


const MainTitle = styled.div`
display: flex;
flex-wrap: nowrap;
width: 95vw;
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
width: 40px;
text-align: center;
line-height: 4vh;
display: flex;
justify-content: center;
align-items: center;
max-height: 6vh;

@media ${size.mobileXL} {
  max-height: auto;
  width: auto;
  text-align: left;
  line-height: 30px;
  height: auto;
  margin: 0;
  margin-top: 1vh;
  margin-left: 1rem;
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
width: 40px;
margin-top: 3px;
text-align: center;
line-height: 4vh;
display: flex;
justify-content: center;
align-items: center;
max-height: 6vh;

@media ${size.mobileXL} {
  max-height: auto;
  width: auto;
  text-align: left;
  line-height: 50px;
  margin: 0;
  margin-top: 1vh;
  margin-left: 1rem;
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

const DesktopGenerator = (props) => {
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
  return (
    <div ref={ref}>
      <MainTitle>
        {props.cont}
      </MainTitle>
    </div>
  );
}

const TitleComponent = () => {
  const { width } = useViewport();
  if (typeof window !== `undefined`) {
    console.log(width);
    if (width < breakpoint) {
      console.log("Should be mobile");
    }

    const rowLength = nameGrid[0].length;
    console.log("Row Length", rowLength);
    const desktopContainer = (
      <Container fluid={true}>
        < Row xs sm md lg xl={rowLength} style={{ display: "flex", minWidth: "95vw", justifyContent: "space-between", maxHeight: "95vh" }} key={0} className="secondaryRows" >
          {
            nameGrid[0].map((col, index) => {
              return (
                <Col key={index}>
                  <SecLetterDiv >
                    <SecLetterText>{col}</SecLetterText>
                  </SecLetterDiv>
                </Col>
              );
            })
          }
        </Row >
        <Row xs sm md lg xl={rowLength} style={{ display: "flex", minWidth: "95vw", justifyContent: "space-between", maxHeight: "95vh" }} key={1} className="secondaryRows">
          {
            nameGrid[1].map((col, index) => {
              return (
                <Col key={index}>
                  <SecLetterDiv >
                    <SecLetterText>{col}</SecLetterText>
                  </SecLetterDiv>
                </Col>
              );
            })
          }
        </Row>
        <Row xs sm md lg xl={rowLength} style={{ display: "flex", minWidth: "95vw", justifyContent: "space-between", maxHeight: "95vh" }} key={2} className="secondaryRows">
          {
            nameGrid[2].map((col, index) => {
              return (
                <Col key={index}>
                  <SecLetterDiv >
                    <SecLetterText>{col}</SecLetterText>
                  </SecLetterDiv>
                </Col>
              );
            })
          }
        </Row>
        <Row xs sm md lg xl={rowLength} style={{ display: "flex", minWidth: "95vw", justifyContent: "space-between", maxHeight: "95vh" }} key={3} className="secondaryRows">
          {
            nameGrid[3].map((col, index) => {
              return (
                <Col key={index}>
                  <SecLetterDiv >
                    <SecLetterText>{col}</SecLetterText>
                  </SecLetterDiv>
                </Col>
              );
            })
          }
        </Row>
        <Row xs sm md lg xl={rowLength} style={{ display: "flex", minWidth: "95vw", justifyContent: "space-between", maxHeight: "95vh" }} key={4} className="secondaryRows">
          {
            nameGrid[4].map((col, index) => {
              return (
                <Col key={index}>
                  <SecLetterDiv >
                    <SecLetterText>{col}</SecLetterText>
                  </SecLetterDiv>
                </Col>
              );
            })
          }
        </Row>
        <Row xs sm md lg xl={rowLength} style={{ display: "flex", minWidth: "95vw", justifyContent: "space-between", maxHeight: "95vh" }} key={5} className="secondaryRows">
          {
            nameGrid[5].map((col, index) => {
              return (
                <Col key={index}>
                  <SecLetterDiv >
                    <SecLetterText>{col}</SecLetterText>
                  </SecLetterDiv>
                </Col>
              );
            })
          }
        </Row>
        <Row xs sm md lg xl={rowLength} style={{ display: "flex", minWidth: "95vw", justifyContent: "space-between", maxHeight: "95vh" }} key={6} className="mainRow">
          {
            nameGrid[6].map((col, index) => {
              return (
                <Col key={index}>
                  <MainLetterDiv>
                    <MainLetterText>{col}</MainLetterText>
                  </MainLetterDiv>
                </Col>
              );
            })
          }
        </Row>
        <Row xs sm md lg xl={rowLength} style={{ display: "flex", minWidth: "95vw", justifyContent: "space-between", maxHeight: "95vh" }} key={7} className="secondaryRows">
          {
            nameGrid[7].map((col, index) => {
              return (
                <Col key={index}>
                  <SecLetterDiv >
                    <SecLetterText>{col}</SecLetterText>
                  </SecLetterDiv>
                </Col>
              );
            })
          }
        </Row>
        <Row xs sm md lg xl={rowLength} style={{ display: "flex", minWidth: "95vw", justifyContent: "space-between", maxHeight: "95vh" }} key={8} className="secondaryRows">
          {
            nameGrid[8].map((col, index) => {
              return (
                <Col key={index}>
                  <SecLetterDiv >
                    <SecLetterText>{col}</SecLetterText>
                  </SecLetterDiv>
                </Col>
              );
            })
          }
        </Row>
        <Row xs sm md lg xl={rowLength} style={{ display: "flex", minWidth: "95vw", justifyContent: "space-between", maxHeight: "95vh" }} key={9} className="secondaryRows">
          {
            nameGrid[9].map((col, index) => {
              return (
                <Col key={index}>
                  <SecLetterDiv >
                    <SecLetterText>{col}</SecLetterText>
                  </SecLetterDiv>
                </Col>
              );
            })
          }
        </Row>
        <Row xs sm md lg xl={rowLength} style={{ display: "flex", minWidth: "95vw", justifyContent: "space-between", maxHeight: "95vh" }} key={10} className="secondaryRows">
          {
            nameGrid[10].map((col, index) => {
              return (
                <Col key={index}>
                  <SecLetterDiv >
                    <SecLetterText>{col}</SecLetterText>
                  </SecLetterDiv>
                </Col>
              );
            })
          }
        </Row>
        <Row xs sm md lg xl={rowLength} style={{ display: "flex", minWidth: "95vw", justifyContent: "space-between", maxHeight: "95vh" }} key={11} className="secondaryRows">
          {
            nameGrid[11].map((col, index) => {
              return (
                <Col key={index}>
                  <SecLetterDiv >
                    <SecLetterText>{col}</SecLetterText>
                  </SecLetterDiv>
                </Col>
              );
            })
          }
        </Row>
        <Row xs sm md lg xl={rowLength} style={{ display: "flex", minWidth: "95vw", justifyContent: "space-between", maxHeight: "95vh" }} key={12} className="secondaryRows">
          {
            nameGrid[12].map((col, index) => {
              return (
                <Col key={index}>
                  <SecLetterDiv >
                    <SecLetterText>{col}</SecLetterText>
                  </SecLetterDiv>
                </Col>
              );
            })
          }
        </Row>
        <Row xs sm md lg xl={rowLength} style={{ display: "flex", minWidth: "95vw", justifyContent: "space-between", maxHeight: "95vh" }} key={13} className="secondaryRows">
          {
            nameGrid[13].map((col, index) => {
              return (
                <Col key={index}>
                  <SecLetterDiv >
                    <SecLetterText>{col}</SecLetterText>
                  </SecLetterDiv>
                </Col>
              );
            })
          }
        </Row>
        <Row xs sm md lg xl={rowLength} style={{ display: "flex", minWidth: "95vw", justifyContent: "space-between", maxHeight: "95vh" }} key={14} className="secondaryRows">
          {
            nameGrid[14].map((col, index) => {
              return (
                <Col key={index}>
                  <SecLetterDiv >
                    <SecLetterText>{col}</SecLetterText>
                  </SecLetterDiv>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    )
    const mobileContainer = (
      <Container fluid={true}>
        <Row xs sm md lg xl={rowLength} style={{ display: "flex", minWidth: "95vw", justifyContent: "space-between", maxHeight: "95vh" }} key={0} className="secondaryRows">
          {
            mobileGrid[0].map((col, index) => {
              return (
                <Col key={index}>
                  <SecLetterDiv >
                    <SecLetterText>{col}</SecLetterText>
                  </SecLetterDiv>
                </Col>
              );
            })
          }
        </Row>
        <Row xs sm md lg xl={rowLength} style={{ display: "flex", minWidth: "95vw", justifyContent: "space-between", maxHeight: "95vh" }} key={1} className="secondaryRows">
          {
            mobileGrid[1].map((col, index) => {
              return (
                <Col key={index}>
                  <SecLetterDiv >
                    <SecLetterText>{col}</SecLetterText>
                  </SecLetterDiv>
                </Col>
              );
            })
          }
        </Row>
        <Row xs sm md lg xl={rowLength} style={{ display: "flex", minWidth: "95vw", justifyContent: "space-between", maxHeight: "95vh" }} key={2} className="mainRow">
          {
            mobileGrid[2].map((col, index) => {
              return (
                <Col key={index}>
                  <MainLetterDiv>
                    <MainLetterText>{col}</MainLetterText>
                  </MainLetterDiv>
                </Col>
              );
            })
          }
        </Row>
        <Row xs sm md lg xl={rowLength} style={{ display: "flex", minWidth: "95vw", justifyContent: "space-between", maxHeight: "95vh" }} key={3} className="secondaryRows">
          {
            mobileGrid[3].map((col, index) => {
              return (
                <Col key={index}>
                  <SecLetterDiv >
                    <SecLetterText>{col}</SecLetterText>
                  </SecLetterDiv>
                </Col>
              );
            })
          }
        </Row>
        <Row xs sm md lg xl={rowLength} style={{ display: "flex", minWidth: "95vw", justifyContent: "space-between", maxHeight: "95vh" }} key={4} className="secondaryRows">
          {
            mobileGrid[4].map((col, index) => {
              return (
                <Col key={index}>
                  <SecLetterDiv >
                    <SecLetterText>{col}</SecLetterText>
                  </SecLetterDiv>
                </Col>
              );
            })
          }
        </Row>
        <Row xs sm md lg xl={rowLength} style={{ display: "flex", minWidth: "95vw", justifyContent: "space-between", maxHeight: "95vh" }} key={5} className="secondaryRows">
          {
            mobileGrid[5].map((col, index) => {
              return (
                <Col key={index}>
                  <SecLetterDiv >
                    <SecLetterText>{col}</SecLetterText>
                  </SecLetterDiv>
                </Col>
              );
            })
          }
        </Row>
        <Row xs sm md lg xl={rowLength} style={{ display: "flex", minWidth: "95vw", justifyContent: "space-between", maxHeight: "95vh" }} key={6} className="secondaryRows">
          {
            mobileGrid[6].map((col, index) => {
              return (
                <Col key={index}>
                  <SecLetterDiv >
                    <SecLetterText>{col}</SecLetterText>
                  </SecLetterDiv>
                </Col>
              );
            })
          }
        </Row>
        <Row xs sm md lg xl={rowLength} style={{ display: "flex", minWidth: "95vw", justifyContent: "space-between", maxHeight: "95vh" }} key={7} className="secondaryRows">
          {
            mobileGrid[7].map((col, index) => {
              return (
                <Col key={index}>
                  <SecLetterDiv >
                    <SecLetterText>{col}</SecLetterText>
                  </SecLetterDiv>
                </Col>
              );
            })
          }
        </Row>
        <Row xs sm md lg xl={rowLength} style={{ display: "flex", minWidth: "95vw", justifyContent: "space-between", maxHeight: "95vh" }} key={8} className="mainRow">
          {
            mobileGrid[8].map((col, index) => {
              return (
                <Col key={index}>
                  <MainLetterDiv>
                    <MainLetterText>{col}</MainLetterText>
                  </MainLetterDiv>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    )
    return (width < breakpoint) ? <DesktopGenerator cont={mobileContainer} /> : <DesktopGenerator cont={desktopContainer} />;
  }
  return <DesktopGenerator nameGrid={nameGrid} />
}

const Title = () => {

  return (
    <ViewportProvider>
      <TitleComponent />
    </ViewportProvider>
  )
}

export default Title

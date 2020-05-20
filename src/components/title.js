import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from 'react-bootstrap'
import "../styles/styles.scss"
import { useViewport } from "./viewport"

const constants = require('./constant.js');
const nameGrid = constants.nameGrid;
const size = constants.size;
const nameLength = nameGrid.length;
const breakpoint = 475; // This width breaks the title


const MainTitle = styled.div`
display: flex;
flex-wrap: nowrap;
height: 95vh;
width: 95vw;
`;

const MainLetterText = styled.h1`
font-size: 50px;
color: white;
@media ${size.mobileL} {
  font-size: 25px;
}
`;

const MainLetterDiv = styled.div`
/* background-color: #f1f1f1; */
width: 100px;
margin: 10px;
text-align: center;
line-height: 50px;
@media ${size.mobileL} {
  width: 30px;
}
`;

const SecLetterText = styled.p`
font-size: 40px;
color: black;
@media ${size.mobileL} {
  font-size: 20px;
  display: none;
}
`;

const SecLetterDiv = styled.div`
/* background-color: #f1f1f1; */
width: 100px;
margin-left: 10px;
margin-top: 3px;
text-align: center;
line-height: 35px;
@media ${size.mobileL} {
  width: 30px;
}
`;

const Page = styled.div`
@media ${size.mobileS} {
  max-width: 300px;
}
@media ${size.mobileM} {
  max-width: 350px;
}
@media ${size.mobileL} {
  max-width: 400px;
}
@media ${size.tablet} {
  max-width: 700px;
}
`;

const desktopGenerator = (nameGrid) => {
  return (
    <MainTitle>
      <Container>
        {nameGrid.map(row => {
          if (row[0] === 'G') {
            return (
              <Row>
                {
                  row.map(col => {
                    return (
                      <Col xs sm md lg xl={nameLength} >
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
              <Row>
                {
                  row.map(col => {
                    return (
                      <Col xs md lg xl={nameLength} >
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
  console.log("Width", width);
  return (width < breakpoint) ? <h1>Mobile</h1> : desktopGenerator(nameGrid);
}

const Title = () => (
  <>
    <TitleComponent />
  </>
)

export default Title

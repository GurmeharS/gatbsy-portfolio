import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from 'react-bootstrap'
import "../styles/styles.scss"

const constants = require('./constant.js');
const nameGrid = constants.nameGrid;
const size = constants.size;
const nameLength = nameGrid.length;

const MainTitle = styled.div`
display: flex;
flex-wrap: nowrap;
height: 95vh;
width: 95vw;
/* justify-content: center;
align-items: center; */
`;

const MainLetterText = styled.h1`
font-size: 50px;
color: white;
`;

const MainLetterDiv = styled.div`
/* background-color: #f1f1f1; */
width: 100px;
margin: 10px;
text-align: center;
line-height: 50px;
`;

const SecLetterText = styled.p`
font-size: 40px;
color: black;
`;

const SecLetterDiv = styled.div`
/* background-color: #f1f1f1; */
width: 100px;
margin-left: 10px;
margin-top: 3px;
text-align: center;
line-height: 40px;
`;

const TitleContainer = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
`;

const titleGenerator = (nameGrid) => {
  console.log(nameGrid);
  return (
    <MainTitle>
      <Container>
        {nameGrid.map(row => {
          console.log("New Row");
          if (row[0] === 'G') {
            return (
              <Row>
                {
                  row.map(col => {
                    return (
                      <Col xs md lg xl={nameLength} >
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

const Title = () => (
  <>
    {titleGenerator(nameGrid)}
  </>
)

export default Title

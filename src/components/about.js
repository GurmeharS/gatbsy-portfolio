import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from "gatsby"

import "../styles/styles.scss"
import { useViewport } from "./viewport"
import * as constants from './constant';

import gurmPic from '../images/gurmehar_pic.jpg';

const AboutImage = styled.img`
    max-width: 150%;
    width: 150%;
    /* height: 150%; */
    border-radius: 15px;
    margin: 0;
    transform: rotate(-45deg);
`;

const ImgSquare = styled.div`
    width: 15vw;
    height: 15vw;
    background: blueviolet;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px;
    transform: rotate(45deg);
    overflow: hidden;
    position: relative;
    border-radius: 15px;
    border: 3px solid #FFC0CB;

    @media ${constants.device.laptop} {
        width: 25vw;
        height: 25vw;
    }

    @media ${constants.device.mobileXL} {
        /* width: 40vw;
        height: 40vw; */
    }
`;

const AboutImageHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 50%;
    margin: 5vh;
    margin-left: 10vh;
    /* overflow: hidden; */
    border-radius: 20px;
    @media ${constants.device.laptop} {
        margin-bottom: auto;
        width: 40vw;
        height: 40vw;
        margin-left: 5vh;
    }
    
    @media ${constants.device.mobileXL} {
        max-width: 90%;
    }
`;

const AboutList = styled.ul`
    background: #FFC0CB;
    border-radius: 15px;
    padding: 10px;
    list-style-position: inside;
    margin-left: auto;
`;

const AboutText = styled.p`
    margin: 10px;
    margin-top: 0;
    font-size: 20px;
    color: white;
    @media ${constants.device.mobileXL} {
        font-size: 15px;
    }
`;

const AboutTitle = styled.div`
    font-family: "BalsamiqSans-BoldItalic";
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 0;
    color: white;
    font-size: 30px;
    @media ${constants.device.mobileXL} {
        font-size: 20px;
    }
`;

const AboutTextHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #FFC0CB;
    max-width: 50%;
    /* overflow: hidden; */
    flex-wrap: wrap;
    margin: 5vh;
    /* margin-left: auto; */
    border-radius: 15px;
    flex-direction: column;
    @media ${constants.device.laptop} {
        max-width: 90%;
        margin-left: 5vh;
    }
`;

const AboutBox = styled.div`
    background-color: #226666;
    margin: 20px;
    min-height: 50vh;
    width: 70vw;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    @media ${constants.device.laptop} {
        flex-direction: column;
    }
`;

const AboutContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    @media ${constants.device.laptop} {
        flex-direction: column;
        height: auto;
    }
`;

const About = () => {

    return (
        <AboutContainer>
            <AboutBox>
                <AboutImageHolder>
                    <ImgSquare>
                        <AboutImage src={gurmPic} />
                    </ImgSquare>
                </AboutImageHolder>
                <AboutTextHolder>
                    <AboutTitle>Who Am I?</AboutTitle>
                    <AboutText>
                        <center>
                            I'm Gurmehar Sandhu.<br />
                            Welcome to my website/portfolio.<br />
                            I'm not a fan of long paragraphs, so here are some quick facts about me:<br /><br />
                        </center>
                        <AboutList>
                            <li style={{ color: 'black' }}>I just finished my 3rd Year of Computer Engineering at the University of Toronto</li>
                            <li style={{ color: 'black' }}>I'm currently doing a PEY Co-op as an <a style={{ color: 'white' }} href={"https://landing.google.com/sre/"} target="_blank"><u>SRE</u></a> at IBM Canada.</li>
                            <li style={{ color: 'black' }}>I enjoy basketball (and just about any other sport), gaming, and desigining/developing software</li>
                            <li style={{ color: 'black' }}>LeBron James is the GOAT </li>
                        </AboutList><br />
                        <center>
                            Sorry, had to slide that last one in there.<br />
                            Feel free to reach out and yell at me.
                        </center>
                    </AboutText>
                </AboutTextHolder>
            </AboutBox>
        </AboutContainer>
    )
}


export default About
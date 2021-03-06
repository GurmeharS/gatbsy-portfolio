import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import { gsap, TimelineLite, Power1 } from "gsap"
import "../styles/styles.css"
import * as constants from './constant';

import gurmPic from '../images/gurmehar_pic.jpg';
// import $ from 'jquery'
const jq = typeof window !== `undefined` ? require("jquery") : null
const $ = jq ? jq.$ : null;

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
    margin: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
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
    margin-bottom: 1rem;
    color: white;
    font-size: 30px;
    text-align: center;
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
        overflow-y: visible;
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
        overflow-y: visible;
    }
`;

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

const About = () => {
    const [ref, visible] = useOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    });

    if (ref.current) {
        if (!visible) {
            console.log("About out");
            gsap.to((".about"), 1, {
                rotation: 10,
                x: 100,
                opacity: 0,
                ease: Power1.easeOut
            });

            gsap.to(".aboutChild", 1, {
                x: 100,
                opacity: 0,
                ease: Power1.easeOut
            });
        } else {
            console.log("About in");
            gsap.to(".about", 1, {
                rotation: 0,
                x: 0,
                opacity: 1,
                ease: Power1.easeOut,
                stagger: {
                    amount: 0.1
                }
            });
            gsap.to(".aboutChild", 1, {
                x: 0,
                opacity: 1,
                ease: Power1.easeOut,
                stagger: {
                    amount: 0.1
                }
            });
        }
    }

    return (
        <AboutContainer>
            <AboutBox ref={ref} className='about'>
                <AboutImageHolder className='aboutChild'>
                    <ImgSquare>
                        <AboutImage src={gurmPic} />
                    </ImgSquare>
                </AboutImageHolder>
                <AboutTextHolder className='aboutChild'>
                    <AboutTitle>Who Am I?</AboutTitle>
                    <center>
                        <AboutText>
                            I'm Gurmehar Sandhu.<br />
                            Welcome to my website/portfolio.<br />
                        </AboutText>
                    </center>
                    <AboutList>
                        <li style={{ color: 'black' }}>I just finished my 3rd Year of Computer Engineering at the University of Toronto</li>
                        <li style={{ color: 'black' }}>I'm currently doing a PEY Co-op as an <a style={{ color: 'white' }} href={"https://landing.google.com/sre/"} target="_blank"><u>SRE</u></a> at IBM Canada.</li>
                        <li style={{ color: 'black' }}>I enjoy basketball (and just about any other sport), gaming, and desigining/developing software</li>
                        <li style={{ color: 'black' }}>LeBron James is the GOAT </li>
                    </AboutList>
                    <center>
                        <AboutText>
                            Sorry, had to slide that last one in there.<br />
                                Feel free to reach out and yell at me.
                    </AboutText>
                    </center>
                </AboutTextHolder>
            </AboutBox>
        </AboutContainer >
    )
}


export default About

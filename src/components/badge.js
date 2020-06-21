// Work badge
import React from "react"
import { useRef, useState } from "react"
import { TweenMax, CSSPlugin, TimelineMax } from 'gsap'
import styled from "styled-components"
import * as constants from './constant'

const BadgeNotch = styled.div`
    position: absolute;
    top: 10px;
    height: 10px;
    width: 50px;
    background: #373636;
    border-radius: 10px;
    @media ${constants.device.laptop} {
        height: 7px;
        width: 30px;
    }
`;

const BadgeLogo = styled.div`
    height: 40px;
    width: 40%;
    margin-bottom: 20px;
    margin-top: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

const BadgePic = styled.div`
    height: 200px;
    width: 60%;
    background: #373636;
    margin: 10px;
    margin-top: 20px;
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    @media ${constants.device.laptop} {
        margin-top: 30px;
    }
    @media ${constants.device.tablet} {
        height: 150px;
        width: 60%;
        margin-bottom: 0;
    }
    @media ${constants.device.mobileXL} {
        height: 100px;
    }
`;

const BadgeFront = styled.div`
    width: 100%;
    border-radius: 15px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: #D7DAE0;
    transition: 0.3s;
    cursor: pointer;
    height: 350px;
    backface-visibility: hidden;
    @media ${constants.device.tablet} {
        height: 300px;
    }
    @media ${constants.device.mobileXL} {
        height: 200px;
        /* visibility: hidden; */
    }
`;

const JobInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    @media ${constants.device.tablet} {
        flex-direction: column;
    }
`;

const JobHeader = styled.div`
    text-align: right;
    .h2 {
        color: #1059A3;
    }
    .h3 {
        color: #131111;
    }
`;

const JobDesc = styled.div`
    background: #C4C4C4;
    border-radius: 15px;
    text-align: left;
    margin: 1rem;
    padding: 1rem;
`;

const BadgeBack = styled.div`
    min-width: 60vw;
    border-radius: 15px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: #D7DAE0;
    transition: 0.3s;
    cursor: pointer;
    height: 350px;
    backface-visibility: hidden;
    overflow: hidden;
    padding: 1rem;

    @media ${constants.device.laptop} {
        min-height: 350px;
        height: auto;
    }

    /* Change this because of flex direction change */
    /* @media ${constants.device.tablet} {
        min-height: 300px;
    } */
    @media ${constants.device.tablet} {
        min-height: 300px;
        width: 65vw;
        visibility: hidden;
    }
`;

const BadgeContainer = styled.div`
    float: left;
    margin: 20px;
    margin-bottom: 30px;
    margin-top: 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 20%;
    height: auto;
    @media ${constants.device.laptop} {
        min-width: 40%;
    }
    @media ${constants.device.tablet} {
        min-height: 300px;
        min-height: 70vh;
        /* align-items: space-around; */
    }
    @media ${constants.device.mobileXL} {
        min-height: 110vh;
        height: auto;
    }
`;
// Need to pass this, badge pic, logo pic, job title, Job dates (string), description
const Badge = (props) => {
    let cardCont = useRef(null);
    let frontCard = useRef(null);
    let backCard = useRef(null);

    CSSPlugin.defaultTransformPerspective = 1000;

    //we set the backface
    if (!(typeof window !== `undefined` && window.matchMedia("(max-width: 768px)").matches)) {
        TweenMax.set(backCard.current, { rotationY: -180 });
    }
    let tl = new TimelineMax({ paused: true });
    if (frontCard.current && backCard.current) {
        tl
            .to(frontCard.current, 1, { rotationY: 180 })
            .to(backCard.current, 1, { rotationY: 0 }, 0)
            .to(cardCont.current, .5, { z: 50 }, 0)
            .to(cardCont.current, .5, { z: 0 }, .5);
    }

    function elOver() {
        console.log("In over")
        if (!(typeof window !== `undefined` && window.matchMedia("(max-width: 768px)").matches)) {
            tl.play();
        } else {
            window.alert("For more details please open this page on a larger screen.")
        }
    }

    function elOut() {
        if (!(typeof window !== `undefined` && window.matchMedia("(max-width: 768px)").matches)) {
            tl.reverse();
        }
    }

    return (
        <BadgeContainer className="cardCont" onMouseEnter={elOver} onMouseLeave={elOut} ref={cardCont}>
            <BadgeFront className="front" ref={frontCard} >
                <BadgeNotch />
                <BadgePic style={{ backgroundImage: `url(${props.badgePic})` }} />
                <BadgeLogo style={{ backgroundImage: `url(${props.logoPic})` }} />
            </BadgeFront>
            <BadgeBack className="back" ref={backCard} >
                <BadgeNotch />
                <BadgeLogo style={{ backgroundImage: `url(${props.logoPic})` }} />
                <JobInfo>
                    <JobHeader>
                        <h2 style={{ fontSize: 36, color: "#1059A3" }}>Site Reliability Engineer</h2>
                        <br />
                        <h3 style={{ fontSize: 18 }}>Summer 2019,</h3>
                        <h3 style={{ fontSize: 18 }}>May 2020 - <b>Now</b></h3>
                    </JobHeader>
                    <JobDesc>
                        <ul >
                            <li>A DevOps role with a focus on the <b>Dev</b></li>
                            <li>
                                Some of my favourite projects that I've worked on:
                                <ul>
                                    <li>REST APIs using IBM Cloud and Postgres</li>
                                    <li>Slackbot (as a front end for the aforementioned APIs)</li>
                                </ul>
                            </li>
                        </ul>
                    </JobDesc>
                </JobInfo>
            </BadgeBack>
        </BadgeContainer>
    )
}

export default Badge
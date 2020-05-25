import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { gsap, Power1 } from 'gsap'
import "../styles/styles.scss"
import { useViewport } from "./viewport"
import Badge from "./badge"
import * as constants from './constant'
import gurmPic from '../images/gurmehar_pic.jpg'
import ibmLogo from '../images/IBM_logo.svg'

const BadgeHolder = styled.div`
    min-height: 50vh;
    min-width: 75%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    @media ${constants.device.laptop} {
        flex-direction: column;
    }
`;

const ExperienceTitle = styled.div`
    font-family: "BalsamiqSans-BoldItalic";
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
    margin-bottom: 5%;
    color: white;
    font-size: 30px;
    flex-shrink: 2;
    @media ${constants.device.mobileXL} {
        font-size: 20px;
    }
`;

const ExperienceBox = styled.div`
    background-color: #226666;
    margin: 20px;
    /* min-height: 70vh; */
    min-width: 70vw;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ExperienceContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media ${constants.device.laptop} {
        /* flex-direction: column; */
        height: auto;
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

const Experience = () => {
    const [ref, visible] = useOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    });

    if (ref.current) {
        if (!visible) {
            console.log("About out");
            gsap.to(ref.current, 1, {
                x: -100,
                opacity: 0,
                ease: Power1.easeOut
            });
        } else {
            console.log("About in");
            gsap.to(ref.current, 1, {
                x: 0,
                opacity: 1,
                ease: Power1.easeOut,
                stagger: {
                    amount: 0.3
                }
            });
        }
    }

    return (
        <ExperienceContainer>
            <ExperienceBox ref={ref}>
                <ExperienceTitle>My Badges</ExperienceTitle>
                <BadgeHolder>
                    <Badge badgePic={gurmPic} logoPic={ibmLogo} />
                    <Badge />
                </BadgeHolder>
            </ExperienceBox>
        </ExperienceContainer>
    )
};

export default Experience
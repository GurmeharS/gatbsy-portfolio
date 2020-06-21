import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { gsap, Power1 } from 'gsap'
import "../styles/styles.css"
import * as constants from './constant'
import githubLogo from "../images/github.png"


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

const GithubImg = styled.img`
    height: 30px;
    width: 30px;
`;

const ProjectDescription = styled.p`
    font-size: 15px;
    color: white;
    background-color: rgba(0,0,0,0.5);
    border-radius: 15px;
    padding: 1rem;
    height: 100px;
`;

const ProjectName = styled.h2`
    font-size: 20px;
    text-decoration: underline;
    color: white;
`;

const Project = styled.div`
    background-color: #226666;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    margin: 2rem;
    text-align: center;
    border-radius: 15px;
    width: 275px;
    height: 275px;
    justify-content: center;
    align-items: space-around;
`;

const ProjectTitle = styled.div`
    background-color: #226666;
    padding: 1rem;
    font-family: "BalsamiqSans-BoldItalic";
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 30px;
    text-align: center;
    border-radius: 15px;
    @media ${constants.device.mobileXL} {
        font-size: 20px;
    }
`;

const ProjectsHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: space-around;
    @media ${constants.device.mobileXL} {
        flex-direction: column;
    }
`;

const ProjectsBox = styled.div`
    background-color: #30977F;
    margin: 20px;
    /* min-height: 70vh; */
    min-width: 70vw;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


const Projects = () => {

    const [ref, visible] = useOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    });

    if (ref.current) {
        if (!visible) {
            console.log("projects out");
            gsap.to((".projects"), 1, {
                rotation: 10,
                x: 100,
                opacity: 0,
                ease: Power1.easeOut
            });
            gsap.to(".projectsChild", 1, {
                x: 100,
                opacity: 0,
                ease: Power1.easeOut
            });
        } else {
            console.log("projects in");
            gsap.to(".projects", 1, {
                rotation: 0,
                x: 0,
                opacity: 1,
                ease: Power1.easeOut,
                stagger: {
                    amount: 0.1
                }
            });
            gsap.to(".projectsChild", 1, {
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
        <ProjectsBox ref={ref} className="projects">
            <ProjectTitle className="projectsChild">My Projects</ProjectTitle>
            <ProjectsHolder className="projectsChild">
                <Project>
                    <ProjectName>WhenToWatch</ProjectName>
                    <ProjectDescription>An analyzer and notifier for when to tune into NBA games!</ProjectDescription>
                    <a style={{ height: "30px" }} href="https://github.com/GurmeharS" target="_blank">
                        <GithubImg src={githubLogo} />
                    </a>
                </Project>
                <Project>
                    <ProjectName>Helpathon</ProjectName>
                    <ProjectDescription>An easy way to organize hackathons!</ProjectDescription>
                    <a style={{ height: "30px" }} href="https://github.com/GurmeharS/Helpathon" target="_blank">
                        <GithubImg src={githubLogo} />
                    </a>
                </Project>
            </ProjectsHolder>
        </ProjectsBox>
    )
}


export default Projects
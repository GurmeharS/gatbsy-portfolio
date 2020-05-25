// Work badge
import React from "react"
import { useRef, useState } from "react"
import { TweenMax } from 'gsap'
import styled from "styled-components"

import * as constants from './constant'

const BadgeNotch = styled.div`
    height: 10px;
    width: 50px;
    background: #373636;
    margin: 10px;
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
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

const BadgePic = styled.div`
    height: 200px;
    width: 60%;
    background: #373636;
    margin: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    @media ${constants.device.laptop} {
        height: 100px;
        width: 60%;
        margin-bottom: 0;
    }
`;

const BadgeFront = styled.div`
    min-height: 100%;
    width: 25%;
    border-radius: 15px;
    margin: 20px;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: #D7DAE0;
    transition: 0.3s;
    &:hover {
        width: 30%;
    }
    @media ${constants.device.laptop} {
        width: 40%;
    }
`;

// Need to pass this, badge pic, logo pic, job title, Job dates (string), description
const Badge = (props) => {
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    };

    return (
        <BadgeFront>
            <BadgeNotch />
            <BadgePic style={{ backgroundImage: `url(${props.badgePic})` }} />
            <BadgeLogo style={{ backgroundImage: `url(${props.logoPic})` }} />
        </BadgeFront>
    )
}

export default Badge
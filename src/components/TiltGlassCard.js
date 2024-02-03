import React from "react";
import Tilt from 'react-parallax-tilt';
import '../styles/TiltGlassCard.css';

const TiltGlassCard = (props) => {
    return (
        <Tilt className='tiltComponent' tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} transitionEasing='cubic-bezier(0,0.33,0.67,1)'>
            <div>
                {props.children}
            </div>
        </Tilt>
    );
}

export default TiltGlassCard;
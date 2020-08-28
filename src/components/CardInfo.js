import React from 'react';
import { useSpring, animated} from 'react-spring';
import {
    Link
  } from "react-router-dom";

function CardInfo(props) {
    const style = useSpring({opacity: 1, from: {opacity:0}})

    return(
        <animated.div className="g-card-info" style={style}>
            <p className="g-card-title">{props.title}</p>
            <p className="g-card-subTitle">{props.subTitle}</p>
            <Link to={props.link} > <button type="button" class="btn btn-primary">View Here</button></Link>
        </animated.div>
    )
}

export default CardInfo;
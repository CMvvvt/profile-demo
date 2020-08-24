import React from 'react';

function IconInfo(props) {
    return(
        <div className="social">
            <a href={props.item.link}> <i className={props.item.name}></i> </a>
        </div>
    )
}

export default IconInfo;
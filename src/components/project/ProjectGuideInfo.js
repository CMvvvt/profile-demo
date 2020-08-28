import React from 'react';
import './ProjectGuide.css';
import {
    Link
  } from "react-router-dom";


// 完整渲染整个Project页面 split成三个部分
function ProjectGuideInfo(props) {
    return(
        <div className="project-guide">
                <div className="split-left left">
                    <div className="blogName">
                         <Link to="/project"><h1>{props.leftBar.title}</h1></Link>
                        <p>{props.leftBar.subTitle}</p>
                    </div>

                    <div className="menu">
                        <div className="menu-item">
                            <ul>
                                {props.makeItems(props.items)}
                            </ul>
                        </div> 
                    </div>
                </div>

                <div className="split-middle middle">
                    <div>
                        {props.makeMiddleBar()}
                    </div>
                </div>

                <div className="split-right right">
                </div>
        </div>
    )
};

export default ProjectGuideInfo;
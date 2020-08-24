import React from 'react';

import ProjectGuideInfo from './ProjectGuideInfo';
import ProjectHomePage from './ProjectHomePage';
import ItemInfo from './ItemInfo';
import { Row } from 'react-bootstrap';

class ProjectGuide extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            leftBar: {
                title:"Ming Chen's Project Blog",
                subTitle:'A scattered Repository'
            },
            middleBar:{
                content:"This is the home of Project Site"
            },
            items:[
                {
                    id:0,
                    name:'Home',
                    src:'/project',
                    selected:"true"

                },
                {
                    id:1,
                    name:'Youtube-Project',
                    src: 'project/youtube',
                    selected:false
                },
                {
                    id:2,
                    name:"Image-Gallery",
                    src:"project/imageGallery",
                    selected:false
                }
            ]
        }
    }
//project 介面 - Menu
    makeItems = (items) =>{
        return(
            items.map((item) =>{
                return (<ItemInfo item={item} key={item.id} selected={item.selected}/>)
            })
        )
    }
//Project 页面 - 中间各项目
    makeMiddleBar = () =>{
        return(
           <ProjectHomePage />
        )
    }

//返回整个Project页面
    render() {
        return(
            <div>
                <ProjectGuideInfo 
                    leftBar={this.state.leftBar} 
                    items={this.state.items} 
                    makeItems={this.makeItems}
                    makeMiddleBar={this.makeMiddleBar}
                />   
            </div>
            
        )
    }
}

export default ProjectGuide;
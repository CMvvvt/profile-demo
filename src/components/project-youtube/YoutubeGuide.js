import React from 'react';
import ProjectGuideInfo from '../project/ProjectGuideInfo';
import ItemInfo from '../project/ItemInfo';
import YoutubeApp from './YoutubeApp';


//YouTube project 页面信息
class YoutubeGuide extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            leftBar: {
                title:"Ming Chen's Project Blog",
                subTitle:'A scattered Repository'
            },
            middleBar:{
                content:"this is the YOUTUBE PROJECT"
            },
            items:[
                {
                    id:0,
                    name:'Home',
                    src:'/project',
                    selected:"false"

                },
                {
                    id:1,
                    name:'Youtube-Project',
                    src: './youtube',
                    selected:"true"
                },
                {
                    id:2,
                    name:'Image-Gallery',
                    src:'./imageGallery',
                    selected:"false"
                }
            ]
        }
    }

// 左边Menu
    makeItems = (items) =>{
        return(
            items.map((item) =>{
                return (<ItemInfo item={item} key={item.id} selected={item.selected}/>)
            })
        )
    }

//中间展示 YouTube项目
    makeMiddleBar = () =>{
        return(
            <YoutubeApp />
        )
    }

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

export default YoutubeGuide;
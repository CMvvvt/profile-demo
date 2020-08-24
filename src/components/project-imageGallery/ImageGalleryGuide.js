import React from 'react';
import ImageGalleryApp from './ImageGalleryApp';
import ProjectGuideInfo from '../project/ProjectGuideInfo';
import ItemInfo from '../project/ItemInfo';



class ImageGalleryGuide extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            leftBar:{
                title:"Ming Chen's Project Blog",
                subTitle:"A scattered Repository"
            },
            middleBar:{
                content:"this is the IMAGE GALLERY PROJECT"
            },
            items:[
                {
                    id:0,
                    name:"Home",
                    src:"/project",
                    selected:"false"
                },
                {
                    id:1,
                    name:'Youtube-Project',
                    src:'./youtube',
                    selected:"false"
                },
                {
                    id:2,
                    name:"Image-Gallery",
                    src:'./imageGallery',
                    selected:"true"
                }
            ]
        }
    }

    // 左边Menu
    makeItems = (items) =>{
        return(
            items.map((item) =>{
                return(<ItemInfo item={item} key={item.id} selected={item.selected}/>)
            })
        )
    }

    makeMiddleBar = () => {
        return(
            <ImageGalleryApp />
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

export default ImageGalleryGuide;
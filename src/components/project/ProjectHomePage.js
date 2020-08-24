import React from 'react';
import youtube_img from '../../asset/img/youtube.jpg';
import image_gallery_img from '../../asset/img/image-gallery.jpg';
import ProjectItems from './ProjectItems';
// project页面中间各个项目

class ProjectHomePage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            items:[
                {
                    id:0,
                    title:"Youtube App",
                    src:youtube_img,
                    url:'/project/youtube',
                    submitDate:'Jun 30, 2020',
                    hover:"VIEW",
                    description:"This app is based on google youtube api, and,his app is based on google youtube api, andhis app is based on google youtube api, andhis app is based on google youtube api, andhis app is based on google youtube api, and",
                    className:"item-youtube"
                },
                {
                    id:1,
                    title:"Image Gallery",
                    src:image_gallery_img,
                    url:'/project/imageGallery',
                    submitDate:'Jun 30, 2020',
                    hover:"VIEW",
                    description: "This is the Image Gallery Project page.",
                    className:"item-iamge-gallery"
                }
            ]
        }
    }

    makeItems = (items) =>{
        return(
            items.map((item) => {
                return <ProjectItems item={item} key={item.id}/>
            })
        )
    }
    /* 返回中间层级的所有项目：所有PROJECTS*/
    render() {
        return(
            <div className="content">
                <h1>Project Home</h1>
                {this.makeItems(this.state.items)}
            </div>
        )
    }
}

export default ProjectHomePage;
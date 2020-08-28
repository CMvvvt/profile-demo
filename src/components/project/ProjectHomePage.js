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
                    description:"This project uses Google Youtube API, you can access the videos in the YouTube video website by searching. This project uses the axios library to submit GET requests. Due to the limitation of the number of daily submission requests, the number of videos searched for each time is limited to five. At the same time, because it uses Google API, it cannot be accessed normally in mainland China (response error 403), so demo video is provided for viewing",
                    CHdescription:"该项目使用Google Youtube API,可以通过搜索访问YouTube视频网站中的视频。本项目使用axios库提交GET请求，由于每日提交请求次数的限制,将每次搜索的视频数量限制为五个。同时因为是使用谷歌API,所以在中国大陆不能正常访问(response error 403),故提供demo视频观看",
                    className:"item-youtube"
                },
                {
                    id:1,
                    title:"Image Gallery",
                    src:image_gallery_img,
                    url:'/project/imageGallery',
                    submitDate:'Jun 30, 2020',
                    hover:"VIEW",
                    description: "This project uses the free api of the unsplash website and uses the axios library to submit a GET request to obtain data",
                    CHdescription:"该项目使用unsplash网站免费api,使用axios库提交GET请求获取数据。",
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
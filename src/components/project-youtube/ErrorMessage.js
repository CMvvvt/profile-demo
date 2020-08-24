import React from 'react';
import { Player } from 'video-react';
import "C:/Users/Surface/Desktop/Web Deverlopment/cs571/Project/ProfileApp/profile/node_modules/video-react/dist/video-react.css"; 
import youtubeDemo from '../../../src/asset/video/youtubeDemo.mp4';
import youtubePoster from '../../../src/asset/img/youtubeDemo.png'

const ErrorMessage = () => {

    return(
        <Player 
        playsInline
        poster={youtubePoster}
        src={youtubeDemo}
        />          
    )

}

export default ErrorMessage;
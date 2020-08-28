import React from 'react';
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css"
import youtubeDemo from '../../../src/asset/video/youtubeDemo.mp4';
import youtubePoster from '../../../src/asset/img/youtubeDemo.png'

const ErrorMessage = () => {

    return(
        <div>
            Loading...
        </div>
        /*
        <Player 
        playsInline
        poster={youtubePoster}
        src={youtubeDemo}
        />
        */          
    )

}

export default ErrorMessage;
import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import ErrorMessage from './ErrorMessage';
import './VideoItem.css';

const KEY = 'AIzaSyDazHZD3FEruJgNmc8nYTgpULukvZg6TQ4';
// YouTube App

class YoutubeApp extends React.Component{

    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount(){
        this.onTermSubmit('youtube')
    }

    onTermSubmit = async (term) => {
        try{
            const response = await youtube.get('/search',{
                params: {
                    q: term,
                    part: 'snippet',
                    type:'video',
                    maxResults: 5,
                    key: KEY
                }
            });
            this.setState({
                videos: response.data.items,
                selectedVideo: response.data.items[0]
            })

        } catch(error) {
            console.log("error", error);
        }
    };
    
    onVideoSelect =(video)=> {
        this.setState({selectedVideo:video})
    }
    render() {
        return( 
        <div className="ui container youtube">
            <SearchBar  onFormSubmit = {this.onTermSubmit}/>
            <div className="ui grid">
                
                    <div className="sixteen wide column">
                        <VideoDetail video ={this.state.selectedVideo}/>    
                    </div>
                    <div >
                        <VideoList  
                            onVideoSelect={this.onVideoSelect}  
                            videos={this.state.videos}
                        />
                    </div>   
               
            </div>
        </div>
        );
    }
}


export default YoutubeApp;
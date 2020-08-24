import React from 'react';
import unsplash from '../../apis/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class ImageGalleryApp extends React.Component {
state = {images: []};

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos',{
            params: {query: term},
            
        });
        this.setState({images: response.data.results});
        console.log(this.state.images)
    }

    render(){
        return (
            <div className = "ui container" style = {{marginTop:'35px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        )
    }
  
}

export default ImageGalleryApp;
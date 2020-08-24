import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Icon from '../components/Icon';
import Container from 'react-bootstrap/Container';

function HomePage(props) {
    return(
        <div>
            <Hero 
                title={props.title} 
                subTitle={props.subTitle}
                text ={props.text}
            />
            <Carousel />
            <Icon />
        </div>
    );
}

export default HomePage;
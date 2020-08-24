import React from 'react';
import Card from '../components/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import towel from '../asset/img/towel.jpg';
import ming from '../asset/img/ming.jpg';
import market from '../asset/img/market.jpg';


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            items:[
                {
                    id: 0,
                    title: 'towel',
                    subTitle: 'The Project Site',
                    imgSrc: towel,
                    link:"./project",
                    selected: 'false'
                },
                {
                    id: 1,
                    title:'Ming Chen',
                    subTitle: 'The profile website',
                    imgSrc: ming,
                    link: './profile',
                    selected: 'false'
                },
                {
                    id: 2,
                    title:"About Me",
                    subTitle: 'About Site',
                    imgSrc: market,
                    link:'/about',
                    selected: 'false'
                }
            ]
        };
        
    }

    handleCardClick =(id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach( item =>{
            if(item.id !== id) {
                item.selected = false;
            }
        });
        this.setState({
            items
        })
    }


    makeItems = (items) => {    

        return items.map((item) => {
            return <Card item ={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className = "justify-contend-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}


export default Carousel;
import React from 'react';
import Card from '../components/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import towel from '../asset/img/resume.jpg';
import ming from '../asset/img/market.jpg';
import market from '../asset/img/ming.jpg';


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            items:[
                {
                    id: 0,
                    title: 'My CVs',
                    subTitle: 'En/Ch Version of my CV',
                    imgSrc: towel,
                    link:"/profile",
                    selected: 'false'
                },
                {
                    id: 1,
                    title:'My Projects',
                    subTitle: 'Web projects created by me',
                    imgSrc: ming,
                    link: './profile',
                    selected: 'false'
                },
                {
                    id: 2,
                    title:"About Me",
                    subTitle: 'Something about me',
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
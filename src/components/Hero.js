import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Hero(props) {
    return(
     <Jumbotron className="head bg-transparent jumbotron-fluid">
         <Container fluid={true}>
             <Row className='justify-content-center'>
                 <Col md={8}>
                    {props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
                    {props.subTitle && <h2 className="display-4 font-weight-light">{props.subTitle}</h2>}
                    {props.text && <p>{props.text}</p>}
                 </Col>
             </Row>
         </Container>
     </Jumbotron>
    );
}

export default Hero;
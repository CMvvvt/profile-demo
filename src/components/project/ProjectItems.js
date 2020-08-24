import React from 'react';
import container from 'react-bootstrap/Container';
import Container from 'react-bootstrap/Container';

export default function ProjectItems(props) {
    return(
        <div className="project-items" >
            <Container className="img">
                <img className="items-img" src={props.item.src} alt={props.item.src}/>
                <div className={props.item.className}>
                    {props.item.description}
                </div>
      

                <div className={props.item.title} >
                     <a href={props.item.url}><div className="text">{props.item.hover}</div></a>
                </div>

                <div className="container">
                    <h3>{props.item.title}</h3>
                </div>
        
            </Container>
            
        </div>
    )
}
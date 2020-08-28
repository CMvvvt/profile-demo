import React from 'react';
import Container from 'react-bootstrap/Container';
import {
    Link
  } from "react-router-dom";


export default function ProjectItems(props) {
    return(
        <div className="project-items" >
            <Container className="img">
                <img className="items-img" src={props.item.src} alt={props.item.src}/>
                <div className={props.item.className}>
                    {props.item.description}
                    <br/>
                    <br/>
                    {props.item.CHdescription}
                </div>
      

                <div className={props.item.title} >
                    <Link to={props.item.url}><div className="text">{props.item.hover}</div></Link>
                </div>

                <div className="container">
                    <h3>{props.item.title}</h3>
                </div>
        
            </Container>
            
        </div>
    )
}
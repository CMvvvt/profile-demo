import React from 'react';


export default function ItemInfo(props){

    return(
        <a href={props.item.src} target={props.selected}><li>{props.item.name}</li></a>
    )
}


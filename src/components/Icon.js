import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IconInfo from './IconInfo';

class Icon extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            items:[
                {   
                    id: 0,
                    title:"facebook",
                    name: "fab fa-facebook",
                    link: "https://www.facebook.com/people/Ming-Chen/100034166210476"
                },
                {
                    id: 1,
                    title:"instagram",
                    name:"fab fa-instagram",
                    link:"https://www.instagram.com/cmchenming13/?hl=en"
                },
                {
                    id: 2,
                    title:"linkedin",
                    name: "fab fa-linkedin",
                    link:"https://www.linkedin.com/in/ming-chen-aa7387182/"
                },
                {
                    id:3,
                    title:"wechat",
                    name:"fab fa-weixin",
                    link:"#"
                }
            ]
        }
    }

    makeItems = (items) =>{
        console.log(items[0].title);
        return(
            items.map((item) => {
                return(<IconInfo item={item} key={item.id}/>)
        })
        );
    }

    render() {
        return(
            <div className="icons" >
                <Row  >
                    {this.makeItems(this.state.items)}
                </Row>
            </div>
        )
    }
}


export default Icon;
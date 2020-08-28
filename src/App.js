import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {
  HashRouter as Router,
  Route,
  Link
} from "react-router-dom";

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import YoutubePage from './pages/YoutubePage';
import ImageGalleryPage from './pages/ImageGalleryPage';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: 'Ming Chen',
      headerLinks: [
        {title:'Home', path:'/home'},
        {title:'Profile', path:'/profile'},
        {title:'Project', path:'/project'},
        {title:'About', path:'/about'},
        {title:'Contact', path:'/contact'}
      ],
      home: {
        title:'HI,',
        subTitle:'This is Ming\'s Website',
        text:'   '
      },
      profile:{
        title:'My CVs,'
      },
      project:{
        title:'Checkout My Projects'
      },
      about:{
        title:'About Me'
      },
      contact:{
        title:'Let\'s Talk'
      },
      youtube:{
        title:"Youtube Search"
      },
      imageGallery:{
        title:"Image Gallery"
      }
    }
  }

  render() {
    return(
      <Router>
        <Container className='p-0' fluid={true}>
          <Navbar  sticky="top" className='navbar border-bottom' expand="lg">
            <Navbar.Brand><Link className="nav-link" to="/"><b>Ming Chen</b></Link></Navbar.Brand>
            <Navbar.Toggle className='border-0'  aria-control="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/profile">MyCVs</Link>
                <Link className="nav-link" to="/project">Project</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

        <Route path='/' exact render={() =><HomePage title={this.state.home.title} subTitle ={this.state.home.subTitle} text={this.state.home.text}/> } />
        <Route path='/profile' exact render={() =><ProfilePage title={this.state.profile.title} /> } />
        <Route path='/project' exact render={() =><ProjectPage title={this.state.project.title} /> } />
        <Route path='/about' exact render={() =><AboutPage title={this.state.about.title} /> } />
        <Route path='/contact' exact render={() =><ContactPage title={this.state.contact.title} /> } />
        <Route path='/project/youtube' exact render={() =><YoutubePage title={this.state.youtube.title} /> } />
        <Route path='/project/imageGallery' exact render={() =><ImageGalleryPage title={this.state.imageGallery.title} /> } />

        <Footer />

        </Container>        
      </Router>
    )
  }
}

export default App;
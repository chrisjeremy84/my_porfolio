import React from 'react'
import '../Styles/navbarStyles.css'
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Home from '../pages/Home'
import Project from '../pages/Project'
import About from '../pages/About'

function NavBar() {
    return (
        <Router>
            <div className="navbarStyle">
            <ul>
                <li>
                <Link to="/Project" className="linkStyle">PROJECTS</Link>
                </li>
            </ul>
            <ul>
                <li>
                <Link to="/" className="linkStyle">HOME</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/About" className="linkStyle">SKILLS</Link>
                </li>
            </ul>
         
        </div>   
        <Route exact path="/About" component={About}/>
        <Route exact path="/Project" component={Project}/>
        <Route exact path="/" component={Home} />
        </Router>
            
    )
}

export default NavBar

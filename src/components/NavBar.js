import React from 'react'
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Home from '../pages/Home'
import Project from '../pages/Project'
import Skill from '../pages/Skill'

function NavBar() {
    return (
        <Router>
            <div className="box-content rounded md:h-auto w-38 p-4 border-4 ...">
                <div>
                    <ul className="flex flex-row space-x-4 justify-center">
                        <li>
                         <Link to="/Project" >PROJECTS</Link>
                         </li>
                        <li>
                        <Link to="/">HOME</Link>
                        </li>
                        <li>
                        <Link to="/Skill">SKILLS</Link>
                        </li>
                    </ul>
         
                </div>   
            </div>
            
        <Route exact path="/Skills" component={Skill}/>
        <Route exact path="/Project" component={Project}/>
        <Route exact path="/" component={Home} />
        </Router>
            
    )
}

export default NavBar

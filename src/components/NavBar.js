import React from 'react'
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Home from '../pages/Home'
import Project from '../pages/Project'
import Skill from '../pages/Skill'
import { FiHome, FiSliders, FiPackage,FiGithub , FiInfo, FiLinkedin , FiInstagram} from "react-icons/fi"

function NavBar() {
    return (
        <Router>
            <div className="absolute z-10 box-border h-auto w-16  border-2 left-6 top-16">
                <div className="antialiased">
                    <ul className="relative px-3 py-5 space-y-3">
                        <li>
                        <Link to="/"><FiHome className="text-2xl"/></Link>
                        </li>
                        <li>
                         <Link to="/Project" ><FiPackage className="text-2xl"/></Link>
                         </li>
                        <li>
                        <Link to="/Skill"><FiSliders className="text-2xl"/></Link>
                        </li>
                        <li>
                        <Link to="#"><FiGithub className="text-2xl"/></Link>
                        </li>
                        <li>
                         <Link to="#" ><FiInstagram className="text-2xl"/></Link>
                         </li>
                        <li>
                        <Link to="#"><FiLinkedin className="text-2xl"/></Link>
                        </li>
                        <li>
                        <Link to="#"><FiInfo className="text-2xl"/></Link>
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

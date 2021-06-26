import React from 'react'
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Home from '../pages/Home'
import Project from '../pages/Project'
import Skill from '../pages/Skill'
import { FiHome, FiSliders, FiPackage,FiGithub , FiInfo, FiLinkedin , FiInstagram, FiMenu} from "react-icons/fi"

function NavBar() {
    return (
        <Router>
            {/*REMEMBER TAILWIND IS MOBILE FIRST DESIGN, SO ASSIGN STYLES ACCORDINGLY */}
           {/*MAIN NAVIGATION OUTLINE */}
            <div className="antialiased md:fixed z-10 box-border h-16 w-16 relative mt-8 ml-10 md:h-auto md:w-auto  border-r-2 border-blue-700 shadow-2xl md:left-6  md:bottom-16">
                    {/*LIST OF ICONS */}

                    <ul className="hidden md:flex md:flex-col p-5 space-y-5 text-3xl ">
                        <li>
                        <Link to="/"><FiHome className=""/></Link>
                        </li>
                        <li>
                         <Link to="/Project" ><FiPackage className=""/></Link>
                         </li>
                        <li>
                        <Link to="/Skill"><FiSliders className=""/></Link>
                        </li>
                        <li>
                        <Link to="#"><FiGithub className=""/></Link>
                        </li>
                        <li>
                         <Link to="#" ><FiInstagram className=""/></Link>
                         </li>
                        <li>
                        <Link to="#"><FiLinkedin className=""/></Link>
                        </li>
                        <li>
                        <Link to="#"><FiInfo className=""/></Link>
                        </li>
                    </ul>

                    
                    {/*MUST FIGURE OUT ---BELOW-- */}
                    {/*SLIDE ANIMATION */}
                    {/*CONTENT OVER BOARDING FOR ANIMATION */}
                    {/*ACTIVE AND INACTIVE  */}


                    {/*RESPONSIVE BUTTON */}
                    <div className="visible md:hidden text-3xl">
                    <FiMenu className="align-center"/>                
                    </div>
                    
            
            </div>
        <Route exact path="/Skills" component={Skill}/>
        <Route exact path="/Project" component={Project}/>
        <Route exact path="/" component={Home} />
        </Router>
            
    )
}

export default NavBar

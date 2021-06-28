import {React, useState} from 'react'
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Home from '../pages/Home'
import Project from '../pages/Project'
import Skill from '../pages/Skill'
import { FiHome, FiSliders, FiPackage,FiGithub , FiInfo, FiLinkedin , FiInstagram, FiMenu} from "react-icons/fi"

function NavBar() {
    const [open, setOpen] = useState(false)
    var menuDisplay = () => setOpen(!open)
    let mobile_menu = open ? "h-18 w-48 bg-red-400 bg-gradient-to-r from-blue-600 to-blue-900 shadow-2xl rounded-xl border-r-4 border-blue-600 md:hidden" : "hidden"
    return (
        <Router>
            {/*REMEMBER TAILWIND IS MOBILE FIRST DESIGN, SO ASSIGN STYLES ACCORDINGLY */}
           {/*MAIN NAVIGATION OUTLINE */}
            <div className="antialiased md:fixed bg-gradient-to-r from-blue-600 to-blue-900 z-10 box-border border-r-4 
            rounded-full md:rounded-lg border-blue-600 shadow-2xl h-16 w-16 relative mt-8 ml-10 
            md:h-auto md:w-auto md:left-6  md:bottom-16">

                 {/*Mobile menu BUTTON */}
                 <div className="visible md:hidden menu-button text-3xl p-4">
                    <a onClick={menuDisplay}><FiMenu className=""/></a>               
                </div>

                    {/*MOBILE MENU */}
                <div className={mobile_menu}>

                <ul className="text-3xl text-white font-bold p-4 flex flex-col space-y-2 items-center ">
                        <li>
                        <Link to="/"><a onClick={menuDisplay} className="hover:text-blue-300">Home</a></Link>
                        </li>
                        <li>
                         <Link to="/Project" ><a onClick={menuDisplay} className="hover:text-blue-300">Projects</a></Link>
                         </li>
                        <li>
                        <Link to="/Skill"><a onClick={menuDisplay} className="hover:text-blue-300">Skills</a></Link>
                        </li>
                        
                </ul>
                </div>
                

                    {/*DESKTOP MENU*/}

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


                   
            
            </div>
        <Route exact path="/Skill" component={Skill}/>
        <Route exact path="/Project" component={Project}/>
        <Route exact path="/" component={Home} />
        </Router>
            
    )
}

export default NavBar

 //Successfully implemented a functional and responsive navbar
                                        //Remove unnecessary code
                                        //Add Transition for mobile nav
                                        //Increase Stability
                                        //...28,06,2021...
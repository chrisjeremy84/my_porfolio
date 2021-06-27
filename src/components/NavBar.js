import {React, useState} from 'react'
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Home from '../pages/Home'
import Project from '../pages/Project'
import Skill from '../pages/Skill'
import { FiHome, FiSliders, FiPackage,FiGithub , FiInfo, FiLinkedin , FiInstagram, FiMenu} from "react-icons/fi"

function NavBar() {

    const [open, setOpen] = useState(false)
    return (
        <Router>
            {/*REMEMBER TAILWIND IS MOBILE FIRST DESIGN, SO ASSIGN STYLES ACCORDINGLY */}
           {/*MAIN NAVIGATION OUTLINE */}
            <div className="antialiased md:fixed bg-gradient-to-r from-blue-600 to-blue-900 z-10 box-border border-r-4 
            rounded-full md:rounded-lg border-blue-600 shadow-2xl h-16 w-16 relative mt-8 ml-10 
            md:h-auto md:w-auto md:left-6  md:bottom-16">

                 {/*Mobile menu BUTTON */}
                 <div className="visible md:hidden menu-button text-3xl p-4">
                    <a onClick={console.log("btn clicked")} href="#"><FiMenu className=""/></a>               
                    </div>
                    
              
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


                   
            
            </div>
        <Route exact path="/Skills" component={Skill}/>
        <Route exact path="/Project" component={Project}/>
        <Route exact path="/" component={Home} />
        </Router>
            
    )
}

function mobile_menu(props){
    return(
          
          <div className="w-48 mobile-menu md:hidden bg-gradient-to-r from-blue-600 to-blue-900 z-0 box-border border-r-4 
          rounded border-blue-600 shadow-2xl visible p-4">
              {/*Mobile menu */}
              <div className="flex flex-col  font-semibold h-auto space-y-3">
                  <a className="hover:bg-blue-600 text-center w-full" href="#">Home</a>
                  <a href="#">Projects</a> 
                  <a href="#">Skills</a> 
              </div>
                  
              </div>
    )
}
export default NavBar

import React, {useState} from 'react'
import {Link} from 'react-scroll'
import { FiHome, FiSliders, FiPackage,FiGithub , FiLinkedin , FiMenu, FiTwitter} from "react-icons/fi"



{/* The navbar component needs to be 
responsive meaning different styles 
per screen */}

function MobileNav(Show) {
    
    return (
        <div className=" bg-blue-500
         rounded-full shadow-2xl
         w-auto h-auto md:hidden">

           

            {/* Displayed Navbar */}
            <div className="">
                <ul className="flex flex-col space-y-3 p-5">
                <Link
            className="text-2xl lg:text-3xl font-semibold  hover:scale-150 transition transform"
             
             to="home"
             spy={true}
             smooth={true}
             offset={0}
             duration={500}
             >  <FiHome /> 
             </Link>

             <Link
             className="text-2xl lg:text-3xl font-semibold  hover:translate-y-1 transition transform"
             
             to="project"
             spy={true}
             smooth={true}
             offset={0}
             duration={500}
             >
               <FiPackage/>
             </Link>

             <Link
             className="text-2xl lg:text-3xl font-semibold  hover:translate-y-1 transition transform"
             
             to="skill"
             spy={true}
             smooth={true}
             offset={0}
             duration={500}
             >
               <FiSliders />
               </Link>
                </ul>
            
            </div>
        </div>
    )
}

function desktopNav() {
    return (
        <div 
        className="w-auto h-auto
        rounded-full shadow-2xl border-r-4 border-blue-600
        absolute m-16
        hidden md:flex md:flex-col 
        p-5 lg:p-7 space-y-5 text-3xl">


            <Link
            className="text-2xl lg:text-3xl font-semibold hover:text-gray-300 hover:scale-150 transition transform"
             activeClass="active"
             to="home"
             spy={true}
             smooth={true}
             offset={0}
             duration={500}
             >  <FiHome /> 
             </Link>

             <Link
             className="text-2xl lg:text-3xl font-semibold hover:text-gray-300 hover:scale-150 transition transform"
             activeClass="active"
             to="project"
             spy={true}
             smooth={true}
             offset={0}
             duration={500}
             >
               <FiPackage/>
             </Link>

             <Link
             className="text-2xl lg:text-3xl font-semibold hover:text-gray-300 hover:scale-150 transition transform"
             activeClass="active"
             to="skill"
             spy={true}
             smooth={true}
             offset={0}
             duration={500}
             >
               <FiSliders />

             </Link>
             {/* SOCIAL LINKS */}
             <a 
             className="text-2xl lg:text-3xl font-semibold hover:text-gray-300 hover:scale-150 transition transform"
             href="https://github.com/chrisjeremy84"
             ><FiGithub/></a>

            <a
            className="text-2xl lg:text-3xl font-semibold hover:text-gray-300 hover:scale-150 transition transform"
            href="https://mobile.twitter.com/5thfader"
             ><FiTwitter/></a>

            <a
            className="text-2xl lg:text-3xl font-semibold hover:text-gray-300 hover:scale-150 transition transform"
            href="https://www.linkedin.com/in/ishimwe-chris-jeremie-290250180/"
             ><FiLinkedin/></a>
        </div>
    )
}

function NavBar() {
    const [show, setShow] = useState(false);
    return (
        <div 
        className="">
             <div className={show ? "bg-blue-500 rounded-full border-r-4 border-blue-300 md:hidden" : " flex flex-col space-y-1 md:hidden"}>
                <button 
                className={show ? 'text-2xl p-5' :" text-2xl bg-blue-100 rounded-full opacity-60 shadow-inner font-bold p-5"} onClick={() => setShow(!show)}>
                 <FiMenu/>   
                </button>
                { show && MobileNav()}
            </div>
            {desktopNav()}
            
        </div>
    )
}

export default NavBar

import React, {useState} from 'react'
import 
{ FiHome, FiSliders, FiPackage,FiGithub , 
    FiInfo, FiLinkedin , FiInstagram, FiMenu} from "react-icons/fi"

import {Link} from 'react-scroll'


function NavBar2() {
    const [open, setOpen] = useState(false)
    var menuDisplay = () => setOpen(!open)
    let mobile_menu = open ? "h-18 w-48 bg-red-400 bg-gradient-to-r from-blue-600 to-blue-900 shadow-2xl rounded-xl border-r-4 border-blue-600 md:hidden" : "hidden"
   
    return (
      
           <div className="antialiased 
           md:fixed bg-gradient-to-r 
           from-blue-600 to-blue-900 
           z-10 
           box-border 
           border-r-4 
           rounded-full 
           md:rounded-lg 
           border-blue-600 
           shadow-2xl 
           h-16 w-16 
           relative mt-8 ml-10 
           md:h-auto md:w-auto md:left-6  md:bottom-16">


 {/*REMEMBER TAILWIND IS MOBILE FIRST DESIGN, SO ASSIGN STYLES ACCORDINGLY */}
           {/*MAIN NAVIGATION OUTLINE */}


{/*Mobile menu BUTTON */}
<div className="visible md:hidden menu-button text-3xl p-4">
   <a onClick={menuDisplay}><FiMenu className=""/></a>               
</div>

   {/*MOBILE MENU */}
<div className={mobile_menu}>

<ul className="text-3xl text-white font-bold p-4 flex flex-col space-y-2 items-center ">
<Link
             className="hover:text-blue-300"
             activeClass="active"
             to="home"
             spy={true}
             smooth={true}
             offset={0}
             duration={500}
             ><a onClick={menuDisplay}>Home</a>
       </Link>

       <Link
             className="hover:text-blue-300"
             activeClass="active"
             to="project"
             spy={true}
             smooth={true}
             offset={0}
             duration={500}
             ><a onClick={menuDisplay} >Projects</a>
       </Link>

       <Link
             className="hover:text-blue-300"
             activeClass="active"
             to="skill"
             spy={true}
             smooth={true}
             offset={0}
             duration={500}
             ><a onClick={menuDisplay} >Skills</a>
       </Link>
       
</ul>
</div>


   {/*DESKTOP MENU*/}

   <ul className="hidden md:flex md:flex-col p-5 space-y-5 text-3xl ">
       <li>
          
             
       <Link
             activeClass="active"
             to="home"
             spy={true}
             smooth={true}
             offset={0}
             duration={500}
             >
             <FiHome className=""/>    
                 </Link>          
    
            
       </li>

       <li>
          
             <Link
             activeClass="active"
             to="project"
             spy={true}
             smooth={true}
             offset={0}
             duration={500}
             ><FiPackage className=""/>
             </Link>  
           
        </li>

       <li>
       <Link
             activeClass="active"
             to="skill"
             spy={true}
             smooth={true}
             offset={0}
             duration={500}
             >
               <FiSliders className=""/>  
             </Link>
       
           
       </li>
       <li>
          
              <FiGithub className=""/>
         
       </li>
       <li>
          
           <FiInstagram className=""/>  
         
        </li>
       <li>
         
          <FiLinkedin className=""/> 
         
       </li>
       <li>
          
           <FiInfo className=""/>
          
       
       </li>
   </ul>

   
   {/*MUST FIGURE OUT ---BELOW-- */}
   {/*SLIDE ANIMATION */}
   {/*CONTENT OVER BOARDING FOR ANIMATION */}
   {/*ACTIVE AND INACTIVE  */}


  

</div>
    )
}

export default NavBar2

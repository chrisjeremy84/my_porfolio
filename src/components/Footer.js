import React from 'react'
import {Link} from 'react-scroll'

function Footer() {
    return (
      <div className="min-w-screen bg-gray-700">
        <div className=' lg:flex flex flex-row  p-8 justify-center'>
            <ul className="space-x-3 space-y-3">
            <Link
            className="text-lg font-semibold hover:text-gray-300 hover:translate-y-1 transition transform"
             activeClass="active"
             to="home"
             spy={true}
             smooth={true}
             offset={0}
             duration={500}
             >
               Home 
             </Link>

             <Link
             className="text-lg font-semibold hover:text-gray-300 hover:translate-y-1 transition transform"
             activeClass="active"
             to="project"
             spy={true}
             smooth={true}
             offset={0}
             duration={500}
             >
               Projects
             </Link>

             <Link
             className="text-lg font-semibold hover:text-gray-300 hover:translate-y-1 transition transform"
             activeClass="active"
             to="skill"
             spy={true}
             smooth={true}
             offset={0}
             duration={500}
             >
               Skills
             </Link>


                    <li className=" text-gray-400">chrisjeremy17@gmail.com</li>
                    <li className=" text-gray-400">(+48)516991476</li>
                    <li className=" text-gray-400">Bydgoszcz, Poland</li>

            </ul>
            
  
                
                    
                

            </div>
      </div>
    )
}

export default Footer
 {/* 
  <div className=" bg-gradient-to-t from-gray-800 via-gray-600 to-gray-700 min-w-screen ">
            
        </div>
*/}  
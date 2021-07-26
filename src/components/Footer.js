import React from 'react'
import {Link} from 'react-scroll'

function Footer() {
    return (
        <div className=" bg-gradient-to-t from-gray-800 via-gray-600 to-gray-700 min-w-screen ">
            <div className=' lg:flex  justify-center p-8'>
            <ul className="flex flex-row space-x-3 p-3">
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
            </ul>
            
            <div className='p-3 text-white subpixel-antialiased font-medium'>
                <ul>
                    <li>chrisjeremy17@gmail.com</li>
                    <li>(+48)516991476</li>
                    <li>Bydgoszcz, Poland</li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Footer

import React from 'react'
import '../App.css'
import education from '../svg/education.svg'


function Home() {
    return (
        <div className='relative pl-40 h-screen text-gray-300 subpixel-antialiased '>
            {/*TO FIGURE OUT BELOW */}
            {/*MASTER SIZES FOR ALL SCREENS */}
            <h4 className="pt-48  font-semibold font-sans lg:text-4xl text-lg">The personal portfolio of </h4>
            <h1 className="pt-18 lg:text-6xl sm:text-2xl text-white">Chris Jeremie</h1>
            <h1 className="lg:text-5xl sm:text-2xl text-white">ISHIMWE</h1>
            {/*BEST IMAGE UPLOAD// LOAD EVENT */}
            <div className="h-40 w-40">
                {/* Education section */}
                <h2>education</h2>
                
            </div>

            <div className=" h-40 w-40">
                {/* Experience section */}
                <h2>experience</h2>
                
            </div>

            <div className=" h-40 w-40">
                {/* Organization section */}
                <h2>Organization</h2>
                
            </div>
        </div>
    )
}

export default Home

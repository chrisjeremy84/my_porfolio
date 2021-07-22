import React from 'react'
import '../App.css'
import education from '../svg/education.svg'
import done from '../svg/done.svg'
import launch from '../svg/launch.svg'


function Home() {
    return (
        <div className='subpixel-antialiased '>
            
          {/* Header */}
    <section className=" lg:mt-60">
     {/* Welcome */}
      <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 className=" font-extrabold text-blue-400 text-xl text-center ">The portfolio</h1>
        <h2 className="text-6xl text-center ">Chris Jeremie</h2>
        <h2 className=" text-5xl font-semibold lg:text-7xl text-center">Ishimwe, 22</h2>
        <p className="text-center font-medium text-xl text-gray-300" >Bugs and glitches are what engineers can learn best from</p>
      </div>
     {/* Education */}
      <div className="relative mt-20 lg:mt-24">
        <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
           {/* Illustration */}
          <div className="flex flex-1 justify-center z-0 mb-10 lg:mb-0">
            <img
              className="w-2/6 h-3/6 sm:w-3/4 sm:h-3/4"
              src={education}
              alt="education"
            />
          </div>
            {/* Content */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="font-bold text-3xl text-white">Education</h1>
            <ul className="text-xl">
                
            <li className="text-blue-400 font-bold pt-5 text-3xl">Wyższa Szkoła Gospodarki</li>
                <li >B.Sc Computer engineering</li>
                <li className="font-bold">03-2018 to  09-2021</li>
                <li className="text-blue-400 pt-5 font-bold text-3xl">Wellspring Academy</li>
                <li >Cambridge International Exams</li>
                <li className="font-bold">01-2012 to  07-2017</li>
            </ul>
            
          </div>
        </div>
       
      </div>
      {/* Exprerience */}
      <div className="relative mt-20  lg:mt-52">
        <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
           {/* Illustration */}
          <div className="flex flex-1 justify-center z-0 mb-10 lg:mb-0">
            <img
              className="w-2/6 h-3/6 sm:w-3/4 sm:h-3/4"
              src={done}
              alt=""
            />
          </div>
          {/* Content */}
          <div className="flex flex-1 flex-col items-center lg:ml-48 lg:items-start">
          <h1 className="font-bold text-3xl text-white">Experience</h1>
            <ul className="text-xl font-medium">
                
                <li className="text-blue-400 pt-5 text-3xl">Junior ICT Engineer</li>
                <li >Atos</li>
                <li className="font-bold">09-2020 to  09-2021</li>
                <li className="text-blue-400 pt-5 text-3xl">Junior Web developer</li>
                <li >Emarkits</li>
                <li className="font-bold">05-2016 to  01-2017</li>
                <li className="text-blue-400 pt-5 text-3xl">Marketing Intern</li>
                <li className="">Afrifoam</li>
                <li className="font-bold">07-2017 to  08-2018</li>
            </ul>
            
          </div>
        </div>
      </div>


      {/* Organizations */}
      <div className="relative p-10 mt-20 mb-40 lg:mt-24">
        <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
           {/* Illustration */}
          <div className="flex flex-1 justify-center z-0 mb-10 lg:mb-0">
            <img
              className="w-2/6 h-3/6 sm:w-3/4 sm:h-3/4"
              src={launch}
              alt="education"
            />
          </div>
            {/* Content */}
          <div className="flex flex-1 flex-col  items-center lg:items-start">
            <h1 className="font-bold text-3xl text-white">Organization</h1>
            <ul className="text-xl font-medium">
                
            <li className="text-blue-400 font-bold pt-5 text-3xl">PSYRED</li>
                <li >Software delivery start up</li>
                <li className="font-bold pb-3">Since 01-2021</li>
                <a className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" href="https://www.psyred.com/" >Learn more</a>
            </ul>
            
          </div>
        </div>
       
      </div>
           </section>
        </div>
    )
}

export default Home

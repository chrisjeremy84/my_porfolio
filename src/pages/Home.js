import React from 'react'
import '../App.css'
import education from '../svg/education.svg'
import done from '../svg/done.svg'
import launch from '../svg/launch.svg'


function Home() {
    return (
        <div className='subpixel-antialiased '>
            
          {/* Features */}
    <section class=" py-20 mt-20 lg:mt-60">
     {/* Heading */}
      <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 class="text-xl text-center ">The portfolio</h1>
        <h2 class="text-6xl text-center ">Chris Jeremie</h2>
        <h2 class="text-9xl text-center">Ishimwe</h2>
      </div>
     {/* Features 2 */}
      <div class="relative mt-20 lg:mt-24">
        <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
           {/* Images */}
          <div class="flex flex-1 justify-center z-0 mb-10 lg:mb-0">
            <img
              class="w-2/6 h-3/6 sm:w-3/4 sm:h-3/4"
              src={education}
              alt="education"
            />
          </div>
            {/* Content */}
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h1 class="text-3xl text-bookmark-blue">Education</h1>
            <ul className="text-xl">
                
                <li >Wellspring Academy</li>
                <h2 >01-2012 to  07-2017</h2>
            </ul>
            
          </div>
        </div>
       
      </div>
      {/* Features 2 */}
      <div class="relative mt-20 mb-20 lg:mt-52">
        <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
           {/* Image */}
          <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              class="w-2/6 h-3/6 sm:w-3/4 sm:h-3/4"
              src={done}
              alt=""
            />
          </div>
          {/* Content */}
          <div class="flex flex-1 flex-col items-center lg:ml-48 lg:items-start">
          <h1 class="text-3xl text-white">Experience</h1>
            <ul className="text-xl font-medium">
                
                <li >Junior ICT Engineer</li>
                <h2 className="font-bold">09-2020 to  09-2021</h2>
            </ul>
            
          </div>
        </div>
      </div>
           </section>
        </div>
    )
}

export default Home

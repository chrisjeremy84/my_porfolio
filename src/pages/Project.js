import React, {useState} from 'react'
import ProjectInfo from '../Data/ProjectInfo'
import { FiArrowDown} from "react-icons/fi"

function Project() {


    //Create Card layout to be used with project data's.
    //Return Data
    const [show, setShow] = useState(false)
  
    
    const projects = ProjectInfo.map(project =>{
       
        return(
            
        <div className=" p-7 bg-gray-500 border-r-4 hover:border-blue-700 border-blue-500 rounded-3xl flex flex-col justify-center h-auto w-auto space-y-3 md:space-y-5">
            <button onClick={()=>{setShow(!show)}} className="text-white font-semibold">{project.project}</button>
            <br/>
           
           
           
           
           {/*  TO DO
                Passing the current project ID to select the project to display.
           */}
           
           {show && 
            
            <div>
            <p className="flex justify-center font-medium p-5 md:m-16"
            >{project.description}</p>
            <h2 className="bg-yellow-50 p-2 text-xl font-semibold flex rounded-full  w-auto justify-center" >realease Date</h2>
            
            <h2 className="bg-yellow-50 p-2 text-xl font-semibold  mt-3 flex rounded-full justify-center">{project.realeaseDate}</h2>
            <a className="bg-black hover:bg-gray-400 rounded-full p-3 block mt-3 align-center text-xl font-semibold text-white" href={project.gitLink}>Github</a>   
        </div>}
        

          




        {/*Toggle*/}
        
        </div>

            //Succesfully rendered the list
                                        //Now you have to tune the list up
                                        //Add event listerns
                                        //and passin data according to the click
                                        //...14,01,2021...
        )
    })
    return (
        <div className=" p-16 md:p-48 flex flex-col space-y-2 min-w-screen" id='project'> 
            <h2 className="text-2xl font-medium flex justify-center mb-6">Projects</h2>
            {projects}
        </div>
    )
}

export default Project

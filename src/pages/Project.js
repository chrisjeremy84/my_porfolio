import React from 'react'
import ProjectInfo from '../components/ProjectInfo'

function Project() {
    const projects = ProjectInfo.map(project =>{
        return(
            
        <li>
            <div className="flex justify-center antialiased pt-16">
                {/*TO FIGURE OUT*/}
                {/*GRIDING AND LAYOUTS*/}
                 <div className="rounded-3xl shadow-2xl h-48 w-96 bg-gradient-to-r from-blue-500 to-blue-700">
                        <h1 className="flex justify-center text-white font-semibold ">{project.project}</h1>
                        <div className="flex justify-end pt-8 text-white font-medium">
                            <p>{project.description}</p>
                        </div>
                </div>
            </div>
           
        </li> 

            //Succesfully rendered the list
                                        //Now you have to tune the list up
                                        //Add event listerns
                                        //and passin data according to the click
                                        //...14,01,2021...
        )
    })
    return (
        <div > 
            <ul className ="space-y-4">
                {projects}
            </ul>
        </div>
    )
}

export default Project

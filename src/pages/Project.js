import React from 'react'
import ProjectInfo from '../components/ProjectInfo'

function Project() {
    const projects = ProjectInfo.map(project =>{
        return(
            
        <li>
            <div>
                {/*TO FIGURE OUT*/}
                {/*GRIDING AND LAYOUTS*/}
                 <div className="box-border border-opacity-10 h-28 md:w-auto p-16 m-8 border-2 rounded-full ...">
                    <div>
                        {project.project}
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
        <div> 
            <ul>
                {projects}
            </ul>
        </div>
    )
}

export default Project

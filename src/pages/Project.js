import React, { Component } from 'react'
import ProjectInfo from '../components/ProjectInfo'

function Project() {
    const projects = ProjectInfo.map(project =>{
        return(
            <li>{project.project}</li> //Succesfully rendered the list
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

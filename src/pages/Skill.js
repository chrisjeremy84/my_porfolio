import {React, useState, useEffect} from 'react'
import SkillsInfo from '../Data/SkillsInfo'




function Skill() {
    //Instead of listing div through array loop, using List
    //
    
    const DisplaySkill = SkillsInfo.map(Skill => {
        var Toolslist = Skill.Tools.map(Tool => {return(<div className="">{Tool}</div>)})
        var Skillslist = Skill.skills.map(Skill => {return(<div className="">{Skill}</div>)})
        return(
        <ul className=" bg-gray-500  border-r-4 hover:border-blue-700 border-blue-500 rounded-2xl m-4">
            <h2 className="text-center p-4 text-xl font-semibold"> {Skill.SkillName}</h2>
            <div className=" p-5">
                <div className=" space-y-1">
                      {Skillslist}
                </div>
                
                </div>
        </ul>
    )})

    return (
       
            <div  className="flex justify-center p-2 min-w-screen min-h-screen" id='skill'> 
                

                <div className=" p-5">
                {/*HEADER*/}
                        
                <h2 
               className=" 
                justify-center text-3xl font-medium">Skill</h2>
                {/*CONTENT*/}
                
                <div className="justify-center ">
                {DisplaySkill}
                </div>

                </div>
                
            
        </div>
        

      
    )};

export default Skill


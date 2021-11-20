import {React} from 'react'
import SkillsInfo from '../Data/SkillsInfo'




function Skill() {
    //Instead of listing div through array loop, using List
    //
    const DisplaySkill = SkillsInfo.map(Skill => {
        var Toolslist = Skill.Tools.map(Tool => {return(<div className="">{Tool}</div>)})
        var Skillslist = Skill.skills.map(Skill => {return(<div className="">{Skill}</div>)})
        return(
        <ul className=" bg-gradient-to-r from-blue-600 
        to-blue-400 border-r-4 hover:border-blue-700 border-blue-500 rounded-2xl m-4">
            <h2 className="text-center p-4 text-xl text-white font-semibold"> {Skill.SkillName}</h2>
            <div className=" p-8 space-y-3">
                <div className="font-medium space-y-1">
                    <h2 className="text-gray-300 text-xl">Skills</h2>
                      {Skillslist}
                </div>
                <div className="font-medium space-y-1">
                <h2 className="text-gray-300 text-xl">Tools & Frameworks</h2>
                      {Toolslist}
                </div>
                
                </div>
        </ul>
    )})

    return (
       
            <div  className=" md:pl-48 md:pr-20 min-w-screen min-h-screen" id='skill'> 
                
                <h2 
               className=" flex justify-center
                 text-3xl md:text-4xl text-gray-300 font-semibold">Skill</h2>

                {/*CONTENT*/}
                <div className="flex flex-col md:justify-center">
                {DisplaySkill}
                
                </div>
        </div>
        

      
    )};

export default Skill


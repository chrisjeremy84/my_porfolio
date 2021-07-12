import {React} from 'react'
import SkillsInfo from '../components/SkillsInfo'

function Skill() {
    const Skills = SkillsInfo.map(Skill=>{
        return(
            <div className="h-80 w-56 bg-red-600 rounded-3xl">
                    <ul>
                <li>
                    <div className="w-full h-64 pt-3 object-cover" style={{ backgroundImage : `url(${Skill.image})`}}>
                     <img className="w-full h-64 pt-3 object-cover object-left" src={Skill.image} alt={Skill.SkillName}/>
                    </div>
                    <div className="flex justify-center text-white font-semibold">
                        {Skill.SkillName}
                    </div>
                </li>
            </ul>
                </div>
    ) 
})
    return (
     
            <ul className="flex flex-row pt-44 pl-36 space-x-5">
                {Skills}
        </ul>
    )
}

export default Skill


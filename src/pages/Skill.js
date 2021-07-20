import {React, useState, useEffect} from 'react'
import SkillsInfo from '../Data/SkillsInfo'
import Modal from 'react-modal'



function Skill() {
    

    //using React-Modal package to open the modal
    //{modal, setModal} is to check if the modal is open or not
    //{modalSkillsName, modalToolsName, modalSkillsDesc, modalImg} is to pass data to the modal
    //clickhandler is to close the modal and get data from listed contents
    const [modal, setModal] = useState(false);
    const [modalSkillsName, setModalSkillsName] = useState("");
    const [modalToolsName, setModalToolsName] = useState("");
    const [modalSkillsDesc, setModalSkillsDesc] = useState("");
    const [modalImg, setImg] = useState("");
    const clickHandler = (Data) => {
        
        console.log(Data.SkillName);
        setImg(Data.image)
        setModalSkillsName(Data.SkillName);
        setModalToolsName(Data.Tools)
        setModalSkillsDesc(Data.description);
        
    }
    const Skills = SkillsInfo.map(Skill=>{
        return(
            <div onClick={() => {setModal(true); clickHandler(Skill);}}  
                    className="h-80 w-56 bg-gradient-to-r from-blue-800 to-blue-600 rounded-3xl cursor-pointer">
                    <ul className ="flex flex-col">
                        <li>
                            <div className="w-full h-64 pt-3 object-cover rounded-3xl" style={{ backgroundImage : `url(${Skill.image})`}}>
                            <img className="w-full h-64 pt-3 object-cover object-left" src={Skill.image} alt={Skill.SkillName}/>
                            </div>

                            <div className="text-white p-3 font-semibold">
                                {Skill.SkillName}
                            </div>
                        </li>
                    </ul>
            
                </div>
    )
    
  
})
    return (
       
            <div  className="flex flex-col md:flex-row pl-20 space-y-4 md:space-y-0 pb-24 md:pl-36 pr-14 pt-36 md:space-x-4">
                
                {Skills}

                <Modal 
                            style={{
                                overlay : {
                                    position: "absolute",
                                    top: "20px",
                                    left: "150px",
                                    right: "150px",
                                    bottom: "20px",
                                    background: 'none'
                                    },
                                content :{
                                    background: 'rgba(3, 68, 171, 1)',
                                    color: 'white',
                                    borderRadius: '20px',
                                    border: "none",
                                    boxShadow: "12px 5px 12px 12px rgba(0, 0, 0, .2)"
                                    }
                                    }}

                            isOpen={modal}
                            onRequestClose={() => setModal(false)}>
                            <div className="flex flex-col space-y-3">
                            <img className=" h-80 w-2/4 rounded-3xl" src={modalImg} alt={modalSkillsName}/>
                            
                            <h1 className=" text-6xl">Skill: {modalSkillsName}</h1>
                            
                            <div className="absolute right-2 top-2">
                            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => {setModal(false)}}>close</button>
                            </div>
                            <div className="">
                               <p className="relative" >{modalSkillsDesc}</p> 
                            </div>
                            <h2>{modalToolsName}</h2>
                            </div>
                        </Modal>
        </div>
        

      
    )};

export default Skill


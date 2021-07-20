import React, {useState} from 'react'
import ProjectInfo from '../Data/ProjectInfo'
import Modal from 'react-modal'


function Project() {


    //clickhandler to check for models
    //modals useState to pass data to the modal
    const [modal, setModal] = useState(false);
    const [modalProjectName, setModalProjectName] = useState("");
    const [modalToolsName, setModalToolsName] = useState("");
    const [modalProjectDesc, setModalProjectDesc] = useState("");
    
    const clickHandler = (Data) => {
        
        
        setModalProjectName(Data.project);
        setModalToolsName(Data.Tools)
        setModalProjectDesc(Data.description);
        
    }
    const projects = ProjectInfo.map(project =>{
        return(
            
        <li>
            <div onClick={() => {setModal(true); clickHandler(project);}} 
            className="flex justify-center antialiased">
                {/*TO FIGURE OUT*/}
                {/*GRIDING AND LAYOUTS*/}
                 <div className="rounded-3xl shadow-2xl h-28 md:h-48 w-96 bg-gradient-to-r from-blue-500 to-blue-700">
                        <h1 className="flex justify-center text-white font-semibold ">{project.project}</h1>
                        <div className="flex justify-center p-4 text-white font-medium">
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
            <ul className ="w-auto pt-8 pb-14 space-y-3 md:space-y-6">
                {projects}
            </ul>

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
                                    boxShadow: "12px 5px 12px 12px rgba(0, 0, 0, .2)",
                                    position: "fixed",
                                    height: "500px",
                                    left: "250px",
                                    width: "800px"
                                    }
                                    }}

                            isOpen={modal}
                            onRequestClose={() => setModal(false)}>
                            <div className="flex flex-col space-y-3">
                            <h1 className=" text-6xl">Project: {modalProjectName}</h1>
                            
                            <div className="absolute right-2 top-2">
                            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => {setModal(false)}}>close</button>
                            </div>
                            <div className="">
                               <p className="relative" >{modalProjectDesc}</p> 
                            </div>
                            <h2>{modalToolsName}</h2>
                            </div>
                        </Modal>
        </div>
    )
}

export default Project

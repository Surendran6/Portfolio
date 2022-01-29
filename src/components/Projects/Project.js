import React,{useState} from 'react'
import './Project.css'
import * as SiIcons from "react-icons/si";
const Project = ({img,title,desc,backend, frontend, website}) => {
    const [show,setshow] = useState(false);
    return (
        <div className="project_section">
            {/* <div className="project" onMouseEnter={()=>setshow(true)} onMouseLeave={()=>setshow(false)}>
                {
                    show?(
                        <div className="project_content">
                           <h4>{title}</h4>
                           <p>{desc}</p>
                           <p>{notes}</p>
                        </div>
                    ):(<>
                    <img src={img} alt=""/>
                    <h4>{title}</h4>
                    </>)
                }
                
            </div> */}
            <div className="project">
                <div className='project_image'>
                   <img src={img} alt=""/>
                </div>
                <div className="project_content">
                    <h4 className='project_header'>{title}</h4>
                    <p className='project_desc'>{desc}</p>
                </div>
                <div className='tech_used'>
                                <div className='tech-icons'>
                                <i class="fab fa-react react"></i> &nbsp;
                                <i class="fab fa-node node"></i> &nbsp;
                                <SiIcons.SiMongodb className='mongodb' /> &nbsp;
                                </div>
                               
                                <p className='codeLinks text-center pt-3'>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href={frontend}>Frontend <i class="fab fa-github"></i></a>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href={backend}>Backend <i class="fab fa-github"></i></a>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href={website}>Website <i class="fad fa-link"></i></a>
                                </p>
                            </div>    
            </div>
        </div>
    )
}

export default Project

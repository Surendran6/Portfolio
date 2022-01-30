import React from 'react'
import { Element } from 'react-scroll'
import Project from '../Projects/Project'
import './ProjectContanter.css';
import { Zoom } from "react-awesome-reveal";
import forgotPassword from '../../assests/forgotPassword.png';
import shortlyScreen from '../../assests/shortlyScreen.png';
import invoice from '../../assests/Invoice.png';
import mentoPortal from '../../assests/mentoPortal.png';

const ProjectContainer = () => {
    const projects=[
       
        {
            img: invoice,
            title:"Invoice Application",
            desc:"An invoice, bill or tab is a commercial document issued by seller to a buyer.Implemented this application with complete authentication system along with varoius roles(Admin, Manager, Employee, Client)",
            backend:"https://github.com/Surendran6/Invoice_backend",
            frontend: "https://github.com/Surendran6/Invoice_frontend",
            website: "https://invoicerocket-frontend.herokuapp.com/InvoiceRocket/main",
        },
        {
            img: shortlyScreen,
            title:"Url Shortener",
            desc:"URL Shortener application where only logged in users can shorten URL and have access to the dashboard. Implemented this application with complete authentication system  with account verification via email",
            backend:"https://github.com/Surendran6/URL_Shortener_Backend",
            frontend: "https://github.com/Surendran6/URL_Shortener_Frontend",
            website: "https://url-shortener-frontend1.herokuapp.com/Shortly/homepage",
        },
        {
            img: mentoPortal,
            title:"Zen Portal",
            desc:"A simple software training center website where we can add the students, assign Mentors to students, and change mentor to students.",
            backend:"https://github.com/Surendran6/Zenclass-backend",
            frontend: "https://github.com/Surendran6/Zen_Portal_Frontend",
            website: "https://musing-turing-c0d1b0.netlify.app/",
        },
        {
            img: forgotPassword,
            title:"Forgot Password",
            desc:"A Very Simple layout for Register, Login and Forgot Password operations using React JS, Node JS and Mongo DB.",
            backend:"https://github.com/Surendran6/Password-reset-backend",
            frontend: "https://github.com/Surendran6/password-reset-frontend1",
            website: "https://password-reset-frontend.herokuapp.com/MERN-LoginSystem/login",
        },
    ]
    return (
       
            <Element name="projects" className='projectContainer'>
               <h1 className='title_project'>Projects</h1>
                <p>Here are some projects which i done for making lives of people easy</p>
                <div className="projectContainer_projects">
                 { 
                projects.map((project,index)=>{
                     return(
                         <Zoom>
                             <Project key={index} img={project.img} title={project.title}
                             backend ={project.backend} frontend = { project.frontend } website = { project.website }
                            desc={project.desc}/>
                         </Zoom>
                        
                     )
                })
                 }                   
                </div> 
                     
            </Element>
        
    )
}

export default ProjectContainer

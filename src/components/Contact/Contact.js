import React from 'react'
import { Element } from 'react-scroll'
import {IconButton} from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './contact.css'
const Contact = () => {
    return (
     <Element className="contact" name="contact">
         <h1>Contact</h1>
         <div className="contact_container">
             <p>
                 Email:<span>surendran@gmail.com</span>
             </p>
             <p>
                 Github username:<span>surendrangit</span>
             </p>
             <div className="contact_icons">
                 <a href="www.google.com" alt="g">
                     <IconButton>
                        <LinkedInIcon/>
                     </IconButton>
                 </a>
                 <a href="www.google.com" alt="g">
                     <IconButton>
                        <GitHubIcon/>
                     </IconButton>
                 </a>
             </div>    
         </div>

     </Element>
    )
}

export default Contact

import React from 'react'
import { Element } from 'react-scroll'
import {IconButton} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import './contact.css'
const Contact = () => {
    return (
     <Element className="contact" name="contact">
         <h1>Contact</h1>
         <div className="contact_container">
             <p className='email'>
                 Email: <span>surendransakthi96@gmail.com</span>
             </p>
             <p className='phone'>
                 Phone number: <span>9688705869</span>
             </p>
             <div className="contact_icons">
                 <a href="https://github.com/Surendran6"  target='_blank' alt="Surendran">
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

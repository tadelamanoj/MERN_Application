import React from "react";
import "./header.css";
import {Link} from 'react-router-dom'

function header() {
   
    return (
        <div className="header">
            <Link className="header_logo" to='/'>
                <span className="header_option1">{localStorage.getItem('user')}</span> 
            </Link>
            
            <div className="header_nav">
                <Link to='/details' ><div className="header_option1">About</div></Link>
                <Link to='/work'><div className="header_option1">Work</div></Link>
                <Link to='/contact'><div className="header_option1">Contact</div></Link>
            </div>
           
        </div>
    );
}

export default header;
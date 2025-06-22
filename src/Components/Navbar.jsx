import React from 'react'
import '../CSS/navbar.css'
import amaan from '../Images/amaank.jpeg'
import { ReactTyped } from "react-typed";

function Navbar(){
    return(
        <>
        <div className='nav-body'>
        <span><h1>Amaan's Portfolio</h1></span>
        <hr />
            <div className="cntr">
            <div className='pfp'><img src={amaan} alt="" /></div>
            <div className="title">
            <h2>Hi, I am Amaan Kazi a Computer Science Engineer Specialized in AI & ML</h2>
            <h3><ReactTyped strings={["Full Stack Developer | Machine Learning Specialist",]} typeSpeed={40} /></h3>
            </div>
            </div>
            <hr />
        </div>
        </>
    );
}

export default Navbar

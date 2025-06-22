import React from 'react'
import '../CSS/navbar.css'
import photo from '../Components/amn.jpg'

function Navbar(){
    return(
        <>
        <div className='nav-body'>
        <span><h1>Amaan's Portfolio</h1></span>
        <hr />
            <div className="cntr">
            <div className='pfp'><img src={photo} alt="" /></div>
            <div className="title">
            <h2>Hi, I am Amaan Kazi a Computer Science Engineer Specialized in AI & ML</h2>
            <h3>Full Stack Developer | Machine Learning Specialist</h3>
            </div>
            </div>
            <hr />
        </div>
        </>
    );
}

export default Navbar

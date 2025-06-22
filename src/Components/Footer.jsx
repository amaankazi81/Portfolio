import React from 'react'
import '../CSS/footer.css'
import map from '../Images/map.png'
import contact from '../Images/contact.png'
import gmail from '../Images/gmail.png'
import linkedin from '../Images/linkedin.png'
import github from '../Images/github.png'

function Footer(){
    return(
        <>
        <div className="footer">
            <h2>Contact</h2> <hr />
            <div className="f-content">
                <div className="address"><h4><img src={map} alt="" /> Mira Road (E), Thane, Maharashtra, India</h4></div>
                <div className="phone-mail"><img src={contact} alt="" /><h4> +91 9082488629</h4> 
                <img src={gmail} alt="" /><h4> amaankazi10225@gmail.com</h4>
                </div>
                <div className="likin-git"><img src={linkedin} alt="" /><h4> <a href="https://www.linkedin.com/in/amaan-kazi-087a9228b/">LinkedIn</a></h4>
                <img src={github} alt="" /><h4> <a href="https://github.com/amaankazi81">GitHub</a></h4>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer
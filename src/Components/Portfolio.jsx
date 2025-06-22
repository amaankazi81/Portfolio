// Portfolio.jsx
import React from 'react';
import { useState } from 'react';
import { ReactTyped } from "react-typed";
import '../CSS/portdash.css';
import Navbar from './Navbar';
import Footer from './Footer';
import python from '../Images/python.png'
import js from '../Images/js.png'
import java from '../Images/java.png'
import react from '../Images/react.png'
import node from'../Images/nodejs.png'
import express from '../Images/express.png'
import springboot from '../Images/springboot.png'
import sql from '../Images/mysql.png'
import mongo from '../Images/mongo.png'
import firebase from '../Images/firebase.png'
import git from '../Images/git.png'
import html from '../Images/html.png'
import css from '../Images/css.png'
import bts from '../Images/bts.png'
import figma from '../Images/figma.png'


function Portfolio() {

    const [noDisplay, setNoDisplay] = useState(true)
    const [aboutme, SetAboutme] = useState(false);
    const [skills, setSkills] = useState(false);
    const [experience, setExperience] = useState(false)
    const [projects, setProjects] = useState(false)
    const [achievements, setAchievements] = useState(false)

    const handleAboutmeClick = () => {
        SetAboutme(!aboutme);
        if (noDisplay) setNoDisplay(false)
        if (skills) setSkills(false);
        if (experience) setExperience (false)
        if (projects) setProjects(false)
        if (achievements) setAchievements(false)
    };

    const handleSkillsClick = () => {
        setSkills(!skills);
        if (noDisplay) setNoDisplay(false)
        if (aboutme) SetAboutme(false);
        if (experience) setExperience (false)
        if (projects) setProjects(false)
        if (achievements) setAchievements(false)
    }

    const handleExperienceClick = () => {
        setExperience(!experience);
        if (noDisplay) setNoDisplay(false)
        if (aboutme) SetAboutme(false);
        if (skills) setSkills (false)
        if (projects) setProjects(false)
        if (achievements) setAchievements(false)
    }

    const handleProjectsClick = () => {
        setProjects(!projects);
        if (noDisplay) setNoDisplay(false)
        if (aboutme) SetAboutme(false);
        if (skills) setSkills (false)
        if (experience) setExperience(false)
        if (achievements) setAchievements(false)
    }

    const handleAchievementsClick = () => {
        setAchievements(!achievements);
        if (noDisplay) setNoDisplay(false)
        if (aboutme) SetAboutme(false);
        if (skills) setSkills (false)
        if (experience) setExperience(false)
        if (projects) setProjects(false)
    }

    return (
        <>
        <Navbar/>
        <div className="portfolio-body">
        <div className="buttons">
            <button onClick={handleAboutmeClick}><h2>About Me</h2></button>
            <button onClick={handleSkillsClick}><h2>Skills</h2></button>
            <button onClick={handleExperienceClick}><h2>Experience</h2></button>
            <button onClick={handleProjectsClick}><h2>Projects</h2></button>
            <button onClick={handleAchievementsClick}><h2>Achievements</h2></button>
            
        </div>
        <div className="contents">

        {noDisplay && (
            <div className="noDisplay">
                <h2><ReactTyped strings={["Welcome to my Portfolio!!","Explore my Portfolio!!"]} typeSpeed={80} /></h2>
            </div>
        )}

        {aboutme && (
            <div className="aboutme">
                <h2>About Me</h2> <hr />
                    <p>
                    Hi! I'm <strong>Amaan Kazi</strong>, a passionate <strong>Computer Science Engineer</strong> from Mumbai, India.
                    I specialize in <strong>Full Stack Web Development</strong> and <strong>Machine Learning</strong>, with a strong foundation in AI and backend systems.
                    </p>
                    <p>
                    I’ve built and contributed to real-world projects like a <strong>Health Record Management System</strong> (published in IEEE Xplore), 
                    a <strong>Gym Management System</strong>, and an <strong>Action Recognition model using LSTM & MediaPipe</strong>. 
                    My stack includes React, Node.js, Firebase, MongoDB, Python, and TensorFlow.
                    </p>
                    <p>
                    During my engineering journey, I’ve completed internships, published research, and constantly pushed myself 
                    to solve real-world problems with technology. I’m now actively looking for opportunities as a 
                    <strong>Full Stack Developer</strong> or <strong>Machine Learning Specialist</strong> to bring value to dynamic teams.
                    </p>
                    <p>
                    When I'm not coding, I enjoy exploring tech trends, working on side projects, and helping others with their development journey. 
                    Let’s build something amazing together!
                    </p>  
                <h3>Education</h3> <hr />
                <h4>• Bachelor of Engineering in Computer Science (AI & ML) <br />
                M.H. Saboo Siddik College of Engineering | 2021 - 2025 | CGPA: 8.11/10</h4>
                <h4>• Higher Secondary Certificate (Class XII) <br />
                Royal College of Arts, Science and Commerce | 2019 - 2021 | Percentage: 74.6%</h4>
            </div>
        )}

        {skills && (
            <div className="skills">
                <div className="hed"><h2>Skills</h2> </div> <hr />
                <div className="sk-img">
                <div className="box"><img src={python} alt="" /></div>
                <div className="box"><img src={js} alt="" /></div>
                <div className="box"><img src={java} alt="" /></div>
                <div className="box"><img src={react} alt="" /></div>
                <div className="box"><img src={node} alt="" /></div>
                <div className="box"><img src={express} alt="" /></div>
                <div className="box"><img src={springboot} alt="" /></div>
                <div className="box"><img src={sql} alt="" /></div>
                <div className="box"><img src={mongo} alt="" /></div>
                <div className="box"><img src={firebase} alt="" /></div>
                <div className="box"><img src={git} alt="" /></div>
                <div className="box"><img src={html} alt="" /></div>
                <div className="box"><img src={css} alt="" /></div>
                <div className="box"><img src={bts} alt="" /></div>
                <div className="box"><img src={figma} alt="" /></div>
                </div>
            </div>
        )}

        {experience && (
            <div className="experience">
                <h2>Experience</h2> <hr />
                <strong>Full Stack Web Developer Intern, Sep 2024 - Oct 2024</strong> <br /> <br />
                <strong>Unified Mentor</strong> 
                <p>• Developed and optimized projects including a Gym Management System and a Real-time Chat
                Application. 
                </p>
                <p>
                • Enhanced system functionalities to improve user experience and overall performance.
                </p> <br />

                <strong>Machine Learning Intern, Sep 2023 - Oct 2023</strong> <br /> <br />
                <strong>Bharat Intern</strong> 
                <p>• Intern at Bharat Intern gained knowledge and experience in Machine Learning Domain.
                </p>
                <p>
                • Developed Projects Like House Price Prediction and Iris Flower Classification .
                </p>
                
            </div>
        )}

        {projects && (
            <div className="projects">
                <h2>Projects</h2> <hr />
                <h3>🏥 Health Record Management System</h3>
                <p>
                A digital healthcare platform that securely maps patient records to their Aadhaar numbers using Firebase and a custom encryption algorithm. 
                The system includes an Android app for patients and a web dashboard for hospital admins, featuring OTP login, record visualization, 
                disease trend analysis, and hospital recommendations.
                </p>
                <p><strong>Tech Stack:</strong> Java (Android), React (Website), HTML, CSS, JavaScript, Node.js, Express, Firebase (Firestore, Authentication)</p>
                <a href="https://github.com/amaankazi81/Healthcare-Management-System" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                🔗 View Project on GitHub
                </a> 
                 
                 <a 
                    href="https://ieeexplore.ieee.org/document/10882381" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                     🔗 View Publication on IEEE Xplore
                    </a> <hr />

                <h3>🏋️ Gym Management System</h3>
                <p>
                A full-stack web application for gym owners to manage members, send fee reminders, assign diet plans, and download member records as CSV. 
                Members can view bills, receive notifications, and mark them as read. Includes admin and member dashboards.
                </p>
                <p><strong>Tech Stack:</strong> React, Node.js, Express, Firebase Firestore, Firebase Auth</p>
                <a href="https://github.com/amaankazi81/GYM-Management-System-Website" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                🔗 View Project on GitHub
                </a> <hr />

                <h3>🏃‍♂️ Action Recognition using LSTM & MediaPipe</h3>
                <p>
                A machine learning model that detects and classifies human actions like Taichi, Jumping Jacks, and Pushups in real-time. 
                Utilizes MediaPipe for landmark extraction and an LSTM model for temporal sequence prediction.
                </p>
                <p><strong>Tech Stack:</strong> Python, TensorFlow, MediaPipe, Google Colab</p>
                <a href="https://github.com/amaankazi81/Action-Recognition-using-MediaPipe-Landmarks-and-LSTM" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                🔗 View Project on GitHub
                </a> <hr />

                <h3>🛒 Shopping Mall Management System</h3>
                <p>This project is a Shopping Mall Management System built using the Spring Boot framework. It is designed to manage various operations of a shopping mall, including Details of Shops , Shop Owner, Customers, Order of Customers, Items, Mall Admin and Employee</p>
                <p><strong>Tech Stack:</strong> Java, Spring Boot, MySQL, Postman </p> 
                <a href="https://github.com/amaankazi81/Shopping-Mall-Management-System" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                🔗 View Project on GitHub
                </a> <hr />

                <h3>📝 Task Manager App</h3>
                <p>
                    A full-stack Task Management application that enables users to securely log in and manage daily tasks. 
                    Users can create, view, mark as complete, and delete tasks. Built with a clean and responsive design for both desktop and mobile users. User Authentication with JWT, CRUD Operations for Tasks, Fully Responsive UI, Persistent session handling via secure routes.
                </p>
                <p><strong>Tech Stack:</strong> React, React Router, Context API, Modern CSS (Flexbox), Node.js, Express.js, JWT Auth, MongoDB.</p>  
                <a href="https://github.com/amaankazi81/Task-Manager-App" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    🔗 View Project on GitHub
                </a>

            </div>
        )}

        {achievements && (
            <div className="achievements">
                <h2>Achievements</h2> <hr />
                    <h3>📄 IEEE Research Publication</h3>
                    <p>
                    I co-authored and published a research paper titled <strong>"Enhancing Healthcare with a Hybrid Mobile and Web-Based Health Record Management System"</strong> 
                    in the prestigious <strong>IEEE Xplore Digital Library</strong>. 
                    The paper presents a secure and scalable digital health solution leveraging Aadhaar verification, Firebase, and custom encryption algorithms.
                    </p>
                    <p>
                    This publication was part of my major project at <strong>M.H. Saboo Siddik College of Engineering</strong>, completed alongside my teammates <em>Suzaan Khan, Ali Jafri, and Zainab Shirazi</em>, under the mentorship of <em>Arshi Khan</em> and project coordinator <em>Tarannum Shaikh</em>.
                    </p>
                    <a 
                    href="https://ieeexplore.ieee.org/document/10882381" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    🔗 View Publication on IEEE Xplore
                    </a>
            </div>
        )}

        </div>
        </div>

        <Footer/>

        </>
    );
}

export default Portfolio;

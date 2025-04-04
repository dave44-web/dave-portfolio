import React from 'react'
import logo from '../assets/dave-logo-white.png'
import { IoMdMoon } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { IoServer } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { IoIosGitBranch } from "react-icons/io";
import { VscVscodeInsiders } from "react-icons/vsc";
import { RiVercelFill } from "react-icons/ri";
import { SiNetlify } from "react-icons/si";
import { IoSend } from "react-icons/io5";
import { SiRender } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa6";
import avater from '../assets/avater.png'
import project1 from '../assets/project1-pc.jfif'
import project2 from '../assets/project2-pc.jfif'
import project3 from '../assets/project3-pc.png'
import project4 from '../assets/project4-pc.jfif.png'
import project5 from '../assets/project5-pc.png'
import resume from '../assets/my-resume.pdf'

const Home = () => {

    function openSidebar(){
        const menuIcon = document.querySelector('.menu-icon p');
        const sideMenu = document.querySelector('.side-menu');

        menuIcon.addEventListener('click', () => {
            sideMenu.getAttribute('data-visible');
            sideMenu.setAttribute('data-visible', true);
        })
    }
    
    function closeSidebar(){
        const closeIcon = document.querySelector('.close-icon');
        const sideMenu = document.querySelector('.side-menu');

        closeIcon.addEventListener('click', () => {
            sideMenu.getAttribute('data-visible');
            sideMenu.setAttribute('data-visible', false);
        })
    }

    function onDarkMode() {
        const home = document.querySelector('.home');
        home.classList.toggle('dark-mode')
    }

  return (
    <div className='home'>

    <div className="navbar">
        <div className="logo">
            <div className="logo-img">
                <img src={logo} alt="" />
            </div>
        </div>
        <div className="nav-links">
            <a href="#section1">Home</a>
            <a href="#projects">Project</a>
            <a href="#services">Services</a>
            <a href="#contact">Let's Connect</a>
            <div className="icons" onClick={() => onDarkMode()}>
                <p className='moon'><IoMdMoon /></p>
                <p className='sun'><IoIosSunny /></p>
            </div>
        </div>
        
        <div className="menu-icon">
            <p onClick={()=>openSidebar()}><RiMenu3Fill /></p>
        </div>

        <div className="side-menu" data-visible="false">
            <div className="side-links">
            <p className='close-icon' onClick={() => closeSidebar()}><IoCloseSharp /></p>
            <a href="" onClick={() => closeSidebar()}>Home</a>
            <a href="#projects" onClick={() => closeSidebar()}>Project</a>
            <a href="#services" onClick={() => closeSidebar()}>Services</a>
            <a href="#contact" onClick={() => closeSidebar()}>Let's Connect</a>
            <div className="icons" onClick={() => onDarkMode()}>
                <p><IoMdMoon /></p>
                <p><IoIosSunny /></p>
            </div>
            </div>
        </div>
    </div>

    <div className="section1" id='section1'>
        <div className="hero">
            <div className="hero-text">
                <h1>Hey There 👋 I'm <span>David</span></h1>
                <p>A <span>MERN-STACK</span> Developer, specialized in turning concepts into reality. With Expertise in Web development, I create websites that help boost your business.</p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/akindele-david-b963ab30a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a>
                    <a href="https://www.tiktok.com/@dave_web?_t=ZN-8uVicbPZ8J4&_r=1"><FaTiktok /></a>
                    <a href="https://x.com/Fresh_yung_Guy?t=ZDUFzEt7Wbc2xV2NBD_ycw&s=09"><FaXTwitter /></a>
                    <a href="https://wa.link/7uuih2"><FaWhatsapp /></a>
                    <a href="https://www.instagram.com/dave_webs22?igsh=MWx0OGZnYXEwOHhtNQ=="><FaInstagram /></a>
                </div>
                <a href={resume} className='resume'>Download Resume <FaDownload /></a>
            </div>
            <div className="hero-image">
                <img src={avater} alt="" />
            </div>
        </div>
    </div>

    <div className="section2" id='projects'>
        <h2>Projects</h2>
        <div className="projects">
            <div className="project-list auto-show">
                <img src={project5} alt="" />
                <p>ChatDAVE an AI built to help student with studies and assignment. Gemini API integration, mongoDB for database and ReactJs for framework</p>
                <a href="https://chatdave.netlify.app/">Demo <FaLink /></a>
            </div>
            <div className="project-list auto-show">
                <img src={project4} alt="" />
                <p>A book-store website, learning how to map contents froma database, probably scale up the project in the future</p>
                <a href="https://dave-webs-bookstore.netlify.app">Demo <FaLink /></a>
            </div>
            <div className="project-list auto-show">
                <img src={project3} alt="" />
                <p>Landing Page website for a solar company with working contact form for easy reach out.</p>
                <a href="https://first-sun-solar.netlify.app/">Demo <FaLink /></a>
            </div>
            <div className="project-list auto-show">
                <img src={project1} alt="" />
                <p>A practice portfolio website using basic html, css and javascript</p>
                <a href="https://carpenter-port.netlify.app">Demo <FaLink /></a>
            </div>
            <div className="project-list auto-show">
                <img src={project2} alt="" />
                <p>A TicTacToe game, showing Expertise in Javascript</p>
                <a href="https://tic-tac-toe-dave.netlify.app/">Demo <FaLink /></a>
            </div>
            
            
        </div>
    </div>

    <div className="section3" id='services'>
        <h3>Services</h3>
        <div className="services">
            <div className="service-list auto-show">
                <p><MdComputer /></p>
                <p>Front-End Development</p>
            </div>
            <div className="service-list auto-show">
                <p><IoServer /></p>
                <p>Back-End Development</p>
            </div>
        </div>
    </div>

    <div className="section4">
        <h3>Development / Skills</h3>
        <div className="development">
            <div className="dev-list">
                <p><FaReact /></p>
                <p>React Js</p>
            </div>
            <div className="dev-list">
                <p><FaHtml5 /></p>
                <p>HTML</p>
            </div>
            <div className="dev-list">
                <p><IoLogoCss3 /></p>
                <p>CSS</p>
            </div>
            <div className="dev-list">
                <p><IoLogoJavascript /></p>
                <p>JavaScript</p>
            </div>
            <div className="dev-list">
                <p><SiMongodb /></p>
                <p>MongoDB</p>
            </div>
            <div className="dev-list">
                <p><SiExpress /></p>
                <p>Express Js</p>
            </div>
            <div className="dev-list">
                <p><FaNodeJs /></p>
                <p>Node js</p>
            </div>
        </div>
    </div>

    <div className="section5">
        <h3>Tools</h3>
        <div className="tools">
            <div className="tool-list">
                <p><VscVscodeInsiders /></p>
                <p>VS code</p>
            </div>
            <div className="tool-list">
                <p><IoLogoGithub /></p>
                <p>Github</p>
            </div>
            <div className="tool-list">
                <p><IoIosGitBranch /></p>
                <p>Git</p>
            </div>
            <div className="tool-list">
                <p><SiRender /></p>
                <p>Render</p>
            </div>
            <div className="tool-list">
                <p><SiNetlify /></p>
                <p>Netlify</p>
            </div>
            <div className="tool-list">
                <p><RiVercelFill /></p>
                <p>Vercel</p>
            </div>
        </div>
    </div>

    <div className="section6">
        <h3>Contact</h3>
        <div className="contact">
            <p><span>E-mail: </span>david19dec06@gmail.com</p>
            <p><span>Phone No: </span>+2347044318821</p>
        </div>
    </div>

    <div className="section7" id='contact'>
        <h3>Contact Form</h3>

        <form action="https://formspree.io/f/xnnpaoly" method="POST">
            <input type="text" name='Name' placeholder='Name' required />
            <input type="email" name='Email' placeholder='E-mail' required />
            <input type="number" name='Number' placeholder='Phone Number' />
            <textarea name='Text' placeholder='Message...' required />
            <button>Send <IoSend /></button>
        </form>
    </div>

    <p className='copyright'><FaRegCopyright /> 2025 Akindele David. All Rights Reserverd</p>

    </div>
  )
}

export default Home
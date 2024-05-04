import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';
import { IoHome } from "react-icons/io5";
import { IoMdChatbubbles } from "react-icons/io";
import { FaAddressCard } from "react-icons/fa";
import { BiSolidDetail } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav>
        <div className='navbar'>
            <div>
                <Link 
                    to="home" 
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={1000} >HOME <p><IoHome /></p></Link>
            </div>

            <div>
                <Link
                    to="about" 
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={1000}  >ABOUT <p><FaAddressCard /></p></Link>
            </div>

            <div>
                <Link 
                    to="project" 
                    spy={true} 
                    smooth={true} 
                    offset={5} 
                    duration={1000} >PROJECT <p><BiSolidDetail /></p></Link>
            </div>

            <div>
                <Link  
                    to="contact" 
                    spy={true} 
                    smooth={true} 
                    offset={120} 
                    duration={1000} >CONTACT <p><IoMdChatbubbles /></p></Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
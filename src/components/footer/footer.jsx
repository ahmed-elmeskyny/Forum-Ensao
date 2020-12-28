import React from "react";

//react-router-dom
import { NavLink } from "react-router-dom";

//styling 
import "./footer.scss";

//assets
import logo from "../../assets/logo/logoForum.png";

//react_icons
import {MdLocationOn} from "react-icons/md";
import {FiPhone} from "react-icons/fi";
import {FiMail} from "react-icons/fi";
import {FaFacebookF} from 'react-icons/fa';
import {FaLinkedinIn} from "react-icons/fa";


const Footer = () => {

    return (
        <>
        <div className="footer-container">
            <div className="footer-hero">
                <div className="logo-section">
                    <img alt="logo" src={logo} width="100px" height="100px"/>
                    <div className="logo-text">
                        <h3>Forum Ensao</h3>
                        <h4>entreprises</h4>
                        <h6>10éme édition</h6>
                    </div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, voluptatem harum uadipisicing elit. Corporis est porro at repellat magnam? Aut officiis quia voluptate unde nemo laboriosam dolore labore autem quae deserunt? Distinctio voluptatum nostrum a.    
                </p>
            </div>
            <div className="info-container">
                <div className="info">
                    <ul>
                        <li> <MdLocationOn style={{ color:"#17B27A",marginRight:"10px"}}></MdLocationOn> BP 669 Quartier Alquodss, Oujda 60000 </li>
                        <li> <FiPhone style={{ color:"#17B27A" ,marginRight:"10px"}} ></FiPhone> (+212) 698357894 </li>
                        <li> <FiMail style={{ color:"#17B27A" ,marginRight:"10px"}} ></FiMail> forumensao@gmail.com </li>
                    </ul>
                </div>
                <div className="contact">
                    <p>Contact Us</p>
                    <div className="contact-button">
                        <span>Pour plus d'information , n'hésitez pas de nous contacter</span>
                        <NavLink  exact to="/contact" className="link"> CONTACTEZ-NOUS !</NavLink>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
        <span> Copyright © 2020 | Forum Ensao Entreprises</span>
        <div className="social">
            <FaFacebookF className="icon"></FaFacebookF>
            <FaLinkedinIn className="icon"></FaLinkedinIn>
        </div>
    </div>
    </>
    )
}

export default Footer;
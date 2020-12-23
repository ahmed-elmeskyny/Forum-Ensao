import React from "react";

//styling
import "./header.scss";

//assets
import logo from "../../assets/logo/logoForum.png";

//react-icons
import {FaFacebookF} from 'react-icons/fa';
import {FaLinkedinIn} from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";
import { MdLocationOn} from "react-icons/md";
import {BiPhoneCall} from "react-icons/bi";
import {HiOutlineMailOpen} from "react-icons/hi";
 

 


const Header = () => {

    return (
        <div className="header-container">


            <div className="top-section">
                <div className="location-FAQ">
                    <div className="location">
                        <span><MdLocationOn style={{color:"#11B67A"}}></MdLocationOn> BP 669 Quartier Alquodss, Oujda 60000 </span>
                    </div>
                    <div className="faq">
                        <span>F.A.Q ?</span>
                    </div>
                </div>
                <div className="social-media">
                    <FaFacebookF className="icon"></FaFacebookF>
                    <FaLinkedinIn className="icon" ></FaLinkedinIn>
                    <FaInstagram className="icon" ></FaInstagram>
                </div>
            </div>


            <div className="hero-section">
                <div className="logo">
                    <img alt="logo" src={logo} width="80px" height="80px"/>
                    <div className="logo-text">
                        <h3>Forum Ensao</h3>
                        <h4>entreprises</h4>
                        <h6>10éme édition</h6>
                    </div>
                </div>
                <div className="contact-header">
                    <div className="telephone">
                        <BiPhoneCall className="phone-icon"></BiPhoneCall>
                        <div className="phone-text">
                           <p style={{ fontSize:"14px" , color:"#aaaaa4"}}>Nous contacter</p>
                           <p>(+212) 698357894</p>
                        </div>
                    </div>
                    <div className="email">
                        <HiOutlineMailOpen className="email-icon"></HiOutlineMailOpen>
                        <div className="email-text">
                            <p  style={{ fontSize:"14px" , color:"#aaaaa4"}} >nous emailer</p>
                            <p>forumensao@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
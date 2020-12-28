import React, { useState } from "react";

//styling
import "./mobile-menu.scss";

//react-router-dom 
import {NavLink } from "react-router-dom";

//react_icons
import {AiOutlineDown} from "react-icons/ai";
import {RiDeleteBackFill} from "react-icons/ri";

//redux
import {connect} from "react-redux";
import { toggle } from "./../../redux/mobile-reducer/mobile-action";



const MobileMenu = ( { isToggle , toggle}) => { 

    const [open , setOpen] = useState(false);
    const  [open1 , setOpen1] = useState(false);
    console.log(isToggle)

        return  isToggle ? (<div className="mobile-menu-container">
            <div className="slide-menu ">
                <div className="close-slide" >
                   <RiDeleteBackFill onClick={() => toggle()}></RiDeleteBackFill>
                </div>
                <ul>
                    <li><NavLink exact to="/" className="link">ACCEUIL</NavLink></li>
                    <li><NavLink exact to="apropos"  className="link"> A PROPOS</NavLink></li>
                    <li onClick={()=> setOpen(!open)}>
                            NOS PARTENAIRE 
                            <AiOutlineDown style={{ marginLeft:"5px"}}></AiOutlineDown>
                        {open ? <div>
                            <ul className="dropdown-menu" >
                                <li><NavLink to="sponsors" className="sub-link">partenaire 1</NavLink></li>
                                <li><NavLink to="sponsors" className="sub-link">parteanaire 2</NavLink></li>
                                <li><NavLink to="sponsors" className="sub-link">partanaire 3</NavLink></li>
                            </ul>
                        </div> : null}
                    </li>
                    <li onClick={() => setOpen1(!open1)}>
                            NOS SPONSORS 
                            <AiOutlineDown style={{ marginLeft:"5px"}}></AiOutlineDown>
                        {open1 ? <div>
                            <ul className="dropdown-menu" >
                                <li><NavLink to="sponsors" className="sub-link">sponsor 1</NavLink></li>
                                <li><NavLink to="sponsors" className="sub-link">sponsor 2</NavLink></li>
                                <li><NavLink to="sponsors" className="sub-link">sponsor 3</NavLink></li>
                            </ul>
                        </div> : null }
                    </li>
                    <li><NavLink exact to="contact" className="link">CONTACTEZ-NOUS</NavLink></li>
                </ul>
            </div>
        </div>) : null 
     }

const mapStateToProps = (state) => ( {
    isToggle : state.toggle.isToggle,
})

const mapDispatchToProps = (dispatch) => ({
    toggle : ()=> dispatch(toggle())
})
export default connect(mapStateToProps,mapDispatchToProps)(MobileMenu);
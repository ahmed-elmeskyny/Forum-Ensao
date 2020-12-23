import React, { useState } from "react";

//styling
import "./menu.scss";

//react-router-dom
import {NavLink} from "react-router-dom";

//react-icons
import {AiOutlineDown} from "react-icons/ai";



const Menu = () => {

    const [ open , setopen] = useState(false);
    const [ open1 , setopen1] = useState(false);

    return (
        <div className="menu-container">
            <div className="menu">
                <ul>
                    <li><NavLink exact to="/" className="link">ACCEUIL</NavLink></li>
                    <li><NavLink exact to="apropos" className="link"> A PROPOS</NavLink></li>
                    <li className="dropdown" onMouseEnter={()=> setopen1(true)}>
                        <NavLink exact to="sponsors" className="link"> 
                            NOS PARTENAIRE 
                            <AiOutlineDown style={{ marginLeft:"5px"}}></AiOutlineDown>
                        </NavLink>
                       { open1 ? 
                        <div onMouseLeave={()=> setopen1(false)}>
                            <ul className="dropdown-menu" >
                                <li><NavLink to="sponsors" className="sub-link">partenaire 1</NavLink></li>
                                <li><NavLink to="sponsors" className="sub-link">parteanaire 2</NavLink></li>
                                <li><NavLink to="sponsors" className="sub-link">partanaire 3</NavLink></li>
                            </ul>
                        </div> : null }
                    </li>
                    <li className="dropdown" onMouseEnter={()=> setopen(true) } >
                        <NavLink exact to="partenaire" className="link">
                            NOS SPONSORS 
                            <AiOutlineDown style={{ marginLeft:"5px"}}></AiOutlineDown>
                        </NavLink>
                        { open ?
                        <div  onMouseLeave={()=> setopen(false)}>
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
        </div>
    )
}

export default Menu;
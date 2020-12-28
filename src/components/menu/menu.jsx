import React, { useEffect, useState } from "react";

//styling
import "./menu.scss";

//react-router-dom
import {NavLink} from "react-router-dom";

//react-icons
import {AiOutlineDown} from "react-icons/ai";
import {RiMenu2Fill} from "react-icons/ri";

//assets
import logo from "../../assets/logo/logoForum.png";

//redux
import { connect } from "react-redux";
import { toggle  } from "./../../redux/mobile-reducer/mobile-action";



const Menu = ({isNormal , toggle}) => {

    const [ open , setopen] = useState(false);
    const [ open1 , setopen1] = useState(false);
    const [scroll , setScroll] = useState(true);

    const handleScroll = ()=> {
        const offset=window.scrollY;
        if(offset > 300 ){
          setScroll(false);
        }
        else{
          setScroll(true);
        }
      }
    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
      })

    return (
    <>
        <div  className={ isNormal ? "menu-container"  : (scroll ? "menu-container" : "fixed-menu") }>
            <div className="menu">
                <ul> 
                    { scroll ? null : <li><img alt="logo" src={logo} width="60px" height="60px" /> </li>}
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
        <div className={ scroll ? "mobile-menu" : "fixed-mobile-menu"}>
            <RiMenu2Fill style={{marginTop:"10px"}} onClick={()=> toggle()}></RiMenu2Fill>
           { scroll ? null : <img alt="logo" src={logo} width="40px" height="40px" />}
        </div>
    </>
    )
}

const mapdispatchToProps = (dispatch) => ({

    toggle : () => dispatch(toggle())
})
export default connect(null,mapdispatchToProps)(Menu);
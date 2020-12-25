import React from 'react';

//styling 
import "./actualite.scss";

//assets
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";

//react-icons
import {AiFillCaretRight} from "react-icons/ai"


const Actualite = () => {

    return (
        <div className="actualite">
            <div className="event">
                <h3>EVENTS</h3> 
                <div className="event-text">
                    <ul>
                        <li>1-Lorem ipsum dolor sit to nihil didjisdj <span>Lorem ilit. Id, consecteturoribus ad nemo tenetur iste veritati</span></li>
                        <li>2-Lorem ipsum dolor sit amet c tenetur <span>Lorem ilit. ribus ad nemo tenetur iste veritati</span></li>
                        <li>3-Lorem ipsum dolor, sit atd dnj lqjdknd lksdlk lsk dkj . <span>Lorem ilit.  doloribus ad nemo tenetur iste veritati</span></li>
                    </ul>
                </div>
            </div> 
            <div className="blogs">
                <div className="blog">
                    <img alt="blog" src={image1} width="250px" height="150px"/>
                    <h1>Titre/Question</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem inventore rerum aliquam. Sed non nisi assumenda minus ducimus modi quas consequuntur odio ex laborum.
                      Ut corrupti nto ex! Omnis, aspernatur quas?</p>
                    <span>Lire La suite <AiFillCaretRight style={{paddingTop:"5px"}}></AiFillCaretRight></span>
                </div>
                <div className="blog">
                    <img alt="blog" src={image2} width="250px" height="150px" />
                    <h1>Titre/Question</h1>
                    <p>Lorem, iasi iure autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio beatae reiciendis deserunt tenetur, provident sapiente dolore hic
                      eos aspicabo ex! Omnis, aspernatur quas?</p>
                    <span>Lire La suite <AiFillCaretRight style={{paddingTop:"5px"}}></AiFillCaretRight> </span>
                </div>
                <div className="blog">
                    <img alt="blog" src={image3} width="250px" height="150px" />
                    <h1>Titre/Question</h1>
                    <p>Lorem, ipsum doutem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio beatae reiciendis deserunt tenetur, provident sapiente dolore hic
                      eos asperiores licabo ex! Omnis, aspernatur quas?</p>
                    <span>Lire La suite <AiFillCaretRight style={{paddingTop:"5px" }}></AiFillCaretRight></span>
                </div>
            </div>
        </div>
    )
}

export default Actualite;
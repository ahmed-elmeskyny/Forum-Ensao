import React from 'react';

//styling 
import "./actualite.scss";

//assets
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";


const Actualite = () => {

    return (
        <div className="actualite">
            <div className="event">
                <h4>EVENTS</h4> 
                <div className="event-text">
                    <ul>
                        <li>1-Lorem ipsum dolor sit to nihil aperiam necessitt dicta inventore accu</li>
                        <li>2-Lorem ipsum dolor sit amet consepellendus rerum eligendi deleniti maiores, sed aliquid tenetur, pariatur atque, voluptate esse quisquam!</li>
                        <li>3-Lorem ipsum dolor, sit atd. Alias sequi error, reprehenderit eveniet quidem optio in.</li>
                    </ul>
                </div>
            </div>
            <div className="blogs">
                <div className="blog">
                    <img alt="image-blog" src={image1} width="250px" height="150px"/>
                    <h1>Titre/Question</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem inventore rerum aliquam. Sed non nisi assumenda minus ducimus modi quas consequuntur odio ex laborum.
                      Ut corrupti nto ex! Omnis, aspernatur quas?</p>
                    <span>Lire La suite...</span>
                </div>
                <div className="blog">
                    <img alt="image-blog" src={image2} width="250px" height="150px" />
                    <h1>Titre/Question</h1>
                    <p>Lorem, iasi iure autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio beatae reiciendis deserunt tenetur, provident sapiente dolore hic
                      eos aspicabo ex! Omnis, aspernatur quas?</p>
                    <span>Lire La suite...</span>
                </div>
                <div className="blog">
                    <img alt="image-blog" src={image3} width="250px" height="150px" />
                    <h1>Titre/Question</h1>
                    <p>Lorem, ipsum doutem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio beatae reiciendis deserunt tenetur, provident sapiente dolore hic
                      eos asperiores licabo ex! Omnis, aspernatur quas?</p>
                    <span>Lire La suite...</span>
                </div>
            </div>
        </div>
    )
}

export default Actualite;
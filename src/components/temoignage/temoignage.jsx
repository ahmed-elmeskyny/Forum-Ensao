import React from "react";

//styling
import "./temoignage.scss";
import 'react-slideshow-image/dist/styles.css';

//slideshow
import {Slide} from "react-slideshow-image";

const properties = {
    arrows:false,
}

const Temoignage = () => {

    return (
    <div className="tem-container">
        <div className="container">
        <div className="tem-header">
            <h1>CE QUE LES ETUDIANTS  DISENT DE NOUS</h1>
            <p>FeedBack des étudiants</p>
        </div>
            <Slide {...properties}>   
               <div className="each-slide">
                   <p>Lorem ipsum d, iure molestias repudiandae commodi repellat asperiores facilis illum nisi dicta dignissimos! Nostrum repudiandae quis consequuntur culpa eius.</p>
                   <div className="img"></div>
               </div>
               <div className="each-slide">
                   <p>Lorem ipsum dolor sit ajjjjjjmkiykctq bmet, consectetur adipisicing elit. A, velit! Sunt tempore fugit, iure molestias repudiandae commodi repellat asperiores facilis illum nisi dicta dignissimos! Nostrum repudiandae quis consequuntur culpa eius.</p>
                   <div className="img"></div>
               </div>
               <div className="each-slide">
                   <p>Lorem empore fugit, iure molestias repudiandae commodi repellat asperiores facilis illum nisi dicta dignissimos! Nostrum repudiandae quis consequuntur culpa eius.</p>
                   <div className="img"></div>
               </div>
            </Slide>
        </div>
    </div>
    )
}

export default Temoignage;
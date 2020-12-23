import React from 'react';

//styling 
import './Aceuil.scss';

//components
import Slider from "../../components/slides/slider";
import Menu from "../../components/menu/menu";
import Actualite from "../../components/actualite/actualite"


const Acceuil = () => {

    return (
        <div className="acceuil-container">
            <Menu></Menu>
            <Slider></Slider>
            <Actualite></Actualite>
        </div>
    )
}

export default Acceuil;
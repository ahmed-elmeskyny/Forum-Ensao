import React from 'react';

//styling 
import './Aceuil.scss';

//components
import Slider from "../../components/slides/slider";
import Menu from "../../components/menu/menu";
import Actualite from "../../components/actualite/actualite";
import Temoignage from "../../components/temoignage/temoignage";

const Acceuil = () => {

    return (
        <div className="acceuil-container">
            <Menu></Menu>
            <Slider></Slider>
            <Actualite></Actualite>
            <Temoignage></Temoignage>
        </div>
    )
}

export default Acceuil;